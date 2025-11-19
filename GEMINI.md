# Cre8tive AI Website - Gemini Context

## Project Overview
This is a high-performance, luxury marketing website for Cre8tive AI, built as a static Single Page Application (SPA). The project prioritizes cinematic motion, minimalist aesthetics, and pixel-perfect execution.

**North Star:** Deliver minimalist, ultra-premium web experiences where copy sings and visual choices are intentional.

## ⚠️ CRITICAL AGENT MANDATES (from AGENTS.md)

1.  **Copy Is Law:** Do **not** add random badges, filler text, or "lorem ipsum". Use provided copy decks exactly.
2.  **Less, but Luxe:** Remove anything that doesn't amplify story or motion. Minimalism > Clutter.
3.  **Motion-Ready:** Build static markup with animation in mind (`data-motion` attributes, logical DOM order).
4.  **Visual Validation:** Changes must be verified at **1707x898** (desktop) and **390x844** (mobile).
5.  **Strict Style:**
    *   No "standard" Shadcn looks—customize for premium brand.
    *   Use "Studies Orange/Teal" or specific brand palettes; avoid generic colors.
    *   **Typography:** Couture-level typography; let copy breathe.

## Tech Stack

*   **Core:** React 18, TypeScript 5.x, Vite 5.x
*   **Styling:** Tailwind CSS 3.x, PostCSS, CSS Variables
*   **UI Library:** Radix UI primitives (via local components), Shadcn UI (customized)
*   **Animation:**
    *   **GSAP:** Complex scroll timelines, cinematic intros.
    *   **Framer Motion:** Micro-interactions (hover, layout shifts).
    *   **Lenis:** Smooth scrolling.
*   **Media:** Mux Player (video), Spline (3D), Vimeo Player.
*   **State:** React Query (server), React Hooks (local).

## Development Workflow

### Key Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start local dev server (localhost:8080) |
| `npm run build` | Production build (TSC + Vite) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### File Structure
```
src/
├── components/
│   ├── ui/           # Low-level primitives (Button, Input)
│   ├── shared/       # Reusable components (FadeIn, ContactCTA)
│   ├── studios/      # Feature: Studios page components
│   ├── briefing/     # Feature: Briefing Engine components
│   └── navigation/   # Global nav
├── pages/            # Route-level components
├── hooks/            # Custom hooks (useHeroIntro, useScrollAnimation)
└── lib/
    └── utils.ts      # cn() helper
```

## Coding Standards

1.  **Functional Components:** Use `const Component = () => {}`.
2.  **Styling:** Use Tailwind utility classes combined with `cn()` for conditional styling.
3.  **Animation:**
    *   Use `useGSAP` for safe GSAP scoping.
    *   Respect `prefers-reduced-motion`.
    *   Clean up ScrollTriggers in `useEffect`/`useGSAP` return.
4.  **Performance:**
    *   Lazy load heavy sections (`React.lazy` + `Suspense`).
    *   Optimize images (WebP) and video (Mux `loading="viewport"`).

## Documentation Map

*   **`AGENTS.md`**: **READ THIS FIRST.** The playbook for design, copy, and interaction rules.
*   **`ARCHITECTURE.md`**: Deep dive into the tech stack and system design.
*   **`docs/`**: Contains detailed specs, animation patterns, and copy decks.
*   **`.codex/_MEMO.md`**: Current development context, active decisions, and scratchpad.

## Visual & Interaction Guidelines

*   **Hero Depth:** Layer base + spotlight + rim gradients.
*   **Micro-Interactions:** Magnetic buttons, chromatic aberration focus states, subtle glow.
*   **Glassmorphism:** Use `glass-card` classes for premium transparency effects.
*   **Responsive:** Mobile-first, but validate against large desktops (1920px+).
