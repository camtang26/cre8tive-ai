import { useState, useRef } from "react"
import { Play, CheckCircle2 } from "lucide-react"
import MuxPlayer from "@mux/mux-player-react/lazy"
import { GlassmorphicCard } from "./shared/GlassmorphicCard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const MARKETING_VIDEO_PLAYBACK_ID = "FFH4ldVB00HBEO1iLXm9xWmBNvK501vBQ6Fj9PixEHcJA"

const KEY_TAKEAWAYS = [
  "Deploy brand-accurate AI agents in under 48 hours",
  "Scale support conversations without hiring",
  "Maintain consistent brand voice across all channels",
]

export function ConversationalMarketingVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const playerRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const videoCardRef = useRef<HTMLDivElement>(null)
  const metadataCardRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // 🎬 Progressive Video Reveal
  useGSAP(() => {
    if (prefersReducedMotion) return

    gsap.from([videoCardRef.current, metadataCardRef.current], {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    })
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] })

  const handlePlayClick = async () => {
    if (playerRef.current) {
      try {
        playerRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error("Failed to play video:", error)
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      id="conversational-marketing-video"
      aria-labelledby="conversational-marketing-video-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(20,241,149,0.2),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.18),transparent_62%),linear-gradient(150deg,rgba(4,18,30,0.98)0%,rgba(6,32,47,0.96)48%,rgba(4,19,31,0.98)100%)] py-24 md:py-32"
    >
      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.25)_0%,rgba(16,185,129,0)_70%)] blur-[140px]" aria-hidden />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 xl:px-0">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            See It in Action
          </div>

          <h2
            id="conversational-marketing-video-title"
            className="text-4xl font-black tracking-tight text-conversational-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            Conversational AI That Sounds Like Your Brand
          </h2>

          <p className="text-lg leading-relaxed text-conversational-body md:text-[1.25rem]">
            Watch how our AI engages customers with authentic, on-brand conversations that scale infinitely.
          </p>
        </div>

        {/* Video + Metadata Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Video Player - Takes 2 columns on desktop */}
          <div ref={videoCardRef} className="lg:col-span-2">
            <GlassmorphicCard
              accentColor="#10B981"
              accentGradient="from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent"
              accentGlow="rgba(16,185,129,0.28)"
            >
              <div className="relative aspect-video overflow-hidden rounded-[28px]">
                {/* Video Player */}
                <MuxPlayer
                  ref={playerRef}
                  playbackId={MARKETING_VIDEO_PLAYBACK_ID}
                  loading="viewport"
                  preload="none"
                  metadata={{
                    video_title: "Conversational AI Marketing Video",
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
                  onLoadedData={() => setIsLoading(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Custom Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity hover:opacity-90 group"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 -m-4 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.4)_0%,transparent_70%)] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

                      {/* Play button */}
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-[12px] shadow-[0_0_24px_rgba(16,185,129,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:border-conversational-primary group-hover:shadow-[0_0_36px_rgba(16,185,129,0.8)]">
                        <Play className="ml-1 h-10 w-10 fill-current text-white" />
                      </div>
                    </div>
                  </button>
                )}

                {/* Loading Skeleton */}
                {isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-br from-conversational-surface to-conversational-background">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-conversational-primary/10 to-transparent animate-shimmer" />
                  </div>
                )}
              </div>
            </GlassmorphicCard>
          </div>

          {/* Video Metadata Card - Takes 1 column on desktop */}
          <div ref={metadataCardRef} className="lg:col-span-1">
            <GlassmorphicCard
              accentColor="#14F195"
              accentGradient="from-[rgba(20,241,149,0.36)] via-[rgba(20,241,149,0.12)] to-transparent"
              accentGlow="rgba(20,241,149,0.28)"
            >
              <div className="flex h-full flex-col justify-between p-8">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-conversational-headline">
                    What You'll See
                  </h3>
                  <p className="mb-6 text-sm text-conversational-body-muted">
                    3 minutes that will change how you think about customer support
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-4">
                    {KEY_TAKEAWAYS.map((takeaway, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                        style={{
                          animation: `takeaway-fade-in 400ms cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100 + 200}ms both`,
                        }}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-conversational-primary"
                          aria-hidden
                        />
                        <span className="text-sm leading-relaxed text-conversational-body">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-conversational-primary/30 bg-conversational-primary/10 px-4 py-2 text-xs font-semibold text-conversational-primary">
                  <div className="h-2 w-2 rounded-full bg-conversational-primary animate-pulse" />
                  3 min watch
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes takeaway-fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-shimmer,
          div[style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
