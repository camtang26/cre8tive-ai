# Skill Quality Validation Checklist

Use this checklist in Step 13 to validate skill meets all requirements before deployment.

## Critical Requirements (Must Pass)

### YAML Frontmatter

- [ ] YAML frontmatter present with `---` delimiters
- [ ] `name` field present
- [ ] `name` ≤64 characters
- [ ] `name` uses kebab-case (lowercase-with-hyphens)
- [ ] `name` uses only letters, numbers, hyphens (no special chars)
- [ ] `description` field present
- [ ] `description` ≤1024 characters
- [ ] `description` written in third person
- [ ] `description` includes WHAT skill does
- [ ] `description` includes WHEN to use
- [ ] `description` includes trigger keywords

### SKILL.md Structure

- [ ] SKILL.md file exists in skill directory root
- [ ] SKILL.md < 500 lines (HARD LIMIT)
- [ ] Current line count: _____ / 500
- [ ] All paths use forward slashes `/`
- [ ] No Windows-style backslashes `\`
- [ ] File is valid markdown

### Required Content Sections

- [ ] Overview section present
- [ ] When to Use section present
- [ ] Workflow or process documentation present
- [ ] Examples section present
- [ ] Minimum 3 examples (recommended)
- [ ] Actual example count: _____

### Writing Style

- [ ] Uses imperative/infinitive form (verb-first)
- [ ] Not second person ("you should" avoided)
- [ ] Objective, instructional tone
- [ ] Clear and actionable
- [ ] No unnecessary explanations of basics

## Progressive Disclosure (Type 2 Skills Only)

**Skip this section if Type 1 skill**

- [ ] Skill type is Type 2 (domain expertise)
- [ ] reference/ directory exists
- [ ] All reference files in reference/ (one level deep)
- [ ] No deeply nested subdirectories
- [ ] Reference file count: _____
- [ ] Each reference file 5-8k tokens
- [ ] Total KB tokens: _____ / 40,000

### KB Reference Pointers

- [ ] Reference Materials section in SKILL.md
- [ ] Uses pointer format: "For [topic]: See reference/[file].md"
- [ ] Each pointer ≤20 words
- [ ] Largest pointer word count: _____ / 20
- [ ] Total Reference Materials section ≤150 tokens
- [ ] Actual token count: _____ / 150
- [ ] No summaries (just pointers)
- [ ] No bullet lists in pointers
- [ ] All referenced files exist

### Reference File Quality

- [ ] Each file has table of contents if >100 lines
- [ ] Content is distilled (not comprehensive docs)
- [ ] Patterns, gotchas, anti-patterns included
- [ ] No basics Claude already knows
- [ ] Forward slashes in all internal paths

## Testing Requirements

### Test Scenarios

- [ ] Test scenarios defined: _____ scenarios
- [ ] Minimum 3 scenarios required
- [ ] Maximum 5 scenarios recommended
- [ ] All scenarios documented in tests/test-scenarios.md

### Baseline Testing

- [ ] Baseline testing completed WITHOUT skill
- [ ] Results documented for each scenario
- [ ] Type 1: Rationalizations captured verbatim
- [ ] Type 2: Specific failures documented
- [ ] Gap analysis completed

### Skill-Enabled Testing

- [ ] Testing completed WITH skill loaded
- [ ] Results documented for each scenario
- [ ] All scenarios PASS with skill
- [ ] Pass rate: _____ / _____ (must be 100%)
- [ ] Improvements vs baseline documented

### Iteration

- [ ] Iteration count: _____
- [ ] Each iteration documented
- [ ] Gaps identified and addressed
- [ ] Type 1: Rationalization loopholes closed
- [ ] Type 2: Knowledge gaps researched and added

### Multi-Model Testing

- [ ] Tested on Claude 3 Haiku
- [ ] Haiku result: PASS / FAIL
- [ ] Tested on Claude 3.5 Sonnet
- [ ] Sonnet result: PASS / FAIL
- [ ] Tested on Claude Opus 4
- [ ] Opus result: PASS / FAIL
- [ ] All models PASS required
- [ ] Adjustments made for compatibility: YES / NO
- [ ] If YES, describe: _____

## Description Quality (CSO)

### Formula Compliance

- [ ] Uses format: [ACTION] [WHAT] [SPECIFICS]. Use when [TRIGGERS] or user mentions [KEYWORDS].
- [ ] Action verb front-loaded
- [ ] Specific about what skill does
- [ ] Explicit trigger scenarios included
- [ ] Relevant keywords included

### Keyword Coverage

- [ ] Domain-specific terms present
- [ ] Trigger phrases present
- [ ] Tool/framework names present (if applicable)
- [ ] Synonyms and variations included
- [ ] Keywords front-loaded in description

### Token Length

- [ ] Token count: _____ tokens
- [ ] Optimal range (50-80 tokens): YES / NO
- [ ] Acceptable range (30-150 tokens): YES / NO
- [ ] Under maximum (256 tokens): YES / NO

## Type-Specific Validation

### Type 1 (Procedural/Discipline) Only

**Skip if Type 2 skill**

- [ ] Common Rationalizations table present
- [ ] Rationalization count: _____
- [ ] Counter-arguments for each rationalization
- [ ] Based on baseline testing
- [ ] Red Flags list present
- [ ] Warning signs documented
- [ ] Corrective action specified
- [ ] Pressure testing completed
- [ ] Multiple pressure types combined
- [ ] Compliance verified under pressure

### Type 2 (Domain Expertise) Only

**Skip if Type 1 skill**

- [ ] Premium vs Basic guidance present
- [ ] Distinguishes when to use domain tool
- [ ] Explains when alternatives suffice
- [ ] Quality Criteria section present
- [ ] Subjective validation criteria defined
- [ ] User can assess quality using criteria
- [ ] Anti-Patterns section present
- [ ] Anti-pattern count: _____
- [ ] Based on baseline failures
- [ ] Solutions provided for each anti-pattern
- [ ] Implementation testing completed
- [ ] Real-world complex scenarios tested
- [ ] Objective validation performed
- [ ] Subjective validation performed
- [ ] Chrome DevTools MCP used (if applicable)

## Best Practices Compliance

### Content Quality

- [ ] Removed basics Claude already knows
- [ ] "Claude is smart" principle applied
- [ ] Appropriate freedom level for task type
- [ ] No time-sensitive content (version numbers)
- [ ] No magic numbers without justification
- [ ] Dependencies documented if needed
- [ ] No assumptions about pre-installed tools

### Examples Quality

- [ ] Examples are concrete and complete
- [ ] Examples are runnable
- [ ] Examples show both correct and incorrect
- [ ] Common case example present
- [ ] Edge case example present
- [ ] Anti-pattern example present
- [ ] Examples well-commented with WHY explanations

### Progressive Disclosure

- [ ] SKILL.md keeps only essential content
- [ ] Detailed content moved to reference/ (Type 2)
- [ ] Information easily discoverable
- [ ] Token-efficient structure
- [ ] Loads only what's needed when needed

## Anti-Patterns Avoided

- [ ] No Windows-style paths (checked via grep)
- [ ] No excessive option presentation
- [ ] No deeply nested file references
- [ ] No unjustified magic numbers
- [ ] No redundant content
- [ ] No tutorial prose ("Now let's...")
- [ ] No obvious information
- [ ] No comprehensive parameter lists (link instead)

## File Organization

### Directory Structure

- [ ] Skill directory created at chosen location
- [ ] Save location: _____
- [ ] SKILL.md in root
- [ ] reference/ directory (Type 2 only)
- [ ] tests/ directory
- [ ] test-scenarios.md in tests/
- [ ] quality-validation-report.md present

### File Validation

- [ ] All files created successfully
- [ ] All files accessible
- [ ] No missing files
- [ ] No broken references
- [ ] Forward slashes in all paths verified

## Anthropic Tooling

### Validation (if available)

- [ ] package_skill.py available: YES / NO
- [ ] If YES, ran successfully: YES / NO
- [ ] If NO, manual validation completed: YES / NO
- [ ] All validation errors fixed
- [ ] Package created (if for distribution): YES / NO

### Quality Report

- [ ] Quality validation report generated
- [ ] All sections complete
- [ ] Metrics captured
- [ ] Summary accurate
- [ ] Saved to skill directory

## User Approval

### Final Review

- [ ] User reviewed SKILL.md
- [ ] User reviewed test results
- [ ] User reviewed quality report
- [ ] Type 2: User reviewed KB structure
- [ ] User confirmed skill meets requirements
- [ ] User explicitly approved for deployment

### Sign-Off

- [ ] Skill name: _____
- [ ] Skill type: _____
- [ ] Created by: _____
- [ ] Date: _____
- [ ] Status: APPROVED / NEEDS CHANGES

## Completion Criteria

**All critical requirements must PASS to deploy:**
- ✅ YAML frontmatter valid
- ✅ SKILL.md < 500 lines
- ✅ All test scenarios PASS
- ✅ Multi-model testing PASS
- ✅ User approval granted

**If ANY critical requirement FAILS:**
- 🚫 Do NOT deploy
- 🔧 Fix the issue
- ♻️ Re-validate
- ✅ Get approval before deploying

## Notes

Use this space to note any special considerations or deviations:

_____________________________________
_____________________________________
_____________________________________

---

**Validation completed by:** _____
**Date:** _____
**Result:** ✅ APPROVED / 🚫 NEEDS CHANGES
**Next steps:** _____
