# Development Guide
**Project:** cre8tive-website-1006
**Generated:** November 3, 2025
**For:** AI-Assisted Development & Onboarding

---

## Quick Start

### Prerequisites
- **Node.js:** ≥18.0.0 (recommended: 20.x LTS)
- **npm:** ≥9.0.0 (comes with Node)
- **Git:** Latest version

### Clone & Setup
```bash
git clone https://github.com/cre8tive-ai/cre8tive-website-1006.git
cd cre8tive-website-1006
npm install
```

### Development Server
```bash
npm run dev
# → Starts on http://localhost:8080
# → Hot module replacement enabled
# → TypeScript type checking in parallel
```

### Build & Preview
```bash
npm run build
# Runs TypeScript compiler check + Vite build
# Output: dist/

npm run preview
# Preview production build on http://localhost:4173
```

---

## Commands Reference

### Development
```bash
npm run dev          # Start dev server (port 8080)
npm run build        # Production build (tsc + vite build)
npm run build:dev    # Development build with source maps
npm run preview      # Preview production build (port 4173)
```

### Quality Checks
```bash
npm run lint         # ESLint check
# MUST: All errors pass
# OK: Warnings allowed
```

### Deployment
```bash
npm run predeploy    # Runs before deploy (npm run build)
npm run deploy       # Deploy to GitHub Pages (gh-pages -d dist)
```

### Performance Testing
```bash
npm run test:performance  # Run performance tests (tsx test/performance/run-tests.ts)
```

---

## Project Structure

### Key Directories

```
cre8tive-website-1006/
├── src/                    # Source code
│   ├── components/         # React components (24 subdirectories)
│   ├── pages/             # Page components (13 pages)
│   ├── hooks/             # Custom hooks (17 hooks)
│   ├── utils/             # Utility functions (7 modules)
│   ├── styles/            # Global CSS (base, animations, utilities)
│   └── types/             # TypeScript definitions
├── docs/                  # Documentation
│   ├── Deep-Research/     # GSAP mastery reference (24 docs)
│   ├── stories/           # Epic 1 story files
│   ├── tech-spec-*.md     # Technical specifications
│   └── *.md              # Various documentation
├── public/               # Static assets
├── .codex/              # Codex CLI knowledge base
├── bmad/                # BMAD agent system
└── [config files]       # tailwind.config.js, vite.config.ts, etc.
```

### Component Organization

**Feature-Based:**
- `components/briefing/` - Briefing Engine (27 components)
- `components/studios/` - Studios page (15 components)
- `components/agents/` - Agents page (8 components, disabled)
- `components/conversational/` - Conversational AI page (6 components)

**Device-Specific:**
- `components/desktop/` - Desktop-only components
- `components/mobile/` - Mobile-only components

**Shared:**
- `components/core/` - Critical reusables (VimeoPlayer, SEO)
- `components/shared/` - Cross-feature components
- `components/ui/` - shadcn/ui library (58 components)

---

## Development Workflow

### 1. Feature Development

**Branch Strategy:**
```bash
# Create feature branch
git checkout -b feature/epic-X-story-Y

# Make changes, commit regularly
git add .
git commit -m "feat: implement feature X"

# Push and create PR
git push -u origin feature/epic-X-story-Y
```

**Commit Message Convention:**
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `perf:` - Performance improvements
- `test:` - Test additions
- `chore:` - Build/config changes

### 2. Component Development

**Template:**
```typescript
// src/components/example/ExampleComponent.tsx
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ExampleComponentProps {
  title: string
  className?: string
}

export const ExampleComponent = ({ title, className }: ExampleComponentProps) => {
  // Component logic here

  return (
    <div className={cn("base-classes", className)}>
      <h2>{title}</h2>
    </div>
  )
}
```

**Best Practices:**
- **Max 500 LOC per file**
- **Max 50 lines per function**
- **TypeScript interfaces for all props**
- **cn() utility for className merging**
- **Semantic HTML (section, article, nav, etc.)**

### 3. GSAP Animation Development

**Standard Pattern:**
```typescript
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

export const AnimatedComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, containerRef)

    return () => ctx.revert() // Cleanup
  }, [prefersReducedMotion])

  return <div ref={containerRef}>Animated content</div>
}
```

**GSAP Best Practices:**
- Always use `gsap.context()` for automatic cleanup
- Check `prefersReducedMotion` before animating
- Use `containerRef` for GSAP context scoping
- Return cleanup function from useEffect
- Integrate with Lenis: Wait for `lenisReady` state (see BriefingEngine.tsx)

### 4. Adaptive Performance Integration

