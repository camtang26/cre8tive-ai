import { Brain, Layers, Bot, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/bento-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ServicesProps } from "../types";
import { staggerContainer, fadeInUp, scaleIn } from "@/utils/motionVariants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

export const DesktopServices = ({ services }: ServicesProps) => {
  const { ref, isInView } = useScrollAnimation({ margin: "-150px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black gradient-text mb-4">
            Our Solutions
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Cutting-edge AI tools to transform your business
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)] mb-16"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isFeatured = index === 0; // First card is featured

            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className={isFeatured ? "md:col-span-2 md:row-span-2" : ""}
              >
                <BentoCard
                  size={isFeatured ? "featured" : "default"}
                  className="h-full flex flex-col p-8 group"
                >
                  {/* Icon with Glow */}
                  <div
                    className="mb-6 p-4 rounded-2xl w-fit transition-all duration-smooth group-hover:scale-110"
                    style={{
                      background: `${service.color}15`,
                      boxShadow: `0 0 30px ${service.color}30`,
                    }}
                  >
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-smooth group-hover:rotate-6"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-smooth">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors duration-smooth group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 transition-transform duration-smooth" />
                  </Link>
                </BentoCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Magnetic CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton
            strength={0.15}
            as="button"
            onClick={() => window.open('https://cal.com/cameron-tang-121990/30min', '_blank')}
            className="group px-10 py-5 rounded-full font-bold text-xl gradient-shimmer text-white hover:shadow-glow-lg transition-all duration-smooth"
            aria-label="Book free consultation"
          >
            <span className="flex items-center gap-3">
              Get a Free Consultation
              <ArrowRight className="w-6 h-6 transition-transform duration-smooth group-hover:translate-x-1" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};