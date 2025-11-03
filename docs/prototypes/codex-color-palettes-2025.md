# Codex Color Palette Prototypes — 2025-11-03

**Sprint:** 1 (Foundation Design System)  
**Prepared by:** Codex (Session 2)  
**Status:** Ready for Cameron review

---

## Research Inputs

- Luxury/creative trend reports emphasize emerald + gold with charcoal/ivory bases, as well as jewel-tone navy + champagne pairings for premium editorial brands.citeturn0search0turn0search2
- Enterprise/AI color guidance continues to recommend deep navy foundations with electric cyan or mint highlights, alongside slate + neon pairings to communicate innovation without sacrificing trust.citeturn0search4turn1search0turn1search8
- Warm luxury signals (brass, taupe, dusty rose) remain popular in 2025 hospitality design, enabling humane opulence when balanced with charcoal neutrals.citeturn0search5

All palettes below incorporate WCAG contrast checks (headline ≥ 7:1 against background; body text ≥ 4.5:1) and specify button/text pairings that meet or exceed AA targets.

---

## Studios · Luxury Cinematic Options

| Palette | Core Idea | Key Colors | Notes |
|---------|-----------|------------|-------|
| **Film Noir Gradient** | Midnight gradient with gold + cyan glints | `#05060D`, `#13263B`, `#E1B341`, `#F5E7C7`, `#31C4FF` | Honors Claude’s Film Noir while adopting the dark-gradient shell used across the site. |
| **Abyssal Emerald** | Emerald neon over abyssal blue | `#04121E`, `#16F0A1`, `#0BCBFF`, `#B8D9DE`, `#0A141D` | Connects emerald spotlighting with the homepage’s teal gradients. |
| **Horizon Magenta** | Aurora magenta on midnight teal | `#060B13`, `#2C1E40`, `#F25CF2`, `#44E0FF`, `#CFCEF5` | Adds creative energy while keeping a deep gradient base. |
| **Solar Flare Bronze** | Bronze + cyan sparks on deep navy | `#050C14`, `#FFB547`, `#45D5F9`, `#F9F1E7`, `#1B2434` | Bridges warm metallic storytelling with futuristic cyan accents. |

Each palette ships with hero sample styles in `codexStudiosPalettes` (see `/src/data/palettes/codex.ts`). Buttons, badges, and body copy pairings pass AA contrast on both dark and light surfaces.

---

## Conversational AI · Enterprise Trust Options

| Palette | Core Idea | Key Colors | Notes |
|---------|-----------|------------|-------|
| **Neural Gradient** | Deep-space navy with cyan pulse | `#02060F`, `#061530`, `#1F9CFF`, `#53FFD6`, `#F2F8FF` | Mirrors the homepage gradient shell while retaining enterprise trust cues. |
| **Quantum Alloy** | Slate hardware gradient with violet energy | `#0B101B`, `#151B2C`, `#635BFF`, `#64FFC2`, `#E9EDFF` | Neutral hardware base plus violet/mint highlights for innovation messaging. |
| **Aurora Slate** | Horizon teal over abyssal slate | `#04101D`, `#0C2438`, `#38E5FF`, `#A88BFF`, `#E8F8FF` | Gradient adds motion-friendly depth for demo storytelling. |
| **Horizon Ember** | Warm amber with teal sparks | `#060B14`, `#141D2E`, `#FFB45C`, `#45E3D0`, `#FDF4E0` | Introduces approachable warmth without abandoning the dark shell. |

Codex palettes are available via `codexConversationalPalettes` (see `/src/data/palettes/codex.ts`) and rendered in the live comparison page at `/color-palette-demo`.

---

## Implementation Artifacts

- **Components:**  
  - `src/components/palette-prototypes/PaletteCard.tsx`  
  - `src/components/palette-prototypes/types.ts`
- **Data:**  
  - Claude reference palettes — `src/data/palettes/claude.ts`  
  - Codex palettes — `src/data/palettes/codex.ts`
- **Demo Page:** `src/pages/ColorPaletteDemo.tsx` (route: `/color-palette-demo`)

Run `npm run build` to validate integration before stakeholder review.

---

## Next Steps

1. Cameron reviews `/color-palette-demo`, selects one Studios palette + one Conversational AI palette to lock for Sprint 2 hero prototypes.
2. Update `foundation-locked.md` with the chosen palettes.
3. Feed locked colors into hero prototypes (Sprint 2), video gallery styling, and CTA systems.
