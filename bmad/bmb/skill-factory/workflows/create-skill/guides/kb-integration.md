# KB Integration Guide (Anthropic-Aligned)

## The Anthropic Pattern: Natural Descriptive References

**Use natural sentences** that describe what's in each reference file. This helps Claude make informed decisions about when to load which files.

---

## ✅ GOOD (Anthropic Pattern)

**Natural, descriptive references:**

```markdown
## Reference Materials

For detailed animation patterns including choreography, easing frameworks, timing principles, and ScrollTrigger techniques, see reference/animation-choreography.md

For GSAP + React integration patterns including hooks, lifecycle management, memory leak prevention, SSR strategies, and defensive implementation techniques, see reference/gsap-react-integration.md

For comprehensive visual design patterns including shadow systems, glassmorphism, light simulation, and material quality techniques, see reference/visual-design-fundamentals.md

For typography systems including fluid scales, systematic spacing principles, text contrast mastery, and premium font execution, see reference/typography-spacing.md
```

**Why this works**:
- Claude knows what's covered in each file
- Claude can decide when to load based on current task
- Natural language, descriptive, clear
- Enables progressive disclosure properly

---

## ❌ WRONG (Overly Constrained Pointers)

**Minimal telegraphic pointers:**

```markdown
## Reference Materials

For animation patterns: See reference/animation-choreography.md (7 words)
For React integration: See reference/gsap-react-integration.md (6 words)
For visual design: See reference/visual-design-fundamentals.md (6 words)
```

**Why this fails**:
- Doesn't describe file contents
- Claude doesn't know when files are relevant
- Artificially constrained (made-up word limits)
- Defeats progressive disclosure purpose

---

## How to Write Natural References

**Format**: For [comprehensive description of what's covered], see reference/[filename].md

**Description should**:
- Explain what topics, techniques, or patterns are covered
- Use natural language (complete sentences OK)
- Help Claude decide when this file is relevant to current task
- Be as descriptive as needed to be clear

**Examples from Anthropic Skills**:

**PDF Skill**:
> "For advanced features, JavaScript libraries, and detailed examples, see reference.md"

**MCP Builder**:
> "For Python-specific best practices and examples, see reference/python_mcp_server.md"

---

## Real Constraints (From Anthropic)

**Only these constraints matter:**

1. **SKILL.md total <500 lines** (including Reference Materials section)
2. **Forward slashes** in all file paths
3. **Files must exist** (all references point to real files)

**That's it.**

**NO constraints on**:
- ❌ Words per reference
- ❌ Tokens for Reference section
- ❌ "Pointers only no summaries"
- ❌ One sentence limit

---

## Progressive Disclosure Purpose

**The Reference Materials section helps Claude**:
- Understand what detailed documentation exists
- Decide which files to load based on current task
- Navigate to appropriate reference when needed
- Avoid loading all references unnecessarily

**Natural descriptive references serve this purpose.** Minimal pointers don't.

---

## Content Allocation Principle

**From Anthropic guidance**:
> "Information should live in either SKILL.md or references files, not both. Prefer references files for detailed information **unless it's truly core to the skill**."

**SKILL.md contains** (core workflows):
- Quick Start with code
- Common operations with examples
- Workflow steps
- Quality criteria
- Anti-patterns
- Natural references to detailed docs

**reference/ files contain** (comprehensive details):
- Detailed pattern coverage
- Advanced techniques
- Comprehensive examples
- Performance deep dives
- Edge cases and gotchas

**Reference section**: Bridges these - guides Claude from SKILL.md to appropriate reference files.

---

## Example Reference Sections by Domain

### Tech Implementation Skill

```markdown
## Reference Materials

For comprehensive API patterns including authentication, rate limiting, error handling, and pagination strategies, see reference/api-patterns.md

For performance optimization techniques including caching, lazy loading, database query optimization, and render performance, see reference/performance.md

For deployment and infrastructure patterns including CI/CD, monitoring, logging, and scaling strategies, see reference/deployment.md
```

### Design/Creative Skill

```markdown
## Reference Materials

For animation choreography mastery including easing selection frameworks, timing principles, multi-phase sequences, and ScrollTrigger patterns, see reference/animation-choreography.md

For visual design fundamentals including shadow systems, glassmorphism techniques, light simulation, and material quality, see reference/visual-design.md

For typography and spacing systems including fluid scales, systematic spacing, text contrast principles, and generous layout strategies, see reference/typography-spacing.md
```

### Workflow/Process Skill

```markdown
## Reference Materials

For detailed test-driven development patterns including RED-GREEN-REFACTOR cycle, test design principles, and mocking strategies, see reference/tdd-patterns.md

For code review best practices including review checklist, common issues to watch for, and feedback frameworks, see reference/code-review.md
```

---

## Validation Checklist

When integrating references:

- [ ] Each reference describes what's covered (not just filename)
- [ ] Natural language used (not telegraphic)
- [ ] Claude can decide when to load based on descriptions
- [ ] SKILL.md total still <500 lines
- [ ] All referenced files exist
- [ ] Forward slashes in all paths
- [ ] No Windows-style backslashes

**Pass all checks?** References integrated correctly.

---

## Summary

**OLD thinking** (WRONG): Minimal pointers, ≤20 words, ≤150 tokens, "no summaries just point"

**Anthropic pattern** (CORRECT): Natural descriptive sentences helping Claude navigate to appropriate references

**The shift**: From "minimize tokens in references" to "maximize Claude's ability to navigate references intelligently"
