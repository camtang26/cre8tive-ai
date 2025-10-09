import { forwardRef } from "react";
import { briefingPalette } from "./palette";

interface SceneCard {
  id: number;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface SceneCardsProps {
  className?: string;
}

// Luxury Harbours scene data with premium gradients
const scenes: SceneCard[] = [
  {
    id: 1,
    title: "Golden Hour Arrival",
    description: "Marina sunset elegance",
    gradientFrom: "#F59E0B", // Amber
    gradientTo: "#EF4444"   // Rose
  },
  {
    id: 2,
    title: "Azure Horizons",
    description: "Open water serenity",
    gradientFrom: "#0EA5E9", // Sky blue
    gradientTo: "#8B5CF6"   // Violet
  },
  {
    id: 3,
    title: "Champagne Moments",
    description: "Deck lifestyle reveal",
    gradientFrom: "#FBBF24", // Gold
    gradientTo: "#F59E0B"   // Amber
  },
  {
    id: 4,
    title: "Coastal Refinement",
    description: "Harbourside luxury",
    gradientFrom: "#06B6D4", // Cyan
    gradientTo: "#3B82F6"   // Blue
  },
  {
    id: 5,
    title: "Elevated Experience",
    description: "Premium brand reveal",
    gradientFrom: "#8B5CF6", // Purple
    gradientTo: "#EC4899"   // Pink
  }
];

export const SceneCards = forwardRef<HTMLDivElement, SceneCardsProps>(
  ({ className = "" }, ref) => {
    return (
      <div ref={ref} className={`flex gap-3 ${className}`}>
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            data-scene-index={index}
            className="scene-card relative flex-1 min-w-[180px] group opacity-0"
            style={{
              transformOrigin: "center center"
            }}
          >
            {/* Holographic wireframe (appears first) */}
            <div
              className="scene-wireframe absolute inset-0 rounded-2xl opacity-0"
              style={{
                border: `1px solid ${briefingPalette.holographic.cyan}60`,
                boxShadow: `0 0 20px ${briefingPalette.holographic.cyan}40, inset 0 0 20px ${briefingPalette.holographic.cyan}20`
              }}
            />

            {/* Card container */}
            <div
              className="scene-container relative h-full rounded-2xl border overflow-hidden opacity-0"
              style={{
                borderColor: `${briefingPalette.holographic.cyan}30`,
                background: `linear-gradient(135deg, rgba(13,15,32,0.8) 0%, rgba(18,20,40,0.6) 100%)`,
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Gradient thumbnail */}
              <div
                className="scene-thumbnail relative aspect-[16/10] overflow-hidden opacity-0"
                style={{
                  background: `linear-gradient(135deg, ${scene.gradientFrom}40, ${scene.gradientTo}60)`,
                  position: 'relative'
                }}
              >
                {/* Abstract pattern overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${scene.gradientFrom}20 10px, ${scene.gradientFrom}20 20px)`
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgba(13,15,32,0.9) 100%)`
                  }}
                />

                {/* Scene number - large centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-6xl font-black opacity-20"
                    style={{
                      color: scene.gradientFrom,
                      textShadow: `0 0 40px ${scene.gradientFrom}80`
                    }}
                  >
                    {scene.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 space-y-2">
                {/* Scene number badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: `${briefingPalette.holographic.cyan}20`,
                    color: briefingPalette.holographic.cyan,
                    border: `1px solid ${briefingPalette.holographic.cyan}40`
                  }}
                >
                  <span>Scene</span>
                  <span>{scene.id}</span>
                </div>

                {/* Title */}
                <h4
                  className="text-base font-bold tracking-tight leading-tight"
                  style={{
                    color: "white",
                    textShadow: `0 2px 10px ${briefingPalette.holographic.cyan}40`
                  }}
                >
                  {scene.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-white/70 leading-snug">
                  {scene.description}
                </p>
              </div>

              {/* Holographic shimmer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, ${briefingPalette.holographic.cyan}40 50%, transparent 100%)`,
                  backgroundSize: "200% 200%",
                  animation: "shimmer 2s ease-in-out infinite"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
);

SceneCards.displayName = "SceneCards";

// Export utility to get card refs
export const getSceneCardRefs = (containerElement: HTMLDivElement | null) => {
  if (!containerElement) {
    return { cards: [], wireframes: [], containers: [], thumbnails: [] };
  }

  const cards = Array.from(containerElement.querySelectorAll(".scene-card")) as HTMLDivElement[];
  const wireframes = Array.from(containerElement.querySelectorAll(".scene-wireframe")) as HTMLDivElement[];
  const containers = Array.from(containerElement.querySelectorAll(".scene-container")) as HTMLDivElement[];
  const thumbnails = Array.from(containerElement.querySelectorAll(".scene-thumbnail")) as HTMLDivElement[];

  return { cards, wireframes, containers, thumbnails };
};
