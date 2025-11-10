<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-text-animation/workflow.yaml</critical>

# Text Animation - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-text-animation
**Purpose:** Create sophisticated text animations using SplitText plugin (**FREE in GSAP 3.13+**)

---

## Overview

SplitText creates cinematic text animations by splitting text into animatable pieces. This workflow uses:
- **Archon KB research:** 10+ queries across 6 priority sources
- **Deep-Research sections:** 13 sections (vs 3 pathetic = +433% research depth)
- **Accessibility-first:** MANDATORY prefers-reduced-motion support

**🚨 CRITICAL:** SplitText is **FREE in GSAP 3.13+** (was paid before Webflow acquisition in October 2024)!
Reference: https://gsap.com/blog/gsap-3-13-0-release

**Animation Types:**
1. **Character-by-character** (stagger: 0.02-0.05s) - Headlines, logo reveals, dramatic text entrances
2. **Word-by-word** (stagger: 0.1s) - Paragraphs, subtitles, sequential messaging
3. **Line-by-line** (stagger: 0.15s) - Typewriter effects, content reveals, poetry
4. **Advanced effects** (scramble, wave, 3D rotation) - Premium hero sections, interactive experiences

**Key Principle (Section 3.5):**
*"Using SplitText (or similar) is the pro way. In older times, an AI might attempt to wrap each letter in spans manually -- error-prone and impractical. SplitText does it reliably."*

**Why Research-Backed Implementation Matters:**
This workflow prevents the common AI pitfall of trial-and-error animation development by:
- Consulting proven SplitText patterns from industry experts (Archon KB)
- Applying verbatim guidance from GSAP Animation Mastery Deep-Research
- Following accessibility MANDATORY requirements (Section 6.1)
- Implementing cleanup patterns that prevent memory leaks (Pitfall 8.1)

---

## Step 1: Context Gathering

<ask name="animation_type">
**Text Animation Type**

Choose animation type based on use case:

1. **Character-by-character** (letter reveals with stagger: 0.02-0.05s)
   - Use for: Headlines, logo reveals, dramatic text entrances
   - Example: Hero title revealing letter-by-letter with 3D rotation
   - Stagger recommendation: 0.02s (fast), 0.03s (moderate), 0.05s (slow)

2. **Word-by-word** (word reveals, sliding, fading, stagger: 0.1s)
   - Use for: Paragraphs, subtitles, sequential messaging
   - Example: Tagline with words sliding up and fading in
   - Stagger recommendation: 0.1s (comfortable reading pace)

3. **Line-by-line** (typewriter, slide-up reveals, stagger: 0.15s)
   - Use for: Typewriter effects, content reveals, poetry
   - Example: Multi-line text block revealing line-by-line
   - Stagger recommendation: 0.15s

4. **Advanced effects** (scramble, wave, 3D rotation per char)
   - Use for: Premium hero sections, interactive experiences, high-impact moments
   - Examples: Scramble text effect, wave animation, 3D character flip
   - Requires custom implementation

Which type? (1-4)
</ask>

<ask name="text_element">
**Text Element**

Provide text element details:

- **Selector:** CSS selector for target element (e.g., ".hero-title", "h1", "#headline")
- **Text content preview:** Sample text to help determine split strategy
- **Multiple elements:** Single element or multiple elements to animate?

**Examples:**
- Single: `.hero-title` with text "Welcome to Cre8tive AI"
- Multiple: `.feature-title` (3 elements across page)

**Note:** For multiple elements, SplitText will create separate instances automatically.
</ask>

<ask name="animation_details">
**Animation Style**

Specify animation properties based on Section 2.1 easing guidance:

**Easing Selection:**
- **Dramatic entrance?** Use `power4.out` or `expo.out` (fast-to-slow, impactful)
- **Gentle transition?** Use `power2.inOut` (smooth, subtle)
- **Playful/bouncy?** Use `bounce.out` or `elastic.out` (fun, energetic)

**Animation Properties:**
- **Effect type:** Fade in? Slide in (y: 50)? Scale in (scale: 0.8)? Rotate in (rotateX: -90)?
- **Stagger amount:** Use recommended ranges above or custom value?
- **Easing preference:** back, elastic, power2, power4, expo, bounce?
- **Duration:** How long per character/word/line? (0.5-1s typical)

**Example Specifications:**
- "Fade up with y: 50, stagger: 0.02, back.out(1.7) ease, duration: 0.8"
- "3D flip with rotateX: -90, stagger: 0.05, power4.out, duration: 1"
- "Scramble effect with random characters, stagger: 0.03, none ease"

**Section 2.1 Quote:**
*"Use easing deliberately to convey weight and style: Use power4.out or expo.out for a dramatic, fast-to-slow entrance. Use power2.inOut for gentle, smooth transitions. Use bounce.out or elastic.out for playful, bouncy elements."*
</ask>

<ask name="framework_context">
**Framework Context**

Provide development environment details:

**Framework:**
- **React (with useGSAP hook)?** Version? (e.g., React 18)
- **Next.js (App Router/Pages Router)?** Version? SSR considerations? (e.g., Next.js 15 App Router)
- **Vue (Composition API or Options API)?** Version?
- **Vanilla JavaScript?** Browser targets?
- **TypeScript or JavaScript?**

**Build Environment:**
- Module bundler: Vite, Webpack, Parcel, esbuild?
- GSAP installation: npm/yarn package or CDN?

**Examples:**
- "Next.js 15 with App Router, TypeScript, client component, Vite bundler"
- "React 18 with TypeScript, useGSAP hook, npm installed GSAP"
- "Vanilla JavaScript, ES modules, browser support back to Chrome 90+"
- "Vue 3 Composition API with TypeScript"

**Why This Matters:**
Framework context determines cleanup strategy (Section 2.5):
- React: useLayoutEffect with ctx.revert() or useGSAP with scope
- Next.js: "use client" directive required, SSR hydration considerations
- Vue: onUnmounted with split.revert()
- Vanilla: Manual cleanup on element removal
</ask>

<ask name="accessibility_priority">
**Accessibility Priority**

Per Section 6.1 MANDATORY requirements, choose accessibility level:

**Standard (Recommended for most projects):**
- prefers-reduced-motion → instant reveal (no animation)
- Simple gsap.matchMedia() implementation
- ARIA compatibility preserved (SplitText default)
- Testing: Toggle OS reduced-motion setting

**High-priority (WCAG AA+ compliance):**
- prefers-reduced-motion → simple fade only (no complex motion)
- Additional keyboard controls (pause/play if continuous)
- Enhanced focus management
- Testing: Screen reader + reduced-motion

**WCAG-AAA (Maximum accessibility):**
- Multiple alternative presentations (instant, fade, full animation)
- User controls for animation speed/disable
- Enhanced ARIA announcements
- Comprehensive keyboard navigation
- Testing: Full accessibility audit

**Section 6.1 Quote:**
*"Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We MUST honor this."*

Which level? (Standard recommended for most projects)
</ask>

---

## Step 2: Research Gate (MANDATORY - Cannot Proceed Without)

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:** This is a MANDATORY blocking checkpoint. You CANNOT proceed to Step 3 until this research is COMPLETE and DOCUMENTED.

**Why This Is Required:**
AI has a tendency to invent animation patterns through trial-and-error rather than consulting proven industry patterns. This research gate FORCES consultation of:
1. Archon KB (89 GSAP sources, 2.2M+ words) - Real-world SplitText implementations
2. Deep-Research sections (43 total, 13 for text animation) - Expert guidance with verbatim quotes
3. Accessibility requirements (Section 6.1 MANDATORY) - Legal and ethical obligations

