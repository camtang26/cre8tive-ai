# Performance Optimization Workflow - Quality Checklist
# Research Enforcement & 60fps Validation

## Context Gathering Validation (MANDATORY)

### Input Completeness Check

- [ ] **ALL 6 required inputs captured**
  - [ ] animation_code (complete with lifecycle context)
  - [ ] current_fps (or "unknown - need profiling")
  - [ ] target_devices (desktop/mobile/both/low-end)
  - [ ] performance_symptoms (specific jank description)
  - [ ] framework_context (React/Next.js/Vue/Vanilla + version)
  - [ ] bottleneck_hypothesis (or "no hypothesis")

- [ ] **Animation code includes critical context**
  - [ ] Complete implementation (not snippets)
  - [ ] ScrollTrigger config (if applicable)
  - [ ] Cleanup/kill logic status noted
  - [ ] onUpdate callbacks identified
  - [ ] Framework integration shown

- [ ] **Performance symptoms are specific**
  - [ ] Not vague "doesn't work" or "slow"
  - [ ] Specific behaviors described (stuttering, frame drops, lag, jank)
  - [ ] When jank occurs noted (start, middle, throughout)
  - [ ] Device-specific symptoms identified

---

## Chrome DevTools Profiling Validation (MANDATORY)

### Baseline Profiling Execution

- [ ] **ALL Chrome DevTools steps completed**
  - [ ] Visual state screenshot captured
  - [ ] Console messages analyzed
  - [ ] Network requests profiled
  - [ ] Performance trace (normal) captured
  - [ ] CPU throttle 4x test executed
  - [ ] CPU throttle 6x test (if target_devices includes mobile/low-end)
  - [ ] Runtime FPS measurement via JavaScript
  - [ ] GPU layers analysis performed

- [ ] **Performance metrics documented**
  - [ ] Average FPS recorded
  - [ ] Minimum FPS recorded
  - [ ] Paint time measured
  - [ ] JS execution time measured
  - [ ] Frame drops counted
  - [ ] **Forced reflows counted** (CRITICAL metric)
  - [ ] Long tasks identified

- [ ] **Preliminary bottlenecks identified**
  - [ ] At least 1 primary bottleneck listed
  - [ ] Evidence from Chrome DevTools supports identification
  - [ ] Not random guessing based on symptoms

---

## Research Validation (MANDATORY - CANNOT BE SKIPPED)

### TIER 1: Deep-Research 6-Part Framework (ALL REQUIRED)

- [ ] **Section 5.1 (GPU Rule) consulted**
  - [ ] File read: 18-51-animate-efficient-properties-the-gpu-rule.md
  - [ ] Property audit performed (GPU vs layout vs paint-heavy)
  - [ ] Violations identified (layout properties used?)
  - [ ] Replacement strategy calculated (top→y, width→scaleX, etc.)
  - [ ] will-change count audited (<10 target)
  - [ ] Key quote extracted: "Animating layout properties... very slow. AVOID"

- [ ] **Section 5.2 (Main Thread) consulted**
  - [ ] File read: 19-52-keep-the-main-thread-free-avoid-long-tasks.md
  - [ ] 16ms frame budget understood (<8ms script + <4ms style/layout + <4ms paint)
  - [ ] onUpdate callback risk assessed
  - [ ] Forced reflow pattern detection performed
  - [ ] setTimeout usage checked (should use GSAP timeline)
  - [ ] Main thread risk level assigned (LOW/MEDIUM/HIGH)

- [ ] **Section 5.3 (Debugging Jank) consulted**
  - [ ] File read: 20-53-debugging-jank.md
  - [ ] Symptom-to-root-cause mapping performed
  - [ ] Scripting vs Painting vs Layout bottleneck identified
  - [ ] Image decode jank possibility assessed
  - [ ] Third-party interference checked
  - [ ] will-change cleanup pattern noted

- [ ] **Section 5.4 (Memory Management) consulted**
  - [ ] File read: 21-54-memory-management-garbage-collection.md
  - [ ] Cleanup implementation status verified
  - [ ] ScrollTrigger.kill() on unmount checked
  - [ ] GSAP Context usage verified
  - [ ] Tween accumulation risk assessed (mousemove/scroll handlers)
  - [ ] Memory leak risk level assigned (LOW/MEDIUM/HIGH)

