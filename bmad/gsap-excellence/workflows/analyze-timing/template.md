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

### Archon MCP (GSAP Knowledge Base)

**Queries Executed:**
1. `rag_search_knowledge_base("easing curves {{desired_feel}}")`
   - **Finding:** {{archon_query_1_finding}}
   - **Source:** {{archon_query_1_sources}}

2. `rag_search_knowledge_base("timing principles {{animation_type}}")`
   - **Finding:** {{archon_query_2_finding}}
   - **Source:** {{archon_query_2_sources}}

3. `rag_search_code_examples("bezier curves {{animation_type}}")`
   - **Finding:** {{archon_query_3_finding}}
   - **Source:** {{archon_query_3_sources}}

4. `rag_search_knowledge_base("motion design fundamentals")`
   - **Finding:** {{archon_query_4_finding}}
   - **Source:** {{archon_query_4_sources}}

**Priority Sources Consulted:**
- ✅ b9f6b322298feb21 (gsap.com official docs)
- ✅ 1e5cc3bd5125be3c (Codrops tutorials)
- ✅ 90c2ef5e8fa816b7 (FreeFrontend examples)

### Deep-Research Frameworks

**Sections Applied:**
- **Section 1.2** - Visual Inspiration Translation
  - **Insight:** {{section_1_2_insight}}
- **Section 2.1** - Core GSAP Concepts: Tween, Timeline, Stagger, Ease
  - **Insight:** {{section_2_1_insight}}
- **Section 2.2** - Mastering Timeline Techniques
  - **Insight:** {{section_2_2_insight}}

**Disney Animation Principles:**
- **Timing (Principle #8):** {{disney_timing_principle_applied}}
- **Ease In/Out (Principle #6):** {{disney_ease_principle_applied}}

### WebSearch (if used)

**Queries:** {{websearch_queries_if_used}}
**Findings:** {{websearch_key_findings}}

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
