# Story 1.11: Performance Optimization & Responsive Testing

Status: Draft

> **⚠️ UPDATED (2025-10-08):** Story scope revised per Technical Decision [AD-003](../technical-decisions.md#ad-003-remove-all-wcag-accessibility-implementations-2025-10-08). Accessibility requirements removed - story now focuses exclusively on performance optimization and responsive testing.

## Story

As a user on any device or connection speed,
I want the page to load quickly and animate smoothly,
so that I can experience the visual storytelling without lag or jank.

## Acceptance Criteria

1. ~~**Accessibility (WCAG AA)**~~ **REMOVED per AD-003**
2. **Performance:**
   - Lighthouse audit: Performance 80+, Accessibility 90+, Best Practices 90+
   - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
   - Animation frame rate: 60fps on Chrome/Firefox/Safari (latest), 30fps minimum acceptable
   - Bundle size: Total vendor bundle < 900kb (current 806kb + 73kb = 879kb ✓)
3. **Lazy Loading:**
   - Visual styles images: Load only when scrolling to gallery (Intersection Observer)
   - Storyboard frames: Preload Frame1-3, lazy-load Frame4-6
   - Canvas particles: Initialize on scroll reveal, destroy on scroll out
4. **Responsive Testing:**
   - Mobile: iPhone 12 (375px × 812px), Android flagship (412px × 915px)
   - Tablet: iPad (768px × 1024px)
   - Desktop: 1920px × 1080px
   - Test all breakpoints in Chrome DevTools Device Mode

## Tasks / Subtasks

- [ ] ~~Implement prefers-reduced-motion~~ (REMOVED per AD-003)
- [ ] ~~Verify keyboard navigation~~ (REMOVED per AD-003)
- [ ] ~~Add ARIA labels~~ (REMOVED per AD-003)
- [ ] ~~Run WebAIM contrast checker~~ (REMOVED per AD-003)
- [ ] Run Lighthouse audit (Performance 80+, Best Practices 90+) (AC: #2)
- [ ] Verify Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1) (AC: #2)
- [ ] Monitor animation frame rate (60fps target, 30fps min) (AC: #2)
- [ ] Verify bundle size < 900kb (AC: #2)
- [ ] Implement lazy loading for visual style images (AC: #3)
- [ ] Preload Frame1-3, lazy-load Frame4-6 (AC: #3)
- [ ] Optimize Canvas particle lifecycle (AC: #3)
- [ ] Test responsive breakpoints (4 devices) (AC: #4)
- [ ] Test Integration Verification IV1 (Performance profiling)
- [ ] Test Integration Verification IV2 (Lazy-loading edge cases)
- [ ] Test Integration Verification IV3 (Responsive consistency)

## Dev Notes

### Relevant architecture patterns and constraints

**Validation Checkpoint:** This story validates performance and responsiveness standards implemented across Epic 1.

**Animation Architecture**

Reference: `docs/architecture/animation-patterns.md`

**~~Accessibility~~ REMOVED per AD-003**

**Performance (Section 8):**
- GPU acceleration: `will-change: transform` (lines 430-470)
- 60fps target: RAF optimization, GSAP ticker integration
- Memory leak prevention: `gsap.context()` cleanup (lines 98-146)

**React Cleanup Validation:**
- All GSAP components MUST use `gsap.context()` with cleanup
- All RAF loops MUST use `cancelAnimationFrame()` on unmount
- Stories to validate: 1.3, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10

**Frontend Architecture**

Reference: `docs/architecture/frontend-architecture.md`

**Performance Optimization (Section 5):**
- Code splitting: Vendor chunk separation (806kb current)
- Lazy loading: Intersection Observer for images
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Accessibility Standards (Section 4):**
- Keyboard navigation: Tab/Enter/Space for all interactive elements
- ARIA labels: Descriptive labels for complex components
- Color contrast: WCAG AA (4.5:1 minimum) - validate with WebAIM

**Integration Verifications:**
- **IV1**: Accessibility improvements don't break existing A11y features on other pages
- **IV2**: Performance optimizations don't introduce new bugs (test lazy-loading edge cases)
- **IV3**: Responsive behavior matches existing site patterns (no new breakpoint logic)

### Project Structure Notes

**Animation Cleanup Checklist:**
- [ ] Story 1.3: VisualStylesGallery - `gsap.context()` cleanup ✅
- [ ] Story 1.5: BriefingProcessFlow - `gsap.context()` cleanup ✅
- [ ] Story 1.6: AIProcessingVisual - `cancelAnimationFrame()` cleanup ✅
- [ ] Story 1.7: BriefToStoryboardAnimation - `gsap.context()` cleanup ✅
- [ ] Story 1.8: WorkflowTransformation - `gsap.context()` cleanup ✅
- [ ] Story 1.9: AudienceBenefits - `gsap.context()` cleanup ✅
- [ ] Story 1.10: Lenis wrapper - auto-cleanup verified ✅

**prefers-reduced-motion Implementation:**
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// In GSAP components
useGSAP(() => {
  if (prefersReducedMotion) {
    gsap.set(".animated-element", { opacity: 1, y: 0 });
    return;
  }

  gsap.from(".animated-element", { opacity: 0, y: 50 });
}, []);
```

**ARIA Labels Example:**
```tsx
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

### References

- [Source: prd.md - Story 1.11 (Lines 914-947)]
- [Source: docs/architecture/animation-patterns.md - Accessibility & Performance]
- [Source: docs/architecture/frontend-architecture.md - Sections 4 & 5]
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Web Vitals: https://web.dev/vitals/

**Story Dependencies:**
- Depends On: Story 1.10 (Page Assembly)
- Blocks: Story 1.12 (Testing & Deployment)

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML/JSON will be added here by context workflow -->

### Agent Model Used

<!-- To be filled by dev agent -->

### Debug Log References

<!-- To be filled by dev agent -->

### Completion Notes List

<!-- To be filled by dev agent -->

### File List

<!-- To be filled by dev agent -->
