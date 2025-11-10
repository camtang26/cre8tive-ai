<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/validate-complete/workflow.yaml</critical>

# validate-complete Workflow Instructions

**Agent:** Tech Director (GSAP Excellence Engine)
**Purpose:** Comprehensive GSAP animation validation using Chrome DevTools MCP + Research-backed standards
**Complexity:** High (5-part validation suite with MANDATORY research gates)

---

## Workflow Overview

This workflow validates GSAP animations against production-ready standards using:
- **Chrome DevTools MCP** for performance profiling, visual validation, console error detection
- **Deep-Research Section 5.5** (60fps optimization frameworks)
- **Deep-Research Section 6.1** (prefers-reduced-motion - MANDATORY accessibility)
- **2025 Best Practices** (Chrome DevTools docs updated 2025-04-03 UTC)

**When to Use:**
- ✅ Before deploying animations to production
- ✅ After optimization changes (validate improvements)
- ✅ For code review gates
- ✅ Client deliverable quality assurance

**Success Criteria:**
- 60fps on high-end devices (no throttle)
- 60fps on mid-range devices (4x CPU throttle)
- 30fps minimum on low-end devices (6x CPU throttle)
- Zero console errors/warnings
- No memory leaks (<5MB growth)
- prefers-reduced-motion fallback present (MANDATORY)

---

<workflow>

<step n="1" goal="Gather Validation Context">

<action>Communicate in {communication_language} throughout this workflow</action>

<action>Tech Director greets {user_name} and introduces comprehensive validation suite</action>

**"Welcome, {user_name}. I'm the Tech Director, and I'll validate your GSAP animation against production-ready standards using a systematic 5-part validation suite.**

**This validation includes:**
1. **Performance** - 60fps compliance across high/mid/low-end devices
2. **Visual** - Screenshot verification (desktop + mobile)
3. **Console** - Zero-error requirement
4. **Accessibility** - prefers-reduced-motion (MANDATORY)
5. **Code Quality** - Memory leaks, cleanup, browser compatibility

**Let's gather the context we need..."**

---

### 1.1: Page URL

<ask response="page_url">
**Page URL for Testing**

Provide the dev server URL or live page URL:
- Local dev: `http://localhost:8080`
- Staging: `https://staging.example.com`
- Production: `https://example.com`

**IMPORTANT:** Chrome DevTools MCP must be able to access this URL.

**Recommended:** Use Incognito or Guest Mode for testing (eliminates extension noise - Chrome DevTools 2025 best practice).
</ask>

---

### 1.2: Animation Description

<ask response="animation_description">
**Animation Description**

What animation are we validating?

Examples:
- "Hero section parallax scroll animation"
- "Card stagger reveal on scroll"
- "Modal slide-in transition with backdrop blur"
- "3D product rotation on hover"
</ask>

---

### 1.3: Target Devices

<ask response="target_devices">
**Target Devices**

Which devices must pass validation?
- **desktop** - Desktop only (1920×1080 viewport)
- **mobile** - Mobile only (375×667 iPhone viewport)
- **both** - Desktop + Mobile (recommended for production)

**Note:** Mobile testing uses viewport emulation + CPU throttling.
</ask>

---

### 1.4: Test Conditions

<ask response="test_conditions">
**Test Conditions**

Which performance conditions should be tested?
- **normal** - High-end devices only (no CPU throttle)
- **throttled** - Mid/low-end devices only (4x and 6x CPU throttle)
- **both** - Normal + Throttled (RECOMMENDED for production)

**Recommended:** Choose "both" for production deployments.
</ask>

---

<action>Capture all context variables for validation report</action>

<template-output>page_url, animation_description, target_devices, test_conditions</template-output>

</step>

---

<step n="2" goal="Research Gate (MANDATORY) - Validation Standards">

<critical>🚨 MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>

<action>This research gate is **BLOCKING**. You MUST complete ALL research phases before proceeding to Step 3.</action>

**Tech Director addresses {user_name}:**

**"Before we validate your animation, I need to ensure we're using the latest standards and best practices. This research phase is MANDATORY - I'll consult three sources:**

