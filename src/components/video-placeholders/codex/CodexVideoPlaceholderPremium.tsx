import { useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLazyLoad } from '../hooks/useLazyLoad'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { VideoPlaceholderProps, VideoPlaceholderState } from '../types/VideoPlaceholder.types'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Codex Premium Placeholder
 *
 * Elevated glassmorphism with accessibility-first defaults:
 * - Layered gradient frame + glass interior with solid fallback
 * - Always-visible play chip with high-contrast icon
 * - Animated accent glow + border pulse (prefers-reduced-motion aware)
 * - Scroll-triggered lift and subtle parallax on hover
 */
export const CodexVideoPlaceholderPremium: React.FC<VideoPlaceholderProps> = ({
  videoId,
  thumbnailUrl,
  title,
  description,
  aspectRatio = '16/9',
  onClick,
  onLoad,
  onError,
  ariaLabel,
  className = '',
  disableAnimations = false,
  lazyLoadMargin = '100px',
  lazyLoadThreshold = 0.1
}) => {
  const prefersReducedMotion = useReducedMotion()
  const { isInView, elementRef } = useLazyLoad({
    rootMargin: lazyLoadMargin,
    threshold: lazyLoadThreshold,
    disabled: disableAnimations
  })

  const [state, setState] = useState<VideoPlaceholderState>({
    isLoaded: false,
    isHovered: false,
    isInView: false,
    hasError: false,
    isFocused: false
  })

  const aspectRatioValue = useMemo(() => {
    const [w, h] = aspectRatio.split('/')
    return `${w.trim()} / ${h.trim()}`
  }, [aspectRatio])

  useGSAP(
    ({ context }) => {
      if (disableAnimations || prefersReducedMotion || !elementRef.current) {
        return
      }

      const elements = context?.selector?.(`.codex-premium-shell-${videoId}`)
      if (!elements || elements.length === 0) {
        return
      }

      const borderGlow = context?.selector?.(`.codex-premium-glow-${videoId}`)

      const animation = gsap.fromTo(
        elements,
        { opacity: 0, y: 48, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out'
        }
      )

      const glowAnimation = borderGlow
        ? gsap.to(borderGlow, {
            keyframes: [
              { opacity: 0.4, rotate: 0, duration: 1.2, ease: 'power1.out' },
              { opacity: 0.7, rotate: 8, duration: 1.4, ease: 'sine.inOut' },
              { opacity: 0.35, rotate: -4, duration: 1, ease: 'sine.inOut' }
            ],
            repeat: -1,
            yoyo: true
          })
        : undefined

      const trigger = ScrollTrigger.create({
        trigger: elementRef.current,
        animation,
        start: 'top 80%',
        once: true
      })

      return () => {
        trigger.kill()
        animation.kill()
        glowAnimation?.kill()
      }
    },
    {
      scope: elementRef,
      dependencies: [disableAnimations, prefersReducedMotion],
      revertOnUpdate: true
    }
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick?.()
    }
  }

  const handleImageLoad = () => {
    setState(prev => ({ ...prev, isLoaded: true }))
    onLoad?.()
  }

  const handleImageError = () => {
    setState(prev => ({ ...prev, hasError: true }))
    onError?.(new Error(`Failed to load thumbnail: ${thumbnailUrl}`))
  }

  return (
    <div
      ref={elementRef}
      className={[
        `codex-premium-shell-${videoId}`,
        'relative isolate flex h-auto w-full cursor-pointer select-none overflow-hidden rounded-3xl p-[1px]',
        'transition-transform duration-300 ease-out',
        state.isHovered || state.isFocused ? 'scale-[1.02]' : 'scale-[1]',
        className
      ].join(' ')}
      style={{
        aspectRatio: aspectRatioValue,
        background:
          'linear-gradient(135deg, rgba(79, 70, 229, 0.65), rgba(8, 145, 178, 0.55), rgba(192, 38, 211, 0.6))'
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setState(prev => ({ ...prev, isHovered: true }))}
      onMouseLeave={() => setState(prev => ({ ...prev, isHovered: false }))}
      onFocus={() => setState(prev => ({ ...prev, isFocused: true }))}
      onBlur={() => setState(prev => ({ ...prev, isFocused: false }))}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel || `Play ${title} video`}
      data-variant="codex-premium"
    >
      {/* Inner glass container */}
      <div
        className={[
          'relative h-full w-full overflow-hidden rounded-[28px]',
          'bg-slate-950/85 supports-[backdrop-filter]:bg-slate-950/55 supports-[backdrop-filter]:backdrop-blur-2xl'
        ].join(' ')}
      >
        {/* Decorative glow */}
        <div
          className={[
            `codex-premium-glow-${videoId}`,
            'pointer-events-none absolute -inset-[18%] rounded-[42%]',
            'bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.45),_transparent_55%)]',
            'opacity-40 blur-3xl transition-opacity duration-500'
          ].join(' ')}
        />

        {/* Thumbnail */}
        {isInView && !state.hasError && (
          <img
            src={thumbnailUrl}
            alt={title}
            className={[
              'absolute inset-0 h-full w-full object-cover',
              'transition-opacity duration-500 ease-out',
              state.isLoaded ? 'opacity-100' : 'opacity-0'
            ].join(' ')}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {/* Loading skeleton */}
        {!state.isLoaded && !state.hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
            <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-white/20 border-t-white/80" />
          </div>
        )}

        {/* Error fallback */}
        {state.hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-950/90 text-white/70">
            <span className="font-semibold">Thumbnail unavailable</span>
            <span className="text-xs text-white/50">Play button remains functional</span>
          </div>
        )}

        {/* Foreground glass card */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent supports-[backdrop-filter]:bg-slate-950/30 supports-[backdrop-filter]:backdrop-blur-[28px]" />

        {/* Accent rim */}
        <div
          className={[
            'pointer-events-none absolute inset-[10px] rounded-[24px] border border-white/12',
            state.isHovered || state.isFocused ? 'border-white/30' : ''
          ].join(' ')}
        />

        {/* Play chip */}
        <div
          className={[
            'absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_20px_45px_-35px_rgba(59,130,246,0.8)]',
            'supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:backdrop-blur-xl'
          ].join(' ')}
        >
          <span
            aria-hidden="true"
            className={[
              'inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-950 shadow'
            ].join(' ')}
          >
            ►
          </span>
          Watch
        </div>

        {/* Information slab */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex flex-col gap-2 rounded-2xl bg-slate-950/75 p-4 text-left shadow-[0_22px_50px_-30px_rgba(15,23,42,0.8)] supports-[backdrop-filter]:bg-slate-950/60 supports-[backdrop-filter]:backdrop-blur-lg">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description && <p className="text-sm text-white/80 line-clamp-2">{description}</p>}
          </div>
        </div>

        <span className="sr-only">
          {description ? `${description} video placeholder` : `Video placeholder for ${title}`}
        </span>
      </div>
    </div>
  )
}
