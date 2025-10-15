import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AIProcessingVisual } from "@/components/briefing/AIProcessingVisual";
import { ParticleCore } from "@/components/briefing/ParticleCore";
import { SynopsisPanel, getSynopsisWordRefs } from "@/components/briefing/SynopsisPanel";
import { useScrollTriggerAnimation } from "@/hooks/useScrollTriggerAnimation";
import { StageMetadata } from "./section-data";
import { ReducedMotionIllustration } from "@/components/briefing/ReducedMotionIllustration";
import { StepLabel } from "@/components/briefing/StepLabel";
import {
  DESKTOP_MEDIA_QUERIES,
  MotionTier,
  NEURAL_MOTION,
  NEURAL_SCROLL_OFFSETS,
  NeuralMotionConfig,
  ScrollOffsetConfig,
  resolveMotionTier
} from "./motion-config";

gsap.registerPlugin(ScrollTrigger);

interface NeuralSynthesisSectionProps {
  stage: StageMetadata;
  onStageEnter?: (stageId: string) => void;
  onStageLeave?: (stageId: string) => void;
}

export function NeuralSynthesisSection({ stage, onStageEnter, onStageLeave }: NeuralSynthesisSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleRef = useRef<HTMLDivElement | null>(null);
  const synopsisRef = useRef<HTMLDivElement | null>(null);
  const [isCoreActive, setIsCoreActive] = useState(false);
  const [coreIntensity, setCoreIntensity] = useState(0.6);
  const coreIntensityRef = useRef(0.6);
  const intensityFrameRef = useRef<number | null>(null);
  const onStageEnterRef = useRef<NeuralSynthesisSectionProps["onStageEnter"]>(undefined);
  const onStageLeaveRef = useRef<NeuralSynthesisSectionProps["onStageLeave"]>(undefined);

  useEffect(() => {
    onStageEnterRef.current = onStageEnter;
  }, [onStageEnter]);

  useEffect(() => {
    onStageLeaveRef.current = onStageLeave;
  }, [onStageLeave]);

  const scheduleCoreIntensity = useCallback((value: number) => {
    const next = Number(value.toFixed(3));
    if (coreIntensityRef.current === next) {
      return;
    }

    coreIntensityRef.current = next;

    if (intensityFrameRef.current !== null) {
      return;
    }

    intensityFrameRef.current = requestAnimationFrame(() => {
      intensityFrameRef.current = null;
      setCoreIntensity(coreIntensityRef.current);
    });
  }, []);

  useEffect(() => {
    coreIntensityRef.current = coreIntensity;
  }, [coreIntensity]);

  useEffect(() => {
    return () => {
      if (intensityFrameRef.current !== null) {
        cancelAnimationFrame(intensityFrameRef.current);
      }
    };
  }, []);

  const runAnimation = useCallback(
    ({ prefersReducedMotion, matchMedia }: { prefersReducedMotion: boolean; matchMedia: gsap.MatchMedia }) => {
      const container = containerRef.current;
      if (!container) return;

      if (prefersReducedMotion) {
        container.setAttribute("data-motion", "reduced");
        ScrollTrigger.create({
          trigger: container,
          start: "top 75%",
          end: "bottom 45%",
          onEnter: () => {
            onStageEnterRef.current?.(stage.id);
            setIsCoreActive(false);
            scheduleCoreIntensity(0.6);
          },
          onEnterBack: () => {
            onStageEnterRef.current?.(stage.id);
            setIsCoreActive(false);
            scheduleCoreIntensity(0.6);
          },
          onLeave: () => {
            onStageLeaveRef.current?.(stage.id);
            setIsCoreActive(false);
          },
          onLeaveBack: () => {
            onStageLeaveRef.current?.(stage.id);
            setIsCoreActive(false);
          }
        });

        const reducedSynopsis = synopsisRef.current ? getSynopsisWordRefs(synopsisRef.current) : null;
        if (reducedSynopsis) {
          const words = [...reducedSynopsis.titleWords, ...reducedSynopsis.synopsisWords];
          gsap.set(words, { autoAlpha: 1, y: 0, scale: 1, clearProps: "all" });
        }

        return;
      }

      container.setAttribute("data-motion", "full");

      const stageBackgrounds = Array.from(container.querySelectorAll("[data-stage-background]"));
      const synopsisRefs = synopsisRef.current ? getSynopsisWordRefs(synopsisRef.current) : null;
      const animatedElements: HTMLElement[] = [
        ...stageBackgrounds,
        particleRef.current,
        synopsisRef.current
      ].filter(Boolean) as HTMLElement[];

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

      const createTimeline = (motion: NeuralMotionConfig, offsets: ScrollOffsetConfig, tier: MotionTier) => {
        const baseIntensity = { value: 0.9 };
        const intensityState = { velocityBoost: 0 };
        const clampIntensity = gsap.utils.clamp(0.6, 1.2);
        const updateIntensity = () => {
          scheduleCoreIntensity(clampIntensity(baseIntensity.value + intensityState.velocityBoost));
        };

        updateIntensity();
        if (animatedElements.length) {
          gsap.set(animatedElements, { autoAlpha: 0 });
        }
        applyWillChange();

        // Animation timeline - plays once and kills itself for memory efficiency
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: container,
            start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
            end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
            once: true,  // Kill trigger after reaching end once
            toggleActions: "play none none none",  // CRITICAL: Only play on enter, never on scrollback
            invalidateOnRefresh: true,
            refreshPriority: 4,
            lazy: false,
            onEnter: () => {
            onStageEnterRef.current?.(stage.id);
            setIsCoreActive(true);
            baseIntensity.value = 0.9;
            intensityState.velocityBoost = 0;
            updateIntensity();
          },
            onUpdate: (self) => {
              if (!prefersReducedMotion && tier !== "base") {
                const velocity = Math.abs(self.getVelocity());
                const velocityBoost = gsap.utils.clamp(0, 0.4, gsap.utils.mapRange(0, 2000, 0, 0.4, velocity));
                intensityState.velocityBoost = velocityBoost;
                updateIntensity();
              }
            }
          }
        });

        // Separate tracking trigger - stays alive for stage tracking & analytics
        ScrollTrigger.create({
          trigger: container,
          start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
          end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
          onEnter: () => {
            onStageEnterRef.current?.(stage.id);
            setIsCoreActive(true);
            scheduleCoreIntensity(baseIntensity.value);
          },
          onEnterBack: () => {
            onStageEnterRef.current?.(stage.id);
            setIsCoreActive(true);
            scheduleCoreIntensity(baseIntensity.value);
          },
          onLeave: () => {
            onStageLeaveRef.current?.(stage.id);
            setIsCoreActive(false);
            scheduleCoreIntensity(0.9);
          },
          onLeaveBack: () => {
            onStageLeaveRef.current?.(stage.id);
            setIsCoreActive(false);
            scheduleCoreIntensity(0.9);
          }
        });

        timeline.fromTo(
          stageBackgrounds,
          { autoAlpha: 0, scale: 0.98 },
          { autoAlpha: 1, scale: 1, duration: motion.backgroundDuration, ease: motion.backgroundEase }
        );

        const isCompactTier = tier === "laptop" || tier === "base";
        const coreFrom = isCompactTier ? { autoAlpha: 0, y: 36, scale: 0.94 } : { autoAlpha: 0, y: 40, scale: 0.92 };

        timeline
          .fromTo(
            particleRef.current,
            coreFrom,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: motion.coreDuration,
              ease: motion.coreEase,
              force3D: true
            },
            motion.coreOverlap
          )
          .fromTo(
            synopsisRef.current,
            { autoAlpha: 0, y: isCompactTier ? 36 : 50 },
            { autoAlpha: 1, y: 0, duration: motion.synopsisDuration, ease: motion.synopsisEase },
            motion.synopsisOverlap
          );

        if (synopsisRefs) {
          timeline.fromTo(
            [...synopsisRefs.titleWords, ...synopsisRefs.synopsisWords],
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: motion.wordsDuration,
              stagger: motion.wordsStagger,
              ease: motion.wordsEase
            },
            motion.wordsOverlap
          );
        }

        timeline
          .to(baseIntensity, {
            value: 1.1,
            duration: 0.9,
            ease: "power2.inOut",
            onUpdate: updateIntensity
          })
          .to(baseIntensity, {
            value: 0.9,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: updateIntensity
          })
          .to(baseIntensity, {
            value: 1.1,
            duration: 0.9,
            ease: "power2.inOut",
            onUpdate: updateIntensity
          })
          .to(baseIntensity, {
            value: 0.9,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: updateIntensity
          });

        if (animatedElements.length) {
          const releaseWillChange = () => clearWillChange();
          timeline.eventCallback("onComplete", releaseWillChange);
          timeline.eventCallback("onReverseComplete", releaseWillChange);
          timeline.eventCallback("onInterrupt", releaseWillChange);
        }

        return timeline;
      };

      matchMedia.add("(max-width: 1023px)", () => {
        const timeline = createTimeline(NEURAL_MOTION.base, NEURAL_SCROLL_OFFSETS.base, "base");
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
        const timeline = createTimeline(NEURAL_MOTION[tier], NEURAL_SCROLL_OFFSETS[tier], tier);
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
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden bg-[rgba(12,12,28,0.96)] px-6 sm:px-12 lg:px-24 xl:px-32 py-28 md:scroll-mt-32"
      aria-labelledby={`${stage.id}-heading`}
    >
      <div
        data-stage-background
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at 65% 30%, rgba(99,102,241,0.16) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(22,163,192,0.18) 0%, transparent 55%),
            linear-gradient(180deg, rgba(5,6,12,0.95) 0%, rgba(9,10,22,0.9) 100%)`
        }}
        aria-hidden
      />

      <div className="relative z-10 timeline-section-container flex w-full flex-col gap-12">
        <header className="flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between md:gap-16 md:pl-20 md:pr-16">
          <StepLabel
            id={`${stage.id}-heading`}
            step={stage.step}
            label="Story Engine"
            size="lg"
            className="md:ml-12 md:min-w-[300px] md:self-center"
          />
          <AIProcessingVisual className="hidden h-12 w-28 md:block" />
        </header>

        <div className="grid gap-6 md:-mt-4 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
          <div
            ref={particleRef}
            data-motion-hide
            className="rounded-3xl border border-white/12 bg-gradient-to-br from-indigo-500/12 via-slate-900 to-slate-950 p-6 shadow-[0_55px_160px_-120px_rgba(56,189,248,0.6)]"
          >
            <ParticleCore
              className="h-[420px] w-full"
              isActive={isCoreActive}
              intensity={coreIntensity}
              sizeVariant="large"
            />
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="relative flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <span className="h-2 w-2 animate-ping rounded-full bg-cyan-300/80" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
                <span className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-100 drop-shadow-[0_2px_12px_rgba(34,211,238,0.55)]">
                  Story Engine Core
                </span>
                <div className="absolute -bottom-1 left-3 h-[1px] w-[calc(100%-1.5rem)] bg-gradient-to-r from-cyan-200 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
          <div
            data-motion-show
            className="reduced-motion-card hidden bg-gradient-to-br from-indigo-500/12 via-slate-900 to-slate-950"
          >
            <ReducedMotionIllustration variant="synthesis" className="w-full drop-shadow-[0_24px_80px_rgba(34,211,238,0.35)]" />
            <div className="mt-6 space-y-1 text-white/70">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Narrative Snapshot</h3>
              <p className="timeline-body-sm text-white/70">
                The neural core locks pacing, camera cues, and alternate cuts instantly—no motion required.
              </p>
            </div>
          </div>

          <div
            ref={synopsisRef}
            data-motion-hide
            className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.08] p-8 backdrop-blur"
          >
            <SynopsisPanel />
          </div>
          <div
            data-motion-show
            className="reduced-motion-card hidden bg-white/[0.08] backdrop-blur"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Synopsis Preview</h3>
            <p className="timeline-body text-white/85 font-semibold">
              Luxury Harbors launch spot featuring five cinematic beats, alternate hook lines, and scripted CTA overlays.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Reduced-motion mode collapses the animated line-by-line reveal into this single synopsis view for rapid scanning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
