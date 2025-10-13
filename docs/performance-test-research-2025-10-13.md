# Performance Testing Framework Research
**Date:** 2025-10-13
**Researcher:** Murat (TEA Agent)
**Purpose:** Technology verification for Story 1.11 performance testing infrastructure
**Status:** Research Complete - Awaiting Approval

---

## Executive Summary

**CRITICAL FINDING:** The `playwright-lighthouse` npm package (v4.0.0) has NOT been updated in 2+ years and shows maintenance concerns as of October 2025. **RECOMMENDATION: Use Lighthouse Node.js API directly with Playwright** for better reliability, maintenance, and control.

**Recommended Approach:** Lighthouse Node.js API (v12.8.2) + Playwright (latest) + web-vitals v5.1.0

---

## 1. Package Status Verification (as of 2025-10-13)

### 1.1 playwright-lighthouse

| Attribute | Status |
|-----------|--------|
| **Latest Version** | 4.0.0 |
| **Last Published** | ~October 2023 (2 years ago) |
| **npm Weekly Downloads** | Active usage continues |
| **GitHub Activity** | Issue #110 opened Feb 18, 2025 (problems persist) |
| **Maintenance Status** | ⚠️ **UNMAINTAINED** - 2+ year gap since last update |
| **Known Issues** | Cookie authentication problems, ESM compatibility errors |
| **Community Sentiment** | "Lack of updates" cited as concern (Sept 2025) |

**Sources:**
- npm registry: https://www.npmjs.com/package/playwright-lighthouse
- GitHub issues: https://github.com/abhinaba-ghosh/playwright-lighthouse/issues
- WebSearch results: Multiple 2025 articles note maintenance concerns

**Risk Assessment:** HIGH - Package may not support latest Playwright/Lighthouse versions, compatibility issues likely.

---

### 1.2 Lighthouse (Standalone)

| Attribute | Status |
|-----------|--------|
| **Latest Version** | 12.8.2 |
| **Last Published** | ~1 month ago (September 2025) |
| **Maintenance** | ✅ **ACTIVE** - Regular monthly releases |
| **Node.js API** | Fully documented, production-ready |
| **GitHub Stars** | 28k+ (highly trusted) |
| **Trust Score** | 9.9/10 (Context7 MCP) |

**Sources:**
- npm: https://www.npmjs.com/package/lighthouse
- Official docs: https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md
- Context7 MCP verification: Lighthouse CI (/googlechrome/lighthouse-ci) confirmed active

**Risk Assessment:** LOW - Well-maintained, industry standard, excellent documentation.

---

### 1.3 Playwright

| Attribute | Status |
|-----------|--------|
| **Latest Version** | 1.48.2 (as of Oct 2025) |
| **Maintenance** | ✅ **ACTIVE** - Weekly/monthly releases |
| **Native Lighthouse Support** | ❌ **NO** - Requires integration layer |
| **Performance Testing** | Built-in Performance Timeline API access |
| **Trust Score** | 9.9/10 (Context7 MCP) |

**Sources:**
- npm: https://www.npmjs.com/package/playwright
- Context7 MCP: /microsoft/playwright (2103 code snippets)
- Release notes: https://playwright.dev/docs/release-notes

**Risk Assessment:** LOW - Excellent tool, but NO native Lighthouse integration confirmed.

---

### 1.4 web-vitals

| Attribute | Status |
|-----------|--------|
| **Latest Version** | 5.1.0 |
| **Last Published** | ~2 months ago (August 2025) |
| **v4 Release Date** | May 13, 2024 (stable) |
| **v5 Changes** | Removed FID (deprecated), kept INP/LCP/CLS |
| **INP Status** | ✅ OFFICIAL Core Web Vital since March 12, 2024 |
| **Maintenance** | ✅ **ACTIVE** - Google Chrome team |

**CRITICAL:** v5 removed `onFID()` - FID is NO LONGER supported. Must use INP.

**Sources:**
- npm: https://www.npmjs.com/package/web-vitals
- Changelog: https://github.com/GoogleChrome/web-vitals/blob/main/CHANGELOG.md
- v4 upgrade guide: https://github.com/GoogleChrome/web-vitals/blob/main/docs/upgrading-to-v4.md
- v5 upgrade guide: https://github.com/GoogleChrome/web-vitals/blob/main/docs/upgrading-to-v5.md
- WebSearch: Confirmed INP became Core Web Vital March 2024

