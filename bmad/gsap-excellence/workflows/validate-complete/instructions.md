<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/validate-complete/workflow.yaml</critical>

# validate-complete - Comprehensive Validation Workflow

**Agent:** Tech Director
**Workflow:** validate-complete
**Purpose:** Comprehensive GSAP animation validation using Chrome DevTools MCP

---

## Overview

This workflow validates GSAP animations against production-ready standards using Chrome DevTools MCP for performance profiling, visual validation, and console error detection. Validated against Deep-Research Section 5.5 (60fps optimization), Archon KB, and latest 2024-2025 best practices.

**When to Use:**
- ✅ Before deploying animations to production
- ✅ After optimization changes (validate improvements)
- ✅ For code review gates
- ✅ Client deliverable quality assurance

**Success Criteria:**
- 60fps on high-end devices (no throttle)
- 60fps on mid-range devices (4x CPU throttle)
- 30fps minimum on low-end devices (6x throttle)
- Zero console errors/warnings
- No memory leaks
- prefers-reduced-motion fallback present

---

## Step 1: Context Gathering

<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Tech Director greets {user_name} and prepares comprehensive validation suite</action>

**"{user_name}, let's run a comprehensive validation of your GSAP animation. This will check performance, visual quality, accessibility, and console health."**

<ask response="page_url">
**Page URL**

Provide the dev server URL or live page URL for testing:
- Local dev: `http://localhost:8080`
- Staging: `https://staging.example.com`
- Production: `https://example.com`

**IMPORTANT:** Chrome DevTools MCP must be able to access this URL.
</ask>

<ask response="animation_description">
**Animation Description**

What animation are we validating?

Example:
- "Hero section parallax scroll animation"
- "Card stagger reveal on scroll"
- "Modal slide-in transition"
</ask>

<ask response="target_devices">
**Target Devices**

Which devices must pass validation?
- Desktop only
- Mobile only
- Both desktop and mobile

**Note:** Mobile testing uses viewport emulation + CPU throttling.
</ask>

<ask response="test_conditions">
**Test Conditions**

Which performance conditions should be tested?
- Normal only (high-end devices)
- Throttled only (mid/low-end devices)
- Both (recommended for production)

**Recommended:** Both for production deployments.
</ask>

<action>Capture metadata for validation report</action>

<template-output>page_url, animation_description, target_devices, test_conditions</template-output>

---

## Step 2: Conduct Validation Research (MANDATORY)

<action>🚨 MANDATORY RESEARCH CHECKPOINT</action>
<action>Before proceeding to performance validation, you MUST conduct comprehensive research from three sources: Deep-Research frameworks, 2024-2025 web evidence, and Archon knowledge base.</action>

**Tech Director addresses {user_name}:**

**"Before we validate your animation, I need to ensure we're using the latest standards and best practices. Let me research the current validation protocols..."**

---

### Research Phase 1: Deep-Research Validation Standards

<action>Read Deep-Research Section 5.5: 60fps Optimization</action>
<action>Location: /docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md</action>
<action>Extract the following from Section 5.5:
- 60fps performance standards
- Frame time budget: 1000ms / 60fps = 16.67ms per frame
- Paint time budgets (<16ms per frame)
- JS execution budgets (<5ms per frame)
- Acceptable performance on throttled devices (4x, 6x CPU)
</action>

<action>Read Deep-Research Section 5.3: Debugging Jank</action>
<action>Location: /docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md</action>
<action>Extract:
- How to identify jank in Chrome DevTools
- Paint and layout thrashing detection methods
- GPU acceleration verification techniques
- will-change CSS property optimization
</action>

<action>Read Deep-Research Section 6.2: Accessibility (CRITICAL)</action>
<action>Location: /docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md</action>
<action>Extract:
- prefers-reduced-motion media query implementation
- Fallback animation strategies when motion is reduced
- User control requirements for accessible animations
</action>

---

### Research Phase 2: Latest 2024-2025 Validation Standards

<action>Summarize latest Chrome DevTools performance testing best practices (2025):</action>
<action>Document:
- FPS meter enablement: Performance panel → "Show frames per second (FPS) meter"
- Incognito/Guest Mode for clean measurements (eliminates extension noise)
- CPU Throttling protocols: 4x slowdown for mid-range devices, 6x for low-end
- Non-compositing animation detection (red triangles in timeline)
</action>