1. **Deep-Research frameworks** (GSAP Animation Mastery - 2.2M+ words)
2. **Archon Knowledge Base** (89 GSAP sources, official docs)
3. **2025 Web Evidence** (Chrome DevTools docs, Web Almanac 2024)

**Let me load the validation protocols..."**

---

### Research Phase 1: Deep-Research Validation Standards (REQUIRED)

<action>Read Deep-Research Section 5.5: 60fps Optimization</action>

**File:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md`

<action>Extract from Section 5.5:

**Frame Budget Framework:**
*"To achieve ~16ms per frame budget: - Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total."*
(Source: 22-55-optimize-animations-for-60fps.md)

**Key Optimization Techniques:**
1. **autoAlpha property**: Animates opacity + toggles visibility to `hidden` at 0 opacity (saves paint cost)
2. **Layer hiding**: Set `display:none` on content behind full-screen panels (reduces paint)
3. **Throttle ScrollTrigger refresh**: Avoid excessive refresh calls on dynamic content
4. **Scrub parameter**: Use `scrub: 0.1` instead of `true` for lighter scroll updates

**Performance Budgets:**
- Total frame time: ~16ms (60fps = 1000ms / 60 frames)
- Scripting: <8ms per frame
- Style/layout: <4ms per frame
- Paint: <4ms per frame
</action>

---

<action>Read Deep-Research Section 6.1: prefers-reduced-motion (CRITICAL)</action>

**File:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md`

<action>Extract from Section 6.1:

**MANDATORY Accessibility Requirement:**
*"Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We **must** honor this"*
(Source: 24-61-respecting-prefers-reduced-motion.md)

**Implementation Pattern (GSAP matchMedia):**
```javascript
gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
  ScrollTrigger.getAll().forEach(trig => trig.disable());
  gsap.globalTimeline.timeScale(100); // instant finish
});
```

**Testing Protocol:**
*"Manually toggle your OS setting (on Mac: Settings > Accessibility > Display > Reduce Motion; on Windows: Settings > Display > Simplify and personalize > Show animations). Then use your site. All major animations should noticeably tone down."*
(Source: 24-61-respecting-prefers-reduced-motion.md)

**What to Reduce:**
- Parallax effects (can cause dizziness)
- Zooming or rotation (fade instead)
- Autoscrolling or scroll-jacking
- Repetitive animations (background panning)
</action>

---

<action>Read Deep-Research Pitfall 8.9: Cross-Device Testing</action>

