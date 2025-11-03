import type { CSSProperties } from "react"

const FRAMES = [
  {
    id: "youtube",
    srLabel: "YouTube 16:9",
    aspect: "aspect-[16/9]",
    gradient: "from-[rgba(49,196,255,0.36)] via-[rgba(49,196,255,0.12)] to-transparent",
  },
  {
    id: "instagram",
    srLabel: "Instagram 1:1",
    aspect: "aspect-square",
    gradient: "from-[rgba(225,179,65,0.32)] via-[rgba(225,179,65,0.12)] to-transparent",
  },
  {
    id: "tiktok",
    srLabel: "TikTok 9:16",
    aspect: "aspect-[9/16]",
    gradient: "from-[rgba(142,220,255,0.32)] via-[rgba(49,196,255,0.14)] to-transparent",
  },
] as const

export function StudiosPlatformDemoSection() {
  return (
    <section
      id="studios-platform-demo"
      aria-labelledby="studios-platform-demo-title"
      data-motion-group="platform-demo"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(49,196,255,0.2),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(225,179,65,0.18),transparent_62%),linear-gradient(150deg,rgba(6,9,18,0.98) 0%,rgba(8,16,32,0.96) 48%,rgba(6,10,24,0.98) 100%)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.28)_0%,rgba(49,196,255,0)_70%)] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.26)_0%,rgba(225,179,65,0)_72%)] blur-[130px]" aria-hidden />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0">
        <div className="mx-auto max-w-3xl space-y-6 text-center text-white" data-motion="platform-demo-copy">
          <h2
            id="studios-platform-demo-title"
            className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            Six Formats. One Production.
          </h2>
          <p className="text-base font-medium uppercase tracking-[0.32em] text-white/60 md:text-[0.95rem]">
            YouTube 16:9. TikTok 9:16. Instagram 1:1, 4:5, Reels. LinkedIn. X. Facebook. Platform-native delivery without six separate productions.
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-studios-body md:text-[1.2rem]">
            <p>
              Most agencies repurpose one video across platforms—audiences notice. Pure AI tools generate separately—budgets explode.
            </p>
            <p>
              Our Studios delivers platform-optimized work from a single production process. Your clients get native content everywhere.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-10" data-motion="platform-demo-grid">
          {/* Mobile: Simple stacked grid */}
          <div className="grid gap-8 md:hidden">
            {FRAMES.map((frame, index) => (
              <MediaFrame
                key={frame.id}
                id={frame.id}
                aspect={frame.aspect}
                gradient={frame.gradient}
                srLabel={frame.srLabel}
                order={index + 1}
                className="mx-auto w-full max-w-[26rem]"
              />
            ))}
          </div>

          {/* Desktop: Static 3-format display */}
          <div
            className="relative hidden w-full md:block"
            data-motion="platform-demo-display"
            style={{
              perspective: "1400px",
              perspectiveOrigin: "50% 50%",
              minHeight: "32rem",
            }}
          >
            <div
              className="relative mx-auto w-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Instagram 1:1 - upper right, angled */}
              <MediaFrame
                id="instagram"
                aspect="aspect-square"
                gradient="from-[rgba(225,179,65,0.32)] via-[rgba(225,179,65,0.12)] to-transparent"
                srLabel="Instagram 1:1"
                order={1}
                className="absolute max-w-[26rem]"
                style={{
                  top: "-8rem",
                  left: "34rem",
                  transform: "rotateY(-48deg) translateZ(-400px) scale(0.72)",
                  opacity: 0.55,
                  zIndex: 2,
                }}
              />

              {/* TikTok 9:16 - left middle, angled */}
              <MediaFrame
                id="tiktok"
                aspect="aspect-[9/16]"
                gradient="from-[rgba(142,220,255,0.32)] via-[rgba(49,196,255,0.14)] to-transparent"
                srLabel="TikTok 9:16"
                order={2}
                className="absolute max-w-[22rem]"
                style={{
                  top: "-18rem",
                  left: "20rem",
                  transform: "rotateY(60deg) translateZ(-400px) scale(0.72)",
                  opacity: 0.55,
                  zIndex: 2,
                }}
              />

              {/* YouTube 16:9 - center bottom, front */}
              <MediaFrame
                id="youtube"
                aspect="aspect-[16/9]"
                gradient="from-[rgba(49,196,255,0.36)] via-[rgba(49,196,255,0.12)] to-transparent"
                srLabel="YouTube 16:9"
                order={3}
                className="absolute"
                style={{
                  top: "-19rem",
                  left: "50%",
                  transform: "translateX(calc(-50% + 6rem)) rotateY(-25deg) translateZ(-200px)",
                  opacity: 0.9,
                  zIndex: 3,
                  width: "37.5rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type MediaFrameProps = {
  id: string
  aspect: string
  gradient: string
  srLabel: string
  order: number
  className?: string
  style?: CSSProperties
}

function MediaFrame({ id, aspect, gradient, srLabel, order, className, style }: MediaFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.02] p-[1.5px] shadow-[0_80px_200px_-110px_rgba(8,15,32,0.92)] transition-all duration-500 ease-out hover:border-white/18 hover:shadow-[0_120px_260px_-120px_rgba(9,18,36,0.95)] ${className ?? ""}`}
      data-motion="platform-demo-frame"
      data-motion-order={order}
      data-frame-id={id}
      style={style}
    >
      <span className="sr-only">{srLabel}</span>
      <div className="relative overflow-hidden rounded-[28px] bg-white/[0.05] backdrop-blur-[18px]">
        <div className={`absolute inset-0 rounded-[28px] opacity-80 mix-blend-screen bg-gradient-to-br ${gradient}`} aria-hidden />
        <div
          className={`relative ${aspect} overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_50%_50%,rgba(8,12,26,0.6),rgba(8,12,26,0)_80%)]`}
          data-motion="platform-demo-placeholder"
        >
          <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.32),rgba(255,255,255,0)_55%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.4),rgba(0,0,0,0)_65%)]" aria-hidden />
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/55 via-black/25 to-transparent opacity-70" aria-hidden />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/14" aria-hidden />
        </div>
      </div>
    </div>
  )
}
