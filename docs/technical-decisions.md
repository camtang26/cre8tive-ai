# Technical Decisions - AI Briefing Engine Page Redesign

**Document Type:** Technical Context & Architecture Decisions
**Created:** 2025-10-06 (extracted from v4 PRD)
**Status:** Active Development
**Related Documents:** [prd.md](prd/prd.md), [brownfield-analysis.md](brownfield-analysis.md), [ARCHITECTURE.md](ARCHITECTURE.md)

---

## Purpose

This document captures all technical decisions, alternatives considered, rationale, and risk assessments for the AI Briefing Engine Page Redesign project. Technical decisions extracted from v4 PRD and consolidated here to maintain single source of truth.

---

## Technology Stack Decisions

### Animation Framework: GSAP + Lenis (Approved)

**Decision:** Add GSAP 3.x with ScrollTrigger plugin and Lenis smooth scroll to existing Framer Motion stack

**Rationale:**
- **GSAP ScrollTrigger**: Best-in-class scroll-driven timelines for complex 15-second transformation animation
- **Lenis**: Premium smooth scroll experience (momentum-based, Apple-like feel)
- **Coexistence Strategy**: GSAP supplements Framer Motion (not replacement)
  - Framer Motion: Simple hover states, fade-ins, micro-interactions
  - GSAP: Complex scroll-driven timelines, pinning, orchestrated sequences

**Alternatives Considered:**
1. **Framer Motion only** (existing)
   - ❌ Rejected: Lacks scroll-driven timeline precision and pinning capabilities
   - ❌ Scroll-based animations require complex `useScroll` hooks, less performant

2. **PixiJS/WebGL** (high-performance 2D renderer)
   - ❌ Rejected: 400kb bundle size (6x heavier than GSAP + Lenis)
   - ❌ Overkill for particle effects achievable with Canvas API

3. **Three.js** (3D graphics)
   - ❌ Rejected: Existing Spline integration sufficient for 3D needs
   - ❌ Would add 600kb+ for minimal benefit

**Bundle Impact:**
- GSAP core + ScrollTrigger: ~66kb
- Lenis: ~7kb
- **Total: ~73kb** (within +100kb acceptable threshold)
- Current vendor bundle: 806kb → 879kb (< 900kb target ✓)

**Performance Target:**
- 60fps on modern devices (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+)
- GPU-accelerated transforms only (translate, scale, opacity)
- ScrollTrigger pinning disabled on mobile (< 768px) if performance drops below 30fps

**Integration Pattern:**
```typescript
// Page-level Lenis wrapper
import { ReactLenis } from 'lenis/react';

export function BriefingEngine() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {/* Page content */}
    </ReactLenis>
  );
}

// Component-level GSAP timeline
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BriefToStoryboardAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
      }
    });

    tl.from(".brief-form", { opacity: 0, y: 50, duration: 1 })
      .to(".brief-form", { scale: 0.8, opacity: 0.5, duration: 1 })
      .from(".storyboard-panels", { opacity: 0, stagger: 0.2 });
  });

  return (/* JSX */);
}
```

**Risk Assessment:**
- **Risk**: Lenis smooth scroll conflicts with React Router
  - Mitigation: Test route transitions thoroughly, disable Lenis on navigation if conflicts
  - Rollback: Remove Lenis, accept native scroll behavior

- **Risk**: GSAP type compilation errors
  - Mitigation: Use `@ts-ignore` sparingly, add GSAP types to tsconfig
  - Rollback: Remove type safety for GSAP code blocks if blocking build

**Status:** ✅ IMPLEMENTED (Story 1.1 complete, GSAP + Lenis installed and tested)

---

### Canvas Particle System: Native Canvas API (Approved)

**Decision:** Use native Canvas 2D API for AI processing particle animation (60-100 particles)

**Rationale:**
- Zero bundle overhead (browser native)
- Sufficient for simple particle physics (orbital motion, alpha fading)
- 60fps achievable with requestAnimationFrame optimization

