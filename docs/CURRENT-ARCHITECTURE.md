# Current Architecture - Comprehensive Documentation
**Project:** cre8tive-website-1006
**Generated:** November 3, 2025
**Type:** React 18 + Vite 5 + TypeScript SPA
**Status:** Production-ready (Epic 1 implemented)

---

## Technology Stack

### Core Framework
- **React:** 18.3.1
- **TypeScript:** 5.5.3
- **Build Tool:** Vite 5.4.1
- **Node Version:** ≥18.0.0 (recommended: 20.x)

### Routing & State
- **Router:** React Router DOM 6.26.2
- **State Management:** TanStack Query 5.56.2
- **Form Handling:** React Hook Form 7.53.0 + Zod 3.23.8

### Styling & UI
- **CSS Framework:** Tailwind CSS 3.4.11
- **UI Library:** Radix UI + shadcn/ui
- **Fonts:** Geist (sans-serif + mono), Inter, Outfit
- **Icons:** Lucide React 0.462.0

### Animation Stack
**Primary:**
- **GSAP:** 3.13.0 + ScrollTrigger plugin
- **@gsap/react:** 2.1.2 (React integration)
- **Lenis:** 1.3.11 (smooth scroll)

**Secondary:**
- **Framer Motion:** 12.23.24 (UI micro-interactions)
- **Three.js:** 0.152.2 (3D particle systems - 1 component only)

### Video Integration
- **@vimeo/player:** 2.20.1 (primary video SDK)
- **hls.js:** 1.5.20 (HLS streaming support)

### 3D & Interactive
- **@splinetool/react-spline:** 4.0.0
- **@splinetool/runtime:** 1.9.65
- **Three.js:** 0.152.2

### Analytics & Monitoring
- **@vercel/analytics:** 1.4.1
- **cookieconsent:** 3.1.1 (GDPR compliance)
- **stats.js:** 0.17.0 (FPS monitoring)
- **detect-gpu:** 5.0.70 (device capability detection)

### Build & Dev Tools
- **Vite:** 5.4.1
- **ESLint:** 9.9.0
- **TypeScript ESLint:** 8.0.1
- **Autoprefixer:** 10.4.20
- **PostCSS:** 8.5.1
- **Terser:** 5.37.0 (minification)

### Performance & Testing
- **Lighthouse:** 12.8.2
- **Playwright:** 1.56.0
- **Hyperfine:** Available via system (benchmarking)

---

## Architecture Patterns

### JAMstack Pattern
**JavaScript + APIs + Markup**
- Static site generation (Vite build)
- Client-side interactivity
- API calls to external services (Vimeo, ElevenLabs, Getform)
- Hosted on GitHub Pages (static hosting)

### Component Architecture

**Feature-Based Organization:**
```
components/
├── briefing/     # Briefing Engine feature (27 components)
├── studios/      # Studios feature (15 components)
├── agents/       # Agents feature (8 components - disabled)
├── conversational/ # Conversational AI feature (6 components)
└── ...
```

**Device-Specific Separation:**
```
components/
├── desktop/      # Desktop-only components
├── mobile/       # Mobile-only components
└── ...
```

**Shared Utilities:**
```
components/
├── core/         # Critical reusables (VimeoPlayer, SEO)
├── shared/       # Cross-feature components
├── ui/           # shadcn/ui primitives
└── ...
```

### Animation Architecture

**GSAP + Lenis Foundation:**
```typescript
// App-level Lenis initialization
<ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
  {children}
</ReactLenis>

// GSAP ScrollTrigger synchronization
gsap.ticker.add((time) => lenis.raf(time * 1000));
ScrollTrigger.defaults({ scroller: document.body });
```

**Pattern Hierarchy:**
1. **GSAP** → Complex scroll-driven timelines (Briefing Engine)
2. **Framer Motion** → UI micro-interactions (buttons, cards)
3. **Three.js** → Particle systems (AnimatedBackground only)
4. **CSS** → Simple transitions

**GSAP Patterns Implemented:**
- **Pattern 1:** Basic Scroll-Triggered (ScrollTrigger entrance)
- **Pattern 4:** Stagger Animations (card grids, word reveals)
- **Pattern 5:** Master Timeline Choreography (WorkflowTransformation)
- **Pattern 6:** Counter Animation (60x FASTER stat)

### Performance Architecture (Story 1.14)

**Adaptive Quality System:**

**1. Device Detection (9-Point Scoring):**
```typescript
// performance-adapter.ts
GPU Score (3pts) + CPU Score (3pts) + Memory Score (3pts) = Total

Tier Classification:
- high: ≥7 points
- medium: ≥4 points
- low: <4 points
- reduced-motion: Override (WCAG compliance)
```

