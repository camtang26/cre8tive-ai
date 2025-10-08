import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Handshake,
  Layers,
  Palette,
  PenTool,
  Sparkles,
  Orbit,
} from "lucide-react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { briefingPalette } from "@/components/briefing/palette";
import { useLenisReady } from "@/hooks/useLenisReady";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type StageConfig = {
  id: string;
  step: string;
  title: string;
  summary: string;
  description: string;
  timelineLabel?: string;
  icon: typeof BadgeCheck;
  accent: string;
  accentSoft: string;
  highlight: string;
  deliverables: string[];
  outputs: { label: string; value: string }[];
  insight: string;
};

const stages: StageConfig[] = [
  {
    id: "define-brand",
    step: "Step 01",
    title: "Define Your Brand",
    summary: "Seven guided inputs lock story tone, guardrails, and success metrics.",
    description:
      "Campaign goal, audience persona, voice, references, and compliance guardrails are captured with zero guesswork.",
    timelineLabel: "Guided briefing",
    icon: BadgeCheck,
    accent: briefingPalette.colors.cyan,
    accentSoft: `${briefingPalette.colors.cyan}33`,
    highlight: "Structured brand DNA captured",
    deliverables: [
      "Campaign goal + KPI",
      "Target persona & tone guardrails",
      "Reference uploads & must-haves",
    ],
    outputs: [
      { label: "Inputs captured", value: "7 structured fields" },
      { label: "Brand compliance", value: "Automatic guardrail checks" },
    ],
    insight:
      "Teams describe this step as filling out a cinematic treatment, not a spreadsheet—so brand guardians stay engaged from the first minute.",
  },
  {
    id: "ai-synopsis",
    step: "Step 02",
    title: "AI Synopsis & Scene Map",
    summary: "Narrative engine drafts the synopsis, pacing, and shot-by-shot breakdown.",
    description:
      "Cre8tive AI interprets the brief to craft an editable storyline—complete with tone guidance, key beats, and hero shots—so your team can request alternates before visual production begins.",
    timelineLabel: "Story structuring",
    icon: Sparkles,
    accent: briefingPalette.colors.fuchsia,
    accentSoft: `${briefingPalette.colors.fuchsia}33`,
    highlight: "Narrative locked-in",
    deliverables: [
      "Editable synopsis with headline + hook",
      "Scene-by-scene pacing plan",
      "Alternate storyline suggestions",
    ],
    outputs: [
      { label: "Narrative beats", value: "6-10 scenes drafted" },
      { label: "Feedback loop", value: "Request revisions instantly" },
    ],
    insight:
      "Stakeholders can request alternates before design work starts, saving entire approval cycles and keeping decision makers in the loop.",
  },
  {
    id: "choose-style",
    step: "Step 03",
    title: "Choose Your Visual Style",
    summary: "Instantly preview nine predetermined aesthetics tailored to your brand voice.",
    description:
      "Creative teams toggle between Minimalist, Cinematic, Futuristic, and more. Each style is pre-curated and brand-safe, locking palette, typography, and motion language before storyboard rendering begins.",
    timelineLabel: "Creative selection",
    icon: Palette,
    accent: briefingPalette.colors.indigo,
    accentSoft: `${briefingPalette.colors.indigo}33`,
    highlight: "Aesthetic locked-in",
    deliverables: [
      "Nine pre-approved style previews",
      "Brand-safe color + typography mapping",
      "Version control for quick approvals",
    ],
    outputs: [
      { label: "Visual styles", value: "9 curated options" },
      { label: "Consistency", value: "Palette + type locked in" },
    ],
    insight:
      "Each of the nine pre-curated aesthetics is art-directed in-house, so clients feel like they’re browsing a premium lookbook instead of raw AI output.",
  },
  {
    id: "ai-storyboard",
    step: "Step 04",
    title: "AI Generates Your Storyboard",
    summary: "Scene-by-scene frames, narration, and motion cues render automatically.",
    description:
      "Once the narrative and aesthetic are locked, Cre8tive AI produces storyboard frames with director notes, camera moves, channel crops, and messaging that matches your approved brief.",
    timelineLabel: "Realtime build",
    icon: PenTool,
    accent: briefingPalette.colors.cyan,
    accentSoft: `${briefingPalette.colors.cyan}33`,
    highlight: "Storyboard drafted automatically",
    deliverables: [
      "Scene-by-scene storyboard with director notes",
      "Channel crops (16:9, 1:1, 9:16) auto-prepped",
      "On-brand copy and motion prompts",
    ],
    outputs: [
      { label: "Shots generated", value: "12-18 frames / brief" },
      { label: "Time saved", value: "96% faster than manual" },
    ],
    insight:
      "Directors receive camera blocking, tone cues, and motion prompts immediately—no more chasing strategy decks to understand creative intent.",
  },
  {
    id: "review-handoff",
    step: "Step 05",
    title: "Review & Handoff to Studios",
    summary: "Final QA, export to PDF, and one-click handoff to Cre8tive Studios.",
    description:
      "Teams annotate, approve, and share beautifully formatted PDFs. Production pipelines kick off instantly with connected Studios sequencing.",
    timelineLabel: "Approval + export",
    icon: Handshake,
    accent: briefingPalette.colors.orange,
    accentSoft: `${briefingPalette.colors.orange}33`,
    highlight: "Production-ready in minutes",
    deliverables: [
      "Annotated PDF for stakeholders",
      "Shot list + asset checklist",
      "Studios integration handoff",
    ],
    outputs: [
      { label: "Deliverables", value: "Storyboard PDF + asset package" },
      { label: "Next action", value: "Studios production kickoff" },
    ],
    insight:
      "Cre8tive Studios receives a structured payload, so they can jump straight into production without redundant kickoff calls.",
  },
];

