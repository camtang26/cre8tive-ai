# Description Optimization Guide

The skill description is the SINGLE MOST IMPORTANT element of a Claude Skill. It determines whether Claude will ever discover and use your skill.

---

## The Iron Law of Skill Discovery

**If Claude can't match the description to the user's intent, the skill doesn't exist.**

No matter how brilliant your workflow, how comprehensive your examples, how elegant your code—if the description doesn't trigger, none of it matters.

---

## The Proven Formula

```
[ACTION VERB] [WHAT IT DOES] [KEY SPECIFICS]. Use when [TRIGGER SCENARIOS] or user mentions [KEYWORDS].
```

### Components Breakdown

**1. ACTION VERB** (Start strong)
- Apply, Enforce, Create, Guide, Implement, Analyze, Generate, Validate, Optimize, Systematize
- NOT: "Helps with", "Provides support for", "Can be used for"

**2. WHAT IT DOES** (Core capability)
- One clear, specific capability
- NOT multiple unrelated things
- NOT vague abstractions

**3. KEY SPECIFICS** (Differentiation)
- What makes this approach unique?
- What specific framework/pattern/process?
- Concrete methodology

**4. USE WHEN** (Explicit triggers)
- "Use when [scenario A], [scenario B], or [scenario C]"
- Specific situations that match this skill
- Problem indicators

**5. KEYWORDS** (Discovery terms)
- "...or user mentions [term1], [term2], [term3]"
- Domain vocabulary
- Synonyms and alternative phrasings
- Tool/library names if relevant

---

## Examples: Good vs Bad

### Example 1: Debugging

**❌ BAD (Score: 20/100)**
```yaml
description: Helps with debugging
```
**Problems**: No action verb, vague, no triggers, no keywords, no specifics

**✅ GOOD (Score: 95/100)**
```yaml
description: Apply 4-phase debugging process (reproduce, isolate, diagnose, verify) systematically. Use when bugs are hard to track down, production issues occur, or user mentions debugging, troubleshooting, root causes.
```
**Why it works**:
- Action verb: "Apply"
- What: "4-phase debugging process"
- Specifics: "(reproduce, isolate, diagnose, verify) systematically"
- Triggers: "bugs are hard to track down, production issues occur"
- Keywords: "debugging, troubleshooting, root causes"

---

### Example 2: Test-Driven Development

**❌ BAD (Score: 25/100)**
```yaml
description: TDD stuff
```
**Problems**: No structure, jargon without explanation, no triggers

**✅ GOOD (Score: 92/100)**
```yaml
description: Enforce RED-GREEN-REFACTOR test-driven development cycle with failing tests first, minimal implementation second, refactoring third. Use when implementing features, fixing bugs, or refactoring code.
```
**Why it works**:
- Action verb: "Enforce"
- What: "test-driven development cycle"
- Specifics: "RED-GREEN-REFACTOR" + "failing tests first, minimal implementation second, refactoring third"
- Triggers: "implementing features, fixing bugs, or refactoring code"
- Keywords: Implicit in "test-driven development" (will match "TDD", "testing", "test first")

---

### Example 3: Brand Guidelines

**❌ BAD (Score: 30/100)**
```yaml
description: Company branding rules
```
**Problems**: No triggers, no specifics, passive

**✅ GOOD (Score: 90/100)**
```yaml
description: Apply Acme Corp brand colors (coral #FF6B35, navy #004E89, gold #F7B801), Montserrat headers, Open Sans body text, and logo usage rules to all external materials.
```
**Why it works**:
- Action verb: "Apply"
- What: "brand colors...logo usage rules"
- Specifics: Actual color codes, font names
- Triggers: Implicit (when working on Acme Corp materials)
- Keywords: "brand", "colors", "Montserrat", "Open Sans", "logo"

---

### Example 4: Financial Modeling

**❌ BAD (Score: 35/100)**
```yaml
description: Excel financial models
```
**Problems**: No action, no methodology, no triggers

**✅ GOOD (Score: 88/100)**
```yaml
description: Create Excel financial models with standard conventions: blue for inputs, black for formulas, green for cross-sheet links, red for external links. Use when building forecasts, budgets, or valuation models.
```
**Why it works**:
- Action verb: "Create"
- What: "Excel financial models"
- Specifics: Color-coding conventions detailed
- Triggers: "building forecasts, budgets, or valuation models"
- Keywords: "Excel", "financial models", "forecasts", "budgets", "valuation"

---

## Length Optimization

### The Sweet Spot: 50-200 Characters

**Why?**
- Short enough to process quickly at discovery phase (10-50 tokens)
- Long enough to include meaningful triggers
- Fits nicely in system prompts
- Optimal for token efficiency

### Length Guidelines

