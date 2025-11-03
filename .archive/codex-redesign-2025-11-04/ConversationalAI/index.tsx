import { Navigation } from "@/components/Navigation"
import { PageLayout } from "@/components/layouts/PageLayout"
import { VideoShowcasePattern } from "@/components/sections/VideoShowcasePattern"
import { ConversationalHeroSection } from "./components/ConversationalHeroSection"
import { ConversationalUseCasesSection } from "./components/ConversationalUseCasesSection"
import { ConversationalScaleSection } from "./components/ConversationalScaleSection"
import { ConversationalBrandSection } from "./components/ConversationalBrandSection"
import { ConversationalEnterpriseSection } from "./components/ConversationalEnterpriseSection"
import { ConversationalCTASection } from "./components/ConversationalCTASection"
import { ConversationalLiveDemoLazy } from "./loaders/LiveDemo.lazy"
import { getConversationalSection } from "./components/section-utils"
import { useSectionExposure } from "@/hooks/useSectionExposure"

const ConversationalAI = () => {
  const showcaseSection = getConversationalSection("conversational-video-showcase")
  const showcaseRef = useSectionExposure(showcaseSection.id)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04121E] text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 25% 25%, rgba(22,240,161,0.18) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(11,203,255,0.2) 0%, transparent 55%), linear-gradient(140deg, rgba(4,18,30,0.98) 0%, rgba(6,40,62,0.96) 50%, rgba(4,52,60,1) 100%)',
        }}
      />
      <div className="pointer-events-none absolute top-[-30%] left-[-20%] h-[420px] w-[420px] -z-10 rounded-full bg-[radial-gradient(circle,rgba(22,240,161,0.25)_0%,rgba(4,18,30,0)_70%)] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-25%] right-[-15%] h-[460px] w-[460px] -z-10 rounded-full bg-[radial-gradient(circle,rgba(11,203,255,0.25)_0%,rgba(4,18,30,0)_65%)] blur-[140px]" />
      <PageLayout>
        <Navigation />
        <main>
          <ConversationalHeroSection />
          <ConversationalUseCasesSection />
          <VideoShowcasePattern section={showcaseSection} sectionRef={showcaseRef} />
          <ConversationalScaleSection />
          <ConversationalLiveDemoLazy />
          <ConversationalBrandSection />
          <ConversationalEnterpriseSection />
          <ConversationalCTASection />
        </main>
      </PageLayout>
    </div>
  )
}

export default ConversationalAI
