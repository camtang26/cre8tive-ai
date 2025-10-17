import { useRef, useState, useEffect } from "react";
import { briefingPalette } from "@/components/briefing/palette";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BriefingCTA = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  // Floating frames animation
  useGSAP(() => {
    const frames = containerRef.current?.querySelectorAll('.floating-frame');
    frames?.forEach((frame, i) => {
      gsap.to(frame, {
        y: -20,
        rotation: 5,
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    // PERFORMANCE: Batch 3 ScrollTriggers into 1 with stagger (reduces initialization time)
    // Before: 3 separate triggers = 3x _getComputedProperty2 calls
    // After: 1 trigger with staggered animation
    if (headingRef.current && paragraphRef.current && buttonsRef.current) {
      gsap.from([headingRef.current, paragraphRef.current, buttonsRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2, // 0.2s delay between each element
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%", // Changed from 80% - safer for bottom elements
          once: true
        }
      });
    }

    // Button pulsing glows
    const primaryGlow = primaryBtnRef.current?.querySelector('.pulsing-glow');
    if (primaryGlow) {
      gsap.to(primaryGlow, {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Shimmer effects
    const shimmers = containerRef.current?.querySelectorAll('.shimmer');
    shimmers?.forEach(shimmer => {
      gsap.to(shimmer, {
        x: '200%',
        duration: 3,
        repeat: -1,
        repeatDelay: 2,
        ease: "power1.inOut"
      });
    });
  }, { scope: containerRef });

  // DEFENSIVE FALLBACK: Reveal content if ScrollTrigger fails (fast scroll race condition)
  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current || !buttonsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if elements are still hidden (opacity: 0)
            const isHidden = window.getComputedStyle(headingRef.current!).opacity === '0';

            if (isHidden) {
              // ScrollTrigger missed - reveal with immediate animation
              gsap.to([headingRef.current, paragraphRef.current, buttonsRef.current], {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
              });
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    observer.observe(containerRef.current!);

    return () => observer.disconnect();
  }, []);

  const handlePrimaryMouseEnter = () => {
    setIsPrimaryHovered(true);
    if (primaryBtnRef.current) {
      gsap.to(primaryBtnRef.current, {
        scale: 1.05,
        boxShadow: `0 0 60px ${briefingPalette.cyan.glow}FF, 0 0 100px ${briefingPalette.cyan.glow}80, 0 20px 60px rgba(34, 211, 238, 0.6)`,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handlePrimaryMouseLeave = () => {
    setIsPrimaryHovered(false);
    if (primaryBtnRef.current) {
      gsap.to(primaryBtnRef.current, {
        scale: 1,
        boxShadow: `0 0 40px ${briefingPalette.cyan.glow}80, 0 10px 40px ${briefingPalette.indigo.DEFAULT}60`,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleSecondaryMouseEnter = () => {
    setIsSecondaryHovered(true);
    if (secondaryBtnRef.current) {
      gsap.to(secondaryBtnRef.current, {
        scale: 1.05,
        boxShadow: `0 0 50px ${briefingPalette.holographic.cyan}80, 0 20px 60px rgba(34, 211, 238, 0.5)`,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleSecondaryMouseLeave = () => {
    setIsSecondaryHovered(false);
    if (secondaryBtnRef.current) {
      gsap.to(secondaryBtnRef.current, {
        scale: 1,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${briefingPalette.indigo.to} 0%, ${briefingPalette.indigo.DEFAULT} 50%, ${briefingPalette.fuchsia.DEFAULT} 100%)`
      }}
    >
      {/* Floating Storyboard Frames Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-frame absolute w-32 h-24 border-2 border-white rounded"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-none text-white"
          >
            Turn Your Brief into Native Video
          </h2>

          <p
            ref={paragraphRef}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Capture the idea once—our AI intake builds the storyboard and our Studio takes it the rest of the way.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Primary CTA Button */}
            <button
              ref={primaryBtnRef}
              onClick={() => window.location.href = 'https://admanager.cre8tive.ai/'}
              onMouseEnter={handlePrimaryMouseEnter}
              onMouseLeave={handlePrimaryMouseLeave}
              className="group relative px-10 py-5 rounded-xl font-bold text-xl text-white overflow-hidden flex items-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.cyan.glow})`,
                border: `2px solid ${briefingPalette.cyan.glow}`,
                boxShadow: `0 0 40px ${briefingPalette.cyan.glow}80, 0 10px 40px ${briefingPalette.indigo.DEFAULT}60, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                willChange: 'transform'
              }}
            >
              {/* Pulsing glow effect */}
              <div
                className="pulsing-glow absolute inset-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${briefingPalette.cyan.glow}40, transparent 70%)`,
                  opacity: 0.5
                }}
              />

              {/* Animated gradient overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${isPrimaryHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}30, ${briefingPalette.cyan.glow}30)`,
                }}
              />

              {/* Shimmer effect */}
              <div
                className="shimmer absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                  transform: 'translateX(-200%)'
                }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Start Your Brief
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary CTA Button */}
            <button
              ref={secondaryBtnRef}
              onClick={() => navigate('/contact')}
              onMouseEnter={handleSecondaryMouseEnter}
              onMouseLeave={handleSecondaryMouseLeave}
              className="group relative px-10 py-5 rounded-xl font-bold text-xl text-white overflow-hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '2px solid transparent',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(135deg, ${briefingPalette.holographic.cyan}, ${briefingPalette.holographic.green})`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                willChange: 'transform'
              }}
            >
              {/* Animated gradient overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${isSecondaryHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  background: `linear-gradient(135deg, ${briefingPalette.holographic.cyan}20, ${briefingPalette.holographic.green}20)`,
                }}
              />

              {/* Shimmer effect */}
              <div
                className="shimmer absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transform: 'translateX(-200%)'
                }}
              />

              <span className="relative z-10">Talk to the Studio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefingCTA;
