# GSAP Creative Direction Guide

**Purpose:** Master reference for The Director when planning premium animations

**Source:** Deep-Research GSAP Animation Mastery sections 1.1-1.4, 2.2, 3.1

**Usage:** Load this guide when executing creative direction tasks (planning, ideation, quality review)

---

## Overview

This guide provides the creative foundation for world-class animations. It teaches The Director how to think like a film director choreographing performances, not a code generator solving tickets.

The Director uses these frameworks when:
- Generating animation concepts (creative-ideation workflow)
- Planning animation narratives (plan-narrative workflow)
- Reviewing animation quality (review-quality workflow)
- Briefing specialist agents (Cinematographer, VFX Artist)

---

## Section 1.1: Animator's Mindset vs Code Generator

**Principle:** Think like a film director choreographing a performance, not a code generator solving a ticket.

### Core Philosophy

World-class animators approach projects like directors: they consider **story, emotion, and user experience** before code. AI's natural tendency is to jump straight to implementation - resist this. Creative vision comes FIRST.

### The 4 Pillars of Animator's Mindset

**1. Imagination First, Code Later**
- Gather visual inspiration (Awwwards, film, real-world motion, art)
- **Envision the end result** before worrying about syntax
- Picture the desired motion and its IMPACT on the user
- Ask: "What will the user FEEL when they see this?"

**2. Storyboarding & Key Frames**
- Identify **major moments** where something important changes
- Element enters → highlight occurs → transition between sections
- Outline key frames conceptually (not in code yet!)
- Ensure narrative flow (not disjointed effects)

**3. Choreography and Timing**
- Think in terms of **elements moving relative to each other in time**
- Plan relationships: which animations LEAD, which FOLLOW
- Design rhythm: fast sections vs slow sections vs dramatic pauses
- Coordinate: image fades out AS text slides in (relationships matter!)

**4. Design Intent (Purpose-Driven Motion)**
- **ALWAYS ask WHY** an animation exists
- Is it to draw attention? Create delight? Tell a story? Guide user flow?
- Every motion should serve a purpose
- **Intentional animation** = expert work vs random effects

### Applied to Creative Direction

- **Challenge "just animate this" requests** → Ask WHY and WHAT STORY
- Push for emotional resonance over technical complexity
- Ensure animations serve UX, not just showcase skills
- Remember: **Great animations are meaningful, not just decorative**

### Director's Role

Define animation's purpose and style BEFORE Cinematographer researches techniques. Resist urge to jump to GSAP snippets - form creative vision first.

---

## Section 1.2: Visual Inspiration → Technical Translation Workflow

**Principle:** Systematically translate abstract ideas and references into concrete implementation steps.

**THIS IS CORE TO DIRECTOR'S ROLE** - bridging vision and execution.

### The 5-Step Visual Translation Workflow

**STEP 1: Gather Inspiration**
- Find references for desired animation style
- Sources: Awwwards winners, CodePen demos, app/game motion, film
- Note specifics: smoothness, bouncy easing, staggered sequences, timing
- **Collect 3-5 visual references minimum** for each major animation

**STEP 2: Deconstruct the Effect**
- Break reference down into components
- Example: Floating card animation
  - What components? (Card moves up, fades in, slight rotation)
  - What timing/sequence? (Card after background, slight overlap)
  - What properties? (y, opacity, rotateZ)
- **Write these down in plain terms** (not code yet!)

**STEP 3: Choreograph on Paper**
- Outline sequence of events in order (text-based storyboard)
- Example sequence:
  1) Background circle scales up (0-0.8s)
  2) Heading letters fade and rise one by one (0.4-1.4s - OVERLAPS background!)
  3) Subtext slides in from left (1.2-1.8s)
- Decide overlaps or delays between actions
- **Create temporal landmarks** (when things happen in time)

**STEP 4: Choose the Technique**
For each action, decide best technical approach:

**Decision Tree:**
- **GSAP Timeline?** YES if multiple coordinated sequences (most complex cases)
- **ScrollTrigger?** YES if scroll-based control needed
- **CSS only?** ONLY for simple transitions (hover fade, single property)
- **Special plugins?**
  - SplitText for letter-by-letter (FREE in 3.13+!)
  - Flip for state changes (FREE!)
  - MorphSVG for shape morphing (FREE!)
  - ScrollSmoother for buttery scrolling (FREE!)
- **WebGL/Three.js?** If 3D or >1000 objects (GSAP can still tween properties)

