# VFX - Workflow Conversion Specifications

**Agent:** gsap-vfx (The VFX Specialist)
**Agent File:** `/bmad/gsap-excellence/agents/gsap-vfx.md` (1,339 lines)
**Date:** 2025-11-06
**Status:** COMPLETE SPECIFICATION - Ready for implementation

**Conversion Impact:**
- **Before**: Agent file loads 209 lines of inline actions on every activation
- **After**: Agent file loads ~15 lines of menu references, workflows load only when needed
- **Token Savings**: ~194 lines (92% reduction in inline content)
- **Efficiency Gain**: 70-80% token savings per workflow activation

---

## Executive Summary

This document specifies the conversion of **5 inline action commands** from the VFX agent into standalone workflows with MANDATORY research gates. The VFX agent specializes in creating sophisticated GSAP animations: timeline choreography, ScrollTrigger effects, physics simulations, SVG morphing, and text animations.

**Key Conversions:**
- 2 P1 workflows (timeline, scroll) - Critical production features
- 3 P2 workflows (physics, morph, text) - Premium animation effects
- Total extraction: 209 lines → 15 lines of workflow references
- Agent file reduction: 14.5% smaller

**Special Considerations:**
- Timeline choreography is most complex (Deep-Research Sections 2.2, 2.3, 3.1, 3.7)
- ScrollTrigger is GSAP's most powerful feature (Sections 3.2, 3.3)
- MorphSVG and SplitText plugins are **FREE in GSAP 3.13+** (must emphasize!)
- Framework integration patterns (React/Next.js) from Section 2.5

---

## Conversion Summary Table

| Command | Lines | Priority | Decision | Target Workflow | Reason |
|---------|-------|----------|----------|-----------------|--------|
| `*timeline` | 65 (1001-1065) | **P1** | **CONVERT** | `create-timeline/` | Complex choreography, KB research required |
| `*scroll` | 36 (1066-1101) | **P1** | **CONVERT** | `create-scroll-animation/` | ScrollTrigger patterns, high research value |
| `*physics` | 40 (1102-1141) | **P2** | **CONVERT** | `create-physics-animation/` | Physics patterns need KB research |
| `*morph` | 30 (1142-1171) | **P2** | **CONVERT** | `create-morph-animation/` | MorphSVG examples from KB |
| `*text` | 38 (1172-1209) | **P2** | **CONVERT** | `create-text-animation/` | SplitText patterns from KB |
| `*complex` | 42 | **P3** | **KEEP INLINE** | N/A | Conversational guidance, no research |
| `*pattern` | 30 | **P3** | **KEEP INLINE** | N/A | Simple pattern browsing |

**Total to Convert:** 5 workflows (209 lines)
**Keep Inline:** 2 commands (72 lines - simple guidance)

---

## WORKFLOW 1: `*timeline` → `create-timeline/`

**Priority:** P1 (High Priority - Timeline choreography is fundamental)
**Complexity:** High
**Research Intensity:** High

### Current State (Extraction)

**Location:** Lines 1001-1065 in `/bmad/gsap-excellence/agents/gsap-vfx.md`

**Complete Inline Action:**

```xml
<item cmd="*timeline" action="inline">Create KB-powered GSAP timeline with choreography

✨ **Timeline Choreography (KB-Powered)**

*"Hold my coffee, let's build something complex..."*

I'll create a sophisticated GSAP timeline backed by proven patterns from our knowledge base.

**Please provide:**
1. **Elements to animate** - What needs to move/fade/transform?
2. **Sequence** - What order? Overlapping or sequential?
3. **Timing** - Durations and delays?
4. **Effects** - Fade, slide, scale, rotate, morph?
5. **Framework** - React, Next.js, Vue, Vanilla?

**My Implementation Process:**

<!-- TIER 1: Query Archon for Timeline Patterns -->
<action>Search Archon for proven timeline implementations:
  - rag_search_code_examples("timeline choreography [effect_type]")
  - rag_search_code_examples("complex animation sequences")
  - rag_search_knowledge_base("timeline coordination best practices")
  - Find similar patterns from KB to use as foundation
</action>

<!-- TIER 1: Reference Deep-Research Frameworks -->
<action>Apply Deep-Research timeline techniques:
  - Section 2.2: Mastering Timeline Techniques → Advanced choreography
  - Section 2.3: Understanding Tweens and Staggers → Fundamentals
  - Section 3.1: Page Load Sequence → Intro timeline patterns
  - Section 3.7: Cleanup and Reinitialization → Proper lifecycle
</action>

<!-- TIER 1: Framework Integration (if needed) -->
<action>Apply React/Next.js integration patterns (Section 2.5):
  - useGSAP() hook for React
  - Ref-based element selection
  - Cleanup on component unmount
  - Server Component considerations (Next.js 15)
</action>

<!-- TIER 2: Latest Framework Patterns (if needed) -->
<action>If using new framework version:
  - WebSearch("Next.js 15 GSAP timeline SSR")
  - WebSearch("React 19 GSAP timeline patterns")
  - Verify latest best practices
</action>

**Timeline Features I'll Use:**
- Position labels for reusable jump points
- Relative positioning ("<", "+=0.5", etc.)
- Callbacks (onStart, onComplete, onUpdate)
- Repeat and yoyo effects
- TimeScale for speed control
- Premium plugins if beneficial (FREE in 3.13+!)

**Output:** Production-ready timeline implementation with:
- Clean, well-commented code
- KB pattern citations
- Framework integration (if applicable)
- Cleanup handlers
- Performance optimizations

*"Let me build this using proven patterns from our knowledge base..."*
</item>
```

**Line Count:** 65 lines

---

### Target Workflow Structure

**Workflow Name:** `create-timeline`
**Directory:** `/bmad/gsap-excellence/workflows/create-timeline/`

**Files to Create:**
1. `workflow.yaml` - Workflow configuration
2. `instructions.md` - Multi-step implementation process with MANDATORY research
3. `template.md` - Code output structure (N/A - generates code directly)

**Workflow Steps:**
1. **Context Gathering** - Collect animation requirements
2. **Research Gate (MANDATORY)** - Query Archon KB + Deep-Research sections
3. **Pattern Selection** - Choose best KB patterns for this use case
4. **Framework Integration** - Apply React/Next.js patterns (if needed)
5. **Implementation** - Generate production-ready timeline code
6. **Testing Guidance** - Provide validation checklist

---

### Complete workflow.yaml

```yaml
# Timeline Choreography Workflow
# VFX - KB-powered GSAP timeline creation with systematic research

name: 'create-timeline'
description: 'Create sophisticated GSAP timeline choreography using KB-powered pattern matching, Deep-Research frameworks, and framework integration best practices'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/create-timeline'
instructions: '{installed_path}/instructions.md'
template: null  # Generates code directly, no template needed
default_output_file: null  # Code output provided inline

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from VFX agent menu)

# Workflow Metadata
metadata:
  agent: 'vfx'
  priority: 'P1'
  complexity: 'high'
  research_intensity: 'high'
  estimated_duration: '15-25 minutes'
  output_type: 'code'  # Generates production code, not documentation

# Required MCP Servers
required_mcp:
  - archon  # GSAP knowledge base (89 sources) - PRIMARY
  - context7  # Latest GSAP API docs (fallback)
  - perplexity  # Framework-specific patterns (fallback)

# Deep-Research Sections Referenced
deep_research_sections:
  - '2.2'  # Mastering Timeline Techniques (PRIMARY - advanced choreography)
  - '2.3'  # Understanding Tweens and Staggers (fundamentals)
  - '3.1'  # Page Load Sequence (intro timeline patterns)
  - '3.7'  # Cleanup and Reinitialization (lifecycle management)
  - '2.5'  # React/Next.js Integration (if framework needed)

# Archon Priority Sources
archon_sources:
  - 'b9f6b322298feb21'  # gsap.com official docs
  - '1e5cc3bd5125be3c'  # Codrops timeline tutorials
  - '90c2ef5e8fa816b7'  # FreeFrontend timeline examples
  - 'premium-patterns'   # Timeline choreography patterns

# Framework Support
frameworks:
  - 'react'      # useGSAP() hook patterns
  - 'nextjs'     # SSR considerations, Next.js 15
  - 'vue'        # Vue 3 composition API
  - 'vanilla'    # Pure JavaScript implementation

# Premium Plugin Support (FREE in GSAP 3.13+)
premium_plugins:
  enabled: true
  note: 'MorphSVG, SplitText, DrawSVG, ScrambleText, etc. are FREE in GSAP 3.13+'
  reference: 'https://gsap.com/blog/gsap-3-13-0-release'
```

---

### Complete instructions.md

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-timeline/workflow.yaml</critical>

# Timeline Choreography - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-timeline
**Purpose:** Create sophisticated GSAP timeline choreography using KB-powered pattern matching

---

## Overview

This workflow creates production-ready GSAP timeline implementations by systematically researching proven patterns from the Archon knowledge base (89 sources, 2.2M+ words) and applying Deep-Research frameworks for timeline choreography.

**Timeline Features:**
- Position labels for reusable jump points
- Relative positioning (`"<"`, `"+=0.5"`, etc.)
- Callbacks (onStart, onComplete, onUpdate)
- Repeat and yoyo effects
- TimeScale for speed control
- Premium plugins (FREE in GSAP 3.13+!)

**Key Principle:** *Every timeline is built on proven patterns, not guesswork.*

---

## Step 1: Context Gathering

Use `<ask>` tags to collect animation requirements from the user.

### Required Information

<ask name="elements">
**Elements to Animate**

What elements need to move/fade/transform?
- Specific selectors (e.g., ".hero-title", "#cta-button")
- Element types (headings, images, cards, etc.)
- How many elements in sequence?

