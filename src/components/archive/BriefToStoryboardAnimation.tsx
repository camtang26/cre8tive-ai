import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenisReady } from "@/hooks/useLenisReady";
import { briefingPalette } from "./palette";
import { AIProcessingVisual } from "@/components/briefing/AIProcessingVisual";
import { ParticleCore } from "@/components/briefing/ParticleCore";
import { SynopsisPanel, getSynopsisWordRefs } from "@/components/briefing/SynopsisPanel";
import { SceneCards, getSceneCardRefs } from "@/components/briefing/SceneCards";
import { detectDeviceCapabilities, detectDeviceCapabilitiesSync } from "@/utils/performance-adapter";
import { getAdaptiveConfig } from "@/utils/adaptive-config";
import type { AdaptiveAnimationConfig } from "@/utils/adaptive-config";

const visualStyles = [
  { name: "Minimalist", src: "/briefing-engine/visual-styles/Minimalist.webp", width: 4096, height: 2272 },
  { name: "Bold & Vibrant", src: "/briefing-engine/visual-styles/BoldVibrant.webp", width: 4096, height: 2272 },
  { name: "Cinematic", src: "/briefing-engine/visual-styles/CinematicDramatic.webp", width: 4096, height: 2272 },
  { name: "Playful & Animated", src: "/briefing-engine/visual-styles/Playfulanimated.webp", width: 4096, height: 2288 },
  { name: "Futuristic", src: "/briefing-engine/visual-styles/Futuristic.webp", width: 5504, height: 3072 },
  { name: "Retro & Vintage", src: "/briefing-engine/visual-styles/RetroVintage.webp", width: 4403, height: 2457 },
  { name: "Documentary", src: "/briefing-engine/visual-styles/DocumentaryRealistic.webp", width: 4623, height: 2580 },
  { name: "Artistic Abstract", src: "/briefing-engine/visual-styles/ArtisticAbstract.webp", width: 4096, height: 2272 },
  { name: "2D Vector", src: "/briefing-engine/visual-styles/2dVector.webp", width: 4096, height: 2288 }
];

const storyboardFrames = [
  { src: "/briefing-engine/storyboard/Frame1.webp", width: 1920, height: 1080 },
  { src: "/briefing-engine/storyboard/Frame2.webp", width: 4096, height: 2336 },
  { src: "/briefing-engine/storyboard/Frame3.webp", width: 1920, height: 1080 },
  { src: "/briefing-engine/storyboard/Frame4.webp", width: 1920, height: 1080 },
  { src: "/briefing-engine/storyboard/Frame5.webp", width: 4096, height: 2336 },
  { src: "/briefing-engine/storyboard/Frame6.webp", width: 4096, height: 2336 }
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
    value: "Luxury Harbors · Coastal Elevation",
    platform: null
  },
  {
    label: "YouTube",
    value: "16:9 · 60sec",
    platform: "youtube"
  },
  {
    label: "TikTok",
    value: "9:16 · 30sec",
    platform: "tiktok"
  }
];