**You CANNOT rationalize skipping this research. It is BLOCKING.**

---

### Phase 1: Archon KB Queries (REQUIRED - ALL MUST BE EXECUTED)

**Query Execution Protocol:**
1. Execute each query below using Archon MCP tools
2. Document findings in "Research Findings" section
3. Extract specific patterns, stagger amounts, code examples
4. Note source IDs for citation in final implementation

---

#### Query 1: SplitText Implementation Patterns
```javascript
rag_search_code_examples("SplitText {animation_type}", source_id="b9f6b322298feb21", match_count=8)
```

**Purpose:** Find proven SplitText implementations matching the desired animation type
**Effect type examples to substitute:**
- "SplitText characters" - for character-by-character animations
- "SplitText words stagger" - for word-by-word animations
- "SplitText lines typography" - for line-by-line animations
- "SplitText advanced effects" - for scramble, wave, 3D patterns

**What to Document:**
- What SplitText configurations work best for this animation type?
- Stagger amounts used (0.02s, 0.05s, 0.1s, etc.)?
- transformOrigin patterns for 3D effects?
- Split type (chars, words, lines, or combinations)?

**Expected Findings:**
- **Character patterns:** stagger 0.02-0.05s, rotateX: -90 (card flip), transformOrigin: "top center"
- **Word patterns:** stagger 0.1s, slide/fade combinations (y: 20, opacity: 0)
- **Line patterns:** stagger 0.15s, typewriter effects, masked reveals
- **Advanced:** scramble with innerText animation, wave with stagger functions, 3D rotations

**Source:** b9f6b322298feb21 (gsap.com official docs - PRIMARY source)

---

#### Query 2: Advanced Stagger Patterns
```javascript
rag_search_code_examples("stagger grid spiral complex patterns", match_count=6)
```

**Purpose:** Find complex stagger object patterns beyond simple numbers (Section 3.4 advanced techniques)

**What to Document:**
- Complex stagger objects with `from`, `grid`, `ease` properties
- Grid layouts (from: "center", grid: "auto")
- Spiral patterns (from: "center", grid: [rows, cols], axis: "x")
- Random distributions (from: "random")
- Stagger ease applications (ease: "power1.in" for acceleration)

**Expected Findings:**
```javascript
// Center-out reveal pattern (Section 3.4)
stagger: {
  each: 0.2,
  from: "center",  // Middle items first, radiating outward
  grid: "auto",    // Auto-detect grid layout
  ease: "power1.in"
}

// Grid-based stagger
stagger: {
  each: 0.1,
  grid: [5, 10],  // 5 rows, 10 columns
  from: "edges",  // Edges first, toward center
  axis: "y"
}

// Random stagger
stagger: {
  each: 0.05,
  from: "random",  // Random order
  ease: "none"
}
```

**Why This Matters:**
For multi-line text or grid-based typography layouts, complex stagger objects create sophisticated reveal patterns that simple numbers cannot achieve.

---

#### Query 3: SplitText Performance & Cleanup
```javascript
rag_search_knowledge_base("SplitText performance optimization revert", source_id="b9f6b322298feb21", match_count=6)
```

**Purpose:** Learn cleanup strategies, revert() usage, memory management (Pitfall 8.1 prevention)

**What to Document:**
- When to call `split.revert()` (restores original DOM)
- How to integrate with React cleanup (useLayoutEffect, useGSAP)
- Font loading best practices (`document.fonts.ready.then()`)
- Masking optimization for large text (lines+chars with mask:"lines")
- Memory leak prevention strategies

**CRITICAL Findings to Extract:**

1. **Font Loading (prevents FOUT/FOIT):**
```javascript
document.fonts.ready.then(() => {
  const split = SplitText.create(".text", { type: "chars" });
  gsap.from(split.chars, { opacity: 0, stagger: 0.02 });
});
```
**Why:** Prevents Flash of Unstyled Text (FOUT) or Flash of Invisible Text (FOIT) when fonts load after SplitText has already split the text.

2. **Cleanup Pattern:**
```javascript
// Vanilla JavaScript
const split = SplitText.create(".text", { type: "words" });
// ... animation code ...
// On cleanup:
split.revert();  // Restores original DOM structure, removes <div> wrappers

// React with useLayoutEffect
useLayoutEffect(() => {
  const split = SplitText.create(".text", { type: "chars" });
  gsap.from(split.chars, { opacity: 0 });
  return () => split.revert();  // Cleanup on unmount
}, []);
```

3. **DOM Optimization (Section 2.3):**
```javascript
// For LARGE text blocks (reduces DOM nodes)
const split = SplitText.create(".long-paragraph", {
  type: "lines,chars",
  mask: "lines"  // Apply overflow:hidden to lines, not individual chars
});
// This creates fewer container divs, improving performance
```
**Quote (Section 2.3):** *"GSAP recommends splitting into lines+chars and applying mask to lines to reduce total elements (significantly lowering DOM nodes for large text)."*

**Source:** b9f6b322298feb21 (gsap.com official docs)

---

#### Query 4: Accessibility - Reduced Motion (MANDATORY)
```javascript
rag_search_code_examples("text animation accessibility reduced-motion", match_count=6)
```

**Purpose:** Find prefers-reduced-motion implementation patterns (Section 6.1 MANDATORY requirement)

**What to Document:**
- How to detect `prefers-reduced-motion` media query?
- What animation alternatives to provide (instant reveal, simple fade)?
- Implementation using `gsap.matchMedia()`?
- Testing procedures (OS settings)?

**MANDATORY Pattern to Extract:**
```javascript
const mm = gsap.matchMedia();

// Reduced motion users: instant reveal or simple fade only
mm.add("(prefers-reduced-motion: reduce)", () => {
  // Option 1: Instant reveal (no animation)
  document.querySelectorAll('.text-anim').forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });

  // Option 2: Simple fade only (acceptable)
  // gsap.to('.text-anim', { opacity: 1, duration: 0.3 });
});

// Normal users: full SplitText animation
mm.add("(prefers-reduced-motion: no-preference)", () => {
  const split = SplitText.create(".text-anim", { type: "chars" });
  gsap.from(split.chars, {
    opacity: 0,
    y: 50,
    rotateX: -90,
    stagger: 0.02,
    ease: "back.out(1.7)"
  });
});
```

**Section 6.1 Quote:**
*"Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We MUST honor this."*

**What to Avoid in Reduced-Motion Mode (Section 6.1):**
- Parallax effects (cause dizziness)
- Large zoom/rotation animations
- Continuous auto-scrolling
- Repetitive/looping animations

**Testing:**
- **macOS:** System Settings > Accessibility > Display > Reduce Motion (toggle ON)
- **Windows:** Settings > Accessibility > Visual effects > Animation effects (toggle OFF)
- **Browser DevTools:** Can simulate with Chrome DevTools > Rendering tab > Emulate CSS media feature prefers-reduced-motion

---

#### Query 5: Typography Best Practices (Optional but Recommended)
```javascript
rag_search_knowledge_base("typography animation best practices stagger timing", match_count=5)
```

**Purpose:** Understand industry standards for readable, elegant text animations

**What to Document:**
- Optimal stagger ranges for natural reading rhythm
- Easing curves that enhance readability vs distract
- Transform patterns that feel premium (not gimmicky)

**Expected Industry Patterns:**
- **Stagger ranges:** 0.02-0.05s (chars), 0.1s (words), 0.15s (lines)
- **Easing preferences:** `back.out(1.7)`, `elastic.out`, `power2.out`, `expo.out`
- **Transform patterns:**
  - Card flip: `y: 50, rotateX: -90, transformOrigin: "top center"`
  - Bounce in: `y: 20, scale: 0.8`
  - Slide in: `y: 30, opacity: 0`

