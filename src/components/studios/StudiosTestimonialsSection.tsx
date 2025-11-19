import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  id: string
  company: string
  quote: string
  accent: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "kotia",
    company: "Kotia",
    quote: "Cre8tive AI Studios helped us leverage AI video production to create high-quality content quickly. Their team's deep understanding of both technology and business needs is exceptional.",
    accent: "#31C4FF",
  },
  {
    id: "marina-lab",
    company: "Marina Lab",
    quote: "A cost-effective solution for professional-grade video content. Their collaborative approach made the process seamless and stress-free.",
    accent: "#E1B341",
  },
  {
    id: "advisor-plus",
    company: "Advisor Plus PTD",
    quote: "Transformed our content creation approach. Their expertise in AI video production is exceptional, and they educated us on future possibilities.",
    accent: "#8EDCFF",
  },
]

export function StudiosTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const activeTestimonial = TESTIMONIALS[activeIndex]

  // Color transition effect
  useGSAP(() => {
    if (!bgRef.current) return
    
    gsap.to(bgRef.current, {
      backgroundColor: activeTestimonial.accent,
      duration: 1.5,
      ease: "power2.inOut"
    })
  }, [activeIndex])

  // Slide transition effect
  const changeSlide = (direction: 'next' | 'prev') => {
    if (isAnimating || !contentRef.current) return
    setIsAnimating(true)

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    })

    // Out animation
    tl.to(contentRef.current.children, {
      y: -20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in"
    })
    .call(() => {
      // Update state
      if (direction === 'next') {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
      } else {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
      }
    })
    .set(contentRef.current.children, { y: 30 }) // Reset position for entry
    // In animation
    .to(contentRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    })
  }

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      changeSlide('next')
    }, 8000) // 8 seconds per slide

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [activeIndex, isAnimating]) // Reset timer on interaction

  const handleManualChange = (direction: 'next' | 'prev') => {
    if (timerRef.current) clearInterval(timerRef.current)
    changeSlide(direction)
  }

  return (
    <section
      ref={containerRef}
      id="studios-testimonials"
      className="relative isolate overflow-hidden bg-studios-void py-32"
    >
      {/* Ambient Background - Dynamic Color */}
      <div className="absolute inset-0 -z-10">
        <div 
          ref={bgRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-10 blur-[150px] transition-colors"
          style={{ backgroundColor: TESTIMONIALS[0].accent }}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 opacity-60">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white">Client Transmissions</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Main Stage */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          
          {/* Testimonial Content */}
          <div ref={contentRef} className="relative z-10 min-h-[300px] flex flex-col justify-center">
            
            {/* Large Quote Mark */}
            <div className="text-6xl text-white/10 font-serif mb-6">
              <Quote className="fill-current w-16 h-16" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-10 font-outfit">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                <span className="text-lg font-bold text-white">{activeTestimonial.company.charAt(0)}</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">{activeTestimonial.company}</div>
              </div>
              {/* Star Rating */}
              <div className="hidden sm:flex gap-1 ml-8 border-l border-white/10 pl-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-studios-primary fill-current" />
                ))}
              </div>
            </div>

          </div>

          {/* Controls & Indicators (Desktop Right) */}
          <div className="flex lg:flex-col items-center gap-8 lg:gap-12 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
            
            {/* Progress Numbers */}
            <div className="font-mono text-4xl font-bold text-white/20">
              0{activeIndex + 1}<span className="text-lg text-white/10">/0{TESTIMONIALS.length}</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => handleManualChange('prev')}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
              <button 
                onClick={() => handleManualChange('next')}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full lg:w-1 h-32 lg:h-32 bg-white/5 rounded-full relative overflow-hidden hidden lg:block">
              <div 
                className="absolute top-0 left-0 w-full bg-white transition-all duration-500 ease-out"
                style={{ 
                  height: `${((activeIndex + 1) / TESTIMONIALS.length) * 100}%` 
                }} 
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}