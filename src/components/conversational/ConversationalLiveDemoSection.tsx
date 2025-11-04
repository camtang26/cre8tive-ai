import { useState, useRef, useEffect } from "react"
import { Play, Clock } from "lucide-react"
import MuxPlayer from "@mux/mux-player-react"
import { GlassmorphicCard } from "./shared/GlassmorphicCard"
import { cn } from "@/lib/utils"

const DEMO_VIDEO_PLAYBACK_ID = "FFH4ldVB00HBEO1iLXm9xWmBNvK501vBQ6Fj9PixEHcJA"
const VIDEO_DURATION = 600 // 10 minutes in seconds

interface Chapter {
  time: number
  title: string
  description: string
  accentColor: string
}

const CHAPTERS: Chapter[] = [
  {
    time: 0,
    title: "Introduction",
    description: "Meet your new AI support agent and see how it handles real customer conversations",
    accentColor: "#10B981",
  },
  {
    time: 150,
    title: "Brand Voice Training",
    description: "Watch how the AI learns your brand's unique tone, terminology, and communication style",
    accentColor: "#14F195",
  },
  {
    time: 300,
    title: "Multi-Channel Deployment",
    description: "See the same AI agent work seamlessly across chat, email, phone, and social media",
    accentColor: "#34D399",
  },
  {
    time: 450,
    title: "Analytics Dashboard",
    description: "Explore real-time insights into conversation quality, resolution rates, and customer satisfaction",
    accentColor: "#6EE7B7",
  },
]

