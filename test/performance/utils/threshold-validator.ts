/**
 * Threshold Validator Utility
 *
 * Implements pass/fail logic for performance metrics with ±5% buffer zones.
 * Mitigates R2 (test flakiness) by allowing acceptable variance.
 *
 * Based on Brief § Critical Considerations → Flakiness Mitigation (lines 666-675).
 */

import type {
  LighthouseMetrics,
  WebVitalsMetrics,
  FrameRateMetrics,
  RouteConfig,
  WebVitalRating,
  CoreWebVitalsThresholds,
} from '../types';
import { WEB_VITALS_THRESHOLDS } from '../types';

/**
 * Validate Lighthouse scores against thresholds with ±5% tolerance.
 * Tolerance mitigates run-to-run variance (flakiness mitigation).
 *
 * @returns Object with passed flag and list of failures
 */
export function validateLighthouseScores(
  metrics: LighthouseMetrics,
  thresholds: RouteConfig['thresholds']['lighthouse']
): { passed: boolean; failures: string[] } {
  const failures: string[] = [];
  const tolerance = 0.05; // 5% buffer

  // Helper: Check if score meets threshold with tolerance
  const meetsThreshold = (score: number, threshold: number): boolean => {
    const lowerBound = threshold * (1 - tolerance);
    return score >= lowerBound;
  };

  if (!meetsThreshold(metrics.performance, thresholds.performance)) {
    failures.push(
      `Performance: ${metrics.performance} < ${thresholds.performance} (±5%: ${(thresholds.performance * (1 - tolerance)).toFixed(1)})`
    );
  }

  if (!meetsThreshold(metrics.bestPractices, thresholds.bestPractices)) {
    failures.push(
      `Best Practices: ${metrics.bestPractices} < ${thresholds.bestPractices} (±5%: ${(thresholds.bestPractices * (1 - tolerance)).toFixed(1)})`
    );
  }

  if (!meetsThreshold(metrics.accessibility, thresholds.accessibility)) {
    failures.push(
      `Accessibility: ${metrics.accessibility} < ${thresholds.accessibility} (±5%: ${(thresholds.accessibility * (1 - tolerance)).toFixed(1)})`
    );
  }

  if (!meetsThreshold(metrics.seo, thresholds.seo)) {
    failures.push(
      `SEO: ${metrics.seo} < ${thresholds.seo} (±5%: ${(thresholds.seo * (1 - tolerance)).toFixed(1)})`
    );
  }

  return {
    passed: failures.length === 0,
    failures,
  };
}

/**
 * Rate Core Web Vital metric based on 2024 standards.
 * Uses INP (NOT FID) as per March 2024 update.
 *
 * @see https://web.dev/articles/vitals
 */
export function rateWebVital(
  value: number,
  metric: keyof CoreWebVitalsThresholds
): WebVitalRating {
  const thresholds = WEB_VITALS_THRESHOLDS[metric];

  if (value <= thresholds.good) {
    return 'good';
  } else if (value <= thresholds.poor) {
    return 'needs-improvement';
  } else {
    return 'poor';
  }
}

/**
 * Validate Web Vitals metrics against configured thresholds.
 * All three metrics (INP, LCP, CLS) must be in "good" range to pass.
 */
export function validateWebVitals(
  metrics: WebVitalsMetrics,
  thresholds: RouteConfig['thresholds']['webVitals']
): boolean {
  return (
    metrics.INP.value <= thresholds.INP &&
    metrics.LCP.value <= thresholds.LCP &&
    metrics.CLS.value <= thresholds.CLS
  );
}

/**
 * Validate frame rate metrics against thresholds with ±10% tolerance.
 * Frame rate is more variable than Lighthouse scores, needs larger buffer.
 */
export function validateFrameRate(
  metrics: FrameRateMetrics,
  thresholds: RouteConfig['thresholds']['frameRate']
): boolean {
  const tolerance = 0.10; // 10% buffer for frame rate variance

  const avgFPSThreshold = thresholds.avgFPS * (1 - tolerance);
  const minFPSThreshold = thresholds.minFPS * (1 - tolerance);

  return (
    metrics.avgFPS >= avgFPSThreshold &&
    metrics.minFPS >= minFPSThreshold &&
    metrics.droppedFrames <= thresholds.maxDroppedFrames
  );
}

/**
 * Calculate overall test result.
 * ALL three test categories (Lighthouse, Web Vitals, Frame Rate) must pass.
 */
export function calculateOverallResult(
  lighthousePassed: boolean,
  webVitalsPassed: boolean,
  frameRatePassed: boolean
): 'PASS' | 'FAIL' {
  return lighthousePassed && webVitalsPassed && frameRatePassed ? 'PASS' : 'FAIL';
}
