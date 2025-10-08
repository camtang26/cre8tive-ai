# Implementation Plan: Cinematic Focus Pull Entrance Animation

**Date:** 2025-10-08
**Story:** Story 1.7 - Build 15-Second GSAP ScrollTrigger Transformation Timeline
**Priority:** High
**Complexity:** Medium
**Estimated Time:** 2-3 hours

---

## Executive Summary

Add a premium scroll-triggered entrance animation to the BriefToStoryboardAnimation component. When users scroll down from the hero section, the animation container should reveal with a "cinematic focus pull" effect (blur → sharp, scaled down → normal, below → in position).

**Current State:** Animation container is visible immediately on page load at bottom of viewport (see screenshot: `public/testing-screenshots/2025-10/chrome_eHU1jPjpNH.png`)

**Desired State:** Container hidden on load, reveals with premium animation when user scrolls 20% down the page

---

## Problem Statement

### Current Issues (Visual Evidence Required)

1. **Premature Visibility**: Animation container visible at bottom of viewport on initial page load
2. **No Entrance Magic**: Container appears statically with no reveal animation
3. **Breaks Premium Feel**: Other pages have full-height heroes; this page shows content immediately
4. **User Experience Gap**: No visual reward for scrolling down

**Reference Screenshot:** `public/testing-screenshots/2025-10/chrome_eHU1jPjpNH.png` shows Alpine Water hero form visible at page bottom on load.

---

## Solution: 4-Phase Timeline Architecture

### Current Animation Flow (3 Phases)
```
Page Load → Intro Timeline → Scroll-Controlled Transformation
            (Alpine Water    (Frames 1→2→3→4→5 as user scrolls)
             hero animates)
```

### New Animation Flow (4 Phases)
```
Page Load → [HIDDEN] → Scroll 20% Down → ENTRANCE REVEAL → Intro Timeline → Scroll Transformation
                                         (Blur + Scale + Y)  (Alpine Water)   (Frames 1→5)
```

---

## Technical Implementation Plan

### Phase 1: Research GSAP Patterns (CRITICAL - Do This First!)

**Use Archon MCP RAG Database:**

```typescript
// Search #1: Blur + filter animations
mcp__archon__rag_search_knowledge_base({
  query: "GSAP filter blur animation",
  match_count: 5
})

// Search #2: Entrance reveal patterns
mcp__archon__rag_search_code_examples({
  query: "ScrollTrigger reveal entrance viewport",
  match_count: 5
})

// Search #3: Timeline sequencing and callbacks
mcp__archon__rag_search_knowledge_base({
  query: "GSAP timeline onComplete callback sequence",
  match_count: 3
})

// Search #4: React useGSAP hook patterns
mcp__archon__rag_search_code_examples({
  query: "useGSAP ScrollTrigger React",
  match_count: 3
})
```

**Additional External Research (if RAG insufficient):**
- GSAP official docs: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
- Filter/blur performance: Search for "GSAP filter blur performance GPU"
- React integration: Search for "GSAP useGSAP React cleanup"

**Key Concepts to Understand:**
- `once: true` in ScrollTrigger (fires only on first scroll down)
- `onComplete` callbacks for chaining timelines
- `filter: "blur(Xpx)"` GPU vs CPU rendering
- `autoAlpha` vs `opacity + visibility`

---

### Phase 2: Modify Hero Section Height

**File:** `src/pages/BriefingEngine.tsx`
**Current State:** Hero section is `min-h-[130vh]` (recently increased)
**Action Required:** Verify hero pushes animation container below fold

**Lines to Verify (approx 54-104):**
```tsx
<section
  className="relative min-h-[130vh] flex items-center justify-center..."
  // ... hero content (title, subtitle, CTAs) ...

  <div className="mt-24 md:mt-32">
    <BriefToStoryboardAnimation />  {/* Should be below viewport on load */}
  </div>
</section>
```

**Testing:**
1. Open `http://localhost:8081/studios-engine`
2. On page load, scroll position should be 0
3. BriefToStoryboardAnimation should NOT be visible without scrolling
4. If visible on load, increase hero `min-h-[130vh]` to `min-h-[140vh]` or `min-h-[150vh]`

