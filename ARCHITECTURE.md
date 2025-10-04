# Architecture

**Last Updated:** 2025-10-04
**Reverse-Engineered:** From existing codebase analysis
**Project:** Cre8tive AI Marketing Website

---

## System Overview

This is a **modern single-page application (SPA)** built as a static marketing website. The frontend is built with React and TypeScript, bundled with Vite, and deployed to GitHub Pages. The application uses client-side routing for navigation, pre-rendering for SEO via react-snap, and integrates with external services for forms, analytics, and conversational AI. All content is managed through code (no CMS), and the site is optimized for performance, SEO, and user experience.

**Architecture Pattern:** JAMstack (JavaScript, APIs, Markup)
- **Frontend:** React SPA with client-side routing
- **Build:** Static site generation with Vite
- **APIs:** Third-party integrations (getform.io, Cal.com, ElevenLabs, Vimeo)
- **Hosting:** GitHub Pages with custom domain

---

## Tech Stack

**Discovery Note:** This stack was reverse-engineered from package.json, configuration files, and codebase analysis on 2025-10-04. All versions are from actual manifest files, not assumptions.

### Language & Runtime
- **Language:** TypeScript 5.5.3
- **Runtime:** Node.js 20+ (required for development)
- **Module System:** ES Modules (type: "module" in package.json)

### Frontend Framework
- **Core:** React 18.3.1 with React DOM 18.3.1
- **Build Tool:** Vite 5.4.1 with SWC plugin (@vitejs/plugin-react-swc 3.5.0)
- **Routing:** React Router DOM 6.26.2 (client-side routing with BrowserRouter)
- **State Management:**
  - React Query (@tanstack/react-query 5.56.2) for server state
  - React Hooks (useState, useEffect, useContext) for local state
  - No Redux/MobX/Zustand

### UI & Styling
- **Styling Framework:** Tailwind CSS 3.4.11
  - PostCSS 8.5.1 with plugins: postcss-import, postcss-nested, postcss-preset-env
  - Autoprefixer 10.4.20
- **Component Library:** Shadcn/UI (Radix UI primitives)
  - 40+ Radix UI components (@radix-ui/react-*)
  - Custom UI components in src/components/ui/
- **Design Utilities:**
  - class-variance-authority 0.7.1 (CVA for variant styling)
  - clsx 2.1.1 + tailwind-merge 2.5.2 (className utilities via `cn()`)
  - tailwindcss-animate 1.0.7 (Tailwind animation utilities)
- **Fonts:**
  - @fontsource/geist-sans 5.1.0
  - @fontsource/inter 5.1.1
- **Animations:** Framer Motion 12.4.2 (scroll animations, page transitions, interactions)

### 3D & Interactive Media
- **3D Graphics:** Three.js 0.173.0 (capability present, limited usage)
- **3D Platform Integration:** Spline (@splinetool/react-spline 4.0.0, @splinetool/runtime 1.9.65)
- **Performance Monitoring:** stats.js 0.17.0 (FPS/performance stats)
- **Video:**
  - Vimeo Player (@vimeo/player 2.20.1)
  - HLS.js 1.5.20 (HTTP Live Streaming support)
  - screenfull 6.0.2 (fullscreen API wrapper)

### Forms & Validation
- **Form Management:** React Hook Form 7.53.0
- **Validation:** Zod 3.23.8 (schema validation)
- **Form Resolvers:** @hookform/resolvers 3.9.0 (integrates Zod with React Hook Form)
- **Specialized Inputs:**
  - input-otp 1.2.4 (OTP input component)
  - react-day-picker 8.10.1 (date picker)

### Data Visualization
- **Charts:** Recharts 2.12.7 (built on D3)

### External Integrations
- **Form Submission:** getform.io (via POST requests)
- **Appointment Booking:** Cal.com (embedded links)
- **Conversational AI:** ElevenLabs (via API and embeds)
- **Video Hosting:** Vimeo (iframe embeds)
- **Analytics:**
  - Vercel Analytics (@vercel/analytics 1.4.1)
  - Google Tag Manager (configured in App.tsx)