- [ ] **Section 5.5 (60fps Optimization) consulted**
  - [ ] File read: 22-55-optimize-animations-for-60fps.md
  - [ ] Simultaneous element count noted
  - [ ] Canvas opportunity assessed (>200 elements?)
  - [ ] autoAlpha usage opportunity identified
  - [ ] ScrollTrigger scrub optimization checked (scrub:true vs 0.1)
  - [ ] Key quote extracted: "autoAlpha... prevents painting at opacity:0"

- [ ] **Section 5.6 (WebGL/Canvas) consulted**
  - [ ] File read: 23-56-when-to-use-webglcanvas.md
  - [ ] Rendering strategy decision made (DOM/Canvas/WebGL)
  - [ ] Element count threshold applied (<200 DOM, >200 canvas, >1000 WebGL)
  - [ ] Particle effects rendering assessed
  - [ ] Key quote extracted if applicable

- [ ] **Section 2.4 (Performance Patterns) consulted**
  - [ ] File read: 08-24-performance-patterns-and-optimization-techniques.md
  - [ ] Overall optimization strategy understood
  - [ ] prefers-reduced-motion as performance safeguard noted
  - [ ] Key quote extracted: "Respecting prefers-reduced-motion isn't just accessibility..."

- [ ] **Pitfall 8.2 (Wrong Properties) consulted**
  - [ ] File read: 35-pitfall-82-animating-the-wrong-properties-no-gpu-acceleration.md
  - [ ] Before/after code example noted
  - [ ] Transform equivalents understood (left→x, top→y, width→scaleX)

**Framework Insights Count:** 8 sections (complete 6-part framework + 2.4 + Pitfall 8.2)

---

### TIER 2: Archon MCP Performance Research (ALL REQUIRED)

- [ ] **Query 1: 60fps Optimization Techniques** (REQUIRED)
  - [ ] `rag_search_knowledge_base("60fps optimization techniques GSAP performance", source_id="b9f6b322298feb21", match_count=8)`
  - [ ] Patterns documented with source IDs
  - [ ] Frame budget strategies extracted

- [ ] **Query 2: GPU Acceleration for Symptoms** (REQUIRED)
  - [ ] `rag_search_knowledge_base("GPU acceleration {{performance_symptoms}} GSAP", source_id="b9f6b322298feb21", match_count=6)`
  - [ ] Targeted solutions documented
  - [ ] Transform usage examples extracted

- [ ] **Query 3: Layout Thrashing Prevention** (REQUIRED)
  - [ ] `rag_search_knowledge_base("layout thrashing forced reflow prevention GSAP", source_id="b9f6b322298feb21", match_count=6)`
  - [ ] Forced reflow triggers identified
  - [ ] GSAP batching explained
  - [ ] Read→Write pattern documented

- [ ] **Query 4: will-change Best Practices** (REQUIRED)
  - [ ] `rag_search_knowledge_base("will-change property optimization performance", source_id="b9f6b322298feb21", match_count=5)`
  - [ ] When to use documented
  - [ ] When NOT to use documented
  - [ ] Memory implications noted

- [ ] **Query 5: Performance Code Examples** (REQUIRED)
  - [ ] `rag_search_code_examples("GSAP performance optimization patterns", match_count=5)`
  - [ ] Before/after examples extracted
  - [ ] GPU-friendly implementations noted

- [ ] **Query 6: Memory Leak Prevention** (REQUIRED)
  - [ ] `rag_search_knowledge_base("GSAP memory leak prevention cleanup kill", source_id="b9f6b322298feb21", match_count=5)`
  - [ ] Cleanup patterns documented
  - [ ] ScrollTrigger.kill() pattern extracted
  - [ ] GSAP Context usage pattern noted

**Archon Queries Executed:** 6 (all required)

---

### TIER 3: Accessibility Preservation Check (REQUIRED)

- [ ] **prefers-reduced-motion evaluated**
  - [ ] Current implementation status checked
  - [ ] Pattern to implement noted (if missing)
  - [ ] Section 2.4 quote: "performance safeguard"

- [ ] **Keyboard navigation impact assessed**
  - [ ] will-change on focus elements checked
  - [ ] Transform on interactive elements checked
  - [ ] Focus outline preservation verified

- [ ] **Focus management with autoAlpha assessed**
  - [ ] visibility:hidden impact understood
  - [ ] Tab order removal noted
  - [ ] Intentional behavior confirmed (modals vs persistent UI)

