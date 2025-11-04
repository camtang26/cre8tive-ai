# Description Optimization Guide (CSO - Claude Search Optimization)

Complete guide to writing effective skill descriptions that Claude can discover and trigger appropriately.

## Why Description is Critical

**ALL sources agree: Description is THE MOST IMPORTANT field**

- Anthropic: "name and description determine when Claude will use the skill"
- Superpowers: Entire "CSO (Claude Search Optimization)" section dedicated to it
- Official docs: "Description is critical for discoverability"

**The description field determines:**
1. Will Claude find this skill when it's needed?
2. Will Claude load it for relevant tasks?
3. Will Claude ignore it for irrelevant tasks?

## The Proven Formula

```
[ACTION VERB] [WHAT] [SPECIFICS]. Use when [TRIGGERS] or user mentions [KEYWORDS].
```

**Components:**
- **ACTION VERB:** What the skill does (enforce, create, analyze, optimize, implement)
- **WHAT:** What it operates on (tests, animations, workflows, code)
- **SPECIFICS:** Key details (TDD cycle, scroll-triggered, security patterns)
- **TRIGGERS:** When to use (specific scenarios, situations)
- **KEYWORDS:** Domain terms user might mention

## Official Requirements

- **Max length:** 1024 characters (strict limit)
- **Tone:** Third person ("This skill should be used when..." not "Use this when...")
- **Content:** Both WHAT the skill does AND WHEN to use it
- **Keywords:** Front-loaded for discoverability

## Structure Patterns

### Pattern 1: Action-Focused (Type 1)

```
[ENFORCE/MAINTAIN/ENSURE] [PROCESS] with [KEY ASPECTS]. Use when [SCENARIOS] or user mentions [KEYWORDS].
```

**Example:**
```
Enforce RED-GREEN-REFACTOR test-driven development cycle with failing tests first, minimal implementation second, refactoring third. Use when implementing features, fixing bugs, or refactoring code, or user mentions TDD, testing, test-first, red-green-refactor.
```

### Pattern 2: Domain-Focused (Type 2)

```
[CREATE/BUILD/IMPLEMENT] [DOMAIN ARTIFACTS] using [TECHNOLOGY] with [QUALITY INDICATORS]. Use when [COMPLEX SCENARIOS] or when [SIMPLER ALTERNATIVES] are insufficient.
```

**Example:**
```
Create premium scroll-triggered animations, parallax effects, and complex choreographed sequences using GSAP and ScrollTrigger with 60fps performance. Use when implementing advanced animations, scroll-based interactions, or when CSS/Framer Motion are insufficient for complex motion design.
```

### Pattern 3: Tool Mastery (Type 2)

```
[MASTER/OPTIMIZE/IMPLEMENT] [TOOL/FRAMEWORK] for [USE CASES] with [ADVANCED FEATURES]. Use when [SCENARIOS] or user mentions [TOOL], [FEATURE TERMS].
```

**Example:**
```
Implement complex state machines using XState v5 with type-safe setup(), actors for async operations, and proper TypeScript integration. Use when managing complex application state, multi-step workflows, or user mentions XState, state machines, finite state.
```

## CSO Principles

### 1. Front-Load Keywords

**❌ BAD:**
```
This skill helps with implementing animations when you need to use GSAP.
```
Keywords buried, vague.

**✅ GOOD:**
```
Create GSAP ScrollTrigger animations, parallax effects, and timeline sequences...
```
Keywords immediately visible.

### 2. Be Specific About Scope

**❌ BAD:**
```
Helps with testing code.
```
Too broad, will trigger for everything.

**✅ GOOD:**
```
Enforce RED-GREEN-REFACTOR test-driven development cycle with failing tests first.
```
Specific methodology, clear scope.

### 3. Include Both WHAT and WHEN

**❌ BAD:**
```
TDD enforcement skill.
```
Missing WHEN information.

**✅ GOOD:**
```
Enforce RED-GREEN-REFACTOR TDD. Use when implementing features, fixing bugs, or refactoring code.
```
Includes specific triggers.

### 4. Use Domain Vocabulary

**❌ BAD:**
```
Make animations with JavaScript library.
```
Generic, no searchable terms.

**✅ GOOD:**
```
Create GSAP ScrollTrigger animations, parallax, timeline sequences, stagger effects.
```
Specific domain terms user would mention.

### 5. Trigger Scenarios

Include specific situations that should trigger the skill:

**For Type 1:**
- "when implementing features"
- "when fixing bugs"
- "before deploying"
- "during code review"

**For Type 2:**
- "when CSS is insufficient"
- "when implementing complex [X]"
- "when building [specific use case]"
- "when [simpler tool] doesn't work"

