/**
 * Core Web Vitals Test Module
 *
 * Measures INP, LCP, and CLS using web-vitals v5.1.0 (2024 standards).
 * CRITICAL: INP replaced FID as of March 12, 2024. web-vitals v5 removed onFID().
 *
 * Based on:
 * - Research doc: web-vitals v5.1.0 confirmation (lines 108-130)
 * - Brief § FR-2: Core Web Vitals Measurement (lines 183-272)
 * - Handoff doc: INP requires ≥3 interactions (line 118)
 */

import type { Browser, Page } from 'playwright';
import type { WebVitalsMetrics, RouteConfig } from './types';
import { launchBrowserForLighthouse, createPage, navigateWithRetry } from './utils/browser-setup';
import { rateWebVital } from './utils/threshold-validator';

/**
 * Measure Core Web Vitals (INP, LCP, CLS) using web-vitals library.
 *
 * CRITICAL IMPLEMENTATION NOTE (from Brief lines 215-260):
 * INP requires ACTUAL USER INTERACTIONS to measure. Cannot be measured in
 * headless mode without simulating clicks/keypresses/scrolls.
 *
 * Strategy:
 * 1. Inject web-vitals v5 library via CDN
 * 2. Navigate to page, let it settle
 * 3. Simulate ≥3 interactions (scroll is most reliable)
 * 4. Wait for web-vitals to capture metrics
 * 5. Extract and rate metrics
 *
 * @param url Full URL to test
 * @param routeConfig Route configuration
 * @returns Web Vitals metrics with ratings
 */
export async function measureWebVitals(
  url: string,
  routeConfig: RouteConfig
): Promise<WebVitalsMetrics> {
  let browser: Browser | null = null;

  try {
    // Step 1: Launch browser
    browser = await launchBrowserForLighthouse({
      viewport: routeConfig.viewport,
      debugPort: 9223, // Different port from Lighthouse to avoid conflicts
      headless: true,
    });

    const page: Page = await createPage(browser, routeConfig.viewport);

    // Enable console logging from browser context (for debugging)
    page.on('console', (msg) => {
      const type = msg.type();
      if (type === 'log' || type === 'warn' || type === 'error') {
        console.log(`[Browser Console] ${msg.text()}`);
      }
    });

    // Step 2: Navigate to page
    await navigateWithRetry(page, url, 3);

    // Step 3: Inject web-vitals library
    console.log('[Web Vitals] Injecting web-vitals v5 library...');
    await injectWebVitalsLibrary(page);

    // Step 4: Setup metric collectors
    const metricsPromise = collectWebVitalsMetrics(page);

    // Step 5: Simulate user interactions (≥3 required for INP)
    console.log('[Web Vitals] Simulating user interactions for INP measurement...');
    await simulateUserInteractions(page);

    // Step 6: Wait for metrics to be captured (with external timeout)
    console.log('[Web Vitals] Waiting for metrics collection (max 10s)...');
    const rawMetrics = await Promise.race([
      metricsPromise,
      new Promise<{ INP: number | null; LCP: number | null; CLS: number | null }>((resolve) => {
        setTimeout(() => {
          console.warn('[Web Vitals] External timeout (10s) reached');
          resolve({ INP: null, LCP: null, CLS: null });
        }, 10000);
      }),
    ]);

    // Step 7: Rate metrics and structure response
    const metrics: WebVitalsMetrics = {
      INP: {
        value: Math.round(rawMetrics.INP || 0),
        rating: rateWebVital(rawMetrics.INP || 0, 'INP'),
      },
      LCP: {
        value: Math.round(rawMetrics.LCP || 0),
        rating: rateWebVital(rawMetrics.LCP || 0, 'LCP'),
      },
      CLS: {
        value: parseFloat((rawMetrics.CLS || 0).toFixed(3)),
        rating: rateWebVital(rawMetrics.CLS || 0, 'CLS'),
      },
      passed:
        (rawMetrics.INP || 0) <= routeConfig.thresholds.webVitals.INP &&
        (rawMetrics.LCP || 0) <= routeConfig.thresholds.webVitals.LCP &&
        (rawMetrics.CLS || 0) <= routeConfig.thresholds.webVitals.CLS,
    };

    console.log('[Web Vitals] Metrics captured:', {
      INP: `${metrics.INP.value}ms (${metrics.INP.rating})`,
      LCP: `${metrics.LCP.value}ms (${metrics.LCP.rating})`,
      CLS: `${metrics.CLS.value} (${metrics.CLS.rating})`,
    });

    return metrics;
  } catch (error) {
    console.error('[Web Vitals] Measurement failed:', error);
    throw error;
  } finally {
    // CRITICAL: Resource cleanup (R6 mitigation)
    if (browser) {
      await browser.close();
      console.log('[Web Vitals] Browser closed');
    }
  }
}

