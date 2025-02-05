import Stats from 'stats.js';
import type { WebGLRenderer } from 'three';

type PerfData = {
  drawCalls: number;
  triangles: number;
  textures: number;
  geometries: number;
};

const isDev = import.meta.env.DEV;
let stats: Stats | null = null;
let rendererRef: WebGLRenderer | null = null;
let isMonitoring = false;

const DRAW_CALLS_WARNING_THRESHOLD = 500;

const initPerfMonitor = (renderer: WebGLRenderer) => {
  if (!isDev || stats) return;
  
  rendererRef = renderer;
  stats = new Stats();
  stats.showPanel(0); // FPS panel
  stats.dom.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    opacity: 0.8;
    cursor: pointer;
    display: none;
  `;
  document.body.appendChild(stats.dom);

  // Hotkey handler
  const toggleHandler = (e: KeyboardEvent) => {
    if (e.altKey && e.key.toLowerCase() === 'p') {
      stats!.dom.style.display = stats!.dom.style.display === 'none' 
        ? 'block' 
        : 'none';
      isMonitoring = stats!.dom.style.display === 'block';
    }
  };
  
  window.addEventListener('keydown', toggleHandler);
  return () => {
    window.removeEventListener('keydown', toggleHandler);
    stats?.dom.remove();
    stats = null;
    rendererRef = null;
  };
};

const collectMetrics = (): PerfData => {
  const metrics = {
    drawCalls: rendererRef?.info.render.calls || 0,
    triangles: rendererRef?.info.render.triangles || 0,
    textures: rendererRef?.info.memory.textures || 0,
    geometries: rendererRef?.info.memory.geometries || 0
  };

  if (metrics.drawCalls > DRAW_CALLS_WARNING_THRESHOLD) {
    console.warn(`High draw calls detected: ${metrics.drawCalls} (threshold: ${DRAW_CALLS_WARNING_THRESHOLD})`);
  }

  return metrics;
};

export const perf = {
  begin: () => isDev && stats?.begin(),
  end: () => {
    if (!isDev) return;
    stats?.end();
    if (isMonitoring) {
      console.table(collectMetrics());
    }
  },
  init: initPerfMonitor
};