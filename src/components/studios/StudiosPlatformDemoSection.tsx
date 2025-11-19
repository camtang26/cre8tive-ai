import type { CSSProperties } from "react"
import { useRef } from "react"
import MuxPlayer from "@mux/mux-player-react/lazy"
import { useInView } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { StatusBadge } from "./ui/StatusBadge"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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
    gradient: "from-[rgba(255,0,0,0.2)] via-[rgba(255,0,0,0.05)] to-transparent",
    accent: "#FF0000",
    playbackId: PLAYBACK_IDS.youtube,
  },
  {
    id: "instagram",
    srLabel: "Instagram 1:1",
    aspect: "aspect-square",
    gradient: "from-[rgba(225,48,108,0.2)] via-[rgba(225,48,108,0.05)] to-transparent",
    accent: "#E1306C",
    playbackId: PLAYBACK_IDS.instagram,
  },
  {
    id: "tiktok",
    srLabel: "TikTok 9:16",
    aspect: "aspect-[9/16]",
    gradient: "from-[rgba(0,242,234,0.2)] via-[rgba(0,242,234,0.05)] to-transparent",
    accent: "#00F2EA",
    playbackId: PLAYBACK_IDS.tiktok,
  },
] as const

export function StudiosPlatformDemoSection() {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLElement>(null)
  const rigRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        once: true
      }
    });

    // 1. Reveal Copy (Explicit targeting)
    tl.fromTo(containerRef.current?.querySelectorAll('[data-platform-reveal]') || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );

    if (!isMobile) {
      // 2. Desktop Entrance: The "Deployment"
      tl.fromTo(".holo-screen", 
        { 
          z: -500, 
          opacity: 0, 
          rotationX: 30,
          y: 50
        }, 
        { 
          z: 0, 
          opacity: 1, 
          rotationX: 0,
          y: 0,
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power3.out" 
        },
        "-=0.4"
      );

      // 3. Continuous Float
      gsap.to(".holo-screen", {
        y: "-=10",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.8,
          from: "center"
        }
      });
    }

  }, { scope: containerRef })

  // Mouse Parallax Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !rigRef.current) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth) - 0.5;
    const yPos = (clientY / innerHeight) - 0.5;

    gsap.to(rigRef.current, {
      rotationY: xPos * 8, 
      rotationX: -yPos * 8,
      duration: 1.2,
      ease: "power2.out"
    });
  };

  return (
    <section
      ref={containerRef}
      id="studios-platform-demo"
      aria-labelledby="studios-platform-demo-title"
      data-motion-group="platform-demo"
      className="relative isolate overflow-hidden bg-studios-void py-24 md:py-32 perspective-[2000px]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        
        {/* Floor Grid */}
        <div 
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[200vw] h-[100vh] opacity-30 origin-bottom"
          style={{ transform: "rotateX(85deg)" }}
        >
           <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_0%,transparent_80%)]" />
        </div>
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0 z-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center text-white" data-motion="platform-demo-copy">
          <div data-platform-reveal className="flex justify-center mb-8 opacity-0">
            <StatusBadge label="DEVICE LAB" status="processing" />
          </div>
          
          <h2
            data-platform-reveal
            id="studios-platform-demo-title"
            className="font-outfit text-4xl font-black tracking-tight text-white md:text-[3.2rem] md:leading-[1.08] opacity-0"
          >
            Six Formats. One Production.
          </h2>
          <p data-platform-reveal className="text-base font-medium uppercase tracking-[0.32em] text-white/60 md:text-[0.95rem] opacity-0">
            YouTube 16:9. TikTok 9:16. Instagram 1:1, 4:5, Reels. LinkedIn. X. Facebook. Secure, platform-native delivery without six separate productions.
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-white/70 md:text-[1.2rem]">
            <p data-platform-reveal className="opacity-0">
              Most agencies repurpose one video across platforms—audiences notice. Pure AI tools generate separately—budgets explode.
            </p>
            <p data-platform-reveal className="opacity-0">
              Our Studios delivers platform-optimized work from a single production process. Your clients get native content everywhere.
            </p>
          </div>
        </div>

        {/* THE HOLO-DECK */}
        <div className="mt-24 h-[40rem] w-full flex items-center justify-center relative" style={{ perspective: "1500px" }}>
          
          {/* Mobile Stack */}
          {isMobile && (
            <div className="grid gap-8 md:hidden w-full">
              {FRAMES.map((frame) => (
                <MediaFrame
                  key={frame.id}
                  frame={frame}
                  className="mx-auto w-full max-w-[26rem]"
                />
              ))}
            </div>
          )}

          {/* Desktop 3D Rig */}
          {!isMobile && (
            <div 
              ref={rigRef}
              className="relative w-full h-full preserve-3d"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 1. Instagram (Right Wing - Tightened) */}
              <div 
                className="absolute top-10 left-1/2 holo-screen"
                style={{ 
                  width: '380px',
                  // Moved X from 500px -> 350px to bring closer
                  transform: 'translateX(350px) translateY(40px) translateZ(-100px) rotateY(-25deg)'
                }}
              >
                <MediaFrame frame={FRAMES[1]} />
                <HoloEmitter accent={FRAMES[1].accent} />
              </div>

              {/* 2. TikTok (Left Wing - Tightened) */}
              <div 
                className="absolute top-0 left-1/2 holo-screen"
                style={{ 
                  width: '300px',
                  // Moved X from -850px -> -700px to bring closer
                  transform: 'translateX(-700px) translateY(0px) translateZ(-50px) rotateY(20deg)'
                }}
              >
                <MediaFrame frame={FRAMES[2]} />
                <HoloEmitter accent={FRAMES[2].accent} />
              </div>

              {/* 3. YouTube (Center Hero - Scaled & Centered) */}
              <div 
                className="absolute top-20 left-1/2 holo-screen"
                style={{ 
                  width: '640px', // Increased width
                  // Centered better
                  transform: 'translateX(-320px) translateZ(80px)',
                  zIndex: 10
                }}
              >
                <MediaFrame frame={FRAMES[0]} scaleVideo={1.35} /> {/* Increased scale to 1.35 */}
                <HoloEmitter accent={FRAMES[0].accent} />
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function MediaFrame({ frame, className, scaleVideo = 1.0 }: { frame: typeof FRAMES[number], className?: string, scaleVideo?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "200px" })

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-white/10 bg-studios-steel/40 shadow-2xl backdrop-blur-md",
        className
      )}
      style={{
        boxShadow: `0 0 40px -10px ${frame.accent}20`
      }}
    >
      <div className={`relative ${frame.aspect} overflow-hidden rounded-[20px]`}>
        <div className={`absolute inset-0 z-10 bg-gradient-to-br ${frame.gradient} mix-blend-overlay pointer-events-none`} />
        
        {isInView ? (
          <MuxPlayer
            playbackId={frame.playbackId}
            loading="viewport"
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            streamType="on-demand"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${scaleVideo})`, // Use scale prop to remove black bars
              '--controls': 'none',
            } as React.CSSProperties}
          />
        ) : (
          <div className="absolute inset-0 bg-black/20" />
        )}
        
        {/* Gloss Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  )
}

function HoloEmitter({ accent }: { accent: string }) {
  return (
    <div 
      className="absolute top-full left-0 right-0 h-8 pointer-events-none"
      style={{ 
        background: `radial-gradient(ellipse at top, ${accent}40 0%, transparent 70%)`,
        filter: 'blur(10px)',
        transform: 'scaleX(0.8)'
      }}
    />
  )
}
