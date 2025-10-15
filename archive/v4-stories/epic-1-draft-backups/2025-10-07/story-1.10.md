# Story 1.10: Assemble Final Page and Implement Lenis Smooth Scroll

**Status:** Draft
**Epic:** Epic 1 - AI Briefing Engine Page Redesign & Premium Animation Implementation
**Story ID:** 1.10
**Assignee:** Dev
**Created:** 2025-10-06

---

## User Story

**As a** developer,
**I want** to assemble all new components into the BriefingEngine page with Lenis wrapper,
**so that** the complete redesigned page is live with premium smooth scrolling.

---

## Acceptance Criteria

1. ✅ BriefingEngine.tsx page updated with final structure (11 sections):
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
2. ✅ Lenis wrapper applied at page level: `<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>`
3. ✅ All components imported and rendered in correct order
4. ✅ SEO component updated:
   - Title: "AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
   - Description: "AI-powered briefing platform for agencies and brands. Create professional storyboards with 8 visual styles. From brief to PDF in minutes."
5. ✅ Old components removed from page:
   - ConceptToCreation (replaced by VisualStylesGallery)
   - Generic HowItWorks (replaced by BriefingProcessFlow)
   - Generic Benefits (replaced by AudienceBenefits)
6. ✅ Navigation.tsx link text confirmed: "AI Briefing Engine" (already updated in Phase 1)
7. ✅ Production build succeeds: `npm run build` completes without errors
8. ✅ Lenis cleanup verified: `<ReactLenis>` wrapper provides automatic cleanup on unmount (no manual destroy() needed)

---

## Architecture References

**Pattern Used:** Lenis Integration with React

Reference: `docs/architecture/animation-patterns.md` lines 338-361

**Declarative Wrapper Pattern (Used in Story):**
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

**Imperative Pattern (Alternative - from architecture docs):**
```typescript
// For reference - when NOT using wrapper
useEffect(() => {
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  return () => {
    lenis.destroy()  // CRITICAL: Manual cleanup for imperative pattern
    gsap.ticker.remove(lenis.raf)
  }
}, [])
```

**Pattern Comparison:**
- **Wrapper (this story):** Declarative, auto-cleanup, React-idiomatic ✅
- **Imperative (architecture):** Manual instance, manual cleanup, more control

Both patterns are valid. Wrapper is preferred for page-level integration (simpler, safer).

**GSAP Integration:**
- Lenis syncs with ScrollTrigger automatically via `useLenis` hook in child components
- See Story 1.3 (VisualStylesGallery) for example: `useLenis(({ scroll }) => ScrollTrigger.update())`

---

## Integration Verification

- **IV1**: All existing site pages (Home, Studios, Agents, Contact) still functional
- **IV2**: React Router navigation to/from Briefing Engine works smoothly
- **IV3**: No console errors on page load or during scroll interactions

---

## Tasks

- [ ] Import all new briefing components (AC3)
  - [ ] BriefingHero
  - [ ] StoryboardDivider (5 instances with different scene numbers)
  - [ ] VisualStylesGallery
  - [ ] BriefingProcessFlow
  - [ ] WorkflowTransformation
  - [ ] AudienceBenefits
  - [ ] BriefingCTA
- [ ] Wrap page with ReactLenis component (AC2)
- [ ] Assemble 11-section page structure (AC1)
- [ ] Update SEO component (title/description) (AC4)
- [ ] Remove old components (ConceptToCreation, HowItWorks, Benefits) (AC5)
- [ ] Verify Navigation.tsx link text (AC6)
- [ ] Run production build test (AC7)
- [ ] Verify Lenis wrapper auto-cleanup (AC8)
- [ ] Test Integration Verification IV1 (Other pages functional)
- [ ] Test Integration Verification IV2 (React Router navigation)
- [ ] Test Integration Verification IV3 (Console error check)

---

## Dev Notes

### Relevant Source Tree

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

**Dependencies:** All components from Stories 1.2-1.9 must be complete.