| Length | Token Cost | Discoverability | When to Use |
|--------|-----------|----------------|-------------|
| < 50 chars | ~5-10 tokens | Low (too vague) | Never - too short |
| 50-100 chars | ~10-20 tokens | Moderate | Simple, focused skills |
| 100-200 chars | ~20-40 tokens | **OPTIMAL** | **Most skills** |
| 200-500 chars | ~40-100 tokens | Good | Complex skills needing detail |
| 500-1024 chars | ~100-250 tokens | Decreasing | Only if absolutely necessary |
| >1024 chars | Hard limit | N/A | Will be truncated |

---

## Keyword Strategy

### Primary Keywords (Must Include)

**Domain vocabulary**: Terms experts use
- Financial modeling → "forecasts", "valuation", "DCF", "sensitivity analysis"
- Testing → "TDD", "assertions", "mocks", "coverage"
- Design → "responsive", "accessibility", "contrast", "typography"

**Action verbs**: What user wants to DO
- Create, build, generate, implement, develop
- Debug, fix, troubleshoot, diagnose
- Analyze, evaluate, assess, review
- Optimize, improve, enhance, refactor

**Problem indicators**: When things go wrong
- "bugs are hard to track down"
- "production issues"
- "inconsistent behavior"
- "performance problems"

### Secondary Keywords (Include if Space)

**Synonyms**: Alternative phrasings
- debugging = troubleshooting = root cause analysis
- testing = TDD = test-first = test-driven
- design = UI = user interface = frontend

**Tool names**: If skill is tool-specific
- "Playwright", "Jest", "React", "Tailwind", "Excel"

**Abbreviations**: Both forms
- "test-driven development" + "TDD"
- "continuous integration" + "CI"
- "pull request" + "PR"

---

## Trigger Scenarios: The "Use When" Clause

### Pattern 1: Problem-Oriented

```yaml
Use when [problem A], [problem B], or [problem C]
```

**Example**:
```yaml
Use when bugs appear deep in stack, errors occur far from source, or symptoms don't reveal causes
```

### Pattern 2: Task-Oriented

```yaml
Use when [doing task A], [doing task B], or [doing task C]
```

**Example**:
```yaml
Use when implementing features, fixing bugs, or refactoring code
```

### Pattern 3: Context-Oriented

```yaml
Use when working on [context A], [context B], or user mentions [keywords]
```

**Example**:
```yaml
Use when working on presentations, client decks, or user mentions PowerPoint, PPTX, slides
```

### Pattern 4: Hybrid (Most Powerful)

Combine problem + task + keywords:

```yaml
Use when [problem scenario], [task scenario], or user mentions [keyword1], [keyword2], [keyword3]
```

**Example**:
```yaml
Use when production is down, debugging complex issues, or user mentions root cause, tracing, systematic debugging
```

---

## Advanced Optimization Techniques

### Technique 1: Front-Load Keywords

**❌ Weak**:
```yaml
description: This skill helps you create presentations using brand guidelines when making decks.
```

**✅ Strong**:
```yaml
description: Create branded PowerPoint presentations following company guidelines. Use when making client decks, pitches, or user mentions PPTX, slides, presentations.
```

Why: Claude processes descriptions left-to-right. Put strongest keywords first.

---

### Technique 2: Synonym Packing

Include multiple ways users might phrase the same need:

```yaml
Use when debugging, troubleshooting, root cause analysis, or tracing bugs through call stack
```

- debugging = troubleshooting = root cause analysis = tracing
- All variants covered

---

### Technique 3: Layer Specificity

General → Specific:

```yaml
Create Excel financial models (general) with standard conventions: blue for inputs, black for formulas (specific). Use when building forecasts, budgets, valuation models (general applications).
```

Catches both broad ("Excel models") and narrow ("valuation DCF") queries.

---

### Technique 4: Include Anti-Patterns

Sometimes mention what the skill PREVENTS:

```yaml
Enforce RED-GREEN-REFACTOR preventing test-after-coding anti-pattern. Use when implementing features to ensure tests written first.
```

Users often search for problems they want to avoid.

---

## Testing Your Description

### Manual Tests

1. **Read aloud test**: Does it make sense spoken?
2. **5-second test**: Can someone understand the skill in 5 seconds?
3. **Keyword test**: Circle all trigger keywords - are there 5+?
4. **Scenario test**: List 3 situations where this should trigger - are they in description?

### Automated Tests

