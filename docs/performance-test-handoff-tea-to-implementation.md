# Performance Testing: Planning → Implementation Handoff
**From:** Test Design Workflow (testarch/test-design)
**To:** Implementation Phase (TEA Agent)
**Date:** 2025-10-13
**Status:** Ready for Research Phase

---

## Document Relationship

```
┌─────────────────────────────────────────────────────────────────┐
│ Test Design Workflow Output (TEA Generated)                     │
├─────────────────────────────────────────────────────────────────┤
│ • performance-test-risk-assessment-2025-10-13.md               │
│ • performance-test-coverage-matrix-2025-10-13.md               │
│                                                                 │
│ Defines: WHY (risk mitigation), WHAT (test scenarios),         │
│          WHEN (execution order), WHO (priorities)              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    Implemented Using
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Technical Implementation Brief                                  │
├─────────────────────────────────────────────────────────────────┤
│ • performance-test-architecture-brief.md (800 lines)           │
│                                                                 │
│ Defines: HOW (TypeScript interfaces, file structure,           │
│          code patterns, config schemas, CI/CD setup)           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Risk Mitigation → Implementation Mapping

| Risk ID | Risk Description | Implementation Section | Verification Method |
|---------|------------------|------------------------|---------------------|
| **R1** (Score 6) | Package deprecation | **Brief § Research Requirements** (lines 51-120) | Context7 MCP + WebSearch queries documented in research doc |
| **R2** (Score 6) | Test flakiness | **Brief § Critical Considerations → Flakiness Mitigation** (lines 666-675) | Warmup runs, retry logic, ±5% buffers implemented in run-tests.ts |
| **R3** (Score 6) | Story blocker | **Brief § Escalation Triggers** (lines 701-706) | HALT conditions coded, user approval checkpoints |
| **R4** (Score 4) | INP accuracy | **Brief § FR-2 Critical Implementation Note** (lines 255-260) | Manual Chrome DevTools baseline comparison |
| **R5** (Score 4) | Frame rate approach | **Brief § FR-3 Measurement Approach** (lines 312-338) | Option 1: RAF timing (code provided) |
| **R6** (Score 4) | Resource cleanup | **Brief § Critical Considerations → Resource Cleanup** (lines 678-691) | try/finally browser.close() pattern |
| **R7** (Score 4) | CI/CD timing | **Brief § NFR-4: CI/CD Integration** (lines 450-488) | wait-on http://localhost:4173 with timeout |
| **R8** (Score 4) | web-vitals version | **Brief § Research Requirements → Technology Verification** (lines 58-74) | Check web-vitals v3 vs v4 in research phase |

---

## Coverage Matrix → Technical Specification Mapping

### Phase 1: Research & Foundation (Pre-Implementation)

| TEA Coverage Item | Brief Section | Deliverable | Success Criteria |
|-------------------|---------------|-------------|------------------|
| Research package status | **§ Research Requirements** (lines 51-120) | `docs/performance-test-research-2025-10-13.md` | Decision matrix with 4 approaches compared |
| Document findings | **§ Research Requirements → Document findings in** (line 79) | Research doc with package versions, last commit dates, stability assessment | Contains "why this choice AS OF 2025-10-13" |
| Get user approval | **§ Research Requirements → Decision criteria** (lines 93-98) | User confirmation before coding | Cameron approves approach or suggests alternative |

**Implementation Reference:**
- Brief lines 51-120: Full research methodology
- Brief lines 724-739: Reference Materials (Context7/Archon queries)

---

### Phase 2: P0 Critical Path (FR-1: Lighthouse Audit)

| TEA Coverage Scenario | Priority | Brief Section | Module File | Config Threshold |
|-----------------------|----------|---------------|-------------|------------------|
| FR-1 Baseline performance audit | P0 | **§ FR-1: Lighthouse Audit Automation** (lines 122-181) | `test/performance/lighthouse-audit.ts` | Performance ≥80, Best Practices ≥90 |

**Implementation Details:**

**File:** `test/performance/lighthouse-audit.ts`

**Key Requirements from Brief:**
- Lines 131-141: **Test Scenarios** (5 scenarios: Baseline, Cached, Slow 3G, Mobile, Desktop)
- Lines 143-157: **Critical Metrics Interface** (TypeScript structure)
- Lines 160-181: Execution time < 30 seconds

**Configuration Reference:**
```json
// From Brief lines 361-390 (config.json schema)
{
  "thresholds": {
    "lighthouse": {
      "performance": 80,      // ← TEA Coverage P0 threshold
      "bestPractices": 90,    // ← Story AC #2
      "accessibility": 90,
      "seo": 90
    }
  }
}
```

**Risk Mitigation Ties:**
- R1: Verify lighthouse package in research phase
- R2: Implement retry logic (Brief lines 666-675)

---

### Phase 2: P0 Critical Path (FR-2: Core Web Vitals)

| TEA Coverage Scenario | Priority | Brief Section | Module File | Config Threshold |
|-----------------------|----------|---------------|-------------|------------------|
| FR-2 INP - Scroll interaction | P0 | **§ FR-2: Core Web Vitals Measurement** (lines 183-272) | `test/performance/web-vitals-test.ts` | INP < 200ms |
| FR-2 LCP - Idle page measurement | P0 | Same section | Same file | LCP < 2.5s |
| FR-2 CLS - Layout stability | P0 | Same section | Same file | CLS < 0.1 |

**Implementation Details:**

**File:** `test/performance/web-vitals-test.ts`

**Key Requirements from Brief:**
- Lines 192-204: **Test Scenarios** (4 scenarios: Idle, Scroll, Button, Form)
- Lines 206-213: **Thresholds Interface** (2024 standards with INP, NOT FID)
- Lines 215-260: **Critical Implementation Note** - INP requires ≥3 interactions
- Lines 262-272: Inject web-vitals library code snippet

**CRITICAL NOTE from Brief (lines 183-190):**
> "IMPORTANT: As of March 12, 2024, **INP (Interaction to Next Paint)** replaced **FID (First Input Delay)** as a Core Web Vital."

**Configuration Reference:**
```json
// From Brief lines 361-390
{
  "thresholds": {
    "webVitals": {
      "INP": 200,   // ← TEA Coverage P0 threshold (NEW 2024)
      "LCP": 2500,  // ← TEA Coverage P0 threshold
      "CLS": 0.1    // ← TEA Coverage P0 threshold
    }
  }
}
```

**Risk Mitigation Ties:**
- R1: Verify web-vitals v3 vs v4 in research phase (R8)
- R4: Validate INP accuracy against manual Chrome DevTools baseline

---

### Phase 2: P0 Critical Path (FR-3: Frame Rate)

| TEA Coverage Scenario | Priority | Brief Section | Module File | Config Threshold |
|-----------------------|----------|---------------|-------------|------------------|
| FR-3 Scroll animation FPS | P0 | **§ FR-3: Animation Frame Rate Profiling** (lines 274-348) | `test/performance/frame-rate-test.ts` | avgFPS ≥ 55, minFPS ≥ 45 |

**Implementation Details:**

**File:** `test/performance/frame-rate-test.ts`

**Key Requirements from Brief:**
- Lines 283-293: **Test Scenarios** (4 scenarios: Idle, Scroll, Canvas, Combined)
- Lines 295-310: **Measurement Approach Decision** (RAF vs Performance Timeline API)
- Lines 312-338: **Full RAF timing code** (copy/paste ready)
- Lines 340-348: Alternative approach note

**Configuration Reference:**
```json
// From Brief lines 361-390
{
  "thresholds": {
    "frameRate": {
      "avgFPS": 55,           // ← TEA Coverage P0 threshold
      "minFPS": 45,           // ← TEA Coverage P0 threshold
      "maxDroppedFrames": 30
    }
  }
}
```

**Risk Mitigation Ties:**
- R5: Implement RAF timing approach (Brief provides full code)
- R2: 5-second measurement window reduces flakiness

---

### Phase 2: P0 Critical Path (NFR-3: Reporting)

| TEA Coverage Scenario | Priority | Brief Section | Module Files | Validation |
|-----------------------|----------|---------------|--------------|------------|
| NFR-3 Structured reporting | P0 | **§ NFR-3: Reporting** (lines 392-448) | `test/performance/reporters/json-reporter.ts` + `console-reporter.ts` | JSON schema validation |

**Implementation Details:**

**Files:**
- `test/performance/reporters/json-reporter.ts` - Structured JSON output
- `test/performance/reporters/console-reporter.ts` - Pretty table output

**Key Requirements from Brief:**
- Lines 392-407: **JSON Schema** (Full TypeScript interface for PerformanceTestReport)
- Lines 409-429: **Console Output** (Pretty table example)
- Lines 431-448: Pass/fail criteria, duration tracking

**Output Locations:**
- JSON: `test/performance/reports/briefing-engine-{timestamp}.json`
- Console: STDOUT with table formatting

**Risk Mitigation Ties:**
- R9: JSON schema validation prevents drift

---

### Phase 2: P0 Critical Path (NFR-4: CI/CD)

| TEA Coverage Scenario | Priority | Brief Section | Deliverable File | Validation |
|-----------------------|----------|---------------|------------------|------------|
| NFR-4 CI/CD integration | P0 | **§ NFR-4: CI/CD Integration** (lines 450-488) | `.github/workflows/performance-tests.yml` | Local simulation via `act` |

**Implementation Details:**

**File:** `.github/workflows/performance-tests.yml`

**Key Requirements from Brief:**
- Lines 450-457: npm script requirements (exit code 0 = pass, 1 = fail)
- Lines 459-488: **Full GitHub Actions workflow** (copy/paste ready)
- Line 472: wait-on http://localhost:4173 (mitigates R7)

**Risk Mitigation Ties:**
- R7: wait-on with timeout prevents race conditions
- R3: Workflow artifacts preserve test reports for debugging

---

### Phase 3: P1 High Priority

| TEA Coverage Scenario | Priority | Brief Section | Module File | Notes |
|-----------------------|----------|---------------|-------------|-------|
| FR-1 Desktop viewport (1920×1080) | P1 | § FR-1 Test Scenarios (line 133) | `lighthouse-audit.ts` | Add to scenarios array in config |
| FR-1 Mobile viewport (375×812) | P1 | § FR-1 Test Scenarios (line 135) | `lighthouse-audit.ts` | Viewport config in Brief line 370 |
| FR-3 Idle baseline FPS | P1 | § FR-3 Test Scenarios (line 286) | `frame-rate-test.ts` | Establishes performance floor |
| NFR-2 Config file loading | P1 | **§ NFR-2: Configurability** (lines 350-390) | `test/performance/config.json` | Schema validation |

**Implementation Details:**

**Config Schema (lines 361-390):**
- routes[] array for multi-page testing
- networkConditions for Fast 3G/Slow 3G
- outputDir, screenshots, htmlReports flags

---

### Phase 4: P2 Medium Priority

| TEA Coverage Scenario | Priority | Brief Section | Implementation Note |
|-----------------------|----------|---------------|---------------------|
| FR-1 Cached performance | P2 | § FR-1 Test Scenarios (line 134) | Second navigation in same context |
| FR-1 Slow 3G simulation | P2 | § FR-1 Test Scenarios (line 135) + config lines 379-382 | Network throttling config |
| FR-2 Button/Form interactions | P2 | § FR-2 Test Scenarios (lines 199-202) | Secondary interaction validation |
| FR-3 Canvas stress test | P2 | § FR-3 Test Scenarios (line 288) | ParticleCore isolation |
| FR-3 Combined load | P2 | § FR-3 Test Scenarios (line 289) | Multi-animation orchestration |

**Defer to Future if Time Constrained:** All P2 scenarios are stretch goals. Focus on P0/P1 first.

---

## File Structure Cross-Reference

**TEA Design Output → Implementation Deliverables**

| TEA Document | Brief Section | Files to Create |
|--------------|---------------|-----------------|
| Risk Assessment | Lines 666-706 (Critical Considerations) | N/A (informational only) |
| Coverage Matrix | Lines 122-348 (FR-1/FR-2/FR-3) | `lighthouse-audit.ts`, `web-vitals-test.ts`, `frame-rate-test.ts` |
| Execution Order | Lines 490-562 (File Structure) | All 8 deliverable files |

**Full File Structure from Brief (lines 490-562):**

```
test/performance/
├── README.md                    # Lines 564-594 (template provided)
├── config.json                  # Lines 361-390 (schema provided)
├── run-tests.ts                 # Lines 596-601 (orchestrator)
├── lighthouse-audit.ts          # Lines 122-181 (FR-1 module)
├── web-vitals-test.ts          # Lines 183-272 (FR-2 module)
├── frame-rate-test.ts          # Lines 274-348 (FR-3 module)
├── reporters/
│   ├── console-reporter.ts     # Lines 409-429 (pretty table)
│   └── json-reporter.ts        # Lines 392-407 (structured output)
├── utils/
│   ├── browser-setup.ts        # Playwright browser config
│   └── threshold-validator.ts  # Pass/fail logic
└── reports/                    # Generated reports (gitignored)
    └── .gitkeep

