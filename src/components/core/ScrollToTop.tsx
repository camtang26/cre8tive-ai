import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll without animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
    
    // Set manual scroll restoration
    window.history.scrollRestoration = 'manual';
    
    // Cleanup
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, [pathname]);

  return null;
};