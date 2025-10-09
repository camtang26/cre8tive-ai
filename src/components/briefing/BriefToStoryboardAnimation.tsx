import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { briefingPalette } from "./palette";
import { AIProcessingVisual } from "@/components/briefing/AIProcessingVisual";

const visualStyles = [
  { name: "Minimalist", src: "/briefing-engine/visual-styles/Minimalist.webp" },
  { name: "Bold & Vibrant", src: "/briefing-engine/visual-styles/BoldVibrant.webp" },
  { name: "Cinematic", src: "/briefing-engine/visual-styles/CinematicDramatic.webp" },
  { name: "Playful & Animated", src: "/briefing-engine/visual-styles/Playfulanimated.webp" },
  { name: "Futuristic", src: "/briefing-engine/visual-styles/Futuristic.webp" },
  { name: "Retro & Vintage", src: "/briefing-engine/visual-styles/RetroVintage.webp" },
  { name: "Documentary", src: "/briefing-engine/visual-styles/DocumentaryRealistic.webp" },
  { name: "Artistic Abstract", src: "/briefing-engine/visual-styles/ArtisticAbstract.webp" },
  { name: "2D Vector", src: "/briefing-engine/visual-styles/2dVector.webp" }
];

const storyboardFrames = [
  "/briefing-engine/storyboard/Frame1.webp",
  "/briefing-engine/storyboard/Frame2.webp",
  "/briefing-engine/storyboard/Frame3.webp",
  "/briefing-engine/storyboard/Frame4.webp",
  "/briefing-engine/storyboard/Frame5.webp",
  "/briefing-engine/storyboard/Frame6.webp"
];

const stageData = [
  {
    title: "Craft the Brief",
    description:
      "Capture campaign goal, audience, tone and must-have shots in a guided cinematic form.",
    accent: briefingPalette.indigo.DEFAULT
  },
  {
    title: "AI Narrative Engine",
    description:
      "Neural choreography maps story pacing, tone and cinematography cues in real-time.",
    accent: briefingPalette.holographic.cyan
  },
  {
    title: "Style Selection",
    description:
      "Nine signature looks snap into place—Minimalist, Cinematic, Playful and more—fully on brand.",
    accent: briefingPalette.fuchsia.DEFAULT
  },
  {
    title: "Storyboard Assembly",
    description:
      "Panels draw on with scene markers, aspect ratios and director notes ready for review.",
    accent: briefingPalette.cyan.DEFAULT
  },
  {
    title: "Studios Handoff",
    description:
      "A production-ready PDF transitions into Cre8tive AI Studios for photo-real delivery.",
    accent: briefingPalette.orange.DEFAULT
  }
];

const heroDetailPills = [
  {
    label: "Campaign",
    value: "Alpine Water · Summer Elevation",
    platform: null
  },
  {
    label: "YouTube",
    value: "16:9 · 60sec",
    platform: "youtube"
  },
  {
    label: "TikTok",
    value: "9:16 · 15sec",
    platform: "tiktok"
  }
];

