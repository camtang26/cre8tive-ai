import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

const conversations = [
  {
    id: 1,
    speaker: "human",
    text: "I need to reschedule my appointment for tomorrow.",
    time: "10:42 AM"
  },
  {
    id: 2,
    speaker: "ai",
    text: "I can help with that. I see your booking for 2:00 PM tomorrow with Dr. Chen. What time works better for you?",
    time: "10:42 AM",
    processingTime: "0.2s"
  },
  {
    id: 3,
    speaker: "human",
    text: "Do you have anything later in the afternoon? Around 4?",
    time: "10:43 AM"
  },
  {
    id: 4,
    speaker: "ai",
    text: "I have a 4:15 PM opening available. Would you like me to lock that in?",
    time: "10:43 AM",
    processingTime: "0.15s"
  },
  {
    id: 5,
    speaker: "human",
    text: "Actually, is there anything on Thursday instead?",
    time: "10:43 AM"
  },
  {
    id: 6,
    speaker: "ai",
    text: "Checking Thursday... Yes, I have 9:00 AM and 2:30 PM open. Which one do you prefer?",
    time: "10:43 AM",
    processingTime: "0.3s"
  }
];

export const DialogueStream = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Context / Copy */}
        <div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-6 block"
          >
            // Real-Time Processing
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            Fluid Context. <br />
            <span className="text-white/30">Zero Latency.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed max-w-lg"
          >
            Our agents don't just follow decision trees. They maintain context, handle interruptions, and pivot instantly—just like a human expert, but with infinite patience.
          </motion.p>
        </div>

        {/* Right: The Chat Stream Visualization */}
        <div className="relative h-[600px] w-full">
          {/* Masking Gradients for infinite scroll illusion */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          <motion.div style={{ y, opacity }} className="space-y-6 relative z-10">
            {conversations.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const ChatBubble = ({ message }: { message: any }) => {
  const isAi = message.speaker === "ai";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ margin: "-50px" }}
      className={cn(
        "flex gap-4 max-w-xl",
        isAi ? "ml-auto flex-row-reverse" : ""
      )}
    >
      {/* Avatar */}
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
        isAi ? "bg-emerald-950/50 border-emerald-500/30 text-emerald-400" : "bg-white/5 border-white/10 text-white/60"
      )}>
        {isAi ? <Bot size={20} /> : <User size={20} />}
      </div>

      {/* Bubble */}
      <div className={cn(
        "p-6 rounded-2xl border backdrop-blur-md relative",
        isAi ? "bg-emerald-900/10 border-emerald-500/20 rounded-tr-none" : "bg-white/5 border-white/10 rounded-tl-none"
      )}>
        <p className={cn(
          "text-lg font-medium leading-relaxed",
          isAi ? "text-emerald-100" : "text-white/90"
        )}>
          {message.text}
        </p>
        
        {/* Metadata Footer */}
        <div className="flex items-center gap-4 mt-3 opacity-50 text-xs font-mono uppercase tracking-wider">
          <span>{message.time}</span>
          {isAi && (
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {message.processingTime}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
