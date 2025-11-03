import { useEffect } from "react"
import { toast } from "sonner"

export const CookieConsent = () => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const consentKey = "cookieConsent"
    const existingConsent = localStorage.getItem(consentKey)

    const globalFlag = "__cookieConsentToastShown" as const
    const toastAlreadyShown = Boolean(
      (window as typeof window & { [globalFlag]?: boolean })[globalFlag]
    )

    if (existingConsent || toastAlreadyShown) {
      return
    }

    ;(window as typeof window & { [globalFlag]?: boolean })[globalFlag] = true

    toast("Cookie Consent", {
      description:
        "We use cookies to enhance your experience and analyze our website traffic. By clicking Accept, you consent to our use of cookies.",
      action: {
        label: "Accept",
        onClick: () => {
          localStorage.setItem(consentKey, "true")
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "cookie_consent_granted",
          })
        },
      },
      cancel: {
        label: "Decline",
        onClick: () => {
          localStorage.setItem(consentKey, "false")
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "cookie_consent_declined",
          })
        },
      },
      duration: Infinity,
    })
  }, []);

  return null
}
