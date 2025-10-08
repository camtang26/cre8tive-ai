# Design System - AI Briefing Engine Visual Specifications

**Document Type:** Visual Design Standards & Component Aesthetic Patterns
**Created:** 2025-10-06 (extracted from v4 PRD)
**Status:** Active Development
**Related Documents:** [prd.md](../prd/prd.md), [technical-decisions.md](../technical-decisions.md), [ARCHITECTURE.md](../../ARCHITECTURE.md)

---

## Purpose

This document defines the visual design specifications for the AI Briefing Engine page redesign, including color palette, typography, component aesthetic patterns, and asset inventory. Extracted from v4 PRD to serve as single source of truth for design implementation.

---

## Design Philosophy

### Visual-First Principle

**Core Principle:** Cre8tive AI prioritizes visual impact and animation quality over accessibility compliance.

This is a deliberate business decision aligned with creative industry standards (Figma, After Effects, Awwwards winners, luxury brand websites). The website serves as a showcase for the company's animation and visual design capabilities - bold, high-impact animations are not just decorative, they ARE the core product demonstration.

**Implications for Development:**

**DO:**
- ✅ Prioritize visual impact and animation performance
- ✅ Use bold, high-impact GSAP scroll-driven timelines
- ✅ Follow creative tools industry standards (Webflow, Apple product pages, agency portfolios)
- ✅ Optimize for 60fps animation performance on modern devices
- ✅ Push visual boundaries with complex scroll choreography

**DO NOT:**
- ❌ Implement `prefers-reduced-motion` fallbacks
- ❌ Add WCAG-specific accessibility features (ARIA labels beyond semantic HTML, keyboard nav enhancements)
- ❌ Create reduced-motion alternative rendering paths
- ❌ Add accessibility testing to Definition of Done

**Rationale:**
- **Brand Consistency:** Visual impact is the product. Showing reduced animations undermines brand promise.
- **Target Audience:** Professional agencies and creative brands expect premium visual experiences.
- **Code Simplicity:** Eliminates conditional logic, dual code paths, and fallback state management.
- **Industry Alignment:** Creative showcase websites do not compromise visual experience for WCAG compliance.

