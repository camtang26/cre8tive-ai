import { useEffect, useRef } from "react";
import { StyleCard } from "./StyleCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenisReady } from "@/hooks/useLenisReady";
import { briefingPalette } from "./palette";

gsap.registerPlugin(ScrollTrigger);

const visualStyles = [
  {
    id: 1,
    name: "Minimalist",
    description: "Clean lines, white space, elegant simplicity",
    imagePath: "/briefing-engine/visual-styles/Minimalist.webp",
    textColor: "#333333",
    accent: briefingPalette.indigo.DEFAULT
  },
  {
    id: 2,
    name: "Bold & Vibrant",
    description: "Saturated colors, high contrast, energetic compositions",
    imagePath: "/briefing-engine/visual-styles/BoldVibrant.webp",
    textColor: "#ffffff",
    accent: briefingPalette.fuchsia.DEFAULT
  },
  {
    id: 3,
    name: "Cinematic",
    description: "Epic cosmic scenes, dramatic lighting, Hollywood feel",
    imagePath: "/briefing-engine/visual-styles/CinematicDramatic.webp",
    textColor: "#ffffff",
    accent: briefingPalette.cyan.DEFAULT
  },
  {
    id: 4,
    name: "Playful & Animated",
    description: "3D whimsy, soft pastels, dreamlike charm",
    imagePath: "/briefing-engine/visual-styles/Playfulanimated.webp",
    textColor: "#333333",
    accent: briefingPalette.orange.DEFAULT
  },
  {
    id: 5,
    name: "Futuristic",
    description: "Neon cyberpunk, holographic platforms, tech-driven",
    imagePath: "/briefing-engine/visual-styles/Futuristic.webp",
    textColor: "#ffffff",
    accent: briefingPalette.indigo.DEFAULT
  },
  {
    id: 6,
    name: "Retro & Vintage",
    description: "Warm golden tones, timeless nostalgia, wood aesthetics",
    imagePath: "/briefing-engine/visual-styles/RetroVintage.webp",
    textColor: "#5a3e2b",
    accent: briefingPalette.orange.DEFAULT
  },
  {
    id: 7,
    name: "Documentary",
    description: "Photorealistic, natural lighting, authentic storytelling",
    imagePath: "/briefing-engine/visual-styles/DocumentaryRealistic.webp",
    textColor: "#ffffff",
    accent: briefingPalette.cyan.DEFAULT
  },
  {
    id: 8,
    name: "Artistic Abstract",
    description: "Liquid marble swirls, creative fluidity, artistic expression",
    imagePath: "/briefing-engine/visual-styles/ArtisticAbstract.webp",
    textColor: "#ffffff",
    accent: briefingPalette.fuchsia.DEFAULT
  },
  {
    id: 9,
    name: "2D Vector",
    description: "Flat design, geometric shapes, modern illustration",
    imagePath: "/briefing-engine/visual-styles/2dVector.webp",
    textColor: "#ffffff",
    accent: briefingPalette.indigo.DEFAULT
  }
];

export const VisualStylesGallery = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lenisReady = useLenisReady(200, 2000);

  useEffect(() => {
    if (!lenisReady) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header on scroll
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Animate cards with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".style-card");

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              amount: 0.6,
              from: "start"
            },
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              end: "top 25%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [lenisReady]);

  return (
    <section ref={sectionRef} className="py-20 px-4" id="visual-styles">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none text-white mb-6">
            Choose Your Creative Style
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            9 Stunning Visual Styles to Bring Your Storyboard to Life
          </p>
        </div>

        {/* 9-Card Grid (3x3 layout on large screens) */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visualStyles.map((style, index) => (
            <StyleCard
              key={style.id}
              name={style.name}
              description={style.description}
              imagePath={style.imagePath}
              textColor={style.textColor}
              accent={style.accent}
            />
          ))}
        </div>

        {/* Additional Context */}
        <div
          className="mt-12 p-6 rounded-xl border text-center"
          style={{
            background: '#4F46E510',
            borderColor: '#4F46E540'
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
