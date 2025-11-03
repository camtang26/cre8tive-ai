# Research SKILL Updates for Skill Factory v2

**🚨 OBSOLETE:** This refactoring has been completed (2025-10-21). The reference-material-research SKILL has been completely rewritten with the new researcher persona approach. This document is kept for historical reference only.

---

**CRITICAL:** The research SKILL used by bmm-knowledge-base-researcher must be updated for the new workflow.

## Current Issues

**Location:** `.claude/skills/reference-material-research/SKILL.md`

**Problems with current implementation:**
1. Optimized for comprehensive documentation dumps
2. No token efficiency focus
3. Wrong output priorities (breadth over depth)
4. No skill-creation context
5. Missing distillation guidance

## Required Updates

### Update 1: Change Purpose in Description

**Current description (lines 2-3):**
```yaml
description: Systematic research protocol for building comprehensive knowledge bases...
```

**New description:**
```yaml
description: Focused research protocol for Claude Skill creation, gathering expert-level patterns, gotchas, and advanced techniques with token efficiency (20-30k output per area). Use when conducting targeted research for Type 2 domain expertise skills, or user mentions skill research, KB creation, domain expertise.
```

### Update 2: Add Skill-Creation Context Section

**Add new section after "Overview":**
```markdown
## Research for Skill Creation (CRITICAL CONTEXT)

**You are researching for a Claude Skill Knowledge Base.**

**This changes everything:**

1. **Audience:** Claude (an AI model), not humans
   - Claude already knows basics
   - Focus on expert-level content
   - Patterns, gotchas, advanced techniques

2. **Token Budget:** 20-30k per research area
   - NOT comprehensive (would be 100k+)
   - Focused on what enables expertise
   - Will be distilled to 5-8k by parent

3. **Output Structure:** Categorized findings
   - Patterns (successful approaches)
   - Gotchas (common failures)
   - Anti-patterns (what NOT to do)
   - Advanced techniques (expert-level)
   - Examples (complete, runnable code)

4. **Quality over Quantity:**
   - Actionable insights only
   - No tutorial prose
   - No beginner content
   - Expert knowledge that differentiates quality

**Wrong mindset:**
"Teach Claude everything about [topic] from scratch"

**Correct mindset:**
"Give Claude expert patterns that enable premium implementations"
```

### Update 3: Update Research Approach Section

**Current:** Broad comprehensive research

**New:**
```markdown
## Research Approach for Skills

### 1. Source Priority

**High priority (focus here):**
1. Official documentation - best practices
2. Expert practitioners - real-world experience
3. Premium examples - quality implementations
4. Performance guides - optimization techniques

**Low priority (mostly skip):**
- Beginner tutorials
- "Getting started" guides
- Basic API docs (link to them, don't document)
- Obvious information

### 2. Content Focus

**✅ KEEP:**
- Patterns for complex scenarios
- Gotchas causing real failures
- Anti-patterns with consequences
- Advanced techniques
- Performance optimizations
- Quality criteria (what "good" looks like)
- Complete code examples

**❌ SKIP:**
- Installation instructions
- Basic concepts
- Simple examples
- Tutorial progression ("Now let's...")
- Redundant information
- Comprehensive parameter lists

### 3. Token Budget Management

**Target:** 20-30k tokens per research area

**If approaching 30k:**
- Stop adding breadth
- Focus on depth in key areas
- Remove any basics that slipped in
- Consolidate redundant info

**If under 15k:**
- Add more patterns
- Include more examples
- Add advanced techniques
- Research premium implementations
```

### Update 4: Add Output Structure Template

**Add new section:**
```markdown
## Required Output Structure

**Organize ALL research into these categories:**

### Patterns
```markdown
## Patterns

### [Pattern Name]
**Use case:** [When to use this pattern]
**Structure:**
```[language]
[Complete code example]
```
**When to use:** [Specific scenarios]
**Performance:** [Impact/considerations]
**Gotchas:** [Common mistakes with this pattern]
```

### Gotchas
```markdown
## Gotchas

