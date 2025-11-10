/**
 * SectionRevealDemo - Test component for useSectionReveal hook
 *
 * Usage:
 * 1. Add to a route (e.g., /test-reveal)
 * 2. Scroll down to see animations trigger
 * 3. Test reduced motion in DevTools
 * 4. Check console for debug logs
 *
 * To test:
 * - Open Chrome DevTools
 * - Enable "CPU 4x slowdown" for performance testing
 * - Emulate "prefers-reduced-motion: reduce" for accessibility testing
 */

import { useSectionReveal, SectionRevealPresets } from '@/hooks/useSectionReveal';

export function SectionRevealDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Spacer to allow scrolling */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">useSectionReveal Demo</h1>
          <p className="text-xl text-gray-400">Scroll down to see animations</p>
          <div className="mt-8 text-sm text-gray-500">
            <p>Research-backed 40-60ms stagger timing</p>
            <p>37% engagement boost (VAWebSEO 2025)</p>
          </div>
        </div>
      </div>

      {/* Demo Section 1: Standard Timing */}
      <DemoSection1_Standard />

      {/* Demo Section 2: Fast Timing */}
      <DemoSection2_Fast />

      {/* Demo Section 3: Luxury Timing */}
      <DemoSection3_Luxury />

      {/* Demo Section 4: Dramatic Timing */}
      <DemoSection4_Dramatic />

      {/* Demo Section 5: Custom Timing */}
      <DemoSection5_Custom />

      {/* Footer */}
      <div className="h-96 flex items-center justify-center">
        <p className="text-gray-500">End of demo</p>
      </div>
    </div>
  );
}

/**
 * Demo Section 1: Standard Timing
 * 50ms stagger, 0.8s duration, power3.out
 * Recommended for: Most sections
 */