**Decision Criteria:**
- Use CSS for **simple static transitions** (button hover fade)
- Use GSAP for **sequenced, synchronized, or complex** animations
- GSAP shines when multiple elements/stages must be coordinated precisely
- For >1000 particles: Canvas/WebGL (GSAP drives logic)

**STEP 5: Prototype in Isolation**
- Create small prototype of complex animation (CodePen, isolated component)
- Isolates challenges, allows quick iteration on easing/timing
- Test BEFORE integrating into full site
- **Iterate until it feels right**, then integrate

### Key Principle: Visual + Semantic Mapping

For every imagined motion, have a plan for its code implementation. This prevents AI pitfall of code that doesn't match intended effect.

### Applied to Creative Direction

- Use this workflow when briefing Cinematographer for research
- Provide deconstructed components (Step 2) as research input
- Share choreography outline (Step 3) for timeline planning
- Make technique decisions (Step 4) based on constraints
- Request prototypes (Step 5) before full implementation

### Example Brief to Cinematographer

"Research how to implement a hero section where:
1. Background gradient fades in (0-0.6s)
2. Logo scales + rotates (0.3-1s - overlaps background)
3. Heading letters split and stagger up (0.8-1.8s)
4. CTA button bounces in (1.6-2s)
Use SplitText for heading, elastic.out for CTA bounce.
Find examples with similar overlap timing."

---

## Section 1.3: Storyboarding Complex Sequences

**Principle:** Plan museum-grade animations like a film director plans scenes - with narrative structure.

### Why Storyboarding Matters

A single effect often spans entire page/section with many elements over time. Without storyboarding, you get **chaotic motion**. With it, you get **intentional flow**.

### Storyboarding Techniques

**1. Define Sections or Scenes**
- Break page into logical sections (hero, about, gallery, footer)
- Consider navigation method (scroll or click)
- Plan transitions between sections
- Each section = mini-timeline with own narrative

**2. Use Temporal Landmarks**
- Identify **start, middle, end** of overall sequence
- Example:
  - *Start:* Page load, initial state (everything hidden)
  - *Middle:* User scrolls, triggers mid-animation (reveals happen)
  - *End:* Animation completes or loops (final state reached)
- Pin down landmarks to ensure clear beginning and resolution

**3. Timeline Sketch (Mental or Paper)**
- Draw rough timeline marking when each element starts/ends
- Like musical score for motion
- Example:
  - 0s: Background fade in
  - 0.5s: Heading enters
  - 1s: Heading exits WHILE image zooms (overlap!)
- Reveals overlaps and dependencies

**4. Parallel vs Sequential Motion**
- **Parallel:** Multiple motions at once (richness, depth)
- **Sequential:** One after another (clarity, focus)
- **World-class animations layer both:**
  - Parallel: Section background color fade (slow)
  - Sequential: Content cards animate one by one
  - Combined effect: Dynamic but coherent

**AVOID:** Triggering everything at once with equal timing (chaos!)
**USE:** GSAP timeline positions, staggers to carefully overlap/sequence

**5. Ease and Intensity Planning**
- Mark where to use different easing for emotional effect
- Intro: Gentle (power2.out) - welcoming
- Mid-section: Bouncy (elastic.out) - playful
- Ending: Snappy (power2.in) - decisive
- Easing sets emotional tone

### Pixar Story Spine for Animations

Apply to scroll narratives, page transitions, product showcases:

1. **Once upon a time...** → Establish context (initial state, brand intro)
2. **Every day...** → Status quo (what user expects, familiar patterns)
3. **Until one day...** → Change/trigger (scroll, click, hover event)
4. **Because of that...** → Consequences (animations unfold, story progresses)
5. **Until finally...** → Resolution (CTA appears, final state, action requested)

### Real Example - Homepage Scroll

- **Once upon a time:** User lands on homepage, sees hero section
- **Every day:** They expect to scroll for more info
- **Until one day:** They scroll down (trigger!)
- **Because of that:** Testimonials rise, metrics count up, CTA spotlights
- **Until finally:** Prominent "Get Started" button invites action

### Museum-Grade Example (Detailed Storyboard)

"Section 1: Large title appears with Flip animation (0-0.8s). Subtext fades (0.5-1.2s - overlaps!). After 3s OR on scroll 25%, camera icon floats in with elastic.out bounce (playful moment).

