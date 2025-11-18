GSAP Performance Audit & Refactor Brief: Conversational AI

This document details a comprehensive audit of the Conversational AI page, focusing on GSAP, ScrollTrigger, media, and interaction performance. All findings are prioritized, with root causes and precise, actionable remediation steps for the implementing agent.

P1: Critical Performance Bottlenecks

These issues directly impact load performance, main-thread jank, and user interaction, and should be addressed first.

1. (P1) Redundant Observers: FadeIn Wrapper vs. Section ScrollTrigger

Issue: Wrapping GSAP-animated sections in the <FadeIn> component creates redundant, conflicting observers.

File(s): src/pages/ConversationalAI.tsx

Cause: ConversationalAI.tsx wraps sections (UseCases, MarketingVideo, Scale, etc.) in <FadeIn>. The useFadeIn hook creates an IntersectionObserver to add a visibility class. Inside these sections (e.g., ConversationalUseCasesSection.tsx), useGSAP creates a ScrollTrigger (which also uses an observer) to perform a gsap.from() animation on the same elements. This creates two observers per section, fighting to animate the same content, wasting resources and risking visual conflicts.

Prescription:

Open src/pages/ConversationalAI.tsx.

Remove the <FadeIn> wrapper from every section that has its own internal useGSAP ScrollTrigger animation. This includes:

ConversationalUseCasesSection

ConversationalMarketingVideoSection

ConversationalScaleSection

ConversationalLiveDemoSection

ConversationalBrandSection

ConversationalEnterpriseSection

The ConversationalHero (which uses useHeroIntro) and ConversationalContactCTASection (which is always visible at the end) do not use <FadeIn> and are correct.

The internal ScrollTrigger in each section is now the single source of truth for view-based animation.

2. (P1) Pointer-Driven React Re-renders: UseCaseCard Tilt Effect

Issue: The 3D tilt effect on UseCaseCard is driven by React useState, causing a full component re-render on every single mouse movement.

File(s): src/components/conversational/ConversationalUseCasesSection.tsx (in the UseCaseCard sub-component).

Cause: handleMouseMove calls setTilt({ rotateX, rotateY }). This state update triggers a React re-render, which is the least performant way to handle high-frequency animations.

Prescription: Convert this to use GSAP's quickTo for zero re-renders.

In UseCaseCard, remove the useState for tilt.

Add a ref to the card element: const cardRef = useRef<HTMLDivElement>(null);. Assign it to the GlassmorphicCard component: ref={cardRef}.

Create state to hold the quickTo functions: const [quickRotations, setQuickRotations] = useState<{ x: (v: number) => void; y: (v: number) => void } | null>(null);

Inside UseCaseCard, use useGSAP to initialize GSAP and quickTo:

useGSAP(() => {
  if (!cardRef.current) return;
  // Set will-change for the duration of the interaction
  gsap.set(cardRef.current, { willChange: "transform" });

  setQuickRotations({
    x: gsap.quickTo(cardRef.current, "rotationX", { duration: 0.4, ease: "power3.out" }),
    y: gsap.quickTo(cardRef.current, "rotationY", { duration: 0.4, ease: "power3.out" })
  });

  return () => {
    // Cleanup: kill tweens and clear will-change
    if (cardRef.current) {
      gsap.killTweensOf(cardRef.current);
      gsap.set(cardRef.current, { clearProps: "willChange" });
    }
  };
}, { scope: cardRef });


Update handleMouseMove (wrapped in useCallback) to use quickTo without state:

const handleMouseMove = useCallback(
  (e: React.MouseEvent<HTMLDivElement>) => {
    if (!quickRotations) return;
    // ... (calculate rotateX and rotateY as before) ...
    quickRotations.x(rotateX);
    quickRotations.y(rotateY);
  },
  [quickRotations]
);


Update handleMouseLeave (wrapped in useCallback) to use gsap.to:

const handleMouseLeave = useCallback(() => {
  if (cardRef.current) {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
  }
}, []);


Remove the inline style prop's transform and transition from the GlassmorphicCard. GSAP now controls this.

3. (P1) Pointer-Driven Tween Buildup: CTA Magnetic Hover

Issue: The magnetic button in the Contact CTA creates a new gsap.to() tween on every pointer move, leading to a massive animation queue, stutter, and high CPU load.

File(s): src/components/conversational/ConversationalContactCTASection.tsx