**Alternatives Considered:**
1. **PixiJS** (2D WebGL renderer)
   - ❌ Rejected: 400kb bundle size for 100 particles is overkill
   - ✓ Would handle 10,000+ particles, but not needed

2. **Three.js Particles**
   - ❌ Rejected: 600kb+ for simple 2D effect
   - ❌ Adds complexity (3D scene setup, camera, lights)

**Implementation Strategy:**
```typescript
// Canvas particle physics (orbital motion)
class Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number;

  update(centerX: number, centerY: number) {
    // Centripetal force toward center
    const dx = centerX - this.x;
    const dy = centerY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    this.vx += (dx / distance) * 0.1; // Force magnitude
    this.vy += (dy / distance) * 0.1;

    // Random drift for organic feel
    this.vx += (Math.random() - 0.5) * 0.5;
    this.vy += (Math.random() - 0.5) * 0.5;

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Alpha fade based on distance
    this.alpha = 1 - (distance / 200); // Fade at edges
  }
}
```

**Performance Optimizations:**
- GPU acceleration: `will-change: transform` on canvas element
- Render loop: `requestAnimationFrame` (not `setInterval`)
- Mobile: Reduce particle count to 30 (< 768px)
- Graceful fallback: If FPS drops below 30, switch to static gradient glow

**Risk Assessment:**
- **Risk**: Canvas rendering blocks main thread on low-end devices
  - Mitigation: Monitor Chrome DevTools Performance tab, implement FPS detection
  - Rollback: Remove particles, show static gradient glow (CSS)

- **Risk**: Memory leaks from particles not destroyed on unmount
  - Mitigation: Component lifecycle cleanup, destroy particles on scroll out
  - Validation: Test scroll in/out 10 times, verify stable memory usage

**Status:** ✅ IMPLEMENTED (Story 1.6 complete, Canvas particles rendering at 60fps)

---

### Route Strategy: Preserve `/studios-engine` for SEO (Approved)

**Decision:** Keep existing `/studios-engine` route, rebrand to "AI Briefing Engine" in UI/navigation only

**Rationale:**
- **SEO Continuity**: Existing backlinks, Google indexing, LinkedIn ads point to `/studios-engine`
- **Zero Deployment Risk**: No need for 301 redirects (GitHub Pages has limited redirect support)
- **Brand Clarity**: "AI Briefing Engine" branding achieved through page content and navigation text

**Alternatives Considered:**
1. **Rename route to `/briefing-engine`**
   - ❌ Rejected: Breaks existing backlinks, loses SEO equity
   - ❌ GitHub Pages 301 redirects require custom `404.html` hack (brittle)

2. **Dual routes** (`/studios-engine` + `/briefing-engine`)
   - ❌ Rejected: Duplicate content penalty (Google penalizes identical pages)
   - ❌ Maintenance burden (two routes for same content)

**Implementation:**
```tsx
// src/pages/BriefingEngine.tsx (FILE NAME unchanged from StudiosEngine.tsx)
export function BriefingEngine() {
  return (
    <ReactLenis root>
      <SEO
        title="AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
        description="AI-powered briefing platform for agencies and brands..."
      />
      {/* Page content */}
    </ReactLenis>
  );
}

// Navigation.tsx (TEXT updated, route preserved)
<Link to="/studios-engine">AI Briefing Engine</Link>
```

**SEO Metadata Updated:**
- Title: "AI Briefing Engine | Transform Ideas to Storyboards in Minutes"
- Description: "AI-powered briefing platform for agencies and brands. Create professional storyboards with 8 visual styles."
- Open Graph tags: Updated to match new branding

**Risk Assessment:**
- **Risk**: Confusing route name `/studios-engine` for "Briefing Engine" page
  - Mitigation: Update all SEO meta tags, monitor analytics for bounce rate
  - Future option: Change route after 6 months once new branding established

**Status:** ✅ IMPLEMENTED (Route preserved, SEO metadata updated in Story 1.10)

---

## Compatibility Requirements

### Existing Component Library Compatibility

**Requirement:** New briefing components MUST follow established Shadcn/UI and custom component patterns

**Compatibility Matrix:**

