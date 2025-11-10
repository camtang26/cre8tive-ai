<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-timeline/workflow.yaml</critical>

# Timeline Choreography - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-timeline
**Purpose:** Create sophisticated GSAP timeline choreography using KB-powered pattern matching

---

## Overview

This workflow creates production-ready GSAP timeline implementations by systematically researching proven patterns from the Archon knowledge base (91 sources, 2M+ words) and applying Deep-Research frameworks for timeline choreography.

**Timeline Features:**
- Position labels for reusable jump points
- Relative positioning (`"<"`, `"+=0.5"`, etc.)
- Callbacks (onStart, onComplete, onUpdate)
- Repeat and yoyo effects
- TimeScale for speed control
- Premium plugins (FREE in GSAP 3.13+!)

**Key Principle:** *Every timeline is built on proven patterns, not guesswork.*

---

## Step 1: Context Gathering

Use `<ask>` tags to collect animation requirements from the user.

### Required Information

<!-- Eliciting: elements to animate -->
<ask>
**Elements to Animate**

What elements need to move/fade/transform?
- Specific selectors (e.g., ".hero-title", "#cta-button")
- Element types (headings, images, cards, etc.)
- How many elements in sequence?

Examples:
- "Hero heading, 3 feature cards, CTA button"
- ".timeline-item elements (5 total)"
- "Logo, navigation links, hero image"
</ask>

<!-- Eliciting: animation sequence -->
<ask>
**Animation Sequence**

What order should elements animate?
- Sequential (one after another)?
- Overlapping (start next before previous finishes)?
- Simultaneous (all at once)?
- Custom timing pattern?

Example: "Cards fade in sequentially with 0.2s overlap, then CTA slides up"
</ask>

<!-- Eliciting: timing specifications -->
<ask>
**Timing Specifications**

Durations and delays for each element:
- Overall timeline duration?
- Individual tween durations?
- Delays between sequences?
- Stagger amounts (if applicable)?

Example: "Each card: 0.6s duration, 0.15s stagger"
</ask>

<!-- Eliciting: animation effects -->
<ask>
**Animation Effects**

What visual effects?
- Fade (opacity changes)
- Slide (x/y movement)
- Scale (size changes)
- Rotate (rotation effects)
- Morph (shape transitions - requires MorphSVG)
- Custom properties?

Example: "Fade up from bottom (y: 50 → 0, opacity: 0 → 1)"
</ask>

<!-- Eliciting: framework context -->
<ask>
**Framework Context**

What's your development environment?
- React (with useGSAP hook)?
- Next.js (which version? SSR considerations?)
- Vue (Composition API or Options API)?
- Vanilla JavaScript?
- TypeScript or JavaScript?

Example: "Next.js 15 with App Router, TypeScript, client component"
</ask>

---

## Step 2: Research Gate (MANDATORY - Cannot Proceed Without)

<critical>
⚠️ **MANDATORY RESEARCH GATE** - This is a BLOCKING checkpoint.

You CANNOT proceed to Step 3 until ALL research below is COMPLETE. Research is not optional, not suggested - it is **REQUIRED**. Every timeline must be built on proven patterns from the knowledge base, not guesswork.
</critical>

**Research Protocol:** Systematic multi-source timeline pattern analysis

### Phase 1: Archon KB - Timeline Code Examples (PRIMARY)

Required Archon Queries (ALL MUST BE EXECUTED):