---

### Phase 3: Set Initial Hidden State

**File:** `src/components/briefing/BriefToStoryboardAnimation.tsx`
**Location:** Inside `useGSAP` hook, BEFORE any timelines

**Current Code Structure (lines ~143-233):**
```tsx
useGSAP(() => {
  // Lenis readiness checks...

  // INTRO TIMELINE (Stage 1 - Alpine Water Hero)
  if (heroShellRef.current) {
    gsap.set(heroShellRef.current, { autoAlpha: 0, y: 40, scale: 0.94 });
    // ... more intro sets ...

    const introTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.3
    });
    // ... intro animations ...
  }

  // SCROLL TIMELINE (Frames 1-5 transformation)
  // ...
}, {
  scope: containerRef,
  dependencies: [lenisReady]
});
```

**Add BEFORE Intro Timeline Section:**

```tsx
// ========================================
// ENTRANCE ANIMATION - Initial Hidden State
// ========================================

// Set entire container to hidden, out of focus, scaled down, below position
gsap.set(containerRef.current, {
  autoAlpha: 0,              // Invisible + visibility:hidden
  y: 80,                     // 80px below natural position
  scale: 0.88,               // Slightly scaled down (12% smaller)
  filter: "blur(20px)",      // Heavy blur (out of focus)
  transformOrigin: "50% 50%" // Scale from center
});
```

**Why These Values:**
- `autoAlpha: 0` → Invisible but takes up layout space
- `y: 80` → Subtle vertical offset (not too dramatic)
- `scale: 0.88` → Perceptible scale change without being cartoony
- `blur(20px)` → Strong blur that's noticeable when focusing
- `transformOrigin` → Ensures scale animates from center, not corner

---

### Phase 4: Create Entrance ScrollTrigger

**Add AFTER Initial Hidden State, BEFORE Intro Timeline:**

```tsx
// ========================================
// ENTRANCE SCROLLTRIGGER - Cinematic Focus Pull
// ========================================

// Create entrance reveal timeline (hidden → visible with blur/scale/y)
const entranceTimeline = gsap.timeline({
  paused: true,  // Don't play automatically
  defaults: { ease: "power3.out" }  // Smooth deceleration
});

entranceTimeline.to(containerRef.current, {
  autoAlpha: 1,              // Fade in
  y: 0,                      // Slide to natural position
  scale: 1,                  // Scale to normal size
  filter: "blur(0px)",       // Snap into focus
  duration: 1.2,             // 1.2 seconds (feels premium, not rushed)
  ease: "power3.out",        // Smooth ease-out (starts fast, ends slow)

  // When entrance completes, play intro timeline
  onComplete: () => {
    if (heroShellRef.current) {
      introTimeline.play();  // Chain to existing intro
    }
  }
});

// ScrollTrigger to fire entrance when container 20% into viewport
ScrollTrigger.create({
  trigger: containerRef.current,
  start: "top 80%",          // Fires when container top hits 80% down viewport
  once: true,                // Only fire once (don't re-trigger on scroll up)
  markers: true,             // DEBUG: Remove after testing
  onEnter: () => {
    console.log('[Entrance] ScrollTrigger fired, playing entrance timeline');
    entranceTimeline.play();
  }
});
```

**Critical Details:**
- `start: "top 80%"` → Trigger fires when container's top edge reaches 80% down the viewport (20% visible)
- `once: true` → Prevents re-triggering on scroll back up
- `paused: true` → Timeline waits for ScrollTrigger to play it
- `onComplete` → Chains to existing intro timeline seamlessly

---

### Phase 5: Modify Intro Timeline to NOT Auto-Play

**Current Code (lines ~216-232):**
```tsx
const introTimeline = gsap.timeline({
  defaults: { ease: "power3.out" },
  delay: 0.3  // ❌ Plays automatically after 0.3s
});
```

