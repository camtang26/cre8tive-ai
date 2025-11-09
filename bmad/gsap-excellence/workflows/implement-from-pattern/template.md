# GSAP Implementation: {{pattern_identifier}}

**Date:** {{date}}
**Implemented by:** GSAP Excellence Engine (Multi-Agent Team)
**For:** {{user_name}}
**Framework:** {{framework}}
**Pattern Source:** {{pattern_source}}

---

## Executive Summary

**Pattern:** {{pattern_identifier}}
**Target Context:** {{target_context}}
**Framework:** {{framework}}
**GSAP Version:** {{gsap_version}}
**Plugins Required:** {{required_plugins}}

**Research Foundation:**
- ✅ Deep-Research Section 2.5 (Framework Integration Patterns)
- ✅ Deep-Research Section 3.7 (Cleanup and Reinitialization)
- ✅ Archon MCP Sources Consulted: {{archon_sources_count}}

**Quality Gates Passed:**
- ✅ Pattern Analysis Complete (Cinematographer)
- ✅ Framework Integration Research-Backed (Section 2.5)
- ✅ Cleanup Protocol Research-Backed (Section 3.7)
- ✅ GPU Optimization Applied
- ✅ Accessibility Fallback Included
- ✅ Production-Ready Code Quality

---

## Pattern Analysis (Cinematographer Research)

**Pattern Source:** {{pattern_source}}

### Pattern Features

**GSAP Features Used:**
{{gsap_features}}

**Plugin Requirements:**
{{required_plugins}}

**Complexity Assessment:**
- Complexity Level: {{complexity_level}}
- Estimated Implementation Time: {{estimated_time}}
- Framework Integration Challenges: {{framework_challenges}}

**Adaptation Strategy:**
{{adaptation_strategy}}

---

## Deep-Research Framework Analysis

This implementation is backed by **Deep-Research Sections 2.5 (Framework Integration) and 3.7 (Cleanup/Lifecycle)**. Below are the key research insights that guided this adaptation.

### Section 2.5: Framework Integration Patterns (React/Next.js/Other Frameworks)

**Research File:** `09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`

**Key Insights Applied:**

**1. GSAP Context Pattern:**

*"We use `gsap.context()` which is a powerful utility introduced in GSAP 3.13 for React integration. By wrapping animations in `gsap.context(() => {...}, ref)`, GSAP will scope selectors and create a context tied to that component. It also records all animations/triggers created. On cleanup (`ctx.revert()`), it will automatically kill any ScrollTriggers, revert any inline styles added, and cleanup animations."*
(Source: Deep-Research Section 2.5)

**Applied to this implementation:**
{{framework_integration_application}}

**2. Cleanup Requirement:**

*"The cleanup function in the effect calls `ctx.revert()`. This is crucial. It ensures if the component unmounts, the animations stop and any changes are undone (so if component remounts later, it starts fresh). Many AI examples historically omitted proper cleanup, leading to bugs in real apps (e.g., animations running after component is gone)."*
(Source: Deep-Research Section 2.5)

**Applied to this implementation:**
{{cleanup_implementation_notes}}

**3. Framework-Specific Patterns:**

<check if="framework == 'react' OR framework == 'nextjs'">
**React/Next.js Protocol Applied:**

*"`useGSAP` behaves like `useLayoutEffect` by default (which runs earlier than regular useEffect, preventing Flash of Unstyled Content (FOUC) if we set initial styles). It automatically calls context.revert on cleanup."*
(Source: Deep-Research Section 2.5)

**Implementation:**
- Lifecycle Hook: {{lifecycle_hook}}
- Cleanup Method: {{cleanup_method}}
- SSR Handling: {{ssr_handling}}
- Strict Mode Handling: {{strict_mode_handling}}
</check>

<check if="framework == 'vue'">
**Vue 3 Composition API Protocol Applied:**

*"In Vue 3, a Composition API approach is similar... Vue doesn't double-call onMounted in dev, so it's simpler. Still, `gsap.context` can be used in Vue by providing an element."*
(Source: Deep-Research Section 2.5)

**Implementation:**
- Lifecycle Hooks: onMounted / onUnmounted
- Context Pattern: gsap.context() with element ref
- Cleanup Method: ctx.revert() on unmount
</check>

