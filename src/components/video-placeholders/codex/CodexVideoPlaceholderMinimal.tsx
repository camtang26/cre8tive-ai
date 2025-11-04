import { useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLazyLoad } from '../hooks/useLazyLoad'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { VideoPlaceholderProps, VideoPlaceholderState } from '../types/VideoPlaceholder.types'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SUPPORTS_BACKDROP = 'supports-[backdrop-filter]:'

/**
 * Codex Minimal Placeholder
 *
 * Focuses on clarity and accessibility:
 * - Persistent high-contrast play button (for mobile/touch users)
 * - Subtle depth with inset border + elevated shadow
 * - Scroll-triggered reveal (disabled when motion preferences request it)
 * - Fallback solid overlay when backdrop-filter is unavailable
 */
export const CodexVideoPlaceholderMinimal: React.FC<VideoPlaceholderProps> = ({
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
  lazyLoadMargin = '80px',
  lazyLoadThreshold = 0.15
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

      const elements = context?.selector?.(`.codex-minimal-${videoId}`)

      if (!elements || elements.length === 0) {
        return
      }

      const animation = gsap.fromTo(
        elements,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        }
      )

      const trigger = ScrollTrigger.create({
        trigger: elementRef.current,
        animation,
        start: 'top 80%',
        once: true
      })

      return () => {
        trigger.kill()
        animation.kill()
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
        `codex-minimal-${videoId}`,
        'relative isolate flex h-auto w-full cursor-pointer select-none overflow-hidden rounded-xl border border-white/12 bg-slate-900',
        'shadow-[0_20px_60px_-30px_rgba(15,23,42,0.65)] transition-transform duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        state.isHovered || state.isFocused ? 'scale-[1.015]' : 'scale-[1]',
        className
      ].join(' ')}
      style={{ aspectRatio: aspectRatioValue }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setState(prev => ({ ...prev, isHovered: true }))}
      onMouseLeave={() => setState(prev => ({ ...prev, isHovered: false }))}
      onFocus={() => setState(prev => ({ ...prev, isFocused: true }))}
      onBlur={() => setState(prev => ({ ...prev, isFocused: false }))}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel || `Play ${title} video`}
      data-variant="codex-minimal"
    >
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

      {/* Skeleton / error fallback */}
      {!state.isLoaded && !state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        </div>
      )}

      {state.hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-950/90 text-white/70">
          <span className="font-semibold">Thumbnail unavailable</span>
          <span className="text-xs text-white/60">Click to retry or play anyway</span>
        </div>
      )}

      {/* Overlay with fallback for browsers without backdrop-filter */}
      <div
        className={[
          'absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent',
          `${SUPPORTS_BACKDROP}bg-slate-900/40`, // ensures consistent readability when blur supported
          `${SUPPORTS_BACKDROP}backdrop-blur-xl`
        ].join(' ')}
      />

      {/* Play button */}
      <div
        className={[
          'absolute left-4 top-4 flex rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg',
          `${SUPPORTS_BACKDROP}bg-white/10`,
          state.isHovered || state.isFocused ? 'border-white/60 text-white' : ''
        ].join(' ')}
      >
        <span aria-hidden="true" className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-950">
          ►
        </span>
        Play
      </div>

      {/* Title and description */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex flex-col gap-1 rounded-lg bg-slate-950/65 p-3 text-left shadow-[0_12px_30px_-20px_rgba(15,23,42,0.75)] supports-[backdrop-filter]:bg-slate-900/45 supports-[backdrop-filter]:backdrop-blur-xl">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {description && <p className="text-sm text-white/75 line-clamp-2">{description}</p>}
        </div>
      </div>

      <span className="sr-only">
        {description ? `${description} video placeholder` : `Video placeholder for ${title}`}
      </span>
    </div>
  )
}
