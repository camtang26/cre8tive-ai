# Motion Analysis & Technical Translation - Quality Checklist
# Research Enforcement & 5-Step Framework Validation

## Context Gathering Validation (MANDATORY)

### Visual Reference Completeness Check

- [ ] **Visual reference captured**
  - [ ] URL provided (live site, CodePen, video, etc.) OR
  - [ ] Screenshot/screen recording uploaded OR
  - [ ] Detailed motion description provided OR
  - [ ] Multiple references for comparison provided
  - [ ] NOT vague ("make it cool") - specific visual input

- [ ] **"What catches eye" identified**
  - [ ] Specific characteristics noted
  - [ ] NOT generic ("it looks good")
  - [ ] Measurable qualities described (smoothness, timing, coordination, feel, physics, drama)
  - [ ] Priority aspects highlighted (most important feature of motion)

- [ ] **Target elements specified**
  - [ ] Exact elements identified (hero section, cards, navigation, etc.)
  - [ ] Number of elements noted (single item vs array)
  - [ ] Context provided (when motion occurs - page load, scroll, hover, etc.)
  - [ ] Element relationships understood (coordinated vs independent)

- [ ] **Technical context captured** (if provided)
  - [ ] Framework noted (React, Vue, Next.js, Vanilla)
  - [ ] Existing animation library (if migrating)
  - [ ] Performance constraints stated
  - [ ] Browser support requirements specified

**Completeness Assessment:** [COMPLETE / INCOMPLETE / NEEDS CLARIFICATION]

---

## 5-Step Framework Application Validation (Section 1.2)

### Step 1: Gather Inspiration ✅ (from Context)

- [ ] **Inspiration sources documented**
  - [ ] Visual reference: {{visual_reference}}
  - [ ] Appeal characteristics: {{what_catches_eye}}
  - [ ] Target application: {{elements_needing_treatment}}
  - [ ] All inputs captured in Step 1 checklist

---

### Step 2: Deconstruct the Effect

- [ ] **Components identified**
  - [ ] ALL visual elements involved listed
  - [ ] NOT vague ("animation happens")
  - [ ] Specific: "Background scales up, heading letters fade and rise, subtext slides"
  - [ ] Count: [X] distinct components

- [ ] **Properties changing identified**
  - [ ] ALL animating properties listed (x, y, scale, opacity, rotation, skew, color, clipPath, etc.)
  - [ ] NOT generic ("moves")
  - [ ] Specific transform properties noted
  - [ ] Layout vs GPU properties distinguished
  - [ ] Property count: [X] properties

- [ ] **Sequence analyzed**
  - [ ] Order of events determined
  - [ ] Overlaps vs sequential timing identified
  - [ ] Delays between elements noted
  - [ ] Timeline structure visualized (text-based chart)

- [ ] **Timing/feel analyzed**
  - [ ] Durations estimated (rough)
  - [ ] Easing characteristics identified (smooth, bouncy, elastic, sharp, dramatic)
  - [ ] Speed variations noted (fast start → slow end, vice versa, constant)
  - [ ] Feel mapped to Section 2.1 easing categories

**Deconstruction Quality:** [FRAME-BY-FRAME / SURFACE-LEVEL / INCOMPLETE]

**Deep-Research Application Check:**
- [ ] Section 1.2 quote applied: *"Break the reference down... What are the components? What is the timing and sequence?"*
- [ ] Frame-by-frame mentality used (not assumptions)

---

### Step 3: Choreograph on Paper

- [ ] **Text-based storyboard created**
  - [ ] Sequence in numerical order (1, 2, 3...)
  - [ ] Each line describes one action
  - [ ] Timing estimates included (0-0.5s, 0.3-1.2s format)
  - [ ] Easing noted for each action
  - [ ] Example format followed:
    ```
    1) Background circle scales up (0-0.5s, power2.out)
    2) Heading text letters fade and rise one by one (0.3-1.2s, power3.out, stagger 0.05s)
    3) Subtext slides in from left (0.8-1.3s, back.out(1.4))
    4) CTA button bounces in (1.2-1.6s, elastic.out)
    ```

