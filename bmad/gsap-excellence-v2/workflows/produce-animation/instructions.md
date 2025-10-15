# Produce Animation Workflow Instructions
# Complete automated production pipeline with Task tool orchestration
# FLAGSHIP WORKFLOW - Demonstrates true automation

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence-v2/workflows/produce-animation/workflow.yaml</critical>

<workflow>

<step n="1" goal="Gather Requirements">
<action>Collect animation requirements with focused questions</action>

**Welcome to complete animation production. Let's create something excellent.**

<ask response="animation_request">What animation do you need? (Be specific about the effect and context)</ask>

<ask response="component_context">Where will this animate? (component name, page, element)</ask>

<ask response="target_framework">Framework? [vanilla/react/vue/svelte]</ask>

<ask response="brand_personality" optional="true">Brand personality? (playful/professional/edgy/minimal - helps guide design)</ask>

<ask response="animation_goals" optional="true">Primary goal? (engagement/delight/storytelling/wow factor)</ask>

<ask response="constraints" optional="true">Any constraints? (performance budget, timeline, accessibility requirements)</ask>

<ask response="dev_url" optional="true">Dev server URL for testing? (enables live validation)</ask>

<action>Confirm understanding</action>

**Plan:**
- Animation: {{animation_request}}
- Context: {{component_context}}
- Framework: {{target_framework}}
- Style: {{brand_personality}}
- Goal: {{animation_goals}}

Ready to proceed with automated production?

<template-output>animation_request, component_context, target_framework, brand_personality, animation_goals, constraints, dev_url</template-output>
</step>

<step n="2" goal="Research Phase - Task Tool Orchestration">
<critical>This step demonstrates REAL Task tool usage for orchestration</critical>

<action>Use Task tool to invoke research specialist</action>

**Initiating research phase...**

```
Task Tool Invocation:
  subagent_type: "general-purpose"
  description: "Research GSAP patterns"
  prompt: """
You are a GSAP research specialist with access to three MCP servers.

**Research Task:**
Find premium patterns for: {{animation_request}}
Component context: {{component_context}}
Brand personality: {{brand_personality}}
Goals: {{animation_goals}}

**Use These MCP Tools:**

1. **Perplexity Research** (perplexity_research tool):
   Query: "award-winning {{animation_type}} animations 2024-2025 site:awwwards.com OR site:fwa.com"
   Focus: Premium examples, current trends, top agencies

2. **Archon Knowledge Base** (rag_search_knowledge_base tool):
   Query: "GSAP {{technique}} advanced patterns best practices"
   Focus: Official docs, code examples, technical approaches

3. **Archon Code Examples** (rag_search_code_examples tool):
   Query: "{{technique}} {{plugins_likely}}"
   Focus: Working code snippets

4. **Context7 Library Docs** (get-library-docs tool):
   Library: "gsap"
   Focus: Latest version, new features, API compatibility

**Execute ALL four searches** (parallel where possible).

**Return Format:**
# GSAP Research Report

## Executive Summary
[3-5 sentence overview of findings]

## Premium Examples (Perplexity)
[Top 5 examples with URLs, agencies, techniques used]

## Technical Patterns (Archon)
[3-5 GSAP patterns with code snippets and explanations]

## Latest API Info (Context7)
[Current GSAP version, relevant new features, plugin requirements]

## Synthesis
[Recommended approach based on all sources]
[Technical strategy with specific GSAP features]
[Performance considerations]
[Accessibility notes]

## Citations
[All URLs and sources referenced]
"""
```

<wait>Wait for Task tool to complete and return research report</wait>

<action>Receive and validate research results</action>

**Research completed. Analyzing findings...**

<check if="research_contains_premium_examples">
  ✅ Premium examples found
</check>

<check if="research_contains_technical_patterns">
  ✅ Technical patterns documented
</check>

<check if="research_contains_api_info">
  ✅ Latest API information retrieved
</check>

<template-output>research_report, premium_examples, technical_patterns, api_info, recommended_approach</template-output>
</step>

<step n="3" goal="Implementation Phase - Task Tool Orchestration">
<critical>Use Task tool to invoke implementation specialist with research context</critical>

<action>Use Task tool to invoke implementation specialist</action>

**Initiating implementation phase...**

