# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Context

**Cre8tive AI Marketing Website** - B2B marketing site showcasing AI-powered video production, autonomous agents, and conversational AI solutions.

**Type:** JAMstack SPA (React + TypeScript + Vite)
**Deployment:** GitHub Pages → cre8tive.ai (auto-deploy from `master` branch)
**Primary Goal:** Lead generation via contact forms and Cal.com appointment bookings

---

## Established Workflow System

This project follows the **Spec→TDD→Type-Driven** workflow defined in `@/home/cameronai/.claude/CLAUDE.md`. Key principles:

1. **All work traces back to @SPEC.md** (requirements, scope, success metrics)
2. **Memory Management:** Maintain `/codex/_MEMO.md` frequently (Focus Anchors, Commands, Impact Set, Decisions, Open Questions, Next Steps)
3. **Definition of Done:** SPEC satisfied, tests pass, types clean, lint clean, docs updated
4. **Self-Review:** Present work as "ready for validation" not "complete"
5. **Use ripgrep (`rg`), never `grep`** for searches

See `@/home/cameronai/.claude/CLAUDE.md` for complete workflow details.

---

## Commands

```bash
# Development
npm run dev              # Vite dev server on http://localhost:8080
npm run build            # TypeScript check + production build
npm run build:dev        # Development build with source maps
npm run preview          # Preview production build on :4173
npm run lint             # ESLint (must pass before commit)

# Deployment
npm run deploy           # Manual deploy to GitHub Pages (prefer CI/CD)
# Auto-deploy: Push to master → GitHub Actions → gh-pages branch → cre8tive.ai
```

**No tests currently implemented** - see @ARCHITECTURE.md Known Issues for testing gap.

---

## Architecture Overview

### Tech Stack Core
- **React 18.3** + **TypeScript 5.5** (relaxed config: noImplicitAny: false, strictNullChecks: false)
- **Vite 5.4** (build tool) + **React Router 6.26** (client-side routing)
- **Tailwind CSS 3.4** + **Shadcn/UI** (Radix UI components)
- **Framer Motion 12.4** (animations, scroll effects)
- **React Hook Form 7.53** + **Zod 3.23** (forms + validation)

### Data Flow Pattern
**Static Site with Third-Party APIs:**
1. User interaction → React component
2. Form submission → POST to getform.io (external)
3. Appointment booking → Cal.com links (external)
4. Analytics → Vercel Analytics + GTM
5. No custom backend, no database

### Component Organization
**Feature-based structure:**
```
src/
├── components/
│   ├── ui/              # 40+ Shadcn/UI primitives (Button, Dialog, etc.)
│   ├── [feature]/       # Feature-specific (studios/, agents/, contact/, etc.)
│   └── shared/          # Cross-feature reusable (ContactCTA, FadeIn, StatsBar)
├── pages/               # Route-level components (Index, Studios, Contact, etc.)
├── hooks/               # Custom hooks (useScrollAnimation, useAnalytics, etc.)
└── utils/               # Utilities (scrollAnimations, performanceMonitor, etc.)
```

**Pattern:** Components import from `@/components/...` (path alias configured in tsconfig.json)

### External Integrations
- **Forms:** getform.io (POST endpoint)
- **Booking:** Cal.com (embedded links)
- **Conversational AI:** ElevenLabs (API + embeds)
- **Video:** Vimeo (iframe embeds)
- **3D:** Spline (~4MB, limited usage - potential cleanup candidate)
- **Analytics:** Vercel Analytics, Google Tag Manager (GTM-XXXXXXX = placeholder)

### Key Architectural Decisions
1. **TypeScript Relaxed Mode:** Prioritizes rapid iteration over strict type safety (noImplicitAny: false)
2. **No Tests:** Current gap - see @ARCHITECTURE.md for recommended testing stack (Vitest + RTL + Playwright)
3. **Code Splitting:** Manual chunks (vendor, ui) in vite.config.ts for performance
4. **Pre-rendering:** react-snap generates static HTML for SEO
5. **Security:** CSP headers, DOMPurify for XSS, Zod for input validation

---

## 8) Minimal Prompts to Self (keep context lean)
- Prefer **file links** (@README.md, @SPEC.md, @…​) over pasting long text.
- Summarize in `_MEMO.md` instead of expanding chat history.
- Keep plans compact; let code and tests carry most of the context.
- Search: Prefer fast, ignore‑aware search tools (ripgrep, fd/fdfind). Use JSON tooling for structured data (jq).

## CRITICAL: Use ripgrep, not grep

NEVER use grep for project-wide searches (slow, ignores .gitignore). ALWAYS use rg.

- `rg "pattern"` — search content
- `rg --files | rg "name"` — find files
- `rg -t python "def"` — language filters

## File finding

- Prefer `fd` (or `fdfind` on Debian/Ubuntu). Respects .gitignore.

## JSON

- Use `jq` for parsing and transformations.

---

## Code Conventions (Discovered Patterns)

### TypeScript
- **Relaxed config:** Implicit any allowed, null checks disabled
- **Path alias:** Use `@/` for src/ imports
- **Prop patterns:** Interface above component, destructure props

### React
- **Functional components only** (no class components)
- **Hooks:** useState, useEffect, React Query for server state
- **Component structure:** Imports → Types → Component → Export default

### Styling
- **Tailwind utilities** for all styling
- **`cn()` helper** for conditional classes (from @/lib/utils)
- **CVA** for component variants (see ui/button.tsx)
- **Mobile-first:** Breakpoints: sm: md: lg: xl: 2xl:

### File Naming
- **Components:** PascalCase (ContactForm.tsx, HeroSection.tsx)
- **Utilities:** camelCase (utils.ts, scrollAnimations.ts)
- **Hooks:** camelCase with `use` prefix (useAnalytics.ts)
- **Directories:** kebab-case or lowercase (inconsistent - see @ARCHITECTURE.md)

---

## Development Workflow

### Before Starting
1. Read @SPEC.md (requirements and scope)
2. Read @ARCHITECTURE.md (system design)
3. Check `/codex/_MEMO.md` for context

### Making Changes
1. **Update `/codex/_MEMO.md`** with intent (or create `/codex/PLAN.md` if complex)
2. **Run quality checks:**
   ```bash
   npm run lint          # ESLint must pass
   npm run build         # TypeScript + Vite build
   npm run dev           # Manual browser testing
   ```
3. **Commit with conventional format:** `feat:`, `fix:`, `refactor:`, etc.
4. **Update docs** if behavior changes (README, SPEC, ARCHITECTURE)

### Git Workflow
- **Main branch:** `master` (auto-deploys to production)
- **Feature branches:** `feat/description`, `fix/description`, `design/description`
- **Commit format:** Conventional Commits (observed in git log)
- **PR process:** Lint + build must pass (see @CONTRIBUTING.md)

---

## Current State & Known Issues

### Recent Work (as of 2025-10-04)
- **Branch:** `design/modern-refresh-2025-10-02`
- **Latest:** Ultra-bold homepage redesign (Bento Grid, Glassmorphism 2.0, Magnetic buttons)
- **Status:** Validated in dev + production builds, zero critical errors

### Technical Debt (Priority Order)
1. **No automated tests** - Critical gap for regression prevention
2. **GTM placeholder** - `GTM-XXXXXXX` needs real container ID (App.tsx:69)
3. **Relaxed TypeScript** - Consider gradually enabling strict mode
4. **Unused 3D deps** - Three.js/Spline (~4MB) audit needed
5. **No staging environment** - All changes deploy directly to production

See @ARCHITECTURE.md "Known Issues & Technical Debt" for complete list.

---

## MCP Tools Available

### Chrome DevTools MCP
**Purpose:** Browser automation for E2E testing, screenshot validation, and console inspection.
**Full Reference:** `@/home/cameronai/.claude/mcp-configs/chrome-devtools-mcp-README.md`

**Common Use Cases:**
- **Visual regression testing:** Take screenshots before/after changes
- **E2E validation:** Automate form submissions, navigation flows
- **Console inspection:** Check for errors after deployments
- **Performance testing:** Core Web Vitals, network waterfall analysis

**Quick Start:**
```typescript
// Navigate to local dev server
await mcp.navigate_page({ url: "http://localhost:8080" });

// Take screenshot
await mcp.take_screenshot({ fullPage: true });

// Check console for errors
const messages = await mcp.list_console_messages();
const errors = messages.filter(m => m.type === 'error');

// Test form interaction
const snapshot = await mcp.take_snapshot();
await mcp.fill({ uid: "...", value: "test@example.com" });
await mcp.click({ uid: "..." });
```

**Important:** Always take fresh snapshot after navigation/interaction (UIDs change).

---

## Project-Specific Notes

### Forms
- **ContactForm.tsx** is critical path - all lead generation flows through here
- **Validation:** React Hook Form + Zod schema
- **Security:** DOMPurify sanitizes before submission to getform.io
- **Testing:** High priority for future test implementation

### SEO & Analytics
- **react-helmet** manages meta tags per route
- **react-snap** pre-renders HTML (config in package.json)
- **Sitemap:** Static file in public/sitemap.xml (last updated 2024-02-05 - needs refresh)
- **GTM:** Configured but placeholder ID - replace before production analytics

### Modern Design System (Oct 2025 Redesign)
**New Components:**
- `GlassCard` - Glassmorphism cards
- `MagneticButton` - Interactive hover effects
- `RevealText` - Text reveal animations
- `ParallaxSection` - Scroll parallax
- `BentoGrid` - Grid layout system

**Animation Utilities:**
- `useScrollAnimation` - Scroll-triggered effects
- `useParallax` - Parallax scroll
- `useMagneticHover` - Magnetic button interactions
- `motionVariants.ts` - Framer Motion presets

### Deployment Notes
- **GitHub Actions:** `.github/workflows/deploy.yml` (triggers on push to master)
- **Build output:** `dist/` (gitignored)
- **Custom domain:** CNAME in public/ points to cre8tive.ai
- **Preview builds:** Use `npm run build && npm run preview` locally before merge

---

## Quick Reference

**Documentation:**
- @SPEC.md - Requirements, features, scope
- @ARCHITECTURE.md - Tech stack, system design, data flow
- @CONTRIBUTING.md - Code conventions, git workflow
- @README.md - Setup, commands, deployment
- `/codex/_MEMO.md` - Working memory (update frequently)

**Key Files:**
- `src/App.tsx` - Root component, routing, analytics setup
- `src/components/ContactForm.tsx` - Lead capture (critical path)
- `vite.config.ts` - Build config, code splitting, CSP headers
- `tailwind.config.ts` - Design system tokens

**Common Tasks:**
- Add new page: Create in `src/pages/`, add route to `App.tsx`, update sitemap
- Add UI component: Use Shadcn/UI CLI or create in `src/components/ui/`
- Update SEO: Modify Helmet tags in page component
- Fix build: Check TypeScript errors first (`npm run build` runs tsc)

---

## Questions?

Review in this order:
1. @SPEC.md - "What should this do?"
2. @ARCHITECTURE.md - "How does it work?"
3. @CONTRIBUTING.md - "How do I contribute?"
4. `/codex/_MEMO.md` - "What's the current state?"

For workflow questions, see `@/home/cameronai/.claude/CLAUDE.md` (global workflow system).
