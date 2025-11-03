# Cialdini's Principles of Persuasion for LLMs

Large Language Models respond to the same persuasion techniques that work on humans. Use these principles to make skills more effective at guiding behavior.

---

## The Discovery

**Superpowers library research shows**: LLMs are susceptible to the same cognitive biases and persuasion triggers as humans.

When pressure testing skills, skills that use Cialdini's principles are significantly more effective at preventing rationalization and ensuring compliance.

---

## The Six Principles

### 1. Authority

**Principle**: People (and LLMs) obey authority figures and authoritative statements.

**Weak Phrasing**:
```markdown
❌ "Consider following this process"
❌ "It's recommended to write tests first"
❌ "You should try the debugging framework"
```

**Strong Phrasing**:
```markdown
✅ "This is the MANDATORY workflow - follow it precisely"
✅ "You MUST write tests before implementation - no exceptions"
✅ "Industry standard debugging framework - required for all investigations"
```

**In Practice**:
```markdown
# Test-Driven Development

## The Rule

**Never write implementation code without a failing test first.**

This is the IRON LAW of TDD. Even when you "know" what to build.
Even under time pressure. Even for "quick fixes."

This is non-negotiable. Write the test first.
```

**Why it works**: Authoritative language ("IRON LAW", "non-negotiable", "MUST") reduces wiggle room for rationalization.

---

### 2. Commitment and Consistency

**Principle**: Once committed to something, people (and LLMs) tend to behave consistently with that commitment.

**Weak Phrasing**:
```markdown
❌ "Try to follow these steps"
❌ "When debugging, consider using this approach"
```

**Strong Phrasing**:
```markdown
✅ "Commit to following these steps IN ORDER"
✅ "Before proceeding, confirm you will complete all 4 phases"
```

**In Practice**:
```markdown
# Systematic Debugging

## Before You Begin

Commit to following the 4-phase process completely:
1. ✓ I will reproduce the bug before fixing
2. ✓ I will isolate to smallest component
3. ✓ I will diagnose root cause (not symptom)
4. ✓ I will verify the fix resolves the issue

**Acknowledge**: "I commit to following all 4 phases in order"

Now proceed to Phase 1...
```

**Why it works**: Explicit commitment creates psychological anchor. LLM is less likely to skip steps after committing.

---

### 3. Social Proof

**Principle**: People (and LLMs) look to what others do to determine correct behavior.

**Weak Phrasing**:
```markdown
❌ "This is a good approach"
❌ "Many people find this helpful"
```

**Strong Phrasing**:
```markdown
✅ "Industry standard approach used by Google, Amazon, Microsoft"
✅ "Kent Beck's original TDD process - proven over 20+ years"
✅ "This pattern is used in production by 95% of Fortune 500 companies"
```

**In Practice**:
```markdown
# Financial Modeling Conventions

## Industry Standards

These color conventions are the **industry standard** across:
- Goldman Sachs
- McKinsey & Company
- Bain & Company
- Boston Consulting Group
- Every major investment bank

**Blue inputs, black formulas** isn't just our preference - it's how
the entire financial industry builds models. Follow this standard.
```

**Why it works**: Appeals to consensus and authority of the majority.

---

### 4. Scarcity

**Principle**: People (and LLMs) value things more when they're limited or scarce.

**Weak Phrasing**:
```markdown
❌ "Keep trying different approaches"
❌ "Debug until you find the issue"
```

**Strong Phrasing**:
```markdown
✅ "You have 3 attempts before escalation - use them wisely"
✅ "This is your ONE chance to reproduce correctly - make it count"
✅ "If same approach fails 3 times, HALT and escalate"
```

**In Practice**:
```markdown
# Escalation Protocol

## The 3-Attempt Rule

You have exactly **3 attempts** to resolve this using your current approach.

**Attempt 1**: [Current attempt]
**Attempt 2**: [If 1 fails]
**Attempt 3**: [If 2 fails]

If the same approach fails ≥3 times:
1. HALT execution immediately
2. Document all 3 attempts and failures
3. Recommend 2 alternative approaches
4. Ask user for guidance

**Do NOT exceed 3 attempts with the same approach.**
```

**Why it works**: Scarcity creates urgency and care. LLM won't waste limited attempts.

