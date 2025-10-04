import { motion } from "framer-motion";
import { useState } from "react";

interface StyleCardProps {
  name: string;
  description: string;
  gradient: string;
  textColor: string;
  delay?: number;
}

export const StyleCard = ({ name, description, gradient, textColor, delay = 0 }: StyleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
        style={{
          background: gradient,
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(168, 85, 247, 0.4)`
            : `0 10px 30px -10px rgba(0, 0, 0, 0.3)`
        }}
      >
        {/* Placeholder Content */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center">
            <div
              className="w-24 h-24 mx-auto mb-4 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center"
              style={{ borderColor: `${textColor}30`, borderWidth: 2 }}
            >
              <span className="text-4xl" style={{ color: textColor }}>
                {name.charAt(0)}
              </span>
            </div>
            <p
              className="text-xs font-semibold opacity-60"
              style={{ color: textColor }}
            >
              {name}
            </p>
          </div>
        </div>

        {/* Hover Overlay with Description */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-6 backdrop-blur-md"
          style={{
            background: 'rgba(0, 0, 0, 0.75)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-black text-white mb-2 tracking-tight">
              {name}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {description}
            </p>
            <p className="text-xs text-white/40 mt-4 italic">
              Placeholder - awaiting visual asset
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
        style={{ background: gradient }}
      />
    </motion.div>
  );
};
