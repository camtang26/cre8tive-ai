# Timing & Easing Analysis Report

**Generated:** {{date}}
**Animation Type:** {{animation_type}}
**Desired Feel:** {{desired_feel}}
**Cinematographer Workflow:** analyze-timing
**Analyzed By:** The Cinematographer (GSAP Excellence Module)

---

## Executive Summary

**Animation:** {{animation_type}}
**Goal:** Achieve {{desired_feel}} feeling through precise timing and easing

**Primary Recommendation:** {{primary_recommendation_one_sentence}}

**Key Insight:** {{most_important_research_finding}}

---

## Recommended Timing

### Primary Recommendation

**Easing Curve:** {{easing_name}}
**GSAP Syntax:** `ease: "{{gsap_ease}}"`
**Duration:** {{duration}}s
**Rationale:** {{why_this_timing_works}}

**GSAP Code Example:**
```javascript
gsap.to(".element", {
  {{properties_being_animated}},
  duration: {{duration}},
  ease: "{{gsap_ease}}"
});
```

**Visual Feel:**
{{describe_how_this_looks_feels_in_motion}}

---

## Alternative Options

### Option 2: {{alternative_1_name}}
- **Easing:** `{{alternative_1_ease}}`
- **Duration:** {{alternative_1_duration}}s
- **Trade-off:** {{alternative_1_tradeoff}}
- **When to use:** {{alternative_1_scenarios}}

### Option 3: {{alternative_2_name}}
- **Easing:** `{{alternative_2_ease}}`
- **Duration:** {{alternative_2_duration}}s
- **Trade-off:** {{alternative_2_tradeoff}}
- **When to use:** {{alternative_2_scenarios}}

---

## Motion Analysis

### Why This Timing Works

{{detailed_explanation_based_on_research}}

**Motion Principles:**
- **Disney Principle #8 (Timing):** {{how_speed_duration_supports_motion}}
- **Disney Principle #6 (Ease In/Out):** {{how_acceleration_deceleration_feels_natural}}
- **Easing Rationale:** {{why_this_curve_matches_desired_feel}}
- **Duration Rationale:** {{why_this_length_feels_right}}
- **Coordination:** {{if_multiple_elements_how_timing_coordinates}}

### Frame-by-Frame Breakdown

```
Timeline: {{duration}}s animation with {{easing_name}}

Frame 0 (0%):    {{initial_state}}
Frame X (25%):   {{quarter_way_point_describe_motion}}
Frame Y (50%):   {{halfway_point_describe_motion}}
Frame Z (75%):   {{three_quarter_point_describe_motion}}
Frame N (100%):  {{final_state}}

Key moments:
- {{describe_important_timing_beats}}
```

### Film Principles Applied

**Walter Murch's Rule of Six (adapted):**
1. **Emotion:** {{how_timing_conveys_feeling}}
2. **Rhythm:** {{visual_rhythm_created}}
3. **Eye Trace:** {{how_timing_guides_viewer_attention}}

---

## Premium Reference Examples

### Example 1: {{example_1_name}}
- **URL:** {{example_1_url}}
- **Timing Used:** {{example_1_easing_and_duration}}
- **Quality Level:** {{example_1_quality_basic_professional_premium}}
- **What Makes It Premium:** {{example_1_why_timing_feels_excellent}}
- **Applicable Patterns:** {{example_1_what_we_can_learn}}

### Example 2: {{example_2_name}}
- **URL:** {{example_2_url}}
- **Timing Used:** {{example_2_easing_and_duration}}
- **Quality Level:** {{example_2_quality_basic_professional_premium}}
- **What Makes It Premium:** {{example_2_why_timing_feels_excellent}}
- **Applicable Patterns:** {{example_2_what_we_can_learn}}

---

## Research Citations

### Multi-Source Research Summary

**Total Sources Consulted:** {{number_of_sources}}
**Frameworks Applied:** {{framework_count}}
**Research Confidence:** HIGH - Based on systematic multi-source validation

---

### Archon MCP (GSAP Knowledge Base - 89 Sources)

**Query Protocol: Systematic 4-tier search executed**

#### Query 1: Easing Curves for Desired Feel
- **Query:** `rag_search_knowledge_base("easing curves {{desired_feel}}")`
- **Source Filter:** b9f6b322298feb21 (gsap.com official docs)
- **Match Count:** 8 results
- **Finding:** {{archon_query_1_finding}}
- **Key Sources:** {{archon_query_1_sources}}
- **Relevance:** PRIMARY - Directly informs easing curve selection
- **Application:** Used in Section 3.1 (Easing Curve Selection)

#### Query 2: Timing Principles for Animation Type
- **Query:** `rag_search_knowledge_base("timing principles {{animation_type}}")`
- **Source Filter:** b9f6b322298feb21 (gsap.com official docs)
- **Match Count:** 6 results
- **Finding:** {{archon_query_2_finding}}
- **Key Sources:** {{archon_query_2_sources}}
- **Relevance:** PRIMARY - Informs duration recommendations
- **Application:** Used in Section 3.2 (Duration Selection)

