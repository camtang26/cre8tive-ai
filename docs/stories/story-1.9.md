# Story 1.9: Build AudienceBenefits Interactive Mode Toggle (PREMIUM)

Status: Approved

## Story

As a visitor (agency or brand),
I want to interactively explore benefits specific to my user type through a premium mode toggle,
so that I can deeply engage with the platform's value proposition for my persona in a memorable, differentiated way.

## Acceptance Criteria

### AC1: Interactive Mode Toggle Control
1. ModeToggle component with pill-shaped design (Radix UI primitive + custom styling)
2. Two modes: "For Agencies" (cyan) | "For Brands" (fuchsia)
3. Sliding indicator animates with GSAP between modes (0.4s, power2.inOut)
4. Glassmorphic background: `backdrop-blur-md bg-slate-900/60 border border-slate-700/30`
5. Active mode glows in accent color (box-shadow with accent-400)
6. Keyboard accessible: Tab to focus, Enter/Space to toggle
7. Initial mode: 'agency' (default), persists to localStorage
8. URL param support: `?mode=brand` sets initial mode (optional deep linking)

### AC2: GSAP Flip State Transitions
1. Mode toggle triggers GSAP Flip plugin for smooth state transitions
2. Flip.getState() records current panel state before React re-render
3. Flip.from() animates to new state (0.6s duration, power2.inOut ease)
4. Prevents toggle spam: `isAnimating` flag blocks clicks during transition
5. Absolute positioning during Flip to prevent layout shift

### AC3: Orchestrated Exit/Enter Animations
1. **Exit Phase (0-300ms):**
   - Current mode's 3 benefit cards fade out (opacity: 1 → 0)
   - Subtle scale down (scale: 1 → 0.95)
   - Stagger: 0.05s per card (top to bottom)
   - Easing: power2.in
2. **Color Transition (300-600ms):**
   - Container gradient shifts from old accent to new accent
   - CSS custom properties animated: `--accent-from`, `--accent-to`
   - Background gradient: `linear-gradient(135deg, var(--accent-from), var(--accent-to))`
3. **Enter Phase (600-900ms):**
   - New mode's 3 cards fade in (opacity: 0 → 1)
   - Scale up (scale: 0.95 → 1) + translateY (-30px → 0)
   - Stagger: 0.08s per card (creates cascading reveal)
   - Easing: back.out(1.2) for subtle overshoot
   - clearProps: 'all' to reset inline styles

### AC4: BenefitCard Premium Design
1. Film strip border aesthetic (reference FilmStripDivider pattern)
2. Glassmorphic card: `backdrop-blur-lg bg-slate-800/40 border border-slate-700/50`
3. Icon: Lucide React, 48px, colored in accent (cyan-500 or fuchsia-500)
4. Typography:
   - Title: `text-2xl font-bold text-white`
   - Description: `text-base text-slate-300 leading-relaxed`
5. Hover effect (Framer Motion):
   - Lift: `translateY(-4px)`
   - Glow: `box-shadow: 0 8px 32px ${accentColor}40` (accent with 25% opacity)
   - Transition: spring physics (stiffness: 300, damping: 20)
6. GPU-optimized: `will-change: transform, opacity; transform: translateZ(0)`

### AC5: Agency Benefits Content (Cyan Accent #0891B2)
1. **Scale Multiple Clients**
   - Icon: Building (Lucide)
   - Description: "Manage 10+ brands with consistent quality and automated brief-to-storyboard workflows"
2. **Faster Client Onboarding**
   - Icon: Users (Lucide)
   - Description: "From client brief to approved storyboard in minutes, not days. Impress stakeholders instantly."
3. **Increased Team Productivity**
   - Icon: TrendingUp (Lucide)
   - Description: "Free your creatives for strategy and ideation. Let AI handle the storyboard production grind."

### AC6: Brand Benefits Content (Fuchsia Accent #C026D3)
1. **Speed to Campaign Launch**
   - Icon: Rocket (Lucide)
   - Description: "Launch campaigns weeks faster with AI-generated storyboards in 8 visual styles"
2. **Stay On Brand, Always**
   - Icon: Bookmark (Lucide)
   - Description: "AI trained on your brand guidelines ensures every frame aligns with your identity"
3. **Professional Results**
   - Icon: Award (Lucide)
   - Description: "Studio-quality storyboards without the studio budget or timeline. Agency-level work, in-house."

