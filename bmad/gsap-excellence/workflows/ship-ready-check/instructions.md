<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/ship-ready-check/workflow.yaml</critical>

# ship-ready-check - THE Final Production Gate

**Agent:** Tech Director
**Workflow:** ship-ready-check
**Version:** 2.0.0-premium (research-backed systematic validation)
**Purpose:** THE final green light for production deployment - comprehensive 6-part validation protocol

---

## Overview

This is THE most critical workflow in the GSAP Excellence module. **Nothing ships without passing this gate.**

**6-Part Production Readiness Protocol:**
1. ⚡ **Performance** - 60fps compliance, frame budgets, memory stability (Deep-Research 5.1-5.6)
2. 👁️ **Visual Quality** - Zero glitches, responsive behavior, cross-browser compatibility
3. 🔧 **Console Health** - Zero errors, zero warnings, clean output
4. ♿ **Accessibility** - WCAG 2.1 AA compliance, prefers-reduced-motion MANDATORY (Deep-Research 6.1-6.4)
5. 📝 **Code Quality** - Cleanup, error handling, documentation, review
6. 🌐 **Browser Compatibility** - Chrome, Firefox, Safari, Mobile tested

**ALL 6 gates must PASS for production deployment.**

---

## When to Use

✅ **MANDATORY before:**
- Production deployment
- Client deliverables
- Public beta releases
- Any user-facing animation launch

❌ **NOT needed for:**
- Development experimentation
- Internal prototypes
- Proof-of-concept demos

---

## Prerequisites

**Required:**
- Animation implemented and functional
- Chrome DevTools MCP available (MANDATORY for performance/visual/console validation)
- Page URL or local dev server running
- Time allocation: 20-30 minutes (comprehensive validation cannot be rushed)

**Recommended:**
- Validation report from validate-complete workflow (provides baseline metrics)
- Optimization report from optimize-performance workflow (documents optimizations applied)

---

## Step 1: Context Gathering

<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Tech Director introduces the final production gate with maximum gravitas</action>

**"{user_name}, this is THE final production gate. We're validating 6 critical categories backed by 10 Deep-Research sections and production best practices. This cannot be rushed - we check EVERY corner."**

<ask name="animation_description">
**Animation Description**
What animation is being shipped to production?

(Provide detailed description of what it does, key moments, interaction type)
</ask>

<ask name="deployment_target">
**Deployment Target**
Where is this being deployed?

Options:
- production (public-facing, high stakes)
- staging (pre-production testing)
- client-review (client approval)
- beta (limited public release)
</ask>

<ask name="page_url">
**Page URL for Automated Testing**
Provide the URL where animation is running (enables Chrome DevTools MCP validation):

- Development server: http://localhost:8080
- Staging URL: https://staging.example.com
- Or type 'manual' if automated testing not possible
</ask>

<ask name="validation_report_available">
**Previous Validation Reports**
Do you have a validation report from validate-complete workflow? (yes/no)

If yes, we'll reference baseline metrics.
If no, we'll conduct fresh validation.
</ask>

<template-output>animation_description, deployment_target, page_url, validation_report_available</template-output>

---

## Step 2: MANDATORY Research Gate - Production Readiness Frameworks

<critical>🚨 MANDATORY RESEARCH CHECKPOINT - BLOCKING - CANNOT SKIP 🚨</critical>

This research gate is **ABSOLUTELY MANDATORY**. You CANNOT proceed to validation gates until ALL research is complete and validated.

**Why this matters:** Production deployment without research-backed standards leads to:
- Performance failures in the wild (user complaints, bounce rate)
- Accessibility violations (legal risk, excluding users)
- Cross-browser failures (Safari issues, iOS bugs)
- Production incidents (errors, visual glitches)

**Research Sources:**
- **10 Deep-Research sections** (5.1-5.6 Performance, 6.1-6.4 Accessibility)
- **5+ Archon MCP searches** (production standards, deployment patterns)
- **Web Search (conditional)** (2025-specific best practices if Archon lacks recent patterns)

---

### Phase 1: Archon MCP Research - Production Standards (MANDATORY)

<action>Execute systematic Archon MCP searches for production deployment standards</action>

**Search 1: Production Readiness Standards (REQUIRED)**
```
rag_search_knowledge_base("GSAP production readiness deployment checklist", match_count=8)
```
**Purpose:** Understand what makes animations production-ready in 2025

**Search 2: Cross-Browser Testing Patterns (REQUIRED)**
```
rag_search_knowledge_base("GSAP cross-browser testing Safari iOS compatibility", match_count=8)
```
**Purpose:** Learn browser testing requirements, known quirks (especially Safari/iOS)

**Search 3: Performance Validation Standards (REQUIRED)**
```
rag_search_knowledge_base("GSAP 60fps validation performance profiling", match_count=6)
```
**Purpose:** Understand performance validation methodologies

**Search 4: Accessibility Production Requirements (REQUIRED)**
```
rag_search_knowledge_base("GSAP accessibility prefers-reduced-motion WCAG production", match_count=6)
```
**Purpose:** Confirm accessibility requirements for production deployment

**Search 5: Deployment Best Practices (REQUIRED)**
```
rag_search_knowledge_base("GSAP deployment production best practices gotchas", match_count=5)
```
**Purpose:** Understand deployment considerations, common pitfalls

<action>Present Archon MCP findings summary:
- Production readiness patterns discovered (8-10 patterns)
- Cross-browser quirks identified (Safari, Firefox, iOS)
- Performance validation methodologies (profiling, throttling)
- Accessibility requirements (WCAG standards, prefers-reduced-motion)
- Deployment best practices (gotchas to avoid)
</action>

---

### Phase 2: Deep-Research Frameworks - Systematic Protocols (MANDATORY)

<critical>You MUST read ALL 10 Deep-Research sections and extract systematic frameworks</critical>

**PERFORMANCE FRAMEWORK (Deep-Research 5.1-5.6)**

#### Section 5.1: GPU Rule - Property Selection Foundation
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/18-51-animate-efficient-properties-the-gpu-rule.md

**Extract and apply:**
- **GPU-accelerated properties (REQUIRED):** transform (translate, rotate, scale, skew), opacity
  - *"stick to `transform` and `opacity` in your tweens for core motion"*
- **Expensive layout triggers (FORBIDDEN in production):** top, left, right, bottom, width, height, margin, padding
  - *"Animating these means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID animating these if at all possible."*
- **will-change optimization (use sparingly):** *"Typically under 10 layers is fine; dozens might be an issue on mobile."*
- **Validation Protocol:**
  - ✅ Check: All animated properties are transform/opacity
  - ✅ Check: No layout-triggering properties (top, left, width, height)
  - ✅ Check: will-change layer count <10 (use Chrome DevTools Layers panel)

#### Section 5.2: Main Thread - Frame Budget
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md

**Extract and apply:**
- **Frame budget breakdown:** 16ms total per frame for 60fps
  - ~8ms scripting budget
  - ~4ms style/layout budget
  - ~4ms paint budget
- **Validation Protocol:**
  - ✅ Check: JS execution <5ms per frame (Chrome DevTools Performance tab)
  - ✅ Check: Paint time <16ms per frame
  - ✅ Check: No long tasks (>50ms) blocking main thread

#### Section 5.3: Debugging Jank - Bottleneck Identification
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md

**Extract and apply:**
- **Jank detection methodology:** Chrome DevTools Performance profiling
- **Common bottlenecks:** Excessive reflows, paint storms, JS execution spikes
- **Validation Protocol:**
  - ✅ Check: No frame drops (fps graph stays at 60fps)
  - ✅ Check: No paint storms (huge paint bars in timeline)
  - ✅ Check: No layout thrashing (multiple layout/reflow cycles per frame)

#### Section 5.4: Memory Management - Leak Detection
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/21-54-memory-management-garbage-collection.md

