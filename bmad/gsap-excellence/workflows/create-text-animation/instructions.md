<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-text-animation/workflow.yaml</critical>

# Text Animation - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-text-animation
**Purpose:** Create sophisticated text animations using SplitText plugin (**FREE in GSAP 3.13+**)

---

## Overview

SplitText creates cinematic text animations by splitting text into animatable pieces. This workflow uses Archon KB research, Section 3.5 (SplitText patterns), and Section 2.3 (FREE Plugin Ecosystem) to implement professional text effects.

**🚨 CRITICAL:** SplitText is **FREE in GSAP 3.13+** (was paid before Webflow acquisition in October 2024)!
Reference: https://gsap.com/blog/gsap-3-13-0-release

**Animation Types:**
- Character-by-character (letter reveals with stagger)
- Word-by-word (word reveals, sliding, fading)
- Line-by-line (typewriter, slide-up reveals)
- Advanced effects (scramble, wave, 3D rotation per char)

---

## Step 1: Context Gathering

<ask name="animation_type">
**Text Animation Type**

1. **Character-by-character** (letter reveals with stagger)
2. **Word-by-word** (word reveals, sliding, fading)
3. **Line-by-line** (typewriter, slide-up reveals)
4. **Advanced effects** (scramble, wave, 3D rotation per char)

Which type?
</ask>

<ask name="text_element">
**Text Element**

- Selector? (e.g., ".hero-title", "h1")
- Text content?
- Multiple text elements?

Example: ".hero-title" with text "Welcome to Cre8tive AI"
</ask>

<ask name="animation_details">
**Animation Style**

- Fade in? Slide in? Scale in? Rotate in?
- Stagger amount between chars/words/lines?
- Easing preference (back, elastic, power)?

Example: "Fade up with y: 50, stagger: 0.02, elastic ease"
</ask>

---

## Step 2: Research Gate (MANDATORY)

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:** This is a MANDATORY blocking checkpoint.

### Phase 1: Archon KB Queries

Required Queries (ALL MUST BE EXECUTED):

#### Query 1: SplitText Patterns
```javascript
rag_search_code_examples("SplitText {animation_type}", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Find proven SplitText implementations
**Document:** What SplitText configurations work best?

#### Query 2: Text Stagger Patterns
```javascript
rag_search_code_examples("text animation stagger", match_count=8)
```
**Purpose:** Stagger patterns for text reveals
**Document:** Optimal stagger amounts for natural feel

#### Query 3: SplitText Performance
```javascript
rag_search_knowledge_base("SplitText performance optimization", source_id="b9f6b322298feb21", match_count=6)
```
**Purpose:** Cleanup, revert strategies
**Document:** Best practices for SplitText lifecycle

### Phase 2: Deep-Research

#### Section 3.5: Text Split and Reveal - SplitText (CORRECTED from 4.4)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/15-35-pattern-text-split-and-reveal-splittext-fancy-effect.md`

**Extract:**
- SplitText plugin usage patterns
- Char/word/line splitting strategies
- Stagger configurations
- Advanced text effects

**Document:** Which Section 3.5 techniques apply?

#### Section 2.1: Core GSAP Concepts - Tweens, Staggers, Easing (CORRECTED from 2.3)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`

**Extract:**
- Stagger fundamentals
- Easing for text reveals
- Duration calculations

**Document:** What stagger/easing creates natural text flow?

#### Section 2.3: The 2024 GSAP Plugin Ecosystem - All FREE
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`

**Extract:**
- SplitText plugin capabilities
- **FREE availability since GSAP 3.13+**
- Plugin setup

**Document:** SplitText FREE status confirmed

**🚨 CRITICAL REMINDER:** SplitText is **FREE in GSAP 3.13+**!
- Was paid plugin before Webflow acquisition (Oct 2024)
- Now completely free with standard GSAP installation
- Section 2.3 documents this transformation

### Phase 3: Research Documentation

Create "Research Findings" section:

1. **SplitText Patterns Found**
   - Which KB examples match this animation type?
   - Stagger configurations
   - Easing recommendations

2. **Deep-Research Applications**
   - Section 3.5: SplitText patterns
   - Section 2.1: Stagger fundamentals
   - Section 2.3: FREE plugin status confirmed

3. **Cleanup Strategy**
   - revert() usage
   - Memory management

<checkpoint type="approval-gate" blocking="true">
<halt>🚨 STOP. You must have documented findings from ALL required queries before proceeding to Step 3. Ensure Section 2.3 FREE plugin status and Section 3.5 patterns are emphasized!</halt>
</checkpoint>

</research-gate>

---

## Step 3: SplitText Implementation

### Pattern A: Character Animation

```javascript
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

// SplitText is FREE in GSAP 3.13+ (was paid before Webflow acquisition)
// Reference: https://gsap.com/blog/gsap-3-13-0-release
// Section 2.3 documents FREE plugin ecosystem
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

// Cleanup when done
// split.revert()  // Restore original text
```

**Pattern from Archon KB + Section 3.5:** Char-by-char reveal with 3D rotation.
**Section 2.1:** Stagger 0.02 creates smooth sequential reveal.

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

**Pattern from Section 3.5:** Word-by-word slide-in.

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

**Pattern from Section 3.5:** Line-by-line typewriter effect.

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

**Pattern from Archon KB:** Scramble text effect.

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

**Pattern from Section 3.5:** 3D character rotation.

### Cleanup Best Practices

```javascript
// Always revert SplitText when done (restores original DOM)
split.revert()

// Or in React useGSAP cleanup:
return () => {
  split?.revert()
}
```

**Section 3.5:** Always revert() to restore original text structure.

---

## Step 4: Output - Production Code

Generate SplitText animation code with:

- Plugin registration
- **🚨 PROMINENT EMPHASIS: FREE in GSAP 3.13+**
- Split type configuration (chars/words/lines)
- Stagger patterns from Section 3.5 and Archon KB
- Cleanup strategy (revert())
- KB citations
- Testing checklist

### Code Quality Requirements

**Must Include:**
- SplitText plugin import
- Plugin registration
- **Comment emphasizing FREE availability**
- Split type selection
- Stagger configuration
- revert() cleanup
- KB + Deep-Research citations

### Testing Checklist

**Text Animation Quality:**
- [ ] Stagger timing feels natural
- [ ] Text remains readable during animation
- [ ] Effects enhance readability (not distract)

**Technical:**
- [ ] SplitText plugin imported correctly
- [ ] Cleanup (revert()) implemented
- [ ] No memory leaks

**Plugin:**
- [ ] User informed about FREE availability
- [ ] Section 2.3 reference included
- [ ] Section 3.5 patterns applied

---

## Success Criteria

- ✅ SplitText patterns researched
- ✅ Plugin registered correctly
- ✅ **User prominently informed about FREE availability (3.13+)**
- ✅ Section 3.5 (SplitText patterns) applied
- ✅ Section 2.3 (FREE plugin ecosystem) referenced
- ✅ Cleanup strategy documented (revert())
- ✅ Stagger timing feels natural

---

**Workflow Complete** ✨
