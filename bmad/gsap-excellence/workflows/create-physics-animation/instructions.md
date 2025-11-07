<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-physics-animation/workflow.yaml</critical>

# Physics Animation - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-physics-animation
**Purpose:** Create realistic physics-based animations using GSAP easing, Draggable plugin, or custom physics simulations

---

## Overview

Physics-based animations create premium, natural-feeling motion. This workflow uses Archon KB research and Deep-Research frameworks to implement springs, gravity, inertia, and custom physics.

**Physics Types:**
- **Spring/Elastic** - Bouncy, spring-like motion (elastic.out, back.out)
- **Drag-and-Throw** - Draggable elements with momentum (**Inertia Plugin - FREE in 3.13+!**)
- **Gravity/Falling** - Acceleration and bounce effects
- **Custom Physics** - Frame-by-frame with velocity/forces

---

## Step 1: Context Gathering

<ask name="physics_type">
**Physics Type**

1. **Spring/Elastic** - Bouncy, spring-like motion (elastic.out, back.out)
2. **Drag-and-Throw** - Draggable elements with momentum (**InertiaPlugin - FREE in GSAP 3.13+!**)
3. **Gravity/Falling** - Acceleration and bounce effects (custom ease or ticker)
4. **Custom Physics** - Frame-by-frame simulation with velocity/forces

Which physics type?
</ask>

<ask name="elements">
**Elements to Animate**
What elements need physics behavior? Selectors?
</ask>

<ask name="parameters">
**Physics Parameters**
- Spring strength/bounce amount?
- Throw velocity/boundaries (if drag)?
- Gravity strength/bounce coefficient?
- Damping/friction values?
</ask>

---

## Step 2: Research Gate (MANDATORY)

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:** This is a MANDATORY blocking checkpoint. You CANNOT proceed to Step 3 until this research is COMPLETE.

### Phase 1: Archon KB - Physics Patterns

Required Queries (ALL MUST BE EXECUTED):

#### Query 1: Physics Animation Patterns
```javascript
rag_search_code_examples("physics animation {physics_type}", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Find proven physics implementations
**Document:** What physics patterns work best for this type?

#### Query 2: Spring/Elastic Patterns
```javascript
rag_search_code_examples("elastic bounce {element_type}", match_count=6)
```
**Purpose:** Spring/elastic easing patterns
**Document:** Elastic easing configurations, bounce amounts

#### Query 3: Draggable + Inertia Patterns (if drag-and-throw)
```javascript
rag_search_knowledge_base("Draggable throw inertia", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Draggable plugin patterns with throw physics
**Document:** InertiaPlugin configurations, boundary handling
**CRITICAL:** Emphasize **InertiaPlugin is FREE in GSAP 3.13+**!

#### Query 4: Custom Physics Simulations (if custom)
```javascript
rag_search_code_examples("custom physics gsap ticker", match_count=6)
```
**Purpose:** Frame-by-frame physics with gsap.ticker
**Document:** Velocity, acceleration, damping patterns

### Phase 2: Deep-Research

#### Section 2.1: Core GSAP Concepts - Tweens, Staggers, Easing (CORRECTED from 2.3)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`

**Extract:**
- Easing fundamentals (elastic, back, bounce)
- Duration calculations for realistic motion
- Custom ease options

**Document:** Which easing functions create realistic physics?

### Phase 3: Research Documentation

Create "Research Findings" section:

1. **Physics Patterns Found**
   - Which KB examples match this physics type?
   - Easing configurations
   - Parameter values (strength, damping, etc.)

2. **Deep-Research Applications**
   - Section 2.1 easing techniques
   - Duration/timing strategies

3. **Plugin Requirements**
   - InertiaPlugin needed? (**FREE in 3.13+!**)
   - Draggable plugin needed?

<checkpoint type="approval-gate" blocking="true">
<halt>🚨 STOP. You must have documented findings from ALL required queries before proceeding to Step 3.</halt>
</checkpoint>

</research-gate>

---

## Step 3: Physics Implementation

Based on research, implement the appropriate physics pattern.

### Pattern A: Spring/Elastic Motion

```javascript
// Elastic bounce (spring physics)
gsap.to(element, {
  x: 500,
  ease: "elastic.out(1, 0.3)",  // strength: 1, oscillations: 0.3
  duration: 2
})

// Back ease (anticipation + overshoot)
gsap.to(element, {
  x: 500,
  ease: "back.out(1.7)",  // overshoot amount
  duration: 1.5
})
```

**Pattern from Archon KB:** Elastic easing creates natural spring motion.
**Section 2.1:** Use elastic.out for bouncy physics, back.out for anticipation.

### Pattern B: Drag-and-Throw (Draggable + Inertia)

```javascript
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin)

Draggable.create(".element", {
  type: "x,y",
  inertia: true,  // Enable momentum/throw
  bounds: ".container",  // Constrain to container
  onDragEnd: function() {
    console.log("Thrown with velocity:", this.getVelocity())
  }
})
```

**🚨 CRITICAL:** **InertiaPlugin is FREE in GSAP 3.13+**!
Reference: https://gsap.com/blog/gsap-3-13-0-release

**Pattern from Archon KB:** Drag-and-throw with automatic momentum.
**Section 2.1:** Inertia creates natural deceleration.

### Pattern C: Gravity/Falling Effect

```javascript
// Gravity simulation with bounce
gsap.to(element, {
  y: 500,
  ease: "power2.in",  // Acceleration (gravity)
  duration: 1,
  onComplete: () => {
    // Bounce on landing
    gsap.to(element, {
      y: 450,  // Bounce height
      ease: "bounce.out",
      duration: 0.5
    })
  }
})
```

**Pattern from Archon KB:** power2.in simulates gravity acceleration.
**Section 2.1:** bounce.out creates realistic landing.

### Pattern D: Custom Physics (gsap.ticker)

```javascript
let velocity = 0
const gravity = 0.5
const damping = 0.95

gsap.ticker.add(() => {
  velocity += gravity  // Apply gravity
  element.y += velocity  // Update position
  velocity *= damping  // Apply damping

  // Bounce on ground
  if (element.y >= 500) {
    element.y = 500
    velocity *= -0.7  // Bounce (70% energy retained)
  }
})
```

**Pattern from Archon KB:** Frame-by-frame physics with gsap.ticker.
**Section 2.1:** Custom physics for advanced simulations.

---

## Step 4: Output - Production Code

Generate physics animation code with:
- KB pattern citations
- Plugin registration (if Draggable/Inertia)
- **Emphasis: FREE in GSAP 3.13+** (if InertiaPlugin)
- Parameter tuning guidance
- Performance notes
- Testing checklist

### Testing Checklist

**Physics Feel:**
- [ ] Motion feels natural (not robotic)
- [ ] Spring/bounce amounts feel realistic
- [ ] Drag-and-throw has natural momentum
- [ ] Gravity acceleration feels right

**Performance:**
- [ ] Smooth 60fps
- [ ] No jank
- [ ] Memory cleanup works

**Plugin Requirements:**
- [ ] Draggable/Inertia plugins imported
- [ ] User informed about FREE availability (3.13+)

---

## Success Criteria

- ✅ Research queries executed
- ✅ Physics patterns cited from KB
- ✅ Code feels realistic (not robotic)
- ✅ Performance optimized
- ✅ Plugin requirements documented
- ✅ **InertiaPlugin FREE status emphasized**

---

**Workflow Complete** ✨
