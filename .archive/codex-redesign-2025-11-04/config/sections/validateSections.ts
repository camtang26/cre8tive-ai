import { conversationalSections } from './conversational-ai.config'
import { studiosSections } from './studios.config'
import type { SectionValidationIssue, SectionValidationSummary } from './types'
import { enforceWordCounts } from './validators/enforceWordCounts'
import { enforcePalette } from './validators/enforcePalette'
import { enforceTrinity } from './validators/enforceTrinity'

export async function validateSections(): Promise<SectionValidationSummary> {
  const sections = [...studiosSections, ...conversationalSections]

  const errors: SectionValidationIssue[] = []
  const warnings: SectionValidationIssue[] = []

  for (const section of sections) {
    errors.push(...enforceWordCounts(section))
    errors.push(...enforcePalette(section))
    warnings.push(...enforceTrinity(section))
  }

  return { errors, warnings }
}
