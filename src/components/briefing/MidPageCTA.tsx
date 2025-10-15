import { useRef, useState } from "react";
import { briefingPalette } from "@/components/briefing/palette";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MidPageCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        }
      });
    }
  }, { scope: containerRef });

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.03,
        boxShadow: `0 8px 24px ${briefingPalette.indigo.DEFAULT}40`,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handleMouseDown = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.98,
        duration: 0.1,
        ease: "power2.out"
      });
    }
  };

  const handleMouseUp = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: isHovered ? 1.03 : 1,
        duration: 0.1,
        ease: "power2.out"
      });
    }
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-3xl relative z-10">
        <div
          ref={containerRef}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white/95">
            Start Your Brief Today
          </h3>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto">
            Bring the concept; our intake maps the storyboard and lines up the Studio to deliver it.
          </p>

          <button
            ref={buttonRef}
            onClick={() => window.location.href = 'https://admanager.cre8tive.ai/'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="group relative px-8 py-3.5 rounded-lg font-semibold text-lg text-white overflow-hidden inline-flex items-center gap-2"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid transparent',
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.cyan.DEFAULT})`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              willChange: 'transform'
            }}
          >
            {/* Subtle gradient overlay on hover */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{
                background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}15, ${briefingPalette.cyan.DEFAULT}15)`,
              }}
            />

            <span className="relative z-10 flex items-center gap-2">
              Begin the Brief
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