| Pattern | Source Reference | Briefing Engine Usage |
|---------|------------------|----------------------|
| Glassmorphism | CinemaCard, FilmStripDivider | BenefitCard, StoryboardDivider |
| Magnetic buttons | ContactCTA | BriefingCTA |
| Card elevation | Studios page cards | StyleCard, ProcessStepCard |
| Film strip aesthetic | FilmStripDivider | StoryboardDivider borders |

**Integration Validation:**
- ✅ BenefitCard uses `backdrop-filter: blur(20px)` (glassmorphism pattern)
- ✅ StyleCard hover: `scale 1.05, duration 200ms` (Framer Motion consistency)
- ✅ StoryboardDivider: Film strip perforations match Studios FilmStripDivider

**Status:** ✅ VALIDATED (All new components follow existing patterns)

---

### Tailwind CSS System Compatibility

**Requirement:** All new styles MUST use existing Tailwind configuration without adding custom colors

**Color Palette Strategy:**
- Dark indigo/cyan/fuchsia defined via **inline Tailwind utilities** (NOT custom Tailwind config)
- Rationale: Prevents config bloat, scopes colors to Briefing Engine page only

**Implementation:**
```typescript
// src/components/briefing/briefingColors.ts
export const briefingColors = {
  indigo: {
    from: "#6366F1",    // Indigo-500 (gradient start)
    DEFAULT: "#4F46E5", // Indigo-600 (primary)
    to: "#4338CA"       // Indigo-700 (gradient end)
  },
  cyan: {
    from: "#06B6D4",    // Cyan-500
    DEFAULT: "#0891B2", // Cyan-600
    to: "#0E7490"       // Cyan-700
  },
  fuchsia: {
    from: "#D946EF",    // Fuchsia-500
    DEFAULT: "#C026D3", // Fuchsia-600
    to: "#A21CAF"       // Fuchsia-700
  },
  // ... holographic accents
};

// Usage in components (inline styles, not Tailwind config)
<div style={{ background: `linear-gradient(to right, ${briefingColors.indigo.from}, ${briefingColors.fuchsia.DEFAULT})` }}>
```

**Tailwind Utilities Preserved:**
- Typography: `text-7xl font-black tracking-tighter leading-none` (site-wide)
- Spacing: `py-24 px-6` (desktop), `py-16 px-4` (mobile)
- Breakpoints: `md:`, `lg:`, `xl:` (existing breakpoint logic)

**Status:** ✅ IMPLEMENTED (Colors scoped to briefingColors.ts, no Tailwind config changes)

---

### React Router Compatibility

**Requirement:** Route structure MUST preserve `/studios-engine` path, maintain existing Link components

**Integration Points:**
- Navigation.tsx: Link text updated to "AI Briefing Engine" (route unchanged)
- App routing: No changes to `<Route path="/studios-engine" element={<BriefingEngine />} />`
- React Router v6.26.2: No version upgrade required

**Testing Checklist:**
- ✅ Direct navigation to `/studios-engine` loads correctly
- ✅ Link click from Homepage → Briefing Engine smooth transition
- ✅ Browser back button works (no scroll jump)
- ✅ Lenis smooth scroll persists across route changes

**Status:** ✅ VALIDATED (All existing site pages navigate correctly)

---

### Build System Compatibility

**Requirement:** GSAP + Lenis integration MUST NOT require Vite configuration changes

**Build Configuration:**
- Vite 5.4.1: No version upgrade required
- Code splitting: Automatic via Vite dynamic imports (`React.lazy`)
- TypeScript: Relaxed mode maintained (noImplicitAny: false)
- ESLint: Errors block build, warnings ok

**Bundle Analysis:**
```bash
npm run build -- --mode=analyze  # Monitor bundle size
```

**Chunk Distribution:**
- Vendor chunk: 806kb → 879kb (+73kb GSAP/Lenis) ✓
- UI chunk: Unchanged
- Total: < 1MB target maintained

**Status:** ✅ VALIDATED (Production build succeeds, no Vite config changes)

---

