import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const CookieConsent = () => {
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    
    if (!hasConsent) {
      toast("Cookie Consent", {
        description: "We use cookies to enhance your experience and analyze our website traffic. By clicking Accept, you consent to our use of cookies.",
        action: {
          label: "Accept",
          onClick: () => {
            localStorage.setItem('cookieConsent', 'true');
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'cookie_consent_granted'
            });
          }
        },
        cancel: {
          label: "Decline",
          onClick: () => {
            localStorage.setItem('cookieConsent', 'false');
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'cookie_consent_declined'
            });
          }
        },
        duration: Infinity,
      });
    }
  }, []);

  return null;
};