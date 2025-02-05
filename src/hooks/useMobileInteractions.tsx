import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const useMobileInteractions = () => {
  const [lastTapTime, setLastTapTime] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    const handleDoubleTap = (e: TouchEvent) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapTime;
      
      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toast.success("Scrolled to top", {
          position: "bottom-center",
          duration: 1500
        });
      }
      
      setLastTapTime(currentTime);
    };

    const handlePullToRefresh = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touchStartY) {
        setTouchStartY(touch.clientY);
      } else if (touch.clientY - touchStartY > 150 && window.scrollY === 0) {
        e.preventDefault();
        window.location.reload();
        toast.success("Refreshing page", {
          position: "bottom-center",
          duration: 1500
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handlePullToRefresh, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchstart', handleDoubleTap);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handlePullToRefresh);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchstart', handleDoubleTap);
    };
  }, [lastTapTime, touchStartY]);
};