.github/workflows/
└── performance-tests.yml       # Lines 459-488 (full workflow)

docs/
├── performance-test-research-2025-10-13.md    # Research findings
└── stories/story-1.11.md                      # UPDATE with results
```

---

## Traceability Matrix: AC → Coverage → Implementation

| Story AC | TEA Coverage (P0) | Brief Section | Module File | Pass Criteria |
|----------|-------------------|---------------|-------------|---------------|
| **AC #2:** Lighthouse Performance ≥80, Best Practices ≥90 | FR-1 Baseline, FR-1 Desktop, FR-1 Mobile | Lines 122-181 | `lighthouse-audit.ts` | `lighthouse.passed: true` in JSON report |
| **AC #3:** INP < 200ms, LCP < 2.5s, CLS < 0.1 | FR-2 INP Scroll, FR-2 LCP Idle, FR-2 CLS | Lines 183-272 | `web-vitals-test.ts` | `webVitals.passed: true` in JSON report |
| **AC #4 (implicit):** 60fps GSAP animations | FR-3 Scroll animation, FR-3 Idle baseline | Lines 274-348 | `frame-rate-test.ts` | `frameRate.passed: true` in JSON report |

**Evidence Location:** `test/performance/reports/*.json`

**Story Update:** Lines 596-605 specify updating `docs/stories/story-1.11.md` with results

---

## Implementation Workflow

### Step 1: Research Phase (45 min)

**TEA Action:**
1. Execute Context7 MCP queries (Brief lines 724-739)
2. Execute WebSearch queries (Brief lines 58-74)
3. Create decision matrix (Brief lines 76-98)
4. Document findings in `docs/performance-test-research-2025-10-13.md`
5. Get Cameron's approval on package selection

**Deliverable:** Research doc with package versions, maintenance status, decision rationale

**Blocks:** All implementation until approved (mitigates R1)

---

### Step 2: Core Modules (3-4 hours)

**TEA Action:**
1. Install packages: `npm install --save-dev playwright playwright-lighthouse` (or selected alternative)
2. Create `test/performance/config.json` (copy Brief lines 361-390)
3. Implement `lighthouse-audit.ts` (reference Brief lines 122-181)
4. Implement `web-vitals-test.ts` (reference Brief lines 183-272, **CRITICAL: use INP not FID**)
5. Implement `frame-rate-test.ts` (copy RAF code from Brief lines 312-338)

**Validation:** Each module exports a function returning Promise<TestResult>

**Risk Mitigation:**
- R2: Implement warmup runs + retry logic in each module
- R6: Add try/finally blocks for browser cleanup

---

### Step 3: Orchestration & Reporting (1 hour)

**TEA Action:**
1. Implement `test/performance/run-tests.ts` (orchestrates 3 modules)
2. Implement `reporters/json-reporter.ts` (schema from Brief lines 392-407)
3. Implement `reporters/console-reporter.ts` (table from Brief lines 409-429)
4. Add `package.json` script: `"test:performance": "tsx test/performance/run-tests.ts"`

**Validation:** `npm run test:performance` executes end-to-end

---

### Step 4: CI/CD (30 min)

**TEA Action:**
1. Create `.github/workflows/performance-tests.yml` (copy Brief lines 459-488)
2. Test locally: `act -j performance` (if act installed)
3. Commit workflow file

**Validation:** Workflow file passes GitHub Actions syntax validation

---

### Step 5: Documentation (30 min)

**TEA Action:**
1. Create `test/performance/README.md` (template Brief lines 564-594)
2. Update `docs/stories/story-1.11.md` with test results
3. Mark Action Items #3, #4, #5 as COMPLETE

**Validation:** README has Quick Start, Configuration, Troubleshooting sections

---

### Step 6: Self-Testing (1 hour)

**TEA Action (from Brief lines 606-634):**
1. Execute `npm run test:performance` successfully
2. Lower thresholds artificially to trigger FAIL state
3. Kill preview server mid-test, verify graceful failure
4. Verify JSON and console outputs match schemas
5. Run `npx tsc --noEmit` (TypeScript compilation)
6. Run `npm run lint` (ESLint errors only)

**Success Criteria:** All 6 validation steps pass

---

## Critical Reminders for Implementation

### From CLAUDE.md (Global Instructions)

1. **Research FIRST** - No coding until research phase complete
2. **Excellence Test** - "What would world-class QA engineer do here?"
3. **Max LOC** - 500 LOC/file, 50 lines/function
4. **Escalation Rule** - HALT after 3 failed attempts
5. **No hallucination** - Only use verified packages

### From Brief (Performance-Specific)

1. **INP vs FID** (Lines 183-190) - CRITICAL: Use INP (2024 standard), NOT FID
2. **Flakiness** (Lines 666-675) - Warmup, retry, ±5% buffers are MANDATORY for R2 mitigation
3. **Resource cleanup** (Lines 678-691) - try/finally browser.close() in EVERY test
4. **TypeScript strict** (Lines 350-358) - No `any` without justification

### From TEA Risk Assessment

1. **R1 Mitigation** - Research phase is BLOCKING
2. **R2 Mitigation** - Flakiness safeguards are NON-NEGOTIABLE
3. **R3 Mitigation** - Escalate to Cameron if blocked

---

## Success Criteria (Definition of Done)

**From Brief (Lines 636-661):**

- [ ] All 3 test modules implemented (Lighthouse, Web Vitals, Frame Rate)
- [ ] `npm run test:performance` completes in < 60 seconds
- [ ] JSON reports generated in `test/performance/reports/`
- [ ] Console output matches NFR-3 format (pretty table)
- [ ] TypeScript compiles clean (`npx tsc --noEmit`)
- [ ] ESLint passes (errors only)
- [ ] GitHub Actions workflow runs successfully (local simulation via `act`)
- [ ] Story 1.11 updated with test results
- [ ] Research documentation completed
- [ ] README.md includes usage + troubleshooting

**TEA Coverage Matrix Alignment:**
- [ ] P0 tests (7 scenarios) implemented and passing
- [ ] P1 tests (4 scenarios) implemented (or documented as deferred)
- [ ] P2 tests (5 scenarios) documented as stretch goals

---

## Quick Reference: Where to Find Answers

| Question | Answer Location |
|----------|-----------------|
| "What packages do I use?" | Brief lines 51-120 (Research Phase will determine) |
| "How do I structure the JSON report?" | Brief lines 392-407 (TypeScript interface) |
| "What's the INP threshold?" | Brief lines 206-213 (INP < 200ms, 2024 standard) |
| "How do I measure frame rate?" | Brief lines 312-338 (RAF timing code provided) |
| "What goes in config.json?" | Brief lines 361-390 (Full schema) |
| "How do I handle flakiness?" | Brief lines 666-675 (Warmup, retry, buffers) |
| "What if Lighthouse fails 3 times?" | Brief lines 701-706 (HALT and ask Cameron) |
| "How do I update Story 1.11?" | Brief lines 596-605 (Update with test results) |

---

## Handoff Checklist

**Before Starting Implementation:**
- [ ] TEA has reviewed this handoff document
- [ ] TEA has read Brief lines 51-120 (Research Requirements)
- [ ] TEA has read Brief lines 636-661 (Definition of Done)
- [ ] TEA has read Brief lines 666-706 (Critical Considerations + Escalation)
- [ ] Cameron has approved TEA's risk assessment (R1, R2, R3 mitigations)
- [ ] Cameron has approved TEA's coverage matrix (P0/P1/P2 priorities)

**Ready to Execute:**
- [ ] Research Phase → Create `docs/performance-test-research-2025-10-13.md`
- [ ] Get Cameron approval on package selection
- [ ] Begin implementation per Step 2 (Core Modules)

---

**END OF HANDOFF**

**For questions or clarifications, consult:**
1. This handoff doc (mapping document)
2. `docs/performance-test-architecture-brief.md` (technical specifications)
3. `docs/performance-test-risk-assessment-2025-10-13.md` (TEA's risk analysis)
4. `docs/performance-test-coverage-matrix-2025-10-13.md` (TEA's coverage plan)
5. Cameron (HALT conditions or ambiguity)

---

**Squawk!** 🦅 Ready to fly!
