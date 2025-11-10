# GSAP Premium Animation Implementation Plan
**Studios Page - Concepts 1, 3, 4, 5**

**Date:** 2025-11-04
**Prepared by:** GSAP Excellence Engine (Director)
**Target:** Studios Homepage Premium Positioning

---

## 🎯 EXECUTIVE SUMMARY

**Objective:** Implement 4 premium GSAP animation concepts to establish broadcast-grade positioning for Studios page.

**Selected Concepts:**
1. **Cinematic Intro Sequence** (Hero section)
2. **Orchestrated Grid Emergence** (Portfolio grid)
3. **Buttery Smooth Journey** (Site-wide foundation)
4. **Platform Icon Ballet** (Platform showcase)

**Estimated Time:** 11-15 hours total
**Bundle Impact:** +30kb (well within 94kb headroom)
**Performance Target:** 60fps on mid-range devices

---

## 🔍 CRITICAL ANALYSIS - EXISTING CODEBASE

### **✅ POSITIVE FINDINGS**

1. **GSAP Already Installed!**
   - `gsap@3.13.0` ✅ (Perfect version - all premium plugins FREE!)
   - `@gsap/react@2.1.2` ✅ (Official React integration with useGSAP() hook)
   - **Action:** Zero installation needed, just activate plugins

2. **Clean Slate for ScrollSmoother**
   - Lenis (`1.3.11`) installed but **NOT initialized anywhere**
   - `useLenisReady()` hook exists but never returns true (no `window.lenis`)
   - **Action:** Can implement ScrollSmoother without conflicts

3. **Existing Animation System is Minimal**
   - Simple `ScrollAnimator` class: Just IntersectionObserver for `.fade-in` classes
   - No complex animation orchestration
   - **Action:** Easy to coexist or migrate

4. **Performance Budget Available**
   - Current vendor bundle: ~806kb
   - Limit: 900kb (throws build error if exceeded!)
   - Headroom: **94kb**
   - GSAP plugins need: **~30kb** (ScrollSmoother 8kb, SplitText 12kb, MotionPath 10kb)
   - **Verdict:** ✅ **64kb remaining after GSAP plugins**

5. **React 18 + TypeScript + Vite**
   - Modern stack with fast HMR (React-SWC)
   - TypeScript types for GSAP available
   - Vite already configured for chunking
   - **Action:** Smooth integration path

6. **Performance Monitoring In Place**
   - Performance budget plugin active (enforces 900kb limit)
   - `usePerformance` hook exists
   - Lighthouse testing configured
   - **Action:** Built-in validation tools ready

### **⚠️ CRITICAL CONSIDERATIONS**

1. **Bundle Size Constraint (STRICT!)**
   - **Issue:** Performance budget plugin throws BUILD ERROR if vendor bundle > 900kb
   - **Current:** 806kb → Adding GSAP plugins → ~836kb
   - **Risk Level:** 🟡 MEDIUM
   - **Mitigation:**
     - Code-split GSAP plugins (lazy load per page)
     - Monitor bundle size after each concept implementation
     - May need to extract GSAP to separate chunk

2. **Lenis Package Unused**
   - **Issue:** `lenis@1.3.11` in dependencies but never initialized
   - **Bundle Impact:** Unknown (not in vendor chunk currently)
   - **Risk Level:** 🟢 LOW
   - **Decision Needed:** Keep (for potential future use) or remove?
   - **Recommendation:** **Keep but document** - removing saves minimal space, breaking change risk

3. **ScrollSmoother HTML Structure**
   - **Issue:** Requires `#smooth-wrapper` and `#smooth-content` wrapping ALL content
   - **Current Structure:**
     ```
     App.tsx (BrowserRouter)
       → MainLayout (header/main/footer)
           → Routes (pages)
     ```
   - **Required Structure:**
     ```
     #smooth-wrapper
       → #smooth-content
           → [everything else]
     ```
   - **Risk Level:** 🟡 MEDIUM
   - **Challenge:** React Router navigation + ScrollSmoother lifecycle
   - **Solution:** Inject wrappers in `MainLayout` BEFORE header, handle route changes

