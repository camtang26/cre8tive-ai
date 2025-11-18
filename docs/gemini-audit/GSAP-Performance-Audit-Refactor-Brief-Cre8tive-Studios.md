GSAP Performance Audit & Refactor Brief: Cre8tive Studios

1. Executive Summary

The audit identifies four primary performance bottlenecks:

Scroll System: The current useLenisSmooth implementation, while functional, creates unnecessary-redundancy and potential sync issues between Lenis and GSAP's tickers. Disabling lagSmoothing is a symptom of this. This is the top priority for scroll jank.

Media Loading: The page loads multiple heavy video assets improperly. The Hero video (LCP) contends with the intro animation, the Portfolio grid loads six (6) unused Vimeo iframes on mount, and the Platform Demo section auto-plays three (3) Mux videos simultaneously. This is the primary cause of high LCP times and resource-related jank.

Observer Strategy: The useSectionReveal and useDirectionalReveal hooks use ScrollTrigger.batch, creating a new observer for every element revealed. This results in dozens of observers, which is highly inefficient and strains the main thread.

Resource Leaks: There are several instances of will-change being applied permanently via inline styles or CSS, which can lead to GPU memory leaks, especially on mobile.

The following brief provides concrete, code-level prescriptions to resolve each of these issues.

2. Priority & Sequencing

Please execute these fixes in the following order, as they build on one another.

P1: Refactor the Scroll System: Replace Lenis + useLenisSmooth with GSAP ScrollSmoother. This is the highest-impact fix for scroll jank, as it unifies the scroll and animation tickers.

P2: Fix Media Loading Strategies: Address the LCP-blocking hero video, the 6-iframe load in the portfolio, and the 3x auto-play in the platform demo.

P3: Optimize Observer Strategy: Refactor useSectionReveal and useDirectionalReveal to use a single trigger per section instead of ScrollTrigger.batch.

P4: Clean Up will-change Leaks: Consolidate all "reveal" animations into the newly refactored useSectionReveal hook to ensure will-change is managed correctly everywhere.

3. Comprehensive Refactor Brief

P1: Replace useLenisSmooth with ScrollSmoother

Issue: The useLenisSmooth hook creates a custom integration between Lenis and GSAP, which is complex and prone to sync issues. gsap.ticker.add(lenis.raf) and lenis.on('scroll', ScrollTrigger.update) create redundant update loops, and gsap.ticker.lagSmoothing(0) is required to force it to work, which is a red flag for inefficiency.

Root Cause: Using two separate scrolling/animation libraries (Lenis + GSAP) for a single purpose.

Prescribed Refactor: Use GSAP's native ScrollSmoother plugin. It's designed to work perfectly with ScrollTrigger from the ground up, using a single unified ticker.

Remove Lenis:

Delete the file src/hooks/useLenisSmooth.ts.

Uninstall the lenis package (npm uninstall lenis).

Update Page Structure (in src/pages/Studios.tsx):

ScrollSmoother requires a specific wrapper/content DOM structure. Wrap your PageLayout.

FROM:

<PageLayout>
  <Navigation />
  <main className="pt-20">
    <StudiosHero />
    {/* ...all other sections */}
  </main>
</PageLayout>


TO:

{/* ScrollSmoother requires this specific DOM structure */}
<div id="smooth-wrapper">
  <div id="smooth-content">
    <PageLayout>
      <Navigation />
      <main className="pt-20">
        <StudiosHero />
        {/* ...all other sections */}
      </main>
    </PageLayout>
  </div>
</div>


Initialize ScrollSmoother (in src/pages/Studios.tsx):

Remove the useLenisSmooth() call.

Add ScrollSmoother to your gsap.registerPlugin calls.

Add this useGSAP hook inside the Studios component.

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother"; // Ensure you have this plugin

// ... register all plugins you use
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const Studios = () => {
  // Remove useLenisSmooth() call

  // Add ScrollSmoother initialization
  useGSAP(() => {
    // Create the ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // Matches your Lenis duration
      effects: true, // Enable data-speed/data-lag effects if needed
      normalizeScroll: true, // Good for cross-browser consistency
    });

    console.log("[ScrollSmoother] Initialized");

    // Cleanup
    return () => {
      smoother.kill();
      console.log("[ScrollSmoother] Killed");
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ...your existing backdrop div... */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <PageLayout>
            {/* ...rest of your page... */}
          </PageLayout>
        </div>
      </div>
    </div>
  );
};


P2: Fix Critical Media Loading Bottlenecks

