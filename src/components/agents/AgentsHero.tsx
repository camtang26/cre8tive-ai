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
          ? 'h-[100vh] -mt-12'
          : 'h-screen'
      }`}
      role="banner"
      aria-label="Agents hero section"
    >
      {/* Spotlight covering entire hero section */}
      <Spotlight className="absolute inset-0 z-5" />

      {/* Header/Subheader Text - Enhanced with Gradient */}
      <div className={`absolute z-20 ${
        isMobile
          ? 'top-[12%] left-0 w-full px-6 text-center'
          : 'top-[20%] left-[26%] text-left'
      }`}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`font-black leading-extra-tight ${
            isMobile
              ? 'text-6xl mx-auto text-center'
              : 'text-8xl md:text-9xl'
          }`}
          style={{
            ...(isMobile ? { maxWidth: '80%', margin: '0 auto' } : {})
          }}
        >
          {isMobile ? (
            <>
              <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">AI</div>
              <div className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent" style={{ marginRight: '15%' }}>Autonomous</div>
              <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Agents</div>
            </>
          ) : (
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              AI<br/>Autonomous<br/>Agents
            </span>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`text-white/90 font-semibold ${
            isMobile
              ? 'mt-6 text-xl mx-auto'
              : 'mt-8 text-3xl md:text-4xl max-w-2xl'
          }`}
        >
          Smarter{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Solutions
          </span>{" "}
          for Smarter Businesses
        </motion.p>
      </div>

      {/* Robot Visual */}
      <div className={`absolute ${
        isMobile 
          ? 'top-[54%] left-0 w-full h-[55%]'
          : 'right-12 w-1/2 h-full'
      }`}>
        <SplineSceneBasic />
      </div>
    </section>
  );
};