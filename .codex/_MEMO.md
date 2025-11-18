# Focus Anchors

- Branch: `GSAP-segmentation`
- **Canon:** November 3, 2025 documentation suite (`docs/bmm-index.md` + linked guides) is the baseline; treat older notes as archival unless reconfirmed.
- **Mission (legacy animation work):** Finish the segmented `/briefing-engine` timeline with responsive desktop tiering so every viewport (1024 px–3440 px) feels intentional, animations stay premium, and progress affordances remain crystal clear.
- **Today’s Priority:** Realign `.codex` knowledge artifacts with the November 3 documentation so future sessions start from the correct operating picture before resuming feature work.
- Palette invariant: dark indigo/cyan/fuchsia + holographic highlights; preserve cinematographer aesthetic while tuning layouts.
- Adaptive performance stack (Story 1.14) stays enabled via `performance-adapter`, `adaptive-config`, `useAdaptivePerformance`.
- Build still passes (`npm run build`); lint blocked by repo unicorn config + legacy `any` in perf tests (logged for future cleanup).

## 2025-11-03 — Studios Section 4 Kickoff

## 2025-11-18 — Session Primer & Charter (Codex Session 2)
- Reopened SPEC.md, ARCHITECTURE.md, README.md, CONTRIBUTING.md, `.codex/_MEMO.md`, `.codex/PLAN.md`, `.codex/REPORT.md`, `docs/MCPs.md`, and TASK.md at session start so this pass references the November 3 canon before answering documentation questions.
- Key references refreshed:
  - README.md reiterates the marketing site’s React 18 + TypeScript + Vite core, Tailwind/Shadcn UI system, Framer Motion + GSAP animation stack, and integrations like Vercel Analytics, GTM, getform.io, Cal.com, ElevenLabs, Vimeo, and Spline.
  - ARCHITECTURE.md documents the JAMstack deployment to GitHub Pages, Node 20 dev tooling, manual code splitting guidelines, animation and 3D libraries, and the reliance on third-party APIs instead of a custom backend.
  - SPEC.md restates personas (business decision makers, marketing teams) and the flagship sections (Studios, AI Briefing Engine, Agents, Conversational AI) while reaffirming analytics, SEO, and security expectations.
  - CONTRIBUTING.md locks the Node 20 + npm 9 toolchain, lint/test commands, Tailwind + Shadcn patterns, and hooks for plan/memo alignment before coding.
  - `.codex/PLAN.md` keeps the Studios & Conversational overhaul roadmap (currently mid S3, sections 3–8 partially complete), `.codex/REPORT.md` logs latest completed sections, and TASK.md shows S3-03 through S3-08 plus documentation realignment tasks as in-progress.
  - `docs/MCPs.md` reminds us Archon MCP research and Chrome DevTools MCP visual validation are mandatory before large implementation steps; noted for future motion but not needed for today’s read-only doc synthesis.

### AI Product Charter — Documentation Overview (2025-11-18)
- **Problem:** Cameron needs a concise, trustworthy summary of the project’s current tech stack and hosting infrastructure straight from repo documentation so stakeholders can orient without digging through multiple files.
- **Target User:** Cameron (project owner) plus collaborating engineers/PMs who are onboarding and need high-level architecture context quickly.
- **Success Signal:** Deliver a written overview that cites the definitive repo docs, covers runtime/tooling/framework/hosting choices, and highlights deployment + integration infrastructure so stakeholders confirm understanding without requesting follow-ups.

### AI Product Charter — Production Merge Plan (2025-11-18)
- **Problem:** The optimized `studios/conversational-redesign` branch contains GSAP performance fixes required in production, but `master` (the deployment branch) does not include these changes; we need a safe merge strategy that preserves history, passes all quality gates, and triggers the GitHub Actions deploy without regressions.
- **Target User:** Cameron (release owner) who needs confidence that the live site reflects the latest Studios + Conversational fixes, plus any teammate verifying production stability via the GitHub Actions pipeline.
- **Success Signal:** Master receives the verified merge commit(s), CI/CD runs cleanly, and we provide a documented, repeatable checklist (plan + validation steps) so Cameron can confirm production is updated without surprises.

#### Merge Context Notes
- `studios/conversational-redesign` is ahead of `master` by commit `2088fd8` (GSAP refactors) while `master` has `106470b` (lint fixes) not present on the feature branch; fast-forward is impossible, so a merge or rebase is required.
- Production deploys automatically when `master` on origin updates; we must ensure the GitHub Actions job defined in `.github/workflows/deploy.yml` still succeeds under the merged code.
- Two worktrees are involved: current repo path for the feature branch and `/home/cameronai/projects/cre8tive-website-master` checked out to `master`. The merge plan should account for syncing both trees and keeping them clean.

## 2025-11-18 — Production Merge Execution
- Ran `git fetch --all --prune` on both worktrees, recorded the delta (`git log master..studios/...`, `git diff master...studios/... --stat`) so the release scope (GSAP refactors, GSAP audit dirs, local poster assets, docs) is documented.
- Rebased `studios/conversational-redesign` onto `origin/master`; resolved the single conflict in `src/components/studios/StudiosTestimonialsSection.tsx` by keeping the GSAP `useSectionReveal` timeline and dropping the legacy inline animation CSS. Branch head now includes `9d2cafb` (refactor commit) plus `9940f75` (merge plan docs).
- Validation cadence: `npm run build` passes on the feature branch and again after the master fast-forward. `npm run lint` still fails from legacy issues (archived files missing unicorn plugin + Conversational `any` types); accepted as known debt pending lint config clean-up.
- Fast-forwarded `/home/cameronai/projects/cre8tive-website-master` to the rebased branch, reran `npm run build`, and pushed `master` (commit `9940f75`) to origin. GitHub Actions run `Deploy to GitHub Pages` [19457199155] succeeded in ~55 s; production deploy is in flight for Cameron to smoke-test on `cre8tive.ai`.
- Next: capture MCP screenshots/perf traces against production once verified, then summarize the release and risks in `.codex/REPORT.md`.

## 2025-11-17 — Session Primer & Gemini Canvas Research Prep
- Re-opened SPEC.md, ARCHITECTURE.md, README.md, CONTRIBUTING.md, docs/MCPs.md, TASK.md, `.codex/PLAN.md`, `.codex/REPORT.md`, and the locked copy/palette docs to ensure this session references the November 3 canon before any changes.
- Active focus remains the Studios page rebuild (Sections S3-03 through S3-08 in TASK.md); Conversational AI work stays queued until Studios sign-off.
- Stakeholder request: perform detailed research on the reported “Gemini 3.0” stealth release inside the mobile Gemini app (Canvas mode) so we can speak confidently before applying any direction.
- Outstanding questions: need verifiable intel on Canvas-specific capabilities, rollout timeline, feature gating/eligibility, and how it might influence Studios storytelling or tooling. Awaiting clarification after research synthesis.

### Research Capsule — Gemini 3.0 via Canvas (Mobile) — 2025-11-17
- **Baseline Canvas UX (Mar–May 2025)**: Mobile Canvas arrived alongside the redesigned plus menu (Camera/Gallery/Files/Drive) and shortcut chips for Deep Research + Canvas; editing requires closing drafts and re-prompting (no split view or inline selection). Sources: 9to5Google Mar 18 + Mar 20 coverage, gAgadget recap.
- **Workspace vs consumer divergence**: Google Workspace update (Mar 2025) positioned Canvas as desktop-first for business/education tenants, with mobile “planned later,” signaling why today’s stealthy mobile lift is surprising.
- **Stealth-release signals (Nov 13 2025)**: AndroidSage + WinBuzzer documented a sudden leap in Canvas quality on iOS/Android while the UI still labels responses as “Gemini 2.5 Pro.” Power users (Reddit/X) are seeing richer SVG animation, voxel scenes, and full website scaffolding from single prompts, outperforming desktop Canvas.
- **Model attribution uncertainty**: Both reports emphasize that Google hasn’t bumped the visible model picker; hypothesis is the Canvas backend quietly swapped to Gemini 3.0 while the front-end + API names lag.
- **Official hints**: Sundar Pichai’s recent “thinking” emoji reply to Polymarket wagers plus Yahoo Finance coverage suggests Google is nudging expectations for a late-November Gemini 3 announcement even though no release blog exists yet.
- **Implications**: If mobile Canvas is already tapping Gemini 3 class weights, Studios storytelling or experimentation could showcase “prototype on-phone” workflows before desktop parity, but we must caveat that it’s undocumented and could revert.

### 2025-11-17 — Studios Audit Bundle Prep
- Created `gemini-audit/studios` with all current Studios route files (`src/pages/Studios.tsx`, hero + 7 sections, CTA) plus required hooks (`useLenisSmooth`, `useSectionReveal`, `useDirectionalReveal`, `usePortfolioAnimation`, `useHeroIntro`, `use-mobile`, `usePrefersReducedMotion`, `useGestures`), shared utilities, and Tailwind + CSS token files.
- Added supporting media components (`src/components/core/VimeoPlayer.tsx`, `VideoModal.tsx`) so Gemini can inspect autoplay behavior and modal lifecycle. `Navigation` intentionally excluded; documented in bundle README.
- Authored `gemini-audit/studios/README.md` outlining structure, GSAP hook map, data attributes, and known perf watchpoints so Gemini 3.0 can jump straight into diagnosing ScrollTrigger load, Lenis integration, and video decode pressure.

### 2025-11-17 — Conversational AI Audit Bundle Prep
- Mirrored the Studios process for the Conversational AI route: created `gemini-audit/conversational` with `src/pages/ConversationalAI.tsx`, all conversational section components (hero → CTA, plus legacy sections), shared glassmorphic primitives, and every hook used by this page (`useHeroIntro`, `usePrefersReducedMotion`, `use-mobile`, `useFadeIn`).
- Included `FadeIn`/`useFadeIn` because the route wraps six sections in that IntersectionObserver layer before applying GSAP, plus `tailwind.config.ts` and `utilities.css` for the emerald palette + CTA keyframes.
- Authored a dedicated README capturing route graph, GSAP timelines per section, external integrations (Mux players + ElevenLabs Convai widget), and perf watchpoints (duplicate ScrollTriggers, FadeIn overlap, CTA pointer tweens). Bundle is zip-ready for Gemini.

### 2025-11-17 — Studios Performance Refactor (P1–P4)
- **Scroll system:** Removed the bespoke `useLenisSmooth` hook and wrapped `PageLayout` in `#smooth-wrapper/#smooth-content` so GSAP `ScrollSmoother` now governs Studios. Registered `ScrollTrigger/ScrollSmoother` at page scope and cleaned up Lenis CSS refs.
- **Media deferrals:** Hero video now mounts only after `useHeroIntro` completes; the hook accepts an `onComplete` callback (with reduced-motion fallbacks) so we can flip `isIntroAnimationComplete` and then render `MuxPlayer`. Portfolio cards no longer mount hidden Vimeo iframes—the modal still streams when users click. Platform demo frames now use `autoPlay="visible"` so only in-view Mux instances decode.
- **Observer strategy:** Rewrote `useSectionReveal` and `useDirectionalReveal` to accept a `trigger` selector and create a single timeline per section instead of dozens of `ScrollTrigger.batch` observers. Updated Challenge, Stack, Workflow, Standards, Platform Demo, and Testimonials sections with explicit `trigger` targets; platform glyphs now use one timeline for even/odd cards.
- **Will-change cleanup:** Removed stray `will-change` inline styles from the hero overlays/video. Testimonials drop custom keyframes/will-change styles and now rely on the refactored `useSectionReveal` with `[data-motion="testimonial-card"]` selectors so GPU layers spin up only during the reveal stagger.
- **Validation:** `npm run build` passes (Vite 5.4.10). Vendor bundle remains 340 kb / 900 kb. Remaining warnings: stale Browserslist data + >1 MB chunk on legacy assets (pre-existing).

## 2025-11-08 — Studios Hero Mask Iteration
- Cameron wants the hero video to breathe more; current `.hero-curve-mask` radial gradient darkens a large rectangle and hides the Mux footage.
- Plan: test five premium alternatives sequentially (glass scrim, rim-lit frame, spotlight clamp, animated sweep, copy-only emphasis). After each implementation, capture notes + screenshots before deciding to keep or revert.
- Priorities for each iteration: preserve copy deck fidelity, keep CTA legibility, maintain GSAP hooks, log CSS deltas + rationale here, and update `/.codex/REPORT.md` with any motion guidance that emerges.
- **Iteration 1 — Glass scrim (2025-11-08 10:45 PT):** Replaced heavy radial mask with translucent glass layer + backdrop blur (`src/styles/utilities.css`). Added subtle cyan/gold rim gradients via `::after`, border radius, and inset glow so video plays through with 20–50 % opacity while copy remains legible. No markup changes. **Outcome:** look felt too frosted; removed per Cameron’s feedback.

- **Iteration 2 — Rim-lit frame (2025-11-08 11:05 PT):** New `::before`/`::after` stack creates edge-focused darkening plus cyan/gold rim glows while center stays mostly transparent (video visible). `mix-blend-mode: hard-light` keeps copy contrast without heavy blur. **Outcome:** reviewed, then removed to continue exploration.

- **Iteration 3 — Spotlight clamp (2025-11-08 11:20 PT):** Rebuilt `.hero-curve-mask` pseudo-elements so the darkening hugs only the text block using `mask-image` radial spotlight + constrained widths (`min(92vw, 56rem)`). Center remains nearly clear, edges carry a vignette + cyan/gold highlight. No markup changes. **Outcome:** client wants to continue exploring; reverted in favor of animated sweep.

- **Iteration 4 — Animated gradient sweep (2025-11-08 11:35 PT):** Converted pseudo-elements into a moving gradient scrim that drifts left (`@keyframes heroMaskSweep`), starting more opaque so copy lands readable, then revealing more of the Mux footage after ~2.6s. Added cyan/gold wash layer for rim light; overflow hidden keeps the sweep clean. Markup untouched. **Outcome:** stakeholder wants final option, so reverted sweep.