- [ ] **Accessibility compliance status:** [MAINTAINED / REQUIRES ATTENTION]

---

### TIER 4: WebSearch (Conditional - Only if Needed)

- [ ] **WebSearch necessity evaluated**
  - [ ] Archon + Deep-Research coverage assessed
  - [ ] Gaps identified? [Yes/No]
  - [ ] If Yes: 2025-specific techniques needed

- [ ] **If WebSearch executed:**
  - [ ] Chrome DevTools 2025 features searched
  - [ ] GSAP 2025 best practices searched
  - [ ] Web Vitals animation optimization searched
  - [ ] New insights documented (not covered by Deep-Research)

- [ ] **OR: WebSearch skipped with justification**
  - [ ] "Archon + Deep-Research 5.1-5.6 framework provided complete coverage. WebSearch not needed."

---

### Research Checkpoint Gate (MANDATORY BLOCKING)

- [ ] **Research checkpoint presented to user**
  - [ ] 6-part framework analysis structured
  - [ ] Archon patterns presented
  - [ ] Accessibility preservation noted
  - [ ] Optimization strategy synthesis clear
  - [ ] Expected improvements stated
  - [ ] Total research sources counted
  - [ ] User responded **"Continue [c]"** to proceed

- [ ] **Research CANNOT be skipped autonomously**
  - [ ] Agent did NOT rationalize skipping research
  - [ ] Agent did NOT jump to optimization without research
  - [ ] Systematic diagnosis followed

---

## Optimization Implementation Quality

### Code Quality Validation

- [ ] **Optimized code is complete and executable**
  - [ ] No placeholders or {{missing_variables}}
  - [ ] Valid GSAP syntax
  - [ ] Framework integration correct (React/Vue/Vanilla patterns)
  - [ ] Lifecycle/cleanup implemented

- [ ] **All optimizations are research-backed** (not trial-and-error)
  - [ ] Optimization 1: GPU property conversion (Section 5.1 cited)
  - [ ] Optimization 2: autoAlpha usage (Section 5.5 cited)
  - [ ] Optimization 3: Scrub optimization (Section 5.5 cited)
  - [ ] Optimization 4: will-change usage (Section 5.1 cited)
  - [ ] Optimization 5: Memory cleanup (Section 5.4 cited)
  - [ ] Optimization 6: Canvas if applicable (Section 5.6 cited)

- [ ] **Each optimization includes:**
  - [ ] What changed (specific code modification)
  - [ ] Why (research-backed rationale)
  - [ ] Source (Deep-Research section + Archon ID)
  - [ ] Expected impact (how this resolves symptoms)

- [ ] **Framework-specific considerations addressed**
  - [ ] React: useGSAP hook with Context cleanup
  - [ ] Vue: onMounted/onUnmounted lifecycle
  - [ ] Next.js: SSR considerations handled
  - [ ] Vanilla: Manual cleanup on transitions

- [ ] **GPU Rule compliance**
  - [ ] 100% transform/opacity properties only
  - [ ] Zero layout properties (top, left, width, height, margin, padding)
  - [ ] will-change count <10 elements
  - [ ] Transform equivalents used (x instead of left, scaleX instead of width)

- [ ] **Memory leak prevention**
  - [ ] GSAP Context used OR manual cleanup implemented
  - [ ] ScrollTrigger.kill() on unmount
  - [ ] overwrite:'auto' for frequently updated tweens
  - [ ] No tween accumulation in event handlers

- [ ] **prefers-reduced-motion implemented**
  - [ ] matchMedia check present
  - [ ] Instant state change for reduced motion users
  - [ ] Full animation for users who want motion
  - [ ] Accessibility + performance safeguard achieved

---

## Validation Testing Quality

### 60fps Achievement Verification

- [ ] **Re-profiling completed after optimizations**
  - [ ] Optimized code applied to page_url
  - [ ] Chrome DevTools performance trace captured
  - [ ] CPU throttle tests re-run (4x, 6x if applicable)
  - [ ] ACTUAL measurements (not estimates)