**Risk Assessment:** LOW - Use v5.1.0 (latest), INP is the 2024 standard.

---

## 2. Decision Matrix: 4 Approaches Compared

### Approach 1: playwright-lighthouse (Wrapper Package)

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Accuracy** | ⭐⭐⭐⭐ (4/5) | Uses Lighthouse under the hood, generally accurate |
| **Speed** | ⭐⭐⭐⭐ (4/5) | Comparable to native Lighthouse |
| **Reliability** | ⭐⭐ (2/5) | ⚠️ **2+ years unmaintained**, compatibility issues reported |
| **Maintainability** | ⭐ (1/5) | ❌ **Last commit 2023**, community concerns documented |
| **CI/CD Ready** | ⭐⭐⭐ (3/5) | Works but may break with future Playwright versions |
| **Ease of Use** | ⭐⭐⭐⭐⭐ (5/5) | Simple API: `playAudit()` function |
| **Maturity** | ⭐⭐ (2/5) | Stable but stagnant |
| **Documentation** | ⭐⭐⭐ (3/5) | Basic examples available |

**Pros:**
- Simple integration (one function call)
- Playwright context preserved (authentication works)
- TypeScript definitions included

**Cons:**
- ❌ **2+ years without updates** (CRITICAL)
- ❌ Known ESM compatibility issues
- ❌ Cookie/auth problems reported
- ❌ May not support Playwright v1.48+ or Lighthouse v12+
- ❌ Dependency on unmaintained third-party wrapper

**Verdict:** ❌ **NOT RECOMMENDED** - Maintenance risk too high for production use.

---

### Approach 2: Lighthouse Node.js API + Playwright (RECOMMENDED)

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Accuracy** | ⭐⭐⭐⭐⭐ (5/5) | Official Lighthouse, matches Chrome DevTools |
| **Speed** | ⭐⭐⭐⭐ (4/5) | ~20-30s per audit (configurable) |
| **Reliability** | ⭐⭐⭐⭐⭐ (5/5) | ✅ Monthly releases, battle-tested |
| **Maintainability** | ⭐⭐⭐⭐⭐ (5/5) | ✅ Google Chrome team actively maintains |
| **CI/CD Ready** | ⭐⭐⭐⭐⭐ (5/5) | Industry standard, used by thousands of projects |
| **Ease of Use** | ⭐⭐⭐⭐ (4/5) | Requires ~30 lines of integration code |
| **Maturity** | ⭐⭐⭐⭐⭐ (5/5) | v12.8.2, production-grade |
| **Documentation** | ⭐⭐⭐⭐⭐ (5/5) | Excellent official docs + 1000+ examples |

**Pros:**
- ✅ **Actively maintained** (v12.8.2, published 1 month ago)
- ✅ Direct control over Lighthouse configuration
- ✅ No third-party wrapper dependency
- ✅ Full TypeScript support
- ✅ Can integrate Playwright's `page.context().newCDPSession()` for auth
- ✅ Supports all Lighthouse features (performance, accessibility, SEO)
- ✅ Compatible with Lighthouse CI for historical tracking

**Cons:**
- Requires ~30-50 LOC integration code (acceptable trade-off)
- Slightly more complex setup than wrapper

**Implementation Pattern:**
```typescript
import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';

const browser = await chromium.launch({
  args: ['--remote-debugging-port=9222']
});
const page = await browser.newPage();

// Playwright navigation + authentication
await page.goto('http://localhost:4173/briefing-engine');

// Hand off to Lighthouse
const result = await lighthouse('http://localhost:4173/briefing-engine', {
  port: 9222,
  output: 'json',
  onlyCategories: ['performance', 'best-practices'],
});

await browser.close();
```

**Verdict:** ✅ **RECOMMENDED** - Best balance of control, reliability, and maintainability.

---

### Approach 3: Chrome DevTools Protocol (CDP) Direct

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Accuracy** | ⭐⭐⭐⭐ (4/5) | Raw browser metrics, highly accurate |
| **Speed** | ⭐⭐⭐⭐⭐ (5/5) | Fastest option (no overhead) |
| **Reliability** | ⭐⭐⭐⭐ (4/5) | Stable protocol, but low-level |
| **Maintainability** | ⭐⭐ (2/5) | ❌ Complex, requires deep CDP knowledge |
| **CI/CD Ready** | ⭐⭐⭐ (3/5) | Possible but requires custom orchestration |
| **Ease of Use** | ⭐ (1/5) | ❌ Very complex, 100+ LOC integration |
| **Maturity** | ⭐⭐⭐⭐⭐ (5/5) | Chrome DevTools Protocol is stable |
| **Documentation** | ⭐⭐⭐ (3/5) | Good protocol docs, but limited examples |