export function ConversationalLiveDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [activeChapter, setActiveChapter] = useState(0)
  const playerRef = useRef<HTMLVideoElement>(null)

  // Update active chapter based on current time
  useEffect(() => {
    const chapterIndex = CHAPTERS.findIndex((chapter, index) => {
      const nextChapter = CHAPTERS[index + 1]
      return currentTime >= chapter.time && (!nextChapter || currentTime < nextChapter.time)
    })
    if (chapterIndex !== -1) {
      setActiveChapter(chapterIndex)
    }
  }, [currentTime])

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

  const handleChapterClick = async (time: number) => {
    if (playerRef.current) {
      try {
        playerRef.current.currentTime = time
        playerRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error("Failed to seek video:", error)
      }
    }
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const progress = VIDEO_DURATION > 0 ? (currentTime / VIDEO_DURATION) * 100 : 0

  return (
    <section
      id="conversational-live-demo"
      aria-labelledby="conversational-live-demo-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_22%_16%,rgba(20,241,149,0.18),transparent_56%),radial-gradient(circle_at_78%_24%,rgba(16,185,129,0.16),transparent_60%),linear-gradient(146deg,rgba(4,18,30,0.99)0%,rgba(6,32,47,0.98)50%,rgba(4,19,31,0.99)100%)] py-24 md:py-32"
    >
      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.20)_0%,rgba(16,185,129,0)_70%)] blur-[150px]" aria-hidden />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Live Product Demo
          </div>

          <h2
            id="conversational-live-demo-title"
            className="text-4xl font-black tracking-tight text-conversational-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            See Conversational AI in Real Action
          </h2>

          <p className="text-lg leading-relaxed text-conversational-body md:text-[1.25rem]">
            A 10-minute deep dive into platform capabilities, from training to deployment to analytics. Skip ahead to any
            chapter.
          </p>
        </div>

        {/* Video Player */}
        <div className="mb-8">
          <GlassmorphicCard
            accentColor="#10B981"
            accentGradient="from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent"
            accentGlow="rgba(16,185,129,0.28)"
          >
            <div className="relative aspect-video overflow-hidden rounded-[28px]">
              <MuxPlayer
                ref={playerRef}
                playbackId={DEMO_VIDEO_PLAYBACK_ID}
                metadata={{
                  video_title: "Conversational AI Live Demo - 10 Minutes",
                  viewer_user_id: "anonymous"
                }}
                streamType="on-demand"
                controls
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  '--media-object-fit': 'cover',
                  '--media-object-position': 'center',
                } as React.CSSProperties}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(e) => setCurrentTime((e.target as HTMLVideoElement).currentTime)}
              />

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity hover:opacity-90 group"
                  aria-label="Play demo video"
                >
                  <div className="relative">
                    <div className="absolute inset-0 -m-4 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.4)_0%,transparent_70%)] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-[12px] shadow-[0_0_24px_rgba(16,185,129,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:border-conversational-primary group-hover:shadow-[0_0_36px_rgba(16,185,129,0.8)]">
                      <Play className="ml-1 h-10 w-10 fill-current text-white" />
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Progress Bar with Chapter Markers */}
            <div className="relative mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              {/* Progress fill */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-conversational-primary to-conversational-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />

              {/* Chapter markers */}
              {CHAPTERS.map((chapter, index) => {
                const markerPosition = (chapter.time / VIDEO_DURATION) * 100
                const isActive = index === activeChapter

                return (
                  <button
                    key={index}
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 transition-all duration-300",
                      isActive
                        ? "border-conversational-accent bg-conversational-accent scale-150 shadow-[0_0_12px_rgba(20,241,149,0.8)]"
                        : "border-white/40 bg-white/20 hover:scale-125 hover:border-conversational-primary"
                    )}
                    style={{ left: `${markerPosition}%` }}
                    onClick={() => handleChapterClick(chapter.time)}
                    aria-label={`Jump to ${chapter.title}`}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="whitespace-nowrap rounded-lg bg-conversational-surface-strong border border-white/20 px-3 py-2 text-xs font-semibold text-white shadow-xl">
                        {chapter.title}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </GlassmorphicCard>
        </div>

        {/* Chapter List */}
        <div className="space-y-4">
          {CHAPTERS.map((chapter, index) => (
            <button
              key={index}
              onClick={() => handleChapterClick(chapter.time)}
              className={cn(
                "group w-full text-left transition-all duration-300",
                index === activeChapter && isPlaying && "scale-[1.02]"
              )}
              style={{
                animation: `chapter-fade-in 400ms cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100 + 200}ms both`,
              }}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border p-6 transition-all duration-300",
                  index === activeChapter
                    ? "border-conversational-primary/50 bg-conversational-primary/10"
                    : "border-white/10 bg-white/[0.03] hover:border-conversational-primary/30 hover:bg-white/[0.05]"
                )}
              >
                {/* Active indicator glow */}
                {index === activeChapter && (
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at center, ${chapter.accentColor}40, transparent 70%)`,
                    }}
                  />
                )}

                <div className="relative flex items-start gap-4">
                  {/* Time badge */}
                  <div
                    className={cn(
                      "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                      index === activeChapter
                        ? "bg-conversational-primary/20"
                        : "bg-white/5 group-hover:bg-conversational-primary/10"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-sm font-semibold transition-colors duration-300",
                        index === activeChapter ? "text-conversational-primary" : "text-conversational-body"
                      )}
                    >
                      {formatTime(chapter.time)}
                    </span>
                  </div>

                  {/* Chapter content */}
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "mb-2 font-bold transition-colors duration-300",
                        index === activeChapter ? "text-conversational-headline" : "text-conversational-body"
                      )}
                    >
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-conversational-body-muted">{chapter.description}</p>
                  </div>

                  {/* Play indicator for active chapter */}
                  {index === activeChapter && isPlaying && (
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <div className="h-1 w-1 rounded-full bg-conversational-primary animate-pulse" />
                        <div className="h-1 w-1 rounded-full bg-conversational-primary animate-pulse animation-delay-150" />
                        <div className="h-1 w-1 rounded-full bg-conversational-primary animate-pulse animation-delay-300" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes chapter-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        @media (prefers-reduced-motion: reduce) {
          button[style*="animation"],
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
