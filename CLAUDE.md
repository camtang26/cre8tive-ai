# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Cre8tive AI Studios corporate website - B2B marketing site for AI-powered video production and automation company. Deployed to GitHub Pages at cre8tive.ai with automated deployment on push to `master` branch.

**Important:** Always kill existing preview servers (port 4173) before starting new ones to avoid port conflicts.

## Commands

### Development
```bash
npm run dev              # Dev server on http://localhost:8080
npm run build            # TypeScript check + production build
npm run build:dev        # Development mode build
npm run preview          # Preview production build on port 4173
npm run lint             # ESLint check
```

### Deployment
```bash
npm run predeploy        # Build before deploy
npm run deploy           # Deploy to GitHub Pages (gh-pages package)
```

**Note:** Deployment is automated via GitHub Actions on push to `master`. Manual deploy command uses gh-pages package.

### Python Tools (requires venv)
```bash
venv/bin/python tools/screenshot_utils.py [URL]    # Capture screenshots
venv/bin/python tools/llm_api.py --prompt "..."    # Query LLM (OpenAI/Anthropic/etc)
venv/bin/python tools/web_scraper.py [URLs]        # Scrape web content
venv/bin/python tools/search_engine.py "query"     # Search engine API
```

## Critical Architecture Patterns

### 1. GitHub Pages SPA Routing
This is a critical pattern that **must be maintained** for routing to work on GitHub Pages:

- **404.html redirect:** All non-root routes trigger 404.html, which redirects to `/?p=<path>`
- **App.tsx restore:** On mount, App.tsx reads `p` query param and uses `window.history.replaceState` to restore clean URLs
- **Testing:** Always verify routes work in preview build (`npm run preview`) before deployment

**If you modify routing:**
1. Update both 404.html and App.tsx redirect logic
2. Test all routes in preview build
3. Verify no infinite redirect loops

### 2. Image Asset Handling
**Always use OptimizedImage component** for images to ensure proper asset handling in production:

```tsx
import { OptimizedImage } from '@/components/core/OptimizedImage';
// Use this, not <img>
```

Asset paths are hashed during build. Direct `<img src="...">` tags may break in production.

### 3. State Management Strategy
- **No global state library** (no Redux, Zustand, Context API)
- **React Query** for server state (forms, API calls)
- **Local hooks** for component state
- **URL as state** via React Router

Don't introduce global state unless explicitly required.

### 4. Component Organization
```
src/components/
├── ui/              # shadcn/ui components (50+ Radix primitives) - DO NOT modify directly
├── core/            # Core utilities (SEO, OptimizedImage, VideoPlayer)
├── shared/          # Reusable components (ContactCTA, FadeIn, ScrollFade)
├── [page-name]/     # Page-specific components (agents/, studios/, conversational/, etc.)
```

**Important:** `ui/` components are from shadcn/ui - prefer extending/wrapping over modifying.

### 5. CSP Headers Configuration
CSP headers are defined in **two places**:
1. `vite.config.ts` preview.headers (for local preview)
2. `App.tsx` Helmet (for runtime, GitHub Pages)

**When adding external services:**
- Update CSP in both locations
- Test locally with `npm run preview`
- Current whitelisted domains: Vimeo, ElevenLabs, Spline, Google Analytics, Vercel

### 6. TypeScript Configuration
Config is intentionally relaxed for rapid iteration:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `skipLibCheck: true`

This is a **project decision**. Don't tighten without team approval.

## Deployment & GitHub Actions

### Workflow Trigger
- Pushes to `master` branch auto-deploy via `.github/workflows/deploy.yml`
- Workflow: Checkout → Node 20 setup → npm ci → npm run build → deploy to gh-pages

### Custom Domain
- CNAME file in repo maintains `cre8tive.ai` domain
- Base URL in vite.config.ts is always `/` (not `/repo-name/`)

### Important Pre-Deployment Checks
1. Verify local preview build works: `npm run preview`
2. Test all routes (/, /agents, /studios, /studios-engine, /conversational, /about, /contact, /privacy)
3. Check CSP headers allow all necessary external resources
4. Verify images load correctly (OptimizedImage usage)

## Page Routes & Naming
- `/` → Index.tsx (home page)
- `/studios` → Studios.tsx
- `/studios-engine` → StudiosEngine.tsx (formerly "Ad Manager")
- `/manager` → Alias for `/studios-engine` (backward compatibility)
- `/agents` → Agents.tsx
- `/conversational` → ConversationalAI.tsx
- `/about` → About.tsx
- `/contact` → Contact.tsx
- `/privacy` → PrivacyPolicy.tsx

**Note:** "Ad Manager" was renamed to "Cre8tive AI Studios AI Engine" - use new terminology.

## Performance Patterns

### Code Splitting
Manual chunks configured in vite.config.ts:
- `vendor`: React, Router, Query, Framer Motion, Three.js, Vimeo
- `ui`: All Radix UI components

Don't modify chunk strategy without analyzing bundle impact.

### Animation Optimization
Use `useOptimizedAnimation` hook for performance-aware animations:
```tsx
const ref = useOptimizedAnimation({ delay: 100 });
```

This hook defers animations on lower-powered devices.

### Lazy Loading
Use `useLazyLoad` hook for below-the-fold content to improve initial load time.

## Security Considerations

### Content Security Policy
Strict CSP is enforced. When adding external resources:
1. Add domain to CSP in vite.config.ts (preview headers)
2. Add domain to CSP in App.tsx (Helmet)
3. Use specific directives: `script-src`, `frame-src`, `connect-src`, etc.

### Input Sanitization
DOMPurify is available for sanitizing user input. Use when rendering user-generated content.

## Project-Specific Rules (from .cursorrules)

### Python Virtual Environment
- Python venv exists at `./venv` - always use it for Python tools
- Tools are for automation/testing, not part of React build

### File Creation Policy
**Do not create new files unless explicitly stated by the user.** Prefer editing existing files.

### Debugging & Changes
- Read file contents before making edits
- Include debug information in program output
- Always verify CSP configurations locally before deployment
- Test video playback and widget functionality in preview before pushing

### Git Commit Messages
When using multiline messages, use `git commit -F <filename>` or heredoc format.

## Known Quirks & Gotchas

1. **InteractiveRobot Component:** Currently returns `null` (design removed). Spline and Three.js deps remain for potential future use.

2. **GTM Container ID:** Placeholder `GTM-XXXXXXX` in App.tsx needs replacement with real ID for analytics.

3. **React-snap Config:** Configured in package.json but not actively used (no postbuild script).

4. **Legacy WordPress Folder:** `cre8tive-ai/` contains old PHP theme files - ignore unless specifically working on migration reference.

5. **Feature Flags:** `ENABLE_AUTH_FEATURES = false` in constants/featureFlags.ts - no authentication on public site.

## Contact & Phone Number
Current contact phone: **0404 713 440** (updated from previous 0438 526 175)

## Environment & Build

- **Node Version:** 20 (specified in GitHub Actions)
- **Package Manager:** npm (lockfile: package-lock.json)
- **Build Tool:** Vite 5.4.1 with SWC plugin (fast refresh)
- **Dev Server:** Port 8080 (IPv6 enabled: `host: "::"`)
- **Preview Server:** Port 4173 (strictPort: true)