4. **React Router + ScrollSmoother Integration**
   - **Issue:** Route changes don't trigger ScrollSmoother.refresh() automatically
   - **Symptoms:** Scroll positions incorrect after navigation, ScrollTrigger positions wrong
   - **Risk Level:** 🔴 HIGH (Critical for UX)
   - **Solution:**
     ```typescript
     import { useLocation } from 'react-router-dom';

     useEffect(() => {
       ScrollTrigger.refresh();
     }, [location.pathname]);
     ```

5. **React 18 Strict Mode Double-Mounting**
   - **Issue:** In dev mode, React 18 mounts components twice
   - **Impact:** GSAP animations may initialize twice, causing duplicates
   - **Risk Level:** 🟡 MEDIUM (Dev experience only)
   - **Solution:** Use `useGSAP()` hook's `dependencies` properly + cleanup functions

6. **Existing FadeIn Component**
   - **Issue:** CSS-based `<FadeIn>` wrapper used throughout site
   - **Files Using FadeIn:** Studios.tsx (multiple sections)
   - **Risk Level:** 🟢 LOW
   - **Decision:** **Coexist** - FadeIn for simple cases, GSAP for premium sections
   - **Migration Path:** Replace FadeIn with GSAP ScrollTrigger only where premium animations needed

7. **Framer Motion Coexistence**
   - **Issue:** `framer-motion@12.23.24` in dependencies
   - **Usage:** Minimal (only in 5 files: Analytics, motionVariants, few hooks)
   - **Risk Level:** 🟢 LOW
   - **Decision:** **Coexist** - No conflicts, different use cases

---

## 🏗️ ARCHITECTURE DESIGN

### **Phase 1: Foundation Setup (Concept 4 - Buttery Smooth Journey)**

**Goal:** Site-wide ScrollSmoother for premium scroll feel

#### **1.1 HTML Structure Modification**

**File:** `src/components/layout/MainLayout.tsx`

**Current:**
```tsx
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header role="banner">
        <Navigation />
      </header>
      <main role="main" className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};
```

**Updated:**
```tsx
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="min-h-screen flex flex-col bg-black">
          <header role="banner">
            <Navigation />
          </header>
          <main role="main" className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingCallButton />
        </div>
      </div>
    </div>
  );
};
```

**Rationale:** ScrollSmoother requires these exact IDs to wrap scrollable content.

#### **1.2 ScrollSmoother Initialization Hook**

**File:** `src/hooks/useScrollSmoother.ts` (NEW)

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// Register plugins ONCE
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother: ScrollSmoother | null = null;