**File:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md`

<action>Extract from Pitfall 8.9:

**Issue:**
*"The animation might be fine on desktop but terrible on mobile -- maybe AI coded large pinned sections that don't fit on mobile, etc."*
(Source: 42-pitfall-89-not-testing-on-different-devices.md)

**Solution:**
Use `ScrollTrigger.matchMedia` to adjust or disable triggers on smaller screens. Always think responsive.
</action>

---

### Research Phase 2: Archon MCP Knowledge Base Queries (REQUIRED)

<action>Execute Archon Query 1: 60fps Validation Standards</action>

```javascript
rag_search_knowledge_base("60fps performance standards frame budget", source_id="b9f6b322298feb21", match_count=5)
```

**Purpose:** Understand frame time budgets and throttling test protocols from GSAP official documentation

<action>Document findings:
- 60fps = 16.67ms frame budget confirmed
- Chrome DevTools Performance panel for FPS profiling
- CPU throttling: 4x slowdown for mid-range devices (official Chrome DevTools guidance)
</action>

---

<action>Execute Archon Query 2: Chrome DevTools Profiling Techniques</action>

```javascript
rag_search_knowledge_base("Chrome DevTools performance profiling GSAP", source_id="06ecb8dc74a38966", match_count=5)
```

**Purpose:** Learn profiling techniques, metrics to measure, interpretation methods

<action>Document findings:
- Performance panel records runtime activity
- Screenshots checkbox captures every frame
- CPU throttling options: 4x, 6x (or custom)
- Network throttling: Slow 3G, Fast 3G
</action>

---

<action>Execute Archon Query 3: Console Error Pattern Recognition</action>

```javascript
rag_search_knowledge_base("GSAP console errors warnings validation", source_id="b9f6b322298feb21", match_count=5)
```

**Purpose:** Understand what GSAP errors/warnings mean and how to interpret console output

<action>Document findings:
- GSAP warnings indicate potential issues
- Invalid targets: "Cannot tween a null target"
- Plugin not registered: "Please gsap.registerPlugin()"
- Console must be completely clean (zero errors/warnings)
</action>

---

### Research Phase 3: 2025 Web Evidence (Best Practices)

<action>Summarize latest Chrome DevTools performance testing best practices (2025):</action>

**Source:** Chrome DevTools documentation (updated 2025-04-03 UTC)

<action>Document:

**Testing Environment (NEW - 2025 Best Practice):**
- **Incognito or Guest Mode**: Eliminates extension noise in performance measurements
- **Chrome 129+**: Core Web Vitals now shown directly in DevTools Performance panel

**FPS Profiling:**
- Enable "Screenshots" checkbox: Captures screenshot of every frame
- Performance panel automatically zooms to highest activity portion

**CPU Throttling Standards:**
- 4x slowdown: Mid-range devices (matches GSAP 2024 benchmarks)
- 6x slowdown: Low-end devices (minimum 30fps acceptable)
- 20x slowdown: Extreme low-end (optional test - 2025 guidance)

**Garbage Collection:**
- Click "Collect garbage" to force GC during recording
- Useful for isolating memory leak detection
</action>

---

<action>Summarize GSAP performance validation findings (Web Almanac 2024):</action>

<action>Document:
- GSAP achieves consistent 60fps even under high DOM load conditions
- requestAnimationFrame is default (automatically syncs with display refresh rate)
- Hardware acceleration: transform and opacity properties offload to GPU
- Timeline batching reduces performance overhead by grouping updates
</action>

---

<action>Summarize frame budget awareness (2025 performance standards):</action>

<action>Document:
- Complex transitions can raise paint times from 5ms to 30ms
- Breaching 16ms frame budget compromises fluid 60fps rendering
- Animation packing groups duplicate animations to minimize browser reflows
</action>

---

### Research Approval Checkpoint (BLOCKING)

<action>Compile research findings into structured summary</action>

**Research Summary:**

**1. 60fps Performance Standards:**
- Frame time budget: 16.67ms per frame (Deep-Research 5.5)
- Scripting: <8ms per frame
- Style/layout: <4ms per frame
- Paint: <4ms per frame
- CPU throttling expectations:
  - High-end devices: No throttle (1x CPU)
  - Mid-range devices: 4x CPU throttle (60fps target)
  - Low-end devices: 6x CPU throttle (30fps minimum)
  - Extreme test: 20x CPU throttle (optional - 2025)

**2. Validation Tools & Techniques:**
- Chrome DevTools Performance panel (FPS meter, traces)
- CPU throttling emulation (4x, 6x, 20x rates)
- Performance trace recording and analysis
- Memory heap snapshot comparison for leak detection
- Console message monitoring (zero tolerance for errors/warnings)
- **2025 Best Practice**: Incognito/Guest Mode for clean state

**3. Success Criteria (Production-Ready Standards):**
- High-end (no throttle): 60fps sustained, minimum 55fps
- Mid-range (4x throttle): 60fps sustained (GSAP 2024 benchmark)
- Low-end (6x throttle): 30fps minimum acceptable
- Console health: 0 errors, 0 warnings
- Memory stability: No growth across animation cycles (<5MB acceptable)
- Accessibility: prefers-reduced-motion fallback MANDATORY

**4. Jank Identification Methods:**
- Red timeline bars: Layout thrashing
- Yellow bars: Scripting bottlenecks
- Purple bars: Rendering/painting
- GPU layer visualization for hardware acceleration verification

**5. Accessibility Requirements (BLOCKING):**
- MUST implement prefers-reduced-motion detection
- MUST provide fallback behavior (simplified or disabled animation)
- CANNOT ship without accessibility compliance
- Test with OS settings: Mac (Settings > Accessibility > Display) / Windows (Settings > Display)

---

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
- ✅ Deep-Research Sections 5.5, 6.1, Pitfall 8.9
- ✅ 2025 web evidence (Chrome DevTools updated 2025-04-03, Web Almanac 2024)
- ✅ Archon MCP queries (3 queries executed: 60fps standards, profiling techniques, console patterns)

**Type 'continue' to proceed to Step 3 (Performance Validation).**
**Type 'redo' to conduct additional research.**
</ask>

<check if="research_validated != 'continue'">
  <action>User requested additional research. Returning to research phase...</action>
  <goto step="2">Re-executing research protocol...</goto>
</check>

<action>✅ Research validated. Proceeding to Step 3: Performance Validation using Chrome DevTools MCP...</action>

</step>

---

<step n="3" goal="Performance Validation (Chrome DevTools MCP)">

<critical>Chrome DevTools MCP REQUIRED for this step</critical>

**Tech Director:**

**"{user_name}, now I'll validate your animation's performance using Chrome DevTools MCP. This will test across three device profiles:**

1. **High-end** (no throttle) - Target: 60fps
2. **Mid-range** (4x CPU throttle) - Target: 60fps
3. **Low-end** (6x CPU throttle) - Minimum: 30fps

**Plus memory leak detection across multiple animation cycles."**

---

### 3.1: Navigate to Page

<action>Use Chrome DevTools MCP to load the page:</action>

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })
```

