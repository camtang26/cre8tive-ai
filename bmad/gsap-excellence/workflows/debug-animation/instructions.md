# Debug Animation Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>Load: {project-root}/bmad/gsap-excellence/workflows/debug-animation/workflow.yaml</critical>

<workflow>

<step n="1" goal="Gather Debug Information">
<ask>Provide the animation code that's having issues</ask>
<action>Store response as animation_code</action>

<ask>What's wrong with the animation? (jank, timing issues, visual bugs, console errors, etc.)</ask>
<action>Store response as issues_description</action>

<ask>What should the animation do correctly?</ask>
<action>Store response as expected_behavior</action>

<ask>Dev server URL? (optional - press enter to skip, provide URL for Chrome DevTools testing)</ask>
<action>Store response as page_url</action>

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

<action>Compile console errors (if any found, or "No console errors detected")</action>

<template-output>console_errors</template-output>
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
<action>Generate prevention tips based on root cause analysis</action>
<action>Create list of best practices to avoid this issue in future:</action>
- Common pitfalls related to this bug type
- GSAP best practices to prevent recurrence
- Testing strategies to catch early

<template-output>prevention_tips</template-output>

<action>Generate debug report using template.md</action>
<action>Save to: {{default_output_file}}</action>
</step>

</workflow>
