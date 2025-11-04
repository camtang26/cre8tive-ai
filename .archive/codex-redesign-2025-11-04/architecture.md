# Decision Architecture — Studios & Conversational AI Refresh

## Executive Summary

The Cre8tive AI marketing site is expanding its flagship narrative through two parallel epics: the Studios overhaul and the Conversational AI overhaul. Each page delivers eight tightly specified sections defined in `docs/prototypes/LAYOUT-SPECIFICATION-EPICS-2-3.md`, emphasizing premium whitespace, controlled visual element counts, and Trinity copy framing (User-Outcome Focus, Word Precision, Emotional Resonance). This architecture keeps the established React 18 / Vite 5 / Tailwind 3 stack intact while introducing a schema-driven page composition model, strict build-time validation, and declarative analytics. Animations remain out of scope for this document and will be supplied by the GSAP Excellence team.

## Component Architecture

- **Config-driven sections:**  
  - `src/config/sections/studios.config.ts` and `conversational-ai.config.ts` export arrays of `SectionConfig` objects (≤ 20 lines each).  
  - Each config entry specifies the pattern type (`hero`, `copy`, `video-showcase`, `portfolio`, `testimonial`, `platform-demos`, `cta`), palette token (Film Noir vs. Abyssal Emerald), copy payload, visual-element descriptors, and analytics metadata.
- **Shared pattern library:**  
  - Reusable templates (`HeroPattern`, `CopyPattern`, `VideoShowcasePattern`, `PortfolioPattern`, `CTAPattern`) live in `src/components/sections/`.  
  - Patterns accept typed props and expose className slots for page-level customization.
- **Page-specific wrappers:**  
  - `src/pages/Studios/components/` contains thin wrappers (Hero, HybridModel, Portfolio, Testimonials, PlatformDemos, CTA) that import the relevant pattern, attach page-scoped styles, and forward refs for animation hooks \[TBD by GSAP team].  
  - Sections 3 (Full Marketing Video) and 4 (Process/Timeline) use the shared `VideoShowcasePattern` and `CopyPattern` directly; no wrapper is required beyond schema configuration.  
  - The Conversational AI page mirrors this structure under `src/pages/ConversationalAI/`.
- **Route integration:**  
  - Both pages are lazy-loaded via React Router (`lazy(() => import('./pages/Studios'))`, etc.).  
  - Above-the-fold hero sections render immediately; heavier subsections (video grids, testimonials) use dynamic imports housed in `pages/<Page>/loaders/`.
- **Schema enforcement:**  
  - `SectionConfig` enforces one-level-deep fields for readability: `{ id, pattern, palette, copy, visuals, analytics }`.  
  - `VisualElement` is a discriminated union that allows the validator to count non-text elements and uphold the “≤ 3 visuals” rule from the layout spec.

## Video Integration Strategy

- **Vimeo-first delivery:** Vimeo hosts all background loops, case-study reels, and the 10-minute Conversational AI demo. Section configs reference assets by Vimeo ID and optional custom poster URLs.  
- **Lazy loading & SDK usage:**  
  - Video sections mount lightweight placeholders immediately, then lazily load the Vimeo Player SDK with `import('@vimeo/player')` when the section enters the viewport.  
  - Portfolio grids and platform demos defer video player instantiation until the user engages (click or modal open).  
- **Posters & fallbacks:**  
  - Responsive poster frames live in `public/media/` and are declared in `src/config/media/vimeo.ts`.  
  - prefers-reduced-motion swaps the poster in place of autoplay loops; actual animation logic is deferred to the GSAP team.  
- **Analytics integration:** Video wrappers emit play, pause, and completion events through the instrumentation registry, including chapter-change events if the GSAP team or CMS supplies markers.

## Responsive Strategy

- **Breakpoint tiers:**  
  - Tailwind defaults (`sm` 640 px, `md` 768 px, `lg` 1024 px, `xl` 1280 px, `2xl` 1536 px) govern layout adjustments.  
  - The layout spec mandates minimum padding (`py-24` desktop, `py-16` mobile) and offset grids (60/40, 40/60) to preserve asymmetry; these values sit inside the pattern components with responsive class switches.  
- **Pattern adaptations:**  
  - `HeroPattern` stacks CTAs and trust badges vertically below `md`.  
  - `CopyPattern` reflows icons beneath body copy on small screens while preserving the ≤ 3 visual element count.  
  - `PortfolioPattern` reduces to a 2-column grid at `md`, 1-column at `sm`, with consistent gap tokens to maintain whitespace dominance.  
  - Platform demos maintain aspect-ratio wrappers (`aspect-[9/16]`, `aspect-[1/1]`, `aspect-[16/9]`) and rely on CSS grid order to keep cinematic compositions on narrow viewports.

## Performance Budget Controls

- **Global guardrails:**  
  - `performanceBudgetPlugin` enforces the 900 KB vendor ceiling post-build.  
  - New validations target ≤ 150 KB per Studios and Conversational AI route chunk; chunk sizes are surfaced via `vite build --report`.  
  - Suspense-based lazy loading ensures that above-the-fold code remains lean, while heavy subsections load on demand.
