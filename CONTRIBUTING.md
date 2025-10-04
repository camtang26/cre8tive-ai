# Contributing Guidelines

**Last Updated:** 2025-10-04
**Based On:** Codebase analysis and discovered patterns

Welcome to the Cre8tive AI website project! This document outlines coding conventions, development workflows, and quality standards for contributing to this codebase.

---

## Table of Contents

1. [Development Setup](#development-setup)
2. [Code Conventions](#code-conventions)
3. [TypeScript Guidelines](#typescript-guidelines)
4. [React & Component Guidelines](#react--component-guidelines)
5. [Styling Guidelines](#styling-guidelines)
6. [File Organization](#file-organization)
7. [Testing Standards](#testing-standards)
8. [Git Workflow](#git-workflow)
9. [Pull Request Process](#pull-request-process)
10. [Quality Gates](#quality-gates)

---

## Development Setup

### Prerequisites

- **Node.js:** v20 or higher
- **npm:** v9 or higher
- **Git:** Latest version

### Installation

```bash
# Clone the repository
git clone https://github.com/[org]/cre8tive-website.git
cd cre8tive-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will run on **http://localhost:8080**.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production (TypeScript check + Vite build) |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build on port 4173 |
| `npm run lint` | Run ESLint on codebase |
| `npm run deploy` | Deploy to GitHub Pages (automated via CI) |

---

## Code Conventions

**IMPORTANT:** These conventions were discovered from existing codebase analysis. Follow these patterns to maintain consistency.

### Code Style

**Discovered Patterns:**

- **Indentation:** 2 spaces (no tabs)
- **Quotes:** Double quotes for strings (consistent in analyzed files)
- **Semicolons:** No semicolons (not used in codebase)
- **Line Length:** No strict limit (but be reasonable, < 120 characters preferred)
- **Trailing Commas:** Yes, in objects and arrays

**Linter:** ESLint 9.9.0
**Configuration:** eslint.config.js

**Run before committing:**
```bash
npm run lint
```

### Formatting

**No Formatter Configuration Found:** Prettier is mentioned in README.md but no config file exists in repository.

**Recommendation:** Use your editor's default formatting or configure Prettier with these settings:
```json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## TypeScript Guidelines

### Type Safety Level

**Current Configuration:** Relaxed (tsconfig.json)
- `noImplicitAny: false` - Implicit any allowed
- `strictNullChecks: false` - Null/undefined checking disabled
- `noUnusedLocals: false` - Unused variables allowed
- `noUnusedParameters: false` - Unused parameters allowed

**Approach:**
- TypeScript is used primarily for IDE autocomplete and basic type checking
- Type annotations are encouraged but not strictly enforced
- Any types are acceptable (though explicit types are preferred when practical)

### Type Patterns Observed

#### Component Props

**Pattern:** Interface above component

```typescript
// Good (observed pattern)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // ...
  }
)
```

#### Hooks

**Pattern:** Type inference preferred, explicit return types optional

```typescript
// Observed pattern
const useOptimizedAnimation = ({ delay }: { delay: number }) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  // TypeScript infers return type
  return ref
}
```

#### Utility Functions

**Pattern:** Explicit types for function params, inferred return

```typescript
// From src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Path Aliases

**Configured in tsconfig.json:**
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
// Good
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Avoid (use alias instead)
import { Button } from "../../components/ui/button"
```

---

## React & Component Guidelines

### Component Style

**Discovered Pattern:** Functional components only

```typescript
// Standard pattern (observed)
const MyComponent = () => {
  return (
    <div>Content</div>
  )
}

export default MyComponent
```

**Class components:** Not used in this codebase

### Component Structure

**Observed Pattern:**

```typescript
// 1. Imports
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// 2. Type definitions
interface MyComponentProps {
  title: string
  onClick?: () => void
}

// 3. Component definition
const MyComponent = ({ title, onClick }: MyComponentProps) => {
  // 4. Hooks
  const [isActive, setIsActive] = useState(false)

  // 5. Handlers
  const handleClick = () => {
    setIsActive(true)
    onClick?.()
  }

  // 6. Render
  return (
    <div className="container">
      <h1>{title}</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  )
}

// 7. Export
export default MyComponent
```

### Hooks Usage

**Discovered Patterns:**

```typescript
// State management
const [state, setState] = useState<Type>(initialValue)

// Effects
useEffect(() => {
  // Setup
  return () => {
    // Cleanup
  }
}, [dependencies])

// Custom hooks (observed naming)
const ref = useOptimizedAnimation({ delay: 100 })
const analytics = useAnalytics()
const isFullscreen = useFullscreen()
```

### Props Patterns

**Discovered Conventions:**

```typescript
// Destructure props
const Component = ({ title, children, className }: ComponentProps) => {
  // ...
}

// Use optional chaining for optional callbacks
onClick?.()

// Spread remaining props
<button {...props} />

// Use 'asChild' pattern for polymorphic components (Radix UI pattern)
<Button asChild>
  <Link to="/somewhere">Go</Link>
</Button>
```

### State Management

**Discovered Approach:**

1. **Local State:** `useState` for component-specific state
2. **Server State:** React Query (`@tanstack/react-query`) for API data
3. **Form State:** React Hook Form for forms
4. **URL State:** React Router for navigation state

**No global state management library** (Redux, Zustand, MobX) is used.

### Error Handling

**Observed Pattern:**

```typescript
// Form submission error handling
const onSubmit = async (data: FormData) => {
  try {
    await submitForm(data)
    toast({ title: "Success" })
  } catch (error) {
    toast({ title: "Error", variant: "destructive" })
  }
}
```

**No Error Boundaries observed** in analyzed code (recommended to add).

---

## Styling Guidelines

### Tailwind CSS

**Primary Styling Approach:** Tailwind utility classes

```typescript
// Standard pattern
<div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Hello</h1>
</div>
```

### Class Name Utilities

**Use `cn()` helper** for conditional classes (from src/lib/utils.ts):

```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "base-class another-class",
  isActive && "active-class",
  className // Allow parent to override
)}>
```

### Component Variants

**Use CVA (class-variance-authority)** for component variants:

```typescript
// Observed in src/components/ui/button.tsx
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "base classes here",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### Responsive Design

**Discovered Pattern:** Mobile-first with Tailwind breakpoints

```typescript
// Mobile first, then tablet, desktop
<div className="w-full md:w-1/2 lg:w-1/3">
```

**Breakpoints (Tailwind defaults):**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

### Animations

**Use Framer Motion** for animations:

```typescript
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

**Discovered Animation Patterns:**
- Scroll-triggered fades (FadeIn, ScrollFade components)
- Parallax effects (useParallax hook)
- Magnetic hover effects (MagneticButton)
- Reveal text animations (RevealText component)

### Glassmorphism Pattern

**Modern design pattern** (from 2025-10-02 redesign):

```typescript
// Use glass-card classes
<div className="glass-card-medium p-8 rounded-3xl">
  Content
</div>
```

---

## File Organization

### Directory Structure

**Discovered Conventions:**

#### Components

```
src/components/
├── ui/                  # Shadcn/UI base components
│   └── button.tsx
├── [feature]/          # Feature-specific components
│   ├── FeatureHero.tsx
│   ├── FeatureSection.tsx
│   └── sections/       # Sub-sections if needed
└── shared/             # Reusable cross-feature components
    ├── ContactCTA.tsx
    ├── FadeIn.tsx
    └── StatsBar.tsx
```

#### Pages

```
src/pages/
├── Index.tsx           # Homepage
├── About.tsx
├── Contact.tsx
└── [ServiceName].tsx
```

#### Hooks

```
src/hooks/
├── useAnalytics.ts
├── useScrollAnimation.ts
└── use-toast.ts        # Note: kebab-case for some hooks
```

### File Naming

**Discovered Patterns:**

- **Components:** PascalCase (e.g., `ContactForm.tsx`, `HeroSection.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `scrollAnimations.ts`)
- **Hooks:** camelCase with `use` prefix (e.g., `useAnalytics.ts`)
  - **Exception:** `use-toast.ts` uses kebab-case (shadcn/ui convention)
- **Pages:** PascalCase (e.g., `Index.tsx`, `About.tsx`)
- **Directories:** kebab-case or camelCase (inconsistent - see ARCHITECTURE.md Known Issues)

**Recommendation:** Use PascalCase for components, camelCase for utilities/hooks, lowercase for directories.

### Import Organization

**Observed Pattern:**

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

**No automatic import sorting** configured (ESLint plugin could enforce).

### Exports

**Discovered Pattern:** Default exports for pages and components

```typescript
// Components and Pages
export default MyComponent

// Utilities: Named exports
export function utilityFunction() {}
export const CONSTANT = "value"

// UI Components: Both named and default (Shadcn pattern)
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...)
Button.displayName = "Button"
export { Button, buttonVariants }
```

---

## Testing Standards

### Current State

**❌ No tests currently implemented**

### Recommended Testing Approach (Future)

When tests are added, follow these conventions:

#### Test Location

**Co-located pattern** (recommended):
```
src/components/ContactForm.tsx
src/components/ContactForm.test.tsx
```

Or **separate directory**:
```
src/components/ContactForm.tsx
src/__tests__/ContactForm.test.tsx
```

#### Test Structure

**Use Arrange-Act-Assert (AAA) pattern:**

```typescript
import { render, screen } from "@testing-library/react"
import { ContactForm } from "./ContactForm"

describe("ContactForm", () => {
  it("should submit form when valid data is entered", async () => {
    // Arrange
    render(<ContactForm />)

    // Act
    await userEvent.type(screen.getByLabelText("Email"), "test@example.com")
    await userEvent.click(screen.getByText("Submit"))

    // Assert
    expect(screen.getByText("Success")).toBeInTheDocument()
  })
})
```

#### Test Frameworks (Suggested)

- **Unit/Integration:** Vitest + React Testing Library
- **E2E:** Playwright
- **Coverage Target:** 70%+ for critical paths

---

## Git Workflow

### Branching Strategy

**Discovered Pattern from Git History:**

**Main Branches:**
- `main` or `master` - Production branch (GitHub Pages deploy source)
- `dev` - Development branch (observed but not actively used in recent commits)

**Feature Branches:**
```
design/modern-refresh-2025-10-02
dev/local-updates-2025-10-02
mobile-fixes
debug/asset-paths
```

**Pattern:** `type/description-with-dashes-YYYY-MM-DD` (date optional)

**Types observed:**
- `design/` - Design changes
- `dev/` - Development features
- `debug/` - Bug fixes
- `feat/` - New features (inferred from commit messages)
- `fix/` - Bug fixes (inferred)

### Commit Messages

**Discovered Pattern:** Conventional Commits style

**Format:**
```
type: Brief description (imperative mood)

Optional detailed description if needed
```

**Types observed in git log:**
- `feat:` - New feature
- `fix:` - Bug fix
- `Update` - General updates (less formal pattern also used)

**Examples from git log:**
```
feat: Ultra-bold homepage redesign v1 (experimental)
feat: Implement 2025 modern design refresh with validated production build
fix: Improve privacy policy page visibility and spacing
feat: Add comprehensive Privacy Policy page for LinkedIn ads compliance
```

**Guidelines:**
- Use imperative mood ("Add feature" not "Added feature")
- Keep first line under 72 characters
- Reference issues if applicable: `feat: Add contact form (#123)`

### Pull Request Process

**Inferred Workflow (No .github/PULL_REQUEST_TEMPLATE.md found):**

1. **Create feature branch** from `master` or `dev`
   ```bash
   git checkout -b feat/my-new-feature
   ```

2. **Make changes** following code conventions

3. **Test locally**
   ```bash
   npm run dev     # Verify in browser
   npm run lint    # Check linting
   npm run build   # Ensure production build works
   ```

4. **Commit changes** with conventional commit message
   ```bash
   git add .
   git commit -m "feat: Add new service page"
   ```

5. **Push to remote**
   ```bash
   git push origin feat/my-new-feature
   ```

6. **Create Pull Request** on GitHub
   - Title: Same as commit message
   - Description: Explain changes, add screenshots if UI changes
   - Link related issues

7. **Wait for review** (if team collaboration)

8. **Merge** after approval (or self-merge if solo project)

### Pre-Commit Checklist

**Before committing:**

- [ ] Code follows style conventions
- [ ] ESLint passes: `npm run lint`
- [ ] TypeScript compiles: `npm run build`
- [ ] Tested locally in dev mode: `npm run dev`
- [ ] Tested production build: `npm run build && npm run preview`
- [ ] No console.log statements (removed or via proper logging)
- [ ] No commented-out code (remove or document why it's kept)

---

## Quality Gates

### Before Merging to Master

**Required:**

- [ ] **Build succeeds:** `npm run build` completes without errors
- [ ] **Linting passes:** `npm run lint` has no errors
- [ ] **TypeScript compiles:** `tsc` completes (part of build)
- [ ] **Manual testing:** Changes verified in browser
- [ ] **No regressions:** Existing features still work
- [ ] **Responsive design:** Tested on mobile, tablet, desktop viewports

**Recommended:**

- [ ] **Performance check:** No significant bundle size increase
- [ ] **Accessibility:** Semantic HTML, ARIA labels where needed
- [ ] **SEO:** Meta tags updated if new page added
- [ ] **Documentation updated:** README, SPEC, or ARCHITECTURE if needed

### Code Review Guidelines

**Focus areas when reviewing code:**

1. **Functionality:** Does the code work as intended?
2. **Conventions:** Follows established patterns?
3. **Performance:** No unnecessary re-renders, efficient algorithms
4. **Accessibility:** Keyboard navigation, screen reader support
5. **Security:** Input validation, XSS prevention (DOMPurify for HTML)
6. **Maintainability:** Clear naming, reasonable complexity

---

## Architecture Decisions

### When to Update Documentation

**Update SPEC.md when:**
- New features added or removed
- Scope boundaries change
- Success metrics updated

**Update ARCHITECTURE.md when:**
- Major dependencies upgraded
- New external services integrated
- Architecture patterns change

**Update README.md when:**
- Setup instructions change
- New commands added
- Prerequisites updated

### Adding New Dependencies

**Before adding a new npm package:**

1. **Justify the need:** Can existing tools accomplish this?
2. **Check bundle size:** Use bundlephobia.com
3. **Verify maintenance:** Active repo, recent commits?
4. **Security audit:** Check for known vulnerabilities
5. **Document usage:** Update ARCHITECTURE.md if significant

**Install as dev dependency when appropriate:**
```bash
npm install --save-dev package-name    # Build tools, testing
npm install package-name               # Runtime dependencies
```

---

## Communication & Support

### Questions?

- **Codebase questions:** Review SPEC.md and ARCHITECTURE.md first
- **Technical issues:** Open a GitHub issue
- **Feature requests:** Discuss in issue before implementing

### Reporting Issues

**Include in issue:**
1. Clear description of the problem
2. Steps to reproduce
3. Expected vs actual behavior
4. Screenshots if UI-related
5. Browser/device if relevant
6. Error messages or console logs

---

## Additional Resources

- **React Documentation:** https://react.dev
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Shadcn/UI Components:** https://ui.shadcn.com
- **Framer Motion Docs:** https://www.framer.com/motion/
- **Vite Guide:** https://vitejs.dev/guide/

---

**Thank you for contributing to Cre8tive AI!** 🚀
