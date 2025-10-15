# Component Inventory

**Project:** cre8tive-website-1006
**Generated:** 2025-10-16
**Scan Level:** Deep

---

## Overview

This document catalogs all React components, custom hooks, and utilities in the application.

**Component Architecture:**
- **Total Pages:** 12 route-based pages
- **Component Categories:** 25+ organized by feature
- **Custom Hooks:** 17 React hooks
- **Utility Modules:** 7 helper modules
- **UI Library:** Radix UI + shadcn/ui patterns

---

## Pages (Routes)

| Page | Path | Purpose |
|------|------|---------|
| **Index** | `/` | Homepage |
| **Studios** | `/studios` | Studios service page |
| **BriefingEngine** | `/briefing-engine` | AI Briefing Engine (main product) |
| **ConversationalAI** | `/conversational` | Conversational AI service |
| **About** | `/about` | About page |
| **Contact** | `/contact` | Contact form |
| **PrivacyPolicy** | `/privacy` | Privacy policy |
| **Analytics** | `/analytics` | Analytics dashboard |
| **NotFound** | `*` | 404 page |
| **Agents** | `/agents` | _Temporarily disabled - under development_ |
| **StudiosEngine** | _Legacy_ | Redirects to BriefingEngine |
| **VideoTest** | `/test/video` | Video testing page |

---

## Component Categories

### Core Components (`src/components/core/`)
- **SEO** - Meta tags and Open Graph
- **ScrollToTop** - Scroll restoration on route change
- Layout components for application structure

### Hero Components (`src/components/hero/`)
- **HeroContentBold** - Bold hero section content
- **VideoBackground** - Video background component
- Related hero display components

### Desktop/Mobile Adaptive (`src/components/desktop/`, `src/components/mobile/`)
- **DesktopHero** - Desktop-optimized hero
- **MobileHero** - Mobile-optimized hero
- Responsive component variants

### Feature-Specific Components

#### Briefing Engine (`src/components/briefing/`)
- **BriefingCTA** - Call-to-action components
- **BriefingProcessFlow** - Process visualization
- **BriefingTimeline** - Timeline component
- **BriefingFAQ** - FAQ section
- **MidPageCTA** - Mid-page call-to-action
- **AudienceBenefits** - Benefits display
- **TransformationValueCard** - Value proposition cards
- **WorkflowTransformation** - Workflow visualization
- **BriefToStoryboardAnimation** - Animated transitions
- **VisualStylesGallery** - Visual styles showcase
- **ParticleCore** - Particle effects
- **HeroOrbitVisual** - Orbital animations
- **ReducedMotionIllustration** - Accessible alternatives
- **StepLabel** - Step indicators
- Sections subfolder with modular section components

#### Navigation (`src/components/navigation/`)
- **Navigation** - Main navigation bar
- Mobile/desktop navigation variants

#### UI Components (`src/components/ui/`)
shadcn/ui component library (Radix UI primitives):
- **Button**, **Card**, **Dialog**, **Dropdown**, **Select**
- **Toast**, **Tooltip**, **Accordion**, **Tabs**
- **Form** components, **Input**, **Label**
- **Progress**, **Slider**, **Switch**
- **Avatar**, **Badge**, **Separator**
- Complete accessible component system