- [ ] **Overlaps and delays decided**
  - [ ] Which animations start together identified
  - [ ] Which wait for others to finish identified
  - [ ] What creates the "flow" feeling documented
  - [ ] Timeline position parameters conceptualized ("-=0.4", "<0.5", labels)

- [ ] **Choreography completeness**
  - [ ] Covers ENTIRE visual reference (not just first element)
  - [ ] Timing map visualized (0s → Xs timeline)
  - [ ] No missing gaps in sequence
  - [ ] Flow logic clear (human can understand sequence)

**Choreography Quality:** [COMPLETE-TIMELINE / PARTIAL / MISSING]

**Deep-Research Application Check:**
- [ ] Section 1.2 quote applied: *"Outline the sequence of events in order... decide overlaps or delays between them"*
- [ ] Section 2.2 timeline positioning concepts referenced

---

### Step 4: Choose the Technique

- [ ] **GSAP structure decision made**
  - [ ] Timeline vs Tweens determined
  - [ ] Rationale provided (why this structure?)
  - [ ] Complexity level assessed (single tween, basic timeline, nested timelines)
  - [ ] Decision matches choreography complexity

- [ ] **ScrollTrigger necessity determined**
  - [ ] Scroll-based control? [YES / NO]
  - [ ] Auto-play on load? [YES / NO]
  - [ ] User-triggered? [YES / NO]
  - [ ] ScrollTrigger config sketched (if YES)

- [ ] **Plugin requirements identified**
  - [ ] SplitText needed? (for letter/word/char splitting) [YES / NO / MAYBE]
  - [ ] MorphSVG needed? (for SVG morphing) [YES / NO / MAYBE]
  - [ ] Flip needed? (for state transitions) [YES / NO / MAYBE]
  - [ ] Draggable needed? (for dragging/throwing) [YES / NO / MAYBE]
  - [ ] MotionPathPlugin needed? (for path animation) [YES / NO / MAYBE]
  - [ ] CustomEase needed? (for custom bezier) [YES / NO / MAYBE]
  - [ ] **FREE notation confirmed:** All plugins FREE in GSAP 3.13+

- [ ] **GSAP vs CSS decision made**
  - [ ] Simple static transition → CSS? [YES / NO]
  - [ ] Sequenced/synchronized/complex → GSAP? [YES / NO]
  - [ ] Precise timing control needed → GSAP? [YES / NO]
  - [ ] Dynamic values/logic → GSAP? [YES / NO]
  - [ ] Decision rationale provided

**Technical Decisions Quality:** [RESEARCH-BACKED / LOGICAL / GUESSWORK]

**Deep-Research Application Check:**
- [ ] Section 1.2 quote applied: *"Decide the best technical approach... GSAP vs CSS vs other"*
- [ ] Section 2.1 tween vs timeline guidance consulted
- [ ] Section 2.3 plugin ecosystem referenced (all FREE!)

---

### Step 5: Prototype Approach

- [ ] **Implementation strategy outlined**
  - [ ] Prototyping steps provided (isolation → core → timing → coordination → integration)
  - [ ] NOT "just implement it" - systematic approach
  - [ ] Testing methodology included
  - [ ] Iteration strategy clear

- [ ] **Potential challenges identified**
  - [ ] Performance concerns noted (many elements, complex SVG, etc.)
  - [ ] Timing coordination complexity assessed
  - [ ] Browser compatibility risks flagged
  - [ ] Framework integration challenges noted
  - [ ] Count: [X] challenges identified

- [ ] **Iteration strategy defined**
  - [ ] How to test timing/easing variations
  - [ ] How to refine coordination
  - [ ] When to use timeScale for speed testing
  - [ ] How to gather feedback

**Prototype Plan Quality:** [SYSTEMATIC / BASIC / MISSING]

**Deep-Research Application Check:**
- [ ] Section 1.2 quote applied: *"Prototype in isolation... isolates challenges and allows quick iteration"*
- [ ] CodePen/isolation approach referenced

---

## Research Gate Validation (MANDATORY - CANNOT BE SKIPPED)

### TIER 1A: Archon MCP Pattern Matching (ALL REQUIRED)

- [ ] **Query 1: Motion Pattern Code Examples** (REQUIRED)
  - [ ] `rag_search_code_examples("{{motion_type}} pattern", match_count=8)`
  - [ ] 8 similar implementations documented
  - [ ] How others achieved this effect noted
  - [ ] Code patterns extracted

