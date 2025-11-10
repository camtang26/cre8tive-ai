<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/gsap-excellence/workflows/create-physics-animation/workflow.yaml</critical>

# Physics Animation - Research-Backed Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-physics-animation
**Purpose:** Create realistic physics-based animations using GSAP easing, Draggable plugin, or custom physics simulations with research-backed patterns
**Version:** 2.0.0-premium

---

## Overview

Physics-based animations create premium, natural-feeling motion that elevates user experience from functional to delightful. This workflow uses **Deep-Research expertise** (5 sections, 2.2M+ word knowledge base) and **Archon MCP research** (89 sources) to implement spring animations, drag-and-throw interactions, gravity simulations, and custom physics.

**What Makes This Premium:**
- Research-backed easing configurations (not trial-and-error)
- InertiaPlugin FREE status verification (3.13+ game-changer)
- Frame budget analysis for custom physics (<16ms target)
- Performance-optimized implementations (60fps MANDATORY)

**Physics Types Covered:**
1. **Spring/Elastic Motion** - Bouncy, spring-like motion using *elastic.out*, *back.out* easing
2. **Drag-and-Throw** - Draggable elements with momentum (**InertiaPlugin - FREE in 3.13+!**)
3. **Gravity/Falling** - Acceleration and bounce effects using *power2.in* easing
4. **Custom Physics** - Frame-by-frame simulation with velocity/forces using *gsap.ticker*

---

## Workflow

<workflow>

<step n="1" goal="Gather Physics Animation Context">

<ask name="physics_type">
**Select Physics Type:**

1. **Spring/Elastic** - Bouncy, spring-like motion (elastic.out, back.out)
2. **Drag-and-Throw** - Draggable elements with momentum (**InertiaPlugin - FREE in GSAP 3.13+!**)
3. **Gravity/Falling** - Acceleration and bounce effects (power2.in + bounce.out)
4. **Custom Physics** - Frame-by-frame simulation with velocity/forces (gsap.ticker)

Which physics type?
</ask>

<ask name="elements">
**Target Elements:**
What elements need physics behavior? Provide selectors or element descriptions.
</ask>

<ask name="parameters">
**Physics Parameters:**

**For Spring/Elastic:**
- Spring strength? (1.0 = normal, >1.0 = stronger)
- Oscillations? (0.3 = subtle, 1.0 = very bouncy)
- Overshoot amount? (1.7 = back ease default)

**For Drag-and-Throw:**
- Throw velocity sensitivity?
- Drag boundaries/constraints?
- Momentum decay rate?

**For Gravity:**
- Gravity strength coefficient?
- Bounce energy retention? (0.7 = 70% energy retained)
- Landing surface behavior?

**For Custom Ticker:**
- Velocity initial values?
- Acceleration forces?
- Damping/friction coefficients?
</ask>

<ask name="interaction_trigger">
**Interaction Trigger:**
How is the physics triggered? (scroll, click, drag start, page load, continuous loop, other)
</ask>

<ask name="framework_context">
**Framework Context:**
- Framework: React/Next.js/Vue/Vanilla/Other?
- Version?
- SSR/CSR?
- Any existing GSAP setup?
</ask>

<ask name="performance_target">
**Performance Target:**
- Desktop-only (60fps)?
- Mobile-first (30-60fps adaptive)?
- Battery-conscious mode needed?
</ask>

<ask name="visual_references">
**Visual References (Optional):**
Do you have reference animations or desired feel? (e.g., "bouncy like iOS notifications", "realistic like gravity drop", "exaggerated cartoon physics")
</ask>

</step>

<step n="2" goal="MANDATORY RESEARCH PHASE - Deep-Research + Archon MCP">

<research-gate enforcement="MANDATORY" blocking="true">

## 🚨 RESEARCH ENFORCEMENT CHECKPOINT 🚨

**⚠️ CRITICAL:** This is a **MANDATORY blocking research phase**. You **CANNOT proceed to Step 3** until ALL research phases below are COMPLETE and documented.

**Why This Matters:**
Physics animations look simple ("just add elastic easing!") but research-backed implementations feel premium. Without Deep-Research and Archon patterns, you'll reinvent solved problems and miss performance optimizations.

