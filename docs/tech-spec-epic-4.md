# Technical Specification: 3D Interactive Solution Theater - Homepage Solutions Section Redesign

Date: 2025-10-09
Author: Cameron
Epic ID: epic-homepage-theater
Status: Draft

---

## Overview

This epic delivers a premium 3D Interactive Solution Theater to replace the current static Bento grid layout in the homepage "Our Solutions" section. The transformation addresses the immediate need to remove the AI Agents service card (temporarily disabled) while elevating the entire section to world-class B2B standards observed in Linear, Vercel, and Apple's product showcases.

The implementation leverages our existing GSAP + Lenis + Framer Motion animation stack to create a scroll-choreographed, mouse-tracked, perspective-driven showcase for three core services: Cre8tive AI Studios, Studios Engine, and Conversational AI. The solution prioritizes premium micro-interactions (50ms response target), interactive product previews, and adaptive layouts that position Cre8tive AI as a cutting-edge, technically sophisticated brand. **Design Philosophy: Visuals First** - aesthetic excellence and immersive experience take absolute priority over accessibility compliance, while maintaining basic keyboard usability and 60fps performance targets.

## Objectives and Scope

**In Scope:**
- ✅ Remove AI Agents service card from homepage solutions section
- ✅ 3D perspective card layout with diagonal stagger arrangement (desktop)
- ✅ Mouse-tracking tilt effects with realistic depth shadows (Apple-style)
- ✅ GSAP ScrollTrigger-choreographed reveals with parallax depth layers
- ✅ Interactive preview windows with video/screenshot content and hover-to-play functionality
- ✅ Magnetic CTA buttons with 50ms response time (Linear benchmark)
- ✅ Asset-agnostic architecture supporting progressive enhancement (gradient placeholders → video assets)
- ✅ Adaptive layouts: mobile stacked theater, tablet side-by-side, desktop full 3D stage
- ✅ Basic usability: keyboard navigation, optional reduced motion (not required)
- ✅ Performance optimization: 60fps animations, hardware acceleration, lazy loading
- ✅ **Visuals First Philosophy:** Aesthetic excellence prioritized over accessibility compliance

**Out of Scope:**
- ❌ AI Agents page restoration (separate epic)
- ❌ Services data management backend/CMS integration
- ❌ A/B testing framework for solution section variants
- ❌ Analytics event tracking beyond existing Vercel Analytics
- ❌ Internationalization of service descriptions
- ❌ Custom video player implementation (use existing Vimeo integration patterns)

## System Architecture Alignment

**Frontend Architecture Compliance:**
- Aligns with JAMstack pattern (static site, client-side interactivity)
- Utilizes existing animation stack: GSAP 3.13.0 + ScrollTrigger, Lenis 1.3.11, Framer Motion 12.4.2
- Follows component design patterns from `docs/architecture/frontend-architecture.md` (TypeScript + JSDoc + a11y)
- Implements animation patterns from `docs/architecture/animation-patterns.md` (GSAP cleanup via `gsap.context()`, Lenis integration, RAIL model)
- Maintains Tailwind + Shadcn/UI styling system with glassmorphism patterns (BentoCard component reuse)
- Respects performance budget: vendor chunk strategy (GSAP in vendor chunk), lazy component loading

**Key Architectural Constraints:**
- No backend dependencies (all content in React components/config files)
- Static asset delivery via GitHub Pages CDN
- Vite build process with SWC transpilation
- Mobile-first responsive design (Tailwind breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px)
- SEO via react-helmet (meta tags for new section layout)

**Component Integration Points:**
- Replaces: `src/components/Services/desktop/DesktopServicesBold.tsx` (current implementation)
- Maintains: `src/components/Services/types.ts` (ServiceData interface)
- Reuses: `src/components/ui/bento-grid.tsx` (BentoCard), `src/components/ui/magnetic-button.tsx` (MagneticButton)
- New components: `SolutionTheater.tsx`, `PerspectiveContainer.tsx`, `SolutionCard3D.tsx`, `InteractivePreview.tsx`

## Detailed Design

### Services and Modules

| Module | Responsibility | Inputs | Outputs | Owner/Location |
|--------|---------------|--------|---------|----------------|
| **SolutionTheater** | Orchestrates entire 3D theater experience; manages scroll timeline, Lenis integration, and section-level state | `services: ServiceData[]`, `prefersReducedMotion: boolean` | Rendered theater section with perspective container | `src/components/Services/desktop/SolutionTheater.tsx` |
| **PerspectiveContainer** | Creates 3D perspective context; manages mouse tracking for global parallax/tilt effects | `children: ReactNode`, `mouseTracking: boolean` | Wrapper with CSS `perspective` and mouse event handlers | `src/components/Services/3d/PerspectiveContainer.tsx` |
| **SolutionCard3D** | Individual service card with 3D transforms, depth shadows, and hover interactions | `service: ServiceData`, `index: number`, `prefersReducedMotion: boolean` | Interactive 3D card with preview window | `src/components/Services/3d/SolutionCard3D.tsx` |
| **InteractivePreview** | Asset-agnostic preview window (video/image/gradient fallback) with lazy loading | `previewSrc?: string`, `fallbackGradient: string`, `type: 'video' \| 'image'` | Preview content with loading states | `src/components/Services/3d/InteractivePreview.tsx` |
| **useMouseTracking** | Custom hook for calculating mouse-based tilt angles and shadow positions | `elementRef: RefObject`, `strength: number` | `{ tiltX, tiltY, shadowX, shadowY }` | `src/hooks/useMouseTracking.ts` |
| **useScrollTheater** | GSAP ScrollTrigger timeline management for theater section | `containerRef: RefObject`, `cardRefs: RefObject[]` | `{ isInView, progress }` | `src/hooks/useScrollTheater.ts` |
| **solutionAssets.ts** | Asset configuration mapping service IDs to preview content paths | N/A (static config) | `AssetConfig` object | `src/config/solutionAssets.ts` |

### Data Models and Contracts

**ServiceData Interface** (existing, maintained):
```typescript
// src/components/Services/types.ts
interface ServiceData {
  icon: "Brain" | "Layers" | "Bot" | "Phone";
  title: string;
  description: string;
  link: string;
  color: string; // Hex color for gradients/shadows
}
```

**AssetConfig Interface** (new):
```typescript
// src/config/solutionAssets.ts
interface PreviewAsset {
  preview?: string;        // Video/image path
  thumbnail?: string;      // Fallback thumbnail
  fallbackGradient: string; // CSS gradient for no-asset state
  type: 'video' | 'image';
}

interface AssetConfig {
  [serviceId: string]: PreviewAsset;
}

// Example:
const solutionAssets: AssetConfig = {
  'studios': {
    preview: '/videos/studios-demo.mp4',
    thumbnail: '/images/studios-thumb.jpg',
    fallbackGradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    type: 'video'
  },
  // ... other services
};
```