Cause: handlePrimaryPointerMove calls gsap.to(target, ...) on each event. Hundreds of tweens are created per second, all fighting for control.

Prescription: Use gsap.quickTo() for the movement and gsap.to() for the leave animation.

This component already uses primaryCTARef. This is good.

Create state to hold the quickTo functions, similar to the UseCaseCard fix:

const [quickMoves, setQuickMoves] = useState<{
  x: (v: number) => void;
  y: (v: number) => void;
  scale: (v: number) => void;
} | null>(null);


Use useGSAP to initialize quickTo and will-change. This should be scoped to the section or primaryCTARef.

useGSAP(() => {
  if (!primaryCTARef.current) return;
  gsap.set(primaryCTARef.current, { willChange: "transform" });

  setQuickMoves({
    x: gsap.quickTo(primaryCTARef.current, "x", { duration: 0.3, ease: "power2.out" }),
    y: gsap.quickTo(primaryCTARef.current, "y", { duration: 0.3, ease: "power2.out" }),
    scale: gsap.quickTo(primaryCTARef.current, "scale", { duration: 0.3, ease: "power2.out" })
  });

  return () => {
    if (primaryCTARef.current) {
      gsap.killTweensOf(primaryCTARef.current);
      gsap.set(primaryCTARef.current, { clearProps: "willChange" });
    }
  };
}, { dependencies: [prefersReducedMotion] });


Update handlePrimaryPointerMove (wrapped in useCallback) to use quickTo:

const handlePrimaryPointerMove = useCallback(
  (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !quickMoves) return;
    // ... (calculate offsetX and offsetY as before) ...
    quickMoves.x(offsetX);
    quickMoves.y(offsetY);
    quickMoves.scale(1.02);
  },
  [prefersReducedMotion, quickMoves]
);


handlePrimaryPointerLeave is already using gsap.to(), which is correct for the "snap back" effect. No change needed there, though ensure it also clears will-change on complete if the useGSAP cleanup doesn't catch it.

4. (P1) Eager Script Loading: ElevenLabs Convai Widget

Issue: The ElevenLabs Convai widget script is loaded immediately on page mount, adding unnecessary network, parse, and execution cost to the initial load.

File(s): src/pages/ConversationalAI.tsx

Cause: The useEffect hook in ConversationalAI.tsx appends the script to document.body as soon as the page component mounts.

Prescription: Defer loading until user interaction.

Remove the entire useEffect hook that loads the Convai script from src/pages/ConversationalAI.tsx.

Create a new component, e.g., src/components/conversational/DynamicConvaiWidget.tsx.

// src/components/conversational/DynamicConvaiWidget.tsx
import { useEffect } from 'react';

export const DynamicConvaiWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "[https://unpkg.com/@elevenlabs/convai-widget-embed](https://unpkg.com/@elevenlabs/convai-widget-embed)";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Also find and remove the widget UI if it exists
      const widget = document.getElementById('elevenlabs-convai-widget');
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return null; // This component renders nothing
};


Modify src/components/conversational/ConversationalLiveDemoSection.tsx.

Add useState to track loading: const [loadWidget, setLoadWidget] = useState(false);

Add a "Load Live Demo" button. This can replace the current video-centric UI or be part of it. For this brief, we'll assume it's a new button.

// In ConversationalLiveDemoSection.tsx, render this button:
<button onClick={() => setLoadWidget(true)}>
  Load Interactive Demo
</button>

// And render the widget conditionally:
{loadWidget && <DynamicConvaiWidget />}


(Alternative): If you want to load it when the section scrolls into view (less ideal than a click), you can use a single IntersectionObserver (or ScrollTrigger with once: true) in ConversationalLiveDemoSection.tsx to set setLoadWidget(true).

P2: High-Priority Optimizations

These issues cause redundant work, create multiple unnecessary ScrollTrigger instances, and represent an inefficient media strategy.

1. (P2) Redundant ScrollTriggers: Responsive Animations

Issue: Multiple ScrollTrigger instances are created for different breakpoints (desktop, tablet, mobile) within the same component.

File(s): src/components/conversational/ConversationalUseCasesSection.tsx, src/components/conversational/ConversationalEnterpriseSection.tsx.

Cause: The useGSAP hook has separate gsap.from() calls for desktopGridRef, tabletGridRef, and mobileGridRef, each with its own scrollTrigger config.

Prescription: Consolidate all responsive animations into a single gsap.matchMedia().

