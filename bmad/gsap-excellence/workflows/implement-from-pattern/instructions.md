# Implement From Pattern Workflow Instructions
# Fast pattern-based implementation with multi-agent coordination

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/implement-from-pattern/workflow.yaml</critical>

<workflow>

<step n="1" goal="Director: Understand Implementation Request">
<action>Director introduces workflow and gathers requirements</action>

**"Let's implement this pattern quickly and correctly. Tell me what you need."**

<ask response="pattern_source">Where's the pattern from? [library/research/url/describe]</ask>

<check if="pattern_source == 'library'">
<ask response="pattern_identifier">Pattern name from library? (e.g., 'parallax-scroll-basic')</ask>
<action>Check if pattern exists in {pattern_library}/</action>
</check>

<check if="pattern_source == 'research'">
<ask response="pattern_identifier">Path to research report?</ask>
<action>Verify research report exists and load it</action>
</check>

<check if="pattern_source == 'url'">
<ask response="pattern_identifier">URL to pattern/example?</ask>
<action>Note: Will research this URL via Cinematographer</action>
</check>

<check if="pattern_source == 'describe'">
<ask response="pattern_identifier">Describe the pattern you want to implement</ask>
<action>Note: Will invoke research-gsap-pattern workflow first</action>
</check>

<ask response="target_context">Where to implement? (component name, file path, element selectors)</ask>
<ask response="framework">Framework? [vanilla/react/vue/svelte]</ask>
<ask response="customizations">Any customizations from base pattern? (Optional)</ask>

<action>Confirm understanding before proceeding</action>

**Implementation Plan:**
- Pattern: {{pattern_identifier}}
- Target: {{target_context}}
- Framework: {{framework}}
- Customizations: {{customizations}}

<template-output>pattern_source, pattern_identifier, target_context, framework, customizations</template-output>
</step>

<step n="2" goal="Cinematographer: Load and Analyze Pattern">
<action>Cinematographer loads pattern details based on source</action>

**"Loading pattern details and technical specifications..."**

<check if="pattern_source == 'library'">
<action>Read pattern file from {pattern_library}/{{pattern_identifier}}.pattern.yaml</action>
<action>Extract: code example, GSAP features, plugins, performance notes</action>
</check>

<check if="pattern_source == 'research'">
<action>Read research report from {{pattern_identifier}}</action>
<action>Extract: implementation approaches, code examples, best practices</action>
<action>Prefer medium complexity example if available</action>
</check>

<check if="pattern_source == 'url'">
<action>Use Archon MCP to search for similar patterns</action>
<action>Use Perplexity to analyze the URL/example</action>
<action>Synthesize pattern from example</action>
</check>

<check if="pattern_source == 'describe'">
<action>Invoke research-gsap-pattern workflow</action>
<action>Wait for research completion</action>
<action>Use research findings as pattern base</action>
</check>

**Pattern Analysis:**

1. **Core Technique**
   - What GSAP features does this pattern use?
   - What plugins are required?
   - What's the complexity level?

2. **Adaptation Requirements**
   - How to adapt to {{target_context}}?
   - What customizations are needed?
   - Framework-specific considerations?

3. **Dependencies**
   - GSAP version required
   - Plugins to import
   - External dependencies

<action>Use Context7 to verify API compatibility if needed</action>

<template-output>pattern_details, gsap_features, required_plugins, adaptation_strategy</template-output>
</step>

<step n="3" goal="VFX Artist: Plan Implementation">
<action>VFX Artist plans implementation approach</action>

**"Alright, here's how we'll implement this..."**

**Implementation Strategy:**

1. **Setup Phase**
   - Import GSAP {{gsap_version}}
   - Import required plugins: {{required_plugins}}
   - Select target elements: {{target_elements}}
   - Framework integration: {{framework_integration_notes}}

2. **Animation Phase**
   - Base pattern code: {{base_pattern_code}}
   - Customizations: {{customizations}}
   - Easing adjustments: {{easing_notes}}
   - Timing adjustments: {{timing_notes}}