**Extract and apply:**
- **Cleanup patterns:** kill() on unmount, ScrollTrigger.getAll().forEach(st => st.kill())
- **Memory leak detection:** Run animation 5+ cycles, monitor heap size
- **Validation Protocol:**
  - ✅ Check: Memory growth <10% across 5 animation cycles
  - ✅ Check: Cleanup implemented (kill() or gsap.context() revert)
  - ✅ Check: No orphaned ScrollTriggers or event listeners

#### Section 5.5: 60fps Optimization - Production Standards
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md

**Extract and apply:**
- **Frame budget target:** ~16ms per frame (8ms scripting + 4ms style/layout + 4ms paint)
  - *"To achieve ~16ms per frame budget: Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total."*
- **autoAlpha optimization:** *"This GSAP property animates opacity and toggles visibility to `hidden` when opacity hits 0. Using it (instead of opacity alone) prevents the browser from painting the element at 0 opacity"*
- **Layer optimization:** Hide content behind full-screen panels (`display:none` during transitions)
- **Canvas for particles:** *"If animating many small elements (like confetti or particles), consider drawing them to a single canvas"*
- **Validation Protocol:**
  - ✅ Check: 60fps achieved on normal devices (Chrome DevTools)
  - ✅ Check: 60fps achieved @ 4x CPU throttle (mid-range devices)
  - ✅ Check: 30fps minimum @ 6x CPU throttle (low-end devices)
  - ✅ Check: autoAlpha used instead of opacity alone (where applicable)
  - ✅ Check: Canvas used for particle systems (if applicable)

#### Section 5.6: WebGL/Canvas - Alternative Approaches
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/23-56-when-to-use-webglcanvas.md

**Extract and apply:**
- **When to use Canvas/WebGL:** Particle systems, complex visual effects, hundreds of animated elements
- **When to stay with DOM:** Simple transforms, small element counts, standard UI animations
- **Validation Protocol:**
  - ✅ Check: If animating 100+ elements, consider Canvas approach
  - ✅ Check: Canvas performance tested (if used)

---

**ACCESSIBILITY FRAMEWORK (Deep-Research 6.1-6.4)**

#### Section 6.1: prefers-reduced-motion - MANDATORY for Production
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md

**Extract and apply:**
- **Detection:** *"`window.matchMedia('(prefers-reduced-motion: reduce)')`"*
- **GSAP integration:** *"GSAP provides a handy integration via `gsap.matchMedia()`"*
- **Spectrum of reduction:**
  - **Minimal:** Less intense (no parallax, only fades)
  - **Disable largely:** Skip non-essential animations
  - **Alternate presentation:** Instant changes or subtle cross-fades
- **What to reduce (CRITICAL):**
  - *"Parallax effects: These can cause dizziness. Instead, perhaps just keep elements static."*
  - *"Zooming or rotation: If something zooms a lot, maybe just fade it."*
  - *"Autoscrolling or scroll-jacking: If your animation auto-scrolls or rapidly changes content, definitely disable that under reduce motion."*
  - *"Repetitive animations (like a background that constantly pans). Either stop them or allow user to pause."*
- **Implementation pattern:**
```javascript
gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
  // Disable ScrollTriggers
  ScrollTrigger.getAll().forEach(trig => trig.disable());
  // Or speed through animations (instant finish)
  gsap.globalTimeline.timeScale(100);
});
```
- **Validation Protocol (MANDATORY):**
  - ✅ **BLOCKER:** prefers-reduced-motion fallback MUST be implemented
  - ✅ Check: Toggle OS setting (Mac: Settings > Accessibility > Display > Reduce Motion)
  - ✅ Check: All major animations tone down or disable
  - ✅ Check: ScrollTriggers disabled in reduce mode
  - ✅ Check: No parallax, zoom, or rotation in reduce mode

#### Section 6.2: Other Motion Accessibility - WCAG Compliance
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/25-62-other-motion-accessibility-considerations.md

**Extract and apply:**
- **Flashing content (CRITICAL):** *"WCAG 2.3.1 says no content should flash more than 3 times per second (especially high intensity red flashes) as it can trigger seizures."*
  - **Validation:** Count flashes per second, ensure <3 flashes
- **Focus management:** *"If a modal opens via Flip, you should typically move focus to the modal (e.g., the close button)"*
  - **Pattern:** Move focus to modal on open, return focus to trigger on close
- **Screen reader visibility:** *"If you animate an element off-screen or opacity 0, but it's still in DOM, a screen reader will still encounter it. If it's meant to be hidden, add `aria-hidden='true'` while invisible."*
- **Pause mechanism (WCAG 2.2.2):** *"WCAG 2.2.2 requires that for any animation that lasts more than 5 seconds (and is not user-controlled or essential), the user should have a way to pause or stop it."*
- **Validation Protocol:**
  - ✅ **BLOCKER:** No flashing >3 times per second (seizure risk)
  - ✅ Check: Focus management implemented (modals, reveals)
  - ✅ Check: aria-hidden="true" on invisible animated elements
  - ✅ Check: Pause button provided for animations >5 seconds
  - ✅ Check: Screen reader tested (content reads in logical order)

#### Section 6.3: Styling Considerations
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/26-63-styling-considerations-for-motion.md

**Extract and apply:**
- **Production-ready styling patterns:** CSS organization, critical styles inline
- **Validation Protocol:**
  - ✅ Check: Animation styles organized and documented
  - ✅ Check: Critical animation styles don't depend on external CSS load

