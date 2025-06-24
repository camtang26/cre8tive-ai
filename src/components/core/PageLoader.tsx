import { useEffect, useState } from 'react';

export const PageLoader = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Only show loading after 200ms to avoid flash for fast loads
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative">
        {/* Animated gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-spin" 
          style={{ 
            width: '60px', 
            height: '60px',
            animation: 'spin 1s linear infinite'
          }}
        />
        {/* Inner black circle to create ring effect */}
        <div className="absolute inset-1 rounded-full bg-black" />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};