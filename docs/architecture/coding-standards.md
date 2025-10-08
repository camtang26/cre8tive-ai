# Coding Standards

**Last Updated:** 2025-10-06
**Auto-Loaded by:** Dev Agent (BMad workflow)
**Purpose:** Enforce code quality, consistency, and maintainability

---

## Overview

These standards were established from codebase analysis and recent architecture work. All code MUST follow these conventions to maintain consistency and quality.

**Key Principles:**
- TypeScript for type safety (incrementally strict)
- Functional React components with hooks
- Tailwind CSS + Shadcn/UI for styling
- GSAP + Lenis + Framer Motion for animations (with cleanup)
- Mobile-first responsive design
- Accessibility (WCAG AA target)

---

## Code Style

### Formatting (Prettier)

**Configuration:** `.prettierrc` (project root)

```json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

**Key Rules:**
- ❌ **No semicolons** (consistent across codebase)
- ✅ **Double quotes** for strings
- ✅ **2 spaces** for indentation (no tabs)
- ✅ **Trailing commas** in objects/arrays (ES5 compatible)
- ✅ **100 character** line length limit
- ✅ **Arrow function parens** always included
- ✅ **LF line endings** (Unix-style)

### Linting (ESLint)

**Run before commit:**
```bash
npm run lint
```

**Configuration:** `eslint.config.js`
- ESLint 9.9.0
- TypeScript ESLint 8.0.1
- React Hooks plugin (enforces hooks rules)
- React Refresh plugin (Vite HMR)

**Lint Policy:**
- ✅ **Errors:** MUST be fixed before commit
- ⚠️ **Warnings:** Acceptable (pre-existing warnings allowed)

---

## TypeScript Standards

### Current Configuration

**File:** `tsconfig.json`

**Incremental Strict Mode (In Progress):**
```json
{
  "noImplicitAny": true,         // ✅ ENABLED (2025-10-06)
  "strictNullChecks": false,     // ⚠️ TODO: Enable next
  "noUnusedLocals": false,       // ⚠️ TODO: Enable later
  "noUnusedParameters": false,   // ⚠️ TODO: Enable later
}
```

**Progress:**
- ✅ Phase 1: `noImplicitAny: true` (completed)
- 🔄 Phase 2: `strictNullChecks: true` (next)
- 📋 Phase 3: Unused variable checks (future)

### Type Patterns

#### Component Props

**Standard:** Interface above component with explicit types

```typescript
// ✅ GOOD: Explicit interface, extends HTML attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children?: React.ReactNode
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    // Implementation
  }
)
Button.displayName = "Button"
```

```typescript
// ❌ BAD: Inline props, no types
const Button = ({ className, variant, ...props }) => {
  // Missing types
}
```

#### Hooks

**Standard:** Type parameters, infer return types

```typescript
// ✅ GOOD: Typed parameters, inferred return
export function useScrollTriggerAnimation(
  containerRef: RefObject<HTMLElement>,
  animationFn: () => void
): void {
  const prefersReducedMotion = usePrefersReducedMotion()
  // TypeScript infers void return
}

// ✅ GOOD: Generic types when needed
export function useState<T>(initialValue: T): [T, (value: T) => void] {
  // Generic hook pattern
}
```

#### Utility Functions

**Standard:** Explicit param types, infer return

```typescript
// ✅ GOOD: Explicit parameter types
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

// ❌ BAD: No parameter types
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

### Path Aliases

**Configuration:**
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Usage:**
```typescript
// ✅ GOOD: Use @ alias
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ❌ BAD: Relative paths (avoid)
import { Button } from "../../components/ui/button"
```

---

## React Standards

### Component Structure

**Standard Template:**

```typescript
// 1. Imports (grouped)
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// 2. Types/Interfaces
export interface MyComponentProps {
  title: string
  onAction?: () => void
  className?: string
  children?: React.ReactNode
}

// 3. Component Definition
export function MyComponent({ title, onAction, className, children }: MyComponentProps) {
  // 4. Hooks (top of component)
  const [isActive, setIsActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // 5. Effects
  useEffect(() => {
    // Setup
    return () => {
      // CRITICAL: Cleanup
    }
  }, [])

  // 6. Handlers
  const handleAction = () => {
    setIsActive(true)
    onAction?.()
  }

  // 7. Render
  return (
    <div ref={containerRef} className={cn("base-classes", className)}>
      <h1>{title}</h1>
      <Button onClick={handleAction}>Click</Button>
      {children}
    </div>
  )
}

// 8. Export (already done with inline export above)
```