#### Section 6.4: User Education & Control
**Read:** {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/27-64-educate-users-and-offer-control.md

**Extract and apply:**
- **User control mechanisms:** Pause buttons, motion preferences
- **Validation Protocol:**
  - ✅ Check: Users can pause long-running animations
  - ✅ Check: Motion preferences respected (prefers-reduced-motion)

---

### Phase 3: Web Search - 2025 Production Standards (Conditional)

<check if="archon_lacks_2025_patterns">
<action>If Archon MCP lacked recent 2025-specific production deployment patterns, search web for latest standards</action>

**Search 1: Chrome DevTools Validation 2025**
```
WebSearch("Chrome DevTools GSAP animation profiling validation 2025")
```

**Search 2: Web Vitals Animation Standards**
```
WebSearch("Web Vitals animation performance standards 2025")
```

**Search 3: WCAG Animation Updates**
```
WebSearch("WCAG 2.1 animation accessibility requirements 2025")
```

<action>Present 2025 findings (if applicable):
- Latest Chrome DevTools profiling techniques
- Web Vitals thresholds for animations
- Updated WCAG guidance
</action>
</check>

---

### Mandatory Approval Checkpoint

<action>Present complete research summary to {user_name}</action>

**🔍 RESEARCH COMPLETE - Production Readiness Frameworks Loaded**

**Archon MCP Findings:**
- Production patterns: [X patterns discovered]
- Cross-browser quirks: [Safari, Firefox, iOS issues]
- Performance methodologies: [Profiling, throttling protocols]
- Accessibility requirements: [WCAG standards, prefers-reduced-motion]
- Deployment best practices: [Gotchas identified]

**Deep-Research Frameworks Applied:**
- **Performance (5.1-5.6):**
  - GPU Rule: transform/opacity only, avoid layout triggers
  - Frame Budget: 16ms total (8ms script, 4ms style, 4ms paint)
  - Memory: <10% growth across cycles, cleanup required
  - 60fps Standards: Normal/4x throttle/6x throttle thresholds

- **Accessibility (6.1-6.4):**
  - prefers-reduced-motion: MANDATORY (gsap.matchMedia pattern)
  - Flashing: <3 flashes/second (WCAG 2.3.1)
  - Focus: Move to modals, return to trigger
  - Pause: Required for animations >5 seconds (WCAG 2.2.2)

**2025 Production Standards (if applicable):**
- [Latest Chrome DevTools techniques]
- [Web Vitals thresholds]
- [Updated WCAG guidance]

<halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to validation gates.</halt>

<ask name="research_approval">
**Research Approval Checkpoint**

Type "Continue [c]" to proceed to 6-part validation gates.

(Agent CANNOT autonomously skip this research gate - user input required)
</ask>

<check if="research_approval != 'Continue' AND research_approval != 'c'">
  <action>User did not approve - workflow HALTS</action>
  <goto step="2">Return to research gate...</goto>
</check>

<action>✅ Research approved. Proceeding to 6-Part Production Validation Gates...</action>

<template-output>
archon_findings_summary,
deep_research_frameworks_summary,
websearch_2025_standards,
research_citations
</template-output>

---

## Step 3: Gate 1 - Performance Validation ⚡

<action>**Gate 1 of 6: Performance Validation**</action>
<action>Framework: Deep-Research Sections 5.1-5.6 + Chrome DevTools MCP profiling</action>

**Performance Standards (from workflow.yaml):**
- **60fps minimum:** avg >= 60fps, min >= 55fps (normal conditions)
- **Paint time:** <16ms per frame
- **JS execution:** <5ms per frame
- **Memory:** <10% growth across 5 animation cycles
- **GPU properties only:** transform/opacity, no layout triggers
- **Layer count:** <10 will-change layers

---

### 3.1: Property Audit - GPU Rule Compliance

<action>Audit animated properties against Deep-Research Section 5.1 GPU Rule</action>

<ask name="properties_audit_results">
**Property Audit Checklist**

Review animation code and confirm:

1. **GPU-accelerated properties only:** All animations use transform (x, y, scale, rotate, skew) or opacity
2. **No layout triggers:** No animations of top, left, width, height, margin, padding
3. **will-change layers:** Count of elements with will-change (target: <10)

Provide audit results:
- Format: "1: ✅ PASS - Only transform/opacity | 2: ✅ PASS - No layout triggers | 3: ✅ PASS - 6 will-change layers"
- Or: "1: ❌ FAIL - Animating width on 3 elements"
</ask>

<action>Parse property audit results</action>
<action>Extract checks:
- gpu_properties_only: ✅ or ❌
- no_layout_triggers: ✅ or ❌
- layer_count: number (threshold: <10)
</action>

<check if="gpu_properties_only == '❌' OR no_layout_triggers == '❌' OR layer_count >= 10">
  <action>**CRITICAL PERFORMANCE ISSUE DETECTED**</action>
  <action>Document violation:
  - If animating layout-triggering properties → cite Deep-Research 5.1: *"Animating these means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID animating these if at all possible."*
  - If excessive will-change layers → cite Deep-Research 5.1: *"Typically under 10 layers is fine; dozens might be an issue on mobile."*
  </action>
  <action>Set property_audit_status: "❌ FAIL - GPU Rule violation"</action>
  <action>Generate property_audit_blockers with specific fixes needed</action>
</check>

<action>Set property_audit_status based on checks (✅ PASS or ❌ FAIL)</action>
<action>Generate property_audit_notes with findings</action>

---

### 3.2: FPS Profiling - 60fps Compliance (Chrome DevTools MCP REQUIRED)

<check if="page_url == 'manual'">
  <action>**Manual validation mode - cannot perform automated FPS profiling without Chrome DevTools MCP**</action>
  <ask name="manual_fps_results">
  **Manual FPS Validation**

  Since automated testing not available, provide manual FPS validation results:

  1. **Normal conditions:** Did animation maintain 60fps? (Use browser DevTools manually)
  2. **4x CPU throttle:** Did animation maintain 60fps @ 4x throttle?
  3. **6x CPU throttle:** Did animation achieve minimum 30fps @ 6x throttle?

  Format: "1: ✅ 60fps | 2: ⚠️ 50fps @ 4x | 3: ✅ 35fps @ 6x"
  </ask>

  <goto step="3.3">Skip to paint time validation...</goto>
</check>

<action>**Using Chrome DevTools MCP for automated FPS profiling**</action>

#### 3.2a: Normal Conditions (No Throttling)

<action>Use Chrome DevTools MCP: navigate_page({page_url})</action>
<action>Wait 2 seconds for page load</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=false, autoStop=false)</action>
<action>Trigger animation or let it run for 5-10 seconds</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

<action>Analyze trace results:
- Extract average FPS (target: 60fps)
- Extract minimum FPS (should not drop below 55fps)
- Extract frame time metrics (paint, JS execution)
</action>

<check if="fps_normal_avg < 60 OR fps_normal_min < 55">
  <action>**PERFORMANCE FAILURE - Normal Conditions**</action>
  <action>Document issue: "Animation failed to maintain 60fps under normal conditions"</action>
  <action>Cite Deep-Research 5.5: *"To achieve ~16ms per frame budget"* - frame budget exceeded</action>
</check>

#### 3.2b: Mid-Range Devices (4x CPU Throttle)

<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=4)</action>
<action>Reload page: navigate_page({page_url})</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=false, autoStop=false)</action>
<action>Trigger animation or let it run for 5-10 seconds</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

<action>Analyze trace results:
- Extract average FPS (target: 60fps even @ 4x throttle)
- Extract minimum FPS
</action>

<check if="fps_4x_avg < 50">
  <action>**PERFORMANCE WARNING - 4x Throttle**</action>
  <action>Document issue: "Animation struggles on mid-range devices (4x throttle)"</action>
  <action>Recommendation: Optimize JS execution or reduce animation complexity</action>
</check>

#### 3.2c: Low-End Devices (6x CPU Throttle)

<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=6)</action>
<action>Reload page: navigate_page({page_url})</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=false, autoStop=false)</action>
<action>Trigger animation or let it run for 5-10 seconds</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

<action>Analyze trace results:
- Extract average FPS (minimum acceptable: 30fps)
- Extract minimum FPS
</action>

<check if="fps_6x_avg < 30">
  <action>**CRITICAL PERFORMANCE FAILURE - 6x Throttle**</action>
  <action>Document issue: "Animation unusable on low-end devices (<30fps @ 6x throttle)"</action>
  <action>Set performance_blocker: "BLOCKED - Must achieve minimum 30fps @ 6x throttle"</action>
</check>

<action>Reset CPU throttling: emulate_cpu(throttlingRate=1)</action>

---

### 3.3: Frame Time Analysis - Paint & JS Budget

<action>Analyze frame time breakdown from normal conditions trace:
- Paint time per frame (target: <16ms)
- JS execution time per frame (target: <5ms)
- Total frame budget (target: ~16ms)
</action>

<check if="paint_time_avg > 16">
  <action>**PAINT TIME EXCEEDED**</action>
  <action>Cite Deep-Research 5.5: *"<4ms paint per frame yields ~16ms total"*</action>
  <action>Recommendation: Reduce painted area, use autoAlpha instead of opacity, hide content behind full-screen panels</action>
</check>

<check if="js_execution_avg > 5">
  <action>**JS EXECUTION BUDGET EXCEEDED**</action>
  <action>Cite Deep-Research 5.5: *"less than 8ms of scripting"*</action>
  <action>Recommendation: Optimize GSAP code, reduce calculations per frame, use requestAnimationFrame wisely</action>
</check>

---

### 3.4: Memory Leak Check

<action>Run animation multiple times (5+ cycles) to detect memory leaks</action>

<ask name="memory_check_results">
**Memory Leak Detection**

1. Note initial memory usage (Chrome DevTools Memory tab → Performance monitor)
2. Run animation 5 times (trigger, complete, trigger, complete...)
3. Note final memory usage
4. Calculate growth: (final - initial) / initial * 100 = X%

Provide results:
- Initial memory: X MB
- Final memory (after 5 cycles): Y MB
- Growth rate: Z%
- Cleanup observed: yes/no (memory returns to baseline after cycles)

Format: "Initial: 45MB | Final: 48MB | Growth: 6.7% | Cleanup: yes"
</ask>

<action>Parse memory check results</action>

<check if="memory_growth_rate > 10">
  <action>**MEMORY LEAK DETECTED**</action>
  <action>Cite Deep-Research 5.4: Memory management requires proper cleanup</action>
  <action>Recommendation: Implement kill() on unmount, use gsap.context() for automatic cleanup, ensure ScrollTriggers killed</action>
  <action>Set memory_blocker: "BLOCKED - Memory leak must be fixed before production"</action>
