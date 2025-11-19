import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Phone, Mic, Radio, User, PhoneForwarded, Globe } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Simulated Audio Call Data
const calls = [
  {
    id: "call-1042",
    caller: "Caller #8842",
    source: "Inbound Call (+1 415...)",
    status: "Active",
    duration: "00:42",
    transcript: [
      { speaker: "agent", text: "Cre8tive AI Support, this is Alex. How can I help you today?", active: false },
      { speaker: "caller", text: "Hi, I need to change my appointment time.", active: false },
      { speaker: "agent", text: "I can definitely help with that. I see you're booked for tomorrow at 2 PM. What time works better?", active: true }
    ]
  },
  {
    id: "call-1043",
    caller: "Caller #9921",
    source: "Web Voice Interface",
    status: "Active",
    duration: "02:15",
    transcript: [
      { speaker: "caller", text: "I can't log into my dashboard, it keeps giving me error 503.", active: false },
      { speaker: "agent", text: "I understand the frustration. Error 503 usually means a brief connection timeout. Let me reset your session token...", active: true }
    ]
  }
];

export const AudioIntelligenceStream = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Header Elements
    tl.fromTo([".stream-header-label", ".stream-headline", ".stream-subhead"], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    )
    .fromTo(".stream-stats",
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // Cards Stagger
    tl.fromTo(".stream-card",
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)" },
      "-=0.4"
    );

    // Continuous Waveform Animation
    gsap.utils.toArray(".stream-waveform-bar").forEach((bar: any) => {
      gsap.to(bar, {
        height: "random(10, 60)px",
        opacity: "random(0.3, 1)",
        duration: "random(0.2, 0.5)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden audio-stream-section">
      
      {/* Background: Admin Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-emerald-500/20 pb-8">
          <div className="max-w-2xl">
            <span 
              className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block opacity-0 stream-header-label"
            >
              // Live Intelligence Feed
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 opacity-0 stream-headline">
              Real-Time <br />
              <span className="text-emerald-500">Voice Processing</span>
            </h2>
            <p className="text-white/60 text-lg opacity-0 stream-subhead">
              Handling live telephony and web-voice sessions simultaneously.
            </p>
          </div>
          
          {/* Stats Ticker */}
          <div className="hidden md:flex flex-col items-end gap-2 text-emerald-500/60 font-mono text-xs opacity-0 stream-stats">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM ONLINE
            </div>
            <div className="flex gap-4">
               <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 84 ACTIVE CALLS</span>
               <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> 44 WEB SESSIONS</span>
            </div>
          </div>
        </div>

        {/* The Stream Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {calls.map((call, idx) => (
            <CallMonitorCard key={call.id} call={call} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

const CallMonitorCard = ({ call, index }: { call: any, index: number }) => {
  const isTelephony = call.source.includes("Inbound");

  return (
    <div
      className="relative group opacity-0 stream-card"
      data-index={index}
    >
      {/* Card Frame */}
      <div className="absolute inset-0 bg-emerald-900/5 border border-emerald-500/20 rounded-xl transform transition-transform group-hover:scale-[1.01] duration-500" />
      
      {/* Scanning Line Overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-[scan_3s_linear_infinite]" />
      </div>

      <div className="relative p-6 md:p-8 flex flex-col h-full">
        
        {/* Header: Caller Info */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
              {/* Icon based on Source */}
              {isTelephony ? <PhoneForwarded className="text-emerald-400 w-6 h-6 relative z-10" /> : <Globe className="text-emerald-400 w-6 h-6 relative z-10" />}
              
              {/* Pulse effect inside icon box */}
              <div className="absolute inset-0 bg-emerald-500/20 animate-pulse" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
                {call.caller}
                <span className="text-xs font-normal text-white/40 bg-white/10 px-2 py-0.5 rounded-full">{isTelephony ? "PSTN" : "WebRTC"}</span>
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500/60 mt-1">
                <span className="uppercase tracking-wider">{call.source}</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
                <span>{call.duration}</span>
              </div>
            </div>
          </div>
          
          <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Radio className="w-3 h-3 animate-pulse" />
            Live
          </div>
        </div>

        {/* Waveform Visualization - Now distinctly "Audio" */}
        <div className="h-24 flex items-center gap-1 mb-8 opacity-80 mask-gradient-sides relative">
          {/* Frequency Labels */}
          <div className="absolute left-0 top-0 text-[10px] text-emerald-500/30 font-mono">20Hz</div>
          <div className="absolute right-0 top-0 text-[10px] text-emerald-500/30 font-mono">20kHz</div>
          
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-emerald-500 stream-waveform-bar"
              style={{ 
                borderRadius: 2,
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.3)',
                height: '10px',
                opacity: 0.3,
                willChange: 'height, opacity'
              }}
            />
          ))}
        </div>

        {/* Live Transcript */}
        <div className="space-y-4 font-mono text-sm mt-auto">
          {call.transcript.map((line: any, i: number) => (
            <div key={i} className={cn(
              "flex gap-3 p-3 rounded border transition-all",
              line.speaker === 'agent' 
                ? "bg-emerald-900/10 border-emerald-500/30 border-l-4" 
                : "bg-white/5 border-white/5 border-l-4 border-l-white/20"
            )}>
              <span className={cn(
                "uppercase text-xs font-bold w-16 shrink-0 pt-0.5 flex items-center gap-1",
                line.speaker === 'agent' ? "text-emerald-400" : "text-white/40"
              )}>
                {line.speaker === 'agent' ? <Mic className="w-3 h-3" /> : <User className="w-3 h-3" />}
                {line.speaker}
              </span>
              <p className={cn(
                "leading-relaxed",
                line.speaker === 'agent' ? "text-emerald-100" : "text-white/90"
              )}>
                {line.text}
                {line.active && <span className="inline-block w-2 h-4 ml-1 bg-emerald-500 animate-pulse align-middle shadow-[0_0_5px_#10B981]" />}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};