Section 2 (scroll trigger): Pin background, gallery images stagger-fade in (0.2s between each). As user scrolls further (scrub), images scale up one by one (parallax depth). On leaving section, all images fade out (reverse elegantly)."

### Applied to Creative Direction

- Structure scroll narratives with clear **beginning → middle → end**
- Ensure animations have **narrative arc** (not random motion)
- Coordinate timeline sequences like **film scenes** (intentional cuts, transitions)
- Use Pixar Story Spine for **scroll-driven storytelling**

### Director's Role

Create storyboard BEFORE VFX Artist implements. Share with crew for alignment. Mental rehearsal: **Visualize entire animation as if already coded** - this informs every GSAP line.

---

## Section 1.4: Decision Framework - Choosing the Right Tool

**Principle:** Expert directors choose the method that best fits the effect, performance needs, and constraints.

**GSAP is powerful but not always the answer.** Make informed choices.

### Decision Matrix

#### GSAP vs CSS Transitions/Animations

**Use CSS for:**
- Simple static transitions (button hover glow, link underline fade)
- Basic page load fade-in (single element, no coordination)
- Trivial effects with no sequencing needs

**Use GSAP for:**
- Complex sequencing (chaining delays, synchronization)
- Multiple elements coordinated precisely
- Fine-tuned timing beyond CSS keyframe abilities
- Dynamic runtime decisions (respond to user input)
- Rich easing library (elastic, bounce, custom curves)

**Rule:** If animation requires **coordination of multiple elements** or **fine-tuned timing**, use GSAP. If single element, single property, simple transition → CSS acceptable.

**Example Decision:**
- Button hover glow → CSS
- Full section scroll parallax with multiple layers → GSAP (ScrollTrigger)

#### GSAP vs Web Animations API (WAAPI)

**WAAPI:** Low-level browser API for animations (verbose, less convenient)
**GSAP:** Higher-level abstraction, easier timeline orchestration
**GSAP internally leverages WAAPI** for performance when possible

**Decision:** Stick to GSAP for **readability and productivity**. WAAPI rarely used directly for creative sites. GSAP gives you convenience + performance.

#### GSAP with Frameworks (React/Vue/Next.js)

**Framework-specific libraries exist:**
- Framer Motion (React)
- Vue transitions
- CSS-in-JS solutions

**These are declarative but LIMITED** compared to GSAP's flexibility.

**GSAP advantages:**
- Framework-agnostic (works anywhere)
- Extremely flexible (imperative control)
- Award-winning sites in React STILL use GSAP for complex animations

**Decision:** Lean toward GSAP even in React/Vue context for **complex sequences**. Use `useGSAP()` hook for React integration (clean, proper cleanup).

#### When NOT to Use GSAP

**1. Minimal Animations + Performance Constraints**
- If only trivial animations needed (rare hover states)
- Low-end device performance is TOP concern
- Purely static site with no interactivity
- **Marginal case** - GSAP is performant, but avoiding ANY JS is lighter

**2. WebGL-Heavy Experiences**
- 3D game-like site where MOST animation is within Three.js
- Custom game loops for physics engines
- **BUT:** Even here, GSAP useful for camera moves, UI tweens
- **Decision:** GSAP for orchestration, Three.js for 3D rendering

**3. SEO + Initial Load Constraints**
- Above-the-fold animations where first paint is CRITICAL
- Use CSS for initial simple animations, load GSAP for below-fold
- **Edge consideration** - GSAP loads efficiently, rarely a blocker

### Leverage GSAP's Strengths

