import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoGalleryItem from "@/components/gallery/VideoGalleryItem";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: "1",
    videoId: "1051824336",
    title: "Cre8tive AI DHM Video"
  },
  {
    id: "2",
    videoId: "1055446411",
    title: "Kotia Skincare"
  },
  {
    id: "3",
    videoId: "1051820049",
    title: "Cre8tive AI Automotive Demo"
  },
  {
    id: "4",
    videoId: "1051819670",
    title: "Cre8tive AI Demo"
  },
  {
    id: "5",
    videoId: "1052203361",
    title: "Cre8tive AI Marina Project"
  },
  {
    id: "6",
    videoId: "1052204241",
    title: "LIMINAL"
  }
];

export const ParallaxGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const section = sectionRef.current;

    // Calculate total width to scroll
    // Width of track = scrollWidth
    // Viewport width = window.innerWidth
    // Distance to scroll = track.scrollWidth - window.innerWidth
    
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      return -(trackWidth - window.innerWidth);
    };

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none", // Linear scroll for mapping
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`, // Scroll distance matches horizontal width
        pin: true, // Pin the section
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculate on resize
        anticipatePin: 1 // Prevent stutter
      }
    });

    return () => {
      // Cleanup is handled by useGSAP, but explicit kill is safer for complex triggers
      tween.kill();
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen bg-black overflow-hidden">
      <div className="relative h-full flex flex-col justify-center">
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen" />
            
            {/* Technical Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '200px 100%' }} 
            />
        </div>

        {/* Section Title (Absolute Positioned, stays pinned visually) */}
        <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference pointer-events-none">
           <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase block mb-2">
             // Selected Works
           </span>
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
             The Reel
           </h2>
        </div>

        {/* Horizontal Track */}
        {/* We use a wrapper to center vertically if needed, but here we stretch */}
        <div ref={trackRef} className="flex gap-8 md:gap-16 pl-6 md:pl-12 lg:pl-24 pr-12 md:pr-24 items-center h-[70vh] w-max">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group"
            >
               {/* Card Container */}
               <div className="transform transition-transform duration-500 hover:scale-[1.02] relative z-10">
                   <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                      <VideoGalleryItem 
                        videoId={video.videoId} 
                        title={video.title}
                        isActive={false} 
                        onActivate={() => {}} 
                      />
                   </div>
               </div>
               
               {/* Number Indicator */}
               <div className="absolute -top-12 right-0 text-[8rem] md:text-[12rem] font-black text-white/[0.03] leading-none pointer-events-none select-none font-geist z-0">
                  0{index + 1}
               </div>
               
               {/* Reflective floor effect */}
               <div 
                 className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-y-[-0.5] blur-lg pointer-events-none" 
                 aria-hidden="true"
               />
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar (Optional - mapped to scroll trigger progress if we wanted) */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-white/10">
           <div className="h-full bg-cyan-400 w-full origin-left scale-x-0 progress-bar" /> 
           {/* We could animate this with GSAP too if requested */}
        </div>

      </div>
    </section>
  );
};
