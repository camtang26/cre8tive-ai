import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { ContactForm } from "@/components/ContactForm";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { Helmet } from "react-helmet";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { measurePerformance } from "@/utils/performanceMonitor";

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
      
      <div className="min-h-screen bg-[#111111]">
        <Navigation />
        <main>
          <div ref={heroRef}>
            <Hero />
          </div>
          
          <div ref={servicesRef}>
            <ScrollFade>
              <Services />
            </ScrollFade>
          </div>
          
          <ScrollFade delay={100}>
            <div className="container mx-auto px-4 py-2 sm:py-4 md:py-8">
              <QuoteCard
                quote="The question isn't whether AI will transform your business, but when and how."
                author="Satya Nadella"
                title="CEO of Microsoft"
              />
            </div>
          </ScrollFade>
          
          <div ref={galleryRef}>
            <ScrollFade delay={200}>
              <Gallery />
            </ScrollFade>
          </div>
          
          <ScrollFade delay={300}>
            <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden" aria-label="Contact us">
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
                }}
                aria-hidden="true"
              />
              
              <div className="container relative mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 sm:mb-4 md:mb-6 font-geist neon-glow-subtle">
                    Contact Us
                  </h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-4 sm:mb-6 md:mb-8 font-geist neon-glow-subtle">
                    Don't get left behind—AI is transforming businesses now.
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-8 neon-glow-subtle">
                    Reach out today to discover how Cre8tive AI's customized solutions—from AI-powered video production 
                    to autonomous AI agents and the Cre8tive AI Ad Manager—can streamline your operations, boost efficiency, 
                    and give you a competitive edge.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed neon-glow-subtle">
                    Act now and stay ahead of the curve. Contact us to explore smarter, more efficient solutions 
                    tailored to your goals, brand, and success.
                  </p>
                </div>
                
                <div className="max-w-xl mx-auto">
                  <ContactForm />
                </div>
              </div>
            </section>
          </ScrollFade>
        </main>
      </div>
      {endMeasure()}
    </>
  );
};

export default Index;