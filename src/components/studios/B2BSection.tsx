import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollFade } from "../shared/ScrollFade";

export const B2BSection = () => {
  const services = [
    {
      title: "Project Collaboration",
      description: "Integrate AI-generated content into your existing workflows to elevate quality and reduce production time."
    },
    {
      title: "Outsourcing Solutions",
      description: "Access reliable, high-quality media content without the need to expand your team or overhead."
    }
  ];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <ScrollFade>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
            B2B Media Services
          </h2>
        </ScrollFade>

        <ScrollFade delay={200}>
          <p className="text-lg md:text-xl text-white/90 text-center max-w-4xl mx-auto mb-10 md:mb-16 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
            We partner with traditional media agencies to supercharge their projects with cutting-edge AI capabilities. Our B2B services are designed to enhance creativity, efficiency, and scalability for your business.
          </p>
        </ScrollFade>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ScrollFade key={index} delay={300 + (index * 100)}>
              <div className="glass-morphism p-6 md:p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                  {service.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={500}>
          <p className="text-lg md:text-xl text-white/90 text-center max-w-4xl mx-auto mt-8 md:mt-12 mb-6 md:mb-8 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
            By combining your expertise with our AI-driven innovation, we help you deliver exceptional results to your clients while staying ahead of the competition.
          </p>
        </ScrollFade>
      </div>
    </section>
  );
};