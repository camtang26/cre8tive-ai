export const DESKTOP_MEDIA_QUERIES = {
  desktopUp: "(min-width: 1024px)",
  laptop: "(min-width: 1024px) and (max-width: 1439px)",
  desktop: "(min-width: 1440px) and (max-width: 1919px)",
  largeDesktop: "(min-width: 1920px) and (max-width: 2559px)",
  ultraWide: "(min-width: 2560px)"
} as const

export type DesktopMatchKey = keyof typeof DESKTOP_MEDIA_QUERIES
export type MotionTier = "base" | "laptop" | "desktop" | "largeDesktop" | "ultraWide"

const MOTION_TIER_PRIORITY: MotionTier[] = ["ultraWide", "largeDesktop", "desktop", "laptop"]

export const resolveMotionTier = (conditions: Partial<Record<DesktopMatchKey, boolean>>): MotionTier => {
  for (const tier of MOTION_TIER_PRIORITY) {
    if (conditions[tier]) {
      return tier
    }
  }
  return "base"
}

export interface ScrollOffsetConfig {
  startPercent: number
  endPercent: number
}

export interface HeroMotionConfig {
  backgroundDuration: number
  backgroundEase: string
  headlineDuration: number
  headlineEase: string
  headlineOverlap: string
  detailDuration: number
  detailEase: string
  detailOverlap: string
  cardDuration: number
  cardEase: string
  cardOverlap: string
  tileDuration: number
  tileEase: string
  tileStagger: number
  tileOverlap: string
}

export interface NeuralMotionConfig {
  backgroundDuration: number
  backgroundEase: string
  coreDuration: number
  coreEase: string
  coreOverlap: string
  synopsisDuration: number
  synopsisEase: string
  synopsisOverlap: string
  wordsDuration: number
  wordsEase: string
  wordsStagger: number
  wordsOverlap: string
  cardsDuration: number
  cardsEase: string
  cardsOverlap: string
  sceneDuration: number
  sceneEase: string
  sceneStagger: number
  sceneOverlap: string
}

export interface StyleMotionConfig {
  backgroundDuration: number
  backgroundEase: string
  headerDuration: number
  headerEase: string
  headerOverlap: string
  cardDuration: number
  cardEase: string
  cardStagger: number
  cardOverlap: string
}

export interface StoryboardMotionConfig {
  backgroundDuration: number
  backgroundEase: string
  copyDuration: number
  copyEase: string
  copyOverlap: string
  frameDuration: number
  frameEase: string
  frameStagger: number
  frameOverlap: string
}

const heroBase: HeroMotionConfig = {
  backgroundDuration: 0.8,
  backgroundEase: "power3.out",
  headlineDuration: 1,
  headlineEase: "power4.out",
  headlineOverlap: "-=0.3",
  detailDuration: 0.6,
  detailEase: "power3.out",
  detailOverlap: "-=0.4",
  cardDuration: 1.2,
  cardEase: "expo.out",
  cardOverlap: "-=0.3",
  tileDuration: 0.6,
  tileEase: "back.out(1.2)",
  tileStagger: 0.12,
  tileOverlap: "-=0.3"
}

const heroLaptop: HeroMotionConfig = {
  ...heroBase,
  backgroundDuration: 0.7,
  headlineDuration: 0.9,
  detailDuration: 0.55,
  cardDuration: 1.05,
  tileDuration: 0.5,
  tileStagger: 0.1
}

const heroDesktop: HeroMotionConfig = {
  ...heroBase,
  backgroundDuration: 0.85,
  headlineDuration: 1.1,
  detailDuration: 0.65,
  cardDuration: 1.25,
  tileDuration: 0.65
}

const heroLargeDesktop: HeroMotionConfig = {
  ...heroBase,
  backgroundDuration: 0.9,
  headlineDuration: 1.25,
  detailDuration: 0.7,
  cardDuration: 1.4,
  tileDuration: 0.75,
  tileStagger: 0.13
}

