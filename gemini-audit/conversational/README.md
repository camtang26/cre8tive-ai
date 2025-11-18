# Conversational AI Page — GSAP Performance Audit Bundle

This bundle contains every source file required to evaluate the **Conversational AI** service page so Gemini 3.0 can inspect its GSAP timelines, IntersectionObserver fades, bespoke glassmorphic components, and embedded media without pulling the entire repo.

## What’s Included

```
./README.md                            — audit notes + instructions
./tailwind.config.ts                   — token definitions (conversational palette, fonts, spacing)
./src/pages/ConversationalAI.tsx       — route assembly + Convai script injection
./src/components/conversational/*      — hero + seven narrative sections (+ legacy utility sections)
./src/components/conversational/shared — GlassmorphicCard + MetricCounter building blocks
./src/components/layouts/PageLayout.tsx— shared background shell (no Navigation to reduce noise)
./src/components/shared/FadeIn.tsx     — wrapper around IntersectionObserver-driven fade hook
./src/hooks/{useHeroIntro,usePrefersReducedMotion,use-mobile,useFadeIn}.tsx — hooks referenced by this page
./src/lib/utils.ts                     — `cn` helper used everywhere
./src/styles/utilities.css             — custom noise textures, hero masks, CTA keyframes
```

> Not bundled: global navigation/footer, backend integrations, or unrelated GSAP utilities. Navigation is referenced in the page entry but excluded here (pull from repo if you need to profile nav RAF throttling separately).

## Tech Stack & Architecture Snapshot

- **Framework:** React 18.3 + TypeScript 5.5 with Vite/SWC. The page renders as a client-side route at `/conversational`.
- **Styling:** Tailwind CSS 3.4 + bespoke CSS in `utilities.css` for hero gradients, blur overlays, and CTA magnetism.
- **Animation Layer:** GSAP 3.13 with @gsap/react, ScrollTrigger, SplitText (via `useHeroIntro`), plus custom timelines inside each section. `FadeIn` uses native IntersectionObserver for simple opacity transitions.
- **Media:** `@mux/mux-player-react/lazy` for hero + marketing/live demo sections; inline `<video>` elements are absent. Lucide icons provide vector glyphs. The page dynamically loads `@elevenlabs/convai-widget-embed` via `<script>` in `useEffect` so the live demo widget boots automatically.
- **Utilities:** `GlassmorphicCard` implements Codex’s glassmorphism pattern with inline `<style>` for GPU hints; `MetricCounter` uses GSAP to animate numeric values when scrolled into view. Hooks like `usePrefersReducedMotion`/`useIsMobile` gate interactions.

## Route & Section Graph

1. **`ConversationalAI.tsx`**
   - Injects EleventLabs Convai widget script on mount/unmount.
   - Wraps content with `PageLayout` + `Navigation` (external) and stitches eight sections. Sections 2–7 are wrapped with `FadeIn` (IntersectionObserver) prior to their internal GSAP animations.

2. **Sections (render order):**
   - `ConversationalHero.tsx`
     - Pointer-reactive hero with Mux background video, `useHeroIntro` SplitText animation, magnetic CTAs using CSS vars `--cta-*`, and pointer highlight controlled via `--pointer-x/y`.
   - `ConversationalUseCasesSection.tsx`
     - Bento grids with `GlassmorphicCard` tiles, `gsap.from` + ScrollTrigger on desktop/tablet/mobile refs (`desktopGridRef`, etc.). Custom tilt effect on mouse move.
   - `ConversationalMarketingVideoSection.tsx`
     - Dual-column layout: Mux player card + metadata card. `gsap.from([...])` fades both cards with a 0.2s stagger; custom overlay play button toggles `MuxPlayer` playback.
   - `ConversationalScaleSection.tsx`
     - Sticky metric column with `MetricCounter` (GSAP-based numeric tween) and benefit cards animated via ScrollTrigger.
   - `ConversationalLiveDemoSection.tsx`
     - Rich timeline describing a 10‑minute live demo. Uses `GlassmorphicCard` for video + chapter list plus badges for telemetry; data attributes like `data-live-demo` mark wrappers (see file for specifics).
   - `ConversationalBrandSection.tsx`
     - Three-step onboarding timeline: progress bar width tween + sequential step bubbles + card reveal controlled via a single GSAP timeline scoped to `sectionRef`.
   - `ConversationalEnterpriseSection.tsx`
     - Compliance/enterprise capability grid; uses GSAP to animate cards per breakpoint (desktop vs. tablet/mobile containers) plus gradient dividers.
   - `ConversationalContactCTASection.tsx`
     - CTA finale with GSAP-powered magnetic hover buttons and gradient glows; honors `prefers-reduced-motion` inside event handlers.

   Additional unused/legacy components (`ApplicationsSection`, `HeroSection`, `CallToAction`, etc.) live alongside but are not currently mounted; they remain for parity and potential reuse.

3. **Shared elements:**
   - `GlassmorphicCard` handles layered borders/backdrop blur and injects an inline `<style>` block for GPU acceleration + reduced-motion fallbacks.
   - `MetricCounter` ties GSAP timelines to ScrollTrigger to animate numerical stats once.
   - `FadeIn` + `useFadeIn` apply `fade-in-visible` class via IntersectionObserver; note that this runs in addition to GSAP, so overlapping animations may double-fire.

