import { Navigation } from "@/components/Navigation";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { AiMarketingSolutions } from "@/components/agents/sections/AiMarketingSolutions";
import { HowItWorks } from "@/components/agents/sections/HowItWorks";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";
import { PageLayout } from "@/components/layouts/PageLayout";

const Agents = () => {
  return (
    <PageLayout>
      <Navigation />
      <main className="pt-20">
        <AgentsHero />
        <FadeIn>
          <AiMarketingSolutions />
        </FadeIn>
        <FadeIn>
          <HowItWorks />
        </FadeIn>
        <FadeIn>
          <ContactCTA />
        </FadeIn>
      </main>
    </PageLayout>
  );
};

export default Agents;