# Source Tree Analysis - Exhaustive Documentation
**Project:** cre8tive-website-1006
**Generated:** November 3, 2025
**Analysis Type:** Exhaustive Scan with Critical Ultrathink
**Total Files:** 215 source files

---

## Directory Structure Overview

```
src/
├── assets/           # Logo images (6 responsive variants)
├── components/       # React components (24 subdirectories, 178 components)
├── config/           # Configuration files (empty - configs in root)
├── constants/        # Application constants (assets paths, feature flags)
├── hooks/            # Custom React hooks (17 hooks)
├── lib/              # Library utilities (error handling, perf monitoring, utils)
├── pages/            # Page components (13 pages)
├── styles/           # Global CSS (3 files: base, animations, utilities)
├── types/            # TypeScript type definitions (3 files)
├── utils/            # Utility functions (7 modules)
└── [root files]      # App entry points (App.tsx, main.tsx, index.tsx)
```

---

## 📁 Detailed Directory Analysis

### /src/assets/ (6 files)
**Purpose:** Responsive logo assets for brand consistency

**Files:**
- `logo-small.jpeg` / `.webp` - Small logo (100-200px)
- `logo-medium.jpeg` / `.webp` - Medium logo (200-400px)
- `logo-large.jpeg` / `.webp` - Large logo (400px+)

**Usage Pattern:** Responsive srcset in Navigation, Hero, Footer components

---

### /src/components/ (24 subdirectories, 178 components)

#### **briefing/** (27 components - **FLAGSHIP FEATURE**)
**Purpose:** AI Briefing Engine product page - complete GSAP-powered interactive experience

**Key Files:**
- `BriefingTimeline.tsx` (175 LOC) - 5-stage timeline orchestrator
- `WorkflowTransformation.tsx` (463 LOC) - 60x FASTER comparison with GSAP master timeline
- `BriefToStoryboardAnimation.tsx` (1,226 LOC) - **LARGEST COMPONENT** - Massive scroll-driven animation (5 stages)
- `ParticleCore.tsx` (378 LOC) - GPU-accelerated particle system with adaptive performance
- `BriefingProcessFlow.tsx` (521 LOC) - 3D card carousel with perspective transforms

**Sections Subdirectory:**
- `HeroBriefSection.tsx` (475 LOC) - Stage 1: Hero briefing intake
- `NeuralSynthesisSection.tsx` (354 LOC) - Stage 2: AI narrative engine
- `StyleSelectionSection.tsx` (284 LOC) - Stage 3: Visual style selection
- `StoryboardAssemblySection.tsx` (274 LOC) - Stage 4: Storyboard frames
- `StudiosHandoffSection.tsx` (434 LOC) - Stage 5: Studios handoff

**Data Files:**
- `palette.ts` (118 LOC) - Indigo/cyan/fuchsia color system
- `section-data.ts` (243 LOC) - Content data for all sections
- `motion-config.ts` (386 LOC) - Desktop-responsive timing configurations

**Architecture:**
- **GSAP Integration:** 16 of 27 components use GSAP
- **Adaptive Performance:** 4 components with device-tier detection
- **Reduced Motion:** 22 of 27 components support accessibility
- **Total LOC:** ~6,596 lines

---

#### **Services/** (8 files)
**Purpose:** Services showcase section with desktop/mobile variants

**Structure:**
- `desktop/DesktopServicesBold.tsx` (301 LOC) - **3D magnetic hover** effects with Framer Motion
- `desktop/DesktopServiceCard.tsx` (144 LOC)
- `mobile/MobileServices.tsx`
- `mobile/MobileServiceCard.tsx`
- `ServicesGrid.tsx`, `index.tsx`, `types.ts`

**Tech:** Framer Motion 3D transforms, perspective animations

---

#### **agents/** (8 files + network/)
**Purpose:** AI Agents marketing page (currently DISABLED in routing)

**Key Files:**
- `AgentsHero.tsx` (82 LOC) - Hero with robot illustration
- `sections/AiMarketingSolutions.tsx` (149 LOC) - AI CRM, customer service cards
- `network/` - Three.js network visualization (stub implementation)
  - `NetworkManager.ts`, `ConnectionRenderer.ts`, `Node.ts`

**Status:** Service under development, route commented out in App.tsx

---

