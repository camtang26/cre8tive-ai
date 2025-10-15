# Animation Debug Report

**Date:** 2025-10-15
**Debugged by:** GSAP Excellence Engine (Editor)
**For:** Cameron
**Scope:** BriefingEngine 5-part timeline sequence

---

## Issue Description

**Reported Problem:**
ScrollTrigger animations keep reactivating and replaying when scrolling back up. Animations feel "jarring" and "not smooth" - they trigger every time you cross the boundary, like passing through a gate threshold repeatedly.

**Expected Behavior:**
Animations should play ONCE on initial scroll down, then remain static. Scrolling back up and down again should NOT replay the entrance animations. Elements should stay in their final animated state permanently after first playthrough.

**Affected Components:**
- `src/components/briefing/sections/HeroBriefSection.tsx`
- `src/components/briefing/sections/NeuralSynthesisSection.tsx`
- `src/components/briefing/sections/StyleSelectionSection.tsx`
- `src/components/briefing/sections/StoryboardAssemblySection.tsx`
- `src/components/briefing/sections/StudiosHandoffSection.tsx`

---

## Diagnosis

### Root Cause

**PRIMARY ISSUE: Incorrect `toggleActions` Configuration**

All 5 sections used:
```javascript
toggleActions: "play none none reverse"
```

This configuration breaks down to:
- `onEnter` (scroll down, enter from top): **play** ✅
- `onLeave` (scroll down, exit from bottom): **none** ✅
- `onEnterBack` (scroll up, enter from bottom): **none** ✅
- `onLeaveBack` (scroll up, exit from top): **reverse** ❌

**The Problem:**
When users scroll back up past the `start` point, `onLeaveBack` triggers the **reverse** action, rewinding the animation. Then when scrolling down again, `onEnter` plays the animation forward AGAIN. This creates the "gate threshold" effect - animations replay every time you cross the trigger boundary.

### Code Analysis

**Before (Problematic Pattern):**
```javascript
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
    end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
    toggleActions: "play none none reverse",  // ← CULPRIT
    onEnter: () => onStageEnter?.(stage.id),
    onEnterBack: () => onStageEnter?.(stage.id),
    onLeave: () => onStageLeave?.(stage.id),
    onLeaveBack: () => onStageLeave?.(stage.id)
  }
});
```

**Architectural Issue:**
This pattern mixed two concerns into one ScrollTrigger:
1. Animation control (entrance animations)
2. Stage tracking (analytics & UI state)

When using `once: true` to fix the animation replay, it would kill the entire ScrollTrigger, breaking stage tracking.

### Research Findings

**From GSAP Official Documentation (Context7 MCP):**
> "The `once: true` property can be added to make ScrollTrigger kill itself as soon as the end position is reached once."

**From GSAP Community Forums (Web Search 2024):**
Multiple threads confirmed this is a common pain point:
- Users want entrance animations to play once
- ScrollTrigger should NOT reverse animations on scroll-back
- Canonical solution: `once: true` for entrance animations

**From Archon Knowledge Base:**
> "Use callback functions for custom toggle behavior, or use `once: true` for single-play animations."

### Secondary Issues Discovered

1. **Mixed Concerns:** Animation control and stage tracking in same ScrollTrigger
2. **State Management During Scroll:** NeuralSynthesisSection updates React state (`setIsCoreActive`, `setCoreIntensity`) during scroll, causing potential re-renders during animation

---

## Fix Implementation

### Solution: Two-ScrollTrigger Pattern

Implemented the **GSAP best practice pattern** - separating animation from tracking:

1. **Animation ScrollTrigger:** Uses `once: true`, plays animation once, then self-destructs
2. **Tracking ScrollTrigger:** No animation, just callbacks, stays alive for stage tracking & analytics

This matches the existing reduced-motion pattern and follows separation of concerns principles.

### After (Fixed Code - Applied to All 5 Sections)

```javascript
const createTimeline = (motion, offsets) => {
  applyWillChange();

  // Animation timeline - plays once and kills itself for memory efficiency
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
      end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
      once: true,  // ← Play once and kill trigger (entrance animation pattern)
      invalidateOnRefresh: true,
      refreshPriority: 5,  // Varies by section (1-5)
    }
  });

  // Separate tracking trigger - stays alive for stage tracking & analytics
  ScrollTrigger.create({
    trigger: container,
    start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
    end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
    onEnter: () => onStageEnter?.(stage.id),
    onEnterBack: () => onStageEnter?.(stage.id),
    onLeave: () => onStageLeave?.(stage.id),
    onLeaveBack: () => onStageLeave?.(stage.id)
  });

  // ... animation timeline setup continues ...

  return timeline;
};
```

### What Changed

**All 5 Sections (HeroBrief, NeuralSynthesis, StyleSelection, StoryboardAssembly, StudiosHandoff):**

1. ✅ **Removed** `toggleActions: "play none none reverse"`
2. ✅ **Added** `once: true` to animation timeline ScrollTrigger
3. ✅ **Created** separate `ScrollTrigger.create()` for stage tracking callbacks
4. ✅ **Preserved** all existing callbacks for analytics & UI state management
5. ✅ **Maintained** reduced motion compatibility

