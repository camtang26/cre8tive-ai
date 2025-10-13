/**
 * Browser Setup Utility
 *
 * Handles Playwright browser configuration with Lighthouse-compatible settings.
 * Implements resource cleanup pattern (R6 mitigation from research doc).
 *
 * Based on research doc lines 161-181 (Lighthouse integration pattern).
 */

import { chromium, Browser, Page } from 'playwright';

export interface BrowserSetupOptions {
  viewport?: { width: number; height: number };
  debugPort?: number;
  headless?: boolean;
}

/**
 * Launch Chromium browser with Lighthouse-compatible debugging port.
 * Port 9222 allows Lighthouse to connect via Chrome DevTools Protocol.
 *
 * CRITICAL: Caller MUST use try/finally to ensure browser.close() is called.
 * See Brief § Critical Considerations → Resource Cleanup (lines 678-691).
 */
export async function launchBrowserForLighthouse(
  options: BrowserSetupOptions = {}
): Promise<Browser> {
  const {
    viewport = { width: 1920, height: 1080 },
    debugPort = 9222,
    headless = true,
  } = options;

  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // Performance optimizations
    '--disable-dev-shm-usage',
    '--disable-gpu',
  ];

  // Only add debugging port if specified (Frame Rate doesn't need it)
  if (debugPort) {
    args.unshift(`--remote-debugging-port=${debugPort}`);
  }

  const browser = await chromium.launch({
    headless,
    args,
  });

  return browser;
}

/**
 * Create new page with specified viewport.
 * Ensures consistent testing environment across runs.
 */
export async function createPage(
  browser: Browser,
  viewport: { width: number; height: number }
): Promise<Page> {
  const page = await browser.newPage({
    viewport,
  });

  return page;
}

/**
 * Navigate to URL with retry logic (R2 mitigation: flakiness).
 * Implements 3-attempt retry pattern with exponential backoff.
 */
export async function navigateWithRetry(
  page: Page,
  url: string,
  maxAttempts: number = 3
): Promise<void> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await page.goto(url, {
        waitUntil: 'networkidle',
        timeout: 30000, // 30 seconds
      });
      return; // Success!
    } catch (error) {
      lastError = error as Error;
      console.warn(`[Attempt ${attempt}/${maxAttempts}] Navigation failed: ${error}`);

      if (attempt < maxAttempts) {
        // Exponential backoff: 1s, 2s, 4s
        const backoffMs = Math.pow(2, attempt - 1) * 1000;
        console.log(`Retrying in ${backoffMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, backoffMs));
      }
    }
  }

  throw new Error(`Navigation failed after ${maxAttempts} attempts: ${lastError?.message}`);
}

/**
 * Verify server is reachable before starting tests.
 * Mitigates R7 (CI/CD timing issues).
 */
export async function verifyServerReachable(url: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    console.error(`Server not reachable at ${url}:`, error);
    return false;
  }
}
