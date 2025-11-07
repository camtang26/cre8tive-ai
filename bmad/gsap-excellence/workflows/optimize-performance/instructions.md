# Optimize Performance Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Setup Profiling">
<ask>What is the dev server URL for profiling?</ask>
<action>Store response as page_url</action>

<ask>How should I trigger the animation?</ask>
<action>Store response as animation_trigger</action>

<template-output>page_url, animation_trigger</template-output>
</step>

<step n="2" goal="Profile Performance">
<action>Use Chrome DevTools MCP: performance_start_trace</action>
<action>Trigger animation</action>
<action>Use Chrome DevTools MCP: performance_stop_trace</action>

<action>Analyze metrics:</action>
- Average FPS
- Minimum FPS
- Paint time
- JS execution time
- Frame drops

<template-output>performance_metrics</template-output>
</step>

<step n="3" goal="Test Under Constraints">
<action>Use Chrome DevTools MCP: emulate_cpu with 4x slowdown</action>
<action>Re-run profiling</action>

Target: 60fps on mid-range devices (4x CPU throttle)

<template-output>throttled_performance</template-output>
</step>

<step n="4" goal="Identify Bottlenecks">
<action>Analyze performance data for bottlenecks:</action>
- Layout thrashing
- Expensive properties (width, height, top, left)
- Paint bottlenecks
- JS execution issues

<template-output>bottleneck_analysis</template-output>
</step>

<step n="5" goal="Generate Optimization Recommendations">
<action>Provide targeted optimizations:</action>

**Common Fixes:**
- Use transform/opacity only (GPU accelerated)
- Add will-change: transform
- Avoid animating layout properties
- Throttle complex animations
- Lazy load GSAP plugins

<template-output>optimization_recommendations</template-output>
</step>

<step n="6" goal="Present Performance Report">
<action>Determine performance status based on results</action>

<check if="fps >= 60 AND paint_time < 16">
  <action>Set performance_status = "✅ PASSING - 60fps achieved"</action>
</check>

<check if="fps < 60 OR paint_time >= 16">
  <action>Set performance_status = "❌ FAILING - Optimization needed"</action>
</check>

<template-output>performance_status</template-output>

<action>Generate report using template.md</action>
<action>Save to: {{default_output_file}}</action>
</step>

</workflow>