export function BriefingProcessFlow() {
  const containerRef = useRef<HTMLElement | null>(null);
  const stageRefs = useRef<HTMLLIElement[]>([]);
  const [highlightedStageIndex, setHighlightedStageIndex] = useState(0);
  const [expandedStageIndex, setExpandedStageIndex] = useState<number | null>(null);

  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });
  const lenisReady = useLenisReady();
  const prefersReducedMotion = usePrefersReducedMotion();

  const registerStageRef = useCallback((el: HTMLLIElement | null, index: number) => {
    if (el) {
      stageRefs.current[index] = el;
    }
  }, []);

  const handleStageSelect = useCallback(
    (index: number) => {
      setHighlightedStageIndex(index);
      setExpandedStageIndex((prev) => (prev === index ? null : index));

      const target = stageRefs.current[index];
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -200, duration: 1, easing: (t) => 1 - Math.pow(1 - t, 3) });
      }
    },
    [lenis],
  );

  useEffect(() => {
    if (!lenisReady || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      stageRefs.current = stageRefs.current.slice(0, stages.length);

      stageRefs.current.forEach((stage, index) => {
        ScrollTrigger.create({
          trigger: stage,
          start: "top center",
          end: "bottom center",
          onEnter: () => setHighlightedStageIndex(index),
          onEnterBack: () => setHighlightedStageIndex(index),
        });
      });

      if (prefersReducedMotion) {
        stageRefs.current.forEach((stage) => {
          stage.style.opacity = "1";
          stage.style.transform = "none";
          stage.style.filter = "none";
        });
        return;
      }

      const headerChildren = containerRef.current?.querySelectorAll(".workflow-header > *");
      if (headerChildren && headerChildren.length) {
        gsap.from(headerChildren, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });
      }

      gsap.from(stageRefs.current, {
        opacity: 0,
        x: -48,
        filter: "blur(18px)",
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        onComplete: () => {
          stageRefs.current.forEach((stage) => {
            stage.style.filter = "none";
          });
        },
      });

    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [lenisReady, prefersReducedMotion]);

  const gradientOverlay = useMemo(
    () =>
      `radial-gradient(circle at 10% 15%, rgba(79,70,229,0.22) 0%, transparent 42%),
       radial-gradient(circle at 82% 72%, rgba(192,38,211,0.18) 0%, transparent 46%),
       radial-gradient(circle at 55% 100%, rgba(34,211,238,0.12) 0%, transparent 56%),
       linear-gradient(180deg, rgba(6,7,20,0.97) 0%, rgba(14,16,36,0.88) 55%, rgba(6,7,20,0.96) 100%)`,
    [],
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden px-4 py-24 md:px-8 lg:px-12"
      aria-labelledby="briefing-workflow-heading"
    >
      <div
        className="absolute inset-0 -z-10 opacity-95"
        style={{ background: gradientOverlay }}
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 lg:flex-row lg:gap-12">
        <div className="workflow-header max-w-xl space-y-8 lg:sticky lg:top-28 lg:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-white/50">
            Workflow Intelligence
          </p>
          <h2
            id="briefing-workflow-heading"
            className="text-4xl font-black tracking-tight text-white md:text-5xl"
          >
            The Briefing Runway
          </h2>
          <p className="text-lg text-white/70 md:text-xl">
            Every stage hands crafted intelligence to the next. Scroll or tap to open the drawers—each
            reveal shows exactly how the briefing engine removes bottlenecks without sacrificing brand DNA.
          </p>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-60px_rgba(8,10,25,0.9)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-white">
                <Layers className="h-6 w-6 text-white/80" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.38em] text-white/60">
                    Connected Pipeline
                  </p>
                  <p className="text-lg font-semibold text-white/95">Brief → Narrative → Style → Boards</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Data flows forward automatically. Creative, strategy, and production stay in sync without
              juggling multiple tools or briefing formats.
            </p>
            <button
              type="button"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition-all duration-300 hover:-translate-y-[2px] hover:border-white/25 hover:text-white"
            >
              View architectural doc
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

      <div className="flex flex-1 flex-col gap-16 lg:flex-row lg:items-start">
        <ol className="relative flex-1 space-y-10" role="list">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === stages.length - 1;
            const isHighlighted = highlightedStageIndex === index;
            const isExpanded = expandedStageIndex === index;
            const lineColor = isHighlighted ? stage.accentSoft : "rgba(116,123,180,0.25)";

            return (
              <li
                key={stage.id}
                ref={(el) => registerStageRef(el, index)}
                className="relative"
              >
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[1.5rem] top-[calc(100%+0.6rem)] hidden h-14 w-px lg:block"
                    style={{ background: lineColor }}
                  />
                )}

                <button
                  type="button"
                  onClick={() => handleStageSelect(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`${stage.id}-details`}
                  className={cn(
                    "group relative flex w-full flex-col gap-5 rounded-[22px] border px-7 py-7 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    isHighlighted ? "border-white/25 ring-offset-0" : "border-white/12",
                  )}
                  style={{
                    background: isHighlighted
                      ? `linear-gradient(140deg, ${stage.accent}15 0%, ${stage.accentSoft} 80%)`
                      : "rgba(17, 18, 33, 0.78)",
                    boxShadow: isHighlighted
                      ? `0 26px 70px -40px ${stage.accentSoft}`
                      : "0 12px 40px -32px rgba(0,0,0,0.85)",
                  }}
                >
                  <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.42em] text-white/45">
                    <span>{stage.step}</span>
                    {stage.timelineLabel && (
                      <span className="hidden text-white/35 sm:inline">{stage.timelineLabel}</span>
                    )}
                  </div>
                  <div className="flex items-start gap-5">
                    <span
                      className={cn(
                        "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl border border-white/12 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105",
                        isHighlighted ? "bg-white/[0.14]" : "bg-white/[0.08]",
                      )}
                      style={{
                        boxShadow: isHighlighted
                          ? `0 28px 60px -32px ${stage.accentSoft}`
                          : `0 12px 32px -30px rgba(0,0,0,0.7)`,
                      }}
                    >
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">{stage.title}</h3>
                      <p className="text-sm text-white/65 md:text-base">{stage.summary}</p>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.33em] text-white/60">
                        <Orbit className="h-4 w-4 text-white/35" aria-hidden="true" />
                        {stage.highlight}
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500",
                      isHighlighted ? "opacity-100" : "opacity-0",
                    )}
                    style={{
                      background: `radial-gradient(circle at 0% 0%, ${stage.accentSoft} 0%, transparent 55%)`,
                    }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  role="region"
                  id={`${stage.id}-details`}
                  aria-live={isExpanded ? "polite" : "off"}
                  aria-hidden={!isExpanded}
                  className={cn(
                    "grid overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.045] px-7 py-7 text-white/75 transition-all duration-600 backdrop-blur-[18px]",
                    isExpanded ? "mt-6 max-h-[1200px] opacity-100" : "max-h-0 opacity-0",
                  )}
                  style={{
                    boxShadow: isExpanded
                      ? `0 80px 160px -90px ${stage.accentSoft}, inset 0 1px 0 rgba(255,255,255,0.05)`
                      : "none",
                  }}
                >
                  {isExpanded && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-2xl font-semibold text-white md:text-3xl">{stage.title}</h4>
                        <span className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                          {stage.step}
                        </span>
                      </div>
                      <p className="text-base text-white/70 md:text-lg">{stage.description}</p>

                      <div className="grid gap-4 md:grid-cols-2">
                        {stage.outputs.map((output) => (
                          <div
                            key={`${stage.id}-${output.label}`}
                            className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 text-white/75 shadow-[0_28px_60px_-45px_rgba(0,0,0,0.85)]"
                            style={{ boxShadow: `0 32px 70px -48px ${stage.accentSoft}` }}
                          >
                            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">{output.label}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{output.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4 rounded-2xl border border-white/12 bg-black/35 p-5 backdrop-blur-xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
                          Deliverables
                        </p>
                        <ul className="space-y-2 text-sm text-white/75 md:text-base">
                          {stage.deliverables.map((deliverable) => (
                            <li key={`${stage.id}-${deliverable}`} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/55" aria-hidden="true" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-sm text-white/75 shadow-[0_24px_55px_-45px_rgba(0,0,0,0.9)]">
                        <p className="font-semibold text-white/85">{stage.summary}</p>
                      </div>

                      <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-5 text-sm text-white/80 shadow-[0_26px_60px_-45px_rgba(0,0,0,0.9)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                          Insider insight
                        </p>
                        <p className="mt-2 leading-relaxed">{stage.insight}</p>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      </div>
    </section>
  );
}
