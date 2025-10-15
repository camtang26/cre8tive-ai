# Performance Testing Architecture Brief
## For: Test Enterprise Architecture Agent (TEA)

**Project:** Cre8tive AI Website (React + TypeScript + GSAP + Vite)
**Epic:** Epic 1 - Briefing Engine
**Story Context:** Story 1.11 - Performance Optimization & Responsive Testing
**Brief Date:** 2025-10-13
**Status:** Ready for Implementation
> **2025-10-14 Update:** The pinned `BriefToStoryboardAnimation` has been replaced by the segmented `BriefingTimeline` experience. Performance checks now cover each section-level timeline; historical references to the legacy component remain for context.

---

## 🎯 Executive Summary

Build an **enterprise-grade performance testing infrastructure** that automates:
1. **Lighthouse audits** (Performance ≥80, Best Practices ≥90)
2. **Core Web Vitals measurement** (INP < 200ms, LCP < 2.5s, CLS < 0.1)
3. **Animation frame rate profiling** (60fps target during GSAP animations)

This infrastructure must be **reusable**, **CI/CD-ready**, **configurable**, and follow **2025 best practices** for web performance testing.

---

## 📊 Current State Analysis

### What's Been Completed (via Chrome DevTools MCP)

✅ **6 automated tests passed:**
1. Console error monitoring (4 GPU stalls identified - non-blocking)
2. Performance trace (25.6s scroll, no critical insights)
3. Network analysis (40 images, preload/lazy-load verified)
4. Slow 3G edge case (0 broken images under stress)
5. Responsive breakpoints (375px, 768px, 1920px validated)
6. Bundle size verification (805.86kb < 900kb limit)

### What's Missing (Blocking Story Approval)

❌ **3 tests require specialized tooling:**
1. **Lighthouse Performance Audit** - Chrome DevTools MCP cannot invoke Lighthouse
2. **Core Web Vitals (Real INP)** - DevTools can measure TBT proxy, but not actual INP from user interactions
3. **Frame Rate Profiling** - DevTools cannot access full Performance panel frame chart data

### Why Existing Tools Failed

| Tool | Limitation |
|------|-----------|
| **Chrome DevTools MCP v0.6.0** | No Lighthouse API, no web-vitals injection, no frame chart access |
| **Playwright MCP** | Requires complex evaluate_script() payloads, hard to debug, no integrated Lighthouse |
| **Manual Testing** | Not repeatable, time-consuming, human error prone |

**Root Cause:** Need programmatic access to Lighthouse + web-vitals library + RAF timing in a **single integrated test suite**.

---

## 🎓 Research Requirements (MANDATORY BEFORE CODING)

### 1. Technology Verification (Context7 MCP + WebSearch)

**CRITICAL:** Verify these packages are still the recommended approach as of October 2025:

```bash
# Are these still the best options?
- playwright-lighthouse (last updated: ?)
- playwright (latest stable version: ?)
- web-vitals (v3 or v4?)
- lighthouse (standalone vs integrated?)
```