#### Query 1: Timeline Choreography Patterns
```javascript
rag_search_code_examples("timeline choreography {effect_type}", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Find proven timeline implementations matching the desired effects
**Effect type examples:** "fade sequence", "stagger cards", "page load", "scroll reveal"
**Document:** What timeline structures work best for this effect type?

#### Query 2: Complex Sequence Patterns
```javascript
rag_search_code_examples("complex animation sequences", match_count=8)
```
**Purpose:** Find sophisticated multi-element coordination patterns
**Document:** How do premium sites coordinate multiple elements in timelines?

#### Query 3: Timeline Coordination Best Practices
```javascript
rag_search_knowledge_base("timeline coordination best practices", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Learn position parameter strategies, label usage, relative positioning
**Document:** Position parameters (`"<"`, `"+=0.5"`), labels, timing strategies

#### Query 4: Stagger Techniques (if applicable)
```javascript
rag_search_code_examples("stagger {element_type}", match_count=6)
```
**Purpose:** Find stagger patterns for repeated elements
**Element examples:** "cards", "list items", "characters", "grid"
**Document:** Stagger amounts, easing, advanced stagger options

### Phase 2: Deep-Research - Timeline Frameworks (PRIMARY)

Apply systematic frameworks from Deep-Research sections:

#### Section 2.2: Mastering Timeline Techniques (PRIMARY)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md`

**CRITICAL READING - MANDATORY:**

Read the complete Section 2.2 file NOW. This is the PRIMARY reference for timeline choreography.

**Key Framework - Relative Positioning:**

*"Timelines allow **precise control** with positional parameters. For example: `tl.to(".circle", { x:100 }, 0)` starts at 0 (absolute time), `.to(".square", { x:100 }, "<")` starts at same time as previous tween, `.to(".triangle", { x:100 }, "<0.5")` starts 0.5s after previous tween's start."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Position Parameter Strategies:**
- **`0`** - Absolute time (start at 0 seconds)
- **`"<"`** - Start at same time as previous tween
- **`"<0.5"`** - Start 0.5s after previous tween's START
- **`"-=0.5"`** - Start 0.5s before previous tween ENDS
- **`"+=1"`** - Wait 1s after previous tween ends

*"This relative scheduling (using `"<"` or `"+="` notations) makes complex overlapping sequences easier to read and adjust. Instead of calculating actual times, you describe relationships."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Label Usage for Grouping:**

*"Labels (named positions) can group multiple tweens start point. E.g., we could `.addLabel("moveShapes", 0)` and then schedule all shape animations at `"moveShapes"`. This helps orchestrate if many elements should sync up."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Code Example - Labels:**
```javascript
const tl = gsap.timeline()
tl.add("start")
  .to(element1, { x: 100 })
  .add("midpoint")
  .to(element2, { y: 100 }, "midpoint")  // Start at midpoint label
  .to(element3, { rotation: 360 }, "midpoint+=0.5")  // 0.5s after midpoint
  .add("end")
```

**Nested Timeline Pattern:**

*"Nesting Timelines: You can treat a timeline as a tween by adding it to another timeline. For AI, this is a powerful way to break a large animation into components."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

```javascript
const introTl = gsap.timeline();
// ... define intro sequence

const galleryTl = gsap.timeline();
// ... define gallery sequence

const master = gsap.timeline();
master.add(introTl)         // plays intro, then
      .add(galleryTl, "+=1"); // wait 1s after intro, then play gallery
```

*"This modular approach means each sub-timeline can be developed and tested separately. Many top-tier sites do this -- e.g., a timeline for each section of a page, then a master timeline to coordinate section transitions."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Control Methods:**

*"Timelines and tweens have control methods like `.pause()`, `.resume()`, `.reverse()`, `.progress(value)`, `.timeScale(value)` etc."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Control Method Examples:**
- **`.pause()`** - Halt timeline (useful for user-controlled playback)
- **`.reverse()`** - Play backward (great for hover-out or toggle animations)
- **`.timeScale(2)`** - Speed up 2x (can be tweened for acceleration effects!)
- **`.seek(timeOrLabel)`** - Jump to specific point
- **`.progress(0-1)`** - Set timeline position as fraction (perfect for scroll-scrubbing)

*"If an AI model is asked to implement a toggle animation (like opening/closing a menu), creating one timeline and using `.play()` and `.reverse()` on it is often cleaner than creating separate tweens for open and close."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Defaults and Repeat:**

*"Timelines can have `defaults` (as we showed for duration, also can set ease default, etc. so you don't repeat yourself for every tween). They can also have `repeat` and `yoyo` properties. If you set `repeat: -1` on a timeline, it loops infinitely. `yoyo:true` will make it play forward then backward (like a ping-pong)."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Example - Looping Timeline:**
```javascript
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.inOut" },
  repeat: -1,  // Loop infinitely
  yoyo: true   // Play forward then backward
})
tl.to(".bubble", { y: -20 })
  .to(".bubble", { scale: 1.1 }, "<0.5")
```

*"For example, a background animation of floating bubbles can be a timeline that staggers bubble movements and loops with yoyo for a seamless back-and-forth drift."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**repeatRefresh Pattern (GSAP 3.8+):**

*"Note: When looping, consider using the `repeatRefresh:true` on tweens if you want them to pick new random values on each loop (GSAP 3.8+ feature). For example, a tween with `repeat:5` and `repeatRefresh:true` will recalc any function-based or random values each time, giving variety."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**AI Implementation Guidance:**

*"Understanding and leveraging these timeline techniques enables the creation of **complex animation choreography** that is time-accurate and maintainable. AI models should practice representing a multi-step animation as a timeline rather than a disjoint set of tweens -- this results in code that mirrors an animator's thought process (first this, then that, meanwhile this other thing, etc.)."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Document for this use case:**
- Which position parameters will create the desired sequence?
- Should labels be used for synchronization points?
- Is nesting needed for complex coordination?
- Which control methods might be needed (reverse for toggle, timeScale for speed control)?
- Should timeline loop (repeat: -1, yoyo)?

#### Section 2.1: Core GSAP Concepts - Tweens, Staggers, Easing (CORRECTED from 2.3)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`

**CRITICAL READING - MANDATORY:**

Read the complete Section 2.1 file NOW for tween, stagger, and easing fundamentals.

**Tween Fundamentals:**

*"A **tween** is a single transition of one or more properties of a target over time (GSAP's `gsap.to()`, `gsap.from()`, or `gsap.fromTo()` methods produce tweens)."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Three Tween Methods:**

1. **`.to()`** - Animates FROM current value TO specified end value
2. **`.from()`** - Animates FROM specified value TO current value (great for "animate in" effects)
3. **`.fromTo()`** - Explicitly sets BOTH start and end values

*"Generally, `.to()` and `.from()` are more dynamic and preferred, but be mindful of their behavior (see common mistakes in Part 8 about `.from()` caching and `immediateRender`)."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Code Example - Tween Basics:**
```javascript
// .to() - from current to specified
gsap.to(".box", { x: 100, opacity: 0.5, duration: 1, ease: "power2.out" });

// .from() - from specified to current (animate IN from off-screen)
gsap.from(".box", { x: -100, opacity: 0, duration: 1 });

// .fromTo() - explicit start and end
gsap.fromTo(".box",
  { x: -100, opacity: 0 },  // FROM
  { x: 100, opacity: 1, duration: 1 }  // TO
);
```

**Timeline Mastery:**

*"A **timeline** (`gsap.timeline()`) is essentially a container for multiple tweens, allowing sequencing and synchronization. Instead of relying on arbitrary delays or `setTimeout`, timelines provide a precise way to orchestrate animations."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Why Timelines Matter:**

*"They solve complex sequencing elegantly:
- No need to calculate delays manually; order in code defines sequence unless overridden by labels or position parameters.
- They can **overlap** tweens easily. E.g., by using position parameter like `"-=0.5"` you can start a tween 0.5s before the previous one ends, creating an overlap.
- Timelines can be nested (a powerful pattern: build small timelines for sub-components and add them into a master timeline)."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

*"Jack Doyle (GSAP's creator) advises modularizing complex animations by returning timelines from functions, then composing them -- this makes tweaking easier."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**AI Tip:**

*"Always consider using a `gsap.timeline` for multi-step animations. It provides far more **readability and control** than scattered tweens with delays. The resulting code mirrors the storyboard sequence you planned."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Stagger Fundamentals:**

*"Staggering is animating multiple targets with a slight offset in start times. GSAP's `stagger` option (when multiple elements are targeted) makes this trivial."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Simple Stagger:**
```javascript
gsap.from(".list-item", { y: 20, opacity: 0, stagger: 0.1 });
// Each .list-item starts 0.1s after the previous
```

**Advanced Stagger Object:**

*"For more complex staggers, GSAP supports an **object syntax**:"*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

```javascript
gsap.from(".grid-item", {
  y: 50, opacity: 0,
  stagger: {
    each: 0.2,           // Each element starts 0.2s apart
    from: "center",      // Start from center, radiate outward
    grid: "auto",        // Auto-detect grid layout
    ease: "power1.in"    // Ease for the stagger timing itself
  }
});
```

*"Here, `each:0.2` means each element starts 0.2s apart, `from:"center"` makes the stagger originate from the center of the element array (so elements in the middle start first, radiating outward), and `grid:"auto"` tells GSAP to figure out a grid if elements are in a grid layout. This can create a wave-like reveal where center items animate first."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Stagger Options:**
- **`each`** - Time between each element start
- **`amount`** - Total duration of entire stagger
- **`from`** - Start position: `"start"`, `"center"`, `"end"`, `"edges"`, `"random"`, or index number
- **`grid`** - `"auto"` or `[rows, columns]` for grid-based stagger patterns
- **`ease`** - Easing for the stagger distribution
- **`repeat`** / **`yoyo`** - For looping staggers

*"Mastery of staggers allows AI to create sophisticated group animations (like a gallery of thumbnails popping in with delay or a set of text lines revealing with varied timing). AI models should remember: staggers add visual interest and guide the eye, and they are often simpler than scheduling individual tweens for each element."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Easing Functions:**

*"Easing is the secret sauce that makes animations feel natural (or appropriately dramatic). GSAP includes a wide range of easing options."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Easing Options:**
- **Power eases:** `"power1.in/out/inOut"` through `"power4.in/out/inOut"` (higher = more intense)
- **Elastic:** `"elastic.out"`, `"elastic.inOut"` (springy effects)
- **Bounce:** `"bounce.out"` (bouncy landing)
- **Back:** `"back(1.7).out"` (overshoots then settles)
- **Expo:** `"expo.out"` (dramatic fast-to-slow)
- **Custom:** CustomEase for bezier curves

**Easing Selection Guide:**

*"Use easing deliberately to convey weight and style:
- Use `power4.out` or `expo.out` for a dramatic, fast-to-slow entrance.
- Use `power2.inOut` for gentle, smooth transitions.
- Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI).
- Use linear (no ease) rarely -- mostly for continuous linear movement or precise scrubbing animations."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

