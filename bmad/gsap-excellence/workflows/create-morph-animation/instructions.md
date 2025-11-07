<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/create-morph-animation/workflow.yaml</critical>

# SVG Morph Animation - Implementation Workflow

**Agent:** VFX Specialist
**Workflow:** create-morph-animation
**Purpose:** Create liquid SVG shape morphing using MorphSVG plugin (**FREE in GSAP 3.13+**)

---

## Overview

MorphSVG creates cinematic, liquid shape transitions. This workflow uses Archon KB research and Section 2.3 (FREE Plugin Ecosystem documentation) to implement professional SVG morphing.

**🚨 CRITICAL:** MorphSVG is **FREE in GSAP 3.13+** (was paid before Webflow acquisition in October 2024)!
Reference: https://gsap.com/blog/gsap-3-13-0-release

**Morph Types:**
- Icon morphing (menu → X, play → pause)
- Shape transitions (circle → square → star)
- Blob/liquid effects (organic morphing)
- Text to shape morphing

---

## Step 1: Context Gathering

<ask name="morph_type">
**Morph Type**

1. **Icon morphing** (menu → X, play → pause)
2. **Shape transitions** (circle → square → star)
3. **Blob/liquid effects** (organic morphing)
4. **Text to shape morphing**

Which type?
</ask>

<ask name="svg_elements">
**SVG Elements**

- Path IDs or selectors?
- How many shapes in sequence?
- SVG inline or external file?

Example: "#shape1 → #shape2 → #shape3"
</ask>

---

## Step 2: Research Gate (MANDATORY)

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:** This is a MANDATORY blocking checkpoint.

### Phase 1: Archon KB Queries

Required Queries (ALL MUST BE EXECUTED):

#### Query 1: MorphSVG Patterns
```javascript
rag_search_code_examples("MorphSVG {morph_type}", source_id="b9f6b322298feb21", match_count=8)
```
**Purpose:** Find proven MorphSVG implementations
**Document:** What MorphSVG configurations work best?

#### Query 2: Point Optimization
```javascript
rag_search_knowledge_base("MorphSVG point optimization", source_id="b9f6b322298feb21", match_count=6)
```
**Purpose:** Learn point-matching techniques for smooth morphs
**Document:** How to optimize paths for best morphing?

#### Query 3: SVG Path Morphing Sequences
```javascript
rag_search_code_examples("SVG path morphing sequence", match_count=6)
```
**Purpose:** Multi-shape morph patterns
**Document:** How to coordinate multiple shape transitions?

### Phase 2: Deep-Research

#### Section 2.3: The 2024 GSAP Plugin Ecosystem - All FREE (PERFECT MATCH!)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`

**Extract:**
- MorphSVG plugin capabilities
- **FREE availability since GSAP 3.13+**
- Plugin installation and registration
- Premium features now accessible

**Document:** MorphSVG FREE status, capabilities, setup

**🚨 CRITICAL REMINDER:** MorphSVG is **FREE in GSAP 3.13+**!
- Was paid plugin before Webflow acquisition (Oct 2024)
- Now completely free with standard GSAP installation
- Section 2.3 documents this transformation

### Phase 3: Research Documentation

Create "Research Findings" section:

1. **MorphSVG Patterns Found**
   - Which KB examples match this morph type?
   - Path optimization strategies
   - Easing recommendations

2. **Deep-Research Applications**
   - Section 2.3: FREE plugin status confirmed
   - Setup and registration requirements

3. **SVG Requirements**
   - Path conversion needs
   - Point count considerations

<checkpoint type="approval-gate" blocking="true">
<halt>🚨 STOP. You must have documented findings from ALL required queries before proceeding to Step 3. Ensure Section 2.3 FREE plugin status is emphasized!</halt>
</checkpoint>

</research-gate>

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

**Pattern from Archon KB:** Quick icon transitions.
**Section 2.3:** MorphSVG is FREE in GSAP 3.13+!

### Pattern B: Shape Sequence

```javascript
const tl = gsap.timeline()

tl.to("#shape", { morphSVG: "#circle", duration: 1 })
  .to("#shape", { morphSVG: "#square", duration: 1 })
  .to("#shape", { morphSVG: "#star", duration: 1 })
```

**Pattern from Archon KB:** Sequential shape morphing.

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

**Pattern from Archon KB:** Organic blob transitions with yoyo repeat.
**Section 2.3:** shapeIndex: "auto" optimizes point matching (FREE feature!).

### SVG Requirements

- **Path elements** (not shapes - convert circles/rects to paths)
- **Similar point counts** for smoothest morphs
- Use `convertToPath()` if needed

```javascript
// Convert shapes to paths (if needed)
const circle = document.querySelector("#circle")
MorphSVGPlugin.convertToPath(circle)
```

---

## Step 4: Output - Production Code

Generate MorphSVG code with:

- Plugin registration and import
- **🚨 PROMINENT EMPHASIS: FREE in GSAP 3.13+**
- Path optimization tips
- KB pattern citations
- Testing checklist

### Code Quality Requirements

**Must Include:**
- MorphSVG plugin import
- Plugin registration
- Path-based selectors
- **Comment emphasizing FREE availability**
- KB citations

**Example:**
```javascript
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

// MorphSVG is FREE in GSAP 3.13+ (was paid before Webflow acquisition)
// Reference: https://gsap.com/blog/gsap-3-13-0-release
// Section 2.3 documents FREE plugin ecosystem
gsap.registerPlugin(MorphSVGPlugin)
```

### Testing Checklist

**Morph Quality:**
- [ ] Smooth morphing (no distortion)
- [ ] Timing feels natural
- [ ] Easing creates organic feel

**Technical:**
- [ ] Paths (not shapes) used
- [ ] Similar point counts
- [ ] shapeIndex optimized if needed

**Plugin:**
- [ ] MorphSVG plugin imported correctly
- [ ] User informed about FREE availability
- [ ] Section 2.3 reference included

---

## Success Criteria

- ✅ MorphSVG patterns researched
- ✅ Code includes plugin registration
- ✅ **User prominently informed about FREE availability (3.13+)**
- ✅ Section 2.3 referenced (FREE plugin ecosystem)
- ✅ Path optimization documented
- ✅ Morphing quality feels liquid/cinematic

---

**Workflow Complete** ✨
