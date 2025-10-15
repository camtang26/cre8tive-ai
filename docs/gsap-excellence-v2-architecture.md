# GSAP Excellence Engine v2 - Architecture Design
**Date:** 2025-10-14
**Status:** Rebuild Design Phase
**Approach:** Ground-up redesign based on platform capabilities

---

## Design Principles

1. **Automation Over Manual Coordination** - Use Task tool, not user routing
2. **Simplicity Over Complexity** - 1 agent, not 5
3. **Substance Over Ceremony** - 95% function, 5% personality
4. **Real Integration Over Aspirational** - Actual MCP calls with error handling
5. **Discoverable Patterns** - Search, browse, recommend

---

## Architecture Overview

### Agent Architecture (1 Agent)

**GSAP Studio** (Main Agent)
- **Role:** Complete GSAP animation expert and orchestrator
- **User-Facing:** YES (only agent users interact with)
- **Commands:**
  - `*research` - Deep research into GSAP patterns (MCP-heavy)
  - `*implement` - Build animation from concept/pattern
  - `*optimize` - Performance validation and optimization
  - `*produce` - FLAGSHIP: Full automated pipeline
  - `*patterns` - Browse/search pattern library
  - `*help` - Show capabilities
- **Orchestration:** Uses Task tool to invoke general-purpose agents for complex tasks
- **Personality:** Professional, results-focused, minimal ceremony
- **MCP Access:** Direct access to Archon, Context7, Perplexity, Chrome DevTools

### Workflow Architecture (4 Core Workflows)

#### 1. produce-animation (FLAGSHIP)
```
Purpose: Complete animation pipeline with full automation
Complexity: Complex
Time: 30-60 minutes
Uses Task Tool: YES

Flow:
User Request
  ↓
Gather Requirements (Studio)
  ↓
Research Phase (Task → general-purpose agent)
  ├─> Archon MCP: GSAP docs
  ├─> Context7 MCP: Latest APIs
  └─> Perplexity MCP: Premium examples
  ↓
Implementation Phase (Task → general-purpose agent)
  ├─> Generate production code
  ├─> Add cleanup functions
  ├─> Include accessibility
  └─> Optimize performance
  ↓
Validation Phase (Studio or Task → validator)
  ├─> Chrome DevTools MCP: Performance
  ├─> Console check
  └─> Visual validation
  ↓
Delivery (Studio)
  ├─> Complete code package
  ├─> Integration guide
  ├─> Performance report
  └─> Pattern library entry (if successful)

User Actions: 1 (initial request)
Agent Switches: 0
Manual Coordination: 0
```

#### 2. research-pattern
```
Purpose: Deep dive research into GSAP technique
Complexity: Standard
Time: 5-10 minutes
Uses MCP: Archon, Context7, Perplexity

Flow:
User specifies technique
  ↓
Multi-source research (parallel)
  ├─> Perplexity: Premium examples
  ├─> Archon: Technical docs
  └─> Context7: Latest APIs
  ↓
Synthesis and analysis
  ↓
Research report with citations

Returns: Structured research document
```

#### 3. implement-animation
```
Purpose: Build animation from pattern or concept
Complexity: Standard
Time: 10-20 minutes
Can Use Task Tool: For complex implementations

Flow:
User provides context + pattern/concept
  ↓
Load pattern or design approach
  ↓
Generate implementation
  ├─> Framework adaptation
  ├─> Cleanup code
  ├─> Accessibility fallback
  └─> Performance optimization
  ↓
Integration guide

Returns: Production-ready code + guide
```

#### 4. optimize-performance
```
Purpose: Profile and optimize existing animation
Complexity: Standard
Time: 10-15 minutes
Uses MCP: Chrome DevTools

Flow:
User provides animation code/URL
  ↓
Performance profiling
  ├─> FPS measurement
  ├─> CPU throttle testing
  ├─> Paint time analysis
  └─> Bottleneck identification
  ↓
Optimization recommendations
  ↓
Optional: Implement fixes

Returns: Performance report + optimized code
```

