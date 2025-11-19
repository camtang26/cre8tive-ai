import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VideoBackground } from "../../hero/VideoBackground";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CinematicHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollY } = useScroll();
  
  // Removed y1/y2 parallax transforms to prevent "scrolling down" effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* Video Layer */}
      <div className="absolute inset-0 z-0">
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={() => setIsMuted(!isMuted)}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          priority={true}
        />
      </div>

      {/* Cinematic Overlay - Vignette & Color Grading */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
      
      {/* Grain Texture for "Film" Feel */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content Layer */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        
        {/* Removed Top Interface Elements (Est 2025, System Online, etc.) per request */}

        {/* Massive Typography */}
        <div className="flex flex-col items-start relative mix-blend-screen">
          <motion.h1 
            className="text-[16vw] sm:text-[15vw] leading-[0.8] font-black tracking-tighter text-white select-none"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            CRE8TIVE
          </motion.h1>
          
          <div className="flex items-center gap-4 md:gap-8 w-full">
             <motion.div 
               className="h-[2px] flex-grow bg-gradient-to-r from-cyan-400 to-transparent opacity-50"
               initial={{ scaleX: 0, originX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1.5, delay: 0.8 }}
             />
             <motion.h1 
               className="text-[16vw] sm:text-[15vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white select-none"
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
             >
              AI
            </motion.h1>
          </div>
        </div>

        {/* Subtext & CTA */}
        <motion.div 
          className="mt-12 md:mt-16 max-w-xl ml-1 md:ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 text-shadow-sm">
            Cutting Edge AI Solutions For Your Business.
            <span className="block text-white/50 text-base mt-2 font-mono">Transforming visions into reality with autonomous agents & video production.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-cyan-50 rounded-none px-8 py-6 text-lg font-bold tracking-tight transition-all duration-300 border border-white hover:scale-105">
                Start Project
              </Button>
            </Link>
            <Link to="/studios">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white rounded-none px-8 py-6 text-lg font-medium tracking-tight transition-all duration-300 backdrop-blur-md">
                Explore Studios <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
};