- **Resource loading:**  
  - Vimeo SDK is imported only when the first video component mounts.  
  - Route prefetching uses `<link rel="prefetch">` on navigation hover to improve UX without inflating initial bundle size.  
  - Assets in `public/` follow responsive naming conventions and are referenced via import aliases to leverage Vite hashing.

## Build-Time Validation

- **Validation plugin:** `sectionValidationPlugin` runs during Vite’s `buildStart`.  
  - **Hard errors (fail build):**  
    - `enforceWordCounts` (headline 5–7 words, subhead 15–25, body 60–100).  
    - `enforcePalette` (only Film Noir or Abyssal Emerald tokens).  
  - **Warnings (log only):**  
    - `enforceTrinity` flags copy that may lack explicit “you” phrasing, quantifiable proof, or aspirational language; these warnings feed manual review via the cre8tive-copy-excellence workflow.  
  - Console output identifies section ID, violated rule, actual count, and limit to simplify copy edits.

## Analytics Instrumentation

- **Declarative registry:** Section configs declare analytics metadata (`sectionCategory`, `exposures`, CTA identifiers, `mediaEvents`).  
- **Dispatcher:** `src/lib/instrumentation.ts` reads the schema and exposes helpers:  
  - `trackSectionExposure(sectionId, event)` triggered by ScrollTrigger hook \[TBD by GSAP team].  
  - `trackCTA(sectionId, variant)` invoked in CTA handlers prior to navigation.  
  - `trackVideoEvent(sectionId, action, metadata)` used by Vimeo wrappers (play, pause, completion, chapter).  
- **Environment & consent:** Tracking IDs resolve per environment (dev/staging/prod) and check cookie-consent state before emitting to GTM or Vercel Analytics.

## State Management

- The pages remain largely stateless:  
  - Section rendering derives purely from configuration arrays.  
  - Local component state handles UI toggles (e.g., video modal open state).  
  - No global state store is required; React Query remains in the stack for other site areas but is not involved here.  
  - Instrumentation helpers use lightweight module-level singletons (no context provider necessary).

## Implementation Checklist

1. **Update Tailwind tokens:** extend Film Noir and Abyssal Emerald palettes in `tailwind.config.ts`; add gradient utilities.  
2. **Implement validators:** create `enforceWordCounts`, `enforcePalette`, `enforceTrinity`, and `validateSections`; wire `sectionValidationPlugin` into `vite.config.ts`.  
3. **Author section configs:** populate `studios.config.ts` and `conversational-ai.config.ts` per layout spec, ensuring ≤ 3 visual elements and accurate CTA metadata.  
4. **Build shared patterns:** implement `HeroPattern`, `CopyPattern`, `VideoShowcasePattern`, `PortfolioPattern`, `CTAPattern` with responsive class structures and palette tokens.  
5. **Create page wrappers:** scaffold page-specific components and lazy loaders; annotate animation slots with placeholders (`// Animation hook [TBD by GSAP team]`).  
6. **Wire analytics dispatcher:** build `instrumentation.ts`, register section metadata, and integrate environment-aware tracking IDs.  
7. **Implement video wrappers:** create Vimeo player components with lazy SDK import, poster handling, and instrumentation calls; include prefers-reduced-motion fallback logic without animation specifics.  
8. **Set up route prefetching & Suspense skeletons:** ensure navigation hover prefetches pages and lazy sections show skeleton placeholders.  
9. **Run validation + bundle checks:** execute `npm run build` to verify section validators, performance plugin, and chunk size reports meet targets.  
10. **Hand off to GSAP Excellence:** once structural work is complete, tag `GSAP Animation Architecture` section for specialized implementation via `/bmad/gsap-excellence/`.

## GSAP Animation Architecture

(To be provided by GSAP Excellence team – see `/bmad/gsap-excellence/`. All sections include placeholders such as “Animation hook [TBD by GSAP team]”, “ScrollTrigger configuration [TBD by GSAP team]”, and “Timing/Easing [TBD by GSAP team]” within the component scaffolding.)

## Appendix — Project Context Snapshot

- **Project focus:** Refresh the Studios and Conversational AI service pages to embody the premium AI Briefing Engine narrative while staying within the static React/Vite marketing site architecture documented in the 2025-10-06 PRD.  
- **Scale & scope:** Two epics delivering 16 sections and 12 new components; each section adheres to Trinity copy framing, max-three visual elements, and locked palette rules.  
- **Non-functional constraints:** Vendor bundle ≤ 879 KB, page chunk targets ≤ 150 KB, Lighthouse ≥ 80/90/90, accessibility (ARIA labels, focus-visible states), deterministic layout spacing, and SEO continuity for existing routes.  
- **Dependencies:** React 18, Vite 5 (SWC), Tailwind 3, Vimeo assets, GTM + Vercel Analytics, manual QA via MCP / Chrome DevTools per docs/MCPs.md.  
- **Out-of-scope:** All GSAP/ScrollTrigger implementation, easing curves, parallax specifics, and performance tuning beyond placeholders—owned by the GSAP Excellence team.
