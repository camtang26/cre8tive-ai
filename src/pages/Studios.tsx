import { Suspense, lazy } from "react";
import { Navigation } from "@/components/Navigation";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { PageLayout } from "@/components/layouts/PageLayout";

// Lazy load below-the-fold sections to improve initial load performance
const StudiosChallengeSection = lazy(() => import("@/components/studios/StudiosChallengeSection").then(module => ({ default: module.StudiosChallengeSection })));
const StudiosPortfolioSection = lazy(() => import("@/components/studios/StudiosPortfolioSection").then(module => ({ default: module.StudiosPortfolioSection })));
const StudiosProductionStackSection = lazy(() => import("@/components/studios/StudiosProductionStackSection").then(module => ({ default: module.StudiosProductionStackSection })));
const StudiosWorkflowSection = lazy(() => import("@/components/studios/StudiosWorkflowSection").then(module => ({ default: module.StudiosWorkflowSection })));
const StudiosStandardsSection = lazy(() => import("@/components/studios/StudiosStandardsSection").then(module => ({ default: module.StudiosStandardsSection })));
const StudiosPlatformDemoSection = lazy(() => import("@/components/studios/StudiosPlatformDemoSection").then(module => ({ default: module.StudiosPlatformDemoSection })));
const StudiosTestimonialsSection = lazy(() => import("@/components/studios/StudiosTestimonialsSection").then(module => ({ default: module.StudiosTestimonialsSection })));
const StudiosContactCTASection = lazy(() => import("@/components/studios/StudiosContactCTASection").then(module => ({ default: module.StudiosContactCTASection })));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-studios-orange/30 border-t-studios-orange rounded-full animate-spin" />
  </div>
);

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

      <PageLayout variant="custom">
        <Navigation />
        <main className="pt-20">
          <StudiosHero />
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosChallengeSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosPortfolioSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosProductionStackSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosWorkflowSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosStandardsSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosPlatformDemoSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosTestimonialsSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StudiosContactCTASection />
          </Suspense>
        </main>
      </PageLayout>
    </div>
  );
};

export default Studios;