**Change To:**
```tsx
const introTimeline = gsap.timeline({
  paused: true,              // ✅ Don't auto-play, wait for entrance onComplete
  defaults: { ease: "power3.out" }
  // delay removed - no longer needed
});
```

**Why:** Intro timeline should only play AFTER entrance completes, not on page load.

---

### Phase 6: Timeline Execution Flow

**Desired User Journey:**

1. **Page Loads (scrollY = 0)**
   - Hero section visible (title, subtitle, CTAs)
   - Animation container hidden below fold (`autoAlpha: 0, blur(20px), y: 80, scale: 0.88`)

2. **User Scrolls Down (~300-500px)**
   - Container top edge reaches 80% down viewport
   - Entrance ScrollTrigger fires (`once: true`)
   - Entrance timeline plays (1.2s)
     - Container fades in (`autoAlpha: 0 → 1`)
     - Container snaps into focus (`blur(20px) → blur(0px)`)
     - Container scales to normal (`scale: 0.88 → 1`)
     - Container slides into position (`y: 80 → 0`)

3. **Entrance Completes**
   - `onComplete` callback fires
   - Intro timeline plays (Alpine Water hero animations)
   - Hero form elements cascade in (grid, arc, label, headline, etc.)

4. **Intro Completes**
   - User continues scrolling
   - Scroll-controlled transformation activates (Frames 1→2→3→4→5)

**Visual Metaphor:** "Content emerges from fog, comes into focus, materializes in place"

---

## Code Organization

### Final Code Structure (useGSAP hook)

```tsx
useGSAP(() => {
  // 1. Readiness Checks
  if (!lenisReady) return;
  if (!containerRef.current) return;

  // 2. ENTRANCE - Initial Hidden State
  gsap.set(containerRef.current, { /* blur + scale + y + autoAlpha */ });

  // 3. ENTRANCE - Create Timeline
  const entranceTimeline = gsap.timeline({ paused: true });
  entranceTimeline.to(containerRef.current, { /* reveal animation */ });

  // 4. ENTRANCE - ScrollTrigger
  ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top 80%",
    once: true,
    onEnter: () => entranceTimeline.play()
  });

  // 5. INTRO - Set Initial States (only if hero refs exist)
  if (heroShellRef.current) {
    gsap.set(heroShellRef.current, { /* initial states */ });
    // ... other hero refs ...

    // 6. INTRO - Create Timeline (paused, triggered by entrance onComplete)
    const introTimeline = gsap.timeline({ paused: true });
    introTimeline
      .to(heroShellRef.current, { /* animations */ })
      .to(heroGridRef.current, { /* animations */ }, "<")
      // ... other hero animations ...

    // 7. ENTRANCE - Chain to Intro
    entranceTimeline.eventCallback("onComplete", () => {
      introTimeline.play();
    });

    // 8. INTRO - Infinite Animations
    gsap.to(heroArcRef.current, { rotation: 360, repeat: -1 });
    // ... other infinite animations ...
  }

  // 9. SCROLL TRANSFORMATION - Frames 1-5 (existing code unchanged)
  const sections = stageRefs.current.filter(Boolean);
  // ... existing scroll timeline code ...

}, { scope: containerRef, dependencies: [lenisReady] });
```

---

## Testing Checklist

### Visual Testing

1. **Page Load State**
   - [ ] Navigate to `http://localhost:8081/studios-engine`
   - [ ] Animation container should NOT be visible
   - [ ] Only hero section (title, subtitle, CTAs) visible
   - [ ] ScrollTrigger markers should show below fold

2. **Entrance Animation**
   - [ ] Scroll down slowly (~300-500px)
   - [ ] Container should fade in from blurred → sharp
   - [ ] Container should scale up (subtle growth)
   - [ ] Container should slide up into position
   - [ ] Total animation should feel smooth, ~1.2 seconds
   - [ ] Should feel "cinematic" like camera focusing

3. **Intro Animation Chaining**
   - [ ] After entrance completes, Alpine Water hero should animate
   - [ ] Grid, arc, headline, form fields should cascade in
   - [ ] No gap between entrance ending and intro starting
   - [ ] No double-animation or stutter

