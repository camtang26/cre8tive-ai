# Pattern Harvest Report
# Research-Backed Quality Assessment & Extraction

**Date:** {{date}}
**Workflow:** harvest-patterns (v2.0.0-premium)
**Pattern Library:** {pattern_library}
**Director:** GSAP Excellence Engine

---

## Executive Summary

**Pattern Harvested:** {{pattern_name}}
**Category:** {{pattern_category}}
**Complexity:** {{complexity}}
**Quality Tier:** {{quality_tier_assessment}}

**Eligibility Verdict:** {{pattern_eligibility_verdict}}

**Research Validation:** 5 Deep-Research sections consulted
**Pattern Library Impact:** Total patterns {{pattern_library_count}} ({{category}} category)

---

## Section 1: Research-Backed Quality Assessment

### Deep-Research Section 1.1 - Animator's Mindset Quality Standards

{{quality_assessment_section_1_1}}

**Quality Standard Assessments:**

**1. Meaningful vs. Decorative**
- Standard: *"Great animations are meaningful, not just decorative."* (Section 1.1)
- Assessment: {{meaningful_vs_decorative_verdict}}
- Purpose Identified: {{design_intent}}
- Justification: {{meaningful_justification}}

**2. Creative Vision (Imagination First, Code Later)**
- Standard: *"Great animations often start as imaginative ideas or sketches."* (Section 1.1)
- Assessment: {{creative_vision_verdict}}
- Inspiration Sources: {{inspiration_sources}}
- Originality: {{originality_assessment}}

**3. Choreography and Timing**
- Standard: *"Think in terms of choreography -- how elements move relative to each other in time."* (Section 1.1)
- Assessment: {{choreography_verdict}}
- Coordination: {{element_coordination}}
- Timing Analysis: {{timing_quality}}

**4. Design Intent**
- Standard: *"Always ask why an animation exists."* (Section 1.1)
- Assessment: {{design_intent_verdict}}
- WHY This Animation Exists: {{animation_purpose}}
- Purpose Achievement: {{purpose_achievement}}

**SECTION 1.1 OVERALL VERDICT:** {{section_1_1_verdict}}

---

### Deep-Research Section 5.5 - Performance Standards

{{quality_assessment_section_5_5}}

**Performance Standard: 60fps Frame Budget**
- Requirement: *"~16ms per frame budget: Often less than 8ms of scripting, <4ms style/layout, <4ms paint"* (Section 5.5)

**Performance Metrics:**

| Metric | Measured | Target | Status |
|--------|----------|--------|--------|
| **Average FPS** | {{average_fps}} | 60fps | {{fps_status}} |
| **Minimum FPS** | {{minimum_fps}} | ≥55fps | {{min_fps_status}} |
| **Frame Budget** | {{frame_budget_ms}}ms | ≤16ms | {{frame_budget_status}} |
| **Scripting Time** | {{scripting_time_ms}}ms | <8ms | {{scripting_status}} |
| **Style/Layout Time** | {{style_layout_time_ms}}ms | <4ms | {{style_status}} |
| **Paint Time** | {{paint_time_ms}}ms | <4ms | {{paint_status}} |

**Optimization Techniques Applied:**
- **autoAlpha Usage:** {{autoalpha_usage}} (Section 5.5: prevents painting invisible elements)
- **Draw Call Optimization:** {{draw_call_optimization}}
- **Other Optimizations:** {{other_optimizations}}

**SECTION 5.5 OVERALL VERDICT:** {{section_5_5_verdict}}

---

### Deep-Research Section 6.1 - Accessibility Standards (MANDATORY)

{{quality_assessment_section_6_1}}

**MANDATORY Requirement: prefers-reduced-motion**
- Standard: *"Some users prefer reduced (or no) motion due to vestibular disorders. We MUST honor this."* (Section 6.1)

**Accessibility Implementation:**
- **prefers-reduced-motion Fallback:** {{prefers_reduced_motion_implemented}}
- **Implementation Method:** {{accessibility_implementation_method}}
- **Fallback Type:** {{fallback_type}} (Minimal / Disable / Alternate)

**Elements Affected in Reduced Motion Mode:**
{{reduced_motion_elements}}

**Reduction Strategy:**
- **Parallax Effects:** {{parallax_handling}} (Section 6.1: "can cause dizziness")
- **Zoom/Rotation:** {{zoom_rotation_handling}} (Section 6.1: "maybe just fade it")
- **Autoscrolling:** {{autoscroll_handling}} (Section 6.1: "definitely disable")
- **Continuous Motion:** {{continuous_motion_handling}}

**Testing Verification:**
- **OS Setting Toggled:** {{os_setting_tested}}
- **Animations Tone Down:** {{animations_tone_down_verified}}
- **Testing Protocol:** {{testing_protocol_description}}

**SECTION 6.1 OVERALL VERDICT:** {{section_6_1_verdict}} (MANDATORY - non-negotiable)

---

## Section 2: Pattern Categorization (Section 1.4 Framework)

