# Animation Production Workflow Instructions
# Complete production pipeline using all 5 studio crew agents

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/animation-production/workflow.yaml</critical>
<critical>This is the FLAGSHIP workflow demonstrating full GSAP Excellence Engine capabilities</critical>

<workflow>

<!-- ============================================================ -->
<!-- PHASE 1: DIRECTOR - VISION PLANNING & CREATIVE DIRECTION -->
<!-- ============================================================ -->

<step n="1" goal="Director: Intake & Vision Planning">
<action>Director introduces the production workflow with film energy</action>

**🎬 "Welcome to the GSAP Excellence Engine production pipeline. Let's create something exceptional."**

<ask response="animation_request">What animation do you need? (component, page, element to animate)</ask>
<ask response="brand_personality">Brand personality? (playful, professional, edgy, minimal, etc.)</ask>
<ask response="animation_goals">Goals for this animation? (engagement, delight, storytelling, wow factor)</ask>
<ask response="constraints">Any constraints? (performance, timeline, accessibility)</ask>
<ask response="target_framework">Framework? [vanilla/react/vue/svelte]</ask>
<ask response="page_url">Dev server URL for testing? (optional but recommended)</ask>

<action>Director confirms understanding and sets creative vision</action>

**Creative Brief:**
- Animation: {{animation_request}}
- Brand: {{brand_personality}}
- Goals: {{animation_goals}}
- Constraints: {{constraints}}
- Framework: {{target_framework}}

<ask>Ready to proceed with production? [y/n]</ask>

<template-output>animation_request, brand_personality, animation_goals, constraints, target_framework, page_url</template-output>
</step>

<step n="2" goal="Director: Define Creative Vision">
<action>Director defines the creative vision and animation narrative</action>

**Director's Vision:**
- What story does this animation tell?
- What emotion should it evoke?
- What's the "wow factor" that makes this premium?
- How does it fit the brand personality?
- What success looks like (visual outcome)

<action>Generate vision document with:</action>
- Animation narrative
- Key visual moments
- Expected user experience
- Premium quality standards
- Wow factor goals

<template-output>creative_vision, animation_narrative, wow_factor_goals</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 2: CINEMATOGRAPHER - MULTI-SOURCE RESEARCH -->
<!-- ============================================================ -->

<step n="3" goal="Cinematographer: Multi-Source Research (TIER 1/2/3 PROTOCOL)">
<critical>KNOWLEDGE SOURCE HIERARCHY: Tier 1 (Archon + Deep-Research) → Tier 2 (WebSearch) → Tier 3 (Context7)</critical>

<action>Cinematographer conducts systematic multi-source research based on Director's vision</action>

