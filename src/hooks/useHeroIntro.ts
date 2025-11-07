import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * useHeroIntro
 *
 * Cinematic letter-by-letter hero animation using GSAP SplitText (FREE in 3.13+!)
 *
 * Features:
 * - Letter-by-letter headline reveal with DRAMATIC expo.out easing
 * - Overlapping timeline for FLOW (not rigid sequential)
 * - Total duration: 2.2s (optimal first impression)
 * - Respects prefers-reduced-motion (instant reveal)
 * - React 18 strict mode compatible (useGSAP cleanup + double-init guard)
 * - PERFORMANCE: Waits for fonts before SplitText (prevents GPU thrashing)
 *
 * Animation Sequence (with overlaps for rhythm):
 * 1. Badge (0-0.7s): Quick fade+scale entrance
 * 2. Headline letters (0.3-1.8s): Starts 0.4s BEFORE badge ends! (39 chars × 0.03s stagger)
 * 3. Tagline (1.2-1.9s): Starts 0.6s BEFORE headline ends! (flow!)
 * 4. CTAs (1.5-2.2s): Starts 0.4s BEFORE tagline ends! (playful bounce)
 *
 * Easing Personality:
 * - Badge: power2.out (professional, smooth)
 * - Headline: expo.out (DRAMATIC reveal - this makes it NOTICEABLE!)
 * - Tagline: power2.out (smooth continuation)
 * - CTAs: back.out(1.7) (playful bounce to invite interaction)
 *
 * Implementation Notes:
 * - Reason: expo.out for headline = dramatic deceleration (Apple-style)
 * - Reason: 0.03s stagger = visible rhythm without feeling slow
 * - Reason: Overlaps ("-=0.4") create FLOW (Deep-Research 3.1)
 * - Reason: back.out(1.7) for CTAs = playful without being cartoonish
 * - Reason: document.fonts.ready = prevents layout shift and GPU thrashing
 * - Reason: Strict mode guard = prevents double initialization in React 18
 *
 * Requirements:
 * - Headline must have class `.headline-premium`
 * - Elements must have data-motion attributes: badge, tagline, cta
 *
 * @see docs/GSAP-IMPLEMENTATION-PLAN.md - Phase 2: Hero Animation
 * @see docs/animation-concepts-studios-2025-11-04.md - Concept 1: Cinematic Intro
 */

// Register GSAP plugins at module level
gsap.registerPlugin(SplitText);

// CRITICAL FIX: Strict mode guard - prevents double initialization in React 18
// Reason: React 18 Strict Mode mounts components twice in development
// Without this guard, SplitText runs twice = 70+ animated elements = GPU overload
let isInitialized = false;

export function useHeroIntro() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    // Accessibility: Instant reveal for reduced motion users
    if (prefersReducedMotion) {
      gsap.set([
        '[data-motion="hero-badge"]',
        '.headline-premium',
        '[data-motion="hero-tagline"]',
        '[data-motion="hero-cta"]'
      ], {
        opacity: 1,
        y: 0,
        scale: 1
      });
      console.log('[HeroIntro] Instant reveal (prefers-reduced-motion)');
      return;
    }

    // CRITICAL FIX: Guard against React Strict Mode double initialization
    if (isInitialized) {
      console.log('[HeroIntro] ⚠️ Already initialized, skipping (Strict Mode guard)');
      return;
    }
    isInitialized = true;

    // CRITICAL FIX: Wait for fonts to load before running SplitText
    // Reason: Running SplitText before fonts load causes:
    // 1. Layout shift (text reflows when font loads)
    // 2. GPU thrashing (recalculation during animation)
    // 3. Performance issues when combined with video
    console.log('[HeroIntro] ⏳ Waiting for fonts to load...');

    document.fonts.ready.then(() => {
      console.log('[HeroIntro] ✅ Fonts loaded, starting animation');
      initializeAnimation();
    }).catch((err) => {
      // Fallback: Run anyway if font loading fails
      console.warn('[HeroIntro] ⚠️ Font loading error, proceeding anyway:', err);
      initializeAnimation();
    });

  }, [prefersReducedMotion]);
}

// Separate function to initialize animation (called after fonts load)
function initializeAnimation() {
  // Main animation timeline
  const tl = gsap.timeline();

  // SEQUENCE 1: Badge entrance (0-0.7s)
  // Quick, professional fade+scale
  tl.from('[data-motion="hero-badge"]', {
    opacity: 0,
    scale: 0.92,
    y: -10,
    duration: 0.7,
    ease: 'power2.out'
  });

  // SEQUENCE 2: Headline letter-by-letter (0.3-1.8s)
  // Starts 0.4s BEFORE badge ends (overlap for flow!)
  const headlineEl = document.querySelector('.headline-premium');
  if (headlineEl) {
    const split = new SplitText(headlineEl, {
      type: 'chars,words', // Split into chars AND words to prevent word-breaking
      charsClass: 'hero-letter',
      wordsClass: 'hero-word'
    });

    // CRITICAL FIX: Style characters as inline-block to prevent wrapping issues
    // This maintains text flow while allowing individual letter animation
    gsap.set(split.chars, {
      display: 'inline-block',
      whiteSpace: 'pre' // Preserve spaces
    });

    // CRITICAL: expo.out makes this DRAMATIC and NOTICEABLE
    // Each letter scales from 0.95 and fades in
    tl.from(split.chars, {
      opacity: 0,
      scale: 0.95,
      y: 8, // Slight upward movement for depth
      duration: 0.06, // 60ms per letter
      stagger: 0.03, // 30ms between letters (39 chars = 1.17s total)
      ease: 'expo.out' // DRAMATIC deceleration (Apple-style!)
    }, '-=0.4'); // Start 0.4s BEFORE badge ends (OVERLAP!)

    console.log('[HeroIntro] SplitText created:', {
      chars: split.chars.length,
      totalDuration: split.chars.length * 0.03,
      easing: 'expo.out (DRAMATIC!)'
    });
  } else {
    console.warn('[HeroIntro] .headline-premium not found! Skipping letter animation.');
  }

  // SEQUENCE 3: Tagline (1.2-1.9s)
  // Starts 0.6s BEFORE headline ends (flow!)
  tl.from('[data-motion="hero-tagline"]', {
    opacity: 0,
    y: 20, // Subtle upward movement
    duration: 0.7,
    ease: 'power2.out'
  }, '-=0.6'); // Start 0.6s BEFORE headline ends (OVERLAP!)

  // SEQUENCE 4: CTAs (1.5-2.2s)
  // Starts 0.4s BEFORE tagline ends (seamless!)
  // Playful bounce invites interaction
  tl.from('[data-motion="hero-cta"]', {
    opacity: 0,
    scale: 0.94,
    duration: 0.7,
    ease: 'back.out(1.7)' // Playful bounce!
  }, '-=0.4'); // Start 0.4s BEFORE tagline ends (OVERLAP!)

  console.log('[HeroIntro] ✅ Animation initialized (2.2s total with overlaps)');
}
