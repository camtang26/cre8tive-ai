# Repository Guidelines

## Project Structure & Module Organization
`src/` holds React + TypeScript modules (feature folders under `components/`, route files in `pages/`). Root configs (`vite.config.ts`, `tailwind.config.ts`, `tsconfig*.json`) govern tooling. Copy decks, specs, and research live in `docs/`, active session logs in `.codex/`, static assets in `public/`, and scripted checks in `tests/` or `test/` (notably `test/performance/run-tests.ts`).

## Build, Test, and Development Commands
- `npm run dev` – Vite dev server on http://localhost:8080 with HMR.  
- `npm run build` – `tsc` type-check + optimized bundle (keep vendor chunk ≤900 kb).  
- `npm run build:dev` – debug-friendly bundle with source maps.  
- `npm run preview` – serve `/dist` for sign-off.  
- `npm run lint` – ESLint 9.9 flat config.  
- `npm run test:performance` – TSX benchmarks in `test/performance/` for GSAP/Lenis validation.

## Coding Style & Naming Conventions
Indent with two spaces, prefer double quotes, omit semicolons. Components stay PascalCase (`StudiosPortfolioSection.tsx`), hooks adopt `useCamelCase`, utilities live in `src/lib` or `src/utils`. Compose Tailwind strings in layout → color → effect order and add tokens in shared configs before hard-coding. Copy is immutable—use the approved decks (currently `docs/prototypes/studios-copy-final-2025-11-04.md`).

## Testing Guidelines
Run `npm run test:performance` after any animation, GSAP, or Lenis adjustment and log outcomes in `.codex/_MEMO.md`. Visual or interaction edits require `npm run build` plus Chrome DevTools MCP screenshots (1707×898 and 1920×1080) before closing a task. Store supporting captures in `Screenshots/` or `.codex/external/`.

## Commit & Pull Request Guidelines
Follow the lightweight Conventional-style prefixes already in history (`enhance:`, `docs:`, `fix:`, `upgrade:`) and keep subjects imperative under ~72 characters (e.g., `enhance: Studios portfolio hover depth`). PRs must outline scope, link copy/palette references, attach screenshots or MCP captures, list lint/build/test results, and note GSAP hooks or reduced-motion expectations. Reference TASK IDs so the board stays current.

## Security & Configuration Tips
Do not commit secrets. getform.io, Cal.com, and ElevenLabs keys must come from the deploy environment. Leave CSP + analytics snippets as-is unless marketing approves changes, and rerun `npm run build` after touching `vite.config.ts` or `tailwind.config.ts` to ensure React Snap output stays valid.