**Trigger Coverage Score**:
```python
def calculate_trigger_score(description):
    score = 0

    # Action verb at start? +20
    if starts_with_action_verb(description):
        score += 20

    # Has "Use when" clause? +20
    if "use when" in description.lower():
        score += 20

    # Keyword density (5+ keywords) +20
    keywords = extract_keywords(description)
    score += min(20, len(keywords) * 4)

    # Length in optimal range (100-200 chars) +20
    if 100 <= len(description) <= 200:
        score += 20

    # Specificity (mentions concrete things) +20
    if has_concrete_specifics(description):
        score += 20

    return score  # 0-100
```

**Target**: 80+ for production skills

---

## Common Mistakes to Avoid

### Mistake 1: Starting with "This skill..."
❌ "This skill helps you debug code"
✅ "Apply 4-phase debugging process..."

**Why**: Wastes characters, delays keywords

---

### Mistake 2: Vague Capabilities
❌ "Helps with development"
✅ "Enforce test-driven development cycle"

**Why**: "Helps with" is not actionable

---

### Mistake 3: No Triggers
❌ "Create PowerPoint presentations"
✅ "Create PowerPoint presentations. Use when making client decks, pitches, or user mentions slides, PPTX, presentations."

**Why**: Without triggers, discovery is accidental

---

### Mistake 4: Jargon Without Context
❌ "Implements CQRS pattern"
✅ "Implement Command Query Responsibility Segregation (CQRS) pattern separating read and write operations. Use when building scalable backends or user mentions CQRS, event sourcing, microservices."

**Why**: Spell out abbreviations, explain concepts

---

### Mistake 5: Too Generic
❌ "Development best practices"
✅ "Enforce test-driven development with RED-GREEN-REFACTOR cycle"

**Why**: Generic skills rarely trigger correctly

---

## Iteration Process

### Version 1: Brain Dump
Write everything about the skill without worrying about length:
```
This skill helps developers write better code by enforcing test-driven development practices where you write tests first before implementation...
```

### Version 2: Apply Formula
Restructure using ACTION + WHAT + SPECIFICS + TRIGGERS:
```
Enforce test-driven development with RED-GREEN-REFACTOR cycle: failing tests first, minimal implementation, refactoring. Use when implementing features, fixing bugs, refactoring code, or user mentions TDD, testing, test-first.
```

### Version 3: Optimize Length
Cut redundancy, pack keywords:
```
Enforce RED-GREEN-REFACTOR test-driven development: failing tests first, minimal implementation second, refactoring third. Use when implementing features, fixing bugs, or user mentions TDD, testing, test-first.
```

### Version 4: Test and Refine
- Check trigger coverage
- Verify keyword density
- Confirm length (aim for 100-200 chars)
- Test with sample user queries

---

## Description Templates by Skill Type

### Template 1: Process/Methodology Skills
```yaml
[VERB] [METHODOLOGY NAME] [KEY STEPS]. Use when [problem scenarios] or user mentions [keywords].
```

### Template 2: Tool Usage Skills
```yaml
[CREATE/USE] [TOOL] for [PURPOSE] with [KEY FEATURES]. Use when [use cases] or user mentions [tool names, keywords].
```

### Template 3: Domain Expertise Skills
```yaml
Apply [DOMAIN] [STANDARDS/CONVENTIONS] [SPECIFIC RULES]. Use when [scenarios] or working on [domain tasks].
```

### Template 4: Quality/Validation Skills
```yaml
[VALIDATE/CHECK/ENSURE] [WHAT] against [CRITERIA]. Use when [quality concerns] or user mentions [quality keywords].
```

---

## Real-World Examples from Superpowers Library

### Systematic Debugging (Score: 95/100)
```yaml
description: Apply 4-phase debugging framework (reproduce, isolate, diagnose, verify). Use when bugs are hard to track, tests fail inconsistently, or user mentions debugging, troubleshooting, root causes.
```

### Test-Driven Development (Score: 92/100)
```yaml
description: Enforce RED-GREEN-REFACTOR test-driven development cycle with failing tests first, minimal implementation second, refactoring third. Use when implementing features, fixing bugs, or refactoring code.
```

### Root Cause Tracing (Score: 90/100)
```yaml
description: Systematically trace bugs backward through call stack to find original trigger point. Use when bugs appear deep in call stack, errors occur far from source, or symptoms don't reveal causes.
```

---

## Final Checklist

Before finalizing your description:

- [ ] Starts with action verb
- [ ] Contains "Use when..." clause
- [ ] Lists 5+ trigger keywords
- [ ] Length 100-200 characters (or 200-500 if complex)
- [ ] No vague language ("helps with", "can be used for")
- [ ] Includes synonyms for key concepts
- [ ] Mentions specific methodologies/tools/patterns
- [ ] Tested against sample user queries
- [ ] Trigger coverage score ≥ 80
- [ ] Makes sense when read aloud

**If all checked**: ✅ Description is optimized for discovery
**If any unchecked**: ⚠️ Revise and retest
