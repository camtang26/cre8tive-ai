# Story 1.9: Build AudienceBenefits Split Layout (Agencies vs Brands)

**Status:** Draft
**Epic:** Epic 1 - AI Briefing Engine Page Redesign & Premium Animation Implementation
**Story ID:** 1.9
**Assignee:** Dev
**Created:** 2025-10-06

---

## User Story

**As a** visitor (agency or brand),
**I want** to see benefits specific to my user type,
**so that** I quickly identify how the platform serves my needs.

---

## Acceptance Criteria

1. ✅ AudienceBenefits component created with two-column split layout (desktop)
2. ✅ BenefitCard component with storyboard frame aesthetic:
   - Border: Film strip perforations (mini FilmStripDivider pattern)
   - Hover: Lift with glow in accent color
3. ✅ **For Agencies** (cyan accent, left column):
   - Scale Multiple Clients (building network icon)
   - Faster Client Onboarding (users/checklist icon)
   - Increased Team Productivity (trending up icon)
4. ✅ **For Brands** (fuchsia accent, right column):
   - Speed to Campaign Launch (rocket icon)
   - Stay On Brand, Always (brand guidelines icon)
   - Professional Results (award/star icon)
5. ✅ Section header: "Who Benefits" (H2, centered)
6. ✅ Responsive: Two columns desktop (1024px+), single column mobile with "Agencies" then "Brands"
7. ✅ GSAP animation: Cards stagger reveal (left column first, then right column)
8. ✅ React cleanup implemented: `gsap.context()` with cleanup function to prevent memory leaks (ScrollTriggers killed on unmount)

---

## Architecture References

**Pattern Used:** GSAP Stagger Animation with Column Sequencing

Reference: `docs/architecture/animation-patterns.md` Pattern 4 - Stagger Animation (lines 252-309)

**Two-Column Stagger Pattern:**
```typescript
// Reference: animation-patterns.md Pattern 4
useEffect(() => {
  const ctx = gsap.context(() => {
    // Left column (agencies) reveals first
    gsap.from(".agency-card", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".audience-benefits",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    // Right column (brands) reveals 0.3s after left starts
    gsap.from(".brand-card", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,  // Sequential after agencies
      scrollTrigger: {
        trigger: ".audience-benefits",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })
  }, containerRef)

  return () => ctx.revert()  // CRITICAL: Cleanup
}, [])
```

**Column Sequencing Strategy:**
- Agencies column: stagger 0.15s per card
- Brands column: starts 0.3s after agencies (creates left → right flow)
- Total animation duration: ~1.2s for complete reveal

**GPU Optimization:**
- Use `transform: translateY()` (GPU) NOT `margin-top` (CPU)
- Use `opacity` (GPU) for fades

**Film Strip Border Pattern:**
```typescript
// Reference visual style from Studios FilmStripDivider
border: 1px solid rgba(255,255,255,0.1)
box-shadow: 0 0 20px ${accentColor}20
```

**Related Patterns:**
- Pattern 4: Stagger Animation (lines 252-309)
- Pattern 1: Basic ScrollTrigger (lines 98-146) - if simpler reveal needed

---

## Integration Verification

- **IV1**: Benefit cards follow existing card patterns (glassmorphism, elevation)
- **IV2**: Film strip border visual consistent with Studios page FilmStripDivider
- **IV3**: Icon library usage consistent (Lucide React across all components)

---

## Tasks

- [ ] Create AudienceBenefits component with two-column layout (AC1)
- [ ] Create BenefitCard component with film strip aesthetic (AC2)
  - [ ] Film strip border perforations
  - [ ] Hover lift + glow in accent color
- [ ] Add 3 Agency benefits (cyan accent, left column) (AC3)
  - [ ] Scale Multiple Clients (Building icon)
  - [ ] Faster Client Onboarding (Users icon)
  - [ ] Increased Team Productivity (TrendingUp icon)
- [ ] Add 3 Brand benefits (fuchsia accent, right column) (AC4)
  - [ ] Speed to Campaign Launch (Rocket icon)
  - [ ] Stay On Brand, Always (Bookmark icon)
  - [ ] Professional Results (Award icon)
- [ ] Add section header "Who Benefits" (H2, centered) (AC5)
- [ ] Implement responsive layouts (2 col / 1 col) (AC6)
- [ ] Add GSAP stagger reveal animation (AC7)
- [ ] Implement React cleanup with gsap.context() (AC8)
- [ ] Test Integration Verification IV1 (Card pattern consistency)
- [ ] Test Integration Verification IV2 (Film strip visual consistency)
- [ ] Test Integration Verification IV3 (Icon library consistency)

---

## Dev Notes

### Relevant Source Tree

