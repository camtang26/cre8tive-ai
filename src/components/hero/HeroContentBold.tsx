import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const HeroContentBold = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.2s ease-out"
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
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-center md:justify-start">
        <div className="w-full max-w-7xl mx-auto flex justify-center md:justify-start md:ml-12 lg:ml-20">
          {/* HERO CONTENT - ASYMMETRIC LEFT */}
          <motion.div
            className="flex flex-col justify-center items-start text-left space-y-8 md:space-y-10 lg:space-y-12 max-w-4xl lg:max-w-5xl relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Giant "Cre8tive AI" */}
            <div className="relative">
              <motion.h1
                className="font-geist font-black leading-[0.85] tracking-tighter relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="text-[clamp(3.5rem,8vw,8rem)] md:text-[clamp(4rem,9vw,9rem)] lg:text-[10rem] xl:text-[12rem] bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(59,130,246,0.6)]">
                  Cre8tive
                </div>
                <div className="text-[clamp(5rem,12vw,12rem)] md:text-[clamp(6rem,13vw,13rem)] lg:text-[14rem] xl:text-[18rem] bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(59,130,246,0.8)] mt-2 md:mt-1 lg:mt-0 relative">
                  AI
                  {/* Subtle Pulsing Glow Behind AI */}
                  <motion.div
                    className="absolute inset-0 blur-3xl opacity-20"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)"
                    }}
                  />
                </div>
              </motion.h1>

              {/* Enhanced Glowing Line Accent */}
              <motion.div className="relative mt-6">
                <motion.div
                  className="h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent rounded-full shadow-[0_0_25px_rgba(6,182,212,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: "min(280px, 60vw)" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                />
                {/* Animated Particle on Line */}
                <motion.div
                  className="absolute top-0 w-2 h-2 rounded-full bg-cyan-300"
                  initial={{ left: 0 }}
                  animate={{
                    left: ["0px", "min(260px, 58vw)"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  style={{
                    boxShadow: "0 0 10px rgba(6, 182, 212, 1)"
                  }}
                />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/95 leading-tight tracking-tight">
                The Future of
              </p>
              <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                AI-Powered Business
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/75 max-w-2xl lg:max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              Transform your operations with cutting-edge AI video production, autonomous agents, and intelligent automation.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
