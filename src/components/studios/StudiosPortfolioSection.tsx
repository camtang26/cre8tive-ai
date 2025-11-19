import { useState, useRef } from "react"
import { Play } from "lucide-react"
import VideoModal from "@/components/core/VideoModal"
import { cn } from "@/lib/utils"
import { StatusBadge } from "./ui/StatusBadge"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type PortfolioItem = {
  id: string
  videoId: string
  srLabel: string
  client: string
  format: string
  duration: string
  backdropGradient: string
  thumbnail: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "cre8tive-dhm",
    videoId: "1051824336",
    srLabel: "Play Cre8tive AI DHM video",
    client: "DHM",
    format: "16:9 / 4K",
    duration: "00:45",
    backdropGradient: "linear-gradient(135deg, rgba(49,196,255,0.18) 0%, rgba(70,116,221,0.28) 18%, rgba(225,179,65,0.42) 100%)",
    thumbnail: "https://i.vimeocdn.com/video/1976697280-4f3a86dbe33f618bbca1e2aec70838932907744f874ef691faa7422c6683d38d-d_1280x720",
  },
  {
    id: "kotia-skincare",
    videoId: "1055446411",
    srLabel: "Play Kotia Skincare video",
    client: "Kotia",
    format: "9:16 / HD",
    duration: "00:30",
    backdropGradient: "linear-gradient(160deg, rgba(8,22,60,0.9) 0%, rgba(24,43,92,0.8) 42%, rgba(221,172,72,0.45) 100%)",
    thumbnail: "https://i.vimeocdn.com/video/1981019062-ebed3221ab1ce19b5914996a8e70838932907744f874ef691faa7422c6683d38d-d_1280x720",
  },
  {
    id: "automotive-demo",
    videoId: "1051820049",
    srLabel: "Play Cre8tive AI Automotive Demo video",
    client: "Auto Concept",
    format: "21:9 / 4K",
    duration: "01:15",
    backdropGradient: "linear-gradient(140deg, rgba(26,56,104,0.82) 0%, rgba(15,31,63,0.94) 52%, rgba(49,196,255,0.32) 100%)",
    thumbnail: "https://i.vimeocdn.com/video/1976690068-71234555e3fb50eda298a48e05cb0fde0d0106ec8537f5a7d1582f80d9663f4f-d_1280x720",
  },
  {
    id: "cre8tive-demo",
    videoId: "1051819670",
    srLabel: "Play Cre8tive AI Demo video",
    client: "Showreel",
    format: "Mixed",
    duration: "02:00",
    backdropGradient: "linear-gradient(150deg, rgba(13,28,50,0.92) 0%, rgba(8,15,28,0.88) 45%, rgba(49,196,255,0.35) 100%)",
    thumbnail: "https://i.vimeocdn.com/video/1976689613-73eab7ca0d3ecf48b869583186d5cb79f5e92ca248d5eb6fb21ce706cc248cd1-d_1280x720",
  },
  {
    id: "marina-project",
    videoId: "1052203361",
    srLabel: "Play Cre8tive AI Marina Project video",
    client: "Marina",
    format: "16:9 / 4K",
    duration: "01:00",
    backdropGradient: "linear-gradient(140deg, rgba(8,16,36,0.88) 0%, rgba(12,25,52,0.92) 56%, rgba(225,179,65,0.36) 100%)",
    thumbnail: "https://i.vimeocdn.com/video/1977142855-5acf99d2d0d226ffec133786a4f7c7e52c641ba255132e2ecb8c315ea9ed81f6-d_1280x720",
  },
  {
    id: "liminal",
    videoId: "1052204241",
    srLabel: "Play LIMINAL video",
    client: "Liminal",
    format: "1:1 / HD",
    duration: "00:50",
    backdropGradient: "linear-gradient(135deg, rgba(49,196,255,0.32) 0%, rgba(16,38,78,0.86) 45%, rgba(9,14,28,0.94) 100%)",
    thumbnail: "https://i.vimeocdn.com/video/1977145787-f939e8fd6d70494a66049fe064de5562103e5de253901f9967f0d4de4bea4a8b-d_1280x720",
  },
]

