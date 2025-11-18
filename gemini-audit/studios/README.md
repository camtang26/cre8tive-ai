# Studios Page — GSAP Performance Audit Bundle

This bundle isolates every source file that renders the **Cre8tive Studios** marketing page so Gemini 3.0 can review the layout, Tailwind system, custom GSAP hooks, and video/asset loaders without needing the entire repository.

## What’s Included

```
./README.md                     — (this file) overview + audit notes
./tailwind.config.ts            — theme tokens (studios colors, fonts, spacing)
./src/pages/Studios.tsx         — route composition + Lenis hookup
./src/components/layouts/PageLayout.tsx — shared background shell for this route
./src/components/studios/*.tsx  — hero + seven narrative sections + CTA
./src/components/core/VimeoPlayer.tsx   — iframe wrapper for gallery cards & modal
./src/components/core/VideoModal.tsx    — portal-based Vimeo modal player
./src/hooks/*                   — all hooks touched by Studios (Lenis, GSAP, hero intro, gestures)
./src/lib/utils.ts              — shared helpers (e.g., `cn`)
./src/styles/utilities.css      — custom classes (hero particles, masks, textures)
```

> Not included: global navigation, footer, Conversational AI components, or backend/APIs. Studios imports `Navigation` and `PageLayout` at the route level; only `PageLayout` is bundled because `Navigation` relies on unrelated assets and doesn’t impact GSAP performance directly.

## Tech Stack & Architecture Snapshot

- **Framework:** React 18.3 + TypeScript 5.5, bundled with Vite 5.4 (SWC). SPA routes handled via React Router; routed page here is `Studios.tsx`.
- **Styling:** Tailwind CSS 3.4 with custom tokens defined in `tailwind.config.ts`, augmented by `src/styles/utilities.css` for bespoke gradients, particles, and hero masks.
- **Animation Layer:** GSAP 3.13 + ScrollTrigger + SplitText (`useHeroIntro`, `useSectionReveal`, `useDirectionalReveal`, `usePortfolioAnimation`); Lenis 1.3 handles smooth scrolling and syncs back into ScrollTrigger via `useLenisSmooth`.
- **Video / Media:** `@mux/mux-player-react/lazy` streams hero + workflow backgrounds; `@vimeo/player` powers the gallery cards + modal playback. Both are initialized directly inside section components.
- **UI System:** Shadcn/UI primitives elsewhere in the repo, but Studios sections rely on hand-built components plus shared helpers like `cn` in `src/lib/utils.ts`.
- **State & Utilities:** Minimal local state (hooks per section). Accessibility hooks (`usePrefersReducedMotion`, `useIsMobile`) gate animations; gesture helper available for mobile testimonial carousel variants.
- **Performance Aids:** RAF-throttled navigation (outside bundle), Lenis+GSAP integration, `will-change` lifecycle management inside hooks, and magnetic CTA CSS tied to pointer vars.

This context should give Gemini enough architectural grounding to reason about how scroll orchestration, styling tokens, and media layers interact on the Studios page without needing the entire repository.

## Route + Section Graph

1. `src/pages/Studios.tsx`
   - Wraps page in `PageLayout` + `Navigation` (external) and wires `useLenisSmooth()` for Lenis ↔️ GSAP sync.
   - Renders eight sections in order. Each section exposes `data-motion-*` or `data-reveal-*` hooks for GSAP timelines.

2. Section components (in render order):
   - `StudiosHero.tsx` — pointer-reactive hero, `MuxPlayer` background, `useHeroIntro` SplitText animation, magnetic CTAs.
   - `StudiosChallengeSection.tsx` — comparison narrative; `useSectionReveal` animates `[data-reveal-challenge]` nodes.
   - `StudiosPortfolioSection.tsx` — 6-card Vimeo grid with modal playback; `usePortfolioAnimation` drives alternating L/R slide-ins.
   - `StudiosProductionStackSection.tsx` — long-form copy + platform glyph grid using `useSectionReveal` (text) and `useDirectionalReveal` (grid).
   - `StudiosWorkflowSection.tsx` — workflow copy plus `MuxPlayer` embed; `useSectionReveal('[data-reveal-workflow]')` for timed reveals.
   - `StudiosStandardsSection.tsx` — qualification block; `useSectionReveal('[data-reveal-standard]')`.
   - `StudiosPlatformDemoSection.tsx` — triple Mux frames; `useSectionReveal` with `SectionRevealPresets.hero` for Expo easing.
   - `StudiosTestimonialsSection.tsx` — sculpted testimonial pods; internal `TestimonialCard` handles stagger/delays (no GSAP).
   - `StudiosContactCTASection.tsx` — CTA finale with CSS keyframes (`cta-fade-in`).

## Animation & Performance Systems

