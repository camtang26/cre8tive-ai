# Tech Stack

**Last Updated:** 2025-10-06
**Auto-Loaded by:** Dev Agent (BMad workflow)
**Purpose:** Complete dependency inventory with versions and rationale

---

## Overview

**Architecture Pattern:** JAMstack (JavaScript, APIs, Markup)
- **Frontend:** React SPA with client-side routing
- **Build:** Static site generation with Vite
- **APIs:** Third-party integrations (getform.io, Cal.com, ElevenLabs, Vimeo)
- **Hosting:** GitHub Pages with custom domain (cre8tive.ai)

**Total Bundle Size:** 879kb (target: < 900kb)
- Vendor chunk: 806kb (gzipped 219.89kb)
- GSAP + Lenis: ~73kb added (Story 1.1)

---

## Core Stack

### Language & Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| TypeScript | 5.5.3 | Type safety, IDE autocomplete |
| Node.js | 20+ | Development runtime (required) |
| npm | 9+ | Package management |

**Module System:** ES Modules (`type: "module"` in package.json)

---

## Frontend Framework

### React Ecosystem

| Package | Version | Purpose | Bundle Impact |
|---------|---------|---------|---------------|
| react | 18.3.1 | UI library | ~48kb (vendor chunk) |
| react-dom | 18.3.1 | DOM rendering | Included in vendor |
| react-router-dom | 6.26.2 | Client-side routing | ~20kb (vendor chunk) |
| @tanstack/react-query | 5.56.2 | Server state management | ~40kb (vendor chunk) |

**Why React 18.3.1:**
- Concurrent features (Suspense, transitions)
- Automatic batching (better performance)
- Established ecosystem
- Team familiarity

**State Management Approach:**
- Local: React Hooks (`useState`, `useEffect`, `useContext`)
- Server: React Query (caching, synchronization)
- Forms: React Hook Form
- URL: React Router
- ❌ No Redux/MobX/Zustand

---

## Build Tools

### Vite & Bundling

| Package | Version | Purpose |
|---------|---------|---------|
| vite | 5.4.1 | Build tool (dev server + bundler) |
| @vitejs/plugin-react-swc | 3.5.0 | React + SWC transpiler |
| terser | 5.37.0 | Production minification |

**Why Vite:**
- Lightning-fast HMR (< 100ms updates)
- Native ES modules (no bundling in dev)
- SWC transpiler (faster than Babel)
- Optimized production builds

**Build Configuration:**
- Code splitting: Manual chunks (vendor, ui)
- Minification: Terser with console removal
- Target: ES2015 (broad browser support)
- Chunk size limit: 1000kb warning

---

## UI & Styling

### Tailwind CSS Stack

| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | 3.4.11 | Utility-first CSS framework |
| postcss | 8.5.1 | CSS transformation |
| autoprefixer | 10.4.20 | Vendor prefix automation |
| postcss-import | 15.1.0 | @import support |
| postcss-nested | 6.0.1 | Nested rule support |

**PostCSS Plugins:**
- `postcss-import` - Inline @import rules
- `postcss-nested` - Sass-like nesting
- `postcss-preset-env` - Future CSS today
- `autoprefixer` - Vendor prefixes

**Why Tailwind:**
- Rapid development (utility classes)
- Consistent design system
- Purge unused CSS (optimized bundle)
- Mobile-first responsive design

### Component Library (Shadcn/UI)

| Package | Version | Purpose |
|---------|---------|---------|
| @radix-ui/react-* | Various | 40+ accessible primitives |
| class-variance-authority | 0.7.1 | Variant styling (CVA) |
| clsx | 2.1.1 | Conditional classes |
| tailwind-merge | 2.5.2 | Class name merging |
| tailwindcss-animate | 1.0.7 | Animation utilities |

**Radix UI Components (40+ primitives):**
- Accordion, AlertDialog, AspectRatio, Avatar, Checkbox
- Collapsible, ContextMenu, Dialog, DropdownMenu, HoverCard
- Label, Menubar, NavigationMenu, Popover, Progress
- RadioGroup, ScrollArea, Select, Separator, Slider
- Switch, Tabs, Toast, Toggle, Tooltip
- (Full list in package.json)