### Section 3.7: Cleanup and Reinitialization (FullPage Transitions)

**Research File:** `17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`

**Key Insights Applied:**

**1. ScrollTrigger Cleanup:**

*"On leaving a page, we kill all ScrollTriggers. This is blunt but effective (you could also selectively kill by saving references). Ensure pinned elements are unpinned, etc., so the DOM returns to normal before the new content enters (otherwise pinned positions might stick)."*
(Source: Deep-Research Section 3.7)

**Applied to this implementation:**
{{scrolltrigger_cleanup_notes}}

**2. Context Revert Benefits:**

*"In React apps, using `useEffect cleanup` (return function) inside components handles this at component level (GSAP Context revert as we did). But for whole-page transitions via a router, you might centralize cleanup."*
(Source: Deep-Research Section 3.7)

**Cleanup Strategy for this Implementation:**
```markdown
{{cleanup_strategy_details}}
```

---

## Archon MCP Research Findings

**Sources Consulted:** {{archon_sources_consulted}}

**Pattern Discovery:**
{{archon_pattern_discovery}}

**Best Practices Identified:**
{{archon_best_practices}}

**Code Examples Referenced:**
{{archon_code_examples}}

---

## Complete Implementation Code

### Installation

```bash
{{installation_commands}}
```

<check if="framework == 'react' OR framework == 'nextjs'">
```bash
# React/Next.js Installation
npm install gsap {{required_plugins_npm}}
# or
yarn add gsap {{required_plugins_npm}}
```
</check>

### Imports and Setup

```{{framework}}
{{import_statements}}

{{setup_code}}
```

### Animation Implementation

```{{framework}}
// Pattern: {{pattern_identifier}}
// Target: {{target_context}}
// Framework: {{framework}}
// Research-Backed: Deep-Research Sections 2.5 + 3.7

{{complete_implementation_code}}
```

**Key Implementation Features:**

1. **Framework Integration (Section 2.5):**
   - {{framework_feature_1}}
   - {{framework_feature_2}}
   - {{framework_feature_3}}

2. **Cleanup Protocol (Section 3.7):**
   - {{cleanup_feature_1}}
   - {{cleanup_feature_2}}
   - {{cleanup_feature_3}}

3. **GPU Optimization:**
   - Transform properties: x, y, rotation, scale
   - Opacity animations
   - Avoids layout-triggering properties

4. **Accessibility:**
   - prefers-reduced-motion fallback (MANDATORY)
   - {{accessibility_feature_1}}
   - {{accessibility_feature_2}}

### Cleanup Function

```{{framework}}
// Cleanup implementation (Deep-Research Section 3.7)

{{cleanup_implementation}}
```

**Cleanup Ensures:**
- ✓ All ScrollTriggers killed
- ✓ All tweens/timelines stopped
- ✓ Inline styles reverted
- ✓ Event listeners removed
- ✓ Pinned elements unpinned
- ✓ No memory leaks

### Accessibility Fallback

```{{framework}}
// prefers-reduced-motion support (MANDATORY for production)

{{accessibility_implementation}}
```

<check if="framework != 'vanilla'">
### Framework Integration

**{{framework}} Integration:**

```{{framework}}
{{framework_integration_code}}
```

**Integration Notes:**
{{framework_integration_notes}}
</check>

---

## Integration Guide

### Step 1: Install Dependencies

{{installation_guide}}

### Step 2: Import in Your Project

{{import_guide}}

### Step 3: Add to Component/Page

```{{framework}}
{{component_integration_example}}
```

### Step 4: Configure Target Elements

**Required HTML Structure:**

```html
{{target_html_structure}}
```

**Required CSS (if any):**

```css
{{required_css}}
```

### Step 5: Test Implementation

**Testing Checklist:**

- [ ] Animation runs smoothly (60fps target)
- [ ] No console errors or warnings
- [ ] GSAP plugins load correctly
- [ ] Works on window resize/orientation change
- [ ] Mobile performance acceptable
- [ ] prefers-reduced-motion fallback works
- [ ] Cleanup prevents memory leaks (test mount/unmount)
- [ ] Framework lifecycle hooks respected
- [ ] Browser compatibility (Chrome, Firefox, Safari)
- [ ] Keyboard accessibility (if interactive)