</check>

---

### 3.5: Performance Gate Verdict

<action>Calculate Performance Gate status based on all checks:
- Property audit: ✅ or ❌
- FPS normal: ✅ or ❌
- FPS 4x throttle: ✅ or ⚠️
- FPS 6x throttle: ✅ or ❌ (CRITICAL)
- Paint time: ✅ or ❌
- JS execution: ✅ or ⚠️
- Memory: ✅ or ❌
</action>

<check if="ANY critical checks FAIL">
  <action>Set performance_gate_status: "❌ FAIL"</action>
  <action>Set deployment_blocker: true</action>
  <action>Generate performance_blockers_list with specific fixes required</action>
</check>

<check if="ALL critical checks PASS but warnings exist">
  <action>Set performance_gate_status: "⚠️ PASS WITH WARNINGS"</action>
  <action>Generate performance_warnings_list with recommendations</action>
</check>

<check if="ALL checks PASS">
  <action>Set performance_gate_status: "✅ PASS"</action>
</check>

<template-output>
performance_gate_status,
property_audit_status, gpu_properties_only, no_layout_triggers, layer_count, property_audit_notes,
fps_normal_avg, fps_normal_min, fps_4x_avg, fps_4x_min, fps_6x_avg, fps_6x_min,
paint_time_avg, js_execution_avg, frame_budget_total,
memory_initial, memory_final, memory_growth_rate, memory_cleanup_observed,
performance_blockers_list, performance_warnings_list
</template-output>

---

## Step 4: Gate 2 - Visual Quality Validation 👁️

<action>**Gate 2 of 6: Visual Quality Validation**</action>
<action>Framework: Chrome DevTools MCP screenshots + manual inspection</action>

**Visual Standards:**
- No visual glitches (layout shifts, flickering, clipping, artifacts)
- Responsive behavior (mobile 375x667 + desktop 1920x1080)
- Cross-browser compatibility (Chrome, Firefox, Safari)
- No cumulative layout shifts during animation

---

### 4.1: Screenshot Capture (Chrome DevTools MCP)

<check if="page_url == 'manual'">
  <action>**Manual visual validation mode**</action>
  <ask name="manual_visual_results">
  **Manual Visual Validation**

  Manually review animation and confirm:

  1. **No visual glitches:** No layout shifts, flickering, clipping, or artifacts
  2. **Responsive behavior:** Tested on mobile (375x667) and desktop (1920x1080)
  3. **Cross-browser:** Tested in Chrome, Firefox, Safari

  Format: "1: ✅ PASS - No glitches | 2: ✅ PASS - Responsive works | 3: ⚠️ PARTIAL - Only tested Chrome"
  </ask>

  <goto step="4.4">Skip to visual verdict...</goto>
</check>

<action>**Using Chrome DevTools MCP for automated screenshot capture**</action>

#### Desktop Viewport Screenshots

<action>Use Chrome DevTools MCP: navigate_page({page_url})</action>
<action>Use Chrome DevTools MCP: resize_page(width=1920, height=1080)</action>
<action>Wait 2 seconds for layout stabilization</action>
<action>Use Chrome DevTools MCP: take_screenshot()</action>
<action>Save screenshot path: {screenshot_desktop_before}</action>

<action>Trigger animation (scroll, click, or auto-play)</action>
<action>Wait for mid-animation moment (key frame)</action>
<action>Use Chrome DevTools MCP: take_screenshot()</action>
<action>Save screenshot path: {screenshot_desktop_mid}</action>

<action>Wait for animation completion</action>
<action>Use Chrome DevTools MCP: take_screenshot()</action>
<action>Save screenshot path: {screenshot_desktop_after}</action>

#### Mobile Viewport Screenshots

<action>Use Chrome DevTools MCP: resize_page(width=375, height=667)</action>
<action>Reload: navigate_page({page_url})</action>
<action>Wait 2 seconds for layout stabilization</action>
<action>Use Chrome DevTools MCP: take_screenshot()</action>
<action>Save screenshot path: {screenshot_mobile_before}</action>

<action>Trigger animation</action>
<action>Wait for mid-animation moment</action>
<action>Use Chrome DevTools MCP: take_screenshot()</action>
<action>Save screenshot path: {screenshot_mobile_mid}</action>

<action>Wait for animation completion</action>
<action>Use Chrome DevTools MCP: take_screenshot()</action>
<action>Save screenshot path: {screenshot_mobile_after}</action>

---

### 4.2: Visual Inspection Analysis

<ask name="visual_inspection_results">
**Visual Inspection Checklist**

Review screenshots captured (or manual testing) and confirm:

1. **No visual glitches:**
   - No layout shifts (elements jumping during animation)
   - No flickering (elements rapidly appearing/disappearing)
   - No clipping (elements cut off or overflow)
   - No visual artifacts (strange rendering bugs)

2. **Responsive behavior:**
   - Desktop (1920x1080): Animation works correctly
   - Mobile (375x667): Animation adapts or works correctly
   - No horizontal scrollbars
   - Touch interactions work (if applicable)

3. **Animation quality:**
   - Smooth transitions (no stuttering)
   - Elements move as intended
   - Timing feels natural
   - No overlapping issues (z-index problems)

Provide results:
Format: "1: ✅ PASS - No glitches detected | 2: ✅ PASS - Responsive works well | 3: ⚠️ PARTIAL - Slight overlap on mobile"
</ask>

<action>Parse visual inspection results</action>
<action>Extract checks:
- no_visual_glitches: ✅ or ❌
- responsive_behavior: ✅ or ❌ or ⚠️
- animation_quality: ✅ or ⚠️
</action>

---

### 4.3: Cross-Browser Testing

<ask name="cross_browser_results">
**Cross-Browser Testing Checklist**

Test animation in multiple browsers and confirm:

1. **Chrome/Edge:** Animation works correctly (Latest stable)
2. **Firefox:** Animation works correctly (Latest stable)
3. **Safari (desktop):** Animation works correctly (macOS Safari)
4. **iOS Safari:** Animation works correctly (iPhone Safari 14+)
5. **Chrome Android:** Animation works correctly (Android Chrome)

Provide results:
Format: "1: ✅ Chrome 121 | 2: ✅ Firefox 122 | 3: ⚠️ Safari - minor timing difference | 4: ✅ iOS Safari 16 | 5: ❌ NOT TESTED"

Note: GSAP handles cross-browser compatibility automatically, but Safari/iOS quirks still exist.
</ask>

<action>Parse cross-browser results</action>
<action>Count browsers tested (minimum: 3 for PASS)</action>
<action>Identify browser-specific issues (especially Safari/iOS)</action>

<check if="browsers_tested_count < 3">
  <action>**CROSS-BROWSER TESTING INSUFFICIENT**</action>
  <action>Set cross_browser_status: "❌ FAIL - Minimum 3 browsers required"</action>
  <action>Recommendation: Test in Chrome, Firefox, Safari minimum</action>
</check>

---

### 4.4: Visual Gate Verdict

<action>Calculate Visual Quality Gate status:
- No glitches: ✅ or ❌
- Responsive behavior: ✅ or ⚠️
- Animation quality: ✅ or ⚠️
- Cross-browser (3+): ✅ or ❌
</action>

<check if="no_visual_glitches == '❌' OR browsers_tested_count < 3">
  <action>Set visual_gate_status: "❌ FAIL"</action>
  <action>Set deployment_blocker: true</action>
  <action>Generate visual_blockers_list with specific fixes required</action>
</check>

<check if="ALL critical checks PASS but warnings exist">
  <action>Set visual_gate_status: "⚠️ PASS WITH WARNINGS"</action>
  <action>Generate visual_warnings_list with recommendations</action>
</check>

<check if="ALL checks PASS">
  <action>Set visual_gate_status: "✅ PASS"</action>
</check>