4. **Scroll Transformation**
   - [ ] Continue scrolling down
   - [ ] Frame 1 (Alpine Water) should pin
   - [ ] Frames 2→3→4→5 should transform as user scrolls
   - [ ] Frame 5 should have enough viewing time before unpin

5. **Reverse Scroll**
   - [ ] Scroll back up to top
   - [ ] Entrance should NOT re-trigger (`once: true`)
   - [ ] Container should remain visible

### Browser Testing

- [ ] Chrome (dev machine)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile viewport (Chrome DevTools)

### Performance Testing

1. **GPU Usage**
   - [ ] Open Chrome DevTools → Performance → Record
   - [ ] Scroll through entrance animation
   - [ ] Check for GPU acceleration (green bars in rendering)
   - [ ] Blur should use GPU (check for compositing layers)

2. **Frame Rate**
   - [ ] Should maintain 60fps during entrance
   - [ ] No frame drops or jank
   - [ ] Smooth throughout

---

## Debugging Guide

### Common Issues & Solutions

**Issue 1: Container Visible on Page Load**

```
Problem: Animation container appears at bottom of viewport on load
Solution: Increase hero height in BriefingEngine.tsx
- Change min-h-[130vh] to min-h-[150vh]
- Test by checking if container below fold at scrollY=0
```

**Issue 2: Entrance Doesn't Fire**

```
Problem: Scrolling down doesn't trigger entrance animation
Debug Steps:
1. Check ScrollTrigger markers (should see green line at 80%)
2. Console should log "[Entrance] ScrollTrigger fired..."
3. Verify containerRef.current exists
4. Check start: "top 80%" position with markers
5. Try changing to "top 70%" if fires too late
```

**Issue 3: Blur Performance Issues**

```
Problem: Blur animation is choppy/laggy
Solutions:
1. Reduce blur amount: blur(20px) → blur(12px)
2. Add will-change hint:
   gsap.set(containerRef.current, { willChange: "filter, transform" })
3. Check GPU acceleration in DevTools
4. If still laggy, remove blur and use only scale + y
```

**Issue 4: Intro Plays Immediately**

```
Problem: Alpine Water hero animates before entrance completes
Solution: Ensure introTimeline has paused: true
- Remove delay: 0.3 from intro timeline
- Verify onComplete callback is wired correctly:
  entranceTimeline.eventCallback("onComplete", () => introTimeline.play())
```

**Issue 5: Entrance Re-triggers on Scroll Up**

```
Problem: Animation repeats when scrolling back up
Solution: Ensure once: true in ScrollTrigger.create()
- Verify it's set correctly
- Check console logs for multiple "[Entrance] fired" messages
```

---

## Archon MCP Research Tasks

### Pre-Implementation Research (Do First!)

**Task 1: Understand Filter Performance**
```typescript
mcp__archon__rag_search_knowledge_base({
  query: "GSAP filter blur GPU performance",
  match_count: 5
})
```
**What to Look For:**
- Is blur GPU-accelerated?
- Should we use will-change?
- Are there performance caveats?

**Task 2: Review Timeline Chaining Patterns**
```typescript
mcp__archon__rag_search_code_examples({
  query: "GSAP timeline onComplete callback",
  match_count: 3
})
```
**What to Look For:**
- Best practices for chaining timelines
- Using `eventCallback` vs inline `onComplete`
- React-specific cleanup considerations

**Task 3: ScrollTrigger Start/Once Patterns**
```typescript
mcp__archon__rag_search_knowledge_base({
  query: "ScrollTrigger once true start viewport",
  match_count: 5
})
```
**What to Look For:**
- Confirm `once: true` prevents re-trigger
- Understand start position syntax ("top 80%")
- Best practices for entrance animations

### Troubleshooting Research (If Issues Arise)

**If Blur is Laggy:**
```typescript
mcp__archon__rag_search_knowledge_base({
  query: "GSAP filter transform performance optimization",
  match_count: 5
})
```

