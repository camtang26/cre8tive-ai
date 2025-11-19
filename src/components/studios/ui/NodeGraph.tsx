import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface NodeGraphProps {
  className?: string;
}

export function NodeGraph({ className }: NodeGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className={cn("relative w-full aspect-square max-w-[600px]", className)}>
      <svg className="w-full h-full overflow-visible" viewBox="0 0 600 600">
        <defs>
          <radialGradient id="node-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(49, 196, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(49, 196, 255, 0)" />
          </radialGradient>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(49, 196, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
        </defs>

        {/* Central Node (Master Asset) */}
        <g className="origin-center" style={{ transformBox: "fill-box" }}>
          <circle cx="300" cy="300" r="60" fill="url(#node-glow)" className="animate-pulse" />
          <circle cx="300" cy="300" r="30" fill="#0A0A12" stroke="#31C4FF" strokeWidth="2" />
          <text x="300" y="305" textAnchor="middle" fill="white" className="font-mono text-[10px] tracking-widest">MASTER</text>
        </g>

        {/* Nodes and Paths */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const r = 220;
          const x = 300 + r * Math.cos(rad);
          const y = 300 + r * Math.sin(rad);
          
          return (
            <g key={i} className="transition-opacity duration-1000" style={{ opacity: isInView ? 1 : 0, transitionDelay: `${i * 100}ms` }}>
              {/* Connection Path */}
              <path
                d={`M 300 300 L ${x} ${y}`}
                stroke="url(#path-gradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-40"
              />
              
              {/* Data Packet (Animated) */}
              {isInView && (
                <circle r="3" fill="#E1B341">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M 300 300 L ${x} ${y}`}
                    begin={`${i * 0.5}s`}
                  />
                </circle>
              )}

              {/* Outer Node */}
              <circle cx={x} cy={y} r="24" fill="#0A0A12" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x={x} y={y+4} textAnchor="middle" fill="rgba(255,255,255,0.6)" className="font-mono text-[8px]">OUT 0{i+1}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