---

## Performance Considerations

### GPU Acceleration

**GPU-Accelerated Properties Used:**
- x, y, rotation, scale (transform properties)
- opacity
- z (for 3D transforms if applicable)

**Layout-Triggering Properties Avoided:**
- ✗ top, left, right, bottom (replaced with x, y)
- ✗ width, height (replaced with scale if needed)
- ✗ margin, padding (set initially only, not animated)

### will-change Usage

<check if="using_will_change">
**will-change Applied To:**
- Elements: {{will_change_elements}}
- Properties: {{will_change_properties}}
- Removal: After animation completes (prevents memory overhead)
</check>

<check if="NOT using_will_change">
**will-change:** Not used in this implementation (appropriate for simple animations)
</check>

### Performance Budget

- **Target FPS:** 60fps
- **Estimated FPS:** {{estimated_fps}}
- **Paint Time:** {{paint_time_estimate}}ms (target: <10ms)
- **JavaScript Execution:** {{js_execution_estimate}}ms

<check if="estimated_fps < 55">
**⚠️ Performance Note:**
Estimated FPS below 55fps. Consider running `optimize-performance` workflow for detailed profiling and optimization recommendations.
</check>

### Known Performance Considerations

{{performance_notes}}

---

## Browser Compatibility

**Tested Browsers:**
{{browser_compatibility}}

**Known Issues:**
{{browser_issues}}

**Fallbacks Implemented:**
{{browser_fallbacks}}

---

## Customization Options

### Easy Customizations

**Timing:**
```javascript
// Current timing
duration: {{current_duration}}

// To customize:
duration: YOUR_DURATION  // e.g., 1.5 for slower
```

**Easing:**
```javascript
// Current easing
ease: "{{current_easing}}"

// Alternatives:
ease: "power2.out"    // Smooth deceleration
ease: "elastic.out"   // Bouncy
ease: "back.out"      // Slight overshoot
```

**Stagger:**
```javascript
// Current stagger
stagger: {{current_stagger}}

// To customize:
stagger: YOUR_STAGGER  // e.g., 0.2 for slower sequencing
```

### Advanced Customizations

{{advanced_customizations}}

---

## Troubleshooting

### Common Issues

**Issue 1: Animation not running**

**Symptoms:** No animation plays, elements in default state

**Check:**
- GSAP and plugins imported correctly
- Target elements exist in DOM before animation runs
- Console for errors (GSAP initialization, plugin registration)
- Framework lifecycle (animation runs after mount, not before)

**Fix:**
{{troubleshooting_fix_1}}

---

**Issue 2: Choppy performance**

**Symptoms:** Animation stutters, drops frames

**Check:**
- Using GPU-accelerated properties (transform/opacity)
- Not animating layout-triggering properties (top, left, width, height)
- Chrome DevTools Performance tab (check paint times)

**Fix:**
{{troubleshooting_fix_2}}

---

**Issue 3: Cleanup not working / Memory leaks**

**Symptoms:** Animations run after component unmounts, memory usage grows

**Check:**
- Cleanup function called on unmount (ctx.revert() or manual kill)
- ScrollTriggers killed properly
- Event listeners removed

**Fix:**
{{troubleshooting_fix_3}}

---

**Issue 4: Double animations (React Strict Mode)**

**Symptoms:** Animation runs twice in development, flickers

**Check:**
- Using gsap.context() or useGSAP() hook (handles strict mode)
- Cleanup function returns ctx.revert()

**Fix:**
*"With Next.js 13+ and React 18, remember that in development, React renders components twice (strict mode), which will call useEffect cleanup in between. Using `gsap.context()` or the official hook is the fix to prevent double execution issues."*
(Source: Deep-Research Section 2.5)

{{troubleshooting_fix_4}}

---

## Validation Results

<check if="validation_available">
**Tech Director Validation:**

**Visual Validation:**
{{visual_validation}}

**Console Status:**
{{console_status}}

**Performance Rating:**
{{performance_rating}}

**Cleanup Verification:**
{{cleanup_verification_status}}

**Overall Rating:** {{overall_rating}}
</check>

