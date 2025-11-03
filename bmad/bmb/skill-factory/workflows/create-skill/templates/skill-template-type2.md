# Type 2 (Domain Expertise) Skill Template

Use this template structure for creating Type 2 skills that provide domain expertise with KB references.

---

## Voice and Tone (CRITICAL)

**Use imperative/infinitive form** (verb-first) throughout SKILL.md:
- ✅ "To create timeline, use gsap.timeline()"
- ✅ "Avoid using power2 for organic motion"
- ❌ "You should use gsap.timeline()"
- ❌ "You need to avoid power2"

Write objective, instructional language. Third person in description only, imperative in body.

---

## SKILL.md Structure (Anthropic-Aligned)

```markdown
---
name: skill-name-kebab-case
description: [ACTION VERB] [WHAT] [SPECIFICS] in [DOMAIN/FRAMEWORK]. Use when [TRIGGERS] or user mentions [KEYWORDS].
---

# Skill Name

## Overview

[Domain introduction - what is this technology/framework?]
[When to use this vs alternatives]
[What complexity level this addresses]

## Premium vs Basic [Domain]

**Basic (don't use [framework] for these):**
- [Simple use cases better served by alternatives]
- [When simpler tools suffice]

**Premium ([framework]'s strength):**
- [Complex use cases requiring domain expertise]
- [Advanced scenarios where framework excels]
- [When alternatives fall short]

## Quick Start

[Essential setup and basic usage - imperative voice]

To get started:

```[language]
// Minimal working example (5-15 lines)
[Shows basic pattern working]
```

[Brief explanation of what this accomplishes]

## Common Operations

### Operation 1: [Most Frequent Task]

[Brief description of when to do this operation]

```[language]
// Complete, runnable example (10-20 lines)
[Showing this operation implemented properly]
```

**Key points:**
- [Important aspect to remember]
- [Common mistake to avoid]

### Operation 2: [Second Frequent Task]

[Brief description]

```[language]
// Complete, runnable example
[Showing proper implementation]
```

**Key points:**
- [Important considerations]

### Operation 3: [Third Frequent Task] (if applicable)

[Similar structure - include 2-3 most common operations]

**Note**: For comprehensive pattern coverage, advanced techniques, and detailed variations, see Reference Materials section.

## Workflow for Complex Implementations

### 1. Planning Phase

[What to consider before starting - imperative voice]
[How to structure the approach]

### 2. Implementation Phase

[Step-by-step implementation guidance]
[Organized by complexity level]

### 3. Optimization Phase

[How to refine and optimize]
[Performance considerations]

### 4. Validation Phase

[How to verify quality]
[What to check for]

## Quality Criteria (How to Know It's Premium)

**Measurable indicators:**
- [Objective criterion 1 - how to measure it]
- [Objective criterion 2 - how to measure it]
- [Objective criterion 3 - how to measure it]

**Subjective qualities (What premium FEELS like):**
- **[Quality Attribute 1]**: [What good looks/behaves like]
  - Red flag: [What indicates poor quality]
- **[Quality Attribute 2]**: [What good feels like]
  - Red flag: [Warning sign]
- **[Quality Attribute 3]**: [Premium characteristic]
  - Red flag: [Cheap/broken indicator]

## Anti-Patterns (Common Mistakes)

❌ **[Anti-Pattern 1]** ([why it's bad])
- Results in: [Negative consequence from baseline]
- Instead do: [Correct approach]

❌ **[Anti-Pattern 2]** ([why it's bad])
- Results in: [Negative consequence]
- Instead do: [Correct approach]

❌ **[Anti-Pattern 3]** ([why it's bad])
- Results in: [Negative consequence]
- Instead do: [Correct approach]

[Include anti-patterns from baseline failure analysis]

## Reference Materials

[Natural descriptive references - use Anthropic pattern]

For [comprehensive description of what file 1 covers including key topics and techniques], see reference/[file1].md

For [comprehensive description of what file 2 covers including key topics and techniques], see reference/[file2].md

For [comprehensive description of what file 3 covers including key topics and techniques], see reference/[file3].md

[Continue for all reference files with natural descriptive sentences]

**No word/token limits** - describe contents clearly so Claude knows when to load each file.

## Examples

### Example 1: Common Complex Use Case

[Scenario description - real-world context]

```[language]
// Complete implementation (20-50 lines)
[Showing proper patterns from SKILL.md + references]
[Demonstrating quality criteria]
```

**Key aspects:**
- [What makes this example premium quality]
- [Which patterns/techniques used]
- [Why this approach works]

### Example 2: Advanced Technique

[More complex scenario]

```[language]
// Advanced implementation
[Showing expert-level usage from references]
```

**Advanced techniques demonstrated:**
- [Technique 1 from KB references]
- [Technique 2 from KB references]

### Example 3: Anti-Pattern (What NOT to Do)

**❌ WRONG:**

```[language]
// Code showing common mistake from baseline
```

**Why this fails:** [Specific failure mode from baseline testing]

**✅ CORRECT:**

```[language]
// Proper implementation
```

**Why this works:** [Explains correct approach and outcome]

## Troubleshooting

**Common issues and where to find solutions:**

| Symptom | Likely Cause | See |
|---------|--------------|-----|
| [Issue 1] | [Root cause] | reference/[file].md#[section] |
| [Issue 2] | [Root cause] | reference/[file].md#[section] |

## See Also

- [Related skill 1] - [When to use it]
- [Related skill 2] - [When to use it]
```

