import { forwardRef } from 'react';
import VimeoPlayer, { VimeoPlayerHandle } from '../../core/VimeoPlayer';
import { ErrorBoundary } from '@/lib/error/ErrorBoundary';

interface VideoContainerProps {
  videoId: string;
  title: string;
  isActive: boolean;
  onError: (error: Error) => void;
}

export const VideoContainer = forwardRef<VimeoPlayerHandle, VideoContainerProps>(
  ({ videoId, title, isActive, onError }, ref) => (
    <ErrorBoundary context={`Video: ${title}`}>
      <VimeoPlayer
        ref={ref}
        videoId={videoId}
        autoplay={isActive}
        muted={true}
        loop={false}
        isBackground={true}
        className="w-full h-full rounded-lg"
        onError={onError}
      />
    </ErrorBoundary>
  )
);

VideoContainer.displayName = 'VideoContainer';