**MouseTrackingState** (new):
```typescript
// src/hooks/useMouseTracking.ts
interface MouseTrackingState {
  tiltX: number;      // -15 to 15 degrees
  tiltY: number;      // -15 to 15 degrees
  shadowX: number;    // 0 to 40px offset
  shadowY: number;    // 0 to 40px offset
  isHovered: boolean;
}
```

**ScrollTheaterState** (new):
```typescript
// src/hooks/useScrollTheater.ts
interface ScrollTheaterState {
  isInView: boolean;
  progress: number;     // 0 to 1, scroll progress through section
  cardStates: {
    index: number;
    opacity: number;    // 0 to 1
    scale: number;      // 0.8 to 1.1
    translateY: number; // -100 to 0px
  }[];
}
```

### APIs and Interfaces

**Component Props Interfaces**:

```typescript
// SolutionTheater.tsx
interface SolutionTheaterProps {
  services: ServiceData[];
  className?: string;
}

// PerspectiveContainer.tsx
interface PerspectiveContainerProps {
  children: ReactNode;
  mouseTracking?: boolean;
  perspectiveValue?: number; // Default: 1200px
  className?: string;
}

// SolutionCard3D.tsx
interface SolutionCard3DProps {
  service: ServiceData;
  index: number;
  prefersReducedMotion: boolean;
  assetConfig?: PreviewAsset;
  onCardClick?: (service: ServiceData) => void;
}

// InteractivePreview.tsx
interface InteractivePreviewProps {
  src?: string;
  type: 'video' | 'image';
  fallbackGradient: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}
```

**Custom Hook Signatures**:

```typescript
// useMouseTracking.ts
function useMouseTracking(
  elementRef: RefObject<HTMLElement>,
  options?: {
    strength?: number;      // 0-1, default 0.15
    maxTilt?: number;       // degrees, default 15
    shadowMultiplier?: number; // default 2.5
  }
): MouseTrackingState;

// useScrollTheater.ts
function useScrollTheater(
  containerRef: RefObject<HTMLElement>,
  cardRefs: RefObject<HTMLElement>[],
  options?: {
    staggerDelay?: number;  // ms, default 150
    triggerStart?: string;  // ScrollTrigger start, default "top 75%"
    scrub?: boolean;        // default true
  }
): ScrollTheaterState;
```

**Events & Callbacks**:
- `onCardClick(service: ServiceData)`: Fired when card is clicked (navigate to service page)
- `onPreviewError(error: Error)`: Media loading error handler
- `onCardHoverStart(index: number)`: Analytics tracking for hover engagement
- `onCardHoverEnd(index: number)`: Analytics tracking for hover engagement

### Workflows and Sequencing

**1. Initial Load Sequence** (Page mount):
```
1. HomePage renders → Services component
2. Services determines desktop → renders SolutionTheater
3. SolutionTheater:
   a. Removes AI Agents from services array (filter by title !== "AI Agents")
   b. Loads asset config from solutionAssets.ts
   c. Initializes Lenis smooth scroll context (if not already initialized)
   d. Renders PerspectiveContainer with 3 SolutionCard3D children
4. Each SolutionCard3D:
   a. Applies initial transform: scale(0.8), translateY(100px), opacity(0)
   b. Renders InteractivePreview with fallback gradient (no flash)
   c. Lazy loads preview assets on intersection
5. useScrollTheater hook:
   a. Creates GSAP context
   b. Sets up ScrollTrigger on theater section
   c. Defines staggered reveal timeline (cards 0 → 1 → 2)
```

**2. Scroll Interaction Sequence**:
```
User scrolls → Theater section enters viewport
  ↓
ScrollTrigger activates timeline:
  ↓
Card 0 (Studios): opacity 0→1, scale 0.8→1.1, translateY 100→0 (duration: 0.8s)
  ↓ (150ms delay)
Card 1 (Engine): opacity 0→1, scale 0.8→1.0, translateY 100→0 (duration: 0.8s)
  ↓ (150ms delay)
Card 2 (Conv AI): opacity 0→1, scale 0.8→0.95, translateY 100→0 (duration: 0.8s)
  ↓
Parallax layers: Background elements translateY at 0.5x scroll speed
  ↓
User continues scroll → Cards remain in stable state
```

**3. Mouse Tracking Flow** (Desktop only):
```
Mouse enters PerspectiveContainer bounds
  ↓
useMouseTracking hook calculates:
  - mouseX/Y relative to container center
  - tiltX = (mouseX - centerX) / width * strength * maxTilt
  - tiltY = (mouseY - centerY) / height * strength * maxTilt
  - shadowX/Y = tilt * shadowMultiplier
  ↓
Apply transforms to all cards:
  - transform: rotateX(tiltY) rotateY(tiltX)
  - box-shadow: ${shadowX}px ${shadowY}px 40px rgba(color, 0.3)
  ↓
Throttled updates (60fps via requestAnimationFrame)
  ↓
Mouse leaves → Spring animation back to neutral (Framer Motion)
```

**4. Card Hover Sequence**:
```
Mouse enters card
  ↓
50ms debounce (Linear benchmark)
  ↓
Apply hover effects:
  1. Card: scale 1.0→1.05, z-index elevation
  2. Preview window: opacity 0.8→1.0, play video if type='video'
  3. CTA button: Magnetic effect activates (MagneticButton component)
  4. Shadow: blur 40→60px, spread 0→20px
  ↓
User clicks card → navigate to service.link (React Router)
  OR
User clicks CTA → Open Cal.com (existing behavior)
```

**5. Mobile Flow** (Simplified, no 3D):
```
Mobile detected (useIsMobile hook)
  ↓
Render mobile-specific layout:
  - Vertical stack (no perspective container)
  - Swipe gestures for card navigation (Framer Motion drag)
  - 3D tilt on device orientation (useDeviceOrientation hook)
  - Tap to expand preview, double-tap to navigate
  ↓
Scroll reveal: Simple fade-up (no complex transforms)
```

**6. Accessibility Flow** (`prefers-reduced-motion`):
```
Detect prefers-reduced-motion: reduce
  ↓
Disable:
  - GSAP timeline (instant opacity/scale changes)
  - Mouse-tracking tilt (cards remain flat)
  - Parallax effects (static positioning)
  - Auto-play videos (manual play only)
  ↓
Enable:
  - Keyboard navigation (Tab through cards)
  - Focus indicators (2px outline on focus)
  - Screen reader announcements (ARIA live regions)
```