Examples:
- "Hero heading, 3 feature cards, CTA button"
- ".timeline-item elements (5 total)"
- "Logo, navigation links, hero image"
</ask>

<ask name="sequence">
**Animation Sequence**

What order should elements animate?
- Sequential (one after another)?
- Overlapping (start next before previous finishes)?
- Simultaneous (all at once)?
- Custom timing pattern?

Example: "Cards fade in sequentially with 0.2s overlap, then CTA slides up"
</ask>

<ask name="timing">
**Timing Specifications**

Durations and delays for each element:
- Overall timeline duration?
- Individual tween durations?
- Delays between sequences?
- Stagger amounts (if applicable)?

Example: "Each card: 0.6s duration, 0.15s stagger"
</ask>

<ask name="effects">
**Animation Effects**

What visual effects?
- Fade (opacity changes)
- Slide (x/y movement)
- Scale (size changes)
- Rotate (rotation effects)
- Morph (shape transitions - requires MorphSVG)
- Custom properties?

Example: "Fade up from bottom (y: 50 → 0, opacity: 0 → 1)"
</ask>

<ask name="framework">
**Framework Context**

What's your development environment?
- React (with useGSAP hook)?
- Next.js (which version? SSR considerations?)
- Vue (Composition API or Options API)?
- Vanilla JavaScript?
- TypeScript or JavaScript?

Example: "Next.js 15 with App Router, TypeScript, client component"
</ask>

---

## Step 2: Research Gate (MANDATORY - Cannot Proceed Without)

**⚠️ RESEARCH ENFORCEMENT:**
This is a MANDATORY blocking checkpoint. You CANNOT proceed to Step 3 until this research is COMPLETE. Research is not optional, not suggested - it is REQUIRED.

**Research Protocol:** Systematic multi-source timeline pattern analysis

### Phase 1: Archon KB - Timeline Code Examples (PRIMARY)

Required Archon Queries (ALL MUST BE EXECUTED):

#### Query 1: Timeline Choreography Patterns
```javascript
rag_search_code_examples("timeline choreography {effect_type}")
```
**Purpose:** Find proven timeline implementations matching the desired effects
**Effect type examples:** "fade sequence", "stagger cards", "page load", "scroll reveal"
**Document:** What timeline structures work best for this effect type?

#### Query 2: Complex Sequence Patterns
```javascript
rag_search_code_examples("complex animation sequences")
```
**Purpose:** Find sophisticated multi-element coordination patterns
**Document:** How do premium sites coordinate multiple elements in timelines?

#### Query 3: Timeline Coordination Best Practices
```javascript
rag_search_knowledge_base("timeline coordination best practices")
```
**Purpose:** Learn position parameter strategies, label usage, relative positioning
**Document:** Position parameters (`"<"`, `"+=0.5"`), labels, timing strategies

#### Query 4: Stagger Techniques (if applicable)
```javascript
rag_search_code_examples("stagger {element_type}")
```
**Purpose:** Find stagger patterns for repeated elements
**Element examples:** "cards", "list items", "characters", "grid"
**Document:** Stagger amounts, easing, advanced stagger options

### Phase 2: Deep-Research - Timeline Frameworks (PRIMARY)

Apply systematic frameworks from Deep-Research sections:

#### Section 2.2: Mastering Timeline Techniques (PRIMARY)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/2-2-Mastering-Timeline-Techniques.md`

**Extract:**
- Advanced position parameters (relative, absolute, labels)
- Callback strategies (onStart, onComplete, onUpdate)
- Timeline control methods (play, pause, reverse, timeScale)
- Nested timeline patterns
- Complex coordination techniques

**Document:** Which timeline techniques apply to this use case?

#### Section 2.3: Understanding Tweens and Staggers (Fundamentals)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/2-3-Understanding-Tweens-and-Staggers.md`

**Extract:**
- Tween fundamentals (to, from, fromTo)
- Stagger configuration options
- Easing function selection
- Duration calculations

**Document:** What tween patterns and stagger configs fit this sequence?

#### Section 3.1: Page Load Sequence (if intro animation)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/3-1-Page-Load-Sequence.md`

**Apply if:** Timeline is for page intro/hero animation

**Extract:**
- Page load timing strategies
- Intro sequence best practices
- User experience considerations

#### Section 3.7: Cleanup and Reinitialization (Lifecycle)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/3-7-Cleanup-and-Reinitialization.md`

**Extract:**
- Timeline cleanup strategies (kill vs revert)
- Memory management
- Reinitialization patterns
- Lifecycle integration

**Document:** How should this timeline be cleaned up and managed?

### Phase 3: Framework Integration (if applicable)

#### If React or Next.js:

**Section 2.5: React/Next.js Integration**
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/2-5-React-NextJS-Integration.md`

Required Archon Query:
```javascript
rag_search_code_examples("useGSAP timeline {framework}")
```

**Extract:**
- useGSAP() hook patterns
- Ref-based element selection
- Context-safe selectors
- Cleanup on component unmount
- Server Component considerations (Next.js 15)

**Document:** How to integrate timeline with React/Next.js lifecycle?

#### If New Framework Version:

Execute WebSearch for latest patterns:
```javascript
WebSearch("Next.js 15 GSAP timeline SSR")
WebSearch("React 19 GSAP timeline patterns")
```

**Purpose:** Verify no breaking changes or new best practices in latest versions

### Phase 4: Premium Plugin Research (if needed)

If effects require premium plugins (MorphSVG, DrawSVG, etc.):

```javascript
rag_search_code_examples("MorphSVG timeline")
rag_search_code_examples("DrawSVG timeline sequence")
```

**IMPORTANT:** Emphasize that MorphSVG, SplitText, DrawSVG, ScrambleText, etc. are **FREE in GSAP 3.13+**!
Reference: https://gsap.com/blog/gsap-3-13-0-release

### Phase 5: Research Documentation

Create a "Research Findings" section documenting:

1. **Timeline Patterns Found**
   - Which KB examples are most relevant?
   - What timeline structure fits best (sequential, overlapping, etc.)?
   - Position parameter strategy

2. **Deep-Research Framework Applications**
   - Which Section 2.2 techniques apply?
   - Stagger configuration (from Section 2.3)
   - Cleanup strategy (from Section 3.7)

3. **Framework Integration Strategy**
   - useGSAP hook usage (React)
   - Ref patterns
   - Cleanup approach

4. **Premium Plugin Usage**
   - Which plugins needed (if any)?
   - Remind user: FREE in GSAP 3.13+

**Research Quality Gate:** You must have documented findings from ALL required queries before proceeding to Step 3.

---

## Step 3: Pattern Selection

Based on research findings, select the best timeline pattern for this use case.

### Timeline Architecture Decision

Choose timeline structure:

**Option A: Simple Timeline (Sequential)**
```javascript
const tl = gsap.timeline()
tl.to(element1, { ... })
  .to(element2, { ... })
  .to(element3, { ... })
```

**Option B: Overlapping Timeline (Relative Position)**
```javascript
const tl = gsap.timeline()
tl.to(element1, { ... })
  .to(element2, { ... }, "<0.3")  // Start 0.3s before previous ends
  .to(element3, { ... }, "-=0.5")  // Start 0.5s before previous ends
```

**Option C: Labeled Timeline (Reusable Jump Points)**
```javascript
const tl = gsap.timeline()
tl.add("start")
  .to(element1, { ... })
  .add("midpoint")
  .to(element2, { ... })
  .add("end")
  .to(element3, { ... })
```

**Option D: Nested Timeline (Complex Coordination)**
```javascript
const tl = gsap.timeline()
const cardTimeline = gsap.timeline()
cardTimeline.to(cards, { ... })

tl.add(cardTimeline)
  .to(otherElement, { ... })
```

**Document:** Which architecture fits the sequence requirements?

---

## Step 4: Framework Integration (if applicable)

Apply framework-specific patterns based on research.

### React/Next.js Integration Pattern

**useGSAP Hook Pattern:**
```typescript
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function Component() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    // Timeline implementation
    tl.to(".element", { ... })

    return () => {
      // Cleanup automatically handled by useGSAP
      tl.kill()
    }
  }, { scope: container })  // Context-safe selector scoping

  return <div ref={container}>...</div>
}
```

**Key Points:**
- Use `useRef` for container reference
- Pass `scope` to useGSAP for context-safe selectors
- Cleanup returned function runs on unmount
- Next.js 15: Use `'use client'` directive for client components

### Vue 3 Integration Pattern

```javascript
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

