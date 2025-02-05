interface TrackEventProps {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = ({ action, category, label, value }: TrackEventProps) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'custom_event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value
      });
    }
  };

  const trackPageView = (path: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: path
      });
    }
  };

  return {
    trackEvent,
    trackPageView
  };
};