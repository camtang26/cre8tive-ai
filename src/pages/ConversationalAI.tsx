import { Navigation } from "@/components/Navigation"
import { PageLayout } from "@/components/layouts/PageLayout"
import { ConversationalHero } from "@/components/conversational/ConversationalHero"
import { ConversationalUseCasesSection } from "@/components/conversational/ConversationalUseCasesSection"
import { ConversationalMarketingVideoSection } from "@/components/conversational/ConversationalMarketingVideoSection"
import { ConversationalScaleSection } from "@/components/conversational/ConversationalScaleSection"
import { ConversationalLiveDemoSection } from "@/components/conversational/ConversationalLiveDemoSection"
import { ConversationalBrandSection } from "@/components/conversational/ConversationalBrandSection"
import { ConversationalEnterpriseSection } from "@/components/conversational/ConversationalEnterpriseSection"
import { ConversationalContactCTASection } from "@/components/conversational/ConversationalContactCTASection"

const ConversationalAI = () => {
  return (
    <div className="relative min-h-screen">
      {/* Unified Page Background - Conversational AI Abyssal Emerald Theme */}
      {/* Matches Studios/Briefing Engine black-centric approach: 95%+ black, subtle emerald/teal hints */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(20, 241, 149, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(4,18,30,0.98) 0%, rgba(6,32,47,0.99) 100%)
          `,
        }}
      />

      <PageLayout>
        <Navigation />
        <main className="pt-20">
          {/* Section 1: Hero (VIDEO) */}
          <ConversationalHero />

          {/* Section 2: Use Cases (COPY) */}
          <ConversationalUseCasesSection />

          {/* Section 3: Full Marketing Video (VIDEO) */}
          <ConversationalMarketingVideoSection />

          {/* Section 4: Scale Without Headcount (COPY) */}
          <ConversationalScaleSection />

          {/* Section 5: Live Demo (~10min video with chapters) (VIDEO) */}
          <ConversationalLiveDemoSection />

          {/* Section 6: Brand Consistency (COPY) */}
          <ConversationalBrandSection />

          {/* Section 7: Enterprise Features (COPY) */}
          <ConversationalEnterpriseSection />

          {/* Section 8: Contact CTA (CTA) */}
          <ConversationalContactCTASection />
        </main>
      </PageLayout>
    </div>
  )
}

export default ConversationalAI