const heroFieldTiles = [
  {
    label: "Brand Name",
    value: "Luxury Harbors",
    hint: "Integrated into every video concept."
  },
  {
    label: "Target Audience",
    value: "Discerning coastal lifestyle seekers · 35–65",
    hint: "AI tailors messaging to your ideal viewer."
  },
  {
    label: "Unique Selling Points",
    value: "Curated yacht experiences · Exclusive marina access · White-glove concierge",
    hint: "Core benefits highlighted in every frame."
  },
  {
    label: "Brand Personality",
    value: "Timeless elegance · Coastal sophistication · Curated exclusivity",
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

  // Frame 2: Neural Synthesis refs
  const particleCoreRef = useRef<HTMLDivElement | null>(null);
  const synopsisPanelRef = useRef<HTMLDivElement | null>(null);
  const sceneCardsRef = useRef<HTMLDivElement | null>(null);
  const [isCoreActive, setIsCoreActive] = useState(false);
  const [coreIntensity, setCoreIntensity] = useState(0.5);

  // PERFORMANCE FIX: Cache DOM query results to avoid querySelectorAll during timeline creation
  // Prevents expensive DOM traversal (6 querySelectorAll calls) during scroll setup
  const synopsisRefsCache = useRef<ReturnType<typeof getSynopsisWordRefs> | null>(null);
  const sceneRefsCache = useRef<ReturnType<typeof getSceneCardRefs> | null>(null);

  // STORY 1.14: Adaptive Performance - Device-based quality tier detection
  // Use sync detection for initial value (async detection updates below)
  const [adaptiveConfig, setAdaptiveConfig] = useState<AdaptiveAnimationConfig>(() => {
    const capabilities = detectDeviceCapabilitiesSync();
    return getAdaptiveConfig(capabilities);
  });

  const lenisReady = useLenisReady(200, 2000);

  // STORY 1.14: Run async device detection on mount for accurate GPU detection
  useEffect(() => {
    detectDeviceCapabilities().then((capabilities) => {
      const newConfig = getAdaptiveConfig(capabilities);
      setAdaptiveConfig(newConfig);

      // Log adaptive tier (dev mode only)
      if (import.meta.env.DEV) {
        console.log('[BriefToStoryboardAnimation] Adaptive config loaded:', {
          tier: newConfig.tier,
          timeScale: newConfig.timeScaleMultiplier,
          ease: newConfig.ease
        });
      }
    });
  }, []);

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
    // PERFORMANCE FIX: Pre-calculate DOM queries ONCE before timeline creation
    // ========================================
    // Cache synopsis word refs (prevents querySelectorAll during timeline build)
    if (synopsisPanelRef.current && !synopsisRefsCache.current) {
      synopsisRefsCache.current = getSynopsisWordRefs(synopsisPanelRef.current);
    }

    // Cache scene card refs (prevents querySelectorAll during timeline build)
    if (sceneCardsRef.current && !sceneRefsCache.current) {
      sceneRefsCache.current = getSceneCardRefs(sceneCardsRef.current);
    }

    // ========================================
    // INITIAL STATES - Set all elements to hidden before scroll timeline
    // ========================================

    // Container entrance state
    gsap.set(containerRef.current, {
      opacity: 0,
      filter: "blur(20px)",
      transformOrigin: "50% 50%"
    });

    // Hero intro states (only if refs populated)
    if (heroShellRef.current) {
      gsap.set(heroShellRef.current, { autoAlpha: 0, y: 40, scale: 0.94 });
    }
    if (heroGridRef.current) {
      gsap.set(heroGridRef.current, { autoAlpha: 0, rotation: 4, scale: 1.06 });
    }
    if (heroArcRef.current) {
      gsap.set(heroArcRef.current, { autoAlpha: 0, scale: 0.72, rotate: -28 });
    }
    if (heroLabelRef.current) {
      gsap.set(heroLabelRef.current, { autoAlpha: 0, y: 22 });
    }
    if (heroHeadlineRef.current) {
      gsap.set(heroHeadlineRef.current, { autoAlpha: 0, y: 36 });
    }
    if (heroSubheadlineRef.current) {
      gsap.set(heroSubheadlineRef.current, { autoAlpha: 0, y: 28 });
    }
    heroDetailRefs.current.forEach((el) => gsap.set(el, { autoAlpha: 0, y: 20 }));
    if (heroFieldCardRef.current) {
      gsap.set(heroFieldCardRef.current, { autoAlpha: 0, y: 50, scale: 0.95 });
    }
    heroFieldRefs.current.forEach((el) => gsap.set(el, { autoAlpha: 0, y: 26 }));
    if (heroPrimaryCtaRef.current) {
      gsap.set(heroPrimaryCtaRef.current, { autoAlpha: 0, y: 20, scale: 0.92 });
    }
    if (heroSecondaryCtaRef.current) {
      gsap.set(heroSecondaryCtaRef.current, { autoAlpha: 0, y: 20, scale: 0.92 });
    }

    // Progress bar initial state - scaleX animation (CRITICAL: Prevents CLS)
    if (progressRef.current) {
      gsap.set(progressRef.current, {
        scaleX: 0.2,  // 20% initial progress (matches Stage 1)
        transformOrigin: "left center",
        force3D: true
      });
    }

    // ========================================
    // INFINITE ANIMATIONS (Background elements - separate from scroll timeline)
    // ========================================

    // Rotating energy arc (infinite, independent of scroll)
    if (heroArcRef.current) {
      gsap.to(heroArcRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "none"
      });
    }

    // Pulsing grid background (infinite, independent of scroll)
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

    // ========================================
    // UNIFIED SCROLL TIMELINE - All animations controlled by scroll (scrub: 1)
    // ========================================

    const scrollTimeline = gsap.timeline({
      defaults: { ease: "none" }, // CRITICAL: ease "none" required for scrub compatibility
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=15 top",
        end: "+=17000", // Total: 4.1s intro + 13s stages (Frame 2 = 3.8s) = 17s × 1000px/s
        scrub: 1, // 1-second smooth lag (GSAP best practice)
        pin: true,
        pinType: "transform",
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true
      }
    });

    // STORY 1.14: Apply adaptive timeScale to entire timeline
    // Preserves choreography while adjusting overall speed based on device tier
    // high: 1.0 (normal), medium: 1.2 (20% faster), low: 1.5 (50% faster)
    // Reason: Faster animations reduce total frame count during scroll, improving perceived performance
    scrollTimeline.timeScale(adaptiveConfig.timeScaleMultiplier);

    // ========================================
    // ENTRANCE + INTRO SEQUENCE (0.0s - 4.1s) - Now scroll-controlled!
    // ========================================

    // Container entrance: blur → sharp + fade in (0.0s - 1.2s)
    scrollTimeline.to(containerRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out"
    }, 0); // Absolute position: start at 0s

    // Hero shell reveal (starts at 0.0s, duration 0.8s)
    if (heroShellRef.current) {
      scrollTimeline.to(heroShellRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y, scale)
        duration: 0.8,
        ease: "power3.out"
      }, 0); // Starts immediately with container entrance
    }

    // Grid reveal (overlapped with shell)
    if (heroGridRef.current) {
      scrollTimeline.to(heroGridRef.current, {
        autoAlpha: 1,
        rotation: 0,
        scale: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (rotation, scale)
        duration: 1.1,
        ease: "power3.out"
      }, 0); // Same start time as shell
    }

    // Arc reveal (slight delay after shell for layered effect)
    if (heroArcRef.current) {
      scrollTimeline.to(heroArcRef.current, {
        autoAlpha: 1,
        scale: 1,
        rotate: 0,
        force3D: true, // PHASE 2: GPU acceleration for transform (scale, rotate)
        duration: 0.9,
        ease: "power3.out"
      }, 0.1); // Start 0.1s after shell
    }

    // Text cascade begins at 0.5s
    if (heroLabelRef.current) {
      scrollTimeline.to(heroLabelRef.current, {
        y: 0,
        autoAlpha: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y)
        duration: 0.55,
        ease: "power3.out"
      }, 0.5);
    }

    if (heroHeadlineRef.current) {
      scrollTimeline.to(heroHeadlineRef.current, {
        y: 0,
        autoAlpha: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y)
        duration: 0.8,
        ease: "power3.out"
      }, 0.6); // Slight overlap with label
    }

    if (heroSubheadlineRef.current) {
      scrollTimeline.to(heroSubheadlineRef.current, {
        y: 0,
        autoAlpha: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y)
        duration: 0.6,
        ease: "power3.out"
      }, 0.75);
    }

    // Detail pills stagger
    if (heroDetailRefs.current.length) {
      scrollTimeline.to(heroDetailRefs.current, {
        y: 0,
        autoAlpha: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y)
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out"
      }, 0.9);
    }

    // Field card reveal at 1.8s
    if (heroFieldCardRef.current) {
      scrollTimeline.to(heroFieldCardRef.current, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y, scale)
        duration: 0.8,
        ease: "power3.out"
      }, 1.8);
    }

    // Field items stagger
    if (heroFieldRefs.current.length) {
      scrollTimeline.to(heroFieldRefs.current, {
        y: 0,
        autoAlpha: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y)
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out"
      }, 2.0);
    }

    // CTAs reveal at 2.8s
    if (heroPrimaryCtaRef.current) {
      scrollTimeline.to(heroPrimaryCtaRef.current, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y, scale)
        duration: 0.45,
        ease: "power3.out"
      }, 2.8);
    }

    if (heroSecondaryCtaRef.current) {
      scrollTimeline.to(heroSecondaryCtaRef.current, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        force3D: true, // PHASE 2: GPU acceleration for transform (y, scale)
        duration: 0.45,
        ease: "power3.out"
      }, 2.85); // Slight overlap
    }

    // Mark intro completion at 3.6s (reduced from 4.1s to shorten Frame 1 scroll time)
    scrollTimeline.addLabel("intro-complete", 3.6);

    // ========================================
    // STAGE TRANSITIONS (4.1s onwards) - Starts after intro completes
    // ========================================

      sections.forEach((stage, index) => {
        const label = `stage-${index}`;
        const accent = stageData[index].accent;
        const progress = ((index + 1) / stageData.length) * 100;

        // Stage 0 already visible from intro - skip to stage 1 transitions
        if (index === 0) {
          scrollTimeline.addLabel(label, "intro-complete");
          scrollTimeline.call(updateDetail, [index], label);
          return; // Don't animate stage 0 (already visible)
        }

        // Add spacing between stages (crossfade overlap for smooth transitions)
        scrollTimeline.addLabel(label, "+=0.15");
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
        // CRITICAL CLS FIX: Use scaleX instead of width to avoid layout shifts
        if (progressRef.current) {
          scrollTimeline.to(
            progressRef.current,
            {
              scaleX: progress / 100,  // Convert 20% -> 0.2, 100% -> 1.0
              background: `linear-gradient(90deg, ${accent}, ${accent}80)`,
              transformOrigin: "left center",  // Scale from left edge
              force3D: true,  // GPU acceleration
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

        // === FRAME 2 → 3 TRANSITION: Core Explosion ===
        if (index === 2) {
          const frame3Label = label;

          // Synopsis/cards compress and blur (0.4s)
          scrollTimeline.to(
            [synopsisPanelRef.current, sceneCardsRef.current, particleCoreRef.current],
            {
              scale: 0.8,
              autoAlpha: 0.2,
              filter: "blur(12px)",
              duration: 0.4,
              ease: "power2.in"
            },
            `${frame3Label}-=0.5` // Start 0.5s before Frame 3
          );

          // Core explosion burst
          scrollTimeline.call(() => setCoreIntensity(2), [], `${frame3Label}-=0.3`);

          // Deactivate particles
          scrollTimeline.call(() => setIsCoreActive(false), [], `${frame3Label}-=0.1`);

          // Frame 3 style cards will materialize from this explosion
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

        // ========================================
        // FRAME 2: NEURAL SYNTHESIS CHAMBER (3.8s total)
        // ========================================
        if (index === 1) {
          const frame2Label = label;

          // --- TRANSITION IN (0.8s) ---

          // Activate core with dramatic intensity arc
          scrollTimeline
            .call(() => setIsCoreActive(true), [], frame2Label)
            .call(() => setCoreIntensity(0.3), [], frame2Label) // Gentle start
            .call(() => setCoreIntensity(0.7), [], `${frame2Label}+=0.2`) // Build
            .call(() => setCoreIntensity(1.2), [], `${frame2Label}+=0.4`) // BURST
            .call(() => setCoreIntensity(0.9), [], `${frame2Label}+=0.5`) // Settle
            .call(() => setCoreIntensity(0.6), [], `${frame2Label}+=2.5`); // Idle

          // --- SYNOPSIS STREAMING (1.8s) - compressed timing ---
          // PERFORMANCE FIX: Use pre-calculated cache instead of querySelectorAll
          if (synopsisRefsCache.current) {
            const { titleWords, synopsisWords } = synopsisRefsCache.current;

            // Title: Fast reveal
            if (titleWords.length) {
              scrollTimeline.to(
                titleWords,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.3,
                  stagger: 0.08, // Faster stagger
                  ease: "power3.out"
                },
                `${frame2Label}+=0.6`
              );
            }

            // Synopsis: Rapid streaming
            if (synopsisWords.length) {
              scrollTimeline.to(
                synopsisWords,
                {
                  autoAlpha: 1,
                  scale: 1,
                  duration: 0.25,
                  stagger: 0.06, // Very fast flow
                  ease: "power2.out"
                },
                `${frame2Label}+=1.0`
              );
            }
          }

          // --- SCENE CARDS HOLOGRAPHIC BUILD (1.5s) - parallel + compressed ---
          // PERFORMANCE FIX: Use pre-calculated cache instead of querySelectorAll
          if (sceneRefsCache.current) {
            const { cards, wireframes, containers, thumbnails } = sceneRefsCache.current;

            cards.forEach((card, cardIndex) => {
              const cardLabel = `${frame2Label}+=` + (1.4 + (cardIndex * 0.15)); // Tight stagger

              // Wireframe
              scrollTimeline.to(
                wireframes[cardIndex],
                { autoAlpha: 1, duration: 0.15, ease: "power2.out" },
                cardLabel
              );

              // Container
              scrollTimeline.to(
                containers[cardIndex],
                { autoAlpha: 1, duration: 0.2, ease: "power2.out" },
                `${cardLabel}+=0.1`
              );

              // Card slide
              scrollTimeline.to(
                card,
                {
                  autoAlpha: 1,
                  x: 0,
                  duration: 0.3,
                  ease: "back.out(1.3)" // Subtle bounce
                },
                `${cardLabel}+=0.15`
              );

              // Thumbnail
              scrollTimeline.to(
                thumbnails[cardIndex],
                { autoAlpha: 1, scale: 1, duration: 0.2, ease: "power2.out" },
                `${cardLabel}+=0.25`
              );
            });
          }

          // --- DWELL TIME (0.7s) - reduced for pacing ---
          scrollTimeline.to({}, { duration: 0.7 }, "+=0");

          // Total: 0.8s transition + 1.8s synopsis + 1.5s cards (overlapped) + 0.7s dwell = ~3.8s
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

      // PHASE 2: Conditional refresh - only if needed (avoids unnecessary layout thrashing)
      // Research: ScrollTrigger.refresh() forces layout recalc even when positions are stable
      // The early return above (line 303) already handles unstable layout with requestAnimationFrame
      // This final call is redundant 99% of the time - only needed after manual DOM changes
      // Removed unconditional refresh - use ScrollTrigger.sort() instead (lightweight position sort)
      ScrollTrigger.sort();
  }, {
    scope: containerRef,
    dependencies: [lenisReady, adaptiveConfig.timeScaleMultiplier] // CRITICAL: Re-run when lenis or adaptive config changes
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
                              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-indigo-300/80">{heroFieldTiles[0].label}</span>
                              <span className="rounded-full bg-indigo-400/20 px-2 py-0.5 text-[8px] font-semibold text-indigo-200/60">Required</span>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                              {heroFieldTiles[0].value}
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
                              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/70 mb-2">{heroFieldTiles[1].label}</div>
                              <p className="text-lg font-semibold text-white/95 leading-tight">{heroFieldTiles[1].value}</p>
                            </div>
                          </div>
                        </div>

                        {/* USPs - Tag Layout */}
                        <div
                          ref={(el) => el && heroFieldRefs.current.push(el)}
                          className="relative rounded-2xl border border-white/15 bg-[rgba(18,20,40,0.85)] p-6"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-fuchsia-300/70 mb-3">{heroFieldTiles[2].label}</div>
                          <div className="flex flex-wrap gap-2.5">
                            {heroFieldTiles[2].value.split(' · ').map((usp, idx) => (
                              <span key={idx} className={`inline-flex items-center px-4 py-2.5 rounded-lg border text-sm font-semibold text-white/90 ${
                                idx === 0 ? 'bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border-fuchsia-400/30' :
                                idx === 1 ? 'bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border-purple-400/30' :
                                'bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 border-pink-400/30'
                              }`}>
                                {usp}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Brand Personality - Trait Pills */}
                        <div
                          ref={(el) => el && heroFieldRefs.current.push(el)}
                          className="relative rounded-2xl border border-white/15 bg-[rgba(18,20,40,0.85)] p-6"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-300/70 mb-3">{heroFieldTiles[3].label}</div>
                          <div className="flex flex-wrap gap-2.5">
                            {heroFieldTiles[3].value.split(' · ').map((trait, idx) => (
                              <span key={idx} className={`inline-flex items-center px-4 py-2.5 rounded-lg border text-sm font-medium ${
                                idx === 0 ? 'bg-indigo-500/15 border-indigo-400/30 text-indigo-100/90' :
                                idx === 1 ? 'bg-cyan-500/15 border-cyan-400/30 text-cyan-100/90' :
                                'bg-purple-500/15 border-purple-400/30 text-purple-100/90'
                              }`}>
                                {trait}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => el && (stageRefs.current[1] = el)}
                className="absolute inset-0 rounded-[26px] border border-white/14 bg-[rgba(12,12,28,0.94)] opacity-0"
              >
                {/* Neural Synthesis Chamber - Luxury Harbors Theme */}
                <div className="relative h-full w-full flex flex-col gap-4 p-6">

                  {/* Top: Particle Core + Synopsis (70% height) */}
                  <div className="flex-[7] flex gap-4">
                    {/* Particle Core (35% width) */}
                    <div
                      ref={particleCoreRef}
                      className="w-[35%] rounded-3xl border border-white/10 overflow-hidden"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)`
                      }}
                    >
                      <ParticleCore
                        isActive={isCoreActive}
                        intensity={coreIntensity}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Synopsis Panel (65% width) */}
                    <SynopsisPanel
                      ref={synopsisPanelRef}
                      className="flex-1"
                    />
                  </div>

                  {/* Bottom: Scene Cards (30% height) */}
                  <div className="flex-[3]">
                    <SceneCards
                      ref={sceneCardsRef}
                      className="h-full"
                    />
                  </div>
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
                          width={style.width}
                          height={style.height}
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
                    {storyboardFrames.map((frame, index) => (
                      <div
                        key={frame.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/12 bg-black/40 shadow-[0_25px_90px_-60px_rgba(99,102,241,0.5)]"
                        ref={(el) => {
                          if (el) {
                            storyboardFrameRefs.current[index] = el
                          }
                        }}
                      >
                        <img
                          src={frame.src}
                          alt={`Storyboard frame ${index + 1}`}
                          width={frame.width}
                          height={frame.height}
                          className="h-full w-full object-cover"
                          loading={index >= 3 ? "lazy" : undefined}
                        />
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
                    width="2048"
                    height="1365"
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
                className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#22D3EE]"
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
