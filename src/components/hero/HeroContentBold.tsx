import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const serviceHighlights = [
  { icon: Brain, text: "AI Video Production", color: "#3B82F6" },
  { icon: Zap, text: "Autonomous Agents", color: "#06B6D4" },
  { icon: Sparkles, text: "Content Creation", color: "#0EA5E9" },
];

export const HeroContentBold = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative z-[2] w-full h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 h-full">
        <div className="grid md:grid-cols-[55%_45%] gap-8 h-full items-center">

          {/* LEFT SIDE - MASSIVE TEXT */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Giant "Cre8tive AI" */}
            <div className="relative">
              <motion.h1
                className="font-geist font-black leading-[0.85] tracking-tighter"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="text-[clamp(4rem,12vw,10rem)] bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(59,130,246,0.6)]">
                  Cre8tive
                </div>
                <div className="text-[clamp(6rem,18vw,16rem)] bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(59,130,246,0.8)] -mt-4">
                  AI
                </div>
              </motion.h1>

              {/* Glowing Line Accent */}
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-6 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </div>

            {/* Tagline */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/95 leading-tight">
                The Future of
              </p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Business
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Transform your operations with cutting-edge AI video production, autonomous agents, and intelligent automation.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <MagneticButton strength={0.2} as="div">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl gradient-shimmer text-white hover:shadow-glow-lg transition-all duration-smooth border-2 border-cyan-400/30"
                >
                  <span>Launch Your AI Journey</span>
                  <ArrowRight className="w-6 h-6 transition-transform duration-smooth group-hover:translate-x-2" />
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - ANIMATED SERVICE CARDS */}
          <motion.div
            className="hidden md:flex flex-col justify-center items-end space-y-6 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Diagonal Glow Line */}
            <div className="absolute -left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50" />

            {serviceHighlights.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="glass-card-heavy p-8 rounded-2xl w-full max-w-md group cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Animated Border Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, transparent)`,
                      boxShadow: `0 0 30px ${service.color}40`,
                    }}
                  />

                  <div className="relative z-10 flex items-center gap-6">
                    {/* Icon */}
                    <div
                      className="p-4 rounded-xl transition-all duration-smooth group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `${service.color}15`,
                        boxShadow: `0 0 20px ${service.color}30`,
                      }}
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color: service.color }}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-smooth">
                        {service.text}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-white/60 group-hover:text-cyan-400 transition-colors">
                        <span className="text-sm font-semibold">Explore</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Particle Effect on Hover */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        background: service.color,
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              );
            })}

            {/* Floating Stat Badge */}
            <motion.div
              className="absolute -bottom-10 left-0 glass-card-glow px-6 py-3 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                <span className="text-white/90 font-semibold">
                  <span className="text-cyan-400 font-bold">500+</span> Projects Delivered
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
