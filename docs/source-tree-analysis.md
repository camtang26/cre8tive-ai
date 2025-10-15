# Source Tree Analysis

**Project:** cre8tive-website-1006
**Generated:** 2025-10-16
**Repository Type:** Monolith (Single Cohesive Codebase)

---

## Project Structure Overview

```
cre8tive-website-1006/
├── 📁 src/                          # Application source code (ENTRY POINT)
│   ├── 📁 components/               # React components (organized by feature)
│   ├── 📁 pages/                    # Route-based page components
│   ├── 📁 hooks/                    # Custom React hooks (17 hooks)
│   ├── 📁 utils/                    # Utility functions and helpers
│   ├── 📁 styles/                   # Global styles and CSS modules
│   ├── 📁 assets/                   # Static assets (images, fonts, videos)
│   ├── 📁 types/                    # TypeScript type definitions
│   ├── 📁 config/                   # Application configuration
│   ├── 📁 constants/                # Constants and enums
│   ├── 📁 lib/                      # Third-party library configurations
│   ├── 📄 main.tsx                  # 🚀 Application entry point (Vite)
│   ├── 📄 App.tsx                   # Root component (routing, providers)
│   ├── 📄 App.css                   # Root component styles
│   ├── 📄 index.css                 # Global styles (Tailwind directives)
│   └── 📄 vite-env.d.ts             # Vite TypeScript definitions
│
├── 📁 public/                       # Public static assets (served as-is)
│   ├── 📄 index.html                # HTML template (injected by Vite)
│   ├── 📄 robots.txt                # SEO: Search engine instructions
│   ├── 📄 sitemap.xml               # SEO: Site structure
│   ├── 📁 images/                   # Public images
│   └── 📁 videos/                   # Public video files
│
├── 📁 docs/                         # 📚 Project documentation (55+ files)
│   ├── 📁 architecture/             # Architecture documentation
│   ├── 📁 stories/                  # User stories and epics
│   ├── 📁 qa/                       # QA documentation and test cases
│   ├── 📁 retrospectives/           # Sprint retrospectives
│   ├── 📁 context/                  # Story context files
│   ├── 📁 implementation-plans/     # Implementation planning
│   ├── 📁 prd/                      # Product requirements documents
│   ├── 📁 mcp/                      # MCP server documentation
│   ├── 📄 ARCHITECTURE.md           # Main architecture doc
│   ├── 📄 prd.md                    # Product requirements
│   └── 📄 [55+ other .md files]     # Various documentation
│
├── 📁 .codex/                       # 🤖 Codex CLI documentation (PRIMARY DOCS)
│   ├── 📄 _MEMO.md                  # Main knowledge base (59kb)
│   ├── 📄 PLAN.md                   # Project planning (21kb)
│   ├── 📄 REPORT.md                 # Status reports (7.9kb)
│   ├── 📄 CODEX-CHROME-DEVTOOLS-CHECKLIST.md  # DevTools testing
│   ├── 📁 external/                 # External research references
│   │   ├── 📁 351studio-ai-video-page
│   │   ├── 📁 forced-reflow-20251008
│   │   ├── 📁 lenis-gsap-202504
│   │   ├── 📁 resizeobserver-202408
│   │   └── 📁 [6 more research folders]
│   └── 📁 screenshots/              # Visual documentation
│
├── 📁 bmad/                         # 🧩 BMad Method workflows and config
│   ├── 📁 bmm/                      # BMad Method Module (BMM)
│   │   ├── 📁 workflows/            # Workflow definitions
│   │   ├── 📁 _cfg/                 # Configuration files
│   │   └── 📄 config.yaml           # BMM configuration
│   ├── 📁 core/                     # Core BMad functionality
│   └── 📁 gsap-excellence-v2/       # GSAP excellence module
│
├── 📁 dist/                         # 🏗️ Production build output (generated)
│   ├── 📁 assets/                   # Compiled JS, CSS, images
│   ├── 📄 index.html                # Built HTML
│   └── 📄 [hashed asset files]      # Vite output with content hashes
│
├── 📁 node_modules/                 # 📦 NPM dependencies (ignored by git)
│
├── 📁 test/                         # 🧪 Test files (performance tests)
│   └── 📁 performance/              # Performance testing suite
│
├── 📁 .github/                      # GitHub configuration
│   └── 📁 workflows/                # GitHub Actions CI/CD
│
├── 📁 tools/                        # Development tools and scripts
│
├── 📁 archive/                      # Archived code and documentation
├── 📁 merge-references/             # Git merge references
├── 📁 prompts/                      # AI prompts and templates
├── 📁 v4-backup/                    # Version backups
├── 📁 Screenshots/                  # Visual testing screenshots
│   └── 📁 2025-10/                  # Dated screenshot folders
│
├── 📄 package.json                  # 📦 NPM dependencies and scripts
├── 📄 package-lock.json             # Locked dependency versions
├── 📄 tsconfig.json                 # TypeScript configuration (root)
├── 📄 tsconfig.app.json             # TypeScript config (app)
├── 📄 tsconfig.node.json            # TypeScript config (Vite)
├── 📄 vite.config.ts                # ⚙️ Vite build configuration
├── 📄 tailwind.config.ts            # 🎨 Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 eslint.config.js              # ESLint linting rules
├── 📄 components.json               # shadcn/ui configuration
├── 📄 .prettierrc                   # Prettier formatting rules
│
├── 📄 README.md                     # Main project documentation
├── 📄 ARCHITECTURE.md               # Architecture overview (root)
├── 📄 CONTRIBUTING.md               # Contribution guidelines
├── 📄 SPEC.md                       # Project specifications
├── 📄 CLAUDE.md                     # Claude AI configuration
├── 📄 AGENTS.md                     # AI agents documentation
├── 📄 TASK.md                       # Current tasks
│
├── 📄 .env                          # Environment variables (gitignored)
├── 📄 .env.production               # Production environment
├── 📄 .gitignore                    # Git ignore rules
├── 📄 CNAME                         # Custom domain configuration
└── 📄 index.html                    # Vite entry HTML template
```

