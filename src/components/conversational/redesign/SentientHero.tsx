import { useRef, useEffect } from "react";
import { Phone, Activity, Zap, Globe } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const SentientHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const vertexRef = useRef<HTMLDivElement>(null);
  
  // Mouse parallax using GSAP quickTo for performance
  const xTo = useRef<any>();
  const yTo = useRef<any>();

  useGSAP(() => {
    // 1. Setup quickTo for smooth mouse tracking
    xTo.current = gsap.quickTo(vertexRef.current, "x", { duration: 0.8, ease: "power3" });
    yTo.current = gsap.quickTo(vertexRef.current, "y", { duration: 0.8, ease: "power3" });

    // 2. Entrance Timeline
    const tl = gsap.timeline({ delay: 0.2 });

    // Initial States
    gsap.set(".hero-headline span", { y: 100, opacity: 0 });
    gsap.set(".hero-subhead", { y: 20, opacity: 0 });
    gsap.set(".hero-cta", { y: 20, opacity: 0 });
    gsap.set(".tech-badge", { y: -20, opacity: 0 });
    gsap.set(".hud-item", { opacity: 0 });

    tl.to(".tech-badge", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .to(".hero-headline span", { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.1, 
        ease: "expo.out" 
      }, "-=0.4")
      .to(".hero-subhead", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
      .to(".hero-cta", { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6")
      .to(".hud-item", { opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.4");

    // 3. Continuous Organic Motion (Breathing)
    gsap.to(vertexRef.current, {
      scale: 1.05,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized offset
    const x = (clientX / innerWidth - 0.5) * 50; // 50px range
    const y = (clientY / innerHeight - 0.5) * 50;
    
    if (xTo.current) xTo.current(x);
    if (yTo.current) yTo.current(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[110vh] min-h-[900px] bg-black overflow-hidden flex flex-col items-center justify-center selection:bg-emerald-500/30 sentient-hero-section"
    >
      {/* 1. Volumetric Noise & Fog */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* 2. The Neural Vertex (Main Visual) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-1000">
        <div ref={vertexRef} className="translate-y-20 neural-vertex-container"> 
           <NeuralVertex />
        </div>
      </div>

      {/* 3. Content Layer */}
      <div ref={contentRef} className="relative z-50 text-center max-w-5xl px-6 -mt-32 content-layer">
        
        {/* Top Tech Badge */}
        <div className="flex justify-center mb-8 tech-badge">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-xs font-mono tracking-[0.2em] uppercase">
              Neural Voice Engine v4.0
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] relative hero-headline">
          <span className="block">Intelligent</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 via-emerald-200 to-emerald-900">
            Voice Infrastructure
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-emerald-100/60 max-w-3xl mx-auto leading-relaxed mb-12 font-light hero-subhead">
          Replace static IVR trees with <span className="text-emerald-400 font-medium">fluid, autonomous agents</span> that negotiate, schedule, and resolve issues over the phone in real-time.
        </p>

        {/* Primary CTA (Consolidated) */}
        <div className="flex justify-center items-center hero-cta">
          <a 
            href="https://cal.com/cameron-tang-121990/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-10 py-5 bg-emerald-500 text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] cursor-pointer z-[60]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 fill-current" />
              Book Intro Call
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Bottom HUD Elements */}
      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end text-xs font-mono text-emerald-500/40 uppercase tracking-widest pointer-events-none">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 hud-item">
            <Activity className="w-4 h-4" />
            <span>Latency: 120ms</span>
          </div>
          <div className="flex items-center gap-2 hud-item">
            <Globe className="w-4 h-4" />
            <span>Global Nodes: 14</span>
          </div>
        </div>
        <div className="flex items-center gap-2 hud-item">
          <Zap className="w-4 h-4" />
          <span>System: Active</span>
        </div>
      </div>
    </section>
  );
};

const NeuralVertex = () => {
  const vertexRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Spin Core
    gsap.to(".vertex-core", { 
      rotation: 360, 
      duration: 60, 
      repeat: -1, 
      ease: "linear" 
    });

    // Animate Rings
    gsap.utils.toArray(".orbital-ring").forEach((ring: any, i) => {
      gsap.to(ring, {
        rotationZ: 360,
        duration: 20 + i * 5,
        repeat: -1,
        ease: "linear"
      });
      gsap.to(ring, {
        scale: 1.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
      });
    });

    // Animate Freq Bars
    gsap.utils.toArray(".freq-bar").forEach((bar: any) => {
      gsap.to(bar, {
        height: "random(20, 150)px",
        opacity: "random(0.2, 0.8)",
        duration: "random(0.5, 1.5)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

  }, { scope: vertexRef });

  return (
    <div ref={vertexRef} className="relative w-[800px] h-[800px] vertex-core">
      <div className="absolute inset-[20%] bg-emerald-500/20 blur-[100px] rounded-full" />

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-emerald-500/20 rounded-full orbital-ring"
          style={{ transform: `scale(${1 - i * 0.15})` }}
        >
           <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)]" />
           <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-600 rounded-full" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-30">
         {[...Array(20)].map((_, i) => (
            <div
              key={`bar-${i}`}
              className="w-1 bg-gradient-to-t from-transparent via-emerald-500 to-transparent freq-bar"
              style={{ height: '50px' }} 
            />
         ))}
      </div>
    </div>
  );
};
