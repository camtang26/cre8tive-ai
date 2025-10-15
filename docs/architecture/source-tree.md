# Source Tree

**Last Updated:** 2025-10-06
**Auto-Loaded by:** Dev Agent (BMad workflow)
**Purpose:** Complete project structure guide and component catalog

---

## Project Root

```
/
├── public/                    # Static assets (served as-is)
├── src/                       # Application source code
├── docs/                      # Project documentation
├── codex/                     # Development memory
├── .github/                   # GitHub Actions CI/CD
├── .bmad-core/               # BMad multi-agent config
├── .claude/                   # Claude Code config
├── dist/                      # Build output (gitignored)
├── node_modules/             # Dependencies (gitignored)
└── [config files]            # Build/lint/TypeScript config
```

---

## Public Directory

**Purpose:** Static assets served directly (no processing)

```
public/
├── assets/                   # General images, icons
│   ├── img/                 # Optimized images
│   └── ...
│
├── briefing-engine/         # AI Briefing Engine assets
│   ├── visual-styles/       # 9 visual style showcase images
│   │   ├── Minimalist.webp
│   │   ├── BoldVibrant.webp
│   │   ├── CinematicDramatic.webp
│   │   ├── Playfulanimated.webp
│   │   ├── Futuristic.webp
│   │   ├── RetroVintage.webp
│   │   ├── DocumentaryRealistic.webp
│   │   ├── ArtisticAbstract.webp
│   │   └── 2dVector.webp
│   │
│   └── storyboard-mockup/   # 6 storyboard frame assets
│       ├── Frame1.webp
│       ├── Frame2.webp
│       ├── Frame3.webp
│       ├── Frame4.webp
│       ├── Frame5.webp
│       └── Frame6.webp
│
├── font/                     # Custom web fonts (if any)
├── favicon.ico              # Site favicon
├── og-image.png             # Social media preview image
├── sitemap.xml              # SEO sitemap
├── robots.txt               # Search engine crawler rules
├── 404.html                 # GitHub Pages SPA fallback
└── CNAME                    # Custom domain (cre8tive.ai)
```

**Asset Guidelines:**
- Images: WebP format preferred (better compression)
- Always include descriptive `alt` text
- Optimize before commit (< 100kb per image target)

---

## Source Directory (`src/`)

### Overview

```
src/
├── components/              # React components (feature-based)
├── pages/                   # Route-level page components
├── hooks/                   # Custom React hooks
├── lib/                     # Core utility libraries
├── utils/                   # Application utilities
├── styles/                  # Global styles (if any)
├── types/                   # TypeScript type definitions
├── constants/              # Application constants
├── assets/                  # Imported assets (bundled)
├── App.tsx                 # Root application component
├── main.tsx                # Application entry point
├── App.css                 # Application styles
├── index.css               # Global styles (Tailwind imports)
└── vite-env.d.ts           # Vite environment types
```

---

## Components (`src/components/`)

### Organization Pattern

**Feature-Based Structure:**
```
components/
├── ui/                      # Shadcn/UI base primitives
├── [feature]/              # Feature-specific components
├── shared/                 # Cross-feature reusable
└── [legacy-components]     # Root-level components
```

### UI Primitives (`ui/`)

**Purpose:** Shadcn/UI base components (Radix UI wrappers)