**Research Questions:**
1. Has Playwright released native Lighthouse integration? (Check Playwright v1.40+ release notes)
2. Is `web-vitals` v4 stable? (Check https://github.com/GoogleChrome/web-vitals)
3. Are there better alternatives? (Speedliner, WebPageTest API, Chrome DevTools Protocol direct?)
4. What's the industry standard in Q4 2025 for automated performance testing?

**Document findings in:** `docs/performance-test-research-2025-10-13.md`

### 2. Best Practices Research (Archon MCP)

Search knowledge base for:
- `rag_search_knowledge_base(query="Lighthouse CI configuration best practices", match_count=5)`
- `rag_search_knowledge_base(query="Core Web Vitals INP measurement", match_count=5)`
- `rag_search_knowledge_base(query="Playwright performance testing", match_count=5)`
- `rag_search_code_examples(query="web-vitals React integration", match_count=3)`

### 3. Framework Selection Decision Matrix

Create a comparison table documenting:

| Approach | Pros | Cons | Maturity | CI/CD Ready | Maintenance |
|----------|------|------|----------|-------------|-------------|
| playwright-lighthouse | ? | ? | ? | ? | ? |
| Lighthouse CLI + Node.js | ? | ? | ? | ? | ? |
| Chrome DevTools Protocol | ? | ? | ? | ? | ? |
| WebPageTest API | ? | ? | ? | ? | ? |

**Decision criteria:**
- Accuracy (matches manual Chrome DevTools?)
- Speed (< 60s total test time?)
- Reliability (< 1% flakiness?)
- Maintainability (active development?)
- CI/CD integration (GitHub Actions ready?)

---

## ✅ Functional Requirements

### FR-1: Lighthouse Audit Automation

**Acceptance Criteria:**
- [ ] Runs full Lighthouse audit on `http://localhost:4173/briefing-engine`
- [ ] Tests Performance, Best Practices, Accessibility, SEO categories
- [ ] Configurable thresholds (default: Performance ≥80, Best Practices ≥90)
- [ ] Outputs structured JSON report
- [ ] Generates HTML report (optional, for manual review)
- [ ] Execution time < 30 seconds

**Test Scenarios:**
1. **Baseline performance** - Fresh page load, no interaction
2. **Cached performance** - Second load with service worker/cache
3. **Slow 3G simulation** - Throttled network conditions
4. **Mobile viewport** - 375×812px (iPhone 12)
5. **Desktop viewport** - 1920×1080px

**Critical Metrics to Capture:**
```typescript
interface LighthouseMetrics {
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
```

### FR-2: Core Web Vitals Measurement (2024 Standards)

**IMPORTANT:** As of March 12, 2024, **INP (Interaction to Next Paint)** replaced **FID (First Input Delay)** as a Core Web Vital.

**Acceptance Criteria:**
- [ ] Injects Google's `web-vitals` library (v3 or v4, verify latest)
- [ ] Measures **INP** (NOT FID) - user interaction responsiveness
- [ ] Measures **LCP** - largest contentful paint
- [ ] Measures **CLS** - cumulative layout shift
- [ ] Simulates realistic user interactions (scroll, click) to trigger INP
- [ ] Outputs metrics in milliseconds/unitless format matching Chrome DevTools

**Test Scenarios:**
1. **Idle page** - Measure LCP and CLS without interaction
2. **Scroll interaction** - Trigger INP via programmatic scroll (0→5000px over 5s)
3. **Button click** - Trigger INP via button click on interactive element
4. **Form input** - Trigger INP via typing in text field

**Thresholds (Good/Needs Improvement/Poor):**
```typescript
interface CoreWebVitalsThresholds {
  INP: { good: 200, poor: 500 };  // ms (NEW 2024 standard)
  LCP: { good: 2500, poor: 4000 }; // ms
  CLS: { good: 0.1, poor: 0.25 };  // unitless
}
```

**Critical Implementation Note:**
- INP requires **actual user interactions** to measure - cannot be measured in headless mode without simulating clicks/keypresses
- Use Playwright's `page.click()`, `page.keyboard.type()`, `page.mouse.wheel()` to trigger interactions
- Wait for **at least 3 interactions** before measuring INP (per web-vitals library recommendation)

### FR-3: Animation Frame Rate Profiling

**Acceptance Criteria:**
- [ ] Measures frame rate during GSAP scroll-triggered animations
- [ ] Captures **average FPS**, **minimum FPS**, **dropped frame count**
- [ ] Tests during critical animation sequences:
  - BriefingTimeline segmented sections (hero, synthesis, styles, storyboard, handoff)
  - ParticleCore Canvas animation (continuous RAF loop)
  - Hero section GSAP timeline
- [ ] Reports frames below 60fps threshold (16.67ms budget)
- [ ] Execution time < 10 seconds per animation test

**Test Scenarios:**
1. **Idle baseline** - Measure FPS with no scroll (should be 60fps)
2. **Scroll animation** - Measure FPS during 0→5000px scroll over 5s
3. **Canvas stress test** - Measure FPS with ParticleCore active (150 particles)
4. **Combined load** - Measure FPS during scroll + Canvas + GSAP animations

**Measurement Approach:**
```javascript
// Option 1: requestAnimationFrame timing
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

**Alternative Approach:** Use Playwright's built-in Performance Timeline API if more accurate.

---

## 🏗️ Non-Functional Requirements

### NFR-1: Code Quality

- [ ] TypeScript with strict type checking (`noImplicitAny: true` for test files)
- [ ] Max 500 LOC per file, 50 lines per function
- [ ] ESLint clean (errors must pass, warnings acceptable)
- [ ] Commented "why" for non-obvious logic
- [ ] Error handling for all async operations

### NFR-2: Configurability

**Test configuration file:** `test/performance/config.json`

```json
{
  "baseURL": "http://localhost:4173",
  "routes": [
    {
      "path": "/briefing-engine",
      "name": "Briefing Engine",
      "viewport": { "width": 1920, "height": 1080 },
      "thresholds": {
        "lighthouse": {
          "performance": 80,
          "bestPractices": 90,
          "accessibility": 90,
          "seo": 90
        },
        "webVitals": {
          "INP": 200,
          "LCP": 2500,
          "CLS": 0.1
        },
        "frameRate": {
          "avgFPS": 55,
          "minFPS": 45,
          "maxDroppedFrames": 30
        }
      }
    }
  ],
  "networkConditions": {
    "fast3G": { "download": 1600, "upload": 750, "latency": 150 },
    "slow3G": { "download": 500, "upload": 500, "latency": 400 }
  },
  "outputDir": "test/performance/reports",
  "screenshots": true,
  "htmlReports": true
}
```

### NFR-3: Reporting

**Structured JSON output:** `test/performance/reports/briefing-engine-{timestamp}.json`

```typescript
interface PerformanceTestReport {
  timestamp: string;           // ISO 8601
  route: string;               // "/briefing-engine"
  viewport: { width: number; height: number };
  lighthouse: {
    scores: LighthouseMetrics;
    passed: boolean;
    failures: string[];        // Which thresholds failed
  };
  webVitals: {
    INP: { value: number; rating: "good" | "needs-improvement" | "poor" };
    LCP: { value: number; rating: "good" | "needs-improvement" | "poor" };
    CLS: { value: number; rating: "good" | "needs-improvement" | "poor" };
    passed: boolean;
  };
  frameRate: {
    avgFPS: number;
    minFPS: number;
    droppedFrames: number;
    totalFrames: number;
    passed: boolean;
  };
  overallResult: "PASS" | "FAIL";
  duration: number;            // ms
}
```

**Console output:** Pretty-printed table for quick review

```
┌─────────────────────────────────────────────┐
│ Performance Test Report                     │
│ Route: /briefing-engine                     │
│ Timestamp: 2025-10-13T14:30:00.000Z        │
├─────────────────────────────────────────────┤
│ Lighthouse                                  │
│   Performance:    92 ✓ (threshold: 80)    │
│   Best Practices: 95 ✓ (threshold: 90)    │
│   Accessibility:  88 ✗ (threshold: 90)    │
├─────────────────────────────────────────────┤
│ Core Web Vitals                             │
│   INP: 185ms ✓ (threshold: 200ms)         │
│   LCP: 2.3s  ✓ (threshold: 2.5s)          │
│   CLS: 0.05  ✓ (threshold: 0.1)           │
├─────────────────────────────────────────────┤
│ Frame Rate                                  │
│   Avg FPS: 58 ✓ (threshold: 55)           │
│   Min FPS: 48 ✓ (threshold: 45)           │
│   Dropped: 12 ✓ (threshold: 30)           │
├─────────────────────────────────────────────┤
│ Overall: FAIL (1/3 categories passed)      │
│ Duration: 45.2s                             │
└─────────────────────────────────────────────┘
```

### NFR-4: CI/CD Integration

- [ ] **npm script:** `npm run test:performance` (runs all performance tests)
- [ ] **GitHub Actions workflow:** `.github/workflows/performance-tests.yml`
- [ ] **Exit code 0** if all thresholds pass, **exit code 1** if any fail
- [ ] Uploads test reports as workflow artifacts
- [ ] Optional: Comments PR with performance regression warnings

**Example GitHub Actions workflow:**
```yaml
name: Performance Tests

on:
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Start preview server
        run: npm run preview &

      - name: Wait for server
        run: npx wait-on http://localhost:4173

      - name: Run performance tests
        run: npm run test:performance

      - name: Upload reports
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: performance-reports
          path: test/performance/reports/
```

### NFR-5: Maintainability

- [ ] **README:** `test/performance/README.md` with usage instructions
- [ ] **Changelog:** Document architecture decisions and dependency choices
- [ ] **Version pinning:** Lock exact versions in package.json
- [ ] **Deprecation monitoring:** Document when to upgrade (e.g., web-vitals v4 release)

---

## 🚧 Technical Constraints

### Project Standards (from CLAUDE.md)

1. **TypeScript:** Use strict typing, no `any` without justification
2. **Max file size:** 500 LOC per file, 50 lines per function
3. **Documentation:** Comment "why" not "what", cite sources
4. **Quality gates:** ESLint errors must pass, warnings OK
5. **No hallucination:** Only use verified packages with real documentation

### Existing Tech Stack

```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.1",
  "gsap": "^3.13.0",
  "lenis": "^1.3.11"
}
```

**Testing infrastructure:** Zero automated tests exist currently (manual testing only)

### Environment Assumptions

- **Node.js:** v20+ (verify with `node --version`)
- **npm:** v10+ (verify with `npm --version`)
- **Preview server:** Vite dev server on `http://localhost:4173` (via `npm run preview`)
- **OS:** Linux (WSL2 on Windows, kernel 6.6.87.2-microsoft-standard-WSL2)