| Hook / Module | File | Purpose |
| --- | --- | --- |
| `useLenisSmooth` | `src/hooks/useLenisSmooth.ts` | Initializes Lenis with GSAP ticker tie-in, disables lag smoothing, and updates ScrollTrigger on every Lenis scroll event. Critical for diagnosing scroll perf jank.
| `useHeroIntro` | `src/hooks/useHeroIntro.ts` | SplitText-driven hero headline animation with fonts.ready guard, StrictMode dedupe, and `prefers-reduced-motion` instant reveal.
| `useSectionReveal` | `src/hooks/useSectionReveal.ts` | ScrollTrigger.batch wrapper managing `will-change` hints dynamically (adds onStart, clears onComplete) to avoid GPU leaks.
| `useDirectionalReveal` | `src/hooks/useDirectionalReveal.ts` | Alternating left/right entrance for card grids (platform glyphs) using ScrollTrigger batches.
| `usePortfolioAnimation` | `src/hooks/usePortfolioAnimation.ts` | Custom ScrollTrigger timeline for `[data-motion="portfolio-card"]`, alternating even/odd cards, respects reduced-motion.
| `useGestures` | `src/hooks/useGestures.tsx` | Touch gesture helper used only when porting testimonial carousels to mobile (kept here for completeness).
| `useIsMobile`, `usePrefersReducedMotion` | `src/hooks/use-mobile.tsx`, `src/hooks/usePrefersReducedMotion.ts` | Device + accessibility utilities consumed by hero & hooks.

### Data Attributes (attach your GSAP timelines here)

- Hero: `data-motion="hero.copy"`, `data-motion="hero.cta.primary"`, pointer CSS vars `--pointer-x/y`.
- Challenge: `data-reveal-challenge` across all text & cards.
- Portfolio: `data-motion="portfolio-card"`, `data-motion-order`, `data-motion="portfolio-grid"` (grid container), `[data-motion="portfolio-card-media"]` for video surfaces.
- Production Stack: `data-reveal-stack` for copy rail, `data-reveal-platform` for glyph cards.
- Workflow: `data-reveal-workflow` for both copy + video frame wrappers.
- Standards: `data-reveal-standard` and `data-motion="standards-*"` on headings/body.
- Platform Demo: `data-reveal-feature` on copy blocks, `data-motion="platform-demo-copy"` wrappers.
- Contact CTA: relies on CSS keyframes defined inline + `utilities.css` noise layers (no GSAP hook yet).

### Styling / Token Context

- Tailwind tokens for `bg-studios-*`, `text-studios-headline`, etc., live in `tailwind.config.ts` under the `studios` color namespace.
- Custom hero textures (`.studios-hero-particles`, `.hero-pointer-highlight`, `.cta-magnetic`, etc.) are defined inside `src/styles/utilities.css`.
- All gradients/masks in components rely on raw CSS `bg-[radial-gradient(...)]` strings; there’s no shared token yet.

## External Dependencies Worth Flagging

- **Mux Player** (`@mux/mux-player-react/lazy`) powers hero + workflow backgrounds. Playback IDs are hard-coded constants in each component.
- **Vimeo Player** uses the lightweight `@vimeo/player` package with manual iframe creation (`src/components/core/VimeoPlayer.tsx`). Portfolio cards always mount the iframe; modal reuses the same player.
- **Framer Motion / Navigation** aren’t part of this bundle. Navigation attaches scroll listeners + RAF loops, so performance analysis should consider that when evaluating scroll jank even though its files aren’t included.

## Known Perf Watchpoints for Gemini

1. **Lenis + ScrollTrigger Coordination** — `useLenisSmooth` hooks Lenis into the GSAP ticker and disables lag smoothing globally. Validate whether this double RAF loop is contributing to dropped frames or ScrollTrigger timing drift.
2. **Mux & Vimeo Decoding** — Hero + workflow sections stream 4K+ footage; ensure `MuxPlayer` props (`autoPlay`, `loading="viewport"`, `preload="none"`) are optimal and check for redundant poster decode.
3. **ScrollTrigger Volume** — `useSectionReveal` batches dozens of elements. Confirm observers are killed on unmount and that `ScrollTrigger.batch` counts stay reasonable across viewport widths.
4. **GPU Hint Churn** — Several components set CSS filters/blur + inline gradients. Cross-check with the hook’s `will-change` management to make sure we’re not leaking GPU layers elsewhere (e.g., hero pointer highlight sets `will-change` inline).
5. **Modal Lifecycle** — `VideoModal` locks `document.body.style.overflow`; ensure cleanup occurs if the user navigates mid-flight.
6. **Reduced Motion** — All GSAP hooks bail out when `prefers-reduced-motion` is true, but hero pointer/CTA effects still run via CSS. Validate whether additional guards are needed.

## How to Use This Bundle

1. Zip `gemini-audit/studios` and upload to Gemini Canvas.
2. Let Gemini know:
   - The entry point is `src/pages/Studios.tsx`.
   - GSAP hooks live under `src/hooks/`.
   - Tailwind tokens + utility classes are required to interpret the custom class names.
3. Ask Gemini to focus on:
   - Reducing ScrollTrigger count or batching strategies.
   - Optimizing Lenis/GSAP integration (possible `ScrollSmoother` swap, virtualization, etc.).
   - Video loading/prefetch strategy across hero, workflow, and portfolio sections.
   - Memory footprint from layered gradients and `backdrop-blur` usage.

Let me know if you also want the Conversational AI bundle prepared the same way or if you need additional docs (e.g., GSAP handoff notes from `/docs`).
