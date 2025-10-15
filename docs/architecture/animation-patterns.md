# Animation Patterns & Best Practices

**Last Updated:** 2025-10-06
**Project:** Cre8tive AI Marketing Website
**Purpose:** Animation architecture guide for GSAP + Lenis + Framer Motion integration

---

## Table of Contents

1. [Animation Stack Overview](#animation-stack-overview)
2. [When to Use Each Library](#when-to-use-each-library)
3. [GSAP ScrollTrigger Patterns](#gsap-scrolltrigger-patterns)
4. [Lenis Integration](#lenis-integration)
5. [Framer Motion Patterns](#framer-motion-patterns)
6. [React Integration & Cleanup](#react-integration--cleanup)
7. [Performance Optimization](#performance-optimization)
8. [Accessibility (Reduced Motion)](#accessibility-reduced-motion)
9. [Common Pitfalls](#common-pitfalls)

---

## Animation Stack Overview

**Technology Stack:**
- **GSAP 3.13.0** + ScrollTrigger plugin - Complex scroll-driven timelines, pinning, scrubbing
- **Lenis 1.3.11** - Smooth scroll with momentum (~7kb gzipped)
- **Framer Motion 12.4.2** - UI micro-interactions, page transitions, simple reveals

**Architecture Principle:** Each library has a distinct responsibility. Do NOT mix paradigms.

```
┌─────────────────────────────────────────────────────────────┐
│                    Animation Layer Stack                     │
├─────────────────────────────────────────────────────────────┤
│  Framer Motion      │ Simple UI interactions (hover, tap)   │
│  (Micro)            │ Component enter/exit animations       │
├─────────────────────────────────────────────────────────────┤
│  GSAP ScrollTrigger │ Scroll-driven timelines               │
│  (Macro)            │ Parallax, pinning, scrubbing          │
│                     │ Complex stagger sequences             │
├─────────────────────────────────────────────────────────────┤
│  Lenis              │ Smooth scroll foundation              │
│  (Foundation)       │ Scroll normalization across devices   │
└─────────────────────────────────────────────────────────────┘
```

---

## When to Use Each Library

### GSAP + ScrollTrigger

**Use for:**
- ✅ Scroll-linked animations (galleries, timelines, parallax)
- ✅ Complex multi-element choreography (stagger reveals, sequences)
- ✅ Pinning sections during scroll
- ✅ Scrubbing (direct scroll-to-progress mapping)
- ✅ Timeline-based animations with precise control

**Example Use Cases:**
- Visual Styles Gallery (8 cards stagger-revealing on scroll)
- Briefing Process Flow (4-step timeline with scroll scrubbing)
- Hero animation (parallax layers, text reveals)

### Lenis

**Use for:**
- ✅ Smooth scroll foundation (wraps entire app)
- ✅ Normalizing scroll behavior across devices
- ✅ Providing scroll events to GSAP ScrollTrigger

**Do NOT use for:**
- ❌ Individual component animations (use GSAP or Framer Motion)
- ❌ Hover/click interactions (use Framer Motion)

### Framer Motion

**Use for:**
- ✅ Simple component enter/exit animations
- ✅ Hover, tap, drag micro-interactions
- ✅ Layout animations (shared element transitions)
- ✅ Quick prototyping without scroll dependency

**Example Use Cases:**
- Button hover effects (magnetic buttons)
- Card hover states
- Modal/dialog enter/exit
- Toast notifications

---

## GSAP ScrollTrigger Patterns

### Pattern 1: Basic Scroll-Triggered Animation

**When:** Trigger animation when element enters viewport.

```typescript
// src/components/briefing/VisualStylesGallery.tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function VisualStylesGallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll into view
      gsap.from('.style-card', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',  // When top of trigger hits 80% of viewport
          toggleActions: 'play none none reverse',
          // markers: true,  // Enable for debugging
        }
      })
    }, containerRef)

    // Cleanup: CRITICAL for React
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      {/* 8 style cards */}
    </div>
  )
}
```

**Key Points:**
- `gsap.context()` collects all animations for easy cleanup
- `ctx.revert()` in return cleans up ScrollTriggers and animations
- `stagger: 0.15` creates cascading reveal effect
- `toggleActions: 'play none none reverse'` plays on enter, reverses on leave

---

### Pattern 2: Scrub Animation (Scroll = Playhead)

**When:** Animation progress directly tied to scroll position (parallax, process timelines).

```typescript
// src/components/briefing/BriefingProcessFlow.tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function BriefingProcessFlow() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top top',
          end: '+=200%',  // Scroll for 200% of viewport height
          scrub: 1,  // Smooth scrubbing (higher = more lag/smoothness)
          pin: true,  // Pin section while animating
          anticipatePin: 1,
        }
      })

      // Step 1: Define (0-25% scroll)
      tl.from('.step-1', { opacity: 0, x: -100, duration: 1 })
        .to('.step-1', { scale: 0.9, opacity: 0.3, duration: 1 })

      // Step 2: Style (25-50% scroll)
        .from('.step-2', { opacity: 0, x: -100, duration: 1 }, '-=0.5')
        .to('.step-2', { scale: 0.9, opacity: 0.3, duration: 1 })

      // Step 3: AI Processing (50-75% scroll)
        .from('.step-3', { opacity: 0, x: -100, duration: 1 }, '-=0.5')
        .to('.step-3', { scale: 0.9, opacity: 0.3, duration: 1 })

      // Step 4: Review (75-100% scroll)
        .from('.step-4', { opacity: 0, x: -100, duration: 1 }, '-=0.5')
        .to('.step-4', { scale: 1.1, duration: 1 })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={timelineRef} className="h-screen">
      {/* 4 process steps */}
    </div>
  )
}
```

**Key Points:**
- `scrub: 1` ties timeline playhead to scroll (higher = smoother/laggier)
- `pin: true` keeps section fixed while timeline plays
- `end: '+=200%'` defines scroll distance (200% viewport height)
- Timeline labels (`'-=0.5'`) overlap animations for smooth transitions

---

### Pattern 3: Parallax Effect

**When:** Background/foreground elements scroll at different speeds.

```typescript
// src/components/briefing/BriefingHero.tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function BriefingHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background moves slower (depth illusion)
      gsap.to('.hero-bg', {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,  // Boolean = immediate scrub
        }
      })

      // Foreground moves faster
      gsap.to('.hero-text', {
        y: '60%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="h-screen relative">
      <div className="hero-bg absolute inset-0" />
      <div className="hero-text relative z-10" />
    </div>
  )
}
```

**Key Points:**
- `scrub: true` (boolean) = instant scrubbing (no lag)
- Different `y` percentages create depth perception
- `ease: 'none'` for linear parallax movement
- Use `will-change: transform` in CSS for GPU acceleration

---

### Pattern 4: Stagger Animation (Gallery Cards)

**When:** Reveal multiple elements sequentially.

```typescript
// src/components/briefing/VisualStylesGallery.tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.style-card', {
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 0.8,
      y: 80,
      stagger: {
        amount: 1.2,  // Total stagger duration (1.2s for all 8 cards)
        from: 'start',  // Or 'center', 'end', 'edges'
        ease: 'power2.inOut',
      },
      duration: 0.6,
      ease: 'back.out(1.2)',  // Slight overshoot effect
    })
  }, containerRef)

  return () => ctx.revert()
}, [])
```

**Key Points:**
- `stagger.amount` = total time for all elements
- `stagger.from` controls stagger direction
- `ease: 'back.out(1.2)'` adds subtle bounce

---

## Lenis Integration

### Setup: Global Smooth Scroll

```typescript
// src/App.tsx or src/main.tsx
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1,           // Smoothing intensity (0.05-0.15 typical)
      duration: 1.2,       // Scroll duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Default easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,   // Smooth mouse wheel
      wheelMultiplier: 1,  // Wheel scroll speed
      touchMultiplier: 2,  // Touch scroll speed
      infinite: false,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)  // Convert GSAP time to milliseconds
    })

    gsap.ticker.lagSmoothing(0)  // Disable lag smoothing for Lenis

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return <RouterProvider router={router} />
}
```

**Key Points:**
- Lenis wraps entire app (global smooth scroll)
- `lenis.on('scroll', ScrollTrigger.update)` syncs with GSAP
- `gsap.ticker.add()` uses GSAP's RAF loop (better performance)
- `lenis.destroy()` cleanup prevents memory leaks

---

### Lenis + React Router (Scroll to Top)

```typescript
// src/hooks/useLenisScrollToTop.ts
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useLenisScrollToTop(lenis: Lenis | null) {
  const location = useLocation()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })  // Instant scroll to top
    }
  }, [location.pathname, lenis])
}
```

---

## Framer Motion Patterns

### Pattern 1: Simple Fade-In

```typescript
// src/components/shared/FadeIn.tsx
import { motion } from 'framer-motion'

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

---

### Pattern 2: Hover Interaction

```typescript
// src/components/ui/MagneticButton.tsx
import { motion } from 'framer-motion'

export function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}
```

**Do NOT mix:** Avoid using Framer Motion for scroll-linked animations. Use GSAP ScrollTrigger instead.

---

## React Integration & Cleanup

### Critical Pattern: useEffect Cleanup

**❌ WRONG (Memory Leak):**

```typescript
useEffect(() => {
  gsap.to('.element', { x: 100, scrollTrigger: {...} })
  // No cleanup = ScrollTrigger persists after unmount
}, [])
```

**✅ CORRECT (With Cleanup):**

```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.element', { x: 100, scrollTrigger: {...} })
  }, containerRef)

  return () => ctx.revert()  // Kills all animations and ScrollTriggers
}, [])
```

**Why:**
- `gsap.context()` collects all animations created inside
- `ctx.revert()` kills animations + ScrollTriggers + resets DOM
- Without cleanup, ScrollTriggers keep firing after component unmounts (memory leak)

---

### React Hook: useGSAP (Official GSAP Hook)

```typescript
// Alternative to manual gsap.context()
import { useGSAP } from '@gsap/react'

export function Component() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to('.element', { x: 100, scrollTrigger: {...} })
  }, { scope: containerRef })  // Auto-cleanup on unmount

  return <div ref={containerRef}>...</div>
}
```

**Installation:** `npm install @gsap/react`

---

## Performance Optimization

### 1. GPU Acceleration (Transform & Opacity Only)

**✅ GOOD (GPU-accelerated):**

```typescript
gsap.to('.element', {
  x: 100,        // transform: translateX (GPU)
  y: 50,         // transform: translateY (GPU)
  scale: 1.2,    // transform: scale (GPU)
  rotation: 45,  // transform: rotate (GPU)
  opacity: 0.5,  // opacity (GPU)
})
```

**❌ BAD (CPU-bound, forces layout reflow):**

```typescript
gsap.to('.element', {
  width: 200,    // Forces layout reflow
  height: 300,   // Forces layout reflow
  top: 100,      // Forces layout reflow
  left: 50,      // Forces layout reflow
})
```

**CSS Setup for GPU Acceleration:**

```css
.animated-element {
  will-change: transform, opacity;  /* Hint browser to use GPU */
  transform: translateZ(0);         /* Force GPU layer */
}
```

---

### 2. Performance Budget: 60fps Target

**RAIL Performance Model:**
- **Animation:** 16ms per frame (60fps)
- **Budget:** ~10ms for animation logic (6ms reserved for browser rendering)

**Tools:**
- `stats.js` (already in project) - Monitor FPS in dev
- Chrome DevTools Performance tab - Identify bottlenecks

**Optimization Checklist:**
- ✅ Use `transform` and `opacity` only
- ✅ Set `will-change: transform` on animated elements
- ✅ Limit concurrent ScrollTriggers (max 10-15 per page)
- ✅ Use `scrub` for smooth scroll-linked animations (offloads to native scroll)
- ✅ Debounce resize handlers (`ScrollTrigger.refresh()`)

---

### 3. Lenis Performance Optimization

```typescript
const lenis = new Lenis({
  lerp: 0.1,  // Lower = smoother but more lag (0.05-0.15 range)
  wheelMultiplier: 1,  // Reduce for slower, smoother scroll
  touchMultiplier: 2,  // Reduce for touch devices
  infinite: false,  // Avoid unless needed (performance cost)
})
```

**Memory Management:**
- Always call `lenis.destroy()` in cleanup
- Use `lenis.stop()` during modals/overlays
- Resume with `lenis.start()`

---

## ~~Accessibility (Reduced Motion)~~ DEPRECATED

> **⚠️ DEPRECATED (2025-10-08):** This section is NO LONGER APPLICABLE per Technical Decision **[AD-003](../technical-decisions.md#ad-003-remove-all-wcag-accessibility-implementations-2025-10-08)**.
>
> **DO NOT implement `prefers-reduced-motion` or accessibility features** in animation components.
>
> **Rationale:** Visual impact is core to brand identity. Cre8tive AI follows creative industry standards (Figma, After Effects, agency showcases) which prioritize visual experience over WCAG compliance.
>
> **Historical Context:** This section documents patterns used in Stories 1.2-1.6 (completed before AD-003). New development should NOT follow these patterns.

<details>
<summary>Historical Implementation (Reference Only - Do Not Use)</summary>

### prefers-reduced-motion Support (DEPRECATED)

**CSS Approach (Do Not Use):**

```css
/* DEPRECATED - DO NOT USE */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
    animation: none;
  }
}
```

**JavaScript Detection (Do Not Use):**

```typescript
// DEPRECATED - DO NOT USE
// src/hooks/usePrefersReducedMotion.ts
export function usePrefersReducedMotion() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}
```

**Why Deprecated:** See [AD-003](../technical-decisions.md#ad-003-remove-all-wcag-accessibility-implementations-2025-10-08) for full context, alternatives considered, and rollback plan.

</details>

---

## Common Pitfalls

### 1. ❌ Nesting ScrollTriggers Inside Timeline Tweens

**WRONG:**

```typescript
const tl = gsap.timeline()
tl.to('.el1', { x: 100, scrollTrigger: {...} })  // ❌ Can't have two playhead controllers
  .to('.el2', { y: 100, scrollTrigger: {...} })  // ❌ Timeline AND ScrollTrigger conflict
