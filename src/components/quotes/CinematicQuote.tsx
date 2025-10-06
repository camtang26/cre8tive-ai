import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface CinematicQuoteProps {
  quote: string;
  author: string;
  title: string;
}

export const CinematicQuote = ({ quote, author, title }: CinematicQuoteProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Decorative Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={inView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -top-10 left-0 md:left-10"
          >
            <Quote className="w-32 h-32 md:w-48 md:h-48 text-cyan-400" strokeWidth={1} />
          </motion.div>

          {/* Quote Text - MASSIVE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <blockquote className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-12 relative z-10">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                "{quote}"
              </span>
            </blockquote>

            {/* Glowing Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)',
              }}
            />
          </motion.div>

          {/* Author Info - Elegant */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            {/* Avatar Circle */}
            <div className="w-20 h-20 rounded-full glass-card-heavy flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-2xl">
                {author.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            {/* Name and Title */}
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {author}
              </p>
              <p className="text-lg md:text-xl text-cyan-400 font-semibold">
                {title}
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -bottom-20 right-0 md:right-20 w-64 h-64 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};
