"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { SplineSceneBasic } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export const AgentsHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section
      className={`relative w-screen overflow-hidden bg-black ${
        isMobile 
          ? 'h-[100vh] -mt-16'
          : 'h-screen'
      }`}
      role="banner"
      aria-label="Agents hero section"
    >
      {/* Spotlight covering entire hero section */}
      <Spotlight className="absolute inset-0 z-5" />

      {/* Header/Subheader Text */}
      <div className={`absolute z-20 ${
        isMobile 
          ? 'top-[12%] left-0 w-full px-6 text-center'
          : 'top-[20%] left-[26%] text-left'
      }`}>
        <h1 
          className={`font-bold text-white leading-none ${
            isMobile 
              ? 'text-6xl'
              : 'text-8xl md:text-9xl'
          }`} 
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)' }}
        >
          AI<br/>Autonomous<br/>Agents
        </h1>
        <p 
          className={`text-neutral-300 ${
            isMobile 
              ? 'mt-6 text-2xl mx-auto'
              : 'mt-8 text-4xl md:text-5xl max-w-lg'
          }`} 
          style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.1)' }}
        >
          Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
        </p>
      </div>

      {/* Robot Visual */}
      <div className={`absolute ${
        isMobile 
          ? 'top-[45%] left-0 w-full h-[55%]'
          : 'right-12 w-1/2 h-full'
      }`}>
        <SplineSceneBasic />
      </div>
    </section>
  );
};