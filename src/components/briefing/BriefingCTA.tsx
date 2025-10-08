import { motion } from "framer-motion";
import { briefingPalette } from "@/components/briefing/palette";
import { ArrowRight } from "lucide-react";

export const BriefingCTA = () => {
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
            Start Creating Premium Storyboards—Free Trial
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Brand, Your Vision, Our AI—Perfect Storyboards, Every Time
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              className="group px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.cyan.glow})`,
                color: 'white',
                boxShadow: `0 10px 30px ${briefingPalette.indigo.DEFAULT}40`
              }}
            >
              Start Your First Brief
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="px-10 py-5 rounded-xl font-bold text-xl border-2 text-white transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
              style={{
                borderColor: briefingPalette.indigo.DEFAULT,
                background: 'transparent'
              }}
            >
              Talk to Our Team
            </button>
          </motion.div>

          {/* Supporting Info */}
          <motion.div
            className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: briefingPalette.cyan.glow }}
              />
              <span>9 Visual Styles</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: briefingPalette.fuchsia.DEFAULT }}
              />
              <span>PDF Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: briefingPalette.orange.DEFAULT }}
              />
              <span>Studios Integration</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