- **Iteration 5 — Copy-only emphasis (2025-11-08 11:45 PT):** Removed `.hero-curve-mask` overlays entirely so video sits fully exposed; leaned on enhanced `headline-premium` shadows/drop-shadows to keep copy readable without any blocking box. Essentially hero now relies on typography glow + CTA styling for contrast.
  - Subheader readability boost: added `hero-subhead` styling (soft cyan glow + drop-shadow) so the supporting paragraph holds contrast without reintroducing any background block.

## 2025-11-08 — Hero Background Aperture Pass
- Need to showcase more of the looping footage without simply lowering opacity. Cameron wants premium background refinements; we’ll cycle through five techniques (aperture mask, parallax haze, specular wash, pointer vignette, CTA fog) similar to the mask iteration playbook.
- **Background Option 1 — Layered aperture mask (2025-11-08 12:05 PT):** Added `hero-aperture-overlay` (absolute layer with masked radial gradients) so two “cutouts” open over the headline + CTA cluster while the rest of the canvas stays atmospheric. Keeps base gradients intact but exposes more video motion in focal zones. **Outcome:** felt too forced—removed after review.
- **Background Option 2 — Parallax haze strips (2025-11-08 12:20 PT):** Introduced `hero-haze-strips` with vertical coverage + linear gradient bands, `mix-blend-mode: screen`, and `heroHazeDrift` animation so translucent cyan/gold haze sweeps slowly across the hero, revealing more raw video while adding motion-ready atmosphere. **Outcome:** direction felt off, so removed.
- **Background Option 3 — Specular wash (2025-11-08 12:35 PT):** Layered a second muted MuxPlayer feed via `HeroSpecularWash` that boosts highlights (brightness/contrast/saturation + blur) with `mix-blend-mode: screen`. Adds luminous sheen over brighter regions while leaving darker areas untouched so more of the original video shows through without dimming the copy cluster. **Outcome:** too glowy; removed to pursue pointer vignette.
- **Background Option 4 — Pointer vignette (2025-11-08 12:50 PT):** Added `hero-pointer-vignette` overlay tied to `--pointer-x/y` so a soft halo follows the cursor, subtly brightening focus areas while a surrounding vignette darkens periphery to keep copy legible. Uses existing pointerActive state + `mix-blend-mode: overlay` so video remains visible everywhere else. **Outcome:** effect felt distracting; replaced with CTA fog treatment.
- **Background Option 5 — CTA fog (2025-11-08 13:05 PT):** Introduced `hero-cta-fog` gradient cluster hugging the CTA stack (radial cyan/gold glow + soft noir base) so the rest of the hero stays fully transparent while the CTA area gets atmospheric depth. Includes `ctaFogPulse` animation for slow breathing glow. **Outcome:** request to return to base overlays; fog removed and hero background reset to original gradient + particle stack.
- **Baseline tweak (2025-11-08 13:20 PT):** Softened `bg-studios-hero-base` gradient opacity in `tailwind.config.ts` (alphas 0.92→0.72 range) so full-screen blue wash feels lighter while keeping tone consistent.
- **Baseline tweak v2 (2025-11-08 13:25 PT):** Further reduced the same gradient to ~0.55–0.62 alpha so the video remains clearly visible even before future treatments are finalized.
- **Baseline tweak v3 (2025-11-08 13:30 PT):** Dropped `bg-studios-hero-base` again to ~0.42–0.48 alpha for an even lighter wash while keeping the palette intact.
- **Baseline tweak v4 (2025-11-08 13:34 PT):** Reduced the gradient once more to ~0.32–0.36 alpha so the hero background is now barely-there, giving the video near-full prominence.
- **Baseline tweak v5 (2025-11-08 13:38 PT):** Dropped gradient alphas to ~0.21–0.24, leaving only a whisper of midnight tint so the footage essentially owns the hero while preserving palette continuity.
- **Hero video overlay fix (2025-11-08 13:45 PT):** Removed the conditional fallback scrim in `HeroVideoBackdrop` so the dark gradient no longer disappears when `MuxPlayer` reports `loadeddata` (which often happens right after the first scroll/wheel interaction). Base overlay now stays at a constant ~80 % tint, so perceived background opacity stays consistent while the video plays underneath.
- **Hero overlay lightening (2025-11-08 13:50 PT):** Reduced the persistent overlay to ~45 % opacity and added a softer gradient pass so video shines through more without reintroducing the flicker issue.
- **Hero overlay lightening v2 (2025-11-08 13:55 PT):** Dropped the overlay to ~30 % + gentler gradient so the video is now the dominant visual even before future treatments.
- **Hero overlay lightening v3 (2025-11-08 14:05 PT):** Pulled persistent tint down to ~20 % and reduced spotlight/rim opacities plus pointer highlight intensity so the video reads almost fully exposed while keeping minimal structure for the copy.
- **Gradient mesh attenuation (2025-11-08 14:10 PT):** Lowered the alpha values for `bg-studios-hero-base`, `spotlight`, and `rim` in `tailwind.config.ts` (~0.08–0.28 range) so the residual cyan/gold mesh stops obscuring the footage while retaining a hint of color direction.
- **Gradient mesh attenuation v2 (2025-11-08 14:20 PT):** Re-applied the lighter (~0.05–0.18 alpha) mesh treatment after regression so the hero retains the more translucent cyan/gold wash Cameron preferred earlier.


- **Context:** Returning to the Studios page with Section 3 handled by the parallel session; our scope advances to Section 4 “What You Actually Get,” anchored to the copy in `docs/prototypes/studios-copy-final-2025-11-04.md`.
- **New directives:** Cameron reiterated a zero-tolerance rule for filler copy/components and introduced a mandatory post-implementation audit to ensure no stray text or badges slip in—only approved copy allowed.
- **Parallel work:** Another Codex agent is actively shaping Section 3; avoid conflicting edits and surface any shared token changes promptly.
- **Immediate next steps:** Execute the research triad (Archon, Context7, native web search) dated 2025-11-03, log a Section 4 capsule here, update `.codex/PLAN.md` with fresh intent, then design and build a bespoke production-stack visualization with animation-ready hooks.

### Section 4 — Production Stack (Research Capsule · 2025-11-03)

- **Goal:** Visualize the full Cre8tive Studios production pipeline so prospects instantly feel the “complete stack” promise—minimal copy, cinematic depth, clear handoff to GSAP for progressive reveals.
- **Patterns (Archon RAG · Awwwards luxury studios · 2025-11-03):**
  1. Luminous gradient spines to tie vertical timelines together while keeping surrounding space calm (FUTURE THREE®).
  2. Thin typographic columns with halo dividers and glass depth to spotlight premium process wayfinding (The Missing Element).
  3. Hover-activated glow passes that trace over stack layers without adding extra copy, delivering motion-ready cues (Stack VC).
- **Patterns (Native Web Search · 2025-11-03):**
  4. Advids’ video production landing advice highlights a clear Concept→Scripting→Storyboarding→Filming→Editing ladder that reads well as a vertical stack with concise labelsciteturn0search0.
  5. Vimeo’s cinematic landing roundup shows that pairing minimal copy with immersive media and standout CTAs keeps premium experiences focused and high-convertingciteturn0search1.
  6. Mailchimp’s guidance reinforces the need for supportive on-page copy in case visitors can’t play video, so typography must balance brevity with clarityciteturn0search3.
- **Implementation notes:**
  - Components: build a vertical “stack column” with layered translucent slabs, a cyan rim-lit spine, and `data-motion` hooks (`data-motion="stack-layer"` and `data-motion="platform-rail"`). Adjacent platform rail renders custom SVG glyphs (no off-the-shelf icon sets) for YouTube/TikTok/Instagram/LinkedIn/X/Facebook.
  - Tokens: may need new gradient tokens (`--gradient-stack-spine`, `--glow-stack-layer`); keep palette within midnight/cyan/gold references from `.archive/codex-redesign-2025-11-04/Studios/components`.
  - Tailwind gradients: Context7 pull reminded that `bg-radial-*`/`bg-conic-*` utilities accept arbitrary values, enabling layered glow treatments without custom CSS files.
  - Animation handoff: note desired entrance—stagger layers upwards, parallax glow sweep on scroll, platform icons shimmer sequentially.
  - Accessibility: ensure text is strictly from copy doc; use structured lists for screen readers; maintain ≥4.5:1 contrast on body copy over glass backgrounds; prepare reduced-motion alternative (static glow only).

#### Implementation status — 2025-11-03

- `StudiosProductionStackSection` now lives under `src/components/studios/` with glass stack layers, cyan spine, and a bespoke platform rail. Stack labels reuse copy sentences but are marked `aria-hidden` so screen readers follow the paragraph order in the text column.
- Updated `src/pages/Studios.tsx` to swap in the new section (wrapped in `FadeIn`) and removed the legacy `ExpertiseBenefits` import/usage to keep off-brief content off the page.
- Hooks for GSAP documented in-code: `data-motion-group="production-stack"`, layer elements with sequential `data-motion-order`, platform rail tagged separately for shimmer sequencing.
- `npm run build` (2025-11-03) passed; vendor bundle 340 kb / 900 kb ceiling. Viewport validation via Chrome DevTools MCP (1707×898 and 1920×1080) plus GSAP timing notes remain on the todo list for the post-implementation sweep.

# AI Product Charter — Documentation Realignment (2025-11-03 Codex Session 2)
- **Problem:** `.codex` knowledge artifacts drifted from the freshly generated November 3, 2025 documentation suite (bmm-index + derivatives), creating conflicting guidance for agents resuming work.
- **Target User:** Codex agents and collaborating humans who rely on `.codex/_MEMO.md`, `.codex/PLAN.md`, and `.codex/REPORT.md` to understand current architecture, priorities, and validation workflows.
- **Success Signal:** All `.codex` docs reference the November 3 documentation canon, highlight deltas versus prior guidance, and give clear next-step hooks so agents entering after today align without re-auditing the full docs set.

# AI Product Charter — Codex Video Placeholder Prototypes (2025-11-03 Codex Session 2)
- **Problem:** Current video placeholder prototype set was produced by Claude Code; Cameron needs parallel Codex-built versions grounded in latest best practices to compare quality and choose a foundation for Epics 2 and 3.
- **Target User:** Cameron (creative director) and downstream implementation agents who will adopt the selected pattern across Studios & Conversational AI pages.
- **Success Signal:** Three Codex-built placeholder variants (Minimal, Premium Glass, Bold Cinematic) matching research-backed accessibility/performance standards, demoed side-by-side with existing versions, accompanied by documented rationale and repository updates ready for evaluation.

# AI Product Charter — Copy Clarity Audit (2025-10-14 Codex Session 2)
- **Problem:** Briefing Engine & Studios copy reads like generic AI hype; stakeholders flag trust gaps and misaligned messaging.
- **Target User:** B2B marketing leaders, creative directors, and agency owners evaluating high-stakes AI production partners.
- **Success Signal:** Web copy that benchmarks against top-tier AI studios, survives stakeholder review without “AI slop” concerns, and anchors trust with proof (outcome metrics, process clarity, evidence-backed claims).

# Commands

```bash
npm run dev        # Dev server (http://localhost:8080) – ask user to restart if down
npm run build      # Production build (tsc + vite)
npm run build:dev  # Development build with source maps for diagnostics
npm run lint       # ESLint (fails due to unicorn + legacy any)
npm run test       # Vitest (not yet wired for briefing timeline)
npm run preview    # Preview production build on http://localhost:4173
npm run test:performance # Performance harness (see docs/performance-test-architecture-brief.md)
npm run predeploy  # Runs build prior to GitHub Pages deploy
npm run deploy     # Pushes dist/ to GitHub Pages (master branch is production)
```

# Impact Set — 2025-11-03 (Codex Session 2)
- `docs/bmm-index.md` + linked canonical docs (Current Architecture, Development Guide, Component Catalog, Documentation Freshness Report, Epic tech specs)
- `.codex/_MEMO.md`, `.codex/PLAN.md`, `.codex/REPORT.md` (synchronizing guidance with November 3 canon)
- `TASK.md` (pending update once backlog implications are confirmed)
- `AGENTS.md` (protocols already satisfied; no change needed after review)

# Decisions — 2025-11-03 (Codex Session 2)
- Treat the November 3, 2025 documentation sweep as the single source of truth; older `.codex` narratives remain historical references only.
- Continue manual QA as the validation gate—no automated tests exist despite `npm run test` scaffolding; note in docs to prevent false assumptions.
- Enforce the custom vendor bundle ceiling (≤900 kb) as a hard constraint for any future dependency decisions.
- Anchor deployment reminders on `master` being production and `npm run deploy` pushing to GitHub Pages.
- Preserve pending animation/hero initiatives in legacy sections but flag them as paused until documentation realignment completes.
- Cookie consent toast now guarded via a global flag so Strict Mode no longer double-mounts the notification; developer consoles should drop the duplicate status elements.
- Removed the invalid `X-Frame-Options` meta tag—security headers remain configured via Vite, which avoids the browser warning and keeps Vimeo embeds functional.
- Homepage hero reverted to the prior `MobileHero`/`DesktopHero` split so local parity matches production while we revisit performance experiments with stakeholders.
- Portfolio grid no longer instantiates hidden Vimeo players; cards use lightweight thumbnails with lazy loading and open the modal player on demand.
- BMAD agent prompt activations under `~/.codex/prompts` now point to `/home/cameronai/projects/cre8tive-website-1006/...`, eliminating accidental cross-project config loads (formerly pointed at CashFlo-AI).
- **Lighthouse follow-up (2025-11-03, post optimizations):** Desktop audit via headless Chrome yielded Performance **51** (up from 20), Accessibility **90**, Best Practices **93**, SEO **100**. Key improvements: requests ↓ to 191 (from 262), transfer size ≈ 9.6 MB (was 15.7 MB), TBT dropped to 240 ms (from 3.82 s), CLS 0.001. LCP/TTI remain ~57 s due to Vimeo hero stream still loading after manual enable; next step is placeholder poster or MP4 fallback for hero to avoid fetching heavy stream until user clicks.