- [ ] **60fps achievement validated**
  - [ ] Average FPS ≥ 60fps (normal conditions): [PASS / FAIL]
  - [ ] Minimum FPS ≥ 55fps (allow minor drops): [PASS / FAIL]
  - [ ] Paint time <10ms (target <4ms): [PASS / FAIL]
  - [ ] Zero forced reflows: [PASS / FAIL]
  - [ ] CPU throttled 4x FPS ≥ 50fps: [PASS / FAIL]
  - [ ] CPU throttled 6x FPS ≥ 45fps: [PASS / FAIL] (if applicable)
  - [ ] GPU properties 100% compliant: [PASS / FAIL]
  - [ ] will-change count <10: [PASS / FAIL]

- [ ] **Before/after comparison clear**
  - [ ] FPS improvement: [X fps → Y fps (+Z%)]
  - [ ] Paint time improvement: [X ms → Y ms (-Z%)]
  - [ ] Forced reflows: [X → 0 (ELIMINATED)]
  - [ ] Table format used for clarity

- [ ] **Accessibility validation**
  - [ ] prefers-reduced-motion tested (enable in OS settings)
  - [ ] Keyboard navigation tested (tab through elements)
  - [ ] Focus management verified (autoAlpha impact)

- [ ] **Browser compatibility tested** (or status noted)
  - [ ] Chrome/Edge: [TESTED / NOT TESTED]
  - [ ] Firefox: [TESTED / NOT TESTED]
  - [ ] Safari: [TESTED / NOT TESTED]
  - [ ] iOS Safari: [TESTED / NOT TESTED] (CRITICAL if mobile target)
  - [ ] Android Chrome: [TESTED / NOT TESTED]

---

## Output Quality Validation

### Template Variables Populated

- [ ] **All required variables captured**
  - [ ] animation_code, performance_symptoms, target_devices, framework_context
  - [ ] current_fps (before), bottleneck_hypothesis
  - [ ] visual_state_description, console_warnings, console_errors
  - [ ] gsap_bundle_size, plugins_loaded, lazy_loading_status
  - [ ] normal_avg_fps, normal_min_fps, paint_time, js_execution_time
  - [ ] frame_drops_count, forced_reflows_count, long_tasks_count
  - [ ] throttled_4x_avg_fps, throttled_6x_avg_fps (if applicable)
  - [ ] will_change_count, gpu_layers_total
  - [ ] preliminary_bottlenecks (from Chrome DevTools)

- [ ] **All Deep-Research framework variables captured**
  - [ ] deep_research_gpu_rule_analysis
  - [ ] deep_research_main_thread_risk
  - [ ] deep_research_jank_symptom_mapping
  - [ ] deep_research_memory_leak_assessment
  - [ ] deep_research_60fps_techniques
  - [ ] deep_research_rendering_strategy

- [ ] **All Archon MCP variables captured**
  - [ ] archon_60fps_patterns
  - [ ] archon_gpu_solutions
  - [ ] archon_layout_thrashing_prevention
  - [ ] archon_will_change_practices
  - [ ] archon_code_examples
  - [ ] archon_memory_cleanup_patterns
  - [ ] total_archon_sources (count)

- [ ] **All accessibility variables captured**
  - [ ] accessibility_prefers_reduced_motion
  - [ ] accessibility_keyboard_nav
  - [ ] accessibility_focus_management
  - [ ] accessibility_compliance_status

- [ ] **All optimization variables captured**
  - [ ] optimized_animation_code
  - [ ] optimization_1_gpu_properties through optimization_6_canvas
  - [ ] framework_specific_integration
  - [ ] css_changes_required
  - [ ] prefers_reduced_motion_implementation

- [ ] **All validation variables captured**
  - [ ] optimized_avg_fps, optimized_min_fps, optimized_paint_time
  - [ ] optimized_forced_reflows (should be 0)
  - [ ] optimized_throttled_4x, optimized_throttled_6x
  - [ ] before_after_comparison
  - [ ] accessibility_validation_results
  - [ ] browser_compatibility_results
  - [ ] production_readiness_status

- [ ] **Total research sources counted**
  - [ ] Deep-Research: 8 sections
  - [ ] Archon: [Count] sources
  - [ ] Chrome DevTools: 7 tools
  - [ ] Total: {{total_research_sources}}

- [ ] **No missing placeholders in template**
  - [ ] All {{variables}} replaced with content
  - [ ] No "TODO" or "[Fill in]" in report
  - [ ] Citations complete (not just "[Source]")

---

### Report Quality Validation

