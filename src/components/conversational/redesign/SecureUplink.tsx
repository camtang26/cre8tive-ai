import { useRef } from "react";
import { ArrowRight, Mail, MessageSquare, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SecureUplink = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%"
      }
    });

    // 1. Header
    tl.to(".uplink-header", { opacity: 1, duration: 0.8, ease: "power2.out" });

    // 2. Cards Stagger
    tl.to(".uplink-card", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.2)"
    }, "-=0.4");

    // 3. Footer
    tl.to(".uplink-footer", { opacity: 1, duration: 0.5 }, "-=0.2");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden border-t border-emerald-500/10 secure-uplink-section">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div
            className="mb-12 opacity-0 uplink-header"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Ready to <span className="text-emerald-500">Deploy?</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Initialize your dedicated voice infrastructure today. Our solution architects are standing by to blueprint your integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* Option 1: Book Demo */}
            <a
              href="/contact"
              className="group relative p-8 border border-emerald-500/30 bg-emerald-950/10 rounded-2xl overflow-hidden text-left hover:bg-emerald-950/20 transition-all uplink-card"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <MessageSquare className="w-24 h-24 text-emerald-500" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  Book Briefing <ChevronRight className="w-5 h-5 text-emerald-500" />
                </h3>
                <p className="text-sm text-white/50 mb-6">
                  Schedule a technical deep dive with our engineering team.
                </p>
                <span className="text-emerald-400 text-sm font-mono uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                  Initiate Sequence <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Option 2: Book Intro Call */}
            <a
              href="https://cal.com/cameron-tang-121990/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 border border-white/10 bg-white/5 rounded-2xl overflow-hidden text-left hover:border-white/20 transition-all uplink-card"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail className="w-24 h-24 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  Book Intro Call <ChevronRight className="w-5 h-5 text-white/50" />
                </h3>
                <p className="text-sm text-white/50 mb-6">
                  Direct line to our enterprise support division.
                </p>
                <span className="text-white/70 text-sm font-mono uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                  Open Calendar <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

          </div>

          {/* Footer Status */}
          <div className="mt-16 pt-8 border-t border-white/5 flex justify-center gap-8 text-[10px] font-mono text-white/30 uppercase tracking-widest opacity-0 uplink-footer">
             <span>System_Status: ONLINE</span>
             <span>Encryption: 256-BIT</span>
             <span>Region: US-EAST-1</span>
          </div>

        </div>
      </div>
    </section>
  );
};