**What You'll Research:**
- Section 2.1: Easing fundamentals (elastic, bounce, back)
- Section 2.3: Plugin ecosystem (Draggable, InertiaPlugin FREE!)
- Section 2.6: Advanced techniques (gsap.ticker, performance)
- Section 5.2: Main thread optimization (onUpdate performance)
- Section 5.5: 60fps targets (frame budget analysis)

---

### Phase 1: Deep-Research Section 2.1 - Core Easing for Physics

<phase n="1" title="Section 2.1: Core GSAP Concepts - Easing Functions" required="true">

**📖 Read Deep-Research File:**
```
{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md
```

**Extract and Apply:**

1. **Elastic Easing for Springs:**
   - *"Elastic and bounce eases (`'bounce.out'`, `'elastic.inOut'`) create springy effects."*
   - *"Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI)."*
   - **Code Pattern:**
     ```javascript
     gsap.to(element, {
       x: 500,
       ease: "elastic.out(1, 0.3)",  // strength: 1, oscillations: 0.3
       duration: 2
     })
     ```
   - **Parameters:** `elastic.out(strength, oscillations)` - strength controls amplitude, oscillations controls bounciness

2. **Back Easing for Anticipation:**
   - *"Back eases (`'back(1.7).out'`) overshoot a bit then settle."*
   - **Code Pattern:**
     ```javascript
     gsap.to(element, {
       x: 500,
       ease: "back.out(1.7)",  // overshoot amount: 1.7
       duration: 1.5
     })
     ```
   - **Use Case:** Anticipation physics (element pulls back before moving forward)

3. **Bounce Easing for Landing:**
   - *"Use easing deliberately to convey weight and style"*
   - **Code Pattern:**
     ```javascript
     gsap.to(element, {
       y: 500,
       ease: "bounce.out",  // Natural bounce on landing
       duration: 1
     })
     ```
   - **Physics Feel:** Simulates energy dissipation on impact

4. **GSAP Ticker for Custom Physics:**
   - *"GSAP uses a **ticker** (built on `requestAnimationFrame`) to update values every frame; by default it attempts 60fps."*
   - **Why This Matters:** Custom physics must sync with GSAP's ticker for smooth integration

**Document Your Findings:**
- Which easing functions match your physics type?
- What parameter values create the desired feel?
- How will you combine easing with timeline sequencing?

</phase>

---

### Phase 2: Deep-Research Section 2.3 - Draggable & InertiaPlugin (FREE!)

<phase n="2" title="Section 2.3: The 2024 GSAP Plugin Ecosystem - InertiaPlugin FREE" required="true">

**📖 Read Deep-Research File:**
```
{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md
```

**🚨 CRITICAL DISCOVERY:**
- *"as of late 2023/2024, **GSAP and all its official plugins are free for everyone** (no club membership needed)"*
- *"**Draggable** (make elements draggable, often used with throwProps for flick/scrolling UI), **Inertia (ThrowProps)** for momentum physics"*
- *"All the above plugins are now part of the free GSAP bundle"*

**Extract and Apply:**

1. **InertiaPlugin FREE Status (GAME CHANGER):**
   - **Previous:** Club GreenSock membership required ($99+/year)
   - **Now:** Universally free in GSAP 3.13+
   - **Reference:** https://gsap.com/blog/gsap-3-13-0-release
   - **Impact:** Drag-and-throw physics now accessible to everyone

2. **Draggable + Inertia Pattern:**
   **Code Pattern:**
   ```javascript
   import { Draggable } from 'gsap/Draggable'
   import { InertiaPlugin } from 'gsap/InertiaPlugin'

   gsap.registerPlugin(Draggable, InertiaPlugin)

   Draggable.create(".element", {
     type: "x,y",
     inertia: true,  // Enable momentum/throw physics
     bounds: ".container",  // Constrain to container
     onDragEnd: function() {
       console.log("Thrown with velocity:", this.getVelocity())
     }
   })
   ```

3. **Physics2D/PhysicsProps Mention:**
   - *"**Physics2D/PhysicsProps** for playful physical motions (gravity, bouncing simulation)"*
   - **Note:** Also FREE in 3.13+ bundle

**Document Your Findings:**
- Is Draggable + InertiaPlugin needed for your physics type?
- What drag boundaries/constraints are required?
- How will you communicate the FREE status to stakeholders?

