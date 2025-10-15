# GSAP Implementation: {{pattern_identifier}}

**Date:** {{date}}
**Implemented by:** GSAP Excellence Engine (Director + Cinematographer + VFX Artist)
**For:** {{user_name}}

---

## Implementation Details

**Pattern:** {{pattern_identifier}}
**Target Context:** {{target_context}}
**Framework:** {{framework}}
**Customizations:** {{customizations}}

**GSAP Version:** {{gsap_version}}
**Required Plugins:** {{required_plugins}}

---

## Pattern Source

**Source Type:** {{pattern_source}}

{{pattern_details}}

---

## Implementation Code

### 1. Installation

```bash
{{installation_commands}}
```

### 2. Imports and Setup

```javascript
{{import_statements}}

{{setup_code}}
```

### 3. Animation Implementation

```javascript
// Pattern: {{pattern_identifier}}
// Target: {{target_context}}
// Framework: {{framework}}

{{animation_implementation}}
```

### 4. Cleanup Function

```javascript
// Prevents memory leaks - CRITICAL for SPAs

{{cleanup_implementation}}
```

### 5. Accessibility Fallback

```javascript
// Respects prefers-reduced-motion

{{accessibility_implementation}}
```

### 6. Framework Integration

<check if="framework != 'vanilla'">
**{{framework}} Integration:**

```{{framework}}
{{framework_integration_code}}
```
</check>

<check if="framework == 'vanilla'">
**Vanilla JavaScript Usage:**

```javascript
{{vanilla_usage_example}}
```
</check>

---

## Integration Guide

### Step 1: Install Dependencies

{{installation_guide}}

### Step 2: Import in Your Project

{{import_guide}}

### Step 3: Add to Component/Page

{{component_integration_guide}}

### Step 4: Configure Elements

**Target Elements:**
{{target_elements}}

**Element Requirements:**
{{element_requirements}}

---

## Performance Considerations

### GPU Acceleration

{{gpu_optimization}}

### Will-Change Properties

{{will_change_usage}}

### Performance Budget

- **Target FPS:** 60fps
- **Estimated FPS:** {{estimated_fps}}
- **Paint Time:** {{paint_time_estimate}}
- **JavaScript Execution:** {{js_execution_estimate}}

### Known Bottlenecks

{{bottleneck_warnings}}

### Optimization Opportunities

{{optimization_suggestions}}

---

## Testing Checklist

**Before Shipping:**

- [ ] Animation runs smoothly (60fps target)
- [ ] No console errors or warnings
- [ ] GSAP plugins loaded correctly
- [ ] Works on window resize/orientation change
- [ ] Mobile performance acceptable
- [ ] prefers-reduced-motion fallback works
- [ ] Cleanup function prevents memory leaks
- [ ] Framework lifecycle hooks respected
- [ ] Browser compatibility verified (Chrome, Firefox, Safari)
- [ ] Keyboard accessibility (if interactive)

---

## Browser Compatibility

**Tested Browsers:**
{{browser_compatibility}}

**Known Issues:**
{{browser_issues}}

**Fallbacks:**
{{browser_fallbacks}}

---

## Customization Options

### Easy Customizations

{{easy_customizations}}

### Advanced Customizations

{{advanced_customizations}}

---

## Troubleshooting

### Common Issues

**Issue 1: Animation not running**
- Check: GSAP and plugins imported correctly
- Check: Target elements exist in DOM before animation runs
- Check: Console for errors

**Issue 2: Choppy performance**
- Enable GPU acceleration (transform, opacity)
- Check paint times in DevTools
- Reduce complexity or simplify easing

**Issue 3: Cleanup not working**
- Ensure cleanup function called on unmount
- Kill all GSAP tweens/timelines
- Remove event listeners

{{additional_troubleshooting}}

---

## Validation Results

<check if="validation_available">
**Tech Director Validation:**

{{validation_results}}

**Console Status:**
{{console_status}}

**Visual Validation:**
{{visual_validation}}

**Performance Rating:** {{performance_rating}}
</check>

<check if="else">
**Manual Validation Required:**

Please test the implementation using the checklist above. Tech Director validation will be available in Phase 2.
</check>

---

## Next Steps

**Immediate:**
1. {{next_step_1}}
2. {{next_step_2}}
3. {{next_step_3}}

**If Issues Arise:**
- Run `optimize-performance` workflow for FPS issues
- Run `debug-animation` workflow for bugs
- Consult research report: {{research_report_path}}

**If Successful:**
- Add to pattern library for future reuse
- Document learnings
- Share with team

---

## Pattern Library

<check if="added_to_library">
**✅ Added to Pattern Library**

This implementation has been saved to the pattern library for quick reuse.

**Pattern ID:** {{pattern_library_id}}
**Pattern File:** {{pattern_library_path}}
</check>

<check if="else">
**Recommendation:**

If this implementation is successful, consider adding it to the pattern library using:
```
workflow add-to-pattern-library
```
</check>

---

## Credits

**Pattern Source:** {{pattern_source_citation}}

**Implementation Team:**
- 🎬 Director: Creative direction and orchestration
- 🎥 Cinematographer: Pattern research and analysis
- ✨ VFX Artist: Implementation and integration
<check if="validation_available">
- 🔧 Tech Director: Validation and optimization
</check>

---

🎬 **"That's a wrap on implementation. Test it out and let me know how it performs!"** - The Director

_Generated by GSAP Excellence Engine_
_Module: gsap-excellence | Workflow: implement-from-pattern_
_Implementation Date: {{date}}_

---

## Additional Resources

**GSAP Documentation:**
{{gsap_docs_links}}

**Related Patterns:**
{{related_patterns}}

**Further Reading:**
{{further_reading}}
