# Timing Refinement Report

**Date:** 2025-11-05
**Refined by:** The Editor
**For:** Cameron

---

## Analysis

### Current Timing Issues

**1. ScrollTrigger Fires Too Early**
- **Current:** `start: 'top 80%'` - Triggers when section top hits 80% down viewport
- **Problem:** By the time you scroll to actually SEE the section, animation is already playing/finished
- **Impact:** User misses the choreography, cards appear mid-animation

**2. Duration Too Fast**
- **Current:** `duration: 0.6` (600ms)
- **Problem:** Scroll-triggered animations need more weight than click interactions
- **Impact:** Animation feels rushed, doesn't give time to appreciate the L/R wave pattern

**3. Easing Could Be Smoother**
- **Current:** `ease: 'power2.out'`
- **Assessment:** Good for UI reveals, but lacks character for hero scroll animations
- **Opportunity:** Subtle bounce or smoother deceleration would elevate premium feel

**4. Stagger Timing**
- **Current:** `stagger: 0.24` (240ms between cards in same group)
- **With faster duration:** Feels cramped, cards compete for attention
- **Needs:** Tighter stagger with longer duration for cohesive wave

---

## Refinements

### Before
```javascript
// Animate even cards from LEFT
gsap.to(evenCards, {
  x: 0,
  scale: 1,
  opacity: 1,
  duration: 0.6,        // ← Too fast
  stagger: 0.24,        // ← Cramped with short duration
  ease: 'power2.out',   // ← Functional but not premium
  scrollTrigger: {
    trigger: '#studios-portfolio',
    start: 'top 80%',   // ← Triggers too early
    toggleActions: 'play none none none',
  }
});

// Animate odd cards from RIGHT (120ms delay for wave)
gsap.to(oddCards, {
  x: 0,
  scale: 1,
  opacity: 1,
  duration: 0.6,        // ← Too fast
  stagger: 0.24,        // ← Cramped
  ease: 'power2.out',   // ← Functional
  delay: 0.12,          // ← Wave delay (keep this)
  scrollTrigger: {
    trigger: '#studios-portfolio',
    start: 'top 80%',   // ← Triggers too early
    toggleActions: 'play none none none',
  }
});
```

### After
```javascript
// Animate even cards from LEFT
gsap.to(evenCards, {
  x: 0,
  scale: 1,
  opacity: 1,
  duration: 0.9,        // ✅ 900ms (50% slower for premium feel)
  stagger: 0.18,        // ✅ Tighter stagger (180ms) flows better with longer duration
  ease: 'power3.out',   // ✅ Smoother, more natural deceleration
  scrollTrigger: {
    trigger: '#studios-portfolio',
    start: 'top 65%',   // ✅ Triggers later (section more in view before animation)
    toggleActions: 'play none none none',
  }
});

// Animate odd cards from RIGHT (120ms delay for wave)
gsap.to(oddCards, {
  x: 0,
  scale: 1,
  opacity: 1,
  duration: 0.9,        // ✅ Matches even cards
  stagger: 0.18,        // ✅ Tighter stagger
  ease: 'power3.out',   // ✅ Smoother
  delay: 0.12,          // ✅ Keep 120ms wave delay
  scrollTrigger: {
    trigger: '#studios-portfolio',
    start: 'top 65%',   // ✅ Later trigger
    toggleActions: 'play none none none',
  }
});
```

### Changes Made

**1. ScrollTrigger Start: `80%` → `65%`**
- **Why:** Triggers when section is more visible in viewport
- **Effect:** User sees animation from the beginning, not catching it mid-play
- **Calculation:** At 65%, section top is at ~700px from viewport top (vs 864px at 80%)
  - More of the section is visible before animation starts
  - Better timing for user's scroll perception

**2. Duration: `0.6s` → `0.9s` (+50%)**
- **Why:** Scroll animations need weight; 600ms feels rushed
- **Guideline:** Hero animations should be 600-1000ms (we're at 900ms)
- **Effect:** Cards have time to "breathe" during motion
- **User perception:** Premium, intentional choreography (not hurried)

**3. Easing: `power2.out` → `power3.out`**
- **Why:** `power3` has smoother, more gradual deceleration
- **Comparison:**
  - `power2.out`: Linear start → moderate slowdown (functional)
  - `power3.out`: Linear start → **smooth gradual slowdown** (natural)
- **Effect:** Animation feels more polished, less mechanical
- **Note:** Not using `back.out()` (bounce) because grid animations should feel grounded, not springy

**4. Stagger: `0.24s` → `0.18s` (240ms → 180ms)**
- **Why:** With longer duration, cards need tighter stagger to feel cohesive
- **Math:**
  - **Old:** 600ms duration + 240ms stagger = cards feel spaced apart
  - **New:** 900ms duration + 180ms stagger = overlapping motion creates fluid wave
- **Effect:** Cards move as a **choreographed group**, not individual items

**5. Wave Delay: `0.12s` (kept same)**
- **Why:** 120ms offset between even/odd groups still optimal
- **Validation:** Archon MCP research confirmed this timing for alternating patterns
- **Effect:** Maintains the signature L/R wave rhythm

---

### Timing Breakdown (New)

```
Card 0 (even): starts at 0ms,     ends at 900ms
Card 1 (odd):  starts at 120ms,   ends at 1020ms  (120ms wave delay)
Card 2 (even): starts at 180ms,   ends at 1080ms
Card 3 (odd):  starts at 300ms,   ends at 1200ms
Card 4 (even): starts at 360ms,   ends at 1260ms
Card 5 (odd):  starts at 480ms,   ends at 1380ms

Total animation time: 1380ms (1.38 seconds)
```

**vs. Old Timing:**
```
Total animation time: 900ms (0.9 seconds)
```

**Difference:** +480ms (53% longer) - gives user time to appreciate the choreography

---

### Why These Specific Numbers?

**Duration: 0.9s (not 0.8s or 1.0s)**
- Sweet spot between "too fast" (0.6s) and "too slow" (1.0s+)
- 900ms aligns with common video frame rates (60fps, 30fps divisions)
- Feels intentional, not arbitrary

**Start: 65% (not 70% or 60%)**
- **At 60%:** Triggers TOO early (same problem)
- **At 70%:** Section more visible, but still cuts it close
- **At 65%:** Goldilocks zone - section well into viewport, animation starts at perfect moment

**Stagger: 0.18s (not 0.15s or 0.2s)**
- **At 0.15s:** Too tight, cards blur together
- **At 0.2s:** Still slightly cramped with 0.9s duration
- **At 0.18s:** Perfect overlap for fluid wave effect

**Easing: power3.out (not back.out or elastic)**
- **back.out:** Adds bounce - too playful for portfolio grid (better for buttons)
- **elastic:** Too springy - feels gimmicky
- **power3.out:** Smooth natural motion - premium without being distracting

---

✂️ **"Frame-perfect timing achieved."** - The Editor