<template-output>
visual_gate_status,
screenshot_desktop_before, screenshot_desktop_mid, screenshot_desktop_after,
screenshot_mobile_before, screenshot_mobile_mid, screenshot_mobile_after,
no_visual_glitches, responsive_behavior, animation_quality,
browsers_tested_count, browser_test_results, browser_specific_issues,
visual_blockers_list, visual_warnings_list
</template-output>

---

## Step 5: Gate 3 - Console Health Validation 🔧

<action>**Gate 3 of 6: Console Health Validation**</action>
<action>Framework: Chrome DevTools MCP console monitoring</action>

**Console Standards:**
- **Zero JavaScript errors** (BLOCKING)
- **Zero GSAP warnings** (BLOCKING)
- Clean console output (no debug logs in production)

---

### 5.1: Console Error Check (Chrome DevTools MCP)

<check if="page_url == 'manual'">
  <action>**Manual console validation mode**</action>
  <ask name="manual_console_results">
  **Manual Console Validation**

  Open browser DevTools Console and run animation. Confirm:

  1. **Zero JavaScript errors:** No red error messages in console
  2. **Zero GSAP warnings:** No GSAP-specific warnings
  3. **Clean output:** No unexpected console.log() or debug messages

  Provide results:
  Format: "1: ✅ PASS - Zero errors | 2: ⚠️ 1 GSAP warning about deprecated API | 3: ✅ PASS - Clean"
  </ask>

  <goto step="5.3">Skip to console verdict...</goto>
</check>

<action>**Using Chrome DevTools MCP for automated console monitoring**</action>

<action>Use Chrome DevTools MCP: navigate_page({page_url})</action>
<action>Trigger animation</action>
<action>Wait for animation to complete</action>
<action>Use Chrome DevTools MCP: list_console_messages()</action>

<action>Filter console messages:
- errors: messages with type='error'
- warnings: messages with type='warn'
- logs: messages with type='log'
</action>

<action>Count: errors_count, warnings_count, logs_count</action>

---

### 5.2: Error & Warning Analysis

<check if="errors_count > 0">
  <action>**CRITICAL: JavaScript ERRORS DETECTED**</action>
  <action>For each error: extract error message, stack trace, source file</action>
  <action>Set console_errors_blocker: true</action>
  <action>Recommendation: Fix ALL JavaScript errors before production - zero tolerance</action>
</check>

<check if="warnings_count > 0">
  <action>**WARNINGS DETECTED**</action>
  <action>For each warning: check if GSAP-specific warning</action>
  <action>If GSAP warnings exist: Set gsap_warnings_blocker: true</action>
  <action>Recommendation: Fix GSAP warnings (often deprecated API usage or invalid parameters)</action>
</check>

<check if="logs_count > 10">
  <action>**EXCESSIVE CONSOLE LOGS DETECTED**</action>
  <action>Recommendation: Remove debug console.log() statements before production</action>
  <action>Set console_logs_warning: true (not blocking, but unprofessional)</action>
</check>

---

### 5.3: Console Gate Verdict

<action>Calculate Console Health Gate status:
- JavaScript errors: count (MUST be 0)
- GSAP warnings: count (MUST be 0)
- Debug logs: count (should be minimal)
</action>

<check if="errors_count > 0 OR gsap_warnings_count > 0">
  <action>Set console_gate_status: "❌ FAIL"</action>
  <action>Set deployment_blocker: true</action>
  <action>Generate console_blockers_list:
  - "JavaScript errors detected: [error messages]"
  - "GSAP warnings detected: [warning messages]"
  - "Fix ALL errors and warnings before production - zero tolerance policy"
  </action>
</check>

<check if="errors_count == 0 AND gsap_warnings_count == 0 but logs_count > 10">
  <action>Set console_gate_status: "⚠️ PASS WITH WARNINGS"</action>
  <action>Generate console_warnings_list:
  - "Excessive console.log() statements detected - remove debug logs"
  </action>
</check>

<check if="errors_count == 0 AND gsap_warnings_count == 0 AND logs_count <= 10">
  <action>Set console_gate_status: "✅ PASS"</action>
</check>

<template-output>
console_gate_status,
errors_count, errors_list, errors_details,
warnings_count, warnings_list, gsap_warnings_count,
logs_count,
console_blockers_list, console_warnings_list
</template-output>

---

## Step 6: Gate 4 - Accessibility Validation ♿

<action>**Gate 4 of 6: Accessibility Validation (WCAG 2.1 AA Compliance)**</action>
<action>Framework: Deep-Research Sections 6.1-6.4 + WCAG 2.1 AA standards</action>

**Accessibility Standards:**
- **prefers-reduced-motion fallback:** MANDATORY (BLOCKING)
- **No seizure risk:** <3 flashes per second (WCAG 2.3.1)
- **Keyboard navigation:** All interactive elements accessible
- **Focus management:** Focus moves to modals, returns to trigger
- **Pause mechanism:** Required for animations >5 seconds (WCAG 2.2.2)
- **Screen reader compatibility:** aria-hidden, aria-label used correctly

---

### 6.1: prefers-reduced-motion Check (MANDATORY)

<action>Cite Deep-Research 6.1: *"Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We **must** honor this"*</action>

<ask name="prefers_reduced_motion_check">
**prefers-reduced-motion Fallback Check (MANDATORY - BLOCKING)**

This is the MOST CRITICAL accessibility requirement. CANNOT ship without this.

1. **Implementation check:** Does animation code include prefers-reduced-motion fallback?
   - GSAP integration: `gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => { ... })`
   - Or CSS: `@media (prefers-reduced-motion: reduce) { ... }`

2. **Behavior check:** What happens when reduced motion is enabled?
   - Option A: Animations disabled entirely
   - Option B: Animations simplified (fades only, no parallax/zoom/rotation)
   - Option C: Animations instant (timeScale(100))

3. **Testing check:** Toggle OS setting and verify behavior changes
   - Mac: Settings > Accessibility > Display > Reduce Motion
   - Windows: Settings > Display > Simplify and personalize > Show animations

Provide results:
Format: "1: ✅ Implemented - gsap.matchMedia() | 2: Animations simplified (fades only) | 3: ✅ Tested - all major animations tone down"

**CRITICAL:** If NOT implemented → BLOCKED (cannot ship)
</ask>

<action>Parse prefers-reduced-motion check</action>

<check if="prefers_reduced_motion_implemented == 'NO' OR prefers_reduced_motion_implemented == '❌'">
  <action>**🚨 CRITICAL BLOCKER: prefers-reduced-motion NOT IMPLEMENTED**</action>
  <action>Cite Deep-Research 6.1: *"GSAP provides a handy integration via `gsap.matchMedia()`"*</action>
  <action>Set accessibility_blocker: "BLOCKED - prefers-reduced-motion is MANDATORY for production"</action>
  <action>Generate implementation_guidance:
  ```javascript
  gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
    // Disable ScrollTriggers
    ScrollTrigger.getAll().forEach(trig => trig.disable());
    // Speed through animations (instant)
    gsap.globalTimeline.timeScale(100);
  });
  ```
  </action>
  <action>Set prefers_reduced_motion_status: "❌ FAIL - NOT IMPLEMENTED (BLOCKING)"</action>
</check>

<check if="prefers_reduced_motion_implemented == 'YES' OR prefers_reduced_motion_implemented == '✅'">
  <action>Set prefers_reduced_motion_status: "✅ PASS - Implemented and tested"</action>
</check>

---

### 6.2: Seizure Risk Assessment (WCAG 2.3.1)

<action>Cite Deep-Research 6.2: *"WCAG 2.3.1 says no content should flash more than 3 times per second (especially high intensity red flashes) as it can trigger seizures."*</action>

<ask name="seizure_risk_check">
**Seizure Risk Assessment (WCAG 2.3.1 Compliance)**

Review animation for flashing content:

1. **Flashing count:** Does any element flash/strobe rapidly?
   - Count flashes per second
   - Threshold: MUST be <3 flashes per second