export function StudiosPortfolioSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // --- 2. PORTFOLIO: The Gallery (Bento Reveal) ---
    // Reveal the header first
    ScrollTrigger.batch(containerRef.current?.querySelectorAll('[data-reveal-portfolio-header]') || [], {
      start: "top 85%",
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        );
      }
    });
    
    // Then the cards
    ScrollTrigger.batch(containerRef.current?.querySelectorAll('[data-motion="portfolio-card"]') || [], {
      start: "top 85%",
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(batch, 
          { opacity: 0, y: 60, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );
      }
    });
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="studios-portfolio"
      aria-labelledby="studios-portfolio-title"
      data-motion-group="portfolio"
      className="relative isolate overflow-hidden bg-studios-void py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-4 lg:px-10 xl:px-0">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 text-center mb-24">
          <div data-reveal-portfolio-header className="flex justify-center opacity-0">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-studios-primary animate-pulse shadow-[0_0_10px_#E1B341]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-white/80">Proof of Execution</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 
              data-reveal-portfolio-header 
              id="studios-portfolio-title" 
              className="text-balance font-outfit text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] opacity-0"
            >
              Judge <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Yourself.</span>
            </h2>
            
            <div className="relative inline-block">
              <p 
                data-reveal-portfolio-header 
                className="max-w-3xl mx-auto font-sans text-xl md:text-2xl leading-relaxed text-white/70 font-light opacity-0"
              >
                Your clients won't compromise on quality. <span className="text-white font-medium border-b border-studios-primary/50 pb-0.5">Neither do we.</span> Every campaign ships with broadcast-quality polish across six platforms from a single pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[300px_300px]" data-motion="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard 
              key={item.id} 
              item={item} 
              order={index + 1} 
              // First item spans 2x2 on desktop for Bento effect
              className={index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 h-full min-h-[300px]" : "h-full min-h-[300px]"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type PortfolioCardProps = {
  item: PortfolioItem
  order: number
  className?: string
}

function PortfolioCard({ item, order, className }: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)

  return (
    <>
      <article
        ref={ref}
        data-motion="portfolio-card"
        data-motion-order={order}
        className={cn(
          "group relative overflow-hidden rounded-xl bg-studios-steel/40 border border-white/5 hover:border-studios-primary/50 transition-colors duration-300 opacity-0",
          className
        )}
      >
        <button
          type="button"
          aria-label={item.srLabel}
          onClick={() => setIsModalOpen(true)}
          className="relative block h-full w-full overflow-hidden"
        >
          {/* Background: Thumbnail with Gradient Overlay */}
          <div className="absolute inset-0">
             {/* Real Thumbnail (fades in) */}
             <img 
               src={item.thumbnail} 
               alt="" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500 scale-100 group-hover:scale-105"
               loading="lazy"
             />
             
             {/* Gradient Overlay for Tint/Readability */}
             <div 
               className="absolute inset-0 opacity-60 mix-blend-overlay" 
               style={{ background: item.backdropGradient }} 
             />
             
             {/* Tech Noir Vignette */}
             <div className="absolute inset-0 bg-gradient-to-t from-studios-steel/90 via-transparent to-transparent" />
          </div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />

          {/* Viewfinder Corners (Tech Noir) */}
          <div className="absolute inset-4 pointer-events-none opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-studios-primary shadow-[0_0_10px_rgba(225,179,65,0.5)]" />
            <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-studios-primary shadow-[0_0_10px_rgba(225,179,65,0.5)]" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-studios-primary shadow-[0_0_10px_rgba(225,179,65,0.5)]" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-studios-primary shadow-[0_0_10px_rgba(225,179,65,0.5)]" />
          </div>

          {/* Play Icon (Center) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-studios-primary group-hover:border-transparent shadow-2xl">
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 scale-100 transition-all duration-700 group-hover:scale-150 group-hover:opacity-0 animation-ping" />
              <Play className="h-8 w-8 text-white ml-1 group-hover:text-black transition-colors fill-current" />
            </div>
          </div>

          {/* Metadata Overlay (Slide Up) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-end justify-between">
              <div className="space-y-1 text-left">
                <div className="text-[10px] font-mono uppercase tracking-widest text-studios-primary">Client</div>
                <div className="font-outfit text-2xl font-bold text-white">{item.client}</div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">Format</div>
                <div className="font-mono text-xs text-white bg-white/10 px-2 py-1 rounded">{item.format}</div>
              </div>
            </div>
          </div>
        </button>
      </article>

      {isModalOpen && (
        <VideoModal
          videoId={item.videoId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}