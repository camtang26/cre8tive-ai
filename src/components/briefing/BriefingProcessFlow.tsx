import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Handshake,
  Layers,
  Orbit,
  Palette,
  PenTool,
  Sparkles,
  X,
} from "lucide-react";
import { briefingPalette } from "@/components/briefing/palette";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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

type LayerPosition = "current" | "next" | "next2" | "previous";

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
      "Teams describe this step as completing a cinematic treatment—not a spreadsheet—so strategists stay engaged from minute one.",
  },
  {
    id: "ai-synopsis",
    step: "Step 02",
    title: "AI Synopsis & Scene Map",
    summary: "Narrative engine drafts the synopsis, pacing, and shot-by-shot breakdown.",
    description:
      "Cre8tive AI interprets the brief to craft an editable storyline with tone guidance, hero shots, and alternates ready for review.",
    timelineLabel: "Story structuring",
    icon: Sparkles,
    accent: briefingPalette.colors.fuchsia,
    accentSoft: `${briefingPalette.colors.fuchsia}33`,
    highlight: "Narrative locked-in",
    deliverables: [
      "Editable synopsis with headline & hook",
      "Scene-by-scene pacing plan",
      "Alternate storyline suggestions",
    ],
    outputs: [
      { label: "Narrative beats", value: "6–10 scenes drafted" },
      { label: "Feedback loop", value: "Request alternates instantly" },
    ],
    insight:
      "Stakeholders can request adjustments before design ever spins up—cutting entire approval cycles out of the process.",
  },
  {
    id: "choose-style",
    step: "Step 03",
    title: "Choose Your Visual Style",
    summary: "Instantly preview nine predetermined aesthetics tailored to your brand voice.",
    description:
      "Creative teams toggle between Minimalist, Cinematic, Futuristic, and more. Each style is pre-curated and brand-safe, locking palette, typography, and motion language.",
    timelineLabel: "Creative selection",
    icon: Palette,
    accent: briefingPalette.colors.indigo,
    accentSoft: `${briefingPalette.colors.indigo}33`,
    highlight: "Aesthetic locked-in",
    deliverables: [
      "Nine pre-approved style previews",
      "Brand-safe color & typography mapping",
      "Version control for quick approvals",
    ],
    outputs: [
      { label: "Visual styles", value: "9 curated options" },
      { label: "Consistency", value: "Palette & type locked in" },
    ],
    insight:
      "Style cards behave like a live brand playbook—marketing sees polish immediately and buy-in happens before production costs accrue.",
  },
  {
    id: "ai-storyboard",
    step: "Step 04",
    title: "AI Generates Your Storyboard",
    summary: "Scene-by-scene frames, narration, and motion cues render automatically.",
    description:
      "Once narrative and aesthetic are approved, Cre8tive AI produces boards with director notes, camera moves, channel crops, and voice-over cues.",
    timelineLabel: "Realtime build",
    icon: PenTool,
    accent: briefingPalette.colors.cyan,
    accentSoft: `${briefingPalette.colors.cyan}26`,
    highlight: "Storyboard drafted automatically",
    deliverables: [
      "Scene-by-scene boards with director notes",
      "Channel crops (16:9, 1:1, 9:16) auto-prepped",
      "On-brand copy & motion prompts",
    ],
    outputs: [
      { label: "Shots generated", value: "12–18 frames/brief" },
      { label: "Time saved", value: "96% faster vs manual" },
    ],
    insight:
      "Directors never start from a blank frame—technical cues and copy alignment arrive with the storyboard, ready for Studios.",
  },
  {
    id: "review-handoff",
    step: "Step 05",
    title: "Review & Handoff to Studios",
    summary: "Final QA, export to PDF, and one-click handoff to Cre8tive Studios.",
    description:
      "Teams annotate, approve, and share beautifully formatted PDFs. Production pipelines kick off instantly with structured payloads.",
    timelineLabel: "Approval + export",
    icon: Handshake,
    accent: briefingPalette.colors.orange,
    accentSoft: `${briefingPalette.colors.orange}26`,
    highlight: "Production-ready in minutes",
    deliverables: [
      "Annotated PDF for stakeholders",
      "Shot list & asset checklist",
      "Studios integration handoff",
    ],
    outputs: [
      { label: "Deliverables", value: "Storyboard PDF + asset kit" },
      { label: "Next action", value: "Studios production kickoff" },
    ],
    insight:
      "Ops teams love the zero-friction baton pass—Studios receives everything they need in one payload with no reformatting.",
  },
];

const layerOrder: Record<LayerPosition, number> = {
  current: 40,
  next: 30,
  next2: 20,
  previous: 10,
};

type StackItem = {
  stage: StageConfig;
  index: number;
  position: LayerPosition;
};