## Non-Functional Requirements

### Performance

**RAIL Model Compliance** (per `docs/architecture/animation-patterns.md`):
- **Response:** User interactions acknowledged within **50ms** (Linear benchmark)
  - Mouse tracking updates: ≤16.67ms (60fps)
  - Card hover state change: ≤50ms
  - CTA button click feedback: ≤100ms

- **Animation:** Transitions complete within **300ms**, complex sequences ≤800ms
  - Card reveal stagger: 3 cards × 800ms + 300ms overlap = 2.1s total sequence
  - Hover scale/shadow: 300ms spring animation
  - Mouse tilt response: Continuous 60fps (no jank)

- **Idle:** Main thread idle for ≥50ms intervals
  - GSAP timeline uses requestAnimationFrame batching
  - Mouse tracking throttled to 60fps max
  - Intersection Observer for lazy loading (off main thread)

- **Load:** Interactive within **3 seconds** on 3G
  - Theater section assets lazy loaded (below fold)
  - Critical path: HTML/CSS/JS ~500kb gzipped
  - Fallback gradients render immediately (0ms wait)

**Performance Targets:**
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| First Contentful Paint (FCP) | <1.5s | Lighthouse, Vercel Analytics |
| Largest Contentful Paint (LCP) | <2.5s | Core Web Vitals |
| Cumulative Layout Shift (CLS) | <0.1 | Core Web Vitals |
| First Input Delay (FID) | <100ms | Core Web Vitals |
| Theater Section TTI | <1s after scroll into view | Custom performance mark |
| Animation Frame Rate | 60fps (no drops <55fps) | stats.js, Chrome DevTools |
| Video Preview Load Time | <800ms (on 4G) | Network waterfall |
| Mouse Tracking Latency | ≤16.67ms | requestAnimationFrame timing |
| Hover Interaction Response | ≤50ms | Custom performance measurement |

**Optimization Strategies:**
- **Hardware Acceleration:** All transforms use `transform: translate3d()`, `rotateX/Y`, `scale` (GPU-accelerated properties only)
- **will-change Hints:** Applied to cards during scroll/hover interactions, removed when idle
- **Lazy Loading:** Videos loaded via IntersectionObserver when card enters viewport ±100px margin
- **Code Splitting:** Theater components in separate chunk (`theater.chunk.js`), loaded on-demand
- **Asset Optimization:**
  - Videos: WebM (VP9) + MP4 (H.264) fallback, 720p max, <5MB per file
  - Images: WebP with JPEG fallback, responsive srcset
  - Fonts: Already subset (@fontsource packages)

**Performance Budget:**
- Theater component bundle: <80kb gzipped (includes GSAP utilities)
- Total page weight increase: <200kb (with all assets lazy loaded)
- JavaScript execution time: <100ms (excluding render)

### Security

**Inherited Security from Architecture** (refs: `docs/ARCHITECTURE.md` lines 589-614):
- **CSP Headers:** Maintained; no new external script sources required
- **XSS Prevention:**
  - No `dangerouslySetInnerHTML` in theater components
  - User-generated content: N/A (all content hardcoded in ServiceData)
  - Asset URLs: Validated against whitelist in `solutionAssets.ts`

**New Security Considerations:**
- **Video/Image Sources:**
  - Restrict to GitHub Pages CDN paths (`/videos/*`, `/images/*`)
  - Validate file extensions: `.mp4`, `.webm`, `.jpg`, `.webp` only
  - Reject data URIs and external URLs (prevent XSS via media)

- **Mouse Tracking Privacy:**
  - Mouse position NOT sent to analytics (PII concern)
  - Tracking confined to client-side calculations
  - No fingerprinting data collected

- **Asset Integrity:**
  - Use Subresource Integrity (SRI) if loading from external CDN (not needed for GitHub Pages)
  - File size validation: Reject videos >10MB to prevent DoS

**Security Checklist:**
- ✅ No eval() or Function() constructors
- ✅ No inline event handlers (onClick via React)
- ✅ DOMPurify for any future user input (not needed now)
- ✅ Asset path validation against hardcoded whitelist
- ✅ HTTPS-only asset URLs (enforced by GitHub Pages)

### Reliability/Availability

**Error Handling & Graceful Degradation:**
- **Video Load Failure:**
  - Retry: 1 attempt with 2s delay
  - Fallback: Display thumbnail image
  - Final fallback: Animated gradient (always works)
  - User feedback: Subtle "Preview unavailable" toast (non-blocking)

- **GSAP/Animation Errors:**
  - Wrap ScrollTrigger init in try-catch
  - Fallback: Instant opacity change (no animation)
  - Log error to Vercel Analytics (non-blocking)

- **Mouse Tracking Errors:**
  - Bounded calculations: tilt clamped to [-15, 15] degrees
  - NaN protection: `isFinite()` checks on all calculations
  - Fallback: Disable tilt, maintain static hover effects

- **Lenis Smooth Scroll Failure:**
  - Detect initialization error
  - Fallback: Native scroll (no smooth scrolling)
  - Theater still functional (GSAP ScrollTrigger works with native scroll)

**Availability Targets:**
- **Client-side Feature Availability:** 99.9% (only fails if JavaScript disabled)
- **Asset Availability:** 99.5% (GitHub Pages SLA + CDN)
- **Graceful Degradation Layers:**
  1. Full 3D experience (GSAP + Lenis + Videos)
  2. Simplified animations (Framer Motion only)
  3. Static cards with CSS hover (JavaScript fails)
  4. Unstyled content (CSS fails, semantic HTML remains accessible)

**Monitoring:**
- **Error Tracking:** Wrap theater initialization in error boundary
- **Performance Degradation:** Alert if FPS drops below 30fps for >2s
- **Asset Load Failures:** Track with Vercel Analytics custom events

### Observability

**Metrics & Instrumentation:**
- **Performance Metrics** (measurePerformance utility):
  - `theater.mount_duration` - Time from component mount to first render
  - `theater.scroll_reveal_duration` - Time for all 3 cards to reveal
  - `theater.hover_response_time` - Latency from mouseenter to visual feedback
  - `theater.video_load_duration` - Per-video asset load time

- **User Engagement Metrics** (Vercel Analytics):
  - `card.hover.duration` - How long users hover on each card
  - `card.click.rate` - Click-through rate per service
  - `preview.play.count` - Video autoplay engagement
  - `section.scroll_depth` - % of users scrolling through entire section

- **Error Metrics**:
  - `theater.animation_error.count` - GSAP/ScrollTrigger failures
  - `theater.asset_load_error.count` - Video/image 404s or timeouts
  - `theater.mouse_tracking_error.count` - Calculation errors

