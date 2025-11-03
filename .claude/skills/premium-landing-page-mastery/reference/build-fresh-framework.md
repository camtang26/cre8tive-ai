# Build Fresh vs Adapt: Decision Framework

## Research Context

Addresses critical anti-pattern where Claude reuses basic primitives when creating premium landing page components, even when explicitly told they're "average". Establishes clear decision criteria for when to build custom vs adapt existing.

---

## PATTERNS: Build Fresh Decision Framework

### 1. The 80/20 Component Boundary

**Framework**:
- **80%**: Design system primitives cover most application UI needs
- **20%**: Custom components for specific contexts (landing pages, marketing)

**Decision Matrix**:
- **Application UI**: Use design system components (consistency, maintainability)
- **Marketing pages**: Expect 20%+ custom components (brand expression)
- **Landing page hero sections**: Almost always custom (unique value proposition)

**Why it works**: Design systems optimize for 80% of cases, intentionally leaving 20% for context-specific customization.

**Sources**: Telerik Design Systems guide, Josh Cusick "Design systems should do less", Atlassian Primitives docs.

---

### 2. Marketing vs Application Context Signals

**User Language Signals Requiring Fresh Build**:
- Quality: "premium", "museum-grade", "luxury", "high-end"
- Transform: "transform", "elevate", "reimagine"
- Criticism: "average", "basic", "generic", "not good enough"
- Showcase: "hero", "landing", "homepage", "above-fold"

**Key Distinction**:
- **Product systems**: Utilitarian, clarity-focused → Marketing patterns feel "too subtle"
- **Marketing needs**: Expressive brand representations → Product systems feel "too rigid"

**Adobe's Two-Tier Pattern**:
- Spectrum: Product (utilitarian, functional, consistent)
- Consonant: Marketing (expressive, brand-forward, flexible)

**Sources**: Adobe Design "Scaling product design system for marketing", Webflow marketing design systems.

---

### 3. The Premature Abstraction Trap

**Rule**: Build as needed, abstract when pattern emerges.

**Decision Framework**:
- **First occurrence**: Keep specific, no abstraction
- **Second occurrence**: Still might be faster to duplicate (if complex)
- **Third occurrence**: Abstract if actual shared logic identified

**Landing Page Reusability**:
- Hero: Always one-off (unique brand moment)
- Feature: Usually one-off (custom layouts)
- Pricing: Can be abstracted (table structure)
- Testimonial: Can be abstracted (card layout)

**Why it works**: Avoids over-engineering. Build specific first, abstract when patterns emerge.

**Sources**: Atomic Object "When to Make Reusable React Components", Aki Rautio abstraction patterns.

---

### 4. Compound Components for One-Off Premium

**Use case**: One-off showcase components with multiple sub-components.

**Pattern**: Context API for implicit state sharing (no prop drilling).

```typescript
import { createContext, useContext } from 'react';

const HeroContext = createContext(null);

function Hero({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <HeroContext.Provider value={{ isHovered, setIsHovered }}>
      <section>{children}</section>
    </HeroContext.Provider>
  );
}

Hero.Title = function({ children }) {
  const { isHovered } = useContext(HeroContext);
  return <h1 className={isHovered ? 'hovered' : ''}>{children}</h1>;
};

// Usage: Flexible composition
<Hero>
  <Hero.Title>Transform Your Business</Hero.Title>
</Hero>
```

**When to use**: Complex one-off showcases with coordinated state.

**Sources**: patterns.dev Compound Pattern, Smashing Magazine, Kent C. Dodds.

---

## GOTCHAS

### 1. Reusing Basic Primitives in Premium Contexts

**Problem**: Using design system Button in landing page hero.

**Solution**: Build custom premium button for brand moments.

**Severity**: Critical - generic feel destroys brand differentiation.

---

### 2. Timeline Recreation on Every Render

**Problem**: Creating GSAP timeline in component body.

**Solution**: Store timeline in ref, create in useGSAP.

```typescript
const tlRef = useRef<gsap.core.Timeline | null>(null);

useGSAP(() => {
  tlRef.current = gsap.timeline({ paused: true })...
}, { scope: ref });
```

---

### 3. Animating Layout Properties

**❌ WRONG**: Animating width, height, top, left (triggers layout).

**✅ CORRECT**: Animate transform, opacity only (GPU-accelerated).

---

### 4. Pure vw Units Break Zoom

**Problem**: `font-size: 5vw` doesn't scale with browser zoom.

**Solution**: `font-size: clamp(2rem, 1rem + 4vw, 4.5rem)` (rem + vw).

**Severity**: Critical - WCAG accessibility failure.

---

## ANTI-PATTERNS

### 1. Premature Design System Extension

**❌ WRONG**: Adding every landing page component to design system with variant props.

**✅ CORRECT**: Keep landing components local, build on primitives.

**Why**: Design systems become prop-soup, marketing team blocked, slow iteration.

---

### 2. Scope Creep Transformation

**❌ WRONG**: "Fix CTA placement" → redesigns entire page → 6 weeks later.

**✅ CORRECT**: Fix requested item, note other issues, offer scoped options.

---

## QUALITY CRITERIA

**Premium Landing Page Components**:

**Visual/Aesthetic**:
- Fluid motion (60fps maintained)
- Attention to detail (micro-interactions on hover)
- Distinctive identity (unique, not template-like)
- Breathing room (generous padding 32px+)

**Technical**:
- Performance (Lighthouse 90+, LCP <2.5s, CLS <0.1)
- Accessibility (WCAG AA minimum, prefers-reduced-motion)
- Responsive (fluid typography, meaningful layout adaptation)
- Code quality (no prop soup, clean dependencies)

**The Ultimate Test**: Show to senior designer - "This is really polished" (premium) vs "This looks good, but..." (average).

---

**Research Sources**: Adobe Design, patterns.dev, GSAP React patterns, web.dev, WCAG specs, Smashing Magazine.