<action>Wait for page to fully load and animation to be ready</action>

---

### 3.2: FPS Profiling - High-End Devices (No Throttle)

<action>Start performance trace with reload:</action>

```javascript
mcp__chrome-devtools__performance_start_trace({ reload: true })
```

<action>Let animation run for 5-10 seconds to capture performance data</action>

<action>Stop performance trace:</action>

```javascript
mcp__chrome-devtools__performance_stop_trace()
```

**Analyze Results:**

<action>Extract from Chrome DevTools trace:
- Average FPS across test duration
- Minimum FPS (lowest frame rate observed)
- Paint time per frame (if available)
- JS execution time per frame (if available)
</action>

**Success Criteria:**
- **Target:** 60fps average
- **Minimum acceptable:** 55fps (brief drops OK, sustained <55fps = FAIL)
- **Paint time:** <16ms per frame
- **JS execution:** <5ms per frame

<action>Determine high_end_status:
- If average_fps >= 60 AND min_fps >= 55: "✅ PASS - 60fps sustained"
- If average_fps < 60 OR min_fps < 55: "❌ FAIL - Performance issue detected"
</action>

---

### 3.3: CPU Throttling - Mid-Range Devices (4x Slowdown)

<action>Enable 4x CPU throttling:</action>

```javascript
mcp__chrome-devtools__emulate_cpu({ throttlingRate: 4 })
```

<action>Reload page with throttling enabled:</action>

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })
```

<action>Start performance trace:</action>

```javascript
mcp__chrome-devtools__performance_start_trace({ reload: false })
```

<action>Let animation run for 5-10 seconds</action>

<action>Stop performance trace:</action>

```javascript
mcp__chrome-devtools__performance_stop_trace()
```

**Analyze Results:**

<action>Extract from trace:
- Average FPS with 4x throttle
- Minimum FPS with 4x throttle
- Paint time (if available)
</action>

**Success Criteria:**
- **Target:** 60fps average (GSAP should maintain 60fps even on 4x throttle per 2024 benchmarks)
- **If FPS <60fps:** PERFORMANCE ISSUE - optimization needed

<action>Determine mid_range_status:
- If average_fps >= 60: "✅ PASS - 60fps sustained on 4x throttle"
- If average_fps < 60: "❌ FAIL - Optimization needed ({{fps}}fps on mid-range)"
</action>

---

### 3.4: CPU Throttling - Low-End Devices (6x Slowdown)

<action>Enable 6x CPU throttling:</action>

```javascript
mcp__chrome-devtools__emulate_cpu({ throttlingRate: 6 })
```

<action>Reload page with 6x throttling:</action>

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })
```

<action>Start performance trace:</action>

```javascript
mcp__chrome-devtools__performance_start_trace({ reload: false })
```

<action>Let animation run for 5-10 seconds</action>

<action>Stop performance trace:</action>

```javascript
mcp__chrome-devtools__performance_stop_trace()
```

**Analyze Results:**

<action>Extract from trace:
- Average FPS with 6x throttle
- Minimum FPS with 6x throttle
</action>

