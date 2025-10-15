# Frontend Architecture

**Last Updated:** 2025-10-06
**Project:** Cre8tive AI Marketing Website
**Type:** React SPA (Static Site)

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Design Patterns](#component-design-patterns)
3. [Animation Architecture](#animation-architecture)
4. [State Management](#state-management)
5. [Routing & Navigation](#routing--navigation)
6. [Styling System](#styling-system)
7. [Accessibility Standards](#accessibility-standards)
8. [Performance Optimization](#performance-optimization)
9. [Type Safety](#type-safety)
10. [File Organization](#file-organization)

---

## Architecture Overview

### Pattern: JAMstack (JavaScript, APIs, Markup)

```
┌─────────────────────────────────────────────────────────────┐
│                    React SPA Architecture                    │
├─────────────────────────────────────────────────────────────┤
│  React 18.3.1      │ UI Layer (Components + Hooks)          │
│  + React Router    │ Client-side routing                    │
├─────────────────────────────────────────────────────────────┤
│  State Management  │ React Query (server state)             │
│                    │ React Hooks (local state)              │
├─────────────────────────────────────────────────────────────┤
│  Styling           │ Tailwind CSS 3.4.11                    │
│                    │ Shadcn/UI (Radix primitives + CVA)     │
├─────────────────────────────────────────────────────────────┤
│  Animation         │ GSAP + ScrollTrigger (scroll-driven)   │
│                    │ Lenis (smooth scroll foundation)       │
│                    │ Framer Motion (micro-interactions)     │
├─────────────────────────────────────────────────────────────┤
│  Build & Deploy    │ Vite 5.4.1 → GitHub Pages              │
│                    │ react-snap (pre-rendering for SEO)     │
└─────────────────────────────────────────────────────────────┘
```

**Key Characteristics:**
- No backend/database (static site)
- Third-party APIs for dynamic features (getform.io, Cal.com)
- Pre-rendered HTML for SEO (react-snap)
- Deployed to GitHub Pages CDN

---

## Component Design Patterns

### Component Template (Standard Pattern)

**All components should follow this structure:**

```typescript
// src/components/briefing/StyleCard.tsx
import { useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * StyleCard - Visual style showcase card for Briefing Engine
 *
 * @param title - Style name (e.g., "Minimalistic", "Bold & Vibrant")
 * @param description - Style description
 * @param imageSrc - Path to style preview image
 * @param className - Additional Tailwind classes
 * @param animationDelay - GSAP stagger delay (optional)
 *
 * @note
 * - Uses semantic <article> tag for SEO
 * - Includes alt text for image (SEO)
 * - ~~Keyboard-focusable, prefers-reduced-motion~~ (REMOVED per AD-003)
 */
export interface StyleCardProps {
  title: string
  description: string
  imageSrc: string
  className?: string
  animationDelay?: number
}

export function StyleCard({
  title,
  description,
  imageSrc,
  className,
  animationDelay = 0
}: StyleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <article
      ref={cardRef}
      className={cn(
        'style-card group relative overflow-hidden rounded-lg',
        'bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10',
        'border border-indigo-500/20',
        'transition-transform duration-300',
        'hover:scale-105 hover:border-cyan-400/50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
        className
      )}
      tabIndex={0}
      role="button"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={`${title} visual style example`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-indigo-100">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
    </article>
  )
}
```

**Component Template Checklist:**
- ✅ TypeScript interface for props (exported)
- ✅ JSDoc comment with description
- ✅ Semantic HTML tags (`<article>`, `<section>`, `<nav>`) for SEO
- ✅ `cn()` utility for className merging
- ✅ Responsive classes (Tailwind breakpoints)
- ✅ Loading strategy (`loading="lazy"` for images)
- ~~Accessibility attributes, focus management~~ (REMOVED per AD-003)

---

### Component Categories

#### 1. UI Primitives (src/components/ui/)

**Purpose:** Shadcn/UI base components (buttons, inputs, dialogs)

**Pattern:** Radix UI primitives + CVA variants + forwardRef

```typescript
// src/components/ui/button.tsx (existing pattern)
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-indigo-600 text-white hover:bg-indigo-700',
        outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
        ghost: 'hover:bg-indigo-50 hover:text-indigo-900',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

**Key Patterns:**
- CVA for variant-based styling
- `forwardRef` for ref forwarding
- `asChild` prop for polymorphic components
- Export both component and variants

---

#### 2. Feature Components (src/components/briefing/, /studios/, /agents/)

**Purpose:** Business logic components (Briefing Engine, Studios, Agents pages)

**Pattern:** Composition of UI primitives + custom logic

```typescript
// src/components/briefing/VisualStylesGallery.tsx
import { useEffect, useRef } from 'react'
import { StyleCard } from './StyleCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VISUAL_STYLES = [
  {
    title: 'Minimalistic',
    description: 'Clean lines, subtle elegance, maximum impact.',
    imageSrc: '/briefing-engine/visual-styles/minimalistic.jpg',
  },
  // ... 7 more styles
]

export function VisualStylesGallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.style-card', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-20 px-6"
      aria-labelledby="visual-styles-heading"
    >
      <h2 id="visual-styles-heading" className="text-3xl font-bold text-center mb-12">
        Visual Styles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {VISUAL_STYLES.map((style, index) => (
          <StyleCard key={style.title} {...style} animationDelay={index * 0.15} />
        ))}
      </div>
    </section>
  )
}
```

**Key Patterns:**
- Data defined as constants (top of file)
- Container ref for GSAP context scoping
- `aria-labelledby` for section headings
- Responsive grid (Tailwind breakpoints)

---

#### 3. Page Components (src/pages/)

**Purpose:** Route-level components that orchestrate features

**Pattern:** Layout + feature composition + SEO

```typescript
// src/pages/BriefingEngine.tsx
import { Helmet } from 'react-helmet'
import { BriefingHero } from '@/components/briefing/BriefingHero'
import { VisualStylesGallery } from '@/components/briefing/VisualStylesGallery'
import { BriefingProcessFlow } from '@/components/briefing/BriefingProcessFlow'
import { BriefingCTA } from '@/components/briefing/BriefingCTA'

export function BriefingEngine() {
  return (
    <>
      <Helmet>
        <title>AI Briefing Engine - Cre8tive AI</title>
        <meta
          name="description"
          content="Transform brand briefs into production-ready storyboards with AI. Define style, process, and review in minutes."
        />
        <meta property="og:title" content="AI Briefing Engine - Cre8tive AI" />
        <meta property="og:description" content="Transform brand briefs into production-ready storyboards with AI." />
        <meta property="og:image" content="/briefing-engine/og-image.jpg" />
      </Helmet>

      <main className="bg-black min-h-screen">
        <BriefingHero />
        <VisualStylesGallery />
        <BriefingProcessFlow />
        <BriefingCTA />
      </main>
    </>
  )
}
```

**Page Component Checklist:**
- ✅ `<Helmet>` for SEO meta tags
- ✅ `<main>` semantic wrapper
- ✅ Feature components composed in order
- ✅ No business logic (orchestration only)

---

## Animation Architecture

**See:** [animation-patterns.md](./animation-patterns.md) for complete documentation.

### Quick Reference

**Library Responsibilities:**

| Library | Use Case | Example |
|---------|----------|---------|
| **GSAP + ScrollTrigger** | Scroll-linked timelines, parallax, pinning | Visual Styles Gallery stagger reveal |
| **Lenis** | Smooth scroll foundation (global) | App-level smooth scrolling |
| **Framer Motion** | Hover, tap, simple reveals | Magnetic button, card hover |

**Critical Rules:**
1. ✅ Use `gsap.context()` with cleanup in `useEffect`
2. ✅ Never nest ScrollTriggers inside timeline tweens
3. ✅ Animate `transform` and `opacity` only (GPU acceleration)
4. ~~Support `prefers-reduced-motion`~~ (REMOVED per AD-003)

**Example Hook:**

```typescript
// src/hooks/useScrollTriggerAnimation.ts
import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function useScrollTriggerAnimation(
  containerRef: RefObject<HTMLElement>,
  animationFn: () => void
) {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(animationFn, containerRef)
    return () => ctx.revert()
  }, [prefersReducedMotion, containerRef, animationFn])
}
```

---

## State Management

### Local State: React Hooks

**Pattern:** `useState` + `useReducer` for component-level state

```typescript
// Simple state
const [isOpen, setIsOpen] = useState(false)

// Complex state (form, multi-field)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
})
```

---

### Server State: React Query

**Pattern:** Fetch external data (future API calls)

```typescript
// src/hooks/useProjectData.ts
import { useQuery } from '@tanstack/react-query'

export function useProjectData() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects')
      return res.json()
    },
    staleTime: 5 * 60 * 1000,  // 5 minutes
  })
}
```

**Current Usage:** Not actively used (static site), but configured for future API integration.

---

### Form State: React Hook Form + Zod

**Pattern:** Forms with validation

```typescript
// src/components/ContactForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // POST to getform.io
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      {/* ... */}
    </form>
  )
}
```

---

## Routing & Navigation

### React Router Setup

```typescript
// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Index } from './pages/Index'
import { BriefingEngine } from './pages/BriefingEngine'
import { Studios } from './pages/Studios'

