import StudiosHeroPrototype from "@/components/hero-prototypes/StudiosHeroPrototype"
import ConversationalHeroPrototype from "@/components/hero-prototypes/ConversationalHeroPrototype"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const HeroPrototypeDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-930 to-slate-950 pb-24 text-white">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Epic 2 & 3 – Hero Prototype Lab</p>
            <h1 className="text-3xl font-bold sm:text-4xl">Video Hero Exploration</h1>
            <p className="max-w-3xl text-sm text-white/70 sm:text-base">
              Each prototype layers a motion-gated background video, dark-gradient overlays, multi-phase GSAP entrances,
              and reduced-motion fallbacks. Toggle between Studios and Conversational AI to compare copy frameworks,
              CTA clusters, and metric storytelling.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-10 max-w-6xl px-6">
        <Tabs defaultValue="studios" className="space-y-10">
          <TabsList className="bg-white/5">
            <TabsTrigger value="studios">Studios Hero</TabsTrigger>
            <TabsTrigger value="conversational">Conversational AI Hero</TabsTrigger>
          </TabsList>
          <TabsContent value="studios" className="space-y-6">
            <p className="text-sm text-white/70">
              Cinematic direction emphasising storyboard velocity and premium production value. CTA pair: “Book a
              Cinematic Briefing” + “View Visual Styles Gallery”. Metrics reinforce visual styles, turnaround, and approval
              rating.
            </p>
            <StudiosHeroPrototype />
          </TabsContent>
          <TabsContent value="conversational" className="space-y-6">
            <p className="text-sm text-white/70">
              Enterprise trust direction emphasising operational impact. CTA pair: “Schedule a Live Demo” + “Watch 10-min
              Live Run”. Metrics cover handle time, accuracy, and deployment speed.
            </p>
            <ConversationalHeroPrototype />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default HeroPrototypeDemo

