import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingCallButton = () => {
  const phoneNumber = "+61756258275"; // No spaces for tel: protocol
  const displayNumber = "+61 7 5625 8275"; // Formatted for display

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-[108px] right-10 md:bottom-[98px] md:right-8 z-50
                 glass-card-medium hover:glass-card-heavy
                 px-4 py-3 md:px-6 md:py-4
                 rounded-full
                 flex items-center gap-2 md:gap-3
                 text-white font-bold text-sm md:text-base
                 transition-all duration-300
                 hover:shadow-glow-lg
                 group
                 border border-cyan-400/20 hover:border-cyan-400/40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Call agent at ${displayNumber}`}
    >
      {/* Phone Icon with Glow */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 relative z-10" />
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent 70%)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Text - Hidden on small mobile, shown on sm+ */}
      <span className="hidden sm:inline gradient-text">
        Call Agent Mobile
      </span>

      {/* Screen reader text for mobile */}
      <span className="sr-only sm:hidden">
        Call {displayNumber}
      </span>
    </motion.a>
  );
};
