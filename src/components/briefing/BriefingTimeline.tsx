import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { stageMetadata, StageMetadata } from "./sections/section-data";
import { HeroBriefSection } from "./sections/HeroBriefSection";
import { NeuralSynthesisSection } from "./sections/NeuralSynthesisSection";
import { StyleSelectionSection } from "./sections/StyleSelectionSection";
import { StoryboardAssemblySection } from "./sections/StoryboardAssemblySection";
import { StudiosHandoffSection } from "./sections/StudiosHandoffSection";
import { useAnalytics } from "@/hooks/useAnalytics";
import { cn } from "@/lib/utils";

type SectionComponentProps = {
  stage: StageMetadata;
  onStageEnter: (stageId: string) => void;
  onStageLeave: (stageId: string) => void;
};

const stageComponentMap: Record<StageMetadata["id"], (props: SectionComponentProps) => JSX.Element> = {
  "stage-hero": (props) => <HeroBriefSection {...props} />,
  "stage-synthesis": (props) => <NeuralSynthesisSection {...props} />,
  "stage-styles": (props) => <StyleSelectionSection {...props} />,
  "stage-storyboard": (props) => <StoryboardAssemblySection {...props} />,
  "stage-handoff": (props) => <StudiosHandoffSection {...props} />
};

export function BriefingTimeline() {
  const [activeStage, setActiveStage] = useState<StageMetadata["id"]>(stageMetadata[0].id);
  const [progressOffset, setProgressOffset] = useState<number>(32);
  const { trackEvent } = useAnalytics();

  const activeIndex = useMemo(
    () => stageMetadata.findIndex((stage) => stage.id === activeStage),
    [activeStage]
  );

  const totalStages = stageMetadata.length;
  const activeStageMeta = stageMetadata[activeIndex];
  const isLastStage = activeIndex === totalStages - 1;
  const nextStageMeta = stageMetadata[(activeIndex + 1) % totalStages];

  const handleStageEnter = useCallback(
    (stageId: string) => {
      setActiveStage(stageId as StageMetadata["id"]);
      trackEvent({
        action: "timeline_stage_view",
        category: "briefing_timeline",
        label: stageId
      });
    },
    [trackEvent]
  );

  const handleStageLeave = useCallback(
    (stageId: string) => {
      if (stageId === activeStage) {
        // When leaving the active stage, keep progress until next stage claims it.
        // No-op to avoid flicker.
      }
    },
    [activeStage]
  );

  const handleAdvance = useCallback(() => {
    const targetIndex = isLastStage ? 0 : Math.min(activeIndex + 1, totalStages - 1);
    const targetStage = stageMetadata[targetIndex];
    const target = document.getElementById(targetStage.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      trackEvent({
        action: isLastStage ? "timeline_restart" : "timeline_manual_advance",
        category: "briefing_timeline",
        label: targetStage.id
      });
    }
  }, [activeIndex, isLastStage, totalStages, trackEvent]);

  // OPTIMIZATION: Store latest handleAdvance callback in ref to avoid re-registering event listener
  const handleAdvanceRef = useRef(handleAdvance);
  useEffect(() => {
    handleAdvanceRef.current = handleAdvance;
  }, [handleAdvance]);

  // OPTIMIZED: Event listener registered only once with empty dependencies
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleAdvanceRef.current(); // Always calls latest version via ref
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []); // Empty dependencies - registered only once

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let container: HTMLElement | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let rafId: number | null = null;

    const computeOffset = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const gutter = (window.innerWidth - rect.width) / 2;
      const offset = Math.max(28, gutter + 24);
      setProgressOffset((prev) => (Math.abs(prev - offset) < 0.5 ? prev : offset));
    };

    const resolveContainer = () => {
      container =
        document.querySelector<HTMLElement>("#stage-hero .timeline-section-container") ??
        document.querySelector<HTMLElement>(".timeline-section-container");

      if (!container) {
        rafId = window.requestAnimationFrame(resolveContainer);
        return;
      }

      computeOffset();

      if ("ResizeObserver" in window && container) {
        resizeObserver = new ResizeObserver(() => computeOffset());
        resizeObserver.observe(container);
      }

      window.addEventListener("resize", computeOffset);
    };

    resolveContainer();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      resizeObserver?.disconnect();
      window.removeEventListener("resize", computeOffset);
    };
  }, []);

  return (
    <div className="relative">
      {/* Step counter removed per user request */}

      <div className="flex flex-col">
        {stageMetadata.map((stage) => {
          const Component = stageComponentMap[stage.id];
          return (
            <Component
              key={stage.id}
              stage={stage}
              onStageEnter={handleStageEnter}
              onStageLeave={handleStageLeave}
            />
          );
        })}
      </div>
    </div>
  );
}