- [ ] **Query 2: Visual Effect Knowledge** (REQUIRED)
  - [ ] `rag_search_knowledge_base("visual effect {{specific_motion}}", match_count=6)`
  - [ ] Techniques and approaches documented
  - [ ] Best practices extracted

- [ ] **Query 3: Property-Specific Patterns** (REQUIRED)
  - [ ] `rag_search_knowledge_base("{{primary_property}} animation patterns", source_id="b9f6b322298feb21", match_count=6)`
  - [ ] Property optimization tips documented
  - [ ] Common patterns for this property noted

- [ ] **Query 4: Plugin-Specific Patterns** (CONDITIONAL)
  - [ ] IF plugin needed: `rag_search_code_examples("{{plugin_name}} examples", match_count=5)`
  - [ ] Plugin usage patterns documented
  - [ ] Implementation examples extracted
  - [ ] OR: No plugin needed, query skipped

- [ ] **Priority Sources Queried:**
  - [ ] b9f6b322298feb21 (gsap.com official) queried
  - [ ] 1e5cc3bd5125be3c (Codrops) queried
  - [ ] 90c2ef5e8fa816b7 (FreeFrontend) queried
  - [ ] 020e9f31a8c5cdb7 (CodePen) queried
  - [ ] d571ab8468f31305 (Awwwards) queried (if premium feel)

**Pattern Matches Documented:** 8-12 patterns found (minimum 8)

