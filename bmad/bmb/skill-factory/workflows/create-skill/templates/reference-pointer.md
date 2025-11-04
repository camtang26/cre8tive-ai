# KB Reference Pointer Template (Type 2 Skills)

Use this template to create pointers to KB reference files in SKILL.md.

## Critical Requirements

**POINTERS NOT SUMMARIES**
- Each reference: ≤20 words
- Total Reference Materials section: ≤150 tokens
- NO summaries of content
- NO bullet lists describing what's in the file
- Just simple pointers

## Pointer Format

```markdown
For [topic]: See reference/[filename].md
```

## Example Reference Materials Section

```markdown
## Reference Materials

For ScrollTrigger patterns: See reference/scrolltrigger-patterns.md
For performance optimization: See reference/performance.md
For timeline sequencing: See reference/timeline-sequencing.md
For cleanup and memory management: See reference/cleanup-patterns.md
For easing and timing: See reference/easing-timing.md
```

**Token count: ~80 tokens (well under 150 limit)**
**Each pointer: ~10-15 words (under 20 limit)**

## ❌ WRONG - Summaries (Violates Rules)

```markdown
## Reference Materials

### ScrollTrigger Patterns

See reference/scrolltrigger-patterns.md for comprehensive guidance including:
- Pin patterns for sticky sections
- Scrub patterns for scroll-linked animations
- Trigger placement strategies
- Performance optimization for scroll events
- Common mistakes and how to avoid them
- Code examples for various use cases

[THIS IS ~500 TOKENS FOR ONE REFERENCE - WAY OVER LIMIT!]
```

**Why this is wrong:**
- Includes summaries/descriptions
- Uses bullet lists
- Way over token limit
- Defeats progressive disclosure
- This is what caused the 8x bloat in failed version

## ✅ CORRECT - Simple Pointers

```markdown
## Reference Materials

For ScrollTrigger patterns: See reference/scrolltrigger-patterns.md
```

**Why this is correct:**
- Just points to the file
- No summary
- ~12 words (under 20 limit)
- User knows to load file when needed
- Progressive disclosure maintained

## Variations (All Acceptable)

### Minimal Pointer
```markdown
For [topic]: See reference/[file].md
```

### With Section Anchor
```markdown
For [topic]: See reference/[file].md#[section]
```

### With Brief Context (Still ≤20 words)
```markdown
For [topic] in [context]: See reference/[file].md
```

### Multiple Related Pointers
```markdown
For [topic 1]: See reference/[file1].md
For [topic 2]: See reference/[file2].md
For [topic 3]: See reference/[file3].md
```

## Token Counting

**How to count:**
1. Write all reference pointers
2. Count total tokens in entire Reference Materials section
3. Must be ≤150 tokens
4. If over: Remove least important pointer OR condense wording

**Example token counts:**
- "For ScrollTrigger patterns: See reference/scrolltrigger-patterns.md" = ~15 tokens
- 5 similar pointers = ~75 tokens
- 8 pointers = ~120 tokens
- 10 pointers = ~150 tokens (at limit)

## Validation Checklist

Before finalizing Reference Materials section:
- [ ] Each pointer ≤20 words
- [ ] No summaries or descriptions of content
- [ ] No bullet lists
- [ ] Total section ≤150 tokens
- [ ] All referenced files exist
- [ ] Forward slashes in all paths
- [ ] Pointers are clear and specific

## If You Exceed Limits

**If over 150 tokens total:**
1. Remove least important references
2. Shorten pointer wording
3. Combine related references
4. Prioritize most critical references

**If individual pointer over 20 words:**
1. Remove unnecessary words
2. Use simpler phrasing
3. Remove context if not critical
4. Just point to the file

## Remember

**The purpose of progressive disclosure:**
- SKILL.md tells you WHAT references exist
- You load reference/*.md WHEN you need it
- SKILL.md stays lean (<500 lines)
- KB stays accessible but not loaded upfront

**Pointers enable this:**
- Small footprint in SKILL.md
- Clear signpost to detailed content
- User/Claude loads only what's needed
- Perfect progressive disclosure
