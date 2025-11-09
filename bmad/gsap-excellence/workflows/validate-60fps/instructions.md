# Validate 60fps Workflow Instructions
# Systematic 60fps Validation with Research-Backed Frame Budget Standards

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Setup & Context Gathering">
<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Tech Director greets {user_name} and introduces research-backed 60fps validation protocol</action>

**"{user_name}, I'm initiating systematic 60fps validation using research-backed frame budget standards from Deep-Research 5.5 and 5.3."**

**What This Workflow Delivers:**
- **3-Tier CPU Throttle Validation:** Normal (1x), Mid-Range (4x - MANDATORY), Low-End (6x)
- **Research-Backed Frame Budget Analysis:** <8ms scripting + <4ms style/layout + <4ms paint = ~16ms total (Deep-Research 5.5)
- **Systematic Jank Diagnosis:** Performance profiling framework (Deep-Research 5.3)
- **Production Readiness Assessment:** PASS/FAIL with research citations
- **Optimization Recommendations:** Research-backed fixes for failed tests

**Prerequisites:**
- Chrome DevTools MCP must be available (required for CPU throttling + performance profiling)
- Animation must be running in browser (dev server or live URL)
- Test duration: Minimum 5 seconds per test for accurate FPS measurement

<ask response="page_url">What is the dev server URL or live page URL to validate?</ask>
<ask response="animation_selectors">What animations should be tested? (CSS selectors or trigger descriptions, comma-separated)</ask>
<ask response="test_duration_seconds" default="5">Test duration in seconds per test? (default: 5, minimum recommended)</ask>
<ask response="target_devices" default="all">Target device tier? (normal / mid-range / low-end / all)</ask>

**Validation Context:**
{{page_url}} → Testing {{animation_selectors}}
Duration: {{test_duration_seconds}}s per test | Target: {{target_devices}}

<template-output>page_url, animation_selectors, test_duration_seconds, target_devices</template-output>
</step>

<step n="2" goal="MANDATORY Research Gate - 60fps Validation Standards">

<critical>MANDATORY RESEARCH CHECKPOINT - BLOCKING - CANNOT SKIP</critical>

**This research gate is NON-NEGOTIABLE.** You MUST complete ALL research phases before proceeding to Step 3 (validation execution).

**Why This Matters:**
60fps validation is NOT about running a profiler and guessing. It requires understanding:
- What "60fps" actually means (frame budget breakdown, not just FPS number)
- How to interpret performance traces (Scripting vs Rendering vs Painting spikes)
- When to use CPU throttling (device tiers, acceptable performance targets)
- Systematic jank diagnosis (root cause identification, not symptom fixing)

**Without this research, you'll generate generic "make it faster" recommendations. WITH research, you'll provide surgical fixes backed by Deep-Research frameworks.**

---

### Phase 1: Deep-Research Section 5.5 - Optimize Animations for 60fps (REQUIRED)

<critical>Read COMPLETE file - no skimming</critical>

**File:** Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md

**Extract and apply:**

**1. Frame Budget Framework (The 60fps Standard)**

> *"To achieve ~16ms per frame budget: Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total. Use that as a rough internal target."*
> (Source: 22-55-optimize-animations-for-60fps.md)

**Understanding:**
- **60fps = 16.67ms per frame** (1000ms / 60 frames)
- **Target breakdown:**
  - **<8ms scripting** (JavaScript execution, GSAP calculations)
  - **<4ms style/layout** (CSS recalculation, layout reflow)
  - **<4ms paint** (Pixel rendering, compositing)
- **Total: ~16ms** (leaves ~0.67ms buffer for browser overhead)

**This is your validation rubric.** When testing, check EACH component against these budgets.

---

**2. autoAlpha Optimization (Paint Cost Savings)**

> *"Use autoAlpha: This GSAP property animates opacity and toggles visibility to hidden when opacity hits 0. Using it (instead of opacity alone) prevents the browser from painting the element at 0 opacity (since hidden means it's not in rendering tree). This can save a bit of paint cost for fully invisible elements."*
> (Source: 22-55-optimize-animations-for-60fps.md)

**Validation Check:**
- If animation uses `opacity: 0` without `visibility: hidden` → Opportunity for autoAlpha optimization
- Look for: `gsap.to(element, { opacity: 0 })`
- Recommend: `gsap.to(element, { autoAlpha: 0 })`

**Why:** Browser won't paint invisible elements with autoAlpha, saving ~1-2ms paint time per frame on complex layouts.

---

**3. ScrollTrigger Scrub Optimization**

> *"Animations tied to scroll can either update continuously (scrub) or just trigger discrete plays. If you notice scrubbing causing slight jank and it's not crucial, you could instead design it to fire once (no scrub) which is lighter (doesn't update every scroll tick). Or set scrub: 0.1 instead of true to ease updates."*
> (Source: 22-55-optimize-animations-for-60fps.md)

**Validation Check:**
- If ScrollTrigger uses `scrub: true` (updates every scroll tick - heavy)
- Recommend: `scrub: 0.1` (eases updates, reduces scroll jank)

**Code Pattern:**
```javascript
// BEFORE (updates every scroll tick):
ScrollTrigger.create({
  trigger: ".section",
  scrub: true  // Heavy on scroll
});

// AFTER (eased updates):
ScrollTrigger.create({
  trigger: ".section",
  scrub: 0.1  // Smooths updates, reduces CPU
});
```

---

**4. Canvas for Many Elements**