### Pattern Library Enhancement

**Current:** 12 static YAML files
**New:** Searchable, browsable, recommendable

**New Capabilities:**
```
*patterns browse [category]
  → List patterns by category (scroll-effects, timelines, text, interactive)

*patterns search [keyword]
  → Search patterns by technique, plugin, complexity
  → Example: "parallax ScrollTrigger simple"

*patterns recommend [description]
  → Recommend patterns based on user description
  → Example: "hero section with wow factor" → suggests 3-5 relevant patterns

*patterns show [pattern-name]
  → Display full pattern details with code example

*patterns stats
  → Show pattern library statistics and most used patterns
```

**Implementation:**
- Use `fd` to list pattern files
- Use `rg` to search pattern content
- Parse YAML and present structured results
- Semantic matching for recommendations

---

## Task Tool Orchestration

### How Task Tool Works
```
Studio Agent:
  ↓
  Uses Task tool with subagent_type="general-purpose"
  ↓
  Provides detailed prompt with:
  - Role definition ("You are a GSAP research specialist")
  - Specific task with context
  - MCP tools to use
  - Expected output format
  ↓
  General-purpose agent executes task autonomously
  ↓
  Returns results to Studio Agent
  ↓
  Studio Agent processes results and continues
```

### Example: Research Phase in produce-animation

```python
# Studio invokes Task tool
Task(
  subagent_type="general-purpose",
  description="Research GSAP patterns",
  prompt="""You are a GSAP research specialist.

Research premium patterns for: {{animation_type}}

Use these MCP tools:
1. Perplexity MCP: Search "award-winning {{animation_type}} animations 2024-2025 site:awwwards.com"
2. Archon MCP: Search GSAP docs for "{{technique}} advanced examples"
3. Context7 MCP: Get latest GSAP library docs to check API compatibility

Return a structured research report with:
- Top 5 premium examples with URLs
- Key techniques and GSAP features used
- Code snippets from documentation
- Performance considerations
- Accessibility notes
- Citations for all sources

Format as markdown with clear sections."""
)

# General-purpose agent executes autonomously
# Returns research report
# Studio continues with implementation phase
```

---

## MCP Integration (Real Implementation)

### Multi-Source Research Pattern

**Current Problem:** Instructions say "use MCP" but don't show how
**New Approach:** Explicit MCP calls with error handling

```markdown
### Research Phase Implementation

**Step 1: Perplexity Research**
```python
try:
    perplexity_results = perplexity_research(
        query="award-winning hero animations 2024-2025 site:awwwards.com OR site:fwa.com",
        mode="research"
    )
    # Extract: URLs, techniques, agencies, years
    premium_examples = parse_perplexity_results(perplexity_results)
except MCPUnavailableError:
    log_warning("Perplexity MCP unavailable, continuing with other sources")
    premium_examples = []
```

**Step 2: Archon RAG Search**
```python
try:
    archon_results = rag_search_knowledge_base(
        query="GSAP ScrollTrigger parallax advanced",
        match_count=5
    )
    # Extract: Documentation, code examples, best practices
    technical_patterns = parse_archon_results(archon_results)
except MCPUnavailableError:
    log_warning("Archon MCP unavailable")
    technical_patterns = []
```

**Step 3: Context7 API Check**
```python
try:
    gsap_docs = get_library_docs(library="gsap")
    # Extract: Latest version, new features, API changes
    api_info = parse_context7_docs(gsap_docs)
except MCPUnavailableError:
    api_info = {"version": "3.12.0", "note": "Using cached version info"}
```

**Step 4: Synthesis**
```python
research_report = synthesize_research(
    premium_examples=premium_examples,
    technical_patterns=technical_patterns,
    api_info=api_info
)

