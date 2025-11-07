# Refine Timing Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Analyze Current Timing">
<ask>Provide the animation code you want to refine</ask>
<action>Store response as animation_code</action>

<ask>What feels wrong about the timing? (too fast, too slow, robotic, awkward, etc.)</ask>
<action>Store response as timing_issues</action>

<action>Analyze timing elements:</action>
- Duration (too fast/slow?)
- Easing curves (appropriate?)
- Stagger timing (choreography)
- Overlap/gaps between animations

<template-output>animation_code, timing_issues, timing_analysis</template-output>
</step>

<step n="2" goal="Refine Timing">
<action>Apply timing refinements:</action>

**Duration Adjustments:**
- UI reveals: 200-400ms
- Transitions: 300-600ms
- Hero animations: 600-1000ms

**Easing Selection:**
- Reveals: power2.out
- Entrances: back.out(1.7)
- Exits: power2.in
- Natural motion: power3.inOut

<action>Generate refined animation code</action>

<template-output>refined_code, refinement_explanation</template-output>
</step>

<step n="3" goal="Present Refinement">
<action>Generate report using template.md</action>
<action>Save to: {{default_output_file}}</action>
</step>

</workflow>