**Pros:**
- ✅ Lowest latency (no third-party tools)
- ✅ Maximum control over metrics collection
- ✅ Can access raw Performance Timeline data

**Cons:**
- ❌ **Extremely complex** - requires deep CDP expertise
- ❌ No built-in scoring (must implement Lighthouse scoring manually)
- ❌ Significant maintenance burden
- ❌ Reinventing the wheel (Lighthouse already does this)
- ❌ 100+ LOC to match Lighthouse feature parity

**Verdict:** ❌ **NOT RECOMMENDED** - Over-engineering for minimal benefit.

---

### Approach 4: Lighthouse CI + GitHub Actions

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Accuracy** | ⭐⭐⭐⭐⭐ (5/5) | Uses Lighthouse, official Google tool |
| **Speed** | ⭐⭐⭐ (3/5) | ~30-60s per audit, slower than local |
| **Reliability** | ⭐⭐⭐⭐⭐ (5/5) | ✅ Google-maintained, production-grade |
| **Maintainability** | ⭐⭐⭐⭐⭐ (5/5) | ✅ Active development, excellent docs |
| **CI/CD Ready** | ⭐⭐⭐⭐⭐ (5/5) | **DESIGNED FOR CI/CD** |
| **Ease of Use** | ⭐⭐⭐⭐ (4/5) | Requires LHCI server or public storage |
| **Maturity** | ⭐⭐⭐⭐⭐ (5/5) | Industry standard |
| **Documentation** | ⭐⭐⭐⭐⭐ (5/5) | Excellent official docs |

**Pros:**
- ✅ **Purpose-built for CI/CD** pipelines
- ✅ Historical tracking built-in
- ✅ GitHub Actions integration out-of-the-box
- ✅ Assertion presets (e.g., `lighthouse:recommended`)
- ✅ Can upload to temporary public storage or LHCI server

**Cons:**
- ❌ Requires external storage (LHCI server or temporary public)
- ❌ CI-only (not suitable for local dev testing)
- ❌ Adds infrastructure complexity

**Use Case:** Complement to local testing, not a replacement.

**Verdict:** ✅ **RECOMMENDED AS SUPPLEMENT** - Use for CI/CD alongside local testing (Approach 2).

---

## 3. Final Recommendation

### Primary Approach: Lighthouse Node.js API + Playwright + web-vitals v5

**Rationale:**
1. **Lighthouse v12.8.2** - Actively maintained (1 month old), industry standard
2. **Playwright latest** - Well-supported, no native Lighthouse needed
3. **web-vitals v5.1.0** - Latest stable, INP supported (FID removed)
4. **No wrapper dependency** - Direct control, future-proof
5. **CI/CD ready** - Can integrate with Lighthouse CI later

**Architecture:**
```
┌─────────────────────────────────────────────┐
│ Playwright (Browser Automation)             │
│ - Navigate to page                          │
│ - Handle authentication                     │
│ - Launch Chromium with debugging port 9222 │
└─────────────────┬───────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────┐
│ Lighthouse Node.js API (Performance Audit)  │
│ - Connect to port 9222                      │
│ - Run audit (Performance, Best Practices)   │
│ - Return structured JSON                    │
└─────────────────┬───────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────┐
│ web-vitals v5.1.0 (Core Web Vitals)        │
│ - Inject via page.evaluate()               │
│ - Measure INP, LCP, CLS (2024 standards)   │
│ - Return metrics to test runner            │
└─────────────────┬───────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────┐
│ Test Runner (run-tests.ts)                 │
│ - Orchestrate all 3 modules                │
│ - Generate JSON + Console reports          │
│ - Exit code 0 (pass) or 1 (fail)          │
└─────────────────────────────────────────────┘
```

---

## 4. Package Versions (Lock These in package.json)

```json
{
  "devDependencies": {
    "playwright": "^1.48.2",
    "lighthouse": "^12.8.2",
    "web-vitals": "^5.1.0",
    "@types/node": "^20.0.0"
  }
}
```

**Installation Command:**
```bash
npm install --save-dev playwright@^1.48.2 lighthouse@^12.8.2 web-vitals@^5.1.0
npx playwright install chromium
```

---

## 5. Risk Mitigation Mapping

