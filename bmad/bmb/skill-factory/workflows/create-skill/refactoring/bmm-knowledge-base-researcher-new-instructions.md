# bmm-knowledge-base-researcher Agent - New Instructions

**🚨 OBSOLETE:** This refactoring has been completed (2025-10-21). The knowledge-base-researcher agent has been completely rewritten with the new researcher persona approach. This document is kept for historical reference only.

---

**CRITICAL:** This agent must be refactored before Step 4 of the create-skill workflow will work correctly.

## Current Issues

**Location:** `bmad/bmm/agents/bmm-knowledge-base-researcher.md`

**Problems with current implementation:**
1. Configured for comprehensive research → 450k token output
2. No distillation guidance during research
3. Multi-part strategy designed for old system
4. Wrong output structure for skill creation
5. No token efficiency focus

## Required Changes

### Change 1: Update Purpose Statement

**Current:**
```markdown
## Purpose
Research comprehensive knowledge for specified topic areas.
```

**New:**
```markdown
## Purpose
Research specific topic area for Claude Skill creation, providing structured findings optimized for parent agent distillation. Focus on expert-level patterns, gotchas, and advanced techniques - NOT comprehensive documentation.
```

### Change 2: Set Token Targets

**Add new section:**
```markdown
## Output Requirements

**Token Budget:**
- Target: 20-30k tokens per research area
- NOT comprehensive (would be 100k+)
- Focused on skill creation needs only

**Quality over Quantity:**
- Expert-level insights only
- Claude already knows basics - provide advanced guidance
- Actionable patterns, not theoretical frameworks
```

### Change 3: Restructure Output Format

**Current:** Unstructured comprehensive dump

**New:**
```markdown
## Output Structure

Organize research into these categories:

### Patterns
Successful approaches for complex scenarios:
- [Pattern 1 with code example]
- [Pattern 2 with code example]
- Focus: What enables expert-level implementations

### Gotchas
Common mistakes that cause real issues:
- [Gotcha 1: Problem, why it happens, solution]
- [Gotcha 2: Problem, why it happens, solution]
- Focus: What prevents failures

### Anti-Patterns
What NOT to do, with specific consequences:
- [Anti-pattern 1: Wrong approach, why it fails, correct approach]
- [Anti-pattern 2: Wrong approach, why it fails, correct approach]
- Focus: What makes implementations fail or feel cheap

### Advanced Techniques
Beyond basics, enables premium quality:
- [Technique 1 with example]
- [Technique 2 with example]
- Focus: Expert-level usage

### Examples
Complete, runnable code:
- [Example 1: Complete implementation]
- [Example 2: Advanced use case]
- Focus: Show patterns in context, not snippets
```

### Change 4: Add Distillation Guidance

**Add new section:**
```markdown
## Distillation During Research

As you research, continuously distill:

**✅ KEEP:**
- Patterns for complex scenarios
- Gotchas causing real failures
- Anti-patterns with consequences
- Advanced techniques
- Quality criteria (what "good" looks like)
- Complete code examples

**❌ REMOVE:**
- Basics (Claude already knows)
- Redundant information (mentioned multiple times)
- Tutorial prose ("Now let's...", "First you...")
- Comprehensive API docs (basics only, link to full docs)
- Obvious information
- Beginner explanations

**Target compression:** Input 100k → Output 25k
```

### Change 5: Update Research Sources Priority

**Current:** Unfocused

**New:**
```markdown
## Research Sources (Priority Order)

1. **Official Documentation** (API, best practices)
   - What creators recommend
   - Authoritative patterns

2. **Expert Practitioners** (articles, videos, forums)
   - Real-world experience
   - Battle-tested patterns
   - Common mistakes

3. **Premium Examples** (Awwwards, top implementations)
   - Reverse-engineer quality
   - What makes implementations "premium"

4. **Performance Guides** (web.dev, established patterns)
   - Optimization techniques
   - Measurable improvements

**Avoid:**
- Beginner tutorials
- Basic "getting started" guides
- Content aimed at teaching fundamentals
```

### Change 6: Update Multi-Part Strategy

**Current:** Splits arbitrarily

**New:**
```markdown
## Multi-Part Output Strategy

If research output exceeds 25k tokens:

**Split by logical category:**
- Part 1: Patterns & Core Concepts (10k tokens)
- Part 2: Advanced Techniques & Examples (10k tokens)
- Part 3: Gotchas & Anti-Patterns (10k tokens)

**NOT by:**
- Arbitrary page breaks
- Chronological order
- Alphabet

**Each part should be self-contained within its category.**
```

### Change 7: Add Skill-Creation Context

**Add new section:**
```markdown
## Context: Skill Creation

Your research will be distilled by parent agent into Knowledge Base for a Claude Skill.

**This means:**
- Your output feeds into 5-8k token KB files
- Parent agent will distill your 20-30k to 5-8k
- Focus on what enables Claude to implement expertly
- Not what teaches Claude from scratch

**Think:**
- "What does an expert know that enables premium work?"
- NOT "What does a beginner need to learn to start?"

**Your research should enable:**
- Complex implementations
- Expert-level quality
- Avoiding common failures
- Performance optimization
- Best practices
```

### Change 8: Provide Example Output

**Add example section:**
```markdown
## Example Output Format

```markdown
# GSAP ScrollTrigger Research

## Patterns

