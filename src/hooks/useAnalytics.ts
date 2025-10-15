import { useCallback, useMemo } from "react"

interface TrackEventProps {
  action: string
  category: string
  label?: string
  value?: number
}

export const useAnalytics = () => {
  const trackEvent = useCallback(({ action, category, label, value }: TrackEventProps) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "custom_event",
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value
      })
    }
  }, [])

  const trackPageView = useCallback((path: string) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: path
      })
    }
  }, [])

  return useMemo(
    () => ({
      trackEvent,
      trackPageView
    }),
    [trackEvent, trackPageView]
  )
}