<action>Summarize GSAP performance validation findings (Web Almanac 2024):</action>
<action>Document:
- GSAP achieves consistent 60fps even under high DOM load conditions
- requestAnimationFrame is default (automatically syncs with display refresh rate)
- Hardware acceleration: transform and opacity properties offload to GPU
- Timeline batching reduces performance overhead by grouping updates
</action>

<action>Summarize frame budget awareness (AugustInfotech 2024):</action>
<action>Document:
- Complex transitions can raise paint times from 5ms to 30ms
- Breaching 16ms frame budget compromises fluid 60fps rendering
- Animation packing groups duplicate animations to minimize browser reflows
</action>

---

### Research Phase 3: Archon MCP Knowledge Base Queries

<action>Execute Archon Query 1: 60fps Validation Standards</action>
<action>Run: rag_search_knowledge_base("60fps performance standards frame budget", source_id="b9f6b322298feb21", match_count=8)</action>
<action>Purpose: Understand frame time budgets and throttling test protocols from GSAP official documentation</action>

<action>Execute Archon Query 2: Chrome DevTools Profiling Techniques</action>
<action>Run: rag_search_knowledge_base("Chrome DevTools performance profiling", source_id="b9f6b322298feb21", match_count=8)</action>
<action>Purpose: Learn profiling techniques, metrics to measure, interpretation methods</action>

<action>Execute Archon Query 3: Console Error Pattern Recognition</action>
<action>Run: rag_search_knowledge_base("GSAP console errors warnings validation", source_id="b9f6b322298feb21", match_count=6)</action>
<action>Purpose: Understand what GSAP errors/warnings mean and how to interpret console output</action>

---

### Document Research Findings

<action>Compile research findings into structured summary:</action>

**1. 60fps Performance Standards:**
- Frame time budget: 16.67ms per frame (Deep-Research 5.5)
- Paint time target: <16ms per frame (2024-2025 best practices)
- JS execution target: <5ms per frame
- CPU throttling expectations:
  - High-end devices: No throttle (1x CPU)
  - Mid-range devices: 4x CPU throttle
  - Low-end devices: 6x CPU throttle

**2. Validation Tools & Techniques:**
- Chrome DevTools FPS meter (Performance panel)
- CPU throttling emulation (4x, 6x rates)
- Performance trace recording and analysis
- Memory heap snapshot comparison for leak detection
- Console message monitoring (zero tolerance for errors/warnings)

**3. Success Criteria (Production-Ready Standards):**
- High-end (no throttle): 60fps sustained, minimum 55fps
- Mid-range (4x throttle): 60fps sustained (GSAP 2024 benchmark)
- Low-end (6x throttle): 30fps minimum acceptable
- Console health: 0 errors, 0 warnings
- Memory stability: No growth across animation cycles
- Accessibility: prefers-reduced-motion fallback MANDATORY

**4. Jank Identification Methods:**
- Red timeline bars indicate layout thrashing
- Yellow bars indicate scripting bottlenecks
- Purple bars indicate rendering/painting
- GPU layer visualization for hardware acceleration verification

**5. Accessibility Requirements (BLOCKING):**
- MUST implement prefers-reduced-motion detection
- MUST provide fallback behavior (simplified or disabled animation)
- CANNOT ship without accessibility compliance

---

### Research Approval Checkpoint

<ask response="research_validated">
✅ **RESEARCH VALIDATION CHECKPOINT**

Review the research findings documented above. Before proceeding to performance validation, verify:

**Required Documentation:**
- ✅ 60fps standards understood (16.67ms frame budget, throttling protocols)
- ✅ Chrome DevTools profiling techniques learned (FPS meter, CPU throttling, traces)
- ✅ Success criteria defined (60fps high/mid, 30fps low, zero console errors)
- ✅ Jank identification methods documented
- ✅ Accessibility requirements clear (prefers-reduced-motion MANDATORY)

**Research Sources Consulted:**
- ✅ Deep-Research Sections 5.5, 5.3, 6.2
- ✅ 2024-2025 web evidence (Chrome DevTools, Web Almanac, frame budgets)
- ✅ Archon MCP queries (3 queries executed)

