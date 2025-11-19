import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export function StudiosStandardsSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // --- 6. STANDARDS: The Shell ---
    gsap.fromTo('[data-motion="standards-shell"]',
      { scale: 0.92, opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        },
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out"
      }
    );
    
    // Internal standards text reveal
    ScrollTrigger.batch(containerRef.current?.querySelectorAll('[data-reveal-standard]') || [], {
      start: "top 85%",
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power2.out" }
        );
      }
    });
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="studios-standards"
      aria-labelledby="studios-standards-title"
      data-motion-group="standards"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(49,196,255,0.18),transparent_58%),radial-gradient(circle_at_82%_16%,rgba(225,179,65,0.16),transparent_60%),linear-gradient(150deg,rgba(6,9,18,0.98)_0%,rgba(8,14,28,0.96)_48%,rgba(5,10,24,0.98)_100%)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.6\' numOctaves=\'3\' stitchTiles=\'stitch\'%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'%3E%3C/svg%3E')]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.3)_0%,rgba(49,196,255,0)_70%)] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.24)_0%,rgba(225,179,65,0)_72%)] blur-[130px]" aria-hidden />

      <div className="container relative mx-auto max-w-5xl px-4 md:px-6 xl:px-0">
        <div className="relative overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.03] p-[2px] shadow-[0_120px_260px_-120px_rgba(8,15,32,0.92)] opacity-0" data-motion="standards-shell">
          <div className="relative overflow-hidden rounded-[36px] bg-white/[0.05] backdrop-blur-[20px]">
            <div className="absolute inset-0 opacity-80 mix-blend-screen [background-image:radial-gradient(circle_at_16%_24%,rgba(49,196,255,0.24),rgba(49,196,255,0)_58%),radial-gradient(circle_at_82%_78%,rgba(225,179,65,0.2),rgba(225,179,65,0)_62%)]" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-transparent to-black/55 opacity-70" aria-hidden />
            <div className="relative z-10 space-y-8 px-8 py-20 md:space-y-10 md:px-14">
              <h2
                data-reveal-standard
                id="studios-standards-title"
                className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.2rem] md:leading-[1.08] opacity-0"
                data-motion="standards-title"
              >
                This Isn't for Everyone
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-studios-body md:text-[1.2rem]" data-motion="standards-body">
                <p data-reveal-standard className="opacity-0">
                  If you need broadcast-quality work that meets real production standards, we're one of the few studios that can deliver. If you need it rushed and cheap, we're not the right fit.
                </p>
                <p data-reveal-standard className="opacity-0">
                  We work with agencies serving premium clients. Directors managing complex productions. Businesses that can't compromise on output quality.
                </p>
                <p data-reveal-standard className="opacity-0">
                  Quality takes mastery, time, and iteration. So does security. We don't compromise on either. Cre8tive Studios has been refining both since 2023.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/12" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}