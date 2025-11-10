# Studios & Conversational Overhaul Plan — 2025-11-03

**Goal:** Rebuild the Studios and Conversational AI pages as static, GSAP-ready experiences that reflect the new copy deck (to be supplied) and refreshed color direction while preserving performance, accessibility, and bundle guardrails.

## Guiding Principles
- Copy source of truth will be the document Cameron supplies; **discard the Trinity framework** and legacy phrasing once the new copy is ingested.
- Color palette guidance will arrive separately; seed tokens only after intake so design language stays aligned with the latest creative direction.
- Our mandate is **static layout, visual system, and micro-interaction polish**. GSAP timelines will be implemented later by the specialist motion team, so markup and component structure must remain animation-friendly (clear hooks, semantic hierarchy).
- Maintain compatibility with existing Tailwind/Shadcn setup, bundle ceiling (≤900 kb vendor chunk), and accessibility standards (WCAG AA, prefers-reduced-motion fallbacks even without GSAP).
- Document every major decision in `/.codex/_MEMO.md` and capture handoff guidance for the motion team in `/.codex/REPORT.md` at completion.

## Steps
- ✅ **S1 – Intake & Alignment:** Reviewed `docs/prototypes/studios-copy-final-2025-11-04.md` and `.archive/codex-redesign-2025-11-04/Studios/components`. Logged narrative beats, palette cues, and layout references in `_MEMO`; confirmed nine-section structure and premium midnight/cyan/gold scheme.
- ⏳ **S2 – Token & Foundation Update:** Map archived palette tokens (`studios-primary`, `studios-accent`, gradient recipes) into current Tailwind/theme setup. Audit typography scale, clamp utilities, and spacing tokens; introduce any missing CSS vars while guarding other routes.
- ⏳ **S3 – Studios Static Build (Section Cadence):**
  1. **Research Capsule:** For each section (Hero through CTA), run Archon + Context7 + native search (dated 2025-11-03) and capture pattern capsule in `_MEMO`.
  2. **Hero:** ✅ Completed 2025-11-03 (Codex Session A). Copy locked to “Premium Video. Without Premium Budgets.” cluster with trust strip; hero ships with layered gradients, ambient particles, deluxe CTA pair, and `data-motion="hero-*"` hooks. Awaiting MCP screenshot log. **2025-11-08 iteration:** evaluate alternative hero mask treatments (glass scrim, rim-lit framing, spotlight clamp, animated sweep, text-only emphasis) one at a time so the backdrop video stays visible while maintaining legibility.
  3. **Challenge Grid:** ✅ Completed 2025-11-03 (Codex Session A). New comparison rail with sculpted pods, frosted glass finish, cyan accent spine, and `data-motion-group="challenge-grid"`. Pending viewport screenshot log.
  4. **Portfolio (“Our Work”):** ✅ Completed 2025-11-03 (Codex Session B). Six-piece showcase with glass frames, hover metadata reveals, and lazy-loaded posters. Coordinate on any shared tokens introduced.
  5. **Production Stack (Section 4):** ✅ Completed 2025-11-03 (Codex Session B). Built the “Complete Production. One Partner.” stack with glass layers, cyan spine, and platform rail using copy-deck sentences only. Viewport captures + GSAP timing notes still pending.
  6. **Workflow Flex Section (Section 5):** ✅ Completed 2025-11-03 (Codex Session B). “Start Anywhere. Finish Strong.” module with BriefingEngine video embed, caption, and copy-deck paragraphs only. Hooks logged as `workflow-*`; viewport screenshots still outstanding.
  7. **Standards Filter (Section 6 – in progress):** Build “This Isn’t for Everyone” qualification gate: copy rendered verbatim, premium glass background, no added text/badges. Include `data-motion="standards-*"` hooks and document GSAP cues post-implementation.
  8. **Platform Demo (Section 7):** ✅ Completed 2025-11-03 (Codex Session B). “Six Formats. One Production.” gallery with aspect-specific frames, copy-only text, and `platform-demo-*` hooks. Viewport screenshots + GSAP notes pending.
  9. **Testimonials:** Sculpt 2-3 proof pods with accent glyphs and before/after context.
  10. **CTA Finale:** Reinforce broadcast-grade promise with dual CTAs, ambient glow, and trust chips.
  11. After each subsection: run viewport fit protocol (1707×898, 1920×1080), perform the mandatory copy audit for stray text/badges, and log both outcomes.
- ⏳ **S4 – Conversational Static Build:** Mirror the workflow for the Conversational AI page once its copy/palette inputs land; follow same research + implementation cadence tuned to enterprise palette and long-form demo requirements.
- ⏳ **S5 – Validation & Handoff:** Run `npm run build`, Lighthouse smoke, accessibility + keyboard pass, Chrome DevTools MCP screenshots (1707×898, 1920×1080, mobile). Capture animation hooks + outstanding GSAP notes in `_MEMO`/`REPORT`, update `TASK.md`, and summarize risks.

**Impact Set:** `src/pages/Studios.tsx`, `src/pages/ConversationalAI.tsx`, related component directories under `src/components/studios` & `src/components/conversational`, shared design tokens (`src/styles`, `tailwind.config.ts`), `.codex/_MEMO.md`, `.codex/REPORT.md`, `TASK.md`.

**Pending Inputs:** Studios copy deck (`docs/prototypes/studios-copy-final-2025-11-04.md`) and palette tokens are locked; awaiting Conversational AI copy/palette drop before mirroring S3 cadence there. Log any new deltas in `_MEMO` as they arrive.

**Coordination Notes:** Maintain communication trail for the GSAP team—note required timeline triggers, preferred stagger groupings, and any DOM structure constraints. Ensure components degrade gracefully without motion (CSS transitions only where essential).

## Archived / Completed Plans
- **Documentation Realignment (Completed 2025-11-03):** `.codex` knowledge artifacts now synced with the November 3 documentation canon.
- **Hero & Prototype Experiments (Completed 2025-11-03):** Prior hero/video placeholder exploratory work remains available for reference but no longer dictates delivery cadence.
