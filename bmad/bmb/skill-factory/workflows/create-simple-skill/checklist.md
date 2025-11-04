# Skill Quality Validation Checklist

Use this checklist to score skills across 7 critical dimensions. Each dimension is scored 0-100.
Minimum acceptable quality score: 85/100 (average across all dimensions).

---

## 1. Clarity (0-100)

**What we're measuring**: Are instructions unambiguous and actionable?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] Every instruction is actionable (no vague "should" or "could")
- [ ] Steps are numbered and sequential
- [ ] No ambiguous language ("might", "usually", "try to")
- [ ] Technical terms are defined on first use
- [ ] Examples clarify every major concept

**70-89 (Good)**
- [ ] Most instructions are clear
- [ ] Minor ambiguities exist but don't block usage
- [ ] Examples cover main concepts
- [ ] Some terms could use definition

**50-69 (Needs Improvement)**
- [ ] Multiple ambiguous instructions
- [ ] Missing examples for key concepts
- [ ] Unclear workflow order
- [ ] Jargon without explanation

**0-49 (Insufficient)**
- [ ] Majority of instructions are vague
- [ ] No clear workflow
- [ ] Missing critical examples
- [ ] Unusable without prior domain knowledge

---

## 2. Examples (0-100)

**What we're measuring**: Concrete, runnable code/usage examples present?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] Minimum 3 concrete examples
- [ ] Examples are runnable code (not pseudocode)
- [ ] Cover common case, edge case, AND anti-pattern
- [ ] Examples include explanatory comments
- [ ] Before/after comparisons where applicable
- [ ] Examples use realistic data/scenarios

**70-89 (Good)**
- [ ] 2-3 examples present
- [ ] Examples are concrete
- [ ] Cover main use cases
- [ ] Could use more variety

**50-69 (Needs Improvement)**
- [ ] Only 1 example
- [ ] Examples are too abstract
- [ ] Missing anti-patterns
- [ ] No comments/explanation

**0-49 (Insufficient)**
- [ ] No examples OR
- [ ] Examples are pseudocode/abstract
- [ ] Examples don't relate to skill content
- [ ] Not runnable

---

## 3. Triggers (0-100)

**What we're measuring**: Description optimized for Claude's discovery mechanism?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] Description 50-200 characters (optimal range)
- [ ] Starts with action verb
- [ ] Contains explicit "Use when..." clause
- [ ] Lists 3+ trigger keywords
- [ ] Includes synonyms/alternative phrasings
- [ ] Front-loads most important keywords
- [ ] Domain vocabulary present

**70-89 (Good)**
- [ ] Description 200-500 characters (acceptable)
- [ ] Has action verb
- [ ] Mentions trigger scenarios
- [ ] 2+ trigger keywords
- [ ] Some domain vocabulary

**50-69 (Needs Improvement)**
- [ ] Description too long (>500 chars) or too short (<50 chars)
- [ ] Vague trigger scenarios
- [ ] Only 1 trigger keyword
- [ ] Missing "Use when..." guidance

**0-49 (Insufficient)**
- [ ] No clear triggers
- [ ] Description is generic/vague
- [ ] No action verbs
- [ ] No domain keywords

---

## 4. Token Efficiency (0-100)

**What we're measuring**: Concise writing with progressive disclosure?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] Simple skill: <500 tokens estimated
- [ ] No redundant content
- [ ] Front-loads critical information
- [ ] Uses clear, concise language
- [ ] References other skills instead of duplicating
- [ ] Multi-level docs if >500 tokens

**70-89 (Good)**
- [ ] Simple skill: 500-1000 tokens
- [ ] Minimal redundancy
- [ ] Reasonable verbosity
- [ ] Some references to other skills

**50-69 (Needs Improvement)**
- [ ] Simple skill: 1000-2000 tokens
- [ ] Noticeable redundancy
- [ ] Verbose explanations
- [ ] Duplicates content from other skills

**0-49 (Insufficient)**
- [ ] Simple skill: >2000 tokens
- [ ] Massive redundancy
- [ ] Should be multi-file skill
- [ ] Token waste throughout

---

## 5. Testability (0-100)

**What we're measuring**: Can skill effectiveness be validated?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] Clear success criteria defined
- [ ] Observable outcomes specified
- [ ] Can create pressure test scenarios
- [ ] Falsifiable claims (can prove if skill works)
- [ ] Concrete "do this, not that" patterns

**70-89 (Good)**
- [ ] Some success criteria present
- [ ] Outcomes mostly measurable
- [ ] Could be pressure tested with effort