const heroUltraWide: HeroMotionConfig = {
  ...heroBase,
  backgroundDuration: 0.95,
  headlineDuration: 1.35,
  detailDuration: 0.75,
  cardDuration: 1.55,
  tileDuration: 0.82,
  tileStagger: 0.14
}

export const HERO_MOTION: Record<MotionTier, HeroMotionConfig> = {
  base: heroBase,
  laptop: heroLaptop,
  desktop: heroDesktop,
  largeDesktop: heroLargeDesktop,
  ultraWide: heroUltraWide
}

const neuralBase: NeuralMotionConfig = {
  backgroundDuration: 0.8,
  backgroundEase: "power3.out",
  coreDuration: 1.1,
  coreEase: "expo.out",
  coreOverlap: "-=0.4",
  synopsisDuration: 0.7,
  synopsisEase: "power3.out",
  synopsisOverlap: "-=0.4",
  wordsDuration: 0.35,
  wordsEase: "power2.out",
  wordsStagger: 0.05,
  wordsOverlap: "-=0.32",
  cardsDuration: 0.7,
  cardsEase: "power3.out",
  cardsOverlap: "-=0.28",
  sceneDuration: 0.5,
  sceneEase: "back.out(1.1)",
  sceneStagger: 0.12,
  sceneOverlap: "-=0.35"
}

const neuralLaptop: NeuralMotionConfig = {
  ...neuralBase,
  coreDuration: 1.0,
  synopsisDuration: 0.6,
  cardsDuration: 0.6,
  sceneDuration: 0.45,
  sceneStagger: 0.1
}

const neuralDesktop: NeuralMotionConfig = {
  ...neuralBase,
  coreDuration: 1.2,
  synopsisDuration: 0.75,
  cardsDuration: 0.75,
  sceneDuration: 0.55
}

const neuralLargeDesktop: NeuralMotionConfig = {
  ...neuralBase,
  coreDuration: 1.3,
  synopsisDuration: 0.85,
  cardsDuration: 0.85,
  sceneDuration: 0.6,
  sceneStagger: 0.13
}

const neuralUltraWide: NeuralMotionConfig = {
  ...neuralBase,
  coreDuration: 1.4,
  synopsisDuration: 0.9,
  cardsDuration: 0.9,
  sceneDuration: 0.65,
  sceneStagger: 0.14
}

export const NEURAL_MOTION: Record<MotionTier, NeuralMotionConfig> = {
  base: neuralBase,
  laptop: neuralLaptop,
  desktop: neuralDesktop,
  largeDesktop: neuralLargeDesktop,
  ultraWide: neuralUltraWide
}

const styleBase: StyleMotionConfig = {
  backgroundDuration: 0.75,
  backgroundEase: "power3.out",
  headerDuration: 0.65,
  headerEase: "power3.out",
  headerOverlap: "-=0.3",
  cardDuration: 0.65,
  cardEase: "back.out(1.1)",
  cardStagger: 0.12,
  cardOverlap: "-=0.25"
}

const styleLaptop: StyleMotionConfig = {
  ...styleBase,
  cardDuration: 0.58,
  cardStagger: 0.1
}

const styleDesktop: StyleMotionConfig = {
  ...styleBase,
  backgroundDuration: 0.82,
  headerDuration: 0.7,
  cardDuration: 0.7
}

const styleLargeDesktop: StyleMotionConfig = {
  ...styleBase,
  backgroundDuration: 0.9,
  headerDuration: 0.78,
  cardDuration: 0.78,
  cardStagger: 0.14
}

const styleUltraWide: StyleMotionConfig = {
  ...styleBase,
  backgroundDuration: 0.95,
  headerDuration: 0.82,
  cardDuration: 0.82,
  cardStagger: 0.16
}

