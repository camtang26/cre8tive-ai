import { motion } from "framer-motion";
import { useState } from "react";

interface StyleCardProps {
  name: string;
  description: string;
  imagePath: string;
  textColor: string;
  delay?: number;
}

export const StyleCard = ({ name, description, imagePath, textColor, delay = 0 }: StyleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="style-card relative group cursor-pointer"
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl bg-gray-900"
        style={{
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(79, 70, 229, 0.4)`
            : `0 10px 30px -10px rgba(0, 0, 0, 0.3)`
        }}
      >
        {/* Image */}
        <img
          src={imagePath}
          alt={`${name} visual style example`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Subtle Name Overlay (bottom) */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: 'linear-gradient(to top, rgba(15, 15, 30, 0.9), transparent)'
          }}
        >
          <p className="text-sm font-bold text-white">{name}</p>
        </div>

        {/* Hover Overlay with Description */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-6 backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.92), rgba(15, 15, 30, 0.95))'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-black text-white mb-3 tracking-tight">
              {name}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
        style={{ background: 'linear-gradient(135deg, #4F46E5, #C026D3)' }}
      />
    </motion.div>
  );
};