### Component Patterns

#### Functional Components Only

```typescript
// ✅ GOOD: Functional component
const MyComponent = ({ title }: Props) => {
  return <div>{title}</div>
}

// ❌ BAD: Class components (not used in this codebase)
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}
```

#### Forward Refs (for UI primitives)

```typescript
// ✅ GOOD: UI components with ref forwarding
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return <input ref={ref} type={type} className={cn("...", className)} {...props} />
  }
)
Input.displayName = "Input"
```

#### Props Destructuring

```typescript
// ✅ GOOD: Destructure with rest props
const Component = ({ title, children, className, ...props }: ComponentProps) => {
  return <div className={cn("base", className)} {...props}>{children}</div>
}

// ❌ BAD: Don't destructure, props drilling
const Component = (props: ComponentProps) => {
  return <div className={props.className}>{props.children}</div>
}
```

### Hooks Standards

#### React Cleanup Pattern (CRITICAL)

**GSAP Animations:**
```typescript
// ✅ GOOD: gsap.context() with cleanup
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".element", {
      opacity: 0,
      scrollTrigger: { /*...*/ }
    })
  }, containerRef)

  return () => ctx.revert()  // CRITICAL: Prevents memory leaks
}, [])
```

**Canvas/RAF Animations:**
```typescript
// ✅ GOOD: cancelAnimationFrame cleanup
useEffect(() => {
  const animationFrameRef = useRef<number>()

  function animate() {
    // Animation logic
    animationFrameRef.current = requestAnimationFrame(animate)
  }

  animationFrameRef.current = requestAnimationFrame(animate)

  return () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)  // CRITICAL
    }
  }
}, [])
```

**Lenis (Declarative Wrapper - Auto-cleanup):**
```typescript
// ✅ GOOD: ReactLenis wrapper (auto-cleanup)
<ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
  {/* Page content */}
</ReactLenis>
```

#### Custom Hooks

**Naming:** `use` prefix + camelCase

```typescript
// ✅ GOOD: Hook patterns
export function useScrollAnimation() { /*...*/ }
export function usePrefersReducedMotion(): boolean { /*...*/ }
export function useAnalytics() { /*...*/ }
```

### State Management

**Approach:**
1. **Local State:** `useState` for component state
2. **Server State:** React Query (`@tanstack/react-query`)
3. **Form State:** React Hook Form + Zod
4. **URL State:** React Router (params, query strings)

**No Global State Library:** No Redux, Zustand, MobX

```typescript
// ✅ GOOD: Appropriate state choice
const [isOpen, setIsOpen] = useState(false)  // Local UI state

const { data } = useQuery({ /*...*/ })  // Server state

const { register } = useForm()  // Form state
```

---

## Styling Standards

### Tailwind CSS

**Primary Approach:** Utility classes

```typescript
// ✅ GOOD: Tailwind utilities
<div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Hello</h1>
</div>
```

### Class Name Utilities

**Use `cn()` helper:**

```typescript
import { cn } from "@/lib/utils"

// ✅ GOOD: Conditional classes with cn()
<div className={cn(
  "base-class another-class",
  isActive && "active-class",
  variant === "primary" && "primary-variant",
  className  // Allow parent override
)}>
```

### Component Variants (CVA)

**Standard:** Use class-variance-authority for variants

```typescript
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
```

### Responsive Design

**Mobile-First Pattern:**

```typescript
// ✅ GOOD: Mobile-first, progressive enhancement
<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">

// ❌ BAD: Desktop-first (avoid)
<div className="w-1/4 lg:w-1/3 md:w-1/2 sm:w-full">
```