</phase>

---

### Phase 3: Deep-Research Section 2.6 - Custom Physics with gsap.ticker

<phase n="3" title="Section 2.6: Additional Advanced Techniques - gsap.ticker" required="true">

**📖 Read Deep-Research File:**
```
{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/10-26-additional-advanced-techniques.md
```

**Extract and Apply:**

1. **Custom Physics with Ticker:**
   - *"GSAP can animate anything numeric. This means if you have a Three.js scene, you can tween object positions, camera positions, even material properties with GSAP."*
   - *"For canvas, you might tween some variables that your `requestAnimationFrame` draw loop uses (like coordinates or an angle)."*
   - *"GSAP's fast and doesn't conflict with other rAF loops if coordinated properly."*

2. **Ticker-Based Physics Pattern:**
   **Code Pattern:**
   ```javascript
   let velocity = 0
   const gravity = 0.5
   const damping = 0.95

   gsap.ticker.add(() => {
     velocity += gravity  // Apply gravity force
     element.y += velocity  // Update position
     velocity *= damping  // Apply damping/friction

     // Boundary detection (e.g., ground)
     if (element.y >= 500) {
       element.y = 500
       velocity *= -0.7  // Bounce (70% energy retained)
     }
   })
   ```

3. **Performance Considerations:**
   - **Frame Budget:** 16ms per frame at 60fps
   - **Ticker Efficiency:** No forced reflows in ticker callback
   - **Cleanup:** Use `gsap.ticker.remove(callback)` to prevent memory leaks

**Document Your Findings:**
- Is custom ticker-based physics needed?
- What forces/velocities/constraints are required?
- How will you ensure <16ms execution time?

</phase>

---

### Phase 4: Deep-Research Section 5.2 - Main Thread Optimization

<phase n="4" title="Section 5.2: Keep Main Thread Free - Performance for Custom Physics" required="true">

**📖 Read Deep-Research File:**
```
{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md
```

**Extract and Apply:**

1. **onUpdate Performance (CRITICAL):**
   - *"If you have an onUpdate callback on a tween that does something expensive (like traversing DOM or heavy math), that could kill performance."*
   - *"For complex physics, consider GSAP's physics plugins instead of writing in onUpdate."*

2. **RAF Synchronization:**
   - *"If you do create your own loop (rare because GSAP covers most needs), always sync with rAF. E.g., don't set `setInterval(fn, 16)` for an animation loop; use `gsap.ticker` or `requestAnimationFrame`"*

3. **Performance Rules for Custom Physics:**
   - **✅ DO:** Use gsap.ticker for physics loops
   - **❌ DON'T:** Use setInterval or setTimeout for animation loops
   - **✅ DO:** Precompute expensive calculations outside ticker callback
   - **❌ DON'T:** Measure DOM (offsetHeight, getBoundingClientRect) inside ticker