```
components/ui/
├── button.tsx              # Button primitive
├── input.tsx               # Input primitive
├── textarea.tsx            # Textarea primitive
├── dialog.tsx              # Modal dialog
├── popover.tsx             # Popover overlay
├── dropdown-menu.tsx       # Dropdown menu
├── toast.tsx               # Toast notification
├── accordion.tsx           # Accordion container
├── tabs.tsx                # Tab navigation
├── carousel.tsx            # Carousel slider
├── card.tsx                # Card container
├── badge.tsx               # Badge component
├── avatar.tsx              # Avatar image
├── checkbox.tsx            # Checkbox input
├── radio-group.tsx         # Radio input group
├── select.tsx              # Select dropdown
├── slider.tsx              # Range slider
├── switch.tsx              # Toggle switch
├── label.tsx               # Form label
├── separator.tsx           # Visual separator
├── scroll-area.tsx         # Scroll container
├── tooltip.tsx             # Tooltip overlay
├── hover-card.tsx          # Hover card
├── context-menu.tsx        # Right-click menu
├── menubar.tsx             # Menu bar
├── navigation-menu.tsx     # Navigation menu
├── command.tsx             # Command palette
├── sheet.tsx               # Slide-out panel
├── skeleton.tsx            # Loading skeleton
├── sonner.tsx              # Toast (Sonner library)
├── drawer.tsx              # Bottom drawer (Vaul)
├── resizable.tsx           # Resizable panels
│
├── glass-card.tsx          # Glassmorphism card (modern design)
├── bento-grid.tsx          # Grid layout (modern design)
├── magnetic-button.tsx     # Interactive button (modern design)
├── reveal-text.tsx         # Text reveal animation (modern design)
├── parallax-section.tsx    # Parallax scroll (modern design)
└── gradient-button.tsx     # Gradient button (modern design)
```

**Pattern:** Each UI component is self-contained with types, variants (CVA), and Radix UI integration.

### Briefing Engine Components (`briefing/`)

**Purpose:** AI Briefing Engine feature stack (Epic 1)

```
components/briefing/
├── BriefingHero.tsx                    # Split-screen hero with dual CTAs
├── BriefingCTA.tsx                     # Holographic CTA slab (booking + download)
├── VisualStylesGallery.tsx             # 9 visual styles grid + GSAP stagger
├── StyleCard.tsx                       # Individual style card (gallery child)
├── BriefingProcessFlow.tsx             # 4-step Define → Review timeline
├── ProcessStepCard.tsx                 # Individual process step (flow child)
├── WorkflowTransformation.tsx          # Traditional vs AI comparison
├── TransformationValueCard.tsx         # Value prop card (4 cards)
├── AudienceBenefits.tsx                # Agency vs Brand split layout
├── BenefitCard.tsx                     # Benefit card with film strip aesthetic
├── StoryboardDivider.tsx               # Cinematic divider (storyboard motif)
├── BriefingTimeline.tsx               # Segmented scroll narrative orchestrator
├── AIProcessingVisual.tsx              # Canvas particle AI visualization (planned)
│
├── palette.ts                          # Briefing Engine color palette (single source of truth)
└── sections/                           # Sub-sections (if needed)
```

**Status:**
- ✅ Completed: VisualStylesGallery (Story 1.3), BriefingCTA, StoryboardDivider, palette.ts
- 🔄 In Progress: BriefingProcessFlow, WorkflowTransformation, AudienceBenefits
- 📋 Planned: Segmented timeline polish (Story 1.7 follow-up), AIProcessingVisual (Story 1.6)

**Palette Reference:**
```typescript
import { briefingPalette, getGradient } from "@/components/briefing/palette"
```

### Studios Components (`studios/`)

**Purpose:** Studios service page components

```
components/studios/
├── StudiosHero.tsx                # Studios hero section
├── FilmStripDivider.tsx           # Film strip visual divider
├── ExpertiseShowcase.tsx          # Expertise highlights
├── MarketingUseCases.tsx          # Use case examples
├── B2BSolutions.tsx               # B2B-specific solutions
├── ClientTestimonials.tsx         # Customer testimonials
│
└── platform-native/               # Platform-Native Excellence module (planned)
    ├── PlatformNativeSection.tsx  # Main section wrapper
    ├── AspectRatioBranch.tsx      # Branching diagram
    ├── AspectRatioCard.tsx        # Individual aspect ratio card
    ├── PlatformIcon.tsx           # Platform icon component
    └── NativeValueCard.tsx        # Value proposition card
```

**Status:**
- ✅ Completed: StudiosHero, FilmStripDivider, ExpertiseShowcase
- 📋 Planned: platform-native/ module (post-Briefing Engine)

### Agents Components (`agents/`)

**Purpose:** Agents service page components

