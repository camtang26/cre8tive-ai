# Story 1.11: Accessibility & Performance Optimization

**Status:** Draft
**Epic:** Epic 1 - AI Briefing Engine Page Redesign & Premium Animation Implementation
**Story ID:** 1.11
**Assignee:** Dev
**Created:** 2025-10-06

---

## User Story

**As a** user with accessibility needs or slow connection,
**I want** the page to be accessible and performant,
**so that** I can experience the content regardless of device or ability.

---

## Acceptance Criteria

1. ✅ **Accessibility (WCAG AA):**
   - prefers-reduced-motion: All GSAP animations disabled, instant transitions only
   - Keyboard navigation: All interactive elements (CTAs, style cards) accessible via Tab key
   - ARIA labels: Visual styles gallery, process steps, benefit cards properly labeled
   - Color contrast: Indigo/cyan/fuchsia on dark backgrounds pass WebAIM contrast checker (4.5:1 minimum)
   - Alt text: All visual style images have descriptive alt text
2. ✅ **Performance:**
   - Lighthouse audit: Performance 80+, Accessibility 90+, Best Practices 90+
   - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
   - Animation frame rate: 60fps on Chrome/Firefox/Safari (latest), 30fps minimum acceptable
   - Bundle size: Total vendor bundle < 900kb (current 806kb + 73kb = 879kb ✓)
3. ✅ **Lazy Loading:**
   - Visual styles images: Load only when scrolling to gallery (Intersection Observer)
   - Storyboard frames: Preload Frame1-3, lazy-load Frame4-6
   - Canvas particles: Initialize on scroll reveal, destroy on scroll out
4. ✅ **Responsive Testing:**
   - Mobile: iPhone 12 (375px × 812px), Android flagship (412px × 915px)
   - Tablet: iPad (768px × 1024px)
   - Desktop: 1920px × 1080px
   - Test all breakpoints in Chrome DevTools Device Mode

---

## Architecture References

**Validation Checkpoint:** This story validates ALL architecture standards implemented across Epic 1.

### Animation Architecture

Reference: `docs/architecture/animation-patterns.md`

**Accessibility (Section 9):**
```typescript
// prefers-reduced-motion detection (lines 522-560)
const prefersReducedMotion = usePrefersReducedMotion()

if (prefersReducedMotion) {
  gsap.set(".animated", { opacity: 1, y: 0 })  // Final state instantly
  return
}
```

**Performance (Section 8):**
- GPU acceleration: `will-change: transform` (lines 430-470)
- 60fps target: RAF optimization, GSAP ticker integration
- Memory leak prevention: `gsap.context()` cleanup (lines 98-146)

**React Cleanup Validation:**
- All GSAP components MUST use `gsap.context()` with cleanup
- All RAF loops MUST use `cancelAnimationFrame()` on unmount
- Stories to validate: 1.3, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10

### Frontend Architecture

Reference: `docs/architecture/frontend-architecture.md`

**Performance Optimization (Section 5):**
- Code splitting: Vendor chunk separation (806kb current)
- Lazy loading: Intersection Observer for images
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Accessibility Standards (Section 4):**
- Keyboard navigation: Tab/Enter/Space for all interactive elements
- ARIA labels: Descriptive labels for complex components
- Color contrast: WCAG AA (4.5:1 minimum) - validate with WebAIM

**Component Patterns (Section 2):**
- TypeScript interfaces for all props
- Semantic HTML (section, nav, button vs div)
- Responsive breakpoints: 375px, 768px, 1024px, 1920px

### Styling System

Reference: `docs/architecture/frontend-architecture.md` Section 3

**Briefing Engine Palette:**
- Single source: `src/components/briefing/palette.ts`
- Color isolation: No Homepage/Studios colors in Briefing components
- Contrast validation: All colors pass WCAG AA on dark backgrounds

### Validation Checklist

