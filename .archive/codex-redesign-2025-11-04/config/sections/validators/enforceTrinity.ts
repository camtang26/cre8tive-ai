import type { SectionConfig, SectionValidationIssue } from '../types'

const USER_OUTCOME_KEYWORDS = [/\byou\b/i, /\byour\b/i, /\byou'll\b/i, /^deploy/i, /^scale/i]
const PRECISION_KEYWORDS = [/\b\d+%?\b/, /days?/i, /hours?/i, /minutes?/i, /platform/i, /storyboard/i, /platform-native/i]
const EMOTION_KEYWORDS = [/no\s+.*?juggling/i, /without/i, /unlock/i, /fuel/i, /elevate/i, /confidence/i, /perfect/i, /transform/i]

const hasMatch = (value: string | undefined, patterns: RegExp[]): boolean => {
  if (!value) return false
  return patterns.some((pattern) => pattern.test(value))
}

export function enforceTrinity(section: SectionConfig): SectionValidationIssue[] {
  const issues: SectionValidationIssue[] = []
  const { id, copy } = section
  const combined = [copy.headline, copy.subhead, copy.body].filter(Boolean).join(' ')

  if (!hasMatch(combined, USER_OUTCOME_KEYWORDS)) {
    issues.push({
      sectionId: id,
      rule: 'TRINITY_USER_OUTCOME',
      message: 'Copy may be missing explicit user-outcome language (e.g., "You" framing).',
      severity: 'warning',
    })
  }

  if (!hasMatch(combined, PRECISION_KEYWORDS)) {
    issues.push({
      sectionId: id,
      rule: 'TRINITY_WORD_PRECISION',
      message: 'Copy may need more specific proof points or metrics.',
      severity: 'warning',
    })
  }

  if (!hasMatch(combined, EMOTION_KEYWORDS)) {
    issues.push({
      sectionId: id,
      rule: 'TRINITY_EMOTION',
      message: 'Copy may lack clear pain avoidance or aspirational language.',
      severity: 'warning',
    })
  }

  return issues
}
