import { useEffect, useRef } from 'react'
import { trackSectionExposure } from '@/lib/instrumentation'

export const useSectionExposure = (sectionId: string) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let hasTracked = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting && !hasTracked) {
          hasTracked = true
          trackSectionExposure(sectionId, 'view')
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [sectionId])

  return ref
}