Issue 2.1: Hero LCP Contention

Issue: The StudiosHero component attempts to load a Mux video and run a font-dependent SplitText animation simultaneously, all within the LCP element. This creates severe resource contention, slowing down the hero animation and destroying LCP/FCP metrics.

Root Cause: The hero video is not deferred, and the intro animation is blocked by document.fonts.ready.

Prescribed Refactor: Prioritize the intro animation. Only mount and load the video after the text animation is complete.

Modify src/components/studios/StudiosHero.tsx:

In the StudiosHero component, add state to track the intro animation.

import { useCallback, useEffect, useRef, useState } from "react";
// ...
import { useHeroIntro } from "@/hooks/useHeroIntro";

export const StudiosHero = () => {
  // ... other refs and state
  const [isIntroAnimationComplete, setIsIntroAnimationComplete] = useState(false);
  // ...

  // Pass a callback to the intro hook to set state on completion
  useHeroIntro(() => {
    setIsIntroAnimationComplete(true);
    console.log("[HeroIntro] Animation complete, loading video.");
  });

  // ... rest of component


In the HeroVideoBackdrop component, conditionally render the MuxPlayer.

interface HeroVideoBackdropProps {
  // ...
  isIntroAnimationComplete: boolean; // Add this prop
}

const HeroVideoBackdrop = ({ playerRef, isVideoReady, setIsVideoReady, isMobile, isIntroAnimationComplete }: HeroVideoBackdropProps) => {
  // ...
  return (
    <div className="absolute inset-0 -z-40" style={{ transform: 'translate3d(0, 0, 0)' }}>
      {/* ... */}
      <div className="absolute inset-0 opacity-0 ..." data-ready={isVideoReady} ...>

        {/* CONDITIONALLY RENDER MUX PLAYER */}
        {isIntroAnimationComplete && (
          <MuxPlayer
            ref={playerRef}
            playbackId={HERO_VIDEO_PLAYBACK_ID}
            // ... other props
          />
        )}
      </div>
      {/* ... */}
    </div>
  )
}


Pass the new prop from StudiosHero to HeroVideoBackdrop:

<HeroVideoBackdrop
  playerRef={playerRef}
  isVideoReady={isVideoReady}
  setIsVideoReady={setIsVideoReady}
  isMobile={isMobile}
  isIntroAnimationComplete={isIntroAnimationComplete} // Pass the state
/>


Modify src/hooks/useHeroIntro.ts:

Accept and store the onComplete callback.

// Add onComplete parameter
export function useHeroIntro(onComplete?: () => void) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    // ... reduced motion block
    if (prefersReducedMotion) {
      onComplete?.(); // Call onComplete immediately
      return;
    }
    // ...
  }, [prefersReducedMotion, onComplete]); // Add onComplete to dependencies
}


In the initializeOptimizedAnimation function, find the onComplete for the entire timeline (which is the CTA/Tagline animation) and add the callback.

function initializeOptimizedAnimation(onComplete?: () => void) {
  // ...
  const split = new SplitText(headlineEl, {
    // ...
    onSplit: function(self) {
      // ...
      tl.to('[data-motion="hero-cta"]', {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'expo.out',
        onComplete: () => {
          // This is the end of the intro
          console.log('[HeroIntro] Timeline complete.');
          onComplete?.(); // Call the passed-in callback
        }
      }, '-=0.8');
    }
  });
}


Make sure to pass the onComplete prop down: initializeOptimizedAnimation(onComplete); in the document.fonts.ready.then() block.

Issue 2.2: Portfolio Section 6-Iframe Load

Issue: StudiosPortfolioSection.tsx renders 6 PortfolioCard components. Each PortfolioCard immediately mounts the VimeoPlayer component, which creates an iframe and starts loading the Vimeo player. This happens even though the player is just a background visual and the actual video plays in a modal.

Root Cause: Unnecessary eager loading of 6 VimeoPlayer components.

Prescribed Refactor: This is the easiest fix. The VimeoPlayer is completely redundant. The card's backdrop gradient and play button are all that's needed to trigger the modal. Simply delete the component.

Modify src/components/studios/StudiosPortfolioSection.tsx:

In the PortfolioCard component, find and delete the VimeoPlayer instance.

