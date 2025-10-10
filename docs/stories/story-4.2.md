# Story 4.2: Mobile & Tablet Responsive Layouts for 3D Solution Theater

Status: ContextReadyDraft

## Story

As a **mobile or tablet user visiting the homepage**,
I want **to experience an optimized, touch-friendly version of the Solutions Theater with device-appropriate layouts, touch gestures, and performance-optimized animations**,
so that **I can explore Cre8tive AI's services with a premium mobile experience tailored to my device's capabilities and screen size**.

## Acceptance Criteria

### Mobile Layout (<768px) - 5 ACs

1. **AC-4.2.1: Vertical Stack Layout**
   - **GIVEN** user views site on mobile (viewport <768px)
   - **WHEN** solutions section renders
   - **THEN** cards display in vertical stack:
     - No 3D perspective (disable PerspectiveContainer)
     - Single column layout
     - Card width: 100% viewport width minus padding
     - Each card occupies full viewport height on initial view
   - **AND** AI Agents card remains filtered out

2. **AC-4.2.2: Touch Interactions**
   - **GIVEN** user interacts with cards on mobile
   - **WHEN** user touches a card
   - **THEN** touch interactions work:
     - Single tap: Expand preview to fullscreen (modal-like)
     - Double tap: Navigate to service page
     - Long press (500ms): Show CTA options (Cal.com link)
     - Swipe left/right: Navigate between cards (Framer Motion drag)
   - **AND** touch target minimum 44x44px (iOS guidelines)

3. **AC-4.2.3: Simplified Animations**
   - **GIVEN** mobile viewport active
   - **WHEN** solutions section enters viewport
   - **THEN** simplified animations apply:
     - Simple fade-up reveal (opacity 0→1, translateY 40→0)
     - No 3D tilt effects (disabled on mobile)
     - No mouse tracking (touch-only device)
     - Duration: 400ms (faster than desktop 800ms)
   - **AND** animations use GPU-accelerated properties only

4. **AC-4.2.4: Device Orientation Tilt (Optional Enhancement)**
   - **GIVEN** device has gyroscope (iPhone, modern Android)
   - **WHEN** user tilts device physically
   - **THEN** cards respond with subtle parallax:
     - Tilt range: ±5° (gentler than desktop ±15°)
     - Parallax offset: 0-10px (vs desktop 0-40px)
     - Spring-back on device level: 200ms
   - **AND** fallback: static cards if gyroscope unavailable

5. **AC-4.2.5: Mobile Performance Optimization**
   - **GIVEN** mobile device (potentially slower CPU/GPU)
   - **WHEN** solutions theater loads
   - **THEN** performance optimizations apply:
     - Particle count: 1K particles (vs desktop 5K)
     - Video previews: Disabled by default (load on tap)
     - Image assets: Mobile-optimized srcset (480w, 800w)
     - Lazy loading: Cards below fold load on scroll
   - **AND** frame rate maintains ≥45fps on mid-range devices

### Tablet Layout (768px-1023px) - 5 ACs

6. **AC-4.2.6: Two-Column Grid Layout**
   - **GIVEN** user views site on tablet (768px ≤ viewport < 1024px)
   - **WHEN** solutions section renders
   - **THEN** layout shows 2-column grid:
     - Grid: 2 columns, 1.5 rows (3 cards total)
     - Gap: 32px (vs mobile 16px, desktop 48px)
     - Perspective: 800px (reduced from desktop 1200px)
     - Cards: Side-by-side, equal width
   - **AND** vertical centering for visual balance

7. **AC-4.2.7: Reduced 3D Effects**
   - **GIVEN** tablet viewport active
   - **WHEN** user interacts with theater
   - **THEN** subtle 3D effects apply:
     - Perspective: 800px (vs desktop 1200px)
     - Tilt range: ±8° (vs desktop ±15°, mobile disabled)
     - Shadow blur: 20→40px on hover (vs desktop 40→60px)
     - Scale hover: 1.0→1.03 (vs desktop 1.0→1.05)
   - **AND** reduced depth for tablet form factor