- **Cookie Consent:** cookieconsent 3.1.1

### SEO & Meta
- **Meta Management:** react-helmet 6.1.0 (dynamic meta tags, titles, structured data)
- **Pre-rendering:** react-snap 1.23.0 (static HTML generation for SEO)
- **Sitemap:** Static sitemap.xml in public/

### Development Tools
- **Linter:** ESLint 9.9.0
  - @eslint/js 9.9.0
  - typescript-eslint 8.0.1
  - eslint-plugin-react-hooks 5.1.0-rc.0
  - eslint-plugin-react-refresh 0.4.9
- **Formatter:** Prettier (inferred from development guidelines, config not found in repo)
- **Type Checking:** TypeScript compiler (tsc) with relaxed settings
- **Component Tagging:** lovable-tagger 1.0.19 (development mode only)

### Build & Optimization
- **Bundler:** Vite 5.4.1
- **Transpiler:** SWC (via @vitejs/plugin-react-swc)
- **Minification:** Terser 5.37.0 (with console.log stripping in production)
- **Code Splitting:** Manual chunks for 'vendor' and 'ui' libraries
- **Target:** ES2015 (for broad browser support)

### Deployment
- **Platform:** GitHub Pages
- **CI/CD:** GitHub Actions (.github/workflows/deploy.yml)
- **Deployment Trigger:** Push to `master` branch or manual workflow dispatch
- **Custom Domain:** cre8tive.ai (via CNAME)
- **Deployment Tool:** gh-pages 6.3.0 (npm package) + peaceiris/actions-gh-pages@v3 (GitHub Action)

### Utilities & Helpers
- **Date Handling:** date-fns 3.6.0
- **Security:** dompurify 3.2.3 (XSS protection for HTML sanitization)
- **Carousel:** embla-carousel-react 8.3.0
- **UI Utilities:**
  - cmdk 1.0.0 (command menu component)
  - vaul 0.9.3 (drawer component)
  - sonner 1.5.0 (toast notifications)
  - next-themes 0.3.0 (theme management, though primarily single theme)
  - react-resizable-panels 2.1.3 (resizable layouts)

---

## Rationale: Why This Tech Stack?

**Discovered via codebase analysis on 2025-10-04. Choices appear to prioritize:**

1. **Developer Experience & Speed:**
   - Vite for lightning-fast HMR and build times
   - SWC for faster TypeScript transpilation
   - Shadcn/UI for rapid UI development with pre-built accessible components
   - TypeScript for autocomplete and type safety (though configured with relaxed strictness)

2. **Performance:**
   - Static site generation (no server-side rendering overhead)
   - Manual code splitting to optimize bundle sizes
   - Terser minification with production console removal
   - Framer Motion for performant animations (GPU-accelerated)
   - React Query for efficient data fetching and caching

3. **SEO & Discoverability:**
   - react-snap for static HTML pre-rendering (critical for SPAs)
   - react-helmet for dynamic meta tags per route
   - Sitemap and robots.txt for search engines
   - Vercel Analytics and GTM for tracking organic traffic

4. **Modern UX:**
   - Framer Motion for smooth, professional animations
   - Glassmorphism and modern design patterns (evident in recent commits)
   - Spline for 3D interactive elements
   - Responsive design with mobile-first approach

5. **Security & Compliance:**
   - DOMPurify for XSS protection
   - CSP headers in vite.config.ts preview and App.tsx
   - Cookie consent for privacy compliance
   - Input validation with Zod

**Notable Decisions:**
- **No Backend:** All dynamic functionality delegated to third-party APIs (getform.io, Cal.com)
- **GitHub Pages:** Low-cost, reliable hosting suitable for static sites
- **TypeScript Relaxed Mode:** Suggests rapid iteration prioritized over strict type safety (noImplicitAny: false, strictNullChecks: false)

---

## Project Structure