# Knowledge Intake — 2025-11-03 Highlights
- Epic 1 (AI Briefing Engine) is the only fully implemented epic; Epics 4 & 5 and the Unified Voice Widget remain plan-only.
- Component inventory now tracks 178 components (~20 k LOC) with 27 dedicated to the Briefing Engine and 58 shadcn/ui primitives.
- Adaptive performance system (Story 1.14) governs particle counts/timeScale across tiers; will-change lifecycle policies documented in Component Catalog.
- Documentation bundle includes 24 GSAP mastery references plus exhaustive GSAP debugging/performance audits—leverage before shipping new timelines.
- No automated tests exist; validation scripts rely on manual MCP viewport sweeps, Lighthouse, and performance traces as per Development Guide.
- **Studios copy intake (2025-11-04):** docs/prototypes/studios-copy-final-2025-11-04.md defines nine sections following a challenge→validation→empowerment arc. Key beats: five-word hero headline, "Every Option Has Flaws" comparison grid, "Judge Yourself" six-video gallery, full-stack production explainer, flexible workflow section with BriefingEngine video, qualifying standards filter, platform-native showcase, testimonial proof, and broadcast-grade CTA.
- **Studios palette references:** Archived components under `.archive/codex-redesign-2025-11-04/Studios/components` + `sections/theme-utils.ts` lock premium hues (deep midnight base, cyan accent `#31C4FF`, golden primary `#E1B341`), gradient layering, and glass/blur treatments to reuse while rebuilding bespoke.
- **Layout cues from archive:** Hero layouts combine radial glows, bespoke masks, and artifact-grade video frames; portfolio grid uses rounded 28px frames with border + glow stacks; process section pairs copy with timeline bullet rail; CTA/testimonial components lean on sculpted pods and accent bullets—baseline references for bespoke rebuild.
- **Hero Research Capsule (2025-11-03):** Recent redesign case studies and 2025 B2B trend reports stress cinematic hero sections with full-screen product video, stripped-back copy, bold typography, and trust cues. Key takeaways: foreground the demo video under the headline, keep gradients dark and uncluttered (Medium Browser Use case), pair headline/subhead with high-impact CTAs (Contra AI SaaS hero), maintain minimalist layout with deliberate whitespace and limited palette (Hero.tt B2B trends), and reinforce credibility via trust badges or proof strips (AIAIAI 2025 landing guide). citeturn0search0turn0search1turn0search4turn0search5
- **Studios hero foundation:** Palette tokens added to Tailwind (`studios.*` colors + hero gradients/noise), new utilities for particle/noise layers, and hero rebuilt with background Vimeo loop, layered gradients, deluxe CTAs, and bespoke right-column showcase panel. Copy adheres exactly to final deck (headline, subhead, CTAs, trust signal pill).
- **Right-column concept brainstorm (2025-11-03):** Developed five high-end hero companion ideas—Director’s Control HUD, Platform Output Carousel, Live Brief→Shot Pairing, Color-Gel Spotlight, and Holobox Director View—to evaluate before prototyping. Captured details for stakeholder selection.
- **Studios hero polish pass (2025-11-03):** Layered iridescent/scanline headline treatments, magnetic primary CTA with chromatic aberration arrow, trailing-dot secondary CTA, ambient pointer highlight, and timeline markers overlay to hit the premium interaction bar while honoring reduced-motion preferences.
- **Challenge section research (2025-11-03):** 2025 B2B trend reports highlight reductive storytelling, micro animations, and high-contrast split layouts for comparison content; modern motion guidance favors gentle cursor-triggered shifts and fluid typography ≥16 px for readability. Authentic process imagery + interactive helpers outperform stock art, and AI-driven contextual tooltips are rising. citeturn0search0turn0search1turn0search3turn0search4turn0search6turn0search7turn0search11
- **Challenge section implementation (2025-11-03):** Built `StudiosChallengeSection` with copy-perfect body text and a four-card comparison grid (Traditional / AI Tools / In-House / Cre8tive Studios). Cards use sculpted surfaces, hover depth, and cyan accent for the Cre8tive column—no filler badges, only narrative-supporting content.
- Studios & Conversational page overhauls now follow a static-first build: ingest new copy/palette, craft responsive layouts/components in one pass (section-by-section if needed), and prepare animation hooks while the dedicated GSAP team handles timelines later.
- Copy direction will arrive via a new doc (Trinity framework retired); color palette notes will follow separately—no typography or token updates until both inputs land.
- AGENTS playbook rewritten (2025-11-03) to enforce minimalist, copy-driven delivery and motion-ready static builds; see `AGENTS.md` for updated session primer and guardrails.
- AGENTS playbook refined again (2025-11-03 PM) with deeper frontend design directives, dual-viewport Chrome DevTools validation, native web search requirements, explicit mandate to take whatever time/tools are needed for bold premium execution, and a creative-direction toolkit outlining narrative sprint, motion spec prep, advanced asset creation, and interaction polish expectations.
- Visual guardrails now include direct execution mandates: hero depth layering, deluxe CTAs, artifact-grade media frames, sculpted metric pods, ambient particle layers, and copy spotlight treatments (excluding divider system per stakeholder direction).
- Research workflow codified: every section demands Archon RAG, Context7 doc pull, native web search (dated 2025-11-03), and a synthesized pattern capsule logged in `_MEMO` plus references filed under `.codex/external/`.
- Baked in a bespoke-first rule—avoid generic shadcn/common patterns unless they deliver clear value; handcraft premium components tailored to Cre8tive’s brand.
- Added a viewport-fit protocol: immediate 1707×898 validation after every section, secondary checks at 1920×1080/1440×900, and responsive sweeps logged with fixes.
- Reinforced AGENTS guardrails: explicitly banned filler boxes/badges that don’t convey essential info; every supporting element must feel bespoke, valuable, and purposeful.
- AGENTS now includes copy fidelity + succinct contrast mandates: adhere strictly to provided wording and keep comparison statements punchy (≤130 characters).

# Open Questions — 2025-11-03
- Should we archive or condense legacy hero/timeline plans in `.codex/PLAN.md` to prevent confusion for future sessions once this realignment lands?
- Do we promote the responsive design epic (Epic 5) into the active backlog now, or wait for stakeholder confirmation after documentation sync?
- Are there stakeholders expecting execution on the Unified Voice Widget draft, or can it remain in opportunity backlog until animation initiatives stabilize?

# Opportunities Backlog — Updated 2025-11-03
1. Retire `archive/BriefToStoryboardAnimation.tsx` and `archive/VisualStylesGallery.tsx` to eliminate 1.4 k LOC of unused code.
2. Consolidate Vimeo players by removing `video/VimeoPlayer.tsx` duplicate once regression tests (manual) confirm parity.
3. Stand up minimal automated testing (Vitest/Playwright) or document why manual-only remains acceptable given current roadmap.
4. Schedule Epic 5 responsive optimization to tackle fluid typography, Windows scaling, and GSAP mobile tier adjustments.
5. Prototype the Unified Voice Widget (Level 0 spec) once documentation and responsive debt stabilize; reassess asset requirements.
6. Re-run the hero lazy-load experiment later (with stakeholder sign-off) and add instrumentation before reintroducing it.

# Next Steps — Documentation Realignment (Codex Session 2)
- Finish synthesizing November 3 findings into `.codex/_MEMO.md` (in progress) and cascade updates to `.codex/PLAN.md` and `.codex/REPORT.md`.
- Decide how much of the legacy hero/timeline planning remains actionable vs. archive references; note outcome in PLAN & TASK board.
- After codex docs align, coordinate with MCP validation playbooks to re-check Briefing Engine/hero visuals before resuming feature work.

# Epic 2/3 Foundation Notes — 2025-11-03 (Codex Session 2)
- Prototype-first workflow in motion: Sprint 0 locked alternating video/copy 8-section flows for both Studios and Conversational AI pages; Sprint 1 delivered 3 video placeholder systems + four palette options per page.
- Foundation decision gate is blocking progress – Cameron must choose: Video placeholder (Options A/B/C), Studios palette (A Film Noir ⭐ recommended), Conversational AI palette (A Cool Intelligence ⭐ recommended). No Sprint 2 hero prototypes until this is resolved.
- Studios emphasis: video showcase cadence (hero autoplay, marketing feature, “Our Work” reuse of 6 homepage Vimeo IDs, platform demos placeholders) interleaved with hybrid-model/process/testimonial copy.
- Conversational AI emphasis: enterprise-proof cadence (hero autoplay, marketing video, 10 min live demo with chapter markers) backed by use cases, scale-without-headcount proof, brand consistency, and enterprise features sections.
- Video placeholder components already exist in `/src/components/video-placeholders/*` with demo at `/video-placeholder-demo`; Option B keeps glassmorphism parity with Briefing Engine and offers best mobile UX.
- Research sweep (Archon NN/g glassmorphism best practices, Context7 `useGSAP` scope/cleanup guidance, Nov 2025 web articles on “accessible glass” and legal pressure) => enforce ≥4.5:1 contrast inside glass cards, reduce blur on mobile/low-perf paths, provide solid fallback themes, preload focus/CTA states, wire GSAP via `useGSAP` with `contextSafe`, and bake reduced-motion toggles into prototype baseline.
- Codex prototype set shipped (Minimal, Premium, Bold) under `src/components/video-placeholders/codex/*`; demo now compares Claude Code vs Codex implementations side-by-side. Enhancements: `useGSAP`-scoped ScrollTrigger reveals, persistent play affordances, accessible glass fallbacks (`supports-[backdrop-filter]` + solid overlays), pointer-driven spotlight with cleanup, and consolidated build validation (`npm run build` ✅ – vendor 749 kb / 900 kb).
- **2025 Palette Research (Nov 3):** Luxury trend reports showcase emerald + gold with charcoal/ivory bases to convey premium editorial energy, alongside navy + soft gold pairings for jewel-tone drama.citeturn0search0turn0search2
- **Enterprise/AI palette cues:** Trusted SaaS palettes continue to lean on deep navy foundations with electric cyan or mint accents, plus slate gray + electric blue combinations highlighted in 2025 roundups.citeturn0search4turn1search0turn1search8
- **Sustainability & warmth signals:** Warm luxury guidance emphasises brass gold, taupe, and charcoal combinations to introduce human warmth into high-end experiences.citeturn0search5
- Codex palette prototypes delivered via `/color-palette-demo` (route added in `App.tsx`) with data objects in `src/data/palettes/codex.ts`; comparison renders side-by-side with Claude sets to support Sprint 1 palette lock. `npm run build` ✅ keeps vendor bundle at 749 kb / 900 kb budget.
- Updated Codex palettes to dark gradient variants (Film Noir Gradient, Abyssal Emerald, Neural Gradient, etc.) so the showcase matches existing homepage + Briefing Engine aesthetics while retaining research-backed accent colors.
- **Hero Prototype Plan (2025-11-03):** Build premium video-backed hero prototypes for Studios (cinematic) and Conversational AI (enterprise trust) using recent research. Requirements: dual-source background video with autoplay gating + IntersectionObserver, dark gradient overlays with neon glows, GSAP multi-phase entrance, CTA cluster (primary + secondary), metrics pill, reduced-motion fallbacks, and demo route for side-by-side review.
- **Hero Prototype Delivery (2025-11-03):** Implemented `StudiosHeroPrototype` + `ConversationalHeroPrototype` with gated video playback, layered gradients, CTA clusters, metric bands, tilt/spotlight micro-interactions, and reduced-motion paths. Demo available at `/hero-prototype-demo`; documented in `docs/prototypes/hero-video-prototypes-2025-11-03.md`. Build passes (`npm run build`, vendor 749 kb / 900 kb).
- **Aurora Command Center Exploration (2025-11-03):** Additional premium hero variant (`StudioHero6_AuroraCommandCenter`) showcasing command-console glass UI, pointer-driven spotlight, and strict autoplay compliance per 2025 accessibility/performance guidance.citeturn0search0turn0search8turn0search11

# Collaboration Note — 2025-10-14 (Codex Session 2)
- Running two parallel Codex sessions: this terminal is **Codex Session 2**. Codex Session 1 is reviewing MCP screenshots.
- Please preserve each session’s entries; Session 1 should avoid editing `Codex Session 2` notes and vice versa.
- When updating PLAN/\_MEMO/REPORT, Codex Session 2 will sign entries accordingly so we can track provenance.

# Collaboration Update — 2025-10-14 (Codex Session 2)
- Third parallel agent (**Codex Session 3**) now active; maintain signed entries across all three sessions so provenance stays clear.
- Session 2 to continue screenshot validation while Session 1 handles analysis and Session 3 pursues copy/strategy tracks (per PLAN.md footer).

# AI Product Charter — Timeline Smoothness Fix (2025-10-15 Codex Session 2)
- **Problem:** Briefing timeline scroll experience stutters because Lenis isn’t synchronized with GSAP, timelines overlap aggressively, and refresh logic fights ScrollTrigger.
- **Target User:** Visitors experiencing the AI Briefing Engine walkthrough on desktop/laptop (1024–3440 px viewports) and stakeholders judging polish.
- **Success Signal:** Continuous 60 fps scroll with no perceptible hitching across sections, verified via Chrome performance traces and MCP viewport sweeps after fixes land.

# AI Product Charter — USP Copy Deep-Dive (2025-10-20 Codex Session 2)
- **Problem:** USP-driven messaging across Cre8tive AI surfaces is inconsistent because prior transcript insights on differentiators are scattered, making it hard to align future copy work with validated strengths.
- **Target User:** Cre8tive AI marketing stakeholders and content designers needing a consolidated knowledge base of messaging pillars and proof points.
- **Success Signal:** Exhaustive log of sessions focused on copy differentiation plus a master reference document that teams can rely on without rereading raw transcripts.

