<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/gsap-excellence/workflows/create-morph-animation/workflow.yaml</critical>

# SVG Morph Animation - Premium Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-morph-animation
**Version:** 2.0.0-premium
**Purpose:** Create cinematic SVG shape morphing using MorphSVGPlugin with research-backed patterns, point optimization, and performance precompile techniques

---

## Overview

MorphSVGPlugin creates liquid, cinematic shape transitions that elevate user experiences from standard to premium. This workflow uses Deep-Research Section 2.3 and Archon MCP knowledge to implement professional SVG morphing with systematic optimization.

**🚨 BREAKTHROUGH: MorphSVG is FREE in GSAP 3.13+ (October 2024)**

As documented in Section 2.3, *"as of late 2023/2024, GSAP and all its official plugins are free for everyone (no club membership needed)"* - this includes MorphSVGPlugin, which was previously a paid premium plugin.

**What This Means:**
- No licensing restrictions for commercial projects
- Full access to shape interpolation and point optimization
- Professional morphing capabilities in standard GSAP bundle
- No setup barriers - just import and use

**Reference:** https://gsap.com/blog/gsap-3-13-0-release

---

## Prerequisites

Before starting, ensure you have:

- **GSAP 3.13+** installed (`npm install gsap` or `<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js">`)
- **SVG elements** prepared (inline SVG recommended for morphing control)
- **Basic SVG knowledge** (understanding paths, viewBox, coordinate systems)
- **MorphSVGPlugin imported** and registered

**Minimum Setup:**
```javascript
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)
```

---

## Workflow Steps

<step n="1" goal="Context Gathering - Understand Morph Requirements">

<ask name="morph_category">
**What type of morphing animation are you creating?**

1. **Icon Morphing** - UI icon transitions (menu ↔ X, play ↔ pause)
2. **Shape Transitions** - Geometric transformations (circle → square → star)
3. **Blob Morphing** - Organic, liquid effects (background blobs, loading animations)
4. **Text to Shape** - Typography morphing into icons/illustrations
5. **Multi-Stage Sequence** - Complex 3+ stage morphing (storytelling, feature tours)

Enter the number (1-5):
</ask>

<ask name="svg_elements">
**SVG Element Details**

Please provide:
- **Path IDs or selectors** (e.g., "#shape1", "#shape2", ".morph-target")
- **Number of shapes** in sequence (2 for simple morph, 3+ for sequence)
- **SVG location** (inline in HTML or external file?)

**Example:** "#menu-icon → #x-icon" (2 shapes, inline SVG)
</ask>

<ask name="framework_context">
**Framework Context**

What framework are you using?

1. **React** (with useGSAP hook)
2. **Next.js** (SSR considerations)
3. **Vue** (lifecycle hooks)
4. **Vanilla JS** (no framework)

Enter the number (1-4):
</ask>

<action>
Store user responses:
- {{morph_category}} = Selected morph type
- {{svg_elements}} = SVG element details
- {{framework_context}} = Framework choice

These will inform pattern selection and implementation approach.
</action>

</step>

---

<step n="2" goal="MANDATORY Research Gate - Deep-Research + Archon MCP">

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:** This is a **MANDATORY blocking checkpoint**. You **CANNOT** proceed to Step 3 without completing ALL research queries and displaying findings to the user.

---

### Phase 1: Deep-Research Section 2.3 (The 2024 GSAP Plugin Ecosystem - All FREE)

**Read COMPLETE Section:**
```
{deep_research_base}/07-23-the-2024-gsap-plugin-ecosystem-all-free.md
```

**Extract and Document:**

1. **MorphSVG FREE Status Confirmation**
   - *"as of late 2023/2024, GSAP and all its official plugins are free for everyone (no club membership needed)"*
   - **Impact:** MorphSVGPlugin now accessible without licensing barriers
   - **Source:** Section 2.3, lines 3-4

2. **MorphSVG Capabilities**
   - *"MorphSVG: Allows morphing one SVG shape into another. This is useful for icon transitions or creative effects (like a circle morphing into a square, or a play button icon morphing into a pause icon). It handles shape interpolation and even optimizes path points if needed."*
   - **Source:** Section 2.3, lines 149-150

