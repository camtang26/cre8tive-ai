# PLAN: AI Briefing Engine Dark Theme + GSAP Animations Rework

**Created:** 2025-10-05 17:03 NZDT
**Status:** Active
**Branch:** design/modern-refresh-2025-10-02
**Goal:** Fix failed first attempt - implement unique dark theme with GSAP animations

---

## Goal

Transform AI Briefing Engine from failed bright theme to sophisticated dark indigo/purple theme with smooth GSAP ScrollTrigger animations. Each page needs unique visual identity - NOT copying Studios/Home.

**Success Signal:**
- Deep black/indigo background with subtle gradients (NOT bright colors)
- GSAP ScrollTrigger animations working smoothly (60fps)
- No console errors in Chrome DevTools
- All quality gates pass (lint, test, build)
- Unique Briefing Engine theme established

---

## Context from Failed First Attempt

**❌ What Went Wrong:**
1. Colors TOO BRIGHT (bright blue-purple gradient - garish, not sophisticated)
2. Sections below hero PURE BLACK (should have subtle dark gradients like Studios page)
3. ZERO GSAP animations implemented (just static placeholder text)
4. Did NOT query RAG knowledge base for GSAP patterns (violated workflow)
5. Did NOT follow TDD (no testing, just declared "complete")
6. Almost copied Studios page wholesale (lazy - each page needs unique mini-theme)

**✅ What's Already in Place:**
- GSAP + Lenis installed
- 9 visual styles in public/briefing-engine/visual-styles/
- 6 storyboard frames in public/briefing-engine/storyboard/
- BriefingEngine.tsx, StoryboardDivider.tsx, BriefingCTA.tsx, VisualStylesGallery.tsx, StyleCard.tsx created
- 3×3 grid layout (9 cards)
- Route /studios-engine active

---

## Dark Theme Pattern Analysis

**Page Differentiation (Each Page Unique):**

**Home Page:**
- Video background + dark overlays
- Radial vignette (transparent → dark edges)
- Gradient mesh
- Theme: Corporate/professional AI

**Studios Page:**
- Deep black (rgba(0,0,0,0.95-0.99))
- Orange/teal radial gradients
- 3000 particles (cinematic theme)
- Theme: Film production/cinematic