#### **studios/** (15 files)
**Purpose:** Cre8tive AI Studios product page

**Key Files:**
- `AnimatedBackground.tsx` (134 LOC) - **ONLY Three.js usage** in non-briefing code (3000 particles)
- `StudiosHero.tsx` - Orange/teal themed hero
- `Testimonials.tsx`, `WhoWeServe.tsx`, `ExpertiseBenefits.tsx`
- `FilmStripDivider.tsx` (2.2KB) - Decorative SVG film strip

**Tech:** Three.js (WebGL), Framer Motion

---

#### **ui/** (58 components - shadcn/ui library)
**Purpose:** Reusable UI primitives from shadcn/ui

**Largest Components:**
- `sidebar.tsx` (761 LOC)
- `chart.tsx` (363 LOC)
- `carousel.tsx` (260 LOC)
- `menubar.tsx` (234 LOC)

**Animation-Enhanced:**
- `magnetic-button.tsx` (60 LOC) - Framer Motion magnetic hover
- `spotlight.tsx` (80 LOC) - Spotlight effect
- `reveal-text.tsx`, `parallax-section.tsx`, `floating-element.tsx`, `gradient-button.tsx`

**Categories:**
- Form components (14): input, textarea, checkbox, radio, switch, slider, etc.
- Overlay components (8): dialog, popover, tooltip, hover-card, sheet, drawer
- Layout components (10): card, separator, scroll-area, tabs, accordion
- Data components (5): table, pagination, chart, calendar
- Navigation (3): navigation-menu, breadcrumb, menubar

---

#### **conversational/** (6 files)
**Purpose:** ElevenLabs Conversational AI product page

**Key Files:**
- `HeroSection.tsx` (115 LOC) - Complex viewport-responsive sizing
- `RobotIllustration.tsx` (99 LOC) - SVG robot with Framer Motion animations
- `FeaturesSection.tsx`, `ApplicationsSection.tsx`

**Integration:** ElevenLabs ConvAI widget (external script)

---

#### **hero/** (4 files)
**Purpose:** Homepage hero section

**Key Files:**
- `Hero.tsx` (89 LOC) - Vimeo background video (ID: 1051821551)
- `HeroContentBold.tsx` (161 LOC) - Framer Motion text reveals
- `VideoBackground.tsx` (113 LOC)

---

#### **core/** (8 files)
**Purpose:** Core reusable utilities and foundational components

**Critical Components:**
- `VimeoPlayer.tsx` (131 LOC) - **CRITICAL** - Vimeo SDK wrapper used throughout site
  - API: play(), pause(), setMuted()
  - Features: Background video, fullscreen, error handling
- `SEO.tsx` (66 LOC) - React Helmet integration
- `ScrollToTop.tsx` - Route change scroll reset
- `OptimizedImage.tsx` - Lazy loading wrapper

---

#### **shared/** (6 files)
**Purpose:** Shared reusable components across pages

**Key Files:**
- `StatsBar.tsx` (177 LOC) - Animated counters (500+ Projects, 98% Satisfaction)
- `GsapFadeIn.tsx` (60 LOC) - **GSAP ScrollTrigger** wrapper
- `FloatingCallButton.tsx` - Floating CTA with Framer Motion
- `ScrollFade.tsx` - Intersection Observer utility

---

#### **desktop/** (2 files) & **mobile/** (5 files)
**Purpose:** Device-specific UI components

**Desktop:**
- `DesktopNavigation.tsx` (173 LOC) - RAF-throttled scroll detection (-30ms improvement)

**Mobile:**
- `MobileMenuOverlay.tsx` (86 LOC) - Full-screen menu
- `TouchRipple.tsx` - Touch feedback

---

#### **archive/** (2 files - **TECHNICAL DEBT**)
**Purpose:** Legacy component versions

**Files:**
- `BriefToStoryboardAnimation.tsx` (1,206 LOC) - **OLD VERSION** - Should be removed
- `VisualStylesGallery.tsx` (199 LOC) - Legacy gallery

**Recommendation:** Delete or consolidate (1,405 LOC unused code)

---

