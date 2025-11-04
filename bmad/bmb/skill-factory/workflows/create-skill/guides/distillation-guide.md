# Ruthless Distillation Guide

Complete guide to distilling research from 100-200k tokens down to 20-40k tokens of essential content.

## The Core Problem

**Research agents will generate comprehensive content.**
**Your job: Extract ONLY the essentials.**

**Input:** 20-30k tokens per research area (comprehensive)
**Output:** 5-8k tokens per research area (essential only)
**Compression target:** 70-85% reduction

## The Fundamental Principle

**"Claude is already smart" - Don't teach what Claude knows.**

Official guidance: "Default assumption: Claude is already very smart. Remove explanatory content Claude should know."

**Distill FOR expertise, not FROM basics.**

## What to KEEP

### ✅ Keep: Patterns

**Successful approaches for complex scenarios:**
- Scroll-trigger pin patterns (not basic GSAP usage)
- Advanced timeline sequencing (not simple animations)
- State machine async actors (not basic XState)

**Example:**
```markdown
## ScrollTrigger Pin Pattern

For sticky sections that unpin after scroll distance:

```javascript
ScrollTrigger.create({
  trigger: ".section",
  pin: true,
  start: "top top",
  end: "+=500",
  onLeave: () => unpinActions()
});
```

**When to use:** Sections that reveal content while pinned
**Gotcha:** Must call kill() on component unmount
```

This is actionable, advanced, specific.

### ✅ Keep: Gotchas

**Common mistakes that cause real issues:**
- ScrollTrigger memory leaks (missing .kill())
- Timeline timing conflicts (improper sequencing)
- Performance issues (animating wrong properties)

**Example:**
```markdown
## Gotcha: Missing Cleanup

**Problem:** ScrollTrigger instances persist after component unmounts
**Symptom:** Scroll behavior breaks, memory leaks, conflicts
**Solution:** Store ref and kill in cleanup

```javascript
useEffect(() => {
  const st = ScrollTrigger.create({...});
  return () => st.kill();
}, []);
```
```

This prevents a real, common failure.

### ✅ Keep: Anti-Patterns

**What NOT to do, with specific consequences:**
- Animating width/height (performance tank)
- Linear easing (feels robotic)
- No will-change (janky on mobile)

**Example:**
```markdown
## Anti-Pattern: Animating Width

❌ **WRONG:**
```javascript
gsap.to(element, { width: "100%" }); // Triggers layout reflow!
```

**Why this fails:** Width changes cause expensive layout recalculations
**Result:** Drops to 30fps, feels janky

✅ **CORRECT:**
```javascript
gsap.to(element, { scaleX: 1 }); // GPU-accelerated transform
```
```

Shows what's wrong and why.

### ✅ Keep: Advanced Techniques

**Beyond basics, enables expert-level work:**
- Custom easing functions
- Timeline callbacks for synchronization
- Force3D optimizations
- RAF integration patterns

**Example:**
```markdown
## Advanced: Custom Easing for Bounce

```javascript
const customBounce = CustomEase.create("custom", "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1");
gsap.to(element, { y: 100, ease: customBounce });
```

**When to use:** Standard bounces don't match design
**Tool:** [GreenSock Ease Visualizer](https://gsap.com/docs/v3/Eases)
```

Enables custom premium effects.

### ✅ Keep: Quality Criteria

**What "good" looks/feels like:**
- Smooth = 60fps sustained
- Intentional = purposeful timing, not random
- Natural = easing matches physical motion
- Polished = respects details (reduced-motion, etc.)

**Example:**
```markdown
## Quality: Premium Timing

**Premium animations FEEL:**
- Smooth: No visible jank or stuttering
- Intentional: Precise timing (not 0.5s everything)
- Natural: Easing matches motion type
  - Fast objects: Power2/Power3
  - Floating: Sine
  - Bouncy: Elastic (sparingly)

**Red flags:**
- Everything uses same duration
- All linear easing
- Simultaneous (no stagger/sequence)
```

User can validate subjectively.

### ✅ Keep: Examples

**Complete, runnable code showing patterns:**
- Not snippets out of context
- Full implementations
- Commented to explain WHY

**Example:**
```markdown
```javascript
// Premium parallax with proper cleanup
function ParallaxSection() {
  const sectionRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        layersRef.current.forEach((layer, i) => {
          const speed = 0.3 + (i * 0.3); // 0.3, 0.6, 0.9
          gsap.to(layer, {
            y: -progress * 200 * speed,
            ease: "none"
          });
        });
      }
    });

    return () => st.kill(); // CRITICAL: Cleanup
  }, []);

  return (
    <section ref={sectionRef}>
      {[0,1,2].map(i => (
        <div key={i} ref={el => layersRef.current[i] = el} />
      ))}
    </section>
  );
}
```
```