2. **High intensity flashing:** Any high-contrast or red flashing?
   - This is especially dangerous for photosensitive users

3. **Rapid transitions:** Any rapid visibility toggles or opacity strobing?

Provide results:
Format: "1: ✅ PASS - No flashing detected | 2: ✅ PASS - No high intensity flashing | 3: ✅ PASS - Smooth transitions only"
Or: "1: ❌ FAIL - Element flashes 5 times per second"
</ask>

<action>Parse seizure risk check</action>

<check if="flashing_detected == 'YES' AND flashes_per_second >= 3">
  <action>**🚨 CRITICAL BLOCKER: SEIZURE RISK DETECTED**</action>
  <action>Cite WCAG 2.3.1: No more than 3 flashes per second</action>
  <action>Set accessibility_blocker: "BLOCKED - Seizure risk (flashing >3 times per second)"</action>
  <action>Set seizure_risk_status: "❌ FAIL - WCAG 2.3.1 VIOLATION (BLOCKING)"</action>
</check>

<check if="flashing_detected == 'NO' OR flashes_per_second < 3">
  <action>Set seizure_risk_status: "✅ PASS - No seizure risk"</action>
</check>

---

### 6.3: Keyboard Navigation Check (If Interactive)

<action>Cite Deep-Research 6.2: *"If your animation involves moving or opening new content (like a modal Flip in, or new section appears), consider keyboard focus"*</action>

<ask name="keyboard_navigation_check">
**Keyboard Navigation & Focus Management (If Interactive)**

If animation is interactive (modals, buttons, panels):

1. **Keyboard accessible:** Can all interactive elements be accessed via keyboard?
   - Tab navigation works
   - Enter/Space triggers actions
   - Escape dismisses modals

2. **Focus management:** Does focus move correctly?
   - Opening modal: Focus moves to modal (close button or first interactive element)
   - Closing modal: Focus returns to trigger element
   - During animation: Focus not trapped or lost

3. **Focus visibility:** Are focus states visible?
   - Clear outline or focus indicator
   - Not hidden by CSS outline:none

Provide results:
Format: "N/A - Not interactive" OR "1: ✅ Tab navigation works | 2: ✅ Focus moves to modal | 3: ✅ Focus states visible"
</ask>

<action>Parse keyboard navigation check</action>

<check if="animation_is_interactive AND keyboard_navigation_fails">
  <action>**ACCESSIBILITY ISSUE: Keyboard Navigation Problems**</action>
  <action>Cite Deep-Research 6.2 focus management pattern</action>
  <action>Set keyboard_accessibility_warning: "Keyboard navigation needs improvement"</action>
</check>

---

### 6.4: Pause Mechanism Check (WCAG 2.2.2)

<action>Cite Deep-Research 6.2: *"WCAG 2.2.2 requires that for any animation that lasts more than 5 seconds (and is not user-controlled or essential), the user should have a way to pause or stop it."*</action>

<ask name="pause_mechanism_check">
**Pause Mechanism Check (WCAG 2.2.2)**

If animation runs for >5 seconds:

1. **Duration:** Does animation run longer than 5 seconds?
2. **User control:** Can user pause or stop animation?
   - Pause button provided
   - Or animation stops automatically after initial play
   - Or user controls animation (scroll-driven, so user has control)
3. **Essential animation:** Is animation essential to functionality?
   - If essential (like loading indicator), pause not required

Provide results:
Format: "N/A - Animation <5 seconds" OR "1: ✅ 8 seconds | 2: ✅ Scroll-driven (user controlled) | 3: N/A"
Or: "1: ✅ 10 seconds | 2: ❌ No pause button | 3: No - decorative"
</ask>

<action>Parse pause mechanism check</action>

<check if="animation_duration > 5 AND no_pause_mechanism AND not_essential">
  <action>**WCAG 2.2.2 VIOLATION: Pause Mechanism Required**</action>
  <action>Cite Deep-Research 6.4: User control mechanisms for long animations</action>
  <action>Set pause_mechanism_warning: "Animation >5 seconds requires pause button (WCAG 2.2.2)"</action>
</check>

---

### 6.5: Screen Reader Compatibility

<action>Cite Deep-Research 6.2: *"If you animate an element off-screen or opacity 0, but it's still in DOM, a screen reader will still encounter it. If it's meant to be hidden, add `aria-hidden='true'` while invisible."*</action>

<ask name="screen_reader_check">
**Screen Reader Compatibility Check**

Review animated elements for screen reader issues:

1. **Hidden elements:** Invisible animated elements have aria-hidden="true"?
2. **Revealed elements:** When elements appear, aria-hidden removed?
3. **Reading order:** Screen reader reads content in logical order (not visual animation order)?
4. **Alternative text:** Important visual animation has text alternative or description?

Provide results:
Format: "1: ✅ aria-hidden used correctly | 2: ✅ Removed on reveal | 3: ✅ Logical order | 4: ✅ Descriptions provided"
</ask>

<action>Parse screen reader check</action>

---

### 6.6: Accessibility Gate Verdict

<action>Calculate Accessibility Gate status:
- prefers-reduced-motion: ✅ (MANDATORY) or ❌ (BLOCKING)
- Seizure risk: ✅ or ❌ (BLOCKING)
- Keyboard navigation: ✅ or ⚠️ or N/A
- Pause mechanism: ✅ or ⚠️ or N/A
- Screen reader: ✅ or ⚠️
</action>

<check if="prefers_reduced_motion_status == '❌' OR seizure_risk_status == '❌'">
  <action>Set accessibility_gate_status: "❌ FAIL"</action>
  <action>Set deployment_blocker: true</action>
  <action>Generate accessibility_blockers_list:
  - If prefers-reduced-motion missing: "CRITICAL: prefers-reduced-motion fallback MUST be implemented"
  - If seizure risk: "CRITICAL: Flashing content violates WCAG 2.3.1 (seizure risk)"
  </action>
</check>

<check if="prefers_reduced_motion_status == '✅' AND seizure_risk_status == '✅' but warnings exist">
  <action>Set accessibility_gate_status: "⚠️ PASS WITH WARNINGS"</action>
  <action>Generate accessibility_warnings_list with keyboard/pause/screen reader recommendations</action>
</check>

<check if="ALL checks PASS">
  <action>Set accessibility_gate_status: "✅ PASS - WCAG 2.1 AA Compliant"</action>
</check>

<template-output>
accessibility_gate_status,
prefers_reduced_motion_status, prefers_reduced_motion_implementation,
seizure_risk_status, flashing_detected, flashes_per_second,
keyboard_navigation_status, focus_management_status,
pause_mechanism_status, animation_duration, pause_control_provided,
screen_reader_status, aria_hidden_usage,
wcag_compliance_level,
accessibility_blockers_list, accessibility_warnings_list
</template-output>

---

## Step 7: Gate 5 - Code Quality Validation 📝

<action>**Gate 5 of 6: Code Quality Validation**</action>
<action>Framework: Deep-Research 5.4 (Cleanup patterns) + code review standards</action>

**Code Quality Standards:**
- Cleanup implemented (kill() on unmount, ScrollTrigger cleanup)
- Error handling present (try-catch, graceful degradation)
- Documentation complete (implementation notes, performance metrics)
- Code reviewed (peer or AI review)

---

### 7.1: Cleanup Implementation Check

<action>Cite Deep-Research 5.4: Memory management requires proper cleanup to prevent leaks</action>

<ask name="cleanup_check">
**Cleanup Implementation Checklist**

Review animation code for proper cleanup:

1. **GSAP cleanup:** Animations killed on component unmount?
   - kill() called on timelines/tweens
   - OR gsap.context() used with automatic revert

2. **ScrollTrigger cleanup:** ScrollTriggers properly cleaned up?
   - ScrollTrigger.getAll().forEach(st => st.kill())
   - OR ScrollTrigger instances stored and killed individually

3. **Event listeners removed:** Custom event listeners cleaned up?
   - removeEventListener() called on unmount
   - No orphaned listeners