# Include citations and source tracking
research_report.add_citations(
    perplexity_urls=premium_examples.urls,
    archon_docs=technical_patterns.doc_ids,
    context7_version=api_info.version
)
```

**Error Handling Strategy:**
- Each MCP call wrapped in try/catch
- Graceful degradation if MCP unavailable
- Log warnings for missing sources
- Continue with available sources
- Document which sources were used in output
```

---

## Personality Reduction

### Before (Current):
```
🎬 WELCOME TO THE GSAP EXCELLENCE STUDIO

I'm The Director - your guide through premium animation production.

**How This Works:**

1. Tell me what you need - Describe your animation requirements
2. I analyze and plan - Break down into phases, identify specialists needed
3. I route you to specialists - Give you specific commands and context
4. You work with specialist - They do their focused work
5. You return to me - I review output, assess quality, tell you what's next
6. Repeat until done - Continue through phases until animation ships

**Key Concept:** I don't do the work - I GUIDE the process...
(200+ words continue)
```

### After (New):
```
🎬 GSAP Studio - Premium animation production

Commands: *research, *implement, *optimize, *produce, *patterns, *help
What animation do you need?
```

**Guidelines:**
- Greetings: < 50 words
- Focus on capabilities and prompt for input
- Lead responses with results, not narration
- Save personality for celebration moments
- Respect user's time

---

## File Structure

```
bmad/gsap-excellence-v2/
├── agents/
│   └── gsap-studio.md                    # Main agent (only agent)
├── workflows/
│   ├── produce-animation/
│   │   ├── workflow.yaml                 # Config with Task orchestration
│   │   ├── instructions.md               # Detailed orchestration logic
│   │   └── template.md                   # Output template
│   ├── research-pattern/
│   │   ├── workflow.yaml
│   │   ├── instructions.md
│   │   └── template.md
│   ├── implement-animation/
│   │   ├── workflow.yaml
│   │   ├── instructions.md
│   │   └── template.md
│   └── optimize-performance/
│       ├── workflow.yaml
│       ├── instructions.md
│       └── template.md
├── patterns/                             # Keep existing 12 patterns
│   ├── parallax-scroll-basic.pattern.yaml
│   ├── hover-lift.pattern.yaml
│   └── ... (10 more)
├── config.yaml                           # Module configuration
├── README.md                             # Updated documentation
└── MIGRATION-NOTES.md                    # Migration guide from v1

Old version preserved:
bmad/gsap-excellence/                     # Keep for reference
```

---

## Migration Strategy

### What to Preserve:
1. **Pattern Library** (12 patterns) - Copy as-is
2. **config.yaml** - Update, keep structure
3. **Quality Standards** - Reuse in new docs
4. **MCP Server List** - Keep, enhance integration

### What to Rebuild:
1. **All Agent Files** - 5 agents → 1 agent
2. **Workflow Orchestration** - Add Task tool usage
3. **MCP Integration** - Real implementation
4. **Documentation** - Simplified, accurate

### What to Remove:
1. Manual routing logic
2. Agent coordination instructions
3. Excessive personality text
4. Pseudo-orchestration workflows

---

## Success Metrics