*"GSAP's default ease in 3.x is `"power1.out"` (slight ease-out). But premium sites rarely stick to default; they tailor easing per animation. AI should emulate this: think about the personality of each motion and choose an ease accordingly, rather than always using default or none."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Document for this use case:**
- Which tween method fits each element (to/from/fromTo)?
- What stagger configuration creates the desired rhythm?
- Should stagger radiate from center, edges, or sequential?
- Which easing conveys the right personality (dramatic, smooth, playful)?

#### Section 3.1: Page Load Sequence (if intro animation)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/11-31-pattern-smooth-page-load-sequence-intro-timeline.md`

**Apply if:** Timeline is for page intro/hero animation

**MANDATORY READING (if applicable):**

Read Section 3.1 if creating a page load/intro animation.

**Use Case:**

*"Animate page elements (e.g., header, hero text, image) on page load in a orchestrated sequence. This creates a polished first impression rather than content just appearing."*
(Source: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md)

**Page Load Pattern - Vanilla JavaScript:**

```javascript
window.addEventListener('DOMContentLoaded', () => {
  const introTl = gsap.timeline();

  introTl.from("#mainHeader", {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".tagline", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")  // start 0.4s before header ends (overlap)
    .from("#heroImage", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out"
    }, "<0.2");  // start 0.2s after tagline starts (slight overlap)
});
```

