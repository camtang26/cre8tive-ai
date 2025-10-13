# 2025-10-09 – Briefing Process Flow Update

## Summary
- Trimmed the connected-pipeline module to a concise badge beneath the stack controls, keeping the ladder copy while removing redundant body text.
- Reverted the stacked workflow cards to their prior sizing and depth so the section matches the earlier approved layout, per user request.
- Shifted and enlarged the workflow-intelligence header so the intro message lands lower in the viewport with more visual weight.
- Synced `_MEMO` and `PLAN` to reflect the rollback and current pause on further layout experiments.

## Verification
- `npm run build`

## Risks
- None beyond the outstanding responsive sweep already noted; layout matches the previously accepted version.

## Follow-ups
- Await further direction before attempting new sizing/layout adjustments.
# 2025-10-09 – Story 3.1 Particle System Refresh

## Summary
- Restored production particle counts (5K/2K/1K) with optional `VITE_PARTICLE_COUNT_SCALE` to allow local downscaling without violating ACs.
- Implemented a staged entrance burst using render buffers, power4 easing, and per-particle delays; fallbacks keep prefers-reduced-motion on static gradient.
- Added spatial-hash neighbour lookup (100 px cells) and progressive particle ramp so the hero reaches full density within ~3 s instead of blocking the main thread.
- Fixed `MouseInteraction` listener teardown and added vitest coverage for device helpers, entrance easing maths, and listener lifecycle.
- Introduced Vitest + Playwright scaffolding; Playwright still fails in headless Chromium due to software WebGL fallback, but logs now show ~1 s initialization and GPU stall warnings for further investigation.

## Verification
- `npm run lint` *(fails: repo missing unicorn plugin definitions, logged for follow-up)*
- `npm run test`
- `npm run build`
- `npm run test:e2e` *(fails: hero selector wait still times out under software WebGL; see `test-results/briefing-engine-AI-Briefin-5b016-izes-without-console-errors-chromium/`)*

## Risks
- ESLint still fails globally due to missing `unicorn/prefer-module` and `unicorn/prefer-node-protocol` rules in legacy installer template—needs repo-wide config fix.
- Manual browser/perf/accessibility matrices remain outstanding; fps performance with 5K particles unverified.
- Software-rendered environments (Playwright, low-power GPUs) continue to emit WebGL fallback warnings and may need bespoke fallbacks.

## Follow-ups
- Coordinate lint configuration update (install/disable offending unicorn rules).
- Schedule manual performance + accessibility validation to close remaining Story 3.1 tasks.
- Investigate WebGL fallback handling and resolve the lingering `createRoot` reuse warning surfaced in Playwright runs.