**Logging Strategy:**
- **Development:** Console logs for all state transitions, verbose GSAP debug
- **Production:**
  - Errors only (sent to Vercel Analytics)
  - Performance marks for Core Web Vitals
  - User interaction events (hover, click, scroll depth)

**Debug Tooling:**
- **GSAP GSDevTools** (dev only): Visual timeline scrubber for debugging animations
- **React DevTools Profiler:** Identify re-render bottlenecks
- **Chrome Performance Panel:** Record scroll interactions, analyze frame drops
- **stats.js:** On-screen FPS counter (enabled via `?debug=true` query param)

**Alerting Thresholds:**
- Error rate >1% over 1 hour → Notify via Vercel webhook
- LCP >4s for >10% of users → Performance degradation alert
- Asset 404 rate >5% → Asset deployment issue alert

## Dependencies and Integrations

### Core Dependencies (Existing)

**Animation & Interaction Stack:**
| Package | Version | Purpose | Integration Notes |
|---------|---------|---------|-------------------|
| `gsap` | ^3.13.0 | Scroll-driven timelines, card reveals | Already in vendor chunk; import ScrollTrigger plugin |
| `@gsap/react` | ^2.1.2 | React hooks for GSAP (useGSAP) | Use for cleanup via `gsap.context()` |
| `lenis` | ^1.3.11 | Smooth scroll with momentum | Global instance from App.tsx; coordinate with ScrollTrigger |
| `framer-motion` | ^12.4.2 | Spring animations, layout shifts | Use for hover micro-interactions, tilt spring-back |

**React Ecosystem:**
| Package | Version | Purpose | Integration Notes |
|---------|---------|---------|-------------------|
| `react` | ^18.3.1 | Core framework | Use hooks: useRef, useEffect, useMemo, useCallback |
| `react-dom` | ^18.3.1 | DOM rendering | N/A (automatic) |
| `react-router-dom` | ^6.26.2 | Client-side routing | Use Link for card navigation to service pages |

**UI & Styling:**
| Package | Version | Purpose | Integration Notes |
|---------|---------|---------|-------------------|
| `tailwindcss` | ^3.4.11 | Utility-first CSS | Use for layout, glassmorphism, responsive breakpoints |
| `clsx` + `tailwind-merge` | ^2.1.1 + ^2.5.2 | Conditional classes | Use `cn()` utility from lib/utils.ts |
| `class-variance-authority` | ^0.7.1 | Component variants | Define card variants (size, depth, state) |
| `lucide-react` | ^0.462.0 | Icon library | Reuse service icons (Brain, Layers, Phone) |

**Performance & Monitoring:**
| Package | Version | Purpose | Integration Notes |
|---------|---------|---------|-------------------|
| `@vercel/analytics` | ^1.4.1 | Analytics tracking | Track custom events: card clicks, hover duration |
| `stats.js` | ^0.17.0 | FPS monitoring | Enable in dev mode or via ?debug=true |

### New Dependencies (Required)

**None Required** - All functionality achievable with existing stack.

**Optional (Future Enhancement):**
| Package | Version | Purpose | Justification for Deferral |
|---------|---------|---------|----------------------------|
| `@react-spring/web` | ^9.7.0 | Physics-based animations | Framer Motion already provides spring physics; avoid duplication |
| `react-intersection-observer` | ^9.13.0 | Intersection detection | Native IntersectionObserver API sufficient; no hooks needed |
| `use-gesture` | ^10.3.0 | Touch gestures (mobile) | Framer Motion drag API covers swipe gestures; defer until mobile UX testing |

### Integration Points

**1. GSAP ScrollTrigger Integration:**
```typescript
// Coordinate with existing Lenis instance
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Theater component must access global Lenis instance
// Pattern from docs/architecture/animation-patterns.md:
useEffect(() => {
  const lenis = window.lenis; // Global instance from App.tsx
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}, []);
```

**2. React Router Integration:**
```typescript
// Card click navigation
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const handleCardClick = (service: ServiceData) => {
  navigate(service.link); // e.g., "/studios"
};
```

**3. Vercel Analytics Integration:**
```typescript
// Custom event tracking
import { track } from '@vercel/analytics';

track('card_hover', {
  service: service.title,
  duration: hoverDuration
});

track('preview_play', {
  service: service.title,
  assetType: 'video'
});
```

**4. Existing Component Reuse:**
```typescript
// Magnetic button from existing UI library
import { MagneticButton } from '@/components/ui/magnetic-button';

// Bento card for glassmorphism
import { BentoCard } from '@/components/ui/bento-grid';

// Service types
import type { ServiceData } from '@/components/Services/types';
```

**5. Asset Loading (Static CDN):**
- **Videos:** `/videos/{service-id}-demo.{mp4|webm}` (GitHub Pages CDN)
- **Images:** `/images/{service-id}-thumb.{jpg|webp}` (GitHub Pages CDN)
- **Fallback:** CSS gradients (no external request)
- **No external CDN dependencies** (all self-hosted)

### Build & Deployment Integration

**Vite Configuration Changes:**
```typescript
// vite.config.ts - Add theater chunk
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap'],
        ui: ['@radix-ui/*'],
        theater: [ // NEW
          '@/components/Services/desktop/SolutionTheater',
          '@/components/Services/3d/*',
          '@/hooks/useMouseTracking',
          '@/hooks/useScrollTheater'
        ]
      }
    }
  }
}
```

**TypeScript Path Aliases (Existing):**
- `@/` → `src/` (already configured in tsconfig.json)
- `@/components/*` → `src/components/*`
- `@/hooks/*` → `src/hooks/*`
- `@/config/*` → `src/config/*` (NEW, add to tsconfig paths)

**GitHub Actions Deployment:**
- No changes required (existing workflow handles static builds)
- Asset optimization via Vite build process
- Deploy videos to `/public/videos/` (included in build output)

### Third-Party Service Integrations

**No New External Services Required**

**Existing Integrations (Maintained):**
- **Cal.com:** CTA button links (unchanged from current implementation)
- **getform.io:** No interaction with theater section
- **Vimeo:** Optional for video preview fallback (if using Vimeo Player instead of native <video>)

### Dependency Version Constraints

**Peer Dependency Compatibility:**
- GSAP 3.x requires `gsap.context()` for React 18 (already compatible)
- Lenis 1.x + ScrollTrigger: Verified compatible per animation-patterns.md
- Framer Motion 12.x: Full React 18 Suspense support (no breaking changes)

