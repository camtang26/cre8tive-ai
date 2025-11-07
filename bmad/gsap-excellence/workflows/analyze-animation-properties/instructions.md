# Analyze Animation Properties Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Gather Animation Code">
<ask>Provide the GSAP animation code you want to analyze for property optimization</ask>
<action>Store response as animation_code</action>

<template-output>animation_code</template-output>
</step>

<step n="2" goal="Analyze Current Properties">
<action>Parse animation code and identify all animated properties</action>

<action>Categorize properties:</action>
- **Layout Properties (Trigger Reflow):** left, top, right, bottom, width, height, margin, padding
- **Transform Properties (GPU Accelerated):** x, y, scale, scaleX, scaleY, rotation, opacity

<action>Count occurrences of each category</action>

<action>Generate current_properties_summary including:</action>
- Total layout properties found
- Total transform properties found
- List of specific layout properties used
- List of specific transform properties used
- Performance impact assessment

<template-output>current_properties_summary</template-output>
</step>

<step n="3" goal="Generate Property Replacement Recommendations">
<action>For each layout property found, suggest GPU-accelerated transform equivalent:</action>
- left → x
- top → y
- width → scaleX (or use transform: scaleX())
- height → scaleY (or use transform: scaleY())
- margin-left → x
- margin-top → y

<action>Format as bulleted list with clear before → after mappings</action>

<action>Include performance benefit explanation for each replacement</action>

<template-output>property_replacements_list</template-output>
</step>

<step n="4" goal="Identify GPU Acceleration Opportunities">
<action>Analyze code for GPU acceleration opportunities:</action>

**Check for:**
- Missing force3D usage (recommend force3D: "auto")
- Missing will-change CSS hint
- Opportunities to use transforms instead of layout properties
- Opacity animation opportunities (GPU accelerated)

<action>Generate recommendations including:</action>
- force3D configuration suggestions
- will-change CSS additions
- Hardware acceleration tips
- Performance gain estimates

<template-output>gpu_opportunities</template-output>
</step>

<step n="5" goal="Present Analysis Report">
<action>Generate report using template.md</action>
<action>Save to: {{default_output_file}}</action>
</step>

</workflow>
