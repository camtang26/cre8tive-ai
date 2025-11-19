import { motion } from "framer-motion";

// NOTE: Significantly increased stroke widths, opacities, and added "neon" filters
// to ensure maximum visual prominence and "stunning" appearance.

export const StudiosBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="studiosGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-studios-heavy">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="glow-studios-intense">
         <feGaussianBlur stdDeviation="3" result="coloredBlur" />
         <feMerge>
           <feMergeNode in="coloredBlur" />
           <feMergeNode in="SourceGraphic" />
         </feMerge>
      </filter>
    </defs>
    
    {/* Central Aperture / Lens - Massive & Glowing */}
    <motion.circle 
      cx="400" cy="400" r="150" 
      stroke="url(#studiosGrad)" strokeWidth="4" fill="none" opacity="0.9" 
      filter="url(#glow-studios-intense)"
      animate={{ r: [150, 155, 150], opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <circle cx="400" cy="400" r="220" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="400" cy="400" r="300" stroke="#3B82F6" strokeWidth="0.5" fill="none" opacity="0.4" />
    
    {/* Rotating Dashed Rings - Sci-Fi UI */}
    <motion.circle 
      cx="400" cy="400" r="190" 
      stroke="#60A5FA" strokeWidth="2" strokeDasharray="20, 40" fill="none"
      filter="url(#glow-studios-heavy)"
      animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50%", originY: "50%" }}
    />
     <motion.circle 
      cx="400" cy="400" r="260" 
      stroke="#60A5FA" strokeWidth="1" strokeDasharray="5, 15" fill="none"
      opacity="0.5"
      animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50%", originY: "50%" }}
    />

    {/* Framing Reticles - Brighter & Thicker */}
    <motion.path 
      d="M 260 260 L 320 260 M 260 260 L 260 320" 
      stroke="#93C5FD" strokeWidth="4" fill="none" filter="url(#glow-studios-intense)"
      initial={{ opacity: 0.8 }} animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path 
      d="M 540 260 L 480 260 M 540 260 L 540 320" 
      stroke="#93C5FD" strokeWidth="4" fill="none" filter="url(#glow-studios-intense)"
      initial={{ opacity: 0.8 }} animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
    <motion.path 
      d="M 260 540 L 320 540 M 260 540 L 260 480" 
      stroke="#93C5FD" strokeWidth="4" fill="none" filter="url(#glow-studios-intense)"
      initial={{ opacity: 0.8 }} animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, delay: 1, repeat: Infinity }}
    />
    <motion.path 
      d="M 540 540 L 480 540 M 540 540 L 540 480" 
      stroke="#93C5FD" strokeWidth="4" fill="none" filter="url(#glow-studios-intense)"
      initial={{ opacity: 0.8 }} animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
    />
  </svg>
);

export const EngineBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="engineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </linearGradient>
      <filter id="glow-engine-heavy">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Isometric Grid Lines - High Visibility */}
    <g stroke="#C084FC" strokeWidth="1.5" opacity="0.6">
       <line x1="0" y1="400" x2="400" y2="0" />
       <line x1="0" y1="500" x2="500" y2="0" />
       <line x1="0" y1="600" x2="600" y2="0" />
       <line x1="0" y1="700" x2="700" y2="0" />
       
       <line x1="800" y1="400" x2="400" y2="0" />
       <line x1="800" y1="500" x2="300" y2="0" />
       <line x1="800" y1="600" x2="200" y2="0" />
    </g>

    {/* Schematic Nodes - Pulsing Neon Orbs */}
    <motion.circle 
      cx="400" cy="200" r="8" fill="#E9D5FF" filter="url(#glow-engine-heavy)"
      initial={{ opacity: 0.8, scale: 1 }}
      animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle 
      cx="300" cy="300" r="6" fill="#E9D5FF" filter="url(#glow-engine-heavy)"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
    <motion.circle 
      cx="500" cy="300" r="6" fill="#E9D5FF" filter="url(#glow-engine-heavy)"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, delay: 1, repeat: Infinity }}
    />
    <motion.circle 
      cx="400" cy="400" r="10" fill="#A855F7" filter="url(#glow-engine-heavy)"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* Connecting Data Lines - Thick & Bright */}
    <motion.path
      d="M 400 200 L 300 300 L 400 400 L 500 300 Z"
      stroke="#D8B4FE" strokeWidth="3" fill="none"
      strokeDasharray="15,15"
      filter="url(#glow-engine-heavy)"
      initial={{ strokeDashoffset: 0, opacity: 0.5 }}
      animate={{ strokeDashoffset: 60, opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const VoiceBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="voiceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
        <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
      </linearGradient>
       <filter id="glow-voice-intense">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Abstract Sound Waves - Thick, Bright, Organic */}
    <g stroke="url(#voiceGrad)" fill="none" filter="url(#glow-voice-intense)">
      <motion.path 
        strokeWidth="6"
        d="M -100 400 Q 200 100 400 400 T 900 400"
        initial={{ d: "M -100 400 Q 200 100 400 400 T 900 400" }}
        animate={{ d: "M -100 400 Q 200 700 400 400 T 900 400" }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
       <motion.path 
        strokeWidth="3" opacity="0.8"
        d="M -100 400 Q 200 250 400 400 T 900 400"
        initial={{ d: "M -100 400 Q 200 250 400 400 T 900 400" }}
        animate={{ d: "M -100 400 Q 200 550 400 400 T 900 400" }}
        transition={{ duration: 3, delay: 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.path 
        strokeWidth="8" opacity="0.5"
        d="M -100 400 Q 200 50 400 400 T 900 400"
        initial={{ d: "M -100 400 Q 200 50 400 400 T 900 400" }}
        animate={{ d: "M -100 400 Q 200 750 400 400 T 900 400" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </g>

    {/* Digital Frequencies - Equalizer Bars */}
    <motion.rect x="100" y="350" width="6" height="100" fill="#34D399" opacity="0.6" animate={{ height: [100, 250, 50, 100] }} transition={{ duration: 1.5, repeat: Infinity }} />
    <motion.rect x="140" y="320" width="6" height="160" fill="#34D399" opacity="0.6" animate={{ height: [160, 50, 220, 160] }} transition={{ duration: 1.2, repeat: Infinity }} />
    <motion.rect x="180" y="360" width="6" height="80" fill="#34D399" opacity="0.6" animate={{ height: [80, 200, 40, 80] }} transition={{ duration: 1.8, repeat: Infinity }} />
    
    <motion.rect x="620" y="360" width="6" height="80" fill="#34D399" opacity="0.6" animate={{ height: [80, 200, 40, 80] }} transition={{ duration: 1.7, repeat: Infinity }} />
    <motion.rect x="660" y="350" width="6" height="100" fill="#34D399" opacity="0.6" animate={{ height: [100, 150, 80, 100] }} transition={{ duration: 1.9, repeat: Infinity }} />
    <motion.rect x="700" y="320" width="6" height="160" fill="#34D399" opacity="0.6" animate={{ height: [160, 220, 60, 160] }} transition={{ duration: 1.4, repeat: Infinity }} />
  </svg>
);