const router = createBrowserRouter([
  { path: '/', element: <Index /> },
  { path: '/briefing-engine', element: <BriefingEngine /> },
  { path: '/studios', element: <Studios /> },
  // ... more routes
])

export function App() {
  return <RouterProvider router={router} />
}
```

**GitHub Pages SPA Routing:**

```typescript
// Handle GitHub Pages redirect (from 404.html)
useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const redirect = params.get('p')
  if (redirect) {
    window.history.replaceState({}, '', `/${redirect}`)
  }
}, [])
```

---

## Styling System

### Tailwind CSS + Shadcn/UI

**Philosophy:** Utility-first with component variants.

**Color Palette (Briefing Engine):**

```typescript
// src/components/briefing/palette.ts
// BRIEFING ENGINE ONLY - DO NOT use Studios or Homepage colors
export const briefingPalette = {
  // Primary gradients (black-first)
  gradients: {
    heroBg: 'bg-gradient-to-br from-black via-indigo-950 to-black',
    cardBg: 'bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10',
  },

  // Accent colors
  indigo: '#4F46E5',
  cyan: '#0891B2',
  fuchsia: '#C026D3',
  orange: '#EA580C',  // CTA accent

  // Holographic glows
  holographic: {
    indigo: '#818CF8',
    cyan: '#22D3EE',
    green: '#34D399',
  },

  // Typography
  text: {
    primary: '#E0E7FF',     // Indigo-100
    secondary: '#9CA3AF',   // Gray-400
    muted: '#6B7280',       // Gray-500
  },
}
```

**Usage:**

```typescript
import { briefingPalette } from './palette'