3. **Implementation Simplicity**
   - *"Such morphing was a hallmark of advanced SVG animations -- now it's a one-liner."*
   - Example: `gsap.to("#icon1", { morphSVG: "#icon2", duration: 1, ease: "elastic.out(1, 0.5)" });`
   - **Source:** Section 2.3, lines 155-156

4. **Use Case Guidance**
   - *"Use it to create delightful micro-interactions or even large visuals (e.g., background blobs morphing shape)."*
   - **Source:** Section 2.3, line 157

**Document:** Create "Section 2.3 Findings" summary with these 4 key insights.

---

### Phase 2: Archon MCP Pattern Research

Execute ALL required queries based on {{morph_category}}:

#### Query Set A: Icon Morphing (if morph_category = 1)

**Query 1: Icon Transition Patterns**
```javascript
rag_search_code_examples("MorphSVG icon morphing", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Find proven icon transition implementations (menu → X, play → pause)
**Document:** What icon morphing patterns are available? What easing curves work best?

**Query 2: Point Optimization for Icons**
```javascript
rag_search_knowledge_base("MorphSVG shapeIndex optimization", source_id="b9f6b322298feb21", match_count=6)
```
**Purpose:** Learn shapeIndex techniques for smooth icon transitions
**Document:** How to use "auto", "log", and precompile for icon morphs?

---

#### Query Set B: Shape/Blob Morphing (if morph_category = 2 or 3)

**Query 1: Geometric Shape Patterns**
```javascript
rag_search_code_examples("MorphSVG shape sequence", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Multi-shape timeline morphing patterns
**Document:** How to sequence multiple shape transformations?

**Query 2: Blob Morphing with Yoyo**
```javascript
rag_search_knowledge_base("MorphSVG repeat yoyo blob", source_id="b9f6b322298feb21", match_count=5)
```
**Purpose:** Organic blob animation patterns
**Document:** Best practices for looping blob morphs with yoyo?

**Query 3: Point Count Optimization**
```javascript
rag_search_knowledge_base("MorphSVG point count matching", source_id="b9f6b322298feb21", match_count=5)
```
**Purpose:** Understanding point count impact on morph quality
**Document:** Why similar point counts matter? How to optimize paths?

---

#### Query Set C: Multi-Stage Sequences (if morph_category = 5)

**Query 1: Timeline Sequencing**
```javascript
rag_search_code_examples("MorphSVG timeline multi-stage", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Complex multi-shape sequence patterns
**Document:** How to build timeline with 3+ morphing stages?

**Query 2: Performance Precompile**
```javascript
rag_search_knowledge_base("MorphSVG precompile performance", source_id="b9f6b322298feb21", match_count=6)
```
**Purpose:** Production optimization techniques
**Document:** When and how to use precompile for complex sequences?

---

#### Query Set D: Universal Queries (ALL morph categories)

**Query 3: convertToPath Technique**
```javascript
rag_search_code_examples("MorphSVGPlugin convertToPath", source_id="b9f6b322298feb21", match_count=5)
```
**Purpose:** Learn shape-to-path conversion (REQUIRED for all morphing)
**Document:** How to convert circles, rects, polygons to paths?

**Query 4: Latest MorphSVG API**
```javascript
context7_get_library_docs("MorphSVGPlugin", version="latest")
```
**Purpose:** Verify current API and new features in GSAP 3.13+
**Document:** Any new MorphSVG features since FREE release?

---

### Phase 3: Research Documentation

Create comprehensive "Research Findings" section with:

**1. Section 2.3 Deep-Research Summary**
- MorphSVG FREE status (verbatim quote)
- Capabilities overview (verbatim quote)
- Use case guidance (verbatim quote)

**2. Archon MCP Pattern Catalog**
- Icon morphing patterns found (if applicable)
- Shape/blob morphing patterns found (if applicable)
- Timeline sequencing patterns found (if applicable)
- convertToPath examples (universal)
- shapeIndex optimization techniques (universal)
- Precompile performance patterns (if applicable)

**3. Implementation Recommendations**
- Best pattern for {{morph_category}}
- Recommended easing curves
- Point optimization strategy
- Performance considerations

<checkpoint type="approval-gate" blocking="true">

<halt>
🚨 **STOP - MANDATORY APPROVAL REQUIRED**

You **MUST** display ALL research findings to the user before proceeding:

**Display Requirements:**
1. Section 2.3 summary with verbatim quotes
2. Archon MCP pattern catalog (list all code examples found)
3. Implementation recommendations for {{morph_category}}

**User Action Required:**
User must explicitly continue with **"Continue [c]"** or similar affirmative response.

**Agent Mandate:**
You **CANNOT** rationalize skipping this step. Research enforcement is blocking by design to ensure expertise is actually consulted, not hallucinated.
</halt>

</checkpoint>

</research-gate>

</step>

---

<step n="3" goal="SVG Path Preparation - Convert Shapes to Paths">

<action>
**CRITICAL REQUIREMENT:** MorphSVG only works with `<path>` elements, NOT with basic shapes like `<circle>`, `<rect>`, `<polygon>`, or `<ellipse>`.

**Check user's SVG elements:**
- If using `<circle>`, `<rect>`, `<polygon>`, or `<ellipse>` → **MUST convert to paths**
- If already using `<path>` elements → Skip conversion (proceed to Step 4)

**Conversion Method (from Archon research):**
```javascript
// Convert ALL basic shapes to paths at initialization
MorphSVGPlugin.convertToPath("circle, rect, polygon, ellipse");
```

**Alternative: Convert specific elements only**
```javascript
// Convert specific shapes
const circle = document.querySelector("#my-circle");
const rect = document.querySelector("#my-rect");
MorphSVGPlugin.convertToPath([circle, rect]);
```

**What This Does:**
- Replaces `<circle>`, `<rect>`, etc. with equivalent `<path>` elements
- Preserves visual appearance (same shape, now as path)
- Enables morphing capability (MorphSVG can now animate them)
- One-time operation at initialization (minimal performance impact)

**Implementation Pattern (from Archon MCP research):**

```javascript
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

// Convert shapes on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Convert ALL basic shapes in SVG to paths
  MorphSVGPlugin.convertToPath("#my-svg circle, #my-svg rect, #my-svg polygon");

  // Now morphing will work
  gsap.to("#shape1", { morphSVG: "#shape2", duration: 1 });
});
```

**Generate conversion code for user's {{svg_elements}}.**
</action>

<template-output>path_conversion_code</template-output>

</step>

---

<step n="4" goal="Implement Core Morphing Pattern - Research-Backed Code">

<action>
Based on {{morph_category}} and research findings from Step 2, generate production-ready MorphSVG code using patterns discovered in Archon MCP.

---

### Pattern Library (Research-Backed from Archon MCP + Section 2.3)

#### Pattern 1: Simple Icon Morph (Icon Morphing Category)

**Use Case:** Menu → X, Play → Pause, Heart → Filled Heart

**Code (from Section 2.3 + Archon research):**
```javascript
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

