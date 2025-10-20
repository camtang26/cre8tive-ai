# Refine Timing Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Analyze Current Timing">
<action>Greet {user_name} in {communication_language}</action>
<action>All written outputs must use {communication_language}</action>
<ask response="animation_code">Provide animation code</ask>
<ask response="timing_issues">What feels wrong about the timing?</ask>

<action>Analyze timing elements:</action>
- Duration (too fast/slow?)
- Easing curves (appropriate?)
- Stagger timing (choreography)
- Overlap/gaps between animations

<template-output>timing_analysis</template-output>
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

<action>Document timing analysis from step 1</action>
<action>Generate refined animation code with improved timing</action>

<template-output>timing_analysis, refined_code, refinement_explanation</template-output>
</step>

<step n="3" goal="Present Refinement">
<action>Generate report using template.md</action>
<action>Save to: {{default_output_file}}</action>

<template-output>final_report</template-output>
</step>

</workflow>
