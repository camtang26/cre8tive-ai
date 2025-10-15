# Debug Animation Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>Load: {project-root}/bmad/gsap-excellence/workflows/debug-animation/workflow.yaml</critical>

<workflow>

<step n="1" goal="Gather Debug Information">
<ask response="animation_code">Provide the animation code that's having issues</ask>
<ask response="issues_description">What's wrong? (jank, timing, visual bugs, console errors)</ask>
<ask response="expected_behavior">What should the animation do correctly?</ask>
<ask response="page_url">Dev server URL? (optional, for Chrome DevTools testing)</ask>

<template-output>animation_code, issues_description, expected_behavior</template-output>
</step>

<step n="2" goal="Visual & Console Analysis">
<check if="page_url_provided">
<action>Use Chrome DevTools MCP: take_screenshot to capture current state</action>
<action>Use Chrome DevTools MCP: list_console_messages to check for errors</action>
</check>

<action>Analyze animation code for common issues:</action>
- Console errors or GSAP warnings
- Performance anti-patterns (layout thrashing, expensive properties)
- Timing issues (wrong easing, inappropriate duration)
- Cleanup missing (memory leaks)
- Browser compatibility issues

<template-output>visual_analysis, console_errors, code_analysis</template-output>
</step>

<step n="3" goal="Root Cause Diagnosis">
<action>Identify root cause based on analysis</action>

Common Issues:
- **Jank:** Animating layout properties, missing GPU acceleration
- **Timing:** Wrong easing curves, inappropriate duration
- **Visual Bugs:** Z-index issues, transform-origin problems
- **Errors:** GSAP not loaded, selectors wrong, timeline conflicts
- **Cleanup:** Animations not killed on unmount

<action if="unclear">Use Archon MCP to search GSAP debugging techniques</action>

<template-output>root_cause, diagnosis_explanation</template-output>
</step>

<step n="4" goal="Implement Fix">
<action>Editor implements fix based on diagnosis</action>

Fix Strategies:
- Replace layout properties with transforms
- Adjust easing curves for natural motion
- Add GPU acceleration (will-change)
- Fix selectors or GSAP setup
- Implement proper cleanup

<action>Generate fixed animation code</action>

<template-output>fixed_code, fix_explanation</template-output>
</step>

<step n="5" goal="Validation">
<check if="tech_director_available">
<action>Tech Director validates fix:</action>
- Take screenshot of fixed animation
- Check console (should be clean)
- Quick performance check
</check>

<template-output>validation_results</template-output>
</step>

<step n="6" goal="Present Debug Report">
<action>Generate debug report using template.md</action>
<action>Save to: {{default_output_file}}</action>

Report includes:
- Root cause diagnosis
- Fixed code
- Before/after comparison
- Validation results
- Prevention tips

<template-output>final_debug_report</template-output>
</step>

</workflow>