---

## Critical Directories Explained

### `/src/` - Application Source Code

**Purpose:** All application code, React components, utilities, and assets

#### `/src/components/` - React Components
**Organization:** Feature-based component structure

```
components/
├── core/            # Core app functionality (SEO, ScrollToTop)
├── layout/          # Page layouts (MainLayout)
├── hero/            # Hero sections (HeroContentBold, VideoBackground)
├── navigation/      # Navigation bar and menus
├── briefing/        # 🎯 Briefing Engine feature (primary product)
│   ├── BriefingCTA.tsx
│   ├── BriefingProcessFlow.tsx
│   ├── BriefingTimeline.tsx
│   ├── AudienceBenefits.tsx
│   ├── WorkflowTransformation.tsx
│   └── sections/    # Modular section components
├── agents/          # AI Agents feature
├── studios/         # Studios feature
├── conversational/  # Conversational AI feature
├── analytics/       # Analytics and tracking
├── desktop/         # Desktop-specific components
├── mobile/          # Mobile-specific components
├── video/           # Video players
├── gallery/         # Media galleries
├── shared/          # Reusable cross-feature components
└── ui/              # shadcn/ui component library (Radix UI)
```

**Key Insight:** Component organization reflects product structure (Briefing Engine, Studios, Conversational AI)

#### `/src/pages/` - Route Components
**Purpose:** Top-level page components mapped to routes

```
pages/
├── Index.tsx              # Homepage (/)
├── BriefingEngine.tsx     # Briefing Engine (/briefing-engine) - PRIMARY
├── Studios.tsx            # Studios service (/studios)
├── ConversationalAI.tsx   # Conversational AI (/conversational)
├── About.tsx              # About page (/about)
├── Contact.tsx            # Contact form (/contact)
├── PrivacyPolicy.tsx      # Privacy policy (/privacy)
├── Analytics.tsx          # Analytics dashboard (/analytics)
├── NotFound.tsx           # 404 page (*)
└── [others]               # Additional pages
```

**Routing:** Configured in `src/App.tsx` using React Router DOM

#### `/src/hooks/` - Custom React Hooks
**Purpose:** Reusable stateful logic

