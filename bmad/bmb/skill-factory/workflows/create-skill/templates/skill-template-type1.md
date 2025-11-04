# Type 1 (Procedural/Discipline) Skill Template

Use this template structure for creating Type 1 skills that enforce workflows, processes, or discipline.

---

## Voice and Tone (CRITICAL)

**Use imperative/infinitive form** (verb-first) throughout SKILL.md:
- ✅ "To test feature, write failing test first"
- ✅ "Avoid skipping tests under time pressure"
- ❌ "You should write failing test first"
- ❌ "You need to avoid skipping tests"

Write objective, instructional language. Third person in description only, imperative in body.

---

## SKILL.md Structure

```markdown
---
name: skill-name-kebab-case
description: [ACTION VERB] [WHAT] [SPECIFICS]. Use when [TRIGGERS] or user mentions [KEYWORDS].
---

# Skill Name

## Overview

[Core principle in 1-2 paragraphs]
[Why this skill exists - what problem it solves]
[What discipline/workflow it enforces]

## When to Use

**Use this skill when:**
- [Specific trigger scenario 1]
- [Specific trigger scenario 2]
- [Specific trigger scenario 3]
- User mentions: [keyword list]

**Do NOT use when:**
- [Situations where skill doesn't apply]
- [Edge cases where different approach needed]

## Workflow

### Step-by-Step Process

1. [First step - clear action]
2. [Second step - clear action]
3. [Third step - clear action]
4. [Additional steps as needed]

**For complex multi-step processes, provide copy-paste checklist:**

```
- [ ] Step 1 complete
- [ ] Step 2 complete
- [ ] Step 3 complete
```

## Examples

### Example 1: Common Case

[Concrete scenario description]

```[language]
[Complete, runnable code example]
[Showing correct behavior]
```

**Why this works:** [Explanation of why this follows the discipline]

### Example 2: Edge Case

[Less common but important scenario]

```[language]
[Complete code example]
[Showing how discipline applies to edge case]
```

### Example 3: Anti-Pattern

**❌ WRONG:**

```[language]
[Code showing violation of discipline]
```

**Why this is wrong:** [Explanation of violation and consequences]

**✅ CORRECT:**

```[language]
[Code showing proper discipline]
```

## Common Rationalizations

**These are excuses agents make to violate the discipline. Address each explicitly:**

| Excuse | Reality |
|--------|---------|
| "[Rationalization 1 from baseline testing]" | [Counter-argument showing why this doesn't justify violation] |
| "[Rationalization 2 from baseline testing]" | [Counter-argument] |
| "[Rationalization 3 from baseline testing]" | [Counter-argument] |

## Red Flags - STOP and Start Over

Watch for these warning signs that indicate violation:

- [Warning sign 1 from baseline testing]
- [Warning sign 2 from baseline testing]
- [Warning sign 3 from baseline testing]
- [Phrases that indicate rationalization]

**All of these mean: [Required corrective action]**

## The Rule

[State the core rule clearly and unambiguously]

**Violating the letter of the rule IS violating the spirit of the rule.**

No exceptions:
- Not for "[common excuse 1]"
- Not for "[common excuse 2]"
- Not for "[common excuse 3]"

## See Also

- [Related skill 1] - [When to use it]
- [Related skill 2] - [When to use it]
```

## Key Principles for Type 1 Skills

1. **Be explicit about violations** - Don't assume Claude will infer what not to do
2. **Address rationalizations directly** - Use verbatim quotes from baseline testing
3. **Provide concrete examples** - Show both correct and incorrect behavior
4. **Close loopholes explicitly** - If agents found a rationalization, address it
5. **Keep under 500 lines** - Everything must fit in SKILL.md

## Common Sections for Type 1

- **Overview** - Why this discipline matters
- **When to Use** - Specific triggers
- **Workflow** - Clear process steps
- **Examples** - Concrete demonstrations
- **Common Rationalizations** - From baseline testing
- **Red Flags** - Warning signs
- **The Rule** - Core principle stated clearly

## What NOT to Include

- ❌ Extensive API documentation (not needed for process enforcement)
- ❌ Multiple reference files (everything fits in SKILL.md)
- ❌ Theoretical frameworks (focus on actionable process)
- ❌ Comprehensive edge case coverage (focus on common violations)