**ScrollTrigger:**
- Beats manual scroll event handlers for scrub, pinning, snap
- Minimal code for complex scroll-driven effects
- **Always use for scroll animations** (don't reinvent wheel!)

**Premium Plugins (FREE in 3.13+!):**
- **MorphSVG:** Shape morphing (icon state changes, logo animations)
- **SplitText:** Letter-by-letter text reveals (museum-grade typography)
- **ScrollSmoother:** Buttery smooth scrolling (premium feel, easy setup)
- **DrawSVG:** SVG line drawing (logo reveals, decorative effects)
- **MotionPath:** Animate along custom paths (creative trajectories)

**Use these liberally** - they were $99/year each, now FREE!

### Applied to Creative Direction

- **Question:** "GSAP or not?" → Ask: "Do I need coordination, sequencing, or plugins?"
- **Answer:** YES → GSAP. NO (simple single-property) → CSS acceptable
- Recommend **ScrollTrigger for scroll effects** (always)
- Recommend **premium plugins actively** (MorphSVG, SplitText, etc - FREE!)
- For frameworks: Use GSAP with `useGSAP()` hook (React/Next.js)
- For WebGL: GSAP orchestrates, Three.js renders

### Director's Role

Make tool decisions early. Communicate constraints to crew. Default to GSAP for anything beyond trivial. Premium IS the standard now!

---

## Section 2.2: Mastering Timeline Techniques for Choreography

**Principle:** Timelines are GSAP's superpower for coordinated sequences. Master them for world-class choreography.

### Why Timelines Matter

Expert developers use timelines to **orchestrate complex multi-element sequences** with precision. This is how Awwwards-winning animations achieve perfect coordination.

### Timeline Techniques (Director Must Understand)

**1. Relative Positioning (Overlap Control)**

**Absolute Time:**
```javascript
tl.to(".circle", { x:100 }, 0)    // starts at 0s (absolute)
```

**Relative to Previous:**
```javascript
tl.to(".square", { x:100 }, "<")              // "<" = same time as previous
  .to(".triangle", { x:100 }, "<0.5");       // 0.5s after previous START
  .to(".star", { x:100 }, "+=0.3");          // 0.3s after previous END
```

**This is CRITICAL for creating rhythm:**
- `"<"` = start at same time (parallel motion)
- `"<0.5"` = start 0.5s after previous START (controlled overlap)
- `"+=0.5"` = start 0.5s after previous END (sequential with gap)
- `"-=0.4"` = start 0.4s BEFORE previous END (overlap for flow!)

**Example - Creating Rhythm:**
```javascript
tl.from(".header", { y: -80, opacity: 0, duration: 0.8 })
  .from(".tagline", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")  // Overlap!
  .from(".image", { scale: 0.8, opacity: 0, duration: 1 }, "<0.2"); // Slight delay
```

**Result:** Elements flow together (not rigid sequential) - feels organic!

**2. Labels (Named Positions)**

```javascript
tl.addLabel("sceneOne", 0)
  .to(".bg", { opacity: 1 }, "sceneOne")
  .to(".title", { y: 0 }, "sceneOne")        // Both start at "sceneOne"
  .addLabel("sceneTwo", "+=1")                // 1s after previous
  .to(".gallery", { x: 0 }, "sceneTwo");
```

**Use labels for:**
- Grouping multiple tweens to start together
- Readable timeline structure (semantic meaning)
- Easy timeline navigation (seek to label)

**3. Nesting Timelines (Modular Approach)**

**Experts break large animations into components:**

```javascript
const introTl = gsap.timeline();
// ...define intro sequence (20 tweens)

const galleryTl = gsap.timeline();
// ...define gallery sequence (15 tweens)

const master = gsap.timeline();
master.add(introTl)              // Plays intro
      .add(galleryTl, "+=1");    // Wait 1s, then gallery
```

**Benefits:**
- Each sub-timeline developed/tested separately
- Modular (reusable components)
- Top-tier sites use this pattern (section timelines → master)

**Director's Role:** Plan modular structure (intro, hero, gallery, footer timelines)

**4. Control Methods (Interactive Choreography)**

**Timeline as Interactive Object:**

```javascript
tl.pause()              // Halt timeline
tl.resume()             // Continue from current position
tl.reverse()            // Play backward (great for toggle animations)
tl.seek("sceneTwo")     // Jump to label
tl.progress(0.5)        // Jump to 50% completion
tl.timeScale(2)         // Play at 2x speed
```

**Use Cases:**
- **Toggle animations:** One timeline, use `.play()` and `.reverse()` (menu open/close)
- **Scrubbing:** Link timeline to scroll position (`.progress(scrollPercent)`)
- **Speed control:** `.timeScale(0.5)` on hover for slow-mo effect (dramatic!)

**Example - Menu Toggle:**
```javascript
const menuTl = gsap.timeline({ paused: true });
menuTl.to(".menu", { x: 0, duration: 0.5 })
      .to(".menu-item", { opacity: 1, stagger: 0.1 });

openBtn.onclick = () => menuTl.play();
closeBtn.onclick = () => menuTl.reverse();  // Elegant!
```

**5. Defaults and Repeat Options**

```javascript
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.out" },  // Apply to ALL tweens
  repeat: -1,                                      // Loop infinitely
  yoyo: true,                                      // Play forward then backward
  repeatRefresh: true                              // Recalc function values on each loop
});
```

**repeatRefresh (GSAP 3.8+):**
- Recalculates function-based or random values each loop
- Gives variety to repeating animations
- Example: Random positions recalculated each cycle

### Applied to Creative Direction

- Design animations with **overlaps** (use `"-=0.4"`, `"<0.5"`) for rhythm
- Plan modular structure (section timelines for complex pages)
- Consider **interactive control** (pause, reverse, timeScale for user input)
- Use labels for **semantic structure** ("intro", "climax", "outro")
- Specify defaults to reduce repetition (ease, duration)

### Director's Role

Communicate choreography intent: "Hero and tagline should overlap by 0.4s for flow"
Request modular timelines from VFX Artist for complex sequences

---

## Section 3.1: Page Load Sequence - First Impression Excellence

**Principle:** First impression matters. Craft premium intro experiences that feel intentional, not random.

### Why Page Load Animations Matter

Users form first impression in **50 milliseconds**. A polished load sequence signals quality. Random elements appearing = amateur. Choreographed reveal = professional.

### The Pattern Structure (4-Part Sequence)

**1. Logo/Brand Reveal (Establish Identity)**
- First element user sees (0-0.6s)
- Often scales + fades (gentle entrance)
- Sets brand tone immediately

**2. Hero Content Stagger (Build Anticipation)**
- Heading, tagline, image appear in sequence
- Use **overlaps** for flow (not rigid sequential!)
- Creates sense of unveiling (0.4-1.8s)

**3. Navigation/UI Appear (Enable Exploration)**
- Nav menu, buttons fade in (1.2-2s)
- Signals "you can interact now"
- Completes usable interface

**4. Background Elements Settle (Complete Scene)**
- Decorative elements, patterns, gradients (1.5-2.5s)
- Subtle, doesn't demand attention
- Finishes the "scene"

### Critical Timing Targets

**Total Duration:** 1.5-2.5 seconds
- **Too fast (<1s):** Feels rushed, user can't appreciate
- **Too slow (>3s):** Feels sluggish, user impatient
- **Sweet spot:** 1.8-2.2s for most hero sections

### Overlap Technique (THE SECRET TO RHYTHM)

**❌ WRONG - Rigid Sequential (Feels Mechanical):**
```javascript
tl.from(".logo", { opacity: 0, duration: 0.5 })      // 0-0.5s
  .from(".heading", { opacity: 0, duration: 0.5 })   // 0.5-1s (waits!)
  .from(".tagline", { opacity: 0, duration: 0.5 });  // 1-1.5s (waits!)
```
**Problem:** Everything waits for previous to finish. Feels rigid, slow.

**✅ CORRECT - Overlapping (Feels Organic):**
```javascript
tl.from(".logo", { opacity: 0, scale: 0.8, duration: 0.8, ease: "power2.out" })
  .from(".heading", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")  // Starts 0.4s BEFORE logo ends!
  .from(".tagline", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "<0.2")   // Starts 0.2s after heading
  .from(".cta", { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.4)" }, "-=0.2"); // Slight bounce!
```

**Why This Works:**
- Elements appear in **quick succession** (not waiting)
- Creates **rhythm** (visual music)
- Feels **intentional and fluid**
- Total time: ~1.8s (optimal!)

### The Rhythm Explanation

Think of overlaps like musical notes:
- No overlap = staccato (choppy, mechanical)
- Overlaps = legato (smooth, flowing)

Awwwards juries notice this nuance!

### Code Example (World-Class Pattern)

```javascript
window.addEventListener('DOMContentLoaded', () => {
  const introTl = gsap.timeline();

  introTl
    // 1. Brand reveal (0-0.8s)
    .from(".logo", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    // 2. Hero heading (starts at 0.5s - overlaps logo!)
    .from(".hero-heading", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.3")  // KEY: Overlap for flow!
    // 3. Tagline (starts at 0.9s)
    .from(".hero-tagline", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "<0.2")   // Slight delay after heading
    // 4. CTA button with playful bounce (starts at 1.4s)
    .from(".hero-cta", {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"  // Bounce conveys playfulness!
    }, "-=0.2")
    // 5. Background elements subtle (starts at 1.8s)
    .from(".bg-pattern", {
      opacity: 0,
      duration: 0.8,
      ease: "none"  // Linear fade for subtlety
    }, "<");  // Starts with CTA

  // Total timeline: ~2.2s (optimal first impression!)
});
```

### Accessibility Consideration

```javascript
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  // Instant reveal (no animation)
  gsap.set([".logo", ".hero-heading", ".hero-tagline", ".hero-cta"], { opacity: 1, y: 0, scale: 1 });
} else {
  // Full intro timeline (shown above)
  introTl.play();
}
```

### Applied to Creative Direction

- Ensure load sequences feel **intentional** (not "stuff appearing randomly")
- **Overlap technique is critical** for rhythm (`"-=0.4"`, `"<0.2"`)
- Timing targets: **1.5-2.5 seconds total** for hero
- Use **varied easing** (power2.out for most, back.out for playful CTA)
- **ALWAYS respect prefers-reduced-motion** (instant reveal fallback)

### Director's Role

Specify overlap timings in brief: "Heading should start 0.4s before logo finishes"
Define easing personality: "CTA gets playful bounce (back.out), rest smooth (power2.out)"
Ensure VFX Artist implements prefers-reduced-motion fallback

---

## Usage Directive

**When Planning Animations (Use in Order):**

1. **Section 1.1: Animator's Mindset**
   - Ask: "What story are we telling? What will user FEEL?"
   - Gather visual inspiration (3-5 references)
   - Define purpose: Delight? Guide? Inform? Draw attention?

2. **Section 1.2: Visual Translation Workflow**
   - Deconstruct references into components (Step 2)
   - Choreograph on paper (Step 3: timeline sketch)
   - Choose techniques (Step 4: GSAP vs CSS vs plugins)
   - Request prototype if complex (Step 5)

3. **Section 1.3: Storyboarding**
   - Apply Pixar Story Spine (Once upon a time → Until finally)
   - Define sections/scenes (hero, about, gallery)
   - Mark temporal landmarks (start, middle, end)
   - Plan parallel vs sequential motions

4. **Section 1.4: Decision Framework**
   - GSAP or CSS? (Complex coordination → GSAP)
   - Which plugins? (SplitText, MorphSVG, ScrollSmoother - all FREE!)
   - Framework integration? (Use useGSAP() for React)
   - Performance constraints? (Mobile considerations)

5. **Section 2.2: Timeline Choreography**
   - Design overlaps (specify `"-=0.4"` in brief)
   - Plan modular structure (section timelines)
   - Consider interactive control (pause, reverse, timeScale)
   - Use labels for semantic structure

6. **Section 3.1: Page Load Excellence**
   - Target 1.5-2.5s total duration
   - Specify overlaps for rhythm
   - Define easing personality per element
   - Ensure prefers-reduced-motion fallback

**When Reviewing VFX Artist Work:**

- Does it tell a story? (1.1) → Not just random motion?
- Did they follow Visual Translation workflow? (1.2) → Components match brief?
- Does it have narrative arc? (1.3) → Beginning → middle → end?
- Is technique appropriate? (1.4) → Right tool for context?
- Is choreography intentional? (2.2) → Overlaps create rhythm?
- Does first impression wow? (3.1) → 1.5-2.5s, smooth overlaps?

**When Briefing Cinematographer for Research:**

- Provide deconstructed components (1.2 Step 2)
- Share choreography outline (1.3 storyboard)
- Specify plugin requirements (1.4 decisions)
- Request overlap examples (2.2 + 3.1 rhythm)

**Red Flags to Challenge:**

- ❌ "Just fade everything in at once" → NO rhythm (use 1.2, 2.2, 3.1)
- ❌ "Use CSS for complex sequence" → Wrong tool (use 1.4)
- ❌ "No storyboard needed" → Will feel random (use 1.3)
- ❌ "Equal timing for all elements" → Mechanical (use overlaps!)

---

## Quality Bar

**Creative Direction Sign-Off Requirements:**

- [ ] Animation purpose defined (1.1: WHY does it exist?)
- [ ] Visual references provided (1.2: 3-5 examples minimum)
- [ ] Storyboard created (1.3: timeline sketch or Pixar Story Spine)
- [ ] Technique decisions made (1.4: GSAP vs CSS, plugins chosen)
- [ ] Overlap timings specified (2.2 + 3.1: rhythm planned)
- [ ] Total duration reasonable (3.1: 1.5-2.5s for hero loads)
- [ ] Accessibility considered (prefers-reduced-motion fallback planned)

**If ANY creative requirement unclear → Director refines brief BEFORE implementation**