- [ ] **6-part framework analysis table complete**
  - [ ] All 6 sections (5.1-5.6) analyzed
  - [ ] Plus Section 2.4 (Performance Patterns)
  - [ ] Plus Pitfall 8.2 (Wrong Properties)
  - [ ] Each section has key insights extracted
  - [ ] Research quotes included

- [ ] **Research citations are complete**
  - [ ] Deep-Research section numbers listed (2.4, 5.1-5.6, 8.2)
  - [ ] Archon source IDs documented
  - [ ] Chrome DevTools tools listed
  - [ ] Total source count accurate

- [ ] **Prevention tips are actionable**
  - [ ] GPU Rule compliance (3+ tips)
  - [ ] Main Thread discipline (3+ tips)
  - [ ] Memory management (3+ tips)
  - [ ] Performance testing strategy detailed
  - [ ] Framework-specific guidance included

- [ ] **Validation checklist included in report**
  - [ ] 60fps achievement criteria
  - [ ] Accessibility testing steps
  - [ ] Browser compatibility checklist
  - [ ] Production readiness gates

---

## Research Enforcement Test (CRITICAL)

**Can research be skipped?**

- [ ] **NO** - Research gate blocks progression (PASS)
  - Workflow includes MANDATORY research-gate tag
  - Checkpoint type="approval-gate" blocking="true"
  - User must explicitly continue with "Continue [c]"
  - Agent cannot rationalize skipping
  - Systematic diagnosis requires ALL 6 Deep-Research sections + 6 Archon queries
  - This is the MOST research-intensive workflow in GSAP Excellence

- [ ] **YES** - Research is optional/skippable (FAIL - fix workflow immediately)
  - No research gate present
  - No blocking checkpoint
  - Agent can proceed without research
  - **THIS MUST NOT HAPPEN**

---

## 6-Part Framework Coverage Test (CRITICAL)

**Was the complete 6-part framework actually used?**

- [ ] **YES** - Framework drove optimization (PASS)
  - All 6 Deep-Research sections consulted (5.1, 5.2, 5.3, 5.4, 5.5, 5.6)
  - Plus Section 2.4 (Performance Patterns)
  - Plus Pitfall 8.2 (Wrong Properties)
  - GPU Rule analysis documented (Section 5.1)
  - Main Thread risk assessed (Section 5.2)
  - Jank symptom mapping performed (Section 5.3)
  - Memory leak assessment completed (Section 5.4)
  - 60fps techniques applied (Section 5.5)
  - Rendering strategy decided (Section 5.6)
  - All 6 Archon queries executed
  - Research-backed optimizations (not random)

- [ ] **NO** - Framework mentioned but not used (FAIL)
  - Jumped to optimization without 6-part analysis
  - Did not consult all Deep-Research sections
  - No Archon queries executed
  - Generic optimization (not systematic)
  - **REBUILD WORKFLOW IF THIS HAPPENS**

---

## Success Criteria Summary

**Minimum Requirements (MUST HAVE):**
- ✅ All 8 Deep-Research sections consulted (2.4, 5.1-5.6, Pitfall 8.2)
- ✅ All 6 Archon queries executed
- ✅ Chrome DevTools systematic profiling completed
- ✅ Research checkpoint blocked until user approved
- ✅ 100% GPU-accelerated properties (transform/opacity only)
- ✅ Zero forced reflows after optimization
- ✅ Memory cleanup implemented (GSAP Context OR manual kill)
- ✅ prefers-reduced-motion implemented
- ✅ 60fps achieved (sustained, not just average)

**Quality Indicators (SHOULD HAVE):**
- ✅ Total research sources ≥ 15 (8 Deep-Research + 6 Archon + DevTools)
- ✅ Paint time <4ms (well under 16ms budget)
- ✅ CPU throttled 4x FPS ≥ 50fps
- ✅ will-change count <10 elements
- ✅ Before/after comparison table with % improvements
- ✅ Framework-specific integration (React/Vue patterns)
- ✅ Accessibility validation completed

**Excellence Indicators (NICE TO HAVE):**
- ✅ CPU throttled 6x FPS ≥ 45fps (for low-end mobile)
- ✅ Canvas implementation (if >200 elements)
- ✅ autoAlpha usage for all opacity animations
- ✅ ScrollTrigger scrub optimization (0.1 instead of true)
- ✅ Browser compatibility testing on mobile devices
- ✅ Web Vitals monitoring plan included

---

## Workflow Execution Validation

### Systematic Protocol Followed

