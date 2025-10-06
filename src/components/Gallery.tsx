import { VideoGallery } from './gallery/VideoGallery';
import { ErrorBoundary } from '@/lib/error/ErrorBoundary';
import { ScrollFade } from '@/components/shared/ScrollFade';
import { motion } from 'framer-motion';

// Video data with actual Cre8tive AI Vimeo videos
const videos = [
  {
    id: "1",
    videoId: "1051824336",
    title: "Cre8tive AI DHM Video"
  },
  {
    id: "2",
    videoId: "1055446411",
    title: "Kotia Skincare"
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
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative mx-auto px-6">
        <ScrollFade>
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Badge */}
            <motion.div
              className="inline-block px-8 py-3 rounded-full glass-card-light mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan-400 font-bold text-base md:text-lg tracking-wider uppercase">
                Portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-6 leading-none font-geist">
              Our Work
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Transforming visions into reality with AI-powered video production
            </p>
          </div>
        </ScrollFade>

        <ErrorBoundary context="Video Gallery">
          <VideoGallery videos={videos} />
        </ErrorBoundary>
      </div>
    </section>
  );
};