function getLayerStyle(
  position: LayerPosition,
  accentSoft: string,
  prefersReducedMotion: boolean,
): React.CSSProperties {
  const baseTransform = "translate(-50%, -50%)";
  const transitionBase = prefersReducedMotion
    ? "opacity 0.3s ease, transform 0.3s ease"
    : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease";

  if (prefersReducedMotion) {
    const reducedOffsets: Record<LayerPosition, { opacity: number; translateX: number; translateY: number }> = {
      current: { opacity: 1, translateX: 0, translateY: 0 },
      next: { opacity: 0.6, translateX: 14, translateY: 14 },
      next2: { opacity: 0.34, translateX: 22, translateY: 24 },
      previous: { opacity: 0.4, translateX: -16, translateY: 14 },
    };
    const reduced = reducedOffsets[position];
    return {
      zIndex: layerOrder[position],
      opacity: reduced.opacity,
      transform: `${baseTransform} translate(${reduced.translateX}px, ${reduced.translateY}px)`,
      transition: transitionBase,
      boxShadow: position === "current" ? `0 26px 70px -50px ${accentSoft}` : undefined,
    };
  }

  const transforms: Record<LayerPosition, { transform: string; opacity: number; filter?: string }> = {
    current: {
      transform: "translate3d(0px, 0px, 120px) rotateX(0deg) scale(1)",
      opacity: 1,
      filter: "drop-shadow(0 40px 120px rgba(10,12,26,0.55))",
    },
    next: {
      transform: "translate3d(78px, 32px, -90px) rotateX(-12deg) rotateY(-4deg) scale(0.9)",
      opacity: 0.6,
      filter: "blur(0.4px) saturate(105%)",
    },
    next2: {
      transform: "translate3d(120px, 56px, -170px) rotateX(-16deg) rotateY(-6deg) scale(0.82)",
      opacity: 0.34,
      filter: "blur(0.7px) saturate(92%)",
    },
    previous: {
      transform: "translate3d(-88px, 28px, -130px) rotateX(-10deg) rotateY(10deg) scale(0.88)",
      opacity: 0.42,
      filter: "blur(0.5px) saturate(95%)",
    },
  };

  const config = transforms[position];
  return {
    zIndex: layerOrder[position],
    opacity: config.opacity,
    transform: `${baseTransform} ${config.transform}`,
    transition: transitionBase,
    filter: config.filter,
    boxShadow: position === "current" ? `0 48px 120px -70px ${accentSoft}` : undefined,
  };
}

function useStackedStages(activeIndex: number, prefersReducedMotion: boolean): StackItem[] {
  return useMemo(() => {
    const total = stages.length;
    return stages
      .map<StackItem | null>((stage, index) => {
        const forwardDistance = (index - activeIndex + total) % total;
        const backwardDistance = (activeIndex - index + total) % total;
        let position: LayerPosition | null = null;
        if (forwardDistance === 0) position = "current";
        else if (forwardDistance === 1) position = "next";
        else if (forwardDistance === 2) position = "next2";
        else if (backwardDistance === 1) position = "previous";
        if (!position) return null;
        return { stage, index, position };
      })
      .filter((item): item is StackItem => item !== null)
      .sort((a, b) => layerOrder[b.position] - layerOrder[a.position]);
  }, [activeIndex, prefersReducedMotion]);
}