**Categories:**
- **Animation:** `useScrollAnimation`, `useScrollTriggerAnimation`, `useFadeIn`, `useParallax`
- **Performance:** `useAdaptivePerformance`, `usePerformance`, `usePrefersReducedMotion`
- **Interaction:** `useGestures`, `useMobileInteractions`, `useMagneticHover`
- **Utilities:** `useAnalytics`, `useLazyLoad`, `useFullscreen`

**Key Insight:** Heavy focus on performance and animation optimization

#### `/src/utils/` - Utility Modules
**Purpose:** Helper functions and shared logic

```
utils/
├── adaptive-config.ts         # Device capability detection
├── performance-adapter.ts     # Performance tier adaptation
├── performanceMonitor.ts      # Metrics tracking
├── scrollAnimations.ts        # Scroll animation helpers
├── smoothScroll.ts            # Lenis smooth scroll setup
├── imageOptimization.ts       # Image loading optimization
└── motionVariants.ts          # Framer Motion variants
```

---

### `/public/` - Static Assets

**Purpose:** Files served as-is without processing

**Contents:**
- `index.html` - HTML template (Vite injects scripts)
- `robots.txt` - SEO directives
- `sitemap.xml` - SEO site map
- Images, videos, fonts (directly accessible)

**URL Mapping:** `/public/images/logo.png` → `https://site.com/images/logo.png`

---

### `/docs/` - Project Documentation

**Purpose:** Comprehensive project documentation (55+ files)

**Key Subfolders:**
- `/architecture/` - Architecture decisions and patterns
- `/stories/` - User stories and development stories
- `/qa/` - QA gates, test cases, validation reports
- `/retrospectives/` - Sprint retrospectives and learnings
- `/prd/` - Product requirements documents
- `/implementation-plans/` - Feature implementation plans

**Critical Files:**
- `ARCHITECTURE.md` - Main architecture documentation
- `prd.md` - Product requirements
- `performance-test-architecture-brief.md` - Performance testing strategy
- Multiple GSAP-related docs (gsap-excellence-*, gsap-performance-*)

---

### `/.codex/` - Codex CLI Documentation (PRIMARY)

**Purpose:** Main knowledge base for Codex CLI tool

**Critical Files:**
- `_MEMO.md` (59kb) - **Primary knowledge base** - all project context
- `PLAN.md` (21kb) - Current project planning
- `REPORT.md` (7.9kb) - Status reports
- `CODEX-CHROME-DEVTOOLS-CHECKLIST.md` - Manual testing checklist