### Technical Metrics:
- **Automation:** 0 manual agent switches (down from 4-5)
- **Time to Result:** 3-5 minutes for simple, 30-60 for complete (vs 45-90+ with overhead)
- **User Actions:** 1-2 per workflow (vs 10-15)
- **Pattern Discoverability:** 100% (vs ~20% - users didn't know patterns existed)

### Quality Metrics:
- **First-Time Success:** 60%+ implementations work correctly
- **Performance:** 90%+ achieve 60fps target
- **Accessibility:** 100% include reduced-motion fallback
- **Code Quality:** Production-ready, fully commented

### User Experience Metrics:
- **Cognitive Load:** Low (1 agent vs 5)
- **Context Switching:** None (vs 4-5 switches)
- **Learning Curve:** Minutes (vs hours)
- **User Satisfaction:** "This actually saves time" vs "adds complexity"

---

## Implementation Plan

### Phase 1: Core Agent (Week 1)
- Build GSAP Studio agent
- Implement basic commands (*research, *implement, *patterns, *help)
- Pattern library integration (search, browse)
- Test basic functionality

### Phase 2: Flagship Workflow (Week 1)
- Build produce-animation workflow
- Implement Task tool orchestration
- Real MCP integration with error handling
- Test complete pipeline

### Phase 3: Utility Workflows (Week 2)
- Build research-pattern workflow
- Build implement-animation workflow
- Build optimize-performance workflow
- Test each workflow independently

### Phase 4: Polish & Test (Week 2)
- Performance optimization
- Error handling improvements
- Documentation
- Real-world testing with 2-3 animations

### Phase 5: Deployment (Week 2-3)
- Migration guide
- Update main README
- Archive v1 for reference
- Announcement and usage examples

---

## Risk Mitigation

### Risk: Task Tool Doesn't Work as Expected
- **Mitigation:** Test Task tool early in Phase 1
- **Fallback:** Studio handles everything internally (still better than v1)

### Risk: MCP Integration Issues
- **Mitigation:** Graceful degradation, clear error messages
- **Fallback:** Work with available MCPs, document limitations

### Risk: Pattern Library Too Limited
- **Mitigation:** Start with 12, grow organically through usage
- **Fallback:** Research workflow can discover patterns on-demand

### Risk: Users Prefer Specialized Agents
- **Mitigation:** Test with Cameron early, get feedback
- **Fallback:** Can add specialist agents later if actually needed

---

## Decision Log

**Decision 1: One Agent vs Multiple**
- **Chosen:** One agent (GSAP Studio)
- **Rationale:** Eliminates manual coordination, lower cognitive load
- **Trade-off:** Less specialization, but users don't interact with specialists anyway

**Decision 2: Task Tool for Orchestration**
- **Chosen:** Use Task tool with general-purpose subagent
- **Rationale:** Actual automation, not manual routing
- **Trade-off:** Adds complexity to workflow design, but worth it

**Decision 3: Pattern Library Enhancement**
- **Chosen:** Add search, browse, recommend capabilities
- **Rationale:** Patterns are useless if undiscoverable
- **Trade-off:** Development time, but high value

**Decision 4: Personality Reduction**
- **Chosen:** 95% substance, 5% personality
- **Rationale:** Users want results, not roleplay
- **Trade-off:** Less memorable, but more efficient

**Decision 5: Workflow Count**
- **Chosen:** 4 core workflows (not 8)
- **Rationale:** Fewer, more capable workflows better than many narrow ones
- **Trade-off:** Each workflow more complex, but better UX

---

## Open Questions

1. **Should Chrome DevTools MCP be required or optional?**
   - Leaning: Optional with graceful degradation
   - Need to test availability and reliability

2. **Should we keep film studio theme at all?**
   - Leaning: Yes, very light (🎬 emoji, "That's a wrap!" on completion)
   - Need Cameron's preference

3. **Should pattern library live in module or be separate?**
   - Leaning: In module for now, extract later if grows large
   - Easier to maintain together initially

4. **Should we add telemetry/metrics tracking?**
   - Leaning: Yes, simple tracking of workflow completion times
   - Helps measure success metrics

5. **Should we create a simplified onboarding workflow?**
   - Leaning: Yes, a *quickstart that demonstrates capabilities
   - Helps new users understand what's possible

---

## Next Steps

1. ✅ Complete this architecture document
2. Build GSAP Studio agent skeleton
3. Implement pattern library integration
4. Build produce-animation workflow with Task tool
5. Test with real use case
6. Iterate based on feedback

---

*Architecture design completed: 2025-10-14*
*Ready to proceed with implementation*
