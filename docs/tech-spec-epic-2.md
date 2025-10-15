# Technical Specification: Research-Validated Content & Portfolio Implementation

Date: 2025-10-09
Author: Cameron (Architect: Winston)
Epic ID: epic-2
Status: Draft (Premium Execution - Option A)
Execution Strategy: Elevate Within Current Stack

---

## Overview

This epic implements research-validated content strategy and portfolio components across Studios and Briefing Engine pages based on comprehensive industry research and competitive analysis documented in COPY_IMPLEMENTATION_GUIDE.md (2025-10-09). The work addresses critical messaging gaps identified through market research: Studios page lacks prominent portfolio showcase and multi-platform differentiation, while Briefing Engine page needs stronger Studios integration messaging and clearer value propositions for agencies vs. brands.

The implementation introduces 5 new React components and updates copy across 11 page sections, leveraging validated industry statistics (Lemonlight 2025, HeyGen 2025, Zebracat 2025) to strengthen positioning. All messaging emphasizes quality-first hybrid AI+human workflows, image-to-video production methods, and native multi-platform delivery (6 platforms: YouTube, TikTok, Instagram, LinkedIn, X, Facebook) as core differentiators. This work integrates seamlessly with Epic 1's technical foundation (GSAP animations, Lenis smooth scroll, dark indigo/cyan/fuchsia palette) while focusing exclusively on content strategy, portfolio presentation, and conversion-optimized messaging.

## Objectives and Scope

### In Scope

**Studios Page Enhancements:**
- ✅ NEW "Our Work" portfolio section with client case studies (challenge → solution → deliverables format)
- ✅ NEW "Multi-Platform Native" section showcasing 6-platform optimization (YouTube, TikTok, Instagram, LinkedIn, X, Facebook)
- ✅ NEW "Image-to-Video Quality" comparison section (professional method vs. text-to-video limitations)
- ✅ UPDATED "Why Choose" section with 3-column value propositions and industry citations
- ✅ UPDATED Testimonials section with enhanced format (Kotia, Marina Lab, Advisor Plus PTD)
- ✅ UPDATED Hero section with quality-focused messaging

**Briefing Engine Page Enhancements:**
- ✅ NEW "Connection to Studios" section (2-column integration flow: storyboard output → Studios production)
- ✅ NEW "Value Props: Agencies vs Brands" section (split 3+3 benefits layout)
- ✅ UPDATED Hero section with Studios connection messaging and feature highlights
- ✅ UPDATED 5-step "Briefing Runway" process copy (corrected flow, insights added)
- ✅ UPDATED CTA section with dual-button strategy and feature pills

**Technical Implementation:**
- ✅ 5 new React components following established patterns (src/components/studios/, src/components/briefing/)
- ✅ Integration with existing Epic 1 infrastructure (GSAP ScrollTrigger, Lenis, glassmorphism, Tailwind)
- ✅ Responsive design across all breakpoints (375px-1920px)
- ✅ WCAG AA accessibility compliance
- ✅ Industry citation badges throughout

### Out of Scope