# AI Product Charter — Briefing Engine Recovery (2025-10-15 Codex Session 2)
- **Problem:** `src/pages/BriefingEngine.tsx` was force-reverted to an older animation stack, disconnecting the new segmented timeline and causing build-time import failures.
- **Target User:** Cre8tive AI marketing stakeholders and developers relying on the current segmented Briefing Engine experience.
- **Success Signal:** Page reinstates the segmented timeline orchestration without missing imports, dev server rebuilds cleanly, and stakeholders regain today’s timeline flow.

# Research Notes — GSAP Debug Report (2025-10-15 Codex Session 2)
- Read `docs/gsap-debug-report-2025-10-15.md`; captures seven root causes (Lenis integration, refresh listener, overlap aggressiveness, will-change overuse, missing invalidateOnRefresh, conditional force3D, refreshPriority gaps) plus validation checklist.
- Key implementation directives: wire Lenis to gsap ticker, delete custom refresh listener, add `invalidateOnRefresh`, rebalance motion overlaps ≤0.4s, clear `will-change` via `clearProps`, standardize `force3D: true`, assign descending `refreshPriority`.
- Post-fix validation must include performance trace, resize checks, GPU paint flashing, and cross-browser smoke.
# Segmented Timeline Snapshot (2025-10-14)

- **Components:** `BriefingTimeline.tsx` orchestrates five stacked sections – `HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`.
- **Affordances:** Sticky instruction pill (“STEP · TITLE”), keyboard/tap advance (“Next” → “Restart”), right-edge progress rail (`timeline-progress-*` utilities), analytics events `timeline_stage_view`, `timeline_manual_advance`, `timeline_restart` via `useAnalytics`.
- **Reduced Motion:** `useScrollTriggerAnimation` passes `{ prefersReducedMotion }`; sections tag `data-motion` and swap animated DOM (`data-motion-hide`) for static alternatives (`data-motion-show`). ScrollTriggers still fire to log analytics / maintain progression.
- **Docs:** SPEC, ARCHITECTURE, PLAN, QA gates, performance brief, retrospectives, story contexts, and source tree updated to reference `BriefingTimeline`; legacy `BriefToStoryboardAnimation.tsx` kept only for historical context.
- **Status:** Build ✅; initial Chrome DevTools MCP validation (desktop sweep) captured. Outstanding polish + responsive workstreams below.

# Outstanding Tasks

## Active — 2025-11-03 Documentation Alignment
1. **Codex Documentation Refresh** — Finish syncing `.codex/_MEMO.md`, `.codex/PLAN.md`, and `.codex/REPORT.md` with the November 3 canon; double-check that lingering references to pre-2025-11-03 guidance are clearly labeled archival.
2. **Backlog Reality Check** — Reconcile `TASK.md` and PLAN items against the new documentation to flag which initiatives remain active vs. paused; capture outcomes in both files.
3. **Validation Hooks** — Once docs updated, schedule a short MCP/Lighthouse verification run to confirm nothing in the current UI diverged during the doc freeze (brief note for PLAN/REPORT).

## Legacy Backlog (Paused until docs sync)
1. **Desktop Responsive Implementation (IN REVIEW)** — Tiered GSAP timing, fluid typography, safe-area progress rail, and transform simplifications completed but awaiting final validation evidence.
2. **Validation & QA** — Chrome DevTools MCP sweep captured; still need Lighthouse, performance trace, and cross-browser smoke when feature work resumes.
3. **Analytics Verification** — Confirm `timeline_*` events after responsive adjustments once QA loop restarts.
4. **Lint/Test Debt** — Unicorn plugin config + legacy `any` clean-up deferred until current initiatives stabilize.
5. **Documentation Follow-up** — Larger documentation update tied to responsive work postponed; superseded by current doc realignment.
6. **Copy Overhaul (Codex Session 1)** — Phase 4 validation outstanding (Chrome MCP, Lighthouse, analytics, documentation) per briefing copy implementation plan.
7. **Copy Clarity Audit (Codex Session 2)** — Messaging adjustments pending stakeholder review; maintain research but pause execution during doc sync.
8. **ParticleCore Research Deep Dive (Codex Session 2)** — Architectural inventory and external research queued; resume after documentation task.
9. **ParticleCore Density Experiment (Codex Session 2)** — Higher-density trials on hold pending outcome of research + performance validation.

# Research Notes — 2025-11-03 (Codex Session 2)
- `docs/bmm-index.md` confirms exhaustive documentation sweep (Nov 3, 2025) with canonical doc list, implementation status snapshot (Epic 1 implemented, Epics 4/5 planned), and performance budget reminders (vendor ≤900 kb).
- `docs/CURRENT-ARCHITECTURE.md` reiterates JAMstack architecture, adaptive performance system, lack of automated tests, and technical debt targets (archive components, duplicate Vimeo player, disabled Agents route).
- `docs/DEVELOPMENT-GUIDE.md` adds runbooks (`npm run build:dev`, `npm run test:performance`, `npm run deploy`) and manual QA expectations—no CI harness yet.
- `docs/component-catalog-exhaustive.md` inventories 178 components with GSAP patterns (ScrollTrigger consolidation, will-change lifecycle) and flags adaptive performance points for future refactors.
- `docs/documentation-freshness-report.md` distinguishes current vs planned specs (Epic 1 current, Epics 4/5 + Unified Voice Widget planned) ensuring `.codex` docs label statuses appropriately.
- `docs/tech-spec-epic-1.md`, `tech-spec-epic-4.md`, `tech-spec-epic-5.md`, `tech-spec-unified-voice-widget.md` reviewed to understand implementation vs. future scope so plan/report updates can cite accurate states.
- **Validation Sweep 2025-11-03:** Homepage rendered correctly at 1707×898 and 1920×1080 (screenshots in `.codex/screenshots/2025-11-03-home-1707.png` & `...-1920.png`). Console surfaced long-standing issues: `UNSAFE_componentWillMount` warning from `SideEffect(NullComponent2)`, repeated Cloudflare Turnstile renders, meta-based `X-Frame-Options` warning, WebGL GPU stall (ReadPixels) from Vimeo iframes, and duplicate cookie consent banners (needs single-source fix). Light Lighthouse audit (headless Chrome) scored **Performance 20**, **Accessibility 91**, **Best Practices 75**, **SEO 100** with LCP/TTI ≈58.7 s and TBT ≈3.8 s; metric inflation driven by autoplaying Vimeo embeds and heavy script payload (262 requests / 15.7 MB transfer). Follow-up: evaluate lazy-loading/placeholder strategy for Vimeo, address duplicate consent + Turnstile mounts, remove meta `X-Frame-Options`, and revisit bundle slimming per 900 kb budget.

# Research Notes — 2025-10-14 AM
- Re-read core docs (README, SPEC, ARCHITECTURE, CONTRIBUTING) and GSAP audit bundle; `TASK.md` recreated to track current workstreams.
- Responsive backlog validated against `gsap-research-responsive-scroll-storytelling-2025-10-14.md`; priority items: matchMedia timing tiers, function-based ScrollTrigger start/end, safe-area aware progress affordances, mobile rail variant, and fluid typography.
- Performance validation report (runtime + audit) flagged ParticleCore forced reflow (811 ms) and missing GPU hints in Styles/Handoff — schedule fix alongside responsive sweep so regressions handled together.
- 2025-10-14 Codex Session 2: Pulled `ISXjl_7Yc0g` YouTube campaign transcript (four-step journey, "Stop dreaming. Start building." CTA) to align copy voice.
- Gartner (2025-09-03) notes 53% of consumers distrust AI-generated search results; need explicit proof + human oversight in messaging.
- Yext (2025-02) identifies AI Pragmatists vs Skeptics; plan copy to reassure skeptics with transparency + human support.
- TrustRadius (2025-09) reports 95% of B2B buyers view vendor copy as overly promotional; prioritize case studies, peer proof.
- Guardian (2025-08) warns about AI "workslop" fatigue; differentiate with grounded language and expert ownership.
- Hackstone (2024-11) stresses pairing AI automation with human creative leadership and measurable outcomes.
- Competitor scan: 351 Studio leans on ROI/budget-friendly AI video messaging—need to outrun by emphasizing enterprise rigor + Studio craftsmanship.

# Historical Log

- **2025-11-03 09:45 PDT:** Completed November 3 doc sweep (bmm-index canon, architecture/development/component catalog, tech specs) and initiated `.codex` documentation realignment plan.
- **2025-10-13:** Identified ScrollTrigger pinning dead zones; planned segmentation.
- **2025-10-14 13:30 NZDT:** Segmented timeline + sections implemented; doc suite refreshed; analytics wired.
- **2025-10-14 14:10 NZDT:** Instruction rail announces active step (`aria-live`); progress rail accessible; “Next” button transitions to “Restart” on final stage.
- **2025-10-14 14:55 NZDT:** Reduced-motion fallbacks deployed via `data-motion`, static imagery/text, and CSS overrides; build validated.
- **2025-10-14 16:20 NZDT:** Memoized section animation registries via `useCallback` to stop ScrollTrigger replays when active stage state updates; verified production build.
- **2025-10-14 15:40 NZDT:** Introduced `ReducedMotionIllustration` SVG set and upgraded all reduced-motion cards with bespoke layouts, bullet summaries, and consistent focus styles.
- **2025-10-14 16:45 NZDT:** Landed GSAP audit Priority 1 refinements (will-change lifecycle, `force3D`, `refreshPriority`) across Hero, Neural Synthesis, and Storyboard sections; rebuild passes.
- **2025-10-14 17:05 NZDT:** Applied Priority 2 motion polish—hero and neural timelines now use richer easing/duration hierarchy, style grid gains subtle back-out cascade, storyboard stagger slowed to 0.18 s for cinematic reveal.
- **2025-10-14 17:18 NZDT:** Centralised stage timing constants in `motion-config.ts`; sections now reference shared config for durations/easing to streamline future tuning.
- **2025-10-14 17:25 NZDT:** Neural synthesis stage now reacts to scroll velocity—`onUpdate` maps ScrollTrigger velocity into a clamped boost layered atop the base intensity timeline, keeping reduced-motion users on static paths.
- **2025-10-14 17:30 NZDT:** ParticleCore switched to a GSAP ticker + ResizeObserver (no per-frame layout reads); Styles/Handoff sections now share the will-change/force3D lifecycle so all five segments are GPU primed.
- **2025-10-15 09:40 NZDT:** Desktop MCP sweep completed (1366→3440 widths); logged oversized mid-tier typography, ultra-wide guttering, missing matchMedia tiers, and progress affordance gaps. Ready to implement responsive roadmap.
- **2025-10-15 12:55 NZDT:** Rolled in responsive GSAP tiers, function-driven ScrollTriggers, fluid typography/spacing, and safe-area progress affordances; ready for viewport revalidation + perf trace.
- **2025-10-15 13:20 NZDT:** Refined compact-tier animations (reduced 3D, velocity gating) and standardized timeline containers/typography tokens. Phase 4 validation + analytics verification next.
- **2025-10-15 11:20 NZDT:** Revalidated resizing code (`motion-config`, `useScrollTriggerAnimation`, ParticleCore) + ran new MCP viewport sweep post updates; build succeeds (`npm run build`). Pending: analytics payload check + Lighthouse.
- **2025-10-15 14:45 NZDT – Codex Session 1:** Coordination note — two Codex CLI sessions active; each must sign MEMO/PLAN updates with their session tag and leave one another's entries untouched.
- **2025-10-15 14:52 NZDT – Codex Session 1:** Kicked off T8 Content Simplification — remove redundant "Choose Your Creative Style" section beneath the timeline to avoid duplicated messaging.
- **2025-10-15 15:00 NZDT – Codex Session 1:** Removed VisualStylesGallery block from `src/pages/BriefingEngine.tsx`; production build (`npm run build`) passes. Awaiting Session 2 validation updates before further copy changes.
- **2025-10-15 15:20 NZDT – Codex Session 1:** Ingested `docs/BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md`; queued Phases 1–4 in PLAN (T9–T12) covering hero/meta rewrite, timeline intro + stage copy updates, CTA/benefit refresh, FAQ build, and QA/perf validation.
- **2025-10-15 15:48 NZDT – Codex Session 1:** Landed Phase 1 copy updates (hero messaging, proof bar, meta tags, stage metadata, process-flow wording), swept touched copy for "our Studio" language, and revalidated with `npm run build`.
- **2025-10-15 15:55 NZDT – Codex Session 1:** Simplified hero to headline + subhead + stats (removed descriptive paragraph per direction) and re-ran `npm run build`.
- **2025-10-15 16:05 NZDT – Codex Session 1:** Removed hero stats badges and timeline instruction pill per feedback; adjusted hero GSAP to match and revalidated with `npm run build`.
- **2025-10-15 16:15 NZDT – Codex Session 1:** Beginning Copy Overhaul Phase 2 (timeline intro, CTA/benefit refresh, final CTA). Coordinating with Session 2 to avoid overlap.
- **2025-10-15 16:32 NZDT – Codex Session 1:** Completed Phase 2 copy updates (timeline intro section, MidPage CTA, audience benefits, final CTA) and validated with `npm run build`.
- **2025-10-15 16:50 NZDT – Codex Session 1:** Added FAQ section (`BriefingFAQ.tsx`) with 10 curated Q&As, mounted after Audience Benefits, and confirmed build success.
- **2025-10-15 17:05 NZDT – Codex Session 1:** Reviewed validation screenshots (1024–3440 widths) + existing tiered utilities; researching container-query & GSAP matchMedia strategies for desktop resizing. Next: draft implementation plan that keeps timeline content within safe max widths, harmonizes hero typography, and stabilizes progress rail across odd viewports.
- **2025-10-15 17:22 NZDT – Codex Session 1:** Shipped desktop layout refinements: tightened `.timeline-section-container` width clamps + `container-type`, restructured Audience Benefits & Workflow Transformation around the shared shell, and added dynamic ScrollTrigger progress offset via `ResizeObserver`. `npm run build` ✅. Pending: MCP viewport re-run + documentation/analytics checks (Phase 4).
- **2025-10-15 09:10 PDT – Codex Session 2:** Initiated copy clarity audit; charter logged; plan to unify stakeholder feedback, Gemini transcript insights, and current-market research before recommending revisions.
- **2025-10-15 09:55 PDT – Codex Session 2:** Collected YouTube campaign transcript, stakeholder copy notes, and 2025 trust research (Gartner, Yext, TrustRadius, Guardian, Hackstone) to ground upcoming recommendations.

