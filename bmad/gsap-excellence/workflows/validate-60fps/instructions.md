# Validate 60fps Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Setup & Context">
<ask response="page_url">What is the dev server URL to validate?</ask>
<ask response="animation_selectors">What animations should be tested? (CSS selectors or trigger descriptions, comma-separated)</ask>
<ask response="test_duration_seconds" default="5">Test duration in seconds? (default: 5)</ask>

**Context:** This workflow performs systematic 60fps validation using Chrome DevTools MCP with objective pass/fail criteria. Based on Deep-Research performance.md checklist (Sections 5.1-5.5) and Archon Chrome DevTools patterns.

**Validation Targets:**
- ✅ **60fps @ 1x CPU** (normal devices - MUST PASS)
- ✅ **60fps @ 4x CPU** (mid-range devices - **MANDATORY BLOCKING**)
- ✅ **30fps minimum @ 6x CPU** (low-end devices - ACCEPTABLE)

**Frame Budget:** <16ms per frame total (<8ms scripting, <4ms rendering, <4ms painting)

<template-output>page_url, animation_selectors, test_duration_seconds</template-output>
</step>

<step n="2" goal="Enable FPS Meter">
**Chrome DevTools FPS Meter Setup:**

Using Chrome DevTools MCP, we can enable the FPS meter programmatically. Alternatively, guide the user:

**Manual FPS Meter Activation:**
```
1. Open Chrome DevTools (F12)
2. Press Cmd/Ctrl + Shift + P (Command Palette)
3. Type "Show frames per second"
4. Select "Show frames per second (FPS) meter"
5. FPS counter appears in top-left corner
```

<action>Use Chrome DevTools MCP: navigate_page to {{page_url}}</action>

**Verification:**
- Page loaded successfully
- FPS meter visible in top-left
- Baseline FPS shown (should be 60fps idle)

<template-output>fps_meter_enabled, baseline_fps</template-output>
</step>

<step n="3" goal="Test 1 - Normal Devices (1x CPU)">
**Test Configuration:**
- CPU Throttle: **1x (No throttling)**
- Target: **60fps sustained**
- Duration: {{test_duration_seconds}} seconds
- Status: MUST PASS (production requirement)

<action>Use Chrome DevTools MCP: emulate_cpu with throttlingRate=1 (no throttle)</action>
<action>Use Chrome DevTools MCP: performance_start_trace with reload=false, autoStop={{test_duration_seconds}}</action>
<action>Trigger animations: {{animation_selectors}}</action>
<action>Observe FPS meter during animation</action>
<action>Use Chrome DevTools MCP: performance_stop_trace after {{test_duration_seconds}} seconds</action>

**Analysis:**
<action>Analyze performance trace:</action>
- Average FPS: _____
- Minimum FPS: _____
- Frame drops: _____
- Scripting time per frame: _____
- Rendering time per frame: _____
- Painting time per frame: _____

**Pass Criteria:**
- ✅ Average FPS ≥ 58fps (allow 2fps variance)
- ✅ Minimum FPS ≥ 55fps (brief dips acceptable)
- ✅ Scripting <8ms per frame
- ✅ Rendering <4ms per frame
- ✅ Painting <4ms per frame

**Result:** PASS / FAIL

<action>If PASS: Continue to Step 4</action>
<action>If FAIL: Skip to Step 7 (Optimization Recommendations)</action>

<template-output>test_1x_fps_average, test_1x_fps_min, test_1x_result</template-output>
</step>

<step n="4" goal="Test 2 - Mid-Range Devices (4x CPU) - MANDATORY">
**Test Configuration:**
- CPU Throttle: **4x slowdown**
- Target: **60fps sustained**
- Duration: {{test_duration_seconds}} seconds
- Status: **MANDATORY BLOCKING** (cannot ship without passing)

<action>Use Chrome DevTools MCP: emulate_cpu with throttlingRate=4</action>
<action>Reload page to reset state</action>
<action>Use Chrome DevTools MCP: performance_start_trace with reload=false, autoStop={{test_duration_seconds}}</action>
<action>Trigger animations: {{animation_selectors}}</action>
<action>Observe FPS meter during animation</action>
<action>Use Chrome DevTools MCP: performance_stop_trace</action>

**Analysis:**
<action>Analyze performance trace:</action>
- Average FPS: _____
- Minimum FPS: _____
- Frame drops: _____
- Scripting time per frame: _____
- Long tasks (>50ms): _____

