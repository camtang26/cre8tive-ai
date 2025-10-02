import { Brain, Layers, Bot, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ServicesProps } from "../types";
import { staggerContainer, fadeInUp } from "@/utils/motionVariants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useRef } from "react";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

interface CardProps {
  service: any;
  index: number;
  isFeatured: boolean;
}

const Enhanced3DCard = ({ service, index, isFeatured }: CardProps) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    damping: 20,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transformStyle: "preserve-3d",
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      whileHover={{ scale: 1.02, z: 50 }}
      className={`relative h-full ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Animated Border Gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${service.color}40, transparent 60%)`,
          filter: 'blur(20px)',
        }}
        animate={isHovered ? {
          rotate: [0, 360],
        } : {}}
        transition={{
          duration: 10,
          repeat: isHovered ? Infinity : 0,
          ease: "linear",
        }}
      />

      <div
        className="glass-card-medium p-8 md:p-10 rounded-3xl h-full flex flex-col group relative overflow-hidden"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {/* Particle Effects */}
        {isHovered && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: service.color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [-20, -60],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Icon with Enhanced Glow */}
        <motion.div
          className="mb-6 p-5 rounded-2xl w-fit relative"
          style={{
            background: `${service.color}15`,
            boxShadow: `0 0 40px ${service.color}40, inset 0 0 20px ${service.color}20`,
            transform: 'translateZ(40px)',
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Icon
            className="w-12 h-12 md:w-16 md:h-16"
            style={{ color: service.color }}
          />

          {/* Orbiting Sparkles */}
          {isHovered && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
            >
              <Sparkles
                className="w-4 h-4"
                style={{
                  color: service.color,
                  transform: `translate(-50%, -50%) translateX(${40 + i * 15}px)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Title with Gradient on Hover */}
        <h3
          className={`${isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} font-black text-white mb-4 transition-all duration-smooth relative z-10`}
          style={{
            transform: 'translateZ(30px)',
            backgroundImage: isHovered
              ? `linear-gradient(135deg, ${service.color}, #ffffff)`
              : 'none',
            backgroundClip: isHovered ? 'text' : 'none',
            WebkitBackgroundClip: isHovered ? 'text' : 'none',
            WebkitTextFillColor: isHovered ? 'transparent' : 'white',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`text-white/70 ${isFeatured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} leading-relaxed mb-6 flex-grow relative z-10`}
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          {service.description}
        </p>

        {/* CTA Link with Arrow */}
        <Link
          to={service.link}
          className="inline-flex items-center gap-2 text-white/90 hover:text-white font-bold text-lg transition-all duration-smooth group-hover:gap-4 relative z-10"
          style={{
            transform: 'translateZ(30px)',
            color: isHovered ? service.color : undefined,
          }}
        >
          <span>Explore</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-smooth group-hover:translate-x-2" />
        </Link>

        {/* Corner Accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10"
          style={{
            background: `radial-gradient(circle at bottom right, ${service.color}, transparent 70%)`,
          }}
          animate={isHovered ? {
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};

export const DesktopServicesBold = ({ services }: ServicesProps) => {
  const { ref, isInView } = useScrollAnimation({ margin: "-150px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-6 py-2 rounded-full glass-card-light mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
              Our Solutions
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-6 leading-none">
            AI-Powered Excellence
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Enterprise-grade AI tools designed to transform your business
          </p>
        </motion.div>

        {/* Enhanced Bento Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[minmax(350px,auto)] mb-20"
          style={{
            perspective: '1000px',
          }}
        >
          {services.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <Enhanced3DCard
                key={index}
                service={service}
                index={index}
                isFeatured={isFeatured}
              />
            );
          })}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton
            strength={0.15}
            as="button"
            onClick={() => window.open('https://cal.com/cameron-tang-121990/30min', '_blank')}
            className="group px-12 py-6 rounded-full font-black text-2xl gradient-shimmer text-white hover:shadow-glow-lg transition-all duration-smooth border-2 border-cyan-400/30 relative overflow-hidden"
            aria-label="Book free consultation"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <span className="flex items-center gap-4 relative z-10">
              <Sparkles className="w-6 h-6" />
              <span>Start Your AI Transformation</span>
              <ArrowRight className="w-7 h-7 transition-transform duration-smooth group-hover:translate-x-2" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
