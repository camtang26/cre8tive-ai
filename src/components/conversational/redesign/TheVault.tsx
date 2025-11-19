import { useRef } from "react";
import { Shield, Server, Globe, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "SOC2 Type II",
    desc: "Enterprise-grade security compliance."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Data is secured at rest and in transit."
  },
  {
    icon: Server,
    title: "Private Cloud",
    desc: "Dedicated instance deployment available."
  },
  {
    icon: Globe,
    title: "Global Edge",
    desc: "Low-latency routing across 14 regions."
  }
];

export const TheVault = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Background Ring Rotation
    gsap.to(".vault-outer-ring", {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "linear"
    });

    // 2. Core Entrance
    gsap.fromTo(".vault-visual", 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );

    // 3. Satellite Orbit
    gsap.to(".vault-satellite-ring", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });

    // 4. Copy Entrance
    gsap.to(".vault-copy", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%"
      }
    });

    // 5. Feature Cards Stagger
    gsap.to(".vault-feature-card", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".vault-copy",
        start: "top 70%"
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden vault-section">
      
      {/* Background Vault Door Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[40px] border-emerald-900/30 rounded-full border-dashed vault-outer-ring" />
        <div className="absolute w-[600px] h-[600px] border-[2px] border-emerald-500/20 rounded-full vault-inner-ring" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual: The Security Core */}
          <div className="relative order-2 lg:order-1 h-[400px] flex items-center justify-center vault-visual opacity-0">
             {/* Core Graphic */}
             <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
                <div className="absolute inset-0 border border-emerald-500/30 bg-emerald-950/50 backdrop-blur-md rounded-2xl rotate-45 vault-core-layer-1" />
                <div className="absolute inset-4 border border-emerald-500/50 bg-black/80 rounded-xl rotate-45 flex items-center justify-center vault-core-layer-2">
                   <Shield className="w-16 h-16 text-emerald-400" />
                </div>
                
                {/* Orbiting Satellites */}
                <div 
                  className="absolute -inset-8 border border-emerald-500/20 rounded-full vault-satellite-ring"
                >
                   <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981] vault-satellite-dot" />
                </div>
             </div>
          </div>

          {/* Copy: The Pitch */}
          <div className="order-1 lg:order-2 opacity-0 vault-copy">
            <span 
              className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              // Enterprise Grade
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Fortified <br />
              <span className="text-emerald-500">Infrastructure</span>
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Built for regulated industries. We maintain the highest standards of data privacy, security, and compliance so you can deploy with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 border border-emerald-500/10 bg-emerald-950/5 rounded-lg hover:border-emerald-500/30 transition-colors vault-feature-card"
                  style={{ opacity: 0, transform: 'translateX(20px)' }} // Static init for GSAP
                >
                  <feat.icon className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm">{feat.title}</h4>
                    <p className="text-xs text-white/50 mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