```
components/agents/
├── AgentsHero.tsx             # Agents hero section
├── AIMarketingSolutions.tsx   # Marketing solutions overview
├── HowItWorks.tsx            # Process explanation
├── AgentCapabilities.tsx      # Capabilities showcase
└── LeadGeneration.tsx         # Lead gen focus section
```

### Shared Components (`shared/`)

**Purpose:** Cross-feature reusable components

```
components/shared/
├── ContactCTA.tsx             # Contact call-to-action section
├── FadeIn.tsx                 # Scroll-triggered fade animation
├── ScrollFade.tsx             # Scroll fade wrapper
├── StatsBar.tsx               # Statistics/metrics bar
├── SectionDivider.tsx         # Generic section divider
└── LoadingSpinner.tsx         # Loading indicator
```

**Pattern:** Generic, reusable across multiple pages/features.

### Other Feature Components

```
components/
├── analytics/
│   └── CookieConsent.tsx      # Cookie consent banner
│
├── benefits/
│   └── BenefitsSection.tsx    # Benefits showcase
│
├── concept-to-creation/
│   └── ConceptFlow.tsx        # Content creation flow
│
├── contact/
│   ├── ContactForm.tsx        # Main contact form
│   └── ContactInfo.tsx        # Contact information display
│
├── conversational/
│   ├── ConversationalHero.tsx # Conversational AI hero
│   └── UseCases.tsx           # Conversational use cases
│
├── core/
│   ├── SEO.tsx               # SEO meta tags component
│   └── ScrollToTop.tsx       # Scroll to top utility
│
├── footer/
│   └── Footer.tsx            # Site footer
│
├── gallery/
│   └── ProjectGallery.tsx    # Project showcase gallery
│
├── hero/
│   └── HeroSection.tsx       # Generic hero section
│
├── how-it-works/
│   └── ProcessSteps.tsx      # Process explanation
│
├── layout/
│   └── MainLayout.tsx        # Main page layout wrapper
│
├── layouts/
│   └── PageLayout.tsx        # Generic page layout
│
├── navigation/
│   ├── Navigation.tsx        # Main site navigation
│   └── MobileMenu.tsx        # Mobile navigation menu
│
├── quotes/
│   └── CinematicQuotes.tsx   # Cinematic quote display
│
└── Services/
    └── ServicesOverview.tsx  # Services showcase
```

### Root-Level Components (Legacy)

```
components/
├── ContactForm.tsx           # Main contact form (root level)
├── Gallery.tsx               # Gallery component
├── Hero.tsx                  # Main hero component
├── Navigation.tsx            # Main navigation (root level)
└── Services.tsx              # Services overview
```

**Note:** Some components exist at root level (legacy organization). New components should follow feature-based structure.

---

## Pages (`src/pages/`)

**Purpose:** Route-level components (one per URL path)

```
pages/
├── Index.tsx                 # Homepage (/)
├── About.tsx                 # About page (/about)
├── Contact.tsx               # Contact page (/contact)
├── Studios.tsx               # Studios service (/studios)
├── BriefingEngine.tsx        # AI Briefing Engine (/studios-engine)
├── Agents.tsx                # Agents service (/agents)
├── ConversationalAI.tsx      # Conversational AI (/conversational-ai)
├── PrivacyPolicy.tsx         # Privacy policy (/privacy)
├── NotFound.tsx              # 404 error page
└── HomePage.tsx              # [Legacy? Index.tsx is current home]
```

**Routing:**
- Configured in `src/App.tsx` (React Router)
- Each page component maps to a URL path
- BriefingEngine.tsx → `/studios-engine` (route preserved for SEO)

**Page Pattern:**
```typescript
export default function PageName() {
  return (
    <>
      <SEO title="..." description="..." />
      <PageComponent1 />
      <PageComponent2 />
      <PageComponent3 />
    </>
  )
}
```

---

## Hooks (`src/hooks/`)

**Purpose:** Custom React hooks (stateful logic)