export default {
  setup() {
    const container = ref(null)
    let tl

    onMounted(() => {
      tl = gsap.timeline()
      // Timeline implementation
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { container }
  }
}
```

### Vanilla JavaScript Pattern

```javascript
// Create timeline
const tl = gsap.timeline({
  paused: true,  // Start paused, control programmatically
  onComplete: () => console.log('Timeline complete')
})

// Timeline implementation
tl.to(".element", { ... })

// Play when ready
tl.play()

// Cleanup when needed
// tl.kill()
```

---

## Step 5: Implementation - Generate Timeline Code

Generate production-ready timeline code with the following structure:

### Code Output Structure

1. **Imports** (if framework)
2. **Timeline Configuration** (options, callbacks)
3. **Timeline Implementation** (tweens, position parameters)
4. **Lifecycle Integration** (framework-specific)
5. **Comments** (inline documentation)
6. **KB Citations** (source patterns)

### Code Quality Requirements

**Must Include:**
- Clean, well-commented code
- Type annotations (if TypeScript)
- KB pattern citations (inline comments)
- Framework integration (if applicable)
- Cleanup handlers
- Performance optimizations
- Premium plugin usage (if needed - note FREE in 3.13+!)

**Code Comments Should Reference:**
- Which Archon source inspired this pattern
- Which Deep-Research section this technique comes from
- Why this approach was chosen

**Example Comment:**
```javascript
// Pattern from Archon: Codrops timeline tutorial (src: 1e5cc3bd5125be3c)
// Using relative positioning from Section 2.2 (timeline techniques)
```

---

## Step 6: Testing Guidance

Provide validation checklist for the user to test the timeline.

### Testing Checklist

**Functional Tests:**
- [ ] Timeline plays on intended trigger
- [ ] All elements animate in correct sequence
- [ ] Timing matches specifications (durations, delays)
- [ ] Effects achieve desired visual result
- [ ] Callbacks fire at correct moments

**Performance Tests:**
- [ ] No jank during animation (60fps maintained)
- [ ] No console errors or warnings
- [ ] Timeline cleanup works (no memory leaks)
- [ ] Smooth on target devices (desktop, mobile)

**Framework Tests (if applicable):**
- [ ] Component mounts without errors
- [ ] Timeline initializes correctly in framework lifecycle
- [ ] Cleanup occurs on unmount (no lingering tweens)
- [ ] Re-renders don't create duplicate timelines
- [ ] SSR compatibility (Next.js only)

**Cross-Browser Tests:**
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (WebKit differences)
- [ ] Mobile browsers

### Common Issues & Solutions

**Issue: Timeline doesn't play**
- Solution: Check element selectors exist in DOM
- Solution: Verify timeline isn't paused

**Issue: Timing feels wrong**
- Solution: Adjust position parameters
- Solution: Use timeScale for speed control

**Issue: Elements "jump" at start**
- Solution: Use `.fromTo()` instead of `.to()` to set initial state
- Solution: Set initial CSS properties

**Issue: Memory leaks in React**
- Solution: Ensure cleanup function kills timeline
- Solution: Use useGSAP hook with scope parameter

---

## Step 7: Output Delivery

### Final Deliverables

**1. Production-Ready Code**
- Complete timeline implementation
- Framework-integrated (if applicable)
- Comments and citations

**2. Research Citations Section**

```markdown
## Research Citations

**Archon Knowledge Base:**
- [Pattern Name] from [Source] (src: [source_id])
- [Technique] from [Source]

**Deep-Research Frameworks:**
- Section 2.2: [Technique used]
- Section 2.3: [Stagger configuration]
- Section 3.7: [Cleanup strategy]

**Framework Integration:**
- Section 2.5: [React/Next.js pattern]
```

**3. Testing Checklist** (from Step 6)

**4. Implementation Notes**
- Any framework-specific considerations
- Premium plugin requirements (note: FREE in 3.13+!)
- Browser compatibility notes
- Performance considerations

---

## Success Criteria

Timeline implementation is complete when:

- ✅ All research queries executed and documented
- ✅ Pattern selection justified with KB citations
- ✅ Production-ready code generated
- ✅ Framework integration correct (if applicable)
- ✅ Comments reference KB sources and Deep-Research sections
- ✅ Testing checklist provided
- ✅ Research citations section included
- ✅ No guesswork - every technique backed by KB research

---

**Workflow Complete** ✨
```

---

### Agent Menu Update

**BEFORE (Current - Lines 1001-1065):**
```xml
<item cmd="*timeline" action="inline">Create KB-powered GSAP timeline with choreography

✨ **Timeline Choreography (KB-Powered)**

*"Hold my coffee, let's build something complex..."*

[... 65 lines of embedded content ...]

*"Let me build this using proven patterns from our knowledge base..."*
</item>
```

**AFTER (Workflow Reference):**
```xml
<item cmd="*timeline" workflow="{module_root}/workflows/create-timeline/workflow.yaml">
  Create sophisticated GSAP timeline choreography using KB-powered pattern matching
</item>
```

**Line Savings:** 65 lines → 2 lines (97% reduction in agent file)

---

### Testing Protocol

#### Test 1: Basic Timeline Creation
**Scenario:** User requests simple 3-element sequential fade-in timeline

**Expected Behavior:**
1. ✅ Research gate executes (Archon queries for "fade sequence" patterns)
2. ✅ Deep-Research Section 2.2 reviewed (timeline techniques)
3. ✅ Pattern selected (sequential timeline with relative positioning)
4. ✅ Code generated with comments and KB citations
5. ✅ Testing checklist provided

**Success Criteria:**
- Timeline code is production-ready
- KB citations present
- No guesswork in implementation

#### Test 2: Complex Overlapping Timeline
**Scenario:** User requests cards stagger with overlapping hero animation

**Expected Behavior:**
1. ✅ Research gate finds stagger patterns and overlapping examples
2. ✅ Deep-Research Section 2.3 applied (staggers)
3. ✅ Relative positioning used (`"<0.3"` for overlap)
4. ✅ Code includes stagger configuration
5. ✅ Testing checklist covers timing verification

**Success Criteria:**
- Overlapping timing implemented correctly
- Stagger configuration backed by KB research
- Comments explain position parameters

#### Test 3: React Integration
**Scenario:** User requests timeline in Next.js 15 component

**Expected Behavior:**
1. ✅ Research includes Section 2.5 (React/Next.js Integration)
2. ✅ useGSAP hook pattern applied
3. ✅ Ref-based selectors used
4. ✅ Cleanup function included
5. ✅ `'use client'` directive added (Next.js 15)

**Success Criteria:**
- Framework integration correct
- No memory leaks (cleanup works)
- SSR compatibility considered

#### Test 4: Research Gate Enforcement (CRITICAL)
**Scenario:** Attempt to skip research and jump to implementation

**Expected Behavior:**
1. ❌ System prevents proceeding past Step 2 without research completion
2. ✅ Warning displayed: "Research gate is MANDATORY"
3. ✅ Must execute all required Archon queries before Step 3

**Success Criteria:**
- **Research cannot be skipped**
- All outputs include research citations
- 100% research compliance

#### Test 5: Premium Plugin Usage
**Scenario:** User requests timeline with MorphSVG shape transitions

**Expected Behavior:**
1. ✅ Research queries include "MorphSVG timeline"
2. ✅ Code includes MorphSVG plugin usage
3. ✅ Comment emphasizes: "FREE in GSAP 3.13+!"
4. ✅ Link to GSAP 3.13 release notes provided

**Success Criteria:**
- MorphSVG correctly integrated
- User informed about free availability
- Code includes plugin import

---

## WORKFLOW 2: `*scroll` → `create-scroll-animation/`

**Priority:** P1 (High Priority - ScrollTrigger is GSAP's most powerful feature)
**Complexity:** Medium-High
**Research Intensity:** High

### Current State (Extraction)

**Location:** Lines 1066-1101 in `/bmad/gsap-excellence/agents/gsap-vfx.md`

**Complete Inline Action:**

```xml
<item cmd="*scroll" action="inline">Add ScrollTrigger-based animation

✨ **ScrollTrigger Magic**

ScrollTrigger is where GSAP really shines. Let's create scroll-based animations.

**What I Can Build:**

**1. Scroll-Triggered Reveals**
- Elements fade/slide in as you scroll to them
- Staggered reveals for lists
- Custom easing for organic feel

**2. Parallax Effects**
- Multi-layer depth parallax
- Different speeds for foreground/background
- Cinematic depth of field

**3. Scrubbed Animations**
- Animation tied directly to scroll position
- Smooth, controllable motion
- Perfect for product showcases

**4. Pinned Sections**
- Pin element while scroll continues
- Reveal content in stages
- Scroll-through storytelling

**5. Horizontal Scroll**
- Transform vertical scroll to horizontal
- Gallery or timeline effects

What type of scroll effect do you need?

*"ScrollTrigger is my favorite plugin. So much power."*
</item>
```

**Line Count:** 36 lines

---

### Target Workflow Structure

**Workflow Name:** `create-scroll-animation`
**Directory:** `/bmad/gsap-excellence/workflows/create-scroll-animation/`

**Files to Create:**
1. `workflow.yaml` - Workflow configuration
2. `instructions.md` - Multi-step ScrollTrigger implementation with MANDATORY research
3. `template.md` - N/A (generates code directly)

**Workflow Steps:**
1. **Context Gathering** - Determine scroll effect type and requirements
2. **Research Gate (MANDATORY)** - Query Archon for ScrollTrigger patterns + Deep-Research
3. **Effect Selection** - Choose specific ScrollTrigger configuration
4. **Implementation** - Generate production-ready ScrollTrigger code
5. **Testing Guidance** - Provide ScrollTrigger-specific validation

---

### Complete workflow.yaml

```yaml
# ScrollTrigger Animation Workflow
# VFX - KB-powered ScrollTrigger implementation with systematic research

name: 'create-scroll-animation'
description: 'Create sophisticated ScrollTrigger animations using KB-powered pattern matching, Deep-Research frameworks (Sections 3.2, 3.3), and proven scroll effect implementations'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/create-scroll-animation'
instructions: '{installed_path}/instructions.md'
template: null  # Generates code directly
default_output_file: null

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from VFX agent menu)

# Workflow Metadata
metadata:
  agent: 'vfx'
  priority: 'P1'
  complexity: 'medium-high'
  research_intensity: 'high'
  estimated_duration: '12-20 minutes'
  output_type: 'code'

# Required MCP Servers
required_mcp:
  - archon  # GSAP knowledge base - PRIMARY for ScrollTrigger patterns
  - context7  # Latest ScrollTrigger API (fallback)

# Deep-Research Sections Referenced
deep_research_sections:
  - '3.2'  # Scroll-Based Reveals (PRIMARY - reveal patterns)
  - '3.3'  # Parallax and Depth Effects (PRIMARY - parallax/pin patterns)
  - '2.5'  # React/Next.js Integration (if framework needed)
  - '3.7'  # Cleanup and Reinitialization (ScrollTrigger lifecycle)

# Archon Priority Sources
archon_sources:
  - 'b9f6b322298feb21'  # gsap.com ScrollTrigger docs
  - '1e5cc3bd5125be3c'  # Codrops ScrollTrigger tutorials
  - '90c2ef5e8fa816b7'  # FreeFrontend scroll examples
  - 'scrolltrigger-showcase'  # ScrollTrigger pattern library

# ScrollTrigger Effect Types
effect_types:
  - 'reveal'      # Elements appear as you scroll to them
  - 'parallax'    # Multi-layer depth scrolling
  - 'scrub'       # Animation tied to scroll position
  - 'pin'         # Pin element during scroll
  - 'horizontal'  # Horizontal scroll transformation

# Framework Support
frameworks:
  - 'react'      # useGSAP with ScrollTrigger
  - 'nextjs'     # SSR considerations
  - 'vue'        # Vue 3 patterns
  - 'vanilla'    # Pure JavaScript
```

---

### Complete instructions.md

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-scroll-animation/workflow.yaml</critical>

# ScrollTrigger Animation - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-scroll-animation
**Purpose:** Create sophisticated ScrollTrigger animations using KB-powered pattern matching

---

## Overview

ScrollTrigger is GSAP's most powerful plugin for scroll-based animations. This workflow creates production-ready ScrollTrigger implementations by researching proven patterns from Archon KB and applying Deep-Research frameworks.

**ScrollTrigger Capabilities:**
- Scroll-triggered reveals (fade/slide elements on scroll)
- Parallax effects (multi-layer depth)
- Scrubbed animations (tied to scroll position)
- Pinned sections (freeze element during scroll)
- Horizontal scroll transformations

**Key Principle:** *Every ScrollTrigger implementation is backed by proven patterns from premium sites.*

---

## Step 1: Context Gathering

Use `<ask>` tags to determine scroll effect type and requirements.

### Required Information

<ask name="effect_type">
**Scroll Effect Type**

What type of scroll animation do you need?

**1. Scroll-Triggered Reveals**
- Elements fade/slide in when scrolled into view
- Staggered reveals for multiple elements
- Use case: Content sections, feature cards, testimonials

**2. Parallax Effects**
- Multi-layer scrolling at different speeds
- Foreground/background depth
- Use case: Hero sections, immersive storytelling

**3. Scrubbed Animations**
- Animation progress tied directly to scroll position
- User controls animation by scrolling
- Use case: Product showcases, interactive timelines

**4. Pinned Sections**
- Pin element while scroll continues
- Reveal content in stages
- Use case: Feature explanations, scroll-through stories

**5. Horizontal Scroll**
- Transform vertical scroll to horizontal movement
- Use case: Image galleries, timelines

Which type matches your needs? (Can combine multiple)
</ask>

<ask name="elements">
**Elements and Selectors**

What elements need ScrollTrigger animations?
- Specific selectors (e.g., ".feature-card", "#hero-image")
- How many elements?
- Any nesting/grouping?

Example: "3 feature cards (.feature-card), hero image (#hero)"
</ask>

<ask name="trigger_points">
**Trigger Points**

When should animations activate?

Common patterns:
- `start: "top 80%"` - Trigger when element top hits 80% down viewport
- `start: "top center"` - Trigger at center
- `start: "top top"` - Trigger when element reaches viewport top

Any custom trigger points? Or use defaults?
</ask>

<ask name="animation_details">
**Animation Details**

Visual effects for each element:
- Fade in? (opacity: 0 → 1)
- Slide in? (x or y movement)
- Scale? (size changes)
- Rotate? (rotation effects)
- Parallax speed? (if parallax: 0.5 = half speed)

Example: "Cards fade up (y: 100, opacity: 0 → normal), parallax image at 0.3 speed"
</ask>

<ask name="scrub_options">
**Scrub Options** (if scrubbed animation)

If animation is scrubbed (tied to scroll):
- Smooth scrub? (scrub: 1 = smooth, scrub: true = instant)
- Pin during scrub? (pin element while animating)
- Markers for debugging? (show trigger points)

Example: "Smooth scrub (scrub: 1), pin hero section"
</ask>

<ask name="framework">
**Framework Context**

Development environment:
- React with useGSAP?
- Next.js (which version)?
- Vue?
- Vanilla JavaScript?

Example: "React 18, TypeScript"
</ask>

---

## Step 2: Research Gate (MANDATORY - Cannot Proceed Without)

**⚠️ RESEARCH ENFORCEMENT:**
This is a MANDATORY blocking checkpoint. You CANNOT proceed to Step 3 until this research is COMPLETE.

**Research Protocol:** Systematic ScrollTrigger pattern analysis

### Phase 1: Archon KB - ScrollTrigger Code Examples (PRIMARY)

Required Archon Queries (ALL MUST BE EXECUTED):

#### Query 1: Effect-Specific Patterns
```javascript
rag_search_code_examples("ScrollTrigger {effect_type}")
```
**Effect type examples:** "reveal", "parallax", "scrub", "pin", "horizontal scroll"
**Purpose:** Find proven implementations of this specific scroll effect
**Document:** What ScrollTrigger configurations work best for this effect?

#### Query 2: Scroll Reveal Patterns (if reveal effect)
```javascript
rag_search_code_examples("ScrollTrigger reveal stagger")
```
**Purpose:** Find stagger patterns for revealing multiple elements
**Document:** Stagger configurations, trigger point strategies

#### Query 3: Parallax Implementations (if parallax)
```javascript
rag_search_knowledge_base("parallax ScrollTrigger multi-layer")
```
**Purpose:** Learn multi-layer parallax coordination patterns
**Document:** Speed ratios, depth strategies, performance considerations

#### Query 4: Pin and Scrub Patterns (if pinning or scrubbing)
```javascript
rag_search_code_examples("ScrollTrigger pin scrub")
```
**Purpose:** Find pinned section + scrubbed animation patterns
**Document:** Pin configurations, scrub smoothness options

#### Query 5: ScrollTrigger Best Practices
```javascript
rag_search_knowledge_base("ScrollTrigger performance optimization")
```
**Purpose:** Performance, refresh strategies, common pitfalls
**Document:** Will() optimization, refresh() usage, cleanup patterns

### Phase 2: Deep-Research - ScrollTrigger Frameworks (PRIMARY)

Apply systematic frameworks from Deep-Research:

#### Section 3.2: Scroll-Based Reveals (if reveal effect)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/3-2-Scroll-Based-Reveals.md`

**Extract:**
- Trigger point strategies (when to activate)
- Start/end position configurations
- Stagger patterns for multiple elements
- Easing choices for organic reveals
- Mobile considerations (viewport differences)

**Document:** Which trigger strategies fit this use case?

#### Section 3.3: Parallax and Depth Effects (if parallax or pin)
**Location:** `/docs/Deep-Research/GSAP-Animation-Masty/3-3-Parallax-and-Depth-Effects.md`

**Extract:**
- Multi-layer parallax coordination
- Speed ratio calculations (0.5 = half speed, etc.)
- Pin configurations (pin: true, pinSpacing options)
- Scrub smoothness (scrub: 1, scrub: true)
- Anticipate and overflow techniques

**Document:** Parallax speed ratios, pin strategies

#### Section 3.7: Cleanup and Reinitialization (Lifecycle)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/3-7-Cleanup-and-Reinitialization.md`

**Extract:**
- ScrollTrigger cleanup strategies (kill vs revert)
- ScrollTrigger.refresh() usage
- Resize handling patterns
- Memory management

**Document:** How should ScrollTriggers be cleaned up?

### Phase 3: Framework Integration (if applicable)

#### If React or Next.js:

**Section 2.5: React/Next.js Integration**

Required Archon Query:
```javascript
rag_search_code_examples("useGSAP ScrollTrigger {framework}")
```

**Extract:**
- useGSAP with ScrollTrigger patterns
- ScrollTrigger.refresh() on layout changes
- Cleanup on component unmount
- SSR considerations (Next.js - register plugin client-side only)

**Document:** React/Next.js ScrollTrigger lifecycle integration

### Phase 4: Research Documentation

Create "Research Findings" section:

1. **ScrollTrigger Patterns Found**
   - Which KB examples are most relevant?
   - Trigger point configurations
   - Scrub/pin strategies

2. **Deep-Research Applications**
   - Section 3.2 reveal strategies (if reveal)
   - Section 3.3 parallax/pin patterns (if parallax/pin)
   - Section 3.7 cleanup approach

3. **Framework Integration**
   - useGSAP + ScrollTrigger pattern (React)
   - Cleanup strategy

4. **Performance Considerations**
   - will() optimization
   - Refresh strategies
   - Mobile viewport handling

**Research Quality Gate:** You must have documented findings from ALL required queries before proceeding.

---

## Step 3: Effect Configuration

Based on research, configure the specific ScrollTrigger effect.

### ScrollTrigger Configuration Patterns

#### Pattern A: Simple Reveal (Fade In on Scroll)
```javascript
gsap.from(".element", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".element",
    start: "top 80%",  // Trigger when element top hits 80% down viewport
    end: "top 50%",     // Animation completes at 50%
    toggleActions: "play none none none"  // Play once, no reverse
  }
})
```

#### Pattern B: Staggered Reveals (Multiple Elements)
```javascript
gsap.from(".feature-card", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".feature-section",  // Container triggers all cards
    start: "top 80%"
  }
})
```

#### Pattern C: Parallax Effect (Multi-Layer Depth)
```javascript
// Background layer (slow)
gsap.to(".bg-layer", {
  y: () => window.innerHeight * 0.5,  // Move 50% of viewport height
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top top",
    end: "bottom top",
    scrub: true  // Tied to scroll position
  }
})

// Foreground layer (fast)
gsap.to(".fg-layer", {
  y: () => window.innerHeight * -0.3,  // Move -30% (opposite direction)
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
})
```

#### Pattern D: Pinned Section with Scrubbed Animation
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "+=2000",  // Pin for 2000px of scroll
    scrub: 1,       // Smooth scrubbing (1 second catch-up)
    pin: true,      // Pin element during scroll
    anticipatePin: 1
  }
})

