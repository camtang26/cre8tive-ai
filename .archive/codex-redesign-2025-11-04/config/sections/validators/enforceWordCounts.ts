import type { SectionConfig, SectionValidationIssue } from '../types'

const DEFAULT_HEADLINE_RANGE = { min: 5, max: 7 }
const HEADLINE_RULES: Record<string, { min: number; max: number }> = {
  'studios-hybrid-model': { min: 3, max: 5 },
  'studios-video-showcase': { min: 3, max: 4 },
  'studios-process': { min: 4, max: 5 },
  'studios-portfolio': { min: 2, max: 3 },
  'studios-testimonials': { min: 2, max: 3 },
  'studios-platform-demos': { min: 3, max: 5 },
  'studios-cta': { min: 5, max: 8 },
  'conversational-hero': { min: 4, max: 7 },
  'conversational-use-cases': { min: 5, max: 6 },
  'conversational-video-showcase': { min: 3, max: 4 },
  'conversational-scale': { min: 4, max: 5 },
  'conversational-live-demo': { min: 3, max: 4 },
  'conversational-brand': { min: 4, max: 5 },
  'conversational-enterprise': { min: 2, max: 4 },
  'conversational-cta': { min: 6, max: 8 },
}

const SUBHEAD_RULES: Record<string, { min: number; max: number }> = {
  'studios-hero': { min: 19, max: 25 },
  'studios-portfolio': { min: 14, max: 25 },
  'studios-platform-demos': { min: 19, max: 25 },
  'studios-cta': { min: 20, max: 25 },
  'conversational-hero': { min: 17, max: 25 },
  'conversational-video-showcase': { min: 17, max: 20 },
  'conversational-live-demo': { min: 18, max: 22 },
  'conversational-cta': { min: 21, max: 25 },
}

const HEADLINE_ABSOLUTE_MAX = 12
const SUBHEAD_MIN = 15
const SUBHEAD_MAX = 25
const SUBHEAD_ABSOLUTE_MAX = 30
const BODY_MIN = 60
const BODY_MAX = 100
const BODY_ABSOLUTE_MAX = 120

const wordCount = (value: string | undefined): number => {
  if (!value) {
    return 0
  }
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

export function enforceWordCounts(section: SectionConfig): SectionValidationIssue[] {
  const issues: SectionValidationIssue[] = []
  const { headline, subhead, body } = section.copy

  const headlineRange = HEADLINE_RULES[section.id] ?? DEFAULT_HEADLINE_RANGE
  const headlineCount = wordCount(headline)
  if (headlineCount < headlineRange.min || headlineCount > headlineRange.max) {
    issues.push({
      sectionId: section.id,
      rule: 'WORD_COUNT_HEADLINE_RANGE',
      message: `Headline must be between ${headlineRange.min}-${headlineRange.max} words`,
      severity: 'error',
      actual: headlineCount,
      limit: `${headlineRange.min}-${headlineRange.max}`,
    })
  }
  if (headlineCount > HEADLINE_ABSOLUTE_MAX) {
    issues.push({
      sectionId: section.id,
      rule: 'WORD_COUNT_HEADLINE_ABSOLUTE',
      message: `Headline hard limit is ${HEADLINE_ABSOLUTE_MAX} words`,
      severity: 'error',
      actual: headlineCount,
      limit: HEADLINE_ABSOLUTE_MAX,
    })
  }

  if (subhead) {
    const subheadRange = SUBHEAD_RULES[section.id] ?? { min: SUBHEAD_MIN, max: SUBHEAD_MAX }
    const subheadCount = wordCount(subhead)
    if (subheadCount < subheadRange.min || subheadCount > subheadRange.max) {
      issues.push({
        sectionId: section.id,
        rule: 'WORD_COUNT_SUBHEAD_RANGE',
        message: `Subhead must be between ${subheadRange.min}-${subheadRange.max} words`,
        severity: 'error',
        actual: subheadCount,
        limit: `${subheadRange.min}-${subheadRange.max}`,
      })
    }
    if (subheadCount > SUBHEAD_ABSOLUTE_MAX) {
      issues.push({
        sectionId: section.id,
        rule: 'WORD_COUNT_SUBHEAD_ABSOLUTE',
        message: `Subhead hard limit is ${SUBHEAD_ABSOLUTE_MAX} words`,
        severity: 'error',
        actual: subheadCount,
        limit: SUBHEAD_ABSOLUTE_MAX,
      })
    }
  }

  if (body) {
    const bodyCount = wordCount(body)
    if (bodyCount < BODY_MIN || bodyCount > BODY_MAX) {
      issues.push({
        sectionId: section.id,
        rule: 'WORD_COUNT_BODY_RANGE',
        message: `Body copy must be between ${BODY_MIN}-${BODY_MAX} words`,
        severity: 'error',
        actual: bodyCount,
        limit: `${BODY_MIN}-${BODY_MAX}`,
      })
    }
    if (bodyCount > BODY_ABSOLUTE_MAX) {
      issues.push({
        sectionId: section.id,
        rule: 'WORD_COUNT_BODY_ABSOLUTE',
        message: `Body copy hard limit is ${BODY_ABSOLUTE_MAX} words`,
        severity: 'error',
        actual: bodyCount,
        limit: BODY_ABSOLUTE_MAX,
      })
    }
  }

  return issues
}
