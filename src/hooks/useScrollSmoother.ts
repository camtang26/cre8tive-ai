import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * useScrollSmoother
 *
 * Site-wide smooth scrolling using GSAP ScrollSmoother (FREE in 3.13+!)
 *
 * Features:
 * - 1.2-second inertial catch-up (premium feel)
 * - Respects prefers-reduced-motion (accessibility)
 * - Integrates with React Router (auto-refresh on route change)
 * - Singleton pattern (one instance per app)
 * - DISABLED on /studios page (hero video performance - native scroll only)
 * - ENABLED on all other pages (smooth scrolling)
 *
 * Requirements:
 * - HTML must have #smooth-wrapper and #smooth-content divs (see MainLayout)
 * - Call ONCE from MainLayout (not per-page)
 *
 * @returns ScrollSmoother | null - The active smoother instance (or null if disabled)
 *
 * @example
 * ```tsx
 * // In MainLayout.tsx
 * export const MainLayout = ({ children }) => {
 *   useScrollSmoother(); // Initialize site-wide
 *
 *   return (
 *     <div id="smooth-wrapper">
 *       <div id="smooth-content">
 *         {children}
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 *
 * Implementation Notes:
 * - CRITICAL: Disabled on /studios page due to video transform lag (native scroll only)
 * - Reason: Video elements inside smooth-content cause severe GPU bottleneck
 * - Solution: ScrollSmoother works on all OTHER pages, Studios uses native scrolling
 * - smooth: 1.2 = 1.2s catch-up (premium feel on enabled pages)
 * - effects: false = disabled parallax (better performance)
 * - smoothTouch: 0.1 = light mobile smoothing
 * - normalizeScroll: true = handles overscroll/bounce on macOS/iOS
 * - 100ms timeout before refresh = allows React Router DOM to settle
 *
 * Pages with ScrollSmoother:
 * - ✅ Homepage (/)
 * - ✅ Conversational AI (/conversational)
 * - ✅ Briefing Engine (/briefing-engine)
 * - ✅ About (/about)
 * - ✅ Contact (/contact)
 * - ❌ Studios (/studios) - DISABLED due to hero video
 *
 * @see docs/GSAP-IMPLEMENTATION-PLAN.md - Phase 1: ScrollSmoother Foundation
 */

// Register GSAP plugins at module level (only runs once)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Module-level singleton (persists across React re-renders)
// Reason: ScrollSmoother should exist once per app lifecycle, not per component mount
let smoother: ScrollSmoother | null = null;

export function useScrollSmoother(): ScrollSmoother | null {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Initialize ScrollSmoother on first mount
  useEffect(() => {
    // Don't create if user prefers reduced motion
    if (prefersReducedMotion) {
      if (smoother) {
        console.log('[ScrollSmoother] Killing due to prefers-reduced-motion');
        smoother.kill();
        smoother = null;
      }
      return;
    }

    // CRITICAL FIX: Disable ScrollSmoother on Studios page (hero video performance)
    // Reason: Video elements inside smooth-content cause severe transform lag
    // Solution: Native scrolling on Studios, smooth scrolling on all other pages
    if (location.pathname === '/studios') {
      if (smoother) {
        console.log('[ScrollSmoother] Disabled on /studios (video performance)');
        smoother.kill();
        smoother = null;
      }
      return;
    }

    // Create smoother if it doesn't exist
    if (!smoother) {
      // Verify required HTML structure exists
      const wrapper = document.getElementById('smooth-wrapper');
      const content = document.getElementById('smooth-content');

      if (!wrapper || !content) {
        console.error(
          '[ScrollSmoother] Missing required HTML structure!\n' +
          'MainLayout must have #smooth-wrapper and #smooth-content divs.\n' +
          'See: docs/GSAP-IMPLEMENTATION-PLAN.md Phase 1.1'
        );
        return;
      }

      try {
        smoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.2, // OPTIMIZED: 1.2s catch-up (was 2s - reduced for video performance)
          effects: false, // OPTIMIZED: Disabled for better video performance (was true)
          smoothTouch: 0.1, // Light smoothing on mobile (0.1 = 10% damping)
          normalizeScroll: true, // Handle overscroll behavior
        });

        console.log('[ScrollSmoother] ✅ Initialized (OPTIMIZED for video performance):', {
          smooth: 1.2,
          effects: false,
          smoothTouch: 0.1,
          normalizeScroll: true
        });
      } catch (error) {
        console.error('[ScrollSmoother] Initialization failed:', error);
        smoother = null;
      }
    }

    // Don't kill on unmount - this is a site-wide singleton
    // MainLayout only mounts once at app level
  }, [prefersReducedMotion]);

  // Refresh ScrollTrigger on route change (React Router integration)
  useEffect(() => {
    if (smoother) {
      // Wait for route transition to complete before refreshing
      // Reason: React Router needs time to update DOM before ScrollTrigger recalculates
      const timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
        console.log('[ScrollSmoother] 🔄 Refreshed for route:', location.pathname);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  return smoother;
}
