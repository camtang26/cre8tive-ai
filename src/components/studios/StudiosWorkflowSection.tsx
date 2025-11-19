import MuxPlayer from "@mux/mux-player-react/lazy"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const WORKFLOW_VIDEO_PLAYBACK_ID = "4NnXGTRPk600YHQcWNp02txb01yZ3jMHXRqFQMpOimXCQE"

export function StudiosWorkflowSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // --- 5. WORKFLOW: Data Stream ---
    // Sequential reveal of the complex diagram/video
    const workflowTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true
      }
    });

    workflowTl
      .fromTo(containerRef.current?.querySelectorAll('[data-reveal-workflow]') || [],
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );

    // Specific reveal for the video clip path
    gsap.fromTo('[data-motion="workflow-video"]',
       { clipPath: "inset(0% 100% 0% 0%)" }, // Wipe reveal
       {
          scrollTrigger: {
            trigger: '[data-motion="workflow-video"]',
            start: "top 80%",
            once: true
          },
          clipPath: "inset(0% 0% 0% 0%)", 
          duration: 1.2, 
          ease: "power4.out" 
       }
    );
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="studios-workflow"
      aria-labelledby="studios-workflow-title"
      data-motion-group="workflow"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(49,196,255,0.2),transparent_58%),radial-gradient(circle_at_86%_18%,rgba(225,179,65,0.18),transparent_60%),linear-gradient(160deg,rgba(6,9,18,0.98)_0%,rgba(9,16,32,0.96)_48%,rgba(6,11,24,0.98)_100%)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.8\' numOctaves=\'3\' stitchTiles=\'stitch\'%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'%3E%3C/svg%3E')]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.35)_0%,rgba(49,196,255,0)_70%)] blur-[110px]" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.3)_0%,rgba(225,179,65,0)_72%)] blur-[120px]" aria-hidden />

      <div className="container relative mx-auto px-4 md:px-6 xl:px-0">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
          <div className="order-2 max-w-3xl space-y-8 text-white lg:order-1" data-motion="workflow-copy">
            <div className="space-y-6">
              <h2
                data-reveal-workflow
                id="studios-workflow-title"
                className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.1rem] md:leading-[1.08] opacity-0"
              >
              Start Anywhere. Finish Strong.
            </h2>
            <p data-reveal-workflow className="text-lg leading-relaxed text-studios-body md:text-[1.2rem] opacity-0">
              Storyboards ready? Perfect. Starting from scratch? We've built creative tools for that. Our Studios delivers broadcast-quality work from any starting line—all within our secure production environment.
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-studios-body md:text-lg">
            <p data-reveal-workflow className="opacity-0">
              Most agencies bring storyboards—we execute them to broadcast quality standards. Some directors need full creative development—our BriefingEngine handles brief-to-storyboard in minutes, then Our Studios brings it to life.
            </p>
            <p data-reveal-workflow className="opacity-0">Your process. Your timeline. Your standards. Our secure infrastructure.</p>
            <p data-reveal-workflow className="opacity-0">
              This video shows our full workflow when clients need everything. But you don't need all of it. Cre8tive Studios adapts to where you are.
            </p>
          </div>
          </div>

          <div className="order-1 flex w-full justify-center lg:order-2" data-motion="workflow-visual">
            <figure className="relative w-full max-w-[72rem]">
              <div data-reveal-workflow className="group relative overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.02] p-[2px] shadow-[0_140px_280px_-120px_rgba(8,15,32,0.94)] transition-all duration-500 ease-out hover:border-white/18 hover:shadow-[0_180px_320px_-140px_rgba(9,18,36,0.95)] opacity-0" data-motion="workflow-video">
                <div className="relative overflow-hidden rounded-[32px] bg-white/[0.06] backdrop-blur-[22px]">
                  <div className="absolute inset-0 rounded-[32px] opacity-80 mix-blend-screen [background-image:radial-gradient(circle_at_18%_24%,rgba(49,196,255,0.38),rgba(49,196,255,0)_62%),radial-gradient(circle_at_82%_76%,rgba(225,179,65,0.28),rgba(225,179,65,0)_65%)]" aria-hidden />
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[32px]">
                    <MuxPlayer
                      playbackId={WORKFLOW_VIDEO_PLAYBACK_ID}
                      loading="viewport"
                      preload="none"
                      metadata={{
                        video_title: "Studios Workflow - Start Anywhere, Finish Strong",
                        viewer_user_id: "anonymous"
                      }}
                      streamType="on-demand"
                      controls
                      style={{
                        width: '100%',
                        height: '100%',
                        aspectRatio: '16/9',
                        '--media-object-fit': 'cover',
                        '--media-object-position': 'center',
                      } as React.CSSProperties}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/12" aria-hidden />
                </div>
              </div>

              <figcaption data-reveal-workflow className="mt-5 text-center text-sm leading-relaxed text-studios-body opacity-0" data-motion="workflow-caption">
                Full creative workflow: BriefingEngine (brief analysis) → Our Studios (production execution) → Platform-native delivery. Use all or part.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}