import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollFade } from "../shared/ScrollFade";

export const MarketingSection = () => {
  const agencies = [
    {
      title: "Stay Competitive",
      description: "AI video production allows you to offer cutting-edge services that set you apart from traditional agencies."
    },
    {
      title: "Scale Operations",
      description: "Handle more clients and projects without increasing your team size."
    },
    {
      title: "Boost Creativity",
      description: "Use AI to handle repetitive tasks, freeing up your team to focus on strategy and creative direction."
    },
    {
      title: "Deliver Faster Results",
      description: "Meet client deadlines with ease, improving client retention and satisfaction."
    }
  ];

  const clients = [
    {
      title: "Cost-Effective Solutions",
      description: "Get high-quality video content at a fraction of the cost of traditional production."
    },
    {
      title: "Faster Turnaround",
      description: "Launch campaigns quicker, capitalizing on trends and opportunities in real-time."
    },
    {
      title: "Data-Driven Content",
      description: "AI can analyze audience data to create videos that resonate better with your target market."
    },
    {
      title: "Consistency",
      description: "Maintain a consistent brand voice and style across all video content, even when producing at scale."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <ScrollFade>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 sm:mt-0 mb-12 md:mb-16 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
            Digital Marketing Agencies & Clients
          </h2>
        </ScrollFade>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Agencies Column */}
          <div className="space-y-6 md:space-y-8">
            <ScrollFade>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                Digital Marketing Agencies
              </h3>
            </ScrollFade>
            <div className="space-y-4 md:space-y-6">
              {agencies.map((item, index) => (
                <ScrollFade key={index} delay={index * 100}>
                  <div className="glass-morphism p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white/80">{item.description}</p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>

          {/* Clients Column */}
          <div className="space-y-6 md:space-y-8">
            <ScrollFade>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                Clients
              </h3>
            </ScrollFade>
            <div className="space-y-4 md:space-y-6">
              {clients.map((item, index) => (
                <ScrollFade key={index} delay={index * 100}>
                  <div className="glass-morphism p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white/80">{item.description}</p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>

        <ScrollFade delay={400}>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-8 italic [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
              "Ready to transform your video production process? With AI, you can create faster, save more, and stay ahead of the competition."
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
};
