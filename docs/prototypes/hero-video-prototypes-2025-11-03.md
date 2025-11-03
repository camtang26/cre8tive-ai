---
title: Hero Video Prototypes – Studios & Conversational AI
date: 2025-11-03
author: Codex Session 2
---

# Overview

Three premium hero concepts were implemented to showcase dark-gradient, video-backed experiences that align with the Cre8tive AI brand. Each prototype delivers:

- Background video with autoplay gated by `IntersectionObserver`, reduced-motion compliance, and poster fallback.
- Multi-layer gradient + glow overlays to preserve copy contrast on dark mode.
- GSAP `useGSAP` multi-phase entrance animations for headline, CTA cluster, and metrics.
- Hover interactions (tilt / reactive spotlight) for added depth.
- CTA architecture (primary + secondary) and supporting metrics tailored to each service line.
- Demo page at `/hero-prototype-demo-codex` for rapid comparison; Aurora concept available at `/studios-hero-prototypes-codex`.

Routes wired via `src/pages/HeroPrototypeDemo.tsx` and `App.tsx`.

## Studios Hero Prototype (`src/components/hero-prototypes/StudiosHeroPrototype.tsx`)

- **Narrative:** “Direct the world’s fastest cinematic production floor.”
- **Video:** Existing homepage Vimeo loop (ID `1051821551`) with autoplay gated by IntersectionObserver; poster fallback on reduced motion.
- **Structure:** Badge, hero headline, subcopy, CTA pair (“Enter Command Center”, “Watch Production Flow”), glass command console showing real-time brief, output queue chips, metric tiles.
- **Interaction:** Pointer spotlight + tilt on glass console, film grain overlay, GSAP multi-phase entrance.
- **Palette:** Film Noir gradient (Nightfall Obsidian base) with Spotlight Gold CTA and Ion Cyan highlights.

## Conversational AI Hero Prototype (`src/components/hero-prototypes/ConversationalHeroPrototype.tsx`)

- **Narrative:** “Scale customer intimacy without hiring a single new agent.”
- **Video:** Same Vimeo loop with autoplay gating/reduced-motion fallback.
- **Structure:** Badge, hero headline, subcopy, CTA pair (“Schedule a Live Demo”, “Watch 10-min Live Run”), metrics grid.
- **Interaction:** Dynamic spotlight responding to pointer to emphasize copy while preserving readability; GSAP entrance timeline.
- **Palette:** Neural gradient (deep navy with cyan/mint glows) paired with Film Noir palette accents.

## Aurora Command Center Exploration (`src/pages/prototypes/studios-hero/StudioHero6_AuroraCommandCenter.tsx`)

- **Concept:** An elevated hero showcasing the Studios control room with glass UI panels above the Film Noir gradient while the homepage video runs beneath layered spotlights.
- **CTA:** “Enter Command Center” + “Watch Production Flow”, metrics in glass chips, live brief status.
- **Interactions:** Pointer-driven spotlight, tilt animation, film grain overlay, radial glow anchored to cursor.
- **Palette:** Strict adherence to Film Noir palette; CTA uses Spotlight Gold, accents use Ion Cyan, text in Champagne Mist / body color.
- **Demo:** `/studios-hero-prototypes-codex`

## Technical Notes

- Videos default to `preload="none"`, `playsInline`, `muted`, `loop`; autoplay disabled for reduced-motion users.
- Poster images keep first-frame polished (critical for LCP).
- GSAP `useGSAP` ensures scoped selectors, cleanup, and pointer handlers via `contextSafe`.
- Tailwind utility layering provides dark gradient surfaces while maintaining 4.5:1+ contrast on text.

## Next Steps

- Swap placeholder videos with final brand footage (target 5–10 MB MP4/H.265) where needed.
- Hook hero CTA events to analytics (`hero_primary_cta`, `hero_secondary_cta`).
- Integrate sections into final page templates once palette decision is locked.