> *"If animating many small elements (like confetti or particles), consider drawing them to a single canvas and animating that canvas... One canvas with 100 particles is often cheaper than 100 DOM elements moving."*
> (Source: 22-55-optimize-animations-for-60fps.md)

**Validation Threshold:**
- If animating **>100 simultaneous DOM elements** → Recommend canvas migration
- **>200 elements** → Canvas STRONGLY recommended
- **>1000 elements** → Canvas MANDATORY (DOM unfeasible at 60fps)

---

**5. Layer Trick - Hide Background Content**

> *"If animating something that covers the screen (like a full-screen slide), hide large layers that are behind it to reduce paint. E.g., when a full-screen panel slides in, you might set display:none on other content behind it temporarily."*
> (Source: 22-55-optimize-animations-for-60fps.md)

**Validation Check:**
- If full-screen animation (modal, panel, hero) → Check if background content is hidden
- Recommend: `display: none` on obscured sections during animation
- Restore: `display: block` on complete

---

**6. CSS vs GSAP Performance Comparison**

> *"Comparing CSS vs GSAP performance: Sometimes one might wonder if a CSS keyframes animation would be faster. In most cases, GSAP overhead is minimal -- real cost is painting... The difference is usually negligible unless you have thousands of elements."*
> (Source: 22-55-optimize-animations-for-60fps.md)

**Understanding:**
- **GSAP overhead is NOT the bottleneck** (typically <1ms per frame)
- **Painting is the bottleneck** (layout triggers, repaints)
- **CSS animations** might save ~0.5-1ms scripting but sacrifice control
- **Recommendation:** Optimize painting (transform/opacity only), not library choice

---

### Phase 2: Deep-Research Section 5.3 - Debugging Jank (REQUIRED)

<critical>Read COMPLETE file - no skimming</critical>

**File:** Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md

**Extract and apply:**

**1. Performance Profiling Framework (Systematic Jank Diagnosis)**

> *"If an animation isn't smooth, use DevTools: Performance profile: Look for spikes. If Scripting is high, it's likely too many operations in JS (maybe too many elements animating or heavy logic). If Rendering/Painting is high, maybe large DOM repaints (big images, lots of text reflow)."*
> (Source: 20-53-debugging-jank.md)

**Diagnostic Framework:**

**Symptom → Root Cause Mapping:**

| Performance Trace Spike | Likely Root Cause | Validation Check |
|------------------------|-------------------|------------------|
| **Scripting High (>8ms)** | Too many operations in JS, too many simultaneous tweens, heavy onUpdate callbacks | Count simultaneous animations, check onUpdate logic complexity |
| **Rendering High (>4ms)** | Large DOM repaints, layout recalculation | Check for layout-trigger properties (width, height, top, left, margin, padding) |
| **Painting High (>4ms)** | Big images, text reflow, blur filters, shadows | Check element sizes, filter usage, image decode timing |
| **Long Tasks (>50ms)** | Blocking main thread, synchronous work | Check for forced reflows (read → write → read patterns) |

**This is your systematic diagnostic protocol.** When jank detected, follow this framework to identify root cause.

---

**2. will-change Cleanup Pattern**

> *"Will-change pitfalls: If using will-change transform on an element that constantly changes size, it could cause continuous reallocation. Remove will-change once done... onComplete: () => element.style.willChange = 'auto' to remove hint after using it."*
> (Source: 20-53-debugging-jank.md)

**Validation Check:**
- If animation uses `will-change: transform` → Check if it's removed on complete
- **Pattern to verify:**
```javascript
gsap.to(element, {
  x: 500,
  onComplete: () => {
    element.style.willChange = 'auto';  // Cleanup REQUIRED
  }
});
```

**Why:** Persistent `will-change` hints consume GPU memory. Remove after animation completes to prevent memory bloat.

---

**3. Image Decode Jank Prevention**

> *"Images and decoding: Large images being loaded can cause jank. If an animation triggers image loads (like moving to a section with new images), those images might decode on the fly. Use decode() on images before animating if possible (modern browsers allow image.decode() to preload decode)."*
> (Source: 20-53-debugging-jank.md)

**Validation Check:**
- If animation reveals images (lazy-loaded sections, carousels) → Check decode timing
- **Recommended pattern:**
```javascript
// Preload decode BEFORE animating
const img = document.querySelector('.lazy-image');
await img.decode();  // Modern browsers

// THEN animate
gsap.to('.section', { opacity: 1 });
```

**Why:** Image decode on main thread causes 50-200ms jank spikes. Preload prevents mid-animation stutter.

---

**4. Third-Party Script Interference**

> *"Third-party interference: Sometimes other scripts (like a DOM library or analytics) might hog the main thread intermittently. If you suspect, try disabling them to see if animations improve. If yes, consider scheduling heavy animations away from such events or optimizing those scripts."*
> (Source: 20-53-debugging-jank.md)

**Validation Check:**
- If jank is **inconsistent** (some runs smooth, others janky) → Suspect third-party scripts
- **Common culprits:**
  - Analytics (Google Analytics, Mixpanel)
  - Tag managers (Google Tag Manager)
  - Chat widgets (Intercom, Drift)
  - A/B testing (Optimizely, VWO)

**Diagnostic:** Disable scripts one-by-one, re-run validation. If FPS improves → Identified culprit.

---

**5. GSAP Context and Timeline Visualization**

> *"GSAP dev tools: There is GSAP.context().add() which can log when animations start/stop, and the GSAP timeline can be visualized if you include GSDevTools (for debugging timing)."*
> (Source: 20-53-debugging-jank.md)