#### **Other Component Directories:**
- `analytics/` - CookieConsent.tsx (GDPR compliance)
- `benefits/` - Benefits grid
- `concept-to-creation/` - 3-step workflow visualization
- `contact/` - FormField.tsx
- `footer/` - Footer.tsx
- `gallery/` - VideoGallery, VideoGalleryItem (Vimeo integration)
- `how-it-works/` - Process cards
- `layout/` & `layouts/` - PageLayout, MainLayout wrappers
- `navigation/` - Nav wrappers (delegate to desktop/mobile)
- `quotes/` - CinematicQuote, QuoteCard
- `test/` - VideoTest.tsx
- `video/` - VimeoPlayer.tsx (duplicate of core/)

---

### /src/hooks/ (17 custom hooks)

#### **GSAP Hooks:**
- `useScrollTriggerAnimation.ts` (67 LOC) - Generic ScrollTrigger wrapper with cleanup
- `useLenisReady.ts` (58 LOC) - Lenis smooth scroll readiness detection

#### **Performance Hooks:**
- `usePerformance.ts` (273 LOC) - FPS monitoring with RAF + EMA smoothing
- `useAdaptivePerformance.ts` (306 LOC) - **STORY 1.14** - Real-time quality tier management
  - 3 variants: Auto-adjust, Passive, Manual
  - Hysteresis pattern (48fps down, 52fps up)
  - 2-second debouncing

#### **Animation Hooks (Framer Motion):**
- `useScrollAnimation.tsx` (18 LOC) - Viewport detection
- `useParallax.tsx` (27 LOC) - Parallax scroll effects
- `useMagneticHover.tsx` (44 LOC) - Magnetic hover with spring physics
- `useOptimizedAnimation.tsx` (47 LOC) - Web Animations API with will-change

#### **Utility Hooks:**
- `usePrefersReducedMotion.ts` (48 LOC) - **ACCESSIBILITY** - Motion sensitivity detection
- `useLazyLoad.tsx` (43 LOC) - Intersection Observer lazy loading
- `useGestures.tsx` (73 LOC) - Touch swipe detection
- `useMobileInteractions.tsx` (59 LOC) - Double-tap, pull-to-refresh
- `useFullscreen.ts` (33 LOC) - Fullscreen API wrapper
- `useAnalytics.ts` (40 LOC) - GTM event tracking
- `useFadeIn.tsx` (33 LOC) - CSS class-based fade-in
- `use-mobile.tsx` (20 LOC) - 768px breakpoint detection
- `use-toast.ts` (192 LOC) - shadcn/ui toast system

---

### /src/utils/ (7 utility modules)

#### **Performance Utilities:**
- `performance-adapter.ts` (234 LOC) - **STORY 1.14** - Device capability detection
  - 9-point scoring: GPU (3pts) + CPU (3pts) + Memory (3pts)
  - Tier classification: high (≥7), medium (≥4), low (<4)

- `adaptive-config.ts` (300 LOC) - Quality tier configurations
  - HIGH: 150 particles, blur, shadows, 1.0x speed
  - MEDIUM: 75 particles, no effects, 1.2x speed
  - LOW: 0 particles, 1.5x speed
  - REDUCED_MOTION: 100x speed (instant)

- `performanceMonitor.ts` (18 LOC) - Basic perf measurement utils

#### **Animation Utilities:**
- `scrollAnimations.ts` (47 LOC) - Class-based scroll animation orchestrator
- `motionVariants.ts` (155 LOC) - Framer Motion variant library (11 variants)
- `smoothScroll.ts` (22 LOC) - Native smooth scroll utilities

#### **Image Optimization:**
- `imageOptimization.ts` (40 LOC) - Responsive image props + blur placeholders

---

### /src/pages/ (13 pages)

**Active Pages (9):**
1. **Index.tsx** (92 LOC) - Homepage
2. **BriefingEngine.tsx** (292 LOC) - **FLAGSHIP** - Extensive GSAP + Lenis
3. **Studios.tsx** (60 LOC) - Studios product page
4. **ConversationalAI.tsx** (61 LOC) - ElevenLabs integration
5. **About.tsx** (98 LOC) - Company info
6. **Contact.tsx** (125 LOC) - Contact form
7. **PrivacyPolicy.tsx** (233 LOC) - Legal compliance (GDPR, CCPA)
8. **Analytics.tsx** (387 LOC) - **LARGEST PAGE** - Internal YouTube metrics dashboard
9. **NotFound.tsx** (27 LOC) - 404 error page