```

**CORRECT:**

```typescript
// Option A: ScrollTrigger on timeline (not tweens)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    scrub: true,
  }
})
tl.to('.el1', { x: 100 })
  .to('.el2', { y: 100 })

// Option B: Separate ScrollTriggers (no timeline)
gsap.to('.el1', { x: 100, scrollTrigger: {...} })
gsap.to('.el2', { y: 100, scrollTrigger: {...} })
```

---

### 2. ❌ Forgetting React Cleanup

**Symptoms:** Animations trigger after component unmount, console errors, memory leaks.

**Solution:** Always return cleanup function:

```typescript
useEffect(() => {
  const ctx = gsap.context(() => { /* animations */ }, containerRef)
  return () => ctx.revert()  // CRITICAL
}, [])
```

---

### 3. ❌ Animating Pinned Element Itself

**WRONG:**

```typescript
gsap.to('.pinned-section', {  // ❌ Animating the pinned element
  x: 100,
  scrollTrigger: {
    trigger: '.pinned-section',
    pin: true,
  }
})
```

**CORRECT:**

```typescript
gsap.to('.pinned-section .inner-content', {  // ✅ Animate children
  x: 100,
  scrollTrigger: {
    trigger: '.pinned-section',
    pin: true,
  }
})
```

**Why:** ScrollTrigger pins by setting `position: fixed` and calculating offsets. Animating the pinned element breaks those calculations.

---

### 4. ❌ Not Refreshing ScrollTrigger on Resize

**Problem:** ScrollTrigger calculates positions on init. Window resize breaks calculations.

**Solution:** Already handled by Lenis integration (`lenis.on('scroll', ScrollTrigger.update)`).

**Manual refresh (if needed):**

```typescript
useEffect(() => {
  const handleResize = () => ScrollTrigger.refresh()
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])
```

---

### 5. ❌ Mixing Lenis with Native Scroll Events

**WRONG:**

```typescript
window.addEventListener('scroll', () => {  // ❌ Native scroll event
  // Won't fire correctly with Lenis
})
```

**CORRECT:**

```typescript
lenis.on('scroll', (e) => {  // ✅ Lenis scroll event
  console.log(e.scroll, e.limit, e.velocity, e.direction)
})
```

---

## Quick Reference: Decision Tree

```
Need animation?
│
├─ Scroll-linked? ────────────────> GSAP ScrollTrigger
│  ├─ Simple reveal? ───────────> toggleActions: 'play none none reverse'
│  ├─ Scrubbing timeline? ─────> scrub: 1, pin: true
│  └─ Parallax? ───────────────> Multiple scrub animations, different y values
│
├─ Hover/Click interaction? ─────> Framer Motion
│  ├─ Simple scale/fade? ──────> whileHover, whileTap
│  └─ Complex sequence? ───────> variants + orchestration
│
└─ Global smooth scroll? ────────> Lenis (app-level setup)
   └─ Connect to GSAP ─────────> lenis.on('scroll', ScrollTrigger.update)
```

---

## Example: Complete Briefing Engine Component

```typescript
// src/components/briefing/VisualStylesGallery.tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function VisualStylesGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Skip animations if reduced motion
        gsap.set('.style-card', { opacity: 1, y: 0 })
        return
      }

      // Stagger reveal on scroll
      gsap.from('.style-card', {
        opacity: 0,
        y: 80,
        scale: 0.9,
        stagger: {
          amount: 1.2,
          from: 'start',
          ease: 'power2.inOut',
        },
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          // markers: true,  // Debug mode
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={containerRef} className="grid grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="style-card">
          {/* Style card content */}
        </div>
      ))}
    </div>
  )
}
```

---

## Resources

**Official Docs:**
- GSAP: https://gsap.com/docs/v3/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Lenis: https://github.com/darkroomengineering/lenis
- Framer Motion: https://www.framer.com/motion/

**CodePen Examples:**
- GSAP ScrollTrigger Demos: https://codepen.io/collection/AEbkkJ

**Performance:**
- RAIL Model: https://web.dev/articles/rail
- GPU Acceleration: https://web.dev/animations-guide/

---

**Last Updated:** 2025-10-06
**Maintained By:** Architect (Winston)
