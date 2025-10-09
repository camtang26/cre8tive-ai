import { useRef, forwardRef } from "react";
import { briefingPalette } from "./palette";

export interface SynopsisPanelProps {
  className?: string;
}

// Luxury Harbours synopsis data (aligned with Frame 5 storyboard)
const synopsisData = {
  title: "Luxury Harbours: Elevated Living",
  synopsis: [
    "Where azure waters meet refined taste,",
    "a lifestyle emerges beyond the ordinary.",
    "Premium yacht experiences curated for the discerning,",
    "moments crafted to perfection.",
    "Luxury Harbours redefines coastal elegance",
    "for those who expect excellence."
  ]
};

export const SynopsisPanel = forwardRef<HTMLDivElement, SynopsisPanelProps>(
  ({ className = "" }, ref) => {
    const titleWordsRef = useRef<HTMLSpanElement[]>([]);
    const synopsisWordsRef = useRef<HTMLSpanElement[]>([]);

    // Split title into words for animation
    const titleWords = synopsisData.title.split(" ");

    return (
      <div
        ref={ref}
        className={`relative rounded-3xl border overflow-hidden ${className}`}
        style={{
          borderColor: `${briefingPalette.indigo.DEFAULT}40`,
          background: `linear-gradient(135deg, rgba(13,15,32,0.95) 0%, rgba(18,20,40,0.92) 100%)`,
          backdropFilter: "blur(20px)",
          boxShadow: `0 0 40px ${briefingPalette.indigo.DEFAULT}20, inset 0 0 60px ${briefingPalette.holographic.cyan}10`
        }}
      >
        {/* Holographic shimmer overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${briefingPalette.holographic.cyan}20 50%, transparent 100%)`,
            backgroundSize: "200% 200%",
            animation: "shimmer 3s ease-in-out infinite"
          }}
        />

        {/* Content */}
        <div className="relative p-8 space-y-6">
          {/* AI Status Badge */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                borderColor: `${briefingPalette.holographic.cyan}40`,
                background: `${briefingPalette.holographic.cyan}15`
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: briefingPalette.holographic.cyan }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: briefingPalette.holographic.cyan }}
              >
                AI Synthesizing
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-black tracking-tight text-white leading-tight">
            {titleWords.map((word, index) => (
              <span
                key={index}
                ref={(el) => el && (titleWordsRef.current[index] = el)}
                className="inline-block mr-3 opacity-0"
                style={{
                  textShadow: `0 2px 20px ${briefingPalette.holographic.cyan}60`
                }}
              >
                {word}
              </span>
            ))}
          </h3>

          {/* Synopsis Lines */}
          <div className="space-y-3">
            {synopsisData.synopsis.map((line, lineIndex) => {
              const words = line.split(" ");
              return (
                <p
                  key={lineIndex}
                  className="text-lg leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {words.map((word, wordIndex) => {
                    const globalIndex = synopsisData.synopsis
                      .slice(0, lineIndex)
                      .reduce((acc, l) => acc + l.split(" ").length, 0) + wordIndex;

                    return (
                      <span
                        key={wordIndex}
                        ref={(el) => el && (synopsisWordsRef.current[globalIndex] = el)}
                        className="inline-block mr-2 opacity-0"
                      >
                        {word}
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </div>

          {/* Metadata Footer */}
          <div className="pt-4 flex items-center gap-6 text-sm opacity-60">
            <div className="flex items-center gap-2">
              <span className="text-white/60">Duration:</span>
              <span className="text-white/80 font-semibold">60 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Scenes:</span>
              <span className="text-white/80 font-semibold">5 key moments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Tone:</span>
              <span className="text-white/80 font-semibold">Luxury · Refined</span>
            </div>
          </div>
        </div>

        {/* Expose word refs for external animation */}
        <div className="hidden" data-title-words={titleWordsRef.current.length} data-synopsis-words={synopsisWordsRef.current.length} />
      </div>
    );
  }
);

SynopsisPanel.displayName = "SynopsisPanel";

// Export refs interface for parent component
export interface SynopsisPanelRefs {
  titleWords: HTMLSpanElement[];
  synopsisWords: HTMLSpanElement[];
}

// Utility to extract word refs (call after component mounts)
export const getSynopsisWordRefs = (panelElement: HTMLDivElement | null): SynopsisPanelRefs => {
  if (!panelElement) {
    return { titleWords: [], synopsisWords: [] };
  }

  const titleWords = Array.from(panelElement.querySelectorAll("h3 > span")) as HTMLSpanElement[];
  const synopsisWords = Array.from(panelElement.querySelectorAll("p > span")) as HTMLSpanElement[];

  return { titleWords, synopsisWords };
};
