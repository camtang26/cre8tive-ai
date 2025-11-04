import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudioHero6_AuroraCommandCenter from "./prototypes/studios-hero/StudioHero6_AuroraCommandCenter"

const StudiosHeroPrototypes = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Studios · Hero Prototype Lab</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Film Noir Hero Explorations</h1>
          <p className="max-w-3xl text-white/70">
            Explore Codex hero concepts built on the Film Noir Gradient palette. This collection will expand; currently it
            showcases the Aurora Command Center concept with full video background integration and glassmorphism UI.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <Tabs defaultValue="aurora-command-center" className="space-y-10">
          <TabsList className="bg-white/5">
            <TabsTrigger value="aurora-command-center">Aurora Command Center</TabsTrigger>
          </TabsList>
          <TabsContent value="aurora-command-center">
            <StudioHero6_AuroraCommandCenter />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default StudiosHeroPrototypes

