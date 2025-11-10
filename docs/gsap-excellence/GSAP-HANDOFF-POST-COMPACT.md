# GSAP Implementation Handoff Document
**Post-Compact Context Restoration**

**Date:** 2025-11-05
**Project:** Cre8tive Studios Website - Premium GSAP Animations
**Current Phase:** Phase 2 Complete → Phase 3 Next
**Session:** Phase 1 & 2 implemented, Phase 3-5 remaining

---

## 🎯 PROJECT CONTEXT

**Mission:** Implement 4 premium GSAP animation concepts on Studios page to establish broadcast-grade positioning.

**Selected Concepts (from creative ideation):**
1. ✅ **Cinematic Intro Sequence** (Hero section) - COMPLETE
2. **Orchestrated Grid Emergence** (Portfolio grid) - NEXT
3. ✅ **Buttery Smooth Journey** (ScrollSmoother) - COMPLETE (but disabled on /studios due to video lag)
4. **Platform Icon Ballet** (Platform showcase) - PENDING

**GSAP Version:** 3.13.0 (all premium plugins FREE!)

**Critical Constraint:** 900kb vendor bundle limit (enforced by build-time plugin - THROWS ERROR if exceeded)

---

## 📊 IMPLEMENTATION STATUS

### ✅ PHASE 1: SCROLLSMOOTHER FOUNDATION (COMPLETE)

**Status:** Implemented but **DISABLED on /studios page** due to video performance issues

