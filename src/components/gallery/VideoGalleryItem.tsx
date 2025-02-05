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

  return (
    <>
      <div
        className="relative break-inside-avoid cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9b87f5]/10 animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={handleOpenModal}
        onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}
        role="button"
        tabIndex={0}
        aria-label={`Play ${title}`}
      >
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