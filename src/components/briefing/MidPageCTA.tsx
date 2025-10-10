import { motion } from "framer-motion";
import { briefingPalette } from "@/components/briefing/palette";
import { ArrowRight } from "lucide-react";

export const MidPageCTA = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white/95">
            Ready to Create Your Storyboard?
          </h3>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto">
            Start transforming your brand vision into professional storyboards in minutes
          </p>

          <motion.button
            onClick={() => window.location.href = 'https://admanager.cre8tive.ai/'}
            className="group relative px-8 py-3.5 rounded-lg font-semibold text-lg text-white overflow-hidden inline-flex items-center gap-2"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid transparent',
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.cyan.DEFAULT})`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: `0 8px 24px ${briefingPalette.indigo.DEFAULT}40`
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Subtle gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}15, ${briefingPalette.cyan.DEFAULT}15)`,
              }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10 flex items-center gap-2">
              Try the Briefing Engine
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