**Why Shadcn/UI:**
- Copy-paste components (no package dependency)
- Built on Radix UI (accessible primitives)
- Tailwind styling (customizable)
- TypeScript support

**Design Utilities:**
- `class-variance-authority` (CVA) - Type-safe variant styling
- `clsx` + `tailwind-merge` - Combined in `cn()` utility
- `tailwindcss-animate` - Keyframe animations

---

## Animation Stack

### GSAP + Lenis + Framer Motion

| Package | Version | Purpose | Bundle Impact |
|---------|---------|---------|---------------|
| gsap | 3.13.0 | Animation engine | ~48kb |
| @gsap/react | 2.1.2 | React integration | ~2kb |
| lenis | 1.3.11 | Smooth scroll | ~7kb |
| framer-motion | 12.4.2 | UI micro-interactions | ~50kb (vendor) |

**Installed:** Story 1.1 (2025-10-06)
**Total Impact:** ~73kb (GSAP + Lenis)

**Library Decision Tree:**

```
Animation Type?
├── Scroll-driven timeline → GSAP + ScrollTrigger
│   ├── Parallax effects
│   ├── Scrub animations
│   ├── Pinned sections
│   └── Complex sequences
│
├── Smooth scrolling → Lenis
│   ├── Momentum-based
│   ├── GSAP integration
│   └── Touch support
│
└── UI micro-interactions → Framer Motion
    ├── Hover effects
    ├── Tap feedback
    ├── Drag interactions
    └── Modal animations
```

**Why This Stack:**
- **GSAP:** Industry-standard for complex animations, 60fps guaranteed
- **Lenis:** Best smooth scroll library, GSAP-compatible
- **Framer Motion:** Declarative React animations, GPU-optimized

**Integration Pattern:**
```typescript
// Lenis + GSAP sync
const lenis = useLenis(({ scroll }) => {
  ScrollTrigger.update()
})
```

**Critical:** All GSAP animations MUST use `gsap.context()` cleanup to prevent memory leaks.

---

## Typography

### Fonts

| Package | Version | Purpose |
|---------|---------|---------|
| @fontsource/geist-sans | 5.1.0 | Primary font (headlines) |
| @fontsource/inter | 5.1.1 | Body font (text) |

**Why Self-Hosted:**
- Performance (no external requests)
- Privacy (no Google Fonts tracking)
- Offline support

---

## Forms & Validation

### Form Stack

| Package | Version | Purpose |
|---------|---------|---------|
| react-hook-form | 7.53.0 | Form state management |
| zod | 3.23.8 | Schema validation |
| @hookform/resolvers | 3.9.0 | Zod + RHF integration |
| input-otp | 1.2.4 | OTP input component |
| react-day-picker | 8.10.1 | Date picker |

**Why React Hook Form + Zod:**
- Minimal re-renders (better performance)
- Type-safe validation schemas
- Built-in error handling
- Async validation support

**Pattern:**
```typescript
const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
})

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema),
})
```

---

## 3D & Interactive Media

### Graphics & Video

| Package | Version | Purpose | Bundle Impact |
|---------|---------|---------|---------------|
| three | 0.173.0 | 3D graphics engine | ~600kb (lazy-loaded) |
| @splinetool/react-spline | 4.0.0 | Spline integration | ~2MB (chunked) |
| @splinetool/runtime | 1.9.65 | Spline runtime | Included |
| @vimeo/player | 2.20.1 | Vimeo video player | ~50kb |
| hls.js | 1.5.20 | HLS streaming | ~200kb (lazy) |
| screenfull | 6.0.2 | Fullscreen API | ~2kb |
| stats.js | 0.17.0 | FPS monitoring (dev) | ~5kb |

**Why Three.js:**
- Limited usage (InteractiveRobot feature)
- Lazy-loaded to reduce initial bundle
- Industry-standard 3D library