---

## 📁 Deliverables

### File Structure

```
/home/cameronai/projects/cre8tive-website-1006/
├── test/
│   └── performance/
│       ├── README.md                    # Usage instructions
│       ├── config.json                  # Test configuration
│       ├── run-tests.ts                 # Main test runner
│       ├── lighthouse-audit.ts          # Lighthouse test module
│       ├── web-vitals-test.ts          # Core Web Vitals module
│       ├── frame-rate-test.ts          # Frame rate profiling module
│       ├── reporters/
│       │   ├── console-reporter.ts     # Pretty console output
│       │   └── json-reporter.ts        # JSON file output
│       ├── utils/
│       │   ├── browser-setup.ts        # Playwright browser config
│       │   └── threshold-validator.ts  # Pass/fail logic
│       └── reports/                    # Generated reports (gitignored)
│           └── .gitkeep
├── .github/
│   └── workflows/
│       └── performance-tests.yml       # CI/CD workflow
├── docs/
│   ├── performance-test-research-2025-10-13.md  # Research findings
│   └── stories/
│       └── story-1.11.md              # UPDATE with test results
└── package.json                        # ADD test:performance script
```

### Code Deliverables

1. **Test Runner** (`test/performance/run-tests.ts`)
   - Orchestrates all 3 test types
   - Loads config, initializes browser, runs tests, generates reports
   - Entry point for `npm run test:performance`

