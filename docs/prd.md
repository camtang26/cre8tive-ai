# AI Briefing Engine Page Redesign - Product Requirements Document

**Author:** Cameron (PM Agent)
**Date:** 2025-10-06
**Project Level:** Brownfield Enhancement
**Project Type:** Major UI/UX Overhaul with Technology Stack Upgrade
**Target Scale:** Single Page Redesign (11 Sections, 12 New Components)

---

## Description, Context and Goals

### Deployment Intent

Static site deployment to GitHub Pages via GitHub Actions CI/CD pipeline. Route preservation (`/studios-engine`) for SEO continuity while rebranding to "AI Briefing Engine" in UI/navigation. Production build targets 879kb vendor bundle (current 806kb + 73kb GSAP/Lenis) with Lighthouse Performance 80+, Accessibility 90+, Best Practices 90+.

### Context

The AI Briefing Engine is Cre8tive AI's flagship briefing-to-storyboard transformation platform, enabling agencies and brands to go from brand brief to professional storyboard PDF in minutes. The product's **MAJOR differentiator is 8 distinct visual styles** (Minimalistic, Bold & Vibrant, Cinematic, Playful, Futuristic, Retro, Documentary, Abstract) - currently this is **not prominently featured** on the existing Studios Engine page.

**Current System State:**
- **Project:** Cre8tive AI Website - B2B Marketing Site
- **Tech Stack:** React 18.3.1 + TypeScript 5.5.3 + Vite 5.4.1 + Tailwind CSS 3.4.11
- **Current Page:** Studios Engine (`/studios-engine`)
- **Deployment:** GitHub Pages static site (cre8tive.ai)