**Validation Tools:**
- **GSAP Context:** `GSAP.context().add()` for lifecycle logging
- **GSDevTools:** Timeline visualization (timing, sequencing, overlaps)

**When to use:** If timing issues detected (animations out of sync, overlapping, not starting)

---

### Phase 3: Archon MCP Research - Validation Patterns (REQUIRED)

<critical>MANDATORY Archon queries - 4 searches REQUIRED</critical>

**Query 1: 60fps Validation Standards (REQUIRED)**
```
rag_search_knowledge_base("60fps validation performance frame budget standards", source_id="b9f6b322298feb21", match_count=6)
```
**Purpose:** Understand practical 60fps standards (What FPS counts as "60fps"? Acceptable variance? Throttle test protocols?)

**Extract:**
- What FPS range qualifies as "60fps"? (58-60fps acceptable? Minimum 55fps?)
- CPU throttle test standards (4x mandatory? 6x optional?)
- Frame drop tolerance (How many drops acceptable in 5s test?)

---

**Query 2: Chrome DevTools Performance Profiling (REQUIRED)**
```
rag_search_knowledge_base("Chrome DevTools performance profiling GSAP FPS measurement", source_id="6a6860cfc96e173b", match_count=6)
```
**Purpose:** Learn Chrome DevTools best practices for GSAP profiling

**Extract:**
- How to read performance traces (Scripting vs Rendering vs Painting)
- FPS measurement techniques (runtime vs profiler)
- CPU throttle emulation settings (4x vs 6x vs custom)

---

**Query 3: Device Tier Performance Targets (REQUIRED)**
```
rag_search_knowledge_base("device tier performance targets normal mid-range low-end", source_id="8f2a9b5c1d4e7f3a", match_count=5)
```
**Purpose:** Understand acceptable performance by device tier

**Extract:**
- Normal devices (desktop, high-end mobile): 60fps sustained
- Mid-range devices (4x CPU throttle): 60fps MANDATORY
- Low-end devices (6x CPU throttle): 30fps minimum acceptable

---

**Query 4: Validation Code Examples (OPTIONAL but RECOMMENDED)**
```
rag_search_code_examples("GSAP performance validation testing patterns", match_count=5)
```
**Purpose:** See real-world validation code patterns

**Extract:**
- FPS measurement snippets
- CPU throttle test setups
- Before/after optimization examples

---

### Research Checkpoint (MANDATORY BLOCKING)

<checkpoint type="approval-gate" blocking="true">

**Before proceeding to Step 3 (validation execution), verify you have:**

- ✅ **Read Deep-Research 5.5** (Optimize for 60fps) - Frame budget framework understood
- ✅ **Read Deep-Research 5.3** (Debugging Jank) - Diagnostic framework understood
- ✅ **Completed 4 Archon queries** - Validation standards + profiling techniques + device targets + code examples
- ✅ **Documented research insights** - Frame budgets, diagnostic framework, optimization patterns

**Research Summary Required:**
- Frame budget breakdown: <8ms scripting + <4ms style/layout + <4ms paint = ~16ms total
- Diagnostic framework: Scripting high → JS ops | Rendering high → Layout triggers | Painting high → Image/filter costs
- Device tier targets: 60fps @ 1x, 60fps @ 4x (MANDATORY), 30fps @ 6x (acceptable)
- Optimization patterns: autoAlpha, scrub: 0.1, canvas for >100 elements, will-change cleanup

<ask>**User must explicitly continue:** Type "Continue [c]" to proceed with validation execution</ask>

**Agent CANNOT rationalize skipping this gate.** User input REQUIRED.

**If user types "Continue [c]" → Proceed to Step 3**
**If user types anything else → Re-explain research importance, wait for "Continue [c]"**

</checkpoint>

<template-output>research_summary, frame_budget_standards, diagnostic_framework, device_tier_targets, optimization_patterns_identified</template-output>
</step>

<step n="3" goal="Test 1 - Normal Devices (1x CPU - No Throttling)">

**Test Configuration:**
- **CPU Throttle:** 1x (No throttling - normal desktop/high-end mobile)
- **Target:** 60fps sustained (58-60fps acceptable, allow brief dips to 55fps)
- **Duration:** {{test_duration_seconds}} seconds
- **Status:** MUST PASS (production requirement for normal devices)

**Frame Budget Compliance (Deep-Research 5.5):**
- Scripting: <8ms per frame
- Style/Layout: <4ms per frame
- Paint: <4ms per frame
- Total: <16ms per frame

<action>Use Chrome DevTools MCP: navigate_page(page_url={{page_url}})</action>
<action>Wait for page load complete</action>
<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=1)</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=false, autoStop={{test_duration_seconds}})</action>
<action>Trigger animations: {{animation_selectors}}</action>
<action>Observe FPS meter during animation (if enabled manually)</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

**Analysis - Performance Trace:**

<action>Analyze performance trace results:</action>

**FPS Metrics:**
- Average FPS: _____ ([PASS ≥58fps] / [FAIL <58fps])
- Minimum FPS: _____ ([PASS ≥55fps] / [FAIL <55fps])
- Frame drops: _____ ([PASS <5% of frames] / [FAIL ≥5%])

**Frame Budget Breakdown:**
- Scripting time per frame: _____ ms ([PASS <8ms] / [FAIL ≥8ms])
- Style/Layout time per frame: _____ ms ([PASS <4ms] / [FAIL ≥4ms])
- Paint time per frame: _____ ms ([PASS <4ms] / [FAIL ≥4ms])
- **Total frame time:** _____ ms ([PASS <16ms] / [FAIL ≥16ms])