2. **Lighthouse Module** (`test/performance/lighthouse-audit.ts`)
   - Executes Lighthouse audit via playwright-lighthouse or CLI
   - Returns structured metrics matching `LighthouseMetrics` interface

3. **Web Vitals Module** (`test/performance/web-vitals-test.ts`)
   - Injects web-vitals library
   - Simulates user interactions (scroll, click)
   - Captures INP, LCP, CLS
   - Returns structured metrics with good/needs-improvement/poor ratings

4. **Frame Rate Module** (`test/performance/frame-rate-test.ts`)
   - Uses RAF timing or Performance Timeline API
   - Measures FPS during scroll animations
   - Returns avgFPS, minFPS, droppedFrames

5. **Reporters** (`test/performance/reporters/`)
   - Console reporter: Pretty table output (see NFR-3 example)
   - JSON reporter: Structured file output for CI/CD

6. **Documentation** (`test/performance/README.md`)
   ```markdown
   # Performance Testing Infrastructure

   ## Quick Start
   \`\`\`bash
   npm run test:performance
   \`\`\`

   ## Configuration
   Edit `test/performance/config.json` to adjust thresholds.

   ## CI/CD Integration
   Tests run automatically on PRs via GitHub Actions.

   ## Interpreting Results
   - Green ✓ = Metric passed threshold
   - Red ✗ = Metric failed threshold
   - Overall PASS = All 3 categories passed

   ## Troubleshooting
   - "Browser not found" → Run `npx playwright install chromium`
   - "Port 4173 in use" → Kill preview server: `pkill -f vite`

   ## Architecture Decisions
   See `docs/performance-test-research-2025-10-13.md`
   ```

