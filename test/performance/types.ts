/**
 * Performance Testing Type Definitions
 *
 * Defines TypeScript interfaces for the entire performance testing infrastructure.
 * Based on Brief § NFR-3 (lines 392-407) and research findings.
 */

/** Lighthouse audit scores and metrics */
export interface LighthouseMetrics {
  performance: number;        // 0-100 score
  bestPractices: number;      // 0-100 score
  accessibility: number;      // 0-100 score
  seo: number;                // 0-100 score
  metrics: {
    firstContentfulPaint: number;  // ms
    largestContentfulPaint: number; // ms
    totalBlockingTime: number;      // ms
    cumulativeLayoutShift: number;  // unitless
    speedIndex: number;             // ms
  };
}

/** Core Web Vitals metric ratings (2024 standards with INP) */
export type WebVitalRating = 'good' | 'needs-improvement' | 'poor';

export interface WebVitalsMetrics {
  INP: { value: number; rating: WebVitalRating };  // Interaction to Next Paint (ms)
  LCP: { value: number; rating: WebVitalRating };  // Largest Contentful Paint (ms)
  CLS: { value: number; rating: WebVitalRating };  // Cumulative Layout Shift (unitless)
  passed: boolean;
}

/** Frame rate profiling results */
export interface FrameRateMetrics {
  avgFPS: number;
  minFPS: number;
  droppedFrames: number;
  totalFrames: number;
  passed: boolean;
}

/** Complete performance test report */
export interface PerformanceTestReport {
  timestamp: string;           // ISO 8601
  route: string;               // "/briefing-engine"
  viewport: { width: number; height: number };
  lighthouse: {
    scores: LighthouseMetrics;
    passed: boolean;
    failures: string[];        // Which thresholds failed
  };
  webVitals: WebVitalsMetrics;
  frameRate: FrameRateMetrics;
  overallResult: 'PASS' | 'FAIL';
  duration: number;            // ms
}

/** Test configuration from config.json */
export interface PerformanceTestConfig {
  baseURL: string;
  routes: RouteConfig[];
  networkConditions: {
    fast3G: NetworkCondition;
    slow3G: NetworkCondition;
  };
  outputDir: string;
  screenshots: boolean;
  htmlReports: boolean;
  retryAttempts: number;
  warmupRuns: number;
}

export interface RouteConfig {
  path: string;
  name: string;
  viewport: { width: number; height: number };
  thresholds: {
    lighthouse: {
      performance: number;
      bestPractices: number;
      accessibility: number;
      seo: number;
    };
    webVitals: {
      INP: number;
      LCP: number;
      CLS: number;
    };
    frameRate: {
      avgFPS: number;
      minFPS: number;
      maxDroppedFrames: number;
    };
  };
}

export interface NetworkCondition {
  download: number;  // Kbps
  upload: number;    // Kbps
  latency: number;   // ms
}

/** Core Web Vitals thresholds (2024 standards) */
export interface CoreWebVitalsThresholds {
  INP: { good: number; poor: number };  // ms
  LCP: { good: number; poor: number };  // ms
  CLS: { good: number; poor: number };  // unitless
}

/** Standard thresholds as constants */
export const WEB_VITALS_THRESHOLDS: CoreWebVitalsThresholds = {
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
};
