import { StyleCard } from "./StyleCard";
import { briefingColors } from "@/pages/BriefingEngine";

const visualStyles = [
  {
    id: 1,
    name: "Minimalistic & Modern",
    description: "Clean lines, white space, geometric precision",
    gradient: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
    textColor: "#333333"
  },
  {
    id: 2,
    name: "Bold & Vibrant",
    description: "Saturated colors, high contrast, energetic compositions",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #6bcf7f 100%)",
    textColor: "#ffffff"
  },
  {
    id: 3,
    name: "Cinematic & Dramatic",
    description: "Dark moody tones, film noir, dramatic lighting",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
    textColor: "#ffffff"
  },
  {
    id: 4,
    name: "Playful & Animated",
    description: "Bouncy shapes, bright colors, cartoon-like energy",
    gradient: "linear-gradient(135deg, #ff9ff3 0%, #ffd480 50%, #a8e6cf 100%)",
    textColor: "#333333"
  },
  {
    id: 5,
    name: "Futuristic & Tech-Driven",
    description: "Neon blues, holographic effects, digital circuits",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    textColor: "#ffffff"
  },
  {
    id: 6,
    name: "Retro & Vintage",
    description: "Warm sepia, 70s aesthetic, nostalgic vibes",
    gradient: "linear-gradient(135deg, #d4a574 0%, #e8c4a0 50%, #f5deb3 100%)",
    textColor: "#5a3e2b"
  },
  {
    id: 7,
    name: "Documentary & Realistic",
    description: "Neutral tones, photographic quality, authentic feel",
    gradient: "linear-gradient(135deg, #8b9a91 0%, #a8b5a7 100%)",
    textColor: "#ffffff"
  },
  {
    id: 8,
    name: "Abstract & Artistic",
    description: "Paint splashes, creative chaos, artistic expression",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 33%, #ffd93d 66%, #6bcf7f 100%)",
    textColor: "#ffffff"
  }
];

export const VisualStylesGallery = () => {
  return (
    <section className="py-20 px-4" id="visual-styles">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none text-white mb-6">
            Choose Your Creative Style
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            8 Stunning Visual Styles to Bring Your Storyboard to Life
          </p>
          <p className="text-sm text-white/40 mt-4 italic">
            Placeholder visuals - awaiting actual style example assets
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visualStyles.map((style, index) => (
            <StyleCard
              key={style.id}
              name={style.name}
              description={style.description}
              gradient={style.gradient}
              textColor={style.textColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Context */}
        <div
          className="mt-12 p-6 rounded-xl border text-center"
          style={{
            background: `${briefingColors.purple.DEFAULT}10`,
            borderColor: `${briefingColors.purple.DEFAULT}40`
          }}
        >
          <p className="text-white/80 text-lg">
            Each style is crafted to match your brand's unique personality and campaign goals.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Select during briefing process → AI generates storyboard in chosen style → Delivered as professional PDF
          </p>
        </div>
      </div>
    </section>
  );
};