function PortfolioCard({ item, order }: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article ...>
        <button ... onClick={() => setIsModalOpen(true)} ...>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[30px]">
            {/* ... backdrop gradient div ... */}
            {/* ... backdrop-blur div ... */}
            <div className="absolute inset-[3px] rounded-[26px] overflow-hidden">
              <div className="relative h-full w-full">

                {/* DELETE THIS ENTIRE COMPONENT: */}
                {/* <VimeoPlayer
                  videoId={item.videoId}
                  autoplay={false}
                  loop={false}
                  muted={true}
                  controls={false}
                  isBackground={true}
                  className="rounded-[26px]"
                /> */}

                {/* ... rest of the overlays ... */}
              </div>
            </div>
          </div>
        </button>
      </article>
      {isModalOpen ? <VideoModal videoId={item.videoId} onClose={() => setIsModalOpen(false)} /> : null}
    </>
  )
}


Issue 2.3: Platform Demo 3x autoPlay

Issue: StudiosPlatformDemoSection.tsx mounts three MuxPlayer components, all with autoPlay={true}. This forces the browser to download and decode three videos at once, causing significant jank when scrolling past this section.

Root Cause: The autoPlay prop is a boolean, forcing playback regardless of visibility.

Prescribed Refactor: Use the autoPlay="visible" prop, which is the Mux web component's built-in IntersectionObserver-based lazy-play. While the React prop types might show boolean, the underlying web component supports "visible".

Modify src/components/studios/StudiosPlatformDemoSection.tsx:

In the MediaFrame component, find the MuxPlayer.

Change autoPlay to autoPlay="visible". This will instruct the Mux player to only play when it is in the viewport.

function MediaFrame(...) {
  return (
    <div ...>
      {/* ... */}
      <MuxPlayer
        playbackId={playbackId}
        loading="viewport"
        preload="none"
        autoPlay="visible" // <-- CHANGE THIS
        loop
        muted
        playsInline
        // ...
      />
      {/* ... */}
    </div>
  );
}


(Alternative if "visible" fails): If autoPlay="visible" doesn't work as expected (due to React prop-typing), you must use ScrollTrigger to manually play/pause.

In MediaFrame, add const playerRef = useRef<MuxPlayerElement>(null);

Add ref={playerRef} to MuxPlayer.

Add const frameRef = useRef<HTMLDivElement>(null);

Add ref={frameRef} to the root div of MediaFrame.

Add useGSAP(() => { ... }, { scope: frameRef });

Inside useGSAP, create a ScrollTrigger:

ScrollTrigger.create({
  trigger: frameRef.current,
  start: "top 80%",
  end: "bottom 20%",
  onEnter: () => playerRef.current?.play(),
  onLeave: () => playerRef.current?.pause(),
  onEnterBack: () => playerRef.current?.play(),
  onLeaveBack: () => playerRef.current?.pause(),
});


P3: Refactor Observer Strategy (from batch to timeline)

Issue: useSectionReveal and useDirectionalReveal use ScrollTrigger.batch. This creates one observer per element. The StudiosChallengeSection alone creates 8+ observers. This is extremely inefficient.

Root Cause: batch is the wrong tool. This pattern should use one trigger for the entire section to animate all its children. The usePortfolioAnimation hook already does this correctly.

Prescribed Refactor: Modify useSectionReveal and useDirectionalReveal to accept a trigger and run a single timeline, just like usePortfolioAnimation.

Modify src/hooks/useSectionReveal.ts:

Change the hook's logic to remove batch and use a single trigger.

FROM (old logic): ScrollTrigger.batch(elements, { ... })

TO (new logic):

// Add a 'trigger' option to the interface
interface UseSectionRevealOptions {
  selector?: string;
  trigger?: string; // The element that triggers the animation
  stagger?: number;
  duration?: number;
  distance?: number;
  start?: string;
  ease?: string;
  once?: boolean;
  debug?: boolean;
}

export function useSectionReveal(options: UseSectionRevealOptions = {}) {
  const {
    selector = '[data-reveal]',
    trigger, // Get the trigger
    stagger = 0.05,
    duration = 0.8,
    // ... other options
  } = options;

  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    // ... reduced motion check is fine ...

    const elements = gsap.utils.toArray<HTMLElement>(selector);
    if (elements.length === 0) {
      // ... warning is fine ...
      return;
    }

    // Find the trigger element. Default to the first element if no trigger is provided.
    const triggerElement = trigger ? document.querySelector(trigger) : elements[0];
    if (!triggerElement) {
      console.warn(`[useSectionReveal] Trigger element not found: "${trigger}"`);
      return;
    }

    // Set initial state (dynamic will-change logic is already correct)
    gsap.set(elements, { opacity: 0, y: distance });

    // REMOVE ScrollTrigger.batch()

    // CREATE ONE timeline
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      clearProps: "willChange",
      overwrite: "auto",
      onStart: function() {
        gsap.set(elements, { willChange: 'transform, opacity' });
      },
      // ... onComplete logic is fine ...

      // Add the ScrollTrigger object here
      scrollTrigger: {
        trigger: triggerElement,
        start,
        once,
        // toggleActions: "play none none none", // 'once' handles this
      }
    });

  }, { dependencies: [/* ... all options ... */, trigger] }); // Add trigger to deps
}


