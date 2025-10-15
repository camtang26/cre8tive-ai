# Project Documentation Index

**Project:** cre8tive-website-1006
**Type:** Web Application (React SPA)
**Generated:** 2025-10-16
**Scan Level:** Deep

---

## 📋 Quick Reference

| Attribute | Value |
|-----------|-------|
| **Repository Type** | Monolith (Single Codebase) |
| **Primary Language** | TypeScript |
| **Framework** | React 18.3.1 |
| **Build Tool** | Vite 5.4.1 |
| **Styling** | Tailwind CSS 3.4.11 |
| **UI Library** | Radix UI + shadcn/ui |
| **Animation** | GSAP 3.13, Framer Motion, Lenis |
| **Routing** | React Router DOM 6.26.2 |
| **State Management** | TanStack Query 5.56.2 |
| **Entry Point** | `src/main.tsx` |
| **Documentation Root** | `.codex/_MEMO.md` (59kb) |

---

## 🎯 Primary Product

**Cre8tive AI** - AI-Powered Video Production Platform

**Core Features:**
1. **Briefing Engine** - AI-powered creative brief to storyboard transformation
2. **Studios** - Professional video production services
3. **Conversational AI** - Voice-enabled AI interactions

---

## 📚 Generated Documentation

### Core Documentation

| Document | Purpose | Status |
|----------|---------|--------|
| [Component Inventory](./component-inventory.md) | Complete catalog of React components, hooks, and utilities | ✅ Complete |
| [API Contracts](./api-contracts.md) | External API integrations and service contracts | ✅ Complete |
| [Source Tree Analysis](./source-tree-analysis.md) | Annotated directory structure and architecture | ✅ Complete |
| [Development Guide](./development-guide.md) | Setup, workflows, and common tasks | ✅ Complete |

---

## 📖 Existing Documentation

### Primary Documentation Source