```
hooks/
├── useAnalytics.ts              # Analytics tracking hook
├── useFullscreen.ts             # Fullscreen API wrapper
├── use-toast.ts                 # Toast notification state
├── useScrollAnimation.ts        # Scroll-triggered animations
├── useOptimizedAnimation.ts     # Performance-optimized animations
├── useParallax.ts               # Parallax scroll effects
├── useMagneticHover.ts          # Magnetic button interactions
├── usePrefersReducedMotion.ts   # Accessibility: prefers-reduced-motion
└── useScrollTriggerAnimation.ts # Generic GSAP ScrollTrigger hook
```

**Naming:** `use` prefix + camelCase (exception: `use-toast.ts` uses kebab-case for Shadcn compatibility)

**Recent Additions (Architecture Sprint):**
- `usePrefersReducedMotion.ts` - Detects user motion preference
- `useScrollTriggerAnimation.ts` - Generic GSAP ScrollTrigger with cleanup

---

## Libraries & Utils

### Core Libraries (`src/lib/`)

```
lib/
└── utils.ts                 # Core utilities (cn() helper)
```

**Key Export:**
```typescript
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))  // Conditional class merging
}
```

### Application Utilities (`src/utils/`)

```
utils/
├── scrollAnimations.ts      # scrollAnimator utility
├── performanceMonitor.ts    # measurePerformance utility
└── motionVariants.ts        # Framer Motion variants (inferred)
```

---

## Types (`src/types/`)

**Purpose:** Shared TypeScript type definitions

```
types/
└── [Type definition files]
```

**Note:** Most types are co-located with components (inline interfaces). This directory is for shared/global types.

---

## Styles (`src/styles/`)

**Purpose:** Global styles and theme files

```
styles/
└── [CSS/styling files]
```

**Note:** Primary styling via Tailwind CSS utilities. Global styles in `src/index.css`.

---

## Constants (`src/constants/`)

**Purpose:** Application-wide constants

```
constants/
└── [Constants files]
```

---

## Assets (`src/assets/`)

**Purpose:** Imported assets (bundled by Vite)

```
assets/
├── logo.svg
└── [Other imported media]
```

**Difference from `public/`:**
- `src/assets/` - Imported in code, processed by Vite (hashed filenames)
- `public/` - Served as-is, no processing (static URLs)

---

## Documentation (`docs/`)

```
docs/
├── architecture/
│   ├── frontend-architecture.md      # Frontend patterns (26KB, 670 lines)
│   ├── animation-patterns.md         # GSAP + Lenis guide (24KB, 580 lines)
│   ├── coding-standards.md           # Coding standards (this file)
│   ├── tech-stack.md                 # Tech stack inventory (this file)
│   └── source-tree.md                # Source tree guide (this file)
│
├── context/
│   └── capsule.md                    # Context capsule
│
├── qa/
│   └── gates/                        # QA gate reports
│       └── 1.1-install-gsap-lenis-animation-framework.yml
│
├── stories/
│   ├── story-1.1.md                  # Epic 1 stories (12 total)
│   ├── story-1.2.md
│   ├── ... (story-1.3.md through story-1.12.md)
│   └── [Other epics]
│
├── MCPs.md                           # MCP server documentation
├── STORY-ALIGNMENT-REPORT.md         # Story alignment tracker
├── STORY-VALIDATION-REPORT.md        # Epic 1 validation results
├── ALIGNMENT-SPRINT-COMPLETION.md    # Full alignment sprint report
└── ULTRATHINK-SESSION-SUMMARY.md     # Session summaries
```

---

## Development Memory (`codex/`)

```
codex/
├── _MEMO.md                 # Working memory (updated frequently)
├── PLAN.md                  # Task breakdown and roadmap
├── PLAN_STATE.json          # Plan state tracking
├── REPORT.md                # Handoff summaries
└── logs/                    # Session logs (if any)
```

**Usage:**
- `_MEMO.md` - Current work, decisions, open questions
- `PLAN.md` - AI Briefing Engine roadmap (Phases 1-10)
- `REPORT.md` - Summary for handoff to user/team

---

## GitHub Configuration (`.github/`)