**Lock Version Strategy:**
- **Lock exact versions** for animation libs (GSAP, Framer Motion, Lenis) - behavior consistency critical
- **Allow patch updates** for React ecosystem (^18.3.1) - security fixes
- **Monitor breaking changes:** GSAP 4.x (future), Framer Motion 13.x (future)

### Integration Testing Requirements

**Animation Stack Integration:**
- GSAP timeline + Lenis scroll: Verify sync via manual scroll testing
- ScrollTrigger + prefers-reduced-motion: Verify fallback disables animations
- Framer Motion + GSAP: Ensure no conflict on same elements (use different properties)

**Component Integration:**
- MagneticButton in 3D context: Verify magnetic effect works with perspective transform
- BentoCard + custom shadows: Verify shadow layering with depth effects
- React Router navigation: Verify links work with SPA routing (no page reload)

**Asset Loading:**
- Intersection Observer + Lazy Loading: Verify videos load before entering viewport
- Video fallback chain: Test 404 → thumbnail → gradient progression
- Asset preloading: Verify `<link rel="preload">` for above-fold gradients

## Acceptance Criteria (Authoritative)

### AC1: AI Agents Card Removal
**GIVEN** the homepage loads
**WHEN** user scrolls to "Our Solutions" section
**THEN** only 3 service cards are visible (Studios, Studios Engine, Conversational AI)
**AND** AI Agents card is not rendered in the DOM

### AC2: 3D Perspective Layout (Desktop ≥1024px)
**GIVEN** user views site on desktop (viewport ≥1024px)
**WHEN** solutions section enters viewport
**THEN** cards display in diagonal stagger arrangement:
- Card 1 (Studios): z-index 3, scale 1.1, top-left position
- Card 2 (Engine): z-index 2, scale 1.0, center-right offset
- Card 3 (Conv AI): z-index 1, scale 0.95, bottom-right offset
**AND** CSS `perspective: 1200px` is applied to container

### AC3: Mouse-Tracking Tilt Effects (Desktop, Motion Enabled)
**GIVEN** user has NOT enabled `prefers-reduced-motion`
**WHEN** mouse moves within perspective container bounds
**THEN** all 3 cards tilt based on mouse position:
- Tilt range: -15° to +15° on X and Y axes
- Tilt strength: 0.15 (15% of max per distance unit)
- Shadow offset: 0-40px matching tilt direction
**AND** tilt updates at 60fps (≤16.67ms per frame)
**AND** cards spring back to neutral when mouse leaves (300ms animation)

### AC4: GSAP ScrollTrigger Reveal Sequence
**GIVEN** user scrolls toward solutions section
**WHEN** section top edge crosses 75% viewport height
**THEN** cards reveal in staggered sequence:
- Card 1: 0ms delay, opacity 0→1, scale 0.8→1.1, translateY 100→0 (800ms duration)
- Card 2: 150ms delay, opacity 0→1, scale 0.8→1.0, translateY 100→0 (800ms duration)
- Card 3: 300ms delay, opacity 0→1, scale 0.8→0.95, translateY 100→0 (800ms duration)
**AND** parallax background elements move at 0.5x scroll speed
**AND** animation uses `gsap.context()` for cleanup on unmount

### AC5: Interactive Preview Windows
**GIVEN** each service card has an asset configured
**WHEN** card is in viewport ±100px margin
**THEN** preview asset lazy loads:
- Priority 1: Load video/image from `solutionAssets.ts` config
- Priority 2: Fallback to thumbnail if preview 404
- Priority 3: Display animated gradient if all assets fail
**AND** loading state shows gradient immediately (0ms wait, no flash)
**AND** video previews auto-play on hover (muted, looped)

### AC6: Magnetic CTA Interactions
**GIVEN** user hovers over a card
**WHEN** hover duration exceeds 50ms (Linear benchmark)
**THEN** the following effects trigger:
- Card scales 1.0→1.05 (300ms spring)
- Preview window opacity 0.8→1.0
- CTA button activates magnetic effect (MagneticButton component)
- Shadow blur increases 40→60px, spread 0→20px
**AND** hover response time measured <50ms from mouseenter to visual feedback

### AC7: Asset-Agnostic Architecture
**GIVEN** implementation is complete
**WHEN** developer updates `solutionAssets.ts` config file
**THEN** new video/image assets display without code changes
**AND** missing assets gracefully degrade to gradient fallbacks
**AND** asset types supported: `.mp4`, `.webm` (video), `.jpg`, `.webp` (image)
**AND** external URLs and data URIs are rejected (security)

### AC8: Adaptive Layout - Mobile (<768px)
**GIVEN** user views site on mobile (viewport <768px)
**WHEN** solutions section renders
**THEN** layout adapts to mobile:
- Vertical stack (no 3D perspective)
- Swipe gestures for navigation (Framer Motion drag)
- Device orientation tilt on gyroscope-enabled devices
- Tap to expand preview, double-tap to navigate
**AND** scroll reveal uses simple fade-up (no complex transforms)

### AC9: Adaptive Layout - Tablet (768px-1023px)
**GIVEN** user views site on tablet (768px ≤ viewport < 1024px)
**WHEN** solutions section renders
**THEN** layout shows side-by-side 2-column grid
**AND** subtle depth effects applied (reduced perspective: 800px)
**AND** touch interactions work (tap for hover state, double-tap to navigate)

### AC10: Accessibility - Reduced Motion (Optional Respect)
**GIVEN** user has enabled `prefers-reduced-motion: reduce`
**WHEN** any animation trigger occurs
**THEN** system MAY reduce animation intensity (not required):
- Option: Faster GSAP reveal (400ms vs 800ms)
- Option: Reduce tilt strength (0.08 vs 0.15)
- **Required:** Keyboard navigation remains functional (Tab through cards)
**AND** focus indicators visible (for usability, not compliance)

### AC11: Basic Usability (Non-WCAG)
**GIVEN** theater section is rendered
**WHEN** user attempts to interact
**THEN** basic usability is maintained:
- Keyboard navigation works (Tab, Enter, Space)
- Semantic HTML structure (`<section>`, clickable cards)
- No critical errors that break functionality
**AND** visual design takes priority over contrast ratios
**AND** animations are NOT constrained by accessibility guidelines

### AC12: Performance - 60fps Animations
**GIVEN** user interacts with theater section
**WHEN** scroll or mouse tracking is active
**THEN** frame rate maintains ≥55fps (measured via stats.js)
**AND** no frame drops below 30fps for >100ms
**AND** all animations use GPU-accelerated properties only:
- `transform: translate3d()`, `rotateX/Y`, `scale` (allowed)
- `top`, `left`, `width`, `height` (forbidden)
**AND** `will-change` applied during interactions, removed when idle