export function BriefingProcessFlow() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const stackedStages = useStackedStages(activeIndex, prefersReducedMotion);
  const activeStage = stages[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % stages.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + stages.length) % stages.length);
  const handleSelect = (index: number) => setActiveIndex(index);

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-24 md:px-8 lg:px-12"
      aria-labelledby="briefing-workflow-heading"
      role="region"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      <div
        className="absolute inset-0 -z-10 opacity-95"
        style={{
          background: `radial-gradient(circle at 10% 15%, rgba(79,70,229,0.22) 0%, transparent 42%),
          radial-gradient(circle at 82% 72%, rgba(192,38,211,0.18) 0%, transparent 46%),
          radial-gradient(circle at 55% 100%, rgba(34,211,238,0.12) 0%, transparent 56%),
          linear-gradient(180deg, rgba(6,7,20,0.97) 0%, rgba(14,16,36,0.88) 55%, rgba(6,7,20,0.96) 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 lg:flex-row lg:gap-12">
        <div className="workflow-header max-w-xl space-y-8 lg:sticky lg:top-24 lg:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-white/50">Workflow Intelligence</p>
          <h2 id="briefing-workflow-heading" className="text-4xl font-black tracking-tight text-white md:text-5xl">
            The Briefing Runway
          </h2>
          <p className="text-lg text-white/70 md:text-xl">
            Navigate the stack—each card reveals a briefing milestone while future steps hover in view. Open the dossier
            to explore deliverables and metrics for the active stage.
          </p>
          <div className="hidden lg:flex rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-60px_rgba(8,10,25,0.9)] backdrop-blur-xl">
            <div className="flex items-start gap-3 text-white">
              <Layers className="h-6 w-6 text-white/80" aria-hidden="true" />
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.38em] text-white/60">Connected Pipeline</p>
                <p className="text-lg font-semibold text-white/95">Brief → Narrative → Style → Boards</p>
                <p className="text-sm text-white/70">
                  Data flows forward automatically. Strategy, creative, and production stay in sync without duplicating
                  work across tools.
                </p>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition-all duration-300 hover:-translate-y-[2px] hover:border-white/25 hover:text-white"
                >
                  View architectural doc
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-12 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-start lg:gap-16 lg:space-y-0">
          <div className="space-y-10">
            <div
              className="relative mx-auto w-full max-w-[720px] lg:mx-0 lg:max-w-none"
              style={{ perspective: prefersReducedMotion ? undefined : "1600px" }}
            >
              <div className="relative h-[440px] sm:h-[480px]">
                {stackedStages.map(({ stage, index, position }) => {
                  const style = getLayerStyle(position, stage.accentSoft, prefersReducedMotion);
                  const isCurrent = position === "current";
                  const isClickable = position !== "current";

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => (isClickable ? handleSelect(index) : undefined)}
                      tabIndex={isCurrent ? 0 : -1}
                      aria-label={`${stage.step}: ${stage.title}`}
                      aria-current={isCurrent}
                      className={cn(
                        "group absolute left-1/2 top-1/2 w-[88%] max-w-[520px] overflow-hidden rounded-[26px] border border-white/12 bg-black/70 p-6 text-left shadow-xl backdrop-blur-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                        isCurrent ? "cursor-default" : "cursor-pointer",
                      )}
                      style={{
                        ...style,
                        background: `linear-gradient(140deg, ${stage.accentSoft}, rgba(12,14,32,0.78))`,
                      }}
                    >
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.42em] text-white/60">
                        <span>{stage.step}</span>
                        {stage.timelineLabel && (
                          <span className="hidden text-white/40 sm:inline">{stage.timelineLabel}</span>
                        )}
                      </div>
                      <div className="mt-5 flex items-start gap-4">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-black/20 text-white shadow-[0_18px_34px_-22px_rgba(0,0,0,0.9)]">
                          <stage.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-semibold text-white md:text-2xl">{stage.title}</h3>
                          <p className="text-sm text-white/70 md:text-base">{stage.summary}</p>
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.33em] text-white/65">
                            <Orbit className="h-4 w-4 text-white/45" aria-hidden="true" />
                            {stage.highlight}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
                    {activeStage.step}
                  </span>
                  <p className="text-white/70">
                    {activeIndex + 1} / {stages.length}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-200 hover:-translate-y-[2px] hover:border-white/30 hover:bg-white/[0.12]"
                    aria-label="Go to previous stage"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <div className="flex items-center gap-2">
                    {stages.map((stage, index) => (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => handleSelect(index)}
                        aria-label={`Select ${stage.step}`}
                        aria-current={index === activeIndex}
                        className={cn(
                          "h-2.5 w-2.5 rounded-full transition-all duration-300",
                          index === activeIndex ? "bg-white" : "bg-white/25 hover:bg-white/50",
                        )}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-200 hover:-translate-y-[2px] hover:border-white/30 hover:bg-white/[0.12]"
                    aria-label="Go to next stage"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-white/25 hover:text-white lg:hidden"
              onClick={() => setModalOpen(true)}
            >
              Open stage dossier
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden h-full lg:block">
            <StageDossier stage={activeStage} />
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end bg-black/70 backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeStage.step} details`}
        >
          <div className="relative w-full rounded-t-[28px] border border-white/12 bg-black/90 p-6">
            <button
              type="button"
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white hover:bg-white/[0.15]"
              onClick={() => setModalOpen(false)}
              aria-label="Close stage details"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <StageDossier stage={activeStage} />
          </div>
        </div>
      )}
    </section>
  );
}

function StageDossier({ stage }: { stage: StageConfig }) {
  return (
    <article className="space-y-7 rounded-[26px] border border-white/12 bg-white/[0.06] p-7 text-white/80 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/45">{stage.step}</p>
        <h3 className="text-3xl font-semibold text-white md:text-4xl">{stage.title}</h3>
        <p className="text-base text-white/70 md:text-lg">{stage.description}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {stage.outputs.map((output) => (
          <div
            key={`${stage.id}-${output.label}`}
            className="rounded-2xl border border-white/12 bg-white/[0.07] p-4 text-white shadow-[0_26px_60px_-48px_rgba(0,0,0,0.85)]"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">{output.label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{output.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-2xl border border-white/12 bg-black/35 p-5 backdrop-blur-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">Deliverables</p>
        <ul className="space-y-2 text-sm text-white/75 md:text-base">
          {stage.deliverables.map((deliverable) => (
            <li key={`${stage.id}-${deliverable}`} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/55" aria-hidden="true" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-5 text-sm text-white/80 shadow-[0_28px_60px_-48px_rgba(0,0,0,0.85)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">Insider insight</p>
        <p className="mt-2 leading-relaxed text-white/85">{stage.insight}</p>
      </div>
    </article>
  );
}

export default BriefingProcessFlow;