**Pass Criteria (MANDATORY):**
- ✅ Average FPS ≥ 58fps (allow 2fps variance)
- ✅ Minimum FPS ≥ 50fps (acceptable brief dips)
- ✅ No long tasks >50ms
- ✅ No red flags in Performance timeline

**Result:** PASS / FAIL

<action>If FAIL: **BLOCKING ISSUE** - Animation is NOT production-ready</action>

**Reference:** Deep-Research 5.5 - Optimize for 60fps (4x CPU throttle mandatory)

<template-output>test_4x_fps_average, test_4x_fps_min, test_4x_result, blocking_status</template-output>
</step>

<step n="5" goal="Test 3 - Low-End Devices (6x CPU) - ACCEPTABLE">
**Test Configuration:**
- CPU Throttle: **6x slowdown**
- Target: **30fps minimum**
- Duration: {{test_duration_seconds}} seconds
- Status: NICE-TO-HAVE (30fps acceptable on low-end)

<action>Use Chrome DevTools MCP: emulate_cpu with throttlingRate=6</action>
<action>Reload page to reset state</action>
<action>Use Chrome DevTools MCP: performance_start_trace with reload=false, autoStop={{test_duration_seconds}}</action>
<action>Trigger animations: {{animation_selectors}}</action>
<action>Observe FPS meter during animation</action>
<action>Use Chrome DevTools MCP: performance_stop_trace</action>

**Analysis:**
<action>Analyze performance trace:</action>
- Average FPS: _____
- Minimum FPS: _____
- Usability: Acceptable / Choppy

**Pass Criteria:**
- ✅ Average FPS ≥ 30fps (acceptable for low-end)
- ✅ Minimum FPS ≥ 20fps (brief dips)
- ✅ Animation completes successfully (no crashes)

**Result:** PASS / FAIL

**Note:** Failing 6x test is NOT blocking, but indicates potential issues on older devices.

<template-output>test_6x_fps_average, test_6x_fps_min, test_6x_result</template-output>
</step>

<step n="6" goal="Visual Validation & Screenshots">
**Visual Inspection:**

<action>Take screenshots during key animation phases:</action>
<action>Use Chrome DevTools MCP: take_screenshot for animation start</action>
<action>Use Chrome DevTools MCP: take_screenshot for animation mid-point</action>
<action>Use Chrome DevTools MCP: take_screenshot for animation end</action>

**Visual Checklist:**
- [ ] No layout shifts during animation
- [ ] No flickering or visual glitches
- [ ] Smooth transitions (no jarring jumps)
- [ ] Text remains readable throughout
- [ ] Focus indicators visible (if interactive)

<template-output>visual_inspection_result, screenshot_paths</template-output>
</step>

<step n="7" goal="Generate Validation Report">
**Compile Results:**

<action>Calculate overall compliance status:</action>

**Compliance Logic:**
- If Test 2 (4x CPU) PASSES → **PRODUCTION READY**
- If Test 2 (4x CPU) FAILS → **BLOCKING ISSUE**

**Report Structure:**

```markdown
# 60fps Validation Report

**Date:** {{date}}
**Page URL:** {{page_url}}
**Animations Tested:** {{animation_selectors}}

---

## Test Results Summary

### Test 1: Normal Devices (1x CPU) - {{test_1x_result}}
- Average FPS: {{test_1x_fps_average}}
- Minimum FPS: {{test_1x_fps_min}}
- Status: {{test_1x_result}}

### Test 2: Mid-Range Devices (4x CPU) - {{test_4x_result}} **MANDATORY**
- Average FPS: {{test_4x_fps_average}}
- Minimum FPS: {{test_4x_fps_min}}
- Status: {{test_4x_result}}
- **Blocking Status:** {{blocking_status}}

### Test 3: Low-End Devices (6x CPU) - {{test_6x_result}}
- Average FPS: {{test_6x_fps_average}}
- Minimum FPS: {{test_6x_fps_min}}
- Status: {{test_6x_result}}

---

## Overall Compliance: {{compliance_status}}

✅ **PASSED** - Animation is production-ready
❌ **FAILED** - Blocking issues must be fixed before production

---

## Visual Validation: {{visual_inspection_result}}

---

## Recommendations

{{optimization_recommendations}}

---

**Reference:** Deep-Research performance.md (Sections 5.1-5.5)
**Workflow:** validate-60fps v1.0.0
```

<action>Save report to: {{default_output_file}}</action>

<template-output>final_validation_report, compliance_status</template-output>
</step>

