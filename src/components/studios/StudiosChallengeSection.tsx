import { useRef } from "react"
import { AlertTriangle, CheckCircle2, XCircle, ShieldAlert, Layers, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const PAIN_POINTS = [
  {
    id: "traditional",
    label: "Traditional Agencies",
    icon: Clock,
    summary: "8-week timelines, $50K minimums, stacked teams that bill for every revision, and your assets scattered across multiple vendors.",
    accent: "rgba(239, 68, 68, 0.5)", // Red
  },
  {
    id: "ai-tools",
    label: "Pure AI Tools",
    icon: Layers,
    summary: "Fast but fragile—artifacts, generic lighting, zero human direction, and your creative IP exposed on third-party platforms.",
    accent: "rgba(234, 179, 8, 0.5)", // Yellow
  },
  {
    id: "in-house",
    label: "Building In-House",
    icon: ShieldAlert,
    summary: "Full crew salaries, gear investments, perpetual upskilling just to keep pace, and internal infrastructure security burden as production scales.",
    accent: "rgba(249, 115, 22, 0.5)", // Orange
  },
] as const

export function StudiosChallengeSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true
      }
    });

    // 1. Header Text
    tl.fromTo(".challenge-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );

    // 2. Pain Point Cards (Staggered Fall-in)
    tl.fromTo(".pain-card",
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)" },
      "-=0.4"
    );

    // 3. Solution Card (Expand)
    tl.fromTo(".solution-card",
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out" },
      "-=0.2"
    );

  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="studios-challenge"
      aria-labelledby="studios-challenge-title"
      className="relative isolate overflow-hidden bg-studios-void py-32 md:py-40"
    >
      {/* Background Grid (Distorted) */}
      <div className="absolute inset-0 -z-10 opacity-[0.07]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }} 
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header Area */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <div className="space-y-6">
            <div className="challenge-header inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 font-mono text-xs uppercase tracking-widest">
              <AlertTriangle className="w-3 h-3" />
              System Critical
            </div>
            <h2
              id="studios-challenge-title"
              className="challenge-header font-outfit text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]"
            >
              Every Option <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Has Flaws.
              </span>
            </h2>
          </div>
          <div className="challenge-header space-y-6 text-lg text-white/60 leading-relaxed max-w-xl">
            <p>Traditional agencies demand eight weeks and $50K minimums. Pure AI tools deliver amateur work that screams "generated." Building in-house requires teams, equipment, and expertise most can't justify.</p>
            <p>Meanwhile, clients need broadcast-quality video across six platforms. Yesterday. At budgets that actually make sense.</p>
            <p>Few have mastered AI video production—it only emerged in 2023. Fewer still maintain broadcast quality standards. Cre8tive Studios is one of them.</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-8">
          
          {/* The Pain Points (Grid) */}
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((item) => (
              <article
                key={item.id}
                className="pain-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10"
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top right, ${item.accent}, transparent 70%)` }}
                />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white/70" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <XCircle className="w-4 h-4 text-red-500/70" />
                    <h3 className="font-mono text-xs uppercase tracking-widest text-white/50">{item.label}</h3>
                  </div>
                  
                  <p className="text-lg text-white leading-relaxed">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>

          {/* The Solution (Monolith) */}
          <article className="solution-card relative overflow-hidden rounded-3xl border border-studios-primary/30 bg-gradient-to-br from-studios-void to-studios-steel p-8 md:p-12 shadow-[0_0_60px_-20px_rgba(20,184,166,0.2)]">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30 mix-blend-screen">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.4),transparent_60%)]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.3),transparent_60%)]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3" />
                  Optimized Solution
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Broadcast-quality AI production,<br />
                  <span className="text-white/50">on your clock.</span>
                </h3>
                
                <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                  We pair human directors with AI mastery to deliver up to six platform-native formats from a single pipeline. No rework. No compromise.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                {[
                  "Storyboard-to-finish workflows",
                  "Platform-specific outputs (YouTube, TikTok, IG)",
                  "Mastered since 2023",
                  "Secure production environment"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981] group-hover:scale-150 transition-transform" />
                    <span className="text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-colors leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