**🎥 "Researching premium patterns using systematic protocol..."**

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 1A: ARCHON MCP RAG DATABASE (Primary - Cameron's Curated Knowledge) -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 1A: Archon MCP Systematic Queries**

**Source 1: gsap.com Official Docs (2.2M+ words) - PRIMARY**
```
rag_search_knowledge_base("{{animation_request}} GSAP patterns", source_id="b9f6b322298feb21", match_count=10)
rag_search_knowledge_base("{{brand_personality}} animation techniques", source_id="b9f6b322298feb21", match_count=8)
rag_search_code_examples("{{animation_request}} implementation", source_id="b9f6b322298feb21", match_count=10)
rag_search_code_examples("{{animation_type}} choreography", source_id="b9f6b322298feb21", match_count=8)
```

**Source 2: Tympanus/Codrops Tutorials (Premium Quality)**
```
rag_search_knowledge_base("premium {{animation_request}} animations", source_id="1e5cc3bd5125be3c", match_count=8)
rag_search_code_examples("Codrops {{animation_type}} examples", source_id="1e5cc3bd5125be3c", match_count=8)
```

**Source 3: FreeFrontend Examples**
```
rag_search_code_examples("{{animation_request}} FreeFrontend", source_id="90c2ef5e8fa816b7", match_count=6)
```

**Source 4: CodePen Collections**
```
rag_search_code_examples("{{animation_request}} CodePen", source_id="020e9f31a8c5cdb7", match_count=6)
```

**Source 5: Lenis Integration (If scroll-based)**
```
rag_search_code_examples("Lenis {{animation_request}}", source_id="77ae0ef68a867aa9", match_count=6)
```

<critical>🎉 PREMIUM PLUGIN QUERIES (ALL FREE in 3.13+!)</critical>
```
rag_search_code_examples("ScrollSmoother {{animation_request}}", match_count=6)
rag_search_code_examples("MorphSVG {{animation_type}}", match_count=6)
rag_search_code_examples("SplitText {{text_animation_type}}", match_count=6)
rag_search_code_examples("DrawSVG {{svg_animation_type}}", match_count=6)
rag_search_code_examples("MotionPath {{path_animation_type}}", match_count=6)
```

**Default to premium solutions** - maximize wow factor without cost concerns!

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 1B: DEEP-RESEARCH FRAMEWORK (Cameron's Synthesized Wisdom)        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 1B: Deep-Research Framework Application**

**Section 1.1: Animator's Mindset**
- Think like storyteller, not coder
- Design narrative beats, not just "effects"
- Ask: "What story does this animation tell?"

**Section 1.2: Visual Inspiration → Technical Translation**
- Map brand personality to motion design systems:
  - **Playful** → Bouncy easing (`elastic.out(1, 0.5)`, `back.out(1.7)`), physics-based
  - **Professional** → Smooth easing (`power2.inOut`, `expo.out`), controlled precision
  - **Edgy** → Sharp easing (`power4.inOut`, `circ.inOut`), dramatic contrast
  - **Minimal** → Subtle easing (`sine.inOut`, `power1.out`), refined elegance

**Section 1.3: Storyboarding Complex Sequences**
- Apply Pixar Story Spine to animation narrative:
  - Once upon a time... (establish context)
  - Every day... (show status quo)
  - Until one day... (introduce change/trigger)
  - Because of that... (show consequences)
  - Until finally... (resolution/CTA)

**Section 2.2: Mastering Timeline Techniques**
- Coordinate multiple elements for cohesive story
- Plan stagger patterns (sequential, random, grid-based)
- Use label-based timelines for maintainability

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 2: WEBSEARCH (For 2024-2025 Trends & Gaps)                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 2: WebSearch for 2025-Specific Trends**
```
WebSearch("{{animation_request}} animation Awwwards 2025")
WebSearch("GSAP {{animation_type}} premium trends 2025")
WebSearch("Linear Stripe Vercel {{animation_request}} animation breakdown")
WebSearch("{{brand_personality}} animation {{animation_request}} 2024-2025")
```

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 3: CONTEXT7 (Minimal - API Verification Only)                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 3: Context7 (Only if Tier 1/2 don't have answer)**
```
resolve-library-id("gsap")
get-library-docs(libraryId, "{{specific_api_question}}", tokens=3000)
```

**Use sparingly** - Archon already has gsap.com docs

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CITATION FORMAT (MANDATORY)                                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Citation Format (CRITICAL - Must Document Sources):**
```
Pattern: "{{pattern_name}}"
Sources:
- Archon MCP: gsap.com (source: b9f6b322298feb21) - {{technique_found}}
- Archon MCP: Codrops (source: 1e5cc3bd5125be3c) - {{tutorial_reference}}
- WebSearch: {{agency_name}} {{year}} - {{url}}
- Deep-Research: Section 1.2 (Visual Translation), Section 2.2 (Timeline Choreography)
```

<critical>Document ALL sources with full citations - this ensures reproducibility</critical>

<template-output>archon_findings, deep_research_principles, web_trends, premium_plugin_opportunities, research_citations</template-output>
</step>

<step n="4" goal="Cinematographer: Technical Approach Recommendation & Synthesis">
<action>Cinematographer synthesizes ALL research sources into recommended technical approach</action>

**Research Synthesis:**

**From Archon MCP (Tier 1A):**
- GSAP patterns discovered: {{archon_patterns_summary}}
- Premium plugins applicable: {{premium_plugins_recommended}}
- Code examples found: {{archon_code_examples_count}}

**From Deep-Research Framework (Tier 1B):**
- Brand personality mapping: {{brand_to_easing_curves}}
- Narrative structure: {{pixar_story_spine_application}}
- Timeline approach: {{timeline_coordination_strategy}}

**From WebSearch (Tier 2):**
- 2025 trends identified: {{current_trends}}
- Agency examples: {{premium_agency_references}}

**Recommended Technical Approach:**
- **GSAP Version:** 3.13.0+ (premium plugins FREE!)
- **Core Features:** {{gsap_core_features}}
- **Premium Plugins:** {{premium_plugins_list}} (ALL FREE in 3.13!)
- **Easing Curves:** {{recommended_easing}} (from brand personality mapping)
- **Timeline Structure:** {{timeline_architecture}}
- **Performance Strategy:** {{performance_approach}}
- **Inspiration Sources:** {{all_source_citations}}

<template-output>technical_approach, required_plugins, performance_notes, inspiration_sources, brand_easing_mapping</template-output>
</step>

<step n="4.5" goal="QUALITY GATE: Director Reviews Research" type="approval_gate">
<critical>Director must approve research before implementation begins</critical>

<action>Director reviews Cinematographer's research findings and technical approach</action>

**🎬 Director's Research Review:**

**Approval Criteria:**
- [ ] Research is comprehensive (Tier 1A + 1B + 2 all consulted)
- [ ] Technical approach aligns with creative vision
- [ ] Premium plugins appropriately recommended (FREE in 3.13!)
- [ ] Brand personality mapped to easing curves
- [ ] Sources properly cited (Archon source IDs + Deep-Research sections)
- [ ] Performance strategy identified
- [ ] Wow factor potential confirmed

<ask>Director: Approve research and technical approach? [y/n]</ask>

<check if="approved">
**🎬 "Research approved! Handing off to VFX Artist for implementation."**

<action>Director authorizes VFX Artist to begin implementation</action>
</check>

<check if="not_approved">
**🎬 "Research needs refinement. Cinematographer, please address these concerns:"**

<ask>What needs to be refined in the research?</ask>

<action>Cinematographer revises research based on Director's feedback</action>
<action>Return to Step 4 for revised synthesis</action>
</check>

<template-output>research_approval_status, director_feedback</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 3: VFX ARTIST - IMPLEMENTATION -->
<!-- ============================================================ -->

<step n="5" goal="VFX Artist: Implementation Planning">
<action>VFX Artist receives research and plans implementation</action>

**✨ "Alright, based on the research, here's how we'll build this..."**

**Implementation Plan:**

1. **Setup Phase:**
   - GSAP version: 3.13.0+ (premium plugins FREE!)
   - Plugins needed: {{required_plugins}}
   - Framework integration: {{target_framework}}

<critical>Premium Plugin Recommendation (FREE in 3.13+):</critical>
**Consider using premium plugins for maximum wow factor:**
- Need smooth scrolling? → ScrollSmoother (was $99/year, now FREE!)
- Icon transformations? → MorphSVG (was premium, now FREE!)
- Text reveals? → SplitText (was premium, now FREE!)
- SVG line animations? → DrawSVG (was premium, now FREE!)
- Complex paths? → MotionPath (was premium, now FREE!)

**No cost barrier anymore** - default to premium solutions!

2. **Animation Structure:**
   - Timeline vs. individual tweens
   - Element selection strategy
   - Animation choreography
   - Premium plugin integration

3. **Technical Approach:**
   - GPU acceleration strategy
   - Transform properties used
   - Easing curves selected
   - Premium features leveraged

4. **Performance Strategy:**
   - will-change properties
   - Animation complexity management
   - 60fps target considerations
   - Premium plugin optimization

<template-output>implementation_plan</template-output>
</step>

<step n="6" goal="VFX Artist: Build Animation">
<critical>Generate production-ready implementation code</critical>

<action>VFX Artist implements animation based on research and plan</action>

**Code Generation:**

**1. Imports and Setup:**
```javascript
// GSAP 3.13.0+ (premium plugins FREE!)
{{import_statements}}
{{gsap_setup_code}}
```

**2. Animation Implementation:**
```javascript
// Based on research from: {{inspiration_sources}}
// Technical approach: {{technical_approach}}
// Premium plugins used: {{premium_plugins_if_any}} (FREE in 3.13+!)

{{animation_implementation_code}}
```

<critical>Premium Plugin Usage (FREE in 3.13+)</critical>
**If applicable, leverage premium features:**
- ScrollSmoother for buttery smooth scrolling
- MorphSVG for sophisticated icon transformations
- SplitText for advanced text animation choreography
- DrawSVG for SVG line drawing reveals
- MotionPath for elements following complex paths

**These were $99/year each - now COMPLETELY FREE in GSAP 3.13+!**

**3. Framework Integration:**
```{{target_framework}}
{{framework_integration_code}}
```

**4. Cleanup Function:**
```javascript
{{cleanup_code}}
```

**5. Accessibility Fallback:**
```javascript
// prefers-reduced-motion support
{{accessibility_code}}
```

<action>Add comprehensive inline comments explaining decisions</action>
<action>Ensure code is production-ready (no TODOs, no placeholders)</action>

<template-output>complete_implementation_code, integration_guide</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 4: EDITOR - POLISH & REFINEMENT (DEEP-RESEARCH GUIDED) -->
<!-- ============================================================ -->

<step n="7" goal="Editor: Systematic Implementation Review (ALL 10 Pitfalls)">
<action>Editor receives implementation for comprehensive systematic review</action>

**✂️ "Running systematic pitfall analysis using Deep-Research 8.1-8.10..."**

<critical>Editor checks implementation against ALL 10 common pitfalls from Deep-Research</critical>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- DEEP-RESEARCH PITFALLS CHECKLIST (8.1-8.10)                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**PITFALL 8.1: Forgetting Cleanup (Memory Leaks) - HIGH SEVERITY**
<action>Check for memory leaks and cleanup issues:</action>
- [ ] Are ALL timelines/tweens killed on component unmount?
- [ ] Is useGSAP() hook used (React)? OR proper cleanup in vanilla?
- [ ] Are ScrollTriggers killed on cleanup?
- [ ] Code: `timeline.kill()`, `ScrollTrigger.getAll().forEach(st => st.kill())`

**PITFALL 8.2: Animating Wrong Properties (No GPU Acceleration) - HIGH SEVERITY**
<action>Check for GPU acceleration compliance:</action>
- [ ] Animating `transform` (x, y, scale, rotate) NOT `top/left`?
- [ ] Animating `opacity` NOT `visibility`?
- [ ] Avoiding `width/height`, `margin`, `padding` (layout thrashing)?
- [ ] GPU-accelerated properties only: transform, opacity, filter (cautiously)

**PITFALL 8.3: Ignoring immediateRender - MEDIUM SEVERITY**
<action>Check for immediateRender issues:</action>
- [ ] Using `from()` with `immediateRender: false` to prevent flicker?
- [ ] OR using `fromTo()` for explicit control?
- [ ] No unexpected initial state jumps?

**PITFALL 8.4: Multiple ScrollTriggers on Same Element - MEDIUM SEVERITY**
<action>Check for ScrollTrigger conflicts:</action>
- [ ] Only ONE ScrollTrigger per element (unless explicitly needed)?
- [ ] No conflicting scroll-triggered animations?
- [ ] Clear separation of ScrollTrigger responsibilities?

**PITFALL 8.5: Not Using overwrite Mode - MEDIUM SEVERITY**
<action>Check for animation conflicts:</action>
- [ ] Using `overwrite: "auto"` or `overwrite: true` where needed?
- [ ] No conflicting simultaneous animations on same properties?

**PITFALL 8.6: Missing refresh() After Content Load - MEDIUM SEVERITY**
<action>Check for ScrollTrigger positioning issues:</action>
- [ ] Is `ScrollTrigger.refresh()` called after images/fonts load?
- [ ] Are ScrollTriggers recalculated after dynamic content?
- [ ] `window.addEventListener('load', () => ScrollTrigger.refresh())`?

**PITFALL 8.7: Deprecated Syntax - LOW SEVERITY**
<action>Check for GSAP 2.x vs 3.x syntax:</action>
- [ ] Using GSAP 3.13+ syntax (not 2.x)?
- [ ] No TweenMax/TimelineMax (deprecated)?
- [ ] Using gsap.to/from/fromTo (not TweenLite)?

**PITFALL 8.8: Uncontrolled Infinite Loops - LOW SEVERITY**
<action>Check for infinite animation loops without cleanup:</action>
- [ ] If `repeat: -1`, is there cleanup logic on unmount?
- [ ] Infinite loops killed when component unmounts?

**PITFALL 8.9: Not Testing on Different Devices - HIGH SEVERITY**
<action>Implementation review for cross-device compatibility:</action>
- [ ] Code structure accounts for iOS Safari quirks?
- [ ] Mobile performance considered?
- [ ] Responsive behavior planned?
- [ ] Will this work on iOS, Android, desktop?

**PITFALL 8.10: Misusing from() vs fromTo() - MEDIUM SEVERITY**
<action>Check for from/fromTo flicker issues:</action>
- [ ] Using `fromTo()` instead of `from()` for explicit control?
- [ ] No flicker on animation start?
- [ ] Clear start and end states defined?

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- ADDITIONAL DEEP-RESEARCH CHECKS                                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Section 5.3: Debugging Jank**
- [ ] No layout thrashing detected (animating wrong properties)?
- [ ] Smooth 60fps motion expected?

**Section 5.4: Memory Management**
- [ ] Cleanup function comprehensive?
- [ ] No orphaned animations or event listeners?

**Section 3.7: Cleanup and Reinitialization**
- [ ] Proper cleanup on unmount/destroy?
- [ ] Safe to reinitialize if needed?

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- POLISH REVIEW                                                          -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Polish Quality Review:**
- [ ] Timing feels natural (not too fast/slow)
- [ ] Easing curves appropriate for brand personality
- [ ] Transitions smooth between states
- [ ] No awkward pauses or rushes
- [ ] Code is clean and readable

<action>Compile findings from systematic pitfall analysis</action>

<template-output>pitfalls_checked, issues_identified, severity_breakdown, editor_review_report</template-output>
</step>

<step n="8" goal="Editor: Polish & Refinement (If Issues Found)">
<check if="issues_found">
<action>Editor refines implementation based on pitfall analysis:</action>

**✂️ "Applying refinements to address identified issues..."**

**Refinements Applied:**

**Pitfall Fixes:**
- {{pitfall_8_1_fixes}} (Cleanup/memory leaks)
- {{pitfall_8_2_fixes}} (GPU acceleration)
- {{pitfall_8_3_fixes}} (immediateRender)
- {{pitfall_8_4_fixes}} (ScrollTrigger conflicts)
- {{pitfall_8_5_fixes}} (overwrite mode)
- {{pitfall_8_6_fixes}} (refresh() calls)
- {{pitfall_8_7_fixes}} (deprecated syntax)
- {{pitfall_8_8_fixes}} (infinite loop cleanup)
- {{pitfall_8_9_fixes}} (cross-device compatibility)
- {{pitfall_8_10_fixes}} (from/fromTo usage)

**Polish Improvements:**
- Timing adjustments: {{timing_refinements}}
- Easing curve improvements: {{easing_refinements}}
- Code simplification: {{code_simplifications}}
- Flow improvements: {{flow_enhancements}}

<action>Generate polished version of code with all fixes applied</action>

<template-output>polished_code, refinement_notes, pitfalls_resolved_count</template-output>
</check>

<check if="no_issues">
<action>Editor confirms implementation is pitfall-free and polished</action>

**✂️ "Implementation passed ALL 10 pitfall checks! Clean, smooth, production-ready."**

**Pitfalls Analysis:**
- ✅ ALL 10 pitfalls checked (8.1-8.10)
- ✅ ZERO issues detected
- ✅ Deep-Research compliance confirmed
- ✅ Polish quality excellent

<template-output>polish_approval, pitfalls_clean_confirmation</template-output>
</check>
</step>

<!-- ============================================================ -->
<!-- PHASE 5: TECH DIRECTOR - VALIDATION & OPTIMIZATION (DEEP-RESEARCH GUIDED) -->
<!-- ============================================================ -->

<step n="9" goal="Tech Director: Performance Profiling & Deep-Research Validation">
<check if="page_url_provided">
<critical>Tech Director uses Chrome DevTools MCP + Deep-Research performance/accessibility frameworks</critical>

<action>Tech Director profiles animation performance with Deep-Research benchmarks</action>

**🔧 "Running comprehensive performance validation using Deep-Research 5.1-5.6..."**

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CHROME DEVTOOLS MCP PROFILING                                          -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**CHROME DEVTOOLS PERFORMANCE TESTING:**

**1. FPS Profiling (Normal Conditions):**
<action>Use Chrome DevTools MCP: performance_start_trace</action>
<action>Trigger animation on {{page_url}}</action>
<action>Use Chrome DevTools MCP: performance_stop_trace</action>

**Metrics Captured:**
- Average FPS: {{avg_fps}}
- Minimum FPS: {{min_fps}}
- Paint time: {{paint_time_ms}}ms
- JS execution: {{js_exec_time_ms}}ms

**2. FPS Profiling (CPU Throttled 4x - Mid-Range Device Simulation):**
<action>Use Chrome DevTools MCP: emulate_cpu with throttlingRate=4</action>
<action>Re-run performance profiling</action>

**Target (Deep-Research Section 5.5):** 60fps sustained on mid-range devices

**3. Console Check (ZERO Errors Required):**
<action>Use Chrome DevTools MCP: list_console_messages</action>

**Requirement:** ZERO errors, ZERO GSAP warnings (production-ready standard)

**4. Visual Validation:**
<action>Use Chrome DevTools MCP: take_screenshot</action>

**Captures:** Before, during, after animation (visual regression check)

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- DEEP-RESEARCH PERFORMANCE VALIDATION (5.1-5.6)                         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**DEEP-RESEARCH PERFORMANCE FRAMEWORK (Sections 5.1-5.6):**

**Section 5.1: GPU Rule (CRITICAL)**
<action>Validate GPU acceleration compliance:</action>
- [ ] **ONLY animating** `transform` (x, y, scale, rotate) and `opacity`?
- [ ] **NOT animating** `top/left`, `width/height`, `margin/padding`?
- [ ] No layout-triggering properties animated?
- [ ] Using `will-change` sparingly (adds layers!)?

**Benchmark:** Transform and opacity ONLY for GPU acceleration

**Section 5.2: Keep Main Thread Free (HIGH Priority)**
<action>Validate JavaScript execution efficiency:</action>
- [ ] Frame budget: <16ms per frame (60fps target)?
- [ ] No long tasks (>50ms) during animation?
- [ ] Heavy calculations offloaded to Web Workers (if applicable)?
- [ ] Using `requestAnimationFrame` for calculations (if needed)?

**Benchmark:** <16ms paint time per frame, <5ms JS execution

**Section 5.3: Debugging Jank (Chrome DevTools Integration)**
<action>Analyze Chrome DevTools Timeline for jank:</action>
- [ ] Profiling shows smooth 60fps (no dropped frames)?
- [ ] No layout thrashing in Timeline?
- [ ] Paint operations optimized?
- [ ] Long tasks identified and resolved?

**Benchmark:** 60fps @ 1x CPU, 60fps @ 4x CPU throttle

**Section 5.4: Memory Management**
<action>Validate memory efficiency:</action>
- [ ] Timelines/tweens killed on cleanup: `timeline.kill()`?
- [ ] ScrollTriggers killed: `ScrollTrigger.getAll().forEach(st => st.kill())`?
- [ ] No memory leaks detected in DevTools Memory profiler?
- [ ] Event listeners properly removed?

**Benchmark:** Memory usage stable (no growth over time)

**Section 5.5: Optimize for 60fps (CRITICAL)**
<action>Validate 60fps performance target:</action>
- [ ] Sustained 60fps on mid-range devices (4x CPU throttle)?
- [ ] Minimum: 30fps on low-end devices (6x throttle)?
- [ ] Smooth motion, no jank or stuttering?
- [ ] Performance budget respected?

**Benchmark:** 60fps @ 4x throttle MANDATORY

**Section 5.6: When to Use WebGL/Canvas**
<action>Assess if DOM animation is appropriate:</action>
- [ ] Is DOM animation sufficient for this use case?
- [ ] Or should this escalate to WebGL/Canvas for particle effects?
- [ ] Complexity within DOM animation capabilities?

**Decision:** DOM animation appropriate? {{webgl_assessment}}

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- DEEP-RESEARCH ACCESSIBILITY VALIDATION (6.1-6.4)                       -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**DEEP-RESEARCH ACCESSIBILITY FRAMEWORK (Sections 6.1-6.4):**

**Section 6.1: prefers-reduced-motion (CRITICAL - MANDATORY)**
<action>Validate prefers-reduced-motion fallback:</action>
- [ ] Checking `window.matchMedia('(prefers-reduced-motion: reduce)').matches`?
- [ ] Providing instant transitions OR subtle fades ONLY if reduced motion?
- [ ] NO complex animations for users who requested reduced motion?
- [ ] Code: `if (prefersReducedMotion) { gsap.set(...) } else { gsap.to(...) }`?

**Benchmark:** MANDATORY fallback - CANNOT ship without this

**Section 6.2: Other Accessibility Considerations**
<action>Validate other accessibility requirements:</action>
- [ ] No seizure-inducing flashing (>3 flashes/sec)?
- [ ] Keyboard navigation works during animations?
- [ ] Focus states remain visible during animations?
- [ ] Screen readers announce state changes?

**Benchmark:** Full WCAG compliance

**Section 6.3: Accessible Styling**
<action>Validate styling accessibility:</action>
- [ ] Color contrast maintained during transitions (WCAG AA: 4.5:1)?
- [ ] Text remains readable during all animation states?
- [ ] Critical UI not animated during loading?

**Benchmark:** WCAG AA color contrast minimum

**Section 6.4: User Control**
<action>Validate user control over animations:</action>
- [ ] Pause/play controls for long animations (>5 seconds)?
- [ ] Users can skip intro animations?
- [ ] Respects OS-level motion preferences?

**Benchmark:** User control provided for long-running animations

<template-output>performance_metrics, console_status, visual_screenshots, deep_research_performance_validation, deep_research_accessibility_validation</template-output>
</check>

<check if="no_page_url">
<action>Tech Director performs comprehensive code review (cannot live-test without URL)</action>

**🔧 "No URL provided - performing Deep-Research code review..."**

**Code Review Using Deep-Research Frameworks:**

**Performance Review (5.1-5.6):**
- Section 5.1: GPU Rule compliance (transform/opacity only)
- Section 5.2: Main Thread efficiency (<16ms target)
- Section 5.4: Memory management (cleanup implementation)
- Section 5.5: 60fps optimization strategy

**Accessibility Review (6.1-6.4):**
- Section 6.1: prefers-reduced-motion fallback (MANDATORY)
- Section 6.2: Keyboard, focus, screen reader support
- Section 6.3: Color contrast, readability
- Section 6.4: User control for long animations

<template-output>code_review_results, deep_research_code_compliance</template-output>
</check>
</step>

<step n="10" goal="QUALITY GATE: Tech Director Production Readiness Assessment">
<action>Tech Director assesses against Deep-Research production-ready criteria</action>

**🔧 "Final quality gate assessment using Deep-Research benchmarks..."**

<critical>Production readiness determined by Deep-Research standards, not subjective criteria</critical>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- PRODUCTION READINESS CHECKLIST (DEEP-RESEARCH BENCHMARKS)              -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**PERFORMANCE GATES (Deep-Research 5.1-5.6): {{performance_status}}**

**Section 5.1: GPU Rule**
- [ ] Transform/opacity ONLY (NO layout properties)? {{gpu_compliance}}

**Section 5.2: Main Thread**
- [ ] <16ms paint time per frame? {{paint_time_compliance}}
- [ ] <5ms JS execution per frame? {{js_exec_compliance}}

**Section 5.3: Jank-Free**
- [ ] 60fps sustained (normal)? {{fps_normal}}
- [ ] 60fps sustained (4x throttle)? {{fps_throttled_4x}}

**Section 5.4: Memory**
- [ ] Cleanup implemented (timelines killed)? {{memory_cleanup_compliance}}
- [ ] No memory leaks detected? {{memory_leak_check}}

**Section 5.5: 60fps Optimization**
- [ ] 60fps @ 4x CPU throttle (mid-range)? {{fps_mid_range_compliance}}
- [ ] 30fps minimum @ 6x throttle (low-end)? {{fps_low_end_compliance}}

**BENCHMARK VERDICT:** {{performance_verdict}}

<!-- ═══════════════════════════════════════════════════════════════════════ -->

**ACCESSIBILITY GATES (Deep-Research 6.1-6.4): {{accessibility_status}}**

**Section 6.1: prefers-reduced-motion (MANDATORY)**
- [ ] Fallback implemented? {{prefers_reduced_motion_compliance}}
- [ ] Instant transitions OR subtle fades for reduced motion? {{reduced_motion_quality}}

**CRITICAL:** CANNOT ship without prefers-reduced-motion fallback

**Section 6.2: Other Considerations**
- [ ] No seizure-inducing flashing? {{seizure_safety_compliance}}
- [ ] Keyboard navigation works? {{keyboard_nav_compliance}}
- [ ] Focus states visible? {{focus_compliance}}

**Section 6.3: Styling**
- [ ] WCAG AA color contrast (4.5:1)? {{color_contrast_compliance}}
- [ ] Text readable during animations? {{text_readability_compliance}}

**Section 6.4: User Control**
- [ ] Pause/skip for long animations (>5s)? {{user_control_compliance}}

**BENCHMARK VERDICT:** {{accessibility_verdict}}

<!-- ═══════════════════════════════════════════════════════════════════════ -->

**EDITOR PITFALLS (Deep-Research 8.1-8.10): {{pitfalls_status}}**

- [ ] ALL 10 pitfalls checked by Editor? {{pitfalls_checked_count}}/10
- [ ] ZERO pitfalls detected? {{pitfalls_detected_count}}
- [ ] High-severity issues resolved? {{high_severity_resolved}}

**BENCHMARK VERDICT:** {{pitfalls_verdict}}

<!-- ═══════════════════════════════════════════════════════════════════════ -->

**CONSOLE & CODE QUALITY: {{console_code_status}}**

**Console (ZERO tolerance):**
- [ ] Zero JavaScript errors? {{console_errors_count}}
- [ ] Zero GSAP warnings? {{gsap_warnings_count}}
- [ ] Clean console output? {{console_clean}}

**Code Quality:**
- [ ] Production-ready (no TODOs/placeholders)? {{production_ready_code}}
- [ ] Cleanup function comprehensive? {{cleanup_quality}}
- [ ] Comments explain WHY (not just WHAT)? {{comment_quality}}
- [ ] GSAP 3.13.0+ syntax? {{gsap_version_compliance}}

**BENCHMARK VERDICT:** {{code_quality_verdict}}

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- FINAL PRODUCTION VERDICT                                               -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**FINAL PRODUCTION VERDICT:**

<check if="all_gates_pass">
**🟢 GREEN LIGHT FOR PRODUCTION**

**All Deep-Research benchmarks met:**
- ✅ Performance: 60fps @ 4x throttle (Section 5.5)
- ✅ Accessibility: prefers-reduced-motion MANDATORY (Section 6.1)
- ✅ Pitfalls: ALL 10 checked, ZERO detected (Sections 8.1-8.10)
- ✅ Console: ZERO errors, ZERO warnings
- ✅ Code Quality: Production-ready

**Animation is ship-ready with Deep-Research compliance.**

**Production-Ready Metrics:**
- Average FPS: {{avg_fps}}
- FPS @ 4x throttle: {{fps_throttled}}
- Paint time: {{paint_time}}ms (<16ms target)
- JS execution: {{js_exec_time}}ms (<5ms target)
- Console errors: 0
- Pitfalls detected: 0/10
- Deep-Research compliance: 100%

</check>

<check if="issues_present">
**🔴 NOT SHIP-READY - BLOCKERS PRESENT**

**Production Blockers:**

**Performance Blockers (Deep-Research 5.x):**
{{performance_blockers_list}}

**Accessibility Blockers (Deep-Research 6.x):**
{{accessibility_blockers_list}}

**Pitfall Blockers (Deep-Research 8.x):**
{{pitfalls_blockers_list}}

**Console/Code Blockers:**
{{console_code_blockers_list}}

**Recommendations (Prioritized by Severity):**

**HIGH Priority Fixes:**
{{high_priority_recommendations}}

**MEDIUM Priority Fixes:**
{{medium_priority_recommendations}}

**LOW Priority Fixes:**
{{low_priority_recommendations}}

**🔧 "Animation needs fixes before production. Sending back to Editor for refinement."**

<action>Return to Step 7 (Editor) with blocker details for fixes</action>

</check>

<template-output>quality_gate_results, production_verdict, deep_research_compliance_report, optimization_recommendations, blockers_list</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 6: DIRECTOR - FINAL DELIVERY -->
<!-- ============================================================ -->

<step n="11" goal="Director: Package Final Delivery">
<action>Director compiles complete production package</action>

**🎬 "Compiling final production package..."**

**Production Package Contents:**

1. **Creative Vision Document** (Director)
   - Animation narrative
   - Wow factor goals
   - Success criteria

2. **Research Report** (Cinematographer)
   - Multi-source research findings
   - Technical recommendations
   - Inspiration sources

3. **Implementation Code** (VFX Artist + Editor)
   - Production-ready GSAP code
   - Framework integration
   - Cleanup & accessibility

4. **Polish Notes** (Editor)
   - Refinements applied
   - Timing adjustments
   - Code improvements

5. **Validation Report** (Tech Director)
   - Performance metrics
   - Quality gate results
   - Production verdict

6. **Integration Guide**
   - Installation instructions
   - Usage examples
   - Testing checklist

<action>Generate complete production report using template.md</action>
<action>Save to: {{default_output_file}}</action>

<template-output>final_production_package</template-output>
</step>

<step n="12" goal="Director: Present to User">
<action>Director presents final delivery to user</action>

**🎬 "Production complete. Here's your premium GSAP animation."**

**Delivery Summary:**
- ✅ Creative vision achieved
- ✅ Research-backed implementation
- ✅ Production-ready code
- ✅ Polished and refined
- ✅ Performance validated
- ✅ Quality gates: {{quality_gate_status}}

**Performance:**
- Average FPS: {{average_fps}}
- Console: {{console_status}}
- Production Ready: {{production_verdict}}

**Documentation:**
- Complete production report: {{default_output_file}}
- Implementation code ready to use
- Integration guide included

<ask>Next steps:
1. Copy code and integrate into project
2. Request variations or adjustments
3. Add successful animation to pattern library
4. Done - animation is complete</ask>

<template-output>delivery_summary, next_action</template-output>
</step>

<step n="13" goal="Optional: Add to Pattern Library" optional="true">
<check if="production_ready AND user_approves">
<ask>Animation successful? Add to pattern library for future reuse? [y/n]</ask>

<check if="yes">
<action>Director adds animation to pattern library</action>

**Pattern Library Entry:**
```yaml
id: pattern-{{animation_name}}-{{uuid}}
name: "{{animation_name}}"
category: "{{pattern_category}}"
complexity: "{{complexity}}"
gsap_version: "{{gsap_version}}"
plugins_required: {{required_plugins}}
description: "{{description}}"
code_example: |
  {{implementation_code}}
created_date: "{{date}}"
success_count: 1
tags: {{pattern_tags}}
framework: "{{target_framework}}"
performance_notes: "{{performance_metrics}}"
research_sources: {{research_citations}}
```

<action>Save to: {pattern_library}/{{animation_name}}.pattern.yaml</action>

**🎬 "Pattern added to library! Available for quick implementation next time."**
</check>
</check>

<template-output>pattern_library_entry</template-output>
</step>

</workflow>

## Multi-Agent Coordination Notes

**Agent Handoffs:**
1. **Director → Cinematographer:** Passes creative vision, animation requirements
2. **Cinematographer → VFX Artist:** Passes research findings, technical recommendations
3. **VFX Artist → Editor:** Passes implementation code for polish
4. **Editor → Tech Director:** Passes polished code for validation
5. **Tech Director → Director:** Passes validation results and production verdict
6. **Director → User:** Delivers complete production package

**Context Preservation:**
All agents maintain access to:
- Original animation request
- Creative vision
- Brand personality
- Constraints
- Research findings

## MCP Tool Orchestration

**Research Phase (Cinematographer):**
- Perplexity MCP: Premium examples and trends
- Archon MCP: GSAP technical patterns
- Context7 MCP: Latest API documentation

**Validation Phase (Tech Director):**
- Chrome DevTools MCP: Performance profiling, console check, visual validation

## Quality Standards (Deep-Research Compliance Required)

<critical>ALL animations must meet Deep-Research benchmarks - not negotiable</critical>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- RESEARCH HIERARCHY (TIER 1/2/3 MANDATORY)                              -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Research Hierarchy (TIER 1/2/3 MANDATORY):**
- **TIER 1 PRIMARY:** Archon MCP (ALL 5 sources) + Deep-Research frameworks ALWAYS queried first
  - Source 1: gsap.com (b9f6b322298feb21) - PRIMARY
  - Source 2: Codrops (1e5cc3bd5125be3c) - Premium quality
  - Source 3: FreeFrontend (90c2ef5e8fa816b7)
  - Source 4: CodePen (020e9f31a8c5cdb7)
  - Source 5: Lenis (77ae0ef68a867aa9)
  - Deep-Research: Sections 1.1-1.4 (Creative), 2.2-2.5 (Implementation)
- **TIER 2 GAP FILLING:** WebSearch for 2024-2025 trends not in Archon
- **TIER 3 MINIMAL:** Context7 only for API verification if needed

**Citation Format (MANDATORY):**
```
Sources:
- Archon: [pattern] (source: [source_id]) - [technique]
- Deep-Research: Section [X.X] - [principle]
- WebSearch: [agency/brand] [year] - [url]
```

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CODE QUALITY (DEEP-RESEARCH COMPLIANCE)                                -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Code Quality:**
- Production-ready (no TODOs, placeholders)
- Comments explain WHY (not just WHAT) - rationale, not description
- Cleanup comprehensively implemented (Section 3.7, 8.1)
- Framework integration correct (Section 2.5)
- GSAP 3.13.0+ syntax (premium plugins FREE!)
- TypeScript types if applicable

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- PERFORMANCE (DEEP-RESEARCH 5.1-5.6 MANDATORY)                          -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Performance (Deep-Research Sections 5.1-5.6):**

**Section 5.1: GPU Rule (CRITICAL)**
- Transform/opacity ONLY (NO top/left, width/height, margin, padding)
- GPU-accelerated properties: transform, opacity, filter (cautiously)

**Section 5.2: Main Thread Free**
- <16ms paint time per frame (60fps budget)
- <5ms JS execution per frame
- Heavy calculations → Web Workers

**Section 5.3: Debugging Jank**
- No layout thrashing (Chrome DevTools Timeline check)
- No long tasks >50ms during animation

**Section 5.4: Memory Management**
- Kill timelines on cleanup: `timeline.kill()`
- Kill ScrollTriggers: `ScrollTrigger.getAll().forEach(st => st.kill())`
- No orphaned animations or event listeners

**Section 5.5: 60fps Optimization (MANDATORY)**
- 60fps sustained @ 1x CPU (normal devices)
- **60fps sustained @ 4x CPU throttle (mid-range) - MANDATORY**
- 30fps minimum @ 6x CPU throttle (low-end)

**Section 5.6: WebGL/Canvas Escalation**
- Assess if DOM animation sufficient
- Escalate to WebGL for particle systems if needed

**Benchmark Targets:**
- Average FPS: 60 (minimum)
- FPS @ 4x throttle: 60 (CRITICAL)
- Paint time: <16ms per frame
- JS execution: <5ms per frame
- Console: 0 errors, 0 GSAP warnings

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- ACCESSIBILITY (DEEP-RESEARCH 6.1-6.4 MANDATORY)                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Accessibility (Deep-Research Sections 6.1-6.4):**

**Section 6.1: prefers-reduced-motion (CRITICAL - CANNOT SHIP WITHOUT)**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Instant transitions OR subtle fades ONLY
  gsap.set(element, { opacity: 1, y: 0 });
} else {
  // Full animation
  gsap.to(element, { opacity: 1, y: 0, duration: 1 });
}
```

**Section 6.2: Other Considerations**
- No seizure-inducing flashing (>3 flashes/sec)
- Keyboard navigation works during animations
- Focus states remain visible
- Screen readers announce state changes

**Section 6.3: Accessible Styling**
- WCAG AA color contrast (4.5:1) maintained during transitions
- Text remains readable during all animation states
- Critical UI not animated during loading

**Section 6.4: User Control**
- Pause/play for long animations (>5 seconds)
- Users can skip intro animations
- Respects OS-level motion preferences

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- PITFALLS (DEEP-RESEARCH 8.1-8.10 ALL CHECKED)                          -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Common Pitfalls (Deep-Research Sections 8.1-8.10 - ALL MUST BE CHECKED):**

**HIGH Severity (Production Blockers):**
- 8.1: Cleanup/Memory Leaks - Timeline/ScrollTrigger cleanup on unmount
- 8.2: Wrong Properties - Animate transform/opacity, NOT layout properties
- 8.9: Device Testing - Cross-browser/device compatibility

**MEDIUM Severity (Quality Issues):**
- 8.3: immediateRender - Prevent flicker with from() animations
- 8.4: Multiple ScrollTriggers - One per element (usually)
- 8.5: overwrite Mode - Prevent animation conflicts
- 8.6: Missing refresh() - Call after images/fonts load
- 8.10: from() vs fromTo() - Use fromTo() for explicit control

**LOW Severity (Polish):**
- 8.7: Deprecated Syntax - GSAP 3.13+ syntax only
- 8.8: Infinite Loops - Cleanup logic on unmount

**Editor MUST check ALL 10 pitfalls systematically - not optional**

## Success Metrics

This flagship workflow targets:
- ✅ 60%+ first-time implementation success (vs 20% baseline)
- ✅ 70% reduction in debugging iterations
- ✅ 90%+ animations achieve 60fps
- ✅ 80%+ user satisfaction (premium quality rating)
- ✅ 45-90 minute total production time

## Integration

**Feeds Into:**
- Pattern library (successful animations)

**Fed By:**
- creative-ideation (can start from concept)
- Pattern library (can reference existing patterns)

**Produces:**
- Complete production-ready animation
- Full documentation package
- Pattern library entry (if successful)
