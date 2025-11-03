export type SectionPattern =
  | 'hero'
  | 'copy'
  | 'video-showcase'
  | 'portfolio'
  | 'testimonial'
  | 'platform-demos'
  | 'cta'

export type StudiosPaletteKey =
  | 'background'
  | 'backgroundAccent'
  | 'headline'
  | 'primary'
  | 'accent'
  | 'body'

export type ConversationalPaletteKey =
  | 'background'
  | 'backgroundAccent'
  | 'headline'
  | 'primary'
  | 'accent'
  | 'body'

export type PaletteToken =
  | { theme: 'studios'; key: StudiosPaletteKey }
  | { theme: 'conversational'; key: ConversationalPaletteKey }

export interface CTAConfig {
  label: string
  href: string
  analyticsId: string
}

export type VisualElement =
  | {
      type: 'video'
      id: string
      aspectRatio?: string
      duration?: string
      posterSrc?: string
      autoplay?: boolean
      loop?: boolean
      muted?: boolean
    }
  | { type: 'video-grid'; items: string[]; description: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'icon'; name: string }
  | { type: 'icon-set'; items: string[]; description: string }
  | { type: 'metric'; label: string; value: string }
  | { type: 'badge'; label: string; value: string }

export interface SectionCopy {
  headline: string
  subhead?: string
  body?: string
  primaryCTA?: CTAConfig
  secondaryCTA?: CTAConfig
}

export interface SectionAnalyticsConfig {
  sectionCategory: string
  exposures?: string[]
  ctas?: Record<'primary' | 'secondary', string>
  mediaEvents?: string[]
}

export interface SectionConfig {
  id: string
  pattern: SectionPattern
  palette: PaletteToken
  copy: SectionCopy
  visuals: VisualElement[]
  analytics: SectionAnalyticsConfig
  layout?: string
}

export type ValidationSeverity = 'error' | 'warning'

export interface SectionValidationIssue {
  sectionId: string
  rule: string
  message: string
  severity: ValidationSeverity
  actual?: number | string
  limit?: number | string
}

export interface SectionValidationSummary {
  errors: SectionValidationIssue[]
  warnings: SectionValidationIssue[]
}
