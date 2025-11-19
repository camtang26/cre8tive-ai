import { useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react/lazy";
import { Play, Pause, Lock, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEMO_VIDEO_ID = "FFH4ldVB00HBEO1iLXm9xWmBNvK501vBQ6Fj9PixEHcJA";

const CHAPTERS = [
  { time: 0, label: "INIT_SEQUENCE", title: "System Introduction" },
  { time: 150, label: "VOICE_CLONE", title: "Brand Voice Training" },
  { time: 300, label: "OMNI_DEPLOY", title: "Multi-Channel Deployment" },
  { time: 450, label: "DATA_MINING", title: "Analytics Dashboard" },
];

export const TacticalDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    // 1. Header Reveal
    tl.to(".tactical-header", { opacity: 1, duration: 0.5 });

    // 2. Viewport & Sidebar Expand
    tl.to([".tactical-viewport", ".tactical-sidebar"], { 
      opacity: 1, 
      duration: 0.8, 
      stagger: 0.2, 
      ease: "power2.out" 
    });

    // 3. "Draw" the borders (Simulated via scale/width)
    // NOTE: Complex SVG drawing skipped for speed, using opacity fade for brackets instead
    tl.fromTo([".bracket-tl", ".bracket-tr", ".bracket-bl", ".bracket-br"],
      { width: 0, height: 0 },
      { width: 16, height: 16, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    );

    // 4. Crosshair Pop
    tl.to(".tactical-crosshair", { 
      opacity: 1, 
      scale: 1, 
      duration: 0.4, 
      ease: "back.out(1.5)" 
    });

    // 5. Sidebar Items Stagger
    tl.fromTo(".tactical-chapter-item",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      "-=0.4"
    );

  }, { scope: containerRef });

  const handlePlayToggle = () => {
    if (playerRef.current) {
      if (isPlaying) playerRef.current.pause();
      else playerRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleChapterClick = (time: number, index: number) => {
    if (playerRef.current) {
      playerRef.current.currentTime = time;
      if (!isPlaying) {
        playerRef.current.play();
        setIsPlaying(true);
      }
      setActiveChapter(index);
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="conversational-live-demo"
      className="relative py-32 bg-black overflow-hidden tactical-demo-section"
    >
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Mission Header */}
        <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-4 opacity-0 tactical-header">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
            <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase">
              Live_Operation_Feed :: Secure_Ch_04
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-emerald-500/60">
            <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> ENCRYPTED</span>
            <span>1080p_60fps</span>
            <span>H.265</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full lg:h-[600px]">
          
          {/* Main Viewport (Video) */}
          <div className="lg:col-span-8 relative group opacity-0 tactical-viewport">
            <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-sm z-20 pointer-events-none tactical-border-frame">
              {/* Corner Brackets - Will be animated with GSAP */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-4 border-l-4 border-emerald-500 bracket-tl" />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-4 border-r-4 border-emerald-500 bracket-tr" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-4 border-l-4 border-emerald-500 bracket-bl" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-4 border-r-4 border-emerald-500 bracket-br" />
              
              {/* Crosshair Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-emerald-500/20 rounded-full flex items-center justify-center opacity-0 tactical-crosshair">
                <Crosshair className="w-4 h-4 text-emerald-500/40" />
              </div>
            </div>

            <div className="relative h-full bg-black/50 overflow-hidden">
              <MuxPlayer
                ref={playerRef}
                playbackId={DEMO_VIDEO_ID}
                streamType="on-demand"
                className="w-full h-full object-contain"
                accentColor="#10B981"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* CRT Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 opacity-20" />
            </div>
          </div>

          {/* Ops Sidebar (Chapters) */}
          <div className="lg:col-span-4 flex flex-col border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm opacity-0 tactical-sidebar">
            <div className="p-4 bg-emerald-950/30 border-b border-emerald-500/20 font-mono text-xs text-emerald-400 uppercase tracking-wider flex justify-between">
              <span>Mission_Log</span>
              <span>Auto_Scroll: ON</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {CHAPTERS.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => handleChapterClick(chapter.time, index)}
                  className={cn(
                    "w-full text-left p-4 border-l-2 transition-all duration-300 font-mono text-sm relative overflow-hidden group tactical-chapter-item",
                    activeChapter === index 
                      ? "border-emerald-500 bg-emerald-500/10 text-white" 
                      : "border-transparent text-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5"
                  )}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-[10px] opacity-70 tracking-widest">CMD_0{index + 1}</span>
                    {activeChapter === index && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />}
                  </div>
                  <div className="font-bold uppercase tracking-tight">{chapter.label}</div>
                  <div className="text-xs opacity-60 mt-1 font-sans normal-case">{chapter.title}</div>
                  
                  {/* Hover Scan Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                </button>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="p-4 border-t border-emerald-500/20 flex items-center justify-between bg-black/40">
               <div className="flex gap-2">
                 <button onClick={handlePlayToggle} className="p-3 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors">
                   {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                 </button>
               </div>
               <div className="text-right font-mono text-xs text-emerald-500/60">
                 <div>SIGNAL: STRONG</div>
                 <div>PACKET_LOSS: 0%</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
