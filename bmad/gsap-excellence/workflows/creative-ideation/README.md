# Creative Ideation Workflow ⭐ SIGNATURE WORKFLOW

## Overview

**"I don't know what animation I want"** → **"I'm choosing between multiple excellent options backed by research"**

The Creative Ideation workflow is the **signature workflow** of the GSAP Excellence Engine. It generates 3-5 premium animation concepts backed by multi-source research (Archon MCP + Context7 + Perplexity), solving AI's natural tendency to produce safe, generic animation suggestions.

## Key Features

- **Multi-Source Research** - 3 MCP servers (Archon, Context7, Perplexity)
- **Premium Concept Generation** - Ambitious, wow-factor animations
- **Research Citations** - Every concept backed by real examples
- **Complexity Mix** - Medium, medium-high, and high complexity options
- **Technical Feasibility** - Each concept includes implementation approach
- **GSAP 3.13+ Focus** - Leverages free premium plugins

## When to Use This Workflow

### ✅ Use When:
- Starting new animation from scratch
- "I want something cool but don't know what"
- Need creative direction backed by research
- Want multiple options to choose from
- Exploring what's possible with GSAP

### ❌ Don't Use When:
- You already know exactly what you want (use implement-from-pattern)
- Implementing from existing design (VFX Artist direct)
- Simple tweens (overkill)

## Usage

```bash
# Load Director agent
/bmad:gsap-excellence:agents:gsap-director

# Run creative ideation
*plan
```

### What You'll Be Asked

1. **Component context** - What needs animation? (hero section, product showcase, etc.)
2. **Brand personality** - Modern, playful, sophisticated, bold (optional)
3. **User goals** - Engagement, storytelling, wow factor (optional)
4. **Constraints** - Performance, timeline, accessibility (optional)
5. **Anti-patterns** - What to avoid (optional)

### Expected Output

**Concept Document** saved to: `/output/animation-concepts-{{component}}-{{date}}.md`

**Contains:**
- 3-5 premium concepts
- Research citations from 89+ sources
- Technical approaches
- Wow factor explanations
- Complexity ratings
- Implementation roadmaps

## Workflow Structure

**Phases** (10-15 minutes total):
1. **Context Gathering** (2-3 min) - Director understands your needs
2. **Multi-Source Research** (5-7 min) - Cinematographer queries 3 MCPs in parallel
3. **Concept Synthesis** (2-3 min) - Director generates 3-5 concepts
4. **Presentation** (1-2 min) - Present concepts with research backing

**Agents:**
- **Director** (lead) - Vision and orchestration
- **Cinematographer** (research) - Multi-source research specialist

## Example Concepts Generated

### Concept 1: ScrollSmoother Parallax Hero (Medium)
**Wow Factor:** Buttery-smooth scrolling with multi-layer depth
**Technical:** ScrollSmoother + parallax speed layers
**Research:** Codrops showcase 2025, Linear.app breakdown
**Complexity:** Medium (ScrollSmoother FREE in 3.13!)

### Concept 2: SplitText Character Cascade (Medium-High)
**Wow Factor:** Characters reveal word-by-word on scroll with elastic bounce
**Technical:** SplitText + ScrollTrigger + custom easing
**Research:** Awwwards text animation trends, GSAP SplitText docs
**Complexity:** Medium-High

### Concept 3: MorphSVG Icon State Transitions (High)
**Wow Factor:** Menu icons morph smoothly between states
**Technical:** MorphSVG + timeline choreography
**Research:** Stripe icon animations, MorphSVG official examples
**Complexity:** High (MorphSVG FREE in 3.13!)

## Multi-Source Research Protocol

### Tier 1: Archon MCP (Primary)
- **89 curated sources** (2.2M+ words)
- Official GSAP docs
- Codrops tutorials
- CodePen collections
- FreeF­rontend examples

**Queries:**
- `rag_search_knowledge_base("premium animation trends 2025")`
- `rag_search_code_examples("{{component}} GSAP patterns")`

### Tier 2: Perplexity (Trends)
- **Real-time web search**
- Awwwards showcases
- Agency portfolios
- Latest trends

**Queries:**
- `perplexity_reason("{{brand}} animation Awwwards 2025")`
- `perplexity_reason("premium {{component}} GSAP examples")`

### Tier 3: Context7 (API Reference)
- **Latest GSAP API**
- New plugins
- Version 3.13+ features

**Queries:**
- `resolve-library-id("gsap")`
- `get-library-docs("/greensock/gsap", topic="ScrollSmoother")`

## Success Criteria

- ✅ User excited by at least one concept
- ✅ Concepts backed by research citations
- ✅ Mix of complexity levels (medium, medium-high, high)
- ✅ Wow factor clearly explained
- ✅ Technical approaches ambitious (not safe)

## Feeds Into

**After selecting a concept:**
- → `animation-production` (full production pipeline)
- → `implement-from-pattern` (if matches existing pattern)
- → VFX Artist directly (quick implementation)

## Best Practices

### Before Running
1. Have component context ready (hero, product showcase, etc.)
2. Know brand personality or be ready to describe
3. Understand constraints (timeline, performance)

### During Execution
1. Be specific with component context
2. Provide brand personality for better targeting
3. Mention anti-patterns to avoid generic suggestions

### After Completion
1. Review all 3-5 concepts thoroughly
2. Ask clarifying questions about technical approaches
3. Select concept OR request variations
4. Proceed to implementation workflow

## Estimated Duration

**Total:** 10-15 minutes
- Context: 2-3 min
- Research: 5-7 min (parallel MCP queries)
- Synthesis: 2-3 min
- Presentation: 1-2 min

## Requirements

- **Director agent** (orchestrator)
- **Cinematographer agent** (research specialist)
- **Archon MCP** (GSAP knowledge base)
- **Context7 MCP** (GSAP API docs)
- **Perplexity MCP** (web research)

## Troubleshooting

**"Concepts too generic/safe"**
- Provide more specific brand personality
- Mention anti-patterns explicitly
- Request "more ambitious" variations

**"No concepts match my vision"**
- Run workflow again with refined context
- Try providing example animations you like
- Consult pattern library first

## Version History

- **v1.0.0** - Initial release (SIGNATURE WORKFLOW)
  - Multi-source research protocol
  - 3-5 concept generation
  - Research citations included

---

**Part of GSAP Excellence Engine**
**Signature Workflow:** ⭐ YES (Solves core user need)
**Quality Standard:** 9.8/10 (Research-backed creative direction)