### AC13: Performance - RAIL Model Compliance
**GIVEN** user performs any interaction
**WHEN** performance is measured
**THEN** RAIL targets are met:
- **Response:** Hover acknowledged <50ms
- **Animation:** Transitions complete <300ms (simple), <800ms (complex)
- **Idle:** Main thread idle ≥50ms intervals
- **Load:** Theater interactive <1s after scroll into view
**AND** Core Web Vitals pass:
- LCP <2.5s, FID <100ms, CLS <0.1

### AC14: Error Handling - Asset Failures
**GIVEN** video asset URL returns 404
**WHEN** preview attempts to load
**THEN** fallback sequence executes:
1. Retry once after 2s delay
2. If retry fails, load thumbnail image
3. If thumbnail fails, display animated gradient
**AND** user sees subtle "Preview unavailable" toast (non-blocking)
**AND** error logged to Vercel Analytics (no console spam)

### AC15: Navigation Integration
**GIVEN** user clicks a solution card
**WHEN** click event fires
**THEN** React Router navigates to service page (SPA, no reload):
- Studios card → `/studios`
- Studios Engine card → `/studios-engine`
- Conversational AI card → `/conversational`
**AND** if user clicks CTA button → Cal.com opens in new window
**AND** navigation tracked in Vercel Analytics (`card.click` event)

## Traceability Mapping

| AC ID | Spec Section(s) | Component(s)/API(s) | Test Approach |
|-------|----------------|---------------------|---------------|
| AC1 | Objectives & Scope | `SolutionTheater.tsx` line 220 (filter logic) | **Manual:** Visual inspection in browser<br>**Automated:** Query DOM for AI Agents card (should be null) |
| AC2 | Detailed Design → Services/Modules | `PerspectiveContainer.tsx`<br>`SolutionCard3D.tsx` | **Manual:** DevTools inspect, verify CSS perspective<br>**Automated:** Puppeteer screenshot comparison (viewport ≥1024px) |
| AC3 | Workflows → Mouse Tracking Flow | `useMouseTracking.ts` hook<br>`PerspectiveContainer.tsx` | **Manual:** Mouse movement test, visual tilt verification<br>**Automated:** Measure tilt calculations, verify bounds [-15°, 15°] |
| AC4 | Workflows → Scroll Interaction | `useScrollTheater.ts` hook<br>GSAP ScrollTrigger timeline | **Manual:** Scroll through section, verify stagger delays<br>**Automated:** Mock scroll events, assert GSAP timeline properties |
| AC5 | Detailed Design → Data Models | `InteractivePreview.tsx`<br>`solutionAssets.ts` config | **Manual:** Test 404 scenario, verify gradient fallback<br>**Automated:** Mock fetch 404, assert fallback chain executes |
| AC6 | NFR → Performance (50ms benchmark) | `SolutionCard3D.tsx` hover handlers<br>`MagneticButton` | **Manual:** Hover test with performance.now() logging<br>**Automated:** Performance mark, measure hover→feedback latency |
| AC7 | Dependencies → Asset Loading | `solutionAssets.ts` config<br>Asset validation logic | **Manual:** Update config, verify no code changes needed<br>**Automated:** Unit test: validate allowed extensions, reject externals |
| AC8 | Workflows → Mobile Flow | `SolutionTheater.tsx` responsive logic<br>Framer Motion drag | **Manual:** Test on mobile device/emulator<br>**Automated:** Viewport resize test, assert mobile layout renders |
| AC9 | System Arch → Responsive Design | `SolutionTheater.tsx` tablet breakpoint<br>Tailwind `md:` classes | **Manual:** Resize to 768-1023px, verify 2-column<br>**Automated:** Snapshot test at tablet viewport |
| AC10 | Workflows → Accessibility Flow<br>NFR → Reliability | `prefers-reduced-motion` media query<br>Optional animation reduction | **Manual:** Enable reduced motion in OS, verify system still works<br>**Note:** Compliance NOT required, visual quality prioritized |
| AC11 | System Arch → Basic Usability | All theater components<br>Keyboard handlers | **Manual:** Tab navigation test, verify no broken interactions<br>**Note:** WCAG compliance explicitly OUT OF SCOPE |
| AC12 | NFR → Performance (60fps) | All animated components<br>`will-change` CSS | **Manual:** stats.js FPS monitor, visual inspection<br>**Automated:** Chrome DevTools Performance recording, assert no jank |
| AC13 | NFR → Performance (RAIL) | Entire theater section | **Manual:** Lighthouse audit, manual interaction timing<br>**Automated:** Web Vitals API, measure LCP/FID/CLS |
| AC14 | NFR → Reliability | `InteractivePreview.tsx` error boundaries<br>Retry logic | **Manual:** Network throttle, simulate 404<br>**Automated:** Mock failed fetch, assert retry→fallback sequence |
| AC15 | Dependencies → React Router | `SolutionCard3D.tsx` click handler<br>`useNavigate` hook | **Manual:** Click cards, verify SPA navigation (no reload)<br>**Automated:** React Router mock, assert navigate() called |

## Risks, Assumptions, Open Questions

### Risks

**R1: Performance Degradation on Mid-Range Devices** [MEDIUM]
- **Description:** 3D transforms + GSAP animations + mouse tracking may drop below 60fps on devices with integrated GPUs (e.g., Intel UHD Graphics, older mobile chipsets)
- **Impact:** Poor user experience, motion sickness from janky animations
- **Mitigation:**
  - Detect GPU tier using `navigator.hardwareConcurrency` and `WebGL` renderer
  - Auto-disable 3D tilt on low-tier devices (keep simple scale/fade)
  - Provide manual toggle in UI (Settings icon → "Reduce animations")
- **Contingency:** If >20% of users experience <45fps, revert to 2D layout with subtle depth shadows

**R2: Browser Compatibility - CSS `perspective` Support** [LOW]
- **Description:** CSS 3D transforms require `perspective` property; unsupported in IE11 and very old mobile browsers
- **Impact:** Layout breaks, cards appear flat or misaligned
- **Mitigation:**
  - Use `@supports (perspective: 1200px)` feature detection
  - Fallback: Render 2D grid layout (existing DesktopServicesBold component)
  - Target browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ (99.2% coverage per caniuse.com)
- **Likelihood:** LOW (project already drops IE11 support per architecture doc)

**R3: Video Asset File Size Impacting Mobile Users** [MEDIUM]
- **Description:** 3 videos at 5MB each = 15MB total; expensive on metered mobile connections
- **Impact:** Slow page load, user abandonment, data cost complaints
- **Mitigation:**
  - Compress videos to <2MB each (720p, 30fps, H.264 high profile)
  - Lazy load only when card in viewport (IntersectionObserver)
  - Detect `navigator.connection.saveData === true` → skip video, show static thumbnail
  - Add "Lite Mode" toggle for mobile users (preload: none)
