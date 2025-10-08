# Story 1.9: Build AudienceBenefits Split Layout (Agencies vs Brands)

Status: Draft

## Story

As a visitor (agency or brand),
I want to see benefits specific to my user type,
so that I quickly identify how the platform serves my needs.

## Acceptance Criteria

1. AudienceBenefits component created with two-column split layout (desktop)
2. BenefitCard component with storyboard frame aesthetic:
   - Border: Film strip perforations (mini FilmStripDivider pattern)
   - Hover: Lift with glow in accent color
3. **For Agencies** (cyan accent, left column):
   - Scale Multiple Clients (building network icon)
   - Faster Client Onboarding (users/checklist icon)
   - Increased Team Productivity (trending up icon)
4. **For Brands** (fuchsia accent, right column):
   - Speed to Campaign Launch (rocket icon)
   - Stay On Brand, Always (brand guidelines icon)
   - Professional Results (award/star icon)
5. Section header: "Who Benefits" (H2, centered)
6. Responsive: Two columns desktop (1024px+), single column mobile with "Agencies" then "Brands"
7. GSAP animation: Cards stagger reveal (left column first, then right column)
8. React cleanup implemented: `gsap.context()` with cleanup function to prevent memory leaks (ScrollTriggers killed on unmount)

## Tasks / Subtasks

- [ ] Create AudienceBenefits component with two-column layout (AC: #1)
- [ ] Create BenefitCard component with film strip aesthetic (AC: #2)
  - [ ] Film strip border perforations
  - [ ] Hover lift + glow in accent color
- [ ] Add 3 Agency benefits (cyan accent, left column) (AC: #3)
  - [ ] Scale Multiple Clients (Building icon)
  - [ ] Faster Client Onboarding (Users icon)
  - [ ] Increased Team Productivity (TrendingUp icon)
- [ ] Add 3 Brand benefits (fuchsia accent, right column) (AC: #4)
  - [ ] Speed to Campaign Launch (Rocket icon)
  - [ ] Stay On Brand, Always (Bookmark icon)
  - [ ] Professional Results (Award icon)
- [ ] Add section header "Who Benefits" (H2, centered) (AC: #5)
- [ ] Implement responsive layouts (2 col / 1 col) (AC: #6)
- [ ] Add GSAP stagger reveal animation (AC: #7)
- [ ] Implement React cleanup with gsap.context() (AC: #8)
- [ ] Test Integration Verification IV1 (Card pattern consistency)
- [ ] Test Integration Verification IV2 (Film strip visual consistency)
- [ ] Test Integration Verification IV3 (Icon library consistency)

## Dev Notes

### Relevant architecture patterns and constraints

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

**Integration Verifications:**
- **IV1**: Benefit cards follow existing card patterns (glassmorphism, elevation)
- **IV2**: Film strip border visual consistent with Studios page FilmStripDivider
- **IV3**: Icon library usage consistent (Lucide React across all components)

### Project Structure Notes

**Relevant Source Tree:**
```
src/components/briefing/
├── AudienceBenefits.tsx (CREATE NEW)
└── BenefitCard.tsx (CREATE NEW)

src/components/studios/
└── FilmStripDivider.tsx (EXISTS - reference for film strip aesthetic)
```

**Audience Benefits Data:**
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

### References

- [Source: prd.md - Story 1.9 (Lines 850-879)]
- [Source: docs/architecture/animation-patterns.md - Pattern 4 (Stagger Animation)]
- [Source: src/components/studios/FilmStripDivider.tsx - Film strip aesthetic reference]
- Lucide React: https://lucide.dev/ (Building, Users, TrendingUp, Rocket, Bookmark, Award)

**Story Dependencies:**
- Depends On: Story 1.1 (GSAP + Lenis), Story 1.2 (Color Palette)
- Blocks: None (benefits section is self-contained)

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