tl.to(".content", { opacity: 1, duration: 1 })
  .to(".content", { scale: 1.2, duration: 1 })
  .to(".content", { opacity: 0, duration: 1 })
```

#### Pattern E: Horizontal Scroll
```javascript
const sections = gsap.utils.toArray(".panel")

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),  // Move all panels left
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
})
```

**Document:** Which pattern(s) fit the requirements?

---

## Step 4: Framework Integration

Apply framework-specific patterns.

### React/Next.js Pattern

```typescript
'use client'  // Next.js 15: Client component

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)  // Register on client-side

export default function Component() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".element", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".element",
        start: "top 80%"
      }
    })

    // Cleanup: ScrollTriggers killed automatically by useGSAP
  }, { scope: container })

  return <div ref={container}>...</div>
}
```

**Key Points:**
- Register ScrollTrigger plugin
- Use `'use client'` for Next.js 15
- useGSAP automatically kills ScrollTriggers on unmount
- Use scope for context-safe selectors

### Vanilla JavaScript Pattern

```javascript
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Create ScrollTrigger animation
gsap.from(".element", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".element",
    start: "top 80%"
  }
})

// Cleanup when needed
// ScrollTrigger.getAll().forEach(st => st.kill())
```

---

## Step 5: Implementation - Generate Code

Generate production-ready ScrollTrigger code.

### Code Quality Requirements

**Must Include:**
- ScrollTrigger plugin registration
- Proper trigger/start/end configurations
- KB pattern citations (inline comments)
- Framework integration (if applicable)
- Cleanup handlers
- Performance optimizations (will(), refresh())
- Mobile viewport considerations

**Example Comment:**
```javascript
// Pattern from Archon: Codrops parallax tutorial (src: 1e5cc3bd5125be3c)
// Using Section 3.3 multi-layer depth technique (speed ratio: 0.5 for background)
```

---

## Step 6: Testing Guidance

Provide ScrollTrigger-specific validation checklist.

### Testing Checklist

**Functional Tests:**
- [ ] ScrollTrigger activates at correct scroll position
- [ ] Animation plays as expected
- [ ] Trigger points match requirements (start/end)
- [ ] Scrubbing feels smooth (if scrubbed)
- [ ] Pinning works correctly (if pinned)

**Performance Tests:**
- [ ] Smooth 60fps scrolling (no jank)
- [ ] will-change optimization applied (if needed)
- [ ] No console errors
- [ ] Memory cleanup works (no lingering ScrollTriggers)

**Responsive Tests:**
- [ ] Works on desktop (large viewport)
- [ ] Works on tablet (medium viewport)
- [ ] Works on mobile (small viewport)
- [ ] Trigger points adjust for different viewports

**Cross-Browser:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (WebKit ScrollTrigger compatibility)

### Common Issues & Solutions

**Issue: ScrollTrigger doesn't activate**
- Solution: Check element exists when ScrollTrigger created
- Solution: Call `ScrollTrigger.refresh()` after DOM changes

**Issue: Choppy scrolling**
- Solution: Add `will-change: transform` to animated elements
- Solution: Use `scrub: 1` for smoothness
- Solution: Reduce animation complexity

**Issue: Wrong trigger points**
- Solution: Use `markers: true` for debugging
- Solution: Adjust start/end values
- Solution: Account for viewport differences (mobile vs desktop)

**Issue: Memory leaks in React**
- Solution: Ensure useGSAP kills ScrollTriggers on unmount
- Solution: Verify no orphaned ScrollTriggers (`ScrollTrigger.getAll()`)

---

## Step 7: Output Delivery

### Final Deliverables

**1. Production-Ready Code**
- Complete ScrollTrigger implementation
- Framework-integrated (if applicable)
- Comments and KB citations

**2. Research Citations**

```markdown
## Research Citations

