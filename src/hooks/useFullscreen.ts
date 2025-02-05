import { useEffect, useState } from 'react';
import screenfull from 'screenfull';

export const useFullscreen = (elementRef?: React.RefObject<HTMLElement>) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!screenfull.isEnabled) return;

    const handler = () => {
      setIsFullscreen(screenfull.isFullscreen);
    };

    screenfull.on('change', handler);
    return () => screenfull.off('change', handler);
  }, []);

  const toggleFullscreen = async () => {
    if (!screenfull.isEnabled) return;
    
    try {
      if (elementRef?.current) {
        await screenfull.toggle(elementRef.current);
      } else {
        await screenfull.toggle();
      }
    } catch (error) {
      console.error('Failed to toggle fullscreen:', error);
    }
  };

  return { isFullscreen, toggleFullscreen };
};