### Responsive Design System Compatibility

**Requirement:** Breakpoint behavior MUST match existing mobile-first responsive patterns

**Breakpoint Matrix:**

| Breakpoint | Existing Pattern | Briefing Engine Behavior |
|------------|------------------|-------------------------|
| 375px (mobile) | 1 column layout | Visual Styles Gallery: 1 column, GSAP pinning disabled |
| 768px (tablet) | 2 column layout | Visual Styles Gallery: 2×2 grid |
| 1024px (desktop) | 3+ column layout | Visual Styles Gallery: 3×3 grid |
| 1920px (wide) | Max-width container | `max-w-7xl mx-auto` preserved |

**Mobile Optimizations:**
- GSAP ScrollTrigger pinning: **Disabled on < 768px** (no janky pinned sections)
- Canvas particles: **Reduced to 30 particles** on mobile (performance)
- Lenis smooth scroll: `smoothTouch: true` (mobile touch gestures)

**Status:** ✅ IMPLEMENTED (All breakpoints tested in Chrome DevTools Device Mode)

---

### Animation Framework Compatibility

**Requirement:** GSAP MUST coexist with existing Framer Motion library without conflicts

**Coexistence Strategy:**

| Use Case | Library | Rationale |
|----------|---------|-----------|
| Simple hover states | Framer Motion | Existing pattern, React-idiomatic |
| Fade-in scroll reveals | Framer Motion | FadeIn wrapper component |
| Complex scroll timelines | GSAP ScrollTrigger | Best-in-class precision |
| Pinned scroll sections | GSAP ScrollTrigger | Framer Motion lacks pinning |

**Conflict Prevention:**
- **No overlap**: Framer Motion and GSAP target different elements (no double-animation)
- **Cleanup**: Both libraries use proper React cleanup (useEffect return, gsap.context())

**Testing Validation:**
- ✅ Homepage Framer Motion animations: Still working
- ✅ Studios page hover states: No conflicts
- ✅ Briefing Engine GSAP timelines: Render correctly
- ✅ No console warnings about conflicting animations

**Status:** ✅ VALIDATED (Both libraries coexist peacefully)

---

## Integration Approach

### Asset Loading Strategy

**Lazy-Loading Implementation:**

```typescript
// Visual Styles Gallery (below fold)
import { useInView } from 'react-intersection-observer';

function VisualStylesGallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref}>
      {inView && styles.map(style => (
        <img
          key={style.id}
          src={style.image}
          loading="lazy"
          alt={style.altText}
        />
      ))}
    </section>
  );
}
```

**Asset Inventory:**
- Visual styles: 9 webp images (2.2MB) → Lazy-load via Intersection Observer
- Storyboard frames: 7 webp images (1.7MB)
  - Preload: Frame1-3 (critical for initial animation)
  - Lazy-load: Frame4-6 (below fold)
- Particle Canvas: Render on scroll reveal, destroy on scroll out

**Performance Budget:**
- Initial bundle: < 900kb (879kb ✓)
- Image assets: < 4MB total (3.9MB ✓)
- Lighthouse Performance: 80+ (acceptable trade-off from 85-90)

**Status:** ✅ IMPLEMENTED (Lazy-loading reduces initial page load by ~2MB)

---

### Testing Integration Strategy

**Current Reality:** Zero tests exist (documented technical debt in ARCHITECTURE.md)

**Manual Validation Required:**

| Test Type | Tools | Coverage |
|-----------|-------|----------|
| Browser compatibility | Chrome, Firefox, Safari, Edge (latest) | All 4 browsers |
| Device testing | iPhone 12+, Android flagship, desktop 1920px, tablet 768px | 4 devices |
| Visual QA | Chrome DevTools screenshots | 6 sections |
| Accessibility | axe DevTools scan, keyboard navigation | WCAG AA |
| Performance | Chrome DevTools Performance tab | 60fps target |

**Future Testing (Post-Infrastructure):**
- **Vitest + React Testing Library**: Unit/component tests
- **Playwright**: E2E critical paths
- **Percy/Chromatic**: Visual regression

