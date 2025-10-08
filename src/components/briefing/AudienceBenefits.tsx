import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Rocket, Sparkles, Users2, Workflow, Zap } from "lucide-react";
import { BenefitCard } from "./BenefitCard";
import { briefingPalette } from "./palette";
import { StoryboardDivider } from "./StoryboardDivider";

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

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".audience-benefit-card");
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.45em] text-white/60">
              <span>For Agencies</span>
              <span className="text-white/30">Storyboard Lane</span>
            </div>
            {agencyBenefits.map((benefit) => (
              <div key={benefit.badge} className="audience-benefit-card">
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.45em] text-white/60">
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

      <StoryboardDivider className="mt-20 opacity-60" accentColor={briefingPalette.holographic.cyan} />
    </section>
  );
};