**Document Your Findings:**
- Are you using onUpdate callbacks? (If yes, what's the execution time?)
- Is gsap.ticker being used correctly? (Not setInterval)
- Are you avoiding forced reflows in the physics loop?

</phase>

---

### Phase 5: Deep-Research Section 5.5 - 60fps Optimization

<phase n="5" title="Section 5.5: Optimize for 60fps - Frame Budget Analysis" required="true">

**📖 Read Deep-Research File:**
```
{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md
```

**Extract and Apply:**

1. **Frame Budget Breakdown:**
   - *"To achieve ~16ms per frame budget: - Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total."*
   - **Target:** <8ms for physics calculations in ticker callback

2. **autoAlpha for Performance:**
   - *"Use `autoAlpha`: This GSAP property animates opacity and toggles visibility to `hidden` when opacity hits 0."*
   - **Why:** Prevents browser from painting invisible physics elements

3. **Performance Optimization Checklist:**
   - [ ] Physics calculations <8ms per frame
   - [ ] Use autoAlpha instead of opacity for fading physics elements
   - [ ] No forced reflows in physics loop
   - [ ] Throttle ScrollTrigger refresh if using scroll-driven physics

**Document Your Findings:**
- What's your estimated frame budget for physics calculations?
- Are you using autoAlpha for invisible elements?
- Have you profiled the physics loop execution time?

</phase>

---

### Phase 6: Archon MCP Research - Physics Patterns

<phase n="6" title="Archon MCP: GSAP Physics Animation Patterns" required="true">

**Required Archon Queries (ALL MUST BE EXECUTED):**

#### Query 1: General Physics Patterns
```javascript
rag_search_code_examples(
  "physics animation {{physics_type}}",
  source_id="b9f6b322298feb21",  // gsap.com official docs
  match_count=8
)
```
**Purpose:** Find proven physics implementations for your selected physics type
**Document:** What patterns match? Code examples? Parameter configurations?

#### Query 2: Easing Visualizer Patterns
```javascript
rag_search_knowledge_base(
  "elastic bounce {{element_type}}",
  source_id="6a6860cfc96e173b",  // GSAP cheat sheet
  match_count=6
)
```
**Purpose:** Find easing configurations for spring/elastic physics
**Document:** Easing parameter values? Strength/oscillation recommendations?

#### Query 3: Draggable + Inertia Patterns (if drag_throw selected)
```javascript
rag_search_knowledge_base(
  "Draggable InertiaPlugin throw",
  source_id="b9f6b322298feb21",  // gsap.com official docs
  match_count=8
)
```
**Purpose:** Draggable plugin patterns with throw physics
**Document:** InertiaPlugin configurations? Boundary handling? Velocity calculations?
**CRITICAL:** Emphasize **InertiaPlugin is FREE in GSAP 3.13+**!

#### Query 4: Custom Physics Ticker (if custom_ticker selected)
```javascript
rag_search_code_examples(
  "gsap ticker physics simulation",
  match_count=6
)
```
**Purpose:** Frame-by-frame physics with gsap.ticker
**Document:** Velocity/acceleration patterns? Damping implementations? Collision detection?

#### Query 5: Motion.dev Spring Physics (stiffness/damping)
```javascript
rag_search_knowledge_base(
  "spring stiffness damping",
  source_id="80a3ee12854455ca",  // motion.dev tutorials
  match_count=5
)
```
**Purpose:** Advanced spring physics configurations
**Document:** Stiffness values? Damping coefficients? Rest delta thresholds?

**Archon Research Summary:**
Create a consolidated summary of all Archon findings:

**Physics Patterns Found:**
1. [List patterns from Query 1]
2. [List patterns from Query 2]
3. [etc...]

**Easing Configurations:**
- [Document easing functions and parameters]

**Plugin Requirements:**
- [List plugins needed: Draggable, InertiaPlugin, etc.]
- [Document FREE status: InertiaPlugin FREE in 3.13+]

**Performance Notes:**
- [Document frame budget recommendations from Archon examples]

</phase>

---

<checkpoint type="approval-gate" blocking="true">

## 🚨 RESEARCH COMPLETION CHECKPOINT 🚨

**HALT:** You must have documented findings from **ALL 6 research phases** before proceeding to Step 3.

**Required Documentation:**
- ✅ Phase 1: Easing functions and parameters identified
- ✅ Phase 2: InertiaPlugin FREE status verified, Draggable patterns documented
- ✅ Phase 3: gsap.ticker patterns documented (if custom physics)
- ✅ Phase 4: Performance optimization notes (onUpdate, RAF sync)
- ✅ Phase 5: 60fps frame budget analysis documented
- ✅ Phase 6: Archon MCP patterns consolidated

**User Action Required:**
Type "Continue [c]" to proceed to Step 3 (Implementation).

**Agent Mandate:**
You **CANNOT rationalize skipping this checkpoint**. The user must explicitly provide "Continue [c]" input. Do NOT proceed until user confirmation is received.

</checkpoint>

</research-gate>

</step>

<step n="3" goal="Physics Implementation - Research-Backed Code Generation">

Now that research is complete, implement the physics animation using research-backed patterns.

---

### Pattern A: Spring/Elastic Motion

**Research Foundation:**
- Section 2.1: *"Elastic and bounce eases create springy effects"*
- Archon Pattern: [Reference specific pattern from Query 2]

**Implementation:**

```javascript
// Spring Physics using elastic easing
// Source: Section 2.1 (05-21-core-gsap-concepts)
// Pattern: elastic.out(strength, oscillations)

gsap.to(element, {
  x: 500,
  y: 200,
  ease: "elastic.out(1, 0.3)",  // strength: 1, oscillations: 0.3
  duration: 2,

  // Performance optimization (Section 5.5)
  autoAlpha: 1,  // Animates opacity + toggles visibility

  // Callback for state management
  onComplete: () => {
    console.log("Spring animation complete")
  }
})
```

**Parameter Tuning Guide:**

**elastic.out(strength, oscillations):**
- `strength: 0.5-1.0` - Subtle spring (gentle bounce)
- `strength: 1.0-1.5` - Normal spring (moderate bounce)
- `strength: 1.5-2.0` - Strong spring (exaggerated bounce)

- `oscillations: 0.1-0.3` - Tight spring (few bounces)
- `oscillations: 0.3-0.5` - Normal spring (moderate bounces)
- `oscillations: 0.5-1.0` - Loose spring (many bounces)

**back.out(overshoot):**
- `overshoot: 1.2-1.5` - Subtle anticipation
- `overshoot: 1.7` - Default (recommended)
- `overshoot: 2.0-3.0` - Exaggerated overshoot

**Performance Notes:**
- Elastic easing is GPU-accelerated when animating transform/opacity
- No performance penalty vs linear ease (easing calculated once per frame)

---

### Pattern B: Drag-and-Throw (Draggable + Inertia)

**Research Foundation:**
- Section 2.3: *"Draggable with InertiaPlugin - FREE in 3.13+!"*
- Archon Pattern: [Reference specific pattern from Query 3]

**🚨 CRITICAL: InertiaPlugin is FREE in GSAP 3.13+**

**Implementation:**

```javascript
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

// Register plugins (Section 2.3)
gsap.registerPlugin(Draggable, InertiaPlugin)

// Drag-and-throw with momentum physics
// Source: Section 2.3 (07-23-plugin-ecosystem)
Draggable.create(".draggable-element", {
  type: "x,y",  // Allow both horizontal and vertical dragging

  // CRITICAL: Enable InertiaPlugin (FREE in 3.13+!)
  inertia: true,  // Momentum/throw physics

  // Boundaries
  bounds: ".container",  // Constrain to container
  // OR: bounds: { minX: 0, maxX: 1000, minY: 0, maxY: 600 }

  // Inertia configuration
  inertia: {
    resistance: 2000,  // Higher = slower deceleration
    minDuration: 0.3,  // Minimum throw duration
    maxDuration: 3,    // Maximum throw duration
  },

  // Callbacks
  onDragStart: function() {
    console.log("Drag started")
  },

  onDragEnd: function() {
    const velocity = this.getVelocity()
    console.log("Thrown with velocity:", velocity)

    // Optional: trigger events based on throw velocity
    if (Math.abs(velocity) > 1000) {
      console.log("Fast throw detected!")
    }
  },

  onThrowComplete: function() {
    console.log("Momentum settled")
  }
})
```

**Inertia Parameter Tuning:**

**resistance:**
- `500-1000` - Fast deceleration (quick stop)
- `2000-3000` - Medium deceleration (natural feel)
- `5000+` - Slow deceleration (long glide)

**maxDuration:**
- `1-2s` - Quick animations
- `3-4s` - Natural physics
- `5s+` - Exaggerated momentum

**Performance Notes:**
- Draggable uses RAF internally (no performance penalty)
- InertiaPlugin calculations are optimized (<1ms per frame)

**⚠️ CRITICAL DOCUMENTATION:**
Include in your implementation comments:
```javascript
// InertiaPlugin is FREE in GSAP 3.13+
// Reference: https://gsap.com/blog/gsap-3-13-0-release
// Previously required Club GreenSock membership
```

---

### Pattern C: Gravity/Falling Effect

**Research Foundation:**
- Section 2.1: *"Use easing deliberately to convey weight and style"*
- Archon Pattern: [Reference specific pattern from Query 1]

**Implementation:**

```javascript
// Gravity simulation with bounce
// Source: Section 2.1 (elastic/bounce easing)

const element = document.querySelector(".falling-object")

// Phase 1: Falling (gravity acceleration)
gsap.to(element, {
  y: 500,  // Ground level
  ease: "power2.in",  // Acceleration (simulates gravity)
  duration: 1,

  // Performance (Section 5.5)
  autoAlpha: 1,  // Efficient visibility + opacity

  onComplete: () => {
    // Phase 2: Bounce on landing
    gsap.to(element, {
      y: 450,  // Bounce height (90% of fall distance)
      ease: "bounce.out",  // Natural bounce
      duration: 0.5,

      onComplete: () => {
        // Phase 3: Settle
        gsap.to(element, {
          y: 500,  // Final resting position
          ease: "power1.out",
          duration: 0.2
        })
      }
    })
  }
})
```

**Gravity Physics Parameters:**

**Falling (power2.in):**
- `power1.in` - Gentle acceleration (moon gravity)
- `power2.in` - Normal acceleration (earth gravity)
- `power3.in` - Strong acceleration (heavy object)

**Bounce Height:**
- `90%` of fall - Subtle bounce (heavy object)
- `80-85%` - Natural bounce (moderate weight)
- `70-75%` - Energetic bounce (light object)

**Bounce Duration:**
- Bounce duration should be ~50% of fall duration for realistic physics

**Multi-Bounce Pattern:**

```javascript
// Multiple diminishing bounces
const bounceSequence = [450, 480, 490, 495, 500]  // Diminishing heights

gsap.to(element, { y: 500, ease: "power2.in", duration: 1,
  onComplete: () => {
    const tl = gsap.timeline()
    bounceSequence.forEach((height, i) => {
      tl.to(element, {
        y: height,
        ease: i < bounceSequence.length - 1 ? "bounce.out" : "power1.out",
        duration: 0.3 * (1 - i * 0.15)  // Diminishing duration
      })
    })
  }
})
```

---

### Pattern D: Custom Physics (gsap.ticker)

**Research Foundation:**
- Section 2.6: *"gsap.ticker for frame-by-frame physics"*
- Section 5.2: *"Always sync with rAF using gsap.ticker"*
- Section 5.5: *"<8ms scripting per frame for 60fps"*
- Archon Pattern: [Reference specific pattern from Query 4]

**Implementation:**

```javascript
// Custom physics simulation using gsap.ticker
// Source: Section 2.6 (10-26-advanced-techniques)
// Performance: Section 5.2 (RAF sync), Section 5.5 (<8ms target)

const element = document.querySelector(".physics-object")

// Physics state
let position = { x: 0, y: 0 }
let velocity = { x: 0, y: 0 }
const gravity = 0.5  // Gravity force
const damping = 0.95  // Air resistance/friction
const groundLevel = 500

// Physics update function
// CRITICAL: Must execute in <8ms per frame (Section 5.5)
const updatePhysics = () => {
  // Apply forces (gravity)
  velocity.y += gravity

  // Update position
  position.x += velocity.x
  position.y += velocity.y

  // Apply damping (air resistance)
  velocity.x *= damping
  velocity.y *= damping

  // Boundary detection (ground)
  if (position.y >= groundLevel) {
    position.y = groundLevel
    velocity.y *= -0.7  // Bounce (70% energy retained)

    // Stop bouncing if velocity too small
    if (Math.abs(velocity.y) < 0.5) {
      velocity.y = 0
    }
  }

  // Apply to element (transform is GPU-accelerated)
  gsap.set(element, {
    x: position.x,
    y: position.y
  })
}

// Add to GSAP ticker (Section 5.2: RAF sync)
gsap.ticker.add(updatePhysics)

// Cleanup function (CRITICAL: prevent memory leaks)
function stopPhysics() {
  gsap.ticker.remove(updatePhysics)
}

// Trigger initial velocity (e.g., on click)
element.addEventListener("click", () => {
  velocity.x = 5  // Horizontal velocity
  velocity.y = -20  // Vertical velocity (upward)
})
```

**Performance Optimization (Section 5.5):**

```javascript
// Profile physics loop execution time
let lastFrameTime = performance.now()

const updatePhysics = () => {
  const frameStart = performance.now()

  // ... physics calculations ...

  const frameTime = performance.now() - frameStart

  // Warning if exceeding 8ms budget (Section 5.5)
  if (frameTime > 8) {
    console.warn(`Physics loop slow: ${frameTime.toFixed(2)}ms (target <8ms)`)
  }

  lastFrameTime = performance.now()
}
```

**Custom Physics Parameter Tuning:**

**gravity:**
- `0.2-0.5` - Gentle gravity (floaty feel)
- `0.5-1.0` - Normal gravity (earth-like)
- `1.0-2.0` - Strong gravity (heavy objects)

**damping:**
- `0.99` - Minimal damping (long glide)
- `0.95-0.98` - Normal air resistance
- `0.90-0.95` - Strong damping (quick stop)

**bounce energy retention:**
- `0.5` - Low energy (50% retained, quick settle)
- `0.7` - Natural (70% retained)
- `0.9` - High energy (90% retained, many bounces)

---

### Framework Integration Patterns

**React/Next.js Integration:**

```javascript
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin, useGSAP)

function PhysicsComponent() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Spring animation
    gsap.to(".spring-element", {
      x: 500,
      ease: "elastic.out(1, 0.3)",
      duration: 2
    })

    // Drag-and-throw (InertiaPlugin - FREE in 3.13+)
    Draggable.create(".draggable", {
      type: "x,y",
      inertia: true,
      bounds: containerRef.current
    })

    // Custom physics
    let velocity = 0
    const updatePhysics = () => {
      velocity += 0.5
      gsap.set(".physics-element", { y: velocity })
    }

    gsap.ticker.add(updatePhysics)

    // Cleanup
    return () => {
      gsap.ticker.remove(updatePhysics)
    }

  }, { scope: containerRef })  // Scope cleanup to container

  return <div ref={containerRef}>
    <div className="spring-element">Spring</div>
    <div className="draggable">Drag Me</div>
    <div className="physics-element">Physics</div>
  </div>
}
```

**Key React Integration Notes:**
- Use `useGSAP` hook for automatic cleanup (Section 2.5)
- Return cleanup function to remove ticker callbacks
- Scope animations to container ref
- Register plugins outside component (performance)

---

</step>

<step n="4" goal="Output Generation - Production Code + Documentation">

Generate comprehensive output documenting the physics implementation.

<template-output>physics_implementation_report</template-output>

**Output Requirements:**

1. **Production Code:**
   - Complete, copy-paste ready implementation
   - Research citations in code comments
   - Plugin registration (if Draggable/Inertia)
   - Framework-specific integration (if applicable)

2. **Research Citations:**
   - Deep-Research sections consulted (list all 5 sections)
   - Archon patterns matched (reference Query numbers)
   - Verbatim quotes from research (with source file citations)

3. **Parameter Documentation:**
   - Easing configurations with explanations
   - Physics constants (gravity, damping, etc.)
   - Performance targets achieved

4. **InertiaPlugin FREE Status Documentation:**
   ```markdown
   ## InertiaPlugin Status (CRITICAL)

   **InertiaPlugin is FREE in GSAP 3.13+**

   - **Reference:** https://gsap.com/blog/gsap-3-13-0-release
   - **Previous Status:** Club GreenSock membership required ($99+/year)
   - **Current Status:** Universally free for all users
   - **Impact:** Drag-and-throw physics now accessible to everyone
   ```

5. **Performance Analysis:**
   - Frame budget analysis (target <16ms per frame)
   - Physics loop execution time (if custom ticker)
   - Optimization notes (autoAlpha, RAF sync, etc.)

6. **Testing Checklist:**
   - Physics feel validation (does it feel natural?)
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Mobile testing (touch events for drag)
   - Performance testing (60fps sustained)

</step>

<step n="5" goal="Quality Validation - DoD Verification">

Verify the implementation meets all success criteria.

**Success Criteria Checklist:**

**Physics Feel:**
- [ ] Motion feels natural and physics-accurate (not robotic)
- [ ] Spring/bounce parameters feel realistic (not over-dampened or over-bouncy)
- [ ] Drag-and-throw has natural momentum (if applicable)
- [ ] Gravity acceleration feels correct (if applicable)

**Performance:**
- [ ] 60fps sustained (minimum FPS ≥ 55fps across all frames)
- [ ] Physics loop <8ms execution time (if custom ticker)
- [ ] No forced reflows in ticker callbacks
- [ ] autoAlpha used for fading elements (performance optimization)

**Research Citations:**
- [ ] All implementations cite Deep-Research sources
- [ ] Archon patterns referenced (Query numbers documented)
- [ ] Verbatim quotes included in code comments
- [ ] InertiaPlugin FREE status documented

**Plugin Requirements:**
- [ ] Draggable/Inertia plugins registered (if applicable)
- [ ] Plugin imports correct for framework
- [ ] FREE status emphasized in documentation

**Code Quality:**
- [ ] No CSS transitions on GSAP-animated properties
- [ ] Proper cleanup (ticker.remove, Draggable.kill)
- [ ] Framework integration follows best practices
- [ ] Performance profiling included (if custom ticker)

**Cross-Browser:**
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Mobile touch events working (if drag-and-throw)

</step>

</workflow>

---

## Common Patterns & Tips

### Pattern: Combining Physics Types

**Spring + Gravity:**
```javascript
// Element springs upward, then falls with gravity
gsap.to(element, { y: -200, ease: "back.out(1.7)", duration: 0.8,
  onComplete: () => {
    gsap.to(element, { y: 500, ease: "power2.in", duration: 1,
      onComplete: () => {
        gsap.to(element, { y: 450, ease: "bounce.out", duration: 0.5 })
      }
    })
  }
})
```

### Pattern: Drag with Spring Snap-Back

```javascript
Draggable.create(".element", {
  type: "x,y",

  onDragEnd: function() {
    // Spring back to origin
    gsap.to(this.target, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1.5
    })
  }
})
```

### Pattern: Performance-Optimized Particle System

```javascript
// Many particles with custom physics
const particles = gsap.utils.toArray(".particle")
const particleData = particles.map(() => ({
  vx: Math.random() * 10 - 5,
  vy: Math.random() * -10,
  x: 0,
  y: 0
}))

const updateParticles = () => {
  particles.forEach((particle, i) => {
    const data = particleData[i]

    // Physics (optimized: no DOM reads)
    data.vy += 0.5  // Gravity
    data.x += data.vx
    data.y += data.vy

    // Boundary
    if (data.y >= 500) {
      data.y = 500
      data.vy *= -0.7
    }

    // Update (batch with gsap.set for performance)
    gsap.set(particle, { x: data.x, y: data.y })
  })
}

// CRITICAL: Profile to ensure <8ms per frame (Section 5.5)
gsap.ticker.add(updateParticles)
```

---

## Troubleshooting

**Problem: Physics feels sluggish/laggy**
- **Solution:** Profile ticker execution time (target <8ms)
- **Check:** Are you doing DOM reads in ticker callback? (forced reflows)
- **Fix:** Precompute values, use cached measurements

**Problem: Drag-and-throw not working**
- **Solution:** Verify InertiaPlugin is registered (`gsap.registerPlugin(InertiaPlugin)`)
- **Check:** Is `inertia: true` set in Draggable.create config?
- **Fix:** Add plugin import: `import { InertiaPlugin } from 'gsap/InertiaPlugin'`

**Problem: Spring animation too bouncy or not bouncy enough**
- **Solution:** Tune elastic.out parameters: `elastic.out(strength, oscillations)`
- **Try:** Lower oscillations (0.1-0.3) for tighter spring
- **Try:** Higher oscillations (0.5-1.0) for looser spring

**Problem: Memory leak in React/Next.js**
- **Solution:** Add cleanup in useGSAP return function
- **Fix:**
  ```javascript
  useGSAP(() => {
    const updatePhysics = () => { ... }
    gsap.ticker.add(updatePhysics)

    return () => {
      gsap.ticker.remove(updatePhysics)  // CRITICAL cleanup
    }
  }, { scope: containerRef })
  ```

---

## Success Criteria

Your physics animation implementation is COMPLETE when:

- ✅ Motion feels natural and physics-accurate (not robotic)
- ✅ Research citations documented (5 Deep-Research sections + Archon patterns)
- ✅ InertiaPlugin FREE status emphasized (if drag-and-throw)
- ✅ Performance optimized (60fps, <8ms ticker execution)
- ✅ Cross-browser tested (Chrome, Firefox, Safari, mobile)
- ✅ Proper cleanup implemented (no memory leaks)
- ✅ Code follows GSAP best practices (from research)

---

**Workflow Complete** ✨

All physics animations are now implemented with research-backed patterns from 5 Deep-Research sections and Archon MCP knowledge base.
