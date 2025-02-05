import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import VimeoPlayer, { VimeoPlayerHandle } from './VimeoPlayer';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoModal = ({ videoId, onClose }: VideoModalProps) => {
  const modalRoot = document.getElementById('modal-root');
  const playerRef = useRef<VimeoPlayerHandle>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center opacity-0 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl mx-4 aspect-video opacity-0 animate-scale-in"
        style={{ animationDelay: '150ms' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
        
        <VimeoPlayer
          ref={playerRef}
          videoId={videoId}
          autoplay={true}
          controls={true}
          className="rounded-lg shadow-xl"
          isBackground={false}
        />
      </div>
    </div>,
    modalRoot
  );
};

export default VideoModal;