Complete, shows pattern, includes cleanup gotcha.

## What to REMOVE

### ❌ Remove: Basics Claude Knows

**Claude doesn't need:**
- "GSAP is a JavaScript animation library"
- "import gsap from 'gsap'"
- "gsap.to() animates properties"
- "useEffect runs after render"

**Example of bloat to cut:**
```markdown
## Introduction to GSAP

GSAP (GreenSock Animation Platform) is a professional-grade JavaScript animation library. It's been around since 2006 and is trusted by major companies worldwide.

To use GSAP, first install it:
```bash
npm install gsap
```

Then import it in your file:
```javascript
import gsap from 'gsap';
```

GSAP provides several methods for animating:
- gsap.to() - animates from current state to target
- gsap.from() - animates from values to current state
- gsap.fromTo() - animates from one state to another

[300 tokens of basics]
```

**Cut all of this.** Claude knows how to install packages and import libraries.

### ❌ Remove: Redundant Information

**If mentioned in multiple research sources, consolidate to ONE mention:**

From Source 1:
```markdown
Always use will-change: transform for animated elements.
```

From Source 2:
```markdown
For best performance, add will-change: transform to animated elements.
```

From Source 3:
```markdown
The will-change property should be set to transform for GSAP animations.
```

**Distilled:**
```markdown
**Performance:** Use `will-change: transform` on animated elements.
```

One mention, not three.

### ❌ Remove: Tutorial Prose

**Cut the hand-holding:**
- "Now let's try..."
- "First, we need to..."
- "You might be wondering..."
- "In this section, we'll learn..."

**Example of prose to cut:**
```markdown
Now that we've learned about ScrollTrigger basics, let's move on to more advanced patterns. In this section, we'll explore how to create pinned sections. First, we need to understand what pinning means...

[Tutorial voice throughout]
```

**Distilled:**
```markdown
## Pin Patterns

Pin elements during scroll:

```javascript
ScrollTrigger.create({ trigger: el, pin: true, ... });
```

**When to use:** Sticky sections
**Gotcha:** Must call .kill() on unmount
```

Straight to the point.

### ❌ Remove: Comprehensive Parameter Lists

**Don't document every parameter Claude can look up:**

**Before (bloat):**
```markdown
## ScrollTrigger.create() Parameters

- trigger: String | Element - The element to watch
- start: String - Start position (default: "top bottom")
- end: String - End position (default: "bottom top")
- scrub: Number | Boolean - Scrub animation (default: false)
- pin: Boolean | String | Element - Pin element (default: false)
- markers: Boolean - Show debug markers (default: false)
- onEnter: Function - Callback when entering
- onLeave: Function - Callback when leaving
- onUpdate: Function - Callback on scroll update
- onToggle: Function - Callback on toggle
- anticipatePin: Number - Anticipate pin (default: 0)
- ...20 more parameters...

[800 tokens]
```

**After (distilled):**
```markdown
## ScrollTrigger Key Parameters

**Critical:**
- `scrub: 0.5` - Smooth scroll-linked animation
- `pin: true` - Pin element during scroll (must .kill() on unmount)

**Common:**
- `start: "top top"` / `end: "+=500"` - Control trigger points
- `markers: true` - Debug positioning (remove in production)

See [GSAP docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger) for complete API.
```

Essential parameters + link to comprehensive docs.

### ❌ Remove: Obvious Information

**Don't state the obvious:**
- "Animations make your site more engaging"
- "Performance matters for user experience"
- "Mobile devices have less power than desktop"
- "Users prefer smooth animations"

**These add no actionable value.**

### ❌ Remove: Beginner Content

**Skip the intro-level explanations:**
- How to use a for loop
- What a React component is
- Basic CSS concepts
- JavaScript fundamentals

**Claude already knows these.**

## Distillation Process

### Step 1: Load Research Output

Read the 20-30k token research output from agent.

### Step 2: Identify Content Categories

Scan through and mark:
- ✅ Patterns (keep)
- ✅ Gotchas (keep)
- ✅ Anti-patterns (keep)
- ✅ Advanced techniques (keep)
- ✅ Quality criteria (keep)
- ✅ Examples (keep if complete)
- ❌ Basics (remove)
- ❌ Redundancy (consolidate)
- ❌ Tutorial prose (remove)
- ❌ Comprehensive params (link instead)

### Step 3: Extract Keepers

