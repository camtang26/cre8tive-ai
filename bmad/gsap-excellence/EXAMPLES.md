# GSAP Excellence Engine - Usage Examples

**Real-world examples showing workflows in action**

---

## Example 1: Hero Section Animation (Simple)

### Scenario
"I need a premium hero section animation for my tech startup landing page. I want something modern and eye-catching but don't know what specifically."

### Solution Path

**Step 1: Creative Ideation (15 min)**
```bash
# Load Director
/bmad:gsap-excellence:agents:gsap-director

# Run creative ideation
*plan
```

**Input:**
- Component: "Hero section for modern tech startup"
- Brand: "Bold, innovative, cutting-edge"
- Goals: "Wow factor, engagement, set premium tone"

**Output:** 3 concepts generated
- Concept 1: ScrollSmoother parallax layers (medium)
- Concept 2: SplitText title character reveal (medium-high)
- Concept 3: Hero image reveal with elastic bounce (simple)

**Step 2: Implementation (10 min)**
```bash
# User selects Concept 3 (simple)
# VFX Artist implements directly
*implement
```

**Result:** Production-ready animation in 25 minutes total

---

## Example 2: Production Validation (Quality Gates)

### Scenario
"I built a complex scroll animation. Is it production-ready?"

### Solution Path

**Step 1: 60fps Validation (10 min)**
```bash
/bmad:gsap-excellence:agents:gsap-tech-director
*validate
```

**Input:**
- URL: `http://localhost:3000/products`

**Test Results:**
- Test 1 (1x CPU): ✅ 60fps
- Test 2 (4x CPU): ❌ 42fps (FAIL - BLOCKING)
- Test 3 (6x CPU): 28fps

**Diagnosis:** Animating `width` property (layout-triggering)

**Fix Recommendation:**
```javascript
// ❌ WRONG
gsap.to(".box", { width: 500 });

// ✅ CORRECT
gsap.to(".box", { scaleX: 2.5 });
```

**Step 2: Apply Fix & Re-test (5 min)**
```bash
# After applying fix
*validate
```

**Test Results:**
- Test 1 (1x CPU): ✅ 60fps
- Test 2 (4x CPU): ✅ 60fps ← **PASS!**
- Test 3 (6x CPU): 45fps

**Step 3: Memory Leak Check (10 min)**
```bash
*profile-memory
```

**Input:**
- URL: `http://localhost:3000/products`
- Navigation route: `/about`
- Cycles: 5

**Test Results:**
- Baseline heap: 12.3 MB
- Post-stress heap: 14.1 MB
- Heap growth: 1.8 MB ✅ (<5MB threshold)
- Detached nodes: 3 ✅ (<10 threshold)

**Status:** HEALTHY ✅

**Step 4: Accessibility Audit (10 min)**
```bash
*audit-accessibility
```

**Test Results:**
- ✅ prefers-reduced-motion: Implemented
- ✅ Keyboard navigation: Works
- ✅ Focus states: Visible
- ✅ Screen reader: Compatible

**Final Status:** **PRODUCTION READY** ✅

**Total validation time:** 35 minutes (with one fix iteration)

---

## Example 3: Debugging Janky Animation

### Scenario
"My product showcase scroll animation is janky on mobile. Help!"

### Solution Path

**Step 1: Debug (15 min)**
```bash
/bmad:gsap-excellence:agents:gsap-editor
*debug
```

**Input:**
- Problem: "Animation stutters on mobile, smooth on desktop"
- When: "During scroll"

**Editor Diagnosis:**
- Checks 10 common pitfalls
- Finds: **Pitfall #2 - Animating Wrong Properties**

**Current Code:**
```javascript
ScrollTrigger.create({
  trigger: ".product",
  start: "top center",
  end: "bottom center",
  scrub: true,
  animation: gsap.to(".product", {
    top: 100,        // ❌ Layout property
    left: 50,        // ❌ Layout property
    width: 800,      // ❌ Layout property
    opacity: 1
  })
});
```

**Fix Recommendation:**
```javascript
ScrollTrigger.create({
  trigger: ".product",
  start: "top center",
  end: "bottom center",
  scrub: true,
  animation: gsap.to(".product", {
    y: 100,          // ✅ GPU transform
    x: 50,           // ✅ GPU transform
    scale: 1.6,      // ✅ GPU transform (instead of width)
    opacity: 1
  })
});
```

**Step 2: Verify with validate-60fps (10 min)**
```bash
*validate
```

**Result:**
- Test 2 (4x CPU): ✅ 60fps (was 35fps before)
- **FIXED!**

**Total time:** 25 minutes

---

## Example 4: Full Production Pipeline

### Scenario
"I need a complete, production-ready animation for our product launch hero section. I want the full treatment."

### Solution Path

**Use animation-production workflow (60 min)**

```bash
/bmad:gsap-excellence:agents:gsap-director
*produce
```

**Phase 1: Vision (10 min)**
- Director: "What's the vision?"
- User: "Product launch hero, bold reveal, premium feel"
- Director defines: 3-part sequence (logo reveal → tagline → CTA)

**Phase 2: Research (12 min)**
- Cinematographer queries:
  - Archon: 89 sources for "hero reveal sequences"
  - Perplexity: "Premium product launch animations Awwwards 2025"
  - Context7: Latest GSAP API for "timeline sequencing"
- Finds: Apple-style sequential reveals, Stripe card animations

