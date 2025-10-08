# Story 1.10: Assemble Final Page and Implement Lenis Smooth Scroll

Status: Draft

## Story

As a developer,
I want to assemble all new components into the BriefingEngine page with Lenis wrapper,
so that the complete redesigned page is live with premium smooth scrolling.

## Acceptance Criteria

1. BriefingEngine.tsx page updated with final structure (11 sections):
   - BriefingHero
   - StoryboardDivider
   - VisualStylesGallery
   - StoryboardDivider
   - BriefingProcessFlow
   - StoryboardDivider
   - WorkflowTransformation
   - StoryboardDivider
   - AudienceBenefits
   - StoryboardDivider
   - BriefingCTA
2. Lenis wrapper applied at page level: `<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>`
3. All components imported and rendered in correct order
4. SEO component updated:
   - Title: "AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
   - Description: "AI-powered briefing platform for agencies and brands. Create professional storyboards with 8 visual styles. From brief to PDF in minutes."
5. Old components removed from page:
   - ConceptToCreation (replaced by VisualStylesGallery)
   - Generic HowItWorks (replaced by BriefingProcessFlow)
   - Generic Benefits (replaced by AudienceBenefits)
6. Navigation.tsx link text confirmed: "AI Briefing Engine" (already updated in Phase 1)
7. Production build succeeds: `npm run build` completes without errors
8. Lenis cleanup verified: `<ReactLenis>` wrapper provides automatic cleanup on unmount (no manual destroy() needed)

## Tasks / Subtasks

- [ ] Import all new briefing components (AC: #3)
  - [ ] BriefingHero
  - [ ] StoryboardDivider (5 instances with different scene numbers)
  - [ ] VisualStylesGallery
  - [ ] BriefingProcessFlow
  - [ ] WorkflowTransformation
  - [ ] AudienceBenefits
  - [ ] BriefingCTA
- [ ] Wrap page with ReactLenis component (AC: #2)
- [ ] Assemble 11-section page structure (AC: #1)
- [ ] Update SEO component (title/description) (AC: #4)
- [ ] Remove old components (ConceptToCreation, HowItWorks, Benefits) (AC: #5)
- [ ] Verify Navigation.tsx link text (AC: #6)
- [ ] Run production build test (AC: #7)
- [ ] Verify Lenis wrapper auto-cleanup (AC: #8)
- [ ] Test Integration Verification IV1 (Other pages functional)
- [ ] Test Integration Verification IV2 (React Router navigation)
- [ ] Test Integration Verification IV3 (Console error check)

## Dev Notes

### Relevant architecture patterns and constraints

**Pattern Used:** Lenis Integration with React

Reference: `docs/architecture/animation-patterns.md` lines 338-361

**Declarative Wrapper Pattern:**
```typescript
import { ReactLenis } from 'lenis/react'

export function BriefingEngine() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {/* Page content */}
    </ReactLenis>
  )
}
```

**✅ Cleanup Handling:** The `<ReactLenis>` wrapper automatically handles Lenis instance creation and cleanup on unmount. No manual `lenis.destroy()` required for wrapper pattern.

**Pattern Comparison:**
- **Wrapper (this story):** Declarative, auto-cleanup, React-idiomatic ✅
- **Imperative (architecture):** Manual instance, manual cleanup, more control

**GSAP Integration:**
- Lenis syncs with ScrollTrigger automatically via `useLenis` hook in child components
- See Story 1.3 (VisualStylesGallery) for example: `useLenis(({ scroll }) => ScrollTrigger.update())`

**Integration Verifications:**
- **IV1**: All existing site pages (Home, Studios, Agents, Contact) still functional
- **IV2**: React Router navigation to/from Briefing Engine works smoothly
- **IV3**: No console errors on page load or during scroll interactions

### Project Structure Notes

**Relevant Source Tree:**
```
src/pages/
└── StudiosEngine.tsx (EXISTS - update with new component assembly)

src/components/briefing/
├── BriefingHero.tsx (from Story 1.2 Phase 1)
├── StoryboardDivider.tsx (from Story 1.4)
├── VisualStylesGallery.tsx (from Story 1.3)
├── BriefingProcessFlow.tsx (from Story 1.5)
├── WorkflowTransformation.tsx (from Story 1.8)
├── AudienceBenefits.tsx (from Story 1.9)
└── BriefingCTA.tsx (from Story 1.2 Phase 1)
```

**Page Structure Example:**
```tsx
import { ReactLenis } from 'lenis/react';
import { BriefingHero } from '@/components/briefing/BriefingHero';
import { StoryboardDivider } from '@/components/briefing/StoryboardDivider';
import { VisualStylesGallery } from '@/components/briefing/VisualStylesGallery';
// ... other imports

export function BriefingEngine() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <SEO
        title="AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
        description="AI-powered briefing platform for agencies and brands. Create professional storyboards with 8 visual styles. From brief to PDF in minutes."
      />

      <BriefingHero />
      <StoryboardDivider sceneNumbers={[1, 2, 3]} />
      <VisualStylesGallery />
      <StoryboardDivider sceneNumbers={[2, 3, 4]} />
      {/* ... remaining sections */}
    </ReactLenis>
  );
}
```

**File Location & Route Strategy:**
- File: `src/pages/StudiosEngine.tsx` (KEEP EXISTING - mapped to route)
- Route: `/studios-engine` (PRESERVED for SEO continuity)
- Display Name: "AI Briefing Engine" (in UI/navigation)

### References

- [Source: prd.md - Story 1.10 (Lines 881-912)]
- [Source: docs/architecture/animation-patterns.md - Lenis Integration]
- Lenis React: https://lenis.studiofreight.com/

**Story Dependencies:**
- Depends On: Story 1.1 (GSAP + Lenis), Stories 1.2-1.9 (All components)
- Blocks: Story 1.11 (Accessibility & Performance), Story 1.12 (Testing & Deployment)

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
