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
import { PageLayout } from "@/components/layouts/PageLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Studios = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      normalizeScroll: true,
      effects: true,
    });

    console.log("[ScrollSmoother] Initialized");

    return () => {
      smoother.kill();
      console.log("[ScrollSmoother] Killed");
    };
  }, []);
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

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <PageLayout>
            <Navigation />
            <main className="pt-20">
              <StudiosHero />
              {/* Sections now use GSAP scroll reveals - FadeIn wrappers removed */}
              <StudiosChallengeSection />
              <StudiosPortfolioSection />
              <StudiosProductionStackSection />
              <StudiosWorkflowSection />
              <StudiosStandardsSection />
              <StudiosPlatformDemoSection />
              <StudiosTestimonialsSection />
              <StudiosContactCTASection />
            </main>
          </PageLayout>
        </div>
      </div>
    </div>
  );
};

export default Studios;
