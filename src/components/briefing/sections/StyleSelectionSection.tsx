import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { visualStyles, StageMetadata } from "./section-data";
import { useScrollTriggerAnimation } from "@/hooks/useScrollTriggerAnimation";
import { ReducedMotionIllustration } from "@/components/briefing/ReducedMotionIllustration";
import { StepLabel } from "@/components/briefing/StepLabel";
import {
  DESKTOP_MEDIA_QUERIES,
  MotionTier,
  ScrollOffsetConfig,
  STYLE_MOTION,
  STYLE_SCROLL_OFFSETS,
  StyleMotionConfig,
  resolveMotionTier
} from "./motion-config";

gsap.registerPlugin(ScrollTrigger);

interface StyleSelectionSectionProps {
  stage: StageMetadata;
  onStageEnter?: (stageId: string) => void;
  onStageLeave?: (stageId: string) => void;
}

export function StyleSelectionSection({ stage, onStageEnter, onStageLeave }: StyleSelectionSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const onStageEnterRef = useRef<StyleSelectionSectionProps["onStageEnter"]>(undefined);
  const onStageLeaveRef = useRef<StyleSelectionSectionProps["onStageLeave"]>(undefined);

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

      const styles = gridRef.current
        ? (Array.from(gridRef.current.querySelectorAll('[data-style-card]')) as HTMLElement[])
        : [];

      if (prefersReducedMotion) {
        container.setAttribute('data-motion', 'reduced');
        ScrollTrigger.create({
          trigger: container,
          start: 'top 70%',
          end: 'bottom 45%',
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id)
        });

        if (styles.length) {
          gsap.set(styles, { autoAlpha: 1, y: 0, scale: 1, rotationY: 0, clearProps: 'all' });
        }
        return;
      }

      container.setAttribute('data-motion', 'full');

      const backgrounds = Array.from(container.querySelectorAll('[data-stage-background]')) as HTMLElement[];
      const header = container.querySelector('[data-style-header]') as HTMLElement | null;
      const animatedElements = [...backgrounds, header, ...styles].filter(Boolean) as HTMLElement[];
      const accent = container.querySelector('[data-step-accent]') as HTMLElement | null;

      const applyWillChange = () => {
        if (!animatedElements.length) return;
        requestAnimationFrame(() => {
          gsap.set(animatedElements, { willChange: 'transform, opacity' });
        });
      };

      const clearWillChange = () => {
        if (!animatedElements.length) return;
        gsap.set(animatedElements, { clearProps: 'willChange' });
      };

      const createTimeline = (motion: StyleMotionConfig, offsets: ScrollOffsetConfig, tier: MotionTier) => {
        if (animatedElements.length) {
          gsap.set(animatedElements, { autoAlpha: 0 });
        }
        applyWillChange();

        // CONSOLIDATED: Single ScrollTrigger for both animation AND tracking
        // FIXED: Eliminates double-firing by removing dual trigger anti-pattern
        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: container,
            start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
            end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
            once: true, // Animation plays once for performance
            toggleActions: "play none none none", // No replays on scrollback
            invalidateOnRefresh: true,
            refreshPriority: 3,
            lazy: false,
            // Stage tracking callbacks integrated into animation trigger
            onEnter: () => onStageEnterRef.current?.(stage.id),
            onEnterBack: () => onStageEnterRef.current?.(stage.id),
            onLeave: () => onStageLeaveRef.current?.(stage.id),
            onLeaveBack: () => onStageLeaveRef.current?.(stage.id),
          }
        });

        const isCompactTier = tier === 'laptop' || tier === 'base';

        timeline
          .fromTo(
            backgrounds,
            { autoAlpha: 0, scale: 0.98 },
            { autoAlpha: 1, scale: 1, duration: motion.backgroundDuration, ease: motion.backgroundEase }
          )
          .fromTo(
            header,
            { autoAlpha: 0, y: isCompactTier ? 26 : 40 },
            { autoAlpha: 1, y: 0, duration: motion.headerDuration, ease: motion.headerEase },
            motion.headerOverlap
          );

        if (accent) {
          timeline.to(
            accent,
            {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.out"
            },
            ">"
          );
        }

        if (styles.length) {
          timeline.fromTo(
            styles,
            { autoAlpha: 0, y: isCompactTier ? 24 : 40, scale: isCompactTier ? 0.97 : 0.94 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: motion.cardDuration,
              stagger: motion.cardStagger,
              ease: motion.cardEase,
              force3D: true
            },
            motion.cardOverlap
          );
        }

        if (animatedElements.length) {
          const releaseWillChange = () => clearWillChange();
          timeline.eventCallback('onComplete', releaseWillChange);
          timeline.eventCallback('onReverseComplete', releaseWillChange);
          timeline.eventCallback('onInterrupt', releaseWillChange);
        }

        return timeline;
      };

      matchMedia.add('(max-width: 1023px)', () => {
        const timeline = createTimeline(STYLE_MOTION.base, STYLE_SCROLL_OFFSETS.base, 'base');
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
        const timeline = createTimeline(STYLE_MOTION[tier], STYLE_SCROLL_OFFSETS[tier], tier);
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
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden bg-[rgba(18,18,34,0.96)] px-6 sm:px-12 lg:px-24 xl:px-32 py-28 md:scroll-mt-32"
      aria-labelledby={`${stage.id}-heading`}
    >
      <div
        data-stage-background
        className="pointer-events-none absolute inset-0 opacity-75"
        style={{
          background: `radial-gradient(circle at 18% 22%, rgba(236,72,153,0.2) 0%, transparent 55%),
            radial-gradient(circle at 80% 78%, rgba(124,58,237,0.18) 0%, transparent 60%),
            linear-gradient(180deg, rgba(12,12,24,0.94) 0%, rgba(15,15,30,0.9) 100%)`
        }}
        aria-hidden
      />

      <div className="relative z-10 timeline-section-container flex w-full flex-col gap-12">
        <header
          data-style-header
          className="flex flex-col gap-6 text-white md:flex-row md:items-start md:gap-16 md:pl-20 md:pr-16"
        >
          <StepLabel
            id={`${stage.id}-heading`}
            step={stage.step}
            label="Visual Direction"
            size="lg"
            className="md:-ml-6 md:min-w-[300px]"
          />
        </header>

        <div
          ref={gridRef}
          data-motion-hide
          className="grid gap-3 rounded-[32px] border border-white/12 bg-white/[0.05] p-6 md:grid-cols-3"
        >
          {visualStyles.map((style) => (
            <figure
              key={style.name}
              data-style-card
              className="group relative overflow-hidden rounded-[24px] border border-white/14 bg-black/50 shadow-[0_45px_140px_-120px_rgba(147,51,234,0.6)]"
            >
              <img
                src={style.src}
                srcSet={style.srcSet}
                sizes={style.sizes}
                alt={`${style.name} visual style`}
                width={style.width}
                height={style.height}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 px-5 pb-6 pt-12 text-white">
                <span
                  className="text-lg font-black uppercase tracking-[0.3em] text-[#f5f6ff]"
                  style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.8)" }}
                >
                  {style.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
          <div
            data-motion-show
            className="reduced-motion-card hidden bg-white/[0.05] text-white/75"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] md:items-center">
              <ReducedMotionIllustration variant="styles" className="w-full drop-shadow-[0_24px_80px_rgba(192,38,211,0.4)]" />
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">Signature Style Library</h4>
                <p className="timeline-body">
                  Static previews present each aesthetic instantly—no cascading animations—so visitors can focus on the creative differences.
                </p>
                <ul className="grid gap-2 text-sm text-white/60 sm:grid-cols-2">
                  {visualStyles.map((style) => (
                    <li key={style.name} className="flex items-center gap-2">
                      <span aria-hidden className="h-1.5 w-4 rounded-full bg-white/35" />
                      {style.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