**Using Adaptive Config:**
```typescript
import { useState, useEffect } from "react"
import { detectDeviceCapabilities } from "@/utils/performance-adapter"
import { getAdaptiveConfig } from "@/utils/adaptive-config"
import type { AdaptiveAnimationConfig } from "@/utils/adaptive-config"

export const AdaptiveComponent = () => {
  const [config, setConfig] = useState<AdaptiveAnimationConfig>(() => {
    const capabilities = detectDeviceCapabilitiesSync()
    return getAdaptiveConfig(capabilities)
  })

  useEffect(() => {
    detectDeviceCapabilities().then((capabilities) => {
      setConfig(getAdaptiveConfig(capabilities))
    })
  }, [])

  return (
    <div>
      {config.enableParticles && (
        <ParticleSystem count={config.particleCount} />
      )}
      {/* Use config.timeScaleMultiplier for GSAP timelines */}
    </div>
  )
}
```

### 5. Testing Workflow

**Manual Testing Checklist:**
- [ ] Desktop Chrome (latest)
- [ ] Desktop Firefox (latest)
- [ ] Desktop Safari (latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)
- [ ] Tablet (iPad)

**Visual QA:**
- [ ] Design matches mockups
- [ ] Animations smooth (60fps target)
- [ ] Responsive breakpoints (375px, 768px, 1024px, 1440px, 1920px)
- [ ] Glass effects render correctly
- [ ] Gradient text displays properly

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] prefers-reduced-motion respected
- [ ] Contrast ratios meet WCAG AA

---

## Common Tasks

### Adding a New Page

**1. Create page component:**
```typescript
// src/pages/NewPage.tsx
import { Navigation } from "@/components/Navigation"
import { PageLayout } from "@/components/layouts/PageLayout"

export const NewPage = () => {
  return (
    <PageLayout>
      <Navigation />
      <div className="container mx-auto">
        <h1>New Page</h1>
      </div>
    </PageLayout>
  )
}
```

**2. Add route in App.tsx:**
```typescript
import { NewPage } from "./pages/NewPage"

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

**3. Add navigation link:**
```typescript
// In Navigation.tsx (desktop and mobile)
<Link to="/new-page">New Page</Link>
```

### Adding a New Component

**1. Create component file:**
```bash
# Follow naming convention: PascalCase.tsx
touch src/components/example/ExampleComponent.tsx
```

**2. Implement component:**
- Add TypeScript interface for props
- Implement component logic
- Add className prop for styling flexibility
- Export component

**3. Import and use:**
```typescript
import { ExampleComponent } from "@/components/example/ExampleComponent"

<ExampleComponent title="Hello" className="custom-class" />
```

### Adding a New Hook

**1. Create hook file:**
```bash
touch src/hooks/useExample.ts
```

**2. Implement hook:**
```typescript
// src/hooks/useExample.ts
import { useState, useEffect } from "react"

export const useExample = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    // Hook logic
  }, [])

  return { value, setValue }
}
```

**3. Use hook:**
```typescript
import { useExample } from "@/hooks/useExample"

const { value, setValue } = useExample("initial")
```

### Updating Styles

**Global Styles:**
```css
/* src/styles/base.css - Design tokens */
:root {
  --custom-color: hsl(221 83% 53%);
}
```

**Tailwind Config:**
```javascript
// tailwind.config.js
extend: {
  colors: {
    'custom': 'var(--custom-color)',
  },
}
```

**Component Styles:**
```typescript
// Use Tailwind classes with cn() utility
<div className={cn("bg-custom text-white", className)}>
```

---

## Debugging

### Common Issues

**Issue: GSAP animations not working**
```typescript
// Solution: Ensure ScrollTrigger registered
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// Solution: Check Lenis readiness
const lenisReady = useLenisReady()
// Wait for lenisReady before creating ScrollTriggers
```

**Issue: Performance degradation**
```typescript
// Solution: Check FPS monitoring
import { useFPSMonitor } from "@/hooks/usePerformance"

const { fps } = useFPSMonitor()
console.log("Current FPS:", fps) // Should be 55-60
```

**Issue: Styles not applying**
```bash
# Solution: Restart dev server (Tailwind JIT cache)
npm run dev
```

**Issue: TypeScript errors**
```bash
# Solution: Check tsconfig.json paths
# Ensure @/* alias is configured correctly
```

### Browser DevTools

**Performance Profiling:**
1. Open Chrome DevTools
2. Performance tab
3. Record interaction
4. Look for long tasks (>50ms red flags)
5. Check FPS meter (should be 60fps)

**Animation Debugging:**
```javascript
// In browser console
gsap.globalTimeline.timeScale(0.1) // Slow down all animations
ScrollTrigger.getAll() // List all ScrollTriggers
```

---

## Performance Optimization

### Bundle Size

**Check current size:**
```bash
npm run build
# Look for output in console:
# dist/assets/vendor.[hash].js - should be <900kb
```

**Analyze bundle:**
```bash
# Install analyzer
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer'