- **Monitoring:** Track video load failures + slow network warnings in Vercel Analytics

**R4: GSAP + Lenis Integration Conflicts** [LOW]
- **Description:** Multiple ScrollTrigger instances + Lenis scroll proxy may cause sync issues or memory leaks
- **Impact:** Scroll position desync, animations trigger at wrong times, memory bloat
- **Mitigation:**
  - Follow patterns from `docs/architecture/animation-patterns.md` (verified working)
  - Use single Lenis instance (global from App.tsx)
  - Ensure `gsap.context()` cleanup on unmount
  - Test: Rapid scroll up/down to stress-test sync
- **Likelihood:** LOW (patterns already proven in Briefing Engine implementation)

**R5: User Confusion/Discomfort with 3D Tilt** [LOW]
- **Description:** Some users may experience motion sickness from mouse-tracking tilt effects
- **Impact:** Negative brand perception, user complaints
- **Mitigation:**
  - Keep tilt strength low (0.15 = 15% of max)
  - Spring-back animation prevents abrupt movements
  - Optional: Add "Reduce Motion" toggle in UI (persistent localStorage)
- **Monitoring:** Track user feedback, A/B test tilt strength (0.10 vs 0.15 vs 0.20)
- **Note:** `prefers-reduced-motion` respect is OPTIONAL per Visuals First philosophy

### Assumptions

**A1:** GitHub Pages CDN can reliably serve video assets <5MB with acceptable latency (<800ms on 4G)
- **Validation:** Load test with 3 concurrent videos from `public/videos/` directory
- **Fallback:** If CDN latency >1.5s, migrate videos to Cloudflare R2 or Vimeo

**A2:** Users have modern browsers supporting CSS 3D transforms and ES2015+ JavaScript
- **Validation:** Check Vercel Analytics browser distribution (expect 95%+ modern browsers)
- **Fallback:** Progressive enhancement (2D layout for <5% legacy browsers)

**A3:** Video assets will be provided by Cameron in web-optimized formats (MP4 H.264, WebM VP9)
- **Validation:** Confirm with Cameron: codec, resolution, file size, timeline
- **Fallback:** Use static screenshots until videos ready (asset-agnostic architecture)

**A4:** Existing Lenis smooth scroll instance is properly initialized in App.tsx and accessible globally
- **Validation:** Verify `window.lenis` exists before ScrollTrigger integration
- **Fallback:** Initialize local Lenis instance in SolutionTheater (isolated scope)

**A5:** Mobile users will tolerate swipe gestures for card navigation (Framer Motion drag)
- **Validation:** User testing on real devices (iPhone, Android flagship, budget Android)
- **Fallback:** If swipe UX tests poorly, switch to vertical scroll-only (no gesture complexity)

**A6:** Magnetic button effect (MagneticButton component) works correctly within 3D perspective context
- **Validation:** Test hover interactions with perspective transform applied
- **Fallback:** Disable magnetic effect in 3D context, use simple scale hover

**A7:** Visual excellence takes absolute priority over accessibility compliance
- **Validation:** Design reviews prioritize aesthetic quality, not WCAG metrics
- **Approach:** Maintain basic keyboard navigation, but no contrast/ARIA requirements

### Open Questions

**Q1:** ~~What is the timeline for video asset delivery?~~ **RESOLVED**
- **Decision:** Cameron has existing video assets available immediately (not perfect fit, but usable)
- **Strategy:**
  - Phase 1: Implement with current assets in `solutionAssets.ts`
  - Phase 2: Optimize/replace assets later (config-only change, zero code modification)
  - Fallback: Gradient placeholders remain for any failed loads
- **Impact:** No deployment blocker; progressive enhancement approach validated

**Q2:** Should we provide a UI toggle to disable 3D effects for user preference (beyond `prefers-reduced-motion`)?
- **Context:** Some users may want simplified UI without system-wide accessibility settings
- **Options:**
  - A) Add "Reduce Animations" toggle in footer/settings
  - B) Rely solely on `prefers-reduced-motion` detection (optional respect)
  - C) Auto-detect GPU tier, no manual toggle
- **Recommendation:** Option C + Option B (auto-detect + optional reduced motion)

**Q3:** Do we need explicit fallback for browsers without CSS `perspective` support?
- **Context:** Feature detection via `@supports` can render 2D layout for unsupported browsers
- **Options:**
  - A) Graceful degradation to existing DesktopServicesBold component
  - B) Show warning message "Upgrade browser for best experience"
  - C) No fallback (acceptable given 99%+ support)
- **Recommendation:** Option A (seamless fallback, no user-facing warning)

**Q4:** Should video previews auto-play on scroll into view, or only on hover?
- **Context:** Auto-play on scroll increases engagement but may feel aggressive; hover is safer
- **Options:**
  - A) Auto-play on scroll (muted, looped) - higher engagement
  - B) Play on hover only - user-initiated, less intrusive
  - C) A/B test both approaches
- **Recommendation:** Option B (hover-triggered), with A/B test post-launch

**Q5:** What's the plan for AI Agents page restoration after this epic?
- **Context:** Removing card from homepage, but service page still exists (temporarily hidden via routing)
- **Timeline:** Separate epic? Include in roadmap?
- **Impact:** If AI Agents relaunches soon, may need to re-add card with updated asset

## Test Strategy Summary

### Testing Approach

**No Automated Test Framework** (per Architecture: "Zero tests implemented")
- Focus: Manual testing + browser DevTools
- Coverage: Functional, visual, performance, basic usability
- Tools: Chrome DevTools, Lighthouse, stats.js
- **Excluded:** WCAG audits, screen reader testing, axe DevTools (Visuals First philosophy)

### Test Levels

**1. Unit Testing** (Deferred - No Framework)
- **Scope:** Custom hooks (`useMouseTracking`, `useScrollTheater`), utility functions
- **Approach:** Manual verification via console.log, React DevTools Profiler
- **Coverage:** Logic correctness, edge cases (NaN protection, bounds clamping)
- **Future:** If Vitest added, prioritize hook testing

**2. Integration Testing** (Manual)
- **Scope:** Component interactions, GSAP + Lenis + Framer Motion coordination
- **Approach:**
  - Smoke test: Load homepage, scroll to theater, verify reveal sequence
  - Interaction test: Mouse tracking, hover effects, card clicks
  - Asset fallback test: Mock 404 (Network tab → block requests), verify gradient shows
- **Coverage:** All 15 Acceptance Criteria (see Traceability Mapping)