4. **References cleared:** Large objects/arrays dereferenced?
   - Set to null or undefined on cleanup

Provide results:
Format: "1: ✅ gsap.context() used | 2: ✅ ScrollTriggers killed | 3: ✅ Event listeners removed | 4: ✅ References cleared"
Or: "1: ❌ No kill() or context() - memory leak risk"
</ask>

<action>Parse cleanup check</action>

<check if="cleanup_not_implemented">
  <action>**CODE QUALITY ISSUE: No Cleanup Implementation**</action>
  <action>Cite Deep-Research 5.4: Cleanup prevents memory leaks</action>
  <action>Set cleanup_warning: "Cleanup not implemented - memory leak risk in SPAs"</action>
  <action>Recommendation: Use gsap.context() for automatic cleanup or implement kill() on unmount</action>
</check>

---

### 7.2: Error Handling Check

<ask name="error_handling_check">
**Error Handling Checklist**

Review code for error handling:

1. **Try-catch blocks:** Critical animation code wrapped in try-catch?
2. **Graceful degradation:** If animation fails, does app still work?
3. **Error reporting:** Errors logged or reported (not silent failures)?

Provide results:
Format: "1: ✅ Try-catch around GSAP code | 2: ✅ App works without animation | 3: ✅ console.error() for failures"
</ask>

<action>Parse error handling check</action>

---

### 7.3: Documentation Check

<ask name="documentation_check">
**Documentation Checklist**

Review code documentation:

1. **Implementation notes:** Code comments explain complex animation logic?
2. **Performance metrics:** Document FPS achieved, throttle test results?
3. **Known issues:** Any known browser quirks documented?
4. **Maintenance guide:** How to modify or extend animation documented?

Provide results:
Format: "1: ✅ Comments present | 2: ✅ Metrics in README | 3: ⚠️ Safari quirk noted in comments | 4: ⚠️ Minimal maintenance notes"
</ask>

<action>Parse documentation check</action>

---

### 7.4: Code Review Check

<ask name="code_review_check">
**Code Review Checklist**

Has code been reviewed?

1. **Peer review:** Another developer reviewed the code?
2. **AI review:** Used AI code review (ChatGPT, GitHub Copilot)?
3. **Self review:** Thorough self-review completed?

Provide results:
Format: "1: ✅ Peer reviewed by [Name] | 2: ✅ AI reviewed | 3: ✅ Self-reviewed"
Or: "1: ❌ Not peer reviewed | 2: ✅ AI reviewed | 3: ✅ Self-reviewed"
</ask>

<action>Parse code review check</action>

---

### 7.5: Code Quality Gate Verdict

<action>Calculate Code Quality Gate status:
- Cleanup implemented: ✅ or ⚠️
- Error handling: ✅ or ⚠️
- Documentation: ✅ or ⚠️
- Code reviewed: ✅ or ⚠️
</action>

<action>Code Quality Gate allows 90% passing score (minor gaps acceptable)</action>

<check if="cleanup_not_implemented OR error_handling_missing">
  <action>Set code_quality_gate_status: "⚠️ PASS WITH WARNINGS"</action>
  <action>Generate code_quality_warnings_list with recommended improvements</action>
</check>

<check if="ALL checks have reasonable coverage">
  <action>Set code_quality_gate_status: "✅ PASS"</action>
</check>

<template-output>
code_quality_gate_status,
cleanup_implemented, gsap_cleanup_method, scrolltrigger_cleanup, event_listeners_cleanup,
error_handling_present, graceful_degradation,
documentation_present, performance_metrics_documented, known_issues_documented,
code_reviewed, review_type,
code_quality_warnings_list
</template-output>

---

## Step 8: Gate 6 - Browser Compatibility Validation 🌐

<action>**Gate 6 of 6: Browser Compatibility Validation**</action>
<action>Framework: Deep-Research 6.1 + cross-browser testing standards</action>

**Browser Compatibility Standards:**
- **Chrome/Edge tested** (Latest stable)
- **Firefox tested** (Latest stable)
- **Safari tested** (macOS + iOS Safari 14+)
- **Mobile browsers tested** (iOS Safari + Chrome Android)
- **Minimum: 3+ browsers required for PASS**

---

### 8.1: Browser Testing Matrix

<ask name="browser_testing_matrix">
**Browser Testing Matrix**

Test animation in multiple browsers and provide results:

**Desktop Browsers:**
1. **Chrome:** Version tested? Result?
2. **Edge:** Version tested? Result?
3. **Firefox:** Version tested? Result?
4. **Safari (macOS):** Version tested? Result?

**Mobile Browsers:**
5. **iOS Safari:** Version tested? Device? Result?
6. **Chrome Android:** Version tested? Device? Result?

**Known Quirks:**
- Any browser-specific issues encountered?
- Safari transform-origin behavior issues?
- Firefox will-change layer differences?
- iOS inertial scrolling + ScrollTrigger coordination?

Provide results:
Format: "1: ✅ Chrome 121 - Perfect | 2: ✅ Edge 121 - Perfect | 3: ✅ Firefox 122 - Perfect | 4: ⚠️ Safari 17 - Minor timing difference on scroll | 5: ✅ iOS Safari 16 (iPhone 14) - Perfect | 6: ❌ NOT TESTED"

**Quirks:** "Safari: Slight delay on ScrollTrigger start (known iOS issue, acceptable)"
</ask>

<action>Parse browser testing matrix</action>
<action>Count browsers_tested (desktop + mobile)</action>
<action>Identify browser-specific issues</action>

---

### 8.2: Fallback & Graceful Degradation Check

<ask name="fallback_check">
**Fallback & Graceful Degradation Checklist**

Verify fallbacks are in place:

1. **prefers-reduced-motion fallback:** Already checked in Gate 4 (accessibility)
2. **GSAP fails to load:** Does app work without animation if GSAP CDN fails?
3. **CSS fallbacks:** Critical visual states have CSS fallbacks?
4. **Browser feature detection:** Any modern features gracefully degrade for old browsers?

Provide results:
Format: "1: ✅ Checked in Gate 4 | 2: ✅ App works without GSAP | 3: ✅ CSS fallbacks present | 4: ⚠️ Assumes modern browser features"
</ask>

<action>Parse fallback check</action>

---

### 8.3: Browser Compatibility Gate Verdict

<action>Calculate Browser Compatibility Gate status:
- Browsers tested count (minimum: 3 required)
- Desktop browsers: Chrome, Firefox, Safari
- Mobile browsers: iOS Safari, Chrome Android
- Fallbacks present: prefers-reduced-motion, CSS fallbacks
</action>

<check if="browsers_tested_count < 3">
  <action>Set browser_compatibility_gate_status: "❌ FAIL"</action>
  <action>Set deployment_blocker: true</action>
  <action>Generate browser_compatibility_blockers_list:
  - "Minimum 3 browsers required for production (currently tested: {browsers_tested_count})"
  - "Must test: Chrome, Firefox, Safari"
  </action>
</check>

<check if="browsers_tested_count >= 3 AND browsers_tested_count < 5">
  <action>Set browser_compatibility_gate_status: "⚠️ PASS WITH WARNINGS"</action>
  <action>Generate browser_compatibility_warnings_list:
  - "Recommend testing mobile browsers (iOS Safari, Chrome Android)"
  </action>
</check>

<check if="browsers_tested_count >= 5">
  <action>Set browser_compatibility_gate_status: "✅ PASS - Comprehensive cross-browser testing"</action>
</check>

<template-output>
browser_compatibility_gate_status,
browsers_tested_count,
chrome_result, firefox_result, safari_result, ios_safari_result, chrome_android_result,
browser_specific_issues, known_quirks,
fallback_present, graceful_degradation,
browser_compatibility_blockers_list, browser_compatibility_warnings_list
</template-output>

---

## Step 9: Calculate Final Verdict & Generate Report

<action>**All 6 production gates validated. Calculating final deployment verdict...**</action>

---

### 9.1: Aggregate Gate Results