**Status:** 🔄 IN PROGRESS (Manual validation ongoing, automated tests planned)

---

## Deployment and Operations

### Build Process Integration

**Existing Build Command:**
```bash
npm run build  # TypeScript check + Vite build
```

**No Build Changes Required:**
- GSAP/Lenis: Client-side libraries, no build config changes
- Assets: Copy to `public/briefing-engine/` (already done in Phase 1)
- Code splitting: Automatic via Vite dynamic imports

**Bundle Analysis:**
```bash
npm run build -- --mode=analyze  # Optional: Inspect bundle composition
```

**Status:** ✅ VALIDATED (Production build succeeds with no config changes)

---

### Deployment Strategy

**Automated (GitHub Actions):**
```yaml
# .github/workflows/deploy.yml (existing, no changes)
- Push to master → Trigger workflow
- npm install → npm run build → Deploy to gh-pages branch
- GitHub Pages serves from gh-pages
- Live at https://cre8tive.ai
```

**Manual (Emergency):**
```bash
npm run build
npm run deploy  # Deploys to gh-pages
```

**Rollback Plan:**
1. Revert last commit: `git revert HEAD && git push`
2. Emergency deploy: `git checkout master~1 && npm run deploy`
3. Hotfix branch: `git checkout -b hotfix/briefing-revert`

**Status:** ✅ VALIDATED (GitHub Actions workflow unchanged, deployment tested)

---

### Monitoring and Logging

**Analytics:**
- **Vercel Analytics**: Page views, performance metrics
- **Google Tag Manager**: CTA clicks, scroll depth, gallery interactions

**Performance Monitoring:**
- **Lighthouse CI**: Performance score tracking (target 80+)
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Error Tracking:**
- Browser console errors (manual QA)
- No Sentry/error service configured (future consideration)

**Event Tracking Plan:**
```javascript
// Google Tag Manager events
gtm.push({ event: 'cta_click', cta_location: 'hero', cta_text: 'Book a Demo' });
gtm.push({ event: 'gallery_interaction', style_name: 'Cinematic' });
gtm.push({ event: 'scroll_depth', depth_percentage: 75 });
```

**Status:** 🔄 IN PROGRESS (Analytics tracking configured, events pending GTM implementation)

---

## Risk Assessment and Mitigation

### Technical Risks

**Risk 1: GSAP Bundle Size Impact**
- **Impact**: +66kb could slow initial page load
- **Likelihood**: Medium
- **Mitigation**: Code split BriefingEngine page, lazy-load GSAP components
- **Rollback**: Remove GSAP, fall back to Framer Motion timelines
- **Status**: ✅ MITIGATED (Bundle 879kb < 900kb target)

**Risk 2: Canvas Particle Performance on Low-End Devices**
- **Impact**: < 30fps on older devices, janky experience
- **Likelihood**: Medium
- **Mitigation**: Detect device capability, show static gradient fallback if FPS drops
- **Rollback**: Remove particles entirely, use CSS gradient glow
- **Status**: ✅ MITIGATED (Particle count reduced to 30 on mobile, fallback implemented)

**Risk 3: ScrollTrigger Pinning Jank on Mobile**
- **Impact**: Scroll stuttering on touch devices
- **Likelihood**: High (mobile performance varies widely)
- **Mitigation**: Disable pinning on < 768px, use simple scroll reveals
- **Rollback**: Remove ScrollTrigger, use Intersection Observer
- **Status**: ✅ MITIGATED (Pinning disabled on mobile per NFR8)

---

### Integration Risks

**Risk 1: Lenis Smooth Scroll Conflicts with React Router**
- **Impact**: Route changes break smooth scroll wrapper
- **Likelihood**: Low (Lenis designed for SPAs)
- **Mitigation**: Test route transitions thoroughly, disable Lenis on navigation if conflicts
- **Rollback**: Remove Lenis, accept native scroll behavior
- **Status**: ✅ VALIDATED (No conflicts detected during testing)