**Phase 3: Implementation (20 min)**
- VFX Artist implements:
  - Logo: MorphSVG icon morph (FREE in 3.13!)
  - Tagline: SplitText character reveal (FREE!)
  - CTA: Elastic bounce entrance
  - React integration with useGSAP() hook

**Phase 4: Polish (8 min)**
- Editor checks: ALL 10 pitfalls ✅
- Refines timing: Logo 1.2s → 0.8s (snappier)
- Adjusts easing: Back.easeOut for CTA (more personality)

**Phase 5: Validation (15 min)**
- Tech Director tests:
  - 60fps @ 4x CPU: ✅ PASS
  - Memory profiling: ✅ HEALTHY
  - Accessibility: ✅ COMPLIANT
- Console errors: 0

**Final Deliverable:**
- Production-ready code
- Full documentation
- Performance validated
- Accessibility compliant
- **READY TO SHIP** ✅

**Total time:** 65 minutes (vision to production)

---

## Example 5: Pattern Library Workflow

### Scenario
"I found a great ScrollTrigger pin+scrub pattern in the library. How do I use it?"

### Solution Path

**Step 1: Browse Pattern Library**
```bash
# Find scroll patterns
fd "scroll" bmad/gsap-excellence/patterns/scroll-effects/

# Result: pin-scrub-product-showcase.pattern.yaml
```

**Step 2: Implement from Pattern (15 min)**
```bash
/bmad:gsap-excellence:agents:gsap-vfx
*adapt
```

**Input:**
- Pattern: `pin-scrub-product-showcase`
- Framework: "Next.js"
- HTML structure: [user provides]

**VFX Artist adapts:**
- Converts to Next.js 'use client'
- Adds proper cleanup with useGSAP()
- Customizes to user's design system
- Adds SSR-safe initialization

**Output:** Ready-to-integrate Next.js component

**Total time:** 15 minutes (vs 60+ minutes from scratch)

---

## Example 6: Memory Leak Fix

### Scenario
"My SPA gets slower after navigating between pages. Memory leak?"

### Solution Path

**Step 1: Memory Profiling (12 min)**
```bash
/bmad:gsap-excellence:agents:gsap-tech-director
*profile-memory
```

**Input:**
- URL: `http://localhost:3000/products`
- Route: `/about`
- Cycles: 5

**Test Results:**
- Baseline heap: 15.2 MB
- Post-stress heap: 27.8 MB
- Heap growth: **12.6 MB** ❌ (>5MB threshold)
- Detached nodes: **34** ❌ (>10 threshold)

**Status:** **LEAKING** ❌

**Diagnosis:** ScrollTriggers not killed on route change

**Step 2: Apply Cleanup Fix (10 min)**

**Workflow provides Next.js fix:**
```javascript
// Add to _app.js or layout
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  return <>{children}</>;
}
```

**Step 3: Re-test (12 min)**
```bash
*profile-memory
```

**Test Results:**
- Baseline heap: 15.2 MB
- Post-stress heap: 16.4 MB
- Heap growth: **1.2 MB** ✅ (<5MB)
- Detached nodes: **2** ✅ (<10)

**Status:** **HEALTHY** ✅

**Total time:** 34 minutes (diagnosis + fix + verification)

---

## Example 7: Accessibility Compliance

### Scenario
"Our animation is ready but we need WCAG 2.1 AA compliance. How do we test?"

### Solution Path

**Step 1: Accessibility Audit (12 min)**
```bash
/bmad:gsap-excellence:agents:gsap-tech-director
*audit-accessibility
```

**Input:**
- URL: `http://localhost:3000/hero`
- Level: "AA"

**Test Results:**
- ❌ prefers-reduced-motion: **NOT IMPLEMENTED**
- ✅ Keyboard navigation: Works
- ✅ Focus states: Visible
- ✅ Screen reader: Compatible

**Status:** **NON-COMPLIANT** (missing prefers-reduced-motion)

**Step 2: Implement prefers-reduced-motion (8 min)**

**Workflow provides code:**
```javascript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function HeroAnimation() {
  const ref = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: prefersReducedMotion ? 0 : -50,  // No movement if reduced
        duration: prefersReducedMotion ? 0 : 1.2  // Instant if reduced
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>...</div>;
}
```

**Step 3: Re-audit (10 min)**
```bash
*audit-accessibility
```

**Test Results:**
- ✅ prefers-reduced-motion: Implemented
- ✅ Keyboard navigation: Works
- ✅ Focus states: Visible
- ✅ Screen reader: Compatible

**Status:** **COMPLIANT** ✅

**Total time:** 30 minutes (audit + fix + re-audit)

---

## Quick Reference: When to Use Which Workflow

| Scenario | Workflow | Duration |
|----------|----------|----------|
| Don't know what I want | creative-ideation | 10-15 min |
| Need research on technique | research-gsap-pattern | 10-15 min |
| Found a pattern to use | implement-from-pattern | 10-20 min |
| Setting up GSAP project | setup-gsap-project | 5-10 min |
| Full end-to-end production | animation-production | 45-90 min |
| Animation has bugs | debug-animation | 15-30 min |
| Animation slow/janky | optimize-performance | 20-30 min |
| Timing feels off | refine-timing | 15-25 min |
| Testing 60fps | validate-60fps | 10-15 min |
| Testing memory leaks | memory-profiling | 10-15 min |
| Testing accessibility | accessibility-audit | 10-15 min |
| Want to save pattern | harvest-patterns | 5-10 min |
| Check GSAP 3.13+ compliance | validate-modern | 10-15 min |

---

_GSAP Excellence Engine - Real-World Usage Examples_
_All examples tested in production scenarios_