```
.github/
└── workflows/
    └── deploy.yml           # GitHub Actions deployment workflow
```

**Deployment Flow:**
1. Push to `master` → Trigger workflow
2. Install dependencies → Build (`npm run build`)
3. Deploy to `gh-pages` branch → GitHub Pages serves site

---

## BMad Configuration (`.bmad-core/`)

**Purpose:** BMad multi-agent workflow configuration

```
.bmad-core/
├── core-config.yaml         # BMad project configuration
│
├── checklists/
│   ├── architect-checklist.md
│   └── execute-checklist.md
│
├── tasks/
│   ├── create-doc.md
│   ├── document-project.md
│   ├── execute-checklist.md
│   └── ...
│
├── templates/
│   ├── architecture-tmpl.yaml
│   ├── prd-tmpl.md
│   └── ...
│
└── [Other BMad files]
```

**Auto-Load Files (Dev Agent):**
- `docs/architecture/coding-standards.md` ✅
- `docs/architecture/tech-stack.md` ✅
- `docs/architecture/source-tree.md` ✅

---

## Claude Code Configuration (`.claude/`)

```
.claude/
└── CLAUDE.md               # Project-specific Claude Code instructions
```

**Global Config:**
- `~/.claude/CLAUDE.md` - User-level global instructions

---

## Configuration Files (Root)

```
/
├── package.json            # Project manifest + scripts
├── package-lock.json       # Dependency lock file
│
├── tsconfig.json           # TypeScript project config (references)
├── tsconfig.app.json       # App TypeScript config
├── tsconfig.node.json      # Node TypeScript config
│
├── vite.config.ts          # Vite build configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── .prettierrc             # Prettier formatting config
│
├── .gitignore              # Git ignore patterns
├── README.md               # Project README
├── SPEC.md                 # Project specification
├── ARCHITECTURE.md         # Architecture documentation
├── CONTRIBUTING.md         # Contributing guidelines
└── LICENSE                 # Project license
```

---

## Build Output (`dist/`)

**Generated by:** `npm run build`

```
dist/
├── index.html              # Entry HTML
├── assets/
│   ├── css/
│   │   └── index-[hash].css
│   ├── js/
│   │   ├── index-[hash].js
│   │   ├── vendor-[hash].js
│   │   └── ui-[hash].js
│   └── img/
│       └── [images with hashes]
├── 404.html                # SPA fallback
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler rules
└── CNAME                   # Custom domain
```

**⚠️ Gitignored:** Never commit `dist/` directory

---

## File Naming Conventions

### Components
- **PascalCase:** `ContactForm.tsx`, `BriefingHero.tsx`, `VisualStylesGallery.tsx`

### Utilities
- **camelCase:** `utils.ts`, `scrollAnimations.ts`, `performanceMonitor.ts`

### Hooks
- **camelCase with `use` prefix:** `useAnalytics.ts`, `useScrollAnimation.ts`
- **Exception:** `use-toast.ts` (kebab-case for Shadcn/UI compatibility)

### Pages
- **PascalCase:** `Index.tsx`, `About.tsx`, `Studios.tsx`, `BriefingEngine.tsx`

### Directories
- **kebab-case (preferred):** `briefing/`, `platform-native/`, `how-it-works/`
- **camelCase (legacy):** `conceptToCreation/` (existing)

**Recommendation:** Use kebab-case for new directories to avoid case-sensitivity issues across OS.

---

## Import Path Patterns

### Absolute Imports (Preferred)

```typescript
// ✅ GOOD: Use @ alias
import { Button } from "@/components/ui/button"
import { BriefingHero } from "@/components/briefing/BriefingHero"
import { cn } from "@/lib/utils"
import { useAnalytics } from "@/hooks/useAnalytics"
```

### Relative Imports (Avoid)

```typescript
// ❌ BAD: Relative paths (hard to refactor)
import { Button } from "../../components/ui/button"
import { cn } from "../../../lib/utils"
```

---

## Component Catalog Summary

### By Feature

