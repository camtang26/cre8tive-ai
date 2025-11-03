const CONSENT_KEY = 'cookieConsent'

const hasConsent = () => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(CONSENT_KEY) === 'true'
}

const inBrowser = () => typeof window !== 'undefined'

const dispatchToGTM = (payload: Record<string, unknown>) => {
  if (!inBrowser()) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

const dispatchToVercel = (event: string, payload: Record<string, unknown>) => {
  if (!inBrowser()) return
  const va = (window as typeof window & { va?: (event: string, data?: Record<string, unknown>) => void }).va
  if (typeof va === 'function') {
    va(event, payload)
  }
}

const buildCommonPayload = (sectionId: string, extra: Record<string, unknown>) => ({
  sectionId,
  environment: import.meta.env.MODE,
  ...extra,
})

export const trackSectionExposure = (sectionId: string, event: string) => {
  if (!hasConsent()) return
  const payload = buildCommonPayload(sectionId, { event })
  dispatchToGTM({ event: 'section_exposure', ...payload })
  dispatchToVercel('section_exposure', payload)
}

export const trackCTA = (sectionId: string, variant: 'primary' | 'secondary') => {
  if (!hasConsent()) return
  const payload = buildCommonPayload(sectionId, { variant })
  dispatchToGTM({ event: 'cta_click', ...payload })
  dispatchToVercel('cta_click', payload)
}

export const trackVideoEvent = (
  sectionId: string,
  action: 'play' | 'pause' | 'complete' | 'chapter',
  metadata?: Record<string, unknown>
) => {
  if (!hasConsent()) return
  const payload = buildCommonPayload(sectionId, { action, ...(metadata ?? {}) })
  dispatchToGTM({ event: 'video_event', ...payload })
  dispatchToVercel('video_event', payload)
}