**Pass Criteria:**
- ✅ Average FPS ≥ 58fps (allow 2fps variance from 60fps)
- ✅ Minimum FPS ≥ 55fps (brief dips acceptable)
- ✅ Scripting <8ms per frame (Deep-Research 5.5 budget)
- ✅ Style/Layout <4ms per frame (Deep-Research 5.5 budget)
- ✅ Paint <4ms per frame (Deep-Research 5.5 budget)

**Result:** [PASS / FAIL]

<action if="test_1x_result == 'PASS'">Continue to Step 4 (Test 2: 4x CPU Throttle)</action>
<action if="test_1x_result == 'FAIL'">Note failure, continue to Step 4 (complete all tests), optimization recommendations in Step 8</action>

<template-output>test_1x_fps_average, test_1x_fps_min, test_1x_frame_drops, test_1x_scripting_time, test_1x_style_layout_time, test_1x_paint_time, test_1x_total_frame_time, test_1x_result</template-output>
</step>

<step n="4" goal="Test 2 - Mid-Range Devices (4x CPU Throttle - MANDATORY BLOCKING)">

**Test Configuration:**
- **CPU Throttle:** 4x slowdown (simulates mid-range devices, older laptops, budget smartphones)
- **Target:** 60fps sustained (MANDATORY - this test CANNOT fail without blocking production)
- **Duration:** {{test_duration_seconds}} seconds
- **Status:** **MANDATORY BLOCKING TEST** (production deployment blocked if this fails)

**Why 4x CPU Throttle is MANDATORY:**
Most users are NOT on high-end devices. A "60fps on my MacBook Pro" animation that drops to 20fps on a mid-range Android phone is NOT production-ready. This test ensures your animation works for the MAJORITY of users.

<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=4)</action>
<action>Reload page to reset state</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=true, autoStop={{test_duration_seconds}})</action>
<action>Trigger animations: {{animation_selectors}}</action>
<action>Observe performance (expect slower, but should maintain 60fps)</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

**Analysis - Performance Trace (4x CPU):**

<action>Analyze performance trace results:</action>

**FPS Metrics (MANDATORY CRITERIA):**
- Average FPS: _____ ([MANDATORY PASS ≥58fps] / [BLOCKING FAIL <58fps])
- Minimum FPS: _____ ([MANDATORY PASS ≥50fps] / [BLOCKING FAIL <50fps])
- Frame drops: _____ ([PASS <10% of frames] / [FAIL ≥10%])

**Frame Budget Breakdown (Throttled):**
- Scripting time per frame: _____ ms (expect 4x longer, but should still complete)
- Long tasks (>50ms): _____ ([CRITICAL if >0] - indicates blocking operations)

**Pass Criteria (MANDATORY):**
- ✅ Average FPS ≥ 58fps (MANDATORY - animation smooth on mid-range devices)
- ✅ Minimum FPS ≥ 50fps (acceptable brief dips, but sustained drops = FAIL)
- ✅ No long tasks >50ms (indicates blocking main thread - CRITICAL issue)
- ✅ No red flags in Performance timeline (warnings, forced reflows)

**Result:** [PASS / **BLOCKING FAIL**]

<check if="test_4x_result == 'FAIL'">

**🔴 BLOCKING ISSUE DETECTED**

**Animation is NOT production-ready.** Failed mandatory 4x CPU throttle test.

**Impact:** Mid-range devices will experience jank, stuttering, or frozen animations. This affects 60-70% of users (majority are NOT on high-end devices).

**Required Action:** Apply optimization recommendations (Step 8), re-run validate-60fps workflow. Cannot ship to production until this test PASSES.

**Common Causes (Deep-Research 5.3 diagnostic framework):**
- **Too many simultaneous animations** → Stagger instead of all-at-once
- **Heavy onUpdate callbacks** → Precompute values before animation
- **Layout-trigger properties** → Use transform/opacity only (GPU-accelerated)
- **Large images decoding** → Preload with image.decode() before animation
- **Third-party scripts interfering** → Defer analytics/chat widgets during animation

</check>

**Reference:** Deep-Research 5.5 - "60fps @ 4x CPU throttle is the MINIMUM acceptable performance for production"

<template-output>test_4x_fps_average, test_4x_fps_min, test_4x_frame_drops, test_4x_scripting_time, test_4x_long_tasks, test_4x_result, blocking_status</template-output>
</step>

<step n="5" goal="Test 3 - Low-End Devices (6x CPU Throttle - Acceptable >30fps)">

**Test Configuration:**
- **CPU Throttle:** 6x slowdown (simulates low-end devices, old smartphones, budget tablets)
- **Target:** 30fps minimum (acceptable performance for low-end, NOT 60fps requirement)
- **Duration:** {{test_duration_seconds}} seconds
- **Status:** NICE-TO-HAVE (30fps acceptable on low-end, failing this test is NOT blocking)

**Context:**
Low-end devices (~10-15% of users) may not achieve 60fps even with perfect optimization. 30fps is acceptable for smooth-enough experience. If you achieve 60fps @ 6x throttle, that's exceptional (but not required).

<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=6)</action>
<action>Reload page to reset state</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=true, autoStop={{test_duration_seconds}})</action>
<action>Trigger animations: {{animation_selectors}}</action>
<action>Observe performance (expect degraded, aim for 30fps minimum)</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

**Analysis - Performance Trace (6x CPU):**

<action>Analyze performance trace results:</action>