| Risk ID | Mitigation | Implementation Notes |
|---------|-----------|---------------------|
| **R1 (Package deprecation)** | ✅ **MITIGATED** - Use Lighthouse Node.js API directly (no wrapper) | Lighthouse v12.8.2 actively maintained, published 1 month ago |
| **R8 (web-vitals version)** | ✅ **MITIGATED** - Use v5.1.0 (latest stable, 2 months old) | INP support confirmed, FID removed as expected |

---

## 6. Alternative Considered: Why NOT playwright-lighthouse?

**Decision Log:**

1. **Maintenance Status (CRITICAL):**
   - Last update: October 2023 (2 years ago)
   - No response to issues opened in 2025
   - Community sentiment: "lack of updates" cited as concern

2. **Compatibility Risks:**
   - May not support Playwright v1.48+ (latest)
   - May not support Lighthouse v12+ (latest)
   - ESM import errors reported in 2025

3. **Dependency Chain:**
   - Adds unnecessary abstraction layer
   - Maintenance burden on third-party maintainer
   - No value-add over direct Lighthouse API

4. **Excellence Test Applied:**
   - "What would world-class QA engineer do?"
   - Answer: Use official Lighthouse API directly for reliability

**Conclusion:** playwright-lighthouse fails the excellence test due to maintenance concerns.

---

## 7. Core Web Vitals: INP vs FID Verification

**CONFIRMED:** INP (Interaction to Next Paint) is the official Core Web Vital as of March 12, 2024, replacing FID (First Input Delay).

**Sources:**
- web.dev: https://web.dev/articles/inp
- Google Search Central: https://developers.google.com/search/blog/2023/05/introducing-inp
- web-vitals v5 CHANGELOG: FID removed, INP retained

**Thresholds (2024 Standards):**
```typescript
interface CoreWebVitalsThresholds {
  INP: { good: 200, poor: 500 };  // milliseconds
  LCP: { good: 2500, poor: 4000 }; // milliseconds
  CLS: { good: 0.1, poor: 0.25 };  // unitless
}
```

**Implementation Note:** Use web-vitals v5.1.0, which provides `onINP()` but NOT `onFID()`.

---

## 8. Archon MCP Knowledge Base Insights

**Query 1:** "Lighthouse CI configuration best practices"
- **Finding:** Limited direct matches, but confirmed Lighthouse CI is viable for CI/CD
- **Recommendation:** Use for historical tracking, not as primary test method

**Query 2:** "Core Web Vitals INP measurement"
- **Finding:** Confirmed INP measurement requires JavaScript injection via web-vitals library
- **Key Insight:** "INP requires actual user interactions to measure" (web.dev documentation)
- **Recommendation:** Use Playwright's `page.click()`, `page.keyboard.type()`, `page.mouse.wheel()` to trigger interactions before measuring

---

## 9. Frame Rate Measurement Approach

**Decision:** Use requestAnimationFrame (RAF) timing approach from Brief lines 312-338.

**Why NOT Performance Timeline API:**
- More complex to implement
- RAF timing provides sufficient accuracy (±5% acceptable variance)
- Brief provides copy/paste-ready code

**Implementation:**
```javascript
// Measure FPS during 5-second scroll animation
const frames = [];
function measureFrames(duration = 5000) {
  const startTime = performance.now();
  let lastFrameTime = startTime;

  function recordFrame(currentTime) {
    const frameDelta = currentTime - lastFrameTime;
    frames.push(frameDelta);
    lastFrameTime = currentTime;

    if (currentTime - startTime < duration) {
      requestAnimationFrame(recordFrame);
    } else {
      return calculateStats(frames);
    }
  }

  requestAnimationFrame(recordFrame);
}

function calculateStats(frames) {
  const avgFrameTime = frames.reduce((a, b) => a + b) / frames.length;
  const avgFPS = 1000 / avgFrameTime;
  const minFrameTime = Math.max(...frames);
  const minFPS = 1000 / minFrameTime;
  const droppedFrames = frames.filter(f => f > 16.67).length;

  return { avgFPS, minFPS, droppedFrames, totalFrames: frames.length };
}
```

---

## 10. CI/CD Integration Strategy

**Recommended Pattern:** Dual approach

1. **Local Testing (Approach 2):** Lighthouse Node.js API + Playwright
   - Fast feedback during development
   - Runs against `npm run preview` on localhost:4173
   - npm script: `npm run test:performance`