### [Gotcha Name]
**Problem:** [What goes wrong]
**Symptom:** [How it manifests]
**Root cause:** [Why it happens]
**Solution:**
```[language]
[Code showing correct approach]
```
**Prevention:** [How to avoid]
```

### Anti-Patterns
```markdown
## Anti-Patterns

### [Anti-Pattern Name]
❌ **WRONG:**
```[language]
[Code showing incorrect approach]
```
**Why this fails:** [Specific failure mode]
**Result:** [Consequences]

✅ **CORRECT:**
```[language]
[Code showing right approach]
```
**Why this works:** [Explanation]
```

### Advanced Techniques
```markdown
## Advanced Techniques

### [Technique Name]
**Use case:** [Advanced scenario]
```[language]
[Complete example]
```
**When to use:** [Specific situations]
**Complexity:** [Trade-offs]
**Prerequisites:** [What you need to know]
```

### Quality Criteria
```markdown
## Quality Criteria

**Premium [domain] implementations FEEL:**
- **[Quality Attribute 1]:** [Description] (not [negative])
- **[Quality Attribute 2]:** [Description] (not [negative])

**Red flags:**
- [Warning sign 1]
- [Warning sign 2]
```

**This structure is MANDATORY for skill creation research.**
```

### Update 5: Add Distillation Awareness

**Add section:**
```markdown
## Distillation Awareness

**Parent agent will distill your output:**
- Your 20-30k → 5-8k distilled KB
- Compression: ~70-85%

**This means:**
- Include rich content worth distilling
- Don't pre-dilute (parent handles that)
- But also don't include fluff (basics, redundancy)
- Focus on high-value expert content

**Think:**
- Your research is ingredient prep (complete, organized)
- Parent's distillation is final cooking (extracting essence)
- Together: Expert-level KB file
```

### Update 6: Update Adaptive Multi-Source Strategy

**Current:** Generic multi-source

**New:**
```markdown
## Adaptive Multi-Source Strategy for Skills

### Source Selection by Content Type

**For Patterns:**
- Official docs (authoritative)
- Expert articles (battle-tested)
- Premium examples (quality indicators)

**For Gotchas:**
- Stack Overflow (real failures)
- GitHub issues (common problems)
- Expert blog posts (war stories)

**For Anti-Patterns:**
- "Common mistakes" articles
- Performance case studies
- Code review feedback patterns

**For Advanced Techniques:**
- Advanced tutorials (not beginner)
- Conference talks
- Library internals docs

**For Quality Criteria:**
- Design case studies
- Premium example analysis
- Performance research

**For Examples:**
- Official examples (authoritative)
- Premium implementations (Awwwards, CodePen)
- Production code (if accessible)

### Research Execution

1. **Archon MCP KB:** Check curated knowledge first
2. **Context7:** Official documentation
3. **Web Search:** Expert articles, premium examples
4. **GitHub (clone if needed):** Real implementations

**Stop when:**
- Reach 25-30k tokens
- Covered key patterns, gotchas, anti-patterns
- Have quality examples
- Have advanced techniques
```

### Update 7: Add Token Efficiency Section

**Add new section:**
```markdown
## Token Efficiency for Skills

**Every token must earn its place:**

### Writing Efficiently

**❌ Verbose:**
```markdown
Now that we understand the basics of ScrollTrigger, let's explore some more advanced patterns that you might find useful when building complex scroll-driven animations. First, we need to understand...
```

**✅ Concise:**
```markdown
## Advanced ScrollTrigger Patterns