*"When DOMContentLoaded fires, we create a timeline: Header fades in from above (y: -80) over 0.8s. Tagline fades in from below (y: 20) starting 0.4s before header is done, giving a nice overlap. Hero image fades in and scales up (from 0.8 to 1 scale) starting slightly after tagline starts."*
(Source: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md)

**Overlapping Strategy:**

*"The overlapping (`"<0.2"`) means it doesn't wait fully -- this results in all three elements visible in close succession, creating a cohesive entrance."*
(Source: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md)

**Page Load Pattern - React/Next.js:**

```javascript
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HomeIntro() {
  const introRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context((self) => {
      const header = self.selector("#mainHeader");
      const tagline = self.selector(".tagline");
      const image = self.selector("#heroImage");

      let tl = gsap.timeline();
      tl.from(header, { y: -80, opacity: 0, duration: 0.8, ease: "power2.out" })
        .from(tagline, { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(image, { opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" }, "<0.2");
    }, introRef);

    return () => ctx.revert();
  }, []); // empty dependency – run once

  return (
    <div ref={introRef}>
      <h1 id="mainHeader">Welcome to Our Site</h1>
      <p className="tagline">Experience the difference</p>
      <img id="heroImage" src="hero.jpg" alt="Hero Image" />
    </div>
  );
}
```

*"We wrap the content in a `div ref={introRef}` and use `gsap.context` via the `useGSAP` hook. Within the context, `self.selector(...)` allows selecting elements within this component only, avoiding conflicts."*
(Source: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md)

**Why This is World-Class:**

*"It's not just a fade-in -- it's a directed sequence. The overlaps give it rhythm (header starts, then tagline comes in shortly after, etc.). This feels more natural and engaging than everything appearing at once or one-after-one with equal delays. Such nuance is what Awwwards juries notice."*
(Source: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md)

**AI Takeaway:**

*"Always consider overlapping sequences to create flow."*
(Source: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md)

**Key Principles:**
- **DOMContentLoaded timing** (Vanilla) or **useGSAP hook** (React) ensures animation runs when DOM is ready
- **Overlapping position parameters** (`"-=0.4"`, `"<0.2"`) create natural rhythm
- **power2.out easing** for smooth deceleration
- **GSAP Context** (React) for component-scoped selectors and cleanup
- **Empty dependency array** ensures one-time execution on mount