**Critical Issues Identified:**
1. ❌ Generic blue gradient (doesn't reflect product identity)
2. ❌ **8 Visual Styles NOT showcased** (buried or missing - THE key differentiator)
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

**User Feedback from Phase 1 Attempt:**
- Colors TOO BRIGHT (should be deep dark indigo/purple, not bright blue-purple)
- Pure black sections (should have subtle dark gradients)
- NO GSAP animations implemented (violated plan)
- Almost copied Studios page (each page needs unique mini-theme)

### Goals

Transform the existing Studios Engine page into a flagship AI Briefing Engine product page that:

1. **Prominently showcases 8 Visual Styles as THE primary differentiator** (currently buried/missing)
2. **Establishes unique dark indigo/cyan/fuchsia brand identity** for Briefing Engine (distinct from Homepage blue/cyan and Studios orange/teal)
3. **Implements premium GSAP + Lenis animations** for flagship product feel (60fps target)
4. **Emphasizes briefing workflow** with professional document/storyboard aesthetic
5. **Shows transformation speed** (brief → storyboard in minutes not weeks)
6. **Creates seamless Studios handoff** connection (product ecosystem integration)
7. **Achieves WCAG AA accessibility compliance** with prefers-reduced-motion support
8. **Positions as flagship product page** (Apple product launch quality)

**Background Documentation:**
- Comprehensive PLAN.md (2000+ lines) details visual design direction, animation strategy, asset inventory, and 10-phase implementation roadmap
- Existing documentation: ARCHITECTURE.md, CONTRIBUTING.md, README.md (comprehensive tech stack coverage)
- Technical debt documented: "Zero tests exist" (manual validation only)

---

## Requirements

### Functional Requirements

**FR1**: The existing Studios Engine page SHALL be redesigned as "AI Briefing Engine" page while **preserving the `/studios-engine` route** for SEO continuity.

**FR2**: The page SHALL prominently showcase **8 Visual Styles** (Minimalistic, Bold & Vibrant, Cinematic, Playful, Futuristic, Retro, Documentary, Abstract) in a 3×3 grid gallery as **THE primary product differentiator**.

**FR3**: Each Visual Style card SHALL display actual visual style assets (9 webp images totaling 2.2MB) with **hover interactions** revealing style name and description.

**FR4**: The page SHALL implement a **15-second scroll-driven GSAP timeline** showing briefing → storyboard transformation through 5 stages:
   - Stage 1 (0-3s): Form fields animate in
   - Stage 2 (3-6s): AI processing with Canvas particle swirl (60-100 particles)
   - Stage 3 (6-9s): Style selection with burst animation
   - Stage 4 (9-15s): Storyboard assembly (6 panels fly in, frames draw)
   - Stage 5 (15-16s): Studios handoff (gradient shift indigo → orange)

**FR5**: The page SHALL use **unique dark indigo/cyan/fuchsia color palette** (NOT bright purple/green, NOT Studios orange/teal, NOT Homepage blue):
   - Indigo: #4F46E5 (AI intelligence)
   - Cyan: #0891B2 (tech processing)
   - Fuchsia: #C026D3 (creative energy)
   - Orange: #EA580C (brand accent, Studios handoff)
   - Holographic accents: #818CF8, #22D3EE, #34D399

**FR6**: The page SHALL implement **Lenis smooth scroll wrapper** for premium momentum-based scrolling experience.

**FR7**: The page SHALL include **StoryboardDivider components** with scene markers (S1, S2, S3) between major sections reflecting briefing/storyboard aesthetic.

**FR8**: The page SHALL implement **BriefingProcessFlow component** showing 4-step workflow:
   - Define Brand → Choose Style → AI Processing → Review & Handoff
   - Color-coded steps with animated connectors

**FR9**: The page SHALL display **AudienceBenefits component** with split layout (Agencies | Brands) showing 3 benefits each (total 6 cards, reduced from current 8).

**FR10**: The page SHALL integrate **7 storyboard mockup assets** (SB-Mockup.webp full storyboard + Frame1-6 individual panels totaling 1.7MB) in storyboard assembly animation.

**FR11**: The page SHALL maintain **responsive design** across all breakpoints (375px mobile - 1920px desktop) without breaking existing responsive patterns.

**FR12**: **Navigation SHALL be updated** to "AI Briefing Engine" with purple/pink gradient (already implemented in Phase 1).

### Non-Functional Requirements

**NFR1**: **Animation performance** SHALL maintain 60fps on modern devices (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+) using **GPU-accelerated transforms only** (translate, scale, opacity).

**NFR2**: **Bundle size impact** SHALL NOT exceed +100kb total:
   - GSAP + ScrollTrigger: ~66kb
   - Lenis: ~7kb
   - Total new framework weight: ~73kb (acceptable for flagship product)
   - PixiJS/WebGL: REJECTED (400kb - too heavy)

**NFR3**: **Production build** SHALL succeed with TypeScript compilation (relaxed mode: noImplicitAny: false) and ESLint validation (errors block, warnings ok).

**NFR4**: **Page load performance** SHALL maintain Lighthouse Performance score of **80+** (acceptable trade-off from current 85-90 for premium animations).

**NFR5**: **Accessibility** SHALL comply with **WCAG AA standards**:
   - prefers-reduced-motion: Instant transitions, no animations
   - Keyboard navigation: All interactive elements accessible
   - Color contrast: Indigo/cyan/fuchsia on dark backgrounds verified (4.5:1 minimum)
   - ARIA labels: Visual styles, process steps, benefits properly labeled

**NFR6**: **Canvas particle system** SHALL render 60-100 particles at 60fps with **graceful fallback** to static gradient glow on low-end devices.

**NFR7**: **Visual asset loading** SHALL use **lazy-loading strategy** for below-fold images (storyboard frames, style gallery) to optimize initial page load.

**NFR8**: **GSAP ScrollTrigger pinning** SHALL be disabled on mobile (< 768px) if animation performance drops below 30fps.

**NFR9**: **Implementation timeline** SHALL NOT exceed 2.5 hours total (per PLAN.md estimates):
   - Color palette update: ~10 minutes
   - Visual asset integration: ~15 minutes
   - Animation components (5): ~60-90 minutes
   - Testing & polish: ~20 minutes

**NFR10**: All existing **Framer Motion animations** SHALL remain functional (GSAP additions are supplemental, not replacements) to avoid breaking hover states and simple transitions.

---

## User Journeys

### Journey 1: Agency Creative Director Discovering Visual Styles

**Actor:** Creative Director at marketing agency managing 10+ brand clients

**Entry Point:** Lands on /studios-engine from LinkedIn ad

**Flow:**
1. Hero section: Sees "AI Briefing Engine" headline with dark indigo/cyan gradient → understands product positioning
2. Scrolls past first StoryboardDivider (scene markers S1-S3) → briefing aesthetic established
3. **Reaches Visual Styles Gallery (PRIMARY INTERACTION):**
   - Sees 8 style cards in 3×3 grid (Minimalistic, Bold & Vibrant, Cinematic, etc.)
   - Hovers over "Cinematic" card → overlay reveals "Epic, moody visuals with dramatic lighting"
   - Hovers over "Playful" card → overlay reveals "Whimsical 3D with vibrant colors"
   - Recognizes each client could get unique style → **differentiation value unlocked**
4. Scrolls to BriefingProcessFlow → sees 4-step workflow (Define → Style → AI → Review)
5. Scrolls through 15-second GSAP transformation timeline:
   - Stage 1: Form fields appear (understands input requirements)
   - Stage 2: AI particle swirl (sees "AI thinking" visualization)
   - Stage 4: 6 storyboard panels assemble → **transformation speed evident**
6. Reaches AudienceBenefits → sees "For Agencies" column (cyan accent):
   - "Scale Multiple Clients" → recognizes operational efficiency
   - "Faster Client Onboarding" → minutes not weeks
7. Clicks primary CTA "Book a Demo" → converted to qualified lead

**Outcome:** Creative Director books demo, cites 8 visual styles as deciding factor

### Journey 2: Brand Marketing Manager Evaluating Speed Advantage

**Actor:** In-house brand manager at consumer goods company, tight campaign deadline

**Entry Point:** Arrives from Google search "AI storyboard generator"

**Flow:**
1. Hero section: "Transform Ideas to Storyboards in Minutes" → speed promise registered
2. Skips Visual Styles Gallery (scrolls quickly) → sees variety but doesn't interact
3. **Reaches WorkflowTransformation section (KEY CONVERSION MOMENT):**
   - Traditional Process timeline: 2-4 weeks (multiple stages)
   - AI Briefing Engine timeline: 2-5 minutes (single stage)
   - **Speed advantage visualization**: Lightning icon + "Minutes not weeks" → value prop clear
4. Reviews 4 value cards below timeline:
   - "Speed to Market" (indigo) → aligns with deadline pressure
   - "Brand Consistency" (cyan) → sees "AI trained on your brand guidelines" → trust signal
5. Scrolls to "For Brands" benefits (fuchsia accent):
   - "Speed to Campaign Launch" → reinforces time-saving message
   - "Stay On Brand, Always" → addresses quality concern
6. Clicks "Download Sample Storyboard" → sees professional output quality
7. Returns to page, clicks "Book a Demo" → converted

**Outcome:** Brand manager books demo, cites speed + brand consistency as deciding factors

### Journey 3: Mobile User Browsing on iPhone (Accessibility Focus)

**Actor:** Agency junior designer on iPhone 12, exploring tools during commute

**Entry Point:** Clicks LinkedIn ad while scrolling feed

**Flow:**
1. Page loads on mobile (375px width) → Lenis smooth scroll feels premium
2. Hero section: Headline + subhead stack vertically → readable without zoom
3. Visual Styles Gallery: 1 column layout (mobile responsive) → cards stack neatly
4. Hovers (tap) on "Futuristic" card → overlay appears with description
5. BriefingProcessFlow: 4 steps stack vertically → workflow clear despite small screen
6. **15-second GSAP timeline: ScrollTrigger pinning DISABLED on mobile** → simple fade-in reveals instead (no jank)
7. Canvas particle animation: **Particle count reduced to 30** (mobile optimization) → maintains 60fps
8. AudienceBenefits: "For Agencies" → "For Brands" stack vertically → all content accessible
9. Keyboard navigation: Taps Tab key → focus indicators visible on all CTAs
10. **Accessibility win:** Page respects native scroll behavior, no frustrating pinned sections

**Outcome:** Junior designer shares link with team lead, notes "feels like Apple product page"

---

## UX Design Principles

### Integration with Existing Design System

**Design System Alignment:**
- **Glassmorphism patterns**: backdrop-filter: blur(20px), bg-opacity-10 (site-wide standard)
- **Magnetic button interactions**: Preserve existing CTA component patterns
- **Heading typography**: font-black, tracking-tighter, leading-none (consistency with Studios/Homepage)
- **Card elevation**: shadow-xl, hover:shadow-2xl transitions (established pattern)
- **Spacing rhythm**: Tailwind gap-8, gap-16, gap-24 patterns (maintain existing rhythm)

**Component Library Consistency:**
- Reuse FadeIn/ScrollFade animation wrappers for non-GSAP sections
- Maintain ContactCTA component patterns for BriefingCTA consistency
- Follow CinemaCard visual aesthetic for storyboard frame cards
- Preserve Navigation.tsx gradient link patterns for hero CTAs

### Visual Differentiation Strategy

**Three Distinct Page Identities:**
- **Homepage:** Blue/Cyan/Teal (#3B82F6, #06B6D4, #14B8A6) - tech/AI focus
- **Studios:** Orange/Teal/Coral (#F97316, #14B8A6, #FB7185) - cinematic film production
- **Briefing Engine:** Dark Indigo/Cyan/Fuchsia (#4F46E5, #0891B2, #C026D3) - **cyberpunk creative studio**

**Rationale:** Each page needs unique mini-theme to avoid visual confusion while maintaining site-wide design system (glassmorphism, typography, spacing).

### Typography Consistency

- **Page H1:** `text-7xl font-black tracking-tighter leading-none` (matches Studios page)
- **Section H2:** `text-5xl font-bold` (site-wide standard)
- **Body text:** `text-lg text-gray-300` (consistent contrast ratios)

### Interaction Consistency

- **Hover lift:** `hover:-translate-y-2 transition-transform duration-300` (site standard)
- **Card borders:** `border border-white/10` (glassmorphism pattern)
- **Button CTAs:** `px-8 py-4 rounded-full` (established CTA pattern)

### Animation Consistency

- **Scroll reveals:** FadeIn wrapper (< 500ms fade-in, stagger 100ms) for non-GSAP sections
- **Hover states:** Framer Motion (scale 1.05, duration 200ms) - PRESERVED
- **Section transitions:** Smooth scroll (Lenis lerp: 0.1, duration: 1.5s) - NEW
- **Complex timelines:** GSAP ScrollTrigger (scrub-based, 60fps GPU transforms) - NEW

### Spacing Consistency

- **Section padding:** `py-24 px-6` (desktop), `py-16 px-4` (mobile)
- **Container max-width:** `max-w-7xl mx-auto` (site-wide)
- **Grid gaps:** `gap-8` (cards), `gap-16` (sections)

---

## Epics

### Epic 1: AI Briefing Engine Page Redesign & Premium Animation Implementation

**Epic Goal:**

Transform the existing Studios Engine page into a flagship AI Briefing Engine product page that prominently showcases 8 visual styles as THE key differentiator, implements premium GSAP + Lenis animations achieving 60fps performance, and establishes a unique dark indigo/cyan/fuchsia cyberpunk creative studio aesthetic distinct from Homepage and Studios pages, while maintaining responsive design across all breakpoints and ensuring WCAG AA accessibility compliance.

**Epic Scope:**
- 12 new React components in `src/components/briefing/`
- 11-section page assembly in `src/pages/BriefingEngine.tsx`
- GSAP + Lenis animation framework integration (+73kb bundle)
- 16 visual assets (9 styles + 7 storyboard frames = 3.9MB)
- Unique color palette (dark indigo/cyan/fuchsia)
- Route preservation (`/studios-engine`) for SEO continuity

**Stories:**
- [Story 1.1: Install GSAP + Lenis Animation Framework](../stories/story-1.1.md)
- [Story 1.2: Update Color Palette and Create Color Constants](../stories/story-1.2.md)
- [Story 1.3: Integrate 9 Visual Style Assets into Gallery](../stories/story-1.3.md)
- [Story 1.4: Create StoryboardDivider Components with Scene Markers](../stories/story-1.4.md)
- [Story 1.5: Build BriefingProcessFlow 4-Step Workflow Visualization](../stories/story-1.5.md)
- [Story 1.6: Implement Canvas Particle AI Processing Animation](../stories/story-1.6.md)
- [Story 1.7: Build 15-Second GSAP ScrollTrigger Transformation Timeline](../stories/story-1.7.md)
- [Story 1.8: Create WorkflowTransformation Speed Comparison Section](../stories/story-1.8.md)
- [Story 1.9: Build AudienceBenefits Split Layout (Agencies vs Brands)](../stories/story-1.9.md)
- [Story 1.10: Assemble Final Page and Implement Lenis Smooth Scroll](../stories/story-1.10.md)
- [Story 1.11: Accessibility & Performance Optimization](../stories/story-1.11.md)
- [Story 1.12: Testing, Documentation & Deployment](../stories/story-1.12.md)

**Integration Requirements:**
- Preserve existing `/studios-engine` route for SEO continuity
- Maintain compatibility with Shadcn/UI components and Tailwind configuration
- Coexist with Framer Motion library without conflicts (GSAP supplemental, not replacement)
- Follow established responsive breakpoint patterns (375px, 768px, 1024px, 1920px)
- Ensure production build succeeds with TypeScript relaxed mode and ESLint validation
- Maintain existing Navigation.tsx structure while updating link text to "AI Briefing Engine"

**Epic Status:** ~50-60% Complete (Stories 1.1-1.6 Done/Review, Stories 1.7-1.12 Draft)

**Rationale for Single Epic Approach:**
- Brownfield enhancement with tightly coupled components (all relate to single page redesign)
- Shared visual identity (color palette, animation framework) across all new components
- Sequential dependencies (hero → gallery → process → benefits → CTA logical flow)
- Single deployment target (BriefingEngine.tsx page assembly)
- Manageable scope (~2.5 hours implementation estimate per PLAN.md)
- Clear rollback boundary (entire epic can be reverted as single unit if issues arise)

---

### Epic 2: Studios Page Overhaul - Video-Showcase Redesign

**Epic Goal:**

Transform Studios page into a premium video-showcase destination positioning Studios as AI-powered Studio partners delivering platform-native video in days, featuring prominent video portfolio, platform-specific format demos (YouTube 16:9, TikTok 9:16, Instagram 1:1), and unique cinematic brand identity with GSAP 3.13-enhanced scroll experience—achieving visual parity with Briefing Engine flagship quality through prototype-first methodology.

**Epic Scope:**
- Hero video background (autoplay loop, 720p, <10MB, Vimeo-hosted with mobile fallback strategy)
- Enhanced "Our Work" portfolio (SAME videos as homepage, redesigned presentation using research-validated GSAP patterns)
- Platform-specific demos gallery (16:9/1:1/9:16 placeholders for post-launch video uploads)
- Full Studios marketing video section (Vimeo embed, click-to-play, lazy-loaded)
- Copy sections with Trinity framework (Hybrid Model explanation, Process/Timeline, Benefits)
- Testimonials restyle (existing text content, updated to match new design system)
- Unique cinematic color palette (NOT orange/teal - options: Film Noir, Purple/Magenta, Teal Evolution, Red Carpet Glam)
- GSAP 3.13 + Lenis smooth scroll (8 research-validated animation patterns, 60fps GPU-accelerated)
- Video placeholder design system (consistent treatment across all video elements)
- Responsive design (375px - 1920px) with mobile-optimized video strategy

**Epic Approach - Prototype-First Methodology:**
- **Phase 1:** Prototype development (40-50 prototypes: color palettes, hero variations, video gallery layouts, animation patterns)
- **Phase 2:** Cameron approval + lock-ins (iterative selection process, no implementation until approved)
- **Phase 3:** Story creation (reference locked prototypes with deterministic acceptance criteria)
- **Phase 4:** Production implementation (build from approved prototypes, visual diff validation)

**Video Assets (Vimeo placeholders):**
- Hero bg video (marketing cuts - autoplay loop)
- "Our Work" videos (from homepage OurWork.tsx component)
- Platform demos (3 placeholders: you'll create videos post-launch)
- Full marketing video (Vimeo embed placeholder)
- Testimonials (text only, no video testimonials)

**Service Positioning (cre8tive-copy-excellence):**
- **Primary Outcome:** Platform-native video (YouTube, TikTok, Instagram, LinkedIn, X, Facebook)
- **Timeline Accuracy:** DAYS for video (never minutes - critical guardrail)
- **Differentiator:** Hybrid "AI-powered Studio partners" model (always explicit)
- **Proof Point:** 60% first-draft approval rate
- **Copy Standards:** Trinity framework (User-Outcome Focus + Word Precision + Emotional Resonance)

**Research-Informed GSAP Patterns:**
- Pattern 1: Smooth Page Load Sequence (Power4.out easing, staggered reveals)
- Pattern 2: Content Reveal on Scroll (ScrollTrigger.batch() for video grids)
- Pattern 4: Horizontal Scroll Gallery (containerAnimation for featured work)
- Pattern 6: Video + Text Parallax (depth effect for hero sections)
- Pattern 7: Lazy-Loaded Video (Intersection Observer, 100px margin)
- Pattern 8: Prefers-Reduced-Motion (WCAG AA accessibility)

**Stories:** 6-8 stories (exact count determined after prototype lock-in, stories reference `/docs/prototypes/[ID]/`)

**Integration Requirements:**
- Reuse GSAP + Lenis from Epic 1 (already installed, no reinstall)
- Maintain compatibility with existing React 18.3 + TypeScript 5.5 + Vite 5.4 stack
- Follow established responsive breakpoint patterns (375px, 768px, 1024px, 1920px)
- Vimeo embed integration (lazy-loading, click-to-play, accessibility)
- Video optimization (720p @ 24-30fps, <10MB, H.264 + WebM formats)

**Epic Status:** Prototype Planning (Phase 1 sprint schedule in progress)

**Success Criteria:**
- ✅ Videos are the hero (prominent showcase, not decoration)
- ✅ Copy excellence (Trinity framework: pain eliminated "no agency juggling", proof "60% approval")
- ✅ Visual parity with Briefing Engine flagship quality
- ✅ 60fps GSAP animations (GPU-accelerated properties only: x, y, scale, rotation, opacity)
- ✅ Performance (Lighthouse 80+/90+, lazy-loading below fold, mobile video strategy)
- ✅ Accessibility (WCAG AA, prefers-reduced-motion, keyboard nav, video captions)
- ✅ NO "plan → implement → realize it's wrong" failures (prototype-first eliminates visual uncertainty)

---

### Epic 3: Conversational AI Page Overhaul - Video-Showcase Redesign

**Epic Goal:**

Transform Conversational AI page into a premium video-showcase destination positioning Conversational AI as enterprise-grade support scaling without headcount, featuring full marketing video, live demo showcase (~10min unedited testing), and unique intelligent brand identity with GSAP 3.13-enhanced scroll experience—achieving visual parity with Briefing Engine flagship quality through prototype-first methodology.

**Epic Scope:**
- Hero video background (autoplay loop, 720p, <10MB, Vimeo-hosted with mobile fallback strategy)
- Full Conversational AI marketing video section (Vimeo embed, click-to-play, lazy-loaded)
- Live demo video section (~10min video with chapter markers OR single showcase - TBD during prototyping)
- Copy sections with Trinity framework (Scale Without Headcount proof, Use Cases, Brand Consistency, Enterprise Features)
- NO testimonials (service differentiation)
- Unique enterprise AI color palette (options: Cool Intelligence, Neural Network, Enterprise Green, Warm Trust)
- GSAP 3.13 + Lenis smooth scroll (8 research-validated animation patterns, 60fps GPU-accelerated)
- Video placeholder design system (consistent with Studios, unified treatment)
- Responsive design (375px - 1920px) with mobile-optimized video strategy

**Epic Approach - Prototype-First Methodology:**
- **Phase 1:** Prototype development (30-40 prototypes: color palettes, hero variations, video section layouts, long-form video treatments)
- **Phase 2:** Cameron approval + lock-ins (iterative selection, no implementation until approved)
- **Phase 3:** Story creation (reference locked prototypes with deterministic acceptance criteria)
- **Phase 4:** Production implementation (build from approved prototypes, visual diff validation)

**Video Assets (Vimeo placeholders):**
- Hero bg video (marketing cuts - autoplay loop)
- Full marketing video (Vimeo embed placeholder)
- Live demo video (~10min, chapter markers support for engagement, Vimeo embed)
- NO testimonials, NO portfolio videos (service separation from Studios)

**Service Positioning (cre8tive-copy-excellence):**
- **Primary Outcome:** Scale support without headcount (hiring bottleneck eliminated)
- **Secondary:** 24/7 availability, enterprise-grade security/compliance
- **NO video/storyboard outcomes** (strict service separation from Studios/Briefing Engine)
- **Differentiator:** AI that understands your brand (trained on brand voice)
- **Copy Standards:** Trinity framework (User-Outcome Focus + Word Precision + Emotional Resonance)

**Research-Informed GSAP Patterns:**
- Pattern 1: Smooth Page Load Sequence (hero video + text orchestration)
- Pattern 2: Content Reveal on Scroll (use case cards, feature sections)
- Pattern 3: Sticky Scroll-Triggered Animation (demo walkthrough, pinned sections)
- Pattern 7: Lazy-Loaded Video (critical for multiple videos, Intersection Observer)
- Pattern 8: Prefers-Reduced-Motion (WCAG AA accessibility)

**Stories:** 6-8 stories (exact count determined after prototype lock-in, stories reference `/docs/prototypes/[ID]/`)

**Integration Requirements:**
- Reuse GSAP + Lenis from Epic 1 (already installed)
- Maintain compatibility with existing React 18.3 + TypeScript 5.5 + Vite 5.4 stack
- Follow established responsive breakpoint patterns
- Vimeo embed integration with chapter marker support (long-form video engagement)
- Video optimization (720p @ 24-30fps, <10MB for loops, full quality for marketing/demo videos)

**Epic Status:** Prototype Planning (Phase 1 sprint schedule in progress)

**Success Criteria:**
- ✅ Videos are the hero (prominent showcase, not decoration)
- ✅ Copy excellence (Trinity framework: pain "hiring bottleneck", outcome "scale 24/7 support")
- ✅ Visual parity with Briefing Engine flagship quality
- ✅ 60fps GSAP animations (GPU-accelerated properties only)
- ✅ Performance (Lighthouse 80+/90+, lazy-loading, mobile video strategy)
- ✅ Accessibility (WCAG AA, prefers-reduced-motion, keyboard nav, video captions, chapter markers for long demo)
- ✅ NO "plan → implement → realize it's wrong" failures (prototype-first methodology)

---

## Out of Scope

**Components Removed (Replaced by New Components):**
1. ❌ Generic "Concept to Creation" section (5 cards with generic icons) → Replaced by VisualStylesGallery
2. ❌ Generic "How It Works" section (blue/cyan colors, not briefing-specific) → Replaced by BriefingProcessFlow
3. ❌ Overcrowded "Benefits for Everyone" (8 cards - too many) → Replaced by AudienceBenefits (6 cards)

**Features Explicitly Out of Scope:**
- **E-commerce/Pricing Page:** No payment processing or public pricing information
- **User Authentication:** No login, user accounts, or dashboards (static marketing site only)
- **CMS Integration:** Content updates via codebase, no WordPress/Contentful/headless CMS
- **Real-time Features:** No live chat, real-time notifications, or user-generated content
- **Multi-language Support:** English only (no i18n/l10n)
- **A/B Testing Platform:** No built-in experimentation framework (manual variants only)
- **Automated Testing:** Zero tests exist (documented technical debt - manual validation only)
- **Backend Services:** No custom API, database, or server-side logic (static site deployment)

**Technology Decisions Out of Scope:**
- **PixiJS/WebGL Integration:** Rejected due to 400kb bundle size (Canvas API sufficient)
- **Three.js 3D Graphics:** Existing Spline integration remains (no new 3D features for Briefing Engine)
- **Route Rename:** `/studios-engine` route preserved (not changing to `/briefing-engine`)

---

## Next Steps

**Current Implementation Status (2025-10-07):**
- ✅ Stories 1.1-1.6: Completed (GSAP/Lenis installed, colors updated, gallery integrated, dividers created, process flow built, Canvas particles implemented)
- 🔄 Stories 1.7-1.12: Draft (GSAP timeline, transformation section, benefits, page assembly, accessibility, testing/deployment)

**Immediate Next Steps:**
1. **Dev Team:** Continue Story 1.7 implementation (15-second GSAP transformation timeline)
2. **QA Team:** Review completed Stories 1.1-1.6 (visual QA, browser testing, accessibility check)
3. **PM Team:** Validate Epic 1 scope aligns with current product positioning

**Post-Epic 1 Completion:**
1. Deploy to production (GitHub Actions → gh-pages branch)
2. Monitor analytics (Vercel Analytics pageviews, GTM CTA click events)
3. Gather user feedback (track Visual Styles Gallery engagement, scroll depth to transformation timeline)
4. Iterate based on data (A/B test CTA copy, optimize lazy-loading thresholds, refine color contrast)

**Long-term Roadmap Considerations:**
- **Blog/Content Hub:** Consider adding resources section for SEO and thought leadership
- **Case Studies Section:** Showcase client success stories beyond gallery examples
- **Pricing Page:** Evaluate public pricing transparency to reduce demo friction
- **Test Infrastructure:** Plan Vitest + Playwright setup to reduce manual QA burden

---

## Document Status

- [x] Goals and context validated with stakeholders
- [x] All functional requirements reviewed (FR1-FR12)
- [x] User journeys cover all major personas (Agency, Brand, Mobile)
- [x] Epic structure approved for phased delivery (Single Epic with 12 stories)
- [x] Ready for architecture phase (technical-decisions.md created)

_Note: See [technical-decisions.md](../technical-decisions.md) for captured technical context, [brownfield-analysis.md](../brownfield-analysis.md) for current system state audit, and [architecture/design-system.md](../architecture/design-system.md) for visual design specifications._

---

**Success Criteria Summary:**

This epic is considered successful when:

✅ **Visual Impact:** Unique dark indigo/cyan/fuchsia identity established, 8 Visual Styles prominently showcased, premium GSAP animations achieve Apple product page quality

✅ **Content Clarity:** "AI Briefing Engine" branding clear, briefing → storyboard transformation demonstrated, speed advantage emphasized (minutes not weeks)

✅ **Technical Quality:** Production build succeeds, 60fps animations on modern devices, responsive design functional (375px - 1920px), WCAG AA accessibility compliance

✅ **Business Impact:** Page feels like flagship product, positions Briefing Engine as premium AI tool, differentiates from competitors, generates qualified leads

✅ **Integration Success:** All existing site pages remain functional, React Router navigation works smoothly, bundle size within acceptable range (879kb < 900kb target)

---

_This PRD adapts to project level **Brownfield Enhancement** - providing appropriate detail for major UI/UX overhaul without overburden. Version 1.0 created from comprehensive PLAN.md analysis (2000+ lines) and Phase 1 user feedback (too bright, no animations)._