**3. Visual Regression Testing** (Manual Screenshots)
- **Scope:** Layout consistency across viewports, browser compatibility
- **Approach:**
  - Baseline: Take screenshots at 320px, 768px, 1024px, 1920px widths
  - Browsers: Chrome, Firefox, Safari (macOS/iOS), Edge
  - Compare: Side-by-side before/after for any CSS changes
- **Tools:** Browser DevTools device emulation, manual capture

**4. Performance Testing** (Chrome DevTools + Lighthouse)
- **Scope:** 60fps animations, RAIL compliance, Core Web Vitals
- **Approach:**
  - Record Performance profile during scroll + mouse tracking
  - Identify jank (frames >16.67ms), long tasks (>50ms)
  - Run Lighthouse audit (mobile + desktop)
  - Verify: LCP <2.5s, FID <100ms, CLS <0.1
- **Tools:** Chrome DevTools Performance panel, Lighthouse CI (manual run)

**5. Basic Usability Testing** (Keyboard Navigation Only)
- **Scope:** Keyboard navigation, NO WCAG compliance required
- **Approach:**
  - **Manual:**
    - Keyboard-only navigation: Tab through all interactive elements
    - Verify Enter/Space trigger actions (navigate, play video)
    - Optional: Test reduced motion (not required to pass)
- **Checklist:**
  - [ ] All cards accessible via keyboard (Tab, Enter to navigate)
  - [ ] Focus indicators visible (for usability, not compliance)
  - [ ] No broken keyboard interactions
- **Explicitly NOT Testing:**
  - ❌ Color contrast ratios (visual design prioritized)
  - ❌ Screen reader compatibility (out of scope)
  - ❌ ARIA compliance (not required)
  - ❌ axe DevTools audit (visual quality > compliance)

**6. Cross-Browser Testing** (Manual)
- **Scope:** Layout, animations, interactions across browser matrix
- **Browsers:**
  - ✅ Chrome 120+ (primary)
  - ✅ Firefox 120+ (secondary)
  - ✅ Safari 17+ (macOS, iOS)
  - ✅ Edge 120+ (Chromium-based)
  - ⚠️ Mobile browsers: Chrome Mobile, Safari iOS (real devices preferred)
- **Test Cases:**
  - 3D perspective rendering (verify no layout breaks)
  - GSAP ScrollTrigger sync (scroll up/down rapidly)
  - Video playback (WebM fallback to MP4)
  - Mouse tracking (desktop only, skip mobile)

**7. Mobile Device Testing** (Real Devices + Emulators)
- **Devices:**
  - iPhone 12/13/14 (Safari iOS 16+)
  - Samsung Galaxy S21/S22 (Chrome Mobile)
  - Budget Android (Moto G Power, 4GB RAM) - performance baseline
- **Test Cases:**
  - Swipe gestures (Framer Motion drag)
  - Touch hover state (tap = hover, double-tap = navigate)
  - Video lazy loading (verify not loaded until scrolled near)
  - Network conditions: 3G throttle (Chrome DevTools), verify graceful degradation

### Test Execution Plan

**Phase 1: Development Testing** (During Implementation)
- Developer: Run smoke tests after each component completion
- Tools: React DevTools, console.log, visual inspection
- Frequency: Continuous (every commit)

**Phase 2: Integration Testing** (Post-Implementation)
- Developer: Execute all 15 AC test cases (manual)
- Traceability: Map tests to AC IDs (see Traceability Mapping table)
- Tools: Chrome DevTools, Lighthouse, stats.js
- Duration: 2-3 hours

**Phase 3: Cross-Browser/Device Testing** (Pre-Deployment)
- Developer: Test on browser matrix + real mobile devices
- Focus: Visual consistency, interaction reliability, performance
- Duration: 2-4 hours

**Phase 4: Basic Usability Check** (Pre-Deployment)
- Developer: Keyboard navigation test, verify no broken interactions
- Tools: Manual Tab testing, visual focus indicators
- Duration: 30 minutes
- **Note:** NO screen reader or WCAG testing required

**Phase 5: Performance Validation** (Pre-Deployment)
- Developer: Lighthouse audit, Performance recording, stats.js monitoring
- Acceptance: All RAIL targets met, Core Web Vitals pass
- Duration: 1 hour

**Phase 6: User Acceptance Testing** (Optional, Post-Deployment)
- Stakeholder: Cameron reviews deployed theater on staging
- Feedback: Visual polish, interaction feel, conversion effectiveness
- Iterations: Address critical feedback only (defer nice-to-haves)

### Test Coverage Goals

**Functional Coverage:** 100% of Acceptance Criteria (15/15 ACs tested manually)

**Visual Coverage:** 4 viewport sizes × 4 browsers = 16 screenshots (baseline + regression)

**Performance Coverage:**
- Desktop: Chrome Performance profile + Lighthouse audit
- Mobile: Real device testing + 3G throttle simulation

**Usability Coverage:**
- Basic keyboard navigation (Tab, Enter, Space)
- NO WCAG/accessibility compliance testing (Visuals First)

### Test Data & Environments

**Test Data:**
- Service array: Use actual production data (Studios, Studios Engine, Conversational AI)
- Asset URLs: Mix of real videos (when available) + mock 404s (fallback testing)
- Mock scenarios: 404 video, slow network (3G), missing thumbnail

**Test Environments:**
- **Local:** `npm run dev` (http://localhost:8080) - rapid iteration
- **Preview:** `npm run preview` (http://localhost:4173) - production build verification
- **Staging:** GitHub Pages branch deploy (optional) - stakeholder review

### Edge Cases & Stress Testing

**Edge Cases to Test:**
1. **Rapid scroll:** Up/down quickly, verify no animation desync
2. **Window resize:** Drag browser width across breakpoints (320→768→1024→1920), verify responsive transitions
3. **Mouse leave during tilt:** Ensure spring-back animation completes
4. **Video error mid-playback:** Pause → 404 → fallback to thumbnail
5. **Focus trap:** Tab through cards, Shift+Tab backward, verify no stuck focus
6. **Long text:** Inject 300-char service description, verify card layout doesn't break
7. **Zero assets:** Remove all `solutionAssets` config, verify gradient-only mode works
8. **High DPR displays:** Test on Retina/4K, verify crisp rendering (no blur)

**Stress Testing:**
1. **Memory leak detection:** Scroll theater in/out of view 50 times, check memory (Chrome Task Manager)
2. **Animation spam:** Hover all cards rapidly (10 times/sec), verify no performance degradation
3. **Network instability:** Toggle DevTools offline mode during video load, verify retry logic
4. **GPU overload:** Run stats.js, monitor FPS during simultaneous scroll + mouse tracking + video playback