#### Section 3.7: Cleanup and Reinitialization (Lifecycle)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`

**Extract:**
- Timeline cleanup strategies (kill vs revert)
- Memory management
- Reinitialization patterns
- Lifecycle integration

**Document:** How should this timeline be cleaned up and managed?

### Phase 3: Framework Integration (if applicable)

#### If React or Next.js:

**Section 2.5: React/Next.js Integration**
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`

Required Archon Query:
```javascript
rag_search_code_examples("useGSAP timeline {framework}", match_count=6)
```

**Extract:**
- useGSAP() hook patterns
- Ref-based element selection
- Context-safe selectors
- Cleanup on component unmount
- Server Component considerations (Next.js 15)

**Document:** How to integrate timeline with React/Next.js lifecycle?

#### If New Framework Version:

Execute WebSearch for latest patterns:
```javascript
WebSearch("Next.js 15 GSAP timeline SSR 2025")
WebSearch("React 19 GSAP timeline patterns 2025")
```

**Purpose:** Verify no breaking changes or new best practices in latest versions

### Phase 4: Premium Plugin Research (if needed)

If effects require premium plugins (MorphSVG, DrawSVG, etc.):

```javascript
rag_search_code_examples("MorphSVG timeline", match_count=5)
rag_search_code_examples("DrawSVG timeline sequence", match_count=5)
```

**IMPORTANT:** Emphasize that MorphSVG, SplitText, DrawSVG, ScrambleText, InertiaPlugin, etc. are **FREE in GSAP 3.13+**!
Reference: https://gsap.com/blog/gsap-3-13-0-release

### Phase 5: Research Documentation

Create a "Research Findings" section documenting:

1. **Timeline Patterns Found**
   - Which KB examples are most relevant?
   - What timeline structure fits best (sequential, overlapping, etc.)?
   - Position parameter strategy

2. **Deep-Research Framework Applications**
   - Which Section 2.2 techniques apply?
   - Stagger configuration (from Section 2.1)
   - Cleanup strategy (from Section 3.7)

3. **Framework Integration Strategy**
   - useGSAP hook usage (React)
   - Ref patterns
   - Cleanup approach

4. **Premium Plugin Usage**
   - Which plugins needed (if any)?
   - Remind user: FREE in GSAP 3.13+

<critical>
🚨 **RESEARCH QUALITY GATE CHECKPOINT**

Before proceeding to Step 3, you MUST have completed:
- ✅ All 4 Archon queries (Query 1-4) with documented findings
- ✅ Deep-Research section reviews (2.2, 2.1, 3.1, 3.7, 2.5 if applicable)
- ✅ Framework integration research (if React/Next.js/Vue)
- ✅ Premium plugin research (if needed)
- ✅ Research documentation created (Phase 5)

**This is not a suggestion - it is a REQUIREMENT.** The workflow engine will enforce this checkpoint.
</critical>

<ask>
**MANDATORY CONFIRMATION (Research Gate):**

Have you completed ALL research requirements listed above?

Type **"COMPLETE"** if you have:
- Executed ALL required Archon queries and documented findings
- Reviewed ALL applicable Deep-Research sections
- Created the Research Findings documentation (Phase 5)

Type **"INCOMPLETE"** if research is not done (you will return to complete it).
</ask>

<check if="response != 'COMPLETE'">
  <action>HALT execution - research incomplete</action>
  <goto step="2">Return to Step 2 to complete research</goto>
</check>

---

## Step 3: Pattern Selection

Based on research findings, select the best timeline pattern for this use case.

### Timeline Architecture Decision

Choose timeline structure:

**Option A: Simple Timeline (Sequential)**
```javascript
const tl = gsap.timeline()
tl.to(element1, { ... })
  .to(element2, { ... })
  .to(element3, { ... })
```

**Option B: Overlapping Timeline (Relative Position)**
```javascript
const tl = gsap.timeline()
tl.to(element1, { ... })
  .to(element2, { ... }, "<0.3")  // Start 0.3s before previous ends
  .to(element3, { ... }, "-=0.5")  // Start 0.5s before previous ends
```

**Option C: Labeled Timeline (Reusable Jump Points)**
```javascript
const tl = gsap.timeline()
tl.add("start")
  .to(element1, { ... })
  .add("midpoint")
  .to(element2, { ... })
  .add("end")
  .to(element3, { ... })