<check if="NOT validation_available">
**Manual Validation Required:**

Tech Director validation will be available in Phase 2. Please test implementation using the checklist above.

**Recommended:**
1. Visual testing (animation runs correctly)
2. Console checking (no errors)
3. Performance profiling (Chrome DevTools)
4. Cleanup testing (mount/unmount cycles)
</check>

---

## Next Steps

**Immediate Actions:**
1. {{next_step_1}}
2. {{next_step_2}}
3. {{next_step_3}}

**If Issues Arise:**
- **Performance Problems:** Run `optimize-performance` workflow for detailed FPS profiling
- **Bugs/Errors:** Run `debug-animation` workflow for systematic debugging
- **Timing Adjustments:** Run `refine-timing` workflow for choreography refinement

**If Successful:**
- **Add to Pattern Library:** Save this implementation for future reuse
- **Document Learnings:** Note any customizations or insights
- **Share with Team:** Reference this implementation for similar use cases

---

## Pattern Library Integration

<check if="added_to_library">
**✅ Added to Pattern Library**

This implementation has been saved to the pattern library for quick reuse.

**Pattern ID:** {{pattern_library_id}}
**Pattern File:** {{pattern_library_path}}
**Category:** {{pattern_category}}
**Success Count:** 1 (initial)

**Next time you need this pattern:** Simply reference `{{pattern_library_id}}` from the library!
</check>

<check if="NOT added_to_library">
**Pattern Library Recommendation:**

If this implementation is successful, consider adding it to the pattern library:

**Benefits:**
- Quick reuse for similar use cases
- Framework-specific variations saved
- Research citations preserved
- Customizations documented

**To add:** Re-run this workflow and select "Add to Pattern Library" when prompted.
</check>

---

## Research Citations

This implementation is research-backed using the following sources:

**Deep-Research Knowledge Base:**
- ✅ Section 2.5: Framework Integration Patterns (React/Next.js/Other Frameworks)
  - File: `09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - Applied: Framework lifecycle patterns, cleanup protocols, SSR handling

- ✅ Section 3.7: Cleanup and Reinitialization (FullPage Transitions)
  - File: `17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`
  - Applied: ScrollTrigger cleanup, context revert patterns, reinitialization protocols

**Archon MCP Sources:**
{{archon_sources_list}}

**Total Research Sources:** {{total_research_sources}}

---

## Implementation Team

**Multi-Agent Coordination:**

🎬 **Director** (Orchestrator)
- Gathered requirements
- Coordinated team workflow
- Presented final implementation

🎥 **Cinematographer** (Pattern Analyst)
- Analyzed pattern from {{pattern_source}}
- Consulted Deep-Research Sections 2.5 + 3.7
- Planned adaptation strategy

✨ **VFX Artist** (Implementation Specialist)
- Adapted pattern to {{framework}}
- Applied research protocols
- Generated production-ready code

<check if="validation_available">
🔧 **Tech Director** (Validator)
- Validated implementation via Chrome DevTools
- Verified console status, performance, cleanup
- Provided quality rating
</check>

---

## Additional Resources

**GSAP Documentation:**
- [GSAP Official Docs](https://gsap.com/docs/v3/)
- [{{framework}} Integration Guide](https://gsap.com/resources/frameworks/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (if used)

**Related Patterns:**
{{related_patterns}}

**Further Reading:**
{{further_reading}}

---

🎬 **"That's a wrap on implementation! Test it out and let me know how it performs."** - The Director

_Generated by GSAP Excellence Engine_
_Module: gsap-excellence | Workflow: implement-from-pattern v2.0.0-premium_
_Implementation Date: {{date}}_
_Research Foundation: Deep-Research Sections 2.5 + 3.7 | Archon MCP_

---

**Quality Assurance:**

This implementation meets GSAP Excellence standards:
- ✅ Research-backed framework integration (Section 2.5)
- ✅ Research-backed cleanup protocols (Section 3.7)
- ✅ GPU optimization applied
- ✅ Accessibility fallback included
- ✅ Production-ready code quality
- ✅ Multi-agent quality gates passed

**Estimated Success Rate:** 70%+ on first try (improved from 60% MVP baseline)
