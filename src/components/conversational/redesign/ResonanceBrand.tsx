import { useRef } from "react";
import { Fingerprint, ShieldCheck, Activity, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ResonanceBrand = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Content Fade In
    gsap.to(".resonance-content", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%"
      }
    });

    // 2. Visualizer Physics
    // Spin Outer Ring
    gsap.to(".resonance-outer-ring", {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear"
    });
    
    // Spin Inner Ring Reverse
    gsap.to(".resonance-inner-ring", {
      rotation: -360,
      duration: 40,
      repeat: -1,
      ease: "linear"
    });

    // 3. The "Locking On" Effect
    // The green wave starts larger/smaller and "syncs" to the white wave
    const syncTl = gsap.timeline({ repeat: -1, yoyo: true });
    
    syncTl.to(".resonance-aligning-wave", {
      scale: 1.2,
      opacity: 0.4,
      borderColor: "rgba(16,185,129,0.4)",
      duration: 2,
      ease: "sine.inOut"
    })
    .to(".resonance-aligning-wave", {
      scale: 1, // Match Brand Wave
      opacity: 1,
      borderColor: "rgba(16,185,129,1)",
      duration: 0.5, // Snap!
      ease: "power4.in"
    })
    .to(".resonance-lock-icon", {
      scale: 1.1,
      boxShadow: "0 0 50px rgba(16,185,129,0.8)",
      duration: 0.2,
      yoyo: true,
      repeat: 1
    }, "<"); // Sync with snap

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden flex items-center resonance-section">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Visualizer: Resonance Field */}
          <div className="relative h-[500px] w-full flex items-center justify-center resonance-visual">
            
            {/* Outer Field (Brand Constraints) */}
            <div className="absolute inset-0 border border-emerald-500/10 rounded-full resonance-outer-ring" />
            <div className="absolute inset-12 border border-emerald-500/20 rounded-full resonance-inner-ring" />
            
            {/* The Resonance Core */}
            <div className="relative w-64 h-64">
               {/* Wave 1: The Brand (Stable) */}
               <svg className="absolute inset-0 w-full h-full opacity-50 resonance-stable-wave" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
               </svg>

               {/* Wave 2: The AI (Aligning) */}
               <div 
                 className="absolute inset-0 rounded-full border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] resonance-aligning-wave"
                 style={{ transform: 'scale(1)' }} // Static initial state
               />
               
               {/* Central Lock Icon */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-black border border-emerald-500 p-4 rounded-xl shadow-xl z-10 resonance-lock-icon">
                   <Fingerprint className="w-8 h-8 text-emerald-400" />
                 </div>
               </div>
            </div>

            {/* Scanning Beam */}
            <div className="absolute w-full h-1 bg-emerald-500/30 top-1/2 -translate-y-1/2 resonance-scan-beam animate-[spin_4s_linear_infinite]" />

          </div>

          {/* Copy: The Pitch */}
          <div>
            <div className="resonance-content opacity-0 translate-x-10">
              <span className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-6 block">
                // Neural Alignment
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1]">
                Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">
                  Resonance
                </span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed mb-12">
                Generic AI sounds like a robot. Our Neural Voice Engine locks onto your brand's specific tone, terminology, and emotional cadence. It doesn't just speak; it represents you.
              </p>

              {/* Feature List as System Parameters */}
              <div className="space-y-6">
                <ParameterRow 
                  label="Tone Guard" 
                  value="ACTIVE" 
                  desc="Prevents off-brand sentiment drift."
                  icon={ShieldCheck}
                />
                <ParameterRow 
                  label="Vocab Matrix" 
                  value="LOCKED" 
                  desc="Strict adherence to industry terminology."
                  icon={Activity}
                />
                <ParameterRow 
                  label="Context Sync" 
                  value="100%" 
                  desc="Maintains thread coherence across channels."
                  icon={RefreshCw}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ParameterRow = ({ label, value, desc, icon: Icon }: any) => (
  <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg">
    <div className="mt-1 p-2 bg-emerald-500/10 rounded">
      <Icon className="w-4 h-4 text-emerald-400" />
    </div>
    <div>
      <div className="flex items-center gap-3 mb-1">
        <h4 className="text-white font-bold uppercase tracking-wider text-sm">{label}</h4>
        <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-900/50 text-emerald-400 rounded border border-emerald-500/20">{value}</span>
      </div>
      <p className="text-sm text-white/50">{desc}</p>
    </div>
  </div>
);