**Success Criteria:**
- **Minimum acceptable:** 30fps average
- **If FPS <30fps:** CRITICAL PERFORMANCE ISSUE

<action>Determine low_end_status:
- If average_fps >= 30: "✅ PASS - Acceptable performance on low-end ({{fps}}fps)"
- If average_fps < 30: "❌ FAIL - CRITICAL performance issue ({{fps}}fps < 30fps minimum)"
</action>

---

### 3.5: Memory Leak Detection

<action>Reset CPU throttling:</action>

```javascript
mcp__chrome-devtools__emulate_cpu({ throttlingRate: 0 })
```

<action>Reload page and measure initial memory:</action>

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })

// Wait for page load, then capture initial memory
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

<action>Run animation 5+ times (full cycle: start → end → restart)</action>

<action>Measure memory after 5 cycles:</action>

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

**Analyze Memory Growth:**

<action>Calculate:
- memory_initial = usedJSHeapSize from first measurement (convert to MB)
- memory_after_cycles = usedJSHeapSize from second measurement (convert to MB)
- memory_growth = memory_after_cycles - memory_initial
</action>

**Success Criteria:**
- Memory should NOT continuously grow across animation cycles
- **PASS:** <5MB sustained growth
- **WARNING:** 5-10MB growth
- **FAIL:** >10MB sustained growth

<action>Determine memory_status:
- If memory_growth < 5: "✅ PASS - No memory leaks detected"
- If 5 <= memory_growth < 10: "⚠️ WARNING - Moderate memory growth detected"
- If memory_growth >= 10: "❌ FAIL - Memory leak detected"
</action>

---

### 3.6: Compile Performance Results

<action>For each test level, create detailed analysis:</action>

**High-End Analysis:**
- high_end_fps: "{{average_fps}}"
- high_end_min_fps: "{{minimum_fps}}"
- high_end_paint_time: "{{paint_time}}ms" or "N/A"
- high_end_js_time: "{{js_execution_time}}ms" or "N/A"
- high_end_status: "✅ PASS" or "❌ FAIL"
- high_end_detailed_status: Full description with FPS numbers
- high_end_analysis: Brief explanation (1-2 sentences)

**Mid-Range Analysis:**
- mid_range_fps: "{{average_fps}}"
- mid_range_min_fps: "{{minimum_fps}}"
- mid_range_paint_time: "{{paint_time}}ms" or "N/A"
- mid_range_status: "✅ PASS" or "❌ FAIL"
- mid_range_detailed_status: Full description
- mid_range_analysis: Brief explanation (1-2 sentences)

**Low-End Analysis:**
- low_end_fps: "{{average_fps}}"
- low_end_min_fps: "{{minimum_fps}}"
- low_end_status: "✅ PASS" or "❌ FAIL"
- low_end_detailed_status: Full description
- low_end_analysis: Brief explanation (1-2 sentences)

**Memory Analysis:**
- memory_initial: "{{initial_mb}}MB"
- memory_after_cycles: "{{after_mb}}MB"
- memory_growth: "{{growth_mb}}MB"
- memory_status: "✅ PASS" / "⚠️ WARNING" / "❌ FAIL"
- memory_analysis: Brief explanation (1-2 sentences)

<template-output>high_end_fps, high_end_min_fps, high_end_paint_time, high_end_js_time, high_end_status, high_end_detailed_status, high_end_analysis, mid_range_fps, mid_range_min_fps, mid_range_paint_time, mid_range_status, mid_range_detailed_status, mid_range_analysis, low_end_fps, low_end_min_fps, low_end_status, low_end_detailed_status, low_end_analysis, memory_initial, memory_after_cycles, memory_growth, memory_status, memory_analysis</template-output>

</step>

---

<step n="4" goal="Visual Validation (Screenshots)">

**Tech Director:**

**"{user_name}, now I'll capture visual validation screenshots across different viewports to verify the animation renders correctly."**

---

### 4.1: Desktop Viewport Screenshots (1920×1080)