**Animation Cleanup (HIGH Priority):**
- [ ] Story 1.3: VisualStylesGallery - `gsap.context()` cleanup ✅
- [ ] Story 1.5: BriefingProcessFlow - `gsap.context()` cleanup ✅
- [ ] Story 1.6: AIProcessingVisual - `cancelAnimationFrame()` cleanup ✅
- [ ] Story 1.7: BriefToStoryboardAnimation - `gsap.context()` cleanup ✅
- [ ] Story 1.8: WorkflowTransformation - `gsap.context()` cleanup ✅
- [ ] Story 1.9: AudienceBenefits - `gsap.context()` cleanup ✅
- [ ] Story 1.10: Lenis wrapper - auto-cleanup verified ✅

**Performance Targets:**
- [ ] Lighthouse Performance: 80+ (target)
- [ ] Lighthouse Accessibility: 90+ (target)
- [ ] Bundle size: < 900kb (current 879kb ✅)
- [ ] Animation FPS: 60fps (target), 30fps minimum

**Accessibility Validation:**
- [ ] prefers-reduced-motion: All animations disabled when active
- [ ] Keyboard navigation: All CTAs, cards, links accessible via Tab
- [ ] ARIA labels: Visual styles, process steps, benefits properly labeled
- [ ] Color contrast: All text passes WCAG AA (4.5:1 minimum)

---

## Integration Verification

- **IV1**: Accessibility improvements don't break existing A11y features on other pages
  - Verify: Test keyboard navigation on Homepage, Studios, Agents pages
  - Verify: No new A11y violations introduced (run axe DevTools on other pages)
- **IV2**: Performance optimizations don't introduce new bugs (test lazy-loading edge cases)
  - Verify: Scroll up/down rapidly 10 times, images still load correctly
  - Verify: No console errors during lazy-load transitions
- **IV3**: Responsive behavior matches existing site patterns (no new breakpoint logic)
  - Verify: Same breakpoints as existing pages (375px, 768px, 1024px, 1920px)
  - Verify: No custom media queries introduced

---

## Tasks

- [ ] Implement prefers-reduced-motion (disable GSAP animations) (AC1)
- [ ] Verify keyboard navigation for all interactive elements (AC1)
- [ ] Add ARIA labels to all components (AC1)
  - [ ] Visual styles gallery
  - [ ] Process steps
  - [ ] Benefit cards
- [ ] Run WebAIM contrast checker on all color combinations (AC1)
- [ ] Add descriptive alt text to all images (AC1)
- [ ] Run Lighthouse audit (Performance 80+, A11y 90+, Best Practices 90+) (AC2)
- [ ] Verify Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1) (AC2)
- [ ] Monitor animation frame rate (60fps target, 30fps min) (AC2)
- [ ] Verify bundle size < 900kb (AC2)
- [ ] Implement lazy loading for visual style images (AC3)
- [ ] Preload Frame1-3, lazy-load Frame4-6 (AC3)
- [ ] Optimize Canvas particle lifecycle (AC3)
- [ ] Test responsive breakpoints (4 devices) (AC4)
- [ ] Test Integration Verification IV1 (A11y compatibility)
- [ ] Test Integration Verification IV2 (Lazy-loading edge cases)
- [ ] Test Integration Verification IV3 (Responsive consistency)

---

## Technical Notes

**prefers-reduced-motion Implementation:**
```tsx
// Global check
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// In GSAP components
useGSAP(() => {
  if (prefersReducedMotion) {
    // Skip animations, show final state
    gsap.set(".animated-element", { opacity: 1, y: 0 });
    return;
  }

  // Normal animation
  gsap.from(".animated-element", { opacity: 0, y: 50 });
}, []);
```

**ARIA Labels:**
```tsx
// Visual Styles Gallery
<section aria-label="Visual styles gallery - Choose from 8 creative styles">
  {styles.map(style => (
    <div
      key={style.id}
      role="button"
      tabIndex={0}
      aria-label={`${style.name} visual style - ${style.description}`}
    >
      <img src={style.image} alt={`${style.name} storyboard visual example`} />
    </div>
  ))}
</section>

// Process Steps
<section aria-label="Briefing process workflow - 4 steps">
  {steps.map((step, index) => (
    <div
      key={index}
      aria-label={`Step ${step.number}: ${step.title} - ${step.subtitle}`}
    >
      {/* ... */}
    </div>
  ))}
</section>
```

