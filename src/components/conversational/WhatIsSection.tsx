import { ScrollFade } from "../shared/ScrollFade";

export const WhatIsSection = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/95 to-black/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.02)_0%,transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <ScrollFade>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-gradient text-center">
            What is a Conversational AI Agent?
          </h2>
        </ScrollFade>
        <div className="max-w-[90%] md:max-w-4xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-white/80">
          <ScrollFade delay={100}>
            <p className="leading-relaxed md:leading-normal">
              Conversational AI agents are intelligent virtual assistants designed to engage in natural, 
              human-like conversations with your customers. They leverage advanced natural language 
              processing (NLP) and machine learning (ML) to understand user intent, answer questions, 
              provide support, and even generate leads.
            </p>
          </ScrollFade>
          <ScrollFade delay={200}>
            <p className="leading-relaxed md:leading-normal">
              Unlike traditional chatbots with limited functionality, our Conversational AI agents are 
              highly sophisticated, capable of complex dialogue flows, personalized responses, and 
              seamless integration with your existing systems.
            </p>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};