**Reference:** See Technical Decision [AD-003](../technical-decisions.md#ad-003-remove-all-wcag-accessibility-implementations-2025-10-08) for full context, alternatives considered, and rollback plan.

---

## Color Palette

### Dark Indigo/Cyan/Fuchsia Cyberpunk Creative Studio Palette

**Brand Identity:** Tech/futuristic + creative/artistic hybrid (NOT bright neon gaming aesthetic)

**Color Philosophy:**
- Deep, dark base tones (NOT pure black #000000)
- Holographic accents for tech elements (particles, glows, borders)
- Gradient transitions for depth and premium feel

### Primary Colors

```typescript
// src/components/briefing/briefingColors.ts
export const briefingColors = {
  // Deep Indigo - AI Intelligence & Strategic Thinking
  indigo: {
    from: "#6366F1",    // Indigo-500 (gradient start, lighter glow)
    DEFAULT: "#4F46E5", // Indigo-600 (primary UI)
    to: "#4338CA"       // Indigo-700 (gradient end, deeper)
  },

  // Dark Cyan - Tech Success & Processing
  cyan: {
    from: "#06B6D4",    // Cyan-500 (neon tech accents)
    DEFAULT: "#0891B2", // Cyan-600 (primary success)
    to: "#0E7490"       // Cyan-700 (deeper flow)
  },

  // Deep Fuchsia - Creative Energy & Artistic Expression
  fuchsia: {
    from: "#D946EF",    // Fuchsia-500 (bright creative burst)
    DEFAULT: "#C026D3", // Fuchsia-600 (primary creative)
    to: "#A21CAF"       // Fuchsia-700 (deeper magenta)
  },

  // Deep Orange - Brand Accent & Speed (Studios Handoff)
  orange: {
    DEFAULT: "#EA580C", // Orange-600 (Studios consistency)
  },

  // Holographic/Neon Accents (Tech Elements)
  holographic: {
    glow: "#818CF8",     // Indigo-400 (neon glows, particle effects)
    emerald: "#34D399",  // Emerald-400 (success indicators)
    cyan: "#22D3EE"      // Cyan-400 (tech flow lines)
  }
}
```

### Color Application Guidelines

**Hero Background:**
```typescript
background: linear-gradient(to right,
  ${briefingColors.indigo.from},    // #6366F1
  ${briefingColors.fuchsia.DEFAULT}, // #C026D3
  ${briefingColors.indigo.to}        // #4338CA
);
// Subtle, dark gradient (NOT bright purple)
```

**AI Processing Section:**
```typescript
background: linear-gradient(to right,
  ${briefingColors.cyan.from},      // #06B6D4
  ${briefingColors.indigo.DEFAULT}  // #4F46E5
);
// Tech processing feel
```

**CTA Section:**
```typescript
background: linear-gradient(to right,
  ${briefingColors.fuchsia.DEFAULT}, // #C026D3
  ${briefingColors.indigo.to}        // #4338CA
);
// Creative energy to strategic depth
```

**Holographic UI Elements:**
- Particle glows: `holographic.glow` (#818CF8)
- Card borders: `holographic.cyan` (#22D3EE)
- Success states: `holographic.emerald` (#34D399)

**Studios Handoff Transition:**
```typescript
// Stage 5 of transformation timeline (15-16s)
background: linear-gradient(to right,
  ${briefingColors.indigo.DEFAULT}, // Starting indigo
  ${briefingColors.orange.DEFAULT}  // Ending orange (Studios brand)
);
// Seamless handoff visualization
```

---

## Visual Differentiation Strategy

### Three Distinct Page Identities

**Homepage: Blue/Cyan/Teal (Tech/AI Focus)**
```typescript
palette: {
  primary: "#3B82F6",   // Blue-500
  secondary: "#06B6D4", // Cyan-500
  accent: "#14B8A6"     // Teal-500
}
aesthetic: "Tech-forward, professional AI platform"
```

**Studios: Orange/Teal/Coral (Cinematic Film Production)**
```typescript
palette: {
  primary: "#F97316",   // Orange-500
  secondary: "#14B8A6", // Teal-500
  accent: "#FB7185"     // Coral/Rose-400
}
aesthetic: "Cinematic, film production, creative warmth"
```

**Briefing Engine: Dark Indigo/Cyan/Fuchsia (Cyberpunk Creative Studio)**
```typescript
palette: {
  primary: "#4F46E5",   // Indigo-600 (deep, not bright)
  secondary: "#0891B2", // Cyan-600
  accent: "#C026D3"     // Fuchsia-600
}
aesthetic: "Cyberpunk creative studio, tech + artistic hybrid, holographic accents"
```

**Rationale:**
Each page needs unique mini-theme to avoid visual confusion while maintaining site-wide design system (glassmorphism, typography, spacing).

---

## Typography

### Heading Hierarchy

**Page H1 (Hero Headlines):**
```css
/* Example: "AI Briefing Engine" */
font-size: 4.5rem;         /* text-7xl */
font-weight: 900;          /* font-black */
letter-spacing: -0.05em;   /* tracking-tighter */
line-height: 1;            /* leading-none */

/* Responsive */
@media (max-width: 768px) {
  font-size: 3rem;         /* text-5xl on mobile */
}
```

**Section H2 (Section Headers):**
```css
/* Example: "Choose Your Creative Style" */
font-size: 3rem;           /* text-5xl */
font-weight: 700;          /* font-bold */
line-height: 1.2;          /* leading-tight */

/* Responsive */
@media (max-width: 768px) {
  font-size: 2.25rem;      /* text-4xl on mobile */
}
```

**Section H3 (Card Titles):**
```css
/* Example: "For Agencies", "Minimalistic & Modern" */
font-size: 1.875rem;       /* text-3xl */
font-weight: 600;          /* font-semibold */
```

**Body Text:**
```css
/* Example: Descriptions, benefit copy */
font-size: 1.125rem;       /* text-lg */
color: #D1D5DB;            /* text-gray-300 */
line-height: 1.75;         /* leading-relaxed */
```

**Small Text (Labels, Metadata):**
```css
/* Example: "Step 1 of 4", scene markers */
font-size: 0.875rem;       /* text-sm */
color: #9CA3AF;            /* text-gray-400 */
text-transform: uppercase; /* uppercase */
letter-spacing: 0.05em;    /* tracking-wide */
```

### Font Family

**Primary:** Geist Sans (site-wide standard)
**Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

---

## Component Aesthetic Patterns

### Glassmorphism Pattern (Site-Wide Standard)

```css
/* Example: BenefitCard, ProcessStepCard */
.glass-card {
  background: rgba(255, 255, 255, 0.1);  /* bg-white/10 */
  backdrop-filter: blur(20px);           /* backdrop-blur-2xl */
  border: 1px solid rgba(255, 255, 255, 0.1); /* border-white/10 */
  border-radius: 1rem;                   /* rounded-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
}

/* Hover state */
.glass-card:hover {
  transform: translateY(-0.5rem);        /* hover:-translate-y-2 */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* hover:shadow-3xl */
  transition: all 300ms ease-in-out;     /* duration-300 */
}
```

**Component Usage:**
- BenefitCard (Agencies vs Brands)
- ProcessStepCard (4-step workflow)
- StyleCard (8 visual styles gallery)
- TransformationValueCard (4 value props)

---

### Storyboard Frame Aesthetic (Briefing-Specific)

```css
/* Example: BenefitCard, StoryboardDivider */
.storyboard-frame {
  /* Film strip perforations */
  border: 2px solid transparent;
  border-image: repeating-linear-gradient(
    90deg,
    ${briefingColors.indigo.DEFAULT} 0px,
    ${briefingColors.indigo.DEFAULT} 10px,
    transparent 10px,
    transparent 20px
  ) 2;

  /* Aspect ratio 16:9 (storyboard panel) */
  aspect-ratio: 16 / 9;

  /* Dark background for frames */
  background: rgba(0, 0, 0, 0.6);
}
```

**Component Usage:**
- StoryboardDivider (scene markers S1-S6)
- BenefitCard border variant
- Storyboard mockup overlays

---

### Magnetic Button Interaction (Site-Wide Standard)

```tsx
// Example: BriefingCTA
import { motion } from 'framer-motion';

function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-fuchsia-600"
    >
      {children}
    </motion.button>
  );
}
```

**Component Usage:**
- BriefingCTA primary/secondary CTAs
- Navigation links with gradient hover
- StyleCard hover expand

---

### Card Elevation Levels

```css
/* Level 1: Resting state */
.card-elevation-1 {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-xl */
}

/* Level 2: Hover state */
.card-elevation-2 {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
}

/* Level 3: Active/focused state */
.card-elevation-3 {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(79, 70, 229, 0.3);  /* Indigo glow */
}
```

---

## Spacing System

### Section Padding

```css
/* Desktop (1024px+) */
.section-padding-desktop {
  padding: 6rem 1.5rem;  /* py-24 px-6 */
}

/* Mobile (< 1024px) */
.section-padding-mobile {
  padding: 4rem 1rem;    /* py-16 px-4 */
}
```

### Container Max-Width

```css
/* Site-wide standard */
.container {
  max-width: 80rem;      /* max-w-7xl (1280px) */
  margin: 0 auto;        /* mx-auto */
}
```

### Grid Gaps

```css
/* Card grids (Visual Styles Gallery, Benefits) */
.card-grid {
  gap: 2rem;             /* gap-8 */
}

/* Section vertical spacing */
.section-spacing {
  gap: 4rem;             /* gap-16 (between major sections) */
}
```

---

## Animation Consistency

### Scroll Reveals (Framer Motion - Non-GSAP Sections)

```tsx
// Example: FadeIn wrapper
import { motion } from 'framer-motion';

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

**Usage:** Simple section reveals, benefit cards, text blocks

### Hover States (Framer Motion)

```tsx
// Example: StyleCard, ProcessStepCard
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  {/* Card content */}
</motion.div>
```

**Usage:** All card components, interactive elements

### Section Transitions (Lenis - NEW)

```tsx
// Page-level smooth scroll
import { ReactLenis } from 'lenis/react';

<ReactLenis root options={{
  lerp: 0.1,           // Smoothness (0-1, lower = smoother)
  duration: 1.5,       // Scroll duration
  smoothTouch: true    // Enable on mobile
}}>
  {/* Page content */}
</ReactLenis>
```

**Usage:** Applied at BriefingEngine page level

### Complex Timelines (GSAP ScrollTrigger - NEW)

```tsx
// Example: 15-second transformation timeline
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-container",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true  // Desktop only
  }
});

tl.from(".brief-form", { opacity: 0, y: 50, duration: 1 })
  .to(".brief-form", { scale: 0.8, opacity: 0.5, duration: 1 })
  .from(".storyboard-panels", { opacity: 0, stagger: 0.2 });
```

**Usage:** BriefToStoryboardAnimation (Story 1.7)

---

## Asset Inventory

### Visual Style Assets (9 Files - 2.2MB Total)

**Location:** `public/briefing-engine/visual-styles/`

| File | Size | Description | Key Colors | Usage |
|------|------|-------------|------------|-------|
| Minimalist.webp | 50kb | Clean white/gray phone on pedestal | Neutral/monochrome | Gallery card 1 |
| BoldVibrant.webp | 149kb | Colorful geometric (yellow/red/blue) | High contrast | Gallery card 2 |
| CinematicDramatic.webp | 172kb | Epic cosmic space scene | Silver/blue tones | Gallery card 3 |
| Playfulanimated.webp | 123kb | 3D whimsical with hearts/clouds | Pastel pink/blue | Gallery card 4 |
| Futuristic.webp | 489kb | Neon cyberpunk holographic platform | ✅ Indigo/cyan/fuchsia | Gallery card 5 |
| RetroVintage.webp | 180kb | Warm golden retro on wood pedestal | Warm amber tones | Gallery card 6 |
| DocumentaryRealistic.webp | 338kb | Realistic coffee shop scene | Natural/muted | Gallery card 7 |
| ArtisticAbstract.webp | 631kb | Liquid marble swirls | ✅ Purple/cyan/gold | Gallery card 8 |
| 2dVector.webp | 86kb | Flat geometric design style | Bold flat colors | Gallery card 9 |

**Note:** Futuristic.webp and ArtisticAbstract.webp already feature indigo/cyan/fuchsia palette, validating color direction.

**Alt Text Examples:**
```html
<img src="/briefing-engine/visual-styles/Minimalist.webp"
     alt="Minimalistic & Modern visual style - Clean white phone on pedestal with neutral monochrome aesthetic" />

<img src="/briefing-engine/visual-styles/CinematicDramatic.webp"
     alt="Cinematic & Dramatic visual style - Epic cosmic space scene with moody silver and blue tones" />
```

---

### Storyboard Mockup Assets (7 Files - 1.7MB Total)

**Location:** `public/briefing-engine/storyboard-mockup/`

| File | Size | Description | Usage |
|------|------|-------------|-------|
| SB-Mockup.webp | 280kb | Full 6-panel storyboard layout | Final reveal or hero image |
| Frame1.webp | 166kb | Scene 1: Evening harbour entrance | Fly-in animation stage 1 |
| Frame2.webp | 199kb | Scene 2: Formal greeting at sunset | Fly-in animation stage 2 |
| Frame3.webp | 379kb | Scene 3: Waterfront lounge | Fly-in animation stage 3 |
| Frame4.webp | 282kb | Scene 4: Guests on terrace | Fly-in animation stage 4 |
| Frame5.webp | 241kb | Scene 5: Couple with mega yacht | Fly-in animation stage 5 |
| Frame6.webp | 179kb | Scene 6: Close-up with city lights | Fly-in animation stage 6 |

**Campaign:** "Luxury Harbours" example demonstrates professional, cohesive storytelling.

**Loading Strategy:**
- **Preload:** Frame1-3.webp (critical for initial animation, ~744kb)
- **Lazy-load:** Frame4-6.webp (below fold, ~702kb)

**Alt Text Examples:**
```html
<img src="/briefing-engine/storyboard-mockup/Frame1.webp"
     alt="Storyboard Scene 1: Evening harbour entrance with luxury yacht docking at sunset" />
```

---

## Interaction Patterns

### Hover Lift Pattern

```css
.interactive-card {
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
}

.interactive-card:hover {
  transform: translateY(-0.5rem);  /* hover:-translate-y-2 */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

**Component Usage:** All cards (BenefitCard, StyleCard, ProcessStepCard)

---

### Card Border Glow on Hover

```css
.card-glow:hover {
  border-color: ${briefingColors.holographic.cyan}; /* #22D3EE */
  box-shadow:
    0 0 20px rgba(34, 211, 238, 0.5),  /* Cyan glow */
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

**Component Usage:** BenefitCard (accent color glow), StyleCard (holographic border)

---

### Button CTA Pattern

```css
.cta-primary {
  padding: 1rem 2rem;                  /* px-8 py-4 */
  border-radius: 9999px;               /* rounded-full */
  background: linear-gradient(to right,
    ${briefingColors.cyan.DEFAULT},
    ${briefingColors.fuchsia.DEFAULT}
  );
  color: white;
  font-weight: 600;                    /* font-semibold */
  transition: all 200ms ease-in-out;
}

.cta-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(192, 38, 211, 0.5); /* Fuchsia glow */
}
```

**Component Usage:** BriefingCTA (primary "Book a Demo"), Hero CTAs

---

## Responsive Breakpoints

### Breakpoint Matrix

| Breakpoint | Width | Visual Styles Gallery Layout | BriefingProcessFlow Layout |
|------------|-------|------------------------------|---------------------------|
| Mobile | 375px | 1 column (stack) | Vertical stack (4 steps) |
| Tablet | 768px | 2×2 grid (4 columns shown, 1 hidden) | Vertical stack |
| Desktop | 1024px | 3×3 grid (all 9 shown) | Horizontal row (4 steps) |
| Wide | 1920px | 3×3 grid (larger cards) | Horizontal row (larger cards) |

### Mobile Optimizations

**GSAP ScrollTrigger Pinning:**
```typescript
// Disable pinning on mobile (< 768px)
scrollTrigger: {
  trigger: ".animation-container",
  start: "top top",
  end: "bottom top",
  scrub: 1,
  pin: window.innerWidth >= 768  // Desktop only
}
```

**Canvas Particle Count:**
```typescript
// Reduce particles on mobile for performance
const particleCount = window.innerWidth >= 768 ? 100 : 30;
```

**Lenis Smooth Scroll:**
```typescript
// Enable touch gestures on mobile
<ReactLenis root options={{
  lerp: 0.1,
  duration: 1.5,
  smoothTouch: true  // Mobile-friendly
}}>
```

---

## Accessibility

### Color Contrast (WCAG AA)

**Tested Combinations:**

| Foreground | Background | Ratio | Pass/Fail |
|------------|-----------|-------|-----------|
| Indigo-600 (#4F46E5) | Dark gradient (rgba(0,0,0,0.9)) | 4.8:1 | ✅ PASS |
| Cyan-600 (#0891B2) | Dark gradient | 5.2:1 | ✅ PASS |
| Fuchsia-600 (#C026D3) | Dark gradient | 4.6:1 | ✅ PASS |
| Gray-300 (#D1D5DB) | Dark gradient | 11.2:1 | ✅ PASS |

**Tool:** WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

### Keyboard Navigation

**Interactive Elements:**
- All StyleCard components: `tabIndex={0}` (keyboard focusable)
- All CTA buttons: Native `<button>` elements (not `<div>`)
- Focus indicators: `focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2`

### ARIA Labels

**Example: Visual Styles Gallery**
```html
<section aria-label="Visual styles gallery - Choose from 8 creative styles">
  <div
    role="button"
    tabIndex={0}
    aria-label="Minimalistic & Modern visual style - Clean aesthetic with neutral tones"
  >
    <img src="..." alt="..." />
  </div>
</section>
```

### ~~prefers-reduced-motion~~ REMOVED

> **⚠️ REMOVED (2025-10-08):** This pattern is NO LONGER USED per the Visual-First Principle above and Technical Decision AD-003.
>
> **DO NOT implement** motion preferences - all users receive full animations.

---

_This document consolidates all visual design specifications from v4 PRD. For product requirements, see [prd.md](../prd/prd.md). For technical decisions, see [technical-decisions.md](../technical-decisions.md). For current system state, see [brownfield-analysis.md](../brownfield-analysis.md)._