{{categorization_justification}}

**Categorization Framework Applied:**
*"The question is usually not 'GSAP or not?', but 'which GSAP features and plugins best achieve this?'"* (Section 1.4)

**Category Determination:**

**PRIMARY Technique/Feature:** {{primary_gsap_feature}}

**Premium Plugins Used:** {{premium_plugins_used}}
- Section 1.4 Reference: {{premium_plugin_reference}}

**Framework Specificity:** {{framework_specificity}}
- Section 1.4 Reference: {{framework_integration_reference}}

**Recommended Category:** `{{pattern_category}}/`

**Categorization Justification:**
{{category_selection_reasoning}}

**Pattern Library Structure Update:**
- Previous Count in `{{pattern_category}}/`: {{previous_category_count}}
- New Count: {{new_category_count}}

---

## Section 3: Reusable Pattern Structure (Section 2.2 Principles)

{{reusable_pattern_structure}}

**Extraction Framework Applied:**
*"Understanding and leveraging these timeline techniques enables the creation of complex animation choreography that is time-accurate and maintainable."* (Section 2.2)

### Timeline Hierarchy

{{timeline_hierarchy}}

**Modular Timeline Structure:**
- **Modular:** {{modular_timelines}}
- **Nested Timelines:** {{nested_timeline_count}}
- **Pattern Reference:** *"This modular approach means each sub-timeline can be developed and tested separately."* (Section 2.2)

### Relative Positioning Patterns

{{relative_positioning_patterns}}

**Relative Scheduling Techniques:**
*"Relative scheduling (using `"<"` or `"+="` notations) makes complex overlapping sequences easier to read and adjust."* (Section 2.2)

- **`"<"` Usage:** {{less_than_usage}} (starts at same time as previous)
- **`"<0.5"` Usage:** {{less_than_offset_usage}} (starts 0.5s after previous)
- **`"+="` Usage:** {{plus_equals_usage}} (relative time offset)
- **`"-="` Usage:** {{minus_equals_usage}} (overlap)

### Labels and Named Positions

{{labels_used}}

**Label Strategy:**
*"Labels (named positions) can group multiple tweens start point."* (Section 2.2)

**Labels Documented:**
{{label_list_with_descriptions}}

### Control Methods

{{control_methods}}

**Control Patterns Used:**
*"Timelines and tweens have control methods like .pause(), .resume(), .reverse(), .progress(value), .timeScale(value)."* (Section 2.2)

- **`.pause()` / `.resume()`:** {{pause_resume_usage}}
- **`.reverse()`:** {{reverse_usage}} (for toggle animations)
- **`.progress()`:** {{progress_usage}} (for scrubbing)
- **`.timeScale()`:** {{timescale_usage}} (for speed control)

### Maintainability Assessment

{{maintainability_notes}}

**Maintainability Criteria:**
*"Many top-tier sites do this -- e.g., a timeline for each section of a page, then a master timeline to coordinate section transitions."* (Section 2.2)

- **Easily Modified:** {{easily_modified}}
- **Clearly Separated Sections:** {{clear_separation}}
- **Magic Numbers Replaced:** {{no_magic_numbers}}
- **Self-Documenting:** {{self_documenting}}

---

## Section 4: Pattern Metadata Documentation

### Basic Pattern Information

```yaml
id: pattern-{{pattern_name}}-2025
name: "{{pattern_display_name}}"
category: "{{pattern_category}}"
complexity: "{{complexity}}"
gsap_version: "3.13.0+"
plugins_required: {{plugins_required}}
premium_plugins_free: {{premium_plugins_free}}
is_wow_factor: {{is_wow_factor}}
is_2025_standard: true
```

### Research Sources (MANDATORY - Traceability)

**Deep-Research Sections Applied:**
1. **Section 1.1:** {{section_1_1_principle_applied}}
2. **Section 1.4:** {{section_1_4_principle_applied}}
3. **Section 2.2:** {{section_2_2_principle_applied}}
4. **Section 5.5:** {{section_5_5_principle_applied}}
5. **Section 6.1:** prefers-reduced-motion fallback (MANDATORY)

**Archon MCP Sources:**
{{research_citations_archon}}

**WebSearch Sources:**
{{research_citations_websearch}}

### Performance & Accessibility Documentation

**Performance Metrics (Section 5.5):**
{{performance_documentation}}

**Accessibility Compliance (Section 6.1):**
{{accessibility_documentation}}

### Timeline Structure Documentation (Section 2.2)

```yaml
timeline_structure:
  modular: {{modular}}
  nested_timelines: {{nested_count}}
  labels_used: {{labels_array}}
  relative_positioning: {{relative_positioning}}
  control_methods: {{control_methods_array}}
```

---

## Section 5: Clean Code Example

### Vanilla JavaScript Implementation

```javascript
{{clean_code_example}}
```

**Code Quality Features:**
- Generic selectors (`.container` not `.hero-section-v2-final`)
- Configurable parameters (not hardcoded values)
- Section 2.2 timeline structure principles
- Section 6.1 prefers-reduced-motion fallback
- Inline comments explain WHY (not WHAT)
- Complete: imports, setup, cleanup