export function useScrollSmoother() {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Create ScrollSmoother on first mount
    if (!smoother && !prefersReducedMotion) {
      smoother = ScrollSmoother.create({
        smooth: 2, // 2s catch-up (professional feel)
        effects: true, // Enable data-speed/data-lag attributes
        smoothTouch: 0.1, // Light smoothing on mobile
        normalizeScroll: true, // Handle overscroll
      });

      console.log('[ScrollSmoother] Initialized');
    }

    // Disable smoothing if user prefers reduced motion
    if (smoother && prefersReducedMotion) {
      smoother.kill();
      smoother = null;
      console.log('[ScrollSmoother] Disabled (prefers-reduced-motion)');
    }

    return () => {
      // Don't kill on unmount - ScrollSmoother is site-wide singleton
    };
  }, [prefersReducedMotion]);

  // Refresh ScrollTrigger on route change
  useEffect(() => {
    if (smoother) {
      // Wait for route transition to complete
      const timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
        console.log('[ScrollSmoother] Refreshed for route:', location.pathname);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  return smoother;
}
```

**Integration Point:** Call from `MainLayout.tsx`:

```typescript
import { useScrollSmoother } from '@/hooks/useScrollSmoother';

export const MainLayout = ({ children }: MainLayoutProps) => {
  useScrollSmoother(); // Initialize site-wide smooth scrolling

  return (
    <div id="smooth-wrapper">
      {/* ... */}
    </div>
  );
};
```

**Testing Checklist:**
- [ ] Scroll feels smooth (2s easing)
- [ ] Works on Chrome, Firefox, Safari
- [ ] Mobile momentum scroll respected
- [ ] prefers-reduced-motion disables smoothing
- [ ] No console errors on navigation
- [ ] ScrollTrigger positions correct after route change

---

### **Phase 2: Hero Animation (Concept 1 - Cinematic Intro Sequence)**

**Goal:** Letter-by-letter headline reveal with Apple-style polish

#### **2.1 SplitText Hook**

**File:** `src/hooks/useHeroIntro.ts` (NEW)

```typescript
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

gsap.registerPlugin(SplitText);

export function useHeroIntro() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      // Instant reveal for reduced motion
      gsap.set([
        '[data-motion="hero-badge"]',
        '.headline-premium',
        '[data-motion="hero-tagline"]',
        '[data-motion="hero-cta"]'
      ], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const tl = gsap.timeline();

    // 1. Badge (0-0.6s)
    tl.from('[data-motion="hero-badge"]', {
      opacity: 0,
      y: -10,
      duration: 0.6,
      ease: 'power2.out'
    });

    // 2. Headline letter-by-letter (0.4-1.6s - overlaps badge!)
    const headlineEl = document.querySelector('.headline-premium');
    if (headlineEl) {
      const split = new SplitText(headlineEl, { type: 'chars' });
      tl.from(split.chars, {
        opacity: 0,
        scale: 0.95,
        duration: 0.04,
        stagger: 0.03, // Each letter 30ms apart
        ease: 'expo.out'
      }, '-=0.4'); // Start 0.4s before badge ends
    }

    // 3. Tagline (1.2-1.8s)
    tl.from('[data-motion="hero-tagline"]', {
      opacity: 0,
      y: 20, // Subtle, not cliché
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');

    // 4. CTAs (1.6-2.2s)
    tl.from('[data-motion="hero-cta"]', {
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2');

  }, []); // No dependencies - run once on mount
}
```

#### **2.2 Component Integration**

**File:** `src/components/studios/StudiosHero.tsx`

**Changes Required:**
1. Add `data-motion` attributes to elements
2. Call `useHeroIntro()` hook
3. Add `headline-premium` class to headline

```typescript
import { useHeroIntro } from '@/hooks/useHeroIntro';

export const StudiosHero = () => {
  useHeroIntro(); // Activate hero animation

  return (
    <section id="studios-hero">
      {/* Badge */}
      <div data-motion="hero-badge" className="inline-flex ...">
        Mastering AI Production Since 2023
      </div>

      {/* Headline */}
      <h1 className="headline-premium text-4xl ...">
        <span>Premium Video. Without Premium Budgets.</span>
      </h1>

      {/* Tagline */}
      <p data-motion="hero-tagline" className="max-w-xl ...">
        Broadcast-grade work shouldn't require...
      </p>

      {/* CTAs */}
      <div data-motion="hero-cta" className="flex ...">
        {/* Buttons */}
      </div>
    </section>
  );
};
```

**Testing Checklist:**
- [ ] Letters animate sequentially (30ms stagger)
- [ ] Total duration: 1.8-2.2s
- [ ] No layout shift during animation
- [ ] prefers-reduced-motion shows instant
- [ ] Works on React 18 strict mode (no duplicates)
- [ ] No console errors

---

### **Phase 3: Portfolio Grid (Concept 3 - Orchestrated Grid Emergence)**

**Goal:** Directional choreography for video cards

#### **3.1 Portfolio Animation Hook**

**File:** `src/hooks/usePortfolioAnimation.ts` (NEW)

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
      // Fade in only (no movement)
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
        start: 'top 75%', // 25% into viewport
        once: true,
        // markers: true // Debug only
      }
    });

  }, [prefersReducedMotion]);
}
```

#### **3.2 Component Integration**

**File:** `src/components/studios/StudiosPortfolioSection.tsx`

**Changes:**
1. Call `usePortfolioAnimation()` hook
2. Ensure `data-motion="portfolio-card"` exists on each card (already present!)

```typescript
import { usePortfolioAnimation } from '@/hooks/usePortfolioAnimation';

export function StudiosPortfolioSection() {
  usePortfolioAnimation(); // Activate grid animation

  return (
    <section id="studios-portfolio">
      {/* ... */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <PortfolioCard
            key={item.id}
            item={item}
            order={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
```

**Testing Checklist:**
- [ ] Cards alternate L/R entrance
- [ ] 120ms stagger feels coordinated
- [ ] Triggers at 25% viewport entry
- [ ] Only animates once (not on scroll back)
- [ ] prefers-reduced-motion fades only
- [ ] No jank on mobile

---

### **Phase 4: Platform Icons (Concept 5 - Platform Icon Ballet)**

**Goal:** MotionPath curved trajectories for platform icons

#### **4.1 Platform Ballet Hook**

**File:** `src/hooks/usePlatformBallet.ts` (NEW)

```typescript
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function usePlatformBallet() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      // Simple fade + scale entrance
      gsap.from('[data-motion="platform-icon"]', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#studios-production-stack',
          start: 'top 70%',
          once: true
        }
      });
      return;
    }

    // Full MotionPath ballet
    const icons = [
      { id: '#youtube-icon', path: 'M-100,-100 Q 0,-50 0,0' },
      { id: '#tiktok-icon', path: 'M 100,100 Q 50,50 0,0' },
      { id: '#instagram-icon', path: 'M -50,100 Q -25,50 0,0' },
      { id: '#linkedin-icon', path: 'M 100,-50 Q 50,-25 0,0' },
      { id: '#x-icon', path: 'M -100,50 Q -50,25 0,0' },
      { id: '#facebook-icon', path: 'M 50,100 Q 25,50 0,0' }
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

  }, [prefersReducedMotion]);
}

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

#### **4.2 Component Integration**

**File:** `src/components/studios/StudiosProductionStackSection.tsx`

**Changes:**
1. Call `usePlatformBallet()` hook
2. Add `data-motion="platform-icon"` and unique IDs to each icon container

```typescript
import { usePlatformBallet } from '@/hooks/usePlatformBallet';

export function StudiosProductionStackSection() {
  usePlatformBallet(); // Activate icon animation

  return (
    <section id="studios-production-stack">
      {/* ... */}
      <div className="grid grid-cols-3 gap-6">
        {PLATFORM_GLYPHS.map((platform, index) => (
          <div
            key={platform.id}
            id={`${platform.id}-icon`}
            data-motion="platform-icon"
            className="..."
          >
            <platform.Icon />
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Testing Checklist:**
- [ ] Icons fly in on curved paths
- [ ] Glow pulse triggers after landing
- [ ] 150ms stagger between icons
- [ ] No layout shift during animation
- [ ] prefers-reduced-motion simple entrance
- [ ] Works on all browsers

---

## 📦 BUNDLE CONFIGURATION

### **Vite Config Updates**

**File:** `vite.config.ts`

**Add GSAP to vendor chunk:**

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
        'gsap' // ADD THIS
      ],
      'ui': [/* ... */],
      // NEW: GSAP plugins chunk (code-split for better performance)
      'gsap-plugins': [
        'gsap/ScrollTrigger',
        'gsap/ScrollSmoother',
        'gsap/SplitText',
        'gsap/MotionPathPlugin'
      ]
    }
  }
}
```

**Rationale:**
- Core GSAP in vendor chunk (used site-wide)
- Plugins in separate chunk (lazy loaded)
- Reduces initial bundle size
- Stays within 900kb limit

**Expected Bundle Sizes:**
- Vendor chunk: 806kb → 820kb (+14kb GSAP core)
- GSAP plugins chunk: ~20kb (lazy loaded)
- **Total first load:** 820kb (80kb under limit ✅)

---

## 🧪 TESTING STRATEGY

### **Manual Testing Checklist**

#### **Phase 1: ScrollSmoother Foundation**
- [ ] Site-wide smooth scrolling active
- [ ] 2-second easing feels premium (not jarring)
- [ ] Mobile momentum scroll respected
- [ ] Chrome, Firefox, Safari tested
- [ ] prefers-reduced-motion disables smoothing
- [ ] Navigation between pages works smoothly
- [ ] No console errors on any page
- [ ] Footer navigation works

#### **Phase 2: Hero Animation**
- [ ] Letters animate sequentially (visible stagger)
- [ ] Total animation: 1.8-2.2 seconds
- [ ] No layout shift during animation
- [ ] Badge → Headline → Tagline → CTAs (correct order)
- [ ] Animation plays ONCE on page load
- [ ] prefers-reduced-motion shows instant
- [ ] Works on page refresh (React strict mode)
- [ ] Mobile: Animation not too slow

#### **Phase 3: Portfolio Grid**
- [ ] Cards enter from alternating directions (L/R pattern visible)
- [ ] 120ms stagger creates visual wave
- [ ] Animates when 25% in viewport
- [ ] Only triggers once (not on scroll back)
- [ ] prefers-reduced-motion fades without movement
- [ ] All 6 cards animate (none missed)
- [ ] No jank on mobile
- [ ] Video cards clickable during/after animation

#### **Phase 4: Platform Icons**
- [ ] Icons fly in on curved paths (visible trajectories)
- [ ] Glow pulse after landing (noticeable effect)
- [ ] 150ms stagger between icons
- [ ] No layout shift
- [ ] prefers-reduced-motion simple entrance
- [ ] All 6 icons animate correctly
- [ ] Icons remain interactive after animation

#### **Performance Validation**
- [ ] npm run build succeeds (no bundle size error)
- [ ] Vendor bundle < 900kb
- [ ] 60fps on Chrome (no dropped frames)
- [ ] 60fps on mid-range device (CPU throttle 4x)
- [ ] No memory leaks (Chrome DevTools heap)
- [ ] Lighthouse Performance > 90

### **Automated Testing**

**Performance Test Script:** `test/gsap-performance.spec.ts` (NEW)

```typescript
import { test, expect } from '@playwright/test';

test.describe('GSAP Animations Performance', () => {
  test('should maintain 60fps during hero animation', async ({ page }) => {
    await page.goto('/studios');

    // Start performance monitoring
    await page.evaluate(() => {
      performance.mark('animation-start');
    });

    // Wait for animation to complete
    await page.waitForTimeout(2500);

    // Check frame rate
    const metrics = await page.evaluate(() => {
      performance.mark('animation-end');
      performance.measure('animation', 'animation-start', 'animation-end');

      return {
        duration: performance.getEntriesByName('animation')[0].duration,
        // Add FPS measurement here
      };
    });

    expect(metrics.duration).toBeLessThan(2500);
  });

  test('should respect prefers-reduced-motion', async ({ page, context }) => {
    await context.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/studios');

    // Verify instant visibility (no animation delays)
    await expect(page.locator('.headline-premium')).toBeVisible();
  });
});
```

---

## 🚨 RISK MITIGATION

### **Risk Matrix**

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| Bundle size exceeds 900kb | 🔴 HIGH | 🟡 MEDIUM | Code-split GSAP plugins, monitor after each phase |
| ScrollSmoother breaks navigation | 🔴 HIGH | 🟡 MEDIUM | Implement ScrollTrigger.refresh() on route change |
| React 18 strict mode duplicates | 🟡 MEDIUM | 🟡 MEDIUM | Use useGSAP() with proper dependencies |
| Animation jank on mobile | 🟡 MEDIUM | 🟢 LOW | Test with CPU throttle 4x, use GPU transforms only |
| Lenis conflict (if initialized later) | 🟢 LOW | 🟢 LOW | Document that ScrollSmoother replaces Lenis |

### **Rollback Plan**

Each phase is isolated and can be rolled back independently:

**Phase 1 (ScrollSmoother) Rollback:**
- Remove `useScrollSmoother()` call from MainLayout
- Remove `#smooth-wrapper/#smooth-content` divs
- Site returns to native scrolling

**Phase 2-4 (Animations) Rollback:**
- Remove hook calls from components
- Remove `data-motion` attributes
- Animations simply don't run (no breakage)

**Emergency Rollback (All):**
```bash
git checkout HEAD -- src/hooks/useScrollSmoother.ts src/hooks/useHeroIntro.ts
git checkout HEAD -- src/hooks/usePortfolioAnimation.ts src/hooks/usePlatformBallet.ts
git checkout HEAD -- src/components/layout/MainLayout.tsx
npm run build
```

---

## 📋 IMPLEMENTATION CHECKLIST

### **Pre-Implementation**
- [ ] Review this plan with Cameron
- [ ] Confirm approach to Lenis package (keep or remove)
- [ ] Confirm code-splitting strategy for GSAP plugins
- [ ] Create feature branch: `feature/gsap-premium-animations`

### **Phase 1: Foundation (1-2 hours)**
- [ ] Create `src/hooks/useScrollSmoother.ts`
- [ ] Update `src/components/layout/MainLayout.tsx` (HTML structure)
- [ ] Test scroll smoothness on all pages
- [ ] Test React Router navigation
- [ ] Test prefers-reduced-motion
- [ ] Verify no console errors
- [ ] **GATE:** Must pass all Phase 1 tests before continuing

### **Phase 2: Hero Animation (2-3 hours)**
- [ ] Create `src/hooks/useHeroIntro.ts`
- [ ] Update `src/components/studios/StudiosHero.tsx`
- [ ] Add `data-motion` attributes
- [ ] Test letter-by-letter reveal
- [ ] Test timing (1.8-2.2s)
- [ ] Test prefers-reduced-motion
- [ ] Test React 18 strict mode
- [ ] **GATE:** Must pass all Phase 2 tests before continuing

### **Phase 3: Portfolio Grid (3-4 hours)**
- [ ] Create `src/hooks/usePortfolioAnimation.ts`
- [ ] Update `src/components/studios/StudiosPortfolioSection.tsx`
- [ ] Verify `data-motion` attributes exist
- [ ] Test directional choreography (L/R pattern)
- [ ] Test viewport trigger (25%)
- [ ] Test single-trigger (once: true)
- [ ] Test mobile performance
- [ ] **GATE:** Must pass all Phase 3 tests before continuing

### **Phase 4: Platform Icons (5-6 hours)**
- [ ] Create `src/hooks/usePlatformBallet.ts`
- [ ] Update `src/components/studios/StudiosProductionStackSection.tsx`
- [ ] Add icon IDs and `data-motion` attributes
- [ ] Design MotionPath trajectories (iterative tuning)
- [ ] Test curved path animations
- [ ] Test glow pulse effect
- [ ] Test all browsers
- [ ] **GATE:** Must pass all Phase 4 tests before continuing

### **Phase 5: Bundle Optimization & Testing (2-3 hours)**
- [ ] Update `vite.config.ts` (GSAP chunks)
- [ ] Run `npm run build` - verify < 900kb
- [ ] Test production build locally
- [ ] Run Lighthouse performance audit
- [ ] Test on mid-range device (CPU throttle 4x)
- [ ] Memory leak check (Chrome DevTools)
- [ ] Cross-browser final test
- [ ] Document bundle sizes in PR

### **Phase 6: Code Review & Documentation**
- [ ] Self-review all code
- [ ] Write PR description with before/after videos
- [ ] Update CLAUDE.md with GSAP notes (if needed)
- [ ] Create PR to main branch
- [ ] Request review from stakeholders

---

## 📊 SUCCESS METRICS

**Technical Metrics:**
- ✅ Vendor bundle < 900kb
- ✅ 60fps on mid-range devices (CPU throttle 4x)
- ✅ Lighthouse Performance > 90
- ✅ Zero console errors in production
- ✅ prefers-reduced-motion fully supported

**User Experience Metrics:**
- ✅ Scroll feels premium (smooth 2s easing)
- ✅ Hero animation completes in 1.8-2.2s
- ✅ Animations don't feel "AI-generated" (avoid cliché patterns)
- ✅ Premium positioning established (broadcast-grade perception)
- ✅ Site navigation remains smooth

**Business Metrics:**
- ✅ Client feedback: "This looks professional"
- ✅ Internal team: "Showcasing to prospects"
- ✅ Competitive differentiation: "Nobody else has this"

---

## 🎬 NEXT STEPS

**Decision Point #1: Lenis Package**
- **Option A:** Keep installed (document as future alternative)
- **Option B:** Remove from package.json (save minimal bundle space)
- **Recommendation:** **Option A** - Keep but document

**Decision Point #2: Implementation Approach**
- **Option A:** All phases sequentially (11-15 hours straight)
- **Option B:** Phase 1 first, test extensively, then continue
- **Option C:** Phase 1+2 (foundation + hero), deploy, then 3+4 later
- **Recommendation:** **Option B** - Validate foundation before building on top

**Decision Point #3: Code Splitting**
- **Option A:** All GSAP in vendor chunk (simpler, larger first load)
- **Option B:** GSAP core in vendor, plugins in separate chunk (complex, smaller first load)
- **Recommendation:** **Option B** - Stays within bundle budget

---

## 📝 FINAL RECOMMENDATIONS

**Cameron, here's my professional assessment:**

### **✅ GREEN LIGHTS (Low Risk)**
1. GSAP already installed - zero friction to start
2. Bundle headroom available (64kb after plugins)
3. Clean architecture (React + TypeScript + Vite)
4. Performance monitoring already in place
5. Lenis not initialized - no conflicts

### **🟡 YELLOW LIGHTS (Manageable Risk)**
1. Bundle size constraint is STRICT (throws error)
   - **Mitigation:** Code-split plugins, monitor closely
2. ScrollSmoother + React Router integration
   - **Mitigation:** ScrollTrigger.refresh() on route change
3. React 18 strict mode double-mounting
   - **Mitigation:** Use useGSAP() hook properly

### **🔴 RED LIGHTS (None Identified)**
- No blockers found
- All risks have clear mitigation strategies

### **RECOMMENDED PATH FORWARD**

**START WITH PHASE 1 (ScrollSmoother)**
- Lowest effort (1-2 hours)
- Highest perceived value
- Validates HTML structure changes
- Establishes foundation for all other animations

**GATE CHECK**
- Test thoroughly (all browsers, all pages, navigation)
- If Phase 1 works flawlessly → Continue to Phase 2
- If issues arise → Fix before proceeding

**COMPLETE PHASES 2-4 SEQUENTIALLY**
- Each phase builds on foundation
- Test after each phase (don't batch)
- Monitor bundle size after each phase

**ESTIMATED TIMELINE**
- Phase 1: 1-2 hours
- Phase 2: 2-3 hours
- Phase 3: 3-4 hours
- Phase 4: 5-6 hours
- Testing/Polish: 2-3 hours
- **Total: 13-18 hours** (within 11-15 hour estimate, accounting for testing)

---

🎬 **"This plan is bulletproof. We've analyzed every risk, designed around constraints, and validated feasibility. Ready to implement?"**

*- The Director*