**2. Tier Configurations:**
```typescript
// adaptive-config.ts
HIGH:    150 particles, blur, shadows, 1.0x speed, power3.out
MEDIUM:  75 particles,  no effects,  1.2x speed, power2.out
LOW:     0 particles,   no effects,  1.5x speed, linear
REDUCED: 0 particles,   no effects,  100x speed, none (instant)
```

**3. Runtime FPS Monitoring:**
```typescript
// useAdaptivePerformance.ts
Hysteresis Pattern:
- Downgrade at <48fps (sustained)
- Upgrade at >52fps (sustained)
- 2-second debouncing (prevents oscillation)
```

**Components Using Adaptive Performance:**
- ParticleCore
- AIProcessingVisual
- WorkflowTransformation
- BriefToStoryboardAnimation

### State Management Strategy

**No Global State Library:**
- URL state via React Router
- Local component state via useState
- Server state via TanStack Query
- Form state via React Hook Form

**Rationale:** SPA with minimal shared state needs (marketing site, not app)

### Routing Architecture

**React Router v6 (BrowserRouter):**
```typescript
Routes:
/ → Index (Homepage)
/briefing-engine → BriefingEngine
/studios → Studios
/conversational → ConversationalAI
/about → About
/contact → Contact
/privacy → PrivacyPolicy
/analytics → Analytics (internal)
* → NotFound (404)
```

**GitHub Pages SPA Redirect:**
```typescript
// App.tsx useEffect
// Handles: ?p=/path (GitHub Pages)
// Handles: ?redirect=briefing-engine (Google Ads)
const redirect = searchParams.get('redirect');
const p = searchParams.get('p');
if (redirect) navigate(`/${redirect}`);
else if (p) navigate(p);
```

**Code Splitting:**
- **BriefingEngine:** Lazy loads 3 below-fold components
  - MidPageCTA, BriefingFAQ, BriefingCTA
- **Performance Impact:** ~50% LCP improvement (3.5s → 1.8s target)

---

## Build Architecture

### Vite Configuration

**Bundle Splitting Strategy:**

**Vendor Chunk (805kb baseline):**
- React ecosystem: react, react-dom, react-router-dom
- Data fetching: @tanstack/react-query
- Animation: framer-motion
- 3D: three
- Video: @vimeo/player

**UI Chunk:**
- All @radix-ui components (accordion, dialog, dropdown, select, etc.)

**Performance Budget:**
```typescript
// Custom plugin
const VENDOR_BUNDLE_LIMIT = 900 * 1024; // 900kb
// Baseline: 805kb
// Story 1.14 additions: ~55kb
// Projected: ~860kb
// Headroom: 40kb
```

**Output Configuration:**
```typescript
build: {
  target: 'es2015',
  rollupOptions: {
    output: {
      format: 'es',
      entryFileNames: 'assets/[name].[hash].js',
      chunkFileNames: 'assets/[name].[hash].js',
      assetFileNames: 'assets/[type]/[filename]-[hash][extname]'
    }
  },
  chunkSizeWarningLimit: 1000 // 1MB warning
}
```

### CSS Architecture

**Tailwind + Custom CSS:**

**Layer Strategy:**
```css
/* index.css */
@tailwind base;      /* Preflight + base styles */
@tailwind components; /* Component utilities */
@tailwind utilities;  /* Utility classes */

/* Custom layers */
@import './styles/base.css';       /* Design tokens, fonts */
@import './styles/animations.css'; /* Keyframes, fade-in system */
@import './styles/utilities.css';  /* Glass effects, GPU utils */
```