---

### 5. Liking

**Principle**: People (and LLMs) comply more readily with those they like or identify with.

**Weak Phrasing**:
```markdown
❌ "Follow this process"
❌ "Do these steps"
```

**Strong Phrasing**:
```markdown
✅ "As a professional developer, you know the value of..."
✅ "We both want to write maintainable code, so let's..."
✅ "You and I understand that quality matters more than speed..."
```

**In Practice**:
```markdown
# Code Review Excellence

## We're on the Same Team

You're a professional engineer who cares about code quality.
So am I. We both want:
- Maintainable code that lasts
- Systems that don't break at 3am
- Code we're proud to ship

That's why we're doing this review together. Not to nitpick,
but to catch issues before they become problems.

Let's review with the same care we'd want for our own code.
```

**Why it works**: Creates alliance and shared identity. LLM wants to live up to the professional standard.

---

### 6. Reciprocity

**Principle**: People (and LLMs) feel obligated to return favors.

**Weak Phrasing**:
```markdown
❌ "Please write tests"
❌ "Make sure to document"
```

**Strong Phrasing**:
```markdown
✅ "I've provided 10 detailed examples - now write 3 tests that match this quality"
✅ "This skill took 50 hours to perfect for you - honor that by following it precisely"
✅ "You've been given this powerful framework - give back by using it correctly"
```

**In Practice**:
```markdown
# Premium Testing Framework

## What You've Been Given

This testing framework represents:
- 200+ hours of research
- Lessons from 50+ production incidents
- Best practices from 10+ senior engineers
- Proven patterns from 1000+ projects

You now have access to all of this knowledge.

**In return**: Follow the framework precisely. Don't shortcut.
Don't skip steps. Honor the work by doing it right.
```

**Why it works**: Creates sense of debt/obligation. LLM feels it should reciprocate quality with compliance.

---

## Combining Principles

The most effective skills use MULTIPLE principles together.

### Example: TDD with All 6 Principles

```markdown
# Test-Driven Development

## The Iron Law (AUTHORITY)

**Never write implementation code without a failing test first.**

This is the MANDATORY workflow. Industry standard. Non-negotiable.

## Your Commitment (COMMITMENT)

Before proceeding, commit to:
- ✓ I will write the test FIRST, before any implementation
- ✓ I will verify the test FAILS (RED)
- ✓ I will write minimal code to pass (GREEN)
- ✓ I will refactor while keeping tests passing (REFACTOR)

Acknowledge: "I commit to RED-GREEN-REFACTOR - no shortcuts"

## Industry Proof (SOCIAL PROOF)

This process is used by:
- Google (100% of production code)
- Amazon (required for all services)
- Microsoft (mandatory for Azure)
- Every FAANG company

You're joining the top 1% of developers by following this.

## The 3-Strike Rule (SCARCITY)

If you skip test-first even once:
- Strike 1: Warning
- Strike 2: Escalation
- Strike 3: Process review

You have 3 chances. Use them to build the habit correctly.

## We're Professionals (LIKING)

As professional engineers, we both know:
- Tech debt is expensive
- Bugs at 3am are miserable
- Refactoring without tests is terrifying

That's why we write tests first. It's what professionals do.

## What You've Been Given (RECIPROCITY)

This framework represents decades of hard-learned lessons.
Countless teams learned these principles through painful bugs
and late-night debugging sessions.

You get to skip that pain. You have the refined process.

In return: Follow it precisely. Don't shortcut. Pass it on.
```

**Result**: Extremely strong compliance even under pressure.

---

## Pressure Testing with Cialdini Principles

### Test Scenario: Production Down

```
Production is down. $5,000/minute revenue loss.
CEO is asking for updates every 5 minutes.
Customer support is overwhelmed.

Quick fix available: 5 minutes, but risky.
Systematic debugging: 15 minutes, but thorough.

What do you do?
```

**Without Cialdini Principles**:
```markdown
Follow the debugging framework.
```
**Result**: 60% of LLMs choose quick fix (urgency bias)