For each item to keep:
- Copy pattern/gotcha/technique
- Remove surrounding prose
- Keep code examples concise
- Preserve WHY explanations
- Include specific details

### Step 4: Consolidate Redundancy

If same concept appears multiple times:
- Keep the BEST explanation
- Mention variations if important
- Remove duplicates

### Step 5: Structure for Consumption

Organize into logical sections:
```markdown
# Topic Area Name

## Core Concepts
[Brief, essential only]

## Patterns
[Pattern 1]
[Pattern 2]

## Gotchas
[Gotcha 1]
[Gotcha 2]

## Advanced Techniques
[Technique 1]
[Technique 2]

## Anti-Patterns
[Anti-pattern 1]
[Anti-pattern 2]

## Best Practices
[Practice 1]
[Practice 2]
```

### Step 6: Validate Output

Check distilled content:
- [ ] 5-8k tokens (70-85% reduction)
- [ ] No basics Claude already knows
- [ ] Patterns are actionable
- [ ] Gotchas prevent real issues
- [ ] Examples are complete
- [ ] No redundancy
- [ ] No tutorial prose
- [ ] Structured clearly

## Example Distillation

### Before (Research Output - 25k tokens)

```markdown
# GSAP ScrollTrigger Comprehensive Guide

## Introduction

ScrollTrigger is a plugin for GSAP that allows you to create scroll-driven animations. It's one of the most powerful features of GSAP and enables you to create impressive effects tied to the scroll position of the page.

### Installing ScrollTrigger

First, you'll need to install ScrollTrigger along with GSAP:

```bash
npm install gsap
```

Then import both GSAP and ScrollTrigger:

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Basic Usage

Now let's create our first ScrollTrigger animation. The basic syntax is:

```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    start: "top center",
    end: "bottom center"
  },
  y: 100
});
```

This will animate the element's Y position as it scrolls...

[23k more tokens of comprehensive tutorial content]
```

### After (Distilled - 6k tokens)

```markdown
# ScrollTrigger Patterns

## Pin Patterns

**Sticky sections that unpin after distance:**

```javascript
ScrollTrigger.create({
  trigger: ".section",
  pin: true,
  start: "top top",
  end: "+=500",
  onLeave: () => unpinActions()
});
```

**Gotcha:** Must call `.kill()` on unmount or memory leaks occur.

## Scrub Patterns

**Scroll-linked animation (no timeline):**

```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    scrub: 0.5, // 0.5s smooth catch-up
    start: "top bottom",
    end: "bottom top"
  },
  y: -200
});
```

**Best value:** `scrub: 0.5` - smooth but responsive.

## Performance Gotchas

❌ **Don't animate:** width, height, top, left (layout reflow!)
✅ **Do animate:** transforms, opacity (GPU-accelerated)

```javascript
// WRONG: Janky on scroll
gsap.to(el, { scrollTrigger: {...}, height: "100vh" });

// CORRECT: Smooth
gsap.to(el, { scrollTrigger: {...}, scaleY: 2 });
```

## Advanced: Custom Callbacks

**Sync external state with scroll progress:**

```javascript
ScrollTrigger.create({
  trigger: section,
  onUpdate: (self) => {
    const progress = self.progress; // 0 to 1
    updateParallaxLayers(progress);
    updateProgressBar(progress);
  }
});
```

**When to use:** Complex interactions beyond CSS properties.

[Continue with more essential patterns...]
```

**Result:** 19k tokens removed, kept only actionable expert content.

## Common Distillation Mistakes

### ❌ Mistake 1: Keeping Everything "Just in Case"

Don't hoard content. If it's not essential, cut it.

### ❌ Mistake 2: Removing Too Much Context

Keep enough context to understand WHY, not just WHAT.

### ❌ Mistake 3: Inconsistent Depth

All sections should be at expert level, not mix of basic + advanced.

### ❌ Mistake 4: Losing Examples

Examples are valuable - keep them if complete and illustrative.

## Validation

**After distillation, ask:**
1. Could this enable an expert-level implementation?
2. Are all basics removed?
3. Is redundancy eliminated?
4. Are patterns actionable?
5. Do gotchas prevent real failures?
6. Is it 5-8k tokens?

**If YES to all → Distillation successful.**

## Summary

**Distillation is about CURATION, not DOCUMENTATION.**

- Keep: Patterns, gotchas, anti-patterns, advanced techniques, examples
- Remove: Basics, redundancy, tutorial prose, comprehensive params, obvious info
- Target: 70-85% compression (20-30k → 5-8k)
- Result: Expert-level actionable content only

**Remember:** Claude is smart. Only provide what Claude needs to be an EXPERT, not what Claude needs to be a BEGINNER.
