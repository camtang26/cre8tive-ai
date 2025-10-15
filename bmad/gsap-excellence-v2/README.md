# GSAP Excellence Engine v2
**Premium GSAP Animation Production with Automated Orchestration**

---

## What Changed in v2

**v1 Problem:** Manual agent coordination required 10-15 minutes of workflow overhead

**v2 Solution:** TRUE automation using Task tool - zero manual steps

```
v1: User → Director → "Go run /cinematographer" → User switches → Research → User switches back → "Go run /vfx" → ...
v2: User → GSAP Studio → [automated research][automated implementation][automated validation] → Complete results
```

**Key Improvements:**
- **5 agents → 1 agent** (GSAP Studio handles everything)
- **Manual routing → Task tool orchestration** (actual automation)
- **40% personality → 5% personality** (results-focused)
- **Aspirational MCPs → Real MCP integration** (with error handling)
- **Hidden patterns → Searchable pattern library** (discoverable)

---

## Quick Start

### Installation
```bash
# Module location
/home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence-v2

# Enable MCP servers (required)
- Archon MCP
- Context7 MCP
- Perplexity MCP
- Chrome DevTools MCP (optional, for performance validation)
```

### Basic Usage
```
1. Load agent: /gsap-studio
2. Choose command:
   - *produce → Complete pipeline (flagship)
   - *research → Deep dive research
   - *implement → Build from pattern
   - *optimize → Performance tuning
   - *patterns → Browse library
3. Provide requirements ONCE
4. Get complete results (zero manual steps)
```

---

## The GSAP Studio Agent

**One agent to rule them all.**

### Commands

**`*produce` - FLAGSHIP (Complete Pipeline)**
- Automated research (3 MCPs)
- Production-ready implementation
- Performance validation
- Complete documentation
- Time: 30-60 minutes
- User actions: 1 (initial request)
- Agent switches: 0

**`*research` - Deep Dive Research**
- Multi-source GSAP pattern research
- Premium examples from Aww awards/FWA
- Technical documentation from Archon
- Latest APIs from Context7
- Time: 5-10 minutes

**`*implement` - Build Animation**
- From pattern library or concept
- Production-ready code
- Full integration guide
- Time: 10-20 minutes

**`*optimize` - Performance Tuning**
- Chrome DevTools profiling
- 60fps validation
- Optimization recommendations
- Time: 10-15 minutes

**`*patterns` - Pattern Library**
- Browse 12 proven patterns
- Search by keyword/plugin/complexity
- Get recommendations
- View full code examples

---

## Pattern Library (12 Patterns)

### Scroll Effects
- parallax-scroll-basic - Multi-layer parallax
- reveal-on-scroll - Fade + slide reveals
- sticky-header-shrink - Header shrink on scroll

### Timelines
- staggered-grid-reveal - Grid with stagger
- timeline-sequence - Complex multi-step

### Text Animations
- split-text-reveal - Character/word reveal
- typewriter-effect - Classic typewriter
- word-shuffle-reveal - Words shuffle in

### Interactive
- hover-lift - Card lift with shadow
- magnetic-button - Magnetic cursor
- smooth-page-transition - SPA transitions
- cursor-follow - Custom cursor lag

**All patterns include:**
- Full GSAP code
- Performance notes (60fps validation)
- Accessibility guidelines
- Browser compatibility
- Framework adaptation notes

---

## Task Tool Orchestration

**How v2 Achieves True Automation:**

```
GSAP Studio Agent
  ↓
  Uses Task tool with prompt:
    "You are a GSAP research specialist.
     Use these MCP tools: [Archon, Context7, Perplexity]
     Research: {{user_request}}
     Return: Research report"
  ↓
  General-purpose agent executes autonomously
  ↓
  Returns research to Studio
  ↓
  Studio uses Task tool again:
    "You are a GSAP implementation specialist.
     Context: {{research_findings}}
     Implement: {{user_request}}
     Return: Production code"
  ↓
  General-purpose agent implements
  ↓
  Returns code to Studio
  ↓
  Studio validates and delivers to user

User Actions: 1 (initial request)
Manual Coordination: 0
Time: Automated
```

---

## Quality Standards

### Performance
- 60fps on mid-range devices
- 4x CPU throttle tested
- GPU acceleration (transform + opacity)
- No layout thrashing

### Accessibility
- prefers-reduced-motion fallback REQUIRED
- Keyboard accessible if interactive
- Focus management if applicable

### Code Quality
- Production-ready from first generation
- Full inline comments
- Proper cleanup (no memory leaks)
- Framework integration correct
- No TODOs or placeholders

