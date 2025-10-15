# Development Guide

**Project:** cre8tive-website-1006
**Tech Stack:** React 18 + Vite 5 + TypeScript + Tailwind CSS
**Generated:** 2025-10-16

---

## Quick Start

### Prerequisites

```bash
Node.js >= 18.0.0
npm >= 9.0.0 (or compatible package manager)
Git
```

### Installation

```bash
# Clone repository
git clone https://github.com/[username]/cre8tive-website-1006.git
cd cre8tive-website-1006

# Install dependencies
npm install

# Start development server
npm run dev
```

**Development server:** http://localhost:8080

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build (TypeScript + Vite) |
| `npm run build:dev` | Development build with source maps |
| `npm run lint` | Run ESLint (errors must pass) |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run test:performance` | Run performance tests |

---

## Project Structure

```
src/
├── components/     # React components (feature-based)
├── pages/          # Route components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── styles/         # Global styles
├── assets/         # Images, fonts, videos
├── types/          # TypeScript types
├── main.tsx        # Application entry point
└── App.tsx         # Root component
```

---

## Development Workflow

### 1. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Development

- Edit files in `src/`
- Hot Module Replacement (HMR) updates instantly
- Check browser console for errors

### 3. Type Safety

```bash
# TypeScript will check types during build
npm run build:dev
```

### 4. Linting

```bash
npm run lint
# Errors must be fixed, warnings are acceptable
```

### 5. Testing

```bash
# Manual testing
npm run dev

# Performance testing
npm run test:performance