const heroFieldTiles = [
  {
    label: "Brand Name",
    value: "Alpine Water Co.",
    hint: "Integrated into every video concept."
  },
  {
    label: "Target Audience",
    value: "Urban wellness seekers · 24–38",
    hint: "AI tailors messaging to your ideal viewer."
  },
  {
    label: "Unique Selling Points",
    value: "Glacier-sourced purity · Zero plastic · Peak hydration science",
    hint: "Core benefits highlighted in every frame."
  },
  {
    label: "Brand Personality",
    value: "Elevated yet approachable · Zen minimalist · Science-backed wellness",
    hint: "Locks tone and style before production."
  }
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const BriefToStoryboardAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stageRefs = useRef<HTMLDivElement[]>([]);
  const heroShellRef = useRef<HTMLDivElement | null>(null);
  const heroGridRef = useRef<HTMLDivElement | null>(null);
  const heroArcRef = useRef<HTMLDivElement | null>(null);
  const heroLabelRef = useRef<HTMLDivElement | null>(null);
  const heroHeadlineRef = useRef<HTMLHeadingElement | null>(null);
  const heroSubheadlineRef = useRef<HTMLParagraphElement | null>(null);
  const heroDetailRefs = useRef<HTMLDivElement[]>([]);
  const heroFieldCardRef = useRef<HTMLDivElement | null>(null);
  const heroFieldRefs = useRef<HTMLDivElement[]>([]);
  const heroPrimaryCtaRef = useRef<HTMLAnchorElement | null>(null);
  const heroSecondaryCtaRef = useRef<HTMLAnchorElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const accentRef = useRef<HTMLDivElement | null>(null);
  const styleCardRefs = useRef<HTMLDivElement[]>([]);
  const storyboardFrameRefs = useRef<HTMLDivElement[]>([]);
  const pdfMockupRef = useRef<HTMLImageElement | null>(null);

  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  // NOTE: useLenis hook handles Lenis + ScrollTrigger integration
  // No manual ticker integration needed with ReactLenis wrapper

  // Track if lenis callback has been registered (needs one frame after lenis loads)
  const [lenisReady, setLenisReady] = useState(false);

  useEffect(() => {
    if (lenis && !lenisReady) {
      // Wait one frame to ensure useLenis callback is fully registered
      requestAnimationFrame(() => {
        setLenisReady(true);
      });
    } else if (!lenis && lenisReady) {
      setLenisReady(false);
    }
  }, [lenis, lenisReady]);

  // All GSAP animations consolidated (auto-cleanup with useGSAP)
  useGSAP(() => {
    // CRITICAL: Wait for lenis callback to be registered before creating ScrollTrigger
    if (!lenisReady) {
      return;
    }

    // CRITICAL: Check containerRef first (exists immediately on mount)
    // heroShellRef is populated later by JSX callback - checking it first causes early return
    if (!containerRef.current) {
      return;
    }

    // ========================================
    // ENTRANCE ANIMATION - Initial Hidden State
    // ========================================

    // Set entire container to hidden state (position/scale final, only opacity/blur animate)
    // CRITICAL: Keep y and scale at final values to prevent ScrollTrigger position shifts
    gsap.set(containerRef.current, {
      opacity: 0,                // Invisible but occupies layout space
      y: 0,                      // Already at final position (no slide animation)
      scale: 1,                  // Already at final scale (no scale animation)
      filter: "blur(20px)",      // Heavy blur (out of focus) - will animate to 0
      transformOrigin: "50% 50%" // Scale from center (for other animations)
    });

    // ========================================
    // ENTRANCE TIMELINE - Simplified Focus Pull (opacity + blur only)
    // ========================================

    // Create entrance reveal timeline (blur → sharp, invisible → visible)
    const entranceTimeline = gsap.timeline({
      paused: true,  // Don't play automatically, wait for ScrollTrigger
      defaults: { ease: "power3.out" }  // Smooth deceleration
    });

    entranceTimeline.to(containerRef.current, {
      opacity: 1,                // Fade in
      filter: "blur(0px)",       // Snap into focus
      duration: 1.2,             // 1.2 seconds (feels premium, not rushed)
      ease: "power3.out"         // Smooth ease-out (starts fast, ends slow)
    });

    // ScrollTrigger to fire entrance when container enters viewport
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 60%",          // Fires when container top hits 60% down viewport (tunable)
      once: true,                // Only fire once (don't re-trigger on scroll up)
      onEnter: () => {
        entranceTimeline.play();
      }
    });

    // ========================================
    // INTRO TIMELINE (Stage 1 - Hero Form)
    // ========================================

    // Declare introTimeline outside conditional for broader scope
    let introTimeline = null;

    // Only run intro timeline if hero refs are populated
    if (heroShellRef.current) {
      // Set initial states
      gsap.set(heroShellRef.current, { autoAlpha: 0, y: 40, scale: 0.94 });
    if (heroGridRef.current) gsap.set(heroGridRef.current, { autoAlpha: 0, rotation: 4, scale: 1.06 });
    if (heroArcRef.current) gsap.set(heroArcRef.current, { autoAlpha: 0, scale: 0.72, rotate: -28 });
    if (heroLabelRef.current) gsap.set(heroLabelRef.current, { autoAlpha: 0, y: 22 });
    if (heroHeadlineRef.current) gsap.set(heroHeadlineRef.current, { autoAlpha: 0, y: 36 });
    if (heroSubheadlineRef.current) gsap.set(heroSubheadlineRef.current, { autoAlpha: 0, y: 28 });
    heroDetailRefs.current.forEach((el) => gsap.set(el, { autoAlpha: 0, y: 20 }));
    if (heroFieldCardRef.current) gsap.set(heroFieldCardRef.current, { autoAlpha: 0, y: 50, scale: 0.95 });
    heroFieldRefs.current.forEach((el) => gsap.set(el, { autoAlpha: 0, y: 26 }));
    if (heroPrimaryCtaRef.current) gsap.set(heroPrimaryCtaRef.current, { autoAlpha: 0, y: 20, scale: 0.92 });
    if (heroSecondaryCtaRef.current) gsap.set(heroSecondaryCtaRef.current, { autoAlpha: 0, y: 20, scale: 0.92 });

    // Create intro timeline (waits for entrance onComplete, not auto-play)
    // This ensures all heroShellRef content is visible BEFORE scroll timeline can hide it
    introTimeline = gsap.timeline({
      paused: true,              // Don't auto-play, wait for entrance onComplete
      defaults: { ease: "power3.out" }
    });

    introTimeline
      .to(heroShellRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8 })
      .to(heroGridRef.current, { autoAlpha: 1, rotation: 0, scale: 1, duration: 1.1 }, "<")
      .to(heroArcRef.current, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.9 }, "<0.1")
      .to(heroLabelRef.current, { y: 0, autoAlpha: 1, duration: 0.55 }, "-=0.5")
      .to(heroHeadlineRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.4")
      .to(heroSubheadlineRef.current, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.45")
      .to(heroDetailRefs.current, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .to(heroFieldCardRef.current, { y: 0, autoAlpha: 1, scale: 1, duration: 0.8 }, "-=0.35")
      .to(heroFieldRefs.current, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 }, "-=0.6")
      .to(heroPrimaryCtaRef.current, { y: 0, autoAlpha: 1, scale: 1, duration: 0.45 }, "-=0.3")
      .to(heroSecondaryCtaRef.current, { y: 0, autoAlpha: 1, scale: 1, duration: 0.45 }, "-=0.35");

    // ========================================
    // ENTRANCE → INTRO CHAINING (Overlapped for Earlier Start)
    // ========================================

    // Start intro timeline EARLIER (midway through entrance at 0.6s)
    // This gives Frame 1 animation more time to complete before scroll transitions
    entranceTimeline.add(() => {
      introTimeline.play();
    }, 0.6); // Fires 0.6s into entrance (50% through 1.2s entrance)

    // ========================================
    // INFINITE ANIMATIONS (Background elements)
    // ========================================

    // Rotating energy arc
    if (heroArcRef.current) {
      gsap.to(heroArcRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "none"
      });
    }

    // Pulsing grid background
    if (heroGridRef.current) {
      gsap.to(heroGridRef.current, {
        backgroundPosition: "120% 60%",
        filter: "brightness(1.25)",
        repeat: -1,
        yoyo: true,
        duration: 24,
        ease: "sine.inOut"
      });
    }
    } // End hero intro timeline conditional

    // ========================================
    // SCROLL TIMELINE (All 5 Stages)
    // ========================================

    const sections = stageRefs.current.filter(Boolean);

    if (!sections.length) {
      return;
    }

    const updateDetail = (index: number) => {
      const data = stageData[Math.max(0, Math.min(stageData.length - 1, index))];
      if (badgeRef.current)
        badgeRef.current.textContent = `${index + 1}/${stageData.length}`;
      if (titleRef.current) titleRef.current.textContent = data.title;
      if (descriptionRef.current) descriptionRef.current.textContent = data.description;
    };

    // Set initial states for all stages
    gsap.set(sections, {
      autoAlpha: 0,
      scale: 0.9,
      yPercent: 12,
      filter: "saturate(0.6)",
      transformOrigin: "50% 50%"
    });

    // Stage 0 (hero form) stays visible as base layer - NEVER gets hidden
    // It contains heroShellRef with intro animations - hiding parent would override children
    gsap.set(sections[0], {
      autoAlpha: 1,
      scale: 1.05,
      yPercent: 0,
      filter: "saturate(1)",
      zIndex: 1  // Base layer
    });
    updateDetail(0);

    // CRITICAL: Wait for container to be laid out before creating ScrollTrigger
    // On hard refresh, lenis loads but container hasn't been painted yet (height=0)
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect || containerRect.height === 0) {
      // Use requestAnimationFrame to defer until after browser layout pass
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    // Main scroll timeline (CRITICAL: ease "none" for scrub compatibility)
    const scrollTimeline = gsap.timeline({
      defaults: { ease: "none" }, // CHANGED from "power3.out" - required for scrub
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=15 top", // FIXED: Start pin AFTER scrolling past top (prevents text cutoff)
        end: "+=12000", // Buffer (6s) + Frames 2-5 (5s) + dwell (2s) = 13s × 960px
        scrub: 1, // 1-second smooth lag (GSAP best practice - responsive but not jerky)
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true // Force recalc on Lenis updates
      }
    });

    // CRITICAL: Add intro buffer - prevents Frame 1→2 transition until intro completes
    // Intro timeline takes ~2.74s to complete all hero content animations
    // Buffer duration must match to prevent scroll-based timeline from advancing before time-based intro finishes
    if (introTimeline) {
      scrollTimeline.to({}, { duration: 3.5 }); // Match intro duration + margin (prevents Frame 2 appearing before Frame 1 completes)
    }

      sections.forEach((stage, index) => {
        const label = `stage-${index}`;
        const accent = stageData[index].accent;
        const progress = ((index + 1) / stageData.length) * 100;

        // Add spacing between stages (AC1: crossfade overlap +=0.15s for tighter handoff)
        scrollTimeline.addLabel(label, index === 0 ? 0 : "+=0.15");
        scrollTimeline.call(updateDetail, [index], label);

        // AC1: Stage reveal - 0.6s duration, power2.out ease (Apple 400-600ms standard)
        scrollTimeline.to(
          stage,
          {
            autoAlpha: 1,
            scale: 1.05,
            yPercent: 0,
            filter: "saturate(1)",
            boxShadow: `0 70px 220px -120px ${accent}90`,
            zIndex: index + 2,  // Higher z-index for later stages (stage 0 is z:1, this starts at z:2)
            duration: 0.6,      // AC1: 60% faster than 1.5s baseline
            ease: "power2.out"  // AC1: Sharper deceleration for snappier feel
          },
          label
        );

        // Hide previous stage when showing next stage
        // AC1: Stage hide - 0.5s duration, power3.in ease (UX research 200-500ms sweet spot)
        if (index > 0) {
          scrollTimeline.to(
            sections[index - 1],
            {
              autoAlpha: 0,
              scale: 0.88,
              yPercent: -18,
              filter: "saturate(0.35)",
              zIndex: 0,         // Move to back
              duration: 0.5,     // AC1: 58% faster than 1.2s baseline
              ease: "power3.in"  // AC1: Sharp acceleration for cleaner exit
            },
            label
          );
        }

        // AC2: Progress bar synchronized with stage reveal (0.6s duration)
        if (progressRef.current) {
          scrollTimeline.to(
            progressRef.current,
            {
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${accent}, ${accent}80)`,
              duration: 0.6,     // AC2: Matches stage reveal timing
              ease: "power2.out" // Matches stage reveal ease
            },
            label
          );
        }

        // AC2: Accent indicator synchronized with stage reveal (0.6s, larger glow)
        if (accentRef.current) {
          scrollTimeline.to(
            accentRef.current,
            {
              background: accent,
              boxShadow: `0 0 30px ${accent}80`, // AC2: Slightly larger, more intense glow
              duration: 0.6,                     // AC2: Matches stage reveal timing
              ease: "power2.out"                 // Matches stage reveal ease
            },
            label
          );
        }

        // AC3: Style cards cascade - COUNTERINTUITIVE: INCREASE stagger from 0.08 to 0.12
        // Research: <100ms staggers blur together, 0.1-0.15s creates visible "energetic wave"
        if (index === 2 && styleCardRefs.current.length) {
          scrollTimeline.fromTo(
            styleCardRefs.current,
            {
              autoAlpha: 0,
              yPercent: 15,        // INCREASED: 12 → 15 (more dramatic slide up)
              scale: 0.88,         // DECREASED: 0.92 → 0.88 (bigger growth)
              rotationZ: -3,       // NEW: Slight rotation for more dynamic entry
              force3D: true        // CRITICAL: GPU acceleration (was missing!)
            },
            {
              autoAlpha: 1,
              yPercent: 0,
              scale: 1,
              rotationZ: 0,        // Rotate back to 0
              force3D: true,       // Keep GPU layer active
              stagger: 0.12,       // AC3: INCREASE 0.08→0.12 (50% slower for visible cascade)
              duration: 0.35,      // AC3: 42% faster than 0.6s baseline
              ease: "back.out(2.0)" // INCREASED: 1.7 → 2.0 (BIGGER overshoot for more bounce)
            },
            `${label}+=0.2`  // AC3: Tighter coordination (0.3s→0.2s)
          );
        }

        // AC4: Storyboard frames - INCREASE stagger 0.05→0.15 + add 3D depth
        // Research: 150ms is Awwwards 2024-2025 standard for "cinematic snap-in rhythm"
        if (index === 3 && storyboardFrameRefs.current.length) {
          scrollTimeline.fromTo(
            storyboardFrameRefs.current,
            {
              autoAlpha: 0,
              yPercent: 8,
              scale: 0.94,
              rotationY: 15,               // INCREASED: 5° → 15° for more visible flip
              transformPerspective: 500,   // REDUCED: 1000 → 500 for more dramatic perspective
              force3D: true                // CRITICAL: Force GPU acceleration for 3D
            },
            {
              autoAlpha: 1,
              yPercent: 0,
              scale: 1,
              rotationY: 0,                // AC4: 3D flip effect (15° → 0°)
              transformPerspective: 500,   // Maintain perspective throughout
              force3D: true,               // Keep GPU layer active
              stagger: 0.15,               // AC4: INCREASE 0.05→0.15 (200% slower for cinematic rhythm)
              duration: 0.3,               // AC4: 40% faster than 0.5s baseline
              ease: "power3.out"           // AC4: Sharper snap = assembly feel
            },
            `${label}+=0.2`  // AC4: Tighter coordination (0.3s→0.2s)
          );
        }

        // Frame 2: AI Processing dwell - Give particle visualization breathing room
        // 0.6s transition + 0.6s dwell = 1.2s total
        if (index === 1) {
          scrollTimeline.to({}, { duration: 0.6 }, "+=0");
        }

        // Frame 5: PDF finale - Clean reveal with breathing room
        // 0.5s reveal + 1.0s dwell = 1.5s total (matches other frames)
        if (index === 4 && pdfMockupRef.current) {
          scrollTimeline.fromTo(
            pdfMockupRef.current,
            {
              autoAlpha: 0,
              scale: 0.95
            },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            },
            `${label}+=0.2`
          );

          // Add dwell time after reveal - let the PDF breathe
          scrollTimeline.to({}, { duration: 1.0 }, "+=0");
        }
      });

      ScrollTrigger.refresh();
  }, {
    scope: containerRef,
    dependencies: [lenisReady] // CRITICAL: Re-run when lenis callback is registered
  });

  // Note: Refs are auto-populated by JSX callbacks below - no manual clearing needed

  return (
    <section
      id="brief-to-storyboard"
      ref={containerRef}
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pt-28 pb-20 md:px-12 z-0"
      aria-label="Transformation from creative brief to storyboard"
    >
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at 15% 20%, rgba(99,102,241,0.18) 0%, transparent 48%),
              radial-gradient(circle at 82% 78%, rgba(192,38,211,0.14) 0%, transparent 52%),
              linear-gradient(180deg, rgba(4,4,12,0.92) 0%, rgba(8,8,18,0.95) 40%, rgba(4,4,12,0.9) 100%)`
          }}
        />
        <div
          className="absolute -inset-20 blur-[160px] opacity-35"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.65), rgba(34,211,238,0.45), rgba(192,38,211,0.35))"
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[1680px] flex-col items-center gap-10">
        <div className="relative flex w-full max-w-[1480px] items-center justify-center">
          <div className="relative aspect-[18/8.5] w-full min-h-[500px] max-h-[580px] overflow-visible rounded-[48px] border border-white/12"
            style={{ background: briefingPalette.neutrals.panel }}
          >
            <div className="pointer-events-none absolute -inset-px rounded-[42px] bg-gradient-to-br from-white/16 via-transparent to-transparent" />
            <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/12"
              style={{ background: briefingPalette.neutrals.surface }}
            >
              <div
                ref={(el) => el && (stageRefs.current[0] = el)}
                className="absolute inset-0 rounded-[28px] border border-white/14"
              >
                <div ref={heroShellRef} className="relative h-full w-full overflow-hidden rounded-[28px]">
                  <div
                    ref={heroGridRef}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(129,140,248,0.28),transparent_52%),radial-gradient(circle_at_82%_78%,rgba(192,38,211,0.18),transparent_58%),linear-gradient(130deg,rgba(10,12,28,0.98),rgba(7,9,20,0.95))]"
                    aria-hidden
                  />
                  <div
                    ref={heroArcRef}
                    className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10 opacity-70 blur-sm"
                    style={{
                      background:
                        "conic-gradient(from 180deg at 50% 50%, rgba(79,70,229,0) 0deg, rgba(34,211,238,0.55) 120deg, rgba(192,38,211,0) 280deg)"
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-[28px] border border-white/8 mix-blend-screen" aria-hidden />
                  <div className="relative z-10 h-full px-8 py-3 md:px-12 md:py-5 lg:px-16 lg:py-6">
                    <div className="grid h-full items-stretch gap-4 md:gap-5 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="flex flex-col justify-start gap-20 md:gap-20">
                        <div className="space-y-5">
                          <div
                            ref={heroLabelRef}
                            className="inline-flex w-max items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-[15px] font-semibold uppercase tracking-[0.38em] text-white/70"
                            style={{textShadow: '0 1px 6px rgba(0,0,0,0.3)'}}
                          >
                            <span>Step 01</span>
                            <span className="text-white/45">Briefing Intake</span>
                          </div>
                          <div className="space-y-2.5">
                            <h4
                              ref={heroHeadlineRef}
                              className="text-[32px] font-black tracking-tight text-white md:text-[50px] lg:text-[60px] leading-[1.1]"
                              style={{textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 4px 24px rgba(0,0,0,0.3)'}}
                            >
                              Brand DNA captured in 2 minutes
                            </h4>
                          </div>
                          <div className="flex flex-col gap-4">
                            {heroDetailPills.slice(0, 1).map((detail) => (
                              <div
                                key={detail.label}
                                ref={(el) => el && heroDetailRefs.current.push(el)}
                                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/12 px-6 py-3 text-[13px] uppercase tracking-[0.35em] text-white/70 w-max"
                                style={{boxShadow: '0 2px 12px rgba(0,0,0,0.2)', textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}
                              >
                                <span className="font-semibold">{detail.label}</span>
                                <span className="text-xs font-bold tracking-[0.28em] text-white/85">
                                  {detail.value}
                                </span>
                              </div>
                            ))}

                            <div className="flex flex-col gap-4">
                              <div className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.38em] text-white/60" style={{textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}>
                                <span>Formats & Duration</span>
                              </div>
                              <div className="flex items-center gap-8">
                                {heroDetailPills.slice(1).map((detail, idx) => (
                                  <div
                                    key={detail.label}
                                    ref={(el) => {
                                      if (el && idx === 0) heroDetailRefs.current.push(el);
                                      if (el && idx === 1) heroDetailRefs.current.push(el);
                                    }}
                                    className="inline-flex items-center gap-3"
                                    style={{textShadow: '0 1px 6px rgba(0,0,0,0.3)'}}
                                  >
                                    {detail.platform === 'youtube' && (
                                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FF0000">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                      </svg>
                                    )}
                                    {detail.platform === 'tiktok' && (
                                      <svg className="w-10 h-10" viewBox="0 0 24 24">
                                        <defs>
                                          <linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: '#00F2EA', stopOpacity: 1}} />
                                            <stop offset="100%" style={{stopColor: '#FF0050', stopOpacity: 1}} />
                                          </linearGradient>
                                        </defs>
                                        <path fill="url(#tiktokGradient)" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                      </svg>
                                    )}
                                    <div className="flex flex-col">
                                      <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-white/70">{detail.label}</span>
                                      <span className="text-[16px] font-black tracking-wide text-white/95">{detail.value}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          ref={heroPrimaryCtaRef}
                          href="/contact"
                          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#22D3EE] px-8 py-4 text-[15px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_32px_120px_-60px_rgba(99,102,241,0.9)] transition-transform duration-300 group-hover:-translate-y-0.5 w-max -mt-3"
                          style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}
                        >
                          Start Your First Brief
                          <span className="text-white/70">→</span>
                        </a>
                      </div>

                      <div
                        ref={heroFieldCardRef}
                        className="relative flex flex-col gap-3 rounded-[28px] border border-white/12 bg-[rgba(13,15,32,0.92)] p-4 shadow-[0_80px_200px_-120px_rgba(99,102,241,0.7)]"
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10 opacity-45" aria-hidden />
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-40" aria-hidden />

                        {/* Brand Name - Hero Treatment */}
                        <div
                          ref={(el) => el && heroFieldRefs.current.push(el)}
                          className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent p-4"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_70%)]" aria-hidden />
                          <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-indigo-300/80">Brand Name</span>
                              <span className="rounded-full bg-indigo-400/20 px-2 py-0.5 text-[8px] font-semibold text-indigo-200/60">Required</span>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                              Alpine Water Co.
                            </h3>
                          </div>
                        </div>

                        {/* Target Audience - Icon Card */}
                        <div
                          ref={(el) => el && heroFieldRefs.current.push(el)}
                          className="relative rounded-2xl border border-white/15 bg-[rgba(18,20,40,0.85)] p-6"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/30">
                              <svg className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/70 mb-2">Target Audience</div>
                              <p className="text-lg font-semibold text-white/95 leading-tight">Urban wellness seekers · 24–38</p>
                            </div>
                          </div>
                        </div>

                        {/* USPs - Tag Layout */}
                        <div
                          ref={(el) => el && heroFieldRefs.current.push(el)}
                          className="relative rounded-2xl border border-white/15 bg-[rgba(18,20,40,0.85)] p-6"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-fuchsia-300/70 mb-3">Unique Selling Points</div>
                          <div className="flex flex-wrap gap-2.5">
                            <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-400/30 text-sm font-semibold text-white/90">
                              Glacier-sourced purity
                            </span>
                            <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 text-sm font-semibold text-white/90">
                              Zero plastic
                            </span>
                            <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 border border-pink-400/30 text-sm font-semibold text-white/90">
                              Peak hydration science
                            </span>
                          </div>
                        </div>

                        {/* Brand Personality - Trait Pills */}
                        <div
                          ref={(el) => el && heroFieldRefs.current.push(el)}
                          className="relative rounded-2xl border border-white/15 bg-[rgba(18,20,40,0.85)] p-6"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-300/70 mb-3">Brand Personality</div>
                          <div className="flex flex-wrap gap-2.5">
                            <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-indigo-500/15 border border-indigo-400/30 text-sm font-medium text-indigo-100/90">
                              Elevated yet approachable
                            </span>
                            <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-sm font-medium text-cyan-100/90">
                              Zen minimalist
                            </span>
                            <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-purple-500/15 border border-purple-400/30 text-sm font-medium text-purple-100/90">
                              Science-backed wellness
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => el && (stageRefs.current[1] = el)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-[26px] border border-white/14 bg-[rgba(12,12,28,0.94)] p-10 opacity-0"
              >
                <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/12 bg-black/50 shadow-[0_45px_160px_-100px_rgba(34,211,238,0.75)]">
                  <AIProcessingVisual />
                  <div className="absolute inset-4 rounded-full border border-white/10" aria-hidden />
                </div>
                <div className="space-y-3 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-white/60">
                    <span>Step 02</span>
                    <span className="text-white/40">Processing</span>
                  </div>
                  <h4 className="text-3xl font-black text-white md:text-4xl">AI Narrative Engine</h4>
                  <p className="mx-auto max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                    Particle choreography visualises rhythm, shot cadence and tonal balance as the system reasons through your brief.
                  </p>
                </div>
              </div>

              <div
                ref={(el) => el && (stageRefs.current[2] = el)}
                className="absolute inset-0 flex flex-col justify-center gap-8 rounded-[26px] border border-white/14 bg-[rgba(18,18,34,0.94)] p-8 opacity-0"
              >
                <div className="grid w-full gap-5 text-center text-white md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:text-left">
                  <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white/12 px-6 py-2 text-sm font-semibold uppercase tracking-[0.55em] text-white/75 md:justify-start">
                    <span>Step 03</span>
                    <span className="text-white/50">Style</span>
                  </div>
                  <h4 className="text-[30px] font-black tracking-tight text-white md:text-[36px]">Curate Signature Look</h4>
                </div>

                <div className="w-full max-w-[1400px] overflow-hidden rounded-[30px] translate-x-[6px] border border-white/12 bg-white/8 shadow-[0_55px_180px_-120px_rgba(34,211,238,0.55)]">
                  <div className="flex h-[380px] gap-[2px] px-[10px] md:h-[420px] md:gap-[2px] md:px-[14px]">
                    {visualStyles.map((style, index) => (
                      <div
                        key={style.name}
                        className="relative flex-1 min-w-[150px] border-r border-white/12 last:border-r-0"
                        ref={(el) => {
                          if (el) {
                            styleCardRefs.current[index] = el
                          }
                        }}
                      >
                        <img
                          src={style.src}
                          alt={`${style.name} visual style`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/65 via-black/20 to-transparent px-10 pt-[220px]">
                          <span className="text-center text-[15px] font-black uppercase tracking-[0.2em] text-white drop-shadow-[0_28px_60px_rgba(0,0,0,0.65)]">
                            {style.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                ref={(el) => el && (stageRefs.current[3] = el)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-[26px] border border-white/14 bg-[rgba(10,10,22,0.97)] p-8 opacity-0 md:flex-row md:items-center md:gap-12"
              >
                <div className="flex w-full flex-1 items-center justify-end">
                  <div className="grid h-full max-h-[332px] w-full max-w-[980px] grid-cols-3 gap-6 self-center md:max-h-[340px] md:translate-y-[-55px] md:translate-x-[18px]">
                    {storyboardFrames.map((src, index) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/12 bg-black/40 shadow-[0_25px_90px_-60px_rgba(99,102,241,0.5)]"
                        ref={(el) => {
                          if (el) {
                            storyboardFrameRefs.current[index] = el
                          }
                        }}
                      >
                        <img src={src} alt={`Storyboard frame ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#11142d] shadow-[0_18px_42px_-26px_rgba(12,12,32,0.8)]">
                          <span>Scene</span>
                          <span>{index + 1}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full max-w-[440px] space-y-4 text-center text-base text-white/75 md:max-w-[460px] md:text-left">
                  <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white/12 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white/75 md:justify-start">
                    <span>Step 04</span>
                    <span className="text-white/50">Storyboard</span>
                  </div>
                  <h4 className="text-[30px] font-black text-white md:text-[34px]">Storyboard Assembly</h4>
                  <p className="font-mono text-sm uppercase tracking-[0.26em] text-white/60 md:text-base">
                    Frames converge into a cinematic sequence while timing notes and transitions stay locked to your brief.
                  </p>
                </div>
              </div>

              <div
                ref={(el) => el && (stageRefs.current[4] = el)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-[26px] border border-white/14 bg-gradient-to-br from-[rgba(18,18,32,0.97)] via-[rgba(34,19,6,0.85)] to-[rgba(18,18,26,0.94)] p-8 opacity-0 md:flex-row md:items-center md:gap-10"
              >
                <div className="w-full max-w-[480px] space-y-4 text-center text-base text-white/80 md:text-left md:text-xl">
                  <div className="inline-flex items-center gap-3 justify-center rounded-full bg-white/12 px-6 py-2 text-sm font-semibold uppercase tracking-[0.55em] text-white/80 md:justify-start">
                    <span>Step 05</span>
                    <span className="text-white/50">Studios</span>
                  </div>
                  <h4 className="text-[34px] font-black text-white md:text-[38px]">Studios Handoff</h4>
                  <p className="font-mono text-sm uppercase tracking-[0.3em] text-white/65 md:text-base">
                    PDF boards land in the client inbox and Cre8tive AI Studios with shot notes, aspect ratios, and delivery specs ready to shoot.
                  </p>
                </div>
                <div className="w-full max-w-[780px] translate-x-[12px] overflow-hidden rounded-3xl border border-white/12 shadow-[0_55px_190px_-110px_rgba(234,88,12,0.6)]">
                  <img
                    ref={pdfMockupRef}
                    src="/briefing-engine/storyboard/SB-Mockup.webp"
                    alt="Storyboard PDF handoff"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[1480px] flex-col gap-4 text-white">
          <div className="flex w-full max-w-[420px] items-center gap-4 self-start">
            <span
              ref={badgeRef}
              className="inline-flex h-10 min-w-[108px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 text-xs font-semibold uppercase tracking-[0.4em] text-white/85"
            >
              1/5
            </span>
            <div className="relative h-1.5 flex-1 rounded-full bg-white/12">
              <div
                ref={progressRef}
                className="absolute inset-y-0 left-0 w-[20%] rounded-full bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#22D3EE]"
              />
            </div>
          </div>

          <div className="w-full max-w-[900px] space-y-3 text-center mx-auto -mt-[70px]">
            <div ref={accentRef} className="mx-auto mb-2 h-2 w-32 rounded-full bg-[rgba(79,70,229,0.95)] shadow-[0_0_30px_rgba(79,70,229,0.55)]" />
            <h3 ref={titleRef} className="text-[34px] font-black tracking-tight text-white md:text-[44px]">
              Craft the Brief
            </h3>
            <p ref={descriptionRef} className="mx-auto max-w-[900px] text-xl leading-relaxed text-white/70 md:text-2xl">
              Capture campaign goal, audience, tone and must-have shots in a guided cinematic form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