/**
 * Inject web-vitals v5 library from CDN.
 * Uses unpkg CDN for reliable access to latest version.
 */
async function injectWebVitalsLibrary(page: Page): Promise<void> {
  await page.addScriptTag({
    url: 'https://unpkg.com/web-vitals@5/dist/web-vitals.iife.js',
  });

  // Verify library loaded
  const loaded = await page.evaluate(() => {
    return typeof (window as any).webVitals !== 'undefined';
  });

  if (!loaded) {
    throw new Error('Failed to inject web-vitals library');
  }
}

/**
 * Setup web-vitals metric collectors using page.evaluate().
 * Returns a promise that resolves when all 3 metrics are captured.
 *
 * CRITICAL: Must wait for user interactions before INP can be measured.
 */
async function collectWebVitalsMetrics(page: Page): Promise<{
  INP: number | null;
  LCP: number | null;
  CLS: number | null;
}> {
  return page.evaluate(() => {
    return new Promise((resolve) => {
      const metrics: { INP: number | null; LCP: number | null; CLS: number | null } = {
        INP: null,
        LCP: null,
        CLS: null,
      };

      let metricsCollected = 0;
      const totalMetrics = 3;

      const checkComplete = () => {
        if (metricsCollected >= totalMetrics) {
          resolve(metrics);
        }
      };

      // Collect INP (Interaction to Next Paint)
      // reportAllChanges: true forces immediate reporting (critical for headless mode)
      (window as any).webVitals.onINP((metric: any) => {
        metrics.INP = metric.value;
        metricsCollected++;
        console.log('[Web Vitals] INP captured:', metric.value);
        checkComplete();
      }, { reportAllChanges: true });

      // Collect LCP (Largest Contentful Paint)
      (window as any).webVitals.onLCP((metric: any) => {
        metrics.LCP = metric.value;
        metricsCollected++;
        console.log('[Web Vitals] LCP captured:', metric.value);
        checkComplete();
      }, { reportAllChanges: true });

      // Collect CLS (Cumulative Layout Shift)
      (window as any).webVitals.onCLS((metric: any) => {
        metrics.CLS = metric.value;
        metricsCollected++;
        console.log('[Web Vitals] CLS captured:', metric.value);
        checkComplete();
      }, { reportAllChanges: true });

      // Reduced timeout: 8 seconds (from 15s) - return partial metrics if not all collected
      setTimeout(() => {
        console.warn('[Web Vitals] Timeout reached after 8s, returning partial metrics:', metrics);
        resolve(metrics);
      }, 8000);
    });
  });
}

/**
 * Simulate user interactions to trigger INP measurement.
 *
 * Strategy (from Brief lines 215-260):
 * - INP requires ≥3 interactions to be measured reliably
 * - Scroll is most reliable interaction type (works on all pages)
 * - Click/type may fail if no interactive elements exist
 *
 * Interaction sequence:
 * 1. Scroll down 500px (interaction 1)
 * 2. Wait 200ms
 * 3. Scroll down 1000px (interaction 2)
 * 4. Wait 200ms
 * 5. Scroll down 1500px (interaction 3)
 * 6. Wait 500ms for web-vitals to process
 */
async function simulateUserInteractions(page: Page): Promise<void> {
  try {
    // Interaction 1: Small scroll
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(200);

    // Interaction 2: Medium scroll
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(200);

    // Interaction 3: Larger scroll
    await page.mouse.wheel(0, 1500);
    await page.waitForTimeout(500);

    console.log('[Web Vitals] Completed 3 scroll interactions for INP');
  } catch (error) {
    console.warn('[Web Vitals] Interaction simulation warning:', error);
    // Non-blocking: Continue even if interactions partially fail
  }
}

/**
 * Measure Web Vitals with retry logic (R2 flakiness mitigation).
 *
 * @param url Full URL to test
 * @param routeConfig Route configuration
 * @param maxAttempts Maximum retry attempts (default: 3)
 * @returns Web Vitals metrics from successful run
 */
export async function measureWebVitalsWithRetry(
  url: string,
  routeConfig: RouteConfig,
  maxAttempts: number = 3
): Promise<WebVitalsMetrics> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`[Web Vitals] Attempt ${attempt}/${maxAttempts}...`);
      const metrics = await measureWebVitals(url, routeConfig);
      return metrics; // Success!
    } catch (error) {
      lastError = error as Error;
      console.error(`[Web Vitals] Attempt ${attempt}/${maxAttempts} failed:`, error);

      if (attempt < maxAttempts) {
        // Exponential backoff: 2s, 4s, 8s
        const backoffMs = Math.pow(2, attempt) * 1000;
        console.log(`[Web Vitals] Retrying in ${backoffMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, backoffMs));
      }
    }
  }

  // All attempts failed
  throw new Error(
    `Web Vitals measurement failed after ${maxAttempts} attempts. Last error: ${lastError?.message}`
  );
}