### Required HTML Structure

```html
{{html_structure}}
```

### React Integration (useGSAP Hook)

```javascript
{{react_usage_example}}
```

**Framework Integration (Section 1.4):**
*"Many award-winning sites built with React still use GSAP for complex animations"* (Section 1.4)

### Next.js 15 App Router (If Applicable)

```javascript
{{nextjs_usage_example}}
```

---

## Section 6: Pattern YAML File

**File Location:** `{pattern_library}/{{pattern_category}}/{{pattern_name}}.pattern.yaml`

**Complete Pattern YAML:**

```yaml
{{pattern_yaml_content}}
```

**File Status:**
- **Created:** ✅ Yes
- **Location Verified:** ✅ {pattern_library}/{{pattern_category}}/{{pattern_name}}.pattern.yaml
- **YAML Valid:** ✅ Verified
- **Metadata Complete:** ✅ All required fields populated
- **Research Citations:** ✅ 5 Deep-Research sections + Archon + WebSearch

---

## Section 7: Pattern Library Status

{{pattern_library_status}}

**Pattern Library Update:**

| Metric | Previous | Current | Change |
|--------|----------|---------|--------|
| **Total Patterns** | 60 | {{new_total_count}} | +{{increment}} |
| **{{pattern_category}} Category** | {{previous_category_count}} | {{new_category_count}} | +1 |

**Category Breakdown (Updated):**
- `scroll-effects/`: {{scroll_effects_count}} patterns
- `text-animations/`: {{text_animations_count}} patterns
- `premium-showcases/`: {{premium_showcases_count}} patterns
- `layout-transitions/`: {{layout_transitions_count}} patterns
- `nextjs-patterns/`: {{nextjs_patterns_count}} patterns
- `interactive/`: {{interactive_count}} patterns
- `loading-sequences/`: {{loading_sequences_count}} patterns
- `react-patterns/`: {{react_patterns_count}} patterns
- `2025-features/`: {{2025_features_count}} patterns

**Pattern Availability:**
- **Implement-from-Pattern Workflow:** ✅ Immediately available
- **Searchable:** ✅ By category, tags, technique
- **Quality Validated:** ✅ Research-backed standards met

---

## Section 8: Harvest Summary

{{harvest_summary_complete}}

### Pattern Details
- **Name:** {{pattern_name}}
- **Display Name:** {{pattern_display_name}}
- **Category:** {{pattern_category}}
- **Complexity:** {{complexity}}
- **Quality Tier:** {{quality_tier_assessment}}

### Research-Backed Validation Summary

**✅ Section 1.1 - Animator's Mindset:**
- Meaningful Motion: {{meaningful_verdict}}
- Design Intent: {{design_intent_summary}}
- Choreography: {{choreography_summary}}
- Overall: **PASS**

**✅ Section 1.4 - Decision Framework:**
- Category: {{pattern_category}}
- Primary Feature: {{primary_gsap_feature}}
- Overall: **{{category}} ASSIGNED**

**✅ Section 2.2 - Timeline Techniques:**
- Modular Structure: {{modular_summary}}
- Relative Positioning: {{relative_positioning_summary}}
- Labels: {{labels_summary}}
- Overall: **PASS**

**✅ Section 5.5 - Performance Standards:**
- Average FPS: {{average_fps}}
- Frame Budget: {{frame_budget_ms}}ms (≤16ms ✓)
- Overall: **PASS**

**✅ Section 6.1 - Accessibility (MANDATORY):**
- prefers-reduced-motion: ✅ Implemented
- Fallback: {{fallback_type}}
- Testing: ✅ Verified
- Overall: **PASS**

### Research Sources Summary

- **Deep-Research Sections:** 5 (1.1, 1.4, 2.2, 5.5, 6.1)
- **Archon MCP Sources:** {{archon_source_count}}
- **WebSearch Examples:** {{websearch_count}}
- **Total Research Citations:** {{total_citations}}

### Use Cases

{{use_cases_list}}

### Next Steps

1. **Pattern Now Available:** Immediately usable in implement-from-pattern workflow
2. **Pattern Searchable:** By category ({{pattern_category}}), tags, technique
3. **Quality Guaranteed:** Validated against 5 Deep-Research sections
4. **Library Growth:** Contributing to organic pattern accumulation

### Contribution to Pattern Library

**Impact:**
- Pattern library grown from 60 → {{new_total_count}} patterns
- {{pattern_category}} category enriched with new {{complexity}} pattern
- Research-backed quality ensures premium standard maintained
- Pattern reusability validated through Section 2.2 principles

---

## Appendix: Quality Standards Reference

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

---

**🎬 Pattern Successfully Harvested!**

*Generated using GSAP Excellence Module - Research-Backed Pattern Extraction v2.0.0-premium*

*"Only premium, meaningful, accessible animations enter the pattern library."* - The Director