```
src/components/briefing/
├── AudienceBenefits.tsx (CREATE NEW)
└── BenefitCard.tsx (CREATE NEW)

src/components/studios/
└── FilmStripDivider.tsx (EXISTS - reference for film strip aesthetic)
```

**Note:** Lucide React icons (Building, Users, TrendingUp, Rocket, Bookmark, Award) should be installed.

### Audience Benefits Data
```tsx
const audienceBenefits = {
  agencies: {
    title: "For Agencies",
    accentColor: "cyan", // #0891B2
    benefits: [
      {
        title: "Scale Multiple Clients",
        description: "Manage 10+ brands with consistent quality",
        icon: Building,
      },
      {
        title: "Faster Client Onboarding",
        description: "From brief to storyboard in minutes",
        icon: Users,
      },
      {
        title: "Increased Team Productivity",
        description: "Free creatives for strategy, not storyboards",
        icon: TrendingUp,
      },
    ],
  },
  brands: {
    title: "For Brands",
    accentColor: "fuchsia", // #C026D3
    benefits: [
      {
        title: "Speed to Campaign Launch",
        description: "Launch campaigns weeks faster",
        icon: Rocket,
      },
      {
        title: "Stay On Brand, Always",
        description: "AI trained on your brand guidelines",
        icon: Bookmark,
      },
      {
        title: "Professional Results",
        description: "8 visual styles for any creative direction",
        icon: Award,
      },
    ],
  },
};
```

**Film Strip Border Pattern:**
```tsx
function BenefitCard({ title, description, icon: Icon, accentColor }) {
  return (
    <div
      className="relative p-6 rounded-lg border border-white/10
                 bg-gradient-to-br from-gray-900/50 to-gray-800/50
                 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300
                 group"
      style={{
        boxShadow: `0 0 20px ${accentColor}20`,
      }}
    >
      {/* Film strip perforations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Icon className="w-12 h-12 mb-4" style={{ color: accentColor }} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
```

**GSAP Stagger Animation:**
```tsx
useGSAP(() => {
  gsap.from(".benefit-card-agencies", {
    scrollTrigger: {
      trigger: ".audience-benefits",
      start: "top 80%",
    },
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 0.6,
  });

  gsap.from(".benefit-card-brands", {
    scrollTrigger: {
      trigger: ".audience-benefits",
      start: "top 80%",
    },
    opacity: 0,
    x: 50,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.3, // After agencies
  });
});
```

**Responsive Layout:**
```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-12"
```

**Lucide Icons:**
```tsx
import { Building, Users, TrendingUp, Rocket, Bookmark, Award } from 'lucide-react';
```

**Component File Locations:**
- `src/components/briefing/AudienceBenefits.tsx`
- `src/components/briefing/BenefitCard.tsx`

### Testing

**Layout Verification:**
```bash
npm run dev
# Navigate to /studios-engine → Audience Benefits
# Desktop: Verify two-column layout (Agencies left, Brands right)
# Mobile: Verify single column (Agencies first, then Brands)
```

**Film Strip Border:**
```bash
# Compare BenefitCard borders with Studios FilmStripDivider
# Verify similar perforation aesthetic
# Check hover glow in cyan (Agencies) and fuchsia (Brands)
```

**GSAP Stagger:**
```bash
# Scroll to Audience Benefits
# Verify left column reveals first (Agencies, 3 cards)
# Then right column (Brands, 3 cards) with 300ms delay
```

**Icon Consistency:**
```bash
# Verify all 6 Lucide icons render correctly
# Check icon library consistency with other components
```

---

## Definition of Done

- [ ] All acceptance criteria met (8/8 checkmarks)
- [ ] All integration verifications passed (IV1, IV2, IV3)
- [ ] All tasks completed (11/11 checkmarks)
- [ ] Manual validation: Browser testing (Chrome, Firefox, Safari)
- [ ] Build passes: `npm run build` succeeds
- [ ] Lint passes: `npm run lint` (errors only, warnings ok)
- [ ] 6 benefits (3 agencies + 3 brands) display correctly

---

## Story Dependencies

**Depends On:**
- Story 1.1: GSAP + Lenis (for stagger animation)
- Story 1.2: Color Palette (for cyan/fuchsia accents)

**Blocks:**
- None (benefits section is self-contained)

---

## References

- **PRD:** `prd.md` - Story 1.9 (Lines 850-879)
- **FilmStripDivider:** `src/components/studios/FilmStripDivider.tsx` (reference for film strip aesthetic)
- **Lucide React:** https://lucide.dev/

---

## Creation Notes

**Story Creation Method:** PRD-to-Story Conversion (Option 2 - Pragmatic)
- Source: Comprehensive PRD created by PM agent from 2000+ line PLAN.md
- Architecture context already synthesized in PRD technical notes
- Format matches Story 1.1 (PO-approved precedent)

---

**Story Created By:** SM Agent
**Last Updated:** 2025-10-06