### Browser Support
- Chrome, Firefox, Safari (latest 2 versions)
- Mobile optimized
- Graceful degradation

---

## MCP Server Requirements

### Required MCPs

**Archon MCP** (GSAP Knowledge Base)
- Tools: rag_search_knowledge_base, rag_search_code_examples
- Purpose: Official GSAP docs and technical patterns
- Fallback: Continue with other sources

**Context7 MCP** (Latest APIs)
- Tools: get-library-docs
- Purpose: Current GSAP version and new features
- Fallback: Use cached version info

**Perplexity MCP** (Premium Examples)
- Tools: perplexity_research
- Purpose: Award-winning animations and trends
- Fallback: Use Archon examples only

### Optional MCPs

**Chrome DevTools MCP** (Performance Validation)
- Tools: take_screenshot, performance profiling, console check
- Purpose: Automated performance validation
- Fallback: Manual testing guide provided

---

## Success Metrics

**Automation:**
- v1: 4-5 manual agent switches
- v2: 0 manual steps

**Time to Result:**
- v1: 45-90+ minutes (with overhead)
- v2: 30-60 minutes (fully automated)

**User Experience:**
- v1: "Adds complexity"
- v2 Target: "This actually saves time"

**First-Time Success:**
- Baseline: 20%
- v2 Target: 60%+

**Performance:**
- Target: 90%+ achieve 60fps

---

## Example Usage

### Complete Animation Production

```
> /gsap-studio
🎬 GSAP Studio - Premium animation production

Commands: *research, *implement, *optimize, *produce, *patterns, *help
What animation do you need?

> *produce
Welcome to complete animation production.

What animation do you need?
> Premium parallax hero with smooth scrolling

Where will this animate?
> Hero component on landing page

Framework?
> react

[Automated research begins...]
[Multi-MCP research: Archon + Context7 + Perplexity...]
[Research completed in 12 minutes]

[Automated implementation begins...]
[Generating production-ready React code...]
[Implementation completed in 18 minutes]

[Validation...]
[Performance: 60fps ✅]
[Accessibility: Compliant ✅]

🎬 PRODUCTION COMPLETE - THAT'S A WRAP!

[Complete code package]
[Integration guide]
[Performance report]
[Documentation]

Total time: 35 minutes
Your actions: 1 (initial request)
Agent switches: 0

Ready for production.
```

---

## Migration from v1

**See MIGRATION-GUIDE.md for detailed migration instructions.**

**Quick Summary:**
- v1 preserved at `bmad/gsap-excellence/` (for reference)
- v2 at `bmad/gsap-excellence-v2/` (new system)
- Pattern library copied to v2
- No breaking changes to patterns
- Agent invocation changes: Use `/gsap-studio` instead of multiple agents

---

## Module Structure

```
bmad/gsap-excellence-v2/
├── agents/
│   └── gsap-studio.md              # Main agent (only agent)
├── workflows/
│   ├── produce-animation/          # Flagship with Task orchestration
│   ├── research-pattern/           # Research utility
│   ├── implement-animation/        # Implementation utility
│   └── optimize-performance/       # Validation utility
├── patterns/                       # 12 proven patterns
│   ├── parallax-scroll-basic.pattern.yaml
│   └── ... (11 more)
├── config.yaml                     # Module configuration
├── README.md                       # This file
└── MIGRATION-GUIDE.md             # v1 → v2 migration guide
```

---

## Troubleshooting

### MCP Servers Not Available
**Symptom:** Research or validation steps fail
**Solution:**
- Check MCP server status with `*status` command
- Verify MCP servers are enabled in Claude Code settings
- Workflows degrade gracefully if MCPs unavailable

### Task Tool Issues
**Symptom:** Orchestration doesn't work as expected
**Solution:**
- Ensure using Claude Code with Task tool support
- Check prompt formatting in workflow instructions
- Verify general-purpose subagent available

### Pattern Library Empty
**Symptom:** No patterns found
**Solution:**
- Verify patterns copied to v2: `ls bmad/gsap-excellence-v2/patterns`
- Check config.yaml pattern_library path
- Copy patterns from v1 if needed

---

## Support and Feedback

**Documentation:**
- Architecture: `docs/gsap-excellence-v2-architecture.md`
- Critical Analysis: `docs/gsap-excellence-critical-analysis-2025-10-14.md`
- Migration Guide: `bmad/gsap-excellence-v2/MIGRATION-GUIDE.md`

**Module Info:**
- Version: 2.0.0-alpha.0
- Author: Cameron
- Created: 2025-10-14
- Status: Rebuilt with proper orchestration

---

🎬 **GSAP Studio v2 - Premium animations with zero manual coordination**

*That's a wrap!*
