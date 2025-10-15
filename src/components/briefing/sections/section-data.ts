import { briefingPalette } from "@/components/briefing/palette"

export const heroDetailPills = [
  {
    label: "Campaign",
    value: "Alpine Water · Summer Elevation",
    platform: null as "youtube" | "tiktok" | null,
  },
  {
    label: "Formats",
    value: "30s Hero · 15s Echo",
    platform: null as "youtube" | "tiktok" | null,
  },
  {
    label: "Launch Window",
    value: "June 15 – Aug 30 · Paid + Organic",
    platform: null as "youtube" | "tiktok" | null,
  },
]

export const heroFieldTiles = [
  {
    label: "Brand Name",
    value: "Alpine Water Co.",
    hint: "Feeds lower-thirds, supers, and CTA copy.",
  },
  {
    label: "Campaign Goal",
    value: "Launch “Peak Serenity” hydration ritual",
    hint: "Guides narrative arc, hero imagery, and CTA framing.",
  },
  {
    label: "Primary Audience",
    value: "Urban wellness seekers · 24–38",
    hint: "Sets tone, casting, and pacing.",
  },
  {
    label: "Launch Window",
    value: "June 15 – Aug 30 · Paid + Organic",
    hint: "Locks timing, media mix, and production resources.",
  },
]

export const platformCards = [
  {
    name: "YouTube 16:9",
    headline: "Hero Spot · 60s",
    description: "Cinematic storytelling anchored for desktop and TV placements.",
    accent: "from-[#4F46E5]/40 via-[#312E81]/55 to-transparent",
  },
  {
    name: "TikTok 9:16",
    headline: "Vertical Cut · 15s",
    description: "Native vertical framing with bespoke motion cues and CTA prompts.",
    accent: "from-[#22D3EE]/40 via-[#0F172A]/55 to-transparent",
  },
]

export const visualStyles = [
  {
    name: "Minimalist",
    src: "/briefing-engine/visual-styles/Minimalist.webp",
    width: 4096,
    height: 2272,
  },
  {
    name: "Bold & Vibrant",
    src: "/briefing-engine/visual-styles/BoldVibrant.webp",
    width: 4096,
    height: 2272,
  },
  {
    name: "Cinematic",
    src: "/briefing-engine/visual-styles/CinematicDramatic.webp",
    width: 4096,
    height: 2272,
  },
  {
    name: "Playful & Animated",
    src: "/briefing-engine/visual-styles/Playfulanimated.webp",
    width: 4096,
    height: 2288,
  },
  {
    name: "Futuristic",
    src: "/briefing-engine/visual-styles/Futuristic.webp",
    width: 5504,
    height: 3072,
  },
  {
    name: "Retro & Vintage",
    src: "/briefing-engine/visual-styles/RetroVintage.webp",
    width: 4403,
    height: 2457,
  },
  {
    name: "Documentary",
    src: "/briefing-engine/visual-styles/DocumentaryRealistic.webp",
    width: 4623,
    height: 2580,
  },
  {
    name: "Artistic Abstract",
    src: "/briefing-engine/visual-styles/ArtisticAbstract.webp",
    width: 4096,
    height: 2272,
  },
  {
    name: "2D Vector",
    src: "/briefing-engine/visual-styles/2dVector.webp",
    width: 4096,
    height: 2288,
  },
]

export const storyboardFrames = [
  { src: "/briefing-engine/storyboard/Frame1.webp", width: 1920, height: 1080 },
  { src: "/briefing-engine/storyboard/Frame2.webp", width: 4096, height: 2336 },
  { src: "/briefing-engine/storyboard/Frame3.webp", width: 1920, height: 1080 },
  { src: "/briefing-engine/storyboard/Frame4.webp", width: 1920, height: 1080 },
  { src: "/briefing-engine/storyboard/Frame5.webp", width: 4096, height: 2336 },
  { src: "/briefing-engine/storyboard/Frame6.webp", width: 4096, height: 2336 },
]

export const stageMetadata = [
  {
    id: "stage-hero",
    step: "Step 01",
    title: "Enter Your Brief",
    description:
      "Seven cues lock your campaign goal, audience, and guardrails—no AI expertise required.",
    accent: briefingPalette.indigo.DEFAULT,
  },
  {
    id: "stage-synthesis",
    step: "Step 02",
    title: "AI Generates the Story",
    description:
      "AI generates script, synopsis, and scene-by-scene breakdown in under 60 seconds. Optimized for video production workflows.",
    accent: briefingPalette.holographic.cyan,
  },
  {
    id: "stage-styles",
    step: "Step 03",
    title: "Choose Your Visual Direction",
    description:
      "Lock palette, typography, and motion language in a brand-safe direction that still feels bespoke.",
    accent: briefingPalette.fuchsia.DEFAULT,
  },
  {
    id: "stage-storyboard",
    step: "Step 04",
    title: "Storyboard Assembly",
    description:
      "Complete storyboard with scene markers, multi-duration cuts, platform crop specs, and director notes—ready for our Studio.",
    accent: briefingPalette.cyan.DEFAULT,
  },
  {
    id: "stage-handoff",
    step: "Step 05",
    title: "Studios Handoff",
    description:
      "Export as PDF or hand off to Cre8tive AI Studios for video production. Production timeline depends on complexity—typically days to weeks.",
    accent: briefingPalette.orange.DEFAULT,
  },
]

export type StageMetadata = (typeof stageMetadata)[number]