**Explicitly NOT Included:**
- ❌ Epic 1 technical work (animations, GSAP timelines, color palette updates) - already implemented separately
- ❌ Automated testing infrastructure (remains manual validation per project standards)
- ❌ Backend/CMS integration (static content managed through code)
- ❌ Real portfolio video hosting changes (videos remain on existing platforms)
- ❌ Tool/platform naming (continues policy: describe process, don't name tools like Runway, Topaz, etc.)
- ❌ Unvalidated metrics or placeholder statistics (only research-backed citations used)
- ❌ Fake storyboard-to-production examples (authenticity maintained)
- ❌ Pricing page or e-commerce features

## System Architecture Alignment

This epic aligns with the existing JAMstack architecture (React 18.3.1 SPA + Vite 5.4.1 + GitHub Pages) and builds upon Epic 1's modern animation framework. All new components follow established patterns documented in `docs/architecture/frontend-architecture.md` and `docs/architecture/animation-patterns.md`.

**Existing Infrastructure Utilized:**
- **Component Patterns:** Shadcn/UI primitives, glassmorphism cards (backdrop-filter: blur(20px)), Tailwind utility classes
- **Animation Framework:** GSAP 3.13.0 + ScrollTrigger (scroll-driven reveals), Lenis 1.3.11 (smooth scroll), Framer Motion 12.4.2 (micro-interactions)
- **Color System:** Dark indigo/cyan/fuchsia palette from Epic 1 (`src/components/briefing/palette.ts`), Studios orange/teal/coral palette
- **Typography:** Geist Sans + Inter fonts, `font-black tracking-tighter leading-none` heading pattern
- **Responsive:** Mobile-first Tailwind breakpoints (375px, 768px, 1024px, 1920px)
- **SEO:** react-helmet meta tags, react-snap pre-rendering, sitemap.xml

**Component Integration Points:**
- Studios page components integrate with existing `src/pages/Studios.tsx` structure
- Briefing Engine components integrate with existing `src/pages/BriefingEngine.tsx` (Epic 1 foundation)
- All new components placed in feature directories: `src/components/studios/*`, `src/components/briefing/*`
- Reuses shared components: `ContactCTA`, `FadeIn`, `ScrollFade` wrappers

**No Architecture Changes Required:**
- No new dependencies (all existing framework tools sufficient)
- No routing changes (existing pages updated with new sections)
- No build configuration changes
- No deployment process changes

## Detailed Design

### Services and Modules

This epic introduces **premium execution components** that elevate beyond generic Shadcn/Tailwind patterns. All components use custom shapes, orchestrated GSAP choreography, magnetic micro-interactions, and signature animation timing to create a distinctive visual language.

### **Premium Component Architecture**

**New Epic 2 Component Library Structure:**

```
src/components/epic2/
├── shapes/
│   ├── OrganicCard.tsx           # Blob, hexagon, organic shape variants with SVG masks
│   ├── ShapeMorphing.tsx         # Framer Motion path morphing utilities
│   └── types.ts                  # Shape variant types
├── hooks/
│   ├── useMagneticPull.ts        # Cursor-following magnetic effect
│   ├── useOrchestrator.ts        # GSAP master timeline builder
│   └── useParallaxDepth.ts       # Multi-layer parallax scrolling
├── animations/
│   ├── easings.ts                # Cre8tive signature easing curves
│   ├── choreography.ts           # Pre-built animation sequences
│   └── constants.ts              # Timing/duration standards
└── [feature components below]
```

### **Feature Components (Premium Implementations)**

| Component | Location | Premium Features | Key Inputs | Visual Impact |
|-----------|----------|------------------|------------|---------------|
| **PortfolioSection** | `src/components/studios/PortfolioSection.tsx` | • Orchestrated GSAP timeline (morphing entrances)<br>• Organic blob-shaped cards<br>• Magnetic pull on hover<br>• Staggered spec pill reveals | `portfolioItems: PortfolioItem[]` | 10x more dynamic than generic grid |
| **MultiPlatformCards** | `src/components/studios/MultiPlatformCards.tsx` | • 3D rotation card reveals<br>• Parallax depth layers (3 levels)<br>• Hexagonal card shapes<br>• Custom spring easing | `platforms: PlatformConfig[]` | Platform cards feel like floating UI elements |
| **ImageToVideoComparison** | `src/components/studios/ImageToVideoComparison.tsx` | • Split scroll effect (left up, right down)<br>• Pinned section during scroll<br>• VS divider rotation reveal<br>• Opposing motion creates tension | `comparisonData: ComparisonConfig` | Dramatic visual comparison, not static columns |
| **StudiosConnection** | `src/components/briefing/StudiosConnection.tsx` | • 2-column parallax scroll<br>• Checkmark stagger with elastic easing<br>• CTA magnetic glow effect<br>• Organic flow shapes connecting columns | `connectionFlow: FlowConfig` | Integration feels seamless and fluid |
| **ValuePropsAgenciesBrands** | `src/components/briefing/ValuePropsAgenciesBrands.tsx` | • Organic benefit card shapes<br>• 3D Y-axis rotation reveals<br>• Cursor-following gradient spotlight<br>• Accent color system (cyan/fuchsia) | `agencyBenefits: Benefit[]`, `brandBenefits: Benefit[]` | Benefit cards have personality and depth |

**Content Update Components (Premium Polish):**
- Studios Hero: Signature easing on title reveal
- Studios Why Choose: Magnetic card interactions
- Studios Testimonials: Staggered quote reveals with organic timing
- Briefing Engine Hero: Feature pill morphing entrances
- Briefing Engine Process Flow: Timeline connector draw-on animation
- Briefing Engine CTA: Dual-button magnetic pull with competing forces

**Shared Premium Utilities:**
- `CitationBadge.tsx` - Subtle glow pulse animation, not static badge
- `OrganicCard.tsx` - Foundation for all premium card layouts
- `MagneticButton.tsx` - Enhanced CTA with cursor following
- `GlowEffect.tsx` - Reusable SVG glow filter system

### Data Models and Contracts

**Premium Utility Interfaces:**

```typescript
// ===== PREMIUM SHAPE SYSTEM =====

// Organic Card Component
type ShapeVariant = 'blob' | 'hexagon' | 'organic' | 'floating';

interface OrganicCardProps {
  children: React.ReactNode;
  shape?: ShapeVariant;
  glowColor?: string;
  morphing?: boolean;          // Enable breathing animation
  morphIntensity?: number;     // 0-1, how much shape morphs
  className?: string;
}

// Shape path definitions
interface ShapePath {
  d: string;                    // SVG path data
  viewBox: string;              // SVG viewBox
  morphVariations?: string[];   // Alternative paths for morphing
}

// ===== PREMIUM ANIMATION HOOKS =====

// Magnetic Pull Hook
interface MagneticPullOptions {
  strength?: number;             // 0-1, pull intensity (default: 0.3)
  maxDistance?: number;          // Max pixels element can move
  ease?: string;                 // GSAP easing
  rotation?: boolean;            // Enable rotation on pull
  rotationIntensity?: number;    // 0-1, rotation amount
}

type UseMagneticPullReturn = React.RefObject<HTMLDivElement>;

// Orchestrator Hook (Master Timeline Builder)
interface OrchestratorOptions {
  trigger: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  pin?: boolean;
  markers?: boolean;
}

interface AnimationPhase {
  name: string;
  targets: string | HTMLElement[];
  animation: gsap.TweenVars;
  stagger?: number | gsap.StaggerVars;
  position?: string | number;
}

interface UseOrchestratorReturn {
  timeline: gsap.core.Timeline;
  addPhase: (phase: AnimationPhase) => void;
  play: () => void;
  pause: () => void;
  restart: () => void;
}

// Parallax Depth Hook
interface ParallaxDepthOptions {
  layers: number;                // Number of depth layers (1-5)
  intensity?: number;            // 0-1, parallax strength
  reverse?: boolean;             // Invert scroll direction
}

// ===== SIGNATURE EASING CURVES =====

export const CRE8TIVE_EASINGS = {
  organic: "power4.out",         // Smooth deceleration (fallback)
  smooth: "power2.out",          // Apple-like (fallback)
  spring: "elastic.out(1, 0.5)", // Energetic bounce (built-in)
  cinematic: "power4.inOut",     // Dramatic slowdown (fallback)
} as const;

// If GreenSock Club available:
// import { CustomEase } from 'gsap/CustomEase';
// CRE8TIVE_EASINGS.organic = CustomEase.create("cre8tive-organic", "0.68, -0.55, 0.27, 1.55");

// ===== FEATURE COMPONENT PROPS =====

// Portfolio Section
interface PortfolioItem {
  clientName: string;
  industry: string;
  challenge: string;
  fullStackProduction: string[]; // List of production steps
  delivered: string;
  specs: {
    formats: string;    // e.g., "3 formats"
    resolution: string; // e.g., "4K"
    duration: string;   // e.g., "60s"
  };
  videoUrl?: string;    // Optional Vimeo/video embed
  thumbnailUrl?: string;
}

interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  portfolioItems: PortfolioItem[];
  ctaText: string;
  ctaLink: string;
}

// Multi-Platform Cards
interface PlatformConfig {
  name: 'YouTube' | 'TikTok' | 'Instagram' | 'LinkedIn' | 'X' | 'Facebook';
  format: string;      // e.g., "16:9 Widescreen", "9:16 Vertical"
  features: string[];  // 3 bullet points per platform
  iconPath: string;    // SVG icon path
}

interface MultiPlatformCardsProps {
  title: string;
  subtitle: string;
  platforms: PlatformConfig[];
  closingCopy: string;
}

// Image-to-Video Comparison
interface ComparisonConfig {
  imageToVideo: {
    title: string;
    benefits: string[]; // ✓ checkmark items
    supportingText: string;
  };
  textToVideo: {
    title: string;
    limitations: string[]; // Bullet items
    supportingText: string;
  };
}

interface ImageToVideoComparisonProps {
  title: string;
  subtitle: string;
  comparison: ComparisonConfig;
}

// Studios Connection (Briefing Engine)
interface FlowConfig {
  leftColumn: {
    badge: string;
    title: string;
    features: string[];
    supportingText: string;
  };
  rightColumn: {
    badge: string;
    title: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
  };
  bottomStatement: string;
}

interface StudiosConnectionProps {
  title: string;
  subtitle: string;
  flow: FlowConfig;
}

// Value Props (Agencies vs Brands)
interface Benefit {
  header: string;
  subheader?: string;
  description: string;
}

interface ValuePropsAgenciesBrandsProps {
  title: string;
  agencyBenefits: Benefit[];  // 3 items
  brandBenefits: Benefit[];    // 3 items
}

// Citation Badge (Shared)
interface CitationBadgeProps {
  text: string;
  source: string;
  year: string;
}
```

**Content Data Structures:**

All copy stored as const objects in component files:

```typescript
// Example: Studios portfolio data
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    clientName: "Client Name",
    industry: "Industry Type",
    challenge: "Specific client challenge description",
    fullStackProduction: [
      "Creative brief & scene planning with brand alignment",
      "Image-to-video production for quality & control",
      // ... additional steps
    ],
    delivered: "Complete campaign package description",
    specs: {
      formats: "3 formats",
      resolution: "4K",
      duration: "60s"
    }
  },
  // ... additional items
];
```

**No External Data Sources:**
- No API calls required (static content)
- No database schema (JAMstack architecture)
- All content managed in TypeScript const exports

### APIs and Interfaces

**No External APIs Required:**
This epic uses static content only - no REST endpoints, GraphQL, or third-party API integrations needed beyond existing project setup (getform.io for contact, Cal.com for booking, Vimeo for video embeds - all already configured).

**Component Export Interfaces:**

```typescript
// Studios Components
export { PortfolioSection } from '@/components/studios/PortfolioSection';
export { MultiPlatformCards } from '@/components/studios/MultiPlatformCards';
export { ImageToVideoComparison } from '@/components/studios/ImageToVideoComparison';

// Briefing Engine Components
export { StudiosConnection } from '@/components/briefing/StudiosConnection';
export { ValuePropsAgenciesBrands } from '@/components/briefing/ValuePropsAgenciesBrands';

// Shared Utilities
export { CitationBadge } from '@/components/shared/CitationBadge';
```

**Page Integration Patterns:**

```typescript
// Studios.tsx integration
import { PortfolioSection, MultiPlatformCards, ImageToVideoComparison } from '@/components/studios';
import { PORTFOLIO_DATA, PLATFORM_DATA, COMPARISON_DATA } from '@/data/studios';

export function Studios() {
  return (
    <>
      <StudiosHero /> {/* Updated copy */}
      <PortfolioSection {...PORTFOLIO_DATA} /> {/* NEW */}
      <MultiPlatformCards {...PLATFORM_DATA} /> {/* NEW */}
      <ImageToVideoComparison {...COMPARISON_DATA} /> {/* NEW */}
      {/* ... existing sections with updated copy ... */}
    </>
  );
}

// BriefingEngine.tsx integration
import { StudiosConnection, ValuePropsAgenciesBrands } from '@/components/briefing';
import { CONNECTION_DATA, VALUE_PROPS_DATA } from '@/data/briefing';

export function BriefingEngine() {
  return (
    <>
      <BriefingHero /> {/* Updated copy */}
      <BriefingProcessFlow /> {/* Updated copy */}
      <StudiosConnection {...CONNECTION_DATA} /> {/* NEW */}
      <ValuePropsAgenciesBrands {...VALUE_PROPS_DATA} /> {/* NEW */}
      <BriefingCTA /> {/* Updated copy */}
    </>
  );
}
```

**Animation Integration Interfaces:**

Components follow established animation patterns from `docs/architecture/animation-patterns.md`:

```typescript
// GSAP ScrollTrigger integration
useGSAP(() => {
  gsap.from('.portfolio-card', {
    scrollTrigger: {
      trigger: '.portfolio-section',
      start: 'top center',
      end: 'bottom center',
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
  });
}, { scope: containerRef });

// Framer Motion for micro-interactions
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="platform-card"
>
  {/* Card content */}
</motion.div>
```

**SEO Meta Updates:**

```typescript
// react-helmet integration for updated meta tags
<Helmet>
  <title>Premium AI Video Production - Studios | Cre8tive AI</title>
  <meta name="description" content="Full-stack video production with AI innovation, professional creative direction, and multi-platform optimization." />
</Helmet>
```

### Workflows and Sequencing

**Implementation Sequence (Premium Execution - 8 Stories):**

**✅ Story 2.0: COMPLETE (Ready for Review) - Epic 2 Premium Foundation is Production-Ready**

All Epic 2 foundation components have been implemented, reviewed, and approved for use in Stories 2.1-2.8:
- ✅ OrganicCard with 4 shape variants (blob, hexagon, organic, floating) + morphing
- ✅ useMagneticPull hook (throttled 60fps, mobile detection, proper cleanup)
- ✅ useOrchestrator hook (GSAP master timeline builder + ScrollTrigger)
- ✅ CRE8TIVE_EASINGS signature curves (organic, smooth, spring, cinematic)
- ✅ usePerformanceMonitor (FPS tracking + graceful degradation)
- ✅ PREMIUM_USAGE.md (547-line integration guide)

**Import Pattern for Stories 2.1-2.8:**
```typescript
import { OrganicCard, useMagneticPull, useOrchestrator } from '@/components/epic2'
```

**Reference:** Full component documentation at `src/components/epic2/PREMIUM_USAGE.md`

---

```
Story 2.0: Premium Foundation Setup (2-3 hours) [COMPLETE ✓]
├── Create src/components/epic2/ directory structure
├── Build OrganicCard.tsx (blob, hexagon, organic shapes with SVG masks)
├── Build useMagneticPull.ts hook (throttled cursor following)
├── Build useOrchestrator.ts hook (GSAP timeline builder)
├── Create easings.ts (CRE8TIVE_EASINGS signature curves)
├── Write unit tests for premium hooks
└── Document premium component usage patterns

Story 2.1: Studios Hero & Portfolio Section (2-3 hours) [ENHANCED]
├── Update Studios hero copy (quality-focused messaging)
├── Create PortfolioSection with GSAP orchestrated timeline:
│   ├── Phase 1: Title morphing entrance
│   ├── Phase 2: Portfolio cards (OrganicCard shape="blob")
│   ├── Phase 3: Entrance with alternating angles (-45°/+45°)
│   ├── Phase 4: Spec pills stagger with elastic.out
│   └── Phase 5: CTA magnetic reveal
├── Implement useMagneticPull on all portfolio cards
├── Create PORTFOLIO_DATA const with 3-5 client cases
└── Test: 60fps validation, magnetic pull distance, responsive

Story 2.2: Studios Multi-Platform Native Section (1.5-2 hours) [ENHANCED]
├── Create MultiPlatformCards with premium features:
│   ├── 3 parallax depth layers (background gradients)
│   ├── Platform cards as OrganicCard shape="hexagon"
│   ├── 3D Y-axis rotation reveals (rotationY: 90 → 0)
│   └── Staggered entrance from center
├── Implement useMagneticPull on platform cards
├── Create PLATFORM_DATA const (6 platforms)
└── Test: Parallax scroll speeds, 3D rotation, 60fps

Story 2.3: Studios Why Choose + Image-to-Video (2-3 hours) [ENHANCED]
├── Update Why Choose with magnetic card interactions
├── Create ImageToVideoComparison with premium features:
│   ├── Split scroll effect (left up, right down)
│   ├── ScrollTrigger pinning during scroll
│   ├── VS divider rotation reveal (180°)
│   └── Organic shapes for comparison columns
├── Create COMPARISON_DATA const
└── Test: Split scroll behavior, pin duration, responsive

Story 2.4: Studios Testimonials Update (1 hour) [ENHANCED]
├── Update testimonial format (Kotia, Marina Lab, Advisor Plus)
├── Add staggered quote reveals with signature easing
├── Organic glow pulse on citation badges
└── Test visual QA, easing curves

Story 2.5: Briefing Engine Hero & Process Updates (1.5 hours) [ENHANCED]
├── Update BriefingHero with signature easing on title reveal
├── Update BriefingProcessFlow:
│   ├── Timeline connector draw-on animation
│   ├── Feature pill morphing entrances
│   └── 5-step with insights and elastic easing
└── Test: Timeline draw animation, pill morphing

Story 2.6: Briefing Engine Studios Connection (1.5-2 hours) [ENHANCED]
├── Create StudiosConnection with premium features:
│   ├── 2-column parallax scroll
│   ├── Checkmark stagger with elastic.out (visible bounce)
│   ├── CTA magnetic glow effect
│   └── Organic flow shapes connecting columns
├── Create CONNECTION_DATA const (2-column flow)
└── Test: Parallax effect, elastic bounce, CTA magnetic pull

Story 2.7: Briefing Engine Value Props & CTA (1.5-2 hours) [ENHANCED]
├── Create ValuePropsAgenciesBrands with premium features:
│   ├── Organic benefit card shapes
│   ├── 3D Y-axis rotation reveals
│   ├── Cursor-following gradient spotlight
│   └── Accent color system (cyan/fuchsia from palette.ts)
├── Update BriefingCTA:
│   ├── Dual-button magnetic pull (competing forces)
│   ├── Feature pills with morphing entrances
│   └── Signature easing on all reveals
└── Test: 3D rotation, cursor spotlight, dual magnetic buttons

Story 2.8: Premium Performance Optimization & QA (1-2 hours) [NEW]
├── Profile all animations with Chrome DevTools Performance tab
├── Verify 60fps constraint (no frames >16.67ms)
├── Implement performance degradation fallbacks
├── Test mobile performance (magnetic pull disabled, parallax reduced)
├── Verify prefers-reduced-motion compliance
├── Test graceful degradation (CPU throttle 6x)
└── Final visual QA across all breakpoints

Total: 12-15 hours implementation (+40% for premium execution)
```

**Page Rendering Flow:**

```
1. User navigates to /studios
   ↓
2. Studios.tsx renders updated sections:
   - Hero (updated copy) → FadeIn animation
   - PortfolioSection (NEW) → ScrollTrigger stagger reveal
   - MultiPlatformCards (NEW) → Card grid with hover states
   - ImageToVideoComparison (NEW) → 2-column layout
   - Why Choose (updated) → Glassmorphism cards
   - Testimonials (updated) → Citation format
   - ContactCTA (existing)
   ↓
3. Lenis smooth scroll active throughout
4. GSAP ScrollTrigger fires animations on scroll
5. Framer Motion handles hover/micro-interactions

---

1. User navigates to /briefing-engine
   ↓
2. BriefingEngine.tsx renders updated sections:
   - Hero (updated copy) → Feature highlights added
   - BriefingProcessFlow (updated copy) → 5-step with insights
   - StudiosConnection (NEW) → 2-column integration flow
   - ValuePropsAgenciesBrands (NEW) → Split benefits layout
   - CTA (updated) → Dual-button + feature pills
   ↓
3. Epic 1 animations (GSAP timelines) coordinate with new sections
4. Smooth transitions between static and animated content
```

**Data Flow (Static Content):**

```
Component Files (*.tsx)
   ↓
Import CONST data objects
   ↓
Render with TypeScript props
   ↓
Browser (static HTML/CSS/JS)
   ↓
User interaction (hover, scroll)
   ↓
Animation libraries respond (GSAP/Framer Motion)
```

**Build & Deployment Flow:**

```
1. npm run build
   ↓ TypeScript compilation (tsc)
   ↓ Vite bundling + code splitting
   ↓ Terser minification
   ↓
2. Output: dist/ directory
   ↓
3. GitHub Actions deploy.yml
   ↓ npm ci → npm run build
   ↓ peaceiris/actions-gh-pages@v3
   ↓
4. GitHub Pages (gh-pages branch)
   ↓
5. cre8tive.ai (custom domain)
```

## Non-Functional Requirements

### Performance

**Measurable Targets (Premium Execution with 60fps Constraint):**

- **Page Load:** Lighthouse Performance score ≥75 (trade-off for premium patterns, down from ≥80 baseline)
- **Bundle Impact:**
  - Premium utilities (shapes/hooks/animations): +30kb gzipped (~90kb raw)
  - Feature components: +20kb gzipped (~60kb raw)
  - **Total new weight:** ~50kb gzipped (acceptable for 10x visual impact)
- **Animation Performance:** **60fps non-negotiable** for:
  - GSAP orchestrated timelines (portfolio entrance sequences)
  - Magnetic pull hover effects (useMagneticPull)
  - Parallax depth layers (3-5 layers maximum)
  - SVG shape morphing (Framer Motion, not GSAP MorphSVG)
  - ScrollTrigger scrub animations
- **Render Budget per Frame:** ≤16.67ms (60fps = 16.67ms/frame)
  - Magnetic pull calculations: ≤2ms
  - GSAP timeline updates: ≤5ms
  - Parallax layer transforms: ≤3ms
  - Layout/paint/composite: ≤6ms
- **Image Optimization:** Portfolio images lazy-loaded below-fold, WebP format with PNG fallback
- **First Contentful Paint (FCP):** ≤1.8s on 3G networks (premium patterns delay-loaded)
- **Largest Contentful Paint (LCP):** ≤2.5s (Core Web Vital maintained)
- **Cumulative Layout Shift (CLS):** ≤0.1 (SVG masks pre-allocated dimensions)

**Premium Pattern Performance Budget:**

| Pattern | CPU Cost | GPU Cost | Mitigation Strategy |
|---------|----------|----------|---------------------|
| **Organic SVG Shapes** | Low (static clip-path) | Medium (filter effects) | Limit glow filters to 3 per viewport |
| **Magnetic Pull** | Medium (mousemove listener) | Low (transform only) | Throttle to 60fps, disable on mobile |
| **GSAP Orchestration** | Low (timeline pre-calculated) | High (multiple animating elements) | Limit to 12 elements per timeline |
| **Parallax Layers** | Low (scroll listener) | Medium (3-5 layer transforms) | Use `will-change`, max 5 layers |
| **Shape Morphing** | Medium (path interpolation) | Medium (SVG repainting) | Use Framer Motion (optimized), limit to 3 simultaneous morphs |

**Optimization Strategies (Premium-Specific):**

1. **GPU Acceleration (Critical):**
   ```css
   .premium-animated {
     will-change: transform, opacity;
     transform: translateZ(0); /* Force GPU layer */
   }
   ```

2. **Magnetic Pull Throttling:**
   ```ts
   // Throttle mousemove to 60fps
   const throttledMouseMove = gsap.utils.throttle(handleMouseMove, 16);
   ```

3. **Lazy-Load Premium Patterns:**
   ```ts
   // Load premium hooks only when visible
   const { useMagneticPull } = await import('@/components/epic2/hooks');
   ```

4. **Fallback Strategy (Performance Guard):**
   - If frame rate drops <30fps for 5 consecutive frames:
     - Disable magnetic pull
     - Reduce parallax layers from 5 → 2
     - Switch organic shapes to static (no morphing)
     - Fallback to simple fade-ins

5. **Mobile Performance:**
   - Disable magnetic pull (no cursor on mobile)
   - Reduce parallax intensity by 50%
   - Static shapes (no morphing)
   - ScrollTrigger pinning disabled

**Performance Monitoring:**
- Chrome DevTools Performance tab during development
- FPS counter overlay (stats.js) for QA validation
- Real User Monitoring (Vercel Analytics Web Vitals)
- Performance regression tests: Baseline ≤20ms render, Premium ≤35ms render (acceptable +75% for premium feel)

### Security

**Content Security (static content only, no new attack vectors):**

- **No User Input:** All new components display static content (no forms, no dynamic user-generated content)
- **XSS Prevention:** All text rendered via React's default JSX escaping (automatic protection)
- **External Links:** No new external links added beyond existing Cal.com/Vimeo integrations
- **CSP Compliance:** New components respect existing Content Security Policy defined in `App.tsx` and `vite.config.ts`
- **Asset Security:** Images served from `/public/assets` or imported via Vite (no external CDNs for new content)

**No New Security Requirements:**
- Inherits all existing security measures from ARCHITECTURE.md (DOMPurify for sanitization, CSP headers, HTTPS-only)
- No authentication/authorization changes (static marketing site remains public)
- No new third-party integrations (uses existing Vimeo for portfolio videos)

**Security Verification:**
- ESLint security rules pass (no `dangerouslySetInnerHTML` usage)
- TypeScript strict null checks prevent potential null pointer issues
- No inline styles with user-provided content

### Reliability/Availability

**Uptime Target:** 99.9% (inherited from GitHub Pages SLA)

**Degradation Strategy:**
- **Portfolio Videos Fail:** Fallback to static thumbnail with "Video unavailable" message
- **Animation Library Fails:** Components gracefully degrade to static display (no animations)
- **Image Load Fails:** Alt text displayed, broken image handling via `onError` handlers

**Fallback Patterns:**

```typescript
// Portfolio video fallback
<VideoEmbed
  src={item.videoUrl}
  fallback={<img src={item.thumbnailUrl} alt={item.clientName} />}
  onError={() => console.warn('Video embed failed')}
/>

// Animation fallback (prefers-reduced-motion)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

useGSAP(() => {
  if (prefersReducedMotion) {
    gsap.set('.element', { opacity: 1, y: 0 }); // Instant reveal
  } else {
    gsap.from('.element', { opacity: 0, y: 50, duration: 1 }); // Animated reveal
  }
}, { scope: containerRef });
```

**Error Boundaries:**
- Wrap new sections in React Error Boundaries (existing pattern from Epic 1)
- Page-level error boundary prevents full page crash if component fails

**Recovery:**
- Static site = automatic recovery (refresh loads fresh assets from CDN)
- No database = no data corruption risk
- Deployment rollback via GitHub Pages branch revert (manual process)

### Observability

**Monitoring (existing infrastructure):**

- **Vercel Analytics:** Tracks pageviews, unique visitors, bounce rate for Studios and Briefing Engine pages
- **Google Tag Manager:** CTA click events, scroll depth tracking, portfolio video play events
- **Console Logging:** Development-only warnings for missing portfolio items, failed image loads
  - Production: All `console.log` stripped via Terser (per `vite.config.ts`)

**Metrics to Track:**

1. **Conversion Metrics:**
   - Portfolio CTA clicks (`Studios Portfolio CTA → /contact`)
   - Briefing Engine Studios connection CTA clicks (`View Studios Portfolio`)
   - Dual-button CTA performance (Primary "Start Your First Brief" vs Secondary "Talk to Our Team")

2. **Engagement Metrics:**
   - Scroll depth to portfolio section
   - Hover time on platform cards
   - Time on Studios vs Briefing Engine pages

3. **Performance Metrics:**
   - LCP for new sections (Vercel Web Vitals)
   - CLS scores (layout stability)
   - JavaScript error rate

**Logging Strategy:**

```typescript
// Development logging only
if (import.meta.env.DEV) {
  console.log('[Portfolio] Loaded items:', portfolioItems.length);
  console.warn('[Platform] Missing icon for:', platform.name);
}

// Analytics events (production)
window.gtag?.('event', 'portfolio_cta_click', {
  section: 'studios_portfolio',
  client: item.clientName
});
```

**No New Observability Tools Required:**
- Uses existing Vercel Analytics and GTM setup
- No APM/distributed tracing needed (static site)
- No custom error tracking beyond browser console (Sentry not configured per ARCHITECTURE.md)

## Dependencies and Integrations

**No New Dependencies Required:**

This epic uses 100% existing dependencies. All packages already installed and configured in `package.json`.

**Utilized Existing Dependencies:**

| Package | Version | Usage in Epic 2 | Source |
|---------|---------|-----------------|--------|
| `react` | 18.3.1 | Component rendering, hooks | package.json |
| `react-dom` | 18.3.1 | DOM rendering | package.json |
| `react-router-dom` | 6.26.2 | Page routing (no changes) | package.json |
| `gsap` | 3.13.0 | ScrollTrigger animations for new sections | package.json (Epic 1) |
| `@gsap/react` | 2.1.2 | useGSAP hook for React integration | package.json (Epic 1) |
| `lenis` | 1.3.11 | Smooth scroll (already active globally) | package.json (Epic 1) |
| `framer-motion` | 12.4.2 | Hover micro-interactions | package.json |
| `@vimeo/player` | 2.20.1 | Portfolio video embeds | package.json |
| `react-helmet` | 6.1.0 | SEO meta tag updates | package.json |
| `tailwindcss` | 3.4.11 | Component styling | package.json |
| `class-variance-authority` | 0.7.1 | Component variant styling | package.json |
| `clsx` + `tailwind-merge` | 2.1.1 + 2.5.2 | className utilities (cn()) | package.json |

**External Service Integrations (existing, no changes):**

- **Vimeo:** Portfolio video hosting (existing iframe embed pattern)
- **Cal.com:** Appointment booking links (no new integrations)
- **getform.io:** Contact form submission (no changes)
- **Vercel Analytics:** Page view tracking (automatic)
- **Google Tag Manager:** Event tracking (existing setup)

**Internal Dependencies:**

```
New Components Depend On:
├── Existing Shadcn/UI components (Button, Card, Badge from src/components/ui/)
├── Shared animation wrappers (FadeIn, ScrollFade from src/components/shared/)
├── Epic 1 color palette (src/components/briefing/palette.ts for Briefing Engine)
├── Studios color constants (orange/teal/coral - to be defined similar to palette.ts)
└── Utility functions (cn() from src/lib/utils.ts)
```

**Build Tool Dependencies (no changes):**
- Vite 5.4.1 (bundler)
- TypeScript 5.5.3 (transpiler)
- ESLint 9.9.0 (linter)
- PostCSS 8.5.1 (CSS processing)

**Premium Execution Notes:**

1. **No Premium GSAP Plugins Required (Pragmatic Approach):**
   - **CustomEase:** Use built-in easings (power4.out, elastic.out, back.out) - 90% as good
   - **MorphSVG:** Use Framer Motion path morphing (already have it, free)
   - **DrawSVG:** Use CSS stroke-dasharray animation or GSAP timeline on SVG properties
   - **Optional Upgrade:** GreenSock Club ($99/year) for signature curves, evaluate after Story 2.1-2.2

2. **Shape Morphing Strategy:**
   - Framer Motion `animate` prop with SVG path strings (built-in)
   - OR GSAP tween on SVG path `d` attribute (free, no MorphSVG)
   - Result: Organic breathing animation without premium plugins

3. **Performance Utilities:**
   - `gsap.utils.throttle` for magnetic pull (free GSAP utility)
   - `stats.js` for FPS monitoring (already in package.json)
   - Chrome DevTools Performance API (built-in)

**Result:** Premium execution achievable with zero new dependencies. All patterns use existing stack creatively.

## Acceptance Criteria (Authoritative)

**Studios Page Implementation:**

1. **AC-2.1:** Studios hero section displays updated quality-focused headline and subheadline emphasizing "Premium AI Video Production Native for Every Platform"
2. **AC-2.2:** "Our Work" portfolio section renders with minimum 3 client case studies in challenge→solution→deliverables format
3. **AC-2.3:** Each portfolio card displays client name, industry, specs pills (formats/resolution/duration), and optional video embed
4. **AC-2.4:** "Multi-Platform Native" section displays all 6 platform cards (YouTube, TikTok, Instagram, LinkedIn, X, Facebook) with format specifications and 3 features each
5. **AC-2.5:** Platform cards show correct aspect ratio identifiers (16:9, 9:16, 1:1) and native optimization messaging
6. **AC-2.6:** "Image-to-Video Quality" section displays 2-column comparison with benefits (✓ checkmarks) and limitations (bullet points)
7. **AC-2.7:** "Why Choose" section updated with 3-column value props including industry citations (Lemonlight 2025, HeyGen 2025, Zebracat 2025)
8. **AC-2.8:** Testimonials section displays updated format with star ratings, quotes, client names, and industries (Kotia, Marina Lab, Advisor Plus PTD)
9. **AC-2.9:** Industry citation badges display throughout page with proper source attribution and year

**Briefing Engine Page Implementation:**

10. **AC-2.10:** Briefing Engine hero section displays "From Brand Brief to Production-Ready Storyboard" headline with Studios connection messaging
11. **AC-2.11:** Hero section includes 4 feature highlights (7 guided inputs, 9 visual styles, AI-generated storyboards, Studios integration)
12. **AC-2.12:** 5-step "Briefing Runway" process displays corrected flow with timeline estimates and insights for each step
13. **AC-2.13:** "Connected Pipeline" badge displays with Brief → Narrative → Style → Boards flow description
14. **AC-2.14:** "Connection to Studios" section renders 2-column layout (Briefing Engine Output | Studios Production)
15. **AC-2.15:** Left column displays production-ready storyboard features with checkmarks, right column displays Studios production features
16. **AC-2.16:** Studios connection CTA button links to Studios portfolio section
17. **AC-2.17:** "Value Props: Agencies vs Brands" section displays split layout with 3 benefits each
18. **AC-2.18:** Agency benefits column uses cyan accent color, Brands column uses fuchsia accent (Epic 1 palette)
19. **AC-2.19:** Updated CTA section displays dual-button strategy (primary "Start Your First Brief" links to admanager.cre8tive.ai, secondary "Talk to Our Team" links to /contact)
20. **AC-2.20:** CTA section includes 3 feature pills (9 Visual Styles, PDF Export, Studios Integration)

**Technical Implementation:**

21. **AC-2.21:** All new components pass TypeScript compilation without errors
22. **AC-2.22:** Production build succeeds with `npm run build`
23. **AC-2.23:** ESLint validation passes (errors block build, warnings acceptable)
24. **AC-2.24:** All components responsive across breakpoints (375px mobile - 1920px desktop)
25. **AC-2.25:** GSAP ScrollTrigger animations achieve 60fps on modern browsers (Chrome 100+, Firefox 100+, Safari 15+)
26. **AC-2.26:** Framer Motion hover states work on all interactive cards
27. **AC-2.27:** All images lazy-loaded below-fold with proper alt text
28. **AC-2.28:** prefers-reduced-motion respected (animations disabled for users with motion sensitivity)
29. **AC-2.29:** WCAG AA color contrast compliance on all text/background combinations
30. **AC-2.30:** Keyboard navigation works for all CTAs and interactive elements

**Premium Execution Features:**

31. **AC-2.31:** OrganicCard components render with blob, hexagon, or organic SVG clip-path shapes (not rectangles)
32. **AC-2.32:** Portfolio cards display subtle morphing/breathing animation (shape varies ±3-5% over 8s loop)
33. **AC-2.33:** Magnetic pull effect works on all portfolio and platform cards (cursor within 150px triggers pull, element moves ≤30px)
34. **AC-2.34:** Magnetic pull respects throttling (60fps max, mousemove events processed every 16ms)
35. **AC-2.35:** GSAP orchestrated timeline animates portfolio section entrance with 5 distinct phases (title, cards, spec pills, CTA - all staggered)
36. **AC-2.36:** Portfolio cards reveal with unique entrance angles (alternating -45° / +45° rotation per card)
37. **AC-2.37:** Platform cards reveal with 3D Y-axis rotation (90° → 0°) using `rotationY` GSAP property
38. **AC-2.38:** Parallax depth layers (3 minimum) create visual separation on multi-platform section
39. **AC-2.39:** Image-to-Video comparison uses split scroll effect (left column scrolls up, right scrolls down while pinned)
40. **AC-2.40:** VS divider in comparison section animates with 180° rotation reveal
41. **AC-2.41:** Studios Connection checkmarks stagger reveal with elastic.out easing (visible bounce effect)
42. **AC-2.42:** Value Props benefit cards use signature Cre8tive easing curves (CRE8TIVE_EASINGS.organic or power4.out fallback)
43. **AC-2.43:** All premium animations achieve 60fps (verified in Chrome DevTools Performance tab, no frames >16.67ms)
44. **AC-2.44:** Magnetic pull disabled on mobile devices (touch screens, viewport width <768px)
45. **AC-2.45:** SVG glow filters limited to 3 per viewport (performance constraint)
46. **AC-2.46:** Premium patterns gracefully degrade if performance drops below 30fps (magnetic pull disabled, parallax reduced, morphing stopped)
47. **AC-2.47:** prefers-reduced-motion disables all premium animations (organic shapes static, no magnetic pull, instant reveals)

## Traceability Mapping

| AC | Spec Section | Component(s) | Test Approach |
|----|--------------|--------------|---------------|
| AC-2.1 | Studios Hero | StudiosHero.tsx (copy update) | Visual QA: Verify headline/subheadline text matches COPY_IMPLEMENTATION_GUIDE |
| AC-2.2, AC-2.3 | Portfolio Section | PortfolioSection.tsx, PortfolioCard.tsx | Unit: Render 3 items, verify props mapping; Visual QA: Card layout |
| AC-2.4, AC-2.5 | Multi-Platform | MultiPlatformCards.tsx, PlatformCard.tsx | Unit: Verify 6 platforms render; Visual QA: Format labels, feature lists |
| AC-2.6 | Image-to-Video | ImageToVideoComparison.tsx | Visual QA: 2-column layout, checkmarks vs bullets |
| AC-2.7 | Why Choose | StudiosWhyChoose.tsx (copy update) | Visual QA: 3 columns, citation badges present |
| AC-2.8 | Testimonials | StudiosTestimonials.tsx (copy update) | Visual QA: Star ratings, client names match guide |
| AC-2.9 | Citations | CitationBadge.tsx (shared) | Unit: Props render correctly (text, source, year) |
| AC-2.10, AC-2.11 | Briefing Hero | BriefingHero.tsx (copy update) | Visual QA: Headline, feature highlights list |
| AC-2.12, AC-2.13 | Process Flow | BriefingProcessFlow.tsx (copy update) | Visual QA: 5 steps, timeline, Connected Pipeline badge |
| AC-2.14, AC-2.15, AC-2.16 | Studios Connection | StudiosConnection.tsx | Unit: 2-column props, CTA link; Visual QA: Layout, features checkmarks |
| AC-2.17, AC-2.18 | Value Props | ValuePropsAgenciesBrands.tsx | Unit: 3+3 benefits, accent colors; Visual QA: Split layout |
| AC-2.19, AC-2.20 | CTA Section | BriefingCTA.tsx (copy update) | Visual QA: Dual buttons, links, feature pills |
| AC-2.21 | TypeScript | All components | Build: `tsc` compilation passes |
| AC-2.22 | Build | All components | Build: `npm run build` succeeds |
| AC-2.23 | Linting | All components | Build: `npm run lint` passes (errors only) |
| AC-2.24 | Responsive | All components | Browser: Chrome DevTools device toolbar (375px, 768px, 1024px, 1920px) |
| AC-2.25 | GSAP Perf | Portfolio, Platforms | Browser: Chrome DevTools Performance tab (60fps target) |
| AC-2.26 | Hover States | All cards | Manual: Hover test on cards, verify scale/glow effects |
| AC-2.27 | Images | Portfolio, Platforms | Browser: Network tab, verify lazy-load; Accessibility: Alt text present |
| AC-2.28 | Accessibility | All animations | Browser: DevTools emulate prefers-reduced-motion, verify static display |
| AC-2.29 | Contrast | All text | Accessibility: WAVE or axe DevTools, verify 4.5:1 ratio minimum |
| AC-2.30 | Keyboard | All CTAs | Manual: Tab navigation, verify focus indicators and activation |
| AC-2.31 | Premium Shapes | OrganicCard.tsx | Visual QA: Inspect SVG clip-path, verify blob/hexagon/organic shapes render |
| AC-2.32 | Morphing Animation | OrganicCard.tsx | Browser: Observe 8s loop, measure shape variance (±3-5%) |
| AC-2.33, AC-2.34 | Magnetic Pull | useMagneticPull.ts | Manual: Hover cards, measure pull distance; Profiler: Verify 16ms throttle |
| AC-2.35, AC-2.36 | GSAP Choreography | PortfolioSection.tsx | Visual QA: Count 5 phases, verify entrance angles (-45°/+45°) |
| AC-2.37 | 3D Rotation | MultiPlatformCards.tsx | Browser: Verify rotationY property, 90° → 0° transition |
| AC-2.38 | Parallax Layers | MultiPlatformCards.tsx | Visual QA: Verify 3+ layers, different scroll speeds |
| AC-2.39, AC-2.40 | Split Scroll | ImageToVideoComparison.tsx | Manual: Scroll, verify left up/right down, VS divider rotation |
| AC-2.41 | Elastic Easing | StudiosConnection.tsx | Visual QA: Verify checkmark bounce (elastic.out characteristic) |
| AC-2.42 | Signature Easings | All premium components | Code review: Verify CRE8TIVE_EASINGS import/usage |
| AC-2.43 | 60fps Performance | All animations | Chrome DevTools: Performance tab, verify no frames >16.67ms |
| AC-2.44 | Mobile Disable | useMagneticPull.ts | Browser: Test on mobile viewport (<768px), verify no magnetic pull |
| AC-2.45 | Glow Filter Limit | OrganicCard.tsx | Code review: Count SVG filter instances per viewport (≤3) |
| AC-2.46 | Performance Degradation | All premium components | Manual: Throttle CPU 6x in DevTools, verify graceful fallback |
| AC-2.47 | Motion Preferences | All animations | Browser: Emulate prefers-reduced-motion, verify static display |

## Risks, Assumptions, Open Questions

**Risks:**

1. **RISK-2.1: Epic 1 Coordination**
   - **Description:** Briefing Engine updates (Stories 2.5-2.7) depend on Epic 1 completion
   - **Impact:** HIGH - If Epic 1 incomplete, copy updates may conflict with ongoing animation work
   - **Mitigation:** Coordinate with Epic 1 team, implement Studios stories first (2.1-2.4), defer Briefing Engine until Epic 1 status confirmed
   - **Owner:** Cameron

2. **RISK-2.2: Portfolio Video Performance**
   - **Description:** Multiple Vimeo embeds may impact page load performance
   - **Impact:** MEDIUM - Could push Lighthouse score below 80 target
   - **Mitigation:** Lazy-load videos below-fold, use poster images, limit to 3-5 portfolio items initially
   - **Owner:** Dev team

3. **RISK-2.3: Copy Accuracy**
   - **Description:** Industry citations must remain accurate and up-to-date
   - **Impact:** LOW - Incorrect stats damage credibility
   - **Mitigation:** All citations traced to COPY_IMPLEMENTATION_GUIDE sources (Lemonlight 2025, HeyGen 2025, Zebracat 2025), document source URLs in code comments
   - **Owner:** Content team

**Premium Execution Risks:**

4. **RISK-2.4: Performance Degradation with Premium Patterns**
   - **Description:** Multiple premium patterns (magnetic pull, parallax, morphing) may exceed 60fps budget
   - **Impact:** HIGH - Janky animations destroy premium feel, worse than generic execution
   - **Mitigation:**
     - Performance budget per pattern (see NFR Performance table)
     - Throttle magnetic pull to 16ms
     - Limit parallax layers to 5 maximum
     - Profile every story with Chrome DevTools Performance tab
     - Implement graceful degradation fallbacks
     - Story 2.8 dedicated to performance optimization
   - **Owner:** Dev team

5. **RISK-2.5: Timeline Extension (+40%)**
   - **Description:** Premium execution increases implementation from 8-10 hours to 12-15 hours
   - **Impact:** MEDIUM - Delays Epic 2 delivery if not planned
   - **Mitigation:**
     - Communicate timeline adjustment upfront (12-15 hours realistic)
     - Story 2.0 creates reusable premium foundation (pays off in later stories)
     - Premium patterns reusable across future epics
     - Visual impact justifies additional time investment
   - **Owner:** Cameron / PM

6. **RISK-2.6: CustomEase/MorphSVG Plugin Cost**
   - **Description:** Signature easing curves require GreenSock Club membership ($99/year)
   - **Impact:** LOW - Budget decision, fallback available
   - **Mitigation:**
     - **Option A:** Purchase GreenSock Club ($99/year - recommended for premium feel)
     - **Option B:** Use built-in easings (power4.out, elastic.out) - still premium, slightly less unique
     - **Decision:** Use fallback easings initially, recommend Club upgrade for final polish
   - **Owner:** Cameron

7. **RISK-2.7: Browser Compatibility (Older Devices)**
   - **Description:** Premium patterns (SVG masks, 3D transforms, complex GSAP) may not work on older browsers
   - **Impact:** MEDIUM - Users on old browsers get degraded experience
   - **Mitigation:**
     - Target modern browsers only (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+)
     - Graceful degradation: Detect unsupported features, fallback to simpler animations
     - prefers-reduced-motion provides static fallback path
     - Mobile gets simplified experience anyway (no magnetic pull, reduced parallax)
   - **Owner:** Dev team

8. **RISK-2.8: Over-Engineering (Complexity Creep)**
   - **Description:** Premium patterns add complexity - harder to debug, maintain, extend
   - **Impact:** MEDIUM - Future developers may struggle with custom patterns
   - **Mitigation:**
     - Comprehensive TypeScript interfaces (all premium utilities typed)
     - Story 2.0 includes documentation of premium component usage
     - Code comments explaining GSAP choreography phases
     - Reusable hooks abstract complexity (useMagneticPull, useOrchestrator)
     - Fallback to simpler patterns if timeline pressure increases
   - **Owner:** Winston / Dev team

**Assumptions:**

1. **ASSUME-2.1:** Epic 1 (GSAP animations, color palette, Lenis) is functionally complete and stable
2. **ASSUME-2.2:** Client portfolio videos are available on Vimeo with embed permissions
3. **ASSUME-2.3:** Platform icons (YouTube, TikTok, Instagram, LinkedIn, X, Facebook) can be sourced from existing icon libraries or created as SVGs
4. **ASSUME-2.4:** All copy from COPY_IMPLEMENTATION_GUIDE.md is final and approved (no content review cycles)
5. **ASSUME-2.5:** Studios color palette (orange/teal/coral) defined similar to Briefing Engine palette.ts
6. **ASSUME-2.6:** Existing responsive patterns (375px-1920px) apply to all new components

**Premium Execution Assumptions:**

7. **ASSUME-2.7:** Target modern browsers (Chrome 100+, Firefox 100+, Safari 15+) - no IE11 or older browser support
8. **ASSUME-2.8:** Users on modern devices (2019+ laptops/desktops) can handle premium patterns at 60fps
9. **ASSUME-2.9:** Mobile users accept simplified experience (no magnetic pull, reduced parallax)
10. **ASSUME-2.10:** Built-in GSAP easings (power4.out, elastic.out) acceptable if GreenSock Club not purchased
11. **ASSUME-2.11:** Framer Motion path morphing sufficient for shape breathing animation (no GSAP MorphSVG needed)
12. **ASSUME-2.12:** Developer has intermediate GSAP experience (ScrollTrigger, timelines, 3D transforms)
13. **ASSUME-2.13:** Performance profiling will be done in Chrome DevTools (primary QA browser)

**Open Questions:**

1. **Q-2.1:** Which client portfolio items should be featured? (Need 3-5 for launch)
   - **Next Step:** Coordinate with marketing team to select clients with video permissions

2. **Q-2.2:** Should portfolio videos autoplay on scroll or require click-to-play?
   - **Recommendation:** Click-to-play for performance and accessibility (no autoplay)
   - **Next Step:** Confirm with UX/product team

3. **Q-2.3:** Platform icons licensing - can we use official brand logos or need custom icons?
   - **Next Step:** Legal review of platform logo usage guidelines
   - **Fallback:** Use generic iconography (play button, screen shapes) if licensing unclear

4. **Q-2.4:** Industry citation source URLs - should these be clickable links or static text?
   - **Recommendation:** Static text badges (cleaner design, avoids external link distraction)
   - **Next Step:** Confirm with content strategy

5. **Q-2.5:** Should Studios and Briefing Engine pages share a unified CitationBadge component or have separate styles?
   - **Recommendation:** Unified component with color prop (orange for Studios, indigo for Briefing Engine)
   - **Next Step:** Implement and validate in PR

**Premium Execution Questions:**

6. **Q-2.6:** Should we purchase GreenSock Club membership ($99/year) for CustomEase premium plugin?
   - **Recommendation:** Start with built-in easings (power4.out, elastic.out), evaluate after Story 2.1-2.2 if signature curves needed
   - **Cost:** $99/year (includes CustomEase, DrawSVG, MorphSVG, MotionPath, and all premium plugins)
   - **Value:** Unique easing curves = more distinctive brand feel, but built-ins are 90% as good
   - **Next Step:** Cameron decides based on budget and distinctiveness priority

7. **Q-2.7:** Should magnetic pull strength be configurable per component or use global constant?
   - **Recommendation:** Global constant (0.3 default) with per-component override option
   - **Rationale:** Consistency across site, but flexibility for special cases
   - **Next Step:** Implement in useMagneticPull hook with optional override param

8. **Q-2.8:** How aggressive should performance degradation be? (At what FPS threshold do we disable features?)
   - **Recommendation:** Disable if <30fps for 5 consecutive frames
   - **Rationale:** 30fps is minimum acceptable, 5 frames ensures not temporary spike
   - **Next Step:** Implement performance monitor in Story 2.0

9. **Q-2.9:** Should organic shape variants (blob/hexagon/organic) be randomly assigned or explicitly chosen per component?
   - **Recommendation:** Explicitly chosen per component for design control
   - **Rationale:** Consistent visual hierarchy (portfolio = blobs, platforms = hexagons, benefits = organic)
   - **Next Step:** Document shape usage patterns in Story 2.0

## Test Strategy Summary

**Testing Approach:** Manual validation only (zero automated tests per project standards)

**Test Levels:**

1. **Component-Level Testing (Manual):**
   - **Scope:** Individual component rendering, props validation, responsive behavior
   - **Method:** Browser DevTools + manual interaction
   - **Coverage:** All 5 new components + 6 copy updates
   - **Acceptance:** Components render without console errors, props display correctly

2. **Integration Testing (Manual):**
   - **Scope:** Page assembly, component interactions, animation coordination
   - **Method:** Full page load in browser, scroll testing, interaction testing
   - **Coverage:** Studios.tsx and BriefingEngine.tsx full page flows
   - **Acceptance:** Smooth scroll, animations fire correctly, no layout shifts

3. **Visual QA (Manual):**
   - **Scope:** Design compliance, responsive layouts, copy accuracy
   - **Method:** Side-by-side comparison with COPY_IMPLEMENTATION_GUIDE.md
   - **Coverage:** All breakpoints (375px, 768px, 1024px, 1920px)
   - **Acceptance:** Pixel-perfect match to design, copy matches guide exactly

4. **Performance Testing (Manual):**
   - **Scope:** Page load metrics, animation performance, bundle size
   - **Method:** Chrome DevTools Lighthouse + Performance tab
   - **Coverage:** Both Studios and Briefing Engine pages
   - **Acceptance:** Lighthouse Performance ≥80, animations 60fps, bundle impact <50kb

5. **Accessibility Testing (Manual):**
   - **Scope:** WCAG AA compliance, keyboard navigation, screen reader support
   - **Method:** axe DevTools + manual keyboard testing + prefers-reduced-motion emulation
   - **Coverage:** All new interactive elements and animations
   - **Acceptance:** No critical accessibility violations, keyboard navigable, motion respects preferences

**Browser Matrix:**
- Chrome 100+ (primary)
- Firefox 100+ (secondary)
- Safari 15+ (secondary)
- Edge 100+ (tertiary)
- Mobile Safari iOS 15+ (mobile)
- Chrome Android (mobile)

**Test Data:**
- Portfolio: Minimum 3 client items (real data from marketing team)
- Platforms: All 6 platform configs (YouTube, TikTok, Instagram, LinkedIn, X, Facebook)
- Copy: All text from COPY_IMPLEMENTATION_GUIDE.md exactly as written

**Defect Tracking:**
- GitHub Issues for bugs
- Priority: P0 (blocks release), P1 (major), P2 (minor), P3 (nice-to-have)

**Definition of Done (Per Story):**
- [ ] Component/copy implemented per acceptance criteria
- [ ] Manual testing complete across all breakpoints
- [ ] No console errors or warnings
- [ ] Visual QA passed (matches COPY_IMPLEMENTATION_GUIDE.md)
- [ ] Accessibility check passed (axe DevTools)
- [ ] Performance check passed (Lighthouse ≥80)
- [ ] Code reviewed and merged
- [ ] Deployed to production (GitHub Pages)

**Future Test Infrastructure (Not in Epic 2 Scope):**
- Vitest for unit tests (planned technical debt)
- React Testing Library for component tests (planned)
- Playwright for E2E tests (planned)
- Visual regression testing with Percy/Chromatic (planned)