3. **Optimization Phase**
   - GPU acceleration: {{gpu_optimization}}
   - Performance considerations: {{performance_notes}}
   - Will-change properties: {{will_change_usage}}

4. **Cleanup Phase**
   - Kill animations on unmount: {{cleanup_code}}
   - Event listener removal: {{event_cleanup}}
   - Framework lifecycle integration: {{lifecycle_notes}}

5. **Accessibility Phase**
   - prefers-reduced-motion fallback: {{reduced_motion_code}}
   - Focus management (if interactive): {{focus_management}}

<template-output>implementation_strategy, setup_code, animation_code, cleanup_code, accessibility_code</template-output>
</step>

<step n="4" goal="VFX Artist: Implement Animation">
<critical>Generate production-ready implementation code</critical>

<action>VFX Artist generates complete implementation</action>

**"Implementing {{pattern_identifier}} for {{target_context}}..."**

**Generate Code Sections:**

**1. Imports and Setup**
```javascript
// Framework: {{framework}}
// GSAP Version: {{gsap_version}}
// Plugins: {{required_plugins}}

{{import_statements}}

{{setup_code}}
```

**2. Animation Implementation**
```javascript
// Pattern: {{pattern_identifier}}
// Adapted for: {{target_context}}

{{animation_implementation}}
```

**3. Cleanup Function**
```javascript
// Proper cleanup to prevent memory leaks

{{cleanup_implementation}}
```

**4. Accessibility Fallback**
```javascript
// prefers-reduced-motion support

{{accessibility_implementation}}
```

**5. Framework Integration (if applicable)**
```javascript
// {{framework}} integration

{{framework_integration_code}}
```

<action>Add inline comments explaining key decisions</action>
<action>Annotate performance optimizations</action>
<action>Note any browser-specific considerations</action>

<template-output>complete_implementation_code</template-output>
</step>

<step n="5" goal="VFX Artist: Integration Guide">
<action>Create integration guide for target codebase</action>

**"Here's how to integrate this into your project..."**

**Integration Steps:**

1. **Install Dependencies**
   ```bash
   {{installation_commands}}
   ```

2. **Import in Your File**
   ```javascript
   {{import_example}}
   ```

3. **Add to Component**
   ```{{framework}}
   {{component_integration_example}}
   ```

4. **Configure Elements**
   {{element_configuration}}

5. **Test Checklist**
   - [ ] Animation runs smoothly (60fps target)
   - [ ] No console errors
   - [ ] Works on resize/orientation change
   - [ ] prefers-reduced-motion fallback works
   - [ ] Cleanup prevents memory leaks
   - [ ] Framework lifecycle respected

<template-output>integration_guide, installation_commands, integration_examples</template-output>
</step>

<step n="6" goal="Tech Director: Quick Validation (Optional - Phase 2)" optional="true">
<check if="tech_director_available">
<action>Tech Director performs quick validation</action>

**"Let me run some quick checks..."**

**Validation Protocol:**

1. **Code Review**
   - Proper imports and setup ✓
   - Cleanup implemented ✓
   - Accessibility fallback present ✓
   - Framework integration correct ✓

2. **Console Check** (if Chrome DevTools MCP available)
   <action>Use list_console_messages to check for errors</action>
   <action>Verify no GSAP errors or warnings</action>

3. **Visual Check** (if Chrome DevTools MCP available)
   <action>Use take_screenshot to capture animation state</action>
   <action>Verify visual implementation matches expected</action>

4. **Performance Notes**
   - Estimated FPS: {{estimated_fps}}
   - Potential bottlenecks: {{bottleneck_warnings}}
   - Optimization opportunities: {{optimization_suggestions}}

<template-output>validation_results, console_status, visual_validation</template-output>
</check>

<check if="else">
<action>Skip validation in MVP (Tech Director not yet available)</action>
<action>Provide manual validation checklist instead</action>
</check>
</step>

<step n="7" goal="Director: Present Implementation">
<action>Director presents complete implementation to user</action>

**"Implementation complete. Here's your production-ready code."**

<action>Generate final implementation document using template.md</action>
<action>Save to output file: {{default_output_file}}</action>

