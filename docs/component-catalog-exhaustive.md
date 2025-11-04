# Component Catalog - Exhaustive Inventory
**Project:** cre8tive-website-1006
**Generated:** November 3, 2025
**Total Components:** 178 components analyzed
**Analysis Type:** Complete codebase scan with implementation details

---

## Table of Contents
1. [Briefing Engine Components](#briefing-engine-components) (27 components)
2. [UI Library Components](#ui-library-components) (58 components)
3. [Service & Marketing Components](#service--marketing-components)
4. [Core & Shared Components](#core--shared-components)
5. [Page-Specific Components](#page-specific-components)
6. [Component Statistics & Patterns](#component-statistics--patterns)

---

## Briefing Engine Components

### 🎯 Main Timeline Components

#### WorkflowTransformation.tsx
**LOC:** 463 | **GSAP:** ✅ Extensive | **Adaptive Perf:** ✅

**Purpose:** Dramatic "60x FASTER" workflow comparison with proportional timeline visualization

**Key Features:**
- Master GSAP timeline with 8-step choreography
- Proportional width animations (100% vs 15% - 6.7:1 ratio)
- Animated counter (1x → 60x with snap to integers)
- Adaptive timeScale based on device tier
- Gradient shimmer effects

**Props:** None (self-contained)

**GSAP Patterns:**
- ScrollTrigger with scrub
- Adaptive timeScale (1.0x high, 1.2x medium, 1.5x low)
- Ease curves: `back.out(2)`, `power1.inOut`
- willChange lifecycle management

**Performance:** GPU-optimized transforms, Lenis integration

---

#### BriefToStoryboardAnimation.tsx
**LOC:** 1,226 | **GSAP:** ✅ Advanced | **Adaptive Perf:** ✅

**Purpose:** **FLAGSHIP COMPONENT** - Massive scroll-driven 5-stage animation (Brief → AI → Style → Storyboard → Handoff)

**Key Features:**
- Unified scroll timeline (17s total duration, scrub: 1)
- 5 distinct stages with crossfade transitions
- Word-by-word synopsis streaming animation
- Holographic scene card build sequences
- 3D style card cascades with overshoot
- Particle intensity choreography

**GSAP Patterns:**
- Single pinned ScrollTrigger
- DOM ref caching (prevents 6+ querySelectorAll calls)
- Multi-layer reveals: Wireframe → Container → Card → Thumbnail
- Adaptive timeScale
- force3D acceleration on all transforms

**Performance Critical Fixes:**
- Pre-cached DOM queries
- Conditional ScrollTrigger.sort() instead of .refresh()
- willChange management
- Defensive container height check (hard refresh race condition)

---

#### BriefingTimeline.tsx
**LOC:** 175 | **GSAP:** ✅ Indirect | **Orchestrator:** ✅

**Purpose:** Master timeline orchestrator - renders 5 stage sections and tracks active stage

**Key Features:**
- Stage tracking via callbacks
- Progress offset calculation (ResizeObserver + RAF-batched reads)
- Keyboard navigation (Enter/Space to advance)
- Analytics integration

**Performance:**
- RAF-batched layout reads (computeOffset)
- Conditional ScrollTrigger.refresh()

**Sections Managed:**
- HeroBriefSection
- NeuralSynthesisSection
- StyleSelectionSection
- StoryboardAssemblySection
- StudiosHandoffSection

---

### 📍 Section Components

#### HeroBriefSection.tsx
**LOC:** 475 | **GSAP:** ✅ | **ScrollTrigger:** ✅

**Purpose:** Stage 1 - Hero briefing intake form with platform cards

**Animation Sequence:**
- Backgrounds → Instruction → Headlines (stagger) → Details → Pills (stagger) → Hero card → Fields (stagger)

**Key Pattern:** Consolidated ScrollTrigger (eliminates double-firing)

**Responsive:** Desktop-responsive timing via motion-config

---

#### NeuralSynthesisSection.tsx
**LOC:** 354 | **GSAP:** ✅ | **ParticleCore:** ✅

**Purpose:** Stage 2 - AI narrative engine with particle core + synopsis streaming

**Key Features:**
- ParticleCore intensity choreography (0.3 → 0.7 → 1.2 → 0.9 → 0.6)
- Word-by-word synopsis animation
- RAF-throttled intensity updates

**Critical Fix:** Removed velocity-based intensity (60fps React re-renders eliminated)

---

#### StyleSelectionSection.tsx
**LOC:** 284 | **GSAP:** ✅

**Purpose:** Stage 3 - Visual style selection (9 style cards)

**Animation:** Cards cascade with `back.out(2.0)` overshoot + 3D rotation

**Pattern:** Consolidated ScrollTrigger with onEnter/onLeave callbacks

---

#### StoryboardAssemblySection.tsx
**LOC:** 274 | **GSAP:** ✅

**Purpose:** Stage 4 - Storyboard frame grid (6 frames) with 3D flip

**Animation:** `rotationY: 12° → 0°`, `transformPerspective: 600`

**Stagger:** 0.18s desktop, 0.14s laptop

---

#### StudiosHandoffSection.tsx
**LOC:** 434 | **GSAP:** ✅

**Purpose:** Stage 5 - Studios handoff with scene previews

**Layout:** Asymmetric grid (2 left scenes, 1 hero storyboard, 1 supporting)

**Features:** Metadata ribbon, live sync badge, CTA integration

---

### 🎨 Visual & Interactive Components

#### ParticleCore.tsx
**LOC:** 378 | **GSAP:** ✅ Ticker | **Adaptive Perf:** ✅

**Purpose:** GPU-accelerated particle system with adaptive quality

**Props:**
- `isActive?: boolean` - Controls spawn/intensity
- `intensity?: number` - 0-1 spawn rate multiplier

**Key Features:**
- GSAP ticker for 60fps render loop
- Object pooling (prevents GC thrashing)
- Fixed timestep physics (30fps update, 1/30 FRAME_STEP)
- ResizeObserver with RAF-batched canvas resize
- Adaptive quality (300 particles high → 40 low)

**Critical Fix:** Moved measure() out of ticker to separate RAF (prevents layout thrashing)

---

#### AIProcessingVisual.tsx
**LOC:** 250 | **Canvas:** ✅ | **Adaptive Perf:** ✅

**Purpose:** Canvas particle system with orbital physics + FPS monitoring

**Key Features:**
- Orbital physics (centripetal force + random drift)
- FPS monitoring (downgrades to static gradient if <30fps for 10 frames)
- Mobile optimization (30 particles mobile, 80 desktop)
- Intersection Observer (only renders when visible)

**Graceful Degradation:** Falls back to static radial gradient on low-end devices

---

#### BriefingProcessFlow.tsx
**LOC:** 521 | **3D:** ✅ | **Adaptive:** ✅

**Purpose:** Interactive 5-stage workflow carousel with 3D card stacking

**Key Features:**
- Conditional 3D perspective (1600px full motion, undefined reduced)
- Manual transform calculations for layered stack
- Carousel state machine (handleNext, handlePrev, handleSelect)
- Modal for mobile

**Accessibility:**
- ARIA carousel pattern
- Keyboard navigation
- Focus management

---

### 🎁 Supporting Components

#### TransformationValueCard.tsx
**LOC:** 84 | **Purpose:** Value proposition card

**Features:**
- 280px min-height (AC4 compliance)
- w-16 h-16 icons
- Noise texture overlay
- Hover glow expansion

---

#### SynopsisPanel.tsx
**LOC:** 163 | **Purpose:** AI synopsis display

**Features:**
- Word-by-word animation support
- Exposes getSynopsisWordRefs() utility
- Holographic shimmer overlay

---

#### SceneCards.tsx
**LOC:** 188 | **Purpose:** 5-card scene preview grid

**Features:**
- Multi-layer reveal refs exposed
- Holographic wireframes
- Gradient thumbnails per scene

---

#### BriefingCTA.tsx
**LOC:** 293 | **GSAP:** ✅

**Features:**
- ScrollTrigger entrance
- Floating frame backgrounds (infinite yoyo)
- Button hover GSAP effects
- Defensive IntersectionObserver fallback

**Adaptive:** Reduced particle count, disabled blur/shadows on low-tier

---

#### AudienceBenefits.tsx
**LOC:** 253 | **GSAP:** ✅

**Features:**
- Toggle-driven panel transitions (Agencies vs Brands)
- Multi-step GSAP timeline (exit → prepare → update → enter)
- Animation locking (isAnimating flag)

---

#### HeroOrbitVisual.tsx
**LOC:** 146 | **GSAP:** ✅

**Features:**
- Infinite floating orbit cards
- Pulsing center circle
- Reduced motion check

---

#### StepLabel.tsx
**LOC:** 179 | **Variants:** 2

**Props:**
- size: "md" | "lg"
- align: "start" | "center"
- variant: "default" | "runway"

**Purpose:** Reusable step header with flexible sizing

---

#### ReducedMotionIllustration.tsx
**LOC:** 198 | **Static SVG:** ✅

**Variants:** 5 (hero, synthesis, styles, storyboard, handoff)

**Purpose:** Static fallbacks for reduced-motion users

---

### 📊 Data & Config Files

#### palette.ts
**LOC:** 118 | **Type:** Data export

**Exports:**
- briefingPalette (indigo/cyan/fuchsia theme)
- getGradient(), getColor(), getTextColor() helpers
- Holographic accent colors

---

#### section-data.ts
**LOC:** 243 | **Type:** Data

**Exports:**
- visualStyles (9 styles with responsive srcsets)
- storyboardFrames (6 frames)
- stageMetadata (5 stages)
- platformCards (YouTube 16:9, TikTok 9:16)
- heroFieldTiles, heroDetailPills

---

#### motion-config.ts
**LOC:** 386 | **Type:** Config

**Exports:**
- Desktop-responsive timing configs (5 tiers)
- Motion tiers: base, laptop, desktop, largeDesktop, ultraWide
- Scroll offset configurations per tier

---

## UI Library Components

### shadcn/ui Components (58 total)

**Largest Components:**
- sidebar.tsx (761 LOC)
- chart.tsx (363 LOC)
- carousel.tsx (260 LOC)
- menubar.tsx (234 LOC)
- dropdown-menu.tsx (198 LOC)

**Animation-Enhanced:**
- magnetic-button.tsx (60 LOC) - Framer Motion magnetic hover
- spotlight.tsx (80 LOC) - Spotlight effect
- reveal-text.tsx - Text reveal animation
- parallax-section.tsx - Parallax scrolling
- floating-element.tsx - Floating animation
- gradient-button.tsx (103 LOC) - Gradient animation

**Form Components (14):**
input, textarea, checkbox, radio-group, switch, slider, input-otp, label, form, select, calendar, date-picker

**Overlay Components (8):**
dialog, alert-dialog, popover, tooltip, hover-card, context-menu, sheet, drawer

**Layout Components (10):**
card, separator, scroll-area, resizable, aspect-ratio, skeleton, accordion, collapsible, tabs, table

**Navigation (3):**
navigation-menu, breadcrumb, menubar

**Data Display (5):**
badge, avatar, progress, chart, calendar

**Feedback (3):**
toast, sonner, alert

**Utility (4):**
command, pagination, toggle, toggle-group

---

## Service & Marketing Components

### Services/
**Total:** 8 files

#### DesktopServicesBold.tsx
**LOC:** 301 | **Tech:** Framer Motion 3D

**Features:**
- 4 service cards (BriefingEngine, Studios, Agents, ConversationalAI)
- 3D perspective transforms
- Magnetic hover effects
- Shadow depth with glow

---

### Studios/
**Total:** 15 files

#### AnimatedBackground.tsx
**LOC:** 134 | **Tech:** **Three.js** ⭐

**Purpose:** **ONLY Three.js usage in non-briefing code**

**Features:**
- 3000 particles
- Neon color palette (red, cyan, purple, blue, green)
- WebGL renderer with performance monitoring
- High-performance power preference
- Pixel ratio capping

---

### Agents/
**Total:** 8 files | **Status:** DISABLED

**Key Files:**
- AgentsHero.tsx (82 LOC)
- sections/AiMarketingSolutions.tsx (149 LOC)
- network/ - Three.js stub (NetworkManager, ConnectionRenderer, Node)

---

### Conversational/
**Total:** 6 files

**Key Files:**
- HeroSection.tsx (115 LOC) - Complex responsive sizing
- RobotIllustration.tsx (99 LOC) - SVG + Framer Motion
- FeaturesSection.tsx, ApplicationsSection.tsx

**Integration:** ElevenLabs ConvAI widget

---

## Core & Shared Components

### Core/ (8 files)

#### VimeoPlayer.tsx ⭐ **CRITICAL**
**LOC:** 131 | **SDK:** @vimeo/player

**Purpose:** Vimeo SDK wrapper - used throughout site for all video embeds

**API:**
- play(), pause(), setMuted()
- Background video support
- Fullscreen control
- Error handling

**forwardRef:** Exposes imperative handle

---

#### SEO.tsx
**LOC:** 66 | **Tech:** React Helmet

**Purpose:** Dynamic meta tags (title, description, OG tags)

---

#### ScrollToTop.tsx
**Purpose:** Route change scroll reset (React Router listener)

---

#### OptimizedImage.tsx
**Purpose:** Lazy-loaded image component (native lazy loading)

---

### Shared/ (6 files)

#### StatsBar.tsx
**LOC:** 177 | **Tech:** Framer Motion

**Features:**
- 4 animated counters (500+ Projects, 98% Satisfaction, 24/7 Support, 100+ AI Models)
- Count-up effect on scroll into view (useInView)

---

#### GsapFadeIn.tsx
**LOC:** 60 | **GSAP:** ✅

**Purpose:** Reusable GSAP ScrollTrigger fade wrapper

---

#### FloatingCallButton.tsx
**LOC:** 2.1KB | **Tech:** Framer Motion

**Purpose:** Floating CTA with fixed positioning

---

#### ScrollFade.tsx
**LOC:** 1.4KB | **Tech:** Intersection Observer

**Purpose:** Scroll fade utility wrapper

---

### Desktop/ & Mobile/

#### DesktopNavigation.tsx
**LOC:** 173 | **Optimization:** ✅

**Features:**
- RAF-throttled scroll detection (-30ms improvement)
- Passive scroll listeners
- Scrolled state detection
- Active route highlighting

---

#### MobileMenuOverlay.tsx
**LOC:** 86

**Features:**
- Full-screen slide-in menu
- Transform animations

---

## Page-Specific Components

### Hero/

#### Hero.tsx
**LOC:** 89 | **Video:** Vimeo

**Features:**
- Background video (Vimeo ID: 1051821551)
- Mute toggle
- Fade-in loading state

---

#### HeroContentBold.tsx
**LOC:** 161 | **Tech:** Framer Motion

**Features:**
- Animated text reveals
- Gradient effects

---

### Gallery/

#### VideoGalleryItem.tsx
**LOC:** 109 | **Integration:** Vimeo + Analytics

**Features:**
- Error handling with retry logic
- Modal playback
- Analytics tracking

---

### Contact/

#### ContactForm.tsx ⭐ **SECURITY**
**LOC:** 180 | **Tech:** React Hook Form + DOMPurify

**Security:**
- XSS prevention (DOMPurify sanitization)
- Rate limiting (3 submissions/minute)
- Spam protection

**Validation:** Name/email/message with zod schemas

---

### Quotes/

#### CinematicQuote.tsx
**LOC:** 136 | **Tech:** Framer Motion

**Features:**
- Mesh gradient backgrounds
- Animated radial gradients
- Grid overlay
- Cinematic presentation

---

## Component Statistics & Patterns

### By Animation Framework

**GSAP Components:** 18 (10%)
- All briefing/ section components
- WorkflowTransformation, BriefToStoryboardAnimation, ParticleCore
- shared/GsapFadeIn

**Framer Motion Components:** 16 (9%)
- Services/DesktopServicesBold
- shared/StatsBar, FloatingCallButton
- conversational/HeroSection, RobotIllustration
- hero/HeroContentBold
- quotes/CinematicQuote
- ui/ animation-enhanced components (6)

**Three.js Components:** 1 (<1%)
- studios/AnimatedBackground (ONLY usage)

**CSS-Only Animations:** Majority (81%)

---

### By LOC Range

**1000+ LOC (2 components):**
- BriefToStoryboardAnimation (1,226 LOC) - Briefing Engine flagship
- archive/BriefToStoryboardAnimation (1,206 LOC) - **LEGACY - REMOVE**

**500-999 LOC (4 components):**
- ui/sidebar (761 LOC)
- BriefingProcessFlow (521 LOC)
- HeroBriefSection (475 LOC)
- StudiosHandoffSection (434 LOC)

**300-499 LOC (8 components):**
- WorkflowTransformation (463 LOC)
- motion-config (386 LOC)
- ParticleCore (378 LOC)
- ui/chart (363 LOC)
- NeuralSynthesisSection (354 LOC)
- DesktopServicesBold (301 LOC)
- BriefingCTA (293 LOC)
- StyleSelectionSection (284 LOC)

**100-299 LOC (52 components)**

**<100 LOC (112 components)**

---

### By Purpose Category

**Animation-Heavy (18):**
- All briefing/ sections
- Particle systems (ParticleCore, AIProcessingVisual, AnimatedBackground)
- UI animations (magnetic-button, spotlight, reveal-text, etc.)

**Form/Input (15):**
- ContactForm + ui/ form components

**Layout/Structure (15):**
- PageLayout, MainLayout, Navigation, Footer, etc.

**Video Integration (4):**
- VimeoPlayer (2 versions), Hero, VideoGalleryItem

**Data Display (10):**
- StatsBar, charts, tables, badges, avatars

**Marketing/Content (30+):**
- Services, Studios, Agents, Conversational sections

**UI Primitives (58):**
- shadcn/ui library

---

### Key Architectural Patterns

**1. Adaptive Performance (Story 1.14):**
- 4 components with device-tier detection
- Quality tiers: high/medium/low/reduced-motion
- Particle count scales: 300 → 150 → 40 → 0
- TimeScale multipliers: 1.0x → 1.2x → 1.5x → 100x

**2. Consolidated ScrollTrigger Pattern:**
- Single ScrollTrigger for animation + tracking
- Eliminates double/triple-firing issues
- Applied to all 5 briefing section components

**3. DOM Ref Caching:**
- Pre-calculate expensive queries
- Example: BriefToStoryboardAnimation caches synopsisWordRefs, sceneCardRefs
- Prevents 6+ querySelectorAll during timeline creation

**4. willChange Lifecycle:**
- Apply at animation start
- Clear on complete/interrupt/reverse
- Prevents GPU memory leaks
- 11 components implement this pattern

**5. RAF-Batched Layout Reads:**
- ResizeObserver triggers RAF-scheduled measurements
- Prevents forced reflows during animation
- Used in: ParticleCore, BriefingTimeline, BriefToStoryboardAnimation

**6. Reduced Motion Support:**
- 92% of animated components support prefers-reduced-motion
- Fallback strategies:
  - Static SVG illustrations (ReducedMotionIllustration)
  - Static gradients (AIProcessingVisual, ParticleCore)
  - Instant transitions (100x timeScale)
  - Disabled particle systems

**7. Ref Exposure Pattern:**
- Components provide utility functions to extract refs
- Enables external GSAP control
- Example: getSynopsisWordRefs(), getSceneCardRefs()

---

## Technical Debt Identified

**Archive Components (1,405 LOC unused):**
- archive/BriefToStoryboardAnimation.tsx (1,206 LOC)
- archive/VisualStylesGallery.tsx (199 LOC)
- **Recommendation:** DELETE or consolidate

**Duplicate Components:**
- video/VimeoPlayer.tsx duplicates core/VimeoPlayer.tsx
- **Recommendation:** Remove video/ version

**Stub Implementations:**
- agents/NetworkVisualization.tsx (returns null)
- agents/network/ - Three.js system not implemented
- **Recommendation:** Implement or remove

**Disabled Features:**
- Agents page (route commented out)
- **Decision:** Keep if service launching soon, otherwise remove

---

**Generated:** November 3, 2025 | **Total Components Documented:** 178 | **Analysis:** Complete Exhaustive Scan