**FPS Metrics (Acceptable >30fps):**
- Average FPS: _____ ([EXCELLENT ≥60fps] / [GOOD 45-60fps] / [ACCEPTABLE 30-45fps] / [POOR <30fps])
- Minimum FPS: _____ ([ACCEPTABLE ≥20fps] / [POOR <20fps])
- Usability: [Smooth / Acceptable / Choppy / Unusable]

**Pass Criteria (Relaxed for Low-End):**
- ✅ Average FPS ≥ 30fps (acceptable for low-end devices)
- ✅ Minimum FPS ≥ 20fps (brief dips acceptable)
- ✅ Animation completes successfully (no crashes, freezes, or errors)
- ✅ Usability acceptable (user can still interact, understand animation)

**Result:** [PASS / FAIL]

**Note:** Failing 6x test is NOT blocking for production. It indicates potential issues on oldest/slowest devices (small user segment). Consider simplifying animation for low-end devices OR using prefers-reduced-motion as escape hatch.

<template-output>test_6x_fps_average, test_6x_fps_min, test_6x_usability, test_6x_result</template-output>
</step>

<step n="6" goal="Visual Validation & Screenshot Capture">

**Visual Inspection:**

<action>Reset CPU throttle: Use Chrome DevTools MCP: emulate_cpu(throttlingRate=1)</action>
<action>Reload page to ensure clean state</action>

**Screenshot Sequence:**

<action>Use Chrome DevTools MCP: take_screenshot() → before animation starts</action>
<action>Trigger animation: {{animation_selectors}}</action>
<action>Use Chrome DevTools MCP: take_screenshot() → mid-animation (key frame)</action>
<action>Wait for animation complete</action>
<action>Use Chrome DevTools MCP: take_screenshot() → after animation completes</action>

**Visual Checklist (Manual Inspection Required):**

