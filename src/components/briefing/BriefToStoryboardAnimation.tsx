import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { briefingPalette } from "@/components/briefing/palette";
import { AIProcessingVisual } from "@/components/briefing/AIProcessingVisual";

gsap.registerPlugin(ScrollTrigger);

/**
 * BriefToStoryboardAnimation - 15-Second GSAP ScrollTrigger Transformation Timeline
 *
 * Scroll-driven animation that visualizes the five-stage briefing → storyboard workflow.
 * User controls playhead by scrolling. Implements scrub animation pattern with pinning.
 *
 * @param duration - Timeline duration in seconds (default: 15s, maps to 3600px scroll)
 *
 * @features
 * - Stage 1 (0-3s): Form fields stagger animation
 * - Stage 2 (3-6s): AI processing particle swirl
 * - Stage 3 (6-9s): Style selection with burst effect
 * - Stage 4 (9-15s): Storyboard assembly (6 panels fly in)
 * - Stage 5 (15-16s): Studios handoff gradient shift
 *
 * @animation
 * - GSAP ScrollTrigger with scrub: true (user controls via scroll)
 * - Pin: Desktop only (disabled < 768px)
 * - GPU-accelerated transforms: translate, scale, opacity, filter
 * - Lenis smooth scroll integration via useLenis hook
 *
 * @accessibility
 * - prefers-reduced-motion: Shows final state immediately, skips animation
 * - ARIA labels for semantic structure
 * - Keyboard-accessible (no interactive elements, scroll-driven only)
 *
 * @performance
 * - ScrollTrigger cleanup via gsap.context() revert
 * - Lazy loading for images
 * - GPU acceleration via transform + will-change hints
 * - Dynamic stage content refs prevent memory leaks
 *
 * @references
 * - Architecture: docs/architecture/animation-patterns.md (Pattern 2: Scrub Animation)
 * - Story: docs/stories/story-1.7.md
 * - Palette: src/components/briefing/palette.ts
 */
export interface BriefToStoryboardAnimationProps {
  duration?: number;
}

// Animation constants
const SCROLL_PIXELS_PER_SECOND = 240 // 240px scroll per second of timeline duration
const DESKTOP_BREAKPOINT = 768 // px - below this, disable pinning
const STAGE_COUNT = 5 // Total transformation stages

// Accessibility helpers
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Asset paths
const storyboardFrames = [
  "/briefing-engine/storyboard/Frame1.webp",
  "/briefing-engine/storyboard/Frame2.webp",
  "/briefing-engine/storyboard/Frame3.webp",
  "/briefing-engine/storyboard/Frame4.webp",
  "/briefing-engine/storyboard/Frame5.webp",
  "/briefing-engine/storyboard/Frame6.webp"
];

const styleSamples = [
  { name: "Minimalist", image: "/briefing-engine/visual-styles/Minimalist.webp" },
  { name: "Cinematic", image: "/briefing-engine/visual-styles/CinematicDramatic.webp" },
  { name: "Futuristic", image: "/briefing-engine/visual-styles/Futuristic.webp" },
  { name: "Playful", image: "/briefing-engine/visual-styles/Playfulanimated.webp" },
  { name: "Retro", image: "/briefing-engine/visual-styles/RetroVintage.webp" },
  { name: "Documentary", image: "/briefing-engine/visual-styles/DocumentaryRealistic.webp" }
];

const stageData = [
  {
    title: "Craft the Brief",
    description: "Capture campaign goal, audience, tone and must-have shots in a guided cinematic form.",
    accent: briefingPalette.indigo.DEFAULT
  },
  {
    title: "AI Narrative Engine",
    description: "Neural choreography maps story pacing, tone and cinematography cues in real-time.",
    accent: briefingPalette.holographic.cyan
  },
  {
    title: "Style Selection",
    description: "Nine signature looks lock in aesthetic direction before any panel assembles.",
    accent: briefingPalette.fuchsia.DEFAULT
  },
  {
    title: "Storyboard Assembly",
    description: "Panels draw on with scene markers, aspect ratios and director notes ready for review.",
    accent: briefingPalette.cyan.DEFAULT
  },
  {
    title: "Studios Handoff",
    description: "A production-ready PDF transitions into Cre8tive AI Studios for photo-real delivery.",
    accent: briefingPalette.orange.DEFAULT
  }
];