function DemoSection1_Standard() {
  useSectionReveal({
    selector: '[data-demo-1]',
    ...SectionRevealPresets.standard,
    debug: true  // Enable console logs
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <h2 data-demo-1 className="text-4xl font-bold mb-12 text-center">
          Standard Timing (50ms stagger)
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <DemoCard data-demo-1 number="1" title="Card One">
            Standard 50ms stagger between cards. Research-backed sweet spot.
          </DemoCard>
          <DemoCard data-demo-1 number="2" title="Card Two">
            0.8s duration with power3.out easing. Smooth deceleration.
          </DemoCard>
          <DemoCard data-demo-1 number="3" title="Card Three">
            60px vertical movement. Professional reveal feel.
          </DemoCard>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <code>SectionRevealPresets.standard</code>
        </div>
      </div>
    </section>
  );
}

/**
 * Demo Section 2: Fast Timing
 * 40ms stagger, 0.6s duration, power2.out
 * Recommended for: Secondary content
 */
function DemoSection2_Fast() {
  useSectionReveal({
    selector: '[data-demo-2]',
    ...SectionRevealPresets.fast,
    debug: true
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-gray-800/50">
      <div className="max-w-6xl w-full">
        <h2 data-demo-2 className="text-4xl font-bold mb-12 text-center">
          Fast Timing (40ms stagger)
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <DemoCard data-demo-2 number="1" title="Fast 1">
            Quick 40ms stagger for energetic feel.
          </DemoCard>
          <DemoCard data-demo-2 number="2" title="Fast 2">
            0.6s duration keeps things snappy.
          </DemoCard>
          <DemoCard data-demo-2 number="3" title="Fast 3">
            40px movement is more subtle.
          </DemoCard>
          <DemoCard data-demo-2 number="4" title="Fast 4">
            Power2.out for gentle deceleration.
          </DemoCard>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <code>SectionRevealPresets.fast</code>
        </div>
      </div>
    </section>
  );
}

/**
 * Demo Section 3: Luxury Timing
 * 60ms stagger, 1.2s duration, power4.out
 * Recommended for: Key marketing moments
 */
function DemoSection3_Luxury() {
  useSectionReveal({
    selector: '[data-demo-3]',
    ...SectionRevealPresets.luxury,
    debug: true
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <h2 data-demo-3 className="text-4xl font-bold mb-12 text-center">
          Luxury Timing (60ms stagger)
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <DemoCard data-demo-3 number="1" title="Premium Feature">
            Slow 60ms stagger creates premium feel. 1.2s duration feels luxurious.
          </DemoCard>
          <DemoCard data-demo-3 number="2" title="Quality Service">
            Power4.out easing = ultra-smooth deceleration. 80px movement is dramatic.
          </DemoCard>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <code>SectionRevealPresets.luxury</code>
        </div>
      </div>
    </section>
  );
}

/**
 * Demo Section 4: Dramatic Timing
 * 60ms stagger, 1.4s duration, expo.out
 * Recommended for: Hero moments
 */
function DemoSection4_Dramatic() {
  useSectionReveal({
    selector: '[data-demo-4]',
    ...SectionRevealPresets.dramatic,
    debug: true
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-gray-800/50">
      <div className="max-w-6xl w-full">
        <h2 data-demo-4 className="text-4xl font-bold mb-12 text-center">
          Dramatic Timing (expo.out)
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <DemoCard data-demo-4 number="1" title="Cinematic">
            1.4s duration for dramatic impact.
          </DemoCard>
          <DemoCard data-demo-4 number="2" title="Attention">
            Expo.out creates cinematic deceleration.
          </DemoCard>
          <DemoCard data-demo-4 number="3" title="Showcase">
            Perfect for hero sections.
          </DemoCard>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <code>SectionRevealPresets.dramatic</code>
        </div>
      </div>
    </section>
  );
}

/**
 * Demo Section 5: Custom Timing
 * Fully custom configuration
 */
function DemoSection5_Custom() {
  useSectionReveal({
    selector: '[data-demo-5]',
    stagger: 0.08,        // Very slow 80ms stagger
    duration: 1.0,        // Custom 1s duration
    distance: 100,        // Large 100px movement
    ease: "back.out(1.7)", // Back easing for overshoot effect
    start: "top 75%",     // Earlier trigger
    debug: true
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <h2 data-demo-5 className="text-4xl font-bold mb-12 text-center">
          Custom Timing (back.out easing)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <DemoCard data-demo-5 number="1" title="Custom Config">
            80ms stagger (very slow). 100px movement (large).
          </DemoCard>
          <DemoCard data-demo-5 number="2" title="Back Easing">
            back.out(1.7) creates overshoot effect. Triggers at 75% viewport.
          </DemoCard>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <code>Custom configuration</code>
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable demo card component
 */
function DemoCard({
  number,
  title,
  children,
  ...props
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-blue-400/50 transition-colors"
    >
      <div className="text-6xl font-bold text-blue-400/30 mb-4">{number}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
  );
}

/**
 * Testing Instructions (for Cameron):
 *
 * 1. ADD TO ROUTER:
 *    // In your router config
 *    import { SectionRevealDemo } from '@/components/test/SectionRevealDemo'
 *    { path: '/test-reveal', element: <SectionRevealDemo /> }
 *
 * 2. NAVIGATE:
 *    http://localhost:8080/test-reveal
 *
 * 3. TEST ANIMATION:
 *    - Scroll down slowly
 *    - Watch cards reveal with different timings
 *    - Check console for debug logs
 *
 * 4. TEST PERFORMANCE:
 *    - Open Chrome DevTools → Performance tab
 *    - Enable "CPU 4x slowdown"
 *    - Record while scrolling
 *    - Check FPS (should stay 60fps desktop, 30fps+ mobile)
 *
 * 5. TEST ACCESSIBILITY:
 *    - Chrome DevTools: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
 *    - Type "Emulate CSS prefers-reduced-motion"
 *    - Select "reduce"
 *    - Reload page
 *    - Cards should appear instantly (no animation)
 *
 * 6. COMPARE TIMINGS:
 *    - Section 1: Standard (50ms) - balanced, professional
 *    - Section 2: Fast (40ms) - energetic, quick
 *    - Section 3: Luxury (60ms, 1.2s) - premium, slow
 *    - Section 4: Dramatic (expo.out) - cinematic
 *    - Section 5: Custom (back.out) - overshoot effect
 *
 * 7. CHOOSE YOUR FAVORITE:
 *    - Which timing feels best for Studios sections?
 *    - Standard is recommended for most sections
 *    - Luxury for PlatformDemo (key marketing moment)
 */