8. **AC-4.2.8: Touch + Mouse Hybrid Interactions**
   - **GIVEN** tablet device (supports both touch and mouse)
   - **WHEN** user interacts with cards
   - **THEN** both input methods work:
     - Touch: Tap = hover state (sticky), double-tap = navigate
     - Mouse (iPad Magic Keyboard): Hover effects, click = navigate
     - Drag gesture: Swipe left/right to scroll cards (if overflow)
   - **AND** no interaction conflicts between touch/mouse

9. **AC-4.2.9: Tablet Scroll Reveal**
   - **GIVEN** tablet viewport active
   - **WHEN** solutions section enters viewport
   - **THEN** staggered reveal with reduced complexity:
     - Card 1: 0ms delay, opacity 0→1, scale 0.9→1, translateY 60→0 (600ms)
     - Card 2: 100ms delay, opacity 0→1, scale 0.9→1, translateY 60→0 (600ms)
     - Card 3: 200ms delay, opacity 0→1, scale 0.9→1, translateY 60→0 (600ms)
   - **AND** GSAP ScrollTrigger coordination (no animation conflicts)

10. **AC-4.2.10: Tablet Performance Balance**
    - **GIVEN** tablet device (mid-range performance)
    - **WHEN** solutions theater loads
    - **THEN** balanced performance optimizations:
      - Particle count: 2K (vs mobile 1K, desktop 5K)
      - Video previews: Lazy load, auto-play on viewport entry
      - Image assets: Tablet srcset (800w, 1200w)
      - 3D transforms: Reduced complexity (fewer shadow layers)
    - **AND** frame rate maintains ≥50fps

### Cross-Platform & Quality - 5 ACs

11. **AC-4.2.11: Responsive Breakpoint Transitions**
    - **GIVEN** user resizes browser window or rotates device
    - **WHEN** viewport crosses breakpoints (768px, 1024px)
    - **THEN** layout transitions smoothly:
      - Mobile ↔ Tablet: Grid reflow (1→2 columns)
      - Tablet ↔ Desktop: Perspective activation (800px→1200px)
      - No layout shift (CLS <0.1)
      - Transition duration: 300ms with ease-out
    - **AND** GSAP ScrollTrigger.refresh() called on resize

12. **AC-4.2.12: Touch Target Accessibility**
    - **GIVEN** touch-based device (mobile/tablet)
    - **WHEN** user attempts to interact
    - **THEN** touch targets meet minimum sizes:
      - Card tap area: ≥44x44px (iOS), ≥48x48px (Android)
      - CTA buttons: ≥48x48px with 8px spacing
      - Swipe hit zones: Full card width
    - **AND** visual feedback on touch (100ms response time)

13. **AC-4.2.13: Orientation Change Handling**
    - **GIVEN** user rotates mobile/tablet device
    - **WHEN** orientation changes (portrait ↔ landscape)
    - **THEN** layout adapts correctly:
      - Mobile portrait: Vertical stack (default)
      - Mobile landscape: Horizontal carousel with snap scroll
      - Tablet portrait: 2-column grid
      - Tablet landscape: 3-column grid (desktop-like)
    - **AND** GSAP animations re-initialize on orientation change

14. **AC-4.2.14: Reduced Motion Respect (Mobile)**
    - **GIVEN** mobile user has enabled reduce motion (iOS/Android settings)
    - **WHEN** solutions theater loads
    - **THEN** animations simplify:
      - Instant opacity change (no fade)
      - No translateY movement
      - No tilt/parallax effects
      - Static image previews (no video auto-play)
    - **AND** keyboard navigation remains functional

15. **AC-4.2.15: Mobile Network Optimization**
    - **GIVEN** mobile user on slow connection (3G, Save Data mode)
    - **WHEN** solutions theater loads
    - **THEN** network optimizations apply:
      - Detect `navigator.connection.saveData === true`
      - If Save Data: Skip video assets, use static thumbnails
      - If 3G: Reduce image quality (80%), defer non-critical assets
      - Lazy load assets: 200px margin (vs desktop 100px)
    - **AND** user sees "Lite Mode" indicator (optional)