**external/** - External research and references:
- `lenis-gsap-202504/` - Animation framework research
- `forced-reflow-20251008/` - Performance optimization research
- `resizeobserver-202408/` - Technical implementation research
- Market research folders (Gartner, TrustRadius, etc.)

**Key Insight:** `.codex/` is the **single source of truth** for development context

---

### `/bmad/` - BMad Method Workflows

**Purpose:** BMad development methodology integration

**Structure:**
- `/bmm/` - BMad Method Module
  - `/workflows/` - Workflow definitions (YAML)
  - `/_cfg/` - Configuration files
  - `config.yaml` - BMM configuration
- `/core/` - Core BMad functionality
- `/gsap-excellence-v2/` - GSAP excellence module

**Key Insight:** Structured agile methodology with automated workflows

---

## Entry Points and Build Flow

### Development Flow

```
npm run dev
    ↓
vite.config.ts (Vite configuration)
    ↓
index.html (HTML template)
    ↓
src/main.tsx (Application entry)
    ↓
src/App.tsx (Root component, routing, providers)
    ↓
React Router renders page components
    ↓
Page components render feature components
    ↓
Hot Module Replacement (HMR) for instant updates
```

### Production Build Flow

```
npm run build
    ↓
TypeScript compilation (tsc)
    ↓
Vite build process
    ├── Bundle splitting (vendor, ui, main)
    ├── CSS optimization (Tailwind)
    ├── Asset optimization (images, videos)
    ├── Code minification (Terser)
    └── Performance budget check (900kb vendor limit)
    ↓
dist/ folder created
    ├── assets/
    │   ├── vendor.[hash].js (React, dependencies)
    │   ├── ui.[hash].js (Radix UI components)
    │   ├── main.[hash].js (App code)
    │   ├── [name].[hash].css (Tailwind output)
    │   └── img/[name]-[hash].webp (Optimized images)
    └── index.html (Final HTML with injected scripts)
```

### Deployment Flow

```
npm run deploy
    ↓
npm run build (production build)
    ↓
gh-pages -d dist (GitHub Pages deployment)
    ↓
Pushes dist/ to gh-pages branch
    ↓
GitHub Pages serves static site
    ↓
https://[username].github.io/[repo]/ or custom domain
```

---

## Critical Configuration Files

| File | Purpose | Key Settings |
|------|---------|--------------|
| **package.json** | Dependencies & scripts | React 18, Vite 5, GSAP, Radix UI |
| **vite.config.ts** | Build configuration | Base URL, plugins, bundle splitting, performance budget |
| **tailwind.config.ts** | Styling framework | Custom theme, animations, responsive breakpoints |
| **tsconfig.json** | TypeScript settings | Path aliases (@/*), strict mode options |
| **eslint.config.js** | Code linting | React hooks rules, TypeScript rules |
| **components.json** | shadcn/ui config | Component aliases, Tailwind prefix |

---

## Asset Organization

### Images
- **Source:** `/src/assets/` (processed by Vite)
- **Public:** `/public/images/` (served as-is)
- **Output:** `/dist/assets/img/` (optimized, content-hashed)

### Videos
- **Source:** `/src/assets/videos/` or `/public/videos/`
- **Streaming:** Vimeo CDN (external)
- **Formats:** MP4, WebM, HLS streams

### Fonts
- **Provider:** `@fontsource` packages (Geist, Inter, Outfit)
- **Loading:** Self-hosted via npm packages
- **Fallbacks:** system-ui, sans-serif

---

## Testing & Quality

### Test Infrastructure
- **Location:** `/test/performance/`
- **Tools:** Playwright 1.56.0, Lighthouse 12.8.2
- **Purpose:** Performance testing, E2E testing

### QA Documentation
- **Location:** `/docs/qa/`
- **Gates:** Feature-specific QA gates (YAML)
- **Validation:** Manual + automated validation reports

### Screenshots
- **Location:** `/Screenshots/2025-10/`
- **Purpose:** Visual regression testing
- **Naming:** `[page]-[resolution]-[section].png`

---

## Performance Optimization Strategy

### Code Splitting
- **Vendor Bundle:** React, core dependencies (~805kb, limit 900kb)
- **UI Bundle:** Radix UI components
- **Route-based:** Lazy load pages

### Asset Optimization
- **Images:** Lazy loading, responsive srcsets, WebP format
- **Videos:** HLS adaptive streaming, background auto-mute
- **3D:** Progressive loading, GPU detection, fallbacks

### Animation Performance
- **GSAP:** Hardware-accelerated transforms
- **Lenis:** 60fps smooth scrolling
- **Reduced Motion:** Accessibility fallbacks

---

## Development Workflow

### Local Development
```bash
npm run dev              # Start dev server (localhost:8080)
npm run lint             # Run ESLint
npm run build:dev        # Development build with sourcemaps
```

### Production
```bash
npm run build            # Production build
npm run preview          # Preview production (localhost:4173)
npm run deploy           # Deploy to GitHub Pages
```

### Testing
```bash
npm run test:performance # Run performance tests
# Manual testing via Chrome DevTools (see .codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md)
```

---

## Key Architectural Patterns

1. **Component-Based:** React functional components with hooks
2. **Feature-Based Organization:** Components grouped by product feature
3. **Responsive Design:** Mobile-first with adaptive components
4. **Performance-First:** Bundle budgets, lazy loading, GPU acceleration
5. **Accessibility:** Radix UI primitives, reduced motion, semantic HTML
6. **Type Safety:** TypeScript everywhere, strict null checks (incremental)
7. **Modern Build:** Vite for fast HMR, ES modules, tree-shaking

---

_This source tree analysis provides a comprehensive map of the codebase. For implementation details, refer to individual source files and documentation._
