import React from 'react';
import { PhoneCall, Sun, User, GitMerge, Speech, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "../shared/ScrollFade";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature = ({ icon, title, description, delay = 0 }: FeatureProps) => (
  <ScrollFade delay={delay}>
    <div className={cn(
      "p-3 md:p-8 rounded-xl glass-morphism hover-lift transition-all duration-500 text-center",
      "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
      "border border-white/10 group h-[250px] md:h-full md:min-h-[400px] flex flex-col justify-start"
    )}>
      <div className="mb-3 md:mb-6 relative group-hover:animate-pulse flex justify-center">
        {React.cloneElement(icon as React.ReactElement, {
          className: cn(
            "w-8 h-8 md:w-16 md:h-16 transition-all duration-300 text-[#00ff80]",
            "drop-shadow-[0_0_20px_rgba(0,255,128,0.5)]",
            "group-hover:drop-shadow-[0_0_40px_rgba(0,255,128,0.7)]"
          )
        })}
      </div>
      <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-xs md:text-base text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  </ScrollFade>
);

export const FeaturesSection = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/98 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.02)_0%,transparent_60%)]" />
      </div>
      <div className="container mx-auto px-3 md:px-4 relative">
        <ScrollFade>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-16 text-gradient text-center">
            Unleash the Power of Key Features & Capabilities
          </h2>
        </ScrollFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <Feature 
            icon={<PhoneCall />}
            title="Automated Phone Calls with Real Numbers"
            description="Revolutionize your customer communication with our AI's ability to make and receive calls using real, dedicated phone numbers. Automate outbound campaigns, appointment reminders, and follow-ups while maintaining a personalized touch. Our AI handles complex call flows and analyzes sentiment in real-time."
            delay={100}
          />
          <Feature 
            icon={<Sun />}
            title="24/7 Availability & Instant Response"
            description="Provide instant support and engagement around the clock, improving customer satisfaction and freeing up your human team to focus on higher-value tasks. Our AI agents are always available to answer questions, resolve issues, and capture leads."
            delay={200}
          />
          <Feature 
            icon={<User />}
            title="Personalized Interactions at Scale"
            description="Deliver tailored conversations that resonate with individual customers, even at scale. Our AI agents access customer data and preferences to personalize interactions, creating a more engaging and relevant experience that drives conversions."
            delay={300}
          />
          <Feature 
            icon={<GitMerge />}
            title="Seamless Integration with Your Systems"
            description="Integrate seamlessly with your CRM, marketing automation platforms, and other business systems to streamline workflows, improve data collection, and gain a holistic view of your customer interactions."
            delay={400}
          />
          <Feature 
            icon={<Speech />}
            title="Advanced Natural Language Understanding"
            description="Our AI agents possess advanced natural language understanding capabilities, allowing them to comprehend and respond to complex language, including slang, colloquialisms, and nuanced phrasing. This ensures more natural and effective conversations."
            delay={500}
          />
          <Feature 
            icon={<BarChart2 />}
            title="Real-Time Sentiment Analysis & Optimization"
            description="Monitor the emotional tone of customer interactions in real-time, allowing you to identify potential issues and optimize conversations for maximum impact. Use sentiment data to improve agent performance and tailor your messaging for better results."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};