**Implementation Summary:**
- ✅ Pattern: {{pattern_identifier}}
- ✅ Target: {{target_context}}
- ✅ Framework: {{framework}}
- ✅ GSAP Version: {{gsap_version}}
- ✅ Plugins: {{required_plugins}}
- ✅ Cleanup: Included
- ✅ Accessibility: prefers-reduced-motion supported
- ✅ Performance: {{performance_rating}}

<ask>Next steps:
1. Copy code and test in your project
2. Request performance optimization (if issues)
3. Add variation or customize further
4. Save successful implementation to pattern library
5. Done</ask>

<action>Capture user response for next action</action>

<template-output>final_implementation, next_action</template-output>
</step>

<step n="8" goal="Optional: Add to Pattern Library" optional="true">
<ask>Was this implementation successful? Should we add it to the pattern library for future reuse? [y/n]</ask>

<check if="user_approves">
<action>Create pattern library entry</action>

**Pattern Library Entry:**
```yaml
id: pattern-{{uuid}}
name: "{{pattern_name}}"
category: "{{pattern_category}}"
complexity: "{{complexity}}"
gsap_version: "{{gsap_version}}"
plugins_required: {{required_plugins}}
description: "{{pattern_description}}"
code_example: |
  {{implementation_code}}
created_date: "{{date}}"
success_count: 1
tags: {{pattern_tags}}
framework: "{{framework}}"
performance_notes: "{{performance_notes}}"
```

<action>Save to {pattern_library}/{{pattern_name}}.pattern.yaml</action>
<action>Update pattern library index</action>

**"Pattern added to library! It'll be available for quick implementation next time."**
</check>

<template-output>pattern_library_entry</template-output>
</step>

</workflow>

## Multi-Agent Coordination

**Agent Handoffs:**

1. **Director → Cinematographer**
   - Passes: pattern_identifier, pattern_source
   - Receives: pattern_details, adaptation_strategy

2. **Cinematographer → VFX Artist**
   - Passes: pattern_details, gsap_features, required_plugins, adaptation_strategy
   - Receives: implementation_code, integration_guide

3. **VFX Artist → Tech Director** (Phase 2)
   - Passes: implementation_code, target_context
   - Receives: validation_results, optimization_suggestions

4. **Tech Director → Director** (Phase 2)
   - Passes: validation_results
   - Receives: User presentation

**Context Preservation:**
- All agents have access to: target_context, framework, customizations
- Research findings carry through entire pipeline
- Performance considerations noted at each stage

## MCP Tool Usage

**Archon MCP:**
- Used by Cinematographer if pattern not in library
- Searches for similar patterns
- Loads code examples

**Context7:**
- Used by Cinematographer to verify API compatibility
- Checks for latest GSAP version requirements

**Chrome DevTools MCP** (Phase 2):
- Used by Tech Director for validation
- Screenshot capture for visual check
- Console message monitoring

## Quality Standards

**Code Quality:**
- Production-ready with inline comments
- Proper cleanup to prevent memory leaks
- Framework integration follows best practices
- TypeScript types if applicable
- No TODO comments or placeholders

**Performance:**
- GPU acceleration where appropriate
- Will-change properties used correctly
- No layout thrashing
- 60fps target on mid-range devices

**Accessibility:**
- prefers-reduced-motion fallback REQUIRED
- Keyboard accessibility if interactive
- Focus management if applicable
- ARIA attributes if needed

## Success Metrics

- ✅ Pattern successfully adapted to target context
- ✅ Code compiles/runs without errors
- ✅ Cleanup prevents memory leaks
- ✅ Accessibility fallback works
- ✅ Framework integration correct
- ✅ User satisfied with implementation
- ✅ Estimated 60%+ success rate on first try (MVP goal)

## Integration

**Feeds Into:**
- Pattern library (successful implementations)
- optimize-performance (if performance issues)
- debug-animation (if issues arise)

**Fed By:**
- research-gsap-pattern (research report)
- creative-ideation (selected concept)
- Pattern library (existing patterns)

**Context Passed Forward:**
- Complete implementation code
- Integration guide
- Performance notes
- Validation results (if available)
