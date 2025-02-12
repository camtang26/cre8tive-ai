"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export const AgentsHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section
      className="relative h-screen w-screen flex overflow-hidden bg-black"
      role="banner"
      aria-label="Agents hero section"
    >
      {/* Spotlight covering entire hero section */}
      <Spotlight className="absolute inset-0 z-5" />

      {/* Header/Subheader Text */}
      <div className="absolute top-[21%] left-[22%] transform z-10 text-left">
        <h1 className="text-8xl md:text-9xl font-bold text-white leading-none" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)' }}>
          AI<br/>Autonomous<br/>Agents
        </h1>
        <p className="mt-8 text-4xl md:text-5xl text-neutral-300 max-w-lg" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.1)' }}>
          Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
        </p>
      </div>

      {/* Right Column: 3D Robot Visual */}
      <div className="absolute right-0 md:right-[5%] w-1/2 h-full">
        <div className="w-full h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};