---

## reference/*.md Structure

Each reference file created by research agents should follow this structure:

```markdown
# [Topic Area Title]

## Research Context

[Brief context - why this domain matters]

---

## PATTERNS: [Category Name]

### Pattern 1: [Name]

**What it is**: [Clear description]

**Why it works**: [Deep mechanistic explanation]

**Examples**:
```[language]
// Example showing pattern implementation
// Adapted to domain (code/prompts/workflows as appropriate)
```

**When to use**: [Context and applicability]

**Validation**: [Sources confirming this]

### Pattern 2: [Name]

[Continue for all important patterns...]

---

## GOTCHAS: Common Failures

### Gotcha 1: [Name]

**Problem**: [What goes wrong]

**Why it fails**: [Root cause, mechanism]

**Solution**:
```[language]
// Code showing fix
```

**How to recognize**: [Warning signs]

[Continue for thorough gotcha coverage...]

---

## ANTI-PATTERNS: Wrong Approaches

### Anti-Pattern 1: [Name]

**What's wrong**: [Description]

**Consequences**: [What breaks, why it's bad]

**Correct approach**:
```[language]
// Proper implementation
```

---

## ADVANCED TECHNIQUES

[Expert-level patterns for premium work]

---

## QUALITY CRITERIA

**Measurable**: [Objective validation methods]

**Subjective**: [Qualitative assessment criteria]

---

**Research Sources**: [List of sources consulted]
```

**Size**: Comprehensive coverage (naturally 500-3000 lines depending on domain complexity). No artificial limits.

---

## Key Principles for Type 2 Skills

1. **SKILL.md has substance** (Quick Start, Common Operations, not just pointers)
2. **Progressive disclosure** (core in SKILL.md, details in KB)
3. **Natural references** (descriptive sentences, not constrained pointers)
4. **Imperative voice** throughout SKILL.md body
5. **Quality criteria** for subjective validation
6. **Anti-patterns from baseline** testing
7. **Complete runnable examples** in SKILL.md
8. **Comprehensive coverage** in reference/ files

---

## Common Sections for Type 2

**In SKILL.md (200-450 lines)**:
- Overview (domain intro, when to use vs alternatives)
- Premium vs Basic guidance
- Quick Start with code
- Common Operations (2-3) with runnable examples
- Workflow for complex implementations
- Quality criteria (measurable + subjective)
- Anti-patterns (from baseline failures)
- Natural references (descriptive sentences)
- Examples (2-3) showing patterns applied
- Troubleshooting basics
- See Also

**In reference/*.md (500-3000 lines per file)**:
- Comprehensive pattern coverage
- Multiple examples per pattern
- Deep WHY explanations
- Thorough gotcha coverage
- Advanced expert techniques
- Performance optimization
- Edge cases

---

## What NOT to Include in SKILL.md

Move these to reference/ files:
- ❌ Comprehensive API documentation
- ❌ Detailed pattern variations (just show common ones)
- ❌ Extensive troubleshooting (just common issues)
- ❌ All gotchas (show critical ones, rest in reference/)
- ❌ Anything pushing over 500 lines

---

## Content Allocation Balance

**The 80/20 test**: "Can Claude accomplish 80% of common tasks from SKILL.md alone, with reference/ enabling the advanced 20%?"

- SKILL.md: Gets Claude started, handles frequent operations
- reference/: Enables mastery for complex/advanced scenarios

**If SKILL.md is just pointers**: Too minimal, add Quick Start and Common Operations
**If SKILL.md is >500 lines**: Too comprehensive, move advanced content to reference/