### AC7: Layout & Responsiveness
1. Section header: "Who Benefits" (H2, centered, mb-12)
2. ModeToggle: Centered below header, mb-16
3. BenefitsStage: Container for both panels (single-focus, only active visible)
4. Desktop (1024px+): 3-column grid for cards, max-width: 1200px
5. Mobile (<1024px): Single column, cards stack vertically
6. Container: Gradient background shifts based on active mode
7. Panel switching: No horizontal scroll, clean state replacement

### AC8: React Integration & Performance
1. Use `gsap.context()` for animation scoping, `ctx.revert()` in cleanup
2. Flip plugin registered: `gsap.registerPlugin(Flip)`
3. Both panels always in DOM (required for Flip), visibility toggled via state
4. State: `const [mode, setMode] = useState<'agency' | 'brand'>('agency')`
5. localStorage: Save/restore mode preference across sessions
6. Performance budget: 60fps during transitions (Chrome DevTools validation)
7. GPU acceleration: transform + opacity only, no layout-thrashing properties
8. Memory: No ScrollTrigger needed (user-initiated interaction, not scroll-driven)

## Tasks / Subtasks

### Phase 1: Foundation Components
- [ ] Create BenefitCard component with premium design (AC4)
  - [ ] Film strip border aesthetic (reference FilmStripDivider)
  - [ ] Glassmorphic styling with backdrop-blur
  - [ ] Icon + title + description layout
  - [ ] Framer Motion hover effects (lift + glow)
  - [ ] GPU optimizations (will-change, translateZ)
- [ ] Create ModeToggle component (AC1)
  - [ ] Radix UI Toggle primitive integration
  - [ ] Pill-shaped container with glassmorphism
  - [ ] Sliding indicator with GSAP animation
  - [ ] Keyboard accessibility (Tab, Enter, Space)
  - [ ] Glow effects for active state

### Phase 2: Layout & State Management
- [ ] Create AudienceBenefits parent component (AC7, AC8)
  - [ ] Section header "Who Benefits"
  - [ ] ModeToggle integration
  - [ ] BenefitsStage container
  - [ ] State management (useState for mode)
  - [ ] localStorage persistence
  - [ ] URL param support (?mode=brand)
- [ ] Create AgencyBenefitsPanel (AC5)
  - [ ] 3 benefit cards with cyan accent
  - [ ] Content: Scale Clients, Fast Onboarding, Productivity
  - [ ] 3-column grid (desktop), single column (mobile)
- [ ] Create BrandBenefitsPanel (AC6)
  - [ ] 3 benefit cards with fuchsia accent
  - [ ] Content: Campaign Speed, Brand Consistency, Quality
  - [ ] 3-column grid (desktop), single column (mobile)

### Phase 3: GSAP Flip & Orchestration
- [ ] Implement GSAP Flip state transitions (AC2)
  - [ ] Register Flip plugin
  - [ ] Flip.getState() before mode change
  - [ ] Flip.from() after React re-render
  - [ ] isAnimating flag to prevent spam
  - [ ] Absolute positioning during transition
- [ ] Implement orchestrated exit/enter animations (AC3)
  - [ ] Exit phase: Fade + scale down current cards (0-300ms)
  - [ ] Color transition: Gradient shift on container (300-600ms)
  - [ ] Enter phase: Fade + scale + translateY new cards (600-900ms)
  - [ ] Stagger timing (0.05s exit, 0.08s enter)
  - [ ] Timeline coordination with Flip
- [ ] React cleanup with gsap.context() (AC8)
  - [ ] Context scoping for all animations
  - [ ] ctx.revert() in useEffect cleanup
  - [ ] Verify no memory leaks on unmount

### Phase 4: Testing & Validation
- [ ] Performance validation (AC8)
  - [ ] Chrome DevTools Performance tab (60fps target)
  - [ ] Verify GPU acceleration (transform + opacity only)
  - [ ] Test rapid toggle clicks (debouncing)
  - [ ] Memory profiling (no leaks after unmount)
- [ ] Browser testing
  - [ ] Chrome/Edge (Chromium)
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile Safari (iOS)
  - [ ] Mobile Chrome (Android)
- [ ] Integration Verification
  - [ ] IV1: Film strip pattern consistency with FilmStripDivider
  - [ ] IV2: Glassmorphism matches existing components
  - [ ] IV3: Color system (cyan-600, fuchsia-600) consistency
  - [ ] IV4: Icon library (Lucide React) usage
  - [ ] IV5: GSAP cleanup pattern matches project standards

## Dev Notes