## Codex Session 3 – Copy Refresh Plan (2025-10-15 11:05 PDT)
- Align hero + intro messaging around tangible deliverables (sample storyboard, Studio partnership) instead of metrics. Shift subhead to highlight guaranteed process and human oversight.
- Rewrite `stageMetadata` + `BriefingProcessFlow` copy to incorporate stakeholder directives: consistent Step labels, remove “nine styles” count, call out multi-duration specs, reinforce storyboard-to-video narrative.
- Add trust modules: proof strip with artifacts, client testimonial slot, named creative leads, compliance/stack badges; avoid numeric claims until data available.
- Prepare artifact links (storybook PDF, platform spec matrix) and coordinate Studios page tone shift (“AI acceleration + director-led production”).
- Plan for follow-up insertion of real metrics once validated; reserve placeholder language so future updates are seamless.
- Hero research guardrails (2025-10-15): stick to 3–7 word headline, 8–18 word subhead, actionable CTA verb; echo campaign message “imagination is the only barrier” and hybrid AI + Studio positioning.

### 2025-10-15 11:45 PDT – Codex Session 3 Progress
- Refreshed hero and journey copy with dual CTAs plus proof content (subsequently streamlined per 12:25 update).
- Updated timeline metadata, process flow, style section, and benefits copy to remove “nine styles” language, add multi-duration/spec messaging, and emphasise storyboard-to-video narrative.
- Simplified story engine terminology (Neural section → Story Engine) for clarity.
- Ran `npm run build` ✅ (passes; vendor bundle 790kb/900kb budget).

### 2025-10-15 12:25 PDT – Codex Session 3 Update
- Simplified hero per premium SaaS research: headline now “From Brief to Native Video,” 16-word subhead, dual CTAs only; removed badge row and immediate trust block to reduce visual load.
- Planning to reintroduce trust proof lower on page once layout strategy confirmed with Sessions 1/2.

### 2025-10-15 13:05 PDT – Codex Session 3 Update
- Rolled copy refinements across mid-page CTA, workflow comparison, audience benefits, final CTA, and FAQ—removed unverified metrics, reinforced hybrid AI + Studio positioning, and clarified deliverables.
- `WorkflowTransformation.tsx` now contrasts agency vs Briefing Engine without numeric promises and highlights value props focused on process clarity.
- FAQ rewritten to focus on guided intake, production-ready outputs, agency scalability, and Studio support without quoting unsourced stats.
- `npm run build` ✅ (vendor bundle 749kb / 900kb).
- Updated Briefing Runway description to describe the unified workflow instead of interaction hints.

### 2025-10-15 13:45 PDT – Codex Session 3 Update
- Converted runway stage cards to minimalist signal chips (headline + status trio) so the dossier column owns detailed copy.
- Replaced the “Connected Pipeline” badge with a left-aligned ribbon visual that highlights the current step using the carousel state.
- `npm run build` ✅ after layout changes (vendor bundle 749kb / 900kb).

### 2025-10-15 14:20 PDT – Codex Session 3 Update
- Iterated on runway design: cards now show icon + single status tag (Option 2), pipeline ribbon pushed lower for breathing room, and section padding expanded (`py-32`/`md:py-36`).
- Adjusted floating call button offsets so it sits directly above the ElevenLabs widget.
- `npm run build` ✅ (vendor bundle 749kb / 900kb).

### 2025-10-15 14:30 PDT – Codex Session 3 Task
- Perform copy critique pass for the entire Briefing Timeline (stage cards + dossier content) to tighten language and remove wordiness.

### 2025-10-15 12:50 PDT – Codex Session 3 Research Notes
- Benchmarked premium hero patterns (DesignContra SaaS analysis, Pioneer UI examples, Omniconvert optimization, Nudge’s 2025 best practices) to keep layout lean and outcome-led.citeturn0search0turn0search1turn0search2turn0search6
- Reviewed 3D hero animation case studies (Weston Mossman R3F hero, Michal Załobny transitions) and performance guidance on lazy-loading Three.js experiences.citeturn0search3turn0search4turn0search5
- Direction: build interactive “Storyboard Orbit” scene—floating storyboard tiles flow into a central video prism, with subtle parallax tracked to pointer and autoplay timeline loop (intended for hero side visual).

### 2025-10-15 13:30 PDT – Codex Session 3 Prototype Log
- Added `OrbitHeroPreview` component (React Three Fiber + Drei) rendering orbiting storyboard cards around a luminous video prism with pointer parallax and sparkles; reduced-motion fallback supplies static storyboard grid.
- Added `OrbitHeroPreview` component (React Three Fiber + Drei) rendering orbiting storyboard cards around a luminous video prism with pointer parallax; reduced-motion fallback supplies static storyboard grid.
- Created `/hero-preview` route (lazy-loaded) for stakeholder review and kept chunking under budget by isolating new 3D stack into `hero-visual` manual chunk. Build passes (`npm run build`).
- Dependencies: `@react-three/fiber@8.15.12`, `@react-three/drei@9.56.13`, `three@0.152.2`; manual chunk update prevents vendor overage.
- Added client-mount gate to the preview so Canvas instantiates after hydration, addressing R3F strict-mode warnings.
- Updated Helmet CSP to allow `worker-src 'self' blob:` (future-proofing WebGL helpers) and removed Drei sparkles to keep the prototype stable without background workers.

### 2025-10-15 14:20 PDT – Codex Session 3 Retrospective
- Orbit hero prototype removed per stakeholder decision; deleted preview component/route, uninstalled R3F dependencies, restored CSP + bundler to pre-prototype configuration. Returning focus to copy changes.

— Codex Session 3

— Codex Session 3

### 2025-10-15 15:40 PDT – GSAP Smoothness Fix (Codex Session 2)
- Integrated Lenis ↔︎ ScrollTrigger sync (`useLenis`, gsap ticker bridge, lag smoothing reset) in `src/pages/BriefingEngine.tsx` and removed the bespoke resize refresh listener from `useScrollTriggerAnimation`.
- Standardised section timelines: added descending `refreshPriority`, ensured `invalidateOnRefresh`, enforced `force3D: true`, and swapped will-change handling to `requestAnimationFrame` + `clearProps` callbacks across Hero/Neural/Styles/Storyboard/Handoff.
- Reduced negative overlaps in `motion-config.ts` (≤0.4 s) to keep sequences readable during rapid scroll/reverse interactions.
- `npm run build` ✅ (11.45 s; vendor bundle 790 kb / 900 kb budget).

— Codex Session 2

### 2025-10-15 16:32 PDT – Timeline Visibility Investigation (Codex Session 2)
- Research recap: Archon/context7 runs surfaced no direct fixes; web search confirmed ScrollTrigger’s `lazy` default keeps “from” states dormant until the trigger fires, which leaves multi-element grids visible unless `lazy: false` or explicit pre-set values are applied.citeturn5open0
- Diagnosis: timeline sections mark bulk elements with `data-motion-hide`, but in full-motion mode those nodes render fully visible until ScrollTrigger activates. Multi-element grids (Storyboard frames 1,3,4) therefore flash before the first tween adjusts opacity.
- Action: Pre-set `autoAlpha: 0` on each section’s animated elements and force eager rendering by adding `lazy: false` to timeline ScrollTriggers. Rebuilt (`npm run build`) to confirm no regressions; browser validation next.
- Hero polish: tied the stage instruction pill and campaign/platform detail badges into the Hero timeline sequence so they stay hidden until the GSAP entrance plays.
- Validation: Chrome DevTools MCP shows storyboard frame cards now reporting `{ opacity: \"0\", visibility: \"hidden\" }` prior to triggering; timeline sweeps pending full screenshot batch but initial gating confirmed.

### 2025-10-15 17:45 PDT – Copy Clarity Benchmarks (Codex Session 3)
- Pulled 2024–2025 SaaS/B2B onboarding copy research: Smashing Magazine’s microcopy checklist stresses one idea per element and front-loaded value, matching our brevity targets for timeline captions.citeturn5view0
- Toptal’s UX microcopy analysis reiterates Nielsen Norman Group data—concise, scannable copy boosts usability by 124%—so every stage description needs a single outcome statement.citeturn6view0
- Chameleon’s 2025 benchmarks show 72% completion for three-step tours vs 16% for seven-step flows, reinforcing our plan to keep each GSAP frame to one action and proof point.citeturn10view0
- TechRadar’s coverage of the July 9 2024 Gartner survey (64% of customers prefer human support) underlines why we must emphasise our hybrid “AI + Studios” model in copy.citeturn8view0
- Guidejar’s 2025 onboarding best practices push teams to deliver time-to-first-value immediately; use that lens to rephrase stage outcomes around the first tangible win.citeturn11view0

— Codex Session 3

### 2025-10-15 18:05 PDT – Step 01 Copy Refresh (Codex Session 3)
- Replaced hero headline/subhead with outcome-first framing (“Lock Your Brief in Minutes”) and tightened supporting sentence so visitors grasp the immediate win without reading supporting tiles. Implemented in `src/components/briefing/sections/HeroBriefSection.tsx`.
- Converted hero proof chips to artifact/spec/platform evidence and rewrote intake tiles to emphasise time-to-first-value, synced visibility, delivery scope, and human oversight (`section-data.ts`).
- Updated stage metadata description to a single, scannable sentence reinforcing “seven cues” guidance.
- `npm run build`

— Codex Session 3

— Codex Session 2

### 2025-10-15 16:20 PDT – ScrollTrigger Re-trigger Bug Research (Codex Session 2)
- Archon RAG pull (gsap forum threads) reiterates common pitfall of creating multiple ScrollTriggers per element and highlights advice to test animation without ScrollTrigger first (gsap.com forum thread 44892).
- Perplexity reasoning (2025 guidance) surfaced interaction notes: Lenis sub-pixel interpolation can flutter around start/end; `once: true` only affects animation timeline, not additional triggers; matchMedia re-evaluation during scroll can recreate triggers.
- Context7 GSAP docs reviewed to confirm `onEnter`, `onToggle`, `preventOverlaps`, and hook for `ScrollTrigger.config` plus callbacks usage.
- Web search surfaced Sept 2025 discussion about `ignoreMobileResize` and ScrollTrigger refresh behaviour; additional articles on `refreshPriority`, fast scroll handling, and toggleActions clarifications.
- Hypothesis forming: dual triggers (animation + analytics) with identical start/end plus Lenis-driven velocity likely recreating or retriggering timelines; need to audit matchMedia cleanup, state refs, and whether analytics trigger should be merged.

### 2025-10-15 17:05 PDT – ScrollTrigger Re-trigger Fix (Codex Session 2)
- Root cause confirmed: stage callbacks came from `BriefingTimeline` state, and every stage enter/leave re-render rebuilt `onStageEnter`/`onStageLeave`. Section hooks depended on those callbacks, so `useScrollTriggerAnimation` tore down and re-created ScrollTriggers mid-scroll; `once: true` reset and timelines replayed.
- Applied `useRef` + `useEffect` in all five timeline sections so GSAP timelines reference stable `onStageEnter`/`onStageLeave` handlers, keeping `runAnimation` memoized on `stage.id` only.
- Memoized analytics helpers in `useAnalytics` (`useCallback` + `useMemo`) for stable `trackEvent`/`trackPageView`, preventing needless prop churn.
- Rebuilt bundles (`npm run build`) to verify TypeScript + Vite clean; vendor chunk 749 kb / 900 kb budget ✅.

### 2025-10-15 17:45 PDT – Timeline Step Labels & Visual Style Overlay (Codex Session 2)
- Introduced shared `StepLabel` component (`src/components/briefing/StepLabel.tsx`) and replaced bespoke markup in all five sections so STEP badges now share stacked typography with heavier tracking; bumped sizes for improved legibility while keeping hero instructions adjacent.
- Refreshed Stage 03 visual style cards with a darker gradient wash, subtle backdrop blur, and brighter `Visual Style` typography + stronger drop shadow so the overlay reads clearly without obscuring imagery.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Validation sweep still pending the MCP screenshot pass.

### 2025-10-15 18:55 PDT – Visual Direction Layout Pass (Codex Session 2)
- Extended `StepLabel` with a large variant and applied it to the Visual Direction stage, scaling the STEP identifier and nudging the block toward center with additional padding.
- Tightened the description block (360 px max width, smaller font) so copy wraps into shorter lines per stakeholder example.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Pausing rollout to other stages until this layout is approved.

### 2025-10-15 19:25 PDT – Typography Alignment Sprint (Codex Session 2)
- Current emphasis: lock in premium typography across all timeline stages before propagation. Stage 03 acting as pattern source.
- Added micro accent beneath “Direction”, elevated supporting descriptor (“Signature looks snap into place”), and keeping STEP stack anchored left while adjusting scale/gap.
- Next: once Stage 03 locks, cascade the layout to remaining stages and capture viewport validation.

### 2025-10-15 20:05 PDT – Stage 03 Descriptor Spacing (Codex Session 2)
- Tweaked the Visual Direction header so the STEP stack nudges 24 px left (negative margin) while the descriptor shifts right via auto margins, widening the breathing room between columns without drifting the spine off grid.
- After review the italic read too casual, so we pivoted to a lighter-weight uppercase treatment (slightly smaller, softer tracking, 75% opacity) that keeps the premium tone without overpowering the STEP block.
- Updated PLAN S1 notes to capture the spacing + typography refinements before propagating to the other stages.

