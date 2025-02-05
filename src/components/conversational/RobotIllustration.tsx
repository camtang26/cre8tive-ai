import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

export const RobotIllustration = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`flex justify-center items-center relative mx-auto my-8 ${
      isMobile ? 'gap-8 max-w-[100%] h-[200px]' : 'gap-32 max-w-[800px] h-[300px]'
    }`}>
      {/* Robot Head Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`relative ${isMobile ? 'w-[200px] h-[200px]' : 'w-[300px] h-[300px]'}`}
        style={{
          filter: "drop-shadow(0 0 15px rgba(0,255,128,0.4))"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Robot Head - Larger and more detailed */}
          <circle cx="100" cy="100" r="50" 
                  className="fill-white/10 stroke-[#00ff80] stroke-2"/>
          
          {/* Robot Eyes - More geometric and robotic */}
          <rect x="77" y="82" width="16" height="16" rx="2" className="fill-[#00ff80]"/>
          <rect x="107" y="82" width="16" height="16" rx="2" className="fill-[#00ff80]"/>
          
          {/* Robot Antenna */}
          <line x1="100" y1="50" x2="100" y2="35" 
                className="stroke-[#00ff80] stroke-2"/>
          <circle cx="100" cy="32" r="3" className="fill-[#00ff80]"/>
          
          {/* Robot Details - Geometric patterns for more robotic look */}
          <path d="M70,110 Q100,130 130,110" 
                className="fill-none stroke-[#00ff80] stroke-2"/>
          
          {/* Circuit-like details */}
          <line x1="70" y1="65" x2="85" y2="65" className="stroke-[#00ff80] stroke-1 opacity-30"/>
          <line x1="115" y1="65" x2="130" y2="65" className="stroke-[#00ff80] stroke-1 opacity-30"/>
          <circle cx="100" cy="140" r="5" className="fill-[#00ff80]"/>
        </svg>
        
        {/* Glow Effects for Robot */}
        <div className="absolute inset-0 blur-[50px] opacity-40 bg-gradient-to-r from-[#00ff80]/40 to-[#00ff80]/20"/>
        <div className="absolute inset-0 blur-[25px] opacity-20 bg-gradient-radial from-[#00ff80]/30 via-transparent to-transparent"/>
      </motion.div>

      {/* Phone Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`relative flex items-center justify-center ${
          isMobile ? 'w-[200px] h-[200px]' : 'w-[300px] h-[300px]'
        }`}
        style={{
          filter: "drop-shadow(0 0 15px rgba(0,255,128,0.4))"
        }}
      >
        <div className="relative">
          <Phone 
            size={isMobile ? 80 : 120}
            className="text-[#00ff80] transform -rotate-12"
            strokeWidth={1.5}
          />
          
          {/* Phone Connection Lines */}
          <motion.div
            className="absolute inset-0"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 120 120" className="w-full h-full absolute top-0 left-0">
              <circle cx="60" cy="60" r="55" 
                      className="fill-none stroke-[#00ff80] stroke-1 opacity-20"/>
              <circle cx="60" cy="60" r="45" 
                      className="fill-none stroke-[#00ff80] stroke-1 opacity-30"/>
              <circle cx="60" cy="60" r="35" 
                      className="fill-none stroke-[#00ff80] stroke-1 opacity-40"/>
            </svg>
          </motion.div>
        </div>
        
        {/* Glow Effects for Phone */}
        <div className="absolute inset-0 blur-[50px] opacity-40 bg-gradient-to-r from-[#00ff80]/40 to-[#00ff80]/20"/>
        <div className="absolute inset-0 blur-[25px] opacity-20 bg-gradient-radial from-[#00ff80]/30 via-transparent to-transparent"/>
      </motion.div>
    </div>
  );
};