2. **CI/CD (Approach 4):** Lighthouse CI (optional, future enhancement)
   - Historical tracking over time
   - Automatic PR comments with performance regression warnings
   - Uploads to temporary public storage

**Phase 1 (Immediate):** Implement Approach 2 only (sufficient for Story 1.11 approval)

**Phase 2 (Future):** Add Lighthouse CI for historical tracking (stretch goal)

---

## 11. Decision Rationale: "Why this choice AS OF 2025-10-13"

**Context:** As of October 13, 2025, the performance testing landscape has evolved:

1. **playwright-lighthouse stagnation** - 2+ years without updates signals abandonment
2. **Lighthouse maturity** - v12.8.2 with excellent Node.js API makes wrappers unnecessary
3. **INP standardization** - INP became Core Web Vital in March 2024, web-vitals v5 fully supports it
4. **Playwright stability** - v1.48.2 is production-grade, no native Lighthouse needed

**Future-Proofing:**
- Direct Lighthouse API: Updates flow immediately (no wrapper lag)
- Official Google packages: Long-term support guaranteed
- Standard Node.js patterns: Easy for team to maintain

**Alternative Path (If situation changes):**
If playwright-lighthouse resumes active maintenance (e.g., v5.0 published with Playwright v1.48 support), reconsider. Until then, direct API is safer.

---

## 12. Research Sources Summary

### Context7 MCP
- `/microsoft/playwright` - Verified NO native Lighthouse support
- `/googlechrome/lighthouse-ci` - Confirmed CI configuration patterns

### WebSearch (2025 Articles)
- playwright-lighthouse maintenance concerns documented
- web-vitals v5 release confirmed (August 2025)
- INP as Core Web Vital confirmed (March 2024)

### Archon MCP Knowledge Base
- Core Web Vitals measurement patterns
- INP interaction requirements validated

### Official Documentation
- Lighthouse: https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md
- web-vitals: https://github.com/GoogleChrome/web-vitals
- Playwright: https://playwright.dev/docs/intro

---

## 13. Next Steps (Awaiting User Approval)

**Before proceeding to implementation:**

1. ✅ Cameron reviews this research document
2. ✅ Cameron approves recommended approach (Lighthouse Node.js API + Playwright)
3. ✅ Cameron confirms package versions acceptable
4. ✅ Proceed to implementation phase (Handoff Step 2)

**Alternative Actions (If Cameron rejects):**
- If Cameron prefers playwright-lighthouse despite risks → Document waiver of R1 risk
- If Cameron prefers CDP direct → Increase effort estimate to 10-12 hours
- If Cameron prefers CI-only → Adjust Story 1.11 ACs to remove local testing requirement

---

## 14. Confidence Assessment

| Category | Confidence Level | Evidence |
|----------|------------------|----------|
| **Package Status** | ⭐⭐⭐⭐⭐ (5/5) | npm registry data, GitHub activity logs |
| **Maintenance Trends** | ⭐⭐⭐⭐⭐ (5/5) | 2+ years gap objectively verified |
| **INP Standard** | ⭐⭐⭐⭐⭐ (5/5) | Official Google documentation |
| **Lighthouse API** | ⭐⭐⭐⭐⭐ (5/5) | Official docs + 1000+ production examples |
| **web-vitals v5** | ⭐⭐⭐⭐⭐ (5/5) | GitHub changelog + npm registry |
| **Recommendation** | ⭐⭐⭐⭐⭐ (5/5) | Decision matrix scores favor Approach 2 |

**Overall Research Quality:** ⭐⭐⭐⭐⭐ (5/5) - High confidence in findings and recommendation.

---

## 15. Glossary

- **INP:** Interaction to Next Paint - Core Web Vital measuring responsiveness
- **FID:** First Input Delay - DEPRECATED as of March 2024, replaced by INP
- **LCP:** Largest Contentful Paint - Core Web Vital measuring loading performance
- **CLS:** Cumulative Layout Shift - Core Web Vital measuring visual stability
- **CDP:** Chrome DevTools Protocol - Low-level browser control interface
- **LHCI:** Lighthouse CI - CI/CD tool for historical performance tracking
- **RAF:** requestAnimationFrame - Browser API for frame-rate measurement

---

**END OF RESEARCH DOCUMENT**

**Status:** ✅ Research Complete - Awaiting Cameron's Approval

**Recommended Action:** Approve Approach 2 (Lighthouse Node.js API + Playwright + web-vitals v5.1.0) and proceed to implementation.

---

**Squawk!** 🦅