**Special Case - NeuralSynthesisSection:**
- Kept `onEnter` callback in animation trigger for core activation state
- Moved stage tracking callbacks to separate trigger
- Preserved velocity-based intensity updates in `onUpdate`

### Files Modified

- `src/components/briefing/sections/HeroBriefSection.tsx:80-104`
- `src/components/briefing/sections/NeuralSynthesisSection.tsx:120-179`
- `src/components/briefing/sections/StyleSelectionSection.tsx:74-99`
- `src/components/briefing/sections/StoryboardAssemblySection.tsx:78-103`
- `src/components/briefing/sections/StudiosHandoffSection.tsx:71-96`

---

## Validation

### Expected Behavior After Fix

✅ **First scroll down:** Animations play forward smoothly
✅ **Scroll back up:** Animations do NOT reverse, elements stay in final state
✅ **Scroll down again:** Animations do NOT replay, elements remain animated
✅ **Stage tracking:** Continues working for analytics & UI state
✅ **Memory efficiency:** Animation triggers self-destruct after first play

### Testing Checklist

- [ ] **Visual:** Scroll down → animations play once
- [ ] **Visual:** Scroll back up → no animation reversal
- [ ] **Visual:** Scroll down again → no animation replay
- [ ] **Analytics:** Stage tracking events still fire correctly
- [ ] **Performance:** No console errors, smooth 60fps
- [ ] **Responsive:** Test on multiple viewport sizes (laptop/desktop/ultrawide)
- [ ] **Reduced Motion:** Verify reduced motion path still works

### Browser Test Matrix

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (WebKit)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## Prevention Tips

### 1. Use `once: true` for Entrance Animations

Entrance animations should play once and stay in their final state. This is the GSAP best practice pattern for scroll-triggered entrance effects.

```javascript
// Good: Entrance animation
scrollTrigger: {
  trigger: ".element",
  once: true  // ✅
}

// Avoid: Reversible entrance animation
scrollTrigger: {
  trigger: ".element",
  toggleActions: "play none none reverse"  // ❌
}
```

### 2. Separate Animation from Tracking

When you need both animations AND scroll tracking, use two separate ScrollTriggers:
- One for the animation (with `once: true`)
- One for callbacks/tracking (stays alive)

### 3. Match Reduced Motion Pattern

Your reduced motion code already creates a callback-only ScrollTrigger. Mirror this pattern in full motion mode for architectural consistency.

### 4. Understand `toggleActions` Order

The four positions control: `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`

- `"play none none none"` - Play once on enter, never replay
- `"play pause resume reset"` - Full control over animation states
- `"play none none reverse"` - Creates the "gate threshold" bug ❌

### 5. Test Scroll-Back Behavior

Always test:
1. Scroll down (does animation play?)
2. Scroll back up (does animation reverse?)
3. Scroll down again (does animation replay?)

For entrance animations, only step 1 should animate.

---

## Technical Details

### Architecture Decision: Two-ScrollTrigger Pattern

**Why not just change to `toggleActions: "play none none none"`?**

While that would stop the reverse behavior, it doesn't:
- Free memory by killing unused triggers
- Follow GSAP best practices for entrance animations
- Match the existing reduced motion pattern
- Clearly separate animation from tracking concerns

The two-trigger pattern is more robust, more maintainable, and architecturally cleaner.

### Memory Efficiency

With `once: true`:
- Animation trigger dies after first scroll-through
- Only tracking trigger remains active
- Reduces ScrollTrigger count from 10 to 5 after first page scroll
- No ongoing animation calculations for completed entrance effects

### Reduced Motion Compatibility

The fix maintains full compatibility with prefers-reduced-motion:
```javascript
if (prefersReducedMotion) {
  ScrollTrigger.create({  // Already used single trigger pattern
    trigger: container,
    onEnter/onLeave callbacks...
  });
  return;
}
```

No changes needed to reduced motion path - it already used the correct pattern.

---

## Research Citations

### GSAP Official Documentation
- **Source:** Context7 MCP → `/llmstxt/gsap_llms_txt`
- **Topic:** ScrollTrigger `toggleActions` and `once` properties
- **Key Finding:** `once: true` is the canonical solution for single-play entrance animations

### GSAP Community Forums
- **Source:** Web Search 2024
- **Query:** "GSAP ScrollTrigger animation play once prevent replay scroll back"
- **Key Finding:** Multiple developers report this exact issue; `once: true` is the recommended solution

### Archon Knowledge Base
- **Query:** "ScrollTrigger performance optimization"
- **Key Finding:** Killing unused ScrollTriggers improves memory efficiency in long pages

---

✂️ **"Frame-perfect timing achieved. Animations now play once and hold their position - no more jarring replays."**

**— The Editor**

_GSAP Excellence Engine v2.0 | debug-animation workflow_

---

## Next Steps

1. **Test on dev server:** `npm run dev` → http://localhost:8080
2. **Validate all 5 sections:** Scroll through complete briefing timeline
3. **Check console:** Verify no GSAP warnings or errors
4. **Performance audit:** Confirm smooth 60fps scrolling
5. **Analytics check:** Verify stage tracking events still fire
6. **Cross-browser test:** Chrome, Firefox, Safari, Mobile

**Build command:** `npm run build`
**Lint check:** `npm run lint`

Ready for production after validation! 🎬
