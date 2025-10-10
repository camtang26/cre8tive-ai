import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Rocket, Sparkles, Users2, Workflow, Zap } from "lucide-react";
import { BenefitCard } from "./BenefitCard";
import { briefingPalette } from "./palette";

gsap.registerPlugin(ScrollTrigger);

const agencyBenefits = [
  {
    badge: "AGENCIES 01",
    title: "Scale Multiple Clients",
    description: "Spin up on-brand storyboards for every client without burning creative hours.",
    accent: "from-[#4F46E5]/35 to-[#22D3EE]/35",
    icon: <Users2 size={16} />
  },
  {
    badge: "AGENCIES 02",
    title: "Faster Client Onboarding",
    description: "Seven guided briefing fields capture product, audience, and guardrails in minutes.",
    accent: "from-[#22D3EE]/30 to-[#C026D3]/30",
    icon: <Sparkles size={16} />
  },
  {
    badge: "AGENCIES 03",
    title: "Increase Team Productivity",
    description: "Automate storyboard drafts so strategists can focus on insight and polish.",
    accent: "from-[#C026D3]/28 to-[#4F46E5]/28",
    icon: <Workflow size={16} />
  }
];

const brandBenefits = [
  {
    badge: "BRANDS 01",
    title: "Speed to Campaign Launch",
    description: "Go from concept to production-ready storyboard in under ten minutes.",
    accent: "from-[#22D3EE]/30 to-[#34D399]/30",
    icon: <Rocket size={16} />
  },
  {
    badge: "BRANDS 02",
    title: "Stay On Brand, Always",
    description: "Nine visual styles lock typography, tone, and color before production.",
    accent: "from-[#C026D3]/28 to-[#22D3EE]/28",
    icon: <Building2 size={16} />
  },
  {
    badge: "BRANDS 03",
    title: "Professional Results",
    description: "Deliver studio-ready PDFs with scene notes, ratios, and Studios handoff baked in.",
    accent: "from-[#4F46E5]/30 to-[#EA580C]/20",
    icon: <Zap size={16} />
  }
];

export const AudienceBenefits = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [userType, setUserType] = useState<'agency' | 'brand'>('agency');
  const [isAnimating, setIsAnimating] = useState(false);

  // Initial scroll-triggered entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".audience-benefit-card");

      console.log('[AudienceBenefits] Initial: Found cards:', cards.length);

      if (cards.length === 0) return;

      // Initial entrance from scroll
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Toggle animation handler
  const handleToggle = (newType: 'agency' | 'brand') => {
    if (newType === userType || isAnimating) return;

    setIsAnimating(true);

    // Get current and next panels
    const currentPanel = document.querySelector(`.${userType}-panel`);
    const nextPanel = document.querySelector(`.${newType}-panel`);

    if (!currentPanel || !nextPanel) {
      setUserType(newType);
      setIsAnimating(false);
      return;
    }

    console.log('[AudienceBenefits] Toggle animation:', userType, '→', newType);

    // Create choreographed timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        console.log('[AudienceBenefits] Toggle complete');
      }
    });

    // Step 1: Exit current panel (fade out, slide out, scale down)
    const currentCards = currentPanel.querySelectorAll('.audience-benefit-card');
    tl.to(currentCards, {
      opacity: 0,
      x: userType === 'agency' ? -30 : 30,
      scale: 0.95,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(currentPanel, { display: 'none' });
      }
    });

    // Step 2: Prepare next panel (set initial hidden state)
    const nextCards = nextPanel.querySelectorAll('.audience-benefit-card');
    tl.set(nextPanel, { display: 'flex' }, "<");
    tl.set(nextCards, {
      opacity: 0,
      x: newType === 'agency' ? 30 : -30,
      scale: 0.95
    }, "<");

    // Step 3: Update state in the middle of animation
    tl.call(() => {
      setUserType(newType);
    });

    // Step 4: Enter new panel (slide in, fade in, scale up with overshoot)
    tl.to(nextCards, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.7)", // Slight overshoot for premium feel
    }, "+=0.05"); // Small pause before entrance
  };

  return (
    <section ref={sectionRef} className="relative isolate mx-auto max-w-[1600px] px-4 py-24 md:px-12">
      <div className="absolute inset-0 -z-10 rounded-[48px] border border-white/8 bg-gradient-to-br from-black/70 via-black/60 to-black/80" aria-hidden />
      <div className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Who We Empower</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-[52px]">
            Tailored Storyboards for Agencies & Brands
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Every stakeholder gets a dedicated storyboard lane. Agencies orchestrate multi-client pipelines while in-house teams launch campaigns with pixel-perfect consistency.
          </p>

          {/* Premium Toggle Switch - Centered */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <button
                onClick={() => handleToggle('agency')}
                disabled={isAnimating}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all duration-300 ${
                  userType === 'agency'
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-white/60 hover:text-white/80'
                } ${isAnimating ? 'pointer-events-none' : ''}`}
              >
                I'm an Agency
              </button>
              <button
                onClick={() => handleToggle('brand')}
                disabled={isAnimating}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all duration-300 ${
                  userType === 'brand'
                    ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30'
                    : 'text-white/60 hover:text-white/80'
                } ${isAnimating ? 'pointer-events-none' : ''}`}
              >
                I'm a Brand
              </button>
            </div>
          </div>
        </div>

        {/* Single Column Layout - Centered with Max Width */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Agency Panel */}
            <div className={`agency-panel flex-col gap-6 ${userType === 'agency' ? 'flex' : 'hidden'}`}>
              <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.45em] text-white/60 backdrop-blur-sm">
                <span>For Agencies</span>
                <span className="text-white/30">Storyboard Lane</span>
              </div>
              {agencyBenefits.map((benefit) => (
                <div key={benefit.badge} className="audience-benefit-card">
                  <BenefitCard {...benefit} />
                </div>
              ))}
            </div>

            {/* Brand Panel */}
            <div className={`brand-panel flex-col gap-6 ${userType === 'brand' ? 'flex' : 'hidden'}`}>
              <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.45em] text-white/60 backdrop-blur-sm">
                <span>For Brands</span>
                <span className="text-white/30">Storyboard Lane</span>
              </div>
              {brandBenefits.map((benefit) => (
                <div key={benefit.badge} className="audience-benefit-card">
                  <BenefitCard {...benefit} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