**Disabled/Legacy (4):**
- `HomePage.tsx` (16 LOC) - Unused alternative homepage
- `Agents.tsx` (28 LOC) - **DISABLED** - Service under development
- `StudiosEngine.tsx` (159 LOC) - **LEGACY** - Redirects to /briefing-engine
- `CardRevealTest.tsx` (291 LOC) - **TEST PAGE** - GSAP showcase (not routed)

**Pages with GSAP:** 3
- BriefingEngine (extensive), CardRevealTest (advanced), Index (light)

**Pages with Framer Motion:** 1
- Analytics (card animations)

---

### /src/styles/ (3 files)

**base.css** (297 LOC):
- Geist font setup (variable weights 100-900)
- 27 CSS custom properties (colors, timing, shadows)
- Near-pure-black backgrounds (#050505, #0A0A0A)
- Professional blue/cyan/teal palette
- Glassmorphism system (5 levels: 12px-24px blur)
- Animation timing variables (100ms-800ms)
- 3D shadow depth system

**animations.css** (173 LOC):
- 11 keyframe animations (fadeIn variants, scaleIn, ripple, pulse, glow, shimmer, spin)
- Fade-in system with data attributes
- Motion-safe wrapper (respects prefers-reduced-motion)

**utilities.css** (109 LOC):
- Glassmorphism classes
- Text effects (gradient, neon glow)
- GPU optimization classes (.transform-gpu, .gpu-optimized)
- Animation delays
- Accessibility (reduced motion support)

---

### /src/types/ (3 files)

**global.d.ts**:
- Window.lenis interface (smooth scroll)
- Window.va (Vercel Analytics)
- Window.__particleHeroStatus (debug flag)
- Window.__cre8tiveRoot (React root cache)

**gtm.d.ts**:
- Window.dataLayer interface

**elevenlabs.d.ts**:
- JSX custom element: `<elevenlabs-convai>`

---

### /src/constants/ (2 files)

**assets.ts** - Asset path mappings
**featureFlags.ts** - Feature toggle system

---

### /src/lib/ (3 items)

**error/ErrorBoundary.tsx** - React error boundary
**perf-monitoring.ts** - Performance utilities
**utils.ts** - cn() utility (Tailwind class merging)

---

### /src/config/ (empty)
**Note:** Configs are in project root (tailwind.config.js, vite.config.ts, etc.)

---

## Root Files

**main.tsx** - Application entry point (React 18 StrictMode)
**App.tsx** - Route configuration (React Router v6)
**index.tsx** - Secondary entry (legacy)
**App.css** - App-level styles
**index.css** - Global imports (Tailwind directives)
**vite-env.d.ts** - Vite type definitions

---

## Summary Statistics

**Total Files:** 215 source files
**Total Components:** 178
- Briefing: 27 components (~6,596 LOC)
- Other: 151 components
- shadcn/ui: 58 components (38% of total)

**Animation Breakdown:**
- GSAP components: 18 (10%)
- Framer Motion components: 16 (9%)
- Three.js components: 1 (<1%)
- CSS-only animations: Rest

**Custom Hooks:** 17
**Utility Modules:** 7
**Pages:** 13 (9 active, 4 disabled/legacy)

**Lines of Code (Estimated):**
- Components: ~15,000 LOC
- Hooks: ~1,200 LOC
- Utils: ~1,000 LOC
- Pages: ~1,800 LOC
- Styles: ~580 LOC
- **Total:** ~20,000+ LOC

---

## Architecture Patterns Identified

**Component Organization:**
- Feature-based (briefing/, studios/, agents/)
- Device-specific (desktop/, mobile/)
- Shared utilities (core/, shared/)
- UI primitives (ui/)

**Performance Patterns:**
- Adaptive quality system (Story 1.14)
- RAF-batched layout reads
- GPU optimization hints
- Lazy loading (code-split + Intersection Observer)

**Accessibility:**
- prefers-reduced-motion support (92% of animated components)
- WCAG 2.1 Level AA targets
- Semantic HTML throughout

**Animation Strategy:**
- GSAP for complex scroll-driven animations (briefing/)
- Framer Motion for UI micro-interactions
- Three.js for particle systems
- CSS for simple transitions

---

**Generated:** November 3, 2025 | **Analysis Mode:** Exhaustive with 5 Parallel Explore Agents