# Visual testing: See .codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md
```

### 6. Build Validation

```bash
npm run build
# Must succeed
# Vendor bundle must be < 900kb (enforced)
```

### 7. Commit

```bash
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature-name
```

---

## Key Technologies

### React 18.3.1
- Functional components
- Hooks-based state management
- Concurrent features

### Vite 5.4.1
- Fast HMR (Hot Module Replacement)
- ES modules
- Optimized production builds

### TypeScript 5.5.3
- Path aliases: `@/*` → `src/*`
- Incremental strict mode
- Type-safe development

### Tailwind CSS 3.4.11
- Utility-first styling
- Custom theme (see `tailwind.config.ts`)
- Dark mode support

### GSAP 3.13 + Lenis
- Professional animations
- Scroll-triggered effects
- Smooth scrolling

---

## Component Development

### Creating New Component

```tsx
// src/components/my-feature/MyComponent.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export const MyComponent = ({ title, onAction }: MyComponentProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-4 bg-background">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Active' : 'Inactive'}
      </Button>
    </div>
  );
};
```

### Using shadcn/ui Components

```bash
# Add new component (if needed)
npx shadcn-ui@latest add [component-name]
```

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Button variant="default">Click me</Button>
<Card>Content</Card>
```

---

## Animation Development

### GSAP Animations

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimatedComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return <div ref={ref}>Animated content</div>;
};
```

### Custom Animation Hooks

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const element = useScrollAnimation({
  from: { opacity: 0 },
  to: { opacity: 1 },
  trigger: 'top 80%',
});

<div ref={element}>Content</div>
```

---

## Styling Guidelines

### Tailwind Utilities

```tsx
// Responsive design
<div className="p-4 md:p-8 lg:p-12">
  Responsive padding
</div>

// Custom theme colors
<div className="bg-primary text-primary-foreground">
  Themed colors
</div>

// Animations
<div className="animate-fade-in hover:scale-105 transition">
  Animated element
</div>
```

### Custom CSS (when needed)

```tsx
// MyComponent.module.css
.customClass {
  @apply bg-gradient-to-r from-primary to-secondary;
}

// Component
import styles from './MyComponent.module.css';
<div className={styles.customClass}>...</div>
```

---

## Performance Best Practices

### 1. Code Splitting

```tsx
// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));

<Suspense fallback={<Loading />}>
  <HomePage />
</Suspense>
```

### 2. Image Optimization

```tsx
// Use lazy loading
<img
  src="/images/hero.jpg"
  alt="Hero"
  loading="lazy"
  className="w-full"
/>

// Use responsive images
<img
  srcSet="
    /images/hero-sm.jpg 640w,
    /images/hero-md.jpg 1024w,
    /images/hero-lg.jpg 1920w
  "
  sizes="100vw"
  src="/images/hero-lg.jpg"
  alt="Hero"
/>
```

### 3. Animation Performance

```tsx
// Use transform and opacity (GPU-accelerated)
<div className="transform translate-y-4 opacity-0">
  Animated
</div>

// Avoid animating width, height, margin (causes reflow)
```

### 4. Bundle Size

```bash
# Check bundle size after build
npm run build
# Vendor bundle MUST be < 900kb (enforced by vite.config.ts)
```

---

## Environment Variables

### .env (Development)

```
VITE_API_URL=http://localhost:3000
VITE_ANALYTICS_ID=dev-analytics-id
```

### .env.production (Production)

```
VITE_API_URL=https://api.cre8tive.ai
VITE_ANALYTICS_ID=prod-analytics-id
```

**Access in code:**
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Common Tasks

### Add New Page/Route

1. Create page component:
```tsx
// src/pages/NewPage.tsx
export const NewPage = () => {
  return <div>New Page</div>;
};
```

2. Add route in `App.tsx`:
```tsx
import NewPage from './pages/NewPage';

<Routes>
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

### Add External API Integration

```tsx
// src/services/api.ts
export const fetchData = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/data`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

// In component with React Query
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/services/api';

const { data, isLoading, error } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
});
```

### Add shadcn/ui Component

```bash
npx shadcn-ui@latest add dialog
```

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    Content
  </DialogContent>
</Dialog>
```

---

## Debugging

### React DevTools
- Install: [React DevTools](https://react.dev/learn/react-developer-tools)
- Inspect component tree
- View props and state

### Vite DevTools
- Network tab for HMR updates
- Console for build errors
- Source maps enabled in development

### Performance Profiling
```bash
npm run test:performance
# Generates Lighthouse reports
```

---

## Build Process

### Development Build

```bash
npm run build:dev
```

**Output:**
- Source maps enabled
- Console logs preserved
- Larger bundle size (not minified)

### Production Build

```bash
npm run build
```

**Process:**
1. TypeScript compilation (`tsc`)
2. Vite build with optimizations:
   - Code minification (Terser)
   - CSS optimization (Tailwind purge)
   - Asset optimization
   - Bundle splitting (vendor, ui, main)
   - Performance budget check (< 900kb vendor)

**Output:** `/dist/` folder ready for deployment

---

## Deployment

### GitHub Pages (Current)

```bash
npm run deploy
```

**Process:**
1. Runs `npm run build`
2. Pushes `dist/` to `gh-pages` branch
3. GitHub Pages serves static site

**Custom Domain:** Configured via `CNAME` file

### Alternative Deployments

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## Troubleshooting

### HMR Not Working
```bash
# Restart dev server
npm run dev
```

### TypeScript Errors
```bash
# Clear cache
rm -rf node_modules/.vite
npm run dev
```

### Build Fails
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for bundle size issues
npm run build
# Look for "BUNDLE SIZE EXCEEDED" error
```

### Performance Issues
- Check Chrome DevTools Performance tab
- Run Lighthouse audit
- Review `.codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md`

---

## Code Style

### ESLint Rules
- React hooks dependencies
- TypeScript best practices
- No unused variables (warning, not error)

### Prettier (Optional)
- Config: `.prettierrc`
- Format on save (recommended)

### Naming Conventions
- **Components:** PascalCase (`MyComponent.tsx`)
- **Hooks:** camelCase with `use` prefix (`useMyHook.ts`)
- **Utils:** camelCase (`myUtil.ts`)
- **Constants:** UPPER_SNAKE_CASE (`MY_CONSTANT`)

---

## Testing Strategy

### Manual Testing
1. Visual inspection in browser
2. Test all routes
3. Test responsive behavior (mobile, tablet, desktop)
4. Test animations (check performance)
5. Test accessibility (keyboard navigation, screen readers)

### Automated Testing
- **Performance:** Lighthouse via `npm run test:performance`
- **E2E:** Playwright (configured, add tests as needed)

### QA Gates
- See `/docs/qa/gates/` for feature-specific validation checklists

---

## Resources

- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **Tailwind:** https://tailwindcss.com
- **GSAP:** https://greensock.com/gsap/
- **shadcn/ui:** https://ui.shadcn.com
- **Radix UI:** https://www.radix-ui.com

---

## Getting Help

1. Check existing documentation in `/docs/`
2. Review `.codex/_MEMO.md` for project context
3. Check `ARCHITECTURE.md` for system design
4. Review `CONTRIBUTING.md` for contribution guidelines

---

_This guide covers common development tasks. For advanced topics, refer to specialized documentation in `/docs/`._
