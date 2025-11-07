# Motion Analysis & Technical Specification

**Generated:** {{date}}
**Visual Reference:** {{visual_reference}}
**Target Elements:** {{elements_needing_treatment}}
**Cinematographer Workflow:** analyze-motion (Section 1.2 Framework)
**Analyzed By:** The Cinematographer (GSAP Excellence Module)

---

## Motion Overview

**Visual Inspiration:** {{visual_reference_summary}}

**What Makes It Special:**
{{what_catches_eye_detailed}}

**Target Application:**
{{elements_and_context}}

**Key Characteristics Identified:**
- {{characteristic_1}}
- {{characteristic_2}}
- {{characteristic_3}}

---

## Visual Translation (Section 1.2 - 5-Step Framework)

### Step 1: Inspiration Gathered ✅
- **Visual Reference:** {{visual_reference}}
- **Identified Appeal:** {{what_catches_eye}}

### Step 2: Effect Deconstructed ✅

**Components:**
{{deconstruction_components_list}}

**Properties Changing:**
{{deconstruction_properties_list}}
- x: {{x_changes}}
- y: {{y_changes}}
- scale: {{scale_changes}}
- opacity: {{opacity_changes}}
- rotation: {{rotation_changes}}
- other: {{other_properties}}

**Sequence:**
{{deconstruction_sequence_analysis}}

**Timing/Feel:**
{{deconstruction_timing_analysis}}

### Step 3: Choreography Storyboard ✅

```
{{choreography_sequence_text_based}}

Example:
1) Element A: Scale from 0 to 1 (0-0.5s, back.out(1.4))
2) Element B: Fade in + slide up (0.3-0.8s, power2.out)
3) Element C: Rotate + fade (0.5-1.2s, expo.out)
... [complete sequence]
```

**Timing Map:**
```
Timeline visualization:
0s    0.5s    1.0s    1.5s    2.0s
|--A--|
   |--B---|
      |-----C-----|
```

**Overlaps Identified:**
{{choreography_overlaps_analysis}}

### Step 4: Technical Approach Chosen ✅

**GSAP Structure:** {{gsap_structure_timeline_or_tweens}}

**Rationale:** {{why_this_structure}}

**ScrollTrigger:** {{scrolltrigger_needed_yes_no}}

