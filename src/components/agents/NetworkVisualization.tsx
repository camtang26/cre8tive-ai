import { useEffect, useRef } from 'react';
import { Node } from './network/Node';
import { ConnectionRenderer } from './network/ConnectionRenderer';
import { NetworkManager } from './network/NetworkManager';

export const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Create static network with fewer nodes
    const nodes = NetworkManager.createNetwork(
      canvas.width / window.devicePixelRatio,
      canvas.height / window.devicePixelRatio
    );

    // Single render for static visualization
    const render = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Draw connections first
      ctx.globalAlpha = 0.5;
      ConnectionRenderer.drawConnections(ctx, nodes);
      ctx.globalAlpha = 1.0;

      // Then draw nodes
      nodes.forEach(node => {
        node.draw(ctx);
      });
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};