### Documentation Updates

1. **Update Story 1.11** (`docs/stories/story-1.11.md`)
   - Append new section: "Automated Performance Test Results"
   - Include pass/fail status for all 3 test types
   - Mark Action Items #3, #4, #5 as COMPLETE
   - Recommend story status change: ReadyForReview → Review Passed

2. **Research Documentation** (`docs/performance-test-research-2025-10-13.md`)
   - Document package selection rationale
   - Cite sources (npm registry, GitHub release notes, official docs)
   - Include decision matrix from Research Requirements section
   - Note "why this choice AS OF 2025-10-13"

---

## 🧪 Testing & Validation

### Self-Testing Checklist (Before Delivery)

- [ ] **Dry run:** Execute `npm run test:performance` successfully
- [ ] **Threshold validation:** Artificially lower thresholds to trigger FAIL state
- [ ] **Error handling:** Kill preview server mid-test, verify graceful failure
- [ ] **Report generation:** Verify JSON and console outputs match schema
- [ ] **TypeScript compilation:** `npx tsc --noEmit` passes clean
- [ ] **ESLint:** `npm run lint` passes (errors only, warnings OK)

### Integration Testing

1. **Execute against live preview server:**
   ```bash
   npm run build
   npm run preview &
   npm run test:performance
   ```

2. **Verify results match manual Chrome DevTools:**
   - Open http://localhost:4173/briefing-engine
   - Run Lighthouse manually (Chrome DevTools > Lighthouse tab)
   - Compare scores ±5% tolerance expected

3. **Test CI/CD workflow locally:**
   ```bash
   act -j performance  # GitHub Actions local simulator
   ```

---

## 🎯 Success Criteria

### Definition of Done

- [ ] All 3 test modules implemented and working (Lighthouse, Web Vitals, Frame Rate)
- [ ] `npm run test:performance` executes successfully in < 60 seconds
- [ ] JSON reports generated in `test/performance/reports/`
- [ ] Console output matches NFR-3 format (pretty table)
- [ ] TypeScript compiles clean (`npx tsc --noEmit`)
- [ ] ESLint passes (errors only)
- [ ] GitHub Actions workflow runs successfully (local simulation via `act`)
- [ ] Story 1.11 updated with test results
- [ ] Research documentation completed with package selection rationale
- [ ] README.md includes usage instructions and troubleshooting

### Acceptance Criteria (From Story 1.11)

**AC #2:** Lighthouse Performance score ≥80, Best Practices ≥90
**AC #3:** Core Web Vitals: INP < 200ms, LCP < 2.5s, CLS < 0.1
**AC #4:** 60fps during GSAP scroll animations (implicit from frame rate testing)

**PASS Criteria:** All 3 ACs satisfied via automated test execution.

---

## 🚨 Critical Considerations

### 1. INP vs FID (2024 Standard Update)

**CRITICAL:** Do NOT implement FID testing. As of March 12, 2024, INP is the official Core Web Vital.