### 6. Keyword Coverage

**Include synonyms and variations:**
- TDD = test-driven development, test-first, red-green-refactor
- Animations = motion, transitions, effects
- State management = state machines, FSM, workflow

## Token Length Targets

**Ideal range:** 50-80 tokens (~200-400 characters)

**Acceptable range:** 30-150 tokens (~120-750 characters)

**Maximum:** 256 tokens (1024 characters - hard limit)

**Count your tokens:**
- Short descriptions (30-50 tokens): Risk being too vague
- Optimal (50-80 tokens): Good balance of detail and brevity
- Long (80-150 tokens): Acceptable if needed for clarity
- Too long (>150 tokens): Consider condensing

## Common Mistakes

### ❌ Mistake 1: Too Vague

```
Helps with documents.
```

**Problems:**
- What kind of documents?
- What kind of help?
- When to use?
- No keywords

### ❌ Mistake 2: First Person

```
I can help you create animations using GSAP when you need them.
```

**Problems:**
- Not third person
- "I can help" is filler
- "when you need them" is obvious

### ❌ Mistake 3: No Triggers

```
Create GSAP animations with ScrollTrigger, timelines, and stagger effects.
```

**Problems:**
- Missing WHEN information
- No trigger scenarios
- Won't know when to load

### ❌ Mistake 4: Over-Technical Without Context

```
Implements Observer pattern with Proxy-based reactivity using WeakMap memoization.
```

**Problems:**
- User wouldn't say these terms
- Missing use cases
- No when-to-use

## Good Examples by Type

### Type 1 Examples

**TDD:**
```
Enforce RED-GREEN-REFACTOR test-driven development cycle with failing tests first, minimal implementation second, refactoring third. Use when implementing features, fixing bugs, or refactoring code, or user mentions TDD, testing, test-first.
```

**Verification:**
```
Require explicit verification before claiming work complete, with evidence from running commands, viewing output, and confirming expected behavior. Use when completing tasks, claiming fixes, or before committing code, or user mentions verification, validation, testing.
```

**Git Workflow:**
```
Enforce clean git workflow with atomic commits, descriptive messages, and proper branching. Use when committing code, creating branches, or merging changes, or user mentions git, commits, branches, merge.
```

### Type 2 Examples

**GSAP:**
```
Create premium scroll-triggered animations, parallax effects, and complex choreographed sequences using GSAP and ScrollTrigger with 60fps performance. Use when implementing advanced animations, scroll-based interactions, or when CSS/Framer Motion are insufficient for complex motion design.
```

**XState:**
```
Implement complex state machines using XState v5 with type-safe setup(), actors for async operations, and proper TypeScript integration. Use when managing complex application state, multi-step workflows, or user mentions XState, state machines, finite state.
```

**Next.js Advanced:**
```
Implement advanced Next.js patterns including ISR, edge functions, middleware, and server components with optimal performance. Use when building complex Next.js applications, scaling requirements, or when basic Next.js patterns insufficient for requirements.
```

## Validation Checklist

Before finalizing description:

- [ ] Includes action verb
- [ ] Specifies what skill does
- [ ] Includes specific details
- [ ] States when to use
- [ ] Lists trigger keywords
- [ ] Uses third person
- [ ] Front-loads important keywords
- [ ] ≤1024 characters
- [ ] 50-80 tokens (optimal)
- [ ] No filler words ("helps with", "can assist")
- [ ] Specific enough to avoid false triggers
- [ ] Broad enough to cover use cases

## Testing Your Description

**Method 1: Keyword Test**
Ask: "If user said [keyword], should this skill load?"
- Test each keyword in description
- Ensure only triggers for relevant keywords

**Method 2: Scenario Test**
Ask: "If user described [scenario], should this skill load?"
- Test each trigger scenario
- Ensure triggers appropriately

**Method 3: False Positive Test**
Ask: "Would this description trigger for irrelevant tasks?"
- Test with unrelated scenarios
- Ensure doesn't over-trigger

## Iteration

**After initial creation:**
1. Use skill in real scenarios
2. Note when it should trigger but doesn't (false negative)
3. Note when it triggers inappropriately (false positive)
4. Refine description based on observations
5. Add missing keywords
6. Clarify scope if over-triggering

**Description is not set in stone - iterate based on usage!**

## Summary

**The Perfect Description:**
- Front-loads domain keywords
- Specifies exactly what it does
- Lists specific trigger scenarios
- Uses third person
- 50-80 tokens (sweet spot)
- Enables Claude to find it when needed
- Prevents false triggers when not needed

**Remember:** This is the MOST IMPORTANT field. Spend time getting it right!