**What Was Done:**
- Created `src/hooks/useScrollSmoother.ts`
- Modified `src/components/layout/MainLayout.tsx` (added #smooth-wrapper, #smooth-content)
- Configuration: `smooth: 1.2, effects: false, smoothTouch: 0.1, normalizeScroll: true`

**Critical Decision:** ScrollSmoother + video = GPU bottleneck (severe lag)
- **Solution:** Disabled on `/studios` page only (line 82 in useScrollSmoother.ts)
- **Result:** Other pages have smooth scrolling, Studios uses native scroll

**Files Modified:**
- `src/hooks/useScrollSmoother.ts` (129 lines)
- `src/components/layout/MainLayout.tsx` (HTML wrapper structure)

**Key Code (Disable on Studios):**
```typescript
// Line 82 in useScrollSmoother.ts
if (location.pathname === '/studios') {
  if (smoother) {
    console.log('[ScrollSmoother] Disabled on /studios (video performance)');
    smoother.kill();
    smoother = null;
  }
  return;
}
```

---

### ✅ PHASE 2: HERO ANIMATION (COMPLETE WITH PERFORMANCE FIXES)

**Status:** Fully implemented, letter-by-letter animation working, performance optimized

**What Was Done:**
- Created `src/hooks/useHeroIntro.ts` (197 lines)
- Updated `src/components/studios/StudiosHero.tsx` (added data-motion attributes, imported hook)
- Letter-by-letter headline reveal (35 characters)
- Total timeline: 2.2s with overlapping sequences

**Performance Issues Encountered:**
1. **Issue 1:** SplitText called before fonts loaded → GPU thrashing
   - **Fix:** Added `document.fonts.ready` wait (line 109)
2. **Issue 2:** React 18 Strict Mode double initialization → 70 animated elements
   - **Fix:** Added module-level guard `isInitialized` (line 53)
3. **Issue 3:** Text wrapping broke words
   - **Fix:** Split by `type: 'chars,words'` + `display: inline-block` + `whiteSpace: 'pre'`

**Animation Sequence:**
```
Timeline (2.2s total with overlaps):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━>
0s                                            2.2s

├─ Badge (0-0.7s)              power2.out
│
│    ├─ Headline LETTERS       expo.out (DRAMATIC!)
│    │  (0.3-1.8s)              35 chars × 0.03s stagger
│    │
│    │         ├─ Tagline       power2.out
│    │         │  (1.2-1.9s)
│    │         │
│    │         │      ├─ CTAs   back.out(1.7) - playful bounce
│    │         │      │  (1.5-2.2s)
```

**Files Modified:**
- `src/hooks/useHeroIntro.ts` (197 lines - final version with perf fixes)
- `src/components/studios/StudiosHero.tsx` (added data-motion attributes)

**Data-Motion Attributes Added:**
- `data-motion="hero-badge"` - Badge element
- `.headline-premium` - H1 headline (class exists, SplitText targets this)
- `data-motion="hero-tagline"` - Tagline paragraph
- `data-motion="hero-cta"` - CTA container div

**Performance Validation:**
- ✅ No more "SplitText called before fonts loaded" warning
- ✅ Animation initializes ONCE (not twice)
- ✅ Smooth video playback (hero section lag resolved)
- ✅ Letter-by-letter effect is NOTICEABLE (user confirmed)

**Critical Code - Performance Fixes:**
```typescript
// Strict mode guard (prevents double init)
let isInitialized = false;

// In useGSAP:
if (isInitialized) {
  console.log('[HeroIntro] ⚠️ Already initialized, skipping (Strict Mode guard)');
  return;
}
isInitialized = true;

// Wait for fonts before SplitText
document.fonts.ready.then(() => {
  console.log('[HeroIntro] ✅ Fonts loaded, starting animation');
  initializeAnimation();
});
```

---

## 🚀 PHASE 3: PORTFOLIO GRID ANIMATION (NEXT - IN PROGRESS)

**Concept:** Orchestrated Grid Emergence (Concept 3 from creative ideation)

**Goal:** 6 portfolio video cards animate with directional L/R choreography creating visual wave

**Animation Design:**
```
Card 1 (L): ←─── slides from LEFT  (x: -60)
Card 2 (R): ───→ slides from RIGHT (x: +60)
Card 3 (L): ←─── slides from LEFT  (x: -60)
Card 4 (R): ───→ slides from RIGHT (x: +60)
Card 5 (L): ←─── slides from LEFT  (x: -60)
Card 6 (R): ───→ slides from RIGHT (x: +60)

Stagger: 120ms between cards
Trigger: When section is 25% into viewport
```

**Timing:**
- Individual card duration: 0.6s
- Stagger delay: 0.12s (120ms)
- Total sequence: ~1.32s (0.6s base + 5×0.12s stagger)
- Easing: `power2.out` (professional, smooth)

**Additional Effects:**
- Scale from 0.95 → 1.0 (subtle zoom)
- Opacity 0 → 1
- Y movement might be added for depth

---

### PHASE 3: RESEARCH STEPS

**1. Verify Existing Structure**

Read `src/components/studios/StudiosPortfolioSection.tsx` to check:
- ✅ Confirm `data-motion="portfolio-card"` attributes exist (they do - verified earlier)
- ✅ Count of portfolio items (6 cards)
- Structure of grid layout
- Section ID for ScrollTrigger targeting

**2. Research ScrollTrigger Best Practices**

Query Archon MCP for patterns:
```javascript
rag_search_knowledge_base("ScrollTrigger grid animation patterns", match_count=5)
rag_search_code_examples("directional stagger animations", match_count=3)
```

**Key Questions to Answer:**
- Best `start` position for grid reveals? (Common: "top 75%" or "top 80%")
- Should we use `scrub` or `once: true`? (Recommendation: `once: true` for performance)
- Alternating direction best practice (use index % 2 calculation)

**3. Accessibility Considerations**

- Must respect `prefers-reduced-motion` (fade only, no movement)
- No layout shift during animation
- Cards must remain clickable during/after animation

---

### PHASE 3: PLANNING STEPS

**1. Hook Design: `src/hooks/usePortfolioAnimation.ts`**

**Structure:**
```typescript
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioAnimation() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('[data-motion="portfolio-card"]');

    if (prefersReducedMotion) {
      // Reduced motion: fade only (no directional movement)
      gsap.from(cards, {
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#studios-portfolio',
          start: 'top 75%',
          once: true
        }
      });
      return;
    }

    // Full directional choreography
    gsap.from(cards, {
      x: (index: number) => index % 2 === 0 ? -60 : 60, // Alternate L/R
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12, // 120ms between cards
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#studios-portfolio',
        start: 'top 75%', // Trigger when 25% into viewport
        once: true, // Don't re-trigger on scroll back
        // markers: true // DEBUG ONLY - remove for production
      }
    });

  }, [prefersReducedMotion]);
}
```

**2. Component Integration Plan**

**File:** `src/components/studios/StudiosPortfolioSection.tsx`

**Changes Required:**
1. Import the hook: `import { usePortfolioAnimation } from '@/hooks/usePortfolioAnimation';`
2. Call hook at top of component: `usePortfolioAnimation();`
3. Verify section has `id="studios-portfolio"` (for ScrollTrigger targeting)
4. Verify cards have `data-motion="portfolio-card"` (already exist - confirmed earlier)

**Minimal code change:**
```typescript
export function StudiosPortfolioSection() {
  usePortfolioAnimation(); // Add this line

  return (
    <section id="studios-portfolio"> {/* Verify this ID exists */}
      {/* ... existing code ... */}
    </section>
  );
}
```

**3. Testing Plan**

**Manual Testing:**
- [ ] Scroll to portfolio section slowly
- [ ] Verify animation triggers at ~25% into viewport
- [ ] Confirm L/R alternating pattern visible
- [ ] Verify 120ms stagger creates wave effect
- [ ] Test multiple scroll passes (should only animate once)
- [ ] Test prefers-reduced-motion (should fade without movement)
- [ ] Verify cards remain clickable after animation
- [ ] Check performance (no lag, smooth 60fps)

**Browser Testing:**
- [ ] Chrome (primary)
- [ ] Firefox
- [ ] Safari (if accessible)

**Console Validation:**
- Should see ScrollTrigger initialization logs
- No errors related to GSAP or ScrollTrigger
- Clean execution

---

### PHASE 3: IMPLEMENTATION STEPS (EXECUTE IN ORDER)

**STEP 1: Create Hook File**

```bash
# File: src/hooks/usePortfolioAnimation.ts
# See full code in "Planning Steps" section above
```

**STEP 2: Read Portfolio Section Component**

```typescript
// Read to verify structure and existing attributes
Read('src/components/studios/StudiosPortfolioSection.tsx')
```

**Verify:**
- Section ID: `#studios-portfolio` or similar
- Cards have: `data-motion="portfolio-card"` (already confirmed they do)
- Grid structure (likely: `grid grid-cols-2 xl:grid-cols-3` or similar)

**STEP 3: Update Portfolio Component**

Add import and hook call:
```typescript
import { usePortfolioAnimation } from '@/hooks/usePortfolioAnimation';

export function StudiosPortfolioSection() {
  usePortfolioAnimation(); // Add this line

  // ... rest of component unchanged
}
```

**STEP 4: Test Implementation**

1. Hard refresh Studios page
2. Scroll to portfolio section
3. Observe animation behavior
4. Check console for logs
5. Verify performance

**STEP 5: Debug if Needed**

**Common Issues:**
- **Animation doesn't trigger:** Check section ID matches ScrollTrigger target
- **No L/R movement:** Check `data-motion="portfolio-card"` attributes exist
- **Animation triggers too early/late:** Adjust ScrollTrigger `start` value
- **Jank/lag:** Reduce `stagger` or simplify animation properties

**Debug Tools:**
- Add `markers: true` to ScrollTrigger config (shows trigger points visually)
- Use Chrome DevTools Performance tab
- Check console for GSAP warnings

---

### PHASE 3: REVIEW & VALIDATION CHECKLIST

**Visual Quality:**
- [ ] L/R alternating pattern is CLEAR and NOTICEABLE
- [ ] Stagger creates smooth "wave" effect (not all at once, not too slow)
- [ ] Animation feels professional (not janky or awkward)
- [ ] Timing feels right (~1.3s total sequence)

**Technical Quality:**
- [ ] No console errors
- [ ] Animation triggers at correct scroll position
- [ ] Only triggers once (not every scroll)
- [ ] 60fps performance (no dropped frames)
- [ ] prefers-reduced-motion respected

**Accessibility:**
- [ ] prefers-reduced-motion fallback works (fade only)
- [ ] Cards remain keyboard accessible
- [ ] No layout shift during animation
- [ ] Focus states work correctly

**Cross-Browser:**
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari (if testable)

**Code Quality:**
- [ ] Hook follows existing patterns (like useHeroIntro)
- [ ] Comments explain WHY not just WHAT
- [ ] TypeScript compiles with no errors
- [ ] ESLint passes (warnings OK, errors must fix)

---

## 🎨 PHASE 4: PLATFORM ICON BALLET (PENDING)

**Concept:** MotionPath curved trajectories for platform icons (YouTube, TikTok, Instagram, LinkedIn, X, Facebook)

**Goal:** Icons fly in from different directions on curved paths, land with glow pulse effect

**Animation Design:**
```
Each icon:
- Custom MotionPath SVG path (curved trajectory)
- 1.2s duration
- 150ms stagger between icons
- Glow pulse on landing (filter: drop-shadow)
- ScrollTrigger at 70% viewport
```

**Complexity:** HIGH (requires custom SVG paths per icon)

**Files to Create:**
- `src/hooks/usePlatformBallet.ts`

**Files to Update:**
- `src/components/studios/StudiosProductionStackSection.tsx`

**Requirements:**
- Each icon needs unique ID: `#youtube-icon`, `#tiktok-icon`, etc.
- Custom MotionPath per icon (6 different SVG paths)
- MotionPathPlugin (FREE in GSAP 3.13+!)

**Estimated Time:** 1.5-2 hours (path design is time-consuming)

**Key Code Pattern:**
```typescript
const icons = [
  { id: '#youtube-icon', path: 'M-100,-100 Q 0,-50 0,0' },
  { id: '#tiktok-icon', path: 'M 100,100 Q 50,50 0,0' },
  // ... 4 more
];

icons.forEach((icon, index) => {
  gsap.from(icon.id, {
    motionPath: {
      path: icon.path,
      align: 'self',
      autoRotate: false
    },
    opacity: 0,
    duration: 1.2,
    delay: index * 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#studios-production-stack',
      start: 'top 70%',
      once: true
    },
    onComplete: () => pulseGlow(icon.id)
  });
});

function pulseGlow(selector: string) {
  gsap.to(selector, {
    filter: 'drop-shadow(0 0 20px currentColor)',
    duration: 0.6,
    yoyo: true,
    repeat: 1,
    ease: 'sine.inOut'
  });
}
```

---

## 📦 PHASE 5: BUNDLE OPTIMIZATION & TESTING (PENDING)

**Goal:** Ensure GSAP implementation stays within 900kb vendor bundle limit

**Tasks:**

**1. Update vite.config.ts for Code-Splitting**

Current vendor bundle: ~806kb
After GSAP core: ~820kb
After plugins: ~850kb (estimate)
Limit: 900kb (50kb headroom)

**Strategy:**
```typescript
rollupOptions: {
  output: {
    manualChunks: {
      'vendor': [
        'react',
        'react-dom',
        'react-router-dom',
        '@tanstack/react-query',
        'framer-motion',
        'three',
        '@vimeo/player',
        'gsap' // Core GSAP
      ],
      'gsap-plugins': [
        'gsap/ScrollTrigger',
        'gsap/SplitText',
        'gsap/MotionPathPlugin'
        // ScrollSmoother NOT included (disabled on Studios)
      ]
    }
  }
}
```

**2. Run Production Build**

```bash
npm run build
```

**Verify:**
- Build succeeds (doesn't throw bundle size error)
- Vendor bundle < 900kb
- GSAP plugins in separate chunk
- No console errors in production build

**3. Performance Testing**

**Chrome DevTools Testing:**
- Record performance profile during scroll
- Verify 60fps (no dropped frames)
- Check for memory leaks (heap snapshots before/after)
- Validate paint times

**Lighthouse Audit:**
- Performance score > 90
- No accessibility violations
- No console errors

**4. Cross-Browser Testing**

- [ ] Chrome (desktop + mobile)
- [ ] Firefox (desktop)
- [ ] Safari (desktop + iOS if accessible)
- [ ] Edge (desktop)

---

## 🚨 CRITICAL LEARNINGS & DECISIONS

### Performance Lessons Learned

**1. ScrollSmoother + Video = GPU Bottleneck**
- **Problem:** Severe lag when scrolling hero section with video
- **Root Cause:** GPU can't handle video decode + smooth-content transform simultaneously
- **Solution:** Disable ScrollSmoother on `/studios` page only
- **Code Location:** `src/hooks/useScrollSmoother.ts` line 82

**2. SplitText Must Wait for Fonts**
- **Problem:** "SplitText called before fonts loaded" warning, layout shift, GPU thrashing
- **Root Cause:** SplitText splits text before Geist font finishes loading
- **Solution:** `document.fonts.ready.then()` before SplitText
- **Code Location:** `src/hooks/useHeroIntro.ts` line 109

**3. React 18 Strict Mode Double-Mounts**
- **Problem:** Animations initialize twice (70 elements instead of 35)
- **Root Cause:** React 18 Strict Mode mounts components twice in development
- **Solution:** Module-level `isInitialized` guard
- **Code Location:** `src/hooks/useHeroIntro.ts` line 53

**4. Text Wrapping with SplitText**
- **Problem:** Words broke mid-word across lines
- **Root Cause:** Individual char elements wrap like inline text
- **Solution:** Split by `chars,words`, set `display: inline-block`, `whiteSpace: 'pre'`
- **Code Location:** `src/hooks/useHeroIntro.ts` line 140-151

---

### Design Decisions

**1. Animation Timing: 2.2s for Hero Intro**
- Based on Deep-Research Section 3.1 (Page Load Excellence)
- Target: 1.5-2.5s sweet spot
- Too fast (<1s): Rushed, user can't appreciate
- Too slow (>3s): Sluggish, user impatient

**2. Overlapping Timelines (Not Sequential)**
- Uses `"-=0.4"` overlap technique
- Creates FLOW instead of rigid sequential
- From Deep-Research Section 2.2 (Timeline Choreography)
- Makes animation feel organic, not mechanical

**3. Easing Personality**
- Badge: `power2.out` (professional)
- Headline: `expo.out` (DRAMATIC - user requested "noticeable")
- Tagline: `power2.out` (smooth)
- CTAs: `back.out(1.7)` (playful bounce)

**4. prefers-reduced-motion Fallback**
- Always instant reveal or simple fade
- No movement, no scale, no complex transforms
- Accessibility MANDATORY

---

## 🔧 IMMEDIATE NEXT STEPS (POST-COMPACT)

**PRIORITY 1: Implement Phase 3 (Portfolio Grid)**

Execute in this order:
1. Read this handoff doc to restore context
2. Review "Phase 3: Implementation Steps" section above
3. Create `src/hooks/usePortfolioAnimation.ts` (code provided above)
4. Read `src/components/studios/StudiosPortfolioSection.tsx` to verify structure
5. Update component (add import + hook call)
6. Test scroll-triggered animation
7. Validate using "Phase 3: Review & Validation Checklist"

**PRIORITY 2: After Phase 3 Success**

Ask user: "Phase 3 complete. Move to Phase 4 (Platform Icons) or skip to Phase 5 (Bundle Optimization)?"

**PRIORITY 3: If Phase 3 Has Issues**

Common debugging steps:
- Check console for GSAP errors
- Add `markers: true` to see ScrollTrigger points
- Verify `data-motion="portfolio-card"` attributes exist
- Adjust ScrollTrigger `start` position if needed
- Test with reduced motion enabled

---

## 📁 KEY FILES REFERENCE

**Implemented (Don't Touch Unless Bug):**
- `src/hooks/useScrollSmoother.ts` (Phase 1 - disabled on Studios)
- `src/hooks/useHeroIntro.ts` (Phase 2 - working with perf fixes)
- `src/hooks/usePrefersReducedMotion.ts` (utility - already existed)
- `src/components/layout/MainLayout.tsx` (HTML wrapper structure)
- `src/components/studios/StudiosHero.tsx` (data-motion attributes added)

**To Create Next:**
- `src/hooks/usePortfolioAnimation.ts` (Phase 3)

**To Update Next:**
- `src/components/studios/StudiosPortfolioSection.tsx` (add hook call)

**Future (Phase 4):**
- `src/hooks/usePlatformBallet.ts`
- `src/components/studios/StudiosProductionStackSection.tsx`

**Future (Phase 5):**
- `vite.config.ts` (code-splitting)

---

## 🎯 SUCCESS CRITERIA

**Technical:**
- [ ] All 4 concepts implemented (Hero ✅, Portfolio NEXT, Platform PENDING)
- [ ] Vendor bundle < 900kb
- [ ] 60fps on mid-range devices
- [ ] Zero console errors
- [ ] prefers-reduced-motion fully supported

**User Experience:**
- [ ] Animations feel NOTICEABLE (not subtle/boring)
- [ ] Professional quality (not "AI-generated" feeling)
- [ ] Premium positioning established
- [ ] No performance issues (no lag/jank)

**Business:**
- [ ] Client-ready for showcasing
- [ ] Competitive differentiation achieved

---

## 📞 WHEN TO ESCALATE TO USER

**Ask Cameron if:**
1. Phase 3 animation looks "too subtle" or "not noticeable enough" (adjust stagger/timing)
2. Bundle size exceeds 900kb (decide what to cut)
3. Phase 4 MotionPaths look awkward (design iteration needed)
4. Any GSAP implementation causes new performance issues
5. Unclear whether to proceed with Phase 4 or skip to Phase 5

**Don't Ask Cameron About:**
- Routine implementation (just follow this plan)
- Minor timing adjustments (iterate until it feels right)
- Console warnings that don't affect functionality
- TypeScript/ESLint warnings (errors must be fixed)

---

## 🎬 FINAL NOTE

**Philosophy:** Optimize, Don't Satisfice

Every animation should:
- Serve a UX purpose (not just decoration)
- Feel premium and intentional
- Be noticeable (Cameron's emphasis)
- Respect accessibility
- Maintain 60fps performance

**If animation feels "meh" → iterate until it's "wow"**

This is about establishing premium positioning through motion design excellence.

---

**END OF HANDOFF DOCUMENT**

*"That's a wrap on context. Phase 3 awaits. Action!"*