---

#### Query 6: Font Loading & FOUT Prevention
```javascript
rag_search_knowledge_base("font loading FOUT FOIT prevention web fonts", match_count=5)
```

**Purpose:** Prevent Flash of Unstyled Text (FOUT) and Flash of Invisible Text (FOIT) during SplitText animations

**What to Document:**
- `document.fonts.ready` API usage
- When to initialize SplitText (before or after font load)?
- Container visibility strategies

**Critical Pattern:**
```javascript
// CORRECT: Wait for fonts before SplitText
document.fonts.ready.then(() => {
  // Fonts loaded, now safe to split and animate
  gsap.set(".container", { opacity: 1 });  // Make container visible

  const split = SplitText.create(".text", { type: "words" });
  gsap.from(split.words, { opacity: 0, y: 20, stagger: 0.1 });
});

// Container starts hidden to prevent FOUT
// CSS: .container { opacity: 0; }
```

**Why This Matters:**
If you split text BEFORE fonts load, the text will reflow/resize when fonts arrive, causing visual glitches and incorrect split positions.

---

### Phase 2: Deep-Research Section Analysis (PRIMARY)

**Section Reading Protocol:**
1. Read specified sections from Deep-Research knowledge base
2. Extract verbatim quotes (use quotation marks, cite source)
3. Extract code patterns (copy exactly as shown)
4. Apply findings to this specific animation type
5. Document which techniques are relevant

---

#### Section 3.5: Text Split and Reveal - SplitText (PRIMARY)
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/15-35-pattern-text-split-and-reveal-splittext-fancy-effect.md`

**Read and Extract:**

**Pattern 1: Word Flip Animation**
```javascript
gsap.registerPlugin(SplitText);

const split = SplitText.create("#heroTitle", { type: "words" });

gsap.from(split.words, {
  rotationX: -90,
  opacity: 0,
  transformOrigin: "top center",
  duration: 0.8,
  ease: "easeOut",
  stagger: 0.1
});
```

**Verbatim Quote (Section 3.5):**
*"We split the #heroTitle text into words... We then animate each word from a 90-degree flipped state (rotationX -90 means it's laying flat away from viewer) to normal. transformOrigin: 'top center' makes the flip look like it's flipping in from top edge. This creates a card-flip effect for each word."*

**Pattern 2: Character-by-Character Reveal**
```javascript
const split = SplitText.create(".title", { type: "chars" });

gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  stagger: 0.02,  // 20ms between each character
  ease: "back.out(1.7)",
  duration: 0.8
});
```

**Accessibility Note (Section 3.5):**
*"SplitText & Accessibility: By default, SplitText keeps the original text content for screen readers (it doesn't destroy it, just hides and splits visually). It has built-in support to ensure ARIA compatibility."*

**Pattern 3: React Integration**
```javascript
useEffect(() => {
  const split = new SplitType("#heroTitle", { types: 'words' });
  gsap.from(split.words, {
    rotationX: -90,
    opacity: 0,
    transformOrigin: "top center",
    stagger: 0.1
  });
  return () => split.revert(); // Clean up: remove wrapping spans
}, []);
```

**What to Document:**
- Which Section 3.5 pattern matches this animation type (chars, words, lines)?
- transformOrigin settings for 3D effects?
- Stagger amounts used in examples?
- React cleanup pattern applicable?

---

#### Section 2.1: Core GSAP Concepts - Tweens, Staggers, Easing
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`

**Read and Extract:**

**Stagger Fundamentals (Verbatim):**
*"Staggering is animating multiple targets with a slight offset in start times. GSAP's stagger option (when multiple elements are targeted) makes this trivial."*

**Basic Stagger:**
```javascript
gsap.from(".list-item", {
  y: 20,
  opacity: 0,
  stagger: 0.1  // Each item starts 0.1s after the previous
});
```

**Advanced Stagger Object (Section 2.1):**
```javascript
gsap.from(".grid-item", {
  y: 50,
  opacity: 0,
  stagger: {
    each: 0.2,        // 0.2s between each element
    from: "center",   // Middle items first, radiating outward
    grid: "auto",     // Auto-detect grid layout
    ease: "power1.in" // Stagger with easing (accelerate)
  }
});
```

**Verbatim Quote (Section 2.1):**
*"each:0.2 means each element starts 0.2s apart, from:'center' makes the stagger originate from the center of the element array (so elements in the middle start first, radiating outward). grid:'auto' tells GSAP to figure out a grid if elements are in a grid layout."*

**Easing Guidance (Verbatim from Section 2.1):**
*"Use easing deliberately to convey weight and style:*
- *Use power4.out or expo.out for a dramatic, fast-to-slow entrance.*
- *Use power2.inOut for gentle, smooth transitions.*
- *Use bounce.out or elastic.out for playful, bouncy elements."*

**What to Document:**
- What stagger amount creates natural text reading rhythm?
- Should advanced stagger object be used (grid layout, center-out, etc.)?
- Which easing curve matches the desired animation feel (dramatic vs gentle)?

---

#### Section 2.3: The 2024 GSAP Plugin Ecosystem - All FREE
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`

**Read and Extract:**

**CRITICAL ANNOUNCEMENT (Verbatim from Section 2.3):**
*"A major development: as of late 2023/2024, GSAP and all its official plugins are free for everyone (no club membership needed). This means AI can and should utilize these powerful plugins which were once paywalled."*

**SplitText Plugin - FREE Status:**
*"This plugin splits text into lines, words, and/or characters as individual elements, enabling advanced typography animations (e.g. letter-by-letter fading, word staggering, text mask reveals, etc.). With GSAP 3.13+, SplitText even supports automatic masking of overflowing text."*

**Masking Feature (3.13+ NEW):**
```javascript
let splitter = new SplitText(".headline", {
  type: "words,chars",
  mask: "chars"  // NEW: Wraps each char in overflow:hidden container
});
```

**Verbatim Quote (Section 2.3):**
*"The 2025 update also introduced masking: you can specify mask: 'chars' and SplitText will wrap each char in a container with overflow hidden -- making it easy to animate text sliding out of a clip-mask without extra HTML."*

**Performance Tip (Verbatim from Section 2.3):**
*"Performance note: splitting text creates additional DOM elements (one wrapper per char/word). GSAP recommends splitting into lines+chars and applying mask to lines to reduce total elements (significantly lowering DOM nodes for large text)."*

**What to Document:**
- User MUST be informed: SplitText is FREE in GSAP 3.13+
- Should masking be used (overflow reveals, clip animations)?
- For large text blocks: Use lines+chars with mask:"lines" optimization?
- Reference link: https://gsap.com/blog/gsap-3-13-0-release

---

#### Section 6.1: Respecting Prefers-Reduced-Motion (MANDATORY)
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md`

**Read and Extract:**

**MANDATORY Requirement (Verbatim from Section 6.1):**
*"Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We MUST honor this."*

**Implementation Pattern (Section 6.1):**
```javascript
gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
  // Disable all scroll-triggered animations
  ScrollTrigger.getAll().forEach(trig => trig.disable());

  // Speed through animations (instant finish)
  gsap.globalTimeline.timeScale(100);
});
```

**Alternative Approach - Separate Handlers:**
```javascript
const mm = gsap.matchMedia();

// Reduced motion users
mm.add("(prefers-reduced-motion: reduce)", () => {
  // Instant reveal or simple fade
  document.querySelectorAll('.anim-element').forEach(el => {
    el.classList.add('appear');  // CSS class sets opacity: 1
  });
});

// Normal users
mm.add("(prefers-reduced-motion: no-preference)", () => {
  // Full SplitText animation
  const split = SplitText.create(".text", { type: "chars" });
  gsap.from(split.chars, { opacity: 0, y: 50, stagger: 0.02 });
});
```