**⚠️ Bundle Warning:**
- Three.js: ~600kb (1 component uses it)
- Spline: ~2MB (3D platform)
- **Recommendation:** Audit usage, consider lazy loading or removal

---

## Data Visualization

| Package | Version | Purpose |
|---------|---------|---------|
| recharts | 2.12.7 | Charts library (built on D3) |

**Why Recharts:**
- React-first API
- Built on D3 (powerful)
- Responsive out-of-box

---

## External Integrations

### Third-Party Services

| Service | Package | Version | Purpose |
|---------|---------|---------|---------|
| Vercel Analytics | @vercel/analytics | 1.4.1 | Performance + error tracking |
| Google Tag Manager | - | - | Event tracking (GTM-XXXXXXX) |
| getform.io | - | - | Form submissions (POST API) |
| Cal.com | - | - | Appointment booking (links) |
| ElevenLabs | - | - | Conversational AI (API) |
| Vimeo | @vimeo/player | 2.20.1 | Video hosting (iframe) |
| Cookie Consent | cookieconsent | 3.1.1 | Privacy compliance |

**Why Third-Party:**
- No backend needed (static site)
- Low cost (free tiers)
- Managed services (no maintenance)

---

## SEO & Meta

### SEO Tools

| Package | Version | Purpose |
|---------|---------|---------|
| react-helmet | 6.1.0 | Dynamic meta tags |
| react-snap | 1.23.0 | Static HTML pre-rendering |

**Why react-snap:**
- Pre-renders all routes to HTML
- SEO for single-page apps
- Faster initial paint
- GitHub Pages compatible

**Routes Pre-rendered:**
- `/` (homepage)
- `/about`
- `/contact`
- `/studios`
- `/agents`
- `/conversational-ai`
- `/studios-engine` (Briefing Engine)

---

## Development Tools

### Linting & Type Checking

| Package | Version | Purpose |
|---------|---------|---------|
| eslint | 9.9.0 | Code linting |
| @eslint/js | 9.9.0 | ESLint core |
| typescript-eslint | 8.0.1 | TypeScript linting |
| eslint-plugin-react-hooks | 5.1.0-rc.0 | React Hooks rules |
| eslint-plugin-react-refresh | 0.4.9 | Vite HMR support |

**Linter Policy:**
- ✅ Errors: MUST fix before commit
- ⚠️ Warnings: Acceptable (pre-existing)

**TypeScript Config:**
- `noImplicitAny: true` (enabled 2025-10-06)
- `strictNullChecks: false` (next phase)
- Incremental strict mode in progress

### Formatting

| Package | Version | Purpose |
|---------|---------|---------|
| prettier | - | Code formatting (config in `.prettierrc`) |