### Page Structure
```tsx
import { ReactLenis } from 'lenis/react';
import { BriefingHero } from '@/components/briefing/BriefingHero';
import { StoryboardDivider } from '@/components/briefing/StoryboardDivider';
import { VisualStylesGallery } from '@/components/briefing/VisualStylesGallery';
import { BriefingProcessFlow } from '@/components/briefing/BriefingProcessFlow';
import { WorkflowTransformation } from '@/components/briefing/WorkflowTransformation';
import { AudienceBenefits } from '@/components/briefing/AudienceBenefits';
import { BriefingCTA } from '@/components/briefing/BriefingCTA';

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

      <BriefingProcessFlow />
      <StoryboardDivider sceneNumbers={[3, 4, 5]} />

      <WorkflowTransformation />
      <StoryboardDivider sceneNumbers={[4, 5, 6]} />

      <AudienceBenefits />
      <StoryboardDivider sceneNumbers={[5, 6, 1]} />

      <BriefingCTA />
    </ReactLenis>
  );
}
```

**Lenis Configuration:**
```tsx
<ReactLenis
  root
  options={{
    lerp: 0.1,        // Smooth interpolation (0.1 = smooth, 1 = instant)
    duration: 1.5,    // Scroll duration multiplier
    smoothTouch: true // Enable on mobile
  }}
>
```

**SEO Update:**
```tsx
<SEO
  title="AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
  description="AI-powered briefing platform for agencies and brands. Create professional storyboards with 8 visual styles. From brief to PDF in minutes."
  canonical="https://cre8tive.ai/studios-engine"
/>
```

**Components to Remove:**
```tsx
// DELETE these imports and components:
import { ConceptToCreation } from '...'; // REMOVE
import { HowItWorks } from '...';        // REMOVE
import { Benefits } from '...';          // REMOVE
```

**Build Command:**
```bash
npm run build
```

**File Location & Route Strategy:**
- File: `src/pages/StudiosEngine.tsx` (KEEP EXISTING - mapped to route)
- Route: `/studios-engine` (PRESERVED for SEO continuity)
- Display Name: "AI Briefing Engine" (in UI/navigation)

**Rationale:** File stays as `StudiosEngine.tsx` to match the preserved `/studios-engine` route. This avoids breaking external links and maintains search engine rankings while the visible branding is "AI Briefing Engine."

### Testing

**Component Import Check:**
```bash
# Verify all 7 briefing components exist before assembly
ls -lh src/components/briefing/
# Should show: BriefingHero, StoryboardDivider, VisualStylesGallery, etc.
```

**Page Assembly:**
```bash
npm run dev
# Navigate to /studios-engine
# Verify all 11 sections render in order
```

**Lenis Smooth Scroll:**
```bash
# Test scroll behavior - should be smooth with momentum
```

**React Router:**
```bash
# Test navigation from Homepage → AI Briefing Engine
# Verify URL shows /studios-engine
```

**SEO Verification:**
```bash
# View page source
# Verify title: "AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
```

---

## Definition of Done

- [ ] All acceptance criteria met (8/8 checkmarks)
- [ ] All integration verifications passed (IV1, IV2, IV3)
- [ ] All tasks completed (11/11 checkmarks)
- [ ] Manual validation: Browser testing (Chrome, Firefox, Safari)
- [ ] Build passes: `npm run build` succeeds
- [ ] Lint passes: `npm run lint` (errors only, warnings ok)
- [ ] Complete 11-section page renders correctly

---

## Story Dependencies

**Depends On:**
- Story 1.1: GSAP + Lenis (Lenis wrapper)
- Story 1.2: Color Palette
- Story 1.3: Visual Styles Gallery
- Story 1.4: Storyboard Dividers
- Story 1.5: Briefing Process Flow
- Story 1.6: Canvas Particles
- Story 1.7: GSAP Timeline
- Story 1.8: Workflow Transformation
- Story 1.9: Audience Benefits

**Blocks:**
- Story 1.11: Accessibility & Performance (needs assembled page)
- Story 1.12: Testing & Deployment (needs complete page)

---

## References

- **PRD:** `prd.md` - Story 1.10 (Lines 881-912)
- **Lenis React:** https://lenis.studiofreight.com/
- **Route:** `/studios-engine` (preserved for SEO)

---

## Creation Notes

**Story Creation Method:** PRD-to-Story Conversion (Option 2 - Pragmatic)
- Source: Comprehensive PRD created by PM agent from 2000+ line PLAN.md
- Architecture context already synthesized in PRD technical notes
- Format matches Story 1.1 (PO-approved precedent)

---

**Story Created By:** SM Agent
**Last Updated:** 2025-10-06
