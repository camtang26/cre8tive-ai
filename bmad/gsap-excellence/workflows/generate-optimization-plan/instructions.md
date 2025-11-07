# Generate Optimization Plan Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Gather Optimization Context">
<ask>Provide the GSAP animation code to optimize (or path to property analysis from analyze-animation-properties workflow)</ask>
<action>Store response as animation_code</action>

<ask>What performance issues are you experiencing? (e.g., "Drops to 40fps on mid-range devices", "Janky on mobile", "High CPU usage")</ask>
<action>Store response as performance_issues</action>
</step>

<step n="2" goal="Generate Executive Summary">
<action>Create optimization summary including:</action>
- Current performance status
- Target performance (60fps)
- Number of optimizations identified
- Estimated performance gain

<template-output>optimization_summary</template-output>
</step>

<step n="3" goal="Generate Property Optimization Code Examples">
<action>Create before/after code examples for property replacements:</action>

**For each layout property found, generate:**

**BEFORE (Layout Property - Main Thread):**
```javascript
gsap.to(element, { left: "100px", width: "200px" })
```

**AFTER (Transform - GPU Accelerated):**
```javascript
gsap.to(element, { x: 100, scaleX: 2 })
```

<action>Include performance benefit explanation for each replacement</action>

<action>Format as markdown sections with code blocks</action>

<template-output>property_optimizations</template-output>
</step>

<step n="4" goal="Generate GPU Acceleration Code">
<action>Create GPU acceleration enhancements:</action>

**force3D Configuration:**
```javascript
// Option 1: Auto (default) - switches to 3D during animation
gsap.to(element, { x: 100, force3D: "auto" })

// Option 2: True - maintains 3D throughout
gsap.to(element, { x: 100, force3D: true })
```

**will-change CSS:**
```css
.animated-element {
  will-change: transform;  /* Browser optimization hint */
}
```

<action>Include when to use each option and performance implications</action>

<template-output>gpu_acceleration_code</template-output>
</step>

<step n="5" goal="Generate Timeline Batching Code">
<action>Create timeline batching example if multiple tweens detected:</action>

**BEFORE (Multiple Tweens - Multiple Reflows):**
```javascript
gsap.to(el1, { x: 100 })
gsap.to(el2, { y: 50 })
gsap.to(el3, { scale: 1.5 })
```

**AFTER (Batched Timeline - Optimized):**
```javascript
const tl = gsap.timeline()
tl.to(el1, { x: 100 }, 0)
  .to(el2, { y: 50 }, 0)
  .to(el3, { scale: 1.5 }, 0)
```

<action>Explain reflow reduction benefit</action>

<template-output>timeline_batching_code</template-output>
</step>

<step n="6" goal="Generate Memory Cleanup Code">
<action>Create cleanup pattern examples:</action>

**Cleanup on Component Unmount:**
```javascript
// React example with useGSAP
useGSAP(() => {
  const tl = gsap.timeline()
  tl.to(...)

  return () => {
    tl.kill()  // Cleanup on unmount
  }
}, [])

// Vanilla JS example
const tl = gsap.timeline()
// ... animation code ...

// On cleanup:
tl.kill()
gsap.killTweensOf(element)
```

<action>Include memory leak prevention best practices</action>

<template-output>memory_cleanup_code</template-output>
</step>

<step n="7" goal="Generate Priority Recommendations">
<action>Rank optimizations by priority:</action>

**HIGH PRIORITY (Do First):**
- Property replacements (layout → transform)
- Critical GPU acceleration

**MEDIUM PRIORITY (Do Soon):**
- Timeline batching
- will-change CSS hints

**LOW PRIORITY (Nice to Have):**
- Advanced force3D tuning
- Micro-optimizations

<template-output>priority_recommendations</template-output>
</step>

<step n="8" goal="Calculate Expected Performance Gain">
<action>Generate performance projection:</action>

**Before Optimization:**
- FPS: [current or estimated based on issues]
- Paint Time: [estimated]
- JS Execution: [estimated]

**After Optimization (Projected):**
- FPS: 60 (Target achieved)
- Paint Time: <16ms
- JS Execution: <5ms

**Estimated Gain:** [calculate based on optimizations]

<template-output>expected_performance_gain</template-output>
</step>

<step n="9" goal="Present Optimization Plan">
<action>Generate optimization plan using template.md</action>
<action>Save to: {{default_output_file}}</action>
</step>

</workflow>