**50-69 (Needs Improvement)**
- [ ] Vague success criteria
- [ ] Difficult to measure outcomes
- [ ] Hard to create test scenarios

**0-49 (Insufficient)**
- [ ] No success criteria
- [ ] No measurable outcomes
- [ ] Impossible to validate
- [ ] All subjective guidance

---

## 6. Composability (0-100)

**What we're measuring**: References other skills appropriately (DRY principle)?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] References related skills in "See Also"
- [ ] Doesn't duplicate content from other skills
- [ ] Builds on existing skill patterns
- [ ] Clear composition strategy (sequential, parallel, conditional)
- [ ] Explains relationship to other skills

**70-89 (Good)**
- [ ] References some related skills
- [ ] Minimal duplication
- [ ] Works well with other skills

**50-69 (Needs Improvement)**
- [ ] Few or no references to related skills
- [ ] Some content duplication
- [ ] Unclear how it composes

**0-49 (Insufficient)**
- [ ] Duplicates existing skill entirely OR
- [ ] No consideration of skill ecosystem
- [ ] Contradicts other skills
- [ ] Isolated/incompatible

---

## 7. Completeness (0-100)

**What we're measuring**: All required sections present and thorough?

### Scoring Rubric:

**90-100 (Excellent)**
- [ ] YAML frontmatter valid (name, description)
- [ ] Overview section (2-3 sentences)
- [ ] "When to Use" section with specific scenarios
- [ ] Workflow/Process section with clear steps
- [ ] Examples section (3+ examples)
- [ ] Guidelines section (best practices + anti-patterns)
- [ ] "See Also" section (if related skills exist)

**70-89 (Good)**
- [ ] All required sections present
- [ ] Most sections are thorough
- [ ] 1-2 sections could be expanded

**50-69 (Needs Improvement)**
- [ ] Missing 1 optional section
- [ ] Several sections are incomplete
- [ ] YAML frontmatter has warnings

**0-49 (Insufficient)**
- [ ] Missing 2+ required sections OR
- [ ] Invalid YAML frontmatter
- [ ] Incomplete/stub content

---

## Calculating Quality Score

1. Score each dimension (1-7) individually using rubrics above
2. Calculate average: `(D1 + D2 + D3 + D4 + D5 + D6 + D7) / 7`
3. Result is overall quality score

### Quality Score Interpretation:

- **90-100**: Exceptional - publish immediately
- **85-89**: Production-ready - minor polish recommended
- **70-84**: Needs improvement - revise low-scoring dimensions
- **<70**: Not ready - significant rework required

### Minimum Acceptable Score: 85/100

---

## Common Issues and Solutions

### Low Clarity Score
**Fix**: Add numbered steps, define terms, include more examples

### Low Examples Score
**Fix**: Add concrete code examples with comments, include anti-patterns

### Low Triggers Score
**Fix**: Optimize description with action verbs, trigger scenarios, and domain keywords

### Low Token Efficiency Score
**Fix**: Remove redundancy, reference other skills, consider multi-file structure

### Low Testability Score
**Fix**: Add measurable outcomes, define success criteria, specify observable behaviors

### Low Composability Score
**Fix**: Add "See Also" section, reference related skills, remove duplicate content

### Low Completeness Score
**Fix**: Add missing sections, expand stub content, validate YAML frontmatter

---

## Automated Checks (Run These)

```bash
# 1. YAML Validation
grep -A 3 "^---" SKILL.md | head -4  # Should show valid YAML

# 2. Token Count Estimation (rough)
wc -w SKILL.md  # Multiply by ~1.3 for token estimate

# 3. Description Length
grep "description:" SKILL.md | wc -c  # Should be 50-500 chars

# 4. Example Count
grep -c "```" SKILL.md  # Should be at least 6 (3 examples × 2 fences)

# 5. Required Sections Present
for section in "Overview" "When to Use" "Examples" "Guidelines"; do
    grep -q "$section" SKILL.md && echo "✓ $section" || echo "✗ $section MISSING"
done
```

---

## Pre-Deployment Final Check

Before marking skill as complete, verify:

- [ ] Overall quality score ≥ 85
- [ ] No dimension scores below 70
- [ ] YAML frontmatter valid
- [ ] Description 50-500 characters
- [ ] Minimum 3 concrete examples
- [ ] All required sections present
- [ ] Token count reasonable (<500 for simple)
- [ ] Related skills referenced
- [ ] File saved to correct location
- [ ] Naming follows conventions (lowercase-with-hyphens)

**If all checks pass**: ✅ Skill is production-ready

**If any checks fail**: ⚠️ Return to relevant workflow step for revision
