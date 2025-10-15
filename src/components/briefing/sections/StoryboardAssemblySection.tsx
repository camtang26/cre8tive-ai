import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyboardFrames, StageMetadata } from "./section-data";
import { useScrollTriggerAnimation } from "@/hooks/useScrollTriggerAnimation";
import { ReducedMotionIllustration } from "@/components/briefing/ReducedMotionIllustration";
import { StepLabel } from "@/components/briefing/StepLabel";
import {
  DESKTOP_MEDIA_QUERIES,
  MotionTier,
  ScrollOffsetConfig,
  STORYBOARD_MOTION,
  STORYBOARD_SCROLL_OFFSETS,
  StoryboardMotionConfig,
  resolveMotionTier
} from "./motion-config";

gsap.registerPlugin(ScrollTrigger);

interface StoryboardAssemblySectionProps {
  stage: StageMetadata;
  onStageEnter?: (stageId: string) => void;
  onStageLeave?: (stageId: string) => void;
}

export function StoryboardAssemblySection({
  stage,
  onStageEnter,
  onStageLeave
}: StoryboardAssemblySectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const onStageEnterRef = useRef<StoryboardAssemblySectionProps["onStageEnter"]>(undefined);
  const onStageLeaveRef = useRef<StoryboardAssemblySectionProps["onStageLeave"]>(undefined);

  useEffect(() => {
    onStageEnterRef.current = onStageEnter;
  }, [onStageEnter]);

  useEffect(() => {
    onStageLeaveRef.current = onStageLeave;
  }, [onStageLeave]);

  const runAnimation = useCallback(
    ({ prefersReducedMotion, matchMedia }: { prefersReducedMotion: boolean; matchMedia: gsap.MatchMedia }) => {
      const container = containerRef.current;
      if (!container) return;

      const frames = galleryRef.current
        ? (Array.from(galleryRef.current.querySelectorAll('[data-frame-card]')) as HTMLElement[])
        : [];

      if (prefersReducedMotion) {
        container.setAttribute("data-motion", "reduced");
        ScrollTrigger.create({
          trigger: container,
          start: "top 70%",
          end: "bottom 45%",
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id)
        });

        if (frames.length) {
          gsap.set(frames, { autoAlpha: 1, y: 0, rotationY: 0, scale: 1, clearProps: "all" });
        }
        return;
      }

      container.setAttribute("data-motion", "full");

      const stageBackgrounds = Array.from(container.querySelectorAll("[data-stage-background]")) as HTMLElement[];
      const storyboardCopy = container.querySelector("[data-storyboard-copy]") as HTMLElement | null;
      const animatedElements = [...stageBackgrounds, storyboardCopy, ...frames].filter(Boolean) as HTMLElement[];

      const applyWillChange = () => {
        if (!animatedElements.length) return;
        requestAnimationFrame(() => {
          gsap.set(animatedElements, { willChange: "transform, opacity" });
        });
      };

      const clearWillChange = () => {
        if (!animatedElements.length) return;
        gsap.set(animatedElements, { clearProps: "willChange" });
      };

      const createTimeline = (motion: StoryboardMotionConfig, offsets: ScrollOffsetConfig, tier: MotionTier) => {
        if (animatedElements.length) {
          gsap.set(animatedElements, { autoAlpha: 0 });
        }
        applyWillChange();

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: container,
            start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
            end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
            once: true,
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            refreshPriority: 2,
            lazy: false
          }
        });

        ScrollTrigger.create({
          trigger: container,
          start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
          end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id)
        });

        timeline
          .fromTo(
            stageBackgrounds,
            { autoAlpha: 0, scale: 0.98 },
            { autoAlpha: 1, scale: 1, duration: motion.backgroundDuration, ease: motion.backgroundEase }
          )
          .fromTo(
            storyboardCopy,
            { autoAlpha: 0, y: tier === "laptop" || tier === "base" ? 30 : 40 },
            { autoAlpha: 1, y: 0, duration: motion.copyDuration, ease: motion.copyEase },
            motion.copyOverlap
          );

        if (frames.length) {
          const isCompactTier = tier === "laptop" || tier === "base";
          const baseFrameConfig = isCompactTier
            ? { autoAlpha: 0, y: 34, rotationY: 0, transformPerspective: 400, scale: 0.96 }
            : { autoAlpha: 0, y: 60, rotationY: 12, transformPerspective: 600, scale: 0.94 };

          timeline.fromTo(
            frames,
            baseFrameConfig,
            {
              autoAlpha: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: motion.frameDuration,
              stagger: motion.frameStagger,
              ease: motion.frameEase,
              force3D: true
            },
            motion.frameOverlap
          );
        }

        if (animatedElements.length) {
          const releaseWillChange = () => clearWillChange();
          timeline.eventCallback("onComplete", releaseWillChange);
          timeline.eventCallback("onReverseComplete", releaseWillChange);
          timeline.eventCallback("onInterrupt", releaseWillChange);
        }

        return timeline;
      };

      matchMedia.add("(max-width: 1023px)", () => {
        const timeline = createTimeline(STORYBOARD_MOTION.base, STORYBOARD_SCROLL_OFFSETS.base, "base");
        return () => {
          timeline?.kill();
          clearWillChange();
        };
      });

      matchMedia.add(DESKTOP_MEDIA_QUERIES, (context) => {
        if (!context.conditions.desktopUp) {
          return;
        }

        const tier = resolveMotionTier(context.conditions);
        const timeline = createTimeline(STORYBOARD_MOTION[tier], STORYBOARD_SCROLL_OFFSETS[tier], tier);
        return () => {
          timeline?.kill();
          clearWillChange();
        };
      });
    },
    [stage.id]
  );

  useScrollTriggerAnimation(containerRef, runAnimation);

  return (
    <section
      id={stage.id}
      ref={containerRef}
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden bg-[rgba(16,18,36,0.96)] px-6 sm:px-12 lg:px-24 xl:px-32 py-28 md:scroll-mt-32"
      aria-labelledby={`${stage.id}-heading`}
    >
      <div
        data-stage-background
        className="pointer-events-none absolute inset-0 opacity-75"
        style={{
          background: `radial-gradient(circle at 18% 25%, rgba(34,197,94,0.18) 0%, transparent 55%),
            radial-gradient(circle at 82% 70%, rgba(14,165,233,0.2) 0%, transparent 60%),
            linear-gradient(180deg, rgba(10,12,25,0.95) 0%, rgba(10,15,22,0.92) 100%)`
        }}
        aria-hidden
      />

      <div className="relative z-10 timeline-section-container flex w-full flex-col gap-12">
        <header
          data-storyboard-copy
          className="flex flex-col gap-6 text-white md:flex-row md:items-start md:gap-16 md:pl-20 md:pr-16"
        >
          <StepLabel
            id={`${stage.id}-heading`}
            step={stage.step}
            label="Storyboard Assembly"
            size="lg"
            className="md:-ml-6 md:min-w-[300px]"
          />
        </header>

        <div
          ref={galleryRef}
          data-motion-hide
          className="grid gap-4 rounded-[32px] border border-white/12 bg-white/[0.05] p-6 md:grid-cols-3"
        >
          {storyboardFrames.map((frame, index) => (
            <div
              key={frame.src}
              data-frame-card
              className="group relative overflow-hidden rounded-[24px] border border-white/12 bg-black/50 shadow-[0_45px_140px_-120px_rgba(14,165,233,0.6)]"
            >
              <img
                src={frame.src}
                alt={`Storyboard frame ${index + 1}`}
                width={frame.width}
                height={frame.height}
                loading={index >= 3 ? "lazy" : "eager"}
                className="h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#11142d] shadow-[0_18px_42px_-26px_rgba(12,12,32,0.8)]">
                <span>Scene</span>
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <div data-motion-show className="reduced-motion-card hidden bg-white/[0.05] text-white/75">
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] md:items-center">
            <ReducedMotionIllustration variant="storyboard" className="w-full drop-shadow-[0_24px_80px_rgba(14,165,233,0.35)]" />
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/55">Storyboard Frames</h4>
              <p className="timeline-body">
                Frames converge into a cinematic sequence while timings, multi-duration edits, and copy stay locked to your brief.
              </p>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Export-ready script & shot list",
                  "Brand-safe captions across 15s/30s/60s",
                  "Director notes for the Studio handoff",
                  "Aspect ratios for YouTube, TikTok, Instagram"
                ].map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