export const BriefToStoryboardAnimation = ({ duration = 15 }: BriefToStoryboardAnimationProps = {}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const stageRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const accentRef = useRef<HTMLDivElement | null>(null);

  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!containerRef.current) return;
    const reduceMotion = prefersReducedMotion();
    const sections = stageRefs.current.filter(Boolean);
    if (!sections.length) return;

    // Dynamic stage info updater (badge, title, description, accent color)
    const updateDetail = (index: number) => {
      const clamped = Math.max(0, Math.min(stageData.length - 1, index));
      const data = stageData[clamped];
      // Update badge counter (1/5, 2/5, etc.)
      if (badgeRef.current) badgeRef.current.textContent = `${clamped + 1}/${stageData.length}`;
      // Update stage title and description
      if (titleRef.current) titleRef.current.textContent = data.title;
      if (descriptionRef.current) descriptionRef.current.textContent = data.description;
      // Animate accent color transition
      if (accentRef.current) {
        gsap.to(accentRef.current, { background: data.accent, duration: 0.4 });
      }
    };

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        // Show final state (Stage 5) when motion disabled
        sections.forEach((stage, i) => {
          gsap.set(stage, { autoAlpha: i === sections.length - 1 ? 1 : 0, scale: 1 });
        });
        updateDetail(sections.length - 1);
        if (progressRef.current) {
          progressRef.current.style.width = "100%";
          progressRef.current.style.background = briefingPalette.orange.DEFAULT;
        }
        return;
      }

      gsap.set(sections, { autoAlpha: 0, scale: 0.94, filter: "saturate(0.6)" });
      gsap.set(sections[0], { autoAlpha: 1, scale: 1, filter: "saturate(1)" });
      updateDetail(0);

      // Timeline with scrub: user controls playhead by scrolling
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",  // Pin starts when section hits viewport top
          end: `+=${duration * SCROLL_PIXELS_PER_SECOND}`,  // 15s default = 3600px scroll distance
          scrub: true,  // Sync timeline to scroll position (1:1 mapping)
          pin: window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches,  // Mobile: disable pinning
          anticipatePin: 1  // Prevent flicker on pin start
        }
      });

      // Stage 1 (0-3s): Craft the Brief - Form fields stagger
      tl.addLabel("stage-0", 0);
      tl.call(updateDetail, [0], "stage-0");
      tl.to(sections[0], { autoAlpha: 1, scale: 1, filter: "saturate(1)", duration: 0.8 }, "stage-0");
      tl.from(".form-field", {
        opacity: 0,
        y: 50,
        stagger: 0.4,
        duration: 0.5,
        ease: "power2.out"
      }, "stage-0+=0.3");
      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: "20%",
          background: `linear-gradient(90deg, ${stageData[0].accent}, ${stageData[0].accent}80)`
        }, "stage-0");
      }

      // Stage 2 (3-6s): AI Narrative Engine - Particles appear
      tl.addLabel("stage-1", 3);
      tl.call(updateDetail, [1], "stage-1");
      tl.to(sections[0], { autoAlpha: 0, scale: 0.8, filter: "saturate(0.5)", duration: 0.8 }, "stage-1");
      tl.to(sections[1], { autoAlpha: 1, scale: 1, filter: "saturate(1)", duration: 0.8 }, "stage-1");
      tl.from(".ai-particles-wrapper", {
        opacity: 0,
        scale: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      }, "stage-1+=0.5");
      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: "40%",
          background: `linear-gradient(90deg, ${stageData[1].accent}, ${stageData[1].accent}80)`
        }, "stage-1");
      }

      // Stage 3 (6-9s): Style Selection - Cards appear, selected bursts
      tl.addLabel("stage-2", 6);
      tl.call(updateDetail, [2], "stage-2");
      tl.to(sections[1], { autoAlpha: 0, scale: 0.9, duration: 0.8 }, "stage-2");
      tl.to(sections[2], { autoAlpha: 1, scale: 1, filter: "saturate(1)", duration: 0.8 }, "stage-2");
      tl.from(".style-card", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.2)"
      }, "stage-2+=0.3");
      tl.to(".style-card-selected", {
        scale: 1.15,
        duration: 0.4,
        ease: "back.out(1.5)"
      }, "stage-2+=2");
      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: "60%",
          background: `linear-gradient(90deg, ${stageData[2].accent}, ${stageData[2].accent}80)`
        }, "stage-2");
      }

      // Stage 4 (9-15s): Storyboard Assembly - Panels fly in
      tl.addLabel("stage-3", 9);
      tl.call(updateDetail, [3], "stage-3");
      tl.to(sections[2], { autoAlpha: 0, scale: 0.9, duration: 0.8 }, "stage-3");
      tl.to(sections[3], { autoAlpha: 1, scale: 1, filter: "saturate(1)", duration: 0.8 }, "stage-3");
      tl.from(".storyboard-panel", {
        x: (i) => (i % 2 === 0 ? -200 : 200),
        y: -100,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out"
      }, "stage-3+=0.5");
      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: "80%",
          background: `linear-gradient(90deg, ${stageData[3].accent}, ${stageData[3].accent}80)`
        }, "stage-3");
      }

      // Stage 5 (15-16s): Studios Handoff - Gradient shift
      tl.addLabel("stage-4", 15);
      tl.call(updateDetail, [4], "stage-4");
      tl.to(sections[3], { autoAlpha: 0, scale: 0.9, duration: 0.8 }, "stage-4");
      tl.to(sections[4], { autoAlpha: 1, scale: 1, filter: "saturate(1)", duration: 0.8 }, "stage-4");
      tl.to(".gradient-overlay", {
        background: "linear-gradient(135deg, #4F46E5 0%, #EA580C 100%)",
        duration: 1,
        ease: "power2.inOut"
      }, "stage-4");
      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: "100%",
          background: `linear-gradient(90deg, ${stageData[4].accent}, ${stageData[4].accent}80)`
        }, "stage-4");
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [lenis, duration]);

  return (
    <section
      id="brief-to-storyboard"
      ref={containerRef}
      className="rounded-[28px] border border-white/10 bg-[rgba(10,10,22,0.7)] p-6 md:p-10 shadow-[0_40px_140px_-90px_rgba(12,10,28,0.85)] backdrop-blur-xl"
      aria-label="Transformation from creative brief to storyboard"
    >
      <div className="grid gap-8 md:grid-cols-[250px_1fr] md:gap-12">
        <aside className="space-y-6">
          <div className="flex items-center gap-3">
            <span
              ref={badgeRef}
              className="inline-flex h-9 min-w-[72px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
            >
              1/5
            </span>
            <div className="h-1 flex-1 rounded-full bg-white/10">
              <div ref={progressRef} className="h-full w-[20%] rounded-full bg-gradient-to-r from-[#4F46E5] to-[#4F46E580]" />
            </div>
          </div>

          <div>
            <div ref={accentRef} className="mb-3 h-1.5 w-16 rounded-full bg-[rgba(79,70,229,0.9)]" />
            <h3 ref={titleRef} className="text-2xl font-black tracking-tight text-white">
              Craft the Brief
            </h3>
            <p ref={descriptionRef} className="mt-3 text-sm leading-relaxed text-white/70">
              Capture campaign goal, audience, tone and must-have shots in a guided cinematic form.
            </p>
          </div>

          <ul className="space-y-2 text-sm text-white/55">
            <li className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: briefingPalette.indigo.DEFAULT }} />
              Scroll to scrub through each transformation stage.
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: briefingPalette.holographic.cyan }} />
              Prefer reduced motion? Animations gracefully flatten to static states.
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: briefingPalette.orange.DEFAULT }} />
              Built on GSAP ScrollTrigger, tied into Lenis smooth scrolling.
            </li>
          </ul>
        </aside>

        <div className="relative h-[440px] overflow-visible rounded-[24px] border border-white/10 bg-black/40 p-6">
          <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-br from-white/15 via-white/5 to-transparent" aria-hidden="true" />
          <div className="relative h-full">
            <div
              ref={(el) => el && (stageRefs.current[0] = el)}
              className="absolute inset-0 flex flex-col justify-between rounded-[20px] border border-white/12 bg-[rgba(18,18,32,0.92)] p-6 shadow-[0_30px_120px_-80px_rgba(79,70,229,0.9)]"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>Step 01</span>
                  <span className="text-white/40">Brief</span>
                </div>
                <h4 className="text-2xl font-black text-white">Creative Brief Intake</h4>
                <p className="text-sm leading-relaxed text-white/70">
                  Seven structured fields shape the narrative blueprint before a single shot is imagined.
                </p>
              </div>
              <div className="grid gap-2 text-[13px] text-white/60">
                {["Campaign Title", "Audience Persona", "Key Message", "Runtime", "Voice & Tone", "Mandatory Shots", "Call to Action"].map((label) => (
                  <div key={label} className="form-field flex items-center justify-between rounded-lg border border-white/8 bg-white/4 px-3 py-2">
                    <span>{label}</span>
                    <span className="text-white/35">Tap to configure…</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={(el) => el && (stageRefs.current[1] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-[20px] border border-white/12 bg-[rgba(12,12,28,0.9)] p-6 opacity-0"
            >
              <div className="ai-particles-wrapper h-48 w-48 flex items-center justify-center">
                <AIProcessingVisual />
              </div>
              <div className="space-y-2 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>Step 02</span>
                  <span className="text-white/40">Processing</span>
                </div>
                <h4 className="text-2xl font-black text-white">AI Narrative Engine</h4>
                <p className="text-sm leading-relaxed text-white/70 max-w-sm">
                  Particle choreography visualises rhythm, shot cadence and tonal balance as the system reasons through your brief.
                </p>
              </div>
            </div>

            <div
              ref={(el) => el && (stageRefs.current[2] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-[20px] border border-white/12 bg-[rgba(18,18,34,0.9)] p-6 opacity-0"
            >
              <div className="grid w-full max-w-xl grid-cols-3 gap-3">
                {styleSamples.map((sample, i) => (
                  <div
                    key={sample.name}
                    className={`style-card ${i === 1 ? 'style-card-selected' : ''} rounded-xl border border-white/12 bg-white/8 p-3 text-center text-xs text-white/70 transition-transform`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/12">
                      <img src={sample.image} alt={`${sample.name} look preview`} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <p className="mt-2 font-semibold">{sample.name}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-md text-center text-sm text-white/70">
                Minimalist, Cinematic, Playful or Futuristic—the chosen aesthetic is locked before panels assemble.
              </p>
            </div>

            <div
              ref={(el) => el && (stageRefs.current[3] = el)}
              className="absolute inset-0 flex items-center justify-center rounded-[20px] border border-white/12 bg-[rgba(10,10,22,0.95)] p-6 opacity-0"
            >
              <div className="grid h-full max-h-[420px] w-full max-w-3xl grid-cols-3 gap-4">
                {storyboardFrames.map((src, index) => (
                  <div key={src} className="storyboard-panel relative overflow-hidden rounded-xl border border-white/12 bg-black/50">
                    <img src={src} alt={`Storyboard frame ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/75">
                      Scene {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={(el) => el && (stageRefs.current[4] = el)}
              className="gradient-overlay absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-[20px] border border-white/12 bg-gradient-to-br from-[rgba(18,18,32,0.95)] via-[rgba(34,19,6,0.88)] to-[rgba(18,18,26,0.92)] p-6 opacity-0"
            >
              <img
                src="/briefing-engine/storyboard/SB-Mockup.webp"
                alt="Storyboard PDF handoff"
                className="w-full max-w-2xl rounded-2xl border border-white/12 shadow-[0_50px_160px_-80px_rgba(234,88,12,0.6)]"
                loading="lazy"
              />
              <div className="space-y-2 text-center text-sm text-white/70">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>Step 05</span>
                  <span className="text-white/40">Studios</span>
                </div>
                <p>
                  Final PDF drops into the Studios pipeline with shot notes, aspect ratios, and delivery metadata locked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