**What to Reduce (Verbatim from Section 6.1):**
*"Focus on things that cause large movement or continuous motion:*
- *Parallax effects: These can cause dizziness. Instead, perhaps just keep elements static.*
- *Zooming or rotation: If something zooms a lot, maybe just fade it.*
- *Autoscrolling or scroll-jacking: Definitely disable under reduce motion.*
- *Repetitive animations (like a background that constantly pans). Either stop them or allow user to pause."*

**What to Document:**
- How will reduced-motion be handled for THIS text animation?
- Instant reveal or simple fade alternative?
- Are there rotation/zoom effects that need to be disabled?
- Testing plan (toggle OS setting)?

---

#### Pitfall 8.1: Forgetting to Clean Up (Memory Leaks)
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/34-pitfall-81-forgetting-to-clean-up-memory-leaks-double-animations.md`

**Read and Extract:**

**The Problem (Verbatim from Pitfall 8.1):**
*"AI generates animations in React's useEffect but forgets cleanup. Or creates ScrollTriggers on every render. This leads to duplicate animations (especially in React Strict Mode where effect runs twice) or memory leaks when components unmount."*

**WRONG - No Cleanup:**
```javascript
function Component() {
  useEffect(() => {
    gsap.to(".box", { x: 100 });  // No cleanup!
  }, []);
  return <div className="box">Hi</div>;
}
// In React 18 dev mode (Strict Mode): effect runs twice → two tweens → conflict
```

**CORRECT - With Context Cleanup:**
```javascript
function Component() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box", { x: 100 });
    });
    return () => ctx.revert();  // Kills tween + removes inline styles
  }, []);
  return <div className="box">Hi</div>;
}
```

**Verbatim Quote (Pitfall 8.1):**
*"ctx.revert() on cleanup will kill the tween if it's still running and remove GSAP's inline styles (reverting .box to pre-animation state). No duplicates, no leaks."*

**SplitText-Specific Cleanup:**
```javascript
useEffect(() => {
  const split = SplitText.create(".text", { type: "chars" });
  const tween = gsap.from(split.chars, { opacity: 0, stagger: 0.05 });

  return () => {
    tween.kill();       // Stop animation if still running
    split.revert();     // CRITICAL: Restores original DOM structure
  };
}, []);
```

**Alternative - useGSAP Hook (Recommended for React):**
```javascript
import { useGSAP } from "@gsap/react";

function Component() {
  const containerRef = useRef();

  useGSAP(() => {
    const split = SplitText.create(".text", { type: "chars" });
    gsap.from(split.chars, { opacity: 0, stagger: 0.02 });
    // Cleanup handled automatically by useGSAP
  }, { scope: containerRef });

  return <div ref={containerRef}><h1 className="text">Hello</h1></div>;
}
```

**What to Document:**
- Framework-specific cleanup strategy (React vs Vue vs Vanilla)?
- Will useGSAP hook be used (automatic cleanup)?
- Manual split.revert() required?
- Testing: Verify no duplicates in React Strict Mode?

---

#### Additional Sections (Quick Reference)

**Section 2.4: Performance Patterns & Optimization**
- GPU-accelerated properties only (transform, opacity)
- Avoid layout-triggering properties (top, left, width, height)
- Will-change CSS property usage
- Frame budget (16ms for 60fps)

**Section 2.5: Integration Patterns (React/Next.js/Vue)**
- useGSAP hook (React)
- useLayoutEffect vs useEffect timing
- SSR hydration considerations (Next.js)
- Composition API patterns (Vue 3)

**Section 3.4: Staggered Grid Reveal**
- Complex stagger objects (from:"center", grid: "auto")
- Spiral patterns, random distributions
- Axis-based staggers (axis: "x" or "y")

**Section 5.1: Animate Efficient Properties (GPU Rule)**
- **Verbatim:** *"Animating these means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID animating these if at all possible."*
- GPU-friendly: transform (x, y, scale, rotate), opacity
- Avoid: top, left, right, bottom, width, height, margin, padding

**Section 6.2: Other Motion Accessibility Considerations**
- Keyboard controls for continuous animations
- ARIA live regions for dynamic text
- Focus management during animations
- Color contrast during transitions

**Section 7.5: Notable Agencies & Patterns**
- Industry examples (Awwwards sites, premium agencies)
- Typography animation trends
- Stagger timing conventions

**Pitfall 8.2: Animating Wrong Properties**
- Layout thrashing from animating top/left/width/height
- Use transform instead (translateX instead of left)
- Use scale instead of width/height changes

---

### Phase 3: Research Documentation

Create a comprehensive "Research Findings" summary documenting:

#### 1. SplitText Patterns Found

**From Archon KB Queries:**
- **Character pattern:** stagger 0.02-0.05s, rotateX: -90 (card flip), transformOrigin: "top center"
- **Word pattern:** stagger 0.1s, slide/fade combinations (y: 20, opacity: 0)
- **Line pattern:** stagger 0.15s, typewriter effects, masked reveals (y: "100%")
- **Advanced:** scramble with innerText, wave with custom stagger functions, 3D rotations

**Masking Support (3.13+):**
- overflow:hidden wrappers automatically created with `mask: "chars"` or `mask: "lines"`
- Performance optimization: Use `type: "lines,chars", mask: "lines"` for large text blocks
- Reduces DOM node count significantly (Section 2.3)

#### 2. Deep-Research Applications

**Section 3.5: Text Split and Reveal (PRIMARY)**
- Word flip pattern with rotateX: -90, transformOrigin: "top center"
- *Quote:* "transformOrigin: 'top center' makes the flip look like it's flipping in from top edge."
- Accessibility: ARIA-compatible by default (original text preserved)
- React cleanup: split.revert() in useEffect return

**Section 2.1: Stagger Fundamentals**
- Simple stagger: 0.02-0.05s (chars), 0.1s (words), 0.15s (lines)
- Advanced stagger object: `{ each: 0.2, from: "center", grid: "auto", ease: "power1.in" }`
- *Quote:* "Use power4.out or expo.out for a dramatic, fast-to-slow entrance."
- Easing selection: power4.out (dramatic), power2.inOut (gentle), bounce.out (playful)

**Section 2.3: FREE Plugin Ecosystem**
- *Quote:* "as of late 2023/2024, GSAP and all its official plugins are free for everyone"
- SplitText FREE in GSAP 3.13+ (was paid before Webflow acquisition)
- Masking feature: `mask: "chars"` creates overflow:hidden containers
- Performance tip: lines+chars with mask:"lines" reduces DOM overhead

**Section 6.1: Prefers-Reduced-Motion (MANDATORY)**
- *Quote:* "We MUST honor this."
- Implementation: gsap.matchMedia() with separate handlers
- Reduced-motion alternative: instant reveal or simple fade only
- Avoid in reduced mode: parallax, rotation, zooming, autoscroll

**Pitfall 8.1: Cleanup & Memory Management**
- *Quote:* "This leads to duplicate animations (especially in React Strict Mode)"
- Correct pattern: ctx.revert() in useLayoutEffect cleanup
- SplitText-specific: split.revert() to restore original DOM
- Alternative: useGSAP hook with automatic cleanup

#### 3. Accessibility Strategy

**Detection Method:**
```javascript
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: reduce)", () => { /* instant reveal */ });
mm.add("(prefers-reduced-motion: no-preference)", () => { /* full animation */ });
```

**Reduced-Motion Alternatives:**
- **Level 1 (Standard):** Instant reveal (opacity: 1, no animation)
- **Level 2 (High-priority):** Simple fade only (gsap.to({ opacity: 1, duration: 0.3 }))
- **Level 3 (WCAG-AAA):** User controls + multiple alternatives

**ARIA Compatibility:**
- SplitText preserves original text for screen readers (Section 3.5)
- No manual ARIA overrides needed (built-in support)
- Screen reader testing required (VoiceOver/NVDA)

**Testing Plan:**
1. Toggle OS reduced-motion setting
2. Verify instant reveal or fade-only alternative
3. Confirm no large movements/rotation in reduced mode
4. Test with screen reader (text must remain readable)

#### 4. Cleanup Strategy

**Framework-Specific:**

**React (useLayoutEffect):**
```javascript
useLayoutEffect(() => {
  const split = SplitText.create(".text", { type: "chars" });
  gsap.from(split.chars, { opacity: 0, stagger: 0.02 });
  return () => split.revert();  // Restore DOM on unmount
}, []);
```

**React (useGSAP - Recommended):**
```javascript
import { useGSAP } from "@gsap/react";