### Relevant Architecture Patterns and Constraints

**PRIMARY PATTERN: GSAP Flip Plugin for State Transitions**

This is Story 1.9's **differentiation point** - first use of GSAP Flip in the project, creating a premium interactive experience that competitors don't have.

Reference: GSAP Flip Plugin - https://gsap.com/docs/v3/Plugins/Flip/

**Why Flip over alternatives:**
- ✅ Industry standard (Linear, Stripe, Apple use this pattern)
- ✅ Automatically handles complex DOM state changes
- ✅ Better performance than manual 3D transforms
- ✅ Works with nested transforms and complex layouts
- ✅ Accessible by default (respects user motion preferences when implemented)

**Core Flip Pattern:**
```typescript
import { Flip } from 'gsap/Flip'
import gsap from 'gsap'

gsap.registerPlugin(Flip)

const handleModeToggle = (newMode: 'agency' | 'brand') => {
  if (newMode === mode || isAnimating) return

  setIsAnimating(true)

  // FLIP Step 1: Record current state
  const state = Flip.getState('.benefits-panel')

  // FLIP Step 2: Make changes (React state update)
  setMode(newMode)

  // FLIP Step 3: Animate to new state
  Flip.from(state, {
    duration: 0.6,
    ease: 'power2.inOut',
    absolute: true,  // Use absolute positioning during transition
    onComplete: () => setIsAnimating(false)
  })
}
```

**Orchestrated Timeline Pattern:**

Flip handles the state transition, GSAP timeline handles the choreography:

```typescript
useEffect(() => {
  if (!isAnimating) return

  const ctx = gsap.context(() => {
    const tl = gsap.timeline()

    // Phase 1: Exit (0-300ms)
    tl.to(`.${mode}-card`, {
      opacity: 0,
      scale: 0.95,
      stagger: 0.05,
      duration: 0.3,
      ease: 'power2.in'
    }, 0)

    // Phase 2: Color shift (300-600ms)
    tl.to('.benefits-stage', {
      '--accent-from': mode === 'agency' ? '#0891B2' : '#C026D3',
      '--accent-to': newMode === 'agency' ? '#0891B2' : '#C026D3',
      duration: 0.6,
      ease: 'power2.inOut'
    }, 0.3)

    // Phase 3: Enter (600-900ms)
    tl.from(`.${newMode}-card`, {
      opacity: 0,
      scale: 0.95,
      y: 30,
      stagger: 0.08,
      duration: 0.4,
      ease: 'back.out(1.2)',
      clearProps: 'all'  // Clean up inline styles
    }, 0.6)
  }, containerRef)

  return () => ctx.revert()
}, [isAnimating, mode])
```

**State Persistence Pattern:**

```typescript
// localStorage persistence
useEffect(() => {
  const saved = localStorage.getItem('audience-benefits-mode')
  if (saved === 'agency' || saved === 'brand') setMode(saved)
}, [])

useEffect(() => {
  localStorage.setItem('audience-benefits-mode', mode)
}, [mode])

// URL param deep linking (optional)
useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const modeParam = params.get('mode')
  if (modeParam === 'agency' || modeParam === 'brand') setMode(modeParam)
}, [])
```

**GPU Optimization:**
- Use `transform: translateY()` (GPU) NOT `margin-top` (CPU)
- Use `opacity` (GPU) for fades
- Set `will-change: transform, opacity` on animated elements
- Use `transform: translateZ(0)` to force GPU layer

**Performance Budget:**
- Target: 60fps during transitions (16ms per frame)
- Flip transition: 0.6s
- Total orchestration: 0.9s
- GPU-only properties (transform + opacity)
- Max 6 simultaneous animations (3 exit + 3 enter)

**Integration Verifications:**
- **IV1**: Film strip border pattern matches FilmStripDivider.tsx
- **IV2**: Glassmorphism styling consistent with existing components
- **IV3**: Color system (cyan-600, fuchsia-600) from design tokens
- **IV4**: Lucide React icons (Building, Users, TrendingUp, Rocket, Bookmark, Award)
- **IV5**: GSAP cleanup pattern (gsap.context + ctx.revert)

### Project Structure Notes

