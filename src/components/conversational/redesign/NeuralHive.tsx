import { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Concurrent Sessions", value: "10,000+", color: "text-emerald-400" },
  { label: "Global Latency", value: "< 200ms", color: "text-emerald-200" },
  { label: "Uptime Guarantee", value: "99.99%", color: "text-white" }
];

export const NeuralHive = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Copy Reveal
    gsap.fromTo(".hive-copy",
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );

    // 2. Visual Reveal
    gsap.fromTo(".hive-visual",
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );

    // 3. "Pulse" Animation for Nodes
    // Select random nodes and flash them to simulate traffic
    const flashNodes = () => {
      const nodes = gsap.utils.toArray(".node-module");
      const randomNodes = gsap.utils.shuffle(nodes).slice(0, 12); // Pick 12 random nodes

      gsap.to(randomNodes, {
        opacity: 0.8,
        backgroundColor: "rgba(16,185,129,0.3)",
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.to(randomNodes, { opacity: 0.2, backgroundColor: "transparent", duration: 0.5 });
        }
      });
    };

    // Run flash loop
    const pulseTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    pulseTimeline.call(flashNodes);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden min-h-[800px] flex items-center neural-hive-section">
      
      {/* 1. The Infinite Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B98120_1px,transparent_1px),linear-gradient(to_bottom,#10B98120_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. Pulsing Clusters */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
         <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Copy */}
          <div className="max-w-xl opacity-0 hive-copy">
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Infinite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">
                  Scalability
                </span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Traffic spikes shouldn't break your support. Our neural architecture distributes load dynamically across thousands of nodes instantly.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className={cn("text-2xl font-bold mb-1 font-mono", stat.color)}>{stat.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual: The Server Rack / Node Graph */}
          <div 
            className="relative h-[500px] w-full border border-emerald-500/20 bg-black/50 rounded-2xl overflow-hidden backdrop-blur-sm hive-visual"
            style={{ opacity: 0 }} // Static init
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-emerald-950/30 border-b border-emerald-500/20 flex items-center px-4 justify-between text-[10px] font-mono text-emerald-500/60">
               <span>CLUSTER_STATUS: OPTIMAL</span>
               <span>LOAD: 42%</span>
            </div>

            {/* The Nodes */}
            <div className="absolute inset-0 top-10 p-4 grid grid-cols-8 gap-2 opacity-50">
               {[...Array(64)].map((_, i) => (
                 <NodeModule key={i} index={i} />
               ))}
            </div>

            {/* Overlay Scan */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent h-full w-full animate-[scan_4s_linear_infinite]" />
            
          </div>

        </div>
      </div>
    </section>
  );
};

const NodeModule = ({ index }: { index: number }) => {
  return (
    <div 
      className="rounded-sm border border-emerald-500/20 h-full w-full relative overflow-hidden node-module"
      style={{ opacity: 0.2 }}
    >
      <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-emerald-500" />
    </div>
  );
};
