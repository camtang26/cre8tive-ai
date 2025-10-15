/**
 * Frame Rate Profiling Module
 *
 * Measures FPS during GSAP scroll-triggered animations using RAF timing.
 * Based on research doc lines 396-426 (RAF timing approach).
 *
 * Based on:
 * - Brief § FR-3: Animation Frame Rate Profiling (lines 274-348)
 * - Research doc: RAF timing code (lines 396-426)
 */

import type { Browser, Page } from 'playwright';
import type { FrameRateMetrics, RouteConfig } from './types';
import { launchBrowserForLighthouse, createPage, navigateWithRetry } from './utils/browser-setup';

/**
 * Measure frame rate during scroll animations.
 *
 * Strategy:
 * 1. Navigate to page
 * 2. Inject RAF timing measurement code
 * 3. Trigger scroll animation (0 → 5000px over 5 seconds)
 * 4. Measure frames during scroll
 * 5. Calculate avgFPS, minFPS, droppedFrames
 *
 * @param url Full URL to test
 * @param routeConfig Route configuration
 * @returns Frame rate metrics
 */
export async function measureFrameRate(
  url: string,
  routeConfig: RouteConfig
): Promise<FrameRateMetrics> {
  let browser: Browser | null = null;

  try {
    // Step 1: Launch browser (NO debugging port - Frame Rate doesn't need CDP)
    browser = await launchBrowserForLighthouse({
      viewport: routeConfig.viewport,
      debugPort: undefined, // No debugging port needed for Frame Rate
      headless: true,
    });

    const page: Page = await createPage(browser, routeConfig.viewport);

    // Step 2: Navigate to page
    await navigateWithRetry(page, url, 3);

    // Step 3: Let page settle (animations idle)
    await page.waitForTimeout(2000);

    console.log('[Frame Rate] Starting FPS measurement during scroll animation...');

    // Step 4: Measure FPS during scroll (5-second window)
    // CRITICAL: Use template string to avoid bundler helper injection (__name issue)
    const frameMetrics = await page.evaluate(`
      (() => {
        return new Promise((resolve) => {
          const frames = [];
          const duration = 5000;
          const startTime = performance.now();
          let lastFrameTime = startTime;

          function recordFrame(currentTime) {
            const frameDelta = currentTime - lastFrameTime;
            frames.push(frameDelta);
            lastFrameTime = currentTime;

            if (currentTime - startTime < duration) {
              requestAnimationFrame(recordFrame);
            } else {
              // Calculate stats
              const avgFrameTime = frames.reduce((a, b) => a + b, 0) / frames.length;
              const avgFPS = 1000 / avgFrameTime;
              const maxFrameTime = Math.max(...frames);
              const minFPS = 1000 / maxFrameTime;
              // Dropped frame = visible jank (>33.33ms = <30fps), not microsecond variance
              const droppedFrames = frames.filter(f => f > 33.33).length;

              resolve({
                avgFPS: parseFloat(avgFPS.toFixed(2)),
                minFPS: parseFloat(minFPS.toFixed(2)),
                droppedFrames: droppedFrames,
                totalFrames: frames.length
              });
            }
          }

          // Start smooth scroll animation
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollDuration = 5000;
          const scrollStart = performance.now();

          function animateScroll(currentTime) {
            const elapsed = currentTime - scrollStart;
            const progress = Math.min(elapsed / scrollDuration, 1);
            const easeProgress = progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, scrollHeight * easeProgress);

            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          }

          // Start both animations
          requestAnimationFrame(recordFrame);
          requestAnimationFrame(animateScroll);
        });
      })()
    `) as {
      avgFPS: number;
      minFPS: number;
      droppedFrames: number;
      totalFrames: number;
    };

    // Step 5: Validate against thresholds
    const metrics: FrameRateMetrics = {
      avgFPS: frameMetrics.avgFPS,
      minFPS: frameMetrics.minFPS,
      droppedFrames: frameMetrics.droppedFrames,
      totalFrames: frameMetrics.totalFrames,
      passed:
        frameMetrics.avgFPS >= routeConfig.thresholds.frameRate.avgFPS * 0.9 && // 10% tolerance
        frameMetrics.minFPS >= routeConfig.thresholds.frameRate.minFPS * 0.9 &&
        frameMetrics.droppedFrames <= routeConfig.thresholds.frameRate.maxDroppedFrames,
    };

    console.log('[Frame Rate] Measurement complete:', {
      avgFPS: `${metrics.avgFPS} (target: ${routeConfig.thresholds.frameRate.avgFPS})`,
      minFPS: `${metrics.minFPS} (target: ${routeConfig.thresholds.frameRate.minFPS})`,
      droppedFrames: `${metrics.droppedFrames}/${metrics.totalFrames}`,
      passed: metrics.passed ? '✓' : '✗',
    });

    return metrics;
  } catch (error) {
    console.error('[Frame Rate] Measurement failed:', error);
    throw error;
  } finally {
    // CRITICAL: Resource cleanup (R6 mitigation)
    if (browser) {
      await browser.close();
      console.log('[Frame Rate] Browser closed');
      // Additional 1s delay for full resource cleanup (file descriptors, processes)
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

/**
 * Measure frame rate with retry logic (R2 flakiness mitigation).
 *
 * @param url Full URL to test
 * @param routeConfig Route configuration
 * @param maxAttempts Maximum retry attempts (default: 3)
 * @returns Frame rate metrics from successful run
 */
export async function measureFrameRateWithRetry(
  url: string,
  routeConfig: RouteConfig,
  maxAttempts: number = 3
): Promise<FrameRateMetrics> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`[Frame Rate] Attempt ${attempt}/${maxAttempts}...`);
      const metrics = await measureFrameRate(url, routeConfig);
      return metrics; // Success!
    } catch (error) {
      lastError = error as Error;
      console.error(`[Frame Rate] Attempt ${attempt}/${maxAttempts} failed:`, error);

      if (attempt < maxAttempts) {
        // Exponential backoff: 2s, 4s, 8s
        const backoffMs = Math.pow(2, attempt) * 1000;
        console.log(`[Frame Rate] Retrying in ${backoffMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, backoffMs));
      }
    }
  }

  // All attempts failed
  throw new Error(
    `Frame rate measurement failed after ${maxAttempts} attempts. Last error: ${lastError?.message}`
  );
}
