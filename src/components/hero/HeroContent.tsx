import { RevealText } from "@/components/ui/reveal-text";
import { FloatingElement } from "@/components/ui/floating-element";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-8 md:space-y-12 max-w-[90vw] md:max-w-6xl mx-auto px-4 -translate-y-8">
      {/* Main Headline with Ultra-Impact Typography */}
      <FloatingElement delay={0} duration={8} yOffset={15}>
        <h1 className="font-geist text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-extra-tight leading-none">
          <RevealText delay={0.2} className="block">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
              Cre8tive AI
            </span>
          </RevealText>
        </h1>
      </FloatingElement>

      {/* Subheadline with Bold Modern Styling */}
      <div className="space-y-2">
        <RevealText delay={0.4}>
          <p className="font-geist text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/95 leading-tight max-w-4xl">
            Cutting Edge{" "}
            <span className="gradient-text">
              AI Solutions
            </span>
          </p>
        </RevealText>
        <RevealText delay={0.5}>
          <p className="font-geist text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/95 leading-tight max-w-4xl">
            For Your Business
          </p>
        </RevealText>
      </div>

      {/* Description with Better Hierarchy */}
      <RevealText delay={0.7}>
        <p className="font-geist text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed font-light">
          Transform your business with AI-powered video production, autonomous agents, and innovative content creation
        </p>
      </RevealText>

      {/* Magnetic CTA Button */}
      <RevealText delay={0.9}>
        <MagneticButton strength={0.2} as="div">
          <Link
            to="/contact"
            className="group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-smooth overflow-hidden gradient-shimmer text-white hover:shadow-glow-lg inline-block"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-smooth group-hover:translate-x-1" />
            </span>
          </Link>
        </MagneticButton>
      </RevealText>
    </div>
  );
};