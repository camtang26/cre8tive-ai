import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Layers, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "studios",
    icon: Brain,
    title: "Studios",
    subtitle: "AI Video Production",
    description: "High-quality video, powered by AI. Delivering speed, efficiency, and stunning results.",
    link: "/studios",
    gradient: "from-blue-600 to-cyan-500",
    bgImage: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)"
  },
  {
    id: "engine",
    icon: Layers,
    title: "Briefing Engine",
    subtitle: "Instant Storyboards",
    description: "Instantly create professional video ad storyboards. From idea to plan in minutes.",
    link: "/briefing-engine",
    gradient: "from-purple-600 to-indigo-500",
    bgImage: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1), transparent 70%)"
  },
  {
    id: "conversational",
    icon: Phone,
    title: "Conversational AI",
    subtitle: "24/7 Communication",
    description: "Real phone numbers, 24/7 support. Revolutionize communication.",
    link: "/conversational",
    gradient: "from-emerald-500 to-teal-400",
    bgImage: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 70%)"
  }
];

export const NeuralServices = () => {
  const [activeService, setActiveService] = useState<string | null>("studios");

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center py-20 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-cyan-500" />
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">
            System Capabilities
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          The Neural <span className="text-white/40">Ecosystem</span>
        </h2>
      </div>

      {/* The Lens Interface */}
      <div className="container mx-auto px-6 h-[60vh] md:h-[70vh] flex flex-col md:flex-row gap-2 md:gap-4">
        {services.map((service) => {
          const isActive = activeService === service.id;
          return (
            <motion.div
              key={service.id}
              layout
              onClick={() => setActiveService(service.id)}
              onMouseEnter={() => setActiveService(service.id)}
              className={cn(
                "relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-colors duration-500",
                isActive ? "flex-[3] border-white/30" : "flex-[1] hover:border-white/20 bg-white/5"
              )}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Background Gradient / Image */}
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  isActive ? "opacity-100" : "opacity-20"
                )}
              >
                 <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", service.gradient)} />
                 <div className="absolute inset-0" style={{ background: service.bgImage }} />
              </div>

              {/* Content Container */}
              <div className="relative h-full w-full p-6 md:p-10 flex flex-col justify-between z-10">
                
                {/* Top: Icon & Title */}
                <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                    isActive ? "bg-white text-black scale-110" : "bg-white/10 text-white/60"
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <div className={cn("transition-all duration-500", isActive ? "translate-y-0" : "translate-y-0")}>
                    <h3 className={cn(
                      "font-bold text-white leading-tight transition-all duration-300",
                      isActive ? "text-3xl md:text-4xl" : "text-xl md:text-2xl text-white/70"
                    )}>
                      {service.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-cyan-400 font-mono text-xs uppercase tracking-widest mt-2 block"
                        >
                          {service.subtitle}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Middle: Description (Only Visible when Active) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-md"
                    >
                      <p className="text-lg text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom: CTA Button (Only Visible when Active) */}
                <div className="flex justify-between items-end">
                   {/* Vertical Text for Inactive State */}
                   {!isActive && (
                     <div className="hidden md:block absolute bottom-10 left-10 origin-bottom-left -rotate-90 text-white/40 font-mono text-sm uppercase tracking-widest whitespace-nowrap">
                       {service.subtitle}
                     </div>
                   )}

                   <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link to={service.link}>
                          <button className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg font-bold tracking-tight hover:bg-cyan-50 transition-colors">
                            Explore Module
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </Link>
                      </motion.div>
                    )}
                   </AnimatePresence>

                    {/* Mobile Arrow for Inactive */}
                    {!isActive && (
                        <div className="md:hidden p-2 bg-white/10 rounded-full">
                             <ArrowRight className="w-4 h-4 text-white/50" />
                        </div>
                    )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};