```

**Option D: Nested Timeline (Complex Coordination)**
```javascript
const tl = gsap.timeline()
const cardTimeline = gsap.timeline()
cardTimeline.to(cards, { ... })

tl.add(cardTimeline)
  .to(otherElement, { ... })
```

**Document:** Which architecture fits the sequence requirements?

---

## Step 4: Framework Integration (if applicable)

Apply framework-specific patterns based on research.

### React/Next.js Integration Pattern

**useGSAP Hook Pattern (Complete Example):**
```typescript
'use client'  // Next.js 15 App Router - REQUIRED for client-side animations

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

// Register plugins if needed
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
// gsap.registerPlugin(MorphSVGPlugin)  // FREE in GSAP 3.13+!

export default function TimelineComponent() {
  // Container ref for context-safe selectors
  const container = useRef<HTMLDivElement>(null)

  // Timeline ref if you need to control it from other functions
  const timelineRef = useRef<GSAPTimeline | null>(null)

  useGSAP(() => {
    // Create timeline with defaults
    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.out"
      },
      paused: false  // Auto-play on mount (or true for manual control)
    })

    // Build timeline sequence
    tl.from(".header", {
      y: -50,
      opacity: 0
    })
    .from(".content", {
      y: 20,
      opacity: 0,
      stagger: 0.1  // If multiple .content elements
    }, "<0.3")  // Start 0.3s after previous starts
    .from(".cta", {
      scale: 0.8,
      opacity: 0
    }, "-=0.2")  // Start 0.2s before previous ends

    // Store ref for external control (optional)
    timelineRef.current = tl

    // Cleanup function (CRITICAL for memory management)
    return () => {
      tl.kill()  // Kill timeline on unmount
      timelineRef.current = null
    }
  }, { scope: container })  // Context-safe selector scoping

  // Optional: Control methods
  const handlePause = () => timelineRef.current?.pause()
  const handlePlay = () => timelineRef.current?.play()
  const handleReverse = () => timelineRef.current?.reverse()

  return (
    <div ref={container} className="timeline-container">
      <h1 className="header">Welcome</h1>
      <div className="content">
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </div>
      <button className="cta" onClick={handlePause}>Pause</button>
    </div>
  )
}
```

**Key Points for React Integration:**

1. **'use client' Directive (Next.js 15):**
   - REQUIRED at top of file for App Router
   - Animations are client-side only (no SSR)
   - Omit for Pages Router or Create React App

2. **useRef Pattern:**
   - `container` ref for context-safe selectors
   - `timelineRef` optional for external control
   - Typed correctly: `useRef<HTMLDivElement>(null)`

3. **useGSAP Hook with Scope:**
   - `scope: container` ensures selectors only target this component
   - Prevents conflicts in multi-component apps
   - Selector ".header" becomes scoped to container

4. **Cleanup Function MANDATORY:**
   ```typescript
   return () => {
     tl.kill()  // Prevent memory leaks
   }
   ```
   - Runs on component unmount
   - Prevents timeline continuing after unmount
   - Critical for SPAs with route changes

5. **Empty Dependency Array:**
   - `useGSAP(() => {...}, { scope: container })`
   - Runs once on mount (no dependencies)
   - For controlled re-runs, add dependencies: `{ scope: container, dependencies: [trigger] }`

**Advanced React Pattern - Conditional Timeline:**

```typescript
useGSAP(() => {
  if (!container.current) return  // Safety check

  const tl = gsap.timeline({
    paused: true,  // Start paused for manual trigger
    onComplete: () => console.log('Animation complete!')
  })

  tl.from(".item", {
    x: -100,
    opacity: 0,
    stagger: 0.15,
    ease: "back.out(1.7)"
  })

  // Play on specific condition
  if (shouldAnimate) {
    tl.play()
  }

  return () => tl.kill()
}, { scope: container, dependencies: [shouldAnimate] })  // Re-run when condition changes
```

**Next.js SSR Considerations:**

```typescript
// Server Component (NO GSAP)
export default function Page() {
  return (
    <div>
      <ClientTimeline />  {/* Client Component with GSAP */}
    </div>
  )
}

// Client Component (WITH GSAP)
'use client'  // This makes it client-only
import { useGSAP } from '@gsap/react'
// ... GSAP code here
```

**Key Rule:** GSAP cannot run on server. Always use `'use client'` in Next.js 15 App Router.

### Vue 3 Integration Pattern

**Composition API Pattern (Complete Example):**

```typescript
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import type { GSAPTimeline } from 'gsap'