<div className={briefingPalette.gradients.heroBg}>
  <h1 style={{ color: briefingPalette.text.primary }}>Hero Title</h1>
</div>
```

**Why Separate Palette File:**
- Prevents color drift (copying Studios colors)
- Single source of truth for Briefing Engine theme
- Easy to reference in AI-generated components

---

### Responsive Design

**Breakpoints (Tailwind defaults):**

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

**Pattern:** Mobile-first (no prefix = mobile, `md:` = tablet+)

```typescript
<div className="
  grid grid-cols-1        // Mobile: 1 column
  md:grid-cols-2          // Tablet: 2 columns
  lg:grid-cols-4          // Desktop: 4 columns
  gap-4 md:gap-6 lg:gap-8 // Responsive gaps
">
```

---

## ~~Accessibility Standards~~ DEPRECATED

> **⚠️ DEPRECATED (2025-10-08):** WCAG compliance requirements REMOVED per Technical Decision **[AD-003](../technical-decisions.md#ad-003-remove-all-wcag-accessibility-implementations-2025-10-08)**.
>
> **DO NOT implement** accessibility features beyond semantic HTML for SEO purposes.
>
> **Reference:** See [design-system.md](./design-system.md#visual-first-principle) for Visual-First Philosophy

<details>
<summary>Historical Requirements (Reference Only - No Longer Applicable)</summary>

### WCAG AA Compliance (DEPRECATED - Do Not Implement)

**Requirements (NO LONGER APPLICABLE):**
- ~~Color contrast ≥ 4.5:1~~
- ~~Keyboard navigation enhancements~~
- ~~ARIA labels beyond basic semantic HTML~~
- ~~Focus indicators (beyond browser defaults)~~
- ~~`prefers-reduced-motion` support~~

</details>

---

### Semantic HTML

**Pattern:** Use correct HTML tags for structure.

```typescript
// ✅ CORRECT
<article>
  <header>
    <h2>Article Title</h2>
    <time datetime="2025-10-06">October 6, 2025</time>
  </header>
  <p>Article content...</p>
