import { motion } from "framer-motion";
import { briefingPalette } from "@/components/briefing/palette";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BriefingCTA = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${briefingPalette.indigo.to} 0%, ${briefingPalette.indigo.DEFAULT} 50%, ${briefingPalette.fuchsia.DEFAULT} 100%)`
      }}
    >
      {/* Floating Storyboard Frames Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-24 border-2 border-white rounded"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-none text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Turn Your Brief into Native Video
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Capture the idea once—our AI intake builds the storyboard and our Studio takes it the rest of the way.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary CTA Button */}
            <motion.button
              onClick={() => window.location.href = 'https://admanager.cre8tive.ai/'}
              className="group relative px-10 py-5 rounded-xl font-bold text-xl text-white overflow-hidden flex items-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.cyan.glow})`,
                border: `2px solid ${briefingPalette.cyan.glow}`,
                boxShadow: `0 0 40px ${briefingPalette.cyan.glow}80, 0 10px 40px ${briefingPalette.indigo.DEFAULT}60, inset 0 0 20px rgba(255, 255, 255, 0.1)`
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 60px ${briefingPalette.cyan.glow}FF, 0 0 100px ${briefingPalette.cyan.glow}80, 0 20px 60px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.2)`
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${briefingPalette.cyan.glow}40, transparent 70%)`,
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}30, ${briefingPalette.cyan.glow}30)`,
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                }}
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 2
                }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Start Your Brief
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA Button */}
            <motion.button
              onClick={() => navigate('/contact')}
              className="group relative px-10 py-5 rounded-xl font-bold text-xl text-white overflow-hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '2px solid transparent',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(135deg, ${briefingPalette.holographic.cyan}, ${briefingPalette.holographic.green})`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 50px ${briefingPalette.holographic.cyan}80, 0 20px 60px rgba(34, 211, 238, 0.5), inset 0 0 20px ${briefingPalette.holographic.cyan}20`
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${briefingPalette.holographic.cyan}20, ${briefingPalette.holographic.green}20)`,
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                }}
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 2
                }}
              />

              <span className="relative z-10">Talk to the Studio</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