<action>Ensure normal viewport size (desktop):</action>

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })
```

<action>Capture screenshot before animation:</action>

```javascript
mcp__chrome-devtools__take_screenshot()
```

<action>Trigger animation (wait for it to start)</action>

<action>Capture screenshot mid-animation (key frame):</action>

```javascript
mcp__chrome-devtools__take_screenshot()
```

<action>Wait for animation to complete</action>

<action>Capture screenshot after animation:</action>

```javascript
mcp__chrome-devtools__take_screenshot()
```

**Visual Checks (Desktop):**

<action>Review screenshots and assess:
- desktop_no_glitches: ✅ or ❌
- desktop_renders_correctly: ✅ or ❌
- desktop_no_layout_shifts: ✅ or ❌
- desktop_positioning: ✅ or ❌
</action>

<action>Determine desktop_visual_status:
- If all checks ✅: "✅ PASS - No visual issues detected"
- If any check ❌: "❌ FAIL - Visual issues detected"
</action>

<action>Write desktop_visual_notes: Brief summary of findings (1-2 sentences)</action>

---

### 4.2: Mobile Viewport Screenshots (if target_devices includes mobile)

<check if="target_devices == 'mobile' OR target_devices == 'both'">

<action>Resize to mobile viewport (375×667 - iPhone):</action>

```javascript
mcp__chrome-devtools__resize_page({ width: 375, height: 667 })
```

<action>Reload for mobile:</action>

```javascript
mcp__chrome-devtools__navigate_page({ url: "{page_url}" })
```

<action>Capture screenshot before animation (mobile):</action>

```javascript
mcp__chrome-devtools__take_screenshot()
```

<action>Trigger animation</action>

<action>Capture screenshot mid-animation (mobile):</action>

```javascript
mcp__chrome-devtools__take_screenshot()
```

<action>Wait for animation to complete</action>

<action>Capture screenshot after animation (mobile):</action>

```javascript
mcp__chrome-devtools__take_screenshot()
```

**Visual Checks (Mobile):**

<action>Review mobile screenshots and assess:
- mobile_responsive: ✅ or ❌
- mobile_complexity: ✅ appropriate or ❌ too complex
- mobile_touch: ✅ or ❌ or N/A
</action>

<action>Determine mobile_visual_status:
- If all checks ✅: "✅ PASS - Mobile responsive"
- If any check ❌: "❌ FAIL - Mobile issues detected"
</action>

<action>Write mobile_visual_notes: Brief summary (1-2 sentences)</action>

</check>

---

<check if="target_devices == 'desktop'">
  <action>Set mobile testing variables to N/A:
  - mobile_visual_status = "N/A - Desktop only target"
  - screenshot_mobile_before = "Not tested"
  - screenshot_mobile_mid = "Not tested"
  - screenshot_mobile_after = "Not tested"
  - mobile_responsive = "N/A"
  - mobile_complexity = "N/A"
  - mobile_touch = "N/A"
  - mobile_visual_notes = "Desktop-only validation"
  </action>
</check>

---

<template-output>screenshot_desktop_before, screenshot_desktop_mid, screenshot_desktop_after, desktop_no_glitches, desktop_renders_correctly, desktop_no_layout_shifts, desktop_positioning, desktop_visual_status, desktop_visual_notes, screenshot_mobile_before, screenshot_mobile_mid, screenshot_mobile_after, mobile_responsive, mobile_complexity, mobile_touch, mobile_visual_status, mobile_visual_notes</template-output>

</step>

---

<step n="5" goal="Console Validation (Zero-Error Requirement)">

**Tech Director:**

**"{user_name}, now checking the console for errors and warnings. Production animations require a completely clean console - zero tolerance."**

---

### 5.1: List Console Messages

<action>Capture all console messages:</action>

```javascript
mcp__chrome-devtools__list_console_messages()
```

---

### 5.2: Analyze Console Output

<action>Parse console messages:
- Filter messages with type='error' → Count as console_errors_count
- Filter messages with type='warning' → Count as console_warnings_count
- Extract error details → Format as console_errors_list
- Extract warning details → Format as console_warnings_list
</action>

---

### 5.3: Validation Gates

**ERRORS (ZERO TOLERANCE):**
- ❌ ANY errors = FAIL
- Must fix all errors before passing validation

**WARNINGS (ZERO TOLERANCE):**
- ❌ ANY GSAP warnings = FAIL
- ❌ Performance warnings = FAIL
- Must address all warnings

**PASS Criteria:** Zero errors, zero warnings

---

### 5.4: Determine Console Status

<action>Calculate console_status:
- If console_errors_count == 0 AND console_warnings_count == 0:
  console_status = "✅ PASS - Console clean (0 errors, 0 warnings)"
- If console_errors_count > 0 OR console_warnings_count > 0:
  console_status = "❌ FAIL - {{errors_count}} errors, {{warnings_count}} warnings detected"
</action>

---

<template-output>console_errors_count, console_warnings_count, console_errors_list, console_warnings_list, console_status</template-output>

</step>

---

<step n="6" goal="Accessibility & Code Quality Validation">

**Tech Director:**

**"{user_name}, final validation phase: accessibility compliance and code quality assessment."**

---

### 6.1: prefers-reduced-motion Validation (MANDATORY)

<critical>This is a BLOCKING requirement. Animations CANNOT ship without prefers-reduced-motion support.</critical>

<action>Check for prefers-reduced-motion support:</action>

```javascript
mcp__chrome-devtools__evaluate_script({
  function: `() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return {
      supported: true,
      currentValue: mediaQuery.matches,
      listenerAttached: !!window.gsap?.matchMedia
    };
  }`
})
```

**Validation:**

<action>Assess prefers_reduced_motion_support:
- Check if gsap.matchMedia is available
- Check if code responds to media query
- Determine: "✅ Supported" or "❌ NOT SUPPORTED (BLOCKING FAILURE)"
</action>

**Reference from Deep-Research 6.1:**

*"We **must** honor this: - Detecting the preference: In JS, use window.matchMedia('(prefers-reduced-motion: reduce)'). GSAP provides a handy integration via gsap.matchMedia()"*
(Source: 24-61-respecting-prefers-reduced-motion.md)

**Testing Protocol:**

<action>Recommend manual testing:
"To fully verify prefers-reduced-motion support, manually toggle your OS setting:
- **Mac**: Settings > Accessibility > Display > Reduce Motion
- **Windows**: Settings > Display > Simplify and personalize > Show animations

Then reload the page. Animation should noticeably tone down or be disabled."
</action>

<action>Determine accessibility_status:
- If prefers_reduced_motion_support == "✅ Supported": "✅ PASS - Accessibility compliant"
- If prefers_reduced_motion_support == "❌ NOT SUPPORTED": "❌ FAIL - BLOCKING FAILURE (prefers-reduced-motion MANDATORY)"
</action>

---

### 6.2: Keyboard Accessibility (If Interactive)

<check if="animation is interactive (user-triggered, pausable, etc.)">

<action>Test keyboard navigation:
- Tab key: Navigate to animation controls
- Enter/Space: Trigger animation
- Escape: Pause/dismiss animation
</action>

<action>Verify focus states are visible</action>

<action>Assess:
- keyboard_navigation: ✅ or ❌ or N/A
- focus_visible: ✅ or ❌ or N/A
- keyboard_controls: ✅ or ❌ or N/A
</action>

</check>

<check if="animation is NOT interactive">
  <action>Set keyboard accessibility to N/A:
  - keyboard_navigation = "N/A - Not interactive"
  - focus_visible = "N/A"
  - keyboard_controls = "N/A"
  </action>
</check>

---

### 6.3: Code Quality Assessment

**Based on KB research and Deep-Research Section 5.5:**

<action>Assess code quality factors:</action>

**Cleanup Implementation:**
- Animations killed on unmount? (kill() or revert())
- ScrollTriggers cleaned up? (ScrollTrigger.getAll().forEach(st => st.kill()))
- Event listeners removed?
- Status: ✅ or ❌ or "Cannot verify without code review"

**Error Handling:**
- Try-catch blocks present?
- Graceful degradation for missing elements?
- Status: ✅ or ❌ or "Cannot verify without code review"

**Browser Compatibility:**
- Tested in Chrome: ✅ (current validation)
- Firefox: ⚠️ Recommend manual testing
- Safari: ⚠️ Recommend manual testing
- Mobile: ✅ if target_devices includes mobile, else ⚠️

<action>Compile code quality assessment:
- cleanup_status: Based on evidence or "Requires code review"
- error_handling_status: Based on evidence or "Requires code review"
- browser_compatibility_status: Based on testing performed
</action>

---

<template-output>prefers_reduced_motion_support, accessibility_status, keyboard_navigation, focus_visible, keyboard_controls, cleanup_status, error_handling_status, browser_compatibility_status</template-output>

</step>

---

<step n="7" goal="Generate Validation Report">

**Tech Director:**

**"{user_name}, compiling comprehensive validation report..."**

---

### 7.1: Calculate Overall Status

<action>Determine overall_status based on all validation sections:</action>

**Critical Failures (Auto-FAIL):**
- console_errors_count > 0 → FAIL
- console_warnings_count > 0 → FAIL
- accessibility_status == "❌ FAIL" → FAIL (BLOCKING)
- high_end_status == "❌ FAIL" → FAIL
- mid_range_status == "❌ FAIL" → FAIL
- low_end_status == "❌ FAIL" → FAIL

**Determine Verdict:**

<check if="any critical failure">
  <action>overall_status = "🔴 FAIL"</action>
  <action>Count critical_issues_count (number of FAIL statuses)</action>
  <action>Count warnings_count (number of WARNING statuses)</action>
</check>

<check if="no critical failures BUT warnings exist">
  <action>overall_status = "🟡 PASS WITH WARNINGS"</action>
  <action>critical_issues_count = 0</action>
  <action>Count warnings_count</action>
</check>

<check if="no failures AND no warnings">
  <action>overall_status = "🟢 PASS"</action>
  <action>critical_issues_count = 0</action>
  <action>warnings_count = 0</action>
</check>

<action>Count passed_checks_count (number of ✅ PASS statuses across all sections)</action>

---

### 7.2: Write Executive Summary

<action>Create executive_summary (2-3 sentences summarizing validation results):</action>

Example:
"Animation validated across high/mid/low-end devices with {{overall_status}} verdict. Performance testing shows {{high_end_fps}}fps on high-end, {{mid_range_fps}}fps on mid-range (4x throttle), and {{low_end_fps}}fps on low-end (6x throttle). Console is {{console_status}}, accessibility {{accessibility_status}}."

---

### 7.3: Compile All Template Variables

<action>Ensure ALL template variables are populated:
- date, user_name, animation_description, page_url, target_devices
- overall_status, critical_issues_count, warnings_count, passed_checks_count, executive_summary
- All performance metrics (high_end_*, mid_range_*, low_end_*, memory_*)
- All visual validation variables (screenshot_*, desktop_*, mobile_*)
- All console validation variables (console_*)
- All accessibility variables (prefers_reduced_motion_*, accessibility_*, keyboard_*)
- All code quality variables (cleanup_*, error_handling_*, browser_compatibility_*)
</action>

---

### 7.4: Save Validation Report

<action>Use template.md to generate final validation report</action>

<action>Save to: {{default_output_file}}</action>

<action>Display report summary to {user_name}</action>

**Tech Director:**

**"Validation report generated: {{default_output_file}}**

**Overall Status: {{overall_status}}**

**Summary:**
- Performance: High-end {{high_end_status}}, Mid-range {{mid_range_status}}, Low-end {{low_end_status}}
- Visual: Desktop {{desktop_visual_status}}, Mobile {{mobile_visual_status}}
- Console: {{console_status}}
- Accessibility: {{accessibility_status}}
- Memory: {{memory_status}}

<check if="overall_status == '🟢 PASS'">
**✅ PASS - Animation meets all production-ready standards. Ready for deployment.**
</check>

<check if="overall_status == '🟡 PASS WITH WARNINGS'">
**⚠️ PASS WITH WARNINGS - Animation passes core requirements but has {{warnings_count}} warning(s). Review report for recommendations.**
</check>

<check if="overall_status == '🔴 FAIL'">
**❌ FAIL - Animation has {{critical_issues_count}} critical issue(s). Review report and address failures before production.**
</check>

**"Validation complete. Review the full report for detailed findings and recommendations."**

<template-output>final_validation_report</template-output>

</step>

</workflow>
