import { useEffect, useMemo, useRef, useState } from 'react'
import { trackVideoEvent } from '@/lib/instrumentation'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type VimeoPlayerInstance = {
  on: (event: string, handler: (...args: unknown[]) => void) => void
  off: (event: string, handler: (...args: unknown[]) => void) => void
  destroy: () => void
  pause: () => Promise<void>
}

type VimeoPlayerProps = {
  sectionId: string
  videoId: string
  title: string
  posterSrc?: string
  aspectRatio?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
  fill?: boolean
}

const aspectClassMap: Record<string, string> = {
  '1:1': 'aspect-square',
  '9:16': 'aspect-[9/16]',
  '16:9': 'aspect-video',
  '4:5': 'aspect-[4/5]',
}

export const VimeoPlayer = ({
  sectionId,
  videoId,
  title,
  posterSrc,
  aspectRatio = '16:9',
  autoplay = false,
  loop = false,
  muted = true,
  className = '',
  fill = false,
}: VimeoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<VimeoPlayerInstance | null>(null)
  const cleanupRef = useRef<(() => void) | null>(null)
  const [manualPlayTriggered, setManualPlayTriggered] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const shouldAutoplay = autoplay && !prefersReducedMotion
  const aspectClass = useMemo(() => aspectClassMap[aspectRatio] ?? 'aspect-video', [aspectRatio])
  const numericId = Number(videoId)
  const isNumericId = Number.isFinite(numericId)

  useEffect(() => {
    if (prefersReducedMotion && !manualPlayTriggered) {
      return
    }

    if (hasInitialized) {
      return
    }

    if (!containerRef.current) {
      return
    }

    let observer: IntersectionObserver | undefined
    let cancelled = false

    if (!isNumericId) {
      return
    }

    const setupPlayer = async () => {
      if (!containerRef.current || cancelled) return

      const { default: Player } = await import('@vimeo/player')
      if (!containerRef.current || cancelled) return

      const player = new Player(containerRef.current, {
        id: numericId,
        autoplay: shouldAutoplay,
        loop,
        muted,
        title: false,
        byline: false,
        portrait: false,
        controls: true,
        background: false,
      }) as unknown as VimeoPlayerInstance

      playerRef.current = player
      setHasInitialized(true)

      const handlePlay = () => trackVideoEvent(sectionId, 'play', { videoId })
      const handlePause = () => trackVideoEvent(sectionId, 'pause', { videoId })
      const handleFinished = () => trackVideoEvent(sectionId, 'complete', { videoId })
      const handleChapterChange = () => trackVideoEvent(sectionId, 'chapter', { videoId })

      player.on('play', handlePlay)
      player.on('pause', handlePause)
      player.on('ended', handleFinished)
      player.on('chapterchange', handleChapterChange)
      cleanupRef.current = () => {
        player.off('play', handlePlay)
        player.off('pause', handlePause)
        player.off('ended', handleFinished)
        player.off('chapterchange', handleChapterChange)
        player.destroy()
      }
    }

    if (prefersReducedMotion) {
      setupPlayer()
      return () => {
        cancelled = true
        cleanupRef.current?.()
        cleanupRef.current = null
      }
    }

      observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setupPlayer()
        observer?.disconnect()
      }
    }, { rootMargin: '200px' })

    observer.observe(containerRef.current)

    return () => {
      cancelled = true
      observer?.disconnect()
      cleanupRef.current?.()
      cleanupRef.current = null
    }
  }, [prefersReducedMotion, manualPlayTriggered, videoId, loop, muted, shouldAutoplay, sectionId, hasInitialized, isNumericId, numericId])

  const handleManualPlay = () => {
    setManualPlayTriggered(true)
    trackVideoEvent(sectionId, 'play', { videoId, mode: 'manual' })
  }

  const containerClasses = fill ? `relative w-full h-full ${className}` : `relative ${aspectClass} w-full ${className}`

  return (
    <div className={containerClasses} aria-label={title}>
      <div ref={containerRef} className="absolute inset-0 h-full w-full overflow-hidden rounded-3xl" />

      {(!hasInitialized || !isNumericId) && (
        <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden">
          {posterSrc ? (
            <img
              src={posterSrc}
              alt={`${title} poster`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black/40 text-sm text-white/70">
              Video placeholder
            </div>
          )}
        </div>
      )}

      {prefersReducedMotion && !manualPlayTriggered && isNumericId && (
        <button
          type="button"
          onClick={handleManualPlay}
          className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/70 text-white"
        >
          Enable Video Playback
        </button>
      )}
    </div>
  )
}