// Simple icon transition
gsap.to("#menu-icon", {
  morphSVG: "#x-icon",
  duration: 0.4,
  ease: "power2.inOut"
});
```

**Research Source:** Section 2.3 demonstrates one-liner simplicity for icon morphing.

**Easing Recommendations (from workflow.yaml research):**
- `power2.inOut` - Smooth, professional feel
- `elastic.out(1, 0.5)` - Playful, bouncy (use sparingly)
- `back.out(1.7)` - Subtle overshoot (premium feel)

---

#### Pattern 2: Timeline Shape Sequence (Shape Transitions Category)

**Use Case:** Circle → Square → Triangle → Star (brand animations, loading states)

**Code (from Archon MCP research - "Morph SVG Shapes" example):**
```javascript
// Convert shapes to paths first
MorphSVGPlugin.convertToPath("circle, rect, polygon");

const tl = gsap.timeline({
  repeat: -1,  // Infinite loop
  repeatDelay: 0.5,
  yoyo: true,  // Reverse back to start
  defaults: { ease: "power2.inOut", duration: 1 }
});

tl.to("#shape", { morphSVG: "#circle" })
  .to("#shape", { morphSVG: "#square" })
  .to("#shape", { morphSVG: "#triangle" })
  .to("#shape", { morphSVG: "#star" });
