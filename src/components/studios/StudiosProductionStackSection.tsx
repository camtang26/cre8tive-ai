import { useId, type SVGProps, useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { StatusBadge } from "./ui/StatusBadge";
import { TechnicalBorder } from "./ui/TechnicalBorder";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const PLATFORM_GLYPHS = [
  {
    id: "youtube",
    name: "YouTube",
    color: "#FF0000",
    Icon: YouTubeIcon,
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "#00F2EA",
    Icon: TikTokIcon,
  },
  {
    id: "instagram",
    name: "Instagram",
    color: "#E1306C",
    Icon: InstagramIcon,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    color: "#0A66C2",
    Icon: LinkedInIcon,
  },
  {
    id: "x",
    name: "X",
    color: "#FFFFFF",
    Icon: XIcon,
  },
  {
    id: "facebook",
    name: "Facebook",
    color: "#1877F2",
    Icon: FacebookIcon,
  },
] as const

export function StudiosProductionStackSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // --- 4. PRODUCTION STACK: The Monolith ---
    // Text sequence + The Obsidian Deck reveal
    const stackTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        once: true
      }
    });

    stackTl
      .fromTo(containerRef.current?.querySelectorAll('[data-reveal-stack]') || [],
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.05, ease: "power2.out" }
      )
      // The Obsidian Slab rotates up
      .fromTo('.transform-style-3d-slab', 
        { rotationX: 45, opacity: 0, y: 100 },
        { rotationX: 20, opacity: 1, y: 0, duration: 1.4, ease: "power3.out" },
        "-=0.6"
      );
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="studios-production-stack"
      aria-labelledby="studios-production-stack-title"
      data-motion-group="production-stack"
      className="relative isolate overflow-hidden bg-studios-void py-24 md:py-32"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container relative mx-auto flex flex-col gap-16 px-4 md:px-6 lg:flex-row lg:items-center lg:gap-24 xl:px-0">
        
        {/* Left: The Monolith Text */}
        <div className="max-w-2xl space-y-8 text-white" data-motion="production-stack.copy">
          <div data-reveal-stack className="flex items-center gap-4 opacity-0">
            <StatusBadge label="INFRASTRUCTURE" status="online" />
            <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">Full Stack</span>
          </div>
          
          <div className="space-y-8">
            <h2
              data-reveal-stack
              id="studios-production-stack-title"
              className="font-outfit text-4xl font-bold tracking-tighter text-white md:text-6xl leading-[0.95] opacity-0"
            >
              Complete Production.<br />
              <span className="text-white/60">Secure Infrastructure.</span><br />
              One Partner.
            </h2>
            
            <div className="space-y-6 font-sans text-lg leading-relaxed text-white/70 md:text-xl">
              <p data-reveal-stack className="opacity-0">
                You need more than video generation. You need storyboarding that works. Scripts that land. Sound design that feels professional. Editing that matches broadcast quality standards. Platform delivery for six formats.
              </p>
              
              <TechnicalBorder className="p-6 my-8" intensity="low">
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-studios-primary uppercase tracking-widest mb-4">Production Layers</div>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-8" data-reveal-stack>
                    {['Video', 'Sound', 'Dialogue', 'Score', 'Editing', 'Upscaling', 'Platform Export'].map((item) => (
                      <div key={item} className="flex items-center gap-3 group">
                        <div className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-studios-accent transition-colors" />
                        <span className="font-mono text-sm text-white/80 group-hover:text-white transition-colors uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TechnicalBorder>

              <p data-reveal-stack className="text-sm font-mono text-white/50 opacity-0">
                Your creative assets never leave our secure production environment. While other solutions force you across fragmented platforms, everything happens on infrastructure we control—from storyboard to final delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Right: The Obsidian Platform Deck */}
        <div className="relative w-full flex justify-center lg:justify-end h-[600px] perspective-[1200px]">
          <div className="transform-style-3d-slab relative w-full max-w-[650px] transform-style-3d rotate-x-20 rotate-y-[-20deg] hover:rotate-y-[-15deg] transition-transform duration-700 ease-out opacity-0">
            
            {/* Base Slab */}
            <div className="absolute inset-0 bg-studios-steel/90 border border-white/5 rounded-[32px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] transform-style-3d">
               <div className="absolute inset-0 bg-noise opacity-[0.05] rounded-[32px] mix-blend-overlay" />
               {/* Scanline Laser */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studios-primary/10 to-transparent h-[20%] w-full animate-scan pointer-events-none" />
            </div>

            {/* Platform Chips Grid */}
            <div className="absolute inset-4 grid grid-cols-2 gap-4 transform-style-3d translate-z-[20px]">
              {PLATFORM_GLYPHS.map((platform, i) => (
                <PlatformChip 
                  key={platform.id} 
                  platform={platform} 
                  index={i} 
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function PlatformChip({ platform, index }: { platform: any, index: number }) {
  const ref = useRef(null)
  // Removing local useInView for now to let GSAP control parent, or we can keep it for interaction
  // Keeping simple CSS transition based hover effects

  return (
    <div 
      ref={ref}
      className={cn(
        "group relative h-full w-full min-h-[160px] rounded-3xl bg-black/60 border-2 border-white/10 backdrop-blur-xl flex items-center justify-center overflow-visible",
        "transition-all duration-500 ease-out hover:-translate-y-4 hover:border-white/30 hover:bg-white/10",
        // Default visible state because parent animates opacity of the container
        "translate-y-0 opacity-100"
      )}
      style={{
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)'
      }}
    >
      {/* Internal Glow Blob */}
      <div 
        className="absolute inset-4 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
        style={{ background: platform.color }}
      />
      
      {/* Icon */}
      <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <platform.Icon 
          className="w-24 h-24 transition-all duration-300 drop-shadow-2xl" 
          style={{ 
            color: platform.color,
            filter: `drop-shadow(0 0 20px ${platform.color}40)`
          }}
        />
      </div>

      {/* Label Tag */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/80 border border-white/20 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white font-bold">
          {platform.name}
        </span>
      </div>
    </div>
  )
}

// --- ICONS ---

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z" />
      <path fill="white" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  )
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.67c0 2.827-2.335 5.12-5.212 5.12-2.877 0-5.212-2.293-5.212-5.12 0-2.827 2.335-5.12 5.212-5.12.97 0 1.877.265 2.658.725V6.722a8.775 8.775 0 0 0-2.658-.417c-4.817 0-8.727 3.843-8.727 8.57 0 4.727 3.91 8.57 8.727 8.57 4.817 0 8.727-3.843 8.727-8.57V8.753c1.49.992 3.276 1.569 5.192 1.569v-3.636Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Z" />
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
      <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.817l-.371 3.667h-3.446v7.98c-.002.069-.002.137-.002.206A11.981 11.981 0 0 1 12 24c-.982 0-1.932-.122-2.827-.35-.025-.052-.049-.105-.072-.159Z" />
    </svg>
  )
}