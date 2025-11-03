import type {
  PaletteToken,
  SectionConfig,
  SectionValidationIssue,
  StudiosPaletteKey,
  ConversationalPaletteKey,
} from '../types'

const STUDIOS_KEYS: ReadonlyArray<StudiosPaletteKey> = [
  'background',
  'backgroundAccent',
  'headline',
  'primary',
  'accent',
  'body',
]

const CONVERSATIONAL_KEYS: ReadonlyArray<ConversationalPaletteKey> = [
  'background',
  'backgroundAccent',
  'headline',
  'primary',
  'accent',
  'body',
]

const isValidToken = (token: PaletteToken): boolean => {
  if (token.theme === 'studios') {
    return STUDIOS_KEYS.includes(token.key)
  }
  if (token.theme === 'conversational') {
    return CONVERSATIONAL_KEYS.includes(token.key)
  }
  return false
}

export function enforcePalette(section: SectionConfig): SectionValidationIssue[] {
  const issues: SectionValidationIssue[] = []
  if (!isValidToken(section.palette)) {
    issues.push({
      sectionId: section.id,
      rule: 'PALETTE_INVALID_TOKEN',
      message: `Palette token ${section.palette.theme}.${section.palette.key} is not permitted`,
      severity: 'error',
    })
  }
  return issues
}