- [ ] **All 7 steps completed in order**
  - [ ] Step 1: Deep Context Gathering → Complete
  - [ ] Step 2: Chrome DevTools Profiling → Complete
  - [ ] Step 3: Multi-Source Research (6-part framework) → Complete
  - [ ] Step 4: Optimization Implementation → Complete
  - [ ] Step 5: Validation Testing → Complete
  - [ ] Step 6: (Skipped - renumbering issue)
  - [ ] Step 7: Generate Report → Complete

- [ ] **No steps skipped or batched**
  - [ ] Each step completed before next
  - [ ] Research gate blocked progression
  - [ ] User checkpoint honored
  - [ ] Systematic diagnosis maintained

- [ ] **Research-intensive workflow acknowledged**
  - [ ] Recognized as MOST research-intensive workflow
  - [ ] Complete 6-part Deep-Research framework applied
  - [ ] All 6 Archon queries executed
  - [ ] Accessibility preservation validated
  - [ ] Not rushed or simplified

---

## Special Considerations

### High-Value Optimizations (Impact-Based Priority)

If optimizations include:

- [ ] **GPU Property Conversion (HIGH IMPACT)**
  - Expected improvement: Forced reflows eliminated
  - Validation: {{forced_reflows_count}} → 0
  - Research source: Section 5.1 + Pitfall 8.2

- [ ] **Memory Leak Prevention (HIGH IMPACT for SPAs)**
  - Expected improvement: No ghost animations, stable memory
  - Validation: Memory usage flat over time
  - Research source: Section 5.4

- [ ] **Canvas Migration (HIGH IMPACT if >200 elements)**
  - Expected improvement: 10fps → 60fps for particle systems
  - Validation: Smooth animation where DOM was unfeasible
  - Research source: Section 5.6

---

### Mobile-Specific Optimization (If target_devices includes mobile)

If targeting mobile:

- [ ] **Mobile-specific validation required**
  - [ ] CPU throttle 6x test executed (≥45fps target)
  - [ ] iOS Safari testing planned/completed
  - [ ] Android Chrome testing planned/completed
  - [ ] Touch interaction verified (if applicable)
  - [ ] Battery impact considered (prefers-reduced-motion)

- [ ] **Mobile-specific optimizations**
  - [ ] will-change count extra conservative (<5 on mobile)
  - [ ] Reduced animation complexity for mobile (if needed)
  - [ ] prefers-reduced-motion provides mobile performance escape hatch

---

### ScrollTrigger-Specific Optimization (If ScrollTrigger used)

If using ScrollTrigger:

- [ ] **ScrollTrigger-specific validation**
  - [ ] scrub optimization considered (scrub: 0.1 vs true)
  - [ ] pin performance assessed
  - [ ] .kill() on unmount verified
  - [ ] Archon source 6a6860cfc96e173b consulted (ScrollTrigger-specific)

- [ ] **ScrollTrigger best practices**
  - [ ] Refresh called after layout changes (Section 5.5)
  - [ ] Not too many triggers on same page (performance)
  - [ ] Cleanup: `ScrollTrigger.getAll().forEach(t => t.kill())`

---

## Validation Summary

**Checklist Completion Date:** {{date}}
**Validated By:** [Agent/Human name]

**Research Enforcement:** [PASS / FAIL]
- Can research be skipped? [NO = PASS / YES = FAIL]

**6-Part Framework Used:** [PASS / FAIL]
- All sections consulted? [YES = PASS / NO = FAIL]

**Optimization Quality:** [PASS / FAIL]
- Research-backed (not trial-and-error)? [YES = PASS / NO = FAIL]

**60fps Achievement:** [PASS / FAIL]
- Sustained 60fps validated? [YES = PASS / NO = FAIL]

**Output Completeness:** [PASS / FAIL]
- All variables populated? [YES = PASS / NO = FAIL]

**Overall Result:** [PASS / FAIL with notes]

**Notes:**
[Any issues found, improvements needed, or exceptional quality observed]

---

**This checklist ensures systematic performance optimization using the complete 6-part Deep-Research framework (Sections 5.1-5.6) with MANDATORY research enforcement. Every optimization must be research-backed with citations from Deep-Research sections + Archon KB, not trial-and-error.**

**This is the MOST research-intensive workflow in GSAP Excellence - the complete framework is NON-NEGOTIABLE.**