**If Timelines Don't Chain:**
```typescript
mcp__archon__rag_search_code_examples({
  query: "GSAP timeline sequence callback",
  match_count: 3
})
```

**If React Cleanup Issues:**
```typescript
mcp__archon__rag_search_knowledge_base({
  query: "GSAP React useGSAP cleanup",
  match_count: 5
})
```

---

## Context from Previous Session

### Bugs Fixed (DO NOT REINTRODUCE!)

1. **Frame 1 Bleeding Through Bug** (FIXED)
   - **Issue:** Frame 1 visible in background of all other frames
   - **Cause:** Line 335-348 had logic bug: `if (index > 0 && index - 1 > 0)`
   - **Fix:** Changed to `if (index > 0)` - now properly hides previous frames
   - **Location:** BriefToStoryboardAnimation.tsx line 336

2. **Frame 5 No Viewing Time Bug** (FIXED)
   - **Issue:** Frame 5 appeared and immediately unpinned
   - **Cause:** Timeline too short, no dwell time after last frame
   - **Fix:** Added `scrollTimeline.to({}, { duration: 2 })` for 2-second dwell
   - **Location:** BriefToStoryboardAnimation.tsx line 402

3. **Pin Start Position Bug** (FIXED)
   - **Issue:** Pin started too early, content cut off at bottom
   - **Cause:** `start: "top-=20 top"` was too aggressive
   - **Fix:** Changed to `start: "top+=15 top"` - delays pin slightly
   - **Location:** BriefToStoryboardAnimation.tsx line 338

4. **ScrollTrigger Progress Stuck Bug** (FIXED)
   - **Issue:** Progress always 0.004, timeline frozen despite ScrollTrigger entering
   - **Root Cause:** Lenis smooth scroller not connected to ScrollTrigger update loop
   - **Fix:** Added `lenisReady` state to ensure `useLenis(() => ScrollTrigger.update())` callback registered before creating ScrollTrigger
   - **Location:** BriefToStoryboardAnimation.tsx lines 136-141, 148-151

### Current Working Configuration

**Timeline Duration:** `end: "+=6720"` (extended for Frame 5 dwell time)
**Pin Trigger:** `start: "top+=15 top"` (optimal position, user tested)
**Scrub:** `scrub: 1` (1 second smooth lag)
**Lenis Integration:** `useLenis(() => ScrollTrigger.update())` with `lenisReady` state guard

### Architecture Decisions

**Version Used:** Version 2 (Alpine Water Hero) with `useGSAP` hook
**Why:** Cleanest implementation, proper React cleanup, best performance
**Reference:** docs/stories/story-1.7.md lines 34-63

**Lenis Integration Pattern:**
```tsx
const lenis = useLenis(() => ScrollTrigger.update());
const [lenisReady, setLenisReady] = useState(false);

useEffect(() => {
  if (lenis && !lenisReady) {
    requestAnimationFrame(() => setLenisReady(true));
  }
}, [lenis, lenisReady]);

useGSAP(() => {
  if (!lenisReady) return; // ← CRITICAL: Wait for callback registration
  // ... create ScrollTriggers ...
}, { dependencies: [lenisReady] });
```

**Why This Pattern:** Ensures `useLenis` callback is fully registered before ScrollTrigger creation, preventing progress update issues.

---

## Acceptance Criteria

### Must-Have

- [ ] Container hidden on page load (`autoAlpha: 0`)
- [ ] Entrance triggers at `start: "top 80%"`
- [ ] Blur animation smooth (no jank)
- [ ] Scale animation subtle and premium-feeling
- [ ] Entrance → Intro chain seamless (no gap)
- [ ] Intro → Scroll transformation unchanged (existing behavior preserved)
- [ ] Entrance only fires once (`once: true`)
- [ ] All 5 frames still work correctly
- [ ] Frame 5 still has proper viewing time
- [ ] Pin position still optimal (no text cutoff)

### Nice-to-Have

- [ ] Entrance duration customizable via prop
- [ ] Entrance disabled on `prefers-reduced-motion` (if time permits)
- [ ] Mobile: Skip entrance, show container immediately
- [ ] Debug mode prop to show entrance markers