In ConversationalUseCasesSection.tsx (and ConversationalEnterpriseSection.tsx), refactor the useGSAP hook.

Wrap all animations in gsap.matchMedia(). This will create and clean up triggers automatically on resize.

useGSAP(() => {
  if (prefersReducedMotion) return;

  const mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 1024px)",
    isTablet: "(min-width: 768px) and (max-width: 1023px)",
    isMobile: "(max-width: 767px)"
  }, (context) => {
    const { isDesktop, isTablet, isMobile } = context.conditions as { isDesktop: boolean; isTablet: boolean; isMobile: boolean };

    if (isDesktop) {
      gsap.from(desktopGridRef.current?.children || [], {
        // ...desktop animation config...
        scrollTrigger: {
          trigger: desktopGridRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    }

    if (isTablet) {
      gsap.from(tabletGridRef.current?.children || [], {
        // ...tablet animation config...
        scrollTrigger: {
          trigger: tabletGridRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    }

    if (isMobile) {
      gsap.from(mobileGridRef.current?.children || [], {
        // ...mobile animation config...
        scrollTrigger: {
          trigger: mobileGridRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  });

  return () => mm.revert(); // Cleanup

}, { scope: sectionRef, dependencies: [prefersReducedMotion] });


2. (P2) Media Pipeline Strategy: Mux Player Loading

Issue: Below-the-fold Mux players use preload="none" and require a manual click, which is less engaging than viewport-aware playback.

File(s): src/components/conversational/ConversationalMarketingVideoSection.tsx, src/components/conversational/ConversationalLiveDemoSection.tsx.

Cause: The players are configured for minimal initial load but don't take advantage of modern autoPlay properties.

Prescription:

In both ConversationalMarketingVideoSection.tsx and ConversationalLiveDemoSection.tsx:

Change the MuxPlayer prop preload="none" to preload="metadata". This is lightweight and loads the video's duration and first frame, preventing layout shift and improving the poster.

Add the prop autoPlay="visible". This will intelligently play the video when it is >50% in the viewport and pause it when it scrolls out, providing a much better UX.

You can now remove the custom handlePlayClick, isPlaying state, and the custom play button overlay, as MuxPlayer will handle this. This simplifies both components.

Dependency: This change in ConversationalLiveDemoSection may conflict with the P1 fix for the Convai widget.

Recommendation: Apply this fix to ConversationalMarketingVideoSection. For ConversationalLiveDemoSection, prioritize the P1 Convai widget fix. You can keep the autoPlay="visible" prop on the Mux player and have the separate "Load Interactive Demo" button.

P3: Best Practices & Code Hygiene

These issues are not critical bottlenecks but represent code smell, potential future problems, and global misuse of CSS properties.

1. (P3) Global will-change Misuse

Issue: GlassmorphicCard injects a global <style> tag that applies will-change: transform to every element with the .group class.

File(s): src/components/conversational/shared/GlassmorphicCard.tsx.

Cause: This is an overly broad and costly CSS hint, forcing the browser to create GPU layers for all groups, even static ones, which can degrade mobile performance.

Prescription:

Open src/components/conversational/shared/GlassmorphicCard.tsx.

Delete the entire inline <style>{...}</style> block from the component.

The will-change property should only be applied by GSAP (or CSS) to the specific elements that are actually animating, right before they animate, and removed after. The P1 fixes for UseCaseCard and ContactCTA already prescribe this correct will-change handling via gsap.set().

2. (P3) Redundant Plugin Registration

Issue: gsap.registerPlugin(useGSAP, ScrollTrigger) is called at the module scope in nearly every component file.

File(s): ConversationalUseCasesSection.tsx, ConversationalScaleSection.tsx, ConversationalMarketingVideoSection.tsx, ConversationalBrandSection.tsx, ConversationalEnterpriseSection.tsx, shared/MetricCounter.tsx.

Cause: Template copy-pasting. While GSAP is robust and ignores re-registration, this is unnecessary and clutters modules.

Prescription:

Remove the gsap.registerPlugin(useGSAP, ScrollTrigger) line from all the components listed above.

Add this registration once in your application's main entry point, src/main.tsx (or src/App.tsx if main.tsx is not available), at the top level, before the app renders.

// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css' // or global styles

// Register GSAP plugins globally ONCE
gsap.registerPlugin(useGSAP, ScrollTrigger);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


Also add the SplitText registration from useHeroIntro.ts here: gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText); and remove it from the hook file.