**Breakpoints:**
- `sm:` 640px (mobile landscape)
- `md:` 768px (tablet)
- `lg:` 1024px (desktop)
- `xl:` 1280px (large desktop)
- `2xl:` 1536px (extra large)

---

## Animation Standards

### Library Decision Tree

**Reference:** `docs/architecture/animation-patterns.md` (lines 1-60)

**Use Cases:**
- **GSAP + ScrollTrigger:** Scroll-driven timelines, parallax, complex sequences
- **Lenis:** Smooth scroll with momentum
- **Framer Motion:** UI micro-interactions (hover, tap, drag)

### GSAP Patterns

**✅ MUST use `gsap.context()` cleanup:**

```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    // All GSAP animations here
  }, containerRef)

  return () => ctx.revert()  // REQUIRED
}, [])
```

**❌ BAD: No cleanup (memory leak)**

```typescript
useEffect(() => {
  gsap.from(".element", { opacity: 0 })  // ❌ Memory leak!
}, [])
```

### ~~Accessibility~~ DEPRECATED

> **⚠️ DEPRECATED (2025-10-08):** Accessibility patterns REMOVED per Technical Decision **[AD-003](../technical-decisions.md#ad-003-remove-all-wcag-accessibility-implementations-2025-10-08)**.
>
> **DO NOT implement** `prefers-reduced-motion` or other accessibility features.

<details>
<summary>Historical Pattern (Reference Only - Do Not Use)</summary>

**prefers-reduced-motion (DEPRECATED):**

```typescript
// DEPRECATED - DO NOT USE
const prefersReducedMotion = usePrefersReducedMotion()
// ... conditional animation logic
```

</details>

---

## File Organization

### Component Files

**Pattern:** Feature-based organization

```
src/components/
├── ui/                  # Shadcn/UI primitives
│   ├── button.tsx
│   ├── input.tsx
│   └── dialog.tsx
├── briefing/           # Briefing Engine feature
│   ├── BriefingHero.tsx
│   ├── VisualStylesGallery.tsx
│   ├── palette.ts      # Feature-specific palette
│   └── sections/
├── studios/            # Studios feature
│   └── platform-native/
└── shared/             # Cross-feature reusable
    ├── ContactCTA.tsx
    └── FadeIn.tsx
```

### File Naming

**Standards:**
- **Components:** PascalCase (e.g., `ContactForm.tsx`, `BriefingHero.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `scrollAnimations.ts`)
- **Hooks:** camelCase with `use` prefix (e.g., `useAnalytics.ts`)
- **Pages:** PascalCase (e.g., `Index.tsx`, `Studios.tsx`)
- **Directories:** kebab-case (e.g., `briefing/`, `platform-native/`)

### Import Organization

**Order:**
```typescript
// 1. External libraries
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// 2. Internal components (@ alias)
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero/HeroSection"

// 3. Utilities and hooks
import { cn } from "@/lib/utils"
import { useAnalytics } from "@/hooks/useAnalytics"

// 4. Types (if separate)
import type { MyType } from "@/types"

// 5. Assets
import logo from "@/assets/logo.svg"
```

### Exports

**Pattern:**
```typescript
// Default export for components/pages
export default MyComponent

// Named exports for utilities
export function utilityFunction() {}
export const CONSTANT = "value"

// Both for UI components (Shadcn pattern)
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...)
Button.displayName = "Button"
export { Button, buttonVariants }
```

---

## Briefing Engine Standards

**Applies to:** `src/components/briefing/*`, `src/pages/BriefingEngine.tsx`

### Color Palette

**Single Source:** `src/components/briefing/palette.ts`

```typescript
import { briefingPalette, getGradient } from "@/components/briefing/palette"

// ✅ GOOD: Use palette
<div className={getGradient('heroBg')}>
<div style={{ borderColor: briefingPalette.colors.indigo }}>

// ❌ BAD: Hardcoded colors (avoid)
<div className="bg-indigo-600">  // Not from palette
```

**Color Isolation:**
- ❌ **DO NOT** use Homepage colors (blue gradients)
- ❌ **DO NOT** use Studios colors (orange/film aesthetic)
- ✅ **DO USE** Briefing palette (indigo/cyan/fuchsia)

### Animation Requirements

**GSAP + Lenis Stack:**
1. ✅ Register ScrollTrigger once per component
2. ✅ Clean up on unmount (`gsap.context()`)
3. ~~Respect `prefers-reduced-motion`~~ (REMOVED per AD-003)
4. ✅ Target 60fps (profile in Chrome DevTools)

**Asset Loading:**
- Visual styles: `public/briefing-engine/visual-styles/*.webp`
- Storyboard frames: `public/briefing-engine/storyboard-mockup/Frame*.webp`
- ✅ Always include descriptive `alt` text

---

## Quality Standards

### Pre-Commit Checklist

**REQUIRED before commit:**

- [ ] ✅ ESLint passes: `npm run lint` (0 errors)
- [ ] ✅ TypeScript compiles: `npm run build`
- [ ] ✅ Tested in dev: `npm run dev` (manual browser check)
- [ ] ✅ Production build works: `npm run build && npm run preview`
- [ ] ❌ No `console.log` statements (remove or use proper logging)
- [ ] ❌ No commented-out code (remove or document why kept)

### Code Review Focus

**When reviewing:**
1. **Functionality:** Works as intended?
2. **Conventions:** Follows established patterns?
3. **Performance:** No unnecessary re-renders, efficient algorithms
4. **Accessibility:** Keyboard nav, ARIA labels, semantic HTML
5. **Security:** Input validation, XSS prevention (DOMPurify)
6. **Maintainability:** Clear naming, reasonable complexity
7. **Cleanup:** All animations/effects have cleanup

---

## Git Standards

### Commit Messages

**Format:** Conventional Commits

```bash
# Format
type: Brief description (imperative mood)

# Types
feat:     New feature
fix:      Bug fix
refactor: Code refactoring
docs:     Documentation update
test:     Test updates
chore:    Build/tooling changes

# Examples
feat: Add Visual Styles Gallery with GSAP stagger
fix: Resolve memory leak in canvas particle animation
refactor: Extract palette to single source of truth
```

**Guidelines:**
- Use imperative mood ("Add feature" not "Added feature")
- Keep first line under 72 characters
- Reference issues if applicable: `feat: Add contact form (#123)`

### Branch Naming

**Pattern:** `type/description-with-dashes`

```bash
# Examples
feat/visual-styles-gallery
fix/memory-leak-canvas
refactor/palette-consolidation
docs/update-architecture
```

---

## Testing Standards

**Current State:** ❌ No tests implemented

**Future Framework:** Vitest + React Testing Library + Playwright

**When tests are added:**
- ✅ Co-locate tests: `Component.tsx` + `Component.test.tsx`
- ✅ AAA pattern: Arrange, Act, Assert
- ✅ Coverage target: 70%+ for critical paths

---

## Security Standards

### Input Validation

**All form inputs:**
```typescript
// ✅ GOOD: Zod validation
const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

// Form submission
const sanitized = DOMPurify.sanitize(data.message)  // XSS prevention
```

### Content Security Policy

**Configured in:** `App.tsx`, `vite.config.ts`

**Allowed sources documented in ARCHITECTURE.md**

---

## Performance Standards

### Bundle Size

**Current:** 879kb (target: < 900kb)

**Before adding dependencies:**
1. Check bundle size: bundlephobia.com
2. Verify maintenance: Active repo, recent commits
3. Consider lazy loading for large libraries

### Code Splitting

**Configured in:** `vite.config.ts`
- Vendor chunk: React, Router, Query, Motion, Three.js
- UI chunk: All Radix UI components

### Animation Performance

**Target:** 60fps (minimum 30fps acceptable)

**Monitor with:** Chrome DevTools → Performance tab

---

## Related Documentation

- **Frontend Architecture:** `docs/architecture/frontend-architecture.md`
- **Animation Patterns:** `docs/architecture/animation-patterns.md`
- **Tech Stack:** `docs/architecture/tech-stack.md`
- **Source Tree:** `docs/architecture/source-tree.md`

---

**Last Updated:** 2025-10-06
**Status:** Incremental strict mode in progress (Phase 1 complete: noImplicitAny)