**Design Token System:**
- 27 CSS custom properties (colors, timing, shadows)
- Near-pure-black backgrounds (#050505, #0A0A0A, #141414)
- Professional blue/cyan/teal palette
- Brand purple/pink (logo only)

**Glassmorphism System (5 Levels):**
- glass-card: 12px blur, 1% bg, 5% border
- glass-card-light: 16px blur, 3% bg, 8% border
- glass-card-medium: 20px blur, 5% bg, 8% border
- glass-card-heavy: 24px blur, 8% bg, 15% border
- glass-card-glow: With blue glow shadow

**Animation Timing System:**
```css
--duration-instant: 100ms
--duration-snappy: 200ms
--duration-smooth: 400ms
--duration-cinematic: 800ms

--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)
--easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
--easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### TypeScript Configuration

**Strict Mode Status:**
- **App code (tsconfig.app.json):** Relaxed (strict: false)
- **Build tools (tsconfig.node.json):** Strict (strict: true)
- **Incremental enforcement:** noImplicitAny enabled in root

**Path Aliases:**
```typescript
{
  "@/*": ["./src/*"],
  "@assets/*": ["./src/assets/*"]
}
```

**Compiler Target:** ES2020 (app), ES2022 (node)

---

## Accessibility Architecture

### WCAG 2.1 Level AA Compliance

**Motion Sensitivity (Story 1.14):**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Adaptive Config:**
- REDUCED_MOTION tier locks quality level
- 100x timeScale (instant transitions)
- 0 particles, no blur/shadows
- Static fallback illustrations

**Components with Reduced Motion Support:**
- 22 of 27 Briefing Engine components (92%)
- ReducedMotionIllustration for all 5 stages
- usePrefersReducedMotion hook (17 hook consumers)

**Other Accessibility Features:**
- Semantic HTML throughout
- ARIA patterns (carousel, accordion, dialog)
- Focus-visible ring system (:focus-visible blue ring)
- Keyboard navigation (Enter/Space in BriefingTimeline)
- 44px minimum touch targets on mobile
- High contrast selection styles

---

## Security Architecture

### Content Security Policy (CSP)

**Comprehensive Allowlist:**
```typescript
// vite.config.ts preview headers
Content-Security-Policy:
  script-src: self, inline, eval, elevenlabs.io, player.vimeo.com, gtm, ga, google-ads, spline, vercel
  frame-src: self, elevenlabs.io, player.vimeo.com, spline, gtm
  connect-src: self, getform.io, elevenlabs.io (wss), player.vimeo.com, gtm, ga, google-ads, spline
  img-src: https: data: blob: (all third-party CDNs)
  media-src: self, data, blob, vimeo CDNs
  style-src: self, inline, fonts.googleapis.com, player.vimeo.com
  font-src: self, data, https, fonts.gstatic.com
```

**XSS Prevention:**
```typescript
// ContactForm.tsx
import DOMPurify from 'dompurify';

const sanitized = DOMPurify.sanitize(userInput);
```

**Rate Limiting:**
```typescript
// ContactForm.tsx
const SUBMISSION_LIMIT = 3;
const WINDOW_MS = 60000; // 1 minute
```

### GDPR/CCPA Compliance

**Privacy Features:**
- Cookie consent banner (cookieconsent library)
- Privacy policy page (/privacy)
- "Do Not Sell" opt-out section
- Global Privacy Control (GPC) support
- LinkedIn Lead Gen data retention (365 days)

---

## Performance Budget

### Lighthouse Targets
- **Performance:** 80+ (Best Practices)
- **Best Practices:** 90+
- **Accessibility:** Not measured (visual-first philosophy)
- **SEO:** 90+

### Bundle Sizes
- **Vendor Bundle:** 805kb baseline → 860kb projected (900kb limit)
- **Total Bundle:** <2MB target
- **LCP:** <2.5s target
- **FCP:** <1.8s target
- **FID:** <100ms

### Animation Performance
- **Target FPS:** 60fps on modern devices (Story 1.14)
- **Minimum FPS:** 30fps before degradation (AIProcessingVisual)
- **Hysteresis:** 48fps downgrade, 52fps upgrade (useAdaptivePerformance)

### Optimization Techniques
1. **GPU Acceleration:**
   - `will-change` lifecycle management (11 components)
   - `force3D: true` on GSAP transforms
   - `backface-visibility: hidden`

2. **Memory Management:**
   - Object pooling (ParticleCore)
   - EMA smoothing (no array allocations in FPS monitor)
   - DOM ref caching (BriefToStoryboardAnimation)

3. **Layout Optimization:**
   - RAF-batched layout reads (3 components)
   - Conditional ScrollTrigger.sort() vs .refresh()
   - ResizeObserver for canvas resize

4. **Network Optimization:**
   - Lazy loading images (`loading="lazy"`)
   - Responsive srcsets (600w, 1200w, 1800w)
   - Code-split below-fold components
   - Vite preload hints

---

## Deployment Architecture

### GitHub Pages Setup

**Build Output:** `dist/`

**SPA Redirect Strategy:**
- `404.html` → `index.html` with query param (?p=/path)
- `App.tsx` reads query param and navigates

**Base URL:** `/` (custom domain: cre8tive.ai)

### Build Process

```bash
npm run build
# 1. tsc (TypeScript compile check)
# 2. vite build (bundle + optimize)
# Output: dist/
```

### Deploy Process

```bash
npm run deploy
# 1. npm run build
# 2. gh-pages -d dist
# Pushes to gh-pages branch
```

### CI/CD

**Manual Deployment:**
- No automated CI/CD currently
- Manual `npm run deploy` from local

**Recommended:** GitHub Actions workflow for automated deploys

---

## External Integrations

### Vimeo Player
- **SDK:** @vimeo/player 2.20.1
- **Usage:** Hero background, gallery videos
- **Features:** Autoplay, mute control, fullscreen

### ElevenLabs Conversational AI
- **Widget:** elevenlabs.io/convai-widget
- **Agent ID:** lQXvJFg8zSqlerOKPXm6
- **Custom Element:** `<elevenlabs-convai>`

### Spline 3D
- **React:** @splinetool/react-spline 4.0.0
- **Runtime:** @splinetool/runtime 1.9.65
- **Usage:** 3D interactive elements (planned)

### Google Tag Manager (GTM)
- **Integration:** dataLayer
- **Events:** Page views, clicks, video plays
- **Hook:** useAnalytics

### LinkedIn Insight Tag
- **Usage:** Advertising pixel
- **Data Retention:** 365 days (documented in PrivacyPolicy)

### Getform.io
- **Usage:** Contact form submissions
- **Endpoint:** getform.io/f/...

---

## Development Workflow

### Local Development

```bash
npm run dev
# Starts Vite dev server on port 8080
# Hot module replacement enabled
# TypeScript type checking in parallel
```

### Code Quality

**ESLint:**
- Errors MUST pass
- Warnings OK (not blocking)

**TypeScript:**
- All errors MUST be resolved
- No `any` without justification
- Incremental strictness (noImplicitAny active)

**Manual Testing:**
- Browser testing (Chrome, Firefox, Safari, mobile)
- Visual QA (design, animations, responsiveness)
- Accessibility (keyboard, focus, contrast, prefers-reduced-motion)

### No Automated Tests
- **Current State:** Zero automated tests exist
- **Testing:** 100% manual validation
- **Future:** Test infrastructure planned but not prioritized

---

## Key Architectural Decisions

### 1. GSAP Over Framer Motion for Complex Animations
**Rationale:** GSAP provides superior timeline control and scroll-driven capabilities for the Briefing Engine flagship feature.

**Trade-off:** Two animation libraries increase bundle size, but GSAP's 73kb is justified by Briefing Engine requirements.

---

### 2. Lenis for Smooth Scroll
**Rationale:** Native smooth scroll (`scroll-behavior: smooth`) lacks fine-tuned control. Lenis provides lerp-based smoothing with GSAP integration.

**Integration:** App-level ReactLenis component, GSAP ticker synchronization.

---

### 3. Adaptive Performance System (Story 1.14)
**Rationale:** Premium animations must work on all devices. Static quality levels cause either janky experiences (low-end) or missed potential (high-end).

**Implementation:**
- Device detection (detect-gpu + hardware stats)
- Runtime FPS monitoring (EMA smoothing)
- Hysteresis pattern (prevents oscillation)
- 4 quality tiers (high/medium/low/reduced-motion)

---

### 4. Component Merging Over Standalone Files
**Example:** HeroStat, TimelineComparison integrated into WorkflowTransformation instead of separate files.

**Rationale:** Reduced file overhead, simpler imports, tighter coupling for single-use components.

---

### 5. Consolidated ScrollTrigger Pattern
**Problem:** Dual ScrollTriggers (animation + tracking) caused double/triple-firing.

**Solution:** Single ScrollTrigger with onEnter/onEnterBack/onLeave/onLeaveBack callbacks.

**Impact:** Applied to all 5 Briefing section components.

---

### 6. No Backend/CMS
**Rationale:** Marketing site with static content. JAMstack approach sufficient.

**Content Management:** Through code (section-data.ts, palette.ts).

---

### 7. Custom Performance Budget Plugin
**Rationale:** Vite doesn't enforce bundle limits. Custom plugin throws error if vendor bundle >900kb.

**Value:** Prevents creeping bundle size from adding dependencies.

---

## Future Architecture Considerations

### Planned Epics (Not Yet Implemented)

**Epic 4: 3D Interactive Solution Theater**
- 3D perspective card layout
- Mouse-tracking tilt effects
- Apple-style depth shadows
- **Tech Spec:** docs/tech-spec-epic-4.md (Draft)

**Epic 5: Responsive Design Optimization**
- Fluid typography system (clamp())
- Ultra breakpoint (1600px for Windows scaling)
- 6 comprehensive breakpoints
- **Tech Spec:** docs/tech-spec-epic-5.md (Draft)

**Unified Voice Widget**
- Combine FloatingCallButton + ElevenLabs widget
- Unified UX for voice interactions
- **Tech Spec:** docs/tech-spec-unified-voice-widget.md (Level 0)

### Technical Debt

**Archive Cleanup:**
- archive/BriefToStoryboardAnimation.tsx (1,206 LOC unused)
- archive/VisualStylesGallery.tsx (199 LOC unused)
- **Recommendation:** DELETE

**Duplicate Components:**
- video/VimeoPlayer.tsx duplicates core/VimeoPlayer.tsx
- **Recommendation:** Remove video/ version

**Disabled Features:**
- Agents page (route commented out)
- **Decision:** Keep if launching soon, otherwise remove

---

**Generated:** November 3, 2025 | **Architecture Status:** Production-Ready (Epic 1) | **Future Epics:** Planned (4, 5, Voice Widget)