</article>

// ❌ WRONG
<div>
  <div>Article Title</div>
  <div>October 6, 2025</div>
  <div>Article content...</div>
</div>
```

---

### ARIA Patterns

**Interactive Elements:**

```typescript
// Button (non-semantic element)
<div
  role="button"
  tabIndex={0}
  aria-label="Close modal"
  onClick={handleClose}
  onKeyDown={(e) => e.key === 'Enter' && handleClose()}
>
  Close
</div>

// Navigation
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
  </ul>
</nav>

// Section with heading
<section aria-labelledby="visual-styles-heading">
  <h2 id="visual-styles-heading">Visual Styles</h2>
</section>
```

---

### Keyboard Navigation

**Focus Management:**

```css
/* Tailwind focus-visible utilities */
.focusable-element {
  @apply focus-visible:outline-none
         focus-visible:ring-2
         focus-visible:ring-cyan-400
         focus-visible:ring-offset-2
         focus-visible:ring-offset-black;
}
```

**Skip Links:**

```typescript
// src/components/layout/SkipToContent.tsx
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan-500 focus:text-black focus:px-4 focus:py-2 focus:rounded"
    >
      Skip to main content
    </a>
  )
}
```

---

## Performance Optimization

### Code Splitting

**Vite Config (Existing):**

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-query'],
          ui: ['@radix-ui/react-*'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,  // 1000kb warning
  },
})
```

**Result:** Parallel loading of vendor, ui, and app chunks.

---

### Image Optimization

**Pattern:** Lazy loading + responsive images

```typescript
<img
  src="/briefing-engine/visual-styles/minimalistic.jpg"
  srcSet="/briefing-engine/visual-styles/minimalistic-480w.jpg 480w,
          /briefing-engine/visual-styles/minimalistic-800w.jpg 800w,
          /briefing-engine/visual-styles/minimalistic-1200w.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
  alt="Minimalistic visual style example"
  loading="lazy"
  decoding="async"
/>
```

**Future:** Convert to WebP/AVIF for smaller file sizes.

---

### Pre-rendering (SEO)

**react-snap (Existing):**

```json
// package.json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": ["/", "/briefing-engine", "/studios", "/agents", "/contact"],
    "puppeteerArgs": ["--no-sandbox"],
    "waitFor": 1000
  }
}
```

**Result:** Static HTML files for each route (SEO-friendly).

---

## Type Safety

### Current Configuration (Relaxed)

```json
// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": false,        // ⚠️ Allow implicit any
    "strictNullChecks": false,      // ⚠️ Allow null/undefined
    "noUnusedLocals": false,        // ⚠️ Allow unused vars
    "noUnusedParameters": false     // ⚠️ Allow unused params
  }
}
```

**⚠️ Known Technical Debt:** See ARCHITECTURE.md lines 673-682.

