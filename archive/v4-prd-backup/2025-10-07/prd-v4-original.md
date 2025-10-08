# Cre8tive AI Website - AI Briefing Engine Page Redesign PRD

**Version:** 1.0
**Created:** 2025-10-06
**Status:** Active Development
**Project Type:** Brownfield Enhancement - Major UI/UX Overhaul

---

## Intro Project Analysis and Context

### Analysis Source

**IDE-based fresh analysis** combined with comprehensive PLAN.md documentation (2000+ lines) detailing:
- Existing page audit and issues
- Complete visual design direction
- Animation strategy and technical specifications
- Asset inventory (9 visual styles + 6 storyboard frames)
- Implementation roadmap with 10 phases

### Current Project State

**Existing System:**
- **Project:** Cre8tive AI Website - B2B Marketing Site
- **Tech Stack:** React 18.3.1 + TypeScript 5.5.3 + Vite 5.4.1
- **Current Page:** Studios Engine (`/studios-engine`)
- **Purpose:** Marketing website showcasing AI-powered video production and briefing tools
- **Deployment:** GitHub Pages static site (cre8tive.ai)

**Current Studios Engine Page Issues:**
1. ❌ Generic blue gradient (doesn't reflect product identity)
2. ❌ 8 Visual Styles NOT showcased (buried or missing - THE key differentiator)
3. ❌ "How It Works" section too generic (not briefing-workflow specific)
4. ❌ Benefits section overcrowded (8 cards - too many)
5. ❌ Outdated product name ("Cre8tive AI Studios AI Engine" / "Ad Manager")
6. ❌ No storyboard/briefing visual motifs
7. ❌ Missing transformation emphasis (brief → storyboard speed)
8. ❌ No GSAP animations (static page, not premium feel)

**What Currently Works:**
- ✅ Responsive design (375px - 1920px)
- ✅ Production build passing
- ✅ Navigation structure
- ✅ Core component patterns (Framer Motion animations)

### Available Documentation Analysis

**Existing Documentation:**
- ✅ **Tech Stack Documentation**: README.md, ARCHITECTURE.md, CONTRIBUTING.md (comprehensive)
- ✅ **Source Tree/Architecture**: Documented in ARCHITECTURE.md
- ✅ **Coding Standards**: Tailwind + TypeScript patterns in CONTRIBUTING.md
- ⚠️ **Technical Debt Documentation**: "Zero tests exist" noted in ARCHITECTURE.md
- ✅ **UI Guidelines**: Framer Motion patterns, glassmorphism, magnetic interactions
- ✅ **PLAN.md**: 2000+ line comprehensive redesign plan with complete specifications

**Documentation Quality:** Excellent - comprehensive technical documentation exists, no need for document-project task.

### Enhancement Scope Definition

**Enhancement Type:**
- ✅ **Major Feature Modification** (redesigning entire page structure)
- ✅ **UI/UX Overhaul** (complete visual redesign with unique theme)
- ✅ **Technology Stack Upgrade** (adding GSAP + Lenis for premium animations)
- ✅ **New Feature Addition** (8 Visual Styles Gallery - currently missing)

**Enhancement Description:**

Transform the existing Studios Engine page into a flagship AI Briefing Engine product page that prominently showcases 8 visual styles (THE key differentiator), implements premium GSAP + Lenis animations, and establishes a unique dark indigo/cyan/fuchsia cyberpunk creative studio aesthetic distinct from Homepage (blue/cyan) and Studios (orange/teal) pages.

**Impact Assessment:**
- ✅ **Significant Impact** (substantial existing code changes required)
- Component-level changes: 12 new components, 3 components to remove, page assembly restructure
- Animation framework addition: GSAP + Lenis (+73kb bundle impact)
- Asset integration: 9 visual style images (2.2MB) + 7 storyboard frames (1.7MB)
- Color palette overhaul across all sections
- Route preserved (`/studios-engine`) for SEO continuity

### Goals and Background Context

**Goals:**
- Showcase 8 Visual Styles as the PRIMARY differentiator (currently buried/missing)
- Establish unique dark indigo/cyan/fuchsia brand identity for Briefing Engine (not copying Studios/Homepage)
- Implement premium GSAP + Lenis animations for flagship product feel
- Emphasize briefing workflow with professional document/storyboard aesthetic
- Show transformation speed (brief → storyboard in minutes not weeks)
- Create seamless Studios handoff connection (product ecosystem integration)
- Achieve 60fps animation performance with accessibility compliance (prefers-reduced-motion)
- Position as flagship product page (Apple product launch quality)

**Background Context:**

The AI Briefing Engine is Cre8tive AI's flagship briefing-to-storyboard transformation platform, enabling agencies and brands to go from brand brief to professional storyboard PDF in minutes. The product's MAJOR differentiator is 8 distinct visual styles (Minimalistic, Bold & Vibrant, Cinematic, Playful, Futuristic, Retro, Documentary, Abstract) - currently this is not prominently featured on the page.

User feedback from first implementation attempt (Phase 1) identified critical issues:
- Colors TOO BRIGHT (should be deep dark indigo/purple, not bright blue-purple)
- Pure black sections (should have subtle dark gradients)
- NO GSAP animations implemented (violated plan)
- Almost copied Studios page (each page needs unique mini-theme)

This PRD defines the corrected approach: dark, sophisticated, cyberpunk creative studio aesthetic with tech/futuristic + creative/artistic hybrid elements, Canvas particle effects for AI processing, and comprehensive GSAP ScrollTrigger timelines.

**Change Log:**

| Change | Date | Version | Description | Author |
|--------|------|---------|-------------|--------|
| Initial PRD Creation | 2025-10-06 | 1.0 | Created brownfield PRD from comprehensive PLAN.md (2000+ lines) | PM Agent |
| Phase 1 Restart | 2025-10-05 | 0.2 | Restarted after first attempt failed (too bright, no animations) | Dev Team |
| Phase 1 Initial | 2025-10-05 | 0.1 | First attempt with GSAP/Lenis foundation | Dev Team |

---

## Requirements

### Functional Requirements

**FR1**: The existing Studios Engine page SHALL be redesigned as "AI Briefing Engine" page while preserving the `/studios-engine` route for SEO continuity.

**FR2**: The page SHALL prominently showcase 8 Visual Styles (Minimalistic, Bold & Vibrant, Cinematic, Playful, Futuristic, Retro, Documentary, Abstract) in a 3×3 grid gallery as THE primary product differentiator.

**FR3**: Each Visual Style card SHALL display actual visual style assets (9 webp images totaling 2.2MB) with hover interactions revealing style name and description.

**FR4**: The page SHALL implement a 15-second scroll-driven GSAP timeline showing briefing → storyboard transformation through 5 stages:
- Stage 1 (0-3s): Form fields animate in
- Stage 2 (3-6s): AI processing with Canvas particle swirl (60-100 particles)
- Stage 3 (6-9s): Style selection with burst animation
- Stage 4 (9-15s): Storyboard assembly (6 panels fly in, frames draw)
- Stage 5 (15-16s): Studios handoff (gradient shift indigo → orange)

**FR5**: The page SHALL use unique dark indigo/cyan/fuchsia color palette (NOT bright purple/green, NOT Studios orange/teal, NOT Homepage blue):
- Indigo: #4F46E5 (AI intelligence)
- Cyan: #0891B2 (tech processing)
- Fuchsia: #C026D3 (creative energy)
- Orange: #EA580C (brand accent, Studios handoff)
- Holographic accents: #818CF8, #22D3EE, #34D399

**FR6**: The page SHALL implement Lenis smooth scroll wrapper for premium momentum-based scrolling experience.

**FR7**: The page SHALL include StoryboardDivider components with scene markers (S1, S2, S3) between major sections reflecting briefing/storyboard aesthetic.

**FR8**: The page SHALL implement BriefingProcessFlow component showing 4-step workflow (Define Brand → Choose Style → AI Processing → Review & Handoff) with color-coded steps and animated connectors.

**FR9**: The page SHALL display AudienceBenefits component with split layout (Agencies | Brands) showing 3 benefits each (total 6 cards, reduced from current 8).

**FR10**: The page SHALL integrate 7 storyboard mockup assets (SB-Mockup.webp full storyboard + Frame1-6 individual panels totaling 1.7MB) in storyboard assembly animation.

**FR11**: The page SHALL maintain responsive design across all breakpoints (375px mobile - 1920px desktop) without breaking existing responsive patterns.

**FR12**: Navigation SHALL be updated to "AI Briefing Engine" with purple/pink gradient (already implemented in Phase 1).

### Non-Functional Requirements

**NFR1**: Animation performance SHALL maintain 60fps on modern devices (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+) using GPU-accelerated transforms only (translate, scale, opacity).

**NFR2**: Bundle size impact SHALL NOT exceed +100kb total:
- GSAP + ScrollTrigger: ~66kb
- Lenis: ~7kb
- Total new framework weight: ~73kb (acceptable for flagship product)
- PixiJS/WebGL: REJECTED (400kb - too heavy)

**NFR3**: Production build SHALL succeed with TypeScript compilation (relaxed mode: noImplicitAny: false) and ESLint validation (errors block, warnings ok).

**NFR4**: Page load performance SHALL maintain Lighthouse Performance score of 80+ (acceptable trade-off from current 85-90 for premium animations).

**NFR5**: Accessibility SHALL comply with WCAG AA standards:
- prefers-reduced-motion: Instant transitions, no animations
- Keyboard navigation: All interactive elements accessible
- Color contrast: Indigo/cyan/fuchsia on dark backgrounds verified
- ARIA labels: Visual styles, process steps, benefits properly labeled

**NFR6**: Canvas particle system SHALL render 60-100 particles at 60fps with graceful fallback to static gradient glow on low-end devices.

**NFR7**: Visual asset loading SHALL use lazy-loading strategy for below-fold images (storyboard frames, style gallery) to optimize initial page load.

**NFR8**: GSAP ScrollTrigger pinning SHALL be disabled on mobile (< 768px) if animation performance drops below 30fps.

**NFR9**: Implementation timeline SHALL NOT exceed 2.5 hours total (per PLAN.md estimates):
- Color palette update: ~10 minutes
- Visual asset integration: ~15 minutes
- Animation components (5): ~60-90 minutes
- Testing & polish: ~20 minutes

**NFR10**: All existing Framer Motion animations SHALL remain functional (GSAP additions are supplemental, not replacements) to avoid breaking hover states and simple transitions.

### Compatibility Requirements

**CR1: Existing Component Library Compatibility**
New briefing components SHALL follow established Shadcn/UI and custom component patterns (CinemaCard, FilmStripDivider, ContactCTA, StudiosHero) for visual consistency across the site.

**CR2: Tailwind CSS System Compatibility**
All new styles SHALL use existing Tailwind configuration (tailwind.config.ts) without adding new custom colors or breaking current utility classes. Dark indigo/cyan/fuchsia palette SHALL be defined via CSS custom properties or inline Tailwind utilities.

**CR3: React Router Compatibility**
Route structure SHALL preserve `/studios-engine` path for SEO continuity. Navigation updates SHALL maintain existing Link components and routing behavior without breaking other pages.

**CR4: Build System Compatibility**
GSAP + Lenis integration SHALL NOT require Vite configuration changes beyond package installation. Code splitting SHALL use existing lazy-loading patterns (`React.lazy`) for new animation components.

**CR5: Responsive Design System Compatibility**
Breakpoint behavior SHALL match existing mobile-first responsive patterns (375px, 768px, 1024px, 1920px) without introducing new breakpoint logic or conflicting media queries.

**CR6: Animation Framework Compatibility**
GSAP SHALL coexist with existing Framer Motion library without conflicts. Simple hover states and transitions SHALL continue using Framer Motion; complex scroll-driven timelines SHALL use GSAP ScrollTrigger.

---

## User Interface Enhancement Goals

### Integration with Existing UI

**Design System Alignment:**
- Maintain glassmorphism patterns (backdrop-filter: blur(20px), bg-opacity-10)
- Preserve magnetic button interactions from existing CTA components
- Follow established heading typography (font-black, tracking-tighter, leading-none)
- Use consistent card elevation patterns (shadow-xl, hover:shadow-2xl transitions)
- Respect existing spacing rhythm (Tailwind gap-8, gap-16, gap-24 patterns)

**Component Library Consistency:**
- Reuse FadeIn/ScrollFade animation wrappers for non-GSAP sections
- Maintain ContactCTA component patterns for BriefingCTA consistency
- Follow CinemaCard visual aesthetic for storyboard frame cards
- Preserve Navigation.tsx gradient link patterns for hero CTAs

**Visual Differentiation Strategy:**
- **Homepage:** Blue/Cyan/Teal (#3B82F6, #06B6D4, #14B8A6) - tech/AI focus
- **Studios:** Orange/Teal/Coral (#F97316, #14B8A6, #FB7185) - cinematic film
- **Briefing Engine:** Dark Indigo/Cyan/Fuchsia (#4F46E5, #0891B2, #C026D3) - cyberpunk creative studio

### Modified/New Screens and Views

**Page Structure Changes:**

**REMOVE:**
1. ❌ Generic "Concept to Creation" section (5 cards with generic icons)
2. ❌ Generic "How It Works" section (blue/cyan colors, not briefing-specific)
3. ❌ Overcrowded "Benefits for Everyone" (8 cards - too many)

**ADD (12 New Components):**
1. ✨ **BriefingHero** - Split-screen hero with enhanced messaging
2. ✨ **BriefToStoryboardAnimation** - 15s scroll-driven transformation timeline
3. ✨ **VisualStylesGallery** - 8 visual styles showcase (3×3 grid) **(CRITICAL)**
4. ✨ **StyleCard** - Individual style preview with hover overlay
5. ✨ **BriefingProcessFlow** - 4-step workflow visualization
6. ✨ **ProcessStepCard** - Color-coded workflow steps
7. ✨ **WorkflowTransformation** - Speed comparison (traditional vs AI)
8. ✨ **TransformationValueCard** - 4 value propositions
9. ✨ **AudienceBenefits** - Agencies vs Brands (6 cards, reduced from 8)
10. ✨ **BenefitCard** - Storyboard frame aesthetic
11. ✨ **StoryboardDivider** - Section dividers with scene markers
12. ✨ **BriefingCTA** - Briefing-specific call to action (already exists, will update colors)

**Final Page Assembly (11 Sections):**
1. BriefingHero
2. StoryboardDivider
3. VisualStylesGallery ⭐ (NEW - PRIMARY FEATURE)
4. StoryboardDivider
5. BriefingProcessFlow
6. StoryboardDivider
7. WorkflowTransformation
8. StoryboardDivider
9. AudienceBenefits
10. StoryboardDivider
11. BriefingCTA

### UI Consistency Requirements

**Typography Consistency:**
- Page H1: `text-7xl font-black tracking-tighter leading-none` (matches Studios)
- Section H2: `text-5xl font-bold` (site-wide standard)
- Body text: `text-lg text-gray-300` (consistent contrast ratios)

**Interaction Consistency:**
- Hover lift: `hover:-translate-y-2 transition-transform duration-300` (site standard)
- Card borders: `border border-white/10` (glassmorphism pattern)
- Button CTAs: `px-8 py-4 rounded-full` (established CTA pattern)

**Animation Consistency:**
- Scroll reveals: FadeIn wrapper (< 500ms fade-in, stagger 100ms)
- Hover states: Framer Motion (scale 1.05, duration 200ms)
- Section transitions: Smooth scroll (Lenis lerp: 0.1, duration: 1.5s)

**Spacing Consistency:**
- Section padding: `py-24 px-6` (desktop), `py-16 px-4` (mobile)
- Container max-width: `max-w-7xl mx-auto` (site-wide)
- Grid gaps: `gap-8` (cards), `gap-16` (sections)

---

## Technical Constraints and Integration Requirements

### Existing Technology Stack

**Languages:**
- TypeScript 5.5.3 (relaxed mode: noImplicitAny: false, strictNullChecks: false)
- ES2015+ JavaScript (no IE11 support)
- CSS (Tailwind utility-first approach)

**Frameworks:**
- React 18.3.1 (functional components with hooks)
- Vite 5.4.1 (build tool, dev server)
- React Router 6.26.2 (client-side routing)
- Tailwind CSS 3.4.11 (utility-first styling)
- Framer Motion 12.4.2 (existing animation library)
- **NEW:** GSAP 3.x + ScrollTrigger plugin (+66kb)
- **NEW:** Lenis smooth scroll (+7kb) - upgraded from deprecated @studio-freight/react-lenis

**Database:**
N/A (static site, no backend)

**Infrastructure:**
- GitHub Pages (static site hosting)
- GitHub Actions (CI/CD pipeline)
- Vercel Analytics (performance monitoring)
- Google Tag Manager (event tracking)

**External Dependencies:**
- getform.io (form submissions)
- Cal.com (appointment booking)
- Vimeo (video hosting)
- ElevenLabs (conversational AI demos)
- Spline (3D interactive content - 4MB, already heavy)

### Integration Approach

**Database Integration Strategy:**
N/A - Static site, no database

**API Integration Strategy:**
No new API integrations required. Existing form endpoints (getform.io, Cal.com) remain unchanged.

**Frontend Integration Strategy:**

**GSAP + Lenis Integration:**
```bash
npm install gsap @gsap/react lenis
```

**Component Integration Pattern:**
```tsx
// Page-level Lenis wrapper
import { ReactLenis } from 'lenis/react';

export function BriefingEngine() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {/* Page content */}
    </ReactLenis>
  );
}

// Component-level GSAP timeline
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BriefToStoryboardAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
      }
    });

    tl.from(".brief-form", { opacity: 0, y: 50, duration: 1 })
      .to(".brief-form", { scale: 0.8, opacity: 0.5, duration: 1 })
      .from(".storyboard-panels", { opacity: 0, stagger: 0.2 });
  });

  return (/* JSX */);
}
```

**Asset Loading Strategy:**
- Visual styles: Lazy-load via Intersection Observer (below fold)
- Storyboard frames: Preload Frame1-3, lazy-load Frame4-6
- Particle Canvas: Render on scroll reveal, destroy on scroll out

**Testing Integration Strategy:**

**Current Reality:** Zero tests exist (documented technical debt)

**Manual Validation Required:**
- Browser testing: Chrome, Firefox, Safari, Edge (latest versions)
- Device testing: iPhone 12+, Android flagship, desktop 1920px, tablet 768px
- Visual QA: Chrome DevTools screenshots, Lighthouse audit
- Accessibility: axe DevTools scan, keyboard navigation check
- Performance: Chrome DevTools Performance tab (60fps target)

**Future Testing (Post-Infrastructure):**
- Vitest + React Testing Library (unit/component tests)
- Playwright (E2E critical paths)
- Percy/Chromatic (visual regression)

### Code Organization and Standards

**File Structure Approach:**

**New Components Location:**
```
src/components/briefing/
├── BriefingHero.tsx
├── BriefToStoryboardAnimation.tsx
├── VisualStylesGallery.tsx
├── StyleCard.tsx
├── BriefingProcessFlow.tsx
├── ProcessStepCard.tsx
├── WorkflowTransformation.tsx
├── TransformationValueCard.tsx
├── AudienceBenefits.tsx
├── BenefitCard.tsx
├── StoryboardDivider.tsx
└── BriefingCTA.tsx
```

**Page Location:**
```
src/pages/BriefingEngine.tsx (renamed from StudiosEngine.tsx)
```

**Naming Conventions:**
- Components: PascalCase (BriefingHero.tsx)
- Utilities: camelCase (formatDate.ts)
- Constants: SCREAMING_SNAKE_CASE (export const BRIEFING_COLORS = {...})
- Props interfaces: ComponentNameProps (interface BriefingHeroProps {})

**Coding Standards:**

**TypeScript Pragmatism:**
- Fix type errors (blocks build)
- Allow implicit `any` (noImplicitAny: false - project standard)
- Use explicit types for props, avoid for internal vars if obvious
- Interface over type for component props

**Tailwind Best Practices:**
- Use utility classes over custom CSS
- Extract repeated patterns to components, not @apply
- Responsive: mobile-first (base → md: → lg: → xl:)
- Dark mode: All sections use dark backgrounds (no light mode toggle)

**Component Patterns:**
- Functional components with hooks (no class components)
- Props destructuring: `({ title, description }: BriefingHeroProps)`
- Early returns for conditional rendering
- Extract complex logic to custom hooks if > 20 lines

**Documentation Standards:**
- JSDoc for complex props: `/** Brief description */`
- Inline comments for non-obvious logic: `// Reason: Canvas particle physics`
- Update README.md commands section if new scripts added
- Update ARCHITECTURE.md if new framework patterns introduced

### Deployment and Operations

**Build Process Integration:**

**Existing Build Command:**
```bash
npm run build  # TypeScript check + Vite build
```

**No Build Changes Required:**
- GSAP/Lenis: Client-side libraries, no build config changes
- Assets: Copy to public/briefing-engine/ (already done in Phase 1)
- Code splitting: Automatic via Vite dynamic imports

**Bundle Analysis:**
```bash
npm run build -- --mode=analyze  # If needed for bundle inspection
```

**Deployment Strategy:**

**Automated (GitHub Actions):**
```yaml
# .github/workflows/deploy.yml (existing, no changes)
- Push to master → Trigger workflow
- npm install → npm run build → Deploy to gh-pages branch
- GitHub Pages serves from gh-pages
- Live at https://cre8tive.ai
```

**Manual (Emergency):**
```bash
npm run build
npm run deploy  # Deploys to gh-pages
```

**Monitoring and Logging:**

**Analytics:**
- Vercel Analytics: Page views, performance metrics
- Google Tag Manager: CTA clicks, scroll depth, gallery interactions

**Performance Monitoring:**
- Lighthouse CI: Performance score tracking (target 80+)
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Error Tracking:**
- Browser console errors (manual QA)
- No Sentry/error service configured (future consideration)

**Configuration Management:**

**Environment Variables:**
N/A - Static site, no secrets

**Feature Flags:**
N/A - No feature flag system

**Config Files:**
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Theme configuration
- `tsconfig.json` - TypeScript configuration

### Risk Assessment and Mitigation

**Technical Risks:**

**Risk 1: GSAP Bundle Size Impact**
- Impact: +66kb could slow initial page load
- Mitigation: Code split BriefingEngine page, lazy-load GSAP components
- Rollback: Remove GSAP, fall back to Framer Motion timelines

**Risk 2: Canvas Particle Performance on Low-End Devices**
- Impact: < 30fps on older devices, janky experience
- Mitigation: Detect device capability, show static gradient fallback if FPS drops
- Rollback: Remove particles entirely, use CSS gradient glow

**Risk 3: ScrollTrigger Pinning Jank on Mobile**
- Impact: Scroll stuttering on touch devices
- Mitigation: Disable pinning on < 768px, use simple scroll reveals
- Rollback: Remove ScrollTrigger, use Intersection Observer

**Integration Risks:**

**Risk 1: Lenis Smooth Scroll Conflicts with React Router**
- Impact: Route changes break smooth scroll wrapper
- Mitigation: Test route transitions thoroughly, disable Lenis on navigation if conflicts
- Rollback: Remove Lenis, accept native scroll behavior

**Risk 2: Asset Loading Delays (3.9MB Total Images)**
- Impact: Slow page load on 3G connections
- Mitigation: Lazy-load below-fold images, use blur placeholders, consider WebP optimization
- Rollback: Reduce image quality, remove some storyboard frames

**Risk 3: TypeScript Compilation Errors from GSAP Types**
- Impact: Build fails due to type mismatches
- Mitigation: Use `@ts-ignore` sparingly, add GSAP types to tsconfig
- Rollback: Remove type safety for GSAP code blocks if blocking

**Deployment Risks:**

**Risk 1: Production Build Failure Due to Large Bundle**
- Impact: Deploy blocked, site down
- Mitigation: Test build locally before push, monitor bundle warnings (1000kb threshold)
- Rollback: Revert commit, deploy previous working build

**Risk 2: SEO Impact from Route Preservation**
- Impact: Confusing route name (/studios-engine for Briefing Engine)
- Mitigation: Update SEO meta tags to clarify, monitor analytics for bounce rate
- Rollback: Change route to /briefing-engine, set up 301 redirect in GitHub Pages (limited)

**Risk 3: Browser Compatibility Issues (Modern APIs)**
- Impact: Broken experience on older browsers
- Mitigation: Test on Chrome 100+, Firefox 100+, Safari 15+, show warning on older versions
- Rollback: Simplify animations, remove Canvas features

**Mitigation Strategies:**

**Performance Budgets:**
- Initial bundle: < 900kb (current 806kb + 73kb = 879kb ✓)
- Image assets: < 4MB total (3.9MB ✓)
- Animation frame rate: 60fps target, 30fps minimum acceptable

**Testing Strategy:**
- Manual QA on 3 browsers × 2 devices (desktop/mobile) = 6 test combinations
- Lighthouse audit: Performance 80+, Accessibility 90+, Best Practices 90+
- Visual regression: Screenshots before/after for each section

**Rollback Plan:**
1. Revert last commit: `git revert HEAD && git push`
2. Emergency deploy: `git checkout master~1 && npm run deploy`
3. Hotfix branch: `git checkout -b hotfix/briefing-revert`

---

## Epic and Story Structure

### Epic Approach

**Epic Structure Decision:** **Single Comprehensive Epic**

**Rationale:**
- Brownfield enhancement with tightly coupled components (all relate to single page redesign)
- Shared visual identity (color palette, animation framework) across all new components
- Sequential dependencies (hero → gallery → process → benefits → CTA logical flow)
- Single deployment target (BriefingEngine.tsx page assembly)
- Manageable scope (~2.5 hours implementation estimate per PLAN.md)
- Clear rollback boundary (entire epic can be reverted as single unit if issues arise)

**Alternative Rejected:** Multiple epics (would fragment related work, create artificial boundaries)

---

## Epic 1: AI Briefing Engine Page Redesign & Premium Animation Implementation

**Epic Goal:**

Transform the existing Studios Engine page into a flagship AI Briefing Engine product page that prominently showcases 8 visual styles as THE key differentiator, implements premium GSAP + Lenis animations achieving 60fps performance, and establishes a unique dark indigo/cyan/fuchsia cyberpunk creative studio aesthetic distinct from Homepage and Studios pages, while maintaining responsive design across all breakpoints and ensuring WCAG AA accessibility compliance.

**Integration Requirements:**

- Preserve existing `/studios-engine` route for SEO continuity
- Maintain compatibility with Shadcn/UI components and Tailwind configuration
- Coexist with Framer Motion library without conflicts (GSAP supplemental, not replacement)
- Integrate 16 total asset files (9 visual styles + 7 storyboard frames = 3.9MB) via lazy-loading strategy
- Follow established responsive breakpoint patterns (375px, 768px, 1024px, 1920px)
- Ensure production build succeeds with TypeScript relaxed mode and ESLint validation
- Maintain existing Navigation.tsx structure while updating link text to "AI Briefing Engine"

---

### Story 1.1: Install GSAP + Lenis Animation Framework

**As a** developer,
**I want** to install and configure GSAP with ScrollTrigger and Lenis smooth scroll,
**so that** the animation foundation is in place for premium scroll-driven timelines and smooth scrolling experience.

**Acceptance Criteria:**
1. GSAP core library installed via `npm install gsap @gsap/react`
2. Lenis smooth scroll installed via `npm install lenis` (upgraded from deprecated @studio-freight version)
3. ScrollTrigger plugin registered in test component to verify functionality
4. Lenis wrapper created and tested on sample page to confirm smooth scrolling works
5. Production build succeeds with new dependencies (no TypeScript or bundling errors)
6. Bundle size increase verified: GSAP (~66kb) + Lenis (~7kb) = ~73kb total (within acceptable range)
7. Documentation updated: Add GSAP + Lenis to ARCHITECTURE.md animation stack section

**Integration Verification:**
- **IV1**: Existing Framer Motion animations still function (home page, studios page hover states)
- **IV2**: React Router navigation not broken by Lenis wrapper (test route changes)
- **IV3**: Build time not significantly increased (< 10% slower acceptable)

---

### Story 1.2: Update Color Palette and Create Color Constants

**As a** designer,
**I want** to replace bright purple/green colors with dark indigo/cyan/fuchsia palette throughout the Briefing Engine page,
**so that** the page has a unique cyberpunk creative studio aesthetic distinct from Homepage (blue) and Studios (orange).

**Acceptance Criteria:**
1. Color constants defined in new file `src/components/briefing/briefingColors.ts`:
   - Indigo: #4F46E5 (AI intelligence)
   - Cyan: #0891B2 (tech processing)
   - Fuchsia: #C026D3 (creative energy)
   - Orange: #EA580C (brand accent, Studios handoff)
   - Holographic accents: #818CF8, #22D3EE, #34D399
2. Existing BriefingCTA component updated from purple/green to indigo/fuchsia gradients
3. Existing StoryboardDivider component updated from bright colors to dark indigo/cyan accents
4. Hero section gradient updated to `from-indigo-600 via-fuchsia-600 to-indigo-700` (subtle, dark)
5. CTA button colors updated: Primary CTA uses cyan (#0891B2), secondary uses indigo outline
6. Visual QA screenshots captured showing before/after color changes in Chrome DevTools
7. Accessibility: WCAG AA color contrast verified for indigo/cyan/fuchsia on dark backgrounds (use WebAIM contrast checker)

**Integration Verification:**
- **IV1**: Navigation "AI Briefing Engine" link still has correct gradient (purple/pink from Phase 1)
- **IV2**: Other pages (Homepage, Studios, Agents) not affected by color changes (scoped to Briefing components only)
- **IV3**: Dark mode consistency maintained (all sections use dark backgrounds per site standard)

---

### Story 1.3: Integrate 9 Visual Style Assets into Gallery

**As a** product manager,
**I want** the 8 visual styles prominently displayed in an interactive gallery,
**so that** visitors immediately see the key product differentiator that was previously buried.

**Acceptance Criteria:**
1. 9 visual style webp images (2.2MB total) moved to `public/briefing-engine/visual-styles/`:
   - Minimalist.webp, BoldVibrant.webp, CinematicDramatic.webp
   - Playfulanimated.webp, Futuristic.webp, RetroVintage.webp
   - DocumentaryRealistic.webp, ArtisticAbstract.webp, 2dVector.webp
2. VisualStylesGallery component created with 3×3 grid layout (9 cards)
3. StyleCard component displays image with hover overlay showing:
   - Style name (e.g., "Minimalistic & Modern")
   - Brief description (1-2 sentences)
   - Hover state: scale 1.05, show dark gradient overlay with text
4. Gallery section header: "Choose Your Creative Style" (H2, indigo accent)
5. Subheader: "8 Stunning Visual Styles to Bring Your Storyboard to Life"
6. Lazy-loading implemented: Images load only when scrolling to gallery section (Intersection Observer)
7. Responsive layout: 3×3 desktop (1024px+), 2×2 tablet (768px), 1 column mobile (375px)
8. Framer Motion stagger animation: Cards fade in sequentially (100ms delay each)

**Integration Verification:**
- **IV1**: Page load performance not degraded by 2.2MB images (Lighthouse Performance 80+ maintained)
- **IV2**: Gallery images cached by browser after first load (verify in Network tab)
- **IV3**: Hover interactions don't conflict with existing card hover patterns on other pages

---

### Story 1.4: Create StoryboardDivider Components with Scene Markers

**As a** designer,
**I want** visual dividers between sections that reinforce the storyboard/briefing aesthetic,
**so that** the page feels cohesive with the product's core purpose.

**Acceptance Criteria:**
1. StoryboardDivider component created with storyboard panel frame aesthetic:
   - Row of 3 small rectangular outlines (aspect ratio 16:9)
   - Scene markers: "S1", "S2", "S3" inside frames
   - Border color: indigo/cyan gradient (subtle, not bright)
   - Width: max-w-2xl centered
2. Divider inserted between major sections (5 total):
   - After Hero → Before VisualStylesGallery
   - After VisualStylesGallery → Before BriefingProcessFlow
   - After BriefingProcessFlow → Before WorkflowTransformation
   - After WorkflowTransformation → Before AudienceBenefits
   - After AudienceBenefits → Before BriefingCTA
3. Responsive behavior: 3 frames desktop, 2 frames tablet, 1 frame mobile
4. FadeIn animation wrapper: Divider fades in when scrolling to section
5. Scene markers rotate through S1-S6 across page (not always S1-S3)
6. Component accepts props: `sceneNumbers={[1, 2, 3]}` for customization

**Integration Verification:**
- **IV1**: Dividers don't disrupt page scroll flow (no layout shift)
- **IV2**: Spacing between sections maintained (py-24 above/below divider)
- **IV3**: Visual consistency with FilmStripDivider on Studios page (similar aesthetic but unique implementation)

---

### Story 1.5: Build BriefingProcessFlow 4-Step Workflow Visualization

**As a** visitor,
**I want** to understand the briefing workflow in 4 clear steps,
**so that** I know how the platform transforms my brief into a storyboard.

**Acceptance Criteria:**
1. BriefingProcessFlow component created with horizontal timeline layout (desktop)
2. ProcessStepCard component displays 4 color-coded steps:
   - **Step 1: Define Your Brand** (cyan accent, checklist icon)
     - Subtitle: "7 brief inputs with checkboxes"
   - **Step 2: Choose Your Visual Style** (fuchsia accent, palette icon)
     - Subtitle: "Select from 8 professional styles"
   - **Step 3: AI Generates Your Storyboard** (indigo accent, AI sparkles icon)
     - Subtitle: "Synopsis + storyboard creation in minutes"
   - **Step 4: Review & Handoff to Studios** (orange accent, PDF icon)
     - Subtitle: "PDF delivery + production-ready handoff"
3. Workflow connectors: Dotted lines with arrows connecting steps
4. Responsive: Horizontal desktop (1024px+), vertical stack mobile (< 1024px)
5. GSAP stagger animation: Steps reveal sequentially as user scrolls to section
6. Hover state: Each step card lifts with glow effect in accent color
7. Icons: Use Lucide React icons (CheckSquare, Palette, Sparkles, FileText)

**Integration Verification:**
- **IV1**: Step cards follow existing card elevation patterns (shadow-xl, backdrop-blur)
- **IV2**: Color-coded accents distinct but harmonious with overall palette
- **IV3**: Connector lines render correctly on all browsers (SVG paths tested)

---

### Story 1.6: Implement Canvas Particle AI Processing Animation

**As a** product showcaser,
**I want** a premium AI processing visualization with particle effects,
**so that** visitors see the "AI thinking" in action during the transformation demo.

**Acceptance Criteria:**
1. AIProcessingVisual component created using Canvas API (NOT PixiJS):
   - 60-100 particles orbiting center point
   - Gradient colors: indigo → cyan → fuchsia
   - Orbital physics: centripetal force + random drift
   - Alpha fading based on distance from center
2. Canvas size: 800x600px (scales responsively to container)
3. Performance: 60fps target on modern devices (Chrome 100+, Firefox 100+, Safari 15+)
4. GPU acceleration: CSS `will-change: transform` on canvas element
5. Render loop: requestAnimationFrame-based (not setInterval)
6. Graceful fallback: If FPS drops below 30, switch to static gradient glow
7. Component lifecycle: Render on scroll reveal, destroy particles when scrolled out of view
8. Mobile optimization: Reduce particle count to 30 on < 768px for performance

**Integration Verification:**
- **IV1**: Canvas rendering doesn't block main thread (monitor Chrome DevTools Performance tab)
- **IV2**: Memory usage stable (no leaks after scroll in/out 10 times)
- **IV3**: Fallback gradient visually acceptable on low-end devices (test on older iPhone/Android)

---

### Story 1.7: Build 15-Second GSAP ScrollTrigger Transformation Timeline

**As a** visitor,
**I want** to see the briefing → storyboard transformation as I scroll,
**so that** I understand the platform's workflow through visual storytelling.

**Acceptance Criteria:**
1. BriefToStoryboardAnimation component created with GSAP timeline:
   - **Stage 1 (0-3s)**: Form fields animate in (7 input fields, staggered)
   - **Stage 2 (3-6s)**: AI processing (particle swirl from Story 1.6, holographic glow)
   - **Stage 3 (6-9s)**: Style selection (8 style cards → 1 selected → burst)
   - **Stage 4 (9-15s)**: Storyboard assembly (6 panels fly in, frames draw)
   - **Stage 5 (15-16s)**: Studios handoff (gradient shift indigo → orange)
2. ScrollTrigger configuration:
   - Trigger: `.transformation-container`
   - Start: `top top`
   - End: `bottom top`
   - Scrub: 1 (user controls pace by scrolling)
   - Pin: true (desktop only, disabled on < 768px)
3. Timeline uses GPU-accelerated transforms only (translate, scale, opacity)
4. Accessibility: prefers-reduced-motion CSS query disables animations
5. Mobile: ScrollTrigger pinning disabled, simple fade-in reveals instead
6. Component accepts props: `duration={15}` to customize timeline length
7. Visual assets: Uses real storyboard frames (Frame1-6) for assembly stage

**Integration Verification:**
- **IV1**: ScrollTrigger doesn't interfere with Lenis smooth scroll (test scrub behavior)
- **IV2**: Scroll position syncs correctly on browser resize (test window resize during animation)
- **IV3**: Timeline resets properly when scrolling back up (test reverse scroll)

---

### Story 1.8: Create WorkflowTransformation Speed Comparison Section

**As a** decision maker,
**I want** to see the speed advantage of AI Briefing Engine vs traditional process,
**so that** I understand the time-saving value proposition.

**Acceptance Criteria:**
1. WorkflowTransformation component created with split comparison:
   - **Traditional Process**: 2-4 weeks (lengthy timeline visual with multiple stages)
   - **AI Briefing Engine**: 2-5 minutes (fast timeline with single stage)
2. Visual timeline: Horizontal progress bars with time markers
3. TransformationValueCard component displays 4 value props:
   - **Speed to Market** (indigo, lightning icon): "Minutes not weeks"
   - **Brand Consistency** (cyan, shield icon): "Every ad aligns with brand"
   - **Creative Freedom** (fuchsia, palette icon): "8 styles to match any vision"
   - **Seamless Handoff** (orange, handshake icon): "Studios production ready"
4. Layout: Timeline comparison top, 4 value cards grid below (2×2 desktop, 1 column mobile)
5. GSAP reveal: Timeline draws in left-to-right, value cards stagger fade-in
6. Icons: Lucide React (Zap, Shield, Palette, Handshake)

**Integration Verification:**
- **IV1**: Timeline visuals don't overflow on small screens (test 375px width)
- **IV2**: Value card grid matches spacing patterns from existing benefit cards
- **IV3**: Speed comparison messaging aligns with SPEC.md value props

---

### Story 1.9: Build AudienceBenefits Split Layout (Agencies vs Brands)

**As a** visitor (agency or brand),
**I want** to see benefits specific to my user type,
**so that** I quickly identify how the platform serves my needs.

**Acceptance Criteria:**
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

**Integration Verification:**
- **IV1**: Benefit cards follow existing card patterns (glassmorphism, elevation)
- **IV2**: Film strip border visual consistent with Studios page FilmStripDivider
- **IV3**: Icon library usage consistent (Lucide React across all components)

---

### Story 1.10: Assemble Final Page and Implement Lenis Smooth Scroll

**As a** developer,
**I want** to assemble all new components into the BriefingEngine page with Lenis wrapper,
**so that** the complete redesigned page is live with premium smooth scrolling.

**Acceptance Criteria:**
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

**Integration Verification:**
- **IV1**: All existing site pages (Home, Studios, Agents, Contact) still functional
- **IV2**: React Router navigation to/from Briefing Engine works smoothly
- **IV3**: No console errors on page load or during scroll interactions

---

### Story 1.11: Accessibility & Performance Optimization

**As a** user with accessibility needs or slow connection,
**I want** the page to be accessible and performant,
**so that** I can experience the content regardless of device or ability.

**Acceptance Criteria:**
1. **Accessibility (WCAG AA):**
   - prefers-reduced-motion: All GSAP animations disabled, instant transitions only
   - Keyboard navigation: All interactive elements (CTAs, style cards) accessible via Tab key
   - ARIA labels: Visual styles gallery, process steps, benefit cards properly labeled
   - Color contrast: Indigo/cyan/fuchsia on dark backgrounds pass WebAIM contrast checker (4.5:1 minimum)
   - Alt text: All visual style images have descriptive alt text
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

**Integration Verification:**
- **IV1**: Accessibility improvements don't break existing A11y features on other pages
- **IV2**: Performance optimizations don't introduce new bugs (test lazy-loading edge cases)
- **IV3**: Responsive behavior matches existing site patterns (no new breakpoint logic)

---

### Story 1.12: Testing, Documentation & Deployment

**As a** team member,
**I want** comprehensive testing and documentation,
**so that** the redesign can be deployed confidently and maintained long-term.

**Acceptance Criteria:**
1. **Manual Testing Completed:**
   - Cross-browser: Chrome, Firefox, Safari, Edge (latest versions)
   - Device: Desktop 1920px, Tablet 768px, Mobile 375px
   - Visual QA: Screenshots captured for each section in Chrome DevTools
   - Animation QA: 60fps verified in Performance tab, no janky scrolling
   - Accessibility: axe DevTools scan passes, keyboard navigation tested
2. **Documentation Updated:**
   - README.md: Add "AI Briefing Engine Relaunch" to features list
   - ARCHITECTURE.md: Document GSAP + Lenis in animation stack section
   - CONTRIBUTING.md: Add guidelines for GSAP timeline creation (if needed)
   - PLAN.md: Mark all 10 phases as complete with completion date
3. **Git Workflow:**
   - All changes committed with conventional commit messages:
     - `feat: Add GSAP + Lenis animation framework`
     - `feat: Implement 8 visual styles gallery`
     - `feat: Build briefing process flow visualization`
     - `feat: Complete AI Briefing Engine redesign`
   - Pull request created: "AI Briefing Engine Page Redesign - Phase 1 & 2 Complete"
   - PR description includes:
     - Summary of changes (12 new components, color palette update, GSAP integration)
     - Screenshots (before/after comparison)
     - Testing checklist (browsers, devices, accessibility)
     - Performance metrics (Lighthouse scores, bundle size)
4. **Deployment:**
   - Merge to master triggers GitHub Actions workflow
   - Production build succeeds on CI/CD
   - Deployed to gh-pages branch
   - Live at https://cre8tive.ai/studios-engine (route preserved for SEO)
5. **Post-Deployment Verification:**
   - Live site tested: All animations working, no 404s on assets
   - Analytics: Vercel Analytics tracking pageviews
   - Google Tag Manager: Events firing for CTA clicks, gallery interactions

**Integration Verification:**
- **IV1**: Deployment doesn't affect other pages (Home, Studios, Agents all functional)
- **IV2**: No broken links across site (navigation, footer links verified)
- **IV3**: SEO meta tags rendering correctly (view page source, check Open Graph tags)

---

## Success Criteria

**This epic is considered successful when:**

✅ **Visual Impact Achieved:**
- Unique dark indigo/cyan/fuchsia identity established (distinct from Homepage blue/Studios orange)
- Tech/futuristic + creative/artistic hybrid feel is clear to visitors
- 8 Visual Styles prominently showcased in interactive gallery (NOT buried)
- Premium, smooth GSAP animations achieve Apple product page quality
- Holographic UI elements (glows, particle effects) feel cutting-edge

✅ **Content Clarity Delivered:**
- "AI Briefing Engine" branding clearly communicated across page and navigation
- Briefing → Storyboard transformation demonstrated through scroll-driven animation
- 8 styles recognized as THE differentiator by visitors
- Speed advantage emphasized (minutes not weeks) in comparison section
- Studios handoff connection seamless (gradient transition indigo → orange)

✅ **Technical Quality Maintained:**
- Production build succeeds with no TypeScript or ESLint errors
- 60fps animations on modern devices (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+)
- Responsive design functional across all breakpoints (375px - 1920px)
- No console errors on page load or during scroll interactions
- WCAG AA accessibility compliance verified (color contrast, keyboard nav, ARIA labels, prefers-reduced-motion)
- Lighthouse Performance score 80+ (acceptable trade-off from 85-90 for premium animations)

✅ **Business Impact Realized:**
- Page feels like flagship product (not generic SaaS landing page)
- Positions Briefing Engine as premium AI tool (cyberpunk creative studio aesthetic)
- Differentiates from competitors (8 styles showcase, GSAP animations, professional design)
- Generates qualified leads (CTA conversions tracked in analytics)
- Supports current marketing campaign (product messaging aligned with brand)

✅ **Integration Success:**
- All existing site pages (Home, Studios, Agents, Contact) remain functional
- React Router navigation works smoothly
- Framer Motion animations on other pages not affected
- Bundle size within acceptable range (879kb vendor bundle, < 900kb target)
- GitHub Actions deployment pipeline works without modifications

---

## Appendix: Asset Inventory

### Visual Style Assets (9 Files - 2.2MB Total)

**Location:** `public/briefing-engine/visual-styles/`

| File | Size | Description | Key Colors |
|------|------|-------------|------------|
| Minimalist.webp | 50kb | Clean white/gray phone on pedestal | Neutral/monochrome |
| BoldVibrant.webp | 149kb | Colorful geometric (yellow/red/blue) | High contrast |
| CinematicDramatic.webp | 172kb | Epic cosmic space scene | Silver/blue tones |
| Playfulanimated.webp | 123kb | 3D whimsical with hearts/clouds | Pastel pink/blue |
| Futuristic.webp | 489kb | Neon cyberpunk holographic platform | ✅ Indigo/cyan/fuchsia |
| RetroVintage.webp | 180kb | Warm golden retro on wood pedestal | Warm amber tones |
| DocumentaryRealistic.webp | 338kb | Realistic coffee shop scene | Natural/muted |
| ArtisticAbstract.webp | 631kb | Liquid marble swirls | ✅ Purple/cyan/gold |
| 2dVector.webp | 86kb | Flat geometric design style | Bold flat colors |

**Note:** Futuristic.webp and ArtisticAbstract.webp already feature indigo/cyan/fuchsia palette, validating color direction.

### Storyboard Mockup Assets (7 Files - 1.7MB Total)

**Location:** `public/briefing-engine/storyboard-mockup/`

| File | Size | Description | Usage |
|------|------|-------------|-------|
| SB-Mockup.webp | 280kb | Full 6-panel storyboard layout | Final reveal or hero image |
| Frame1.webp | 166kb | Scene 1: Evening harbour entrance | Fly-in animation stage 1 |
| Frame2.webp | 199kb | Scene 2: Formal greeting at sunset | Fly-in animation stage 2 |
| Frame3.webp | 379kb | Scene 3: Waterfront lounge | Fly-in animation stage 3 |
| Frame4.webp | 282kb | Scene 4: Guests on terrace | Fly-in animation stage 4 |
| Frame5.webp | 241kb | Scene 5: Couple with mega yacht | Fly-in animation stage 5 |
| Frame6.webp | 179kb | Scene 6: Close-up with city lights | Fly-in animation stage 6 |

**Campaign:** "Luxury Harbours" example demonstrates professional, cohesive storytelling.

---

## Appendix: Color Palette Reference

```typescript
// src/components/briefing/briefingColors.ts
export const briefingColors = {
  // Deep Indigo - AI Intelligence & Strategic Thinking
  indigo: {
    from: "#6366F1",    // Indigo-500 (gradient start, lighter glow)
    DEFAULT: "#4F46E5", // Indigo-600 (primary UI)
    to: "#4338CA"       // Indigo-700 (gradient end, deeper)
  },
  // Dark Cyan - Tech Success & Processing
  cyan: {
    from: "#06B6D4",    // Cyan-500 (neon tech accents)
    DEFAULT: "#0891B2", // Cyan-600 (primary success)
    to: "#0E7490"       // Cyan-700 (deeper flow)
  },
  // Deep Fuchsia - Creative Energy & Artistic Expression
  fuchsia: {
    from: "#D946EF",    // Fuchsia-500 (bright creative burst)
    DEFAULT: "#C026D3", // Fuchsia-600 (primary creative)
    to: "#A21CAF"       // Fuchsia-700 (deeper magenta)
  },
  // Deep Orange - Brand Accent & Speed
  orange: {
    DEFAULT: "#EA580C", // Orange-600 (Studios consistency)
  },
  // Holographic/Neon Accents (Tech Elements)
  holographic: {
    glow: "#818CF8",     // Indigo-400 (neon glows, particle effects)
    emerald: "#34D399",  // Emerald-400 (success indicators)
    cyan: "#22D3EE"      // Cyan-400 (tech flow lines)
  }
}
```

**Gradient Applications:**
- Hero Background: `indigo.from → indigo.to → fuchsia.DEFAULT`
- AI Processing: `cyan.from → indigo.DEFAULT`
- CTA Section: `fuchsia.DEFAULT → indigo.to`
- Holographic UI: `holographic.glow` for particle glows, card borders
- Success States: `cyan.DEFAULT` with `holographic.emerald` accents

---

## Appendix: Implementation Timeline Estimate

**Total Estimated Time:** 2-2.5 hours (per PLAN.md Phase 2 estimates)

**Breakdown:**
1. **Story 1.1** - GSAP/Lenis Install: ~5 minutes
2. **Story 1.2** - Color Palette Update: ~10 minutes
3. **Story 1.3** - Visual Styles Gallery: ~15 minutes (asset integration)
4. **Story 1.4** - Storyboard Dividers: ~10 minutes
5. **Story 1.5** - Process Flow: ~20 minutes
6. **Story 1.6** - Canvas Particles: ~30 minutes
7. **Story 1.7** - GSAP Timeline: ~30 minutes (most complex)
8. **Story 1.8** - Workflow Transformation: ~15 minutes
9. **Story 1.9** - Audience Benefits: ~15 minutes
10. **Story 1.10** - Page Assembly: ~10 minutes
11. **Story 1.11** - A11y & Performance: ~20 minutes
12. **Story 1.12** - Testing & Docs: ~15 minutes

**Total:** ~2 hours 35 minutes (within 2.5 hour target)

---

**END OF PRD**

*This document defines a comprehensive brownfield enhancement for the AI Briefing Engine page redesign. All requirements trace back to the 2000+ line PLAN.md analysis and incorporate user feedback from Phase 1 failures (too bright, no animations). Implementation follows BMad Method story-driven development workflow with clean SM → Dev → QA handoffs.*
