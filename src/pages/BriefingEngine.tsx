import { Navigation } from "@/components/Navigation";
import { PageLayout } from "@/components/layouts/PageLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";
import { ReactLenis } from 'lenis/react';
import { StoryboardDivider } from "@/components/briefing/StoryboardDivider";
import { VisualStylesGallery } from "@/components/briefing/VisualStylesGallery";
import { BriefingCTA } from "@/components/briefing/BriefingCTA";
import { FadeIn } from "@/components/shared/FadeIn";

// Brand Colors for AI Briefing Engine - Dark Tech/Creative Hybrid Palette
export const briefingColors = {
  // Deep Indigo - AI Intelligence & Strategic Thinking
  indigo: {
    from: "#6366F1",    // Indigo-500 (gradient start, lighter glow)
    DEFAULT: "#4F46E5", // Indigo-600 (primary UI)
    to: "#4338CA"       // Indigo-700 (gradient end, deeper)
  },
  // Dark Cyan - Tech Success & Processing
  cyan: {
    from: "#06B6D4",    // Cyan-500 (neon tech accents)
    DEFAULT: "#0891B2", // Cyan-600 (primary success)
    to: "#0E7490"       // Cyan-700 (deeper flow)
  },
  // Deep Fuchsia - Creative Energy & Artistic Expression
  fuchsia: {
    from: "#D946EF",    // Fuchsia-500 (bright creative burst)
    DEFAULT: "#C026D3", // Fuchsia-600 (primary creative)
    to: "#A21CAF"       // Fuchsia-700 (deeper magenta)
  },
  // Deep Orange - Brand Accent & Speed
  orange: {
    DEFAULT: "#EA580C", // Orange-600 (Studios consistency)
  },
  // Holographic/Neon Accents (Tech Elements)
  holographic: {
    glow: "#818CF8",     // Indigo-400 (neon glows, particle effects)
    emerald: "#34D399",  // Emerald-400 (success indicators)
    cyan: "#22D3EE"      // Cyan-400 (tech flow lines)
  }
};

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
                      background: `linear-gradient(135deg, ${briefingColors.indigo.DEFAULT}, ${briefingColors.fuchsia.DEFAULT})`,
                      color: 'white',
                      boxShadow: `0 0 20px ${briefingColors.cyan.DEFAULT}50`
                    }}
                  >
                    Start Your Brief
                  </button>

                  <button
                    className="px-10 py-4 rounded-xl font-bold text-xl border-2 text-white transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: briefingColors.cyan.DEFAULT,
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
                      borderColor: `${briefingColors.holographic.glow}40`
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

          {/* Placeholder: BriefingProcessFlow with subtle dark gradient */}
          <section
            className="py-16 px-4"
            style={{
              background: `radial-gradient(circle at center, rgba(67, 56, 202, 0.03) 0%, transparent 70%)`
            }}
          >
            <div className="container mx-auto max-w-7xl">
              <div
                className="p-8 rounded-2xl border text-center"
                style={{
                  background: 'rgba(26, 26, 46, 0.4)',
                  borderColor: `${briefingColors.indigo.to}40`
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
      </div>
    </ReactLenis>
  );
};

export default BriefingEngine;