**Briefing Engine (NEW - Our Focus):**
- Deep black/indigo base (#1a1a2e, #0f0f1e)
- Subtle purple/indigo radial gradients
- Fewer, purposeful particles (data/transformation theme)
- Theme: AI intelligence transforming briefs → storyboards

---

## Steps

- S1 Research GSAP ScrollTrigger Patterns (RAG Required) ✅

**Description:** Query RAG knowledge base for GSAP ScrollTrigger implementation patterns before writing any code

**Tasks:**
- Query RAG for "GSAP ScrollTrigger card reveals"
- Query RAG for "GSAP timeline scroll animations"
- Query RAG for "GSAP ScrollTrigger pin sections"
- Document patterns in _MEMO.md

**Files:** None (research only)

**Time Estimate:** 15 minutes

**Success Criteria:**
- At least 3 RAG queries completed
- GSAP patterns documented in _MEMO.md
- Clear understanding of ScrollTrigger API

---

- S2 Fix Hero Section Dark Theme

**Description:** Replace bright blue-purple gradient with deep black/indigo gradient in BriefingEngine.tsx hero section

**Tasks:**
- Update hero background from bright gradient to deep black with subtle indigo radial gradient
- Colors: #0f0f1e (deep black) → #1a1a2e (deep indigo)
- Add subtle radial gradient overlay (center lighter, edges darker)
- Test in dev server (npm run dev)

**Files:**
- src/pages/BriefingEngine.tsx

**Time Estimate:** 10 minutes

**Success Criteria:**
- Hero background is deep dark (NOT bright)
- Subtle gradient visible (not pure black)
- Matches dark aesthetic of Studios page

---

- S3 Fix Section Backgrounds (Replace Pure Black) ✅

**Description:** Replace pure black sections with subtle dark gradients throughout BriefingEngine.tsx

**Tasks:**
- Find all sections with pure black (#000000 or bg-black)
- Replace with deep black + subtle gradients
- Add radial gradients where appropriate (rgba overlays)
- Ensure text remains readable (contrast check)

**Files:**
- src/pages/BriefingEngine.tsx
- src/components/briefing/VisualStylesGallery.tsx

**Time Estimate:** 15 minutes

**Success Criteria:**
- No pure black sections (all have subtle gradients)
- Text contrast passes WCAG AA
- Visual depth established (not flat black)

---

- S4 Update Color Palette Constants

**Description:** Update BriefingCTA.tsx and StoryboardDivider.tsx to use deep indigo/cyan/fuchsia instead of bright purple/green/pink

**Tasks:**
- Define dark color palette: indigo (#4F46E5), cyan (#0891B2), fuchsia (#C026D3)
- Update BriefingCTA gradient to dark indigo → fuchsia
- Update StoryboardDivider colors to indigo accents
- Update button colors to dark palette

**Files:**
- src/components/briefing/BriefingCTA.tsx
- src/components/briefing/StoryboardDivider.tsx

**Time Estimate:** 15 minutes

**Success Criteria:**
- All bright colors replaced with dark equivalents
- Consistent dark indigo/cyan/fuchsia palette
- Visually distinct from Home/Studios pages

---

- S5 Implement GSAP ScrollTrigger for Visual Styles Gallery

**Description:** Add GSAP ScrollTrigger stagger reveal animation to StyleCard components in VisualStylesGallery.tsx

**Tasks:**
- Import GSAP and ScrollTrigger
- Create useGSAP hook for gallery reveal
- Implement stagger animation (cards fade in sequentially on scroll)
- Set scrub: true for scroll-driven animation
- Test animation smoothness (60fps target)

**Files:**
- src/components/briefing/VisualStylesGallery.tsx

**Time Estimate:** 20 minutes

**Success Criteria:**
- Cards animate in on scroll (not all at once)
- Stagger delay: ~0.1s per card
- Smooth 60fps animation
- Respects prefers-reduced-motion

---

- S6 Implement GSAP Timeline for Storyboard Section

**Description:** Add GSAP timeline animation to storyboard reveal section with ScrollTrigger

**Tasks:**
- Create BriefingTransformationTimeline.tsx component
- Implement 5-stage timeline: Form → AI → Selection → Assembly → Handoff
- Add ScrollTrigger with pin and scrub
- Integrate into BriefingEngine.tsx page
- Test scroll-driven timeline playback

**Files:**
- src/components/briefing/BriefingTransformationTimeline.tsx (new)
- src/pages/BriefingEngine.tsx

**Time Estimate:** 30 minutes

**Success Criteria:**
- Timeline plays on scroll (scrubbing)
- Section pins during animation
- All 5 stages visible and smooth
- Works on desktop (mobile: simplified)

---

- S7 Test in Chrome DevTools MCP

**Description:** Validate page in Chrome DevTools using MCP tools - check console, performance, visual appearance

**Tasks:**
- Start dev server (npm run dev)
- Navigate to localhost:8080/studios-engine
- Take viewport screenshots (scroll through page)
- Check console for errors/warnings
- Monitor performance (60fps target)
- Test scroll animations work smoothly

**Files:** None (testing only)

**Time Estimate:** 15 minutes

**Success Criteria:**
- Zero console errors
- Zero React warnings
- 60fps scroll performance
- Dark theme looks sophisticated
- GSAP animations working

---

- S8 Run Quality Gates

**Description:** Execute lint, test (if added), and build commands to ensure code quality

**Tasks:**
- Run npm run lint (fix any issues)
- Run npm run build (ensure production build succeeds)
- Check for TypeScript errors
- Verify bundle size impact acceptable

**Files:** Multiple (any linting fixes needed)

**Time Estimate:** 10 minutes

**Success Criteria:**
- npm run lint: ✅ No errors
- npm run build: ✅ Success
- TypeScript: ✅ No errors
- Bundle size: Acceptable increase (~73kb for GSAP+Lenis)

---

- S9 Update Documentation

**Description:** Update _MEMO.md with rework completion, decisions, and next steps

**Tasks:**
- Document dark theme color decisions
- Document GSAP patterns used
- Add screenshots/validation notes
- Update Next Steps section
- Archive failed first attempt notes

**Files:**
- codex/_MEMO.md

**Time Estimate:** 10 minutes

**Success Criteria:**
- Rework completion documented
- GSAP patterns recorded for future use
- Lessons learned captured
- Next steps clear

---

## Impact Set

**Files Created:**
- src/components/briefing/BriefingTransformationTimeline.tsx

**Files Modified:**
- src/pages/BriefingEngine.tsx (hero + section backgrounds + timeline integration)
- src/components/briefing/BriefingCTA.tsx (dark color palette)
- src/components/briefing/StoryboardDivider.tsx (dark color palette)
- src/components/briefing/VisualStylesGallery.tsx (GSAP ScrollTrigger)
- codex/_MEMO.md (documentation update)

**Assets Used:**
- public/briefing-engine/visual-styles/ (9 images)
- public/briefing-engine/storyboard/ (6 frames)

**Dependencies:**
- GSAP (already installed)
- ScrollTrigger (already installed)
- Lenis (already installed)

---

## Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:8080)

# Quality Gates
npm run lint             # ESLint check
npm run build            # Production build + TypeScript check

# Chrome DevTools MCP
# Navigate to localhost:8080/studios-engine
# Take screenshots, check console, monitor performance
```

---

## Definition of Done

- [ ] RAG knowledge base queried for GSAP patterns (3+ queries)
- [ ] Hero section has deep black/indigo gradient (NOT bright)
- [ ] All pure black sections replaced with subtle dark gradients
- [ ] Color palette updated to dark indigo/cyan/fuchsia throughout
- [ ] GSAP ScrollTrigger animations implemented (gallery + timeline)
- [ ] Chrome DevTools validation complete (console, performance, screenshots)
- [ ] Quality gates pass (lint, build)
- [ ] _MEMO.md updated with rework documentation
- [ ] Unique Briefing Engine dark theme established (NOT copying Studios/Home)

---

## Constraints

1. **Must use RAG knowledge base first** - Query for GSAP patterns before implementing
2. **Must follow TDD approach** - Test each step in Chrome DevTools
3. **Must run quality gates** - Lint and build must pass
4. **Each page needs unique theme** - Don't copy Studios or Home wholesale
5. **Update _MEMO.md every major step** - Document decisions and progress

---

## Notes

**Theme Differentiation:**
- Home: Video + vignette (corporate AI)
- Studios: Orange/teal particles (cinematic film)
- Briefing: Indigo/purple transformation (AI intelligence)

**Performance Target:**
- 60fps scroll animations
- Smooth GSAP transitions
- No jank on modern devices

**Accessibility:**
- Respect prefers-reduced-motion
- Maintain WCAG AA contrast
- Keyboard navigation working

---

**Ready for /implement-guarded S1**