```

**Research Source:** Archon MCP example "Morph SVG Shapes" with timeline sequencing.

**Key Technique:** Using `defaults` in timeline for consistent easing and duration across all morphs.

---

#### Pattern 3: Organic Blob Morphing (Blob Category)

**Use Case:** Background decorative blobs, loading animations, hover effects

**Code (from Section 2.3 + optimization research):**
```javascript
gsap.to("#blob", {
  morphSVG: {
    shape: "#target-blob",
    shapeIndex: "auto"  // Auto-optimize point matching
  },
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});
```

**Research Source:** Section 2.3 mentions "background blobs morphing shape" as a use case. ShapeIndex "auto" from Archon documentation.

**Why `shapeIndex: "auto"`?**
- MorphSVGPlugin automatically finds best point alignment
- Reduces "twisting" effect during morph
- Recommended for blob morphing with irregular shapes

**Easing for Organic Feel:**
- `sine.inOut` - Smooth, breathing motion
- `power1.inOut` - Gentle, natural easing
- `none` - Linear (for mechanical loops)

---

#### Pattern 4: Optimized Production Morph (Performance)

**Use Case:** Production-ready code with precompiled values for maximum performance

**Development Phase (logging shapeIndex):**
```javascript
gsap.to("#icon", {
  morphSVG: {
    shape: "#target",
    shapeIndex: "log"  // Console.log the calculated shapeIndex
  },
  duration: 0.4,
  ease: "power2.inOut"
});

// Check console output: "shapeIndex:[3]"
```

**Production Phase (using logged value):**
```javascript
// Using precomputed shapeIndex = [3] from console
gsap.to("#icon", {
  morphSVG: {
    shape: "#target",
    shapeIndex: [3]  // Skip runtime calculation
  },
  duration: 0.4,
  ease: "power2.inOut"
});
```

**Research Source:** Archon MCP documentation on "Log Morph Values" and "Precompile Morph Paths".

**Performance Gain:**
- Eliminates shapeIndex calculation at runtime
- Significant for complex paths (100+ points)
- Essential for repeated morph instances

---

#### Pattern 5: Multi-Stage Storytelling Sequence

**Use Case:** Feature tours, visual narratives, multi-step loading

**Code (extended timeline with color transitions):**
```javascript
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.inOut" }
});

tl.to("#shape", {
    morphSVG: "#stage1",
    fill: "#FFFF66"  // Yellow
  })
  .to("#shape", {
    morphSVG: "#stage2",
    fill: "#3399CC"  // Blue
  }, "+=0.5")  // 0.5s delay between stages
  .to("#shape", {
    morphSVG: "#stage3",
    fill: "#FFA500"  // Orange
  }, "+=0.5")
  .to("#shape", {
    morphSVG: "#stage4",
    fill: "#CC0000"  // Red
  }, "+=0.5");
```

**Research Source:** Archon MCP "Morph SVG Shapes" example with fill color transitions.

**Key Technique:** Combining morphSVG with fill color changes for richer visual storytelling.

---

#### Pattern 6: Hover-Triggered Icon Morph (Interactive)

**Use Case:** Interactive UI elements (hover to reveal, click to toggle)

**Code:**
```javascript
const menuIcon = document.querySelector("#menu-icon");
let isOpen = false;