**Recommended (Future):**

```json
{
  "compilerOptions": {
    "noImplicitAny": true,          // ✅ Require explicit types
    "strictNullChecks": true,       // ✅ Null safety
    "noUnusedLocals": true,         // ✅ Clean code
    "noUnusedParameters": true      // ✅ Clean code
  }
}
```

---

### Type Patterns

**Props Interface (Always Export):**

```typescript
export interface ComponentProps {
  title: string
  description?: string          // Optional with ?
  onClick: (id: string) => void // Function types
  children?: React.ReactNode    // Standard children type
  className?: string            // Optional className
}
```

**Generic Components:**

```typescript
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>
}
```

---

## File Organization

### Directory Structure (Feature-Based)

```
src/
├── components/
│   ├── ui/                      # Shadcn/UI primitives (40+ components)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   ├── briefing/                # Briefing Engine feature
│   │   ├── BriefingHero.tsx
│   │   ├── VisualStylesGallery.tsx
│   │   ├── StyleCard.tsx
│   │   ├── BriefingProcessFlow.tsx
│   │   ├── BriefingCTA.tsx
│   │   └── palette.ts           # Color constants
│   │
│   ├── studios/                 # Studios feature
│   │   ├── StudiosHero.tsx
│   │   └── ...
│   │
│   └── shared/                  # Cross-feature components
│       ├── FadeIn.tsx
│       ├── ScrollFade.tsx
│       └── ContactCTA.tsx
│
├── pages/                       # Route-level components
│   ├── Index.tsx                # Homepage
│   ├── BriefingEngine.tsx       # /briefing-engine route
│   ├── Studios.tsx              # /studios route
│   └── Contact.tsx              # /contact route
│
├── hooks/                       # Custom React hooks
│   ├── usePrefersReducedMotion.ts
│   ├── useScrollTriggerAnimation.ts
│   └── useLenis.ts
│
├── lib/                         # Utility libraries
│   └── utils.ts                 # cn() utility
│
└── types/                       # Global TypeScript types
    └── index.ts
```

**Naming Conventions:**
- Components: `PascalCase.tsx` (e.g., `StyleCard.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useLenis.ts`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Constants: `camelCase.ts` or `SCREAMING_SNAKE_CASE` in file

---

## Component Size Guidelines

**Target:**
- ✅ Components: < 300 lines (prefer < 200)
- ✅ Functions: < 50 lines
- ✅ Files: < 500 lines

**Refactoring Trigger:**
- Component > 300 lines → Extract sub-components
- Repeated logic → Extract custom hook
- Complex state → Consider `useReducer`

---

## Testing Strategy (Future)

**Current State:** ❌ Zero tests (documented technical debt)

**Planned Stack:**
- Vitest + React Testing Library (unit/integration)
- Playwright (E2E)
- @axe-core/react (accessibility)

**See:** ARCHITECTURE.md lines 626-661 for full testing strategy.

---

## Quick Reference: Frontend Checklist

**Before Committing Component:**
- [ ] TypeScript interface exported
- [ ] JSDoc comment with accessibility notes
- [ ] Semantic HTML tags used
- [ ] `cn()` utility for className merging
- [ ] Responsive classes (mobile-first)
- [ ] `loading="lazy"` on images
- [ ] Animation cleanup in `useEffect` return
- [ ] ~~Focus styles, ARIA labels, `prefers-reduced-motion`, color contrast~~ (REMOVED per AD-003)

---

## Related Documentation

- **[animation-patterns.md](./animation-patterns.md)** - GSAP + Lenis + Framer Motion architecture
- **[ARCHITECTURE.md](../../ARCHITECTURE.md)** - Full system architecture
- **[CONTRIBUTING.md](../../CONTRIBUTING.md)** - Code conventions and workflow
- **[SPEC.md](../../SPEC.md)** - Product requirements

---

**Last Updated:** 2025-10-06
**Maintained By:** Architect (Winston)