export const STYLE_MOTION: Record<MotionTier, StyleMotionConfig> = {
  base: styleBase,
  laptop: styleLaptop,
  desktop: styleDesktop,
  largeDesktop: styleLargeDesktop,
  ultraWide: styleUltraWide
}

const storyboardBase: StoryboardMotionConfig = {
  backgroundDuration: 0.8,
  backgroundEase: "power3.out",
  copyDuration: 0.7,
  copyEase: "power3.out",
  copyOverlap: "-=0.3",
  frameDuration: 0.7,
  frameEase: "power4.out",
  frameStagger: 0.18,
  frameOverlap: "-=0.15"
}

const storyboardLaptop: StoryboardMotionConfig = {
  ...storyboardBase,
  frameDuration: 0.6,
  frameStagger: 0.14
}

const storyboardDesktop: StoryboardMotionConfig = {
  ...storyboardBase,
  backgroundDuration: 0.85,
  copyDuration: 0.75,
  frameDuration: 0.75
}

const storyboardLargeDesktop: StoryboardMotionConfig = {
  ...storyboardBase,
  backgroundDuration: 0.9,
  copyDuration: 0.82,
  frameDuration: 0.82,
  frameStagger: 0.2
}

const storyboardUltraWide: StoryboardMotionConfig = {
  ...storyboardBase,
  backgroundDuration: 0.96,
  copyDuration: 0.88,
  frameDuration: 0.88,
  frameStagger: 0.22
}

export const STORYBOARD_MOTION: Record<MotionTier, StoryboardMotionConfig> = {
  base: storyboardBase,
  laptop: storyboardLaptop,
  desktop: storyboardDesktop,
  largeDesktop: storyboardLargeDesktop,
  ultraWide: storyboardUltraWide
}

const defaultScrollOffsets: Record<MotionTier, ScrollOffsetConfig> = {
  base: { startPercent: 0.75, endPercent: 0.45 },
  laptop: { startPercent: 0.78, endPercent: 0.47 },
  desktop: { startPercent: 0.74, endPercent: 0.44 },
  largeDesktop: { startPercent: 0.7, endPercent: 0.42 },
  ultraWide: { startPercent: 0.68, endPercent: 0.4 }
}

export const HERO_SCROLL_OFFSETS = defaultScrollOffsets
export const NEURAL_SCROLL_OFFSETS = defaultScrollOffsets
export const STYLE_SCROLL_OFFSETS = defaultScrollOffsets
export const STORYBOARD_SCROLL_OFFSETS = defaultScrollOffsets


export interface HandoffMotionConfig {
  backgroundDuration: number
  copyDuration: number
  copyOverlap: string
  mockupDuration: number
  mockupOverlap: string
}

const handoffBase: HandoffMotionConfig = {
  backgroundDuration: 0.6,
  copyDuration: 0.6,
  copyOverlap: "-=0.25",
  mockupDuration: 0.7,
  mockupOverlap: "-=0.2"
}

const handoffLaptop: HandoffMotionConfig = {
  ...handoffBase,
  copyDuration: 0.55,
  mockupDuration: 0.6
}

const handoffDesktop: HandoffMotionConfig = {
  ...handoffBase,
  backgroundDuration: 0.68,
  copyDuration: 0.65,
  mockupDuration: 0.78
}

const handoffLargeDesktop: HandoffMotionConfig = {
  ...handoffBase,
  backgroundDuration: 0.74,
  copyDuration: 0.72,
  mockupDuration: 0.86
}

const handoffUltraWide: HandoffMotionConfig = {
  ...handoffBase,
  backgroundDuration: 0.8,
  copyDuration: 0.78,
  mockupDuration: 0.94
}

export const HANDOFF_MOTION: Record<MotionTier, HandoffMotionConfig> = {
  base: handoffBase,
  laptop: handoffLaptop,
  desktop: handoffDesktop,
  largeDesktop: handoffLargeDesktop,
  ultraWide: handoffUltraWide
}

export const HANDOFF_SCROLL_OFFSETS = defaultScrollOffsets