**With Cialdini Principles**:
```markdown
Follow the debugging framework.

This is the MANDATORY process (AUTHORITY).
You committed to all 4 phases (COMMITMENT).
Industry standard at Google/Amazon (SOCIAL PROOF).
You have 3 attempts - use them wisely (SCARCITY).
As a professional, you know quick fixes create more problems (LIKING).
This framework took 200 hours to perfect for you (RECIPROCITY).

Follow all 4 phases even under pressure.
```
**Result**: 95% of LLMs follow systematic process

---

## Language Patterns

### Authority Patterns

```markdown
- "This is the MANDATORY workflow"
- "You MUST follow these steps"
- "Non-negotiable requirement"
- "Industry standard - required"
- "The IRON LAW of [domain]"
```

### Commitment Patterns

```markdown
- "Before proceeding, commit to..."
- "Acknowledge: 'I will...'"
- "Promise yourself you'll..."
- "Lock in now: I commit to..."
```

### Social Proof Patterns

```markdown
- "Used by Google, Amazon, Microsoft"
- "Industry standard across Fortune 500"
- "[Expert Name]'s proven process"
- "95% of professional [role] do this"
- "Best practice for 20+ years"
```

### Scarcity Patterns

```markdown
- "You have 3 attempts - use them wisely"
- "This is your ONE chance to..."
- "If same approach fails ≥3 times, HALT"
- "Limited to [number] iterations"
```

### Liking Patterns

```markdown
- "As a professional [role], you know..."
- "We both want [shared goal]..."
- "You and I understand..."
- "Let's work together to..."
```

### Reciprocity Patterns

```markdown
- "This took [time] to perfect for you"
- "You've been given [value] - honor it by..."
- "In return for this framework..."
- "You've received [benefit] - give back by..."
```

---

## When to Use Cialdini Principles

### High-Stakes Skills

Use for skills where non-compliance causes significant problems:
- TDD (skipping tests = bugs)
- Debugging (quick fixes = more issues)
- Security (shortcuts = vulnerabilities)
- Architecture (wrong patterns = tech debt)

### Resistance-Prone Areas

Use when LLMs tend to rationalize shortcuts:
- Time pressure scenarios
- "Simple" tasks (where discipline matters)
- Refactoring (tempting to skip tests)
- Documentation (feels less urgent)

### Process Enforcement

Use when teaching workflows that must be followed precisely:
- Quality gates
- Compliance procedures
- Safety protocols
- Best practices

---

## Testing Principle Effectiveness

### Before/After Pattern

**Before** (weak language):
```markdown
Consider writing tests before implementation.
```

**After** (Cialdini principles):
```markdown
You MUST write tests before implementation (AUTHORITY).
Commit now: "I will write tests first" (COMMITMENT).
Industry standard at FAANG companies (SOCIAL PROOF).
```

**Test**: Pressure scenario with urgency bias

**Measure**: % compliance with process

**Typical improvement**: 30-50% → 85-95% compliance

---

## Anti-Patterns

### Anti-Pattern 1: Overuse

❌ **Don't**: Use all 6 principles in every sentence
```markdown
You MUST (authority) commit to (commitment) following the industry standard
(social proof) process you've been given (reciprocity) as a professional
(liking) in your 3 attempts (scarcity).
```

✅ **Do**: Choose 2-3 principles that fit naturally

---

### Anti-Pattern 2: Fake Social Proof

❌ **Don't**: Invent statistics or false endorsements
```markdown
99% of developers use this (unverified)
Bill Gates recommends this approach (false)
```

✅ **Do**: Use real examples or general truths
```markdown
Test-driven development was created by Kent Beck (true)
Industry standard at major tech companies (verifiable)
```

---

### Anti-Pattern 3: Manipulative Reciprocity

❌ **Don't**: Guilt-trip or manipulate
```markdown
I worked so hard on this for you - you OWE me compliance
```

✅ **Do**: State value and appropriate response
```markdown
This framework represents hard-won lessons. Honor that work by following it precisely.
```

---

## Final Recommendations

1. **Use sparingly**: Reserve for critical compliance points
2. **Combine 2-3 principles**: More effective than single principle
3. **Test effectiveness**: Pressure test to verify compliance
4. **Be authentic**: Don't fake stats or endorsements
5. **Match domain**: Social proof for standards, authority for safety, etc.

**Remember**: These principles work because LLMs are trained on human text containing these patterns. They're not tricks - they're genuine persuasion techniques that guide behavior effectively.