---

## Rollback Plan

If entrance animation causes issues:

1. **Remove entrance code** (lines added in Phase 3-5)
2. **Restore intro timeline auto-play:**
   ```tsx
   const introTimeline = gsap.timeline({
     defaults: { ease: "power3.out" },
     delay: 0.3  // Restore original delay
   });
   ```
3. **Remove container initial hidden state** (Phase 3 gsap.set)
4. **Test that intro and scroll transformation still work**

---

## Files to Modify

1. **BriefToStoryboardAnimation.tsx** (primary changes)
   - Lines ~143-233: Add entrance animation
   - Lines ~216-232: Modify intro timeline (paused: true)

2. **BriefingEngine.tsx** (verify only)
   - Lines ~54-104: Verify hero height pushes container below fold

3. **Testing Screenshots** (reference)
   - `public/testing-screenshots/2025-10/chrome_eHU1jPjpNH.png`

---

## External Resources

### GSAP Documentation
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Timeline: https://gsap.com/docs/v3/GSAP/Timeline/
- useGSAP: https://gsap.com/docs/v3/React/

### Performance
- GPU Acceleration: https://gsap.com/resources/GPU-Performance/
- React Integration: https://gsap.com/react/

### Inspiration (Premium Sites)
- Apple Product Pages (3D reveals)
- Stripe Homepage (elastic entrances)
- Linear (staggered reveals)

---

## Notes for Dev Agent

### Critical Success Factors

1. **Test Incrementally**
   - Add entrance gsap.set → test (container hidden?)
   - Add entrance timeline → test (can manually trigger?)
   - Add ScrollTrigger → test (fires at right position?)
   - Add intro chaining → test (seamless transition?)

2. **Use Console Logs**
   - Log when entrance ScrollTrigger fires
   - Log when entrance timeline completes
   - Log when intro timeline starts
   - Remove after testing

3. **Use ScrollTrigger Markers**
   - `markers: true` shows green line at trigger point
   - Verify trigger fires when container 20% visible
   - Remove after testing

4. **GPU Performance**
   - Open DevTools → Performance tab
   - Record during entrance animation
   - Check for GPU rendering (green bars good, purple bars bad)
   - If blur is laggy, reduce from 20px to 12px or remove entirely

### Questions to Ask If Stuck

- Is container actually below fold on page load? (scroll position should be 0)
- Does entrance ScrollTrigger fire? (check console logs)
- Is blur smooth or choppy? (check GPU acceleration)
- Does intro play after entrance? (check onComplete callback)
- Do all 5 frames still work? (test full scroll through)

---

## Implementation Timeline

**Estimated Total Time:** 2-3 hours

- **Research (30 min):** Archon MCP searches, review GSAP docs
- **Implementation (60 min):** Add entrance code, wire up chaining
- **Testing (45 min):** Visual testing, browser testing, performance
- **Debugging (30 min):** Fix any issues, tune timings
- **Cleanup (15 min):** Remove debug logs/markers, update story

---

## Success Metrics

- [ ] Container invisible on load (scrollY = 0)
- [ ] Entrance animation feels "premium" (smooth, cinematic)
- [ ] Total entrance duration ~1.2 seconds (not rushed)
- [ ] Maintains 60fps throughout entrance
- [ ] No jank or frame drops
- [ ] Intro plays seamlessly after entrance
- [ ] All existing functionality preserved
- [ ] User testing: "Wow that's a nice effect!"

---

## References

- Story 1.7: `docs/stories/story-1.7.md`
- Animation Patterns: `docs/architecture/animation-patterns.md` lines 148-206
- Coding Standards: `docs/architecture/coding-standards.md`
- Screenshot: `public/testing-screenshots/2025-10/chrome_eHU1jPjpNH.png`

---

**END OF IMPLEMENTATION PLAN**

*Generated: 2025-10-08*
*For: Dev Agent (New Chat)*
*Context: Continuation of Story 1.7 implementation*