**Plugins Required:**
{{plugins_list_with_free_notation}}
{{#if_plugins}}
- {{plugin_name}}: {{reason}} (FREE in GSAP 3.13+)
{{/if_plugins}}

**GSAP vs CSS Decision:**
{{gsap_vs_css_rationale}}

### Step 5: Prototype Plan ✅

**Implementation Strategy:**
{{prototype_approach_detailed}}

**Potential Challenges:**
- {{challenge_1}}
- {{challenge_2}}
- {{challenge_3}}

**Iteration Strategy:**
{{iteration_testing_plan}}

---

## Technical Analysis

### Properties Being Animated

**Complete Property List:**
```javascript
{
  {{property_1}}: {{start_value}} → {{end_value}},
  {{property_2}}: {{start_value}} → {{end_value}},
  {{property_3}}: {{start_value}} → {{end_value}},
  // ... [all properties]
}
```

**Property Optimization:**
- **GPU-Accelerated:** {{gpu_accelerated_properties}}
- **Layout-Triggering:** {{layout_triggering_properties_to_avoid}}
- **will-change:** {{will_change_recommendation}}

### Timing & Sequencing

**Duration Breakdown:**
- Total animation: {{total_duration}}s
- Per-element ranges: {{duration_ranges}}
- Stagger (if applicable): {{stagger_value}}s

**Easing Strategy:**
{{easing_choices_per_element}}

**Sequence Coordination:**
{{how_elements_coordinate}}

---

## Implementation Pseudocode

**Structure:**
```javascript
// {{gsap_structure}} approach

{{#if_timeline}}
const tl = gsap.timeline({
  defaults: { duration: {{default_duration}}, ease: "{{default_ease}}" }
});

tl.to(".elementA", { {{propertiesA}} })
  .to(".elementB", { {{propertiesB}} }, "{{position_parameter}}")
  .to(".elementC", { {{propertiesC}} }, "{{position_parameter}}");
{{/if_timeline}}

{{#if_tweens}}
gsap.to(".element", { {{properties}}, duration: {{duration}}, ease: "{{ease}}" });
{{/if_tweens}}
```

**Stagger Pattern (if applicable):**
```javascript
gsap.to(".elements", {
  {{properties}},
  stagger: {
    each: {{stagger_each}},
    from: "{{stagger_from}}",
    {{#if_grid}}grid: "auto",{{/if_grid}}
    ease: "{{stagger_ease}}"
  }
});
```

**ScrollTrigger Integration (if applicable):**
```javascript
ScrollTrigger.create({
  trigger: "{{trigger_element}}",
  start: "{{start_position}}",
  end: "{{end_position}}",
  {{#if_scrub}}scrub: {{scrub_value}},{{/if_scrub}}
  {{#if_pin}}pin: true,{{/if_pin}}
  animation: {{animation_reference}}
});
```

---

## Complete GSAP Implementation

**Copy-Paste Ready Code:**

```javascript
{{complete_gsap_code_commented}}

// Example structure:
gsap.registerPlugin(ScrollTrigger{{#if_other_plugins}}, {{other_plugins}}{{/if_other_plugins}});

{{#if_timeline}}
// Timeline approach for coordinated motion
const motionTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "power2.out" },
  {{#if_scrolltrigger}}
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
    end: "bottom center",
    scrub: 1
  }
  {{/if_scrolltrigger}}
});

// Add animations to timeline
motionTimeline
  .from(".hero-bg", { scale: 0.8, opacity: 0 })
  .from(".hero-title", { y: 100, opacity: 0 }, "-=0.3")
  .from(".hero-cta", { scale: 0, rotation: 45 }, "-=0.2");
{{/if_timeline}}

{{#if_stagger}}
// Stagger for multiple elements
gsap.from(".cards", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: {
    each: 0.15,
    from: "start",
    ease: "power2.inOut"
  }
});
{{/if_stagger}}

{{#if_custom_plugin_usage}}
// Custom plugin usage
{{plugin_specific_code}}
{{/if_custom_plugin_usage}}
```

**HTML Structure Expected:**
```html
{{expected_html_structure}}
```

**CSS Prerequisites:**
```css
{{css_prerequisites}}
```

---

## Pattern References

### Archon MCP Patterns Adapted

**Primary Pattern:** {{primary_pattern_name}}
- **Source:** {{primary_pattern_source}}
- **Adaptation:** {{how_adapted_for_user}}
- **Code Reference:** {{code_snippet_or_url}}

**Supporting Patterns:**
1. {{pattern_1_name}}: {{pattern_1_application}} (Source: {{source}})
2. {{pattern_2_name}}: {{pattern_2_application}} (Source: {{source}})
3. {{pattern_3_name}}: {{pattern_3_application}} (Source: {{source}})

### Deep-Research Frameworks Applied

**Section 1.2 - Visual Translation:**
- **Insight:** {{section_1_2_key_insight}}
- **Application:** {{how_5_step_framework_applied}}

**Section 2.1 - Core GSAP Concepts:**
- **Insight:** {{section_2_1_key_insight}}
- **Application:** {{how_tween_timeline_stagger_applied}}

**Section 2.2 - Timeline Techniques (if applicable):**
- **Insight:** {{section_2_2_key_insight}}
- **Application:** {{how_timeline_choreography_applied}}

### Premium Examples Referenced

**Example 1:** {{premium_example_1_name}}
- **URL:** {{premium_example_1_url}}
- **Pattern:** {{what_pattern_they_used}}
- **Quality Level:** {{basic_professional_premium_award_winning}}
- **Takeaway:** {{what_we_learned}}

**Example 2:** {{premium_example_2_name}}
- **URL:** {{premium_example_2_url}}
- **Pattern:** {{what_pattern_they_used}}
- **Quality Level:** {{quality_level}}
- **Takeaway:** {{what_we_learned}}

---

## Implementation Guidance

### Prototyping Recommendations

**Step 1: Minimal Structure**
{{minimal_html_css_setup}}

**Step 2: Core Animation**
{{implement_core_motion_first}}

**Step 3: Timing Refinement**
{{test_easing_duration_independently}}

**Step 4: Coordination**
{{add_complexity_and_coordination}}

**Step 5: Integration**
{{integrate_into_full_site}}

### Testing Strategy

**Visual Testing:**
- Test at different screen sizes (responsive behavior)
- Test with different content lengths (dynamic heights)
- Test on target browsers (Chrome, Firefox, Safari)

**Performance Testing:**
- Monitor FPS (should maintain 60fps)
- Check for jank on lower-end devices
- Measure animation start time (should be <100ms)

**Accessibility Testing:**
- Verify prefers-reduced-motion fallback
- Test keyboard navigation (if interactive)
- Ensure motion doesn't cause vestibular issues

### Performance Considerations

**Optimizations Applied:**
- **will-change:** `{{will_change_properties}}`
- **GPU Acceleration:** Using transform/opacity where possible
- **Property Choices:** {{property_optimization_notes}}

**Potential Issues:**
- {{potential_performance_issue_1}}
- {{potential_performance_issue_2}}

**Solutions:**
{{performance_solutions}}

### Accessibility

**prefers-reduced-motion Implementation:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable or reduce animations
  {{reduced_motion_fallback_code}}
} else {
  // Full animation implementation
  {{full_animation_code}}
}
```

**Alternative Approaches:**
- Instant state changes (duration: 0)
- Subtle fades only (avoid complex motion)
- User control toggle (let users disable)

---

## Research Citations

### Archon MCP Sources

**Pattern Searches:**
1. `rag_search_code_examples("{{motion_type}} pattern")`
   - **Finding:** {{finding_1}}
   - **Sources:** {{sources_1}}

2. `rag_search_knowledge_base("visual effect {{specific_motion}}")`
   - **Finding:** {{finding_2}}
   - **Sources:** {{sources_2}}

3. `rag_search_knowledge_base("{{primary_property}} animation patterns")`
   - **Finding:** {{finding_3}}
   - **Sources:** {{sources_3}}

**Priority Sources Consulted:**
- ✅ b9f6b322298feb21 (gsap.com official docs)
- ✅ 1e5cc3bd5125be3c (Codrops tutorials)
- ✅ 90c2ef5e8fa816b7 (FreeFrontend examples)
- ✅ 020e9f31a8c5cdb7 (CodePen collections)

### Deep-Research Sections

- **Section 1.2** - Visual Inspiration Translation (5-step framework)
- **Section 2.1** - Core GSAP Concepts (tween, timeline, stagger, ease)
- **Section 2.2** - Timeline Techniques (if coordination)

### WebSearch (if used)

**Queries:** {{websearch_queries}}
**Findings:** {{websearch_findings}}

---

## Quality Assessment

**Implementation Quality:** {{basic_professional_premium_award_winning}}

**Quality Indicators:**
- ✅ {{quality_indicator_1}}
- ✅ {{quality_indicator_2}}
- ✅ {{quality_indicator_3}}

**Confidence Level:** {{high_medium}} - Based on {{pattern_count}} patterns and {{framework_count}} frameworks

---

## Next Steps

1. {{recommended_next_step_1}}
2. {{recommended_next_step_2}}
3. {{recommended_next_step_3}}

**Testing Checklist:**
- [ ] Prototype core animation in isolation
- [ ] Test timing/easing variations
- [ ] Verify on target browsers
- [ ] Check performance (60fps)
- [ ] Implement accessibility fallback
- [ ] Integrate into full context
- [ ] Get user feedback

---

**Cinematographer's Note:**

*"This specification translates your visual inspiration into precision-engineered GSAP implementation. Every decision is backed by research, proven patterns, and the 5-step framework from Section 1.2."*

**Visual Translation Philosophy:** Great cinematography starts with vision, but execution requires precision.

---

*🎥 Generated using GSAP Excellence Module - Section 1.2 Visual Translation Framework*
*"From inspiration to implementation." - The Cinematographer*