#### Other Feature Components
- **agents/** - AI agents components
- **analytics/** - Analytics and tracking (CookieConsent)
- **benefits/** - Benefits sections
- **concept-to-creation/** - C2C workflow
- **contact/** - Contact form (ContactForm.tsx)
- **conversational/** - Conversational AI interface
- **footer/** - Footer (Footer.tsx)
- **gallery/** - Media gallery (Gallery.tsx)
- **how-it-works/** - Process explanation
- **layout/layouts/** - Layout components (MainLayout)
- **quotes/** - Testimonials
- **Services/** - Service pages
- **shared/** - Shared/reusable components
- **studios/** - Studios-specific
- **test/** - Testing components (VideoTest)
- **video/** - Video players

---

## Custom Hooks (`src/hooks/`)

### Animation & Scroll
- **useScrollAnimation** - Scroll-based animations
- **useScrollTriggerAnimation** - GSAP ScrollTrigger integration
- **useFadeIn** - Fade-in effects
- **useParallax** - Parallax scrolling
- **useOptimizedAnimation** - Performance-optimized animations
- **useMagneticHover** - Magnetic cursor effects

### Performance & Device
- **useAdaptivePerformance** - Device capability detection
- **usePerformance** - Performance monitoring
- **usePrefersReducedMotion** - Accessibility: reduced motion
- **use-mobile** - Mobile device detection
- **useLazyLoad** - Lazy loading images/components

### Interaction
- **useGestures** - Touch/mouse gestures
- **useMobileInteractions** - Mobile-specific interactions
- **useFullscreen** - Fullscreen API

### Utilities
- **useAnalytics** - Analytics tracking
- **use-toast** - Toast notifications
- **useLenisReady** - Lenis smooth scroll initialization

---

## Utility Modules (`src/utils/`)

| Module | Purpose |
|--------|---------|
| **adaptive-config.ts** | Device-specific configuration |
| **performance-adapter.ts** | Performance adaptation logic |
| **performanceMonitor.ts** | Performance metrics tracking |
| **scrollAnimations.ts** | Scroll animation utilities |
| **smoothScroll.ts** | Smooth scrolling implementation |
| **imageOptimization.ts** | Image loading optimization |
| **motionVariants.ts** | Framer Motion animation variants |

---

## State Management

**Architecture:** Local-first with server state management

### TanStack Query (React Query)
- Server state management
- Async data fetching
- Cache management
- Query client configured in `App.tsx`

### React Router
- Navigation state
- Route parameters
- Browser history management

### Local State
- Component-level state (useState, useReducer)
- Context API for shared state (TooltipProvider, etc.)
- Custom hooks for stateful logic

---

## Component Patterns

### Design System
- **Base:** Radix UI primitives (headless, accessible)
- **Styling:** Tailwind CSS utility classes
- **Patterns:** shadcn/ui component recipes
- **Theming:** CSS variables for colors, dark mode support

### Responsiveness
- **Breakpoints:** Mobile, Tablet, Desktop, Wide (Tailwind config)
- **Adaptive Components:** Separate Desktop/Mobile variants
- **Custom Breakpoints:** iPad (1024px), Laptop (1366px), Desktop (1920px)

### Animation System
- **GSAP 3.13:** Professional timeline animations
- **Framer Motion:** React-specific animations
- **Lenis:** Smooth scroll foundation
- **ScrollTrigger:** Scroll-linked animations
- **Performance:** GPU-accelerated, reduced motion support

### Performance Optimization
- **Code Splitting:** Route-based lazy loading
- **Image Optimization:** Lazy loading, responsive images
- **Adaptive Performance:** Device capability detection
- **Bundle Size:** Vendor chunking, tree-shaking
- **Monitoring:** Performance hooks, budget enforcement

---

## Component Organization

```
src/components/
├── core/                # Core functionality (SEO, ScrollToTop)
├── layout/              # Layout wrappers
├── hero/                # Hero sections
├── navigation/          # Nav components
├── briefing/            # Briefing Engine feature
├── agents/              # AI Agents feature
├── studios/             # Studios feature
├── conversational/      # Conversational AI feature
├── desktop/             # Desktop-specific
├── mobile/              # Mobile-specific
├── shared/              # Reusable components
├── ui/                  # shadcn/ui library
├── analytics/           # Tracking & cookies
├── video/               # Video players
├── gallery/             # Media gallery
├── footer/              # Footer
├── contact/             # Contact forms
└── test/                # Test components
```

---

## Next Steps for Development

1. **Component Documentation:** Add JSDoc comments to complex components
2. **Storybook:** Consider adding Storybook for component development
3. **Testing:** Add component tests (React Testing Library)
4. **Accessibility Audit:** Ensure WCAG 2.1 AA compliance
5. **Performance:** Monitor component render performance

---

_This inventory was generated via deep scan analysis. For implementation details, refer to individual component source files._
