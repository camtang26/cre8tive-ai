"use client";
import React, { useId } from "react";
import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    let mounted = true;
    
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) {
        setInit(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const controls = useAnimation();

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      await controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  }, [controls]);

  const generatedId = useId();

  const options = {
    background: {
      color: {
        value: background || "#0d47a1",
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
        resize: true as any,
      },
    },
    particles: {
      color: {
        value: particleColor || "#ffffff",
      },
      move: {
        enable: true,
        direction: "none" as MoveDirection,
        random: true,
        speed: {
          min: 0.1,
          max: speed || 0.3,
        },
        straight: false,
        outModes: {
          default: "out" as OutMode,
        },
      },
      number: {
        density: {
          enable: true,
          width: 400,
          height: 400,
        },
        value: particleDensity || 70,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: speed || 0.3,
          sync: false,
        },
      },
      size: {
        value: {
          min: minSize || 0.4,
          max: maxSize || 0.8,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <motion.div
      animate={controls}
      className={cn("opacity-0", className)}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </motion.div>
  );
};