### 2025-10-15 20:25 PDT – Stage 04/05 Template Propagation (Codex Session 2)
- Mirrored the Stage 03 header template into Storyboard Assembly and Studios Handoff: both now use `StepLabel` `size="lg"` with the negative left margin, widened flex gap, and the same uppercase descriptor styling on the right.
- Trimmed legacy heading/body copy in those sections so the primary descriptor carries the message (“Scene decks lock into multi-duration cuts” / “Production bundle hands off to studios in days”), keeping the timeline typography consistent.
- Preserved animation hooks by retaining `data-storyboard-copy` / `data-handoff-copy`, and wired the descriptor paragraphs to the section `aria-labelledby` ids for accessibility continuity.

### 2025-10-15 20:40 PDT – Descriptor Removal Directive (Codex Session 2)
- Updated the template so Stage 03, 04, and 05 headings now show the STEP lockup only; supporting descriptions live in the body content below per new guidance.
- Extended `StepLabel` to accept an `id` prop so each section can continue wiring `aria-labelledby` without relying on separate paragraph elements.
- Studios Handoff keeps the CTA in the header but aligns it to the right of the STEP column; Storyboard + Styles headers now collapse to the single spine block for a cleaner, cinematic read.

### 2025-10-16 09:45 PDT – Stage 05 Dossier Balance (Codex Session 2)
- Relocated the stats grid and delivery ribbon into the left dossier column (using grid order classes to preserve mobile sequencing), which levels the column heights and shortens the overall mockup footprint without squeezing the storyboard imagery.
- Ran `npm run build` to confirm the layout change compiles cleanly (vendor 749 kb / 900 kb, unchanged).

### 2025-10-15 20:55 PDT – Stage 02 Alignment (Codex Session 2)
- Enlarged the Story Engine STEP stack (`size="lg"`) and slotted it into the shared header template with the AI core indicator, pulling the column closer to the particle core via reduced section gaps and a slight negative top offset on the grid.
- The left column now inherits the same negative margin pattern (`md:-ml-6`) so the STEP spine lines up with later frames, but the particle core still sits immediately beneath for the “close to the effect” read.
- PLAN S2 now reflects that stages 02–05 share the STEP-only header; Hero remains to be migrated after sign-off.

### 2025-10-15 21:10 PDT – Visual Style Overlay Revisit (Codex Session 2)
- Removed the broad gradient wash over each style card and replaced it with compact badges behind the “Visual Style” label + style name so the imagery stays vibrant.
- Added a subtle pulse dot and shadowed capsules to keep text legible without muting the card art; hover accent remains but now only lifts colour rather than overlaying opacity.
- No animation hooks touched (the cards still carry `data-style-card` etc.); PLAN unchanged, but this note documents the alternative readability approach stakeholders asked for.

### 2025-10-15 21:18 PDT – Overlay Rollback (Codex Session 2)
- Per review screenshot, reverted to a single style-name pill and removed the extra “Visual Style” tag so the card art owns the frame again.
- Capsule sits at ~55% black with a heavier drop shadow to keep the name legible without pulling tonal weight from the imagery.

### 2025-10-15 21:25 PDT – Style Label Restore (Codex Session 2)
- Pulled the pill background entirely so the style name returns to the original treatment: bold uppercase with a heavy drop shadow, no additional backdrop.
- Hover accent and motion remain untouched; imagery is now fully unobstructed while the text stays readable via shadow only.

### 2025-10-15 21:28 PDT – Style Label Shadow Tweak (Codex Session 2)
- Softened the drop shadow to a tighter 16px/32px spread at 65% opacity—gives enough contrast without the earlier smoky halo.

### 2025-10-15 21:32 PDT – Style Label Shadow Boost (Codex Session 2)
- Bumped the shadow to 22px/48px at 85% opacity so the white label reads over brighter renders; imagery still unobstructed.

### 2025-10-15 21:36 PDT – Style Label Contrast Pass (Codex Session 2)
- Nudged the label colour toward a cool neon gray (`#f2f4ff`) and deepened the shadow to 24px/60px at 88% opacity so even the high-key Documentary frame stays readable.

### 2025-10-15 21:42 PDT – Style Label TextShadow (Codex Session 2)
- Swapped Tailwind drop-shadow for explicit textShadow (0 4px 16px + 0 0 8px, ~90% opacity) and slightly warmer neon tint. Should finally cut through the bright Documentary card without adding overlays.

### 2025-10-14 16:05 PDT – Briefing Engine Audit (Codex Session 2)
- Read SPEC, ARCHITECTURE, PLAN, REPORT, MCP playbook, and TASK to refresh scope: focus stays on timeline responsive polish + validation (T6 still open).
- Page stack recap: `ReactLenis` + ScrollTrigger sync in `src/pages/BriefingEngine.tsx`, five-section timeline orchestrated via `BriefingTimeline`, adaptive motion tables in `sections/motion-config.ts`, and reduced-motion SVG fallbacks.
- Noted debug artefacts for cleanup: hero `console.log` noise and manual `window.location.href` CTAs in `src/pages/BriefingEngine.tsx:50-124,191-199`, plus direct DOM querying in `AudienceBenefits` toggle logic.
- Flagged unused state/computed values in `BriefingTimeline` (`progressOffset`, `activeStageMeta`, `nextStageMeta`, `cn` import) that can be pruned once progress rail returns.
- Next focus after analysis: finish T6 validation sweep (Chrome DevTools MCP viewport passes, performance trace, analytics payload check) before further refactors.

### 2025-10-15 18:05 PDT – Storyboard Restoration (Codex Session 2)
- Reinstated the original storyboard card gallery and GSAP animation in Stage 04 after stakeholder clarification (Frame 2 stays textual, Frame 4 returns to multi-card layout).
- Restored `storyboardFrames` data and gallery ScrollTrigger logic; reduced-motion fallback returns to the original descriptive list.
- `npm run build` ✅ (vendor bundle 749 kb / 900 kb).

— Codex Session 2


