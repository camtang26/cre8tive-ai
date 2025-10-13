import { useEffect, useRef, useState } from "react";
import { briefingPalette } from "./palette";
import { detectDeviceCapabilities, detectDeviceCapabilitiesSync } from "@/utils/performance-adapter";
import { getAdaptiveConfig } from "@/utils/adaptive-config";
import type { AdaptiveAnimationConfig } from "@/utils/adaptive-config";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

interface ParticleCoreProps {
  isActive?: boolean;
  intensity?: number; // 0-1, controls particle density
  className?: string;
}

export const ParticleCore = ({
  isActive = false,
  intensity = 0.5,
  className = ""
}: ParticleCoreProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const poolRef = useRef<Particle[]>([]);

  // ADAPTIVE PERFORMANCE: Detect device capabilities and load appropriate config
  // Use sync detection for initial value (async detection updates via useEffect below)
  const [adaptiveConfig, setAdaptiveConfig] = useState<AdaptiveAnimationConfig>(() => {
    const capabilities = detectDeviceCapabilitiesSync();
    return getAdaptiveConfig(capabilities);
  });

  // PERFORMANCE FIX: Use refs to avoid restarting animation loop on prop changes
  // This prevents 9 complete canvas teardowns during 17-second scroll timeline
  const isActiveRef = useRef(isActive);
  const intensityRef = useRef(intensity);
  const configRef = useRef(adaptiveConfig); // ADAPTIVE: Read config from ref in animation loop

  // ADAPTIVE PERFORMANCE: Run async device detection on mount
  // Updates config with accurate GPU detection from detect-gpu library
  useEffect(() => {
    detectDeviceCapabilities().then((capabilities) => {
      const newConfig = getAdaptiveConfig(capabilities);
      setAdaptiveConfig(newConfig);

      // Log adaptive tier (dev mode only)
      if (import.meta.env.DEV) {
        console.log('[ParticleCore] Adaptive config loaded:', {
          tier: newConfig.tier,
          particles: newConfig.particleCount,
          blur: newConfig.enableBlur,
          shadows: newConfig.enableShadows
        });
      }
    });
  }, []);

  // Sync refs when props/config change (lightweight, no animation restart)
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    configRef.current = adaptiveConfig;
  }, [adaptiveConfig]);

  useEffect(() => {
    // ADAPTIVE PERFORMANCE: Skip Canvas rendering entirely if particles disabled
    // Reason: Low-tier devices (score <4) or prefers-reduced-motion users
    if (!configRef.current.enableParticles) {
      if (import.meta.env.DEV) {
        console.log('[ParticleCore] Particles disabled for tier:', configRef.current.tier);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size to match container
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateSize();

    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);

    // Particle pool for performance (avoid GC)
    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.5;
      const life = Math.random() * 60 + 60; // 60-120 frames

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        size: Math.random() * 2 + 1,
        hue: Math.random() * 30 + 200 // Indigo/cyan range (200-230)
      };
    };

    // ADAPTIVE PERFORMANCE: Initialize particle pool based on device tier
    // high: 150 particles, medium: 75 particles, low: 0 (disabled via early return)
    const particleCount = configRef.current.particleCount;
    for (let i = 0; i < particleCount; i++) {
      poolRef.current.push(createParticle(centerX, centerY));
    }

    const spawnParticle = () => {
      // PERFORMANCE FIX: Read from ref to avoid stale closure
      if (!isActiveRef.current) return;

      // Spawn from center with slight randomness
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;

      let particle: Particle;
      if (poolRef.current.length > 0) {
        // Reuse from pool
        particle = poolRef.current.pop()!;
        Object.assign(particle, createParticle(centerX + offsetX, centerY + offsetY));
      } else {
        // Create new if pool empty
        particle = createParticle(centerX + offsetX, centerY + offsetY);
      }

      particlesRef.current.push(particle);
    };

    const updateParticles = () => {
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Apply slight gravity toward center (creates swirl effect)
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 10) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        // Update life
        p.life--;

        // Return to pool if dead
        if (p.life <= 0) {
          poolRef.current.push(particles.splice(i, 1)[0]);
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // ADAPTIVE PERFORMANCE: Apply blur filter if enabled (high-tier only)
      // Reason: ctx.filter is GPU-accelerated on discrete GPUs, expensive on integrated
      const config = configRef.current;
      if (config.enableBlur) {
        ctx.filter = 'blur(2px)';
      } else {
        ctx.filter = 'none';
      }

      particles.forEach(p => {
        const alpha = p.life / p.maxLife;

        // ADAPTIVE PERFORMANCE: Apply shadow if enabled (high-tier only)
        // Reason: ctx.shadowBlur adds render overhead on integrated GPUs
        if (config.enableShadows) {
          ctx.shadowColor = `hsla(${p.hue}, 80%, 70%, ${alpha * 0.3})`;
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }

        // Glow effect - outer
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 60%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, ${alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset filter and shadow for subsequent drawings
      ctx.filter = 'none';
      ctx.shadowBlur = 0;
    };

    // Animation loop - throttled to 30fps for performance
    let lastSpawn = 0;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Update at 30fps (every other frame)
      if (frameCount % 2 === 0) {
        lastSpawn++;

        // PERFORMANCE FIX: Recalculate spawn interval dynamically from ref (trivial cost vs full restart)
        const spawnInterval = Math.max(10, 50 - (intensityRef.current * 40)); // Higher intensity = faster spawn

        // ADAPTIVE PERFORMANCE: Limit particle count based on device tier
        const maxParticles = configRef.current.particleCount;

        // Spawn new particles based on intensity
        if (lastSpawn >= spawnInterval && particlesRef.current.length < maxParticles) {
          spawnParticle();
          if (intensityRef.current > 0.7) spawnParticle(); // Double spawn at high intensity
          lastSpawn = 0;
        }

        updateParticles();
        drawParticles();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      particlesRef.current = [];
      poolRef.current = [];
    };
  }, []); // PERFORMANCE FIX: Empty deps = animation runs once, never restarts (reads current values from refs)

  return (
    <div className={`relative ${className}`}>
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          mixBlendMode: 'screen',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      />

      {/* Central AI Core Orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-32 h-32 rounded-full transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${briefingPalette.holographic.cyan}80, ${briefingPalette.indigo.DEFAULT}90)`,
            boxShadow: isActive
              ? `0 0 60px ${briefingPalette.holographic.cyan}70, 0 0 120px ${briefingPalette.indigo.DEFAULT}50, inset 0 0 40px ${briefingPalette.holographic.cyan}40`
              : `0 0 20px ${briefingPalette.holographic.cyan}30`,
            transform: isActive ? 'scale(1)' : 'scale(0.8)',
            opacity: isActive ? 1 : 0.5
          }}
        >
          {/* Inner rotating ring */}
          <div
            className="absolute inset-4 rounded-full border-2 opacity-60"
            style={{
              borderColor: `${briefingPalette.holographic.cyan}50`,
              animation: isActive ? 'spin 20s linear infinite' : 'none'
            }}
          />

          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${briefingPalette.holographic.cyan}80 90deg, transparent 180deg)`,
              animation: isActive ? 'spin 8s linear infinite' : 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};
