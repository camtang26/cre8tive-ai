import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { perf } from '@/lib/perf-monitoring';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with improved settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Initialize performance monitoring
    const cleanup = perf.init(renderer);

    // Create dynamic particle system with updated neon colors
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Define updated neon color palette
    const neonColors = [
      [0.92, 0.22, 0.30],  // Red (#ea384c) replacing pink
      [0.2, 1.0, 0.8],     // Neon Cyan
      [0.8, 0.2, 1.0],     // Neon Purple
      [0.2, 0.8, 1.0],     // Neon Blue
      [0.95, 0.99, 0.89],  // Green (#F2FCE2) replacing yellow
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Randomly select a neon color from the palette
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = color[0];     // R
      colors[i * 3 + 1] = color[1]; // G
      colors[i * 3 + 2] = color[2]; // B

      sizes[i] = Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      perf.begin();
      
      animationFrameId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.0001;
      
      particles.rotation.x = time * 0.5;
      particles.rotation.y = time * 0.3;

      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + positions[i3] * 0.1) * 0.01;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      
      perf.end();
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size setup

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      scene.clear();
      renderer.dispose();
      cleanup?.();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.99) 75%, rgba(0,0,0,1) 100%)',
      }}
    />
  );
};