// Register plugins if needed
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
// gsap.registerPlugin(MorphSVGPlugin)  // FREE in GSAP 3.13+!

// Template refs
const container = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)
const content = ref<HTMLElement[]>([])
const cta = ref<HTMLElement | null>(null)

// Timeline ref for external control
let timeline: GSAPTimeline | null = null

// Timeline creation on mount
onMounted(() => {
  if (!container.value) return  // Safety check

  // Create timeline with context scoping
  timeline = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out"
    }
  })

  // Build timeline sequence
  if (header.value) {
    timeline.from(header.value, {
      y: -50,
      opacity: 0
    })
  }

  if (content.value.length) {
    timeline.from(content.value, {
      y: 20,
      opacity: 0,
      stagger: 0.1  // Stagger multiple elements
    }, "<0.3")  // Start 0.3s after previous starts
  }

  if (cta.value) {
    timeline.from(cta.value, {
      scale: 0.8,
      opacity: 0
    }, "-=0.2")  // Start 0.2s before previous ends
  }
})

// Cleanup on unmount (CRITICAL)
onUnmounted(() => {
  timeline?.kill()  // Kill timeline to prevent memory leaks
  timeline = null
})

// Optional: Control methods
const pauseTimeline = () => timeline?.pause()
const playTimeline = () => timeline?.play()
const reverseTimeline = () => timeline?.reverse()

// Expose methods to template
defineExpose({
  pauseTimeline,
  playTimeline,
  reverseTimeline
})
</script>

<template>
  <div ref="container" class="timeline-container">
    <h1 ref="header" class="header">Welcome</h1>
    <div>
      <p v-for="(item, index) in 3" :key="index" :ref="el => content[index] = el as HTMLElement" class="content-item">
        Content {{ index + 1 }}
      </p>
    </div>
    <button ref="cta" class="cta" @click="pauseTimeline">Pause</button>
  </div>
</template>
```

**Key Points for Vue 3 Integration:**

1. **Template Refs:**
   - `const container = ref<HTMLElement | null>(null)`
   - Typed correctly for TypeScript
   - Array refs for multiple elements: `const content = ref<HTMLElement[]>([])`

2. **onMounted Lifecycle:**
   - Create timeline in onMounted (after DOM is available)
   - Safety check: `if (!container.value) return`
   - No GSAP in setup() body (DOM not ready yet)

3. **onUnmounted Cleanup MANDATORY:**
   ```typescript
   onUnmounted(() => {
     timeline?.kill()
     timeline = null
   })
   ```
   - Prevents memory leaks on component destroy
   - Critical for SPAs with route changes

4. **Array Refs for Stagger:**
   ```html
   <p v-for="(item, index) in items" :key="index"
      :ref="el => content[index] = el">
     Content
   </p>
   ```
   - Dynamic ref assignment for v-for
   - Allows staggering multiple elements

5. **defineExpose for Parent Control:**
   ```typescript
   defineExpose({ pauseTimeline, playTimeline, reverseTimeline })
   ```
   - Allows parent components to control timeline
   - Optional but useful for interactive timelines

**Options API Pattern (Alternative):**

```typescript
<script lang="ts">
import { defineComponent } from 'vue'
import gsap from 'gsap'

export default defineComponent({
  name: 'TimelineComponent',

  data() {
    return {
      timeline: null as any  // or GSAPTimeline | null with proper typing
    }
  },

  mounted() {
    this.timeline = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.out" }
    })

    this.timeline
      .from(this.$refs.header as HTMLElement, { y: -50, opacity: 0 })
      .from(this.$refs.content as HTMLElement[], { y: 20, opacity: 0, stagger: 0.1 }, "<0.3")
      .from(this.$refs.cta as HTMLElement, { scale: 0.8, opacity: 0 }, "-=0.2")
  },

  unmounted() {
    this.timeline?.kill()
    this.timeline = null
  },

  methods: {
    pauseTimeline() {
      this.timeline?.pause()
    },
    playTimeline() {
      this.timeline?.play()
    },
    reverseTimeline() {
      this.timeline?.reverse()
    }
  }
})
</script>

<template>
  <div ref="container" class="timeline-container">
    <h1 ref="header" class="header">Welcome</h1>
    <div>
      <p v-for="(item, index) in 3" :key="index" ref="content" class="content-item">
        Content {{ index + 1 }}
      </p>
    </div>
    <button ref="cta" class="cta" @click="pauseTimeline">Pause</button>
  </div>
