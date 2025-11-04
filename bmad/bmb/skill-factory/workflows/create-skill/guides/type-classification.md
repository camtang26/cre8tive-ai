# Skill Type Classification Guide

Complete guide to determining whether a skill is Type 1 (Procedural/Discipline) or Type 2 (Domain Expertise).

## The Fundamental Distinction

**Type 1: Claude knows HOW, needs discipline reminders**
**Type 2: Claude needs to LEARN what it doesn't know**

## Type 1 (Procedural/Discipline) Skills

### Characteristics

**Purpose:** Enforce workflows, prevent rationalization, maintain discipline

**Knowledge Level:**
- Claude already understands the general approach
- The problem is Claude might SKIP steps under pressure
- Focus is on COMPLIANCE not LEARNING

**Content:**
- Rules and steps
- Rationalization tables (excuses + counter-arguments)
- Red flags (warning signs)
- Anti-patterns (common violations)
- Process checkpoints

**Structure:**
- Everything fits in SKILL.md (<500 lines)
- No separate KB reference files needed
- Self-contained

**Testing:**
- Pressure scenarios (combined stressors)
- Does Claude comply under stress?
- Record rationalizations
- Close loopholes

**Examples:**
- TDD enforcement (Claude knows testing, might skip)
- Verification-before-completion (knows to verify, might skip)
- Git workflow discipline (knows git, might take shortcuts)
- Code review process (knows how, might rush)
- Security checklist compliance (knows security, might skip)

### Signals for Type 1

✅ User says: "I need Claude to remember to..."
✅ User says: "Claude skips this step when..."
✅ User says: "Make sure Claude always..."
✅ The skill enforces a process/checklist
✅ Claude knows the technique but might forget/skip
✅ Success = following rules despite pressure

## Type 2 (Domain Expertise) Skills

### Characteristics

**Purpose:** Provide specialized knowledge and extensive reference material

**Knowledge Level:**
- Claude lacks knowledge in this specific domain
- OR knowledge exists but is insufficient for expert-level work
- Focus is on LEARNING not just COMPLIANCE

**Content:**
- Workflow + KB references
- SKILL.md: Overview, workflow, quality criteria, pointers
- KB files: API reference, patterns, troubleshooting (20-40k tokens)
- Progressive disclosure architecture

**Structure:**
- SKILL.md: <500 lines (overview + pointers)
- reference/*.md: 4-6 files, 5-8k tokens each
- Total package: 20-40k tokens

**Testing:**
- Real implementation scenarios
- Objective metrics (performance, code patterns)
- Subjective validation (user assesses quality)
- Does Claude build it correctly?

**Examples:**
- GSAP animations (complex framework, many gotchas)
- Advanced Next.js patterns (nuanced implementations)
- Security implementations (specialized knowledge)
- Performance optimization (expert techniques)
- Complex state management (XState, Zustand patterns)

### Signals for Type 2

✅ User says: "AI struggles with this domain..."
✅ User says: "I need to research..."
✅ User says: "Claude doesn't know..."
✅ Requires 10k+ tokens of reference material
✅ User is not an expert (needs external research)
✅ Success = building complex implementations correctly

## Decision Matrix

| Question | Type 1 | Type 2 |
|----------|--------|--------|
| Does Claude know the approach? | YES | NO/Insufficient |
| Main challenge? | Discipline/Compliance | Knowledge/Expertise |
| Under 500 lines total? | YES | NO (needs KB) |
| User is expert? | Often YES | Often NO |
| Testing approach? | Pressure scenarios | Real implementations |
| Reference material? | None (in SKILL.md) | Yes (KB files) |
| Progressive disclosure? | Not needed | Essential |

## Edge Cases

### Simple API Documentation

**If API is simple (5-10 methods, straightforward):**
→ Type 1 (document in SKILL.md)

**If API is complex (50+ methods, many gotchas, patterns):**
→ Type 2 (needs KB references)

### Workflow Using a Tool

**If focus is maintaining the workflow:**
→ Type 1 (e.g., "Always run tests before deploying")

**If focus is mastering the tool:**
→ Type 2 (e.g., "Expert-level GSAP usage")

### Best Practices Enforcement

**If best practices are simple/well-known:**
→ Type 1 (e.g., "Use meaningful variable names")

**If best practices require deep knowledge:**
→ Type 2 (e.g., "Advanced React performance patterns")

## When Uncertain

**Default to Type 2 if:**
- You'll need to do research
- Can't document everything in 500 lines
- Domain is complex with many edge cases
- Implementations require expert-level knowledge

**Type 2 can always be used, but Type 1 cannot handle complex domains.**

## Common Mistakes

### ❌ Choosing Type 1 When Type 2 Needed

**Symptom:** Keep hitting 500-line limit, trying to cram everything in
**Solution:** Re-classify as Type 2, move details to KB

### ❌ Choosing Type 2 When Type 1 Sufficient

**Symptom:** Creating KB files but they're all < 1000 tokens each
**Solution:** Consolidate everything into SKILL.md as Type 1

### ❌ Not Recognizing Research Need

**Symptom:** "I'll just document what I know" but it's incomplete
**Solution:** If you're not an expert, choose Type 2 and research

## Classification Process

### Step 1: Quick Assessment

Ask: "Can this fit in 500 lines including examples?"
- If YES → Likely Type 1
- If NO → Likely Type 2

### Step 2: Knowledge Check

Ask: "Does Claude already know this generally?"
- If YES → Likely Type 1
- If NO → Likely Type 2

### Step 3: Research Need

Ask: "Will I need to research to create this skill?"
- If NO → Likely Type 1
- If YES → Likely Type 2

### Step 4: User Confirmation

- Present classification with rationale
- User reviews and confirms/overrides
- User has final say

## Real-World Examples

### Type 1 Examples

**TDD Enforcement:**
- Claude knows testing principles
- Problem: Skips tests under pressure
- Solution: Rationalization table + pressure resistance

**Commit Message Standards:**
- Claude knows how to write commits
- Problem: Writes vague messages
- Solution: Checklist + examples + anti-patterns

**Code Review Checklist:**
- Claude knows what to review
- Problem: Might skip thoroughness
- Solution: Mandatory checklist + verification

### Type 2 Examples

**GSAP Animations:**
- Claude has basic GSAP knowledge
- Problem: Missing patterns, performance, cleanup
- Solution: 20k+ KB with patterns, troubleshooting, optimization

**Advanced Next.js:**
- Claude knows Next.js basics
- Problem: Complex patterns (ISR, middleware, edge functions)
- Solution: KB with architecture patterns, gotchas, examples

**XState v5:**
- Claude might know XState v4 (outdated)
- Problem: New setup() API, actor patterns
- Solution: KB with v5 patterns, type safety, migration

## Summary

**Type 1 = Discipline**
- Claude knows, needs reminders
- Everything in SKILL.md
- Pressure testing
- Rationalization tables

**Type 2 = Expertise**
- Claude needs to learn
- SKILL.md + KB references
- Implementation testing
- Progressive disclosure

**When uncertain:** Choose Type 2 and let research scope be determined by testing.