**Type 'continue' to proceed to Step 3 (Performance Validation).**
**Type 'redo' to conduct additional research.**
</ask>

<check if="research_validated != 'continue'">
  <action>User requested additional research. Returning to research phase...</action>
  <goto step="2">Re-executing research protocol...</goto>
</check>

<action>✅ Research validated. Proceeding to Step 3: Performance Validation using Chrome DevTools MCP...</action>

---

## Step 3: Performance Validation (Chrome DevTools MCP)

**Chrome DevTools MCP REQUIRED for this step**

### 3.1: Navigate to Page

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })
```

Wait for page to fully load and animation to be ready.

### 3.2: FPS Profiling - High-End (No Throttle)

```javascript
mcp__chrome-devtools__performance_start_trace({ reload: true })
```

Let animation run for 5-10 seconds.

```javascript
mcp__chrome-devtools__performance_stop_trace()
```

**Analyze Results:**
- **Target:** 60fps average
- **Minimum acceptable:** 55fps (brief drops OK, sustained <55fps = FAIL)
- **Paint time:** <16ms per frame
- **JS execution:** <5ms per frame

**PASS Criteria:** 60fps sustained, no frame drops below 55fps

### 3.3: CPU Throttling - Mid-Range (4x Slowdown)

```javascript
mcp__chrome-devtools__emulate_cpu({ throttlingRate: 4 })
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })  // Reload with throttling
mcp__chrome-devtools__performance_start_trace({ reload: false })
```

Let animation run for 5-10 seconds.

```javascript
mcp__chrome-devtools__performance_stop_trace()
```

**Analyze Results:**
- **Target:** 60fps average (GSAP should maintain 60fps even on 4x throttle per 2024 benchmarks)
- **If FPS <60fps:** PERFORMANCE ISSUE - optimization needed

**PASS Criteria:** 60fps sustained on 4x throttle

### 3.4: CPU Throttling - Low-End (6x Slowdown)

```javascript
mcp__chrome-devtools__emulate_cpu({ throttlingRate: 6 })
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })  // Reload with 6x throttling
mcp__chrome-devtools__performance_start_trace({ reload: false })
```

Let animation run for 5-10 seconds.

```javascript
mcp__chrome-devtools__performance_stop_trace()
```

**Analyze Results:**
- **Minimum acceptable:** 30fps average
- **If FPS <30fps:** CRITICAL PERFORMANCE ISSUE

**PASS Criteria:** ≥30fps sustained on 6x throttle

### 3.5: Memory Leak Check

Run animation 5+ times (full cycle: start → end → restart).

```javascript
mcp__chrome-devtools__evaluate_script({
  function: `() => {
    return {
      usedJSHeapSize: performance.memory.usedJSHeapSize,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
    };
  }`
})
```

**Check:** Memory should NOT continuously grow across animation cycles.

**PASS Criteria:** Memory stabilizes after 2-3 cycles (no sustained growth)

**Reset Throttling:**
```javascript
mcp__chrome-devtools__emulate_cpu({ throttlingRate: 0 })  // Disable throttling
```

<action>Capture and analyze all performance validation results</action>

<action>For each test level (high-end, mid-range, low-end), extract from Chrome DevTools traces:
- Average FPS across test duration
- Minimum FPS (lowest frame rate observed)
- Paint time per frame (if available)
- JS execution time per frame (if available)
</action>

<action>Determine status for each test level:
- High-end: PASS if ≥60fps average AND ≥55fps minimum, FAIL otherwise
- Mid-range: PASS if ≥60fps average, FAIL otherwise (GSAP 2024 benchmark)
- Low-end: PASS if ≥30fps average, FAIL otherwise
</action>

<action>For memory validation:
- Calculate memory growth: (memory_after_cycles - memory_initial)
- Status: PASS if growth <5MB, WARNING if 5-10MB, FAIL if >10MB
</action>

<action>Generate detailed status messages and analysis for each test level:
- high_end_detailed_status: "✅ PASS - 60fps sustained" or "❌ FAIL - {{fps}}fps (below 60fps target)"
- mid_range_detailed_status: Similar format for mid-range results
- low_end_detailed_status: Similar format for low-end results (30fps minimum)
- high_end_analysis, mid_range_analysis, low_end_analysis: Brief explanation of results (1-2 sentences)
- memory_analysis: Memory leak assessment summary
</action>

<template-output>high_end_fps, high_end_min_fps, high_end_paint_time, high_end_js_time, high_end_status, high_end_detailed_status, high_end_analysis, mid_range_fps, mid_range_min_fps, mid_range_paint_time, mid_range_status, mid_range_detailed_status, mid_range_analysis, low_end_fps, low_end_min_fps, low_end_status, low_end_detailed_status, low_end_analysis, memory_initial, memory_after_cycles, memory_growth, memory_status, memory_analysis</template-output>

---

## Step 4: Visual Validation (Screenshots)

### 4.1: Desktop Viewport Screenshots

```javascript
mcp__chrome-devtools__take_screenshot()  // Before animation
```

Trigger animation.

```javascript
mcp__chrome-devtools__take_screenshot()  // Mid-animation (key frame)
mcp__chrome-devtools__take_screenshot()  // After animation complete
```

**Visual Checks:**
- ✅ No visual glitches
- ✅ Animation renders correctly
- ✅ No layout shifts
- ✅ Elements positioned correctly

### 4.2: Mobile Viewport Screenshots (if target_devices includes mobile)

```javascript
mcp__chrome-devtools__resize_page({ width: 375, height: 667 })  // iPhone size
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })  // Reload for mobile
mcp__chrome-devtools__take_screenshot()  // Mobile: before
```

Trigger animation.

```javascript
mcp__chrome-devtools__take_screenshot()  // Mobile: mid
mcp__chrome-devtools__take_screenshot()  // Mobile: after
```

**Mobile Checks:**
- ✅ Responsive animation behavior
- ✅ Touch interaction works (if applicable)
- ✅ Viewport-appropriate animation (not too complex for mobile)

### 4.3: Analyze Visual Validation Results

<action>Capture all screenshots taken during visual validation</action>

<action>For Desktop viewport:
- Store screenshot references: screenshot_desktop_before, screenshot_desktop_mid, screenshot_desktop_after
- Review screenshots for visual issues
- Assess: desktop_no_glitches (✅ or ❌)
- Assess: desktop_renders_correctly (✅ or ❌)
- Assess: desktop_no_layout_shifts (✅ or ❌)
- Assess: desktop_positioning (✅ or ❌)
- Determine desktop_visual_status: PASS if all checks ✅, FAIL if any ❌
- Write desktop_visual_notes: Brief summary of findings (1-2 sentences)
</action>

<check if="target_devices includes mobile">
  <action>For Mobile viewport:
  - Store screenshot references: screenshot_mobile_before, screenshot_mobile_mid, screenshot_mobile_after
  - Review mobile screenshots for responsiveness
  - Assess: mobile_responsive (✅ or ❌)
  - Assess: mobile_complexity (✅ appropriate or ❌ too complex)
  - Assess: mobile_touch (✅ or ❌ or N/A)
  - Determine mobile_visual_status: PASS if all checks ✅, FAIL if any ❌
  - Write mobile_visual_notes: Brief summary (1-2 sentences)
  </action>
</check>

<check if="target_devices == 'Desktop only'">
  <action>Set mobile testing variables to N/A:
  - mobile_visual_status = "N/A - Desktop only target"
  - All mobile screenshot variables = "Not tested"
  </action>
</check>

<template-output>screenshot_desktop_before, screenshot_desktop_mid, screenshot_desktop_after, desktop_no_glitches, desktop_renders_correctly, desktop_no_layout_shifts, desktop_positioning, desktop_visual_status, desktop_visual_notes, screenshot_mobile_before, screenshot_mobile_mid, screenshot_mobile_after, mobile_responsive, mobile_complexity, mobile_touch, mobile_visual_status, mobile_visual_notes</template-output>

---

## Step 5: Console Validation

```javascript
mcp__chrome-devtools__list_console_messages()
```

**Analyze Console Output:**

**ERRORS (ZERO TOLERANCE):**
- ❌ ANY errors = FAIL
- Must fix all errors before passing validation

**WARNINGS (ZERO TOLERANCE):**
- ❌ ANY GSAP warnings = FAIL
- ❌ Performance warnings = FAIL
- Must address all warnings

**PASS Criteria:** Zero errors, zero warnings

<action>Capture and analyze console output from Chrome DevTools MCP</action>

<action>Parse console messages returned by list_console_messages():
- Count errors: console_errors_count (filter messages with type='error')
- Count warnings: console_warnings_count (filter messages with type='warning')
- Extract error details: console_errors_list (formatted list of all errors with message text and source)
- Extract warning details: console_warnings_list (formatted list of all warnings with message text and source)
</action>

<action>Determine console_status:
- If console_errors_count == 0 AND console_warnings_count == 0: console_status = "✅ PASS - Console clean"
- If console_errors_count > 0 OR console_warnings_count > 0: console_status = "❌ FAIL - Errors/warnings present"
</action>

<template-output>console_errors_count, console_warnings_count, console_errors_list, console_warnings_list, console_status</template-output>

---

## Step 6: Accessibility & Code Quality

### 6.1: prefers-reduced-motion Validation (MANDATORY)

```javascript
mcp__chrome-devtools__evaluate_script({
  function: `() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return {
      prefersReducedMotion: reducedMotion,
      fallbackImplemented: document.querySelector('[data-reduced-motion]') !== null
      // Check for fallback implementation
    };
  }`
})
```

**PASS Criteria:** Fallback animation OR disable animation when `prefers-reduced-motion: reduce`

### 6.2: Cleanup Validation

Verify cleanup code exists (use Code Review):
- React: useGSAP return function kills animations
- ScrollTriggers: `.kill()` on unmount
- Timelines: `.kill()` or `.revert()`

**PASS Criteria:** Cleanup implemented correctly

### 6.3: Capture Accessibility & Code Quality Results

<action>Analyze prefers-reduced-motion validation from evaluate_script result:</action>

<action>Determine prefers_reduced_motion_status:
- If fallbackImplemented == true: prefers_reduced_motion_status = "✅ Implemented"
- If fallbackImplemented == false: prefers_reduced_motion_status = "❌ Not Implemented"
</action>

<action>Write prefers_reduced_motion_details:
- Describe what was found (e.g., "Code checks matchMedia and provides fallback" or "No fallback detected - BLOCKING ISSUE")
- Include code snippet reference if found
- 2-3 sentences
</action>

<action>Determine accessibility_status:
- If prefers_reduced_motion_status == "✅ Implemented": accessibility_status = "✅ PASS - WCAG 2.1 compliant"
- If prefers_reduced_motion_status == "❌ Not Implemented": accessibility_status = "❌ FAIL - Missing required fallback"
</action>

<action>Analyze cleanup validation (code review):</action>

<action>Check for cleanup patterns in animation code:
- React: useGSAP return function with .kill() or .revert()
- Vue: onUnmounted with cleanup
- Vanilla: Manual .kill() or .revert() calls
- ScrollTrigger: .kill() on cleanup
</action>

<action>Determine cleanup_present:
- If cleanup code found: cleanup_present = "✅ Yes"
- If no cleanup found: cleanup_present = "❌ No"
</action>

<action>Write cleanup_details:
- Describe cleanup implementation found (or lack thereof)
- Mention specific patterns: "useGSAP return function calls tween.kill()" or "No cleanup detected"
- 1-2 sentences
</action>

<action>Write cleanup_framework_notes:
- Framework-specific guidance based on what's being used
- E.g., "React: Using useGSAP hook with proper cleanup in return function" or "Vanilla JS: Manual cleanup with timeline.kill()"
</action>

<action>Determine cleanup_status:
- If cleanup_present == "✅ Yes": cleanup_status = "✅ PASS - Cleanup implemented"
- If cleanup_present == "❌ No": cleanup_status = "⚠️ WARNING - No cleanup detected (may cause memory leaks)"
</action>

<template-output>prefers_reduced_motion_status, prefers_reduced_motion_details, accessibility_status, cleanup_present, cleanup_details, cleanup_framework_notes, cleanup_status</template-output>

---

## Step 7: Generate Executive Summary and Validation Report

<action>Compile executive summary by analyzing all validation results from Steps 3-6</action>

### 7.1: Count Issues and Passed Checks

<action>Calculate validation metrics:

**Critical Issues Count:**
Count FAIL statuses from:
- Performance: high_end_status, mid_range_status, low_end_status (any FAIL = critical)
- Memory: memory_status (FAIL = critical)
- Console: console_errors_count > 0 (critical)
- Accessibility: accessibility_status (FAIL = critical)

**Warnings Count:**
Count WARNING/CONDITIONAL statuses from:
- Console: console_warnings_count
- Memory: memory_status (WARNING if growth 5-10MB)
- Any non-critical issues

**Passed Checks Count:**
Count PASS statuses from all validation categories
</action>

### 7.2: Determine Overall Status

<action>Calculate overall_status based on critical issues:

**Logic:**
- If critical_issues_count == 0 AND warnings_count == 0: overall_status = "✅ PASS"
- If critical_issues_count == 0 AND warnings_count > 0: overall_status = "⚠️ CONDITIONAL PASS"
- If critical_issues_count > 0: overall_status = "❌ FAIL"
</action>

### 7.3: Generate Executive Summary Narrative

<action>Write executive_summary (2-3 sentence overview):

**If PASS:**
"This animation meets all production-ready standards. Performance is excellent across all device tiers ({{high_end_fps}}fps high-end, {{mid_range_fps}}fps mid-range, {{low_end_fps}}fps low-end). Console is clean, accessibility is compliant, and no memory leaks detected. Ready for deployment."

**If CONDITIONAL PASS:**
"This animation meets core production requirements with {{warnings_count}} minor warnings. Performance is acceptable ({{high_end_fps}}fps high-end, {{mid_range_fps}}fps mid-range, {{low_end_fps}}fps low-end). Address warnings before deployment for optimal quality."

**If FAIL:**
"This animation has {{critical_issues_count}} critical issues preventing production deployment. {{List primary failures: performance/console/accessibility}}. All critical issues must be resolved before deploying."
</action>

### 7.4: Output Executive Summary Variables

<template-output>overall_status, critical_issues_count, warnings_count, passed_checks_count, executive_summary</template-output>

### 7.5: Generate Recommendations Section Variables

<action>Create boolean flags for Handlebars template conditionals:</action>

<action>Determine status flags:
- overall_pass: true if overall_status == "✅ PASS", false otherwise
- overall_fail: true if overall_status == "❌ FAIL", false otherwise
- conditional_pass: true if overall_status == "⚠️ CONDITIONAL PASS", false otherwise
</action>

<action>Generate critical_issues_list (if overall_fail == true):
- Compile all FAIL statuses from validation steps
- Format as bulleted list with specific details:
  - "❌ High-end performance: {{high_end_fps}}fps (target: 60fps)"
  - "❌ Console errors: {{console_errors_count}} errors detected"
  - "❌ Accessibility: prefers-reduced-motion fallback not implemented"
- Include actionable fix guidance for each issue
</action>

<action>Generate minor_issues_list (if conditional_pass == true):
- Compile all WARNING statuses
- Format as bulleted list:
  - "⚠️ Console warnings: {{console_warnings_count}} warnings present"
  - "⚠️ Memory growth: {{memory_growth}}MB (acceptable but monitor)"
- Include improvement suggestions
</action>

<action>Determine performance_issues flag:
- performance_issues: true if any FPS test failed (high/mid/low end status == FAIL)
- false otherwise
</action>

<action>Generate archon_citations:
- Compile all Archon MCP queries executed in Step 2 research phase
- Format as bulleted list of query summaries and key findings
- E.g., "60fps Validation Standards: Frame budget 16.67ms, throttling protocols documented"
</action>

<template-output>overall_pass, overall_fail, conditional_pass, critical_issues_list, minor_issues_list, performance_issues, archon_citations</template-output>

<action>Generate complete validation report using template.md with all populated variables</action>

---

## Success Criteria

Validation is COMPLETE when:

- ✅ All research queries executed
- ✅ Performance validated (60fps on high/mid, 30fps on low)
- ✅ Visual validation passed (no glitches)
- ✅ Console clean (0 errors, 0 warnings)
- ✅ Accessibility validated (prefers-reduced-motion)
- ✅ Memory leak check passed
- ✅ Cleanup verified
- ✅ Validation report generated

**PASS Status:** All criteria met
**FAIL Status:** Any critical criterion failed
**CONDITIONAL PASS:** Minor non-critical issues only

---

**Workflow Complete** ✨

**Remember:** This is production-ready validation. Standards are high, but animations that pass are guaranteed to perform excellently in the real world.
