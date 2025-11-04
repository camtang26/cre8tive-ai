# 60fps Validation Report

**Generated:** {{date}}
**Workflow:** validate-60fps v1.0.0
**Page URL:** {{page_url}}
**Animations Tested:** {{animation_selectors}}
**Test Duration:** {{test_duration_seconds}} seconds per test

---

## Executive Summary

**Overall Compliance:** {{compliance_status}}

{{#if_passed}}
✅ **PRODUCTION READY** - Animation meets 60fps performance requirements
{{/if_passed}}

{{#if_failed}}
❌ **BLOCKING ISSUE** - Animation NOT production-ready (failed mandatory 4x CPU test)
{{/if_failed}}

---

## Test Results

### Test 1: Normal Devices (1x CPU Throttle)

**Configuration:**
- CPU Throttle: 1x (No throttling)
- Target: 60fps sustained
- Test Duration: {{test_duration_seconds}}s

**Results:**
- **Average FPS:** {{test_1x_fps_average}}
- **Minimum FPS:** {{test_1x_fps_min}}
- **Frame Drops:** {{test_1x_frame_drops}}
- **Scripting Time:** {{test_1x_scripting_time}}ms/frame
- **Rendering Time:** {{test_1x_rendering_time}}ms/frame
- **Painting Time:** {{test_1x_painting_time}}ms/frame

**Status:** {{test_1x_result}}

**Pass Criteria:**
- ✅ Average FPS ≥ 58fps
- ✅ Minimum FPS ≥ 55fps
- ✅ Scripting <8ms/frame
- ✅ Rendering <4ms/frame
- ✅ Painting <4ms/frame

---

### Test 2: Mid-Range Devices (4x CPU Throttle) **MANDATORY**

**Configuration:**
- CPU Throttle: 4x slowdown
- Target: 60fps sustained
- Test Duration: {{test_duration_seconds}}s
- **Status: MANDATORY BLOCKING TEST**

**Results:**
- **Average FPS:** {{test_4x_fps_average}}
- **Minimum FPS:** {{test_4x_fps_min}}
- **Frame Drops:** {{test_4x_frame_drops}}
- **Scripting Time:** {{test_4x_scripting_time}}ms/frame
- **Long Tasks (>50ms):** {{test_4x_long_tasks}}

**Status:** {{test_4x_result}}

**Pass Criteria (MANDATORY):**
- ✅ Average FPS ≥ 58fps
- ✅ Minimum FPS ≥ 50fps
- ✅ No long tasks >50ms
- ✅ No red flags in Performance timeline

{{#if test_4x_failed}}
⚠️ **BLOCKING ISSUE:** Animation failed mandatory mid-range device test. Cannot ship to production without optimization.
{{/if}}

**Reference:** Deep-Research 5.5 - Optimize for 60fps (4x CPU throttle mandatory)

---

### Test 3: Low-End Devices (6x CPU Throttle)

**Configuration:**
- CPU Throttle: 6x slowdown
- Target: 30fps minimum (acceptable)
- Test Duration: {{test_duration_seconds}}s

**Results:**
- **Average FPS:** {{test_6x_fps_average}}
- **Minimum FPS:** {{test_6x_fps_min}}
- **Usability:** {{test_6x_usability}}

**Status:** {{test_6x_result}}

**Pass Criteria:**
- ✅ Average FPS ≥ 30fps (acceptable for low-end)
- ✅ Minimum FPS ≥ 20fps (brief dips)
- ✅ Animation completes successfully

**Note:** Failing 6x test is NOT blocking, but indicates potential issues on older devices.

---

## Visual Validation

**Screenshots Captured:**
- Animation Start: {{screenshot_start}}
- Animation Mid-Point: {{screenshot_mid}}
- Animation End: {{screenshot_end}}

**Visual Checklist:**
- {{visual_layout_shifts}} No layout shifts during animation
- {{visual_flickering}} No flickering or visual glitches
- {{visual_smoothness}} Smooth transitions (no jarring jumps)
- {{visual_readability}} Text remains readable throughout
- {{visual_focus}} Focus indicators visible (if interactive)

**Result:** {{visual_inspection_result}}

---

## Performance Analysis

### Frame Budget Breakdown

**Target:** <16ms per frame total

| Component | Budget | Actual | Status |
|-----------|--------|--------|--------|
| Scripting | <8ms | {{avg_scripting_time}}ms | {{scripting_status}} |
| Rendering | <4ms | {{avg_rendering_time}}ms | {{rendering_status}} |
| Painting | <4ms | {{avg_painting_time}}ms | {{painting_status}} |
| **Total** | **<16ms** | **{{avg_total_time}}ms** | **{{frame_budget_status}}** |

### Bottleneck Analysis

{{bottleneck_analysis}}

---

## Optimization Recommendations

{{#if_failed}}

### Critical Optimizations Required

Based on test failures, apply these optimizations:

{{optimization_recommendations}}

### Common Performance Fixes

**If Scripting Time High (>8ms/frame):**
```javascript
// ❌ WRONG - Heavy computation in onUpdate
gsap.to(".element", {
  x: 500,
  onUpdate: function() {
    const allElements = document.querySelectorAll('.item'); // Expensive!
    allElements.forEach(el => {
      const rect = el.getBoundingClientRect(); // Forces reflow!
    });
  }
});

// ✅ CORRECT - Precompute before animation
const precomputed = Array.from(document.querySelectorAll('.item')).map(el => ({
  element: el,
  rect: el.getBoundingClientRect()
}));

gsap.to(".element", {
  x: 500,
  onUpdate: function() {
    precomputed.forEach(item => {
      // Use cached values (fast!)
    });
  }
});
```

**If Rendering/Painting High (>4ms/frame):**
```javascript
// ❌ WRONG - Animating layout properties
gsap.to(".box", { width: 500, height: 300, top: 100, left: 50 });

// ✅ CORRECT - GPU-accelerated transforms only
gsap.to(".box", {
  x: 50,       // GPU
  y: 100,      // GPU
  scaleX: 2.5, // GPU
  scaleY: 1.5  // GPU
});
```

**Quick Wins:**
1. Use transform/opacity only (GPU-accelerated)
2. Add will-change: transform to large elements
3. Use ScrollTrigger.batch() for lists
4. Reduce simultaneous animations (use stagger)
5. Lazy load unused GSAP plugins

**Reference:** Deep-Research Sections 5.1 (GPU Rule), 5.2 (Main Thread), 5.3 (Debugging Jank)

{{/if_failed}}

{{#if_passed}}

### Performance Summary

✅ Animation meets all performance targets:
- Sustained 60fps on normal devices (1x CPU)
- **Sustained 60fps on mid-range devices (4x CPU)** - MANDATORY PASSED
- Acceptable FPS on low-end devices (6x CPU)
- Frame budget within limits
- Visual validation passed

**Ready for production deployment.**

{{/if_passed}}

---

## Next Actions

{{#if_passed}}

### ✅ PASSED - Ready for Production

1. **Mark as validated:** Animation performance-approved
2. **Proceed to accessibility audit:** Run accessibility-audit workflow (if not done)
3. **Deploy to production:** No performance blockers

**Quality Gate:** ✅ CLEARED

{{/if_passed}}

{{#if_failed}}

### ❌ FAILED - Requires Optimization

1. **Apply optimizations:** Implement recommendations above
2. **Re-run validation:** Execute validate-60fps workflow again after fixes
3. **Consult Tech Director:** If optimizations insufficient, consider simplifying animation
4. **Alternative approach:** If still failing, may need Canvas/WebGL for extreme complexity

**Quality Gate:** 🔴 BLOCKED

**Do NOT deploy to production until this test passes.**

{{/if_failed}}

---

## Reference Documentation

**Deep-Research Sections:**
- 5.1: Animate Efficient Properties (GPU Rule)
- 5.2: Keep Main Thread Free (Avoid Long Tasks)
- 5.3: Debugging Jank
- 5.4: Memory Management
- 5.5: Optimize for 60fps

**Checklists:**
- `/bmad/gsap-excellence/checklists/performance.md`

**Archon MCP Research:**
- Query: "GSAP performance optimization 60fps"
- Query: "Chrome DevTools CPU throttling testing"

**Workflows:**
- `optimize-performance`: Deeper profiling and bottleneck analysis
- `accessibility-audit`: WCAG compliance validation
- `debug-animation`: Fix animation issues

---

**Module:** GSAP Excellence Engine - Phase 6
**Quality Standard:** 9.8/10 (Industry-leading performance validation)
**Validation Protocol:** 3-tier CPU throttle testing (1x/4x/6x)

---

**Generated by validate-60fps workflow**
**Report saved to:** {{default_output_file}}
