import { Navigation } from "@/components/Navigation";
import { CinematicHero } from "@/components/home/redesign/CinematicHero";
import { MonolithServices } from "@/components/home/redesign/MonolithServices";
import { ParallaxGallery } from "@/components/home/redesign/ParallaxGallery";
import { CinematicQuote } from "@/components/quotes/CinematicQuote";
import { ContactForm } from "@/components/ContactForm";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet-async";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { measurePerformance } from "@/utils/performanceMonitor";

const Index = () => {
  // Measure component render time
  const endMeasure = measurePerformance('Index');
  
  return (
    <>
      <Helmet>
        <title>Cre8tive AI - AI-Powered Video Production & Content Creation</title>
        <meta
          name="description"
          content="Transform your business with AI-powered video production, autonomous agents, and innovative content creation solutions. Cre8tive AI helps you stay ahead of the competition."
        />
        <link rel="canonical" href="https://cre8tive.ai" />
      </Helmet>

      <PageLayout>
        <Navigation />
        <main className="bg-black selection:bg-cyan-500/30">
          
          <CinematicHero />

          <MonolithServices />

          <CinematicQuote
            quote="The question isn't whether AI will transform your business, but when and how."
            author="Satya Nadella"
            title="CEO of Microsoft"
          />
          
          <ParallaxGallery />
          
          <ScrollFade delay={300}>
            <section className="py-24 md:py-32 relative bg-black overflow-hidden" aria-label="Contact us">
               {/* Grid Background */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                  backgroundSize: '60px 60px'
                }}
              />

              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-6 block">
                    // Start Your Journey
                  </span>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 font-geist leading-none tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Transform?</span>
                  </h2>
                  <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Don't get left behind—AI is transforming businesses now. Reach out today to streamline your operations.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="glass-card-heavy p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl relative group">
                     <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                    <div className="relative z-10">
                       <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFade>
        </main>
      </PageLayout>
      {endMeasure()}
    </>
  );
};

export default Index;