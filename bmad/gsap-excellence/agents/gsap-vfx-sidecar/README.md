# VFX Artist Sidecar Resources

This directory contains external resources for the VFX Artist agent that are loaded during agent activation.

## Contents

### `implementation-patterns.md`
**Loaded:** Automatically via critical-actions on agent startup
**Size:** ~730 lines of implementation knowledge
**Purpose:** Deep implementation patterns for React/Next.js GSAP integration

**Sections:**
1. React/Next.js Framework Integration (useGSAP, context patterns, SSR handling)
2. Timeline & Tween Implementation (overlapping timelines, labeled scenes, control methods)
3. Pattern Implementation (page load sequences, ScrollTrigger reveals, pinning)
4. Cleanup Patterns (React component cleanup, SPA navigation, memory leak prevention)
5. Implementation Workflows (before/during/after coding checklists)
6. Common Pitfalls (with solutions)
7. Usage Directives (quality bar, collaboration patterns)

## Research Protocol Enforcement

The VFX Artist has mandatory research protocol enforcement (Layer 2) to prevent AI rationalization and ensure quality implementations.

### How It Works

**Trigger Keywords:**
- "implement", "timeline creation", "ScrollTrigger setup"
- "SVG morphing", "text animation", "physics simulation"

**Mandatory Research Flow:**
1. **HALT** - Agent stops before any coding
2. **Identify Context** - Determines what needs research
3. **Execute Archon Queries** - Minimum 3 KB searches
4. **Read Deep-Research** - Relevant sections from `/docs/Deep-Research/`
5. **WebSearch (if needed)** - 2025 trends/examples if gaps exist
6. **Present Findings** - Summary with citations
7. **WAIT** - User must say "Continue [c]" to proceed
8. **Execute** - Only THEN can implementation begin

**Rationalization Prevention:**
- ❌ Cannot skip research for "simple" tasks
- ❌ Cannot claim "I already know this"
- ❌ Cannot defer research until after implementation
- ✅ MUST complete all 8 steps before coding
- ✅ Only user can override with "Skip [s]" command

### Testing the Protocol

**Test Scenario 1: ScrollTrigger Implementation**
```
User: "Can you implement a ScrollTrigger pinned section for our product showcase?"

Expected Behavior:
1. Agent says "HALT - Research required"
2. Executes Archon queries: "ScrollTrigger pin scrub", "pinned section patterns", "scroll choreography"
3. References Deep-Research Section 3.3 (Pinning Implementation)
4. Presents findings with code examples
5. Waits for user "Continue [c]"
6. ONLY THEN implements the code
```

**Test Scenario 2: React Integration**
```
User: "Add a timeline animation to our React component"

Expected Behavior:
1. Agent halts and identifies need for React/GSAP integration research
2. Queries: "React GSAP integration", "useGSAP hook patterns", "cleanup patterns"
3. References Deep-Research Section 2.5 (React/Next.js Integration)
4. Presents findings including useGSAP() vs gsap.context() patterns
5. Waits for approval
6. Implements with proper cleanup
```

**Test Scenario 3: User Override**
```
User: "Create a simple fade-in animation. Skip [s]"

Expected Behavior:
1. Agent sees "Skip [s]" command from user
2. Bypasses research protocol (user explicitly allowed)
3. Implements directly using known patterns
```

### Knowledge Sources

**Tier 1 (Primary):**
- Archon MCP: 91 indexed sources
  - `rag_search_knowledge_base()` - Conceptual patterns
  - `rag_search_code_examples()` - Implementation examples
- Deep-Research: `/docs/Deep-Research/GSAP-Animation-Mastery/` (43 sections)
- Implementation Patterns: This sidecar file (loaded at startup)

**Tier 2 (Fallback):**
- WebSearch: Latest 2025 examples (CodePen, Codrops, agency sites)

**Tier 3 (Verification):**
- Context7 MCP: API documentation verification (GSAP 3.13+ features)

### Enforcement Mechanism

The research protocol is enforced through:

1. **XML Declaration** - `<research-protocol enforcement="MANDATORY">`
2. **Procedure Flag** - `<procedure cannot-skip="true">`
3. **Critical Action** - Listed in agent's critical-actions section
4. **Rationalization Blockers** - Explicit "you CANNOT" statements

This creates **multiple layers of enforcement** making it structurally difficult for the AI to skip research.

### Benefits

1. **Quality Assurance** - Patterns are researched, not invented
2. **Consistency** - All implementations follow proven patterns
3. **Education** - User learns WHY patterns work
4. **Transparency** - Research sources are cited
5. **Flexibility** - User can override when appropriate

### Maintenance

When updating implementation patterns:
1. Edit `implementation-patterns.md` directly
2. Agent automatically loads updated version on next activation
3. No need to modify agent file
4. Git history cleanly separates agent structure from knowledge updates

---

**Last Updated:** 2025-11-07
**Agent:** VFX Artist (gsap-vfx)
**Module:** gsap-excellence
**BMAD Version:** v6.0.0