</template>
```

**Composition API vs Options API:**
- **Composition API** (script setup): More modern, better TypeScript support, recommended
- **Options API**: Traditional Vue style, works but less type-safe

**Vue Router Integration:**

```typescript
import { useRouter } from 'vue-router'

const router = useRouter()

// Kill timeline on route change
router.beforeEach((to, from, next) => {
  timeline?.kill()
  next()
})
```

### Vanilla JavaScript Pattern

```javascript
// Create timeline
const tl = gsap.timeline({
  paused: true,  // Start paused, control programmatically
  onComplete: () => console.log('Timeline complete')
})

// Timeline implementation
tl.to(".element", { ... })

// Play when ready
tl.play()

// Cleanup when needed
// tl.kill()
```

---

## Step 5: Implementation - Generate Timeline Code

Generate production-ready timeline code with the following structure:

### Code Output Structure

1. **Imports** (if framework)
2. **Timeline Configuration** (options, callbacks)
3. **Timeline Implementation** (tweens, position parameters)
4. **Lifecycle Integration** (framework-specific)
5. **Comments** (inline documentation)
6. **KB Citations** (source patterns)

### Code Quality Requirements

**Must Include:**
- Clean, well-commented code
- Type annotations (if TypeScript)
- KB pattern citations (inline comments)
- Framework integration (if applicable)
- Cleanup handlers
- Performance optimizations
- Premium plugin usage (if needed - note FREE in 3.13+!)

**Code Comments Should Reference:**
- Which Archon source inspired this pattern
- Which Deep-Research section this technique comes from
- Why this approach was chosen

**Example Comment:**
```javascript
// Pattern from Archon: Codrops timeline tutorial (src: 1e5cc3bd5125be3c)
// Using relative positioning from Section 2.2 (timeline techniques)
```

---

## Step 6: Testing Guidance

Provide validation checklist for the user to test the timeline.

### Testing Checklist

**Functional Tests:**
- [ ] Timeline plays on intended trigger
- [ ] All elements animate in correct sequence
- [ ] Timing matches specifications (durations, delays)
- [ ] Effects achieve desired visual result
- [ ] Callbacks fire at correct moments

**Performance Tests:**
- [ ] No jank during animation (60fps maintained)
- [ ] No console errors or warnings
- [ ] Timeline cleanup works (no memory leaks)
- [ ] Smooth on target devices (desktop, mobile)

**Framework Tests (if applicable):**
- [ ] Component mounts without errors
- [ ] Timeline initializes correctly in framework lifecycle
- [ ] Cleanup occurs on unmount (no lingering tweens)
- [ ] Re-renders don't create duplicate timelines
- [ ] SSR compatibility (Next.js only)

**Cross-Browser Tests:**
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (WebKit differences)
- [ ] Mobile browsers

### Common Issues & Solutions

**Issue: Timeline doesn't play**
- Solution: Check element selectors exist in DOM
- Solution: Verify timeline isn't paused

**Issue: Timing feels wrong**
- Solution: Adjust position parameters
- Solution: Use timeScale for speed control

**Issue: Elements "jump" at start**
- Solution: Use `.fromTo()` instead of `.to()` to set initial state
- Solution: Set initial CSS properties

**Issue: Memory leaks in React**
- Solution: Ensure cleanup function kills timeline
- Solution: Use useGSAP hook with scope parameter

---

## Step 7: Output Delivery

### Final Deliverables

**1. Production-Ready Code**
- Complete timeline implementation
- Framework-integrated (if applicable)
- Comments and citations

**2. Research Citations Section**

```markdown
## Research Citations

**Archon Knowledge Base:**
- [Pattern Name] from [Source] (src: [source_id])
- [Technique] from [Source]

**Deep-Research Frameworks:**
- Section 2.2: [Technique used]
- Section 2.1: [Stagger configuration] (CORRECTED from 2.3)
- Section 3.7: [Cleanup strategy]

**Framework Integration:**
- Section 2.5: [React/Next.js pattern]
```

**3. Testing Checklist** (from Step 6)

**4. Implementation Notes**
- Any framework-specific considerations
- Premium plugin requirements (note: FREE in 3.13+!)
- Browser compatibility notes
- Performance considerations

---

## Success Criteria

Timeline implementation is complete when:

- ✅ All research queries executed and documented
- ✅ Pattern selection justified with KB citations
- ✅ Production-ready code generated
- ✅ Framework integration correct (if applicable)
- ✅ Comments reference KB sources and Deep-Research sections
- ✅ Testing checklist provided
- ✅ Research citations section included
- ✅ No guesswork - every technique backed by KB research

---

**Workflow Complete** ✨
