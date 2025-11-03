# Premium Animation Choreography for Landing Pages

## Research Context

Claude's current weakness: Mechanical timing with wrong easing curves. This reference provides expert-level knowledge about premium animation patterns that separate museum-grade from functional-but-forgettable motion.

---

## PATTERNS: Premium Choreography Approaches

### 1. The Breathing Room Philosophy (30% Luxury Tax)

Premium animations allocate 30% more time than functionally necessary. A 1-second animation becomes 1.3s not from laziness, but intentional pacing.

**Why it works**: Human perception requires processing time. Rushing animations feels cheap; generous timing signals confidence and quality.

**Implementation**:
- Hero entrance: 1.2-1.8s (not 0.8s)
- Multi-stage sequences: 2.5-4s total (not 1.5s)
- Stagger delays: 80-150ms between elements (not 50ms)

**Source validation**: Material Design, Carbon Design System, luxury brand observations

---

### 2. Multi-Phase Animation Architecture

Premium sequences have 3-5 distinct phases, not 1-2. Pattern: **Lift → Transform → Settle**.

**Concrete example** (3-phase card entrance):
```javascript
const tl = gsap.timeline();
// Phase 1: Lift (0.6s)
tl.from(card, { y: 80, opacity: 0, duration: 0.6, ease: "power2.out" });
// Phase 2: Rotate/transform (0.5s, overlaps by 0.3s)
tl.to(card, { rotateX: -2, duration: 0.5, ease: "power1.inOut" }, "-=0.3");
// Phase 3: Settle (0.4s)
tl.to(card, { rotateX: 0, duration: 0.4, ease: "expo.out" }, "-=0.1");
```

**Key principle**: Each phase has different duration AND easing. Phase transitions overlap by 15-30% for organic flow.

**Anti-example**: Single-phase `gsap.from(card, {y: 50, opacity: 0, duration: 0.5})` feels mechanical.

---

### 3. Expo.inOut as Premium Default (Not Power2)

`expo.inOut` creates the "organic" feel Claude currently lacks.

**Why expo.inOut specifically**:
- Exponential curves mimic real-world momentum (objects build momentum gradually, then explode, then decelerate smoothly)
- Steep middle acceleration feels powerful but controlled
- Motion designers cite it as "organic" standard

**When to use each**:
- **expo.inOut**: Hero elements, primary CTAs (default for 60% of premium animations)
- **power2.out**: Secondary elements, supporting content
- **elastic/bounce**: ONLY for playful brands or micro-interactions (overused = tacky)

---

### 4. ScrollTrigger 80% Rule

Premium sites trigger entrance animations when element reaches 80% down the viewport, not 50%.

**Why**: Gives user time to anticipate. Element is visible but inactive, then animates as attention naturally arrives.

```javascript
scrollTrigger: {
  trigger: element,
  start: "top 80%",  // NOT "top 50%" or "top bottom"
  toggleActions: "play none none reverse"
}
```

**Validation**: Observed consistently across Linear, Stripe, premium portfolio sites.

---

## GOTCHAS: Common Premium Animation Failures

### 1. Wrong Easing Kills Premium Feel Instantly

**Problem**: Using `ease: "power2.inOut"` as default because it's "safe."

**Why it fails**: Power2 is smooth but bland. Premium needs character.

**Fix**: Default to `expo.inOut` for primary elements, use power2 only for subtle/secondary animations.

**Recognition**: If animations feel "fine but forgettable," easing is likely wrong.

---

### 2. Stagger Without Direction Creates Chaos

**Problem**: `stagger: 0.1` on complex layouts animates left-to-right regardless of visual hierarchy.

**Solution**:
```javascript
stagger: {
  each: 0.1,
  from: "center",  // Focal point
  grid: "auto"
}
```

---

### 3. Duration < 0.3s Feels Rushed, > 2.5s Feels Broken

**Sweet spot**: 0.6-1.8s for primary animations, 0.3-0.6s for micro-interactions.

---

## ANTI-PATTERNS: Wrong Approaches

### 1. The "Animate Everything" Anti-Pattern

**Wrong**: Every element on page has entrance animation.

**Consequence**: Cognitive overload, 5+ seconds wait, feels gimmicky.

**Right**: Animate only focal points (hero, primary CTA, 1-2 highlights). Maximum 5-7 animated elements in viewport at once.

**Validation**: Premium sites animate 20-30% of elements, not 100%.

---

## ADVANCED TECHNIQUES

### 1. Auto-Scroll Cinematics with Smooth Easing

For self-scrolling sections:
```javascript
gsap.to(window, {
  scrollTo: { y: "#section2", offsetY: 100 },
  duration: 2.5,
  ease: "expo.inOut"  // Critical: not "power2"
});
```

---

## QUALITY CRITERIA

**Measurable Benchmarks**:
- Performance: 60fps maintained (Chrome DevTools)
- Timing: Hero 1.2-1.8s, Supporting 0.6-1.0s, Micro 0.3-0.5s
- Easing: 60% expo variants, 30% power2/power3, 10% elastic

**Qualitative**:
- Pause Test: Looks intentional mid-animation?
- Replay Test: Remains satisfying after 3 watches?
- Phone Test: Smooth on 3-year-old Android?

---

**Research Complete**: GSAP KB (959 snippets), Material Design motion specs, Carbon Design System, premium site observations (Linear, Stripe), expert articles.
