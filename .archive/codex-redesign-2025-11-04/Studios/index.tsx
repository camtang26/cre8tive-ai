import { Navigation } from "@/components/Navigation"
import { PageLayout } from "@/components/layouts/PageLayout"
import { VideoShowcasePattern } from "@/components/sections/VideoShowcasePattern"
import { StudiosHeroSection } from "./components/StudiosHeroSection"
import { StudiosHybridModelSection } from "./components/StudiosHybridModelSection"
import { StudiosProcessSection } from "./components/StudiosProcessSection"
import { StudiosPlatformDemosSection } from "./components/StudiosPlatformDemosSection"
import { StudiosCTASection } from "./components/StudiosCTASection"
import { StudiosPortfolioLazy } from "./loaders/PortfolioGrid.lazy"
import { StudiosTestimonialsLazy } from "./loaders/Testimonials.lazy"
import { getStudiosSection } from "./components/section-utils"
import { useSectionExposure } from "@/hooks/useSectionExposure"

const Studios = () => {
  const videoShowcaseSection = getStudiosSection("studios-video-showcase")
  const videoShowcaseRef = useSectionExposure(videoShowcaseSection.id)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060D] text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(49,196,255,0.18) 0%, transparent 55%), radial-gradient(circle at 85% 60%, rgba(225,179,65,0.2) 0%, transparent 50%), linear-gradient(130deg, rgba(5,6,13,0.95) 0%, rgba(20,25,45,0.98) 45%, rgba(15,18,33,1) 100%)',
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] -z-10 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.25)_0%,rgba(5,6,13,0)_70%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[460px] w-[460px] -z-10 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.2)_0%,rgba(5,6,13,0)_65%)] blur-[120px]" />
      <PageLayout>
        <Navigation />
        <main>
          <StudiosHeroSection />
          <StudiosHybridModelSection />
          <VideoShowcasePattern section={videoShowcaseSection} sectionRef={videoShowcaseRef} />
          <StudiosProcessSection />
          <StudiosPortfolioLazy />
          <StudiosTestimonialsLazy />
          <StudiosPlatformDemosSection />
          <StudiosCTASection />
        </main>
      </PageLayout>
    </div>
  )
}

export default Studios