**Component Tree:**
```
src/components/briefing/
├── AudienceBenefits.tsx          (CREATE NEW) - Parent orchestrator
├── ModeToggle.tsx                (CREATE NEW) - Interactive toggle control
├── BenefitCard.tsx               (CREATE NEW) - Reusable card component
├── AgencyBenefitsPanel.tsx       (CREATE NEW) - 3 agency cards
└── BrandBenefitsPanel.tsx        (CREATE NEW) - 3 brand cards

src/components/studios/
└── FilmStripDivider.tsx          (EXISTS) - Reference for border pattern

src/components/ui/
├── toggle.tsx                    (EXISTS) - Radix UI primitive
└── toggle-group.tsx              (EXISTS) - Reference pattern
```

**Benefits Content Data Structure:**

```tsx
// Agency Benefits (Cyan #0891B2)
const agencyBenefits = [
  {
    title: "Scale Multiple Clients",
    description: "Manage 10+ brands with consistent quality and automated brief-to-storyboard workflows",
    icon: Building,
    accentColor: "cyan" as const
  },
  {
    title: "Faster Client Onboarding",
    description: "From client brief to approved storyboard in minutes, not days. Impress stakeholders instantly.",
    icon: Users,
    accentColor: "cyan" as const
  },
  {
    title: "Increased Team Productivity",
    description: "Free your creatives for strategy and ideation. Let AI handle the storyboard production grind.",
    icon: TrendingUp,
    accentColor: "cyan" as const
  }
]

// Brand Benefits (Fuchsia #C026D3)
const brandBenefits = [
  {
    title: "Speed to Campaign Launch",
    description: "Launch campaigns weeks faster with AI-generated storyboards in 8 visual styles",
    icon: Rocket,
    accentColor: "fuchsia" as const
  },
  {
    title: "Stay On Brand, Always",
    description: "AI trained on your brand guidelines ensures every frame aligns with your identity",
    icon: Bookmark,
    accentColor: "fuchsia" as const
  },
  {
    title: "Professional Results",
    description: "Studio-quality storyboards without the studio budget or timeline. Agency-level work, in-house.",
    icon: Award,
    accentColor: "fuchsia" as const
  }
]
```

**TypeScript Interfaces:**

```tsx
type AudienceMode = 'agency' | 'brand'

interface BenefitCardProps {
  title: string
  description: string
  icon: LucideIcon
  accentColor: 'cyan' | 'fuchsia'
  className?: string
}

interface ModeToggleProps {
  activeMode: AudienceMode
  onToggle: (mode: AudienceMode) => void
  className?: string
}

interface AudienceBenefitsProps {
  initialMode?: AudienceMode
  showHeader?: boolean
  className?: string
}
```

### References

**Documentation:**
- GSAP Flip Plugin: https://gsap.com/docs/v3/Plugins/Flip/
- GSAP Timeline: https://gsap.com/docs/v3/GSAP/Timeline/
- Project Animation Patterns: `docs/architecture/animation-patterns.md`
- Radix UI Toggle: https://www.radix-ui.com/docs/primitives/components/toggle
- Lucide React Icons: https://lucide.dev/

**Code References:**
- Film strip aesthetic: `src/components/studios/FilmStripDivider.tsx` (lines 15-45)
- Toggle primitive: `src/components/ui/toggle.tsx` (Radix UI implementation)
- Glassmorphism examples: Search codebase for `backdrop-blur-md`

**Research Sources:**
- Industry patterns: Linear, Stripe, Apple (interactive state transitions)
- Archon MCP knowledge base: GSAP Flip implementation examples
- Performance: RAIL model, GPU acceleration best practices

**Story Dependencies:**
- **Depends On:** Story 1.1 (GSAP + Lenis setup), Story 1.2 (Color system)
- **Blocks:** None (self-contained interactive section)
- **Introduces:** GSAP Flip pattern (reusable for future interactive components)

## Dev Agent Record

### Context Reference

- `/home/cameronai/projects/cre8tive-website-1006/docs/story-context-1.1.9.xml` - Generated 2025-10-09 by BMAD Story Context Workflow. Contains: acceptance criteria mapping, task breakdown (4 phases), documentation artifacts (tech spec, animation patterns, architecture, PRD), code artifacts (FilmStripDivider pattern, Radix Toggle primitive, existing AudienceBenefits/BenefitCard for refactoring), dependencies (GSAP, Radix UI, Lucide, Framer Motion), constraints (animation patterns, performance budget, color palette), interfaces (TypeScript types, localStorage/URL APIs), and test ideas (manual testing approach per project DoD).

### Agent Model Used

<!-- To be filled by dev agent -->

### Debug Log References

<!-- To be filled by dev agent -->

### Completion Notes List

<!-- To be filled by dev agent -->

### File List

<!-- To be filled by dev agent -->