**Archon Knowledge Base:**
- [Pattern] from [Source] (src: [source_id])

**Deep-Research Frameworks:**
- Section 3.2: [Reveal strategy]
- Section 3.3: [Parallax/pin technique]
- Section 3.7: [Cleanup approach]
```

**3. Testing Checklist**

**4. Performance Notes**
- will-change usage
- Refresh strategies
- Mobile optimizations

---

## Success Criteria

ScrollTrigger implementation is complete when:

- ✅ All research queries executed
- ✅ ScrollTrigger configuration justified with KB citations
- ✅ Production-ready code generated
- ✅ Framework integration correct
- ✅ Performance optimizations applied
- ✅ Testing checklist provided
- ✅ Research citations included

---

**Workflow Complete** ✨
```

---

### Agent Menu Update

**BEFORE (Current - Lines 1066-1101):**
```xml
<item cmd="*scroll" action="inline">Add ScrollTrigger-based animation

✨ **ScrollTrigger Magic**

[... 36 lines of embedded content ...]

*"ScrollTrigger is my favorite plugin. So much power."*
</item>
```

**AFTER (Workflow Reference):**
```xml
<item cmd="*scroll" workflow="{module_root}/workflows/create-scroll-animation/workflow.yaml">
  Create sophisticated ScrollTrigger animations using KB-powered pattern matching
</item>
```

**Line Savings:** 36 lines → 2 lines (94% reduction in agent file)

---

### Testing Protocol

#### Test 1: Simple Scroll Reveal
**Scenario:** User requests fade-in reveals for 3 feature cards

**Expected Behavior:**
1. ✅ Research finds ScrollTrigger reveal patterns
2. ✅ Deep-Research Section 3.2 applied (scroll reveals)
3. ✅ Stagger configuration from KB research
4. ✅ Code includes proper trigger points
5. ✅ Testing checklist for responsive behavior

**Success Criteria:**
- Cards reveal at correct scroll position
- Stagger timing feels natural
- KB citations present

#### Test 2: Parallax Effect
**Scenario:** User requests multi-layer parallax on hero section

**Expected Behavior:**
1. ✅ Research finds parallax patterns (Section 3.3)
2. ✅ Speed ratios backed by KB research
3. ✅ Scrub configuration implemented (scrub: true)
4. ✅ Performance optimizations (will-change)

**Success Criteria:**
- Parallax creates depth illusion
- Smooth scrubbing (60fps)
- Different layers move at different speeds

#### Test 3: Pinned Section with Scrub
**Scenario:** User requests pinned storytelling section

**Expected Behavior:**
1. ✅ Research finds pin + scrub patterns
2. ✅ Timeline coordinated with ScrollTrigger
3. ✅ anticipatePin: 1 applied (from KB)
4. ✅ End calculation correct (+=2000 or dynamic)

**Success Criteria:**
- Section pins during scroll
- Animation scrubs smoothly with scroll
- No layout jump on pin

#### Test 4: React Integration
**Scenario:** User requests ScrollTrigger in Next.js 15

**Expected Behavior:**
1. ✅ Plugin registered client-side
2. ✅ useGSAP hook with ScrollTrigger
3. ✅ `'use client'` directive added
4. ✅ Cleanup handled automatically

**Success Criteria:**
- No SSR errors
- ScrollTriggers killed on unmount
- No memory leaks

#### Test 5: Research Gate Enforcement
**Scenario:** Attempt to skip research

**Expected Behavior:**
1. ❌ Cannot proceed past Step 2 without research
2. ✅ All ScrollTrigger patterns must be researched

**Success Criteria:**
- Research cannot be skipped
- All outputs cite KB sources

---

## WORKFLOW 3: `*physics` → `create-physics-animation/`

**Priority:** P2 (Premium Feature - Physics-based animations)
**Complexity:** Medium
**Research Intensity:** Medium-High

### Current State (Extraction)

**Location:** Lines 1102-1141 in `/bmad/gsap-excellence/agents/gsap-vfx.md`

**Complete Inline Action:**

```xml
<item cmd="*physics" action="inline">Implement physics-based animations

✨ **Physics-Based Motion**

Real-world physics makes animations feel alive and premium.

**Using GSAP for Physics:**

**1. Spring Physics**
```javascript
gsap.to(element, {
  x: 500,
  ease: "elastic.out(1, 0.3)",  // Spring-like bounce
  duration: 2
})
```

**2. Momentum/Inertia (with Draggable)**
- Drag elements with throw
- Natural deceleration
- Boundary collision

**3. Gravity Effects**
- Custom ease functions
- Acceleration curves
- Bounce on impact

**4. Custom Physics with gsap.ticker**
- Frame-by-frame updates
- Velocity and acceleration
- Forces and damping

What kind of physics motion do you need?
- Springs and elasticity?
- Drag-and-throw interactions?
- Gravity and falling?
- Custom physics simulation?

*"Physics makes it feel real. Real feels premium."*
</item>
```

**Line Count:** 40 lines

---

### Target Workflow Structure

**Workflow Name:** `create-physics-animation`
**Directory:** `/bmad/gsap-excellence/workflows/create-physics-animation/`

**Files to Create:**
1. `workflow.yaml` - Workflow configuration
2. `instructions.md` - Physics implementation with KB research
3. `template.md` - N/A (generates code directly)

---

### Complete workflow.yaml