```
/
├── public/                    # Static assets served as-is
│   ├── assets/               # Images, icons
│   ├── font/                 # Custom fonts
│   ├── favicon.ico           # Site favicon
│   ├── og-image.png          # Social media preview image
│   ├── sitemap.xml           # SEO sitemap
│   ├── robots.txt            # Search engine crawler rules
│   ├── 404.html              # GitHub Pages 404 fallback
│   └── CNAME                 # Custom domain configuration
│
├── src/                       # Application source code
│   ├── components/           # React components (organized by feature/domain)
│   │   ├── ui/              # Shadcn/UI base components (40+ files)
│   │   ├── agents/          # Agents service page components
│   │   ├── analytics/       # Analytics components (CookieConsent)
│   │   ├── benefits/        # Benefits showcase components
│   │   ├── concept-to-creation/ # Content creation flow components
│   │   ├── contact/         # Contact form components
│   │   ├── conversational/  # Conversational AI components
│   │   ├── core/            # Core utilities (SEO, ScrollToTop)
│   │   ├── desktop/         # Desktop-specific layouts
│   │   ├── footer/          # Footer components
│   │   ├── gallery/         # Project gallery
│   │   ├── hero/            # Hero sections
│   │   ├── how-it-works/    # Process explanation components
│   │   ├── layout/          # Layout components (MainLayout)
│   │   ├── layouts/         # Page layouts (PageLayout)
│   │   ├── mobile/          # Mobile-specific components
│   │   ├── navigation/      # Navigation components
│   │   ├── quotes/          # Cinematic quote components
│   │   ├── Services/        # Services showcase components
│   │   ├── shared/          # Shared/reusable components (ContactCTA, FadeIn, StatsBar, ScrollFade)
│   │   ├── studios/         # Studios service page components
│   │   ├── ContactForm.tsx  # Main contact form
│   │   ├── Gallery.tsx      # Gallery component
│   │   ├── Hero.tsx         # Main hero component
│   │   ├── Navigation.tsx   # Main navigation
│   │   └── Services.tsx     # Services overview
│   │
│   ├── pages/                # Page components (route-level)
│   │   ├── About.tsx        # About page
│   │   ├── Agents.tsx       # Agents service page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── ConversationalAI.tsx  # Conversational AI page
│   │   ├── HomePage.tsx     # [Legacy? Index.tsx appears to be current home]
│   │   ├── Index.tsx        # Homepage (actual landing page)
│   │   ├── NotFound.tsx     # 404 error page
│   │   ├── PrivacyPolicy.tsx # Privacy policy page
│   │   ├── Studios.tsx      # Studios service page
│   │   └── StudiosEngine.tsx # Studios Engine service page
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAnalytics.ts  # Analytics tracking hook
│   │   ├── useFullscreen.ts # Fullscreen API hook
│   │   ├── use-toast.ts     # Toast notification hook
│   │   ├── useScrollAnimation.ts  # [Inferred from imports]
│   │   ├── useParallax.ts   # [Inferred from modern redesign]
│   │   ├── useMagneticHover.ts # [Inferred from MagneticButton]
│   │   └── useOptimizedAnimation.ts # [Used in Index.tsx]
│   │
│   ├── lib/                  # Utility libraries
│   │   └── utils.ts         # cn() utility for className merging
│   │
│   ├── utils/                # Application utilities
│   │   ├── scrollAnimations.ts  # scrollAnimator utility
│   │   ├── performanceMonitor.ts # measurePerformance utility
│   │   └── motionVariants.ts    # [Inferred from modern redesign]
│   │
│   ├── styles/               # Global styles and theme
│   │   └── [CSS/styling files]
│   │
│   ├── types/                # TypeScript type definitions
│   │   └── [Type definition files]
│   │
│   ├── constants/            # Application constants
│   │   └── [Constants files]
│   │
│   ├── assets/               # Source assets (imported in components)
│   │   └── [Images, SVGs, media]
│   │
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Application entry point
│   ├── index.tsx            # [Secondary entry? main.tsx appears primary]
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles (Tailwind imports)
│   └── vite-env.d.ts        # Vite environment types
│
├── codex/                     # Development documentation
│   └── _MEMO.md             # Working memory and decisions
│
├── .github/                   # GitHub configuration
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
│
├── dist/                      # Build output (gitignored)
├── node_modules/             # Dependencies (gitignored)
│
├── package.json              # Project manifest and scripts
├── tsconfig.json             # TypeScript configuration (project references)
├── tsconfig.app.json         # [Inferred] App TypeScript config
├── tsconfig.node.json        # [Inferred] Node TypeScript config
├── vite.config.ts            # Vite build configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

**Organization Pattern:** Feature-based component organization
- Components grouped by feature/domain (agents, studios, contact, etc.)
- Shared/reusable components in shared/ and ui/
- Page components at top level in pages/
- Clear separation between UI primitives (ui/) and business components

---

## Key Components

### 1. App.tsx
**Purpose:** Root application component and routing configuration
**Location:** src/App.tsx
**Key Responsibilities:**
- React Query client provider setup
- React Router BrowserRouter configuration
- Route definitions (/, /studios, /agents, /contact, etc.)
- Global providers (TooltipProvider, Helmet for SEO)
- Security headers (CSP, X-Frame-Options, etc.)
- Analytics initialization (Vercel Analytics, GTM)
- Cookie consent integration
- GitHub Pages SPA redirect handling (query param 'p')
**Dependencies:** React Router, React Query, react-helmet, Vercel Analytics
**Tests:** None

### 2. MainLayout
**Purpose:** Shared layout wrapper for all pages
**Location:** src/components/layout/MainLayout.tsx
**Key Responsibilities:**
- Consistent page structure across routes
- Common layout elements (header, footer implied)
- Child content rendering
**Dependencies:** React
**Tests:** None

### 3. Navigation
**Purpose:** Site navigation component
**Location:** src/components/Navigation.tsx
**Key Responsibilities:**
- Desktop and mobile navigation menus
- Route navigation links
- Mobile menu toggle and overlay
- Home link and close button (mobile)
**Dependencies:** React Router (Link), Radix UI components
**Tests:** None

### 4. Page Components (Index, Studios, Agents, Contact, etc.)
**Purpose:** Route-level components for each page
**Location:** src/pages/*.tsx
**Key Responsibilities:**
- Page-specific layout and content composition
- SEO meta tags via react-helmet
- Orchestration of feature components
- Animation timing and sequencing
**Dependencies:** Page-specific feature components, SEO component
**Tests:** None

### 5. ContactForm
**Purpose:** Lead capture form
**Location:** src/components/ContactForm.tsx
**Key Responsibilities:**
- Form state management (React Hook Form)
- Input validation (Zod schema)
- Form submission to getform.io
- Success/error handling and user feedback
- DOMPurify sanitization
**Dependencies:** React Hook Form, Zod, DOMPurify
**Tests:** None

### 6. UI Components (shadcn/ui)
**Purpose:** Reusable, accessible UI primitives
**Location:** src/components/ui/*.tsx
**Key Components:**
- button.tsx, input.tsx, textarea.tsx (form controls)
- dialog.tsx, popover.tsx, dropdown-menu.tsx (overlays)
- toast.tsx, sonner.tsx (notifications)
- accordion.tsx, tabs.tsx, carousel.tsx (containers)
- **Modern Design Components** (from 2025-10-02 redesign):
  - glass-card.tsx (glassmorphism cards)
  - bento-grid.tsx (grid layout)
  - magnetic-button.tsx (interactive buttons with magnetic effect)
  - reveal-text.tsx (text reveal animations)
  - parallax-section.tsx (parallax scroll effects)
  - gradient-button.tsx (gradient styled buttons)
**Key Responsibilities:**
- Consistent, accessible UI patterns
- Variant-based styling (CVA)
- Radix UI primitive wrapping
**Dependencies:** Radix UI, CVA, Tailwind
**Tests:** None

### 7. SEO Component
**Purpose:** Global SEO defaults and structured data
**Location:** src/components/core/SEO.tsx
**Key Responsibilities:**
- Default meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Canonical URL management
**Dependencies:** react-helmet
**Tests:** None

### 8. Analytics Components
**Purpose:** User tracking and consent management
**Location:** src/components/analytics/CookieConsent.tsx
**Key Responsibilities:**
- Cookie consent banner
- User consent tracking
- Analytics opt-in/opt-out
**Dependencies:** cookieconsent library
**Tests:** None

### 9. Shared Components (ContactCTA, FadeIn, StatsBar, ScrollFade)
**Purpose:** Reusable cross-page components
**Location:** src/components/shared/*.tsx
**Key Responsibilities:**
- ContactCTA: Call-to-action section with contact form
- FadeIn/ScrollFade: Scroll-triggered fade animations
- StatsBar: Statistics/metrics display bar
**Dependencies:** Framer Motion
**Tests:** None

### 10. Custom Hooks
**Purpose:** Reusable stateful logic
**Location:** src/hooks/*.ts
**Key Hooks:**
- useAnalytics: Track user events
- useFullscreen: Fullscreen API wrapper
- use-toast: Toast notification state
- useScrollAnimation: Scroll-triggered animations
- useOptimizedAnimation: Performance-optimized animations
- useParallax: Parallax scroll effects
- useMagneticHover: Magnetic button hover interactions
**Dependencies:** React, Framer Motion
**Tests:** None

---

## Data Flow

**Static Site with Third-Party API Integration Pattern:**

### 1. User Visits Page
Browser → GitHub Pages CDN → Cached HTML/JS/CSS → React hydration

### 2. Client-Side Navigation
User clicks link → React Router intercepts → Component swap (no page reload) → Scroll to top

### 3. Form Submission Flow
1. User fills form → ContactForm component
2. React Hook Form handles input state → Zod validates on blur/submit
3. On submit: DOMPurify sanitizes → POST to getform.io
4. getform.io processes → Email sent to Cre8tive AI
5. Response → Toast notification to user (success/error)

### 4. Appointment Booking Flow
1. User clicks "Book Consultation" → Opens Cal.com link
2. Cal.com handles scheduling in external window/modal
3. No integration back to website (external flow)

### 5. Analytics Flow
1. User interacts with site → Event captured
2. Vercel Analytics SDK → Sends to Vercel API
3. Google Tag Manager → Tracks pageviews and events → GA4 (assumed)
4. Cookie consent checked before sending analytics data

### 6. Content Loading
- Static content: Bundled in React components (no API calls)
- Images: Served from public/assets or imported as ES modules
- 3D models: Loaded from Spline platform via CDN
- Videos: Vimeo embeds via iframe

**No Database, No Backend:**
All dynamic functionality is delegated to third-party services. The site is purely static HTML/CSS/JS after build.

---

## API Design

**Not Applicable:** This is a static frontend application with no custom API.

**External API Integrations:**
- **getform.io:** POST requests with form data (handled via browser fetch)
- **Cal.com:** Link-based navigation to external booking page
- **ElevenLabs:** Embedded widgets and API calls for conversational AI demos
- **Vimeo:** Iframe embeds for video playback (@vimeo/player library)
- **Spline:** 3D content loaded via Spline runtime

---

## State Management

**Approach:** Local React state + React Query for server state

### Local State:
- **React Hooks:** useState, useEffect, useContext for component-level state
- **No Global State Library:** No Redux, MobX, or Zustand detected
- **Form State:** React Hook Form manages form state independently

### Server State:
- **React Query:** Used for caching and synchronizing server state
  - Configured in App.tsx with QueryClient
  - No specific queries identified in analyzed files (likely used for future API calls or third-party data)

### URL State:
- **React Router:** Route params and query strings for navigation state
- **GitHub Pages Redirect:** Query param 'p' handled for SPA routing compatibility

### Theme State:
- **next-themes:** Package included but single-theme implementation (no dark mode toggle observed)

---

## Security Considerations

**Discovered security patterns and configurations:**

### Content Security Policy (CSP)
**Implemented in:** App.tsx (via react-helmet) and vite.config.ts (preview mode)

**Allowed Sources:**
- Scripts: self, unsafe-inline, unsafe-eval, ElevenLabs, Vimeo, GTM, Spline, Vercel Analytics
- Frames: self, ElevenLabs, Vimeo
- Connections: getform.io, ElevenLabs (including WebSocket), Vimeo, Spline, GA
- Images: self, data:, blob:, https:, ElevenLabs, Vimeo, Spline
- Styles: self, unsafe-inline, Google Fonts, Spline
- Fonts: self, data:, Google Fonts, Spline

**Note:** unsafe-inline and unsafe-eval present (required for React and third-party scripts but reduces security)

### Input Validation & Sanitization
- **Zod Schemas:** Type-safe validation on form inputs
- **DOMPurify:** HTML sanitization to prevent XSS attacks
- **React Hook Form:** Client-side validation before submission

### HTTP Security Headers
**Configured in vite.config.ts preview:**
- X-Content-Type-Options: nosniff
- X-Frame-Options: ALLOW-FROM https://player.vimeo.com (Vimeo embed support)
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- COOP: same-origin-allow-popups
- CORP: cross-origin

### CORS Configuration
- **Static Site:** No custom CORS needed (GitHub Pages handles)
- **Third-Party APIs:** APIs (getform.io, Cal.com) handle CORS on their end

### Authentication & Authorization
- **Not Applicable:** No user authentication or protected routes
- **Forms:** Public submission (no auth required)

### Data Protection
- **No Data Storage:** No cookies, localStorage, or sessionStorage used for sensitive data
- **Form Data:** Sent directly to getform.io (no local persistence)
- **Privacy Compliance:** Cookie consent banner and privacy policy

### Dependency Security
- **No Automated Scanning:** No Dependabot or Snyk configuration detected
- **Manual Updates:** Dependencies appear recently updated (2024-2025 versions)

---

## Performance Considerations

**Observed optimizations and patterns:**

### Code Splitting
**Configured in vite.config.ts:**
- **Vendor Chunk:** React, React DOM, React Router, React Query, Framer Motion, Three.js, Vimeo Player
- **UI Chunk:** All Radix UI components
- **Chunk Size Limit:** 1000kb warning threshold

### Build Optimization
- **Minification:** Terser with aggressive compression
- **Console Removal:** drop_console and drop_debugger in production
- **Tree Shaking:** Vite automatically removes unused code
- **Target:** ES2015 for balance of compatibility and size

### Asset Optimization
- **Image Handling:** Assets hashed and organized by type (img/, css/, js/)
- **Font Loading:** Self-hosted fonts (@fontsource) for performance and privacy
- **Lazy Loading:** [Likely implemented but not directly observed in analyzed files]

### Runtime Performance
- **Performance Monitoring:**
  - measurePerformance utility (src/utils/performanceMonitor.ts)
  - stats.js for FPS monitoring
- **Framer Motion:** GPU-accelerated animations (transform and opacity only)
- **React Query:** Caching to reduce re-fetching

### Pre-rendering
- **react-snap:** Static HTML generation for all routes
  - Configured in package.json with routes: /, /about, /contact, /studios, /agents, /conversational-ai
  - Puppeteer-based rendering with 1000ms wait time
  - Preserves HTML/comments for hydration

### Caching Strategy
- **GitHub Pages CDN:** Automatic CDN caching
- **Cache-Control:** no-store for preview mode (vite.config.ts)
- **React Query:** Client-side query caching

### Bundle Analysis
- **Chunk Size Warnings:** Configured to warn at 1000kb
- **Manual Chunks:** Separates vendor and UI code for parallel loading

---

## Testing Strategy

**Current State:** ❌ **No tests implemented**

**Testing Framework:** None configured

**Recommended Testing Approach** (for future):

### Unit Tests (Suggested)
- **Framework:** Vitest (Vite-native) or Jest
- **Coverage Target:** 70%+ for utilities, hooks, pure functions
- **Patterns to Test:**
  - Custom hooks (useAnalytics, useScrollAnimation, etc.)
  - Utility functions (cn(), measurePerformance, etc.)
  - Form validation schemas (Zod schemas)

### Integration Tests (Suggested)
- **Framework:** React Testing Library + Vitest
- **Focus Areas:**
  - Form submission flow (ContactForm)
  - Navigation and routing
  - Component composition

### E2E Tests (Suggested)
- **Framework:** Playwright or Cypress
- **Critical Paths:**
  - Homepage → Service page → Contact form submission
  - Mobile navigation flow
  - Cal.com appointment booking link
  - Privacy policy acceptance

### Visual Regression (Suggested)
- **Tool:** Percy or Chromatic
- **Focus:** Ensure design consistency across redesigns

---

## Known Issues & Technical Debt

**Discovered during codebase analysis:**

### Testing Gap
- **Issue:** Zero test coverage
- **Impact:** No automated verification of functionality
- **Recommendation:** Start with unit tests for utilities and hooks, then add integration tests for critical flows

### TypeScript Strictness
- **Issue:** Relaxed TypeScript configuration
  - noImplicitAny: false
  - strictNullChecks: false
  - noUnusedLocals: false
  - noUnusedParameters: false
- **Location:** tsconfig.json
- **Impact:** Reduced type safety, potential runtime errors
- **Recommendation:** Gradually enable stricter settings (start with noImplicitAny: true)

### Commented Code
- **Issue:** Commented route in App.tsx (line 84: /manager redirect)
- **Impact:** Code clutter, unclear intent
- **Recommendation:** Remove or document reason for keeping

### Duplicate Entry Points
- **Issue:** Both main.tsx and index.tsx in src/ root
- **Impact:** Potential confusion about entry point
- **Recommendation:** Clarify or consolidate (main.tsx appears to be actual entry)

### Unused Dependencies (Potential)
- **Issue:** Three.js and Spline packages present (~4MB) but limited usage observed
  - InteractiveRobot references suggest 3D features may be disabled
- **Impact:** Larger bundle size
- **Recommendation:** Audit usage; remove if unused or lazy load if rarely used

### GTM Placeholder
- **Issue:** Google Tag Manager ID is "GTM-XXXXXXX" (placeholder)
- **Location:** App.tsx line 69
- **Impact:** Analytics not working for GTM
- **Recommendation:** Replace with real GTM ID or remove if not used

### Outdated Browserslist
- **Issue:** Build log warnings about outdated browserslist data (common in projects)
- **Impact:** Potential incorrect browser targeting
- **Recommendation:** Run `npx update-browserslist-db@latest`

### Sitemap Outdated
- **Issue:** Sitemap last modified 2024-02-05 (public/sitemap.xml)
- **Impact:** Search engines may have stale data
- **Recommendation:** Update sitemap with recent changes or automate generation

### File Naming Inconsistency
- **Issue:** Mixed casing in component directories (Services vs studios vs agents)
- **Impact:** Potential confusion, Windows/macOS case sensitivity issues
- **Recommendation:** Standardize to lowercase directories

---

## Deployment & Operations

### Deployment Process

**GitHub Actions Workflow:** .github/workflows/deploy.yml

**Trigger:**
- Push to `master` branch
- Manual workflow dispatch

**Steps:**
1. Checkout repository (actions/checkout@v4)
2. Setup Node.js 20 with npm cache (actions/setup-node@v4)
3. Install dependencies (`npm ci`)
4. Type check and build (`npm run build` - runs tsc && vite build)
5. Deploy to gh-pages branch (peaceiris/actions-gh-pages@v3)
6. GitHub Pages serves from gh-pages branch

**Build Output:** ./dist directory (contains static HTML, JS, CSS, assets)

**Custom Domain:** cre8tive.ai (via CNAME file in public/)

### Environment Variables

**Current State:** No .env.example file found

**Inferred Environment Variables:**
- **VITE_BASE_URL:** Base URL for routing (handled dynamically in vite.config.ts)
- **GTM_ID:** Google Tag Manager ID (currently hardcoded as placeholder)

**Third-Party API Keys/Secrets:**
- **getform.io:** Endpoint URL (likely hardcoded in component)
- **Cal.com:** Booking links (likely hardcoded)
- **ElevenLabs:** API keys (if used, may be in code or environment)
- **Vercel Analytics:** Auto-configured via @vercel/analytics package

**Recommendation:** Create .env.example documenting required variables

### Database Migrations
**Not Applicable:** No database

### Monitoring & Logging

**Analytics:**
- Vercel Analytics (error tracking, performance metrics)
- Google Tag Manager / Google Analytics (user behavior)

**Error Tracking:**
- No dedicated error tracking (Sentry, Bugsnag, etc.) observed
- Browser console errors (removed in production via Terser)

**Performance Monitoring:**
- Custom performance measurement utilities (src/utils/performanceMonitor.ts)
- stats.js for FPS monitoring

**Recommendation:** Add Sentry or similar for production error tracking

---

## Risks & Recommendations

### Technical Risks

1. **No Automated Testing**
   - **Risk:** Regressions go undetected; refactoring is risky
   - **Recommendation:** Start with Vitest for unit tests, prioritize form and navigation flows

2. **Relaxed TypeScript Configuration**
   - **Risk:** Type-related runtime errors, harder maintenance
   - **Recommendation:** Incrementally enable strict mode (noImplicitAny first)

3. **Third-Party Dependency on getform.io**
   - **Risk:** Service downtime breaks contact form; vendor lock-in
   - **Recommendation:** Monitor uptime; consider fallback email link or custom backend

4. **Large Bundle from Unused 3D Libraries**
   - **Risk:** Slower load times, poor mobile performance
   - **Recommendation:** Audit Three.js/Spline usage; lazy load or remove if unused

5. **Client-Side Routing + Static Hosting**
   - **Risk:** Direct URL navigation to sub-routes 404s without proper configuration
   - **Mitigation:** GitHub Pages redirect handled via 404.html and query param 'p' (discovered in App.tsx)
   - **Recommendation:** Ensure 404.html redirect is working correctly

6. **Security: unsafe-inline and unsafe-eval in CSP**
   - **Risk:** XSS vulnerabilities if third-party scripts compromised
   - **Mitigation:** Limited to necessary external services; DOMPurify sanitizes user input
   - **Recommendation:** Periodically audit CSP sources; consider nonce-based CSP for stricter security

### Operational Risks

1. **No Staging Environment**
   - **Risk:** All changes go directly to production (master branch)
   - **Recommendation:** Use feature branches and PR previews (GitHub Pages supports branch previews with manual trigger)

2. **Content Updates Require Code Changes**
   - **Risk:** Non-technical users can't update content; developer bottleneck
   - **Mitigation:** Acceptable for small marketing site
   - **Recommendation:** Consider headless CMS (Contentful, Sanity) if content updates become frequent

3. **Analytics Placeholder (GTM-XXXXXXX)**
   - **Risk:** No actual analytics data being collected
   - **Recommendation:** Replace with real GTM ID immediately

### Scalability

**Current Scale:** Low-traffic marketing site (suitable for GitHub Pages)

**Scaling Considerations:**
- **If traffic grows significantly:** Consider upgrading to Vercel, Netlify, or Cloudflare Pages for better analytics and performance
- **If dynamic features needed:** Add backend API (e.g., Vercel Edge Functions, Netlify Functions)
- **If content management becomes complex:** Integrate headless CMS

---

## Future Enhancements

**Based on discovered patterns and commented code:**

1. **Testing Infrastructure:** Implement Vitest + React Testing Library + Playwright
2. **TypeScript Strict Mode:** Gradually enable strict compiler options
3. **CMS Integration:** Headless CMS for content management (Sanity, Contentful)
4. **Blog/Resources Section:** Add content marketing capabilities
5. **A/B Testing:** Experimentation framework for conversion optimization
6. **Performance Budget:** Set and enforce bundle size budgets
7. **Accessibility Audit:** Formal WCAG 2.1 AA compliance verification
8. **Internationalization:** Multi-language support (react-i18next)
9. **Progressive Web App (PWA):** Offline support and app-like experience
10. **Advanced Analytics:** Heatmaps (Hotjar), session recording (Microsoft Clarity)

---

## Document Maintenance

**Update this document when:**
- Major dependencies are upgraded (React, Vite, TypeScript)
- New external services are integrated
- Architecture patterns change (e.g., adding state management library)
- Build configuration changes
- New major components or features are added
- Performance characteristics significantly change

**Review quarterly** to ensure accuracy and relevance.
