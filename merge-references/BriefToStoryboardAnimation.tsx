import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { briefingPalette } from "./palette";

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
    value: "Alpine Water · Summer Elevation"
  },
  {
    label: "Formats",
    value: "30s Hero · 15s Echo"
  }
];

const heroFieldTiles = [
  {
    label: "Brand Name",
    value: "Alpine Water Co.",
    hint: "Feeds lower-thirds, supers, and CTA copy."
  },
  {
    label: "Campaign Goal",
    value: "Launch “Peak Serenity” hydration ritual",
    hint: "Guides narrative arc + hero imagery."
  },
  {
    label: "Primary Audience",
    value: "Urban wellness seekers · 24–38",
    hint: "Sets tone, casting, and pacing."
  },
  {
    label: "Launch Window",
    value: "June 15 – Aug 30 · Paid + Organic",
    hint: "Locks timeline + media mix animations."
  }
];

const initParticleSwirl = (canvas: HTMLCanvasElement | null) => {
  if (!canvas) return () => undefined;
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => undefined;

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.resetTransform();
    ctx.scale(dpr, dpr);
  };

  resize();

  const particles = Array.from({ length: 80 }, (_, index) => ({
    angle: (Math.PI * 2 * index) / 80,
    radius: 40 + Math.random() * 80,
    speed: 0.004 + Math.random() * 0.003,
    size: 2 + Math.random() * 1.5
  }));

  let frame = 0;
  const render = () => {
    frame = requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    particles.forEach((particle) => {
      particle.angle += particle.speed;
      const swirl = Math.sin(particle.angle * 3) * 6;
      const x = centerX + Math.cos(particle.angle) * (particle.radius + swirl);
      const y = centerY + Math.sin(particle.angle) * (particle.radius + swirl);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 18);
      gradient.addColorStop(0, "rgba(129, 140, 248, 0.85)");
      gradient.addColorStop(0.5, "rgba(34, 211, 238, 0.45)");
      gradient.addColorStop(1, "rgba(15, 15, 30, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  render();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
  };
};

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const styleCardRefs = useRef<HTMLDivElement[]>([]);
  const storyboardFrameRefs = useRef<HTMLDivElement[]>([]);
  const pdfMockupRef = useRef<HTMLImageElement | null>(null);

  const lenis = useLenis(() => ScrollTrigger.update());

  // Initialize particle swirl canvas (separate effect - not GSAP)
  useEffect(() => initParticleSwirl(canvasRef.current), []);

  // Lenis + GSAP ticker integration (CRITICAL for smooth scroll sync)
  useEffect(() => {
    if (!lenis) return;

    // Wire Lenis RAF into GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing (required for smooth scrollers)
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.lagSmoothing(800, 33); // Restore defaults on cleanup
    };
  }, [lenis]);

  // All GSAP animations consolidated (auto-cleanup with useGSAP)
  useGSAP(() => {
    if (!heroShellRef.current) return;

    // ========================================
    // INTRO TIMELINE (Stage 1 - Hero Form)
    // ========================================

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

    // Create intro timeline (plays immediately on mount, not scroll-triggered)
    // This ensures all heroShellRef content is visible BEFORE scroll timeline can hide it
    const introTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.3  // Small delay to ensure DOM is ready
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

    // ========================================
    // SCROLL TIMELINE (All 5 Stages)
    // ========================================

    const sections = stageRefs.current.filter(Boolean);
    if (!sections.length) return;

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

    // Main scroll timeline (CRITICAL: ease "none" for scrub compatibility)
    const scrollTimeline = gsap.timeline({
      defaults: { ease: "none" }, // CHANGED from "power3.out" - required for scrub
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top-=-20 top",
        end: "+=4800",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true
      }
    });

      sections.forEach((stage, index) => {
        const label = `stage-${index}`;
        const accent = stageData[index].accent;
        const progress = ((index + 1) / stageData.length) * 100;

        // Add spacing between stages - each stage gets equal timeline duration
        // Using "+=1" adds 1 second of timeline duration between each stage label
        scrollTimeline.addLabel(label, index === 0 ? 0 : "+=1");
        scrollTimeline.call(updateDetail, [index], label);

        scrollTimeline.to(
          stage,
          {
            autoAlpha: 1,
            scale: 1.05,
            yPercent: 0,
            filter: "saturate(1)",
            boxShadow: `0 70px 220px -120px ${accent}90`,
            zIndex: index + 2  // Higher z-index for later stages (stage 0 is z:1, this starts at z:2)
          },
          label
        );

        // Hide previous stage (but NEVER hide stage 0 - it's the base layer with intro animations)
        if (index > 0 && index - 1 > 0) {
          scrollTimeline.to(
            sections[index - 1],
            {
              autoAlpha: 0,
              scale: 0.88,
              yPercent: -18,
              filter: "saturate(0.35)",
              zIndex: 0  // Move to back
            },
            label
          );
        }

        if (progressRef.current) {
          scrollTimeline.to(
            progressRef.current,
            {
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${accent}, ${accent}80)`
            },
            label
          );
        }

        if (accentRef.current) {
          scrollTimeline.to(
            accentRef.current,
            {
              background: accent,
              boxShadow: `0 0 24px ${accent}66`
            },
            label
          );
        }

        if (index === 2 && styleCardRefs.current.length) {
          scrollTimeline.fromTo(
            styleCardRefs.current,
            { autoAlpha: 0, yPercent: 10, scale: 0.95 },
            { autoAlpha: 1, yPercent: 0, scale: 1, stagger: 0.08 },
            `${label}+=0.15`
          );
        }

        if (index === 3 && storyboardFrameRefs.current.length) {
          scrollTimeline.fromTo(
            storyboardFrameRefs.current,
            { autoAlpha: 0, yPercent: 6, scale: 0.96 },
            { autoAlpha: 1, yPercent: 0, scale: 1, stagger: 0.05 },
            `${label}+=0.1`
          );
        }

        if (index === 4 && pdfMockupRef.current) {
          scrollTimeline.fromTo(
            pdfMockupRef.current,
            { autoAlpha: 0, yPercent: 10, scale: 0.92 },
            { autoAlpha: 1, yPercent: 0, scale: 1 },
            `${label}+=0.08`
          );
        }
      });

      ScrollTrigger.refresh();
  }, { scope: containerRef, dependencies: [lenis] }); // useGSAP scope for auto-cleanup

  // Note: Refs are auto-populated by JSX callbacks below - no manual clearing needed

  return (
    <section
      id="brief-to-storyboard"
      ref={containerRef}
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pt-28 pb-20 md:px-12"
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
            style={{ background: briefingPalette.neutral.bg }}
          >
            <div className="pointer-events-none absolute -inset-px rounded-[42px] bg-gradient-to-br from-white/16 via-transparent to-transparent" />
            <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/12"
              style={{ background: briefingPalette.neutral.surface }}
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
                  <div className="relative z-10 h-full px-8 py-10 md:px-12 lg:px-16 lg:py-12">
                    <div className="grid h-full items-stretch gap-10 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="flex flex-col justify-between gap-8">
                        <div className="space-y-6">
                          <div
                            ref={heroLabelRef}
                            className="inline-flex w-max items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/70"
                          >
                            <span>Step 01</span>
                            <span className="text-white/45">Briefing Intake</span>
                          </div>
                          <div className="space-y-3">
                            <h4
                              ref={heroHeadlineRef}
                              className="text-[34px] font-black tracking-tight text-white md:text-[44px] lg:text-[46px]"
                            >
                              Feed four essentials and ignite the storyboard engine
                            </h4>
                            <p
                              ref={heroSubheadlineRef}
                              className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
                            >
                              These entries power tone mapping, pacing, and shot selection so the platform can transform the brief as you scroll further in.
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-3">
                            {heroDetailPills.map((detail) => (
                              <div
                                key={detail.label}
                                ref={(el) => el && heroDetailRefs.current.push(el)}
                                className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60"
                              >
                                <span>{detail.label}</span>
                                <span className="text-xs font-semibold tracking-[0.28em] text-white/85">
                                  {detail.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                          <a
                            ref={heroPrimaryCtaRef}
                            href="/contact"
                            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#22D3EE] px-7 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white shadow-[0_32px_120px_-60px_rgba(99,102,241,0.9)] transition-transform duration-300 group-hover:-translate-y-0.5"
                          >
                            Launch Storyboard Draft
                            <span className="text-white/70">→</span>
                          </a>
                          <a
                            ref={heroSecondaryCtaRef}
                            href="/briefing-engine"
                            className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white/75 transition-colors duration-300 hover:border-white/40 hover:text-white"
                          >
                            View Platform Walkthrough
                          </a>
                        </div>
                      </div>

                      <div
                        ref={heroFieldCardRef}
                        className="relative flex flex-col gap-4 rounded-[28px] border border-white/12 bg-[rgba(13,15,32,0.92)] p-6 shadow-[0_80px_200px_-120px_rgba(99,102,241,0.7)]"
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10 opacity-45" aria-hidden />
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-40" aria-hidden />
                        <div className="relative space-y-4">
                          {heroFieldTiles.map((field) => (
                            <div
                              key={field.label}
                              ref={(el) => el && heroFieldRefs.current.push(el)}
                              className="rounded-2xl border border-white/12 bg-[rgba(18,20,40,0.9)] p-5"
                            >
                              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
                                <span>{field.label}</span>
                                <span className="rounded-full bg-white/10 px-3 py-0.5 text-[10px] text-white/40">Required</span>
                              </div>
                              <p className="mt-3 text-lg font-semibold text-white/90 md:text-xl">
                                {field.value}
                              </p>
                              <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-white/40">
                                {field.hint}
                              </p>
                            </div>
                          ))}
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
                  <canvas ref={canvasRef} className="h-44 w-44" />
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

                <div className="w-full max-w-[1400px] overflow-hidden rounded-[30px] border border-white/12 bg-white/8 shadow-[0_55px_180px_-120px_rgba(34,211,238,0.55)]">
                  <div className="flex h-[380px] gap-[14px] px-[10px] md:h-[420px] md:gap-[18px] md:px-[14px]">
                    {visualStyles.map((style, index) => (
                      <div
                        key={style.name}
                        className="relative flex-1 min-w-[165px] border-r border-white/12 last:border-r-0"
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
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/65 via-black/20 to-transparent px-6 pt-[220px]">
                          <span className="text-center text-[14px] font-black uppercase tracking-[0.2em] text-white drop-shadow-[0_28px_60px_rgba(0,0,0,0.65)]">
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
                  <div className="grid h-full max-h-[332px] w-full max-w-[980px] grid-cols-3 gap-6 self-center md:max-h-[340px] md:translate-y-[-32px] md:translate-x-[18px]">
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
                <div className="w-full max-w-[680px] overflow-hidden rounded-3xl border border-white/12 shadow-[0_55px_190px_-110px_rgba(234,88,12,0.6)]">
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
