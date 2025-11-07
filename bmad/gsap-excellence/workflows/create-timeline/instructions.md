<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-timeline/workflow.yaml</critical>

# Timeline Choreography - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-timeline
**Purpose:** Create sophisticated GSAP timeline choreography using KB-powered pattern matching

---

## Overview

This workflow creates production-ready GSAP timeline implementations by systematically researching proven patterns from the Archon knowledge base (91 sources, 2M+ words) and applying Deep-Research frameworks for timeline choreography.

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

<!-- Eliciting: elements to animate -->
<ask>
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

<!-- Eliciting: animation sequence -->
<ask>
**Animation Sequence**

What order should elements animate?
- Sequential (one after another)?
- Overlapping (start next before previous finishes)?
- Simultaneous (all at once)?
- Custom timing pattern?

Example: "Cards fade in sequentially with 0.2s overlap, then CTA slides up"
</ask>

<!-- Eliciting: timing specifications -->
<ask>
**Timing Specifications**

Durations and delays for each element:
- Overall timeline duration?
- Individual tween durations?
- Delays between sequences?
- Stagger amounts (if applicable)?

Example: "Each card: 0.6s duration, 0.15s stagger"
</ask>

<!-- Eliciting: animation effects -->
<ask>
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

<!-- Eliciting: framework context -->
<ask>
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

<critical>
⚠️ **MANDATORY RESEARCH GATE** - This is a BLOCKING checkpoint.

You CANNOT proceed to Step 3 until ALL research below is COMPLETE. Research is not optional, not suggested - it is **REQUIRED**. Every timeline must be built on proven patterns from the knowledge base, not guesswork.
</critical>

**Research Protocol:** Systematic multi-source timeline pattern analysis

### Phase 1: Archon KB - Timeline Code Examples (PRIMARY)

Required Archon Queries (ALL MUST BE EXECUTED):

#### Query 1: Timeline Choreography Patterns
```javascript
rag_search_code_examples("timeline choreography {effect_type}", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Find proven timeline implementations matching the desired effects
**Effect type examples:** "fade sequence", "stagger cards", "page load", "scroll reveal"
**Document:** What timeline structures work best for this effect type?

#### Query 2: Complex Sequence Patterns
```javascript
rag_search_code_examples("complex animation sequences", match_count=8)
```
**Purpose:** Find sophisticated multi-element coordination patterns
**Document:** How do premium sites coordinate multiple elements in timelines?

#### Query 3: Timeline Coordination Best Practices
```javascript
rag_search_knowledge_base("timeline coordination best practices", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Learn position parameter strategies, label usage, relative positioning
**Document:** Position parameters (`"<"`, `"+=0.5"`), labels, timing strategies

#### Query 4: Stagger Techniques (if applicable)
```javascript
rag_search_code_examples("stagger {element_type}", match_count=6)
```
**Purpose:** Find stagger patterns for repeated elements
**Element examples:** "cards", "list items", "characters", "grid"
**Document:** Stagger amounts, easing, advanced stagger options

### Phase 2: Deep-Research - Timeline Frameworks (PRIMARY)

Apply systematic frameworks from Deep-Research sections:

#### Section 2.2: Mastering Timeline Techniques (PRIMARY)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md`

**Extract:**
- Advanced position parameters (relative, absolute, labels)
- Callback strategies (onStart, onComplete, onUpdate)
- Timeline control methods (play, pause, reverse, timeScale)
- Nested timeline patterns
- Complex coordination techniques

**Document:** Which timeline techniques apply to this use case?

#### Section 2.1: Core GSAP Concepts - Tweens, Staggers, Easing (CORRECTED from 2.3)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`

**Extract:**
- Tween fundamentals (to, from, fromTo)
- Stagger configuration options
- Easing function selection
- Duration calculations

**Document:** What tween patterns and stagger configs fit this sequence?

#### Section 3.1: Page Load Sequence (if intro animation)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/11-31-pattern-smooth-page-load-sequence-intro-timeline.md`

**Apply if:** Timeline is for page intro/hero animation

**Extract:**
- Page load timing strategies
- Intro sequence best practices
- User experience considerations

#### Section 3.7: Cleanup and Reinitialization (Lifecycle)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`

**Extract:**
- Timeline cleanup strategies (kill vs revert)
- Memory management
- Reinitialization patterns
- Lifecycle integration

**Document:** How should this timeline be cleaned up and managed?

### Phase 3: Framework Integration (if applicable)

#### If React or Next.js:

**Section 2.5: React/Next.js Integration**
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`

Required Archon Query:
```javascript
rag_search_code_examples("useGSAP timeline {framework}", match_count=6)
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
WebSearch("Next.js 15 GSAP timeline SSR 2025")
WebSearch("React 19 GSAP timeline patterns 2025")
```

**Purpose:** Verify no breaking changes or new best practices in latest versions

### Phase 4: Premium Plugin Research (if needed)

If effects require premium plugins (MorphSVG, DrawSVG, etc.):

```javascript
rag_search_code_examples("MorphSVG timeline", match_count=5)
rag_search_code_examples("DrawSVG timeline sequence", match_count=5)
```

**IMPORTANT:** Emphasize that MorphSVG, SplitText, DrawSVG, ScrambleText, InertiaPlugin, etc. are **FREE in GSAP 3.13+**!
Reference: https://gsap.com/blog/gsap-3-13-0-release

### Phase 5: Research Documentation

Create a "Research Findings" section documenting:

1. **Timeline Patterns Found**
   - Which KB examples are most relevant?
   - What timeline structure fits best (sequential, overlapping, etc.)?
   - Position parameter strategy

2. **Deep-Research Framework Applications**
   - Which Section 2.2 techniques apply?
   - Stagger configuration (from Section 2.1)
   - Cleanup strategy (from Section 3.7)

3. **Framework Integration Strategy**
   - useGSAP hook usage (React)
   - Ref patterns
   - Cleanup approach

4. **Premium Plugin Usage**
   - Which plugins needed (if any)?
   - Remind user: FREE in GSAP 3.13+

<critical>
🚨 **RESEARCH QUALITY GATE CHECKPOINT**

Before proceeding to Step 3, you MUST have completed:
- ✅ All 4 Archon queries (Query 1-4) with documented findings
- ✅ Deep-Research section reviews (2.2, 2.1, 3.1, 3.7, 2.5 if applicable)
- ✅ Framework integration research (if React/Next.js/Vue)
- ✅ Premium plugin research (if needed)
- ✅ Research documentation created (Phase 5)

**This is not a suggestion - it is a REQUIREMENT.** The workflow engine will enforce this checkpoint.
</critical>

<ask>
**MANDATORY CONFIRMATION (Research Gate):**

Have you completed ALL research requirements listed above?

Type **"COMPLETE"** if you have:
- Executed ALL required Archon queries and documented findings
- Reviewed ALL applicable Deep-Research sections
- Created the Research Findings documentation (Phase 5)

Type **"INCOMPLETE"** if research is not done (you will return to complete it).
</ask>

<check if="response != 'COMPLETE'">
  <action>HALT execution - research incomplete</action>
  <goto step="2">Return to Step 2 to complete research</goto>
</check>

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
- Section 2.1: [Stagger configuration] (CORRECTED from 2.3)
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