useGSAP(() => {
  const split = SplitText.create(".text", { type: "chars" });
  gsap.from(split.chars, { opacity: 0, stagger: 0.02 });
  // Cleanup automatic
}, { scope: containerRef });
```

**Vue (Composition API):**
```javascript
import { onUnmounted } from 'vue';

onMounted(() => {
  const split = SplitText.create(".text", { type: "chars" });
  gsap.from(split.chars, { opacity: 0, stagger: 0.02 });

  onUnmounted(() => {
    split.revert();  // Cleanup on component destroy
  });
});
```

**Vanilla JavaScript:**
```javascript
const split = SplitText.create(".text", { type: "chars" });
gsap.from(split.chars, { opacity: 0, stagger: 0.02 });

// On element removal or page navigation:
split.revert();  // Call before removing element
```

**Font Loading Integration:**
```javascript
document.fonts.ready.then(() => {
  gsap.set(".container", { opacity: 1 });  // Make visible after fonts load
  const split = SplitText.create(".text", { type: "words" });
  gsap.from(split.words, { opacity: 0, y: 20, stagger: 0.1 });
});
```

---

<checkpoint type="approval-gate" blocking="true">
<halt>🚨 STOP. You MUST have documented findings from ALL required queries before proceeding to Step 3.</halt>

**Verification Checklist:**
- [ ] **Phase 1 Complete:** 4-6 Archon KB queries executed and documented
  - [ ] Query 1: SplitText implementation patterns (specific to animation type)
  - [ ] Query 2: Advanced stagger patterns (complex objects)
  - [ ] Query 3: Performance & cleanup (revert(), font loading)
  - [ ] Query 4: Accessibility reduced-motion (MANDATORY)
  - [ ] Query 5 (optional): Typography best practices
  - [ ] Query 6 (optional): Font loading & FOUT prevention

- [ ] **Phase 2 Complete:** Deep-Research sections read and quoted
  - [ ] Section 3.5: SplitText patterns (verbatim quotes extracted)
  - [ ] Section 2.1: Stagger fundamentals (stagger amounts, easing guidance)
  - [ ] Section 2.3: FREE plugin status (masking features confirmed)
  - [ ] Section 6.1: Reduced-motion MANDATORY (implementation strategy defined)
  - [ ] Pitfall 8.1: Cleanup patterns (framework-specific strategies documented)

- [ ] **Phase 3 Complete:** Research findings summary created
  - [ ] SplitText patterns documented (chars, words, lines, advanced)
  - [ ] Stagger amounts specified (0.02-0.05s, 0.1s, 0.15s)
  - [ ] Accessibility strategy defined (reduced-motion handling)
  - [ ] Cleanup strategy documented (split.revert() or ctx.revert())
  - [ ] Font loading integration planned (document.fonts.ready)

**Research Quality Validation:**
- [ ] At least 5 verbatim quotes from Deep-Research sections (with quotation marks + source citations)
- [ ] At least 5 code examples from Archon KB or Deep-Research (not invented)
- [ ] All quotes cite source in parentheses: (Section 3.5), (Section 2.1), etc.
- [ ] Research findings directly applicable to this animation type (not generic)

**User Input Required:**

Before proceeding, type **"Continue [c]"** to confirm research is complete.

**If research is incomplete:**
- Go back and execute missing queries
- Extract missing verbatim quotes
- Document findings properly

**Agent CANNOT rationalize skipping this checkpoint. Research MUST be complete.**

</checkpoint>

</research-gate>

---

## Step 3: SplitText Implementation

**Based on Research Findings:** Apply research-backed patterns from Step 2 to create production-ready SplitText animation code.

**Pattern Selection:** Choose the pattern(s) that best match:
- Animation type from Step 1 (chars, words, lines, advanced)
- Easing guidance from Section 2.1
- Accessibility requirements from Section 6.1
- Framework context from Step 1

---

### Pattern A: Character-by-Character Animation (Basic)

**Use Case:** Headlines, logo reveals, dramatic text entrances
**Research Source:** Section 3.5 (Primary), Archon KB Query 1

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// SplitText is FREE in GSAP 3.13+ (was paid before Webflow acquisition)
// Reference: https://gsap.com/blog/gsap-3-13-0-release
// Section 2.3 documents FREE plugin ecosystem
gsap.registerPlugin(SplitText);

// Wait for fonts to load (prevents FOUT/FOIT)
document.fonts.ready.then(() => {
  gsap.set(".container", { opacity: 1 });  // Make visible

  const split = SplitText.create(".hero-title", { type: "chars" });

  gsap.from(split.chars, {
    opacity: 0,
    y: 50,
    rotateX: -90,
    transformOrigin: "top center",  // Section 3.5: "flipping in from top edge"
    stagger: 0.02,  // 20ms delay between chars (natural reading rhythm)
    ease: "back.out(1.7)",  // Section 2.1: dramatic entrance
    duration: 0.8
  });

  // Cleanup when done (if element will be removed)
  // split.revert();  // Restores original text structure
});
```

**Pattern Explanation:**
- **rotateX: -90:** Section 3.5 card flip effect ("laying flat away from viewer")
- **transformOrigin: "top center":** Section 3.5 quote: *"makes the flip look like it's flipping in from top edge"*
- **stagger: 0.02:** Research-backed timing for natural character reveal
- **ease: "back.out(1.7)":** Section 2.1 guidance for dramatic entrances

---

### Pattern B: Word-by-Word Reveals (Standard)

**Use Case:** Paragraphs, subtitles, sequential messaging
**Research Source:** Section 3.5, Section 2.1 (stagger guidance)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  const split = SplitText.create(".tagline", { type: "words" });

  gsap.from(split.words, {
    opacity: 0,
    x: -50,  // Slide in from left
    stagger: 0.1,  // 100ms between words (comfortable reading pace)
    ease: "power2.out",  // Section 2.1: gentle transition
    duration: 0.6
  });
});
```

**Pattern Explanation:**
- **stagger: 0.1:** Research-backed timing for word-by-word reveals (Section 2.1)
- **ease: "power2.out":** Section 2.1 quote: *"Use power2.inOut for gentle, smooth transitions"*
- **x: -50:** Horizontal slide (GPU-accelerated, Section 5.1 compliant)

---

### Pattern C: Line-by-Line Animation (Typewriter)

**Use Case:** Typewriter effects, content reveals, poetry
**Research Source:** Section 3.5, Section 2.3 (masking)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  const split = SplitText.create(".paragraph", {
    type: "lines",
    linesClass: "line-wrapper"  // CSS: .line-wrapper { overflow: hidden; }
  });

  gsap.from(split.lines, {
    opacity: 0,
    y: 20,
    stagger: 0.15,  // 150ms between lines
    ease: "power1.out",
    duration: 0.5
  });
});
```

