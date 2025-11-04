import { Navigation } from "@/components/Navigation";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { StudiosChallengeSection } from "@/components/studios/StudiosChallengeSection";
import { StudiosPortfolioSection } from "@/components/studios/StudiosPortfolioSection";
import { StudiosProductionStackSection } from "@/components/studios/StudiosProductionStackSection";
import { StudiosWorkflowSection } from "@/components/studios/StudiosWorkflowSection";
import { StudiosStandardsSection } from "@/components/studios/StudiosStandardsSection";
import { StudiosPlatformDemoSection } from "@/components/studios/StudiosPlatformDemoSection";
import { StudiosTestimonialsSection } from "@/components/studios/StudiosTestimonialsSection";
import { StudiosContactCTASection } from "@/components/studios/StudiosContactCTASection";
import { FadeIn } from "@/components/shared/FadeIn";
import { PageLayout } from "@/components/layouts/PageLayout";

const Studios = () => {
  return (
    <div className="relative min-h-screen">
      {/* Unified Page Background - Studios Orange/Teal Theme */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(13,13,29,0.98) 100%)
          `,
        }}
      />

      <PageLayout>
        <Navigation />
        <main className="pt-20">
          <StudiosHero />
          <FadeIn>
            <StudiosChallengeSection />
          </FadeIn>
          <FadeIn>
            <StudiosPortfolioSection />
          </FadeIn>
          <FadeIn>
            <StudiosProductionStackSection />
          </FadeIn>
          <FadeIn>
            <StudiosWorkflowSection />
          </FadeIn>
          <FadeIn>
            <StudiosStandardsSection />
          </FadeIn>
          <FadeIn>
            <StudiosPlatformDemoSection />
          </FadeIn>
          <StudiosTestimonialsSection />
          <StudiosContactCTASection />
        </main>
      </PageLayout>
    </div>
  );
};

export default Studios;