<step n="8" goal="Optimization Recommendations (If FAILED)">
**If any tests FAILED, provide targeted optimization strategies:**

<action>Query Archon MCP: rag_search_knowledge_base("GSAP performance optimization 60fps")</action>

**Common Optimizations (Based on Failure Type):**

**If Scripting Time High (>8ms per frame):**
```javascript
// ❌ WRONG - Heavy computation in onUpdate
gsap.to(".element", {
  x: 500,
  onUpdate: function() {
    // Expensive DOM queries each frame!
    const allElements = document.querySelectorAll('.item');
    allElements.forEach(el => {
      const rect = el.getBoundingClientRect(); // Forces reflow!
      // ... complex calculations
    });
  }
});

// ✅ CORRECT - Precompute before animation
const allElements = document.querySelectorAll('.item');
const precomputedValues = Array.from(allElements).map(el => ({
  element: el,
  rect: el.getBoundingClientRect()
}));

gsap.to(".element", {
  x: 500,
  onUpdate: function() {
    // Use precomputed values (fast!)
    precomputedValues.forEach(item => {
      // Lightweight operations only
    });
  }
});
```

**If Rendering/Painting High (>4ms per frame):**
```javascript
// ❌ WRONG - Animating layout properties
gsap.to(".box", { width: 500, height: 300, top: 100, left: 50 });
// Triggers layout recalculation every frame!

// ✅ CORRECT - Use GPU-accelerated transforms
gsap.to(".box", {
  x: 50,           // GPU: translate
  y: 100,          // GPU: translate
  scaleX: 2.5,     // GPU: scale (instead of width)
  scaleY: 1.5      // GPU: scale (instead of height)
});
```

**If Frame Drops on 4x CPU:**
- **Reduce simultaneous animations:** Stagger instead of animating all at once
- **Use ScrollTrigger.batch():** Group elements into single trigger
- **Add will-change:** Promote to GPU layer (use sparingly!)
- **Lazy load plugins:** Only import plugins actually used
- **Check third-party scripts:** Disable analytics/trackers during testing

**If Long Tasks (>50ms):**
- **Break up work:** Use requestIdleCallback or split across frames
- **Throttle complex animations:** Reduce frequency of updates
- **Canvas fallback:** For >100 moving elements, consider canvas

**Reference:** Deep-Research 5.1 (GPU Rule), 5.2 (Main Thread), 5.3 (Debugging Jank)

<template-output>optimization_strategies</template-output>
</step>

<step n="9" goal="Present Report & Next Actions">
<action>Display validation report with clear compliance status</action>

**If PASSED:**
✅ **PRODUCTION READY** - Animation meets 60fps requirements
- Passed 1x CPU test
- **Passed 4x CPU test (MANDATORY)**
- Visual validation passed
- No blocking issues

**Next Actions:**
1. Mark animation as performance-validated
2. Proceed to accessibility audit (if not done)
3. Ready for production deployment

**If FAILED:**
❌ **BLOCKING ISSUE** - Animation NOT production-ready
- Failed mandatory 4x CPU test
- Performance budget exceeded
- Must fix before deployment

**Next Actions:**
1. Apply optimization recommendations from Step 8
2. Re-run validate-60fps workflow after fixes
3. Consult Tech Director for additional strategies
4. Consider simplifying animation if optimizations insufficient

**Documentation:**
- Save report to: {{default_output_file}}
- Reference performance.md checklist for detailed guidance
- Use optimize-performance workflow for deeper profiling

<template-output>next_actions, final_status</template-output>
</step>

</workflow>

---

## Validation Protocol Summary

**3-Tier CPU Throttle Testing:**
1. **1x CPU (No throttle):** Normal devices - MUST PASS
2. **4x CPU (Slowdown):** Mid-range devices - **MANDATORY BLOCKING**
3. **6x CPU (Slowdown):** Low-end devices - ACCEPTABLE if ≥30fps

**Pass/Fail Criteria:**
- **PASS:** 60fps @ 4x CPU + visual validation
- **FAIL:** <60fps @ 4x CPU = BLOCKING ISSUE

**Frame Budget:**
- Total: <16ms per frame
- Scripting: <8ms
- Rendering: <4ms
- Painting: <4ms

**Reference Sources:**
- Deep-Research performance.md (Sections 5.1-5.5)
- Archon Chrome DevTools documentation
- Chrome DevTools MCP integration
- GSAP official performance guidelines

**Quality Standard:** 9.8/10 (Industry-leading performance validation)