**CSS Required:**
```css
.line-wrapper {
  overflow: hidden;  /* Hides text sliding up from below */
}
```

**Pattern Explanation:**
- **stagger: 0.15:** Research-backed timing for line-by-line reveals
- **linesClass:** Adds class to line wrappers for overflow control
- **y: 20:** Slide up effect (GPU-accelerated)

---

### Pattern D: Line-by-Line with Masking (3.13+ Feature)

**Use Case:** Large text blocks, premium masked reveals
**Research Source:** Section 2.3 (masking optimization)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  // Section 2.3: "lines+chars with mask on lines reduces DOM overhead"
  const split = SplitText.create(".long-paragraph", {
    type: "lines,chars",
    mask: "lines"  // NEW in 3.13+: overflow:hidden containers on lines only
  });

  gsap.from(split.chars, {
    y: "100%",  // Slide up from below line mask
    stagger: 0.02,
    ease: "power2.out",
    duration: 0.6
  });
});
```

**Pattern Explanation:**
- **mask: "lines":** Section 2.3 optimization - reduces DOM nodes vs masking each char
- **type: "lines,chars":** Split into both (allows char animation with line masking)
- **y: "100%":** Percentage-based transform (scales with font size)

---

### Pattern E: Advanced - Scramble Text Effect

**Use Case:** Premium hero sections, high-impact moments
**Research Source:** Archon KB Query 1 (advanced patterns)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  const split = SplitText.create(".hero-title", { type: "chars" });
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

  split.chars.forEach((char, i) => {
    const originalText = char.innerText;

    gsap.fromTo(char,
      {
        innerText: () => chars[Math.floor(Math.random() * chars.length)]
      },
      {
        innerText: originalText,
        duration: 0.5,
        delay: i * 0.03,  // Stagger: 30ms between chars
        ease: "none",
        snap: { innerText: 1 }  // Snap to whole characters (prevents decimal text)
      }
    );
  });
});
```

**Pattern Explanation:**
- **innerText animation:** Animates text content itself (not transform)
- **snap: { innerText: 1 }:** GSAP snapping prevents fractional text values
- **Random character pool:** Creates scramble effect before revealing real text

**Performance Note:** This pattern animates innerText (not GPU-accelerated) - use sparingly.

---

### Pattern F: 3D Rotation Per Character

**Use Case:** Playful, energetic text reveals
**Research Source:** Section 3.5 (3D transforms), Section 2.1 (elastic easing)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  const split = SplitText.create(".title", { type: "chars" });

  gsap.from(split.chars, {
    rotationY: -180,  // Flip from side (vertical axis rotation)
    opacity: 0,
    transformOrigin: "center center",
    stagger: 0.05,
    ease: "elastic.out(1, 0.3)",  // Section 2.1: playful, bouncy
    duration: 1.2
  });
});
```

**Pattern Explanation:**
- **rotationY: -180:** Flip on vertical axis (side-to-side card flip)
- **ease: "elastic.out(1, 0.3)":** Section 2.1 quote: *"Use elastic.out for playful, bouncy elements"*
- **transformOrigin: "center center":** Flip around character center

---

### Pattern G: Font Loading Integration (CRITICAL)

**Use Case:** ALL text animations (prevents FOUT/FOIT)
**Research Source:** Archon KB Query 6, Section 2.3

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// CRITICAL: Wait for fonts before SplitText
document.fonts.ready.then(() => {
  // Fonts loaded - make container visible
  gsap.set(".text-container", { opacity: 1 });

  // Now safe to split (text won't reflow when fonts load)
  const split = SplitText.create(".text", { type: "words" });

  gsap.from(split.words, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "power2.out"
  });
});
```

**CSS Required:**
```css
.text-container {
  opacity: 0;  /* Hidden until fonts load */
}
```

**Why This Matters:**
If fonts load AFTER SplitText has split the text, the text will reflow/resize, breaking the split positions and causing visual glitches.

---

### Pattern H: React Integration (useGSAP + Context)

**Use Case:** React 18+ with TypeScript
**Research Source:** Section 2.5, Pitfall 8.1 (cleanup)

```typescript
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fonts already loaded in this example (handled by Next.js font optimization)
    const split = SplitText.create(".text", { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.02,
      ease: "back.out(1.7)",
      duration: 0.8
    });

    // Cleanup automatic via useGSAP scope
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <h1 className="text">Welcome to Cre8tive AI</h1>
    </div>
  );
}
```

**Pattern Explanation:**
- **useGSAP hook:** Automatic cleanup (Pitfall 8.1 prevention)
- **scope: containerRef:** Scopes animations to this component only
- **No manual split.revert():** useGSAP handles cleanup automatically

---

### Pattern I: React with Manual Cleanup

**Use Case:** React with useLayoutEffect (explicit cleanup)
**Research Source:** Pitfall 8.1 (cleanup patterns)

```javascript
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function TextReveal() {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const split = SplitText.create(textRef.current, { type: "chars" });
    const tween = gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.02,
      ease: "back.out(1.7)"
    });

    // Pitfall 8.1: CRITICAL cleanup to prevent memory leaks
    return () => {
      tween.kill();        // Stop animation if still running
      split.revert();      // Restore original DOM structure
    };
  }, []);

  return <h1 ref={textRef}>Welcome to Cre8tive AI</h1>;
}
```

**Pattern Explanation:**
- **useLayoutEffect:** Runs before browser paint (prevents flicker)
- **return () => {}:** Cleanup function (Pitfall 8.1 compliance)
- **split.revert():** Section 3.5 quote: *"remove wrapping spans"*

---

### Pattern J: Accessibility - Reduced Motion (MANDATORY)

**Use Case:** ALL text animations (Section 6.1 MANDATORY)
**Research Source:** Section 6.1 (prefers-reduced-motion)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const mm = gsap.matchMedia();

// Section 6.1: "We MUST honor this"
mm.add("(prefers-reduced-motion: reduce)", () => {
  // Reduced motion: instant reveal (no animation)
  document.querySelectorAll('.text-anim').forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
});

mm.add("(prefers-reduced-motion: no-preference)", () => {
  // Normal users: full SplitText animation
  document.fonts.ready.then(() => {
    const split = SplitText.create(".text-anim", { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,  // Section 6.1: Avoid rotation in reduced mode
      stagger: 0.02,
      ease: "back.out(1.7)"
    });
  });
});
```

**Pattern Explanation:**
- **Separate handlers:** One for reduced-motion, one for normal
- **Instant reveal:** No animation for reduced-motion users (Section 6.1 guidance)
- **Avoids rotation:** Section 6.1 quote: *"rotation: If something zooms a lot, maybe just fade it"*

**Testing:**
- **macOS:** System Settings > Accessibility > Display > Reduce Motion (ON)
- **Windows:** Settings > Accessibility > Visual effects > Animation effects (OFF)
- **Chrome DevTools:** Rendering tab > Emulate CSS media feature prefers-reduced-motion

---

### Pattern K: Next.js App Router Integration

**Use Case:** Next.js 15+ with App Router, client components
**Research Source:** Section 2.5 (Next.js patterns)

```typescript
"use client";  // CRITICAL: Next.js App Router requires this directive

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // SSR: Check if document exists (browser only)
    if (typeof document === 'undefined') return;

    document.fonts.ready.then(() => {
      const split = SplitText.create(".hero-title", { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.02,
        ease: "back.out(1.7)"
      });
    });

    // Cleanup handled in development mode only (React Strict Mode)
  }, []);

  return (
    <div ref={containerRef}>
      <h1 className="hero-title">Welcome to Cre8tive AI</h1>
    </div>
  );
}
```

**Pattern Explanation:**
- **"use client":** Required for client-side GSAP animations (App Router)
- **typeof document check:** Prevents SSR errors (server has no document)
- **useLayoutEffect:** Runs after DOM rendered but before paint

---

### Pattern L: Complete Production Example (All Patterns Combined)

**Use Case:** Production-ready text animation with all best practices
**Research Source:** All sections (comprehensive integration)

```javascript
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// SplitText is FREE in GSAP 3.13+ (Section 2.3)
// Reference: https://gsap.com/blog/gsap-3-13-0-release
gsap.registerPlugin(SplitText);