**Prettier Config:**
```json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## Deployment

### GitHub Pages Stack

| Package | Version | Purpose |
|---------|---------|---------|
| gh-pages | 6.3.0 | Deploy to gh-pages branch |
| peaceiris/actions-gh-pages | v3 | GitHub Actions deploy |

**Deployment Flow:**
1. Push to `master` → GitHub Actions
2. Install → Build (`npm run build`)
3. Deploy to `gh-pages` branch
4. GitHub Pages serves static site
5. Custom domain: cre8tive.ai (via CNAME)

---

## Utility Libraries

### Helpers & Utils

| Package | Version | Purpose |
|---------|---------|---------|
| date-fns | 3.6.0 | Date formatting |
| dompurify | 3.2.3 | XSS protection (HTML sanitization) |
| embla-carousel-react | 8.3.0 | Carousel component |
| cmdk | 1.0.0 | Command menu |
| vaul | 0.9.3 | Drawer component |
| sonner | 1.5.0 | Toast notifications |
| next-themes | 0.3.0 | Theme management |
| react-resizable-panels | 2.1.3 | Resizable layouts |

**Why DOMPurify:**
- XSS protection for user input
- Sanitizes HTML before rendering
- Security requirement

---

## Bundle Analysis

### Current Bundle Sizes

**Total:** 879kb (target: < 900kb)

**Major Chunks:**
- `vendor.js`: 806kb (gzipped 219.89kb) - React, Router, Query, Motion, Three.js
- `ui.js`: 52kb (gzipped 17.52kb) - Radix UI components
- `physics.js`: 1,987kb (gzipped 722.79kb) - ⚠️ Large physics library (audit needed)
- `react-spline.js`: 2,035kb (gzipped 564.16kb) - ⚠️ Spline 3D runtime

**Code Splitting:**
- Vendor chunk: Framework dependencies
- UI chunk: All Radix UI components
- Dynamic imports: Route-based splitting

**⚠️ Optimization Opportunities:**
1. Audit Three.js usage (limited usage, ~600kb)
2. Lazy load Spline components (~2MB)
3. Investigate physics.js necessity (~2MB)

---

## Version Constraints

### Package Update Policy

**Semantic Versioning:**
- `^5.4.1` - Allow minor + patch updates
- `~5.4.1` - Allow patch updates only
- `5.4.1` - Exact version (lock)

**Current Approach:** Caret ranges (^) for most packages

**Update Cadence:**
- Security patches: Immediate
- Minor versions: Monthly review
- Major versions: Quarterly planning

---

## Dependency Tree

### Critical Dependencies

```
react (18.3.1)
├── react-dom (18.3.1)
├── react-router-dom (6.26.2)
├── @tanstack/react-query (5.56.2)
├── react-hook-form (7.53.0)
├── framer-motion (12.4.2)
└── react-helmet (6.1.0)

vite (5.4.1)
├── @vitejs/plugin-react-swc (3.5.0)
├── terser (5.37.0)
└── rollup (bundled)

tailwindcss (3.4.11)
├── postcss (8.5.1)
├── autoprefixer (10.4.20)
└── tailwindcss-animate (1.0.7)

@radix-ui/* (40+ packages)
├── @radix-ui/react-dialog
├── @radix-ui/react-dropdown-menu
├── @radix-ui/react-popover
└── ... (see package.json for full list)

gsap (3.13.0)
├── @gsap/react (2.1.2)
└── ScrollTrigger (plugin)

lenis (1.3.11)
```

---

## Security Considerations

### Dependency Security

**Current State:**
- No automated scanning (Dependabot, Snyk)
- Manual updates (2024-2025 versions)

**Recommendations:**
1. Enable Dependabot (GitHub)
2. Run `npm audit` before deploys
3. Monitor security advisories

### Security Packages

- **DOMPurify:** XSS protection for HTML
- **Zod:** Input validation schemas
- **CSP:** Content Security Policy headers (vite.config.ts, App.tsx)

---

## Performance Metrics

### Bundle Performance

**Current:**
- Initial load: ~220kb gzipped (vendor)
- Code splitting: 3 chunks (vendor, ui, app)
- Tree shaking: Enabled (Vite)

**Targets:**
- LCP: < 2.5s (Largest Contentful Paint)
- FID: < 100ms (First Input Delay)
- CLS: < 0.1 (Cumulative Layout Shift)

**Monitoring:**
- Vercel Analytics (Core Web Vitals)
- Chrome DevTools (Performance tab)
- Lighthouse CI (planned)

---

## Future Additions (Planned)

### Testing Stack (Not Yet Implemented)

| Package | Version | Purpose |
|---------|---------|---------|
| vitest | TBD | Unit/integration tests |
| @testing-library/react | TBD | React component testing |
| playwright | TBD | E2E testing |

**Target Coverage:** 70%+ for critical paths

---

## Related Documentation

- **Coding Standards:** `docs/architecture/coding-standards.md`
- **Frontend Architecture:** `docs/architecture/frontend-architecture.md`
- **Animation Patterns:** `docs/architecture/animation-patterns.md`
- **Source Tree:** `docs/architecture/source-tree.md`
- **Complete Dependencies:** `package.json`

---

**Last Updated:** 2025-10-06
**Total Packages:** ~150 (including dev dependencies)
**Bundle Target:** < 900kb (current: 879kb ✅)