plugins: [
  visualizer({ open: true, gzipSize: true })
]
```

### Animation Performance

**GPU Optimization:**
```typescript
// Use GPU-accelerated properties only
gsap.to(element, {
  x: 100,        // ✅ transform: translateX
  y: 50,         // ✅ transform: translateY
  scale: 1.5,    // ✅ transform: scale
  opacity: 0,    // ✅ opacity
  rotation: 45,  // ✅ transform: rotate

  // Avoid:
  width: 200,    // ❌ Forces layout
  height: 200,   // ❌ Forces layout
  top: 100,      // ❌ Forces layout
})
```

**willChange Management:**
```typescript
// Apply at animation start
gsap.set(element, { willChange: "transform, opacity" })

// Clear after animation
onComplete: () => {
  gsap.set(element, { willChange: "auto" })
}
```

---

## Deployment

### GitHub Pages Deployment

**Manual Deploy:**
```bash
npm run deploy
# Builds and pushes to gh-pages branch
```

**Verify Deployment:**
```bash
# Visit: https://cre8tive.ai
# Or: https://[username].github.io/cre8tive-website-1006
```

### Custom Domain Setup

**1. Add CNAME file:**
```bash
# In public/ directory
echo "cre8tive.ai" > public/CNAME
```

**2. Configure DNS:**
```
Type: CNAME
Name: www
Value: [username].github.io

Type: A (apex domain)
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

---

## Documentation Reference

### Primary Documentation

**Current Implementation:**
- `docs/tech-spec-epic-1.md` - Briefing Engine specification (ACCURATE)
- `docs/stories/story-1.*.md` - Epic 1 stories (IMPLEMENTED)
- `docs/CURRENT-ARCHITECTURE.md` - This project's architecture (GENERATED Nov 3, 2025)

**Deep Research (Reference):**
- `docs/Deep-Research/GSAP-Animation-Mastery/` - 24 GSAP pattern documents
- Educational reference, not implementation plans
- Use for learning GSAP techniques

**Future Plans (NOT IMPLEMENTED):**
- `docs/tech-spec-epic-4.md` - 3D Solution Theater (Draft)
- `docs/tech-spec-epic-5.md` - Responsive Design (Draft)
- `docs/tech-spec-unified-voice-widget.md` - Voice Widget (Level 0)

### Code Documentation

**Inline Comments:**
```typescript
// Use comments to explain "why", not "what"

// Good:
// Reason: Prevents race condition with Lenis initialization
if (!lenisReady) return

// Bad:
// Check if lenis is ready
if (!lenisReady) return
```

**Component Documentation:**
```typescript
/**
 * WorkflowTransformation Component v2 - Premium Redesign
 *
 * Story 1.8 v2: DRAMATIC speed comparison with proportional timeline bars
 * - Hero stat: "60x FASTER" with animated counter (AC1)
 * - Proportional timeline comparison: 100% vs 15% width (AC2)
 *
 * @see docs/stories/story-1.8-v2-premium.md
 */
```

---

## Troubleshooting

### Build Errors

**Error: "Cannot find module '@/...'"**
```bash
# Check tsconfig.json paths configuration
# Restart TypeScript server in IDE
```

**Error: "vite: command not found"**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

**Error: "Performance budget exceeded"**
```bash
# Check vendor bundle size
npm run build
# Review bundle analyzer
# Remove unused dependencies
```

### Runtime Errors

**Error: "ScrollTrigger is not defined"**
```typescript
// Import and register plugin
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
```

**Error: "Cannot read property 'lenis' of undefined"**
```typescript
// Wait for Lenis readiness
const lenisReady = useLenisReady()
if (!lenisReady) return
```

---

## Best Practices Summary

### Code Quality
- ✅ All TypeScript errors resolved
- ✅ ESLint errors pass (warnings OK)
- ✅ Max 500 LOC per file
- ✅ TypeScript interfaces for all props
- ✅ Semantic HTML throughout

### Performance
- ✅ 60fps target for animations
- ✅ <900kb vendor bundle
- ✅ GPU-optimized transforms only
- ✅ willChange lifecycle management
- ✅ Lazy loading below-fold content

### Accessibility
- ✅ prefers-reduced-motion support
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ ARIA patterns
- ✅ Semantic HTML

### Git
- ✅ Feature branches
- ✅ Descriptive commit messages
- ✅ Regular commits (not large batches)
- ✅ Pull requests for review
- ✅ Never commit secrets (.env files)

---

## Getting Help

### Documentation
1. This guide (`docs/DEVELOPMENT-GUIDE.md`)
2. Architecture docs (`docs/CURRENT-ARCHITECTURE.md`)
3. Component catalog (`docs/component-catalog-exhaustive.md`)
4. Tech specs (`docs/tech-spec-*.md`)

### External Resources
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [GSAP Docs](https://greensock.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### Internal Knowledge Base
- `.codex/_MEMO.md` - Main knowledge base (59kb)
- `.codex/PLAN.md` - Current planning
- `.codex/REPORT.md` - Status reports

---

**Generated:** November 3, 2025 | **For:** AI-Assisted Development & Human Onboarding