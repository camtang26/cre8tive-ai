<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-scroll-animation/workflow.yaml</critical>
<critical>Communicate all responses in {communication_language} throughout this workflow</critical>

# ScrollTrigger Animation - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-scroll-animation
**Purpose:** Create sophisticated ScrollTrigger animations using KB-powered pattern matching
**Session Date:** {date}

---

## Overview

Hello {user_name}! ScrollTrigger is GSAP's most powerful plugin for scroll-based animations. This workflow creates production-ready ScrollTrigger implementations by researching proven patterns from Archon KB (researched as of {date}) and applying Deep-Research frameworks.

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
**Research Currency:** All findings current as of {date}
**Communication:** Present all research findings in {communication_language}

### Phase 1: Archon KB - ScrollTrigger Code Examples (PRIMARY)

Required Archon Queries (ALL MUST BE EXECUTED):

#### Query 1: Effect-Specific Patterns
```javascript
rag_search_code_examples("ScrollTrigger {effect_type}", source_id="6a6860cfc96e173b", match_count=10)
```
**Effect type examples:** "reveal", "parallax", "scrub", "pin", "horizontal scroll"
**Purpose:** Find proven implementations of this specific scroll effect
**Document:** What ScrollTrigger configurations work best for this effect?

#### Query 2: Scroll Reveal Patterns (if reveal effect)
```javascript
rag_search_code_examples("ScrollTrigger reveal stagger", match_count=8)
```
**Purpose:** Find stagger patterns for revealing multiple elements
**Document:** Stagger configurations, trigger point strategies

#### Query 3: Parallax Implementations (if parallax)
```javascript
rag_search_knowledge_base("parallax ScrollTrigger multi-layer", source_id="6a6860cfc96e173b", match_count=8)
```
**Purpose:** Learn multi-layer parallax coordination patterns
**Document:** Speed ratios, depth strategies, performance considerations

#### Query 4: Pin and Scrub Patterns (if pinning or scrubbing)
```javascript
rag_search_code_examples("ScrollTrigger pin scrub", match_count=8)
```
**Purpose:** Find pinned section + scrubbed animation patterns
**Document:** Pin configurations, scrub smoothness options

#### Query 5: ScrollTrigger Best Practices
```javascript
rag_search_knowledge_base("ScrollTrigger performance optimization", source_id="b9f6b322298feb21", match_count=6)
```
**Purpose:** Performance, refresh strategies, common pitfalls
**Document:** will() optimization, refresh() usage, cleanup patterns

### Phase 2: Deep-Research - ScrollTrigger Frameworks (PRIMARY)

Apply systematic frameworks from Deep-Research:

#### Section 3.2: Scroll-Based Reveals (if reveal effect)
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md`

**Extract:**
- Trigger point strategies (when to activate)
- Start/end position configurations
- Stagger patterns for multiple elements
- Easing choices for organic reveals
- Mobile considerations (viewport differences)

**Document:** Which trigger strategies fit this use case?

#### Section 3.3: Parallax and Depth Effects (if parallax or pin)
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md`

**Extract:**
- Multi-layer parallax coordination
- Speed ratio calculations (0.5 = half speed, etc.)
- Pin configurations (pin: true, pinSpacing options)
- Scrub smoothness (scrub: 1, scrub: true)
- Anticipate and overflow techniques

**Document:** Parallax speed ratios, pin strategies

#### Section 3.7: Cleanup and Reinitialization (Lifecycle)
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`

**Extract:**
- ScrollTrigger cleanup strategies (kill vs revert)
- ScrollTrigger.refresh() usage
- Resize handling patterns
- Memory management

**Document:** How should ScrollTriggers be cleaned up?

### Phase 3: Framework Integration (if applicable)

#### If React or Next.js:

**Section 2.5: React/Next.js Integration**
**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`

Required Archon Query:
```javascript
rag_search_code_examples("useGSAP ScrollTrigger {framework}", match_count=6)
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

<ask>
🚨 **RESEARCH QUALITY GATE**

You must have documented findings from ALL required queries before proceeding to Step 3.

**Verification Checklist:**
- ✅ Phase 1: Archon KB queries executed (effect-specific patterns, reveal/parallax/pin examples)
- ✅ Phase 2: Deep-Research frameworks applied (Sections 3.2, 3.3, 3.7)
- ✅ Phase 3: Framework integration researched (if applicable)
- ✅ Phase 4: Research documented with citations

**Research documentation is complete. Continue to Step 3? [c/edit]**
</ask>

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

Thanks for working through this comprehensive process, {user_name}! Here are your final deliverables:

### Final Deliverables

**1. Production-Ready Code**
- Complete ScrollTrigger implementation
- Framework-integrated (if applicable)
- Comments and KB citations
- Researched and validated as of {date}

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