**Briefing Engine (9 components):**
- BriefingHero, BriefingTimeline, HeroBriefSection, NeuralSynthesisSection, StyleSelectionSection, StoryboardAssemblySection, StudiosHandoffSection, BriefingCTA, VisualStylesGallery, StyleCard, BriefingProcessFlow, ProcessStepCard, WorkflowTransformation, TransformationValueCard, AudienceBenefits, BenefitCard, StoryboardDivider, AIProcessingVisual, palette.ts

**Studios (6+ components):**
- StudiosHero, FilmStripDivider, ExpertiseShowcase, MarketingUseCases, B2BSolutions, ClientTestimonials, platform-native/ module (5 planned)

**Agents (5 components):**
- AgentsHero, AIMarketingSolutions, HowItWorks, AgentCapabilities, LeadGeneration

**UI Primitives (40+ components):**
- All Shadcn/UI components in `components/ui/`

**Shared (5 components):**
- ContactCTA, FadeIn, ScrollFade, StatsBar, SectionDivider

**Total Components:** ~80+ (including UI primitives)

---

## Directory Tree (Complete)

```
cre8tive-website/
│
├── public/
│   ├── assets/img/
│   ├── briefing-engine/
│   │   ├── visual-styles/ (9 images)
│   │   └── storyboard-mockup/ (6 images)
│   ├── font/
│   ├── favicon.ico
│   ├── og-image.png
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── 404.html
│   └── CNAME
│
├── src/
│   ├── components/
│   │   ├── ui/ (40+ components)
│   │   ├── briefing/ (13 components)
│   │   ├── studios/ (6+ components)
│   │   ├── agents/ (5 components)
│   │   ├── shared/ (5 components)
│   │   └── [other features] (30+ components)
│   ├── pages/ (9 pages)
│   ├── hooks/ (9 hooks)
│   ├── lib/utils.ts
│   ├── utils/ (3 utilities)
│   ├── types/
│   ├── styles/
│   ├── constants/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── index.css
│
├── docs/
│   ├── architecture/ (5 docs)
│   ├── context/
│   ├── qa/gates/
│   ├── stories/ (12 Epic 1 stories)
│   └── [reports] (4 reports)
│
├── codex/
│   ├── _MEMO.md
│   ├── PLAN.md
│   ├── PLAN_STATE.json
│   └── REPORT.md
│
├── .github/workflows/deploy.yml
├── .bmad-core/ (BMad config)
├── .claude/CLAUDE.md
│
├── dist/ (build output, gitignored)
├── node_modules/ (gitignored)
│
└── [config files] (9 config files)
```

---

## Quick Reference

### Find a Component

| Feature | Location |
|---------|----------|
| UI Primitives | `src/components/ui/` |
| Briefing Engine | `src/components/briefing/` |
| Studios | `src/components/studios/` |
| Agents | `src/components/agents/` |
| Shared/Reusable | `src/components/shared/` |
| Pages | `src/pages/` |

### Find Assets

| Asset Type | Location |
|-----------|----------|
| Briefing visual styles | `public/briefing-engine/visual-styles/` |
| Storyboard frames | `public/briefing-engine/storyboard-mockup/` |
| General images | `public/assets/img/` |
| Imported assets | `src/assets/` (bundled) |

### Find Documentation

| Doc Type | Location |
|----------|----------|
| Architecture | `docs/architecture/` |
| Stories (BMad) | `docs/stories/` |
| QA Reports | `docs/qa/` |
| Working Memory | `codex/_MEMO.md` |
| Project Plan | `codex/PLAN.md` |

---

## Related Documentation

- **Coding Standards:** `docs/architecture/coding-standards.md`
- **Tech Stack:** `docs/architecture/tech-stack.md`
- **Frontend Architecture:** `docs/architecture/frontend-architecture.md`
- **Animation Patterns:** `docs/architecture/animation-patterns.md`

---

**Last Updated:** 2025-10-06
**Total Components:** ~80+ (40+ UI primitives + 40+ feature components)
**Total Pages:** 9 routes
**Total Hooks:** 9 custom hooks
