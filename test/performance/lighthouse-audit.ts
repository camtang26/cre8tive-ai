/**
 * Lighthouse Audit Module
 *
 * Executes Lighthouse performance audits using the Node.js API (v12.8.2).
 * Implements flakiness mitigations: warmup runs, retry logic, ±5% tolerance.
 *
 * Based on:
 * - Research doc lines 161-181 (Lighthouse integration pattern)
 * - Brief § FR-1: Lighthouse Audit Automation (lines 122-181)
 */

import lighthouse from 'lighthouse';
import type { Browser, Page } from 'playwright';
import type { LighthouseMetrics, RouteConfig, WebVitalsMetrics, WebVitalRating } from './types';
import { launchBrowserForLighthouse, createPage, navigateWithRetry } from './utils/browser-setup';

/**
 * Rate a Core Web Vital metric according to 2024 standards.
 *
 * @param value Metric value
 * @param metric Metric name (LCP, CLS, TBT)
 * @returns Rating: 'good', 'needs-improvement', or 'poor'
 */
function rateWebVitalFromLighthouse(value: number, metric: 'LCP' | 'CLS' | 'TBT'): WebVitalRating {
  // Thresholds from web.dev (2024 standards)
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },    // milliseconds
    CLS: { good: 0.1, poor: 0.25 },     // score
    TBT: { good: 200, poor: 600 },      // milliseconds (proxy for INP)
  };

  const limits = thresholds[metric];
  if (value <= limits.good) return 'good';
  if (value <= limits.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Run Lighthouse audit on a given URL using Playwright-controlled browser.
 *
 * Flow:
 * 1. Launch Chromium with debugging port 9222
 * 2. Navigate to target URL via Playwright (handles auth if needed)
 * 3. Hand off to Lighthouse for performance audit
 * 4. Parse and return structured metrics
 *
 * CRITICAL: Implements try/finally for resource cleanup (R6 mitigation).
 *
 * @param url Full URL to audit
 * @param routeConfig Route configuration with viewport and thresholds
 * @param warmupRun If true, this is a warmup run (discard results)
 * @returns Lighthouse metrics object
 */
export async function runLighthouseAudit(
  url: string,
  routeConfig: RouteConfig,
  warmupRun: boolean = false
): Promise<{ metrics: LighthouseMetrics; lhr: any }> {
  let browser: Browser | null = null;

  try {
    // Step 1: Launch browser with Lighthouse-compatible debugging port
    browser = await launchBrowserForLighthouse({
      viewport: routeConfig.viewport,
      debugPort: 9222,
      headless: true,
    });

    // Step 2: Create page and navigate (with retry logic for R2 mitigation)
    const page: Page = await createPage(browser, routeConfig.viewport);
    await navigateWithRetry(page, url, 3);

    // Optional: Warmup run to prime caches (R2 mitigation)
    if (warmupRun) {
      console.log('[Lighthouse] Executing warmup run...');
    }

    // Step 3: Run Lighthouse audit
    const lighthouseResult = await lighthouse(url, {
      port: 9222,
      output: 'json',
      onlyCategories: ['performance', 'best-practices', 'accessibility', 'seo'],
      formFactor: 'desktop', // CRITICAL: Must match screenEmulation.mobile: false
      // Lighthouse settings for consistent results
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
      },
      screenEmulation: {
        mobile: false,
        width: routeConfig.viewport.width,
        height: routeConfig.viewport.height,
        deviceScaleFactor: 1,
        disabled: false,
      },
    });

    if (!lighthouseResult || !lighthouseResult.lhr) {
      throw new Error('Lighthouse audit failed to return results');
    }

    // Step 4: Extract and structure metrics
    const lhr = lighthouseResult.lhr;
    const metrics: LighthouseMetrics = {
      performance: Math.round(lhr.categories.performance.score! * 100),
      bestPractices: Math.round(lhr.categories['best-practices'].score! * 100),
      accessibility: Math.round(lhr.categories.accessibility.score! * 100),
      seo: Math.round(lhr.categories.seo.score! * 100),
      metrics: {
        firstContentfulPaint: lhr.audits['first-contentful-paint'].numericValue || 0,
        largestContentfulPaint: lhr.audits['largest-contentful-paint'].numericValue || 0,
        totalBlockingTime: lhr.audits['total-blocking-time'].numericValue || 0,
        cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'].numericValue || 0,
        speedIndex: lhr.audits['speed-index'].numericValue || 0,
      },
    };

    if (!warmupRun) {
      console.log('[Lighthouse] Audit complete:', {
        performance: metrics.performance,
        bestPractices: metrics.bestPractices,
        accessibility: metrics.accessibility,
        seo: metrics.seo,
      });
    }

    return { metrics, lhr };
  } catch (error) {
    console.error('[Lighthouse] Audit failed:', error);
    throw error;
  } finally {
    // CRITICAL: Always close browser to prevent resource leaks (R6 mitigation)
    if (browser) {
      await browser.close();
      console.log('[Lighthouse] Browser closed');
      // Additional 1s delay for full resource cleanup (file descriptors, processes)
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

/**
 * Run Lighthouse audit with warmup + retry logic (R2 flakiness mitigation).
 *
 * Strategy:
 * 1. Execute warmup run (discarded, primes caches)
 * 2. Execute actual run (up to 3 attempts)
 * 3. Return results with ±5% tolerance applied in threshold validator
 *
 * @param url Full URL to audit
 * @param routeConfig Route configuration
 * @param maxAttempts Maximum retry attempts (default: 3)
 * @returns Lighthouse metrics from successful run
 */
export async function runLighthouseWithRetry(
  url: string,
  routeConfig: RouteConfig,
  maxAttempts: number = 3
): Promise<{ metrics: LighthouseMetrics; lhr: any }> {
  // Step 1: Warmup run (R2 mitigation - reduces cold start variance)
  try {
    await runLighthouseAudit(url, routeConfig, true);
  } catch (error) {
    console.warn('[Lighthouse] Warmup run failed (non-blocking):', error);
  }

  // Step 2: Actual run with retry logic
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`[Lighthouse] Attempt ${attempt}/${maxAttempts}...`);
      const result = await runLighthouseAudit(url, routeConfig, false);
      return result; // Success! Returns both metrics and LHR
    } catch (error) {
      lastError = error as Error;
      console.error(`[Lighthouse] Attempt ${attempt}/${maxAttempts} failed:`, error);

      if (attempt < maxAttempts) {
        // Exponential backoff: 2s, 4s, 8s
        const backoffMs = Math.pow(2, attempt) * 1000;
        console.log(`[Lighthouse] Retrying in ${backoffMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, backoffMs));
      }
    }
  }

  // All attempts failed
  throw new Error(
    `Lighthouse audit failed after ${maxAttempts} attempts. Last error: ${lastError?.message}`
  );
}

/**
 * Extract Core Web Vitals from Lighthouse audit results.
 *
 * ARCHITECTURAL DECISION (2025-10-13):
 * - Using Lighthouse's built-in Core Web Vitals metrics instead of standalone web-vitals library
 * - TBT (Total Blocking Time) serves as INP proxy (Lighthouse limitation)
 * - Reason: Standalone web-vitals test was hanging indefinitely (browser launch issue)
 * - Trade-off: Lose real INP measurement, gain reliability and speed
 * - Future enhancement: Add standalone web-vitals test when hanging issue resolved
 *
 * @param lhr Lighthouse Result (LHR) object
 * @param thresholds Web Vitals thresholds from config
 * @returns Web Vitals metrics with ratings
 */
export function extractWebVitalsFromLighthouse(
  lhr: any,
  thresholds: RouteConfig['thresholds']['webVitals']
): WebVitalsMetrics {
  // Extract raw values from Lighthouse audits
  const lcpValue = Math.round(lhr.audits['largest-contentful-paint'].numericValue || 0);
  const clsValue = parseFloat((lhr.audits['cumulative-layout-shift'].numericValue || 0).toFixed(3));
  const tbtValue = Math.round(lhr.audits['total-blocking-time'].numericValue || 0);

  // Rate each metric
  const lcpRating = rateWebVitalFromLighthouse(lcpValue, 'LCP');
  const clsRating = rateWebVitalFromLighthouse(clsValue, 'CLS');
  const tbtRating = rateWebVitalFromLighthouse(tbtValue, 'TBT');

  // Check if all metrics pass thresholds
  const passed =
    lcpValue <= thresholds.LCP &&
    clsValue <= thresholds.CLS &&
    tbtValue <= thresholds.INP; // Using INP threshold for TBT (conservative)

  const metrics: WebVitalsMetrics = {
    INP: {
      value: tbtValue, // TBT as INP proxy
      rating: tbtRating,
    },
    LCP: {
      value: lcpValue,
      rating: lcpRating,
    },
    CLS: {
      value: clsValue,
      rating: clsRating,
    },
    passed,
  };

  console.log('[Lighthouse → Web Vitals] Extracted Core Web Vitals:', {
    'TBT (INP proxy)': `${metrics.INP.value}ms (${metrics.INP.rating})`,
    LCP: `${metrics.LCP.value}ms (${metrics.LCP.rating})`,
    CLS: `${metrics.CLS.value} (${metrics.CLS.rating})`,
    passed: passed ? '✓' : '✗',
  });

  return metrics;
}