### 2025-10-15 18:20 PDT – Scene Deck Removal (Codex Session 2)
- Removed the animated scene deck grid from Stage 02 so only the neural synopses and Story Engine core remain (per updated direction).
- Cleared SceneCards import, refs, and GSAP steps; reduced-motion summary now relies on the synopsis fallback alone.
- `npm run build` ✅ (vendor bundle 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 20:10 PDT – Stage 05 Audit Kickoff (Codex Session 2)
- Re-read `docs/gsap-debug-report-2025-10-15.md` and the Stage 05 entries in `motion-config.ts` to confirm current timing: background 0.6–0.94 s, copy overlap −0.25, mockup overlap −0.2 across tiers; scroll offsets reuse the default 0.75→0.45 window.
- Walked through `StudiosHandoffSection.tsx` structure: animated trio = `[data-stage-background]` radial wash, `data-handoff-copy` grid (StepLabel, body, CTA), and `mockupRef` image block; reduced-motion path swaps in `ReducedMotionIllustration` card.
- Verified hidden states now preset via `gsap.set(..., { autoAlpha: 0 })` with `lazy: false`, so backgrounds/copy/mockup start invisible; `data-motion-hide/show` handles motion vs static assets correctly.
- Noted ScrollTrigger configuration uses `once: true`, `refreshPriority: 1`, and separate tracking trigger for stage analytics; matchMedia pathways cover base (≤1023 px) and desktop tiers via `resolveMotionTier`.
- Next: map any UX/motion gaps (e.g., stagger opportunities, CTA emphasis, mockup scale on laptop tier) before recommending adjustments and sync with Sessions 1 & 3.

— Codex Session 2

### 2025-10-15 20:25 PDT – Frame 05 Mockup Ideation (Codex Session 2)
- Pulled asset list from `Briefing Engine Assets/Storyboard Mockup` (Frame1–Frame6 + current `SB-Mockup.webp`) to prep remix concepts using Stage 04 imagery.
- Brainstorm brief: replace single flat PDF render with multi-page storyboard booklet that showcases 3–4 frames per spread with succinct scene notes, production specs, and Cre8tive Studios branding to signal polish.
- Early directions: (1) cinematic dossier spread with hero frame callout, (2) tri-fold deck preview showing contact sheet + metadata sidebar, (3) tablet-in-hand mockup with sticky-note annotations. Need to evaluate alignment with timeline aesthetic and animation constraints before committing.

— Codex Session 2

### 2025-10-15 20:45 PDT – Mockup Style Research (Codex Session 2)
- **Archon MCP:** GSAP Showcase (Sept 2025 highlights such as Blinkpath, Won J. You) leans heavily on cinematic case-study spreads with layered hero imagery and accent glows—ideal precedent for a premium dossier treatment on Stage 05. *(archon search: “luxury case study deck 2025”)* 
- **Context7:** TailwindCSS box-shadow utilities support colored/opacity-controlled shadows (`shadow-indigo-500/50`, `inset-shadow-sm`), giving us native tools to render holographic edges and inset highlights around the dossier frame. *(context7 `/tailwindlabs/tailwindcss.com`, topic “box shadow”)* 
- **Web scan:** 2025 pitch-deck trend posts stress minimalist layouts with ample negative space and high-contrast typography (Visible.vc) while luxury storytelling decks emphasise ultra-polished spreads and metadata ribbons to reinforce deliverable credibility (FasterCapital; Doksly). Captured palette + layout cues for storyboards.
- Decision: pursue the **Cinematic Dossier Spread**—best aligns with showcase inspiration, matches current premium deck trends, and lets us spotlight Stage 04 frames inside a refined PDF spread with hero callouts and delivery metadata.

### 2025-10-15 21:00 PDT – Stage 05 Execution Strategy (Codex Session 2)
- Constraint: no time for external design tooling (Figma/Photoshop). Need a code-first solution that still feels premium.
- Proposal: build an inline “dual-page dossier” component directly in React/Tailwind:
  - Use existing Frame1–Frame4 assets arranged via CSS grid within a frosted-glass container that fakes a spread (left/right panels with subtle rotation + shadow) and overlay metadata ribbons using Tailwind colored shadows.
  - Add micro typography (serif scene titles, condensed specs) rendered as text so copy stays editable; apply `backdrop-blur`, `shadow-[color/opacity]`, and border gradients for the holographic accents.
  - Animate with current ScrollTrigger timeline (fade/translate); optional secondary tween for metadata ribbon can be layered later without extra assets.

### 2025-10-15 22:05 PDT – Briefing Engine Recovery (Codex Session 2)
- Reconstructed `src/pages/BriefingEngine.tsx` to drop the legacy `BriefToStoryboardAnimation`, wire in the segmented `BriefingTimeline`, add the new briefing intro, and surface the FAQ block so the page matches current architecture.
- Updated helmet meta copy per copy-refresh brief and removed hero console logs flagged during the prior audit.
- `npm run build` ✅ (vendor 749 kb / 900 kb) confirming the restored page structure compiles cleanly.

### 2025-10-15 22:30 PDT – Timeline Padding Pass (Codex Session 2)
- Added `px-6 sm:px-10 lg:px-16 xl:px-20` horizontal padding to all timeline section wrappers so the content no longer hugs viewport edges (`HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`).
- Build verified (`npm run build`) to ensure the updates compile cleanly; next validation run should capture the improved gutters in viewport sweeps.

### 2025-10-15 22:45 PDT – Visual Styles Section Removal (Codex Session 2)
- Removed the `VisualStylesGallery` block from `src/pages/BriefingEngine.tsx` so the page flows directly from the timeline into Process Flow without the “Choose Your Creative Style” grid.
- Build passes (`npm run build`); confirm during next QA sweep that the section no longer appears.

### 2025-10-15 23:05 PDT – Hero + Padding Refresh (Codex Session 2)
- Boosted horizontal padding across the timeline section wrappers (`HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`) and `AudienceBenefits` to better match widescreen screenshots.
- Updated the hero copy/layout to the “From Brief to Native Video” variant with left-aligned content, refreshed CTA pair (“Start Your Brief” + “Book a Studio Call”), and gradient heading per stakeholder screenshot (`src/pages/BriefingEngine.tsx`).
- `npm run build` ✅ after adjustments.

### 2025-10-15 23:40 PDT – Stage 01 Expansion & Hero Visual (Codex Session 2)
- Reworked Stage 01 layout with expanded grid spacing, richer tiles, an “Includes” callout, and an elevated storyboard card so the vertical real estate feels intentional (`HeroBriefSection.tsx`).
- Added the `HeroOrbitVisual` animation beside the hero copy—a gradient dossier preview with orbiting cards powered by Framer Motion—to deliver a premium companion visual on large screens (`HeroOrbitVisual.tsx`, `BriefingEngine.tsx`).
- `npm run build` ✅ post-update.

### 2025-10-15 23:48 PDT – Hero Headline Reflow (Codex Session 2)
- Adjusted the hero headline container so “From Brief to Native Video” clamps faster on desktop, keeping the copy within three lines while staying centered alongside the new orbit visual (`src/pages/BriefingEngine.tsx`).
- Ran Prettier on touched files for consistency and re-verified build (`npm run build` ✅).
- Outcome: retains premium feel, entirely code/config-driven, easy to iterate alongside Stage 04 visuals.

— Codex Session 2

### 2025-10-15 21:40 PDT – Stage 05 Cinematic Dossier Implemented (Codex Session 2)
- Replaced the flat PDF mockup with a code-driven dual-page dossier: left panel stacks Scenes 01–03 with imagery, synopses, and spec chips; right panel spotlights Scene 04 with hero overlay, stats block, and Studio ribbon.
- Leveraged Tailwind colored shadows + backdrop blur for holographic edges, kept metadata live text, and introduced contextual labels (“Live Sync”, “Storyboard PDF · Ready for Handoff”).
- Maintained GSAP setup (container still referenced via `mockupRef`), so hidden states + once-only timeline continue to function without selector changes.
- Updated reduced-motion copy to mirror the new deliverable emphasis.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 22:05 PDT – Stage 05 Polish Pass (Codex Session 2)
- Tuned scene descriptions to match actual frames (arrival gate, concierge greeting, sunset lounge) and refined the hero summary to emphasize turn-key handoff.
- Elevated dossier styling: richer glass treatment for the scene stack, higher-contrast chips, larger spacing, and a gradient ribbon so the spread reads like a premium agency deck.
- Softened the vertical “Final storyboard export” marker, warmed Live Sync/ribbon accents, and balanced contrast across both panels.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 22:30 PDT – Stage 05 Wide Layout Pass (Codex Session 2)
- Expanded `.timeline-section-container` width clamps so the dossier stretches further on desktop/ultra-wide tiers; reduced vertical gaps to tighten the scroll.
- Converted the scene stack into a responsive grid (two-up layout on large screens with last card spanning) and adjusted column weights (52/48) to reclaim horizontal real estate.
- Rebuilt `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 23:00 PDT – Stage 05 Storyboard-Focused Layout (Codex Session 2)
- Reoriented scene cards so imagery dominates: 16:9 canvases with overlay captions, metadata chips tucked into a single footer line, and hover elevation for premium feel.
- Hero column now aligns via 16:9 canvas + horizontal stats grid to trim vertical height while keeping the handoff ribbon intact.
- Build ✅ (`npm run build`, vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 23:30 PDT – Stage 05 Reversion (Codex Session 2)
- Rolled back to the cinematic dossier layout (three stacked scenes + hero column) after width experiments caused vertical sprawl.
- Restored original container widths and GSAP config; rebuilt the section with the corrected scene copy from earlier pass.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 23:55 PDT – Stage 05 Refined Dossier Restore (Codex Session 2)
- Brought back the premium dossier layout (three scene cards + hero column) with updated copy so we can compare directly against the original mockup.
- Confirmed container widths match the responsive plan and rebuilt (`npm run build` ✅, vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-16 00:20 PDT – Stage 05 Dossier Spread Pass (Codex Session 2)
- Shifted the dossier upward toward the STEP heading and rebuilt the layout as a connected two-page spread (two hero scenes left, hero storyboard + supporting scene right) with a central spine.
- Imagery now dominates each page (16:9 canvases), metadata chips sit beneath, and stats/CTA remain on the right without vertical imbalance.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

— Codex Session 2

### 2025-10-15 21:30 PDT – ParticleCore Research Deep Dive (Codex Session 2)
- **Architecture recap:** `ParticleCore.tsx` keeps a single GSAP ticker loop with pooled particles, adaptive quality refs, and a ResizeObserver-fed `measure()` that syncs canvas backing resolution to CSS size. Active state/intensity rely on refs to avoid tearing down animation when props change.
- **Pain points:** Current `measure()` writes `canvas.width/height` inside ResizeObserver, triggering recursive `needsResize` flags; during initial mount ScrollTrigger and Lenis kicks cause ~811 ms layout thrash (matches perf report). Also `drawParticles()` performs costly gradient/shadow work even when blur/shadow disabled because properties persist between iterations.
- **Internal docs:** Story 1.14 + runtime validation tie forced reflow to `getBoundingClientRect()` reads in `measure()` and call stacks showing `_getComputedProperty2`; recommended batching reads or caching via ResizeObserver before render.
- **External research:** Chrome Performance Insights (2025-10-08) reiterates batching layout reads and leveraging ResizeObserver/device-pixel boxes for canvas sizing; MDN highlights `devicePixelContentBoxSize` for HiDPI-safe measurements; Lenis README confirms our GSAP ticker integration pattern is current best practice and stresses disabling lag smoothing to avoid scroll desync.
- **Remediation ideas:** Cache ResizeObserver `devicePixelContentBoxSize` into ref and only resize when dimensions actually change; decouple `measure()` from ticker by updating cached dims in observer callback; guard `drawParticles()` to skip blur/shadow property churn when disabled; consider dynamic particle spawn cap tied to measured area to keep density consistent.

### 2025-10-15 22:05 PDT – ParticleCore Density Pass (Codex Session 2)
- Raised adaptive counts to 220 (high tier) / 120 (medium tier) via `adaptive-config.ts`; bumped baseline intensity curve in `NeuralSynthesisSection` to 0.82 and tightened spawn interval (`ParticleCore.tsx`), so hero core feels fuller immediately.
- `npm run build` ✅ (vendor 749 kb / 900 kb). No perf trace yet—schedule quick scroll smoke plus Chrome MCP capture to ensure the extra particles stay within frame budget.

### 2025-10-15 22:20 PDT – ParticleCore Density Pass v2 (Codex Session 2)
- Further boosted tiers (high = 320, medium = 180) and lifted baseline intensity to 0.9; spawn cadence now bottoms at 4 frames so the core stays saturated without waiting through long gaps.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Schedule viewport sweep + perf trace to document the heavier particle load.

### 2025-10-15 22:45 PDT – ParticleCore Spawn Overhaul (Codex Session 2)
- Added prime burst to pre-populate ~35% of the pool, widened spawn offsets, and introduced force flag so initialization ignores active state.
- Spawn interval now scales with intensity (down to 1 frame) and spawns batches tied to configured particle counts; cap at 32 per tick to stay sane even if config jumps to 10k.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Need to run scroll smoke + perf trace with the new emitter behaviour before shipping.

### 2025-10-15 23:05 PDT – ParticleCore Revert (Codex Session 2)
- Rolled back the mega-burst experiment: lifetimes returned to baseline, spawn offsets trimmed, prime fill capped at 40%, and batch sizes back to 32 max so performance recovers while still benefiting from earlier spawn overhaul.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Ready to re-test visuals/perf at the earlier 320/180 tier settings.

### 2025-10-15 23:55 PDT – ParticleCore Incremental Boost (Codex Session 2)
- Reapplied the lighter custom emitter: GSAP ticker loop, 60–120 frame lifetimes, size range ~2.2–5.4px, 45% prime fill, and spawn batches up to 48 with brighter gradients; `adaptive-config` high/medium tiers restored to 10 000 / 7 500 counts per earlier request.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Ready for perf/visual sanity check in browser.

### 2025-10-15 23:42 PDT – ParticleCore Glow Shell (Codex Session 2)
- Added layered CSS aura around the canvas (two radial gradients + holographic ring) with new `animate-glow-pulse` utilities, so the core reads larger without touching particle counts.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Next: capture viewport screenshot to confirm visual impact + perf unchanged.

# AI Product Charter — Hero Section Reinvention Research (2025-10-15 Codex Session 2)
- **Problem:** Current homepage hero lacks the distinctive premium SaaS storytelling, layered proof, and cinematic polish needed to convert enterprise decision makers exploring cre8tive.ai.
- **Target User:** B2B marketing leaders, CMOs, and innovation heads evaluating high-end AI platforms who expect world-class craft comparable to leading premium SaaS brands.
- **Success Signal:** A research-backed hero strategy and pattern library that, when implemented, delivers memorable messaging, elevated visuals, and benchmarks favorably against top-tier SaaS experiences in stakeholder reviews.

### 2025-10-15 10:45 PDT – Archon MCP Sweep (Codex Session 2)
- Ran Archon queries (`"premium SaaS hero design"`, `"hero section best practices SaaS"`, `"landing page hero messaging framework"`); current RAG corpus surfaced generic dev resource listings with no actionable hero insights. Logging gap and proceeding with Context7 + web research to source fresh premium SaaS hero patterns.

### 2025-10-15 10:52 PDT – Context7 ShaderGradient Review (Codex Session 2)
- Pulled `/ruucm/shadergradient` docs for modern gradient canvases; snippets focus on React integration but confirm availability of lightweight stateless component and URL-configurable presets that can deliver animated gradient backdrops without heavy custom GLSL. Noted as candidate for hero background wow-effect when balancing reliability/perf.

### 2025-10-15 11:20 PDT – Premium SaaS Hero Research Synthesis (Codex Session 2)
- Copy formula emerging from 2024–2025 teardown articles (SparkReach, BeamLocal, Instant analysis of 1,000 Shopify homepages): lead with a 5–9 word outcome headline, follow with one-sentence proof/qualifier, immediately pair a primary CTA and optional secondary link, and surface trust (logos, metrics) within the fold.
- Layout norms: keep CTA stack top-right/center on desktop with headline left-aligned; hero height ~75% viewport to preserve scroll cue; support text limited to 1–2 lines to maintain scannability; embed social proof chips or mini-metric bar under CTA.
- Messaging emphasis: answer "what it is" + "who it's for" + "why it wins" above the fold; frameworks like PAS/AIDCA recommended to sharpen urgency without hype.
- Visual direction: top-performing SaaS brands either spotlight polished product UI mockups or run premium lifestyle photography with consistent color grading; majority pair visuals with gentle parallax/micro-motion (hover shifts, subtle scroll parallax) rather than heavy 3D scenes.
- Background treatments: 2025 trend coverage highlights high-contrast gradients, layered blurs/glows, softly animated geometric fields, or shader-driven plasma backgrounds—paired with glassmorphism cards or frosted panels to keep copy legible while delivering "wow" without instability.
- Validation signals: 45% of high-performing heroes lean on a single dominant CTA, while 73% highlight product imagery; social proof (logos/case metrics) increases conversion when clustered near CTA.

# Next Steps — Hero Redesign
- Draft wireframe + asset list aligned with 12-col layout (S1).
- Prototype animated background layers (ShaderGradient or custom CSS/Canvas) with prefers-reduced-motion fallback (S2).
- Build copy/CTA cluster component with trust strip placement (S3).
- Assemble visual narrative column with product montage + parallax interactions (S4).
- Refresh nav + integrate agent widget treatment (S5).
- Schedule validation suite (MCP sweeps, perf trace, docs updates) post-implementation (S6).

### 2025-10-15 12:40 PDT – Hero Implementation Pass (Codex Session 2)
- Replaced legacy video-driven hero with unified responsive component (no more Desktop/Mobile split) featuring animated gradient surface, halo/noise layers, and prefers-reduced-motion fallbacks.
- Built left-column copy cluster: outcome headline, proof sentence, CTA pair, and trust chip grid powered by lucide icons; CTAs link to `/briefing-engine` and `/contact`.
- Crafted hero showcase column: campaign workspace card, staged workflow tiles, delivery metrics, plus floating producer/timeline cards with controlled motion.
- Cleaned dead components (`DesktopHero`, `MobileHero`, `VideoBackground`, `HeroContentBold`), added utility classes for background/motion, and re-ran `npm run build` (✅).
- Outstanding: nav glass upgrade + agent widget alignment (S5) and validation suite/documentation updates (S6).

### 2025-10-15 21:55 PDT – Hero STEP + Headline Alignment (Codex Session 2)
- Reworked the Stage 01 header so the STEP spine (large variant) sits directly beside “Lock Your Brief In Minutes”; removed the “Briefing Engine · AI Intake” label and switched the headline to uppercase, high-tracking type to mirror the Step aesthetic.
- Subheadline now indents to the STEP column width and shares the same ref for animation sequencing; StepLabel handles empty labels without drawing the accent bar.

### 2025-10-15 22:05 PDT – Hero Header Refinement (Codex Session 2)
- Softened the hero headline (font-semibold, tighter tracking) and tightened vertical gaps so the header occupies less viewport height.
- Shifted the entire lockup left (StepLabel `md:-ml-12`, container padding reduced) so the STEP spine sits closer to the viewport edge while the line remains legible.

### 2025-10-15 22:12 PDT – Hero Header Revert (Codex Session 2)
- Restored the hero heading to its original timeline style (bold tracking-tight type) while leaving the StepLabel in place with no secondary copy; subheadline alignment returns to the earlier 240px offset.

### 2025-10-15 22:25 PDT – Hero Step Reposition (Codex Session 2)
- Centered the STEP spine within the hero header (`align="center"`, `forceAccent`) so the glowing bar reappears even without a label, while the headline/subheadline shift left.
- Header now uses a split layout (copy on the left, STEP column centered via translate) so the Step badge feels prominent without crowding the headline.

### 2025-10-15 22:40 PDT – Hero Headline Typeface Sync (Codex Session 2)
- Hero headline now uses the same `text-5xl md:text-6xl font-black tracking-tight` style as “The Briefing Runway,” while the STEP badge retains the original typography (scaled up + glow only).
### 2025-10-15 23:58 PDT – Business DNA Revival (Codex Session 2)
- Ported the legacy Business DNA data set into Stage 01: campaign name, brand, audience, launch window, plus new platform cards for YouTube/TikTok so the section reflects the original inputs.
- Refreshed the accompanying copy blocks and dossier card to highlight how intake data flows into Studio-ready deliverables.
### 2025-10-16 00:05 PDT – Stage 01 Layout Polish (Codex Session 2)
- Removed the legacy bullet list, tightened the right-hand dossier card, and retitled it “Platforms, Formats, Durations” so the frame matches the annotated mock.
- Realigned platform cards and production metadata to sit higher in the container and align vertically with the form entries.
- `npm run build` ✅

### 2025-10-20 07:45 PDT – USP Copy Archive (Codex Session 2)
- Skimmed 7 Claude sessions focused solely on copy/differentiator brainstorming (`f398d40c`, `3e069655`, `0a4a0fa0`, `681b84c7`, `f41ee74e`, `2de6d693`, `84dff2c5`) and logged them in `docs/copy/cre8tive-usp-copy-compendium.md`.
- Summarized canonical USPs (speed + control, hybrid craft, multi-platform, EI pipeline), page-specific copy systems, guardrails, and reference docs so future messaging work stays aligned.
- Outstanding: validate metrics before public use per evidence audit; capture hero screenshots after typography tweaks.

### 2025-10-20 08:05 PDT – Source Catalog (Codex Session 2)
- Added "Quantitative Evidence Source Catalog" to the compendium with approved industry publications (Lemonlight, Tavus, HeyGen), internal analytics pointers, and a lightweight approval workflow so new stats stay defensible.
- Next: archive each cited report under `docs/insights/external/<slug>/` with summary + license info, and wire analytics exports for time-reduction/first-draft stats.
# Next Steps (Studios Hero Prototypes)
- Swap in final brand loop when approved.
- Wire primary CTA analytics events.
- Capture Chrome DevTools MCP screenshots (1707×898, 1920×1080) for each variant.

## 2025-11-03 – Studios Hero Prototypes (Codex)
- Added five premium hero variants under `src/pages/prototypes/studios-hero/`:
  - `StudioHero1_CinematicSpotlight` — spotlight beam, vignette, glass metrics.
  - `StudioHero2_MotionCanvas` — animated gradient mesh, parallax, magnetic CTA.
  - `StudioHero3_StudioReel` — monitor frame + scanlines, faux timeline panels.
  - `StudioHero4_LiquidGoldFlow` — flowing gold overlays, asymmetric layout.
  - `StudioHero5_ImmersivePortal` — depth-stacked glass cards, portal vibe.
- Route exposed at `/studios-hero-prototypes-codex` via `src/App.tsx`.
- Locked Film Noir Gradient + glass system applied; colors: Champagne headers, Gold primary CTA, Ion Cyan accents, Body text per brief.
- Reused existing `VideoBackground` (Vimeo `1051821551`), with play/mute controls.
- GSAP entrance/scroll effects gated by `prefers-reduced-motion`.

## 2025-11-03 – Premium Studios Hero (“Golden Gobo”)
- Research sweep (Archon + Context7 + web):
  - GSAP matchMedia and React cleanup patterns (useGSAP context) confirm our reduced‑motion and cleanup approach.
  - Glassmorphism a11y cautions (NN/g) reinforce strong contrast + sparing blur usage.
  - MDN autoplay guidance: muted/autoplay + graceful fallbacks.
- Decision: implement CSS/SVG‑style spotlight/gobo (no added heavy libs) layered over Vimeo background; pointer‑reactive via CSS vars; GSAP entrance + soft parallax.
- Files: `src/pages/prototypes/studios-hero/StudioHero_PremiumGoldenGobo.tsx`, route `/studios-hero-premium-codex`.
- Next: capture MCP screenshots (1707×898, 1920×1080), wire CTA analytics, and finalize copy with Claude.

## 2025-11-03 16:35 PST – Studios Section 3 Research Capsule (Codex Session B)
- Palette check: confirmed the Studios token suite is already live in `tailwind.config.ts` (midnight base `#05060D`, cyan accent `#31C4FF`, gold primary `#E1B341`) from the partner session; no additional color decisions required before Section 3 build.
- Section focus: "Our Work" video portfolio grid (copy: headline “Judge Yourself”, subhead celebrating broadcast standards, six-video showcase, no extra copy). Goal is to deliver a museum-grade gallery that underscores craft and future GSAP motion hooks.
- Research references (2025-11-03):
  - Awwwards 2025 luxury winners emphasize staggered vertical rhythm, glass overlays, and vignette lighting for video galleries (e.g., Celeres Investments, Gemma Wright Design) — inspiration for tiered card heights and soft glow wraps. [Archon › Best Luxury Websites]
  - Fjord’s 2025 immersive brand experiences roundup recommends cinematic product reels with restrained typography, spotlight beams, and layered grain to imply motion. [Web search › Fjord Avenue – 2025 Immersive Brand Experiences]
  - Studio Andor’s 2025 portfolio highlights the benefit of crossfading hover reveals and metadata overlays to telegraph narrative depth without autoplay. [Web search › Studio Andor – 2025 Portfolio Showcase]
  - Graphic Folks’ “Cinematic Web Trends 2025” article stresses using masked shimmer passes, editorial captions, and responsive clamp spacing so galleries look premium on mobile. [Web search › Graphic Folks – Cinematic Web Trends 2025]
- Actionable visual patterns for Section 3:
  1. Staggered media grid (2×3) with alternating card heights and vertical offset to create motion-ready depth.
  2. Premium frames: glass-inset border, cyan rim light, golden corner pin or glyph per tile; overlay subtle grain layer for cohesion.
  3. Hover/focus states: delay-reveal of caption bar with “Client · Deliverables” and micro-icon; plan `data-motion="portfolio-card"` hooks for GSAP scale/tilt.
  4. Ambient light layer behind grid (radial cyan/gold) to extend hero atmosphere into portfolio.
  5. CTA follow-up: include discreet “View case study” link/per tile with icon to encourage engagement when GSAP adds interactions.
- Implementation notes:
  - Use responsive CSS grid with `clamp` spacing, maintain 16:9 aspect ratio wrappers for video posters, apply `loading="lazy"`.
  - Create reusable `PortfolioCard` subcomponent (props: title, client, description, poster, duration) with data attributes for animation and future video modal hook.
  - Reserve DOM wrappers for GSAP: `data-motion-group="portfolio"` around grid, `data-motion-order` on each tile, `data-tilt-axis` for hover micro-interactions.
  - Ensure focus accessibility: `button` or `a` wrappers with visible outline + chromatic aberration ring, degrade gracefully when reduced motion preferred.
- Next steps: update `/.codex/PLAN.md` + `TASK.md` to mark Section 3 execution, build component under `src/components/studios/StudiosPortfolioSection.tsx`, wire into Studios page once Section 2 merges, then run viewport QA (1707×898 + 1920×1080) before moving forward.

## 2025-11-03 18:05 PST – Studios Section 3 Implementation (Codex Session B)
- Built `src/components/studios/StudiosPortfolioSection.tsx`: six-card “Judge Yourself” gallery with stagger-ready layout, gradient media frames, cyan/gold rim lights, and hover metadata trays. Added `data-motion` hooks (`portfolio`, `portfolio-card`, `portfolio-card-media`) plus focus-visible states for accessibility.
- Integrated section into `src/pages/Studios.tsx` behind `FadeIn` after the Challenge grid. Existing legacy sections remain while the broader rebuild progresses; added plan/TASK entries for coordination.
- Placeholder media uses crafted gradient/noise layers to stay on brand until final video posters arrive. Each card exposes deliverables + turnaround copy per deck and reserves CTA overlay for GSAP reveal.
- Ran `npm run build` post-implementation (2025-11-03 18:00 PST) — ✅ passes, vendor bundle 348 kB (<900 kB ceiling).
- Next: run Chrome DevTools MCP viewport checks (1707×898 + 1920×1080) once preview server is up, capture findings, and log in `_MEMO`/`REPORT`; coordinate with Session A on Challenge section adjustments before layering shared particle field.

### 2025-11-03 18:40 PST – Studios Portfolio Revision
- Removed all non-copy-deck text from the Section 3 gallery per direction; tiles now present full-bleed 16:9 frames with gradient placeholders only, no badges or turnaround tags.
- Updated hover treatment to rely on light bloom/noise layers without visible copy so GSAP team can add motion without reworking markup.
- Preserved accessibility via sr-only labels while keeping visible surface copy confined to headline, subhead, and section tag from the provided deck.
- Swapped gradient placeholders for live Vimeo embeds (IDs mirrored from home “Our Work” section: 1051824336, 1055446411, 1051820049, 1051819670, 1052203361, 1052204241). Each tile now opens `VideoModal` on click; no visible copy added per directive.
- Applied premium glassmorphism treatment per foundation spec: gradient border, backdrop blur, neon play button, noise overlay, while preserving 16:9 Vimeo embeds; design mirrors `VideoPlaceholderPremium` without introducing extra copy.

## 2025-11-03 19:25 PST – Studios Section 5 Research Capsule (Codex Session B)
- Section focus: “Start Anywhere. Finish Strong.” — flexible production stack + workflow explainer featuring BriefingEngine video (YouTube `ISXjl_7Yc0g`).
- Archon scan (Codrops WebGL/Three.js showcases) reinforces layering interactive gradients, glass rails, and depth cues for tech-forward storytelling.
- Asana 2025 creative workflow study highlights enterprise demand for standardized intake + modular delivery (Discovery Digital Studios, Benefit Cosmetics pipelines). citeturn0search7
- Digital Silk (Apr 23 2025) forecasts immersive, scroll-activated storytelling for LA creative brands—useful for sequencing workflow stages with motion readiness. citeturn0search1
- Webflow trends (2025) stresses container queries + scroll-driven animations with performance discipline, guiding our responsive + motion implementation. citeturn0search8
- Implementation targets:
  1. Timeline rail with three beats (BriefingEngine Intake, Hybrid Production, Platform Delivery) mapped to copy.
  2. Embedded workflow video (responsive 16:9 frame) with premium glass frame + `data-motion="workflow-video"` hook.
  3. Info pods for client flex messaging (e.g., “Bring your storyboards” vs “Start with our BriefingEngine”) using copy deck language only.
  4. Scroll-ready radial glow backdrop aligning with hero + challenge sections.
  5. CTA style: subtle “View full workflow” link anchored to video modal.
- Next: update PLAN/TASK status, draft layout wire in PLAN, implement component under `src/components/studios/` with strict copy compliance, then run post-implementation audit for stray text.
### 2025-11-03 19:55 PST – Studios Section 5 Implementation + Audit
- Added `StudiosWorkflowSection` with premium glassmorphism frame for the BriefingEngine YouTube embed, using copy-deck text exclusively (headline, subhead, three body paragraphs, caption, and workflow phrases).
- Timeline rail reuses caption phrases (“BriefingEngine (brief analysis)”, “Our Studios (production execution)”, “Platform-native delivery”) so no invented labels appear; all elements wired with `data-motion="workflow-*"` hooks.
- Wrapped section into `src/pages/Studios.tsx` after the production stack module; confirmed `npm run build` ✅ (vendor 348 kB) and performed post-implementation badge/text audit — no stray language beyond the supplied copy.
- **2025-11-03 21:25 PST – Section 6 Implementation + Audit**
  - Created `StudiosStandardsSection` with the copy deck headline and three paragraphs verbatim; no additional text or badges introduced.
  - Applied premium glass shell (radial cyan/gold glow, blur, noise) and `data-motion="standards-*"` wrappers while keeping typography dominant.
  - Integrated after the workflow section in `src/pages/Studios.tsx`; re-ran `npm run build` ✅ and confirmed zero copy deviations.
- Removed the interim workflow step rail per feedback; section now presents only the copy-deck paragraphs + caption with an oversized premium video frame.
- **2025-11-03 21:05 PST – Studios Section 6 Research Capsule (Codex Session B)**
  - Section focus: “This Isn’t for Everyone” — acts as qualification gate that reinforces premium standards and filters price shoppers.
  - Trend alignment: 2025 B2B guides emphasize evidence-first, buyer-filtering UX and minimalist clarity so high-intent visitors see standards fast.citeturn0search1
  - Luxury/enterprise references call for dynamic grids + micro-interactions to keep premium feel without clutter, while maintaining accessibility rigor for credibility.citeturn0search4turn0search8
  - Minimalist storytelling with bold typography remains core to 2025 B2B design—supports copy-led layouts and keeps this gate unmistakably premium.citeturn0search5
  - Implementation targets:
    1. Copy deck paragraphs rendered verbatim with luxurious typographic hierarchy, ample breathing room, and responsive clamp sizing.
    2. Create sculpted qualification pod background (ambient gradients, glass depth) with zero added text; rely on motion-ready wrappers (`data-motion="standards-*"`).
    3. Provide subtle micro-interaction (e.g., gradient shimmer) that respects prefers-reduced-motion.
    4. Link visually with upstream sections via palette continuity (midnight/cyan/gold) and radial spotlight.
  - Next: Update PLAN/TASK to mark Section 6 in progress, then implement component under `src/components/studios/` with strict copy audit post-build.
- **2025-11-03 21:40 PST – Studios Section 7 Research Capsule (Codex Session B)**
  - Section focus: “Six Formats. One Production.” — showcase platform-native delivery across six destinations while staying slavishly true to the copy deck.
  - 2025 landing page analyses highlight cinematic media frames, staggered transitions, and performance-aware loading for multi-format video galleries. citeturn0search7turn0search1
  - Awwwards video showcases provide direction on glass layering, aspect-varied grids, and hover lightplay for premium multi-format storytelling. citeturn0search0turn0search2
  - Implementation targets: (1) render headline, subhead, and body exactly; (2) three aspect-driven frames (16:9, 1:1, 9:16) with gradient placeholders + `data-motion="platform-demo-*"`; (3) platform names limited to sr-only labels; (4) responsive stack using clamp spacing and prefers-reduced-motion fallbacks.
- **2025-11-03 21:55 PST – Section 7 Implementation + Audit**
  - Added `StudiosPlatformDemoSection` featuring the copy deck headline, subhead, and two body paragraphs verbatim; no other visible text introduced.
  - Crafted three aspect-specific media frames (16:9, 1:1, 9:16) with gradient placeholders, ambient glow, and `data-motion="platform-demo-*"` hooks; platform identifiers exist only as sr-only labels.
  - Inserted after the standards section in `src/pages/Studios.tsx`; reran `npm run build` ✅ (vendor 348 kB) and completed copy audit—clean.
- Section 7 carousel now uses a 3D depth layout: active 16:9 lead frame centered, inactive formats staged with lower opacity/translateZ and carousel controls (icon-only buttons) for cycling. Mobile fallback stacks frames vertically; all visible text remains copy-deck only.
- Carousel interaction updated: cards now sit on a horizontal depth rail with click-to-focus behavior; inactive frames slide back with rotateY/translateZ while mobile keeps stacked view. No navigation buttons or extra copy added.
- Platform carousel refactored to rotate the frame order (stateful array) so the clicked card rotates to the lead; desktop layout keeps the centered 16:9 with the other two offset horizontally into the background, no vertical shift.