#### Query 3: Bezier Curves & Custom Easing
- **Query:** `rag_search_code_examples("bezier curves {{animation_type}}")`
- **Match Count:** 6 code examples
- **Finding:** {{archon_query_3_finding}}
- **Key Sources:** {{archon_query_3_sources}}
- **Relevance:** SECONDARY - For advanced custom easing if needed
- **Application:** Used in Section 3.5 (Custom Bezier Curves)

#### Query 4: Motion Design Fundamentals
- **Query:** `rag_search_knowledge_base("motion design fundamentals")`
- **Source Filter:** b9f6b322298feb21 (gsap.com official docs)
- **Match Count:** 5 results
- **Finding:** {{archon_query_4_finding}}
- **Key Sources:** {{archon_query_4_sources}}
- **Relevance:** FOUNDATIONAL - Disney principles, motion theory
- **Application:** Used throughout motion analysis (Principles #6 & #8)

**Priority Sources Successfully Queried:**
- ✅ **b9f6b322298feb21** (gsap.com official docs) - PRIMARY SOURCE
  - Authoritative easing documentation
  - API reference for all ease functions
  - Official best practices
- ✅ **1e5cc3bd5125be3c** (Codrops tutorials) - SECONDARY SOURCE
  - Premium easing tutorials
  - Advanced pattern examples
  - Visual easing comparisons
- ✅ **90c2ef5e8fa816b7** (FreeFrontend examples) - SECONDARY SOURCE
  - Real-world easing examples
  - Production pattern library
  - Community-validated approaches

---

### Deep-Research Frameworks (2.2M+ Word Knowledge Base)

**Knowledge Base Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/`
**Sections Analyzed:** 3 (1.2, 2.1, 2.2)

#### Section 1.2: Visual Inspiration → Technical Translation
- **File:** `02-12-visual-inspiration-technical-translation-workflow.md`
- **Purpose:** Translating abstract timing "feel" into concrete GSAP implementation
- **Frameworks Applied:**
  1. **5-Step Visual Translation Workflow:**
     - Gather Inspiration → Deconstruct Effect → Choreograph on Paper → Choose Technique → Prototype
  2. **GSAP vs CSS Decision Framework:**
     - *"Use CSS for simple static transitions... GSAP for sequenced, synchronized or complex animations"*
  3. **Visual + Semantic Mapping:**
     - *"Always maintain a visual + semantic mapping. For every imagined motion, have a plan for its code implementation."*
- **Key Insight:** {{section_1_2_insight}}
- **Application in This Analysis:** Used to translate {{desired_feel}} into technical easing parameters

#### Section 2.1: Core GSAP Concepts (PRIMARY SECTION)
- **File:** `05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
- **Purpose:** Easing curves, duration guidelines, timing theory (CORE for timing analysis)
- **Frameworks Applied:**
  1. **Easing Categories by Purpose:**
     - Smooth & Subtle: power1.out, power2.inOut, sine.inOut
     - Dramatic & Bold: power4.out, expo.out, circ.inOut
     - Bouncy & Playful: back.out(1.2-1.7), elastic.out, bounce.out
     - Quick & Snappy: power2.out + short duration
     - Slow & Cinematic: power2.inOut, power3.out + long duration
  2. **Disney Animation Principles:**
     - **Principle #6 (Ease In/Out):** *"Nothing in nature starts or stops instantaneously. Acceleration and deceleration create natural, believable motion."*
     - **Principle #8 (Timing):** *"The speed of an action defines its weight and size. Fast actions feel light, slow actions feel heavy."*
  3. **Tween vs Timeline Decision Framework:**
     - *"Always consider using a gsap.timeline for multi-step animations. It provides far more readability and control than scattered tweens with delays."*
  4. **Stagger Pattern Syntax:**
     - Simple: `stagger: 0.1` (sequential offset)
     - Advanced: `stagger: { each: 0.2, from: "center", grid: "auto", ease: "power1.in" }` (complex patterns)
- **Key Insights:**
  - *"Premium sites rarely stick to default; they tailor easing per animation"*
  - *"Use power4.out or expo.out for a dramatic, fast-to-slow entrance"*
  - *"Use power2.inOut for gentle, smooth transitions"*
  - *"Use bounce.out or elastic.out for playful, bouncy elements"*
  - *"GSAP uses a ticker (built on requestAnimationFrame) to update values every frame; by default it attempts 60fps"*
- **Key Insight for This Analysis:** {{section_2_1_insight}}
- **Application:** Used extensively in Section 3.1 (Easing Selection) and 3.2 (Duration)

#### Section 2.2: Mastering Timeline Techniques
- **File:** `06-22-mastering-gsap-timeline-techniques.md`
- **Purpose:** Coordinated timing for multi-element animations
- **Frameworks Applied:**
  1. **Relative Positioning Syntax:**
     - `"<"` - Start with previous tween (simultaneous)
     - `"<0.5"` - Start 0.5s after previous tween's start (overlap)
     - `"+=0.3"` - Start 0.3s after previous tween finishes (delay)
     - Labels: `.addLabel("marker")` for synchronized timing points
  2. **Nested Timeline Composition:**
     - Modular approach: Build sub-timelines, compose into master timeline
     - *"Represent a multi-step animation as a timeline rather than a disjoint set of tweens - this results in code that mirrors an animator's thought process"*
  3. **Control Methods:**
     - `.pause()`, `.resume()`, `.reverse()` - Timeline playback control
     - `.timeScale(value)` - Dynamic speed changes (can be tweened!)
     - `.seek(timeOrLabel)`, `.progress(0-1)` - Scrubbing/positioning
  4. **Defaults and Repeat:**
     - `defaults: { duration: 1, ease: "power2.out" }` - Avoid repetition
     - `repeat: -1`, `yoyo: true` - Looping animations
     - `repeatRefresh: true` - Recalculate function-based values on each loop
- **Key Insight for This Analysis:** {{section_2_2_insight}}
- **Application:** Used in Section 3.3 (Timeline Coordination) for multi-element timing

**Disney Animation Principles Applied:**
- **Timing (Principle #8):** {{disney_timing_principle_applied}}
  - How duration conveys weight and importance
  - Fast timing = light/responsive, Slow timing = heavy/significant
- **Ease In/Out (Principle #6):** {{disney_ease_principle_applied}}
  - Why acceleration/deceleration creates natural motion
  - How easing curves mimic real-world physics

---

### WebSearch (2024-2025 Premium Examples) - Conditional

**Fallback research only if Archon + Deep-Research insufficient**

**Queries Executed:** {{websearch_queries_if_used}}

**Key Findings:** {{websearch_key_findings}}

**Premium Examples Discovered:**
{{#if websearch_used}}
- Example 1: [URL] - [Timing pattern] - [Why it's premium]
- Example 2: [URL] - [Easing curve] - [Quality indicators]
{{/if}}

**Application:** Used to validate Archon patterns against current (2025) industry trends

---

## Implementation Notes

### GSAP Code (Copy-Paste Ready)

**Single Element:**
```javascript
gsap.to(".element", {
  {{properties}}: {{values}},
  duration: {{duration}},
  ease: "{{easing}}",
  onComplete: () => console.log("Animation complete")
});
```

**Multiple Elements with Stagger:**
```javascript
gsap.to(".elements", {
  {{properties}}: {{values}},
  duration: {{duration}},
  ease: "{{easing}}",
  stagger: {{suggested_stagger_value}}
});
```

**With ScrollTrigger (if applicable):**
```javascript
gsap.to(".element", {
  {{properties}}: {{values}},
  duration: {{duration}},
  ease: "{{easing}}",
  scrollTrigger: {
    trigger: ".element",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
```

### Plugin Requirements

**Required Plugins:** {{plugin_list_if_any}}
{{#if_plugins_needed}}
- {{plugin_name}}: {{why_needed}} (FREE in GSAP 3.13+)
{{/if_plugins_needed}}

**GSAP Version:** 3.13.0+ recommended (for FREE premium plugins)

### Performance Considerations

- **will-change:** {{suggest_css_properties_to_optimize}}
- **Hardware Acceleration:** {{transform_opacity_vs_layout_properties}}
- **Mobile:** {{mobile_specific_timing_adjustments_if_needed}}

### Accessibility

**prefers-reduced-motion:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.to(".element", {
  {{properties}}: {{values}},
  duration: prefersReducedMotion ? 0 : {{duration}},
  ease: prefersReducedMotion ? "none" : "{{easing}}"
});
```

---

## Quality Assessment

**Pattern Quality Level:** {{basic_professional_premium_award_winning}}

**Quality Indicators Present:**
{{list_indicators_that_make_this_premium}}
- ✅ {{indicator_1}}
- ✅ {{indicator_2}}
- ✅ {{indicator_3}}

**Confidence Level:** {{high_medium}} - Based on {{number_of_sources}} sources and {{framework_count}} frameworks applied

---

## Next Steps

**Recommended Actions:**
1. {{recommended_action_1}}
2. {{recommended_action_2}}
3. {{recommended_action_3}}

**Testing Protocol:**
- Test at different speeds (timeScale) to find sweet spot
- Test on mobile devices (may need faster timing)
- Test with accessibility preferences enabled
- Get user feedback on feeling (does it match {{desired_feel}}?)

---

**Cinematographer's Note:**

*"Perfect timing is what separates good animations from great ones. This analysis is research-backed, not guesswork. Every recommendation is grounded in motion design principles and premium patterns."*

**Film Principle Applied:** Every cut, every movement, every pause has purpose.

---

*🎥 Generated using GSAP Excellence Module - Research-Backed Timing Analysis*
*"Timing is storytelling." - The Cinematographer*
