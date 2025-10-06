import { Navigation } from "@/components/Navigation";
import { PageLayout } from "@/components/layouts/PageLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";
import { ReactLenis } from 'lenis/react';
import { StoryboardDivider } from "@/components/briefing/StoryboardDivider";
import { VisualStylesGallery } from "@/components/briefing/VisualStylesGallery";
import { BriefingCTA } from "@/components/briefing/BriefingCTA";
import { FadeIn } from "@/components/shared/FadeIn";
import { briefingPalette } from "@/components/briefing/palette";
import { BriefToStoryboardAnimation } from "@/components/briefing/BriefToStoryboardAnimation";
import { BriefingProcessFlow } from "@/components/briefing/BriefingProcessFlow";
import { AIProcessingVisual } from "@/components/briefing/AIProcessingVisual";

const BriefingEngine = () => {
  const isMobile = useIsMobile();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
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
          {/* Hero Section with Dark Aesthetic */}
          <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-10 md:py-20 px-4 mb-8 md:mb-16"
            aria-label="Hero section"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="text-center space-y-6 md:space-y-10">
                <h1 className={`font-black tracking-tighter leading-none text-white opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] ${
                  isMobile
                    ? 'text-5xl'
                    : 'text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl'
                }`}>
                  AI Briefing Engine
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white/90 font-semibold opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] max-w-5xl mx-auto px-2 md:px-0">
                  From Brand Brief to Professional Storyboard in Minutes
                </h2>

                <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards] px-3 md:px-4">
                  AI-powered briefing platform that transforms your brand vision into production-ready storyboards. Choose from 8 visual styles, delivered as professional PDFs.
                </p>

                <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards] flex gap-4 justify-center flex-wrap">
                  <button
                    className="px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.fuchsia.DEFAULT})`,
                      color: 'white',
                      boxShadow: `0 0 20px ${briefingPalette.holographic.cyan}40`
                    }}
                  >
                    Start Your Brief
                  </button>

                  <button
                    className="px-10 py-4 rounded-xl font-bold text-xl border-2 text-white transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: briefingPalette.cyan.glow,
                      background: 'transparent'
                    }}
                  >
                    See How It Works
                  </button>
                </div>

                <div className="mt-14 md:mt-16">
                  <BriefToStoryboardAnimation />
                </div>
              </div>
            </div>
          </section>

          <FadeIn>
            <StoryboardDivider sceneNumbers={[1, 2, 3]} />
          </FadeIn>

          <FadeIn>
            <VisualStylesGallery />
          </FadeIn>

          <FadeIn>
            <StoryboardDivider sceneNumbers={[2, 3, 4]} />
          </FadeIn>

          <BriefingProcessFlow />

          <FadeIn>
            <StoryboardDivider sceneNumbers={[3, 4, 5]} />
          </FadeIn>

          {/* AI Processing Visualization Section */}
          <section
            className="py-16 md:py-24 px-4"
            style={{
              background: `radial-gradient(circle at center, rgba(67, 56, 202, 0.05) 0%, transparent 70%)`,
            }}
          >
            <div className="container mx-auto max-w-7xl">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">
                  AI in Action
                </h2>
                <p
                  className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                  style={{ color: briefingPalette.text.secondary }}
                >
                  Watch our AI transform your brand brief into a professional storyboard
                  in real-time. Advanced neural processing creates production-ready
                  creative direction.
                </p>
              </div>

              {/* AI Processing Visual */}
              <AIProcessingVisual />

              {/* Bottom Context */}
              <div className="text-center mt-12 md:mt-16">
                <p
                  className="text-base md:text-lg"
                  style={{ color: briefingPalette.text.secondary }}
                >
                  Processing thousands of creative patterns to generate your{" "}
                  <span
                    className="font-bold"
                    style={{ color: briefingPalette.cyan.glow }}
                  >
                    unique storyboard
                  </span>
                </p>
              </div>
            </div>
          </section>

          <FadeIn>
            <StoryboardDivider sceneNumbers={[4, 5, 6]} />
          </FadeIn>

          <FadeIn>
            <BriefingCTA />
          </FadeIn>
        </main>
        </PageLayout>
      </div>
    </ReactLenis>
  );
};

export default BriefingEngine;
