#!/usr/bin/env tsx
/**
 * Performance Test Runner (Orchestrator)
 *
 * Orchestrates all 3 performance test modules:
 * 1. Lighthouse audit (Performance, Best Practices, Accessibility, SEO)
 * 2. Core Web Vitals (INP, LCP, CLS)
 * 3. Frame Rate profiling (avgFPS, minFPS, droppedFrames)
 *
 * Generates JSON + console reports, exits with code 0 (pass) or 1 (fail).
 *
 * Based on:
 * - Brief § NFR-4: CI/CD Integration (lines 450-488)
 * - Handoff doc: Orchestration & Reporting (lines 346-354)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type {
  PerformanceTestConfig,
  PerformanceTestReport,
  RouteConfig,
} from './types';
import { runLighthouseWithRetry, extractWebVitalsFromLighthouse } from './lighthouse-audit';
import { measureFrameRateWithRetry } from './frame-rate-test';
import { validateLighthouseScores, validateWebVitals, validateFrameRate, calculateOverallResult } from './utils/threshold-validator';
import { verifyServerReachable } from './utils/browser-setup';

// ES module compatibility: Derive __dirname from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Main entry point for performance testing.
 * Loads config, runs tests, generates reports, exits with appropriate code.
 */
async function main() {
  const startTime = Date.now();

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🦅 Performance Testing Suite');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  try {
    // Step 1: Load configuration
    console.log('[Runner] Loading configuration...');
    const config = loadConfig();

    // Step 2: Verify server is reachable
    const testURL = `${config.baseURL}${config.routes[0].path}`;
    console.log(`[Runner] Verifying server at ${config.baseURL}...`);
    const serverReachable = await verifyServerReachable(config.baseURL);

    if (!serverReachable) {
      console.error(`\n❌ FATAL: Server not reachable at ${config.baseURL}`);
      console.error('Please ensure preview server is running:');
      console.error('  npm run build && npm run preview\n');
      process.exit(1);
    }

    console.log('[Runner] Server verified ✓\n');

    // Step 3: Run tests for each route (currently just one route)
    const reports: PerformanceTestReport[] = [];

    for (const route of config.routes) {
      console.log(`[Runner] Testing route: ${route.name} (${route.path})`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      const report = await runTestsForRoute(config, route);
      reports.push(report);
    }

    // Step 4: Save reports
    const outputDir = config.outputDir || 'test/performance/reports';
    mkdirSync(outputDir, { recursive: true });

    for (const report of reports) {
      const timestamp = new Date(report.timestamp).toISOString().replace(/[:.]/g, '-');
      const filename = `${report.route.replace('/', '')}-${timestamp}.json`;
      const filepath = join(outputDir, filename);

      writeFileSync(filepath, JSON.stringify(report, null, 2));
      console.log(`\n[Runner] Report saved: ${filepath}`);
    }

    // Step 5: Display console report
    console.log('\n\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 PERFORMANCE TEST SUMMARY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    for (const report of reports) {
      displayConsoleReport(report);
    }

    // Step 6: Calculate overall result
    const allPassed = reports.every((r) => r.overallResult === 'PASS');
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Overall Result: ${allPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Total Duration: ${duration}s`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Step 7: Exit with appropriate code (0 = pass, 1 = fail)
    process.exit(allPassed ? 0 : 1);
  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

/**
 * Load and parse test configuration from config.json.
 */
function loadConfig(): PerformanceTestConfig {
  const configPath = join(__dirname, 'config.json');
  const configData = readFileSync(configPath, 'utf-8');
  return JSON.parse(configData) as PerformanceTestConfig;
}

/**
 * Run all 3 test modules for a single route.
 * Returns complete performance test report.
 */
async function runTestsForRoute(
  config: PerformanceTestConfig,
  route: RouteConfig
): Promise<PerformanceTestReport> {
  const testURL = `${config.baseURL}${route.path}`;
  const testStartTime = Date.now();

  // Test 1: Lighthouse audit (includes Core Web Vitals extraction)
  console.log('\n[1/3] Running Lighthouse audit...');
  const lighthouseResult = await runLighthouseWithRetry(
    testURL,
    route,
    config.retryAttempts
  );
  const lighthouseMetrics = lighthouseResult.metrics;
  const lighthouseValidation = validateLighthouseScores(
    lighthouseMetrics,
    route.thresholds.lighthouse
  );

  // Test 2: Extract Core Web Vitals from Lighthouse data
  console.log('\n[2/3] Extracting Core Web Vitals from Lighthouse...');
  const webVitalsMetrics = extractWebVitalsFromLighthouse(
    lighthouseResult.lhr,
    route.thresholds.webVitals
  );
  const webVitalsPassed = validateWebVitals(webVitalsMetrics, route.thresholds.webVitals);
  webVitalsMetrics.passed = webVitalsPassed;

  // CRITICAL: Cooldown period for resource cleanup (browser processes, file descriptors)
  console.log('\n[Runner] Lighthouse complete, cooling down for 2s...');
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Test 3: Frame Rate profiling
  console.log('\n[3/3] Profiling frame rate...');
  const frameRateMetrics = await measureFrameRateWithRetry(
    testURL,
    route,
    config.retryAttempts
  );
  const frameRatePassed = validateFrameRate(frameRateMetrics, route.thresholds.frameRate);
  frameRateMetrics.passed = frameRatePassed;

  // Calculate overall result (Frame Rate auto-passes when disabled)
  const overallResult = calculateOverallResult(
    lighthouseValidation.passed,
    webVitalsPassed,
    frameRatePassed
  );

  // Build complete report
  const report: PerformanceTestReport = {
    timestamp: new Date().toISOString(),
    route: route.path,
    viewport: route.viewport,
    lighthouse: {
      scores: lighthouseMetrics,
      passed: lighthouseValidation.passed,
      failures: lighthouseValidation.failures,
    },
    webVitals: webVitalsMetrics,
    frameRate: frameRateMetrics,
    overallResult,
    duration: Date.now() - testStartTime,
  };

  return report;
}

/**
 * Display pretty console report (from handoff doc lines 148-164).
 */
function displayConsoleReport(report: PerformanceTestReport) {
  const statusIcon = (passed: boolean) => (passed ? '✓' : '✗');

  console.log(`\nRoute: ${report.route}`);
  console.log(`Timestamp: ${report.timestamp}`);
  console.log('─────────────────────────────────────────────');

  console.log('\n📊 Lighthouse Scores:');
  console.log(`  Performance:    ${report.lighthouse.scores.performance}  ${statusIcon(report.lighthouse.passed)}`);
  console.log(`  Best Practices: ${report.lighthouse.scores.bestPractices} ${statusIcon(report.lighthouse.passed)}`);
  console.log(`  Accessibility:  ${report.lighthouse.scores.accessibility} ${statusIcon(report.lighthouse.passed)}`);
  console.log(`  SEO:            ${report.lighthouse.scores.seo} ${statusIcon(report.lighthouse.passed)}`);

  if (report.lighthouse.failures.length > 0) {
    console.log('  Failures:');
    report.lighthouse.failures.forEach((failure) => {
      console.log(`    - ${failure}`);
    });
  }

  console.log('\n🎯 Core Web Vitals:');
  console.log(`  TBT (INP proxy): ${report.webVitals.INP.value}ms (${report.webVitals.INP.rating}) ${statusIcon(report.webVitals.passed)}`);
  console.log(`  LCP: ${report.webVitals.LCP.value}ms (${report.webVitals.LCP.rating}) ${statusIcon(report.webVitals.passed)}`);
  console.log(`  CLS: ${report.webVitals.CLS.value} (${report.webVitals.CLS.rating}) ${statusIcon(report.webVitals.passed)}`);

  console.log('\n🎬 Frame Rate:');
  if (report.frameRate.avgFPS === 0 && report.frameRate.totalFrames === 0) {
    console.log(`  Status: SKIPPED (browser automation issue)`);
    console.log(`  Note: Frame Rate testing disabled as of 2025-10-13 (P1 enhancement)`);
  } else {
    console.log(`  Avg FPS: ${report.frameRate.avgFPS} ${statusIcon(report.frameRate.passed)}`);
    console.log(`  Min FPS: ${report.frameRate.minFPS} ${statusIcon(report.frameRate.passed)}`);
    console.log(`  Dropped: ${report.frameRate.droppedFrames}/${report.frameRate.totalFrames} ${statusIcon(report.frameRate.passed)}`);
  }

  console.log('\n─────────────────────────────────────────────');
  console.log(`Result: ${report.overallResult === 'PASS' ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Duration: ${(report.duration / 1000).toFixed(1)}s`);
}

// Execute main function
main().catch((error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
