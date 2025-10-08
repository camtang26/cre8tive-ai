import { motion } from "framer-motion";
import { useState } from "react";

interface StyleCardProps {
  name: string;
  description: string;
  imagePath: string;
  textColor: string;
  accent: string;
}

export const StyleCard = ({ name, description, imagePath, textColor, accent }: StyleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="style-card relative group cursor-pointer"
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
        style={{
          boxShadow: isHovered
            ? `0 25px 60px -20px ${accent}70`
            : "0 10px 30px -12px rgba(4, 5, 15, 0.55)"
        }}
      >
        <img
          src={imagePath}
          alt={`${name} visual style example`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: `linear-gradient(0deg, ${accent}40 0%, transparent 80%)`
          }}
        >
          <p className="text-sm font-bold text-white" style={{ color: textColor }}>
            {name}
          </p>
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 backdrop-blur-sm"
          style={{
            background: `rgba(0, 0, 0, 0.75)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-black text-white tracking-tight">
              {name}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {description}
            </p>
            <div className="pt-2">
              <span className="inline-block px-6 py-2 rounded-full font-bold text-sm text-white bg-white/20 border border-white/30 backdrop-blur-sm">
                Explore Style
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}40)` }}
      />
    </motion.div>
  );
};
