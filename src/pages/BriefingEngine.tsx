import { Navigation } from "@/components/Navigation";
import { PageLayout } from "@/components/layouts/PageLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";
import { ReactLenis } from 'lenis/react';
import { StoryboardDivider } from "@/components/briefing/StoryboardDivider";
import { VisualStylesGallery } from "@/components/briefing/VisualStylesGallery";
import { BriefingCTA } from "@/components/briefing/BriefingCTA";
import { FadeIn } from "@/components/shared/FadeIn";

// Brand Colors for AI Briefing Engine
export const briefingColors = {
  purple: {
    light: "#A855F7",  // Purple 500
    DEFAULT: "#9333EA", // Purple 600
    dark: "#7C3AED"     // Purple 700
  },
  green: {
    light: "#84CC16",   // Lime 500
    DEFAULT: "#65A30D", // Lime 600
    dark: "#4D7C0F"     // Lime 700
  },
  pink: {
    light: "#F472B6",   // Pink 400
    DEFAULT: "#EC4899", // Pink 500
    dark: "#DB2777"     // Pink 600
  },
  orange: {
    DEFAULT: "#F97316", // Orange 500 (brand consistency)
  }
};

const BriefingEngine = () => {
  const isMobile = useIsMobile();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <PageLayout>
        <Helmet>
          <title>AI Briefing Engine | Transform Ideas to Storyboards in Minutes | Cre8tive AI</title>
          <meta
            name="description"
            content="AI-powered briefing platform for agencies and brands. Create professional storyboards with 8 visual styles. From brief to PDF in minutes."
          />
          <meta property="og:title" content="AI Briefing Engine | Cre8tive AI" />
          <meta
            property="og:description"
            content="Transform your brand brief into professional storyboards in minutes using AI. Choose from 8 visual styles."
          />
        </Helmet>

        <Navigation />

        <main className="pt-20">
          {/* Hero Section - Temporary placeholder, will be replaced with BriefingHero */}
          <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-10 md:py-20 px-4 mb-8 md:mb-16"
            style={{
              background: `linear-gradient(135deg, ${briefingColors.purple.dark} 0%, ${briefingColors.purple.DEFAULT} 50%, ${briefingColors.pink.DEFAULT} 100%)`
            }}
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
                      background: `linear-gradient(135deg, ${briefingColors.purple.DEFAULT}, ${briefingColors.pink.DEFAULT})`,
                      color: 'white',
                      boxShadow: `0 0 20px ${briefingColors.green.DEFAULT}50`
                    }}
                  >
                    Start Your Brief
                  </button>

                  <button
                    className="px-10 py-4 rounded-xl font-bold text-xl border-2 text-white transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: briefingColors.green.DEFAULT,
                      background: 'transparent'
                    }}
                  >
                    See How It Works
                  </button>
                </div>

                {/* Placeholder for BriefToStoryboardAnimation */}
                <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
                  <div
                    className="relative h-48 w-full max-w-4xl mx-auto rounded-2xl backdrop-blur-sm p-8 border"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderColor: `${briefingColors.green.DEFAULT}40`
                    }}
                  >
                    <div className="text-white/60 text-center">
                      <p className="text-lg font-semibold mb-2">Briefing Transformation Animation</p>
                      <p className="text-sm">Placeholder - Will show: Brief Form → AI Processing → Storyboard Panels → PDF Output</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <StoryboardDivider />

          <FadeIn>
            <VisualStylesGallery />
          </FadeIn>

          <StoryboardDivider />

          {/* Placeholder: BriefingProcessFlow coming soon */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div
                className="p-8 rounded-2xl border text-center"
                style={{
                  background: 'rgba(132, 204, 22, 0.05)',
                  borderColor: `${briefingColors.green.DEFAULT}40`
                }}
              >
                <h2 className="text-4xl font-black text-white mb-4">Briefing Process Flow</h2>
                <p className="text-white/60 text-lg">
                  4-step workflow visualization coming soon
                </p>
                <p className="text-white/40 text-sm mt-2">
                  Define Brand → Choose Style → AI Processing → Review & Handoff
                </p>
              </div>
            </div>
          </section>

          <StoryboardDivider />

          <FadeIn>
            <BriefingCTA />
          </FadeIn>
        </main>
      </PageLayout>
    </ReactLenis>
  );
};

export default BriefingEngine;
