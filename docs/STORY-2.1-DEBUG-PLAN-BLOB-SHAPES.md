# Story 2.1 Debug Plan: Blob Shape Rendering Issue

**Date:** 2025-10-10
**Issue:** OrganicCard blob shapes render as standard rectangles instead of distinctive SVG clip-path masks
**Methodology:** Epic 1 Bug #2 Playbook (Layout-Affecting Animations Break ScrollTrigger)
**Estimated Fix Time:** 2-4 hours
**Confidence Level:** HIGH (Epic 1 Bug #2 was solved in 3 hours using this exact approach)

---

## 🎯 Executive Summary

**Problem:** Story 2.1 portfolio cards render as dark rectangles with glassmorphism background, NOT distinctive blob-shaped SVG clip-path masks as specified in Epic 2 OrganicCard component.

**Root Cause Hypothesis:** Based on Epic 1 Bug #2 learnings, blob shapes likely being hidden by:
1. Layout-affecting animations (y/scale) applied AFTER component mount
2. CSS z-index/overflow issues preventing clip-path visibility
3. SVG clip-path not applied correctly in DOM

**Epic 1 Reference:** Bug #2 - ScrollTrigger Jump/Snap on First Load
- **Symptom:** Layout changes during entrance animation invalidated ScrollTrigger calculations
- **Solution:** Keep elements at final position/scale from load, only animate opacity/filter
- **Lesson:** "NEVER change element position/size after ScrollTrigger calculates trigger points"

**Story 2.1 Application:** OrganicCard may be animating layout properties (y, scale, rotation) that conflict with clip-path rendering or cause visual overlap hiding the blob shape.

---

## 🔍 PHASE 1: Diagnostic Investigation (30-60 minutes)

### Step 1.1: Isolate OrganicCard in Dev Environment

**Goal:** Verify blob shape renders correctly in isolation (without portfolio context).

**Actions:**

1. **Create Test Page:**
```tsx
// src/pages/TestOrganicCard.tsx (CREATE NEW FILE)
import { OrganicCard } from '@/components/epic2'

export default function TestOrganicCard() {
  return (
    <div className="min-h-screen bg-gray-950 p-24">
      <h1 className="text-4xl text-white mb-12">OrganicCard Blob Shape Test</h1>

      {/* Test 1: Static blob with no animations */}
      <div className="mb-24">
        <h2 className="text-2xl text-cyan-400 mb-4">Test 1: Static Blob (No Animations)</h2>
        <OrganicCard
          shape="blob"
          glowColor="#4f46e5"
          className="w-96 h-96"
        >
          <div className="bg-gradient-radial from-indigo-600/30 to-transparent w-full h-full flex items-center justify-center">
            <p className="text-white">Static Blob Test</p>
          </div>
        </OrganicCard>
      </div>

      {/* Test 2: Blob with morphing enabled */}
      <div className="mb-24">
        <h2 className="text-2xl text-cyan-400 mb-4">Test 2: Morphing Blob</h2>
        <OrganicCard
          shape="blob"
          glowColor="#4f46e5"
          morphing
          morphIntensity={0.05}
          className="w-96 h-96"
        >
          <div className="bg-gradient-radial from-indigo-600/30 to-transparent w-full h-full flex items-center justify-center">
            <p className="text-white">Morphing Blob Test</p>
          </div>
        </OrganicCard>
      </div>

      {/* Test 3: Multiple blobs (portfolio simulation) */}
      <div>
        <h2 className="text-2xl text-cyan-400 mb-4">Test 3: Multiple Blobs (Portfolio Simulation)</h2>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <OrganicCard
              key={i}
              shape="blob"
              glowColor="#4f46e5"
              className="w-64 h-64"
            >
              <div className="bg-gradient-radial from-indigo-600/30 to-transparent w-full h-full flex items-center justify-center">
                <p className="text-white">Blob {i}</p>
              </div>
            </OrganicCard>
          ))}
        </div>
      </div>
    </div>
  )
}
```

2. **Add Route:**
```tsx
// src/main.tsx (ADD ROUTE)
import TestOrganicCard from './pages/TestOrganicCard'

// Add to router:
{
  path: '/test-organic',
  element: <TestOrganicCard />
}
```

3. **Navigate and Inspect:**
```bash
npm run dev
# Navigate to http://localhost:8080/test-organic
```

**Expected Results:**
- **✅ PASS:** Blob shapes visible (not rectangles) → OrganicCard component working, issue is portfolio integration
- **❌ FAIL:** Rectangles visible → OrganicCard component itself broken, proceed to Step 1.2

---

### Step 1.2: Inspect OrganicCard SVG Clip-Path in DevTools

**Goal:** Verify SVG clip-path is present in DOM and applied to elements.

**Actions:**

1. **Open Chrome DevTools on Test Page:**
```bash
# With test page loaded:
F12 → Elements tab
```

2. **Inspect OrganicCard HTML Structure:**
```html
<!-- EXPECTED DOM STRUCTURE: -->
<div class="organic-card-wrapper">
  <svg>
    <defs>
      <clipPath id="blob-clip-path-{uniqueId}">
        <path d="M..." />  <!-- Blob SVG path -->
      </clipPath>
    </defs>
  </svg>

  <div class="organic-card-content" style="clip-path: url(#blob-clip-path-{uniqueId})">
    <!-- Card content -->
  </div>
</div>
```

3. **Verify Clip-Path Application:**
```javascript
// Console check:
const card = document.querySelector('.organic-card-content')
console.log('Computed clip-path:', window.getComputedStyle(card).clipPath)
// EXPECTED: 'url("#blob-clip-path-abc123")'
// WRONG: 'none' (clip-path not applied)
```

4. **Check SVG Path Rendering:**
```javascript
// Console check:
const clipPath = document.querySelector('clipPath[id^="blob-clip-path"]')
console.log('ClipPath exists:', !!clipPath)
console.log('ClipPath path data:', clipPath?.querySelector('path')?.getAttribute('d'))
// EXPECTED: Long path data string (M50,0 C22.4...)
// WRONG: null or undefined
```

**Diagnostic Outcomes:**

| Finding | Interpretation | Next Step |
|---------|----------------|-----------|
| ✅ ClipPath exists, applied correctly, blobs visible | Component working, issue is portfolio integration | Go to Phase 2 |
| ❌ ClipPath exists but not applied (`clip-path: none`) | CSS issue preventing application | Go to Step 1.3 |
| ❌ ClipPath doesn't exist in DOM | SVG generation broken | Go to Step 1.4 |

---

### Step 1.3: CSS Cascade Analysis (If clip-path not applied)

**Goal:** Identify CSS rules overriding clip-path application.

**Actions:**

1. **Inspect Computed Styles:**
```javascript
// Chrome DevTools Console:
const card = document.querySelector('.organic-card-content')
console.log('All clip-path styles:', [...document.styleSheets]
  .flatMap(s => [...s.cssRules])
  .filter(r => r.selectorText?.includes('organic-card') && r.style.clipPath)
  .map(r => ({ selector: r.selectorText, clipPath: r.style.clipPath }))
)
```

2. **Check for Overriding Styles:**
```css
/* COMMON CULPRITS (check Tailwind styles, component CSS): */

/* 1. Overflow hidden preventing clip-path visibility */
.organic-card-content {
  overflow: hidden; /* ❌ Can hide clip-path */
}

/* 2. Position/transform creating new stacking context */
.organic-card-content {
  position: absolute; /* May conflict with clip-path */
  transform: scale(0.95); /* Transform order matters */
}

/* 3. Z-index layering hiding clip-path visual */
.organic-card-content {
  z-index: -1; /* ❌ Behind other elements */
}
```

3. **Test CSS Override in DevTools:**
```javascript
// Force clip-path application:
card.style.clipPath = 'url(#blob-clip-path-abc123)' // Use actual ID from DOM
card.style.overflow = 'visible'
card.style.zIndex = '10'

// Did blob shape appear? → CSS issue confirmed
```

**Fix Strategies:**

```tsx
// src/components/epic2/shapes/OrganicCard.tsx

// BEFORE (might be broken):
<div
  className="organic-card-content"
  style={{ clipPath: `url(#${clipPathId})` }}
>

// AFTER (force correct CSS):
<div
  className="organic-card-content"
  style={{
    clipPath: `url(#${clipPathId})`,
    overflow: 'visible',      // Don't hide clip-path
    zIndex: 1,                // Explicit stacking
    position: 'relative',     // Control stacking context
  }}
>
```

---

### Step 1.4: SVG Generation Debugging (If clipPath missing from DOM)

**Goal:** Identify why SVG clip-path not rendering.

**Actions:**

1. **Check OrganicCard Component Rendering:**
```tsx
// src/components/epic2/shapes/OrganicCard.tsx

// Add defensive logging (temporary):
useEffect(() => {
  console.log('[OrganicCard] Rendering with shape:', shape)
  console.log('[OrganicCard] ClipPath ID:', clipPathId)
  console.log('[OrganicCard] SVG defs element:', document.querySelector(`#${clipPathId}`))
}, [shape, clipPathId])
```

2. **Verify Shape Prop Passing:**
```tsx
// src/components/studios/PortfolioCard.tsx:64-75

// VERIFY THIS LINE:
<OrganicCard shape="blob" morphing morphIntensity={0.05} glowColor="#4f46e5">

// NOT:
<OrganicCard shape="blob" ... />  // Missing props?
// NOT:
<OrganicCard shape={undefined} ... />  // Prop not passed?
```

3. **Check SVG Path Data:**
```tsx
// src/components/epic2/shapes/OrganicCard.tsx

// Verify blob path data exists:
const BLOB_PATH = "M50,0 C22.4,0 0,22.4 0,50 C0,77.6 22.4,100 50,100 C77.6,100 100,77.6 100,50 C100,22.4 77.6,0 50,0 Z"

// If path is empty string or undefined, SVG won't render
```

**Common Bugs:**

```tsx
// BUG 1: Conditional rendering hiding SVG
{shape === 'blob' && (  // ❌ SVG only renders if condition true
  <svg><defs><clipPath>...</clipPath></defs></svg>
)}

// FIX: Always render SVG, conditionally render path
<svg><defs>
  <clipPath id={clipPathId}>
    {shape === 'blob' && <path d={BLOB_PATH} />}
    {shape === 'hexagon' && <path d={HEXAGON_PATH} />}
    {/* ... */}
  </clipPath>
</defs></svg>

// BUG 2: Unique ID collision (multiple cards, same ID)
const clipPathId = 'blob-clip-path' // ❌ NOT UNIQUE

// FIX: Generate unique IDs per instance
const clipPathId = useId() // React 18 useId hook
// OR:
const clipPathId = `blob-clip-path-${Math.random().toString(36).substr(2, 9)}`
```

---

## 🔧 PHASE 2: Portfolio Integration Analysis (30-60 minutes)

**Assumption:** Phase 1 confirmed OrganicCard works in isolation, issue is portfolio context.

### Step 2.1: Compare Test Page vs Portfolio Rendering

**Goal:** Identify environmental differences causing blob shape failure.

**Actions:**

1. **Side-by-Side Chrome DevTools Inspection:**
```bash
# Window 1: Test page (blobs working)
http://localhost:8080/test-organic

# Window 2: Studios page (blobs broken)
http://localhost:8080/studios
```

2. **Compare DOM Structures:**
```javascript
// Console on BOTH pages:
const card = document.querySelector('.organic-card-content')
console.log({
  clipPath: window.getComputedStyle(card).clipPath,
  overflow: window.getComputedStyle(card).overflow,
  transform: window.getComputedStyle(card).transform,
  opacity: window.getComputedStyle(card).opacity,
  zIndex: window.getComputedStyle(card).zIndex,
  position: window.getComputedStyle(card).position,
})
```

**Look for Differences:**

| Property | Test Page (Working) | Studios Page (Broken) | Interpretation |
|----------|---------------------|----------------------|----------------|
| `clipPath` | `url("#blob-...")` | `none` | ❌ Clip-path not applied on Studios |
| `overflow` | `visible` | `hidden` | ❌ Overflow hiding blob shape |
| `transform` | `none` | `matrix(...)` | ⚠️ Transform may interfere |
| `opacity` | `1` | `0` | ❌ Blob invisible (hidden by animation) |
| `zIndex` | `1` | `-1` or `auto` | ❌ Behind other elements |

---

### Step 2.2: GSAP Animation Interference Check

**Goal:** Detect Epic 1 Bug #2 pattern (layout animations breaking clip-path).

**Actions:**

1. **Identify GSAP Timelines in Portfolio:**
```tsx
// src/components/studios/PortfolioSection.tsx

// Look for animations affecting portfolio cards:
useGSAP(() => {
  const tl = gsap.timeline({ scrollTrigger: { ... } })

  // CRITICAL: Check for layout-affecting properties on cards
  tl.from('.portfolio-card', {
    y: 50,        // ❌ LAYOUT-AFFECTING (Epic 1 Bug #2 pattern!)
    scale: 0.95,  // ❌ LAYOUT-AFFECTING
    rotation: -45 // ⚠️ May interfere with clip-path
  })
})
```

2. **Epic 1 Bug #2 Detection Criteria:**

```typescript
// ❌ VIOLATES Epic 1 Lesson #2 (Will Break Clip-Path)
gsap.from('.portfolio-card', {
  y: 50,          // Changes position
  scale: 0.95,    // Changes size
  rotation: -45,  // Changes transform
  x: -100,        // Changes position
})

// ✅ SAFE (Epic 1 Bug #2 Fix Pattern)
gsap.from('.portfolio-card', {
  opacity: 0,     // Only opacity
  filter: 'blur(20px)', // Only filter
  // NO y, x, scale, rotation after component mount!
})
```

3. **Test Animation Disable:**
```javascript
// Chrome DevTools Console (Studios page):
ScrollTrigger.getAll().forEach(st => st.kill()) // Kill all ScrollTriggers
gsap.globalTimeline.clear() // Clear all GSAP animations

// Refresh page
// Did blob shapes appear? → GSAP animation was hiding them
```

---

### Step 2.3: Entrance Animation Analysis

**Goal:** Check if entrance animation invalidates clip-path (Epic 1 Bug #2 root cause).

**Actions:**

1. **Read Portfolio Section Animation Code:**
```tsx
// src/components/studios/PortfolioSection.tsx:75-138 (from story context)

// Look for entrance timeline:
const tl = gsap.timeline()

// HYPOTHESIS: Entrance sets initial state that hides blob
tl.from('.portfolio-card', {
  opacity: 0,
  y: 50,        // ❌ PROBLEM: Starts card 50px down
  scale: 0.95,  // ❌ PROBLEM: Starts card scaled down
  rotation: -45 // ❌ PROBLEM: Starts card rotated
})
```

2. **Epic 1 Bug #2 Fix Application:**

```tsx
// BEFORE (Portfolio Section entrance - BROKEN):
useGSAP(() => {
  const tl = gsap.timeline({ scrollTrigger: { ... } })

  // Phase 2: Portfolio cards reveal
  tl.from('.portfolio-card', {
    opacity: 0,
    yPercent: 10,   // ❌ Changes layout AFTER clip-path set
    scale: 0.95,    // ❌ Changes layout AFTER clip-path set
    stagger: 0.2
  })
})

// AFTER (Epic 1 Bug #2 Fix Pattern):
useGSAP(() => {
  // Set initial state (cards at FINAL position/scale)
  gsap.set('.portfolio-card', {
    opacity: 0,      // Only animate opacity
    yPercent: 0,     // Already at final position
    scale: 1,        // Already at final scale
    filter: 'blur(20px)' // Will animate to blur(0)
  })

  const tl = gsap.timeline({ scrollTrigger: { ... } })

  // Phase 2: Portfolio cards reveal (NO LAYOUT CHANGES)
  tl.to('.portfolio-card', {
    opacity: 1,             // Only opacity
    filter: 'blur(0px)',    // Only filter
    stagger: 0.2
  })
})
```

---

## 🛠️ PHASE 3: Implementation Fixes (1-2 hours)

### Fix Strategy A: Remove Layout-Affecting Animations (Epic 1 Bug #2 Fix)

**Confidence:** HIGH (90% - This fixed Epic 1 Bug #2 in 3 hours)

**Changes Required:**

1. **File:** `src/components/studios/PortfolioSection.tsx`

**BEFORE:**
```tsx
// Phase 2: Portfolio cards reveal (lines ~110-120)
tl.from(portfolioCardRefs.current, {
  autoAlpha: 0,
  yPercent: 10,     // ❌ Layout-affecting
  scale: 0.95,      // ❌ Layout-affecting
  rotation: -45,    // ❌ May conflict with clip-path
  stagger: 0.2,
  duration: 0.8
}, 'phase2')
```

**AFTER:**
```tsx
// Phase 2: Portfolio cards reveal - EPIC 1 BUG #2 FIX
// Set cards to final position FIRST
gsap.set(portfolioCardRefs.current, {
  opacity: 0,
  yPercent: 0,        // Final position
  scale: 1,           // Final scale
  rotation: 0,        // Final rotation
  filter: 'blur(20px)'
})

tl.to(portfolioCardRefs.current, {
  opacity: 1,
  filter: 'blur(0px)', // Only animate opacity + filter
  stagger: 0.2,
  duration: 0.8
}, 'phase2')
```

**Trade-off:** Simplified entrance effect (no slide-up or scale-in), but **blob shapes will render correctly** (Epic 1 Bug #2 trade-off).

**Testing:**
```bash
npm run dev
# Navigate to /studios
# Scroll to portfolio section
# EXPECTED: Blob shapes now visible (not rectangles)
```

---

### Fix Strategy B: Defer Clip-Path Application Until Layout Stable

**Confidence:** MEDIUM (60% - More complex, fallback if Strategy A fails)

**Changes Required:**

1. **File:** `src/components/epic2/shapes/OrganicCard.tsx`

**Approach:** Delay clip-path application until entrance animation completes.

```tsx
// Add state to track animation completion
const [animationComplete, setAnimationComplete] = useState(false)

useEffect(() => {
  // Wait for entrance animation (1.5s typical)
  const timer = setTimeout(() => {
    setAnimationComplete(true)
  }, 1500)

  return () => clearTimeout(timer)
}, [])

// Conditionally apply clip-path
return (
  <div
    className="organic-card-content"
    style={{
      clipPath: animationComplete ? `url(#${clipPathId})` : 'none',
      transition: 'clip-path 0.3s ease-out'
    }}
  >
    {children}
  </div>
)
```

**Pros:** Allows layout animations to complete first
**Cons:** Adds complexity, 1.5s delay before blob shape visible

---

### Fix Strategy C: Force Repaint After Animation

**Confidence:** LOW (40% - Hack, only if A and B fail)

**Changes Required:**

1. **File:** `src/components/studios/PortfolioSection.tsx`

```tsx
useGSAP(() => {
  const tl = gsap.timeline({ scrollTrigger: { ... } })

  // Existing animation...

  // Force repaint after animation completes
  tl.call(() => {
    portfolioCardRefs.current.forEach(card => {
      if (card) {
        // Force reflow
        card.style.display = 'none'
        card.offsetHeight // Trigger reflow
        card.style.display = ''
      }
    })
  })
})
```

**Warning:** This is a hack to force browser repaint. Only use if Strategies A and B fail.

---

## ✅ PHASE 4: Validation & Testing (30 minutes)

### Step 4.1: Visual QA Checklist

**Goal:** Confirm blob shapes render correctly in all contexts.

**Test Cases:**

1. **Test 1: Isolated OrganicCard** (/test-organic page)
   - [ ] Static blob visible (not rectangle)
   - [ ] Morphing blob animates correctly
   - [ ] Multiple blobs render without ID collision

2. **Test 2: Portfolio Section** (/studios page)
   - [ ] All 3-5 portfolio cards display blob shapes (not rectangles)
   - [ ] Blob shapes visible during entrance animation
   - [ ] Blob shapes persist after animation completes
   - [ ] No visual glitches or flashing during scroll

3. **Test 3: Responsive Breakpoints**
   - [ ] Desktop (1920px): Blob shapes visible
   - [ ] Tablet (768px): Blob shapes visible
   - [ ] Mobile (375px): Blob shapes visible OR gracefully degraded

4. **Test 4: Browser Compatibility**
   - [ ] Chrome 120+: Blob shapes visible
   - [ ] Firefox 121+: Blob shapes visible
   - [ ] Safari 17+: Blob shapes visible (CRITICAL - Safari SVG quirks)

---

### Step 4.2: Chrome DevTools Performance Check

**Goal:** Ensure blob shape fix doesn't degrade performance.

**Actions:**

```bash
# 1. Open Chrome DevTools
F12 → Performance tab

# 2. Start recording
Record button

# 3. Scroll through portfolio section

# 4. Stop recording

# 5. Analyze frame times
EXPECTED: 60fps maintained (<16.67ms per frame)
WARNING: If frames >20ms, blob shape rendering may be expensive
```

**Performance Budget:**
- OrganicCard blob rendering: ≤2ms per card
- 5 cards × 2ms = 10ms total
- Remaining budget: 6.67ms for other animations
- **ACCEPTABLE** within 16.67ms frame budget

---

### Step 4.3: Build & Deploy Validation

**Goal:** Confirm fix works in production build.

**Actions:**

```bash
# 1. Production build
npm run build
# EXPECTED: Build completes <30s (also fixes Story 2.1 build timeout if present)

# 2. Preview production
npm run preview

# 3. Navigate to preview
# http://localhost:4173/studios

# 4. Visual QA (same as Step 4.1)
# Verify blob shapes visible in production build
```

**Production-Specific Checks:**
- [ ] Blob shapes visible in production build (not just dev)
- [ ] No console errors related to clip-path
- [ ] Performance maintained (60fps)
- [ ] Bundle size increase ≤5KB (minimal impact)

---

## 📊 Success Criteria (DoD)

**Story 2.1 Acceptance Criteria #2 & #3:**
- ✅ **AC #2:** PortfolioSection component renders with OrganicCard shape="blob" (visible blob shapes, not rectangles)
- ✅ **AC #3:** Portfolio card content displays with blob-shaped OrganicCard

**Visual Validation:**
- [ ] Blob shapes visible in Chrome DevTools screenshots
- [ ] Senior Developer Review approval (visual QA passing)
- [ ] No rectangles visible (distinctive organic shapes)

**Code Quality:**
- [ ] TypeScript compiles clean (`npm run build` passes)
- [ ] ESLint passes (0 errors)
- [ ] React cleanup patterns intact (useGSAP with ctx.revert())

**Performance:**
- [ ] 60fps maintained during scroll (Chrome DevTools Performance tab)
- [ ] No layout shifts (CLS ≤0.1)
- [ ] Bundle size increase ≤5KB

---

## 🚨 Escalation Criteria

**If blob shapes still not visible after Strategy A, B, and C:**

1. **Hypothesis:** OrganicCard component fundamentally broken (not portfolio integration issue)

2. **Actions:**
   - [ ] Review Epic 2 Story 2.0 implementation (OrganicCard foundation)
   - [ ] Check if blob shape worked in Story 2.0 acceptance tests
   - [ ] Consider fallback: Use rounded rectangles instead of blob shapes
   - [ ] Escalate to Cameron for architectural review

3. **Fallback Implementation:**
```tsx
// src/components/studios/PortfolioCard.tsx

// FALLBACK: Rounded rectangle instead of blob
<div className="rounded-3xl bg-gradient-radial from-indigo-600/30 to-transparent">
  {/* Card content */}
</div>

// Document decision:
// "Blob shapes non-functional due to SVG clip-path browser incompatibility.
// Fallback to rounded rectangles for MVP. Epic 2 foundation investigation required."
```

---

## 📚 Epic 1 Reference Materials

**Bug #2 Full Details:** `docs/retrospectives/epic-1-retrospective-20251010.md:475-564`

**Key Quotes:**
- "NEVER change an element's position or size after ScrollTrigger has calculated trigger points."
- "Only animate properties that don't affect layout (opacity, filter, transform with consistent values)."
- "Trade-off: Simplified entrance effect (no slide-up or scale-in), but smooth and no jump/snap."

**Time to Solve (Epic 1):** 3 hours (2 failed approaches + final solution)

**Epic 1 Fix Pattern:**
```typescript
// Epic 1 solution that should work for Story 2.1:
gsap.set(containerRef.current, {
  opacity: 0,  // Only animate opacity
  y: 0,        // Already at final position
  scale: 1,    // Already at final scale
  filter: 'blur(20px)'
})

entranceTl.to(containerRef.current, {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.2
})
```

---

## 🎯 Estimated Timeline

**Phase 1: Diagnostic Investigation** - 30-60 minutes
- Step 1.1: Isolate OrganicCard test page (20 min)
- Step 1.2: DevTools SVG inspection (10 min)
- Step 1.3: CSS cascade analysis (15 min)
- Step 1.4: SVG generation debugging (15 min)

**Phase 2: Portfolio Integration Analysis** - 30-60 minutes
- Step 2.1: Test vs Portfolio comparison (15 min)
- Step 2.2: GSAP animation interference check (20 min)
- Step 2.3: Entrance animation analysis (25 min)

**Phase 3: Implementation Fixes** - 1-2 hours
- Strategy A: Remove layout animations (30-60 min)
- Strategy B: Defer clip-path (30-60 min, if A fails)
- Strategy C: Force repaint (30 min, if B fails)

**Phase 4: Validation & Testing** - 30 minutes
- Visual QA (15 min)
- Performance check (10 min)
- Production build validation (5 min)

**TOTAL: 2.5-4.5 hours** (average 3.5 hours, matches Epic 1 Bug #2 timeline)

---

## 🚀 Next Steps

1. **START HERE:** Execute Phase 1, Step 1.1 (Create test page)
2. **DECISION POINT:** After Phase 1, choose Strategy A (highest confidence)
3. **VALIDATE