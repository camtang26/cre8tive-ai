import { useRef } from "react";
import MuxPlayer from "@mux/mux-player-react/lazy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_ID = "FFH4ldVB00HBEO1iLXm9xWmBNvK501vBQ6Fj9PixEHcJA";

export const HolographicVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "center center",
        scrub: 1
      }
    });

    // Header Entrance
    gsap.fromTo([".holo-label", ".holo-headline"],
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        } 
      }
    );

    // 3D Tilt Animation (The "Hologram" Lift)
    tl.to(".holo-container", {
      rotationX: 0,
      scale: 1,
      opacity: 1,
      ease: "power2.out"
    })
    .to(".holo-glow", {
      opacity: 0.6,
      scaleX: 1,
      ease: "power2.out"
    }, "<");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="conversational-marketing-video"
      className="relative py-32 perspective-1000 bg-black overflow-hidden holographic-video-section"
    >
      
      {/* Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-emerald-500/20 blur-[150px] rounded-full opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block opacity-0 holo-label"
          >
            // System Overview
          </span>
          <h2 
            className="text-3xl md:text-5xl font-black text-white opacity-0 holo-headline"
          >
            Platform Capabilities
          </h2>
        </div>

        {/* 3D Video Container */}
        <div 
          className="relative max-w-5xl mx-auto group holo-container"
          style={{ transform: 'rotateX(45deg) scale(0.8)', opacity: 0 }} // Initial static state for GSAP
        >
          {/* The Screen Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl shadow-emerald-900/20 backdrop-blur-sm">
            
            {/* Video Player */}
            <div className="aspect-video relative">
              <MuxPlayer
                playbackId={VIDEO_ID}
                streamType="on-demand"
                metadata={{ video_title: "Conversational AI Overview" }}
                className="w-full h-full object-cover"
                accentColor="#10B981"
              />
              
              {/* Scanline Overlay (Pointer events none to allow interaction) */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-20" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-emerald-900/20 to-transparent opacity-40" />
            </div>

            {/* Technical Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500/50 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/50 rounded-br-lg pointer-events-none" />

          </div>

          {/* Reflection / Floor Glow */}
          <div 
            className="absolute -bottom-20 left-4 right-4 h-20 bg-emerald-500/30 blur-3xl transform scale-x-90 holo-glow"
            style={{ opacity: 0 }}
          />
          
        </div>

      </div>
    </section>
  );
};
