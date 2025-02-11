"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export const AgentsHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner" 
      aria-label="Agents hero section"
    >
      {/* Dark gradient backdrop */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 35% center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      {/* Header and subheader */}
      <div className="relative z-20 p-8 md:p-12 max-w-6xl mx-auto -mt-24 -translate-x-0">
        <div className="flex flex-col space-y-6">
          <h1 className="font-inter text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-[-0.02em] text-white neon-glow opacity-0 animate-[fadeIn_3s_ease-out_0.5s_forwards]">
            AI Autonomous Agents
          </h1>
          <p className="font-inter text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium tracking-[-0.01em] text-white/90 neon-glow-subtle opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]">
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </p>
        </div>
      </div>

      {/* Sparkles effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesagents"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.8}
        />
      </div>
    </section>
  );
};