### Pattern 1: Pinned Section with Progress
```

**Cut:**
- "Now let's..."
- "First, we need to..."
- "You might find..."
- "It's important to note..."
- Any sentence that doesn't add information

### Consolidating Redundancy

If multiple sources say the same thing:
```markdown
Source 1: "Use will-change: transform for performance"
Source 2: "Add will-change: transform to animated elements"
Source 3: "For best performance, use will-change: transform"
```

**Consolidate to ONE mention:**
```markdown
**Performance:** Use `will-change: transform` on animated elements
```

### Linking vs Documenting

**Don't document comprehensive APIs:**
```markdown
❌ [20 lines documenting every parameter]

✅ See [GSAP docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger) for complete API.
```

**Document only:**
- Critical parameters
- Non-obvious usage
- Common patterns
```

### Update 8: Update Examples Section

**Current:** Generic example guidance

**New:**
```markdown
## Examples for Skills

**Quality over quantity:** One excellent example > five mediocre ones

### What Makes Examples Excellent for Skills

**✅ Good examples:**
- **Complete:** Copy-paste runnable
- **Commented:** Explain WHY, not what
- **Realistic:** From actual use cases
- **Clear:** Show pattern obviously
- **Adaptable:** Easy to modify for different needs

**❌ Bad examples:**
- Snippets out of context
- No comments
- Contrived/toy scenarios
- Unclear pattern
- Too specific to adapt

### Example Structure

```[language]
// Context: [What this solves]

// [Comment explaining KEY decision]
[Code showing pattern]

// [Comment explaining GOTCHA]
[Code preventing issue]

// [Comment explaining WHY this works]
[Code showing result]
```

### How Many Examples

- **Minimum:** 3 per major pattern
  - Common use case
  - Advanced variation
  - Anti-pattern (what NOT to do)

- **Maximum:** Don't exceed token budget
  - If choosing: Depth > Breadth
  - Better: 3 excellent examples
  - Worse: 10 basic snippets
```

## Implementation Checklist

To update reference-material-research SKILL:

- [ ] Backup current SKILL.md
- [ ] Update description with skill-creation focus
- [ ] Add "Research for Skill Creation" context section
- [ ] Update research approach section
- [ ] Add required output structure template
- [ ] Add distillation awareness section
- [ ] Update adaptive multi-source strategy
- [ ] Add token efficiency section
- [ ] Update examples section
- [ ] Test with sample research task
- [ ] Validate output matches new structure
- [ ] Validate token count 20-30k
- [ ] Use in create-skill workflow

## Testing the Updated SKILL

**Test task:**
"Research GSAP ScrollTrigger patterns for skill creation"

**Expected research output:**
- 20-30k tokens total
- Structured: Patterns, Gotchas, Anti-patterns, Advanced, Quality, Examples
- Expert-level (no basics like "import gsap")
- Complete code examples
- No tutorial prose
- Consolidates redundancy
- Links to comprehensive docs instead of documenting them
- Actionable and specific

**Validation:**
- Use bmm-knowledge-base-researcher with this skill
- Check output token count
- Verify structure matches template
- Confirm ready for distillation
- Test distillation (should compress to ~5-8k)

## Files to Modify

**Path:** `.claude/skills/reference-material-research/SKILL.md`

**Backup first:**
```bash
cp .claude/skills/reference-material-research/SKILL.md \
   .claude/skills/reference-material-research/SKILL.md.backup-pre-skill-factory-v2
```

Then apply all updates above.

**Related files that may need updates:**
- Check if KB docs exist in reference/
- Update any examples if present
- Validate with bmm-knowledge-base-researcher agent after changes

## Summary of Changes

**Before:** Comprehensive research for general knowledge bases
**After:** Focused research for skill creation (expert-level, token-efficient, structured)

**Key shifts:**
1. Token budget: No limit → 20-30k per area
2. Audience: Humans → Claude (AI model)
3. Content: Breadth → Depth (expert patterns)
4. Structure: Flexible → Mandatory categories
5. Style: Tutorial → Actionable patterns
6. Scope: Comprehensive → Essential expertise

**Result:** Research output optimized for skill KB creation with proper distillation flow.
