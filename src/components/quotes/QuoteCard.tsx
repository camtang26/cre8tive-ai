import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlassCard } from "@/components/ui/glass-card";

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
}

export const QuoteCard = ({ quote, author, title }: QuoteCardProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-5xl mx-auto"
    >
      <GlassCard
        variant="medium"
        className="p-8 sm:p-10 md:p-14 lg:p-20 group relative overflow-hidden"
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-cinematic" />

        <div className="relative z-10">
          {/* Quote Icon with Floating Animation */}
          <motion.div
            className="mb-8 md:mb-10"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-2xl rounded-full opacity-60 bg-blue-400/50" />
              <Quote className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-blue-400 relative z-10" />
            </div>
          </motion.div>

          {/* Quote Content */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic text-white/95 leading-relaxed tracking-tight">
              "{quote}"
            </p>

            {/* Author Info with Gradient Border */}
            <div className="flex items-center gap-4 pt-6 border-t border-gradient-to-r from-blue-500/20 via-cyan-500/20 to-transparent">
              <div className="space-y-1">
                <p className="text-lg sm:text-xl md:text-2xl font-black gradient-text">
                  {author}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/60 font-medium">
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};