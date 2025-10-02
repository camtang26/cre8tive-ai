import { Navigation } from "@/components/Navigation";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { StudiosIntro } from "@/components/studios/StudiosIntro";
import { ExpertiseBenefits } from "@/components/studios/ExpertiseBenefits";
import { MarketingSection } from "@/components/studios/MarketingSection";
import { B2BSection } from "@/components/studios/B2BSection";
import { Testimonials } from "@/components/studios/Testimonials";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";
import { PageLayout } from "@/components/layouts/PageLayout";

const Studios = () => {
  return (
    <PageLayout>
      <Navigation />
      <main className="pt-20">
        <StudiosHero />
        <FadeIn>
          <StudiosIntro />
        </FadeIn>
        <FadeIn>
          <ExpertiseBenefits />
        </FadeIn>
        <FadeIn>
          <MarketingSection />
        </FadeIn>
        <FadeIn>
          <B2BSection />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>
        <FadeIn>
          <ContactCTA />
        </FadeIn>
      </main>
    </PageLayout>
  );
};

export default Studios;