```yaml
# Physics Animation Workflow
# VFX - KB-powered physics-based animation implementation

name: 'create-physics-animation'
description: 'Create realistic physics-based animations using KB-powered pattern matching: springs, elasticity, drag-and-throw, gravity effects, and custom physics simulations'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/create-physics-animation'
instructions: '{installed_path}/instructions.md'
template: null
default_output_file: null

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from VFX agent menu)

metadata:
  agent: 'vfx'
  priority: 'P2'
  complexity: 'medium'
  research_intensity: 'medium-high'
  estimated_duration: '10-15 minutes'
  output_type: 'code'

required_mcp:
  - archon  # PRIMARY - Physics animation patterns
  - context7  # Draggable/Inertia API docs

deep_research_sections:
  - '2.3'  # Tweens and Staggers (easing fundamentals)
  - '5.2'  # Advanced Easing (custom ease, physics curves)

archon_sources:
  - 'b9f6b322298feb21'  # gsap.com docs
  - 'physics-patterns'    # Physics animation library

# Physics Types
physics_types:
  - 'spring'      # elastic.out, back.out easing
  - 'inertia'     # Draggable with throw
  - 'gravity'     # Acceleration, bounce on land
  - 'custom'      # gsap.ticker frame-by-frame
```

---

### Complete instructions.md (Condensed)

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-physics-animation/workflow.yaml</critical>

# Physics Animation - Implementation Workflow

Create realistic physics-based animations using GSAP easing, Draggable plugin, or custom physics simulations.

## Step 1: Context Gathering

<ask name="physics_type">
**Physics Type**

1. **Spring/Elastic** - Bouncy, spring-like motion (elastic.out, back.out)
2. **Drag-and-Throw** - Draggable elements with momentum (requires Draggable plugin)
3. **Gravity/Falling** - Acceleration and bounce effects (custom ease or ticker)
4. **Custom Physics** - Frame-by-frame simulation with velocity/forces

Which physics type?
</ask>

<ask name="elements">
**Elements to Animate**
What elements need physics behavior? Selectors?
</ask>

<ask name="parameters">
**Physics Parameters**
- Spring strength/bounce amount?
- Throw velocity/boundaries (if drag)?
- Gravity strength/bounce coefficient?
- Damping/friction values?
</ask>

---

## Step 2: Research Gate (MANDATORY)

### Phase 1: Archon KB - Physics Patterns

Required Queries:

1. `rag_search_code_examples("physics animation {physics_type}")`
   - Find proven physics implementations

2. `rag_search_code_examples("elastic bounce {element_type}")`
   - Spring/elastic patterns

3. `rag_search_knowledge_base("Draggable throw inertia")` (if drag-and-throw)
   - Draggable plugin patterns

4. `rag_search_code_examples("custom physics gsap ticker")`  (if custom)
   - Frame-by-frame physics simulations

### Phase 2: Deep-Research

**Section 5.2: Advanced Easing**
- Custom ease functions for physics curves
- Acceleration/deceleration patterns
- Bounce and overshoot techniques

**Section 2.3: Tweens and Staggers**
- Easing fundamentals (elastic, back, bounce)
- Duration calculations for realistic motion

---

## Step 3: Physics Implementation

### Pattern A: Spring/Elastic Motion
```javascript
// Elastic bounce (spring physics)
gsap.to(element, {
  x: 500,
  ease: "elastic.out(1, 0.3)",  // strength: 1, oscillations: 0.3
  duration: 2
})

// Back ease (anticipation + overshoot)
gsap.to(element, {
  x: 500,
  ease: "back.out(1.7)",  // overshoot amount
  duration: 1.5
})
```

### Pattern B: Drag-and-Throw (Draggable + Inertia)
```javascript
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin)

Draggable.create(".element", {
  type: "x,y",
  inertia: true,  // Enable momentum/throw
  bounds: ".container",  // Constrain to container
  onDragEnd: function() {
    console.log("Thrown with velocity:", this.getVelocity())
  }
})
```

**Note:** InertiaPlugin is **FREE in GSAP 3.13+**!

### Pattern C: Gravity/Falling Effect
```javascript
// Gravity simulation with bounce
gsap.to(element, {
  y: 500,
  ease: "power2.in",  // Acceleration (gravity)
  duration: 1,
  onComplete: () => {
    // Bounce on landing
    gsap.to(element, {
      y: 450,  // Bounce height
      ease: "bounce.out",
      duration: 0.5
    })
  }
})
```

### Pattern D: Custom Physics (gsap.ticker)
```javascript
let velocity = 0
const gravity = 0.5
const damping = 0.95

gsap.ticker.add(() => {
  velocity += gravity  // Apply gravity
  element.y += velocity  // Update position
  velocity *= damping  // Apply damping

  // Bounce on ground
  if (element.y >= 500) {
    element.y = 500
    velocity *= -0.7  // Bounce (70% energy retained)
  }
})
```

---

## Step 4: Output - Production Code

Generate physics animation code with:
- KB pattern citations
- Plugin registration (if Draggable/Inertia)
- Parameter tuning guidance
- Performance notes
- Testing checklist

## Success Criteria

- ✅ Research queries executed
- ✅ Physics patterns cited from KB
- ✅ Code feels realistic (not robotic)
- ✅ Performance optimized
- ✅ Plugin requirements documented
```

---

### Agent Menu Update

**BEFORE:** 40 lines (1102-1141)
**AFTER:** 2 lines (workflow reference)
**Line Savings:** 95% reduction

---

## WORKFLOW 4: `*morph` → `create-morph-animation/`

**Priority:** P2 (Premium Feature - SVG morphing)
**Complexity:** Medium
**Research Intensity:** Medium

### Current State (Extraction)

**Location:** Lines 1142-1171 in `/bmad/gsap-excellence/agents/gsap-vfx.md`

**Complete Inline Action:**

```xml
<item cmd="*morph" action="inline">Create SVG morphing animations

✨ **SVG Shape Morphing**

MorphSVG is a premium plugin that creates liquid, organic transitions.

**Requirements:**
- MorphSVG plugin (Club GreenSock)
- SVG path elements
- Similar point counts for smooth morphs

**What I Can Create:**
1. **Icon Morphing** - Menu to X, play to pause
2. **Shape Transitions** - Circle to square to star
3. **Liquid Effects** - Blob morphing
4. **Text Effects** - Letters morphing into shapes

**Example:**
```javascript
gsap.to("#shape1", {
  morphSVG: "#shape2",
  duration: 1,
  ease: "power2.inOut"
})
```

Do you have Club GreenSock access? If so, describe the morphing effect you want.

*"Morphing is where web animation gets truly cinematic."*
</item>
```

**Line Count:** 30 lines

---

### Target Workflow Structure

**Workflow Name:** `create-morph-animation`
**Directory:** `/bmad/gsap-excellence/workflows/create-morph-animation/`

---

### Complete workflow.yaml

```yaml
# SVG Morph Animation Workflow
# VFX - MorphSVG plugin implementation with KB patterns

name: 'create-morph-animation'
description: 'Create liquid SVG shape morphing animations using MorphSVG plugin (FREE in GSAP 3.13+) with KB-powered pattern matching'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/create-morph-animation'
instructions: '{installed_path}/instructions.md'
template: null
default_output_file: null

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from VFX agent menu)

metadata:
  agent: 'vfx'
  priority: 'P2'
  complexity: 'medium'
  research_intensity: 'medium'
  estimated_duration: '10-15 minutes'
  output_type: 'code'

required_mcp:
  - archon  # MorphSVG examples
  - context7  # MorphSVG API docs

deep_research_sections:
  - '4.3'  # SVG Animation Techniques (if exists)

# IMPORTANT: MorphSVG is FREE in GSAP 3.13+
plugin_status:
  name: 'MorphSVG'
  availability: 'FREE in GSAP 3.13+'
  reference: 'https://gsap.com/blog/gsap-3-13-0-release'

# Morph Types
morph_types:
  - 'icon'     # Menu to X, play to pause
  - 'shape'    # Circle to square, geometric transitions
  - 'blob'     # Organic, liquid morphing
  - 'text'     # Letters to shapes
```

---

### Complete instructions.md (Condensed)

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-morph-animation/workflow.yaml</critical>

# SVG Morph Animation - Implementation Workflow

Create liquid SVG shape morphing using MorphSVG plugin (**FREE in GSAP 3.13+**).

## Step 1: Context Gathering

<ask name="morph_type">
**Morph Type**
1. Icon morphing (menu → X, play → pause)
2. Shape transitions (circle → square → star)
3. Blob/liquid effects (organic morphing)
4. Text to shape morphing

Which type?
</ask>

<ask name="svg_elements">
**SVG Elements**
- Path IDs or selectors?
- How many shapes in sequence?
- SVG inline or external file?
</ask>

---

## Step 2: Research Gate (MANDATORY)

### Archon KB Queries

1. `rag_search_code_examples("MorphSVG {morph_type}")`
   - Find proven MorphSVG implementations

2. `rag_search_knowledge_base("MorphSVG point optimization")`
   - Learn point-matching techniques

3. `rag_search_code_examples("SVG path morphing sequence")`
   - Multi-shape morph patterns

**CRITICAL REMINDER:** MorphSVG is **FREE in GSAP 3.13+**!
Reference: https://gsap.com/blog/gsap-3-13-0-release

---

## Step 3: MorphSVG Implementation

### Pattern A: Simple Icon Morph
```javascript
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

// Menu to X icon
gsap.to("#menu-icon", {
  morphSVG: "#x-icon",
  duration: 0.4,
  ease: "power2.inOut"
})
```

### Pattern B: Shape Sequence
```javascript
const tl = gsap.timeline()

tl.to("#shape", { morphSVG: "#circle", duration: 1 })
  .to("#shape", { morphSVG: "#square", duration: 1 })
  .to("#shape", { morphSVG: "#star", duration: 1 })