## Tasks / Subtasks

- [ ] **Phase 1: Mobile Layout Foundation** (AC: #1, #2, #11) - 1.5-2 hours
  - [ ] Create responsive layout logic
    - [ ] Extend `SolutionTheater.tsx` with `useIsMobile` hook (viewport <768px)
    - [ ] Conditional rendering: Mobile stack vs Desktop 3D
    - [ ] Disable PerspectiveContainer on mobile
    - [ ] Implement vertical stack layout (Tailwind: `flex flex-col gap-4`)
  - [ ] Implement mobile touch interactions
    - [ ] Single tap: Expand preview (Framer Motion AnimatePresence)
    - [ ] Double tap: Navigate to service page (prevent default zoom)
    - [ ] Long press: Show CTA modal (500ms threshold)
    - [ ] Swipe gestures: Framer Motion `drag` with velocity detection
  - [ ] **Test:** Mobile layout renders correctly, touch gestures work, no 3D on mobile

- [ ] **Phase 2: Mobile Animations** (AC: #3, #5, #14) - 1-1.5 hours
  - [ ] Simplified mobile animations
    - [ ] Create `useMobileScrollReveal` hook (simplified GSAP timeline)
    - [ ] Fade-up animation: opacity 0→1, translateY 40→0 (400ms)
    - [ ] Disable mouse tracking (check `window.matchMedia('(pointer: coarse)')`)
    - [ ] GPU optimization: only `transform` and `opacity`
  - [ ] Performance optimizations
    - [ ] Reduce particle count to 1K (mobile detection in ParticleHero)
    - [ ] Disable video auto-play (load on tap)
    - [ ] Responsive images: `<img srcset="...480w, ...800w" sizes="100vw">`
  - [ ] Reduced motion support
    - [ ] Detect `prefers-reduced-motion: reduce`
    - [ ] Instant animations (duration: 0) if enabled
    - [ ] Static previews only
  - [ ] **Test:** Animations smooth (≥45fps on iPhone 12), reduced motion works, network optimized

- [ ] **Phase 3: Tablet Layout** (AC: #6, #7, #8, #10) - 1.5-2 hours
  - [ ] Two-column grid implementation
    - [ ] Create `useIsTablet` hook (768px ≤ viewport < 1024px)
    - [ ] Tailwind grid: `md:grid md:grid-cols-2 md:gap-8`
    - [ ] Reduced perspective: 800px (CSS: `perspective: 800px` on md breakpoint)
    - [ ] Card sizing: equal width, auto height
  - [ ] Reduced 3D effects
    - [ ] Modify `useMouseTracking`: maxTilt 8° on tablet (vs 15° desktop)
    - [ ] Shadow values: 20→40px blur (vs 40→60px desktop)
    - [ ] Scale hover: 1.0→1.03 (vs 1.0→1.05 desktop)
    - [ ] Update `SolutionCard3D` with tablet-specific styles
  - [ ] Hybrid touch/mouse interactions
    - [ ] Tap: Sticky hover state (300ms debounce)
    - [ ] Double-tap: Navigate (detect via touch event timing)
    - [ ] Mouse hover: Standard desktop behavior (iPad Magic Keyboard)
  - [ ] **Test:** Tablet layout correct, 3D subtle, touch+mouse both work, ≥50fps

- [ ] **Phase 4: Device Orientation & Gyroscope** (AC: #4, #13) - 1-1.5 hours
  - [ ] Device orientation tilt (optional, mobile only)
    - [ ] Create `useDeviceOrientation` hook (DeviceOrientationEvent API)
    - [ ] Calculate tilt from beta/gamma angles (±5° range)
    - [ ] Apply parallax offset (0-10px) to card transforms
    - [ ] Spring-back animation when device levels (200ms)
    - [ ] Fallback: Check `window.DeviceOrientationEvent`, disable if unavailable
  - [ ] Orientation change handling
    - [ ] Listen to `window.matchMedia('(orientation: portrait)')` changes
    - [ ] Mobile portrait: Vertical stack (default)
    - [ ] Mobile landscape: Horizontal carousel (Framer Motion drag, snap scroll)
    - [ ] Tablet portrait: 2-column grid
    - [ ] Tablet landscape: 3-column grid (desktop-like)
    - [ ] Call `ScrollTrigger.refresh()` on orientation change
  - [ ] **Test:** Gyroscope tilt works (iPhone), orientation changes smooth, no layout breaks

- [ ] **Phase 5: Cross-Platform Polish** (AC: #11, #12, #15) - 1 hour
  - [ ] Breakpoint transitions
    - [ ] Smooth CSS transitions on grid/layout changes (300ms ease-out)
    - [ ] Prevent cumulative layout shift (CLS <0.1)
    - [ ] Debounced resize handler: `ScrollTrigger.refresh()` after 150ms
  - [ ] Touch target optimization
    - [ ] Verify card tap areas ≥44x44px (iOS), ≥48x48px (Android)
    - [ ] CTA buttons: min 48x48px, 8px spacing
    - [ ] Visual touch feedback (scale 0.98 on touchstart, 100ms)
  - [ ] Network optimization
    - [ ] Detect `navigator.connection.saveData`
    - [ ] If true: Skip videos, use static thumbnails, reduce image quality
    - [ ] If `effectiveType === '3G'`: Defer non-critical assets
    - [ ] Lazy load margin: 200px (vs desktop 100px)
  - [ ] **Test:** Breakpoint transitions smooth, touch targets accessible, network-aware

- [ ] **Phase 6: Integration & QA** (AC: All) - 1-2 hours
  - [ ] Integration with existing theater
    - [ ] Update `SolutionTheater.tsx` with responsive logic
    - [ ] Ensure desktop behavior unchanged (regression check)
    - [ ] Coordinate with existing GSAP ScrollTrigger (no conflicts)
    - [ ] Update `solutionAssets.ts` with mobile srcsets
  - [ ] Device testing matrix (Manual)
    - [ ] iPhone 12/13/14 (Safari iOS 16+, vertical stack, gestures)
    - [ ] Samsung Galaxy S21/S22 (Chrome Mobile, Android gestures)
    - [ ] Budget Android (Moto G Power, 4GB RAM, performance baseline ≥45fps)
    - [ ] iPad Pro (Safari iPadOS, 2-column grid, touch+mouse hybrid)
    - [ ] iPad Mini (Safari iPadOS, 2-column grid, reduced 3D)
  - [ ] Responsive testing
    - [ ] 375px (iPhone SE): Vertical stack, single tap, swipe gestures
    - [ ] 768px (iPad portrait): 2-column grid, reduced 3D, tap+mouse
    - [ ] 1024px (iPad landscape): Desktop 3D theater (existing story 4.1)
  - [ ] Build & validation
    - [ ] `tsc --noEmit` - TypeScript clean
    - [ ] `npm run lint` - ESLint 0 errors (warnings OK)
    - [ ] `npm run build` - Production build succeeds
    - [ ] Bundle size check: Theater code ≤100kb (mobile code adds ~20kb)
  - [ ] **Test:** All devices work, responsive behavior correct, build clean

## Dev Notes

### Architecture Patterns and Constraints

**Responsive Strategy:**
- **Mobile-first approach:** Base styles for mobile, `md:` for tablet (≥768px), `lg:` for desktop (≥1024px)
- **Progressive enhancement:** Desktop 3D → Tablet reduced 3D → Mobile 2D stack
- **Device detection:** `useIsMobile`, `useIsTablet` hooks with `window.matchMedia`
- **Touch detection:** `window.matchMedia('(pointer: coarse)')` for touch-only devices

**Animation Adjustments by Device:**
| Device | Perspective | Tilt Range | Duration | Particle Count |
|--------|-------------|------------|----------|----------------|
| Desktop (≥1024px) | 1200px | ±15° | 800ms | 5K |
| Tablet (768-1023px) | 800px | ±8° | 600ms | 2K |
| Mobile (<768px) | disabled | disabled | 400ms | 1K |

**Touch Interaction Patterns:**
- **Single tap:** Expand preview (modal-like fullscreen)
- **Double tap:** Navigate to service page (prevent default browser zoom)
- **Long press (500ms):** Show CTA options (Cal.com link in bottom sheet)
- **Swipe gestures:** Framer Motion `drag` with `dragConstraints`, velocity-based card navigation

**Performance Budget (Mobile):**
- Frame rate: ≥45fps on mid-range devices (iPhone 12, Galaxy S21)
- JavaScript execution: <100ms (excluding render)
- Image assets: Mobile srcset (480w, 800w), WebP with JPEG fallback
- Video handling: Disabled by default, load on explicit tap

**Technology Stack:**
- **Framer Motion:** Touch gestures (drag, tap, double-tap), modal animations
- **GSAP ScrollTrigger:** Simplified mobile reveal (no complex timelines)
- **CSS Grid:** Responsive layouts (1 col mobile → 2 col tablet → 3D desktop)
- **Intersection Observer:** Lazy loading with 200px margin (mobile), 100px (desktop)

### Project Structure Notes

**New Files:**
- `src/hooks/useIsMobile.ts` - Mobile detection (viewport <768px, touch-only)
- `src/hooks/useIsTablet.ts` - Tablet detection (768px ≤ viewport < 1024px)
- `src/hooks/useDeviceOrientation.ts` - Gyroscope tilt for mobile (optional)
- `src/hooks/useMobileScrollReveal.ts` - Simplified GSAP animations for mobile
- `src/components/Services/mobile/MobileSolutionCard.tsx` - Mobile-specific card (vertical stack)
- `src/components/Services/tablet/TabletSolutionTheater.tsx` - Tablet 2-column layout

**Files Modified:**
- `src/components/Services/desktop/SolutionTheater.tsx` - Add responsive logic, conditional rendering
- `src/config/solutionAssets.ts` - Add mobile/tablet srcsets, fallback images
- `src/components/Services/3d/SolutionCard3D.tsx` - Tablet-specific styles (reduced 3D)

**Responsive Hooks Pattern:**
```typescript
// src/hooks/useIsMobile.ts
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    setIsMobile(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isMobile
}
```

**Touch Gesture Pattern (Framer Motion):**
```typescript
// Double-tap detection
const [tapCount, setTapCount] = useState(0)
const tapTimeout = useRef<NodeJS.Timeout>()

const handleTap = () => {
  setTapCount(prev => prev + 1)

  if (tapCount === 1) {
    // Double tap detected
    navigate(service.link)
    setTapCount(0)
  } else {
    // Single tap, wait for potential double tap
    tapTimeout.current = setTimeout(() => {
      if (tapCount === 1) expandPreview()
      setTapCount(0)
    }, 300)
  }
}
```

**Network Detection:**
```typescript
// src/utils/networkOptimization.ts
export function shouldLoadHeavyAssets() {
  const connection = (navigator as any).connection

  if (!connection) return true // Default: load assets

  // Save Data mode enabled
  if (connection.saveData) return false

  // Slow connection (3G or below)
  const slowTypes = ['slow-2g', '2g', '3g']
  if (slowTypes.includes(connection.effectiveType)) return false

  return true
}
```

### Testing Standards Summary

**Manual Device Testing (Critical):**
- ✅ iPhone 12/13/14 (Safari iOS): Vertical stack, swipe gestures, gyroscope tilt
- ✅ Samsung Galaxy S21/S22 (Chrome Mobile): Android gestures, performance ≥45fps
- ✅ Budget Android (Moto G Power): Performance baseline, network optimization
- ✅ iPad Pro (Safari iPadOS): 2-column grid, touch+mouse hybrid, ≥50fps
- ✅ iPad Mini (Safari iPadOS): Reduced 3D, touch interactions

**Responsive Testing (Required Viewports):**
- ✅ 375px (iPhone SE): Smallest mobile, vertical stack, single-finger gestures
- ✅ 768px (iPad portrait): Tablet breakpoint, 2-column grid, reduced perspective
- ✅ 1024px (iPad landscape): Desktop breakpoint, full 3D theater (story 4.1)
- ✅ 1920px (widescreen): Desktop reference (unchanged from story 4.1)

**Performance Validation:**
- Chrome DevTools (mobile emulation): FPS monitoring, network throttle (3G)
- Lighthouse mobile audit: Performance score ≥75, mobile-specific metrics
- Real device testing: Frame rate measurement (≥45fps mobile, ≥50fps tablet)

**Accessibility (Touch-Based):**
- Touch target sizes: ≥44x44px (iOS), ≥48x48px (Android)
- Visual feedback: Touch response <100ms
- Reduced motion: Respect OS settings (iOS/Android)
- Keyboard navigation: Tab/Enter/Space (Bluetooth keyboard on tablet)

**No Automated Tests:**
- Project has zero test infrastructure (Vitest/Jest/RTL/Playwright)
- Manual validation only (per ARCHITECTURE.md technical debt)

### References

**Primary Source:**
- [Source: docs/tech-spec-epic-4.md (Epic Homepage Theater)] - Complete technical specification
  - Sections: AC8 (Mobile Adaptive), AC9 (Tablet Adaptive), AC10 (Basic Usability), AC12-13 (Performance)
  - Mobile flows: Swipe gestures, tap-to-expand, device orientation tilt
  - Tablet flows: 2-column grid, reduced perspective, touch+mouse hybrid

**Architecture References:**
- [Source: docs/architecture/frontend-architecture.md] - Responsive design patterns
  - Tailwind breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
  - Mobile-first approach: base = mobile, `md:` = tablet+, `lg:` = desktop+
- [Source: docs/architecture/animation-patterns.md] - GSAP mobile optimization
  - Simplified animations for mobile (no complex timelines)
  - Performance budget: 45fps mobile, 50fps tablet, 60fps desktop
- [Source: docs/ARCHITECTURE.md] - Tech stack, performance constraints
  - Framer Motion: Touch gestures (drag, tap), spring animations
  - GSAP ScrollTrigger: Coordinate with mobile reveal sequences

**Related Story:**
- [Source: docs/stories/story-4.1.md] - Desktop 3D theater implementation
  - Phase 5 deferred to this story (mobile/tablet responsive)
  - Lessons learned: Animation conflicts (Framer Motion vs GSAP), performance optimization patterns
  - Components to extend: SolutionTheater, SolutionCard3D, useScrollTheater

**Touch Interaction References:**
- iOS Human Interface Guidelines: Touch targets ≥44x44pt
- Android Material Design: Touch targets ≥48x48dp, 8dp spacing
- Framer Motion gestures: `drag`, `onTap`, `onTapStart`, velocity detection

**Performance Constraints:**
- [Source: docs/tech-spec-epic-4.md#Performance] - Mobile performance budgets
  - Particle count: 1K (mobile), 2K (tablet), 5K (desktop)
  - Frame rate: ≥45fps (mobile), ≥50fps (tablet), ≥60fps (desktop)
  - Network optimization: `navigator.connection.saveData`, `effectiveType` detection

## Dev Agent Record

### Context Reference

- [Story Context XML: docs/story-context-4.2.xml](/home/cameronai/projects/cre8tive-website-1006/docs/story-context-4.2.xml) - Generated 2025-10-09 - Mobile & Tablet Responsive Layouts for 3D Solution Theater

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

<!-- Debug logs will be added during implementation -->

### Completion Notes List

<!-- Implementation notes will be added during development -->

### File List

<!-- Files created/modified will be listed here after implementation -->