```
Task Tool Invocation:
  subagent_type: "general-purpose"
  description: "Implement GSAP animation"
  prompt: """
You are a GSAP implementation specialist creating production-ready code.

**Implementation Requirements:**
Animation: {{animation_request}}
Context: {{component_context}}
Framework: {{target_framework}}
Brand: {{brand_personality}}
Goals: {{animation_goals}}
Constraints: {{constraints}}

**Research Context:**
{{research_report}}

Use the recommended approach from research:
{{recommended_approach}}

**Implementation Standards:**

1. **Code Quality**
   - Full inline comments explaining key decisions
   - No TODOs or placeholders
   - TypeScript types if {{target_framework}} uses TS
   - Production-ready from first generation

2. **Performance**
   - GPU acceleration: Use transform and opacity only
   - Will-change: Apply to animated properties
   - No layout thrashing: Avoid width, height, margin changes
   - 60fps target: Keep animations smooth

3. **GSAP Best Practices**
   - Proper plugin imports and registration
   - ScrollTrigger: Use scrub for scroll-linked animations
   - Timeline: Use labels for complex sequences
   - Cleanup: Kill animations on component unmount

4. **Accessibility**
   - REQUIRED: prefers-reduced-motion fallback
   - Implementation:
     ```javascript
     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
       // Disable or simplify animation
       return;
     }
     ```
   - Keyboard accessible if interactive
   - Focus management if navigation

5. **Framework Integration**
   - Vanilla: Use DOMContentLoaded or immediate execution
   - React: Use useEffect with cleanup
   - Vue: Use onMounted with onUnmounted
   - Svelte: Use onMount with onDestroy

**Deliverables:**

Generate complete implementation with these sections:

### 1. Dependencies and Imports
```{{target_framework}}
// GSAP version: {{gsap_version}}
// Plugins: {{required_plugins}}
{{import_statements}}
```

### 2. Main Animation Code
```{{target_framework}}
// {{animation_request}} implementation
// Pattern: {{pattern_name}}

{{animation_implementation}}
```

### 3. Cleanup Function
```{{target_framework}}
// Prevents memory leaks
{{cleanup_code}}
```

### 4. Accessibility Fallback
```{{target_framework}}
// prefers-reduced-motion support
{{reduced_motion_fallback}}
```

### 5. Framework Integration
```{{target_framework}}
// {{target_framework}} lifecycle integration
{{framework_integration}}
```

### 6. Usage Notes
- Installation commands
- Element requirements
- Configuration options
- Known limitations

Return: Complete, production-ready code with all sections.
"""
```

<wait>Wait for Task tool to complete and return implementation</wait>

<action>Receive and validate implementation</action>

**Implementation completed. Reviewing code quality...**

<validation-checks>
✅ Imports present and correct
✅ Animation code complete
✅ Cleanup function included
✅ Accessibility fallback present
✅ Framework integration correct
✅ Comments explain key decisions
</validation-checks>

<template-output>implementation_code, dependencies, cleanup_code, accessibility_fallback, framework_integration, usage_notes</template-output>
</step>

<step n="4" goal="Integration Guide Generation">
<action>Create step-by-step integration guide</action>

**Generating integration guide...**

**Integration Guide for {{component_context}}**

**Step 1: Install Dependencies**
```bash
{{installation_commands}}
```

**Step 2: Import in Your File**
```{{target_framework}}
{{import_example}}
```

**Step 3: Add Animation Code**
```{{target_framework}}
{{integration_code}}
```

**Step 4: Update Your HTML/Template**
```html
{{html_requirements}}
```

**Step 5: Test Checklist**
- [ ] Animation runs smoothly (watch for 60fps)
- [ ] No console errors
- [ ] Works on resize/orientation change
- [ ] Reduced-motion fallback works
- [ ] Cleanup prevents memory leaks
- [ ] Framework lifecycle respected

<template-output>integration_guide, installation_commands, html_requirements, test_checklist</template-output>
</step>

<step n="5" goal="Validation Phase (Optional - If Chrome DevTools MCP Available)">
<check if="chrome_devtools_mcp_available AND dev_url_provided">

<action>Perform automated performance validation</action>

**Initiating performance validation...**

**Validation Steps:**

1. **Navigate to dev URL**
   ```
   Navigate: {{dev_url}}
   ```

2. **Visual Baseline**
   ```
   Take Screenshot: Before animation
   ```

3. **Start Performance Trace**
   ```
   Start Trace
   Trigger Animation
   Wait 3 seconds
   Stop Trace
   ```

4. **Analyze Performance**
   ```
   Analyze Insight:
   - Average FPS
   - Frame drops
   - Paint time
   - JS execution time
   ```

5. **CPU Throttle Test**
   ```
   Emulate CPU: 4x slowdown
   Repeat trace
   Check FPS still >= 30
   ```

