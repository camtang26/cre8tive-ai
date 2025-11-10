import type { CSSProperties } from "react"
import MuxPlayer from "@mux/mux-player-react/lazy"
import { useSectionReveal, SectionRevealPresets } from '@/hooks/useSectionReveal';

// Mux Playback IDs for platform-specific demo videos
const PLAYBACK_IDS = {
  youtube: "nu3R359NW5Hp9OoNhrMTjixxBvG02fLgjY801lyuJYeSw",      // 16:9 landscape
  instagram: "B02GR14h5RZ5KbLLhJI027E5ebPgZcB6dYCNgCrrAfSsM",   // 1:1 square
  tiktok: "013eJs2BVMMvDtX5DbSJsG9SqCiMMAZOHRpCM8ngxojI",      // 9:16 portrait
} as const

const FRAMES = [
  {
    id: "youtube",
    srLabel: "YouTube 16:9",
    aspect: "aspect-[16/9]",
    gradient: "from-[rgba(49,196,255,0.36)] via-[rgba(49,196,255,0.12)] to-transparent",
    playbackId: PLAYBACK_IDS.youtube,
  },
  {
    id: "instagram",
    srLabel: "Instagram 1:1",
    aspect: "aspect-square",
    gradient: "from-[rgba(225,179,65,0.32)] via-[rgba(225,179,65,0.12)] to-transparent",
    playbackId: PLAYBACK_IDS.instagram,
  },
  {
    id: "tiktok",
    srLabel: "TikTok 9:16",
    aspect: "aspect-[9/16]",
    gradient: "from-[rgba(142,220,255,0.32)] via-[rgba(49,196,255,0.14)] to-transparent",
    playbackId: PLAYBACK_IDS.tiktok,
  },
] as const

export function StudiosPlatformDemoSection() {
  // REFINED: HERO LUXURY timing - maximum cinematic drama for key marketing moment
  // expo.out creates "Apple product reveal" feel: explosive start → dramatic brake → feather settle
  useSectionReveal({
    selector: '[data-reveal-feature]',
    ...SectionRevealPresets.hero,  // REFINED: 60ms, 1.6s, expo.out (was luxury: 1.2s, power4.out)
  });

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
            data-reveal-feature
            id="studios-platform-demo-title"
            className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            Six Formats. One Production.
          </h2>
          <p data-reveal-feature className="text-base font-medium uppercase tracking-[0.32em] text-white/60 md:text-[0.95rem]">
            YouTube 16:9. TikTok 9:16. Instagram 1:1, 4:5, Reels. LinkedIn. X. Facebook. Secure, platform-native delivery without six separate productions.
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-studios-body md:text-[1.2rem]">
            <p data-reveal-feature>
              Most agencies repurpose one video across platforms—audiences notice. Pure AI tools generate separately—budgets explode.
            </p>
            <p data-reveal-feature>
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
                playbackId={frame.playbackId}
                order={index + 1}
                className="mx-auto w-full max-w-[26rem]"
                reveal={true}
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
              height: "60rem",
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
                playbackId={PLAYBACK_IDS.instagram}
                order={1}
                className="absolute max-w-[26rem]"
                style={{
                  top: "-5rem",
                  left: "41rem",
                  transform: "rotateY(-60deg) translateZ(-400px) scale(1.0)",
                  opacity: 0.9,
                  zIndex: 2,
                }}
                reveal={true}
              />

              {/* TikTok 9:16 - left middle, angled */}
              <MediaFrame
                id="tiktok"
                aspect="aspect-[9/16]"
                gradient="from-[rgba(142,220,255,0.32)] via-[rgba(49,196,255,0.14)] to-transparent"
                srLabel="TikTok 9:16"
                playbackId={PLAYBACK_IDS.tiktok}
                order={2}
                className="absolute max-w-[22rem]"
                style={{
                  top: "-30rem",
                  left: "10rem",
                  transform: "rotateY(60deg) translateZ(-400px) scale(1.0)",
                  opacity: 0.9,
                  zIndex: 2,
                }}
                reveal={true}
              />

              {/* YouTube 16:9 - center bottom, front */}
              <MediaFrame
                id="youtube"
                aspect="aspect-[16/9]"
                gradient="from-[rgba(49,196,255,0.36)] via-[rgba(49,196,255,0.12)] to-transparent"
                srLabel="YouTube 16:9"
                playbackId={PLAYBACK_IDS.youtube}
                order={3}
                className="absolute"
                style={{
                  top: "-65rem",
                  left: "43%",
                  transform: "translateX(calc(-50% + 6rem)) rotateY(0deg) translateZ(-200px) scale(1.2)",
                  opacity: 0.9,
                  zIndex: 3,
                  width: "37.5rem",
                }}
                reveal={true}
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
  playbackId: string
  order: number
  className?: string
  style?: CSSProperties
  reveal?: boolean
}

function MediaFrame({ id, aspect, gradient, srLabel, playbackId, order, className, style, reveal }: MediaFrameProps) {
  return (
    <div
      {...(reveal ? { 'data-reveal-feature': true } : {})}
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
          className={`relative ${aspect} overflow-hidden rounded-[28px]`}
          data-motion="platform-demo-video"
        >
          <MuxPlayer
            playbackId={playbackId}
            loading="viewport"
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            metadata={{
              video_title: `${srLabel} Platform Demo`,
              viewer_user_id: "anonymous"
            }}
            streamType="on-demand"
            style={{
              width: '100%',
              height: '100%',
              aspectRatio: aspect === 'aspect-[16/9]' ? '16/9' : aspect === 'aspect-square' ? '1/1' : '9/16',
              objectFit: 'cover',
              '--controls': 'none',
              '--media-object-fit': 'cover',
              '--media-object-position': 'center',
            } as React.CSSProperties}
          />
          {/* Subtle overlay for depth and polish */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" aria-hidden />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/14" aria-hidden />
        </div>
      </div>
    </div>
  )
}
