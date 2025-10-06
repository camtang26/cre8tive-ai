import { ScrollFade } from "../shared/ScrollFade";
import { Building2, Users } from "lucide-react";

export const WhoWeServe = () => {
  const brandColors = {
    orange: "#F97316",  // Studios Orange
    teal: "#14B8A6",    // Studios Teal
  };

  const agencies = [
    {
      title: "Stay Competitive",
      description: "Offer cutting-edge AI video services that set you apart from traditional agencies."
    },
    {
      title: "Scale Operations",
      description: "Handle more clients and projects without increasing team size or overhead."
    },
    {
      title: "Project Collaboration",
      description: "Integrate AI-generated content into existing workflows to elevate quality and reduce production time."
    }
  ];

  const clients = [
    {
      title: "Cost-Effective Solutions",
      description: "High-quality video content at a fraction of traditional production costs."
    },
    {
      title: "Faster Turnaround",
      description: "Launch campaigns quicker, capitalizing on trends and opportunities in real-time."
    },
    {
      title: "Data-Driven Content",
      description: "AI analyzes audience data to create videos that resonate with your target market."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient text-center mb-6 md:mb-8 tracking-tighter leading-none">
            Who We Serve
          </h2>
        </ScrollFade>

        <ScrollFade delay={200}>
          <p className="text-lg md:text-xl text-white/90 text-center max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
            We partner with media agencies and businesses to supercharge their projects with cutting-edge AI capabilities.
            Transform your video production process and stay ahead of the competition.
          </p>
        </ScrollFade>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Agencies Column - Orange Accent */}
          <div className="space-y-6">
            <ScrollFade>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${brandColors.orange}20`,
                    border: `1px solid ${brandColors.orange}40`
                  }}
                >
                  <Building2 className="w-6 h-6" style={{ color: brandColors.orange }} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Marketing Agencies
                </h3>
              </div>
            </ScrollFade>
            <div className="space-y-4">
              {agencies.map((item, index) => (
                <ScrollFade key={index} delay={300 + (index * 100)}>
                  <div
                    className="glass-morphism p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: `${brandColors.orange}20`,
                      background: 'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.8))'
                    }}
                  >
                    <h4
                      className="text-xl font-bold mb-2"
                      style={{ color: brandColors.orange }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>

          {/* Clients Column - Teal Accent */}
          <div className="space-y-6">
            <ScrollFade>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${brandColors.teal}20`,
                    border: `1px solid ${brandColors.teal}40`
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: brandColors.teal }} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Business Clients
                </h3>
              </div>
            </ScrollFade>
            <div className="space-y-4">
              {clients.map((item, index) => (
                <ScrollFade key={index} delay={300 + (index * 100)}>
                  <div
                    className="glass-morphism p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: `${brandColors.teal}20`,
                      background: 'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.8))'
                    }}
                  >
                    <h4
                      className="text-xl font-bold mb-2"
                      style={{ color: brandColors.teal }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
