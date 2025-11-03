export interface PaletteColor {
  name: string
  hex: string
  role: string
  description?: string
}

export interface PaletteHeroSample {
  background: string
  surface: string
  headingColor: string
  bodyColor: string
  buttonBackground: string
  buttonText: string
  badgeBackground?: string
  badgeText?: string
}

export type PaletteOrigin = 'Claude Code' | 'Codex'

export interface PaletteOption {
  id: string
  name: string
  origin: PaletteOrigin
  tagline: string
  narrative: string
  colors: PaletteColor[]
  bestFor: string[]
  hero: PaletteHeroSample
  researchRefs?: string[]
}