### Pin Pattern: Sticky Section with Progress
**Use case:** Section stays pinned while content reveals

```javascript
ScrollTrigger.create({
  trigger: ".section",
  pin: true,
  start: "top top",
  end: "+=500",
  onUpdate: (self) => updateProgress(self.progress)
});
```

**When to use:** Multi-step reveals, story-telling sections
**Performance:** Minimal impact, uses CSS position: fixed

### Scrub Pattern: Scroll-Linked Animation
**Use case:** Animation directly tied to scroll position

```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    scrub: 0.5, // 0.5s catch-up = smooth
    start: "top bottom",
    end: "bottom top"
  },
  y: -200
});
```

**Best scrub values:**
- 0 = instant (can feel jerky)
- 0.5 = smooth catch-up (recommended)
- 1-2 = lazy, intentional lag

## Gotchas

### Missing .kill() Causes Memory Leaks

**Problem:** ScrollTrigger instances persist after component unmounts
**Symptom:** Scroll behavior breaks, memory grows, conflicts with new instances
**Root cause:** ScrollTrigger registers global scroll listeners

**Solution:**
```javascript
useEffect(() => {
  const st = ScrollTrigger.create({...});
  return () => st.kill(); // CRITICAL
}, []);
```

**Prevention:** Always store ref and kill in cleanup

### Animating Width/Height Tanks Performance

**Problem:** Animating width or height causes layout reflow on every frame
**Symptom:** Drops to 30fps, especially on mobile
**Measurement:** Chrome DevTools shows purple layout blocks

**Wrong:**
```javascript
gsap.to(el, { width: "100%" }); // Layout reflow every frame!
```

**Correct:**
```javascript
gsap.to(el, { scaleX: 1 }); // GPU-accelerated transform
```

**Rule:** Only animate transforms and opacity for 60fps

## Anti-Patterns

### Anti-Pattern: Linear Easing Everywhere

❌ **WRONG:**
```javascript
gsap.to(el, { y: 100, ease: "none" }); // Robot motion
```

**Why this fails:** Linear feels mechanical, unnatural
**Result:** Animations feel cheap, amateur

✅ **CORRECT:**
```javascript
gsap.to(el, { y: 100, ease: "power2.out" }); // Natural deceleration
```

**Easing guidelines:**
- Fast motion: Power2/Power3
- Floating/hovering: Sine
- Bouncy (sparingly): Elastic
- NEVER linear for user-facing animations

## Advanced Techniques

### Custom Easing with CustomEase

**Use case:** Design requires specific timing curve

```javascript
const customBounce = CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1"
);

gsap.to(element, {
  y: 100,
  ease: customBounce,
  duration: 1.2
});
```

**Tools:**
- [GreenSock Ease Visualizer](https://gsap.com/docs/v3/Eases)
- Design in UI, export SVG path
- Precise control over timing

**When to use:** Standard eases don't match design intent

## Quality Criteria

**Premium ScrollTrigger animations FEEL:**

**Smooth:**
- 60fps sustained (measure with DevTools)
- No visible jank or stuttering
- Proper easing (not linear)

**Intentional:**
- Precise timing (not random durations)
- Purposeful scroll distances
- Coordinated (not everything moves identically)

**Polished:**
- Respects prefers-reduced-motion
- Cleanup on unmount
- Handles edge cases (rapid scroll, resize)

**Red flags indicating poor quality:**
- Drops below 60fps
- Linear easing
- Missing cleanup
- Conflicts on navigation

[Continue with more sections...]
```
```

**This format:**
- ✅ Structured by category
- ✅ Includes code examples
- ✅ Explains WHY and WHEN
- ✅ Actionable and specific
- ✅ ~20-30k tokens for full research area
- ✅ Ready for distillation to 5-8k
```

## Implementation Checklist

To refactor bmm-knowledge-base-researcher agent:

- [ ] Update purpose statement
- [ ] Add token budget targets (20-30k)
- [ ] Restructure output format (Patterns, Gotchas, Anti-patterns, etc.)
- [ ] Add distillation guidance
- [ ] Update research source priorities
- [ ] Fix multi-part strategy
- [ ] Add skill-creation context
- [ ] Provide example output format
- [ ] Test with sample research task
- [ ] Validate output is 20-30k tokens
- [ ] Validate output is properly structured
- [ ] Validate output is distillable to 5-8k

## Testing the Refactored Agent

**Test research task:**
"Research GSAP ScrollTrigger patterns for Claude Skill creation"

**Expected output:**
- 20-30k tokens
- Structured: Patterns, Gotchas, Anti-patterns, Advanced, Examples
- Expert-level content (no basics)
- Complete code examples
- Actionable and specific
- Ready for distillation

**If output is:**
- >40k tokens → Too comprehensive, needs more distillation
- <15k tokens → Too shallow, needs more depth
- Unstructured → Fix output format
- Has basics → Strengthen "Claude is smart" guidance
- Tutorial prose → Add distillation examples

## File to Modify

**Path:** `bmad/bmm/agents/bmm-knowledge-base-researcher.md`

**Backup first:**
```bash
cp bmad/bmm/agents/bmm-knowledge-base-researcher.md \
   bmad/bmm/agents/bmm-knowledge-base-researcher.md.backup-pre-skill-factory-v2
```

Then apply all changes above.

**After refactoring:**
- Test with sample task
- Validate output structure
- Confirm token counts
- Use in create-skill workflow Step 4
