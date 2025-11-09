# Harvest Patterns Workflow Instructions
# Extract successful animations as reusable patterns with research-backed quality assessment
# Version: 2.0.0-premium (Research-backed rebuild)

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/harvest-patterns/workflow.yaml</critical>

<workflow>

<!-- ============================================================ -->
<!-- STEP 1: RESEARCH-BACKED QUALITY ASSESSMENT -->
<!-- ============================================================ -->

<step n="1" goal="Director: Research-Backed Pattern Quality Assessment">

**🎬 "Let's assess this animation against research-backed quality standards before extraction..."**

<critical>MANDATORY RESEARCH GATE: Pattern eligibility must be validated against Deep-Research quality standards BEFORE proceeding with extraction</critical>

<!-- ========== MANDATORY RESEARCH GATE ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Before extracting this animation as a reusable pattern, you MUST validate it against Deep-Research quality standards to ensure only PREMIUM, MEANINGFUL animations enter the pattern library.</mandate>

  <!-- PHASE 1: Section 1.1 - Animator's Mindset Quality Standards -->
  <phase n="1" title="Deep-Research Section 1.1 - Pattern Quality Standards" required="true">
    <action>Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md

Extract and apply quality standards for pattern eligibility:

**Quality Standard 1: Meaningful vs. Decorative**
*"Great animations are meaningful, not just decorative."*
(Source: Section 1.1 - Animator's Mindset)

- **Assessment Question:** Does this animation serve a clear purpose (attention, delight, storytelling)?
- **Pass Criteria:** Animation has identified design intent (not random effects)
- **Fail Criteria:** Animation is purely decorative with no functional purpose

**Quality Standard 2: Imagination First, Code Later**
*"Great animations often start as imaginative ideas or sketches. Human animators gather visual inspiration (from award sites, art, film, real-world motion) and envision the end result before worrying about code."*
(Source: Section 1.1)

- **Assessment Question:** Does this animation show creative vision and imaginative design?
- **Pass Criteria:** Animation demonstrates inspiration from premium sources (Awwwards, agencies, etc.)
- **Fail Criteria:** Generic fade-in-up effects with no creative vision

**Quality Standard 3: Choreography and Timing**
*"Think in terms of choreography -- how elements move relative to each other in time. World-class animations often have multiple things happening in coordination (e.g. image fades out as text slides in)."*
(Source: Section 1.1)

- **Assessment Question:** Does this animation show intentional choreography and timing?
- **Pass Criteria:** Elements move with coordinated timing, overlaps, and rhythm
- **Fail Criteria:** Sequential, mechanical timing with no flow

**Quality Standard 4: Design Intent**
*"Always ask why an animation exists. Is it to draw attention to a feature? To create delight? To tell a story? Every motion should serve a purpose. This 'intentional animation' mindset is what separates expert work from random effects."*
(Source: Section 1.1)

- **Assessment Question:** WHY does this animation exist?
- **Pass Criteria:** Clear purpose identified and achieved
- **Fail Criteria:** Cannot articulate animation's purpose</action>

    <evidence required="true">
      **SECTION 1.1 QUALITY ASSESSMENT:**

      **Meaningful vs. Decorative:** [PASS/FAIL]
      - Purpose: [Identified design intent]
      - Justification: [Why this animation is meaningful]

      **Creative Vision:** [PASS/FAIL]
      - Inspiration: [Premium sources referenced]
      - Originality: [How this stands out]

      **Choreography:** [PASS/FAIL]
      - Coordination: [How elements move together]
      - Timing: [Intentional vs. mechanical]

      **Design Intent:** [PASS/FAIL]
      - WHY: [Animation's purpose]
      - Achievement: [How well purpose is achieved]

      **OVERALL SECTION 1.1 VERDICT:** [PASS/FAIL]
    </evidence>

    <validation>If ANY quality standard fails → Animation is NOT ELIGIBLE for pattern extraction</validation>
  </phase>

  <!-- PHASE 2: Section 5.5 - Performance Criteria (60fps Standard) -->
  <phase n="2" title="Deep-Research Section 5.5 - Performance Standards" required="true">
    <action>Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md

Extract and apply performance criteria for pattern eligibility:

**Performance Standard: 60fps Frame Budget**
*"To achieve ~16ms per frame budget: Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total."*
(Source: Section 5.5 - Optimize for 60fps)

- **Requirement:** Animation MUST achieve sustained 60fps (16ms per frame budget)
- **Breakdown:**
  - Scripting: < 8ms per frame
  - Style/Layout: < 4ms per frame
  - Paint: < 4ms per frame
- **Minimum FPS:** ≥ 55fps across ALL frames

**Optimization Check: autoAlpha Usage**
*"Use autoAlpha: This GSAP property animates opacity and toggles visibility to hidden when opacity hits 0. Using it (instead of opacity alone) prevents the browser from painting the element at 0 opacity (since hidden means it's not in rendering tree)."*
(Source: Section 5.5)

- **Assessment:** Does animation use `autoAlpha` where applicable?
- **Impact:** Paint cost savings for invisible elements

**Optimization Check: Draw Calls**
*"Reduce Draw Calls: If animating many small elements (like confetti or particles), consider drawing them to a single canvas and animating that canvas. One canvas with 100 particles is often cheaper than 100 DOM elements moving."*
(Source: Section 5.5)

- **Assessment:** If many elements, are draw calls optimized?
- **Pattern:** Canvas vs. DOM elements for particles</action>

    <evidence required="true">
      **SECTION 5.5 PERFORMANCE ASSESSMENT:**

      **60fps Achievement:** [PASS/FAIL]
      - Average FPS: [Measured FPS]
      - Minimum FPS: [Lowest FPS across frames]
      - Frame Budget Compliance: [16ms or less]

      **Frame Budget Breakdown:**
      - Scripting: [Xms] (Target: <8ms) [PASS/FAIL]
      - Style/Layout: [Xms] (Target: <4ms) [PASS/FAIL]
      - Paint: [Xms] (Target: <4ms) [PASS/FAIL]

      **Optimization Techniques Used:**
      - autoAlpha: [YES/NO]
      - Draw call optimization: [YES/NO/N/A]
      - Other optimizations: [List]

      **OVERALL SECTION 5.5 VERDICT:** [PASS/FAIL]
    </evidence>

    <validation>If performance standards not met → Animation requires optimization before pattern extraction</validation>
  </phase>

  <!-- PHASE 3: Section 6.1 - Accessibility Requirement (MANDATORY) -->
  <phase n="3" title="Deep-Research Section 6.1 - Accessibility Standards (MANDATORY)" required="true">
    <action>Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md

Extract and apply MANDATORY accessibility requirement:

**MANDATORY Accessibility Requirement: prefers-reduced-motion**
*"Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We MUST honor this."*
(Source: Section 6.1 - Respecting prefers-reduced-motion)

- **Requirement:** ALL patterns MUST include prefers-reduced-motion fallback
- **Detection:** `window.matchMedia('(prefers-reduced-motion: reduce)')` or `gsap.matchMedia()`
- **Fallback Options:**
  - Minimal: Reduce intensity (no parallax, less movement, only fades)
  - Disable: Skip non-essential animations entirely
  - Alternate: Instant changes or subtle cross-fades instead of slides

**Implementation Pattern:**
```javascript
gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
  // Reduced motion alternative
  document.querySelectorAll('.anim-element').forEach(el => el.classList.add('appear'));
});

gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  // Full animation
  gsap.timeline()...
});
```
(Pattern from Section 6.1)

**What to Reduce:**
*"Focus on things that cause large movement or continuous motion: Parallax effects: These can cause dizziness. Zooming or rotation: If something zooms a lot, maybe just fade it. Autoscrolling or scroll-jacking: If your animation auto-scrolls or rapidly changes content, definitely disable that under reduce motion."*
(Source: Section 6.1)

**Testing Protocol:**
*"Manually toggle your OS setting (on Mac: Settings > Accessibility > Display > Reduce Motion; on Windows: Settings > Display > Simplify and personalize > Show animations). Then use your site. All major animations should noticeably tone down."*
(Source: Section 6.1)</action>

    <evidence required="true">
      **SECTION 6.1 ACCESSIBILITY ASSESSMENT:**

      **prefers-reduced-motion Fallback:** [PASS/FAIL]
      - Implementation: [gsap.matchMedia() / window.matchMedia() / CSS @media]
      - Fallback Type: [Minimal / Disable / Alternate]
      - Elements Affected: [List what changes in reduced motion mode]

      **Reduction Strategy:**
      - Parallax: [Disabled/Reduced/N/A]
      - Zoom/Rotation: [Disabled/Reduced/N/A]
      - Autoscrolling: [Disabled/N/A]
      - Continuous Motion: [Disabled/Reduced/N/A]

      **Testing:**
      - OS Setting Toggled: [YES/NO]
      - Animations Tone Down: [YES/NO]
      - Verification: [Description of reduced motion experience]

      **OVERALL SECTION 6.1 VERDICT:** [PASS/FAIL - MANDATORY REQUIREMENT]
    </evidence>

    <validation critical="true">If prefers-reduced-motion NOT implemented → Animation is IMMEDIATELY REJECTED (non-negotiable)</validation>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH-BACKED QUALITY ASSESSMENT COMPLETE**

      **SECTION 1.1 - Pattern Quality Standards:**
      [Present 4 quality standards with PASS/FAIL for each]
      - Meaningful vs. Decorative: [verdict]
      - Creative Vision: [verdict]
      - Choreography: [verdict]
      - Design Intent: [verdict]
      **Verdict:** [PASS/FAIL]

      **SECTION 5.5 - Performance Standards:**
      [Present performance metrics]
      - 60fps Achievement: [PASS/FAIL]
      - Frame Budget: [breakdown]
      - Optimizations: [list]
      **Verdict:** [PASS/FAIL]

      **SECTION 6.1 - Accessibility Standards (MANDATORY):**
      [Present accessibility implementation]
      - prefers-reduced-motion: [PASS/FAIL]
      - Testing: [verified]
      **Verdict:** [PASS/FAIL]

      **OVERALL PATTERN ELIGIBILITY: [ELIGIBLE / NOT ELIGIBLE]**

      If NOT ELIGIBLE:
      - **Reason:** [Which standards failed]
      - **Action:** [Return to source for fixes OR reject extraction]

      If ELIGIBLE:
      - **Quality Tier:** [Premium / Professional / Solid]
      - **Proceed:** Animation meets research-backed standards for pattern extraction
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to extraction.</halt>

    <user-override>
      Only {user_name} can override research assessment with explicit "Override [o]" command.
      Agent CANNOT autonomously skip quality assessment.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END MANDATORY RESEARCH GATE ========== -->

<template-output>
quality_assessment_section_1_1,
quality_assessment_section_5_5,
quality_assessment_section_6_1,
pattern_eligibility_verdict,
quality_tier_assessment
</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 2: CATEGORIZATION USING SECTION 1.4 FRAMEWORK -->
<!-- ============================================================ -->

<step n="2" goal="Cinematographer: Research-Backed Pattern Categorization">

**🎥 "Categorizing pattern using Deep-Research Section 1.4 decision framework..."**

<action>Apply Section 1.4 categorization framework to determine pattern category based on GSAP features and plugins used</action>

**Categorization Framework from Section 1.4:**

*"The question is usually not 'GSAP or not?', but 'which GSAP features and plugins best achieve this?'"*
(Source: Section 1.4 - Deciding Between GSAP and Alternatives)

**Category Determination Criteria:**

**1. PRIMARY TECHNIQUE IDENTIFICATION**

Based on Section 1.4, identify which GSAP features dominate:

- **Scroll Effects** (`scroll-effects/`)
  - Uses: ScrollTrigger plugin
  - Patterns: Parallax, reveals, scroll choreography
  - Section 1.4 Reference: *"For scroll-based animations, ScrollTrigger beats manual scroll event handlers by handling scrub, pinning, etc., with minimal code."*

- **Text Animations** (`text-animations/`)
  - Uses: SplitText plugin
  - Patterns: Typewriter effects, reveals, character-by-character
  - Section 1.4 Reference: Premium plugin usage (FREE in GSAP 3.13+)

- **Premium Showcases** (`premium-showcases/`)
  - Uses: MorphSVG, ScrollSmoother, or plugin combinations
  - Patterns: Complex premium plugin integrations
  - Section 1.4 Reference: *"For morphing shapes, GSAP's MorphSVGPlugin simplifies what otherwise is complex SVG manipulations."*

- **Layout Transitions** (`layout-transitions/`)
  - Uses: Timeline choreography, FLIP technique
  - Patterns: Modal, accordion, state transitions
  - Section 1.4 Reference: Timeline system for complex sequencing

- **Framework-Specific Patterns**
  - `nextjs-patterns/`: Next.js 15 App Router, SSR-safe
  - `react-patterns/`: useGSAP hook, contextSafe, cleanup patterns
  - Section 1.4 Reference: *"Many award-winning sites built with React still use GSAP for complex animations"*

- **Interactive** (`interactive/`)
  - Uses: Draggable plugin, event-driven timelines
  - Patterns: Drag, magnetic cursor, interactive controls

- **Loading Sequences** (`loading-sequences/`)
  - Uses: Timeline choreography with delays/staggers
  - Patterns: Grid intro, entrance sequences

- **2025 Features** (`2025-features/`)
  - Uses: Observer, containerAnimation, latest GSAP features
  - Section 1.4 Reference: Leveraging cutting-edge capabilities

**2. CATEGORIZATION DECISION TREE**

<action>Apply systematic categorization:

**Step 1:** What is the PRIMARY interaction?
- Scroll-driven → Consider `scroll-effects/`
- User-triggered → Consider `interactive/`
- Auto-play → Consider `loading-sequences/` or other

**Step 2:** What premium plugins are used?
- MorphSVG, ScrollSmoother → `premium-showcases/`
- SplitText → `text-animations/`
- Draggable → `interactive/`

**Step 3:** Is it framework-specific?
- Next.js patterns → `nextjs-patterns/`
- React patterns → `react-patterns/`
- Vanilla → Continue to technique-based category

**Step 4:** What's the core technique?
- Timeline choreography for transitions → `layout-transitions/`
- Page load sequence → `loading-sequences/`
- 2025 GSAP features → `2025-features/`</action>

**Existing Pattern Library Structure (60 patterns currently):**

- `scroll-effects/` - Parallax, reveals, ScrollTrigger choreography (12 patterns)
- `text-animations/` - SplitText reveals, typewriter effects (8 patterns)
- `premium-showcases/` - ScrollSmoother, MorphSVG combinations (11 patterns)
- `layout-transitions/` - FLIP, modal, accordion (6 patterns)
- `nextjs-patterns/` - SSR-safe, route transitions, useGSAP (7 patterns)
- `interactive/` - Drag, magnetic, cursor-follow (6 patterns)
- `loading-sequences/` - Grid intro, entrance, hero sequence (6 patterns)
- `react-patterns/` - contextSafe, cleanup patterns (2 patterns)
- `2025-features/` - Observer, containerAnimation (2 patterns)

<ask>Based on Section 1.4 framework and the animation's GSAP features, which category should this pattern be in?

Provide:
1. PRIMARY technique/feature used
2. Premium plugins involved (if any)
3. Framework specificity (if any)
4. Recommended category
5. Justification based on Section 1.4 criteria</ask>

<action>Store response as pattern_category and categorization_justification</action>

<action>Cinematographer confirms category selection with research backing:

**🎥 "Category: {{pattern_category}}"**

**Categorization Justification (Section 1.4):**
- Primary Feature: {{primary_gsap_feature}}
- Premium Plugins: {{premium_plugins_used}}
- Framework: {{framework_specificity}}
- Section 1.4 Alignment: {{how_this_matches_framework}}</action>

<template-output>pattern_category, categorization_justification, primary_gsap_feature, premium_plugins_used</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 3: EXTRACT REUSABLE PATTERN (SECTION 2.2 STRUCTURE) -->
<!-- ============================================================ -->

<step n="3" goal="Director: Extract Reusable Core Using Section 2.2 Timeline Techniques">

**🎬 "Extracting reusable pattern structure using Deep-Research Section 2.2 modular timeline principles..."**

<action>Apply Section 2.2 reusable pattern principles to extract maintainable, modular code</action>

**Extraction Framework from Section 2.2:**

*"Understanding and leveraging these timeline techniques enables the creation of complex animation choreography that is time-accurate and maintainable. AI models should practice representing a multi-step animation as a timeline rather than a disjoint set of tweens -- this results in code that mirrors an animator's thought process."*
(Source: Section 2.2 - Mastering GSAP Timeline Techniques)

**PHASE 1: Identify Reusable Timeline Structure**

**Modular Timeline Pattern:**
*"You can treat a timeline as a tween by adding it to another timeline. This modular approach means each sub-timeline can be developed and tested separately."*
(Source: Section 2.2)

<action>Analyze animation structure:
- Is this a single timeline or nested timelines?
- Can this be modularized into sub-timelines?
- What's the timeline hierarchy?</action>

**Example Pattern (from Section 2.2):**
```javascript
const introTl = gsap.timeline();
// ... define intro sequence

const galleryTl = gsap.timeline();
// ... define gallery sequence

const master = gsap.timeline();
master.add(introTl)         // plays intro, then
      .add(galleryTl, "+=1"); // wait 1s after intro
```

**PHASE 2: Preserve Relative Positioning**

**Relative Positioning for Flexibility:**
*"Relative scheduling (using `"<"` or `"+="` notations) makes complex overlapping sequences easier to read and adjust. Instead of calculating actual times, you describe relationships."*
(Source: Section 2.2)

<action>Extract positioning patterns:
- `"<"` - Starts at same time as previous
- `"<0.5"` - Starts 0.5s after previous tween's start
- `"+="` - Relative time offset
- `"-="` - Overlap

Document all relative positioning used in the pattern.</action>

**PHASE 3: Extract Labels and Control Methods**

**Labels for Named Positions:**
*"Labels (named positions) can group multiple tweens start point. E.g., we could .addLabel("moveShapes", 0) and then schedule all shape animations at "moveShapes"."*
(Source: Section 2.2)

<action>Document label usage:
- What labels are used?
- What timeline sections do they mark?
- How do they aid reusability?</action>

**Control Methods:**
*"Timelines and tweens have control methods like .pause(), .resume(), .reverse(), .progress(value), .timeScale(value) etc."*
(Source: Section 2.2)

<action>Document control patterns:
- Does pattern use .reverse() for toggle animations?
- Does pattern use .progress() for scrubbing?
- Does pattern use .timeScale() for speed control?</action>

**PHASE 4: Strip Project-Specific Details**

<action>Remove project-specific elements while preserving Section 2.2 structure:

**Remove:**
- Specific class names (`.hero-section` → `.container`)
- Project IDs
- Hardcoded values → Configurable variables
- Business logic unrelated to animation
- API calls, data fetching

**Preserve (Section 2.2 Principles):**
- Timeline hierarchy and nesting
- Relative positioning patterns
- Labels and named positions
- Control methods usage
- Defaults and repeat patterns
- Easing curves (design decisions!)
- Stagger patterns
- Cleanup logic</action>

**PHASE 5: Ensure Maintainability**

*"This modular approach means each sub-timeline can be developed and tested separately. Many top-tier sites do this -- e.g., a timeline for each section of a page, then a master timeline to coordinate section transitions."*
(Source: Section 2.2)

<action>Verify pattern maintainability:
- Can this be easily modified?
- Are timeline sections clearly separated?
- Are magic numbers replaced with named variables?
- Is the timeline structure self-documenting?</action>

**GENERATE REUSABLE PATTERN CODE:**

<action>Generate clean, reusable code with:
1. Clear variable names
2. Inline comments explaining WHY (not WHAT)
3. Generic selectors
4. Configurable parameters
5. Complete example (imports, setup, cleanup)
6. Section 2.2 timeline structure principles applied
7. Modular sub-timelines (if applicable)
8. Relative positioning preserved
9. Labels documented
10. Control methods included</action>

<template-output>
reusable_pattern_structure,
timeline_hierarchy,
relative_positioning_patterns,
labels_used,
control_methods,
clean_code_example,
modular_timelines,
maintainability_notes
</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 4: DOCUMENT COMPREHENSIVE METADATA -->
<!-- ============================================================ -->

<step n="4" goal="Cinematographer: Document Complete Metadata with Research Citations">

**🎥 "Documenting comprehensive pattern metadata with research citations..."**

<critical>ALL patterns must include comprehensive metadata for quality, traceability, and reusability</critical>

**METADATA REQUIREMENTS:**

**1. Basic Information**
```yaml
id: pattern-{{pattern_name}}-2025
name: "{{Pattern Display Name}}"
category: "{{pattern_category}}"  # From Step 2
complexity: "simple" | "medium" | "medium-high" | "high"
gsap_version: "3.13.0+"  # ALWAYS 3.13+ (premium plugins FREE!)
plugins_required: [{{plugins_list}}]
premium_plugins_free: true  # If using premium plugins
is_wow_factor: true | false  # Based on Section 1.1 assessment
is_2025_standard: true
```

**2. Description & Inspiration**
```yaml
description: "{{Clear description of what pattern does and when to use it}}"
inspiration_source: "{{Agency/brand/technique this came from}}"
source_url: "{{URL if applicable}}"
source_citation: "{{Specific reference}}"
```

**3. Research Citations (CRITICAL - Traceability)**

<critical>MANDATORY: All patterns must cite research sources for traceability</critical>

```yaml
research_sources:
  deep_research:
    - section: "1.1"
      principle: "{{Quality standard applied from Section 1.1}}"
    - section: "1.4"
      principle: "{{Categorization framework from Section 1.4}}"
    - section: "2.2"
      principle: "{{Timeline technique from Section 2.2}}"
    - section: "5.5"
      principle: "{{Performance optimization from Section 5.5}}"
    - section: "6.1"
      principle: "prefers-reduced-motion fallback (MANDATORY)"

  archon_mcp:
    - source_id: "{{archon_source_id}}"
      technique: "{{What was learned from this source}}"

  websearch:
    - source: "{{Agency/Brand Name}} {{Year}}"
      url: "{{URL}}"
```

**4. Performance & Accessibility (From Steps 1-3)**

<action>Document performance metrics from Section 5.5 validation:

```yaml
performance_notes: "{{60fps achievement, optimizations used}}"
performance_metrics:
  average_fps: {{measured_avg_fps}}
  fps_4x_throttle: {{fps_under_throttle}}
  paint_time_ms: {{paint_time}}
  js_execution_ms: {{js_exec_time}}
  frame_budget_ms: {{frame_budget}}  # Should be ≤16ms

accessibility_notes: "{{prefers-reduced-motion implementation details}}"
accessibility_compliance:
  prefers_reduced_motion: true  # MANDATORY (Section 6.1)
  implementation: "gsap.matchMedia()"  # or window.matchMedia()
  fallback_type: "{{minimal/disable/alternate}}"
  keyboard_accessible: true | false
  wcag_aa_compliant: true
```</action>

**5. Code Examples**

<action>Generate comprehensive code examples:

```yaml
code_example: |
  {{Vanilla JavaScript example with:
    - Imports
    - Setup
    - Pattern implementation (from Step 3)
    - Cleanup
    - prefers-reduced-motion fallback (Section 6.1)
  }}

html_structure: |
  {{Required HTML structure with generic class names}}

react_usage: |
  {{React example with:
    - useGSAP hook
    - contextSafe (from Section 1.4 framework integration)
    - Cleanup in useEffect
    - prefers-reduced-motion
  }}

nextjs_usage: |
  {{Next.js 15 App Router example (if applicable):
    - 'use client' directive
    - SSR-safe implementation
    - useGSAP hook
    - Cleanup
  }}
```</action>

**6. Additional Metadata**

```yaml
created_date: "{{date}}"
tags: ["{{tag1}}", "{{tag2}}", "{{tag3}}"]
framework: "{{vanilla/react/nextjs/vue}}"
use_cases:
  - "{{Use case 1 - when to use this pattern}}"
  - "{{Use case 2}}"
  - "{{Use case 3}}"
why_premium: "{{Why this pattern is premium quality - agency references, Section 1.1 criteria met}}"

# Section 2.2 Timeline Structure Documentation
timeline_structure:
  modular: {{true/false}}
  nested_timelines: {{count}}
  labels_used: [{{label list}}]
  relative_positioning: {{true/false}}
  control_methods: [{{methods used}}]
```

<action>Compile ALL metadata from previous steps:
- Quality assessment (Step 1)
- Categorization (Step 2)
- Reusable structure (Step 3)
- Performance metrics
- Research citations
- Framework support</action>

<template-output>pattern_metadata_complete, research_citations_full, performance_documentation, accessibility_documentation</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 5: CREATE PATTERN YAML FILE -->
<!-- ============================================================ -->

<step n="5" goal="Director: Generate Complete Pattern YAML File">

**🎬 "Creating pattern YAML file with all metadata and research citations..."**

<action>Director generates complete pattern YAML file combining all metadata from Steps 1-4</action>

**Pattern File Structure:**

**File Name:** `{{pattern_name}}.pattern.yaml`
**Location:** `{pattern_library}/{{category}}/{{pattern_name}}.pattern.yaml`

**Complete YAML Template:**

```yaml
# Pattern Metadata
id: pattern-{{pattern_name}}-2025
name: "{{Pattern Display Name}}"
category: "{{category}}"
complexity: "{{complexity}}"
gsap_version: "3.13.0+"
plugins_required: {{plugins_list}}
premium_plugins_free: {{true_if_premium}}
is_wow_factor: {{from_section_1_1_assessment}}
is_2025_standard: true

# Description & Source
description: "{{pattern_description}}"
inspiration_source: "{{source}}"
source_url: "{{url}}"
source_citation: "{{citation}}"

# Research Sources (MANDATORY - Traceability)
research_sources:
  deep_research:
    - section: "1.1"
      principle: "{{Section 1.1 quality standard applied}}"
    - section: "1.4"
      principle: "{{Section 1.4 categorization framework}}"
    - section: "2.2"
      principle: "{{Section 2.2 timeline technique}}"
    - section: "5.5"
      principle: "{{Section 5.5 performance optimization}}"
    - section: "6.1"
      principle: "prefers-reduced-motion fallback (MANDATORY)"

  archon_mcp: {{archon_citations}}
  websearch: {{websearch_citations}}

# Performance Metrics (Section 5.5 Standards)
performance_notes: "{{performance_notes}}"
performance_metrics:
  average_fps: {{fps}}
  fps_4x_throttle: {{fps_throttled}}
  paint_time_ms: {{paint_time}}
  js_execution_ms: {{js_exec}}
  frame_budget_ms: {{frame_budget}}  # ≤16ms required

# Accessibility (Section 6.1 MANDATORY)
accessibility_notes: "{{accessibility_implementation_details}}"
accessibility_compliance:
  prefers_reduced_motion: true  # MANDATORY
  implementation: "gsap.matchMedia()"
  fallback_type: "{{minimal/disable/alternate}}"
  keyboard_accessible: {{true/false}}
  wcag_aa_compliant: true

# Code Examples
code_example: |
  {{clean_code_example_from_step_3}}

html_structure: |
  {{html_structure}}

react_usage: |
  {{react_example_with_useGSAP}}

nextjs_usage: |
  {{nextjs_example_if_applicable}}

# Timeline Structure (Section 2.2)
timeline_structure:
  modular: {{true/false}}
  nested_timelines: {{count}}
  labels_used: [{{labels}}]
  relative_positioning: {{true/false}}
  control_methods: [{{methods}}]

# Additional Metadata
created_date: "{{date}}"
tags: {{tags_array}}
framework: "{{framework}}"
use_cases:
  - "{{use_case_1}}"
  - "{{use_case_2}}"
  - "{{use_case_3}}"
why_premium: "{{why_premium_based_on_section_1_1}}"
```

<action>Generate complete YAML content with ALL fields populated</action>

<template-output>pattern_yaml_content</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 6: SAVE TO PATTERN LIBRARY -->
<!-- ============================================================ -->

<step n="6" goal="Director: Save Pattern to Library">

**🎬 "Saving pattern to library..."**

<action>Director saves pattern YAML file to appropriate category directory</action>

**File Path:** `{pattern_library}/{{category}}/{{pattern_name}}.pattern.yaml`

<action>Write pattern YAML file to pattern library using Write tool</action>

**Pattern Library Update:**
- **Category:** {{category}}
- **File Name:** {{pattern_name}}.pattern.yaml
- **Pattern Count:** 60 → {{new_count}} (library growing!)

<action>Confirm file written successfully and verify:
- File exists at correct path
- YAML is valid
- All metadata complete
- Research citations present</action>

<action>Generate pattern library status summary:
- Total patterns in library (increment from 60)
- Category breakdown (updated counts per category)
- Pattern file location (full path)
- Availability status (ready for implement-from-pattern workflow)</action>

<template-output>pattern_file_path, pattern_library_count, pattern_library_status</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 7: CONFIRM & CELEBRATE -->
<!-- ============================================================ -->

<step n="7" goal="Director: Confirm Pattern Harvest Complete">

**🎬 "Pattern successfully harvested and validated against research standards!"**

<action>Director confirms pattern is available for future use with comprehensive summary</action>

**HARVEST SUMMARY:**

**Pattern Details:**
- **Name:** {{pattern_name}}
- **Category:** {{pattern_category}}
- **Complexity:** {{complexity}}
- **Quality Tier:** {{quality_tier_from_section_1_1}}

**Research-Backed Validation:**
- **Section 1.1 (Quality):** ✅ PASS
  - Meaningful motion: {{meaningful_verdict}}
  - Design intent: {{design_intent}}
  - Choreography: {{choreography_quality}}

- **Section 1.4 (Categorization):** ✅ {{category}} ({{primary_gsap_feature}})

- **Section 2.2 (Structure):** ✅ Modular timeline structure
  - Nested timelines: {{count}}
  - Relative positioning: {{yes/no}}
  - Labels: {{labels_used}}

- **Section 5.5 (Performance):** ✅ PASS
  - Average FPS: {{fps}}
  - Frame budget: {{frame_budget}}ms (≤16ms ✓)

- **Section 6.1 (Accessibility):** ✅ PASS (MANDATORY)
  - prefers-reduced-motion: ✅ Implemented
  - Fallback: {{fallback_type}}

**Research Sources:**
- Deep-Research: 5 sections (1.1, 1.4, 2.2, 5.5, 6.1)
- Archon MCP: {{archon_source_count}} sources
- WebSearch: {{websearch_count}} examples

**Use Cases:**
{{use_cases_list}}

**Pattern Library Status:**
- **Total Patterns:** {{new_total_count}}
- **Category:** {{category}} ({{category_pattern_count}} patterns)
- **Location:** {pattern_library}/{{category}}/{{pattern_name}}.pattern.yaml

**Next Steps:**
- Pattern immediately available in implement-from-pattern workflow
- Pattern searchable by category, tags, and technique
- Pattern validated against research-backed quality standards

<action>Generate comprehensive harvest summary including:
- Pattern name, category, complexity, quality tier
- Research-backed validation summary (all 5 sections)
- Performance metrics summary
- Research sources count (Deep-Research, Archon, WebSearch)
- Use cases list
- Pattern library status (total count, category count)
- Next steps for using the pattern
- Contribution to library growth</action>

<ask>Pattern successfully harvested! Continue? [done]</ask>

<template-output>harvest_summary_complete</template-output>
</step>

</workflow>

## Quality Standards Reference

**Pattern Quality Requirements (Research-Backed):**

**From Section 1.1 - Animator's Mindset:**
- ✅ Animation is MEANINGFUL, not decorative
- ✅ Clear design intent identified and achieved
- ✅ Choreography shows intentional timing and coordination
- ✅ Creative vision demonstrated (not generic effects)

**From Section 1.4 - Decision Framework:**
- ✅ Pattern categorized by GSAP features/plugins used
- ✅ Technique appropriateness validated
- ✅ Framework integration documented

**From Section 2.2 - Timeline Techniques:**
- ✅ Modular timeline structure preserved
- ✅ Code is maintainable and reusable
- ✅ Relative positioning patterns documented
- ✅ Labels and control methods included

**From Section 5.5 - Performance Standards:**
- ✅ 60fps sustained (16ms frame budget)
- ✅ Performance metrics documented (FPS, paint, scripting)
- ✅ Optimizations applied (autoAlpha, draw calls)

**From Section 6.1 - Accessibility (MANDATORY):**
- ✅ prefers-reduced-motion fallback implemented
- ✅ gsap.matchMedia() or window.matchMedia() used
- ✅ Tested with OS setting toggle
- ✅ Fallback type documented (minimal/disable/alternate)

## Success Metrics

**Pattern Harvest Success:**
- ✅ Pattern YAML file created with ALL required metadata
- ✅ Pattern validated against 5 Deep-Research sections
- ✅ Pattern categorized using Section 1.4 framework
- ✅ Pattern structure follows Section 2.2 principles
- ✅ Pattern meets Section 5.5 performance standards
- ✅ Pattern includes Section 6.1 accessibility (MANDATORY)
- ✅ Pattern quality matches existing 60 patterns
- ✅ Pattern library count incremented
- ✅ Pattern immediately available for reuse

**Integration:**
- **Fed By:** animation-production workflow (successful animations)
- **Feeds Into:** implement-from-pattern workflow (quick implementation)
- **Library Growth:** Organic pattern accumulation from research-validated projects
