import { VideoGallery } from './gallery/VideoGallery';
import { ErrorBoundary } from '@/lib/error/ErrorBoundary';
import { ScrollFade } from '@/components/shared/ScrollFade';

// Video data with actual Cre8tive AI Vimeo videos
const videos = [
  {
    id: "1",
    videoId: "1051824336",
    title: "Cre8tive AI DHM Video"
  },
  {
    id: "2",
    videoId: "1051846744",
    title: "RAM 30 sec Cre8tive AI Demo"
  },
  {
    id: "3",
    videoId: "1051820049",
    title: "Cre8tive AI Automotive Demo"
  },
  {
    id: "4",
    videoId: "1051819670",
    title: "Cre8tive AI Demo"
  },
  {
    id: "5",
    videoId: "1052203361",
    title: "Cre8tive AI Marina Project"
  },
  {
    id: "6",
    videoId: "1052204241",
    title: "LIMINAL"
  }
];

export const Gallery = () => {
  return (
    <section className="py-12 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
        }}
      />
      
      <div className="container relative mx-auto px-6">
        <ScrollFade>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-geist">
              Our Work
            </h2>
          </div>
        </ScrollFade>

        <ErrorBoundary context="Video Gallery">
          <VideoGallery videos={videos} />
        </ErrorBoundary>
      </div>
    </section>
  );
};