6. **Console Check**
   ```
   List Console Messages
   Verify: Zero errors
   ```

7. **Visual Final**
   ```
   Take Screenshot: After animation
   ```

**Validation Report:**
- Average FPS: {{fps_average}}
- Min FPS: {{fps_minimum}}
- Paint Time: {{paint_time}}
- JS Execution: {{js_execution}}
- Console Errors: {{error_count}}
- CPU Throttle FPS: {{throttled_fps}}
- Status: {{pass_fail}}

<template-output>validation_report, fps_metrics, console_status, screenshots</template-output>

</check>

<check if="else">

<action>Provide manual validation guide</action>

**Chrome DevTools MCP not available or no dev URL provided.**

**Manual Validation Guide:**

1. **Open Chrome DevTools**
   - Press F12
   - Go to Performance tab

2. **Record Animation**
   - Click Record
   - Trigger animation
   - Stop recording

3. **Check Metrics**
   - Frame rate (should be 60fps)
   - Paint times (should be <16ms)
   - JavaScript execution (<5ms per frame)

4. **CPU Throttle Test**
   - Performance > CPU: 4x slowdown
   - Re-test animation
   - Should maintain 30+ fps

5. **Console Check**
   - Check Console tab
   - Verify zero errors

6. **Visual Check**
   - Animation smooth and natural
   - No jank or stuttering
   - Timing feels right

<template-output>manual_validation_guide</template-output>

</check>
</step>

<step n="6" goal="Delivery - Complete Package">
<action>Assemble and present complete deliverable</action>

**🎬 PRODUCTION COMPLETE - THAT'S A WRAP!**

**Delivered:**

### 1. Research Report
{{research_report}}

### 2. Production-Ready Code
```{{target_framework}}
{{implementation_code}}
```

### 3. Integration Guide
{{integration_guide}}

### 4. Validation Report
{{validation_report}}

### 5. Summary
- **Animation:** {{animation_request}}
- **Pattern Used:** {{pattern_name}}
- **GSAP Version:** {{gsap_version}}
- **Plugins:** {{plugins_used}}
- **Framework:** {{target_framework}}
- **Performance:** {{performance_summary}}
- **Accessibility:** ✅ Compliant
- **Status:** Ready for integration

**Next Steps:**
1. Copy code into {{component_context}}
2. Follow integration guide
3. Test using checklist
4. Deploy with confidence

**Want to add this to the pattern library for future reuse? [y/n]**

<ask response="add_to_library">Add to pattern library?</ask>

<check if="add_to_library == yes">
<action>Create pattern library entry</action>

```yaml
id: pattern-{{generate_uuid}}
name: "{{pattern_name}}"
category: "{{category}}"
complexity: "{{complexity}}"
gsap_version: "{{gsap_version}}"
plugins_required: {{plugins_used}}
description: "{{description}}"
code_example: |
  {{implementation_code}}
created_date: "{{date}}"
success_count: 1
tags: {{tags}}
framework: "{{target_framework}}"
performance_notes: "{{performance_summary}}"
inspiration: "{{citations}}"
```

**Pattern saved to library: {{pattern_name}}**
</check>

<action>Save complete package to output file</action>

**📄 Complete documentation saved to:**
{{output_file}}

<template-output>complete_package, output_file, pattern_library_entry</template-output>
</step>

</workflow>

## Key Features of This Workflow

### 1. True Automation
- User provides requirements ONCE
- Task tool handles research and implementation
- Zero manual agent switching
- Complete results delivered

### 2. Task Tool Usage
- Research phase: Task tool → general-purpose agent with MCP prompts
- Implementation phase: Task tool → general-purpose agent with research context
- Proper orchestration, not manual routing

### 3. Real MCP Integration
- Explicit tool calls (perplexity_research, rag_search_knowledge_base, etc.)
- Error handling and graceful degradation
- Multi-source synthesis

### 4. Quality Standards
- Production-ready code from first generation
- Full accessibility compliance
- Performance validation (if Chrome DevTools available)
- Complete documentation

### 5. Pattern Library Integration
- Successful animations can be saved as patterns
- Grows library organically through usage
- Future implementations can reuse proven patterns

## Success Metrics

- **Automation:** 0 manual steps after requirements gathering
- **Time:** 30-60 minutes complete pipeline
- **Quality:** Production-ready, 60fps target, accessible
- **User Experience:** "This actually saved time"

---

*Flagship workflow for GSAP Excellence Engine v2*
*Demonstrates true automation through Task tool orchestration*