menuIcon.addEventListener("click", () => {
  if (!isOpen) {
    // Menu → X
    gsap.to("#menu-icon", {
      morphSVG: "#x-icon",
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  } else {
    // X → Menu
    gsap.to("#menu-icon", {
      morphSVG: "#original-menu",
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }
  isOpen = !isOpen;
});
```

**Key Technique:** Toggle state with reversible morph animation.

---

#### Pattern 7: Scroll-Driven Morph (ScrollTrigger Integration)

**Use Case:** Shape changes as user scrolls (parallax effects, reveal animations)

**Code:**
```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger)

gsap.to("#shape", {
  morphSVG: "#target-shape",
  scrollTrigger: {
    trigger: "#morph-section",
    start: "top center",
    end: "bottom center",
    scrub: 1  // Smooth scrubbing tied to scroll position
  }
});
```

**Research Source:** Section 2.3 mentions ScrollTrigger as compatible plugin for advanced effects.

---

#### Pattern 8: DrawSVG + MorphSVG Combo (Cinematic Effect)

**Use Case:** Shape morphs WHILE stroke is being drawn (premium reveal effect)

**Code:**
```javascript
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin)

const tl = gsap.timeline();

// Simultaneously morph and draw
tl.from("#shape", {
  morphSVG: "#start-shape",
  drawSVG: "0%",
  duration: 2,
  ease: "power2.out"
});
```

**Research Source:** Archon MCP examples combining DrawSVG and MorphSVG.

---

#### Pattern 9: Canvas Rendering (Advanced)

**Use Case:** Morph rendered to HTML5 canvas instead of DOM (special effects)

**Code (from Archon MCP research):**
```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Custom render function
function renderToCanvas(rawPath, target) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = target.style.fill;
  ctx.beginPath();

  for (let j = 0; j < rawPath.length; j++) {
    const segment = rawPath[j];
    ctx.moveTo(segment[0], segment[1]);
    for (let i = 2; i < segment.length; i += 6) {
      ctx.bezierCurveTo(
        segment[i], segment[i+1],
        segment[i+2], segment[i+3],
        segment[i+4], segment[i+5]
      );
    }
  }
  ctx.fill("evenodd");
}

// Use custom render
gsap.to("#shape", {
  morphSVG: {
    shape: "#target",
    render: renderToCanvas
  },
  duration: 1
});
```

**Research Source:** Archon MCP "Morph SVG to Canvas" example.

---

#### Pattern 10: Text-to-Shape Morph (Typography Magic)

**Use Case:** Letter transforming into logo, word becoming illustration

**Code:**
```javascript
// Requires text converted to path (use Illustrator or online converter)
gsap.to("#letter-A-path", {
  morphSVG: "#mountain-logo-path",
  duration: 1.5,
  ease: "expo.out"
});
```

**Note:** Text must be converted to SVG paths first (Illustrator: Type → Create Outlines).

---

### Implementation for User

Based on {{morph_category}}, select and customize the appropriate pattern(s) from above.

**Generate:**
1. Complete production-ready code
2. Framework-specific implementation (if {{framework_context}} = React/Next.js/Vue)
3. Comments explaining each morphSVG option used
4. Performance optimizations (shapeIndex, precompile if applicable)
5. Accessibility considerations (prefers-reduced-motion)

</action>

<template-output>morph_implementation_code</template-output>

</step>

---

<step n="5" goal="Framework Integration - Lifecycle-Safe Implementation">

<action if="framework_context = React">

### React Implementation (useGSAP Hook)

**Install @gsap/react:**
```bash
npm install @gsap/react
```

**Code Pattern (lifecycle-safe with cleanup):**
```javascript
import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

function MorphComponent() {
  const svgRef = useRef(null)
  const tlRef = useRef(null)

  useGSAP(() => {
    // Convert shapes to paths
    MorphSVGPlugin.convertToPath(
      svgRef.current.querySelectorAll("circle, rect")
    );

    // Create morphing timeline
    tlRef.current = gsap.to("#shape", {
      morphSVG: "#target",
      duration: 1,
      ease: "power2.inOut",
      paused: true
    });

    // Cleanup handled automatically by useGSAP
  }, { scope: svgRef });

  const handleClick = () => {
    tlRef.current?.play();
  };

  return (
    <svg ref={svgRef} viewBox="0 0 100 100">
      <path id="shape" d="..." />
      <path id="target" d="..." style={{ display: 'none' }} />
      <button onClick={handleClick}>Morph</button>
    </svg>
  );
}
```

**Key Techniques:**
- `useGSAP()` hook handles cleanup automatically
- `useRef()` for SVG and timeline references
- `scope` option limits GSAP selectors to component SVG

</action>

<action if="framework_context = Next.js">

### Next.js Implementation (SSR Handling)

**Critical:** MorphSVGPlugin is client-side only (requires DOM).

**Code Pattern (dynamic import with ssr: false):**
```javascript
'use client'  // Next.js 13+ App Router

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import with SSR disabled
const MorphAnimation = dynamic(() => import('./MorphAnimation'), {
  ssr: false
});

export default function Page() {
  return <MorphAnimation />;
}
```

**MorphAnimation.jsx (client component):**
```javascript
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

export default function MorphAnimation() {
  const svgRef = useRef(null)

  useGSAP(() => {
    // Only runs on client (after hydration)
    MorphSVGPlugin.convertToPath(svgRef.current.querySelectorAll("circle"));

    gsap.to("#shape", {
      morphSVG: "#target",
      duration: 1,
      repeat: -1,
      yoyo: true
    });
  }, { scope: svgRef });

  return (
    <svg ref={svgRef} viewBox="0 0 100 100">
      {/* SVG content */}
    </svg>
  );
}
```

**Key Techniques:**
- Dynamic import with `ssr: false` prevents SSR errors
- `'use client'` directive for App Router
- Morphing initializes only after hydration

</action>

<action if="framework_context = Vue">

### Vue Implementation (Composition API)

**Code Pattern (onMounted + onBeforeUnmount):**
```vue
<template>
  <svg ref="svgRef" viewBox="0 0 100 100">
    <path id="shape" d="..." />
    <path id="target" d="..." style="display: none" />
  </svg>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

const svgRef = ref(null)
let morphTween = null

onMounted(() => {
  // Convert shapes
  MorphSVGPlugin.convertToPath(
    svgRef.value.querySelectorAll("circle, rect")
  );

  // Create morph animation
  morphTween = gsap.to("#shape", {
    morphSVG: "#target",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

onBeforeUnmount(() => {
  // CRITICAL: Kill tween to prevent memory leaks
  morphTween?.kill();
});
</script>
```

**Key Techniques:**
- `onMounted()` for initialization (DOM is ready)
- `onBeforeUnmount()` for cleanup (prevent memory leaks)
- Template refs for SVG access

</action>

<action if="framework_context = Vanilla JS">

### Vanilla JavaScript Implementation

**Code Pattern (DOMContentLoaded + cleanup):**
```javascript
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

let morphTween = null

document.addEventListener('DOMContentLoaded', () => {
  // Convert shapes to paths
  MorphSVGPlugin.convertToPath("circle, rect, polygon");

  // Create morph animation
  morphTween = gsap.to("#shape", {
    morphSVG: "#target",
    duration: 1,
    ease: "power2.inOut",
    paused: true
  });

  // Interactive trigger
  document.querySelector("#trigger-btn").addEventListener("click", () => {
    morphTween.restart();
  });
});

// Cleanup on page navigation (if SPA)
window.addEventListener('beforeunload', () => {
  morphTween?.kill();
});
```

**Key Techniques:**
- Initialize after `DOMContentLoaded`
- Store tween reference for cleanup
- Kill tweens on navigation (prevent memory leaks)

</action>

<template-output>framework_implementation</template-output>

</step>

---

<step n="6" goal="Performance Optimization - Production Readiness">

<action>

Apply research-backed optimization techniques from Archon MCP:

### Optimization 1: shapeIndex Precompilation

**Development (log shapeIndex):**
```javascript
gsap.to("#icon", {
  morphSVG: {
    shape: "#target",
    shapeIndex: "log"  // Console: "shapeIndex:[3]"
  },
  duration: 0.4
});
```

**Production (use logged value):**
```javascript
gsap.to("#icon", {
  morphSVG: {
    shape: "#target",
    shapeIndex: [3]  // Skip runtime calculation
  },
  duration: 0.4
});
```

**Performance Gain:** Eliminates point alignment calculation (significant for complex paths).

---

### Optimization 2: Path Precompilation (Advanced)

**Development (log precompiled paths):**
```javascript
gsap.to("#shape", {
  morphSVG: {
    shape: "#target",
    precompile: "log"  // Console: precompile:["M0,0 C...", "M0,0 C..."]
  }
});
```

**Production (use logged paths):**
```javascript
const precompiledPaths = [
  "M0,0 C100,200 120,500 300,145...",
  "M0,0 C200,300 100,400 230,400..."
];

gsap.to("#shape", {
  morphSVG: precompiledPaths[1],  // Direct path string
  duration: 1
});
```

**Performance Gain:** 50-80% faster tween start (eliminates path interpolation calculations).

**Trade-off:** Larger bundle size vs runtime CPU savings.

---

### Optimization 3: Path Simplification

**Before Morphing:**
- Use Illustrator path simplify (Object → Path → Simplify)
- Or use svgo CLI: `svgo --multipass input.svg output.svg`
- Target: Reduce point count by 20-40% while preserving visual quality

**Impact:** Fewer points = faster morphing, lower CPU usage.

---

### Optimization 4: GPU Acceleration Hints

**CSS for Morphing Elements:**
```css
#shape {
  will-change: transform, d;  /* Hint browser for GPU acceleration */
}

/* Remove will-change after morph completes (avoid memory overhead) */
```

**JavaScript:**
```javascript
const shape = document.querySelector("#shape");

gsap.to(shape, {
  morphSVG: "#target",
  duration: 1,
  onStart: () => {
    shape.style.willChange = "transform, d";
  },
  onComplete: () => {
    shape.style.willChange = "auto";  // Release GPU resources
  }
});
```

---

### Optimization 5: Accessibility (prefers-reduced-motion)

**MANDATORY Implementation:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Skip animation, instant morph
  gsap.set("#shape", { morphSVG: "#target" });
} else {
  // Full animation
  gsap.to("#shape", { morphSVG: "#target", duration: 1 });
}
```

**Or use GSAP's matchMedia:**
```javascript
gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
  // Simplified or instant morphs
  gsap.set("#shape", { morphSVG: "#target" });
});

gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  // Full morphing animations
  gsap.to("#shape", { morphSVG: "#target", duration: 1 });
});
```

---

### Performance Checklist

Apply these optimizations to {{morph_implementation_code}}:

- [ ] shapeIndex precompiled (for production)
- [ ] Path precompiled (if complex paths > 100 points)
- [ ] SVG paths simplified (20-40% point reduction)
- [ ] will-change CSS applied (add on start, remove on complete)
- [ ] prefers-reduced-motion respected (MANDATORY)

</action>

<template-output>optimized_code</template-output>

</step>

---

<step n="7" goal="Testing & Validation - Quality Assurance">

<action>

### Testing Protocol

#### Visual Quality Tests

**1. Smooth Morphing (No Distortion)**
- [ ] Morph transitions smoothly without unexpected twisting
- [ ] No jarring jumps or path distortions
- [ ] Shape complexity similar (point counts within 20% difference)

**How to Fix:** If twisting occurs, adjust `shapeIndex` or simplify paths.

---

**2. Timing Feels Natural**
- [ ] Duration appropriate for morph category:
  - Icon morphing: 0.3-0.6s
  - Shape transitions: 0.8-1.5s
  - Blob morphing: 2-4s
  - Multi-stage: 3-8s total
- [ ] Easing curve matches animation feel (organic vs mechanical)

**How to Fix:** Adjust `duration` and `ease` based on category recommendations.

---

**3. Easing Creates Organic Feel**
- [ ] Easing matches category:
  - Icons: `power2.inOut`, `elastic.out`, `back.out`
  - Shapes: `power2.inOut`, `circ.out`, `expo.inOut`
  - Blobs: `sine.inOut`, `power1.inOut`, `none`

**How to Fix:** Test multiple easing curves using GreenSock Ease Visualizer.

---

#### Technical Compliance Tests

**4. Path Elements Used**
- [ ] All shapes converted to `<path>` elements (verified in DevTools)
- [ ] convertToPath() called at initialization
- [ ] No remaining `<circle>`, `<rect>`, `<polygon>`, `<ellipse>` being morphed

**How to Fix:** Run `MorphSVGPlugin.convertToPath()` before morphing.

---

**5. Point Optimization Applied**
- [ ] shapeIndex optimization used (`auto` for dev, `[X]` for prod)
- [ ] Paths simplified if > 100 points
- [ ] Similar point counts between start/end shapes

**How to Fix:** Use `shapeIndex: "log"` to find optimal value, then hardcode.

---

#### Performance Tests

**6. Maintains 60fps**
- [ ] Use Chrome DevTools Performance tab to record morph
- [ ] No frame drops during animation (green bars stay above 60fps line)
- [ ] Test on mobile device (lower CPU threshold)

**How to Fix:** Simplify paths, reduce concurrent morphs, apply precompile.

---

**7. No Memory Leaks**
- [ ] Tweens killed on component unmount (React/Vue)
- [ ] No orphaned GSAP instances in memory profiler
- [ ] Timeline references cleared

**How to Fix:** Add cleanup in `useEffect return`, `onBeforeUnmount`, or `beforeunload`.

---

**8. Bundle Size Reasonable**
- [ ] MorphSVGPlugin adds ~7kb to bundle
- [ ] Precompiled paths don't bloat bundle excessively (< 5kb per morph)

**How to Fix:** Use precompile only for performance-critical morphs.

---

#### Accessibility Tests

**9. Respects prefers-reduced-motion**
- [ ] Test with OS setting: Settings → Accessibility → Reduce Motion
- [ ] Animation either disabled or simplified
- [ ] Instant morph (gsap.set) or very short duration (< 0.2s)

**How to Fix:** Implement matchMedia pattern from Step 6.

---

**10. Keyboard Navigable (if interactive)**
- [ ] Focus states visible on trigger elements
- [ ] Tab navigation works correctly
- [ ] Enter/Space triggers morph animation

**How to Fix:** Add CSS focus styles, keyboard event listeners.

---

**11. Screen Reader Friendly**
- [ ] ARIA labels describe shape purpose (not morphing state)
- [ ] No reliance on animation alone to convey information

**How to Fix:** Add `aria-label="Icon menu"` to SVG elements.

---

### Testing Completion

Run ALL 11 tests above. Document any failures and apply fixes before proceeding.

</action>

</step>

---

<step n="8" goal="Output Production Code - Complete Implementation">

<action>

Generate final production-ready code package with:

**1. Complete Implementation**
- Framework-integrated code (from Step 5)
- All optimizations applied (from Step 6)
- Testing protocols verified (from Step 7)

**2. Code Comments**
- Explain each MorphSVG option used
- Document shapeIndex/precompile values
- Note performance optimizations applied

**3. FREE Plugin Emphasis**
- Prominent comment about MorphSVG being FREE in GSAP 3.13+
- Reference Section 2.3 and https://gsap.com/blog/gsap-3-13-0-release

**4. Research Citations**
- Note which Archon MCP pattern was used
- Reference Section 2.3 insights applied

**Example Output Header:**
```javascript
/**
 * SVG Morph Animation - {{morph_category}}
 *
 * MorphSVGPlugin is FREE in GSAP 3.13+ (October 2024)
 * Reference: Section 2.3 - The 2024 GSAP Plugin Ecosystem
 *
 * Pattern Used: [Pattern name from Archon MCP research]
 * Optimizations Applied:
 * - shapeIndex precompiled: [value]
 * - Path simplified: [yes/no]
 * - will-change CSS: [yes/no]
 * - prefers-reduced-motion: IMPLEMENTED
 *
 * Performance: Maintains 60fps on desktop + mobile
 */
```

Display complete code to user.

</action>

<template-output>final_production_code</template-output>

</step>

---

## Success Criteria

**Workflow Complete When:**

- ✅ ALL research queries executed (Step 2 - MANDATORY)
- ✅ Section 2.3 insights documented with verbatim quotes
- ✅ Archon MCP patterns cataloged and selected
- ✅ MorphSVG code generated with research-backed patterns
- ✅ Framework integration applied (lifecycle-safe)
- ✅ Performance optimizations implemented
- ✅ Testing protocol completed (11 tests passed)
- ✅ User informed about FREE plugin status prominently
- ✅ prefers-reduced-motion accessibility IMPLEMENTED

---

**Workflow Complete** ✨

**User:** You now have production-ready MorphSVG code backed by Deep-Research Section 2.3 and Archon MCP pattern research. The morphing animation is optimized, accessible, and FREE to use commercially (GSAP 3.13+).