<action>Collect gate statuses:
1. Performance: {performance_gate_status}
2. Visual Quality: {visual_gate_status}
3. Console Health: {console_gate_status}
4. Accessibility: {accessibility_gate_status}
5. Code Quality: {code_quality_gate_status}
6. Browser Compatibility: {browser_compatibility_gate_status}
</action>

<action>Count gates by status:
- PASS: count of ✅
- PASS WITH WARNINGS: count of ⚠️
- FAIL: count of ❌
</action>

---

### 9.2: Apply Verdict Logic

<action>Apply verdict logic from workflow.yaml:</action>

**Verdict Logic:**
- **ALL 6 gates PASS** → 🟢 GREEN LIGHT FOR PRODUCTION
- **ANY gate FAILS** → 🔴 BLOCKED - cannot deploy (with specific blockers)
- **ALL gates PASS but warnings** → 🟡 CONDITIONAL APPROVAL (deploy with caveats)

<check if="ANY gate status == '❌ FAIL'">
  <action>Set final_verdict: "🔴 BLOCKED - Cannot Deploy to Production"</action>
  <action>Set deployment_decision: "BLOCKED"</action>
  <action>Aggregate ALL blocker lists from failed gates into master_blockers_list</action>
  <action>Prioritize blockers:
  - CRITICAL (accessibility, seizure risk, prefers-reduced-motion)
  - HIGH (console errors, performance failures, visual glitches)
  - MEDIUM (browser compatibility, code quality)
  </action>
</check>

<check if="ALL gate statuses == '✅ PASS'">
  <action>Set final_verdict: "🟢 GREEN LIGHT FOR PRODUCTION"</action>
  <action>Set deployment_decision: "APPROVED"</action>
  <action>Set recommendation: "DEPLOY - All 6 production gates passed with flying colors"</action>
</check>

<check if="ALL gate statuses are '✅ PASS' or '⚠️ PASS WITH WARNINGS' but at least one ⚠️">
  <action>Set final_verdict: "🟡 CONDITIONAL APPROVAL - Can Deploy with Caveats"</action>
  <action>Set deployment_decision: "CONDITIONAL"</action>
  <action>Aggregate ALL warning lists into master_warnings_list</action>
  <action>Set recommendation: "CAN DEPLOY - Address warnings post-deployment for optimal quality"</action>
</check>

---

### 9.3: Generate Deployment Recommendation

<check if="final_verdict == '🟢 GREEN LIGHT FOR PRODUCTION'">
  <action>Create deployment_recommendation_section:

  **### ✅ APPROVED FOR PRODUCTION**

  **All 6 production gates PASS.** Animation is production-ready.

  **Deployment Clearance:** **GRANTED**

  **Next Steps:**
  1. Deploy to production with confidence
  2. Monitor performance in real-world (Web Vitals, user feedback)
  3. Gather analytics on animation engagement
  4. Plan future optimizations based on data

  **Research-Backed Quality:**
  - Deep-Research: 10 sections applied (5.1-5.6 Performance, 6.1-6.4 Accessibility)
  - Archon MCP: {archon_searches_count} production pattern searches
  - WCAG 2.1 AA: Compliant
  - Browser Coverage: {browsers_tested_count} browsers tested

  **That's a wrap! Ship it! 🚀**
  </action>
</check>

<check if="final_verdict == '🔴 BLOCKED - Cannot Deploy to Production'">
  <action>Create deployment_recommendation_section:

  **### ❌ BLOCKED - Cannot Deploy to Production**

  **Critical Issues:** {critical_blockers_count}

  **Failed Gates:**
  {failed_gates_list}

  **Critical Blockers (MUST FIX):**
  {master_blockers_list}

  **Action Required:**
  1. Fix ALL critical blockers listed above
  2. Re-run ship-ready-check workflow
  3. Achieve GREEN LIGHT status

  **DO NOT deploy until ALL blockers resolved.**
  </action>
</check>

<check if="final_verdict == '🟡 CONDITIONAL APPROVAL - Can Deploy with Caveats'">
  <action>Create deployment_recommendation_section:

  **### ⚠️ CONDITIONAL APPROVAL - Can Deploy with Caveats**

  **Minor Issues:** {warnings_count}

  **Warnings to Address:**
  {master_warnings_list}

  **Deployment Decision:** Can deploy to production, but recommend addressing warnings for optimal quality.

  **Priority:**
  - HIGH: Address before user-facing deployment
  - MEDIUM: Address within first sprint post-deployment
  - LOW: Address as polish/refinement work

  **Recommendation:** Deploy but schedule follow-up fixes.
  </action>
</check>

---

### 9.4: Generate Final Production Readiness Report

<action>Generate comprehensive production readiness report using template.md</action>

<action>Save report to: {default_output_file}</action>

<action>Report includes:
1. Executive Summary (overall status, gates passed/failed, deployment decision)
2. Deep-Research Framework Analysis (10 sections applied with key insights)
3. 6-Part Production Gate Results (detailed results for each gate)
4. Chrome DevTools Validation Evidence (screenshots, performance traces, console logs)
5. Final Verdict (GREEN LIGHT / BLOCKED / CONDITIONAL)
6. Deployment Recommendation (next steps, action items)
7. Research Citations (Archon sources, Deep-Research sections, Web Search results)
</action>

<template-output>
date, timestamp, animation_description, deployment_target,
final_verdict, deployment_decision, recommendation,
gates_passed_count, gates_failed_count, gates_warnings_count,
deployment_recommendation_section,
critical_blockers_count, warnings_count,
master_blockers_list, master_warnings_list,
<!-- Performance Gate -->
performance_gate_status, property_audit_status, fps_normal_avg, fps_4x_avg, fps_6x_avg,
paint_time_avg, js_execution_avg, memory_growth_rate,
performance_blockers_list, performance_warnings_list,
<!-- Visual Gate -->
visual_gate_status, screenshot_desktop_before, screenshot_desktop_mid, screenshot_desktop_after,
screenshot_mobile_before, screenshot_mobile_mid, screenshot_mobile_after,
browsers_tested_count, browser_test_results,
visual_blockers_list, visual_warnings_list,
<!-- Console Gate -->
console_gate_status, errors_count, errors_list, warnings_count, gsap_warnings_count,
console_blockers_list, console_warnings_list,
<!-- Accessibility Gate -->
accessibility_gate_status, prefers_reduced_motion_status, seizure_risk_status,
keyboard_navigation_status, pause_mechanism_status, wcag_compliance_level,
accessibility_blockers_list, accessibility_warnings_list,
<!-- Code Quality Gate -->
code_quality_gate_status, cleanup_implemented, error_handling_present, documentation_present,
code_quality_warnings_list,
<!-- Browser Compatibility Gate -->
browser_compatibility_gate_status, chrome_result, firefox_result, safari_result,
ios_safari_result, chrome_android_result, browser_specific_issues,
browser_compatibility_blockers_list, browser_compatibility_warnings_list,
<!-- Research Citations -->
archon_findings_summary, deep_research_frameworks_summary, research_citations,
archon_searches_count, deep_research_sections_count
</template-output>

---

## Success Criteria

This workflow is complete when:

- ✅ All 6 production gates analyzed
- ✅ Each gate has PASS/FAIL/WARNING status
- ✅ Final verdict calculated (GREEN LIGHT / BLOCKED / CONDITIONAL)
- ✅ Production readiness report generated with deployment recommendation
- ✅ Research-backed validation (10 Deep-Research sections + 5+ Archon searches)

---

**🚨 CRITICAL REMINDER 🚨**

This is THE final production gate. **Nothing ships without passing this validation.**

If you receive **GREEN LIGHT** → Deploy with confidence (research-backed quality assurance)
If you receive **BLOCKED** → Fix blockers, re-run workflow, achieve GREEN LIGHT
If you receive **CONDITIONAL** → Deploy but schedule warning fixes post-deployment

**Production quality is non-negotiable. Every gate matters.**

---

**Workflow Complete** ✨