function initTextAnimation() {
  const mm = gsap.matchMedia();

  // Accessibility: Section 6.1 MANDATORY
  mm.add("(prefers-reduced-motion: reduce)", () => {
    // Instant reveal for users who prefer reduced motion
    document.querySelectorAll('.hero-title').forEach(el => {
      el.style.opacity = "1";
    });
  });

  // Full animation for users who accept motion
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Font loading: Prevents FOUT/FOIT (Archon KB Query 6)
    document.fonts.ready.then(() => {
      gsap.set(".text-container", { opacity: 1 });

      // Section 3.5: Character-by-character with 3D rotation
      const split = SplitText.create(".hero-title", {
        type: "chars",
        charsClass: "char"  // Add class to each char for styling
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,  // Section 3.5: card flip effect
        transformOrigin: "top center",  // "flipping in from top edge"
        stagger: 0.02,  // Section 2.1: natural reading rhythm
        ease: "back.out(1.7)",  // Section 2.1: dramatic entrance
        duration: 0.8
      });

      // Cleanup example (if element will be removed):
      // window.addEventListener('beforeunload', () => split.revert());
    });
  });
}

// Initialize when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTextAnimation);
} else {
  initTextAnimation();
}
```

**HTML:**
```html
<div class="text-container" style="opacity: 0;">
  <h1 class="hero-title">Welcome to Cre8tive AI</h1>
</div>
```

**CSS (Optional Styling):**
```css
.text-container {
  opacity: 0;  /* Hidden until fonts load */
}

.char {
  display: inline-block;  /* Required for 3D transforms */
}
```

**Complete Pattern Checklist:**
- ✅ SplitText plugin registered (Section 2.3)
- ✅ FREE status documented (comment + reference link)
- ✅ Font loading handled (document.fonts.ready)
- ✅ Accessibility MANDATORY (prefers-reduced-motion)
- ✅ Research-backed stagger (0.02s from Section 2.1)
- ✅ Research-backed easing (back.out(1.7) from Section 2.1)
- ✅ GPU-accelerated properties (transform, opacity - Section 5.1)
- ✅ Section 3.5 pattern applied (rotateX: -90, transformOrigin)
- ✅ Cleanup strategy considered (split.revert() available)

---

## Step 4: Output - Production Code

Generate SplitText animation code with comprehensive documentation and testing checklist.

### Code Quality Requirements

**MUST Include:**
- [ ] SplitText plugin import and registration
- [ ] **Prominent comment: FREE in GSAP 3.13+ with reference link**
- [ ] document.fonts.ready integration (prevents FOUT/FOIT)
- [ ] Split type configuration (chars/words/lines) based on animation type
- [ ] Stagger configuration from Section 2.1 research (specific amounts)
- [ ] Easing selection with Section 2.1 rationale (power/back/elastic/expo)
- [ ] GPU-accelerated properties only (transform, opacity) - Section 5.1 compliance
- [ ] revert() cleanup implementation (Pitfall 8.1)
- [ ] **Accessibility: prefers-reduced-motion handling (Section 6.1 MANDATORY)**
- [ ] Framework integration (if applicable) - useGSAP/useLayoutEffect/onUnmounted
- [ ] KB + Deep-Research citations (inline comments)

### Code Documentation Template

```javascript
// =============================================================================
// Text Animation: {animation_type}
// Generated by: GSAP Excellence Engine - Text Animation Workflow v2.0.0-premium
// =============================================================================

// Research Sources:
// - Section 3.5: Text Split and Reveal - SplitText (PRIMARY)
// - Section 2.1: Core GSAP Concepts (Stagger: {stagger_amount}, Easing: {easing})
// - Section 2.3: FREE Plugin Ecosystem (SplitText FREE in 3.13+)
// - Section 6.1: Prefers-Reduced-Motion (MANDATORY)
// - Pitfall 8.1: Cleanup & Memory Management
// - Archon KB: {query_count} queries across {source_count} sources

// CRITICAL: SplitText is FREE in GSAP 3.13+ (was paid before Webflow acquisition)
// Reference: https://gsap.com/blog/gsap-3-13-0-release

import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// {implementation_code}

// Pattern Applied: {pattern_name} (Section {section_number})
// Stagger: {stagger_amount} ({stagger_rationale} - Section 2.1)
// Easing: {easing_function} ({easing_rationale} - Section 2.1)
// Accessibility: {accessibility_approach} (Section 6.1 MANDATORY)
// Cleanup: {cleanup_strategy} (Pitfall 8.1 compliance)
```

### Testing Checklist

#### Text Animation Quality (Section 3.5 standards):
- [ ] **Stagger timing feels natural**
  - Characters: 0.02-0.05s (not too fast, not too slow)
  - Words: 0.1s (comfortable reading pace)
  - Lines: 0.15s (allows line comprehension)
- [ ] **Text remains readable during animation**
  - No text overlap or collision
  - Transforms don't obscure letters
  - Opacity transitions smooth
- [ ] **Effects enhance readability (not distract)**
  - Animation draws attention to text (not away from it)
  - Easing feels intentional, not arbitrary
  - Duration appropriate (0.5-1.2s typical)
- [ ] **Font loading handled (no FOUT/FOIT flicker)**
  - document.fonts.ready.then() wrapper used
  - Container opacity starts at 0, set to 1 after fonts load
  - No text reflow during animation

#### Technical (Pitfall 8.1 compliance):
- [ ] **SplitText plugin imported correctly**
  - `import { SplitText } from "gsap/SplitText"` (ES modules)
  - OR `<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/SplitText.min.js"></script>` (CDN)
- [ ] **Plugin registered**
  - `gsap.registerPlugin(SplitText);` called before usage
- [ ] **Cleanup implemented**
  - Vanilla: `split.revert()` called before element removal
  - React useLayoutEffect: `return () => split.revert()`
  - React useGSAP: automatic cleanup via scope
  - Vue: `onUnmounted(() => split.revert())`
- [ ] **No memory leaks**
  - Chrome DevTools > Memory tab > Take heap snapshot
  - Remove/re-add component multiple times
  - Verify detached DOM nodes don't accumulate
- [ ] **No duplicate animations on re-render**
  - React Strict Mode tested (development mode runs effects twice)
  - Only one tween per character/word/line at a time

#### Accessibility (Section 6.1 MANDATORY):
- [ ] **prefers-reduced-motion alternative provided**
  - gsap.matchMedia() used for detection
  - Separate handlers for "reduce" vs "no-preference"
  - Code structure: `mm.add("(prefers-reduced-motion: reduce)", () => {...})`
- [ ] **Reduced-motion fallback tested**
  - **macOS:** System Settings > Accessibility > Display > Reduce Motion (ON)
  - **Windows:** Settings > Accessibility > Visual effects > Animation effects (OFF)
  - **Chrome DevTools:** Rendering > Emulate CSS media > prefers-reduced-motion: reduce
  - Verify instant reveal or simple fade (NO rotation, parallax, zoom)