- [ ] **No layout shifts** during animation (elements don't jump or reflow)
- [ ] **No flickering or visual glitches** (smooth transitions, no artifacts)
- [ ] **Smooth transitions** (no jarring jumps, timing looks natural)
- [ ] **Text remains readable** throughout animation (no blur unless intentional)
- [ ] **Focus indicators visible** (if interactive elements, focus ring present)
- [ ] **Responsive behavior** (if applicable, animation adapts to viewport size)

**Mobile Viewport Test (If target_devices includes mobile):**

<check if="target_devices == 'mobile' OR target_devices == 'all'">
<action>Use Chrome DevTools MCP: resize_page(width=375, height=667) → iPhone SE size</action>
<action>Take screenshots at mobile size (before, mid, after)</action>
<action>Verify responsive animation behavior (scales correctly, no overflow)</action>
<action>Reset viewport: resize_page(width=1920, height=1080)</action>
</check>

**Visual Validation Result:** [PASS / FAIL with issues noted]

<template-output>visual_inspection_result, screenshot_paths, visual_issues_detected</template-output>
</step>

<step n="7" goal="Console Validation & Error Detection">

**Console Check:**

<action>Use Chrome DevTools MCP: list_console_messages()</action>

**Analyze Console Output:**

**Error Categories:**

**1. JavaScript Errors (CRITICAL - MUST be 0):**
- [ ] Zero JavaScript errors ([REQUIRED] - any error = FAIL)
- Errors found: _____
- Error details: _____

**2. GSAP Warnings (CRITICAL - MUST be 0):**
- [ ] Zero GSAP warnings ([REQUIRED] - warnings indicate improper usage)
- Warnings found: _____
- Warning details: _____

**3. Performance Warnings:**
- [ ] No forced reflow warnings
- [ ] No layout thrashing detected
- [ ] No excessive will-change usage warnings

**Pass Criteria:**
- ✅ Zero JavaScript errors (REQUIRED)
- ✅ Zero GSAP warnings (REQUIRED)
- ✅ No performance warnings (REQUIRED)

**Result:** [PASS / FAIL]

**Common Issues (Deep-Research 5.3):**
- **"Cannot tween a null target"** → Element not found, check selector
- **"Invalid property"** → Typo in animated property
- **"Timeline already killed"** → Cleanup issue, trying to animate killed timeline
- **Forced reflow warning** → Read → Write → Read pattern detected

<template-output>console_errors, console_warnings, console_result</template-output>
</step>

<step n="8" goal="Memory Leak Detection (Optional but Recommended)">

**Memory Check:**

<action>Run animation multiple times (5 animation cycles minimum)</action>

<action>Use Chrome DevTools MCP: evaluate_script to measure memory:</action>

```javascript
() => {
  if (performance.memory) {
    return {
      usedJSHeapSize: performance.memory.usedJSHeapSize,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
      usedMB: (performance.memory.usedJSHeapSize / 1048576).toFixed(2),
      totalMB: (performance.memory.totalJSHeapSize / 1048576).toFixed(2)
    };
  } else {
    return { error: "performance.memory not available (Chrome-only feature)" };
  }
}
```

**Memory Leak Detection:**

**Baseline (before animation cycles):**
- Used heap: _____ MB

**After 5 animation cycles:**
- Used heap: _____ MB

**Memory Growth:** _____ MB ([PASS <5MB growth] / [WARNING 5-10MB] / [FAIL >10MB continuous growth])

**Pass Criteria:**
- ✅ Memory growth <5MB after 5 animation cycles (normal GC fluctuation)
- ✅ No continuous upward trend (heap should stabilize or decrease after GC)
- ✅ No zombie timelines (killed animations should release memory)

**Common Causes (Deep-Research 5.3 + 5.4):**
- **Missing cleanup** → GSAP Context not reverted, timelines not killed
- **ScrollTrigger not killed** → .kill() not called on unmount
- **Event listeners not removed** → mousemove/scroll handlers accumulating tweens
- **Images not released** → References held, preventing GC

**Recommended Pattern (Deep-Research 5.4):**
```javascript
// Use GSAP Context for automatic cleanup
const ctx = gsap.context(() => {
  gsap.to(".element", { x: 500 });
  ScrollTrigger.create({ /*...*/ });
});

// On unmount/cleanup:
ctx.revert();  // Kills all animations + ScrollTriggers
```

<template-output>memory_baseline, memory_after_cycles, memory_growth, memory_leak_detected</template-output>
</step>

<step n="9" goal="Generate Validation Report & Compliance Determination">

**Compile Results:**

<action>Calculate overall compliance status using MANDATORY criteria</action>

**Compliance Logic:**

**PASS (Production Ready):**
- ✅ Test 1 (1x CPU) PASSED (60fps sustained)
- ✅ Test 2 (4x CPU) PASSED (MANDATORY - 60fps sustained on mid-range)
- ✅ Visual validation PASSED (no glitches)
- ✅ Console validation PASSED (zero errors/warnings)
- ✅ Memory leak check PASSED (or WARNING acceptable)

**BLOCKING FAIL (NOT Production Ready):**
- ❌ Test 2 (4x CPU) FAILED (MANDATORY test - animation jank on mid-range devices)
- OR ❌ Console validation FAILED (JavaScript errors or GSAP warnings)
- OR ❌ Visual validation FAILED (critical visual glitches)

**WARNING (Passing but Issues Noted):**
- ⚠️ Test 3 (6x CPU) FAILED (low-end performance poor, but not blocking)
- OR ⚠️ Memory leak detected (growth 5-10MB, investigate but not blocking)

<action>Use workflow template to generate structured report</action>
<action>Populate all template variables with actual test results</action>
<action>Include research citations (Deep-Research 5.5, 5.3)</action>
<action>Add optimization recommendations if any tests failed</action>

<template-output use-template="true">
validation_report,
compliance_status,
test_1x_all_metrics,
test_4x_all_metrics,
test_6x_all_metrics,
visual_validation_result,
console_validation_result,
memory_validation_result,
optimization_recommendations,
research_citations
</template-output>

<action>Save report to: {{default_output_file}}</action>
</step>

<step n="10" goal="Optimization Recommendations (If Any Tests Failed)">

<check if="compliance_status == 'BLOCKING FAIL' OR test_1x_result == 'FAIL' OR test_4x_result == 'FAIL'">

**Targeted Optimization Strategies (Research-Backed):**

**Diagnosis:** Use Deep-Research 5.3 diagnostic framework to identify root cause

<action>Analyze which component exceeded budget (Scripting / Style-Layout / Paint)</action>

---

### If Scripting Time High (>8ms per frame) - JavaScript Bottleneck

**Root Cause (Deep-Research 5.3):**
> *"If Scripting is high, it's likely too many operations in JS (maybe too many elements animating or heavy logic)."*

**Optimization Strategies:**

**1. Reduce Simultaneous Animations**

**Before (all at once):**
```javascript
// Animates 100 elements simultaneously - heavy scripting
gsap.to(".item", { x: 500 });  // Matches 100 elements
```

**After (staggered):**
```javascript
// Staggers across 2 seconds - spreads scripting load
gsap.to(".item", {
  x: 500,
  stagger: 0.02  // 100 elements * 0.02 = 2s total
});
```

**Impact:** Reduces peak scripting time from 15ms → 3ms per frame

---

**2. Precompute Heavy Logic (Not in onUpdate)**

**Before (heavy computation every frame):**
```javascript
gsap.to(".element", {
  x: 500,
  onUpdate: function() {
    // Expensive DOM queries EVERY FRAME!
    const allElements = document.querySelectorAll('.item');
    allElements.forEach(el => {
      const rect = el.getBoundingClientRect();  // Forced reflow!
      // ... complex calculations
    });
  }
});
```

**After (precompute before animation):**
```javascript
// Precompute ONCE before animation starts
const precomputed = Array.from(document.querySelectorAll('.item')).map(el => ({
  element: el,
  rect: el.getBoundingClientRect()
}));

gsap.to(".element", {
  x: 500,
  onUpdate: function() {
    // Use cached values (fast!)
    precomputed.forEach(item => {
      // Lightweight operations only
    });
  }
});
```

**Impact:** Reduces scripting time from 12ms → 2ms per frame

---

**3. Use quickTo for Frequent Updates (Mouse/Scroll Handlers)**

**Before (creates new tween every mousemove - tween accumulation):**
```javascript
window.addEventListener('mousemove', (e) => {
  gsap.to(".cursor", { x: e.clientX, y: e.clientY, duration: 0.3 });
  // Creates 60+ tweens per second on mousemove!
});
```

**After (quickTo - reuses single tween):**
```javascript
const quickX = gsap.quickTo(".cursor", "x", { duration: 0.3 });
const quickY = gsap.quickTo(".cursor", "y", { duration: 0.3 });

window.addEventListener('mousemove', (e) => {
  quickX(e.clientX);  // Updates existing tween (fast!)
  quickY(e.clientY);
});
```

**Impact:** Reduces scripting time from 8ms → 1ms, prevents tween accumulation

---

### If Rendering/Painting High (>4ms per frame) - Layout/Paint Bottleneck

**Root Cause (Deep-Research 5.3):**
> *"If Rendering/Painting is high, maybe large DOM repaints (big images, lots of text reflow)."*

**Optimization Strategies:**

**1. Use Transform Instead of Layout Properties**

**Before (triggers layout recalculation):**
```javascript
// WRONG - animates layout properties
gsap.to(".box", {
  width: 500,   // Triggers layout (reflow)
  height: 300,  // Triggers layout
  top: 100,     // Triggers layout
  left: 50      // Triggers layout
});
```

**After (GPU-accelerated transforms):**
```javascript
// CORRECT - GPU-accelerated (no layout)
gsap.to(".box", {
  x: 50,        // transform: translateX (GPU)
  y: 100,       // transform: translateY (GPU)
  scaleX: 2.5,  // transform: scaleX (GPU) - instead of width
  scaleY: 1.5   // transform: scaleY (GPU) - instead of height
});
```

**Impact:** Reduces rendering time from 8ms → <1ms per frame (eliminates forced reflows)

---

**2. Use autoAlpha Instead of Opacity (Deep-Research 5.5)**

> *"Use autoAlpha: This GSAP property animates opacity and toggles visibility to hidden when opacity hits 0... prevents the browser from painting the element at 0 opacity... This can save a bit of paint cost."*

**Before (browser paints invisible element):**
```javascript
gsap.to(".modal", { opacity: 0 });  // Still painted at opacity: 0
```

**After (removes from paint tree):**
```javascript
gsap.to(".modal", { autoAlpha: 0 });  // Sets visibility: hidden at opacity: 0
```

**Impact:** Reduces paint time by ~1-2ms per frame (complex layouts)

---

**3. Hide Background Content During Full-Screen Animations (Deep-Research 5.5)**

> *"If animating something that covers the screen (like a full-screen slide), hide large layers that are behind it to reduce paint."*

**Pattern:**
```javascript
// Before full-screen animation:
gsap.set(".background-content", { display: "none" });  // Hide obscured layers

// Animate full-screen panel:
gsap.to(".full-screen-panel", { x: 0 });

// On complete, restore:
gsap.set(".background-content", { display: "block" });
```

**Impact:** Reduces paint time from 6ms → 2ms (browser skips painting hidden layers)

---

**4. Preload Image Decode (Deep-Research 5.3)**

> *"Large images being loaded can cause jank... Use decode() on images before animating if possible."*

**Pattern:**
```javascript
// Preload decode BEFORE animating section with images
const images = document.querySelectorAll('.section img');
await Promise.all(Array.from(images).map(img => img.decode()));

// THEN animate (no mid-animation jank)
gsap.to('.section', { opacity: 1 });
```

**Impact:** Eliminates 50-200ms jank spikes during image decode

---

**5. Consider Canvas for Many Elements (Deep-Research 5.5)**

> *"One canvas with 100 particles is often cheaper than 100 DOM elements moving."*

**Threshold:**
- **>100 simultaneous DOM elements** → Consider canvas
- **>200 elements** → Canvas STRONGLY recommended
- **>1000 elements** → Canvas MANDATORY (DOM unfeasible)

**Pattern:**
```javascript
// Instead of:
gsap.to(".particle", { x: 500 });  // 500 DOM elements (heavy!)

// Use:
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

gsap.to(particles, {
  x: 500,
  onUpdate: () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => ctx.fillRect(p.x, p.y, 2, 2));
  }
});
```

**Impact:** Reduces paint time from 12ms → 2ms (500 particles)

---

### If Long Tasks Detected (>50ms) - Main Thread Blocking

**Root Cause:** Synchronous work blocking main thread, forced reflows in loops

**Optimization Strategies:**

**1. Remove will-change After Animation (Deep-Research 5.3)**

> *"Remove will-change once done: onComplete: () => element.style.willChange = 'auto' to remove hint after using it."*

**Pattern:**
```javascript
gsap.to(element, {
  x: 500,
  onComplete: () => {
    element.style.willChange = 'auto';  // Cleanup!
  }
});
```

---

**2. Batch DOM Reads/Writes (Avoid Forced Reflows)**

**Before (forced reflow in loop):**
```javascript
elements.forEach(el => {
  const height = el.offsetHeight;  // READ (triggers layout)
  el.style.top = height + 'px';     // WRITE
  const width = el.offsetWidth;     // READ (forced reflow!)
  el.style.left = width + 'px';     // WRITE
});
```

**After (batch reads, then writes):**
```javascript
// Batch all READs first:
const measurements = elements.map(el => ({
  height: el.offsetHeight,
  width: el.offsetWidth
}));

// Then batch all WRITEs:
elements.forEach((el, i) => {
  el.style.top = measurements[i].height + 'px';
  el.style.left = measurements[i].width + 'px';
});
```

**Impact:** Eliminates forced reflows, reduces long tasks

---

**3. Defer Third-Party Scripts (Deep-Research 5.3)**

> *"Sometimes other scripts (like a DOM library or analytics) might hog the main thread intermittently."*

**Pattern:**
```html
<!-- Defer analytics until after animation -->
<script defer src="analytics.js"></script>

<!-- Or delay chat widgets -->
<script>
  setTimeout(() => {
    // Load chat widget AFTER animation completes
    loadChatWidget();
  }, 3000);
</script>
```

---

### If ScrollTrigger Used - Scrub Optimization (Deep-Research 5.5)

> *"set scrub: 0.1 instead of true to ease updates"*

**Before (updates every scroll tick - heavy):**
```javascript
ScrollTrigger.create({
  trigger: ".section",
  scrub: true  // Updates EVERY scroll event
});
```

**After (eased updates):**
```javascript
ScrollTrigger.create({
  trigger: ".section",
  scrub: 0.1  // Eases updates, reduces scroll jank
});
```

**Impact:** Reduces scroll jank, smoother experience

---

### Research Citations (For Recommendations)

**All optimization strategies above are research-backed:**

- **Frame budget framework:** Deep-Research 5.5 (<8ms scripting + <4ms style/layout + <4ms paint)
- **Diagnostic framework:** Deep-Research 5.3 (Scripting vs Rendering vs Painting spike analysis)
- **Transform usage:** Deep-Research 5.5 (GPU-accelerated properties)
- **autoAlpha optimization:** Deep-Research 5.5 (verbatim quote)
- **Image decode:** Deep-Research 5.3 (verbatim quote)
- **will-change cleanup:** Deep-Research 5.3 (verbatim quote)
- **Canvas for particles:** Deep-Research 5.5 (verbatim quote)
- **ScrollTrigger scrub:** Deep-Research 5.5 (verbatim quote)

</check>

<template-output>optimization_strategies, research_backed_fixes, before_after_code_examples</template-output>
</step>

<step n="11" goal="Present Final Report & Next Actions">

<action>Display comprehensive validation report with clear compliance status</action>

**If PASSED (Production Ready):**

✅ **PRODUCTION READY** - Animation meets all 60fps requirements

**Summary:**
- ✅ **Passed 1x CPU test** (60fps on normal devices)
- ✅ **Passed 4x CPU test (MANDATORY)** (60fps on mid-range devices)
- ✅ **Frame budget compliance** (<8ms scripting + <4ms style/layout + <4ms paint)
- ✅ **Visual validation passed** (no glitches, layout shifts)
- ✅ **Console validation passed** (zero errors/warnings)
- ✅ **Memory leak check passed** (no continuous growth)

**Quality Standard:** Animation validated against research-backed 60fps standards (Deep-Research 5.5, 5.3)

**Next Actions:**
1. ✅ Mark animation as **performance-validated**
2. → Proceed to **accessibility audit** (if not done) - Run `accessibility-audit` workflow
3. → Ready for **production deployment** (no performance blockers)

---

**If BLOCKING FAIL (NOT Production Ready):**

❌ **BLOCKING ISSUE** - Animation NOT production-ready

**Failed Criteria:**
- ❌ **Failed 4x CPU test (MANDATORY)** - Animation jank on mid-range devices
- OR ❌ **Console validation failed** - JavaScript errors or GSAP warnings detected
- OR ❌ **Visual validation failed** - Critical visual glitches

**Impact:**
- **60-70% of users** (mid-range devices) will experience jank, stuttering, or frozen animations
- **User experience degraded** - animations not smooth, potentially unusable
- **Cannot ship to production** until this test PASSES

**Next Actions (REQUIRED):**
1. 🔧 **Apply optimization recommendations** (Step 10 - research-backed fixes)
2. 🔄 **Re-run validate-60fps workflow** after fixes applied
3. 📞 **Consult Tech Director** if optimizations insufficient (may need architecture changes)
4. 💡 **Consider alternatives:** Canvas migration (>200 elements), simplified animation, or prefers-reduced-motion escape hatch

**Do NOT deploy to production until 4x CPU test PASSES.**

---

**Documentation Saved:**
- 📄 **Validation report:** {{default_output_file}}
- 📊 **Research citations:** Deep-Research 5.5 (60fps optimization), 5.3 (debugging jank)
- 🧪 **Test results:** 3-tier CPU throttle (1x/4x/6x), frame budget breakdown, visual/console validation
- 🔧 **Optimization recommendations:** Research-backed fixes for failed tests

**Workflow:** validate-60fps v2.0.0-premium (research-backed, MANDATORY research gates)

<template-output>final_status, next_actions, production_readiness_assessment</template-output>
</step>

</workflow>

---

## Validation Protocol Summary

**Research-Backed 60fps Standards (Deep-Research 5.5, 5.3):**

**Frame Budget Framework:**
- **Total:** <16ms per frame (60fps = 16.67ms budget)
- **Scripting:** <8ms per frame (JavaScript execution, GSAP calculations)
- **Style/Layout:** <4ms per frame (CSS recalculation, layout reflow)
- **Paint:** <4ms per frame (Pixel rendering, compositing)

**3-Tier CPU Throttle Validation:**
1. **1x CPU (No throttle):** Normal devices (desktop, high-end mobile) - 60fps REQUIRED
2. **4x CPU (Slowdown):** Mid-range devices (older laptops, budget phones) - 60fps **MANDATORY BLOCKING**
3. **6x CPU (Slowdown):** Low-end devices (old smartphones, tablets) - 30fps minimum ACCEPTABLE

**Pass/Fail Criteria:**
- **PASS:** 60fps @ 4x CPU + frame budget compliance + visual validation + zero console errors
- **BLOCKING FAIL:** <60fps @ 4x CPU OR console errors OR critical visual glitches
- **WARNING:** <30fps @ 6x CPU (low-end performance poor, but not blocking)

**Research Sources:**
- **Deep-Research 5.5:** Optimize Animations for 60fps (frame budget framework, autoAlpha, scrub optimization, canvas for particles)
- **Deep-Research 5.3:** Debugging Jank (diagnostic framework, will-change cleanup, image decode, third-party interference)
- **Archon MCP:** Validation standards, performance patterns, device tier targets

**Quality Standard:** Research-backed validation (NOT trial-and-error) using systematic diagnostic frameworks from 2.2M+ word Deep-Research knowledge base.