**Keyboard Navigation:**
```tsx
// Interactive elements
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
```

**Lazy Loading Pattern:**
```tsx
import { useInView } from 'react-intersection-observer';

function VisualStylesGallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref}>
      {inView && styles.map(style => (
        <img
          key={style.id}
          src={style.image}
          loading="lazy"
          alt={style.altText}
        />
      ))}
    </section>
  );
}
```

**Storyboard Frame Preloading:**
```tsx
// Preload first 3 frames
useEffect(() => {
  [1, 2, 3].forEach(num => {
    const img = new Image();
    img.src = `/briefing-engine/storyboard-mockup/Frame${num}.webp`;
  });
}, []);

// Lazy-load frames 4-6
{inView && [4, 5, 6].map(num => (
  <img
    key={num}
    src={`/briefing-engine/storyboard-mockup/Frame${num}.webp`}
    loading="lazy"
  />
))}
```

**Lighthouse Audit:**
```bash
npm run build
npm run preview  # Starts preview server on localhost:4173
npx lighthouse http://localhost:4173/studios-engine --only-categories=performance,accessibility,best-practices --view
# Target: Performance 80+, Accessibility 90+, Best Practices 90+
```

**Core Web Vitals Monitoring:**
```bash
# Install web-vitals if not present
npm list web-vitals || npm install web-vitals

# Add to component:
# import { getCLS, getFID, getLCP } from 'web-vitals';
# getCLS(console.log); // Target: < 0.1
# getFID(console.log); // Target: < 100ms
# getLCP(console.log); // Target: < 2.5s
```

**Bundle Size Check:**
```bash
npm run build
# Check build output for bundle sizes
# Vendor chunk should be < 900kb (current target: 879kb)
```

**Responsive Test Matrix:**
| Device | Width | Height | Breakpoint |
|--------|-------|--------|------------|
| iPhone 12 | 375px | 812px | Mobile |
| Android | 412px | 915px | Mobile |
| iPad | 768px | 1024px | Tablet |
| Desktop | 1920px | 1080px | Desktop |

**WebAIM Contrast Checker:**
https://webaim.org/resources/contrastchecker/

**Tools:**
- Chrome DevTools: Lighthouse, Performance, Coverage
- React DevTools: Profiler
- axe DevTools: Accessibility scanner

---

## Definition of Done

- [ ] All acceptance criteria met (4/4 checkmarks with sub-items)
- [ ] All integration verifications passed (IV1, IV2, IV3)
- [ ] All tasks completed (16/16 checkmarks)
- [ ] Manual validation: Browser testing (Chrome, Firefox, Safari)
- [ ] Build passes: `npm run build` succeeds
- [ ] Lint passes: `npm run lint` (errors only, warnings ok)
- [ ] Lighthouse: Performance 80+, A11y 90+, Best Practices 90+

---

## Story Dependencies

**Depends On:**
- Story 1.10: Page Assembly (needs complete page to optimize)

**Blocks:**
- Story 1.12: Testing & Deployment (A11y/performance validated)

---

## References

- **PRD:** `prd.md` - Story 1.11 (Lines 914-947)
- **NFR5:** WCAG AA accessibility compliance
- **NFR1:** 60fps animation performance
- **NFR4:** Lighthouse Performance 80+
- **WebAIM:** https://webaim.org/resources/contrastchecker/
- **Web Vitals:** https://web.dev/vitals/

---

## Creation Notes

**Story Creation Method:** PRD-to-Story Conversion (Option 2 - Pragmatic)
- Source: Comprehensive PRD created by PM agent from 2000+ line PLAN.md
- Architecture context already synthesized in PRD technical notes
- Format matches Story 1.1 (PO-approved precedent)

---

**Story Created By:** SM Agent
**Last Updated:** 2025-10-06
