import { useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLazyLoad } from '../hooks/useLazyLoad'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { VideoPlaceholderProps, VideoPlaceholderState } from '../types/VideoPlaceholder.types'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Codex Bold Placeholder
 *
 * Cinematic poster treatment with parallax highlight:
 * - Letterboxed frame + deep vignette
 * - Animated sweep + interactive spotlight (pointermove) with cleanup
 * - Scroll-triggered cinematic reveal (scale/rotate snap)
 * - High-contrast typography for dramatic storytelling
 */
export const CodexVideoPlaceholderBold: React.FC<VideoPlaceholderProps> = ({
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
  lazyLoadMargin = '120px',
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
    (context, contextSafe) => {
      if (disableAnimations || prefersReducedMotion || !elementRef.current) {
        return
      }

      const shell = context?.selector?.(`.codex-bold-shell-${videoId}`)
      const spotlight = context?.selector?.(`.codex-bold-spotlight-${videoId}`)

      if (!shell || shell.length === 0) {
        return
      }

      const animation = gsap.fromTo(
        shell,
        { opacity: 0, scale: 0.9, rotateX: 6, transformOrigin: 'center top' },
        { opacity: 1, scale: 1, rotateX: 0, duration: 0.8, ease: 'power3.out' }
      )

      const trigger = ScrollTrigger.create({
        trigger: elementRef.current,
        animation,
        start: 'top 85%',
        once: true
      })

      const moveSpotlight = spotlight
        ? contextSafe((event: PointerEvent) => {
            const target = elementRef.current
            const glow = spotlight[0]
            if (!target || !glow) return

            const rect = target.getBoundingClientRect()
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18

            gsap.to(glow, {
              x,
              y,
              duration: 0.4,
              ease: 'power3.out',
              overwrite: 'auto'
            })
          })
        : undefined

      const resetSpotlight =
        spotlight &&
        contextSafe(() => {
          gsap.to(spotlight, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        })

      if (moveSpotlight && elementRef.current) {
        elementRef.current.addEventListener('pointermove', moveSpotlight)
        if (resetSpotlight) {
          elementRef.current.addEventListener('pointerleave', resetSpotlight)
        }
      }

      return () => {
        trigger.kill()
        animation.kill()
        if (moveSpotlight && elementRef.current) {
          elementRef.current.removeEventListener('pointermove', moveSpotlight)
          if (resetSpotlight) {
            elementRef.current.removeEventListener('pointerleave', resetSpotlight)
          }
        }
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
        `codex-bold-shell-${videoId}`,
        'relative isolate flex h-auto w-full cursor-pointer select-none overflow-hidden rounded-[26px]',
        'bg-slate-950 shadow-[0_40px_90px_-45px_rgba(15,23,42,0.95)] transition-transform duration-300 ease-out',
        state.isHovered || state.isFocused ? 'scale-[1.03]' : 'scale-[1]',
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
      data-variant="codex-bold"
    >
      {/* Letterbox effect */}
      <div className="absolute inset-x-0 top-0 h-5 bg-slate-950/85" />
      <div className="absolute inset-x-0 bottom-0 h-5 bg-slate-950/85" />

      {/* Thumbnail */}
      {isInView && !state.hasError && (
        <img
          src={thumbnailUrl}
          alt={title}
          className={[
            'absolute inset-0 h-full w-full object-cover opacity-90',
            'transition-opacity duration-500 ease-out',
            state.isLoaded ? 'opacity-100' : 'opacity-0'
          ].join(' ')}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

      {!state.isLoaded && !state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
          <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-white/30 border-t-white" />
        </div>
      )}

      {state.hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-950 text-white/80">
          <span className="font-semibold uppercase tracking-wider">Preview Offline</span>
          <span className="text-xs text-white/60">Click to attempt playback</span>
        </div>
      )}

      {/* Spotlight & vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
      <div
        className={[
          `codex-bold-spotlight-${videoId}`,
          'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,38,211,0.18),_transparent_60%)] opacity-0',
          state.isHovered || state.isFocused ? 'opacity-100' : '',
          'transition-opacity duration-500 ease-out'
        ].join(' ')}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent,_rgba(15,23,42,0.85))]" />

      {/* Play badge */}
      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/30 bg-black/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_25px_60px_-40px_rgba(248,113,113,0.9)]">
        <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-950">
          ►
        </span>
        Watch Trailer
      </div>

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="rounded-2xl border border-white/15 bg-black/70 p-5 text-left shadow-[0_30px_70px_-45px_rgba(239,68,68,0.6)]">
          <h3 className="text-lg font-black uppercase tracking-[0.18em] text-white">{title}</h3>
          {description && <p className="mt-2 text-sm font-medium text-white/80 line-clamp-3">{description}</p>}
        </div>
      </div>

      <span className="sr-only">
        {description ? `${description} video placeholder` : `Video placeholder for ${title}`}
      </span>
    </div>
  )
}