Modify src/hooks/useDirectionalReveal.ts:

Apply the exact same logic. Remove the two batch calls.

Find evenCards and oddCards.

Create two gsap.to timelines (one for evenCards, one for oddCards).

Link both timelines to the same scrollTrigger object, which uses a single trigger element (e.g., the grid container).

Update All Component Calls:

StudiosChallengeSection.tsx: useSectionReveal({ selector: '[data-reveal-challenge]', trigger: '#studios-challenge', ... })

StudiosProductionStackSection.tsx:

useSectionReveal({ selector: '[data-reveal-stack]', trigger: '#studios-production-stack', ... })

useDirectionalReveal({ selector: '[data-reveal-platform]', trigger: '[data-motion="production-stack.platforms"]', ... })

StudiosWorkflowSection.tsx: useSectionReveal({ selector: '[data-reveal-workflow]', trigger: '#studios-workflow', ... })

StudiosStandardsSection.tsx: useSectionReveal({ selector: '[data-reveal-standard]', trigger: '#studios-standards', ... })

StudiosPlatformDemoSection.tsx: useSectionReveal({ selector: '[data-reveal-feature]', trigger: '#studios-platform-demo', ... })

P4: Consolidate will-change & Animation Leaks

Issue: Several components (StudiosHero, StudiosTestimonialsSection) use inline styles or <style> tags to apply will-change, which leaks GPU memory.

Root Cause: Animations are being defined outside the optimized GSAP hooks.

Prescribed Refactor: Consolidate all "reveal" animations into the now-optimized useSectionReveal hook.

Modify src/components/studios/StudiosHero.tsx:

Find and delete the inline willChange: 'auto' style from the atmospheric overlay div. It is not animated.

{/* DELETE willChange: 'auto' from this div */}
<div className="pointer-events-none absolute inset-0 -z-30" style={{ transform: 'translate3d(0, 0, 0)' }}>


Find and delete the inline willChange: 'opacity' from the HeroVideoBackdrop. Its opacity is handled by React state/CSS transition, which is fine.

{/* DELETE willChange: 'opacity' from this div */}
<div className="absolute inset-0 opacity-0 ..." data-ready={isVideoReady}>


Modify src/components/studios/StudiosTestimonialsSection.tsx:

This section uses custom CSS keyframes (testimonial-fade-in) and applies a permanent will-change: transform in its <style> tag. This is a classic leak.

Refactor: Convert it to use useSectionReveal.

Delete the entire <style>{...}</style> block at the end of the TestimonialCard component.

In TestimonialCard, delete the inline style prop that sets the animation.

function TestimonialCard({ testimonial, index, isMobile = false, style }: TestimonialCardProps) {
  return (
    <article
      data-motion="testimonial-card" // Add a selector
      className="group relative"
      // DELETE THIS INLINE STYLE:
      // style={{
      //   animation: isMobile ? "none" : `testimonial-fade-in 500ms ...`,
      //   ...style,
      // }}
      style={style} // Keep the marginTop style
      aria-label={`Testimonial from ${testimonial.company}`}
      tabIndex={0}
    >
      {/* ... rest of card */}
    </article>
  )
}


In StudiosTestimonialsSection, add the useSectionReveal hook:

import { useSectionReveal } from '@/hooks/useSectionReveal'; // Add import

export function StudiosTestimonialsSection() {

  // Add this call
  useSectionReveal({
    selector: '[data-motion="testimonial-card"]',
    trigger: '#studios-testimonials',
    stagger: 0.15,
    duration: 0.5,
    distance: 60,
    ease: "cubic(0.34, 1.56, 0.64, 1)", // Easing from your keyframe
    start: "top 75%",
  });

  return (
    <section id="studios-testimonials" ...>
      {/* ... */}
    </section>
  )
}


In TestimonialCard, add the data-motion attribute to the article tag:

<article
  data-motion="testimonial-card"
  className="group relative"
  // ...
>
