import { Clock, DollarSign, Layers, Shield, Award, Rocket, Brain, Wand2 } from "lucide-react";
import { BenefitCard } from "./benefits/BenefitCard";
import { ExpertiseCard } from "./benefits/ExpertiseCard";
import { ComparisonTable } from "./benefits/ComparisonTable";
import { ScrollFade } from "@/components/shared/ScrollFade";

export const ExpertiseBenefits = () => {
  const brandColors = {
    blue: "#0EA5E9",    // Ocean blue
    orange: "#F97316",  // Bright orange
    green: "#10B981"    // Bright green
  };

  const benefits = [
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Imagine getting professional-quality videos in a fraction of the time. Our AI-powered workflows automate the tedious parts, streamline the creative process, and significantly reduce turnaround times.",
      color: brandColors.blue
    },
    {
      icon: DollarSign,
      title: "Cost-Effectiveness",
      description: "Traditional video production often involves large crews, expensive equipment, and lengthy post-production. Cre8tive AI Studios cuts out these unnecessary costs, making high-quality video production accessible to all businesses.",
      color: brandColors.orange
    },
    {
      icon: Layers,
      title: "Scalability & Flexibility",
      description: "Need videos for different platforms or campaigns? AI video production lets you scale your content creation easily. Adapt your videos for various formats and languages, reaching a wider audience without extra effort or expense.",
      color: brandColors.green
    },
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description: "While speed and cost are important, we never sacrifice quality. Our AI algorithms learn from vast amounts of professional video content, guaranteeing visually stunning videos, compelling stories, and a polished final product.",
      color: brandColors.blue
    }
  ];

  const expertiseItems = [
    {
      icon: Award,
      title: "Early Adopters & Innovators",
      description: "We've been working with AI video since the technology first emerged in 2023. We've seen it evolve, experimented with every new tool and update, and understand its nuances inside and out."
    },
    {
      icon: Rocket,
      title: "Masters of the AI Toolkit",
      description: "We use 30+ AI tools—from video generation and editing to image processing and more. This allows us to select the perfect combination for each project, maximizing the quality of your videos."
    },
    {
      icon: Brain,
      title: "Streamlined for Success",
      description: "We've developed our own efficient workflows for AI video production. This means smooth, consistent results without creative compromises."
    },
    {
      icon: Wand2,
      title: "Creativity Meets Technology",
      description: "Our team blends artistic creativity with technical expertise. Every video we produce is not only visually impressive but also strategically designed to achieve your business goals."
    }
  ];

  return (
    <section 
      className="py-16 md:py-32 relative overflow-hidden" 
      aria-label="Expertise and benefits section"
    >
      {/* Main Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
        }}
      />
      
      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-16 md:mb-32 relative z-10">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-8 md:mb-16 tracking-tight">
            Get More From Your Video Content
          </h2>
        </ScrollFade>
        <ScrollFade delay={200}>
          <div className="max-w-3xl mx-auto text-base md:text-lg text-white/80 space-y-4 md:space-y-8 mb-8 md:mb-16 leading-relaxed md:leading-loose">
            <p>
              Video content is essential for success in today's digital world. But traditional production methods can be slow, costly, and complicated. Cre8tive AI Studios offers a smarter approach: AI-driven video production that delivers exceptional results faster, more efficiently, and more affordably.
            </p>
          </div>
        </ScrollFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <ScrollFade key={index} delay={300 + (index * 100)}>
              <BenefitCard
                Icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                color={benefit.color}
                index={index}
              />
            </ScrollFade>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="container mx-auto px-4 mb-16 md:mb-32 relative z-10">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-8 md:mb-16 tracking-tight">
            The Craft of AI Video: Expertise Makes the Difference
          </h2>
        </ScrollFade>
        <ScrollFade delay={200}>
          <div className="max-w-3xl mx-auto text-base md:text-lg text-white/80 space-y-4 md:space-y-8 mb-8 md:mb-16 leading-relaxed md:leading-loose">
            <p>
              Creating truly effective AI videos takes more than just a few prompts. It demands a deep understanding of the rapidly changing AI video world, hands-on experience with a wide range of specialized tools, and a strong creative vision. At Cre8tive AI Studios, that's exactly what we offer.
            </p>
          </div>
        </ScrollFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {expertiseItems.map((item, index) => (
            <ScrollFade key={index} delay={300 + (index * 100)}>
              <ExpertiseCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            </ScrollFade>
          ))}
        </div>
        <ScrollFade delay={800}>
          <div className="max-w-3xl mx-auto text-base md:text-lg text-white/80 mt-8 md:mt-16 leading-relaxed md:leading-loose">
            <p>
              AI video is constantly getting more sophisticated, with more tools and more complex workflows. It takes real expertise to navigate this landscape effectively. Cre8tive AI Studios takes care of the technical complexities so you can concentrate on your message and your business.
            </p>
          </div>
        </ScrollFade>
      </div>

      <div className="container mx-auto px-4 mb-16 sm:mb-24 md:mb-32 relative z-10">
        <ScrollFade>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-8 sm:mb-12 md:mb-16 tracking-tight">
            AI Video vs. Traditional: A Clear Advantage
          </h2>
        </ScrollFade>
        <ScrollFade delay={200}>
          <ComparisonTable />
        </ScrollFade>
      </div>

      {/* Future Section */}
      <div className="container mx-auto px-4 relative z-10">
        <ScrollFade>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mt-8 sm:mt-0 mb-4 md:mb-8 tracking-tight">
            The Future of Video is Intelligent
          </h2>
        </ScrollFade>
        <ScrollFade delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed md:leading-relaxed lg:leading-relaxed mt-6 sm:mt-0 mb-6 md:mb-12 max-w-3xl mx-auto text-center px-4 md:px-0">
            As AI technology continues to evolve, the possibilities for video production become even more exciting. 
            Stay ahead of the curve with Cre8tive AI Studios and embrace the future of content creation today.
          </p>
        </ScrollFade>
      </div>
    </section>
  );
};