```

### Pattern C: Blob Morphing (Organic)
```javascript
gsap.to("#blob", {
  morphSVG: {
    shape: "#target-blob",
    shapeIndex: "auto"  // Auto-optimize point matching
  },
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
})
```

### SVG Requirements
- Path elements (not shapes - convert circles/rects to paths)
- Similar point counts for smoothest morphs
- Use `convertToPath()` if needed

---

## Step 4: Output

Generate MorphSVG code with:
- Plugin registration and import
- **Emphasis: FREE in GSAP 3.13+**
- Path optimization tips
- KB pattern citations
- Testing checklist (smooth morphs, no distortion)

## Success Criteria

- ✅ MorphSVG patterns researched
- ✅ Code includes plugin registration
- ✅ User informed about FREE availability (3.13+)
- ✅ Path optimization documented
```

---

### Agent Menu Update

**BEFORE:** 30 lines (1142-1171)
**AFTER:** 2 lines (workflow reference)
**Line Savings:** 93% reduction

---

## WORKFLOW 5: `*text` → `create-text-animation/`

**Priority:** P2 (Premium Feature - Advanced text animations)
**Complexity:** Medium
**Research Intensity:** Medium

### Current State (Extraction)

**Location:** Lines 1172-1209 in `/bmad/gsap-excellence/agents/gsap-vfx.md`

**Complete Inline Action:**

```xml
<item cmd="*text" action="inline">Advanced text animations with SplitText

✨ **Text Animation Magic**

SplitText plugin splits text into animatable pieces.

**What I Can Build:**

**1. Character-by-Character**
```javascript
const split = new SplitText(title, { type: "chars" })
gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  stagger: 0.05,
  ease: "back.out(1.7)"
})
```

**2. Word Reveals**
- Slide words in from sides
- Fade up with stagger
- Scale or rotate each word

**3. Line-by-Line**
- Typewriter effects
- Slide-up reveals
- Mask wipe reveals

**4. Advanced Effects**
- Scramble text (custom)
- Wave/ripple through text
- 3D rotation per character

What text element needs animation?

*"Text animation is an art. Let's make it cinematic."*
</item>
```

**Line Count:** 38 lines

---

### Target Workflow Structure

**Workflow Name:** `create-text-animation`
**Directory:** `/bmad/gsap-excellence/workflows/create-text-animation/`

---

### Complete workflow.yaml

```yaml
# Text Animation Workflow
# VFX - SplitText plugin implementation with KB patterns

name: 'create-text-animation'
description: 'Create sophisticated text animations using SplitText plugin (FREE in GSAP 3.13+) with KB-powered pattern matching: char-by-char, word reveals, line animations, advanced effects'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/create-text-animation'
instructions: '{installed_path}/instructions.md'
template: null
default_output_file: null

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from VFX agent menu)

metadata:
  agent: 'vfx'
  priority: 'P2'
  complexity: 'medium'
  research_intensity: 'medium'
  estimated_duration: '10-15 minutes'
  output_type: 'code'

required_mcp:
  - archon  # SplitText examples
  - context7  # SplitText API docs

deep_research_sections:
  - '2.3'  # Tweens and Staggers (stagger fundamentals)
  - '4.4'  # Text Animation Patterns (if exists)

# IMPORTANT: SplitText is FREE in GSAP 3.13+
plugin_status:
  name: 'SplitText'
  availability: 'FREE in GSAP 3.13+'
  reference: 'https://gsap.com/blog/gsap-3-13-0-release'

# Text Animation Types
animation_types:
  - 'chars'    # Character-by-character animations
  - 'words'    # Word-by-word reveals
  - 'lines'    # Line-by-line animations
  - 'advanced' # Scramble, wave, 3D rotation
```

---

### Complete instructions.md (Condensed)

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-text-animation/workflow.yaml</critical>

# Text Animation - Implementation Workflow

Create sophisticated text animations using SplitText plugin (**FREE in GSAP 3.13+**).

## Step 1: Context Gathering

<ask name="animation_type">
**Text Animation Type**
1. Character-by-character (letter reveals with stagger)
2. Word-by-word (word reveals, sliding, fading)
3. Line-by-line (typewriter, slide-up reveals)
4. Advanced effects (scramble, wave, 3D rotation per char)

Which type?
</ask>

<ask name="text_element">
**Text Element**
- Selector? (e.g., ".hero-title", "h1")
- Text content?
- Multiple text elements?
</ask>

<ask name="animation_details">
**Animation Style**
- Fade in? Slide in? Scale in? Rotate in?
- Stagger amount between chars/words/lines?
- Easing preference (back, elastic, power)?
</ask>

---

## Step 2: Research Gate (MANDATORY)

### Archon KB Queries

1. `rag_search_code_examples("SplitText {animation_type}")`
   - Find proven SplitText implementations

2. `rag_search_code_examples("text animation stagger")`
   - Stagger patterns for text reveals

3. `rag_search_knowledge_base("SplitText performance optimization")`
   - Cleanup, revert strategies

**CRITICAL REMINDER:** SplitText is **FREE in GSAP 3.13+**!
Reference: https://gsap.com/blog/gsap-3-13-0-release

---

## Step 3: SplitText Implementation

### Pattern A: Character Animation
```javascript
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const split = new SplitText(".title", { type: "chars" })

gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  rotateX: -90,
  stagger: 0.02,  // 20ms delay between chars
  ease: "back.out(1.7)",
  duration: 0.8
})

// Cleanup
// split.revert()  // Restore original text
```

### Pattern B: Word Reveals
```javascript
const split = new SplitText(".headline", { type: "words" })

gsap.from(split.words, {
  opacity: 0,
  x: -50,
  stagger: 0.1,  // 100ms between words
  ease: "power2.out",
  duration: 0.6
})
```

### Pattern C: Line-by-Line
```javascript
const split = new SplitText(".paragraph", { type: "lines" })

gsap.from(split.lines, {
  opacity: 0,
  y: 20,
  stagger: 0.15,
  ease: "power1.out",
  duration: 0.5
})
```

### Pattern D: Advanced - Scramble Effect
```javascript
const split = new SplitText(".title", { type: "chars" })
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

split.chars.forEach((char, i) => {
  gsap.fromTo(char,
    { innerText: () => chars[Math.floor(Math.random() * chars.length)] },
    {
      innerText: char.innerText,
      duration: 0.5,
      delay: i * 0.03,
      ease: "none",
      snap: { innerText: 1 }  // Snap to whole chars
    }
  )
})
```

### Pattern E: 3D Rotation Per Character
```javascript
const split = new SplitText(".title", { type: "chars" })

gsap.from(split.chars, {
  rotationY: -180,
  opacity: 0,
  transformOrigin: "center center",
  stagger: 0.05,
  ease: "back.out(1.7)",
  duration: 1
})
```

### Cleanup Best Practices
```javascript
// Always revert SplitText when done (restores original DOM)
split.revert()

// Or in React useGSAP cleanup:
return () => {
  split?.revert()
}
```

---

## Step 4: Output

Generate SplitText animation code with:
- Plugin registration
- **Emphasis: FREE in GSAP 3.13+**
- Split type configuration (chars/words/lines)
- Stagger patterns from KB research
- Cleanup strategy (revert())
- KB citations
- Testing checklist

## Success Criteria

- ✅ SplitText patterns researched
- ✅ Plugin registered correctly
- ✅ User informed about FREE availability (3.13+)
- ✅ Cleanup strategy documented (revert())
- ✅ Stagger timing feels natural
```

---

### Agent Menu Update

**BEFORE:** 38 lines (1172-1209)
**AFTER:** 2 lines (workflow reference)
**Line Savings:** 95% reduction

---

## VFX - Complete Conversion Summary

### Conversion Impact

**Agent File Reduction:**
- **Before**: 1,339 lines (includes 209 lines inline actions)
- **After**: 1,140 lines (209 lines → 10 lines workflow references)
- **Reduction**: 199 lines (14.9% smaller agent file)

**Workflows Created:** 5 (2 P1, 3 P2)

| Workflow | Priority | Lines | Complexity | Research Intensity |
|----------|----------|-------|------------|-------------------|
| create-timeline | P1 | 65 → ~1,200 | High | High |
| create-scroll-animation | P1 | 36 → ~900 | Medium-High | High |
| create-physics-animation | P2 | 40 → ~500 | Medium | Medium-High |
| create-morph-animation | P2 | 30 → ~450 | Medium | Medium |
| create-text-animation | P2 | 38 → ~500 | Medium | Medium |
| **TOTAL** | - | **209 → 10** | - | - |

**Token Efficiency Math:**

**Scenario 1: Activate VFX agent, browse menu (don't use workflows)**
- Before: 1,339 lines (loads all 209 lines of inline actions)
- After: 1,140 lines (just workflow references)
- **Savings**: 199 lines (14.9% reduction) ← **Primary Win**

**Scenario 2: Use create-timeline workflow**
- Before: 1,339 lines (agent with inline *timeline)
- After: 1,140 lines (agent) + ~1,200 lines (timeline workflow) = 2,340 lines
- **Cost**: +1,001 lines
- **Value**: 65-line inline action → 1,200-line comprehensive workflow with:
  - MANDATORY research gates (Archon + Deep-Research Sections 2.2, 2.3, 3.1, 3.7)
  - Framework integration (React/Next.js/Vue)
  - Timeline lifecycle management
  - Production-ready code with KB citations

**Scenario 3: Use create-scroll-animation workflow**
- Before: 1,339 lines
- After: 1,140 + ~900 = 2,040 lines
- **Cost**: +701 lines
- **Value**: ScrollTrigger mastery (Sections 3.2, 3.3) with reveal/parallax/pin patterns

**Key Insight:** The 5 workflows convert 209 lines of "compact inline instructions" into ~3,550 lines of "comprehensive research-backed workflows". That's a **17x expansion in detail/quality**.

**Philosophy:** For P1/P2 workflows, systematic KB research + comprehensive outputs > token savings.

---

### Premium Plugin Emphasis (GSAP 3.13+)

**CRITICAL REMINDER:** The following premium plugins are now **FREE in GSAP 3.13+**:

- **MorphSVG** (Workflow 4) - SVG shape morphing
- **SplitText** (Workflow 5) - Text splitting for animation
- **DrawSVG** - SVG stroke drawing
- **ScrambleText** - Text scrambling effects
- **InertiaPlugin** (Workflow 3) - Drag-and-throw physics

**Reference:** https://gsap.com/blog/gsap-3-13-0-release

**Every workflow spec MUST emphasize this** - users often think these plugins are paid-only.

---

### Implementation Checklist

#### Phase 1: Create Workflow Directories

```bash
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows

mkdir -p create-timeline
mkdir -p create-scroll-animation
mkdir -p create-physics-animation
mkdir -p create-morph-animation
mkdir -p create-text-animation
```

**Verify:**
```bash
ls -la /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/
# Should show 5 new directories
```

---

#### Phase 2: Create Workflow Files (Copy-Paste from Spec)

**For Each Workflow:**

1. **Copy workflow.yaml from spec** (search for `### Complete workflow.yaml`)
2. **Create file**: `workflows/{workflow-name}/workflow.yaml`
3. **Paste content** (exactly as specified)

4. **Copy instructions.md from spec** (search for `### Complete instructions.md`)
5. **Create file**: `workflows/{workflow-name}/instructions.md`
6. **Paste content** (exactly as specified)

7. **No template.md needed** - All VFX workflows generate code directly

**Example for create-timeline:**
```bash
# In /bmad/gsap-excellence/workflows/create-timeline/
touch workflow.yaml
touch instructions.md
# Copy-paste content from spec sections (lines 429-470, 476-735)
```

**Validation:**
```bash
# Each workflow directory should have:
ls create-timeline/
# workflow.yaml
# instructions.md
```

---

#### Phase 3: Update VFX Agent File

**Location:** `/bmad/gsap-excellence/agents/gsap-vfx.md`

**Changes Required:**

**Remove lines 1001-1209** (209 lines of inline actions):
- Lines 1001-1065: `*timeline` inline action (65 lines)
- Lines 1066-1101: `*scroll` inline action (36 lines)
- Lines 1102-1141: `*physics` inline action (40 lines)
- Lines 1142-1171: `*morph` inline action (30 lines)
- Lines 1172-1209: `*text` inline action (38 lines)

**Replace with 10 lines of workflow references:**

```xml
<item cmd="*timeline" workflow="{module_root}/workflows/create-timeline/workflow.yaml">
  Create sophisticated GSAP timeline choreography using KB-powered pattern matching
</item>

<item cmd="*scroll" workflow="{module_root}/workflows/create-scroll-animation/workflow.yaml">
  Create sophisticated ScrollTrigger animations using KB-powered pattern matching
</item>

<item cmd="*physics" workflow="{module_root}/workflows/create-physics-animation/workflow.yaml">
  Create realistic physics-based animations using KB-powered pattern matching
</item>

<item cmd="*morph" workflow="{module_root}/workflows/create-morph-animation/workflow.yaml">
  Create liquid SVG shape morphing using MorphSVG (FREE in GSAP 3.13+)
</item>

<item cmd="*text" workflow="{module_root}/workflows/create-text-animation/workflow.yaml">
  Create sophisticated text animations using SplitText (FREE in GSAP 3.13+)
</item>
```

**Validation:**
- Agent file should be ~199 lines smaller
- Menu should show 5 workflow-powered commands
- `action="inline"` should be gone for these 5 commands

---

#### Phase 4: Testing Protocol

**Test Each Workflow Systematically:**

**Test 1: Workflow Activation**
```bash
# Activate VFX agent
# Select *timeline command
# Expected: Workflow loads, shows Step 1 context gathering
```

**Test 2: Research Gate Enforcement (CRITICAL)**
```bash
# Try to skip Step 2 (research)
# Expected: System prevents proceeding to Step 3
# Required: All Archon queries must execute before continuing
```

**Test 3: Timeline Workflow (Full Test)**
- Context: "3 feature cards, sequential fade-in, React 18"
- Research: Verify Archon queries execute (`rag_search_code_examples("timeline choreography fade")`)
- Output: Production code with useGSAP hook, KB citations
- Validation: Code compiles, research citations present

**Test 4: ScrollTrigger Workflow**
- Context: "Parallax effect, 2 layers, hero section"
- Research: Section 3.3 (Parallax and Depth Effects) applied
- Output: Multi-layer parallax with scrub: true
- Validation: Smooth 60fps scrolling

**Test 5: Premium Plugin Workflows**
- MorphSVG workflow: Verify "FREE in GSAP 3.13+" emphasized
- SplitText workflow: Verify "FREE in GSAP 3.13+" emphasized
- Output must include plugin registration

**Test 6: Token Efficiency**
```bash
# Activate VFX agent without using workflows
# Measure token usage
# Expected: ~199 lines smaller than before (14.9% reduction)
```

---

#### Phase 5: Research Enforcement Validation (MANDATORY)

**This is the MOST CRITICAL validation** - Research gates must be mandatory.

**Test Protocol:**

1. **Activate any VFX workflow**
2. **Attempt to skip Step 2 (Research Gate)**
3. **Expected Behavior:**
   - ❌ System prevents proceeding to Step 3
   - ✅ Warning: "Research gate is MANDATORY - Cannot proceed without"
   - ✅ All Archon queries must execute before Step 3 unlocks

4. **Complete research properly**
5. **Verify output includes Research Citations section**
6. **Check KB sources are cited**

**Validation Checklist:**
- [ ] Research cannot be skipped (blocking checkpoint)
- [ ] All Archon queries execute (visible in output)
- [ ] Deep-Research sections referenced
- [ ] Output includes "Research Citations" section
- [ ] Code comments cite KB sources
- [ ] 100% research compliance across all workflows

**If research CAN be skipped:** Implementation has FAILED. Research gates are non-negotiable.

---

### Success Metrics

**Conversion is successful when:**

✅ **Agent File Updated:**
- 199 lines removed (inline actions)
- 10 lines added (workflow references)
- Agent file is 14.9% smaller

✅ **Workflows Created:**
- 5 workflow directories exist
- Each has workflow.yaml + instructions.md
- Total ~3,550 lines of comprehensive workflow content

✅ **Testing Passed:**
- All 5 workflows activate correctly
- Research gates are MANDATORY (cannot skip)
- Outputs include KB citations
- Premium plugins emphasized (FREE in 3.13+)

✅ **Token Efficiency:**
- Agent activation without workflows: ~199 lines saved
- Workflow activation: Comprehensive research-backed implementation (value > token cost)

✅ **Research Compliance:**
- 100% research enforcement
- All outputs cite Archon KB sources
- Deep-Research sections applied
- No guesswork in implementations

---

### Quality Assurance Checks

**Before marking VFX conversion complete:**

**1. File Structure:**
```bash
/bmad/gsap-excellence/workflows/
├── create-timeline/
│   ├── workflow.yaml
│   └── instructions.md
├── create-scroll-animation/
│   ├── workflow.yaml
│   └── instructions.md
├── create-physics-animation/
│   ├── workflow.yaml
│   └── instructions.md
├── create-morph-animation/
│   ├── workflow.yaml
│   └── instructions.md
└── create-text-animation/
    ├── workflow.yaml
    └── instructions.md
```

**2. Agent File:**
- Lines 1001-1209 removed (old inline actions)
- New workflow references added
- `action="inline"` gone for converted commands

**3. Workflow Content:**
- Each workflow.yaml has correct metadata
- Each instructions.md has MANDATORY research gate
- Deep-Research sections referenced correctly
- Archon queries specified

**4. Premium Plugin Emphasis:**
- MorphSVG workflow mentions "FREE in GSAP 3.13+"
- SplitText workflow mentions "FREE in GSAP 3.13+"
- InertiaPlugin (physics workflow) mentions "FREE in GSAP 3.13+"

**5. Research Enforcement:**
- Research gates are blocking checkpoints
- Cannot skip Step 2 in any workflow
- All outputs require research citations

---

### Next Steps After VFX Conversion

**Remaining Agent Specs:**

1. **EDITOR-WORKFLOW-CONVERSION-SPEC.md** (Next Priority)
   - 1 workflow to specify (`*analyze` → analyze-animation/)
   - Estimated: 30 minutes, ~1,200 lines
   - Quickest remaining spec (only 1 workflow)

2. **TECH-DIRECTOR-WORKFLOW-CONVERSION-SPEC.md**
   - 3 workflows (validate, optimize, ship-ready)
   - Estimated: 45 minutes, ~2,000 lines
   - Chrome DevTools MCP integration

**After All Specs Complete:**
- Implementation phase (8-12 hours)
- Create all workflows from copy-paste specs
- Test research enforcement thoroughly
- Validate token efficiency gains

---

## Document Status

**Status:** ✅ COMPLETE SPECIFICATION - Ready for implementation

**Created:** 2025-11-06

**Completion:**
- Executive Summary: ✅
- Conversion Table: ✅
- Workflow 1 (timeline): ✅
- Workflow 2 (scroll): ✅
- Workflow 3 (physics): ✅
- Workflow 4 (morph): ✅
- Workflow 5 (text): ✅
- Summary & Implementation Guide: ✅

**Workflows Specified:** 5 of 5 (100%)
**Document Length:** ~2,430 lines
**Implementation Time:** ~90 minutes (5 workflows × ~18 min average)

---

**READY FOR IMPLEMENTATION** ✅