**Pattern Match Quality:**
- [ ] NOT generic results - specific to motion type
- [ ] Code examples actionable (can adapt)
- [ ] Sources cited with IDs
- [ ] Best match analysis performed (which pattern closest to user's reference)
- [ ] Adaptation notes provided (how to modify for user's context)
- [ ] Anti-patterns identified (patterns to avoid)

---

### TIER 1B: Deep-Research Framework Validation (ALL REQUIRED)

- [ ] **Section 1.2: Visual Translation Framework** ✅
  - [ ] File location confirmed: 02-12-visual-inspiration-technical-translation-workflow.md
  - [ ] 5-step framework followed completely
  - [ ] Each step validated in previous checklist sections
  - [ ] Key quote extracted: *"Always maintain a visual + semantic mapping"*

- [ ] **Section 2.1: Core GSAP Concepts** (REQUIRED)
  - [ ] File read: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md
  - [ ] Tween vs Timeline choice validated
  - [ ] Stagger strategy determined (if multiple elements)
  - [ ] Easing strategy chosen (matches motion feel)
  - [ ] Key quote extracted: *"Always consider using a gsap.timeline for multi-step animations"*

- [ ] **Section 2.2: Timeline Techniques** (IF coordination needed)
  - [ ] File read: 06-22-mastering-gsap-timeline-techniques.md
  - [ ] Relative positioning strategy defined ("-=0.4", "<0.5")
  - [ ] Label usage planned (if complex)
  - [ ] Nesting strategy determined (modular sub-timelines if complex)
  - [ ] Control methods identified (play, pause, reverse, progress)
  - [ ] Key quote extracted: *"Relative scheduling makes complex overlapping sequences easier to read"*

**Framework Validation Quality:** [COMPLETE / PARTIAL / MISSING]

**Disney Principles Applied:**
- [ ] Which of 12 principles apply to this motion identified
- [ ] Timing principle (#8) referenced
- [ ] Ease-in/Ease-out principle (#6) applied
- [ ] Spacing consideration noted (frame-by-frame motion charts)

---

### TIER 2: 2024-2025 Premium Examples (CONDITIONAL)

- [ ] **Archon coverage evaluated**
  - [ ] Does Archon provide 2025-specific examples? [YES / NO]
  - [ ] Are examples recent enough? [YES / NO]
  - [ ] WebSearch needed? [YES / NO]

- [ ] **IF WebSearch executed:**
  - [ ] Query 1: `WebSearch("GSAP {{motion_description}} premium 2025")`
    - [ ] Award-winning similar effects found
    - [ ] How premium sites implement this documented
  - [ ] Query 2: `WebSearch("{{similar_brand}} animation breakdown")`
    - [ ] Technical approaches from top brands noted
  - [ ] Query 3: `WebSearch("Awwwards {{motion_type}} 2024")`
    - [ ] Award-winning patterns documented
    - [ ] Current industry standards noted
  - [ ] Target achieved: 3-5 premium examples of similar motion

- [ ] **OR: WebSearch skipped with justification**
  - [ ] "Archon provided sufficient 2024-2025 examples. WebSearch not needed."

**Premium Examples Quality:** [AWARD-WINNING / PROFESSIONAL / BASIC / NONE]

---

### Research Checkpoint Gate (MANDATORY BLOCKING)

- [ ] **Research synthesis presented to user**
  - [ ] TIER 1A: Archon Pattern Matches section complete (8-12 patterns)
  - [ ] TIER 1B: Deep-Research Validation section complete (Sections 1.2, 2.1, 2.2)
  - [ ] TIER 2: 2024-2025 Premium Examples section complete (if applicable)
  - [ ] SYNTHESIS: Implementation Strategy clearly stated
  - [ ] GSAP Structure decision justified (timeline vs tweens with rationale)
  - [ ] Properties list finalized (all animating properties)
  - [ ] Plugins Required list confirmed (with FREE notation)
  - [ ] Timing Strategy outlined (sequence, overlaps, durations)
  - [ ] Best Patterns to Adapt highlighted (specific Archon patterns)
  - [ ] CITATIONS: All sources listed (Archon IDs, Deep-Research sections, WebSearch URLs)

- [ ] **User responded "Continue [c]"** to proceed
  - [ ] Agent HALTED after research presentation
  - [ ] Agent WAITED for user input
  - [ ] User explicitly provided "Continue [c]" or equivalent
  - [ ] Agent did NOT autonomously skip research
  - [ ] Agent did NOT rationalize skipping research ("I'll do quick research...")

**Research Gate Status:** [PASSED / FAILED - FIX IMMEDIATELY]

**If FAILED:**
- [ ] Agent attempted to skip research → VIOLATION
- [ ] Research incomplete (missing queries) → VIOLATION
- [ ] Research presented but didn't halt → VIOLATION
- [ ] No user "Continue [c]" input received → VIOLATION

---

## Technical Specification Quality Validation

### Implementation Pseudocode Quality

- [ ] **Pseudocode structure clear**
  - [ ] GSAP structure approach shown (timeline vs tweens)
  - [ ] NOT actual code yet - conceptual structure
  - [ ] Timeline positioning illustrated (if timeline)
  - [ ] Stagger pattern shown (if applicable)
  - [ ] ScrollTrigger integration sketched (if applicable)
  - [ ] Comments explain logic

- [ ] **Step-by-step code structure provided**
  - [ ] Setup (GSAP registration, plugin imports)
  - [ ] Configuration (timeline defaults, ScrollTrigger config)
  - [ ] Animation sequence (each step numbered)
  - [ ] Fallbacks (prefers-reduced-motion, browser compatibility)

**Pseudocode Quality:** [CLEAR-AND-ACTIONABLE / BASIC / CONFUSING]

---

### Complete GSAP Code Quality

- [ ] **Code is copy-paste ready**
  - [ ] Syntactically valid JavaScript
  - [ ] No placeholders ({{missing_values}})
  - [ ] No "..." ellipsis (complete implementation)
  - [ ] Imports/registration included
  - [ ] Framework integration shown (if applicable)

- [ ] **Code is well-commented**
  - [ ] Each major section has comment
  - [ ] Complex timing explained
  - [ ] Plugin usage justified
  - [ ] Performance notes included

- [ ] **Code is modular**
  - [ ] Complex animations use functions
  - [ ] Timeline returned from function (if complex)
  - [ ] Reusable patterns extracted
  - [ ] NOT monolithic blob

- [ ] **Framework integration correct**
  - [ ] React: useGSAP hook pattern used
  - [ ] Vue: onMounted/onUnmounted lifecycle
  - [ ] Next.js: SSR considerations handled
  - [ ] Vanilla: Direct implementation or class-based

- [ ] **Accessibility implemented**
  - [ ] prefers-reduced-motion check present
  - [ ] Alternative non-motion state provided
  - [ ] NOT just disabled - instant state change

- [ ] **Performance considerations present**
  - [ ] GPU-accelerated properties used (transform, opacity)
  - [ ] NO layout properties (top, left, width, height)
  - [ ] will-change used judiciously (<10 elements)
  - [ ] ScrollTrigger scrub optimized (scrub:true or numeric)

**Code Quality Level:** [PRODUCTION-READY / NEEDS-POLISH / INCOMPLETE]

---

### Pattern References Quality

- [ ] **Archon patterns cited**
  - [ ] Primary pattern identified (best match)
  - [ ] Source URL/ID provided
  - [ ] How adapted for user documented
  - [ ] Code reference snippet provided
  - [ ] Supporting patterns listed (2-3 additional)
  - [ ] Total Archon patterns cited: [X] patterns

- [ ] **Deep-Research frameworks cited**
  - [ ] Section 1.2 insights applied (5-step framework)
  - [ ] Section 2.1 insights applied (tween/timeline/stagger/ease)
  - [ ] Section 2.2 insights applied (timeline choreography - if applicable)
  - [ ] Key quotes extracted (italics with quotation marks)
  - [ ] Source files in parentheses

- [ ] **Premium examples cited**
  - [ ] URLs provided (if from WebSearch)
  - [ ] Pattern analysis included (what makes it premium)
  - [ ] Quality level assigned (Basic/Professional/Premium/Award-winning)
  - [ ] Takeaways documented (what we learned)

**Citation Completeness:** [COMPREHENSIVE / ADEQUATE / SPARSE]

---

### Implementation Guidance Quality

- [ ] **Prototyping recommendations detailed**
  - [ ] Step 1: Minimal Structure (HTML/CSS setup)
  - [ ] Step 2: Core Animation (implement core motion first)
  - [ ] Step 3: Timing Refinement (test easing/duration independently)
  - [ ] Step 4: Coordination (add complexity and coordination)
  - [ ] Step 5: Integration (integrate into full site)

- [ ] **Testing strategy provided**
  - [ ] Visual testing (screen sizes, content lengths, browsers)
  - [ ] Performance testing (FPS monitoring, jank detection, mobile)
  - [ ] Accessibility testing (prefers-reduced-motion, keyboard, vestibular)

- [ ] **Performance considerations noted**
  - [ ] Optimizations applied (will-change, GPU acceleration, property choices)
  - [ ] Potential issues identified
  - [ ] Solutions provided

- [ ] **Accessibility notes included**
  - [ ] prefers-reduced-motion implementation code
  - [ ] Alternative approaches (instant state, subtle fades, user control)

**Implementation Guidance Quality:** [COMPREHENSIVE / ADEQUATE / MINIMAL]

---

## Template Variables Population Validation

### Motion Overview Variables

- [ ] {{visual_reference_summary}} populated
- [ ] {{what_catches_eye_detailed}} populated
- [ ] {{elements_and_context}} populated
- [ ] {{characteristic_1}}, {{characteristic_2}}, {{characteristic_3}} populated

### 5-Step Framework Variables

- [ ] {{visual_reference}} populated (Step 1)
- [ ] {{what_catches_eye}} populated (Step 1)
- [ ] {{deconstruction_components_list}} populated (Step 2)
- [ ] {{deconstruction_properties_list}} populated (Step 2)
- [ ] {{x_changes}}, {{y_changes}}, {{scale_changes}}, etc. populated (Step 2)
- [ ] {{deconstruction_sequence_analysis}} populated (Step 2)
- [ ] {{deconstruction_timing_analysis}} populated (Step 2)
- [ ] {{choreography_sequence_text_based}} populated (Step 3)
- [ ] {{choreography_overlaps_analysis}} populated (Step 3)
- [ ] {{gsap_structure_timeline_or_tweens}} populated (Step 4)
- [ ] {{why_this_structure}} populated (Step 4)
- [ ] {{scrolltrigger_needed_yes_no}} populated (Step 4)
- [ ] {{plugins_list_with_free_notation}} populated (Step 4)
- [ ] {{gsap_vs_css_rationale}} populated (Step 4)
- [ ] {{prototype_approach_detailed}} populated (Step 5)
- [ ] {{challenge_1}}, {{challenge_2}}, {{challenge_3}} populated (Step 5)
- [ ] {{iteration_testing_plan}} populated (Step 5)

### Technical Analysis Variables

- [ ] {{property_1}}, {{property_2}}, {{property_3}} with start/end values populated
- [ ] {{gpu_accelerated_properties}} listed
- [ ] {{layout_triggering_properties_to_avoid}} listed (should be NONE)
- [ ] {{will_change_recommendation}} provided
- [ ] {{total_duration}} calculated
- [ ] {{duration_ranges}} specified
- [ ] {{stagger_value}} provided (if applicable)
- [ ] {{easing_choices_per_element}} documented
- [ ] {{how_elements_coordinate}} explained

### Implementation Code Variables

- [ ] {{complete_gsap_code_commented}} populated (FULL code, not snippets)
- [ ] {{expected_html_structure}} provided
- [ ] {{css_prerequisites}} listed

### Pattern References Variables

- [ ] {{primary_pattern_name}}, {{primary_pattern_source}} populated
- [ ] {{how_adapted_for_user}} documented
- [ ] {{pattern_1_name}}, {{pattern_2_name}}, {{pattern_3_name}} populated
- [ ] {{section_1_2_key_insight}}, {{section_2_1_key_insight}}, {{section_2_2_key_insight}} extracted
- [ ] {{premium_example_1_url}}, {{premium_example_2_url}} provided (if applicable)

### Implementation Guidance Variables

- [ ] {{minimal_html_css_setup}} provided
- [ ] {{implement_core_motion_first}} detailed
- [ ] {{test_easing_duration_independently}} explained
- [ ] {{add_complexity_and_coordination}} outlined
- [ ] {{integrate_into_full_site}} described
- [ ] {{will_change_properties}} listed
- [ ] {{property_optimization_notes}} documented
- [ ] {{reduced_motion_fallback_code}} provided

### Research Citations Variables

- [ ] {{finding_1}}, {{finding_2}}, {{finding_3}} from Archon queries populated
- [ ] {{sources_1}}, {{sources_2}}, {{sources_3}} (Archon IDs) documented
- [ ] All 4 priority sources checked (gsap.com, Codrops, FreeFrontend, CodePen)
- [ ] Deep-Research sections 1.2, 2.1, 2.2 referenced
- [ ] {{websearch_queries}}, {{websearch_findings}} populated (if applicable)

### Quality Assessment Variables

- [ ] {{quality_indicator_1}}, {{quality_indicator_2}}, {{quality_indicator_3}} listed
- [ ] {{pattern_count}} calculated (Archon patterns found)
- [ ] {{framework_count}} calculated (Deep-Research sections applied)

**Variable Population Status:** [100% COMPLETE / PARTIAL / MANY MISSING]

**If PARTIAL or MANY MISSING:**
- [ ] Identify ALL missing variables
- [ ] Populate before marking workflow complete
- [ ] No "TODO" or "[Fill in]" allowed in final report

---

## Output Quality & Completeness Validation

### Report Sections Completeness

- [ ] **Motion Overview section complete**
  - [ ] Visual inspiration summarized
  - [ ] Key characteristics identified (3+)
  - [ ] Target application clear

- [ ] **Visual Translation (5-Step Framework) section complete**
  - [ ] ALL 5 steps present
  - [ ] Each step has ✅ checkmark
  - [ ] Each step has detailed content (not just headings)

- [ ] **Technical Analysis section complete**
  - [ ] Properties Being Animated subsection (complete list)
  - [ ] Property Optimization subsection (GPU vs layout distinction)
  - [ ] Timing & Sequencing subsection (duration, easing, coordination)

- [ ] **Implementation Pseudocode section complete**
  - [ ] Structure subsection (timeline vs tweens approach)
  - [ ] Stagger Pattern subsection (if applicable)
  - [ ] ScrollTrigger Integration subsection (if applicable)

- [ ] **Complete GSAP Implementation section complete**
  - [ ] Copy-Paste Ready Code subsection (full implementation)
  - [ ] HTML Structure Expected subsection
  - [ ] CSS Prerequisites subsection

- [ ] **Pattern References section complete**
  - [ ] Archon MCP Patterns Adapted subsection (primary + supporting)
  - [ ] Deep-Research Frameworks Applied subsection (Sections 1.2, 2.1, 2.2)
  - [ ] Premium Examples Referenced subsection (if applicable)

- [ ] **Implementation Guidance section complete**
  - [ ] Prototyping Recommendations subsection (5-step process)
  - [ ] Testing Strategy subsection (visual, performance, accessibility)
  - [ ] Performance Considerations subsection (optimizations, issues, solutions)
  - [ ] Accessibility subsection (prefers-reduced-motion code)

- [ ] **Research Citations section complete**
  - [ ] Archon MCP Sources subsection (queries, findings, priority sources)
  - [ ] Deep-Research Sections subsection (1.2, 2.1, 2.2 insights)
  - [ ] WebSearch subsection (if used)

- [ ] **Quality Assessment section complete**
  - [ ] Implementation Quality rating
  - [ ] Quality Indicators listed (3+)
  - [ ] Confidence Level stated with justification

- [ ] **Next Steps section complete**
  - [ ] Recommended next steps (3+)
  - [ ] Testing checklist provided

---

### Professional Quality Standards

- [ ] **Cinematographer persona maintained**
  - [ ] Film editing principles referenced
  - [ ] Visual storytelling concepts applied
  - [ ] Motion design expertise evident
  - [ ] "Every cut, every movement, every pause has purpose" philosophy present

- [ ] **Research-backed recommendations**
  - [ ] ALL recommendations cite sources
  - [ ] NO generic advice without citations
  - [ ] NO trial-and-error suggestions
  - [ ] NO "this should work" without research backing

- [ ] **Premium quality indicators**
  - [ ] Attention to detail (easing curves matched to feel)
  - [ ] Performance optimization (GPU properties only)
  - [ ] Accessibility consideration (prefers-reduced-motion)
  - [ ] Systematic approach (5-step framework rigorously followed)
  - [ ] Comprehensive research (8+ Archon patterns, 3 Deep-Research sections)

**Report Quality Level:** [PREMIUM / PROFESSIONAL / BASIC]

---

## Research Enforcement Verification (CRITICAL)

### Can Research Be Skipped?

- [ ] **NO** - Research gate blocks progression (PASS)
  - [ ] Workflow includes research-gate tag with enforcement="MANDATORY" blocking="true"
  - [ ] Checkpoint type="approval-gate" blocking="true" present
  - [ ] User must explicitly continue with "Continue [c]"
  - [ ] Agent cannot rationalize skipping
  - [ ] Halt command executed after research presentation
  - [ ] User input required to proceed

- [ ] **YES** - Research is optional/skippable (FAIL - FIX WORKFLOW IMMEDIATELY)
  - [ ] **THIS MUST NOT HAPPEN**
  - [ ] If research can be skipped, workflow is INVALID
  - [ ] Return to instructions.md and add MANDATORY blocking gates
  - [ ] Test again with fresh session

**Research Enforcement Status:** [MANDATORY-AND-BLOCKING / SKIPPABLE - CRITICAL FAILURE]

---

## File Path Verification

### Deep-Research File Paths

- [ ] **ALL Read commands point to actual Deep-Research files**
  - [ ] Section 1.2: `/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md` ✅
  - [ ] Section 2.1: `/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md` ✅
  - [ ] Section 2.2: `/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md` ✅

- [ ] **NO references to agent sidecar files**
  - [ ] NO paths pointing to /bmad/gsap-excellence/agents/gsap-cinematographer/
  - [ ] ALL research comes from /docs/Deep-Research/GSAP-Animation-Mastery/

- [ ] **All file paths verified with ls**
  - [ ] Each file exists
  - [ ] Paths are correct (no typos)

**File Path Status:** [ALL-VALID / ERRORS-FOUND]

---

## Workflow Execution Testing

### Functionality Tests

- [ ] **Workflow executes without errors**
  - [ ] workflow.yaml loads correctly
  - [ ] instructions.md processes without errors
  - [ ] template.md renders correctly
  - [ ] No XML parsing errors
  - [ ] No undefined variable errors

- [ ] **Research gates block progression**
  - [ ] Agent HALTS after research presentation
  - [ ] Agent WAITS for user "Continue [c]"
  - [ ] Agent does NOT proceed autonomously
  - [ ] Testing confirmed: Tried to skip, was blocked ✅

- [ ] **User input required at checkpoints**
  - [ ] Checkpoint executes correctly
  - [ ] User prompt displays
  - [ ] Input is captured
  - [ ] Workflow proceeds only after input

- [ ] **Output file generated correctly**
  - [ ] File created at default_output_file path
  - [ ] All placeholders replaced
  - [ ] Markdown renders correctly
  - [ ] Citations formatted properly

**Functionality Status:** [ALL-TESTS-PASS / ERRORS-FOUND]

---

## BMAD v6 Compliance Validation

### workflow.yaml Compliance

- [ ] **All required sections present**
  - [ ] name, description, installed_path
  - [ ] config_source, user_name, output_folder
  - [ ] template, instructions paths
  - [ ] default_output_file with {{date}} or {{timestamp}}
  - [ ] standalone: false (agent-context-dependent)
  - [ ] metadata section (agent, priority, complexity, etc.)
  - [ ] required_mcp section (archon, perplexity listed)
  - [ ] deep_research_sections (1.2, 2.1, 2.2 listed)
  - [ ] archon_sources (priority source IDs listed)

- [ ] **Version is 2.0.0-premium**
  - [ ] version: "2.0.0-premium" present in workflow.yaml
  - [ ] NOT 1.0.0 or missing

- [ ] **deep_research_base configured**
  - [ ] Path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery`
  - [ ] Resolves correctly

**BMAD v6 Compliance:** [FULL-COMPLIANCE / VIOLATIONS-FOUND]

---

## Quality Metrics Summary

### Line Count Targets

- [ ] **workflow.yaml:** [X] lines (target: 150-200+ lines)
- [ ] **instructions.md:** [X] lines (target: 1,000-1,700+ lines)
- [ ] **template.md:** [X] lines (target: 400-600+ lines)
- [ ] **checklist.md:** [X] lines (target: 400-700+ lines)
- [ ] **TOTAL:** [X] lines (target: 2,000-3,000+ lines, minimum 1,500+ lines)

**Line Count Status:** [EXCEEDS-TARGET / MEETS-TARGET / BELOW-TARGET]

### Research Density

- [ ] **Verbatim quotes count:** [X] quotes (target: 10+ quotes)
- [ ] **Code examples count:** [X] examples (target: 5+ examples)
- [ ] **Research citations count:** [X] citations (target: 10+ citations)
- [ ] **Archon pattern count:** [X] patterns (target: 8+ patterns)
- [ ] **Deep-Research section count:** [X] sections (target: 3 sections)

**Research Density:** [RESEARCH-RICH / ADEQUATE / SPARSE]

---

## Final Validation Checklist

- [ ] **ALL previous checkboxes completed**
- [ ] **Research enforcement MANDATORY and BLOCKING**
- [ ] **Version bumped to 2.0.0-premium**
- [ ] **Total lines ≥ 1,500** (target 1,500+ for this workflow)
- [ ] **Verbatim quotes ≥ 10** with source citations
- [ ] **Archon patterns ≥ 8** documented
- [ ] **Deep-Research sections ALL consulted** (1.2, 2.1, 2.2)
- [ ] **File paths ALL valid** (no sidecar references)
- [ ] **Template variables 100% populated**
- [ ] **Workflow executes without errors**
- [ ] **Research gates block progression**
- [ ] **BMAD v6 compliance verified**

**Workflow Classification:** [PREMIUM / NEEDS-IMPROVEMENT / PATHETIC]

**If PREMIUM:** ✅ Workflow rebuild COMPLETE - ready for production
**If NEEDS-IMPROVEMENT:** ⚠️ Fix identified issues before marking complete
**If PATHETIC:** ❌ Major rebuild required - workflow does not meet standards

---

**Quality Gate Decision:** [PASS / FAIL]

**If FAIL:** Return to appropriate section, fix issues, re-validate.
**If PASS:** Workflow rebuild COMPLETE. Mark todo as completed. Move to next workflow.

---

*🎥 Cinematographer's Note: "This checklist ensures that every motion analysis workflow delivers research-backed, production-ready GSAP specifications. Never skip research. Never skip validation."*

*"Every cut, every movement, every pause has purpose." - The Cinematographer*
