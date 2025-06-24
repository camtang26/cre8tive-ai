import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from "lovable-tagger";

// Determine the base URL based on the environment
const getBaseUrl = () => {
  // Now that we're using a custom domain, we always want the root path
  return '/';
};

export default defineConfig(({ mode }) => ({
  base: getBaseUrl(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
    preprocessorOptions: {
      css: {
        compress: {
          animations: false // Preserve keyframe names
        }
      }
    }
  },
  build: {
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('three') || id.includes('@splinetool')) {
              return '3d-vendor';
            }
            if (id.includes('@vimeo/player') || id.includes('elevenlabs')) {
              return 'media-vendor';
            }
            return 'vendor';
          }
          
          // Route-based chunks
          if (id.includes('src/pages/Studios')) {
            return 'page-studios';
          }
          if (id.includes('src/pages/Agents')) {
            return 'page-agents';
          }
          if (id.includes('src/pages/ConversationalAI')) {
            return 'page-conversational';
          }
          if (id.includes('src/pages/About')) {
            return 'page-about';
          }
          if (id.includes('src/pages/Contact')) {
            return 'page-contact';
          }
        },
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const ext = name.split('.').pop() || '';
          let extType = ext;
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            extType = 'img';
          }
          // Keep the original filename for easier debugging
          const fileName = name.replace(`.${ext}`, '');
          return `assets/${extType}/${fileName}-[hash][extname]`;
        }
      }
    },
    target: 'es2015',
    modulePreload: {
      polyfill: true
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    headers: {
      'Cache-Control': 'no-store',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'ALLOW-FROM https://player.vimeo.com',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': `
        media-src 'self' data: blob: https://*.vimeo.com https://*.vimeocdn.com https://player.vimeo.com https://f.vimeocdn.com;
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.elevenlabs.io https://*.vimeo.com https://*.vimeocdn.com https://player.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://*.spline.design https://prod.spline.design https://va.vercel-scripts.com;
        script-src-elem 'self' 'unsafe-inline' blob: https://*.elevenlabs.io https://elevenlabs.io https://cdn.jsdelivr.net https://www.googletagmanager.com https://*.spline.design https://prod.spline.design https://va.vercel-scripts.com https://unpkg.com;
        frame-src 'self' https://*.elevenlabs.io https://*.vimeo.com https://player.vimeo.com https://convai.elevenlabs.io https://f.vimeocdn.com data: blob: https://*.spline.design https://prod.spline.design;
        frame-ancestors 'self' https://player.vimeo.com https://*.vimeo.com;
        connect-src 'self' https://getform.io https://*.elevenlabs.io wss://*.elevenlabs.io wss://api.us.elevenlabs.io https://*.vimeo.com https://*.vimeocdn.com https://www.google-analytics.com https://api.elevenlabs.io https://*.spline.design https://prod.spline.design https://spline.design https://unpkg.com;
        img-src 'self' data: blob: https: https://*.elevenlabs.io https://*.vimeocdn.com https://i.vimeocdn.com https://f.vimeocdn.com https://www.google-analytics.com https://storage.googleapis.com https://*.spline.design https://prod.spline.design;
        child-src 'self' https://*.elevenlabs.io https://*.vimeo.com blob: data:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://f.vimeocdn.com https://unpkg.com https://*.spline.design https://prod.spline.design;
        font-src 'self' data: https: https://fonts.gstatic.com https://f.vimeocdn.com https://*.spline.design https://prod.spline.design;
        worker-src 'self' blob:;
      `.replace(/\s+/g, ' ').trim()
    }
  }
}));