**Risk 2: Asset Loading Delays (3.9MB Total Images)**
- **Impact**: Slow page load on 3G connections
- **Likelihood**: Medium (mobile users on slow networks)
- **Mitigation**: Lazy-load below-fold images, use blur placeholders, WebP optimization
- **Rollback**: Reduce image quality, remove some storyboard frames
- **Status**: ✅ MITIGATED (Lazy-loading reduces initial load by ~2MB)

**Risk 3: TypeScript Compilation Errors from GSAP Types**
- **Impact**: Build fails due to type mismatches
- **Likelihood**: Low (GSAP provides TypeScript definitions)
- **Mitigation**: Use `@ts-ignore` sparingly, add GSAP types to tsconfig
- **Rollback**: Remove type safety for GSAP code blocks if blocking
- **Status**: ✅ RESOLVED (No type errors encountered)

---

### Deployment Risks

**Risk 1: Production Build Failure Due to Large Bundle**
- **Impact**: Deploy blocked, site down
- **Likelihood**: Low (bundle within limits)
- **Mitigation**: Test build locally before push, monitor bundle warnings (1000kb threshold)
- **Rollback**: Revert commit, deploy previous working build
- **Status**: ✅ MITIGATED (Production build tested and passing)

**Risk 2: SEO Impact from Route Preservation**
- **Impact**: Confusing route name (`/studios-engine` for Briefing Engine)
- **Likelihood**: Low (SEO metadata updated)
- **Mitigation**: Update SEO meta tags to clarify, monitor analytics for bounce rate
- **Rollback**: Change route to `/briefing-engine`, set up 301 redirect in GitHub Pages (limited)
- **Status**: ✅ ACCEPTED (Route preserved for SEO continuity, metadata updated)

**Risk 3: Browser Compatibility Issues (Modern APIs)**
- **Impact**: Broken experience on older browsers
- **Likelihood**: Low (targets Chrome 100+, Firefox 100+, Safari 15+, Edge 100+)
- **Mitigation**: Test on target browsers, show warning on older versions
- **Rollback**: Simplify animations, remove Canvas features
- **Status**: ✅ VALIDATED (All target browsers tested)

---

## Performance Budgets

### Bundle Size Budget
- **Initial bundle:** < 900kb (current 806kb + 73kb = **879kb ✓**)
- **Image assets:** < 4MB total (**3.9MB ✓**)

### Performance Metrics
- **Animation frame rate:** 60fps target, 30fps minimum acceptable
- **Lighthouse Performance:** 80+ (**acceptable trade-off** from 85-90)
- **Core Web Vitals:**
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

### Testing Strategy
- Manual QA: 3 browsers × 2 devices (desktop/mobile) = **6 test combinations**
- Lighthouse audit: Performance 80+, Accessibility 90+, Best Practices 90+
- Visual regression: Screenshots before/after for each section

---

## Configuration Management

### Environment Variables
N/A - Static site, no secrets

### Feature Flags
N/A - No feature flag system

### Config Files
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Theme configuration (no changes for Briefing Engine)
- `tsconfig.json` - TypeScript configuration (relaxed mode maintained)

---

---

## AD-003: Remove All WCAG Accessibility Implementations (2025-10-08)

**Context:**

Cre8tive AI is a visual creative studio website showcasing animation capabilities and premium design execution. Multiple components contain WCAG compliance implementations that conflict with the brand's visual-first identity:

- `prefers-reduced-motion` media query checks with fallback states
- Reduced-motion alternative rendering paths
- ARIA labels and semantic HTML attributes beyond basic structure
- Accessibility-focused conditional logic in animation components

**Decision:** Remove ALL WCAG/accessibility implementations across the entire website.

**Rationale:**

1. **Brand Identity:** Visual impact and bold animations ARE the core product demonstration
2. **Industry Alignment:** Creative tools and agency websites (Figma, After Effects, Awwwards winners, luxury brands) prioritize visual experience over WCAG compliance as industry standard
3. **Target Audience:** Professional agencies and creative brands expect high-impact visuals without compromises
4. **Code Simplification:** Removes conditional logic, reduces bundle size, eliminates fallback state management
5. **Business Decision:** Product owner (Cameron) explicitly accepts responsibility for this architectural choice