## Animation & Hook Inventory

| Module | Location | Notes |
| --- | --- | --- |
| `useHeroIntro` | `src/hooks/useHeroIntro.ts` | SplitText hero intro shared with Studios/Conversational pages; includes StrictMode guard + font loading wait + reduced-motion bailouts.
| `usePrefersReducedMotion` / `use-mobile` | `src/hooks/` | Provide gating for CTA hover GSAP, tile tilts, ScrollTrigger sequences.
| `useFadeIn` | `src/hooks/useFadeIn.tsx` | IntersectionObserver that tags wrappers with `fade-in-visible`; ensures sections fade even if GSAP fails, but can overlap with ScrollTrigger effects.
| Section-level `useGSAP` hooks | inside each `Conversational*Section.tsx` | Typically register ScrollTrigger once per component (e.g., `gsap.from(desktopGridRef.current?.children || [], …)`). Look for repeated plugin registrations (every file calls `gsap.registerPlugin(useGSAP, ScrollTrigger)` at module scope).
| `MetricCounter` | `src/components/conversational/shared/MetricCounter.tsx` | ScrollTrigger with `once: true`, but still sets up per-instance triggers; verify they are killed on unmount.
| `ConversationalContactCTASection` | `src/components/conversational/ConversationalContactCTASection.tsx` | Uses raw `gsap.to` inside pointer handlers for “magnetic” CTA movement; runs outside ScrollTrigger.

### Data Attributes & Hooks

- Hero: `data-section="conversational-hero"`, CSS vars `--pointer-x/--pointer-y` for highlight tracking, classes `.convai-hero` for hooking.
- Use Cases: `data-motion-group="use-cases"`, but GSAP currently targets refs directly (`desktopGridRef.current?.children`).
- Marketing Video: IDs `#conversational-marketing-video`, refs `videoCardRef` / `metadataCardRef` for `gsap.from` sequences.
- Scale: IDs `#conversational-scale`; metric cards rely on `MetricCounter` triggers rather than explicit data attributes.
- Live Demo + Brand/Enterprise sections employ `ref` + `.children` selectors; no explicit `data-` attributes beyond IDs.
- CTA: GSAP manipulates inline CSS custom properties on pointer events for button attraction.

## External Dependencies / Integrations

- **Mux Player:** Each video section loads `@mux/mux-player-react/lazy`. Playback IDs are hard-coded constants; autoplay toggles obey `usePrefersReducedMotion` & `useIsMobile` gating.
- **ElevenLabs Convai Widget:** `ConversationalAI.tsx` injects `https://unpkg.com/@elevenlabs/convai-widget-embed` on mount. This script may create global listeners and network activity even while the rest of the page animates.
- **Lucide Icons:** Provide vector glyphs used inside cards (e.g., `Headset`, `Rocket`).

## Known / Suspected Perf Watchpoints

1. **Plugin Registration Overhead:** Every section file registers `useGSAP` + `ScrollTrigger` at module scope. Audit whether this double-registration is necessary or if a central `gsap.registerPlugin` would reduce overhead.
2. **Overlap Between FadeIn & GSAP:** Sections wrapped in `<FadeIn>` run IntersectionObserver animations while GSAP also animates the same elements, risking conflicting transforms/opacity states and duplicate observers.
3. **ScrollTrigger Volume:** Each section instantiates multiple ScrollTriggers (desktop, tablet, mobile grids; metric cards; brand timeline). Confirm triggers are killed on unmount, and consider consolidating with `gsap.context()` or `matchMedia` to reduce watchers.
4. **Inline `gsap.to` in Pointer Handlers:** CTA magnet effect spawns new tweens on every pointer move; check for `gsap.killTweensOf(target)` or throttle to prevent queue buildup.
5. **Mux Player Loading:** Both hero and marketing/live demo sections stream large videos with `preload="none"` but still instantiate players immediately. Validate whether IntersectionObserver gating or poster placeholders would help.
6. **GlassmorphicCard Inline Styles:** The injected `<style>` tag adds `will-change: transform` globally to `.group`; ensure GPU layer count stays reasonable on mobile.
7. **Convai Script:** Third-party widget loads even if user never opens the demo; verify it doesn’t block GSAP threads or add jank.

## How to Use This Bundle

1. Zip `gemini-audit/conversational` and upload it to Gemini Canvas along with this README.
2. Tell Gemini the entry file is `src/pages/ConversationalAI.tsx` and that all section implementations live under `src/components/conversational/`.
3. Ask Gemini to audit GSAP/ScrollTrigger usage, IntersectionObserver overlaps, Mux player load strategy, and CTA pointer tweens, then produce a prioritized refactor plan similar to what you requested for the Studios page.
4. If Gemini needs navigation/footer context, direct it back to the main repo; otherwise everything necessary for the Conversational route is self-contained here.

Let me know if additional documentation (GSAP handoff notes, Convai integration specs, etc.) would help.
