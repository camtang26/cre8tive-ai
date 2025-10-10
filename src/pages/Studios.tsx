import { Navigation } from "@/components/Navigation";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { PortfolioSection } from "@/components/studios/PortfolioSection";
import { MultiPlatformCards } from "@/components/studios/MultiPlatformCards"; // Story 2.2
import { ImageToVideoComparison } from "@/components/studios/ImageToVideoComparison"; // Story 2.3
import { TestimonialsSection } from "@/components/studios/TestimonialsSection"; // Story 2.4
import { StudiosIntro } from "@/components/studios/StudiosIntro";
import { ExpertiseBenefits } from "@/components/studios/ExpertiseBenefits";
import { WhoWeServe } from "@/components/studios/WhoWeServe";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";
import { PageLayout } from "@/components/layouts/PageLayout";
import { FilmStripDivider } from "@/components/studios/FilmStripDivider";
import { PORTFOLIO_DATA } from "@/data/studios/portfolio-data";
import { COMPARISON_DATA, COMPARISON_HEADER } from "@/data/studios/comparison-data"; // Story 2.3

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

          {/* Portfolio Section - Real Work. Real Results. */}
          <PortfolioSection
            portfolioItems={PORTFOLIO_DATA}
            ctaText="Start Your Project"
            ctaLink="https://cal.com/cameron-tang-121990/30min"
          />

          {/* Story 2.2: Multi-Platform Native Section */}
          <FadeIn>
            <MultiPlatformCards />
          </FadeIn>

          <FadeIn>
            <StudiosIntro />
          </FadeIn>
          <div className="container mx-auto px-4">
            <FilmStripDivider />
          </div>
          <FadeIn>
            <ExpertiseBenefits />
          </FadeIn>
          <div className="container mx-auto px-4">
            <FilmStripDivider />
          </div>

          {/* Story 2.3: Image-to-Video Quality Comparison */}
          <FadeIn>
            <ImageToVideoComparison
              title={COMPARISON_HEADER.title}
              subtitle={COMPARISON_HEADER.subtitle}
              comparison={COMPARISON_DATA}
            />
          </FadeIn>
          <div className="container mx-auto px-4">
            <FilmStripDivider />
          </div>

          <FadeIn>
            <WhoWeServe />
          </FadeIn>
          <div className="container mx-auto px-4">
            <FilmStripDivider />
          </div>
          {/* Story 2.4: Premium Testimonials with Staggered Reveals */}
          <TestimonialsSection />
          <FadeIn>
            <ContactCTA />
          </FadeIn>
        </main>
      </PageLayout>
    </div>
  );
};

export default Studios;