**Implications:**

**Positive:**
- ✅ Simpler component logic (no motion preference conditionals)
- ✅ Consistent animation experience for all users
- ✅ Reduced bundle size (remove unused fallback code paths)
- ✅ Faster development (no accessibility testing overhead)
- ✅ Aligned with creative industry standards

**Negative:**
- ⚠️ Non-compliant with WCAG 2.1 AA/AAA standards
- ⚠️ May exclude users with vestibular disorders, photosensitivity, or motion sensitivities
- ⚠️ Inaccessible to some keyboard-only users
- ⚠️ Not suitable for government/education contracts requiring accessibility

**Implementation Scope:**

**Immediate (Story 1.7 - BriefToStoryboardAnimation):**
- Remove `prefers-reduced-motion` checks and fallback rendering
- Remove reduced-motion state management
- Simplify animation initialization (no motion detection)

**Future (Incremental with Stories 1.8+):**
- Audit and remove ARIA labels conflicting with visual design
- Remove keyboard navigation enhancements beyond browser defaults
- Simplify focus management (rely on browser defaults)

**Search Targets for Removal:**
```bash
# Find motion preferences
rg "prefers-reduced-motion" --type tsx

# Find ARIA attributes
rg "aria-" --type tsx

# Find role attributes (review case-by-case)
rg 'role=' --type tsx
```

**Alternatives Considered:**

1. **Selective WCAG Compliance** (AA for some, AAA for critical)
   - ❌ Rejected: Adds complexity, inconsistent user experience
   - ❌ Still requires maintenance of dual code paths

2. **ARIA Labels Only** (keep semantic, remove motion preferences)
   - ❌ Rejected: Half-measure doesn't achieve code simplification goals
   - ❌ Creates false expectation of accessibility without full commitment

3. **Document as "Not Compliant"** (keep code, add disclaimer)
   - ❌ Rejected: Maintains unnecessary code complexity
   - ❌ Doesn't achieve bundle size or development speed benefits

**Rollback Plan:**

If business requirements change (e.g., government contract, legal requirement):
1. Revert this decision (documented commit)
2. Restore `prefers-reduced-motion` implementations from git history
3. Add WCAG audit to Definition of Done
4. Allocate 20-30% dev time overhead for accessibility testing

**References:**
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Motion preferences API: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- Creative industry accessibility stance: Industry norm prioritizes visual impact

**Status:** ✅ APPROVED by Product Owner (Cameron)
**Decision Date:** 2025-10-08
**Scope:** Global - affects all components, current and future
**Related Stories:** 1.7 (BriefToStoryboardAnimation), 1.8+ (all future animation components)
**Related Docs:** See [ARCHITECTURE.md](ARCHITECTURE.md#visual-first-philosophy)

---

## Change Log

| Date | Decision | Rationale | Status |
|------|----------|-----------|--------|
| 2025-10-05 | Rejected bright purple/green palette | User feedback: too bright, not cyberpunk | ✅ Implemented dark indigo/cyan/fuchsia |
| 2025-10-05 | Rejected PixiJS for particles | 400kb bundle too heavy | ✅ Used Canvas API instead |
| 2025-10-06 | Approved GSAP + Lenis | Best-in-class scroll timelines + premium feel | ✅ Installed and tested |
| 2025-10-06 | Preserved `/studios-engine` route | SEO continuity, avoid 301 redirects | ✅ Route unchanged |
| 2025-10-07 | Disabled GSAP pinning on mobile | Performance < 30fps on some devices | ✅ Implemented NFR8 |
| 2025-10-08 | Removed all WCAG implementations | Visual-first brand identity, industry standard for creative tools | ✅ Approved (see AD-003) |

---

_This document consolidates all technical context from v4 PRD. For product requirements, see [prd.md](prd/prd.md). For current system state, see [brownfield-analysis.md](brownfield-analysis.md). For visual design specifications, see [architecture/design-system.md](architecture/design-system.md)._
