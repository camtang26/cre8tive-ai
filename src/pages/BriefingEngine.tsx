import { Navigation } from "@/components/Navigation";
import { PageLayout } from "@/components/layouts/PageLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";
import { ReactLenis } from "lenis/react";
import { VisualStylesGallery } from "@/components/briefing/VisualStylesGallery";
import { BriefingCTA } from "@/components/briefing/BriefingCTA";
import { FadeIn } from "@/components/shared/FadeIn";
import { BriefToStoryboardAnimation } from "@/components/briefing/BriefToStoryboardAnimation";
import { AudienceBenefits } from "@/components/briefing/AudienceBenefits";
import { BriefingProcessFlow } from "@/components/briefing/BriefingProcessFlow";
import { WorkflowTransformation } from "@/components/briefing/WorkflowTransformation";
import { briefingPalette } from "@/components/briefing/palette";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const BriefingEngine = () => {
  const isMobile = useIsMobile();

  // Hero GSAP staggered entrance animation using useGSAP for proper React integration
  useGSAP(() => {

    console.log('[BriefingEngine Hero] useGSAP fired');

    // Verify elements exist before animating
    const headline = document.querySelector('.hero-headline');
    const subhead = document.querySelector('.hero-subhead');
    const description = document.querySelector('.hero-description');
    const ctas = document.querySelector('.hero-ctas');

    console.log('[BriefingEngine Hero] Elements found:', {
      headline: !!headline,
      subhead: !!subhead,
      description: !!description,
      ctas: !!ctas
    });

    if (!headline || !subhead || !description || !ctas) {
      console.warn('[BriefingEngine Hero] Missing elements, skipping animation');
      // Set visible anyway so content shows
      gsap.set([headline, subhead, description, ctas], { opacity: 1, scale: 1, y: 0 });
      return;
    }

    console.log('[BriefingEngine Hero] Starting PREMIUM GSAP animation...');

    // PREMIUM staggered entrance - inspired by Vercel/Linear
    const heroTL = gsap.timeline({
      delay: 0.5, // Build anticipation
      onComplete: () => console.log('[BriefingEngine Hero] Animation complete!')
    });

    heroTL
      // Headline: DRAMATIC entrance with elastic bounce
      .fromTo('.hero-headline',
        {
          opacity: 0,
          scale: 0.85,
          y: 80,
          rotationX: -15 // Slight 3D tilt
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.4,
          ease: 'back.out(1.4)' // Overshoot for premium feel
        }
      )
      // Subhead: Delay for sequential reveal
      .fromTo('.hero-subhead',
        {
          opacity: 0,
          scale: 0.9,
          y: 60
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out' // Smoother than power2
        },
        '-=0.8' // Small overlap for flow, not simultaneous
      )
      // Description: Gentle entrance
      .fromTo('.hero-description',
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out'
        },
        '-=0.7'
      )
      // CTAs: Pop in with bounce
      .fromTo('.hero-ctas',
        {
          opacity: 0,
          scale: 0.8,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'back.out(1.2)' // Slight bounce for interactivity cue
        },
        '-=0.5'
      );
  }); // useGSAP handles cleanup automatically

  const page = (
    <div className="relative min-h-screen bg-transparent">
        {/* Unified Page Background - Briefing Engine BLACK-CENTRIC with Indigo Hints */}
        {/* Matches Studios black-centric approach: 95%+ black, subtle color hints */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(192, 38, 211, 0.05) 0%, transparent 40%),
              linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(10,10,22,0.99) 100%)
            `
          }}
        />

        <PageLayout variant="custom">
          <Helmet>
            <title>AI Briefing Engine | Transform Ideas to Storyboards in Minutes | Cre8tive AI</title>
            <meta
              name="description"
              content="AI-powered briefing platform for agencies and brands. Create professional storyboards with 9 visual styles. From brief to PDF in minutes."
            />
            <meta property="og:title" content="AI Briefing Engine | Cre8tive AI" />
            <meta
              property="og:description"
              content="Transform your brand brief into professional storyboards in minutes using AI. Choose from 9 visual styles."
            />
          </Helmet>

          <Navigation />

          <main className="pt-20">
          {/* Hero Section with Dark Aesthetic - AC #9: Full viewport height with balanced scaling */}
          <section
            className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-28 pb-8 px-4 z-10"
            aria-label="Hero section"
          >
            <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-12">
              <div className="text-center space-y-8 md:space-y-12 lg:space-y-14">
                <h1 className={`hero-headline font-black tracking-tighter leading-none ${
                  isMobile
                    ? 'text-5xl'
                    : 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px]'
                } bg-clip-text text-transparent bg-gradient-to-r`}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT} 0%, ${briefingPalette.cyan.DEFAULT} 50%, ${briefingPalette.fuchsia.DEFAULT} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: `drop-shadow(0 0 40px ${briefingPalette.indigo.DEFAULT}40) drop-shadow(0 0 20px ${briefingPalette.cyan.DEFAULT}40)`
                }}>
                  AI Briefing Engine
                </h1>

                <h2 className="hero-subhead text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white/90 font-semibold max-w-5xl mx-auto px-2 md:px-0">
                  From Brand Brief to Professional Storyboard in Minutes
                </h2>

                <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-3 md:px-4">
                  AI-powered briefing platform that transforms your brand vision into production-ready storyboards. Choose from 9 visual styles, delivered as professional PDFs.
                </p>

                <div className="hero-ctas flex gap-4 justify-center flex-wrap">
                  <button
                    className="px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.fuchsia.DEFAULT})`,
                      color: 'white',
                      boxShadow: `0 0 20px ${briefingPalette.cyan.DEFAULT}50`
                    }}
                  >
                    Start Your Brief
                  </button>

                  <button
                    className="px-10 py-4 rounded-xl font-bold text-xl border-2 text-white transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: briefingPalette.cyan.DEFAULT,
                      background: 'transparent'
                    }}
                  >
                    See How It Works
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Animation - OUTSIDE hero section to prevent blue bar bleed */}
          <BriefToStoryboardAnimation />

          <FadeIn>
            <VisualStylesGallery />
          </FadeIn>

          <BriefingProcessFlow />

          <WorkflowTransformation />

          <AudienceBenefits />

          <FadeIn>
            <BriefingCTA />
          </FadeIn>
        </main>
        </PageLayout>
      </div>
  );

  // ALWAYS render with Lenis - no reduced motion exceptions per client requirements
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {page}
    </ReactLenis>
  );
};

export default BriefingEngine;