**📁 .codex/** - Codex CLI Documentation (SINGLE SOURCE OF TRUTH)

| File | Size | Purpose |
|------|------|---------|
| **_MEMO.md** | 59kb | 🎯 **Main knowledge base** - All project context, decisions, patterns |
| **PLAN.md** | 21kb | Current project planning and roadmap |
| **REPORT.md** | 7.9kb | Status reports and progress tracking |
| **CODEX-CHROME-DEVTOOLS-CHECKLIST.md** | 7.0kb | Manual testing checklist |

**📁 .codex/external/** - External Research (10 folders)
- `lenis-gsap-202504/` - Animation framework research
- `forced-reflow-20251008/` - Performance optimization research
- `resizeobserver-202408/` - Technical implementation research
- Market research (Gartner, TrustRadius, Yext, Guardian, Hackstone)
- Competitor analysis (351studio-ai-video-page)

---

### Root Level Documentation

| Document | Purpose |
|----------|---------|
| [README.md](../README.md) | Main project overview |
| [ARCHITECTURE.md](../ARCHITECTURE.md) | Architecture overview |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | Contribution guidelines |
| [SPEC.md](../SPEC.md) | Project specifications |
| [AGENTS.md](../AGENTS.md) | AI agents documentation |
| [CLAUDE.md](../CLAUDE.md) | Claude AI configuration |
| [TASK.md](../TASK.md) | Current tasks |

---

### docs/ Folder - Comprehensive Documentation

#### Architecture Documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Main architecture doc
- [architecture/](./architecture/) - Architecture subdirectory
- [gsap-excellence-v2-architecture.md](./gsap-excellence-v2-architecture.md)

#### Product & Planning
- [prd.md](./prd.md) - Product requirements document
- [PLAN-Old.md](./PLAN-Old.md) - Historical planning
- [BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md](./BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md)
- [BriefingEngine-Copy-Redesign.md](./BriefingEngine-Copy-Redesign.md)
- [prd/](./prd/) - PRD subdirectory

#### Performance & Research
- [gsap-performance-report-2025-10-15.md](./gsap-performance-report-2025-10-15.md)
- [gsap-debug-report-2025-10-15.md](./gsap-debug-report-2025-10-15.md)
- [gsap-research-responsive-scroll-storytelling-2025-10-14.md](./gsap-research-responsive-scroll-storytelling-2025-10-14.md)
- [gsap-research-segmented-scroll-storytelling-2025-10-14.md](./gsap-research-segmented-scroll-storytelling-2025-10-14.md)
- [performance-test-architecture-brief.md](./performance-test-architecture-brief.md)

#### Implementation & Stories
- [stories/](./stories/) - User stories and development stories
- [implementation-plans/](./implementation-plans/) - Feature implementation plans
- [COPY_IMPLEMENTATION_GUIDE.md](./COPY_IMPLEMENTATION_GUIDE.md)

#### QA & Validation
- [qa/](./qa/) - QA gates, test cases, validation reports
- [qa/gates/](./qa/gates/) - Feature-specific QA gates (YAML)

#### Retrospectives & Insights
- [retrospectives/](./retrospectives/) - Sprint retrospectives
- [insights/](./insights/) - Project insights and learnings

---

## 🚀 Getting Started

### For Developers

1. **Read:** [Development Guide](./development-guide.md)
2. **Review:** `.codex/_MEMO.md` for full project context
3. **Explore:** [Component Inventory](./component-inventory.md) for available components
4. **Setup:** Follow installation steps in Development Guide

### For Product Managers

1. **Read:** [prd.md](./prd.md) for product requirements
2. **Review:** `.codex/PLAN.md` for current planning
3. **Check:** [stories/](./stories/) for user stories

### For QA

1. **Read:** `.codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md`
2. **Review:** [qa/gates/](./qa/gates/) for feature-specific validation
3. **Check:** [performance-test-architecture-brief.md](./performance-test-architecture-brief.md)

---

## 🏗️ Project Architecture

### Technology Stack Summary

**Frontend:**
- React 18 (functional components, hooks)
- TypeScript 5.5 (incremental strict mode)
- Vite 5.4 (fast builds, HMR)
- Tailwind CSS 3.4 (utility-first styling)

**UI/UX:**
- Radix UI (accessible primitives)
- shadcn/ui (component patterns)
- GSAP 3.13 (professional animations)
- Lenis 1.3 (smooth scrolling)
- Framer Motion 12 (React animations)

**State & Data:**
- React Router DOM 6.26 (client-side routing)
- TanStack Query 5.56 (server state)
- Local React state (hooks)

**3D & Media:**
- Three.js 0.152 (WebGL 3D)
- Spline 4.0 (3D design tool integration)
- Vimeo Player API (video hosting)
- HLS.js 1.5 (adaptive streaming)

**Analytics & Services:**
- Vercel Analytics (performance tracking)
- Google Tag Manager (marketing analytics)
- GetForm (form submissions)
- ElevenLabs API (conversational AI)

### Component Architecture

```
src/components/
├── briefing/          # 🎯 Briefing Engine (PRIMARY PRODUCT)
├── studios/           # Studios service
├── conversational/    # Conversational AI
├── agents/            # AI Agents
├── hero/              # Hero sections
├── navigation/        # Navigation
├── desktop/mobile/    # Responsive variants
├── ui/                # shadcn/ui library
└── shared/            # Reusable components
```

**See:** [Component Inventory](./component-inventory.md) for full details

### Performance Strategy

- **Bundle Budget:** 900kb vendor limit (enforced)
- **Code Splitting:** Vendor, UI, Main chunks
- **Lazy Loading:** Images, routes, 3D assets
- **GPU Acceleration:** Transform/opacity animations
- **Adaptive Performance:** Device capability detection

**See:** [Performance Reports](./gsap-performance-report-2025-10-15.md)

---

## 🔗 External API Integrations

| Service | Purpose | Status |
|---------|---------|--------|
| **GetForm** | Contact form submissions | ✅ Active |
| **Vercel Analytics** | Performance monitoring | ✅ Active |
| **Google Analytics** | Marketing analytics | ✅ Active |
| **Vimeo Player** | Video hosting & playback | ✅ Active |
| **Spline** | 3D scene integration | ✅ Active |
| **ElevenLabs** | Conversational AI | ✅ Active |

**See:** [API Contracts](./api-contracts.md) for full details

---

## 🧪 Testing & QA

### Manual Testing
- **Checklist:** `.codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md`
- **QA Gates:** `docs/qa/gates/*.yml`
- **Visual Testing:** Screenshots in `/Screenshots/2025-10/`

### Automated Testing
- **Performance:** Lighthouse via `npm run test:performance`
- **E2E:** Playwright 1.56 (configured)

### Performance Validation
- Core Web Vitals monitoring
- Bundle size enforcement (900kb limit)
- Animation frame rate monitoring (60fps target)

---

## 📊 Project Status

**Current Phase:** Active Development
**Primary Focus:** Briefing Engine enhancements
**Tech Debt:** Minimal (GSAP optimization ongoing)

**Recent Major Achievements:**
- ✅ GSAP scroll animation optimization
- ✅ Performance budget enforcement
- ✅ Responsive design improvements
- ✅ Accessibility enhancements (reduced motion support)

**See:** `.codex/REPORT.md` for detailed status

---

## 🔄 Development Workflow

### Commands

```bash
npm run dev              # Start development server (localhost:8080)
npm run build            # Production build
npm run lint             # ESLint (errors must pass)
npm run preview          # Preview production build
npm run deploy           # Deploy to GitHub Pages
npm run test:performance # Run performance tests
```

**See:** [Development Guide](./development-guide.md) for full workflow

---

## 📁 Directory Structure

```
cre8tive-website-1006/
├── 📁 src/              # Application source code
│   ├── components/      # React components
│   ├── pages/           # Route components
│   ├── hooks/           # Custom hooks (17)
│   ├── utils/           # Utilities (7 modules)
│   └── main.tsx         # Entry point
├── 📁 .codex/           # 🎯 PRIMARY DOCS (Codex CLI)
│   ├── _MEMO.md         # Main knowledge base (59kb)
│   ├── PLAN.md          # Planning (21kb)
│   └── external/        # Research (10 folders)
├── 📁 docs/             # Project documentation (55+ files)
├── 📁 bmad/             # BMad Method workflows
├── 📁 public/           # Static assets
├── 📁 dist/             # Production build (generated)
└── 📁 test/             # Performance tests
```

**See:** [Source Tree Analysis](./source-tree-analysis.md) for full details

---

## 🎨 Design System

**Fonts:**
- Geist (primary)
- Inter (body)
- Outfit (headings)

**Colors:**
- **Primary:** Blue gradient (brand)
- **Secondary:** Purple/pink gradient
- **Accent:** Teal, emerald
- **Theme:** Dark mode support

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- iPad: 1024px
- Laptop: 1366px
- Desktop: 1920px

**Animation Timing:**
- Instant: 150ms
- Snappy: 300ms
- Smooth: 500ms
- Cinematic: 1000ms

---

## 🔐 Security & Privacy

**Content Security Policy:**
- Strict CSP configured in `vite.config.ts`
- Allowlisted external domains
- XSS protection enabled

**Privacy:**
- Cookie consent required (GDPR compliant)
- Analytics opt-out available
- No PII collected without consent

---

## 🚢 Deployment

**Current:** GitHub Pages
**Domain:** Custom domain via CNAME
**CI/CD:** GitHub Actions workflow (`.github/workflows/`)

**Alternative Options:**
- Vercel (recommended for production)
- Netlify
- AWS Amplify

---

## 📞 Support & Resources

**Documentation:**
- Primary: `.codex/_MEMO.md`
- Architecture: [ARCHITECTURE.md](../ARCHITECTURE.md)
- Contributing: [CONTRIBUTING.md](../CONTRIBUTING.md)

**Development:**
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- GSAP: https://greensock.com/gsap/
- shadcn/ui: https://ui.shadcn.com

---

## 🎯 For AI Assistants

**Context Hierarchy (Importance Order):**
1. `.codex/_MEMO.md` - **PRIMARY CONTEXT** (59kb knowledge base)
2. `.codex/PLAN.md` - Current planning
3. `docs/index.md` - This file (documentation index)
4. `docs/component-inventory.md` - Component catalog
5. `docs/architecture.md` - Architecture decisions
6. `README.md` - Project overview

**When implementing features:**
1. Check `.codex/_MEMO.md` for context
2. Review [Component Inventory](./component-inventory.md) for existing components
3. Follow patterns in [Development Guide](./development-guide.md)
4. Validate against [QA gates](./qa/gates/)

**When debugging:**
1. Check [Source Tree Analysis](./source-tree-analysis.md) for file locations
2. Review [API Contracts](./api-contracts.md) for integration details
3. Consult performance reports for optimization guidance

---

_This index serves as the primary entry point for all project documentation. Start here and navigate to specific documents as needed._

**Last Updated:** 2025-10-16
**Documentation Version:** 1.0.0
**Generated By:** BMad document-project workflow (Deep Scan)
