import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

interface Stat {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    color: "#3B82F6",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "#06B6D4",
  },
  {
    icon: Zap,
    value: 24,
    suffix: "/7",
    label: "AI Support",
    color: "#0EA5E9",
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "AI Models Trained",
    color: "#8B5CF6",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
};

export const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-xl md:text-2xl text-white/70">
            The numbers speak for themselves
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card-medium p-6 md:p-8 rounded-2xl group hover:scale-105 transition-transform duration-smooth relative overflow-hidden"
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${stat.color}20, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-4 w-fit"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: `${stat.color}15`,
                      boxShadow: `0 0 20px ${stat.color}30`,
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: stat.color }}
                    />
                  </div>
                </motion.div>

                {/* Counter */}
                <div className="mb-2 relative z-10">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>

                {/* Label */}
                <p className="text-white/70 font-semibold text-sm md:text-base relative z-10">
                  {stat.label}
                </p>

                {/* Pulse Effect */}
                <motion.div
                  className="absolute -bottom-1 -right-1 w-24 h-24 rounded-full opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${stat.color}, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
