import { useState, useRef } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { AspectRatio } from "../ui/aspect-ratio";
import VideoModal from '../core/VideoModal';
import { ErrorAlert } from './components/ErrorAlert';
import { VideoContainer } from './components/VideoContainer';
import type { VimeoPlayerHandle } from '../core/VimeoPlayer';

interface VideoGalleryItemProps {
  videoId: string;
  title: string;
  isActive: boolean;
  onActivate: () => void;
}

const VideoGalleryItem = ({ videoId, title, isActive, onActivate }: VideoGalleryItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const playerRef = useRef<VimeoPlayerHandle>(null);
  const { trackEvent } = useAnalytics();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    trackEvent({
      action: 'open_modal',
      category: 'video',
      label: videoId
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    trackEvent({
      action: 'close_modal',
      category: 'video',
      label: videoId
    });
  };

  const handleError = (error: Error) => {
    console.error(`Video ${videoId} error:`, error);
    setHasError(true);
    trackEvent({
      action: 'error',
      category: 'video',
      label: `${videoId}: ${error.message}`
    });
  };

  const handleRetry = () => {
    setHasError(false);
    onActivate();
  };

  return (
    <>
      <div
        className="relative break-inside-avoid cursor-pointer group animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={handleOpenModal}
        onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}
        role="button"
        tabIndex={0}
        aria-label={`Play ${title}`}
      >
        {/* Hover Overlay with Professional Blue Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

        {/* Play Icon on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">{title}</h3>
        </div>

        {/* Card with hover effects */}
        <div className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/30">
        <AspectRatio ratio={16 / 9}>
          {hasError ? (
            <ErrorAlert onRetry={handleRetry} />
          ) : (
            <VideoContainer
              ref={playerRef}
              videoId={videoId}
              title={title}
              isActive={isActive}
              onError={handleError}
            />
          )}
        </AspectRatio>
        </div>
      </div>

      {isModalOpen && (
        <VideoModal
          videoId={videoId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default VideoGalleryItem;