- [ ] **ARIA compatibility preserved**
  - SplitText default behavior maintained (original text for screen readers)
  - No manual ARIA overrides that break accessibility
  - Text content remains in DOM (not replaced with images/canvas)
- [ ] **Screen reader testing performed**
  - **macOS:** VoiceOver (Cmd+F5)
  - **Windows:** NVDA (free) or JAWS
  - Verify text announced correctly
  - Verify no gibberish from animation artifacts

#### Performance (Section 2.3 + 5.1 optimization):
- [ ] **Masking used where appropriate (3.13+ feature)**
  - Large text blocks: `type: "lines,chars", mask: "lines"`
  - Single headlines: Standard `type: "chars"` acceptable
  - Section 2.3 guidance followed (DOM node optimization)
- [ ] **DOM node count minimized**
  - Character count × split type = total nodes
  - For 50 chars: chars-only = 50 nodes (OK), lines+chars with mask = ~10 line wrappers + 50 chars (better)
  - Check DOM Inspector: Should not create hundreds of unnecessary wrappers
- [ ] **GPU-accelerated properties only (Section 5.1 compliance)**
  - ✅ Allowed: `transform` (x, y, scale, rotate, skew), `opacity`
  - ❌ Forbidden: `top`, `left`, `right`, `bottom`, `width`, `height`, `margin`, `padding`
  - Chrome DevTools > Performance tab > Record animation > No layout thrashing warnings
- [ ] **Font loading optimized**
  - document.fonts.ready.then() wrapper used
  - Container starts hidden (opacity: 0)
  - No visible text reflow when fonts load

#### Plugin (Section 2.3 confirmation):
- [ ] **User informed about FREE availability (3.13+)**
  - Code comment: "SplitText is FREE in GSAP 3.13+"
  - Reference link included: https://gsap.com/blog/gsap-3-13-0-release
  - Prevents user confusion (many tutorials still mention paid plugin)
- [ ] **Section 2.3 citation in code comments**
  - Quote referenced: *"all its official plugins are free for everyone"*
  - Masking feature mentioned if used
- [ ] **Masking features leveraged (if applicable)**
  - `mask: "chars"` or `mask: "lines"` parameter used
  - overflow:hidden containers verified (Chrome DevTools > Elements)

---

## Step 5: Success Criteria

Verify ALL criteria met before marking workflow complete:

### ✅ Research-Backed Implementation:
- [ ] **10+ Archon KB sources consulted**
  - Minimum 4 required queries executed (Query 1-4)
  - Optional queries (5-6) executed if relevant
  - Findings documented in Step 2 Research Gate
- [ ] **13 Deep-Research sections referenced**
  - Section 3.5: Text Split and Reveal (PRIMARY) - verbatim quotes extracted
  - Section 2.1: Core GSAP Concepts - stagger amounts, easing guidance
  - Section 2.3: FREE Plugin Ecosystem - FREE status confirmed
  - Section 6.1: Prefers-Reduced-Motion (MANDATORY) - implementation strategy
  - Pitfall 8.1: Cleanup - framework-specific patterns documented
  - [+ 8 additional sections listed in workflow.yaml]
- [ ] **Verbatim quotes cited from Sections 3.5, 2.1, 2.3, 6.1**
  - At least 5 verbatim quotes with quotation marks
  - Source cited in parentheses after each quote: (Section 3.5), (Section 2.1), etc.
  - Quotes applied to implementation (not just copied)
- [ ] **Patterns applied (not invented)**
  - Code examples match Archon KB or Deep-Research patterns
  - Stagger amounts match research (0.02-0.05s, 0.1s, 0.15s)
  - Easing curves match Section 2.1 guidance
  - transformOrigin settings match Section 3.5 patterns

### ✅ Plugin Configuration:
- [ ] **SplitText registered correctly**
  - `gsap.registerPlugin(SplitText);` present in code
  - Import statement correct (ES modules or CDN)
  - Plugin available before usage (no timing errors)
- [ ] **User prominently informed about FREE availability (GSAP 3.13+)**
  - Code comment at top of file
  - Reference link: https://gsap.com/blog/gsap-3-13-0-release
  - Section 2.3 cited as source
- [ ] **Masking features leveraged where appropriate**
  - Large text blocks use `mask: "lines"` optimization
  - Small headlines use standard split (masking optional)
  - Section 2.3 performance guidance followed

### ✅ Animation Quality:
- [ ] **Stagger timing natural (research-backed ranges)**
  - Characters: 0.02-0.05s (not arbitrary values)
  - Words: 0.1s (comfortable reading)
  - Lines: 0.15s (comprehension time)
  - Source: Section 2.1 fundamentals + Archon KB patterns
- [ ] **Easing appropriate for animation type (Section 2.1 guidance)**
  - Dramatic: power4.out, expo.out
  - Gentle: power2.inOut
  - Playful: bounce.out, elastic.out
  - Rationale documented in code comments
- [ ] **Cleanup strategy documented (Section 8.1 compliance)**
  - split.revert() usage explained
  - Framework-specific cleanup shown (React, Vue, Vanilla)
  - Memory leak prevention addressed

### ✅ Accessibility (MANDATORY - Section 6.1):
- [ ] **prefers-reduced-motion handling implemented**
  - gsap.matchMedia() detection code present
  - Separate handlers for reduce vs no-preference
  - Implementation matches Section 6.1 pattern
- [ ] **Alternative presentation provided (instant or fade)**
  - Reduced-motion users: instant reveal (opacity: 1, no animation)
  - OR simple fade only (gsap.to({ opacity: 1, duration: 0.3 }))
  - NO rotation, parallax, zoom in reduced mode
- [ ] **ARIA compatibility verified**
  - SplitText default behavior preserved
  - Original text remains for screen readers
  - No manual ARIA that breaks accessibility
- [ ] **Screen reader testing passed**
  - VoiceOver (macOS) or NVDA (Windows) tested
  - Text announced correctly
  - No gibberish from split wrappers

### ✅ Performance (Section 2.3 + 5.1):
- [ ] **document.fonts.ready integration (no FOUT)**
  - Wrapper: `document.fonts.ready.then(() => {...})`
  - Container opacity controlled (starts at 0, set to 1 after fonts load)
  - No visible text reflow
- [ ] **GPU-accelerated properties only**
  - transform (x, y, scale, rotate) ✅
  - opacity ✅
  - NO top, left, width, height, margin, padding ❌
  - Section 5.1 compliance verified
- [ ] **Memory cleanup verified**
  - split.revert() called in cleanup
  - Chrome DevTools Memory tab: No detached DOM accumulation
  - React Strict Mode: No duplicate animations

---

**Workflow Complete** ✨

**Generated Code Quality:**
- Total Deep-Research sections: 13 (vs 3 pathetic = +433% research depth)
- Verbatim quotes: {count} (minimum 5 required)
- Code patterns: Research-backed (not trial-and-error)
- Accessibility: MANDATORY compliance (Section 6.1)
- Performance: Optimized (Section 2.3, 5.1, Pitfall 8.1)

**Next Steps:**
1. Copy generated code to project
2. Install GSAP + SplitText plugin: `npm install gsap`
3. Test in browser (Chrome DevTools)
4. Toggle prefers-reduced-motion (accessibility test)
5. Verify font loading (no FOUT/FOIT)
6. Test cleanup (React Strict Mode if applicable)

**Support Resources:**
- GSAP Docs: https://gsap.com/docs/v3/Plugins/SplitText/
- Community Forum: https://gsap.com/community/
- Deep-Research: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/
