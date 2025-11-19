import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Video, Layers, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { StudiosBackground, EngineBackground, VoiceBackground } from "./ServiceBackgrounds";

const services = [
  {
    id: "studios",
    num: "01",
    title: "STUDIOS",
    shortTitle: "STUDIOS",
    tagline: "Cinematic Intelligence",
    description: "High-speed, AI-powered video production that creates broadcast-quality assets at impossible speeds.",
    link: "/studios",
    icon: Video,
    gradient: "bg-gradient-to-b from-blue-950/50 via-black to-black",
    accent: "text-blue-500",
    border: "border-blue-500/30",
    Background: StudiosBackground
  },
  {
    id: "engine",
    num: "02",
    title: "BRIEFING ENGINE",
    shortTitle: "BRIEFING",
    tagline: "Briefing Architecture",
    description: "Turn raw concepts into production-ready storyboards and plans in minutes, not weeks.",
    link: "/briefing-engine",
    icon: Layers,
    gradient: "bg-gradient-to-b from-purple-950/50 via-black to-black",
    accent: "text-purple-500",
    border: "border-purple-500/30",
    Background: EngineBackground
  },
  {
    id: "conversational",
    num: "03",
    title: "VOICE",
    shortTitle: "VOICE",
    tagline: "Neural Dialogue",
    description: "Deploy autonomous agents that speak, listen, and negotiate with human-level nuance 24/7.",
    link: "/conversational",
    icon: MessageSquare,
    gradient: "bg-gradient-to-b from-emerald-950/50 via-black to-black",
    accent: "text-emerald-500",
    border: "border-emerald-500/30",
    Background: VoiceBackground
  }
];

export const MonolithServices = () => {
  const [activeId, setActiveId] = useState<string | null>("studios");

  return (
    <section className="relative h-[85vh] md:h-screen bg-black overflow-hidden flex flex-col md:flex-row">
      
      {/* Global Noise Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {services.map((service) => {
        const isActive = activeId === service.id;

        return (
          <motion.div
            key={service.id}
            onMouseEnter={() => setActiveId(service.id)}
            onClick={() => setActiveId(service.id)} // Mobile tap
            className={cn(
              "relative h-full flex flex-col border-r border-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden group cursor-pointer",
              isActive ? "flex-[4] md:flex-[3]" : "flex-[1]"
            )}
          >
            {/* Background Layer - Gradient */}
            <div className={cn(
              "absolute inset-0 transition-all duration-1000",
              service.gradient,
              isActive ? "opacity-100" : "opacity-40 grayscale"
            )} />

            {/* Custom SVG Background */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isActive ? "opacity-100" : "opacity-0"
            )}>
              <service.Background />
            </div>

            {/* Active "Scanner" Light Beam */}
            {isActive && (
              <motion.div 
                initial={{ top: "-100%" }}
                animate={{ top: "200%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/5 to-transparent -skew-y-12 pointer-events-none z-10"
              />
            )}

            {/* Content Container */}
            <div className="relative z-20 h-full p-6 md:p-12 flex flex-col justify-between">
              
              {/* Header: Number & Icon */}
              <div className="flex justify-between items-start">
                <span className={cn(
                  "font-mono text-sm tracking-widest transition-colors duration-500",
                  isActive ? "text-white" : "text-white/30"
                )}>
                  /{service.num}
                </span>
                <service.icon className={cn(
                  "w-6 h-6 transition-all duration-500",
                  isActive ? service.accent : "text-white/10"
                )} />
              </div>

              {/* Middle: The Title (Vertical vs Horizontal) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Inactive State: Vertical Text */}
                <div className={cn(
                  "absolute transition-all duration-500 transform",
                  isActive ? "opacity-0 scale-110 blur-lg" : "opacity-100 blur-0"
                )}>
                  <h2 className="text-6xl md:text-8xl font-black text-white/10 tracking-tighter rotate-90 whitespace-nowrap select-none">
                    {service.shortTitle}
                  </h2>
                </div>
              </div>

              {/* Active Content */}
              <div className={cn(
                "relative mt-auto transition-all duration-500 transform",
                isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
              )}>
                <div className="max-w-2xl">
                  <motion.h2 
                    layout="position"
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]"
                  >
                    {service.title}
                  </motion.h2>
                  
                  <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mb-8 opacity-50" />
                  
                  <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg font-light">
                    {service.description}
                  </p>

                  <Link to={service.link}>
                    <button className={cn(
                      "group flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border text-white rounded-none hover:bg-white hover:text-black transition-all duration-300",
                      service.border
                    )}>
                      <span className="font-bold tracking-widest uppercase text-sm">Explore {service.title}</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>

            {/* Glass Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        );
      })}
    </section>
  );
};