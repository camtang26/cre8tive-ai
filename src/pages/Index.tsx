import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { CinematicQuote } from "@/components/quotes/CinematicQuote";
import { ContactForm } from "@/components/ContactForm";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { GradientButton } from "@/components/ui/gradient-button";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet-async";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { measurePerformance } from "@/utils/performanceMonitor";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const heroRef = useOptimizedAnimation({ delay: 100 });
  const servicesRef = useOptimizedAnimation({ delay: 200 });
  const galleryRef = useOptimizedAnimation({ delay: 300 });

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
        <main>
          <div ref={heroRef}>
            <Hero />
          </div>

          {/* Services */}
          <div ref={servicesRef}>
            <ScrollFade>
              <Services />
            </ScrollFade>
          </div>

          {/* Cinematic Quote */}
          <ScrollFade delay={100}>
            <CinematicQuote
              quote="The question isn't whether AI will transform your business, but when and how."
              author="Satya Nadella"
              title="CEO of Microsoft"
            />
          </ScrollFade>
          
          <div ref={galleryRef}>
            <ScrollFade delay={200}>
              <Gallery />
            </ScrollFade>
          </div>
          
          <ScrollFade delay={300}>
            <section className="py-16 sm:py-24 md:py-32 relative" aria-label="Contact us">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-text mb-6 font-geist leading-none">
                    Ready to Transform?
                  </h2>
                  <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
                    Don't get left behind—AI is transforming businesses now.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                    Reach out today to discover how our AI solutions can streamline your operations and boost efficiency.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="glass-card-medium p-8 md:p-10 lg:p-12 rounded-3xl">
                    <ContactForm />
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