**References:**
- [web.dev: Interaction to Next Paint (INP)](https://web.dev/inp/)
- [Google Search Central Blog: INP becomes Core Web Vital](https://developers.google.com/search/blog/2024/05/inp-cwv)

### 2. Flakiness Mitigation

Performance tests are inherently flaky. Implement:
- **Warmup runs:** Execute test twice, discard first result (cold start)
- **Retry logic:** Retry failed tests up to 3 times before marking FAIL
- **Threshold buffers:** Allow ±5% variance (e.g., 80 score → accept 76-84 range)
- **Network stability:** Verify localhost connection before testing

### 3. Resource Cleanup

**Memory leaks prevention:**
```typescript
try {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // ... test execution

} catch (error) {
  console.error('Test failed:', error);
  throw error;
} finally {
  await browser?.close(); // CRITICAL: Always close browser
}
```

### 4. Security Considerations

- **No credentials in config:** Never commit API keys or secrets
- **Local testing only:** Default config points to localhost (not production)
- **Sanitize user inputs:** If config allows custom URLs, validate against SSRF

---

## 📚 Reference Materials

### Official Documentation

1. **Lighthouse:** https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md
2. **web-vitals:** https://github.com/GoogleChrome/web-vitals
3. **Playwright:** https://playwright.dev/docs/intro
4. **playwright-lighthouse:** https://github.com/abhinaba-ghosh/playwright-lighthouse

### Research Starting Points (Context7 MCP)

```bash
# Use these queries for research phase
mcp__context7__resolve-library-id(libraryName: "playwright")
mcp__context7__get-library-docs(context7CompatibleLibraryID: "/microsoft/playwright")

mcp__context7__resolve-library-id(libraryName: "lighthouse")
mcp__context7__get-library-docs(context7CompatibleLibraryID: "/GoogleChrome/lighthouse")
```

### Archon MCP Queries

```typescript
// Research best practices
mcp__archon__rag_search_knowledge_base({
  query: "Core Web Vitals INP measurement",
  match_count: 5
})

mcp__archon__rag_search_code_examples({
  query: "Playwright Lighthouse integration",
  match_count: 3
})
```

---

## 🧠 AI Agent Instructions

### Research Phase (MANDATORY FIRST STEP)

**DO NOT CODE UNTIL RESEARCH COMPLETE.**

1. **Package verification:**
   - Use Context7 MCP to verify latest versions
   - Check npm registry for deprecation notices
   - Verify playwright-lighthouse is still maintained (last commit < 6 months ago?)

2. **Best practices research:**
   - Use Archon MCP to search knowledge base
   - Use WebSearch for recent blog posts (2024-2025 only)
   - Document findings in `docs/performance-test-research-2025-10-13.md`

3. **Decision matrix:**
   - Create comparison table (see Research Requirements section)
   - Document "why this choice AS OF 2025-10-13"
   - Get user approval before proceeding if research reveals better alternatives

### Implementation Phase

**Excellence Test:** Before writing code, ask:
1. "What would a world-class QA automation engineer do here?"
2. "Have I researched how the best teams solve this?" (Playwright docs, Lighthouse CI examples)
3. "Am I choosing this because it's BEST, or because it's SAFE?"

**Avoid satisficing:**
- ❌ "For simplicity, I'll skip retry logic" → ❌ Flaky tests are unacceptable
- ❌ "A basic approach would be..." → ✅ Implement enterprise-grade solution
- ❌ "This should work..." → ✅ "This is the industry standard because..."

### Testing Phase

**Epistemic Humility:**
- Don't claim "Done" - say "Ready for validation"
- Document assumptions: "This assumes preview server is running on 4173"
- Acknowledge uncertainty: "Frame rate measurement may vary ±5% depending on system load"

### Escalation Triggers

**HALT and ask Cameron if:**
1. Research reveals playwright-lighthouse is deprecated/unmaintained
2. Core Web Vitals thresholds have changed since March 2024
3. TypeScript compilation errors cannot be resolved
4. Tests consistently fail with <70% reliability
5. Same approach fails ≥3 times

---

## 📞 Handoff Notes

### Context for TEA Agent

**What's been done:**
- Story 1.11 implemented and manually tested via Chrome DevTools MCP
- 6/6 automated tests passed (see docs/stories/story-1.11.md lines 460-727)
- Implementation is solid: lazy loading works, responsive verified, bundle size compliant

**What's blocking:**
- 3 manual tests remain: Lighthouse, Core Web Vitals INP, Frame Rate
- Chrome DevTools MCP cannot invoke Lighthouse or measure real INP
- Need programmatic automation to close out story approval

**Why this matters:**
- Story 1.11 is ReadyForReview but cannot move to "Review Passed" without these 3 tests
- Future stories will need same performance validation (reusable infrastructure)
- CI/CD integration will prevent performance regressions

**User expectations:**
- Enterprise-grade solution (not a quick script)
- Reusable across Epic 1 stories
- CI/CD ready for GitHub Actions
- Follows CLAUDE.md principles (research first, excellence over simplicity)

### Files to Reference

**MUST READ:**
- `/home/cameronai/projects/cre8tive-website-1006/CLAUDE.md` - Project standards
- `/home/cameronai/.claude/CLAUDE.md` - Global AI behavior guidelines
- `/home/cameronai/projects/cre8tive-website-1006/docs/stories/story-1.11.md` - Story context
- `/home/cameronai/projects/cre8tive-website-1006/docs/stories/story-context-1.1.11.xml` - Detailed test plans

**HELPFUL:**
- `/home/cameronai/projects/cre8tive-website-1006/docs/tech-spec-epic-1.md` - Performance requirements
- `/home/cameronai/projects/cre8tive-website-1006/package.json` - Existing dependencies

---

## ⏱️ Estimated Effort

| Phase | Estimated Time |
|-------|----------------|
| Research & package verification | 30-45 min |
| Implementation (3 modules + runner) | 2-3 hours |
| Reporters & configuration | 45-60 min |
| Testing & debugging | 1-2 hours |
| Documentation & GitHub Actions | 30-45 min |
| **Total** | **5-7 hours** |

**Breakdown by deliverable:**
- lighthouse-audit.ts: 45 min
- web-vitals-test.ts: 60 min
- frame-rate-test.ts: 45 min
- run-tests.ts: 30 min
- Reporters: 45 min
- GitHub Actions: 30 min
- Documentation: 45 min
- Testing: 90 min

---

## 🎓 Learning Objectives (For TEA Agent)

By completing this brief, you will:

1. **Master modern performance testing:** INP vs FID, Lighthouse 11+, web-vitals v3+
2. **Understand CI/CD integration:** GitHub Actions, artifact uploads, PR comments
3. **Apply enterprise patterns:** Modular architecture, configuration files, structured reporting
4. **Practice research-driven development:** Verify before building, document decisions
5. **Build reusable infrastructure:** Not just a one-off script, but a maintainable test suite

---

## ✅ Final Checklist (Before Marking Complete)

- [ ] Research documentation completed (`docs/performance-test-research-2025-10-13.md`)
- [ ] All TypeScript files compile clean (`npx tsc --noEmit`)
- [ ] ESLint passes (errors only)
- [ ] `npm run test:performance` executes successfully
- [ ] JSON report generated in correct format
- [ ] Console output matches NFR-3 table format
- [ ] GitHub Actions workflow runs successfully (via `act` or manual trigger)
- [ ] Story 1.11 updated with test results (Action Items #3-5 marked complete)
- [ ] README.md includes troubleshooting section
- [ ] All deliverables committed to git (except `test/performance/reports/`)

**When all checkboxes complete:** Notify Cameron for final review and story approval.

---

**END OF BRIEF**

---

## Appendix A: Example Test Output (Target)

```json
{
  "timestamp": "2025-10-13T14:30:00.000Z",
  "route": "/briefing-engine",
  "viewport": { "width": 1920, "height": 1080 },
  "lighthouse": {
    "scores": {
      "performance": 92,
      "bestPractices": 95,
      "accessibility": 88,
      "seo": 100,
      "metrics": {
        "firstContentfulPaint": 1200,
        "largestContentfulPaint": 2300,
        "totalBlockingTime": 150,
        "cumulativeLayoutShift": 0.05,
        "speedIndex": 2100
      }
    },
    "passed": true,
    "failures": []
  },
  "webVitals": {
    "INP": { "value": 185, "rating": "good" },
    "LCP": { "value": 2300, "rating": "good" },
    "CLS": { "value": 0.05, "rating": "good" },
    "passed": true
  },
  "frameRate": {
    "avgFPS": 58.3,
    "minFPS": 48.1,
    "droppedFrames": 12,
    "totalFrames": 300,
    "passed": true
  },
  "overallResult": "PASS",
  "duration": 45234
}
```

## Appendix B: Quick Reference Commands

```bash
# Install dependencies
npm install --save-dev playwright playwright-lighthouse

# Install browsers
npx playwright install chromium

# Run tests
npm run test:performance

# Run with custom config
npm run test:performance -- --config=test/performance/custom-config.json

# Run specific test type only
npm run test:performance -- --only=lighthouse
npm run test:performance -- --only=webvitals
npm run test:performance -- --only=framerate

# Debug mode (headful browser)
npm run test:performance -- --debug

# CI mode (fail fast, no retries)
npm run test:performance -- --ci
```
