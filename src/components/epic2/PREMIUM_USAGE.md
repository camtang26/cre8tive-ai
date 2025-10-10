# Epic 2 Premium Components - Usage Guide

**Version:** 1.0.0 | **Story:** 2.0 | **Last Updated:** 2025-10-09

This guide provides comprehensive examples and best practices for using Epic 2 premium components: organic shapes, magnetic interactions, and GSAP orchestration.

---

## Table of Contents

- [Quick Start](#quick-start)
- [OrganicCard Component](#organiccard-component)
- [useMagneticPull Hook](#usemagneticpull-hook)
- [useOrchestrator Hook](#useorchestrator-hook)
- [Signature Easing Curves](#signature-easing-curves)
- [Performance Budget](#performance-budget)
- [Mobile Optimization](#mobile-optimization)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

```tsx
import {
  OrganicCard,
  useMagneticPull,
  useOrchestrator,
  CRE8TIVE_EASINGS
} from '@/components/epic2'

// Use premium components in your feature
function PortfolioSection() {
  const magneticRef = useMagneticPull({ strength: 0.3 })

  return (
    <OrganicCard shape="blob" morphing glowColor="#06b6d4">
      <div ref={magneticRef}>
        <img src="project.jpg" alt="Portfolio item" />
      </div>
    </OrganicCard>
  )
}
```

---

## OrganicCard Component

**SVG-masked cards with optional morphing and glow effects**

### Basic Usage - All 4 Shape Variants

```tsx
import { OrganicCard } from '@/components/epic2'

function ShapeShowcase() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Blob Shape - Portfolio Cards */}
      <OrganicCard shape="blob">
        <img src="portfolio-1.jpg" alt="Project" className="w-full h-full object-cover" />
      </OrganicCard>

      {/* Hexagon Shape - Multi-Platform Cards */}
      <OrganicCard shape="hexagon">
        <div className="p-6 bg-gradient-to-br from-indigo-500 to-fuchsia-500">
          <h3 className="text-white text-xl font-bold">Platform</h3>
        </div>
      </OrganicCard>

      {/* Organic Shape - Benefit Cards */}
      <OrganicCard shape="organic">
        <div className="p-8">
          <h4>Benefit Title</h4>
          <p>Description text...</p>
        </div>
      </OrganicCard>

      {/* Floating Shape - Value Prop Cards */}
      <OrganicCard shape="floating">
        <div className="flex items-center justify-center h-full">
          <span className="text-2xl">✨</span>
        </div>
      </OrganicCard>
    </div>
  )
}
```

### With Morphing Animation (Breathing Effect)

```tsx
<OrganicCard
  shape="blob"
  morphing                    // Enable breathing animation
  morphIntensity={0.05}       // ±5% shape variance over 8s loop
  className="aspect-square"
>
  <img src="content.jpg" alt="Content" className="w-full h-full object-cover" />
</OrganicCard>
```

**Performance Note:** Limit to **3 simultaneous morphing shapes** per viewport to maintain 60fps.

### With Glow Effect

```tsx
<OrganicCard
  shape="hexagon"
  glowColor="#06b6d4"        // Cyan glow
  className="hover:scale-105 transition-transform"
>
  <div className="p-6">Content</div>
</OrganicCard>
```

**Performance Constraint:** Max **3 glow filters per viewport** (GPU cost: Medium).

### Advanced: Combined Effects

```tsx
<OrganicCard
  shape="organic"
  morphing
  morphIntensity={0.03}      // Subtle morphing (±3%)
  glowColor="#d946ef"        // Fuchsia glow
  className="w-80 h-80"
>
  <div className="relative w-full h-full">
    <img src="hero.jpg" alt="Hero" className="absolute inset-0 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className="text-2xl font-bold">Title</h3>
      <p>Description</p>
    </div>
  </div>
</OrganicCard>
```

---

## useMagneticPull Hook

**Cursor-following magnetic hover effect**

### Basic Magnetic Pull

```tsx
import { useMagneticPull } from '@/components/epic2'

function MagneticCard() {
  const cardRef = useMagneticPull({
    strength: 0.3,            // 30% of maxDistance
    maxDistance: 30,          // Max 30px movement
  })

  return (
    <div ref={cardRef} className="portfolio-card">
      <img src="project.jpg" alt="Project" />
    </div>
  )
}
```

### With Rotation

```tsx
const cardRef = useMagneticPull({
  strength: 0.4,
  maxDistance: 40,
  rotation: true,             // Enable rotation on pull
  rotationIntensity: 0.15,    // ±8.6 degrees max
  ease: 'power2.out'          // Smooth deceleration
})

return <div ref={cardRef}>Content</div>
```

### Magnetic CTA Button (High Intensity)

```tsx
function MagneticCTA() {
  const buttonRef = useMagneticPull({
    strength: 0.5,            // 50% pull intensity
    maxDistance: 50,          // Larger movement radius
    rotation: true,
    rotationIntensity: 0.2,
  })

  return (
    <button
      ref={buttonRef}
      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg"
    >
      Get Started
    </button>
  )
}
```

**Mobile Behavior:** Automatically disabled on viewports <768px (touch screens).

**Performance:**
- Throttled to 60fps (16ms interval) via `gsap.utils.throttle`
- Trigger radius: 150px from element center
- Max movement: ≤30px from center (default)

---

## useOrchestrator Hook

**GSAP master timeline builder with ScrollTrigger integration**

### 5-Phase Portfolio Entrance Pattern

```tsx
import { useRef, useEffect } from 'react'
import { useOrchestrator, CRE8TIVE_EASINGS } from '@/components/epic2'

function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { addPhase } = useOrchestrator({
    trigger: containerRef,
    start: 'top center',
    end: 'bottom center',
    scrub: 1,                // 1 second lag for smooth scroll
    pin: false,
    markers: false,          // Set true for debugging
  })

  useEffect(() => {
    // Phase 1: Section Title Reveal
    addPhase({
      name: 'title-reveal',
      targets: '.portfolio-title',
      animation: {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: CRE8TIVE_EASINGS.cinematic,
      },
      position: 0,           // Start immediately
    })

    // Phase 2: Subtitle Fade-In
    addPhase({
      name: 'subtitle-fade',
      targets: '.portfolio-subtitle',
      animation: {
        opacity: 1,
        duration: 0.8,
        ease: CRE8TIVE_EASINGS.smooth,
      },
      position: '+=0.3',     // 0.3s after previous
    })

    // Phase 3: Portfolio Cards Stagger
    addPhase({
      name: 'cards-entrance',
      targets: '.portfolio-card',
      animation: {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: CRE8TIVE_EASINGS.organic,
      },
      stagger: 0.2,          // 0.2s delay between cards
      position: '+=0.5',
    })

    // Phase 4: Background Elements
    addPhase({
      name: 'bg-parallax',
      targets: '.bg-layer',
      animation: {
        y: -100,
        opacity: 0.6,
        duration: 2,
        ease: CRE8TIVE_EASINGS.smooth,
      },
      position: 0,           // Runs parallel with phase 1
    })

    // Phase 5: CTA Button Spring
    addPhase({
      name: 'cta-entrance',
      targets: '.portfolio-cta',
      animation: {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: CRE8TIVE_EASINGS.spring,
      },
      position: '+=0.8',
    })
  }, [addPhase])

  return (
    <section ref={containerRef} className="portfolio-section">
      <h2 className="portfolio-title opacity-0 translate-y-8">
        Our Work
      </h2>
      <p className="portfolio-subtitle opacity-0">
        Transforming ideas into reality
      </p>

      <div className="grid grid-cols-3 gap-8 mt-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="portfolio-card opacity-0 translate-y-12 scale-95"
          >
            <img src={`project-${i}.jpg`} alt={`Project ${i}`} />
          </div>
        ))}
      </div>

      <button className="portfolio-cta opacity-0 scale-90 mt-12">
        View All Projects
      </button>

      <div className="bg-layer opacity-0" />
    </section>
  )
}
```

**Performance Constraint:** Max **12 elements per timeline** to maintain 60fps.

### Simple Parallax Scroll

```tsx
const { addPhase } = useOrchestrator({
  trigger: containerRef,
  start: 'top bottom',
  end: 'bottom top',
  scrub: true,             // Smooth scroll link
})

useEffect(() => {
  addPhase({
    name: 'parallax-bg',
    targets: '.parallax-layer',
    animation: { y: -200, ease: 'none' },
    position: 0,
  })
}, [addPhase])
```

---

## Signature Easing Curves

```tsx
import { CRE8TIVE_EASINGS } from '@/components/epic2/animations'

// Use in GSAP animations
gsap.to('.element', {
  x: 100,
  duration: 1,
  ease: CRE8TIVE_EASINGS.organic   // Smooth deceleration
})

// Use in magnetic pull
const ref = useMagneticPull({
  ease: CRE8TIVE_EASINGS.smooth    // Apple-like refinement
})

// Use in orchestrator phases
addPhase({
  name: 'entrance',
  targets: '.card',
  animation: {
    opacity: 1,
    ease: CRE8TIVE_EASINGS.spring  // Energetic bounce
  }
})
```

**Available Easings:**
- `organic` - Smooth deceleration for natural movements (power4.out)
- `smooth` - Apple-like refinement for premium interactions (power2.out)
- `spring` - Energetic bounce for playful moments (elastic.out)
- `cinematic` - Dramatic slowdown for hero moments (power4.inOut)

**GreenSock Club Upgrade:** See `src/components/epic2/animations/easings.ts` for CustomEase upgrade path ($99/year).

---

## Performance Budget

**Premium Pattern Performance Budget (60fps Target)**

| Pattern | CPU Cost | GPU Cost | Mitigation Strategy | Max per Viewport |
|---------|----------|----------|---------------------|------------------|
| **Organic SVG Shapes** | Low (static clip-path) | Medium (filter effects) | Limit glow filters to 3 per viewport | ∞ shapes, 3 glows |
| **Magnetic Pull** | Medium (mousemove listener) | Low (transform only) | Throttle to 60fps (16ms), disable on mobile | 5-10 elements |
| **GSAP Orchestration** | Low (timeline pre-calculated) | High (multiple animating elements) | Limit to 12 elements per timeline | 12 elements/timeline |
| **Parallax Layers** | Low (scroll listener) | Medium (3-5 layer transforms) | Use `will-change`, max 5 layers | 5 layers |
| **Shape Morphing** | Medium (path interpolation) | Medium (SVG repainting) | Use Framer Motion (optimized), limit to 3 simultaneous morphs | 3 morphing shapes |

**Optimization Strategies:**

1. **GPU Acceleration (Critical):**
   ```tsx
   <div className="will-change-transform" style={{ transform: 'translateZ(0)' }}>
     {/* Content */}
   </div>
   ```

2. **Fallback Strategy (Performance Guard):**
   - If frame rate drops <30fps for 5 consecutive frames:
     - Disable magnetic pull
     - Reduce parallax layers from 5 → 2
     - Switch organic shapes to static (no morphing)
     - Fallback to simple fade-ins

---

## Mobile Optimization

**Mobile-Specific Behaviors:**

| Pattern | Mobile Behavior | Reason |
|---------|----------------|--------|
| **Magnetic Pull** | Disabled on <768px viewport | No cursor on touch screens |
| **Morphing Shapes** | Static (no morphing) | Preserve battery, reduce GPU load |
| **Parallax Intensity** | Reduced by 50% | Prevent janky scroll on mobile |
| **ScrollTrigger Pinning** | Disabled if performance <30fps | Touch scroll conflicts |

**Implementation:**

```tsx
// Magnetic pull auto-disables on mobile
const cardRef = useMagneticPull({ strength: 0.3 })
// No additional code needed - hook detects viewport width

// Conditional morphing
const isMobile = window.innerWidth < 768

<OrganicCard
  shape="blob"
  morphing={!isMobile}      // Disable morphing on mobile
  glowColor="#06b6d4"
>
  <Content />
</OrganicCard>
```

---

## Troubleshooting

### Issue: Animations not running

**Symptoms:** Elements don't animate, no errors in console

**Solutions:**
1. Verify GSAP and ScrollTrigger are imported:
   ```tsx
   import gsap from 'gsap'
   import { ScrollTrigger } from 'gsap/ScrollTrigger'
   gsap.registerPlugin(ScrollTrigger)
   ```

2. Check element exists before animating:
   ```tsx
   useEffect(() => {
     const element = containerRef.current
     if (!element) return  // Guard clause
     // Animation code...
   }, [])
   ```

### Issue: Memory leaks / animations persist after unmount

**Symptoms:** ScrollTriggers keep firing after component unmounts

**Solution:** `useGSAP` hook handles cleanup automatically. If using custom `useEffect`, ensure cleanup:

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.element', { x: 100, scrollTrigger: {...} })
  }, containerRef)

  return () => ctx.revert()  // CRITICAL: Kill all animations
}, [])
```

### Issue: Magnetic pull feels janky

**Symptoms:** Cursor movement causes stuttering

**Solutions:**
1. Verify throttling is active (16ms default)
2. Check only transform properties are animated (not width/height/top/left)
3. Reduce number of magnetic elements per viewport (max 5-10)

### Issue: Shapes not clipping correctly

**Symptoms:** Content not masked by shape, appears as rectangle

**Solutions:**
1. Verify SVG `clipPath` ID is unique (uses `useId()` hook)
2. Check content container has `overflow: hidden`
3. Test in Safari (may need `-webkit-clip-path` fallback)

### Issue: Performance drops below 30fps

**Symptoms:** Animations feel janky, scroll is choppy

**Solutions:**
1. Reduce simultaneous morphing shapes (max 3)
2. Limit glow filters (max 3 per viewport)
3. Reduce parallax layers (5 → 2)
4. Disable magnetic pull on lower-end devices
5. Use Chrome DevTools Performance tab to profile

---

## Browser Support

**Tested Browsers:**
- Chrome 100+ ✅
- Firefox 100+ ✅
- Safari 15+ ✅
- Edge 100+ ✅

**Graceful Degradation:**
- Older browsers: Static shapes, no magnetic pull, simple fade-ins
- Mobile browsers: Reduced effects, no morphing/magnetic pull

---

## Next Steps

- **Story 2.1:** Use OrganicCard (blob shapes) + useOrchestrator in PortfolioSection
- **Story 2.2:** Use OrganicCard (hexagon) + useMagneticPull in MultiPlatformCards
- **Story 2.3:** Use OrganicCard (organic) in ImageToVideoComparison
- **Story 2.7:** Use OrganicCard + useMagneticPull in ValuePropsAgenciesBrands

**Need Help?** See [docs/tech-spec-epic-2.md](../../../docs/tech-spec-epic-2.md) for technical specifications.
