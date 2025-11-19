import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],      // 72px
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],        // 96px
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],       // 128px
        '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.03em' }],      // 160px - ultra impact
        'hero': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],    // 96px - for hero headlines
        'hero-mobile': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }], // 48px - for mobile heroes
      },
      lineHeight: {
        'extra-tight': '1.1',
        'hero': '1.05',
        'none': '1',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'extra-tight': '-0.03em',
      },
      boxShadow: {
        'glow-sm': 'var(--shadow-glow-blue)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-cyan': 'var(--shadow-glow-cyan)',
        'glow-teal': 'var(--shadow-glow-teal)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        'instant': 'var(--duration-instant)',
        'snappy': 'var(--duration-snappy)',
        'smooth': 'var(--duration-smooth)',
        'cinematic': 'var(--duration-cinematic)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--easing-smooth)',
        'bounce': 'var(--easing-bounce)',
        'spring': 'var(--easing-spring)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        studios: {
          background: '#0A0F1A',
          'background-accent': '#0F1826',
          void: '#030305',
          steel: '#0A0A12',
          surface: 'rgba(9, 13, 23, 0.75)',
          'surface-strong': 'rgba(12, 18, 32, 0.88)',
          primary: '#E1B341',
          'primary-soft': '#F8CE73',
          accent: '#31C4FF',
          'accent-soft': '#8EDCFF',
          headline: '#F6F8FF',
          body: 'rgba(222, 231, 255, 0.82)',
          'body-muted': 'rgba(202, 214, 241, 0.74)',
          border: 'rgba(255, 255, 255, 0.12)',
          glow: 'rgba(49, 196, 255, 0.35)',
        },
        conversational: {
          background: '#04121E',
          'background-accent': '#0B1A15',
          surface: 'rgba(6, 32, 47, 0.75)',
          'surface-strong': 'rgba(4, 19, 31, 0.92)',
          primary: '#10B981',
          'primary-soft': '#34D399',
          accent: '#14F195',
          'accent-soft': '#6EE7B7',
          headline: '#E4F8FF',
          body: 'rgba(184, 217, 222, 0.82)',
          'body-muted': 'rgba(164, 201, 208, 0.74)',
          border: 'rgba(255, 255, 255, 0.12)',
          glow: 'rgba(16, 185, 129, 0.35)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: 'hsl(var(--primary-dark))',
          bright: 'hsl(var(--primary-bright))',
          light: 'hsl(var(--primary-light))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          light: 'hsl(var(--secondary-light))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        teal: 'hsl(var(--teal))',
        emerald: {
          DEFAULT: 'hsl(var(--emerald))',
          light: 'hsl(var(--emerald-light))'
        },
        brand: {
          purple: 'hsl(var(--brand-purple))',
          pink: 'hsl(var(--brand-pink))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          orange: 'hsl(var(--accent-orange))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          'from': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
          },
          'to': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)'
          }
        }
      },
      perspective: {
        '1000': '1000px',
      },
      screens: {
        ipad: "1024px",
        laptop: "1366px",
        desktop: "1920px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'studios-hero-base': 'linear-gradient(145deg, rgba(15,20,35,0.08) 0%, rgba(22,32,52,0.06) 38%, rgba(28,40,62,0.05) 70%, rgba(18,28,45,0.08) 100%)',
        'studios-hero-spotlight': 'radial-gradient(75% 95% at 20% 35%, rgba(49,196,255,0.18) 0%, rgba(49,196,255,0.05) 50%, rgba(5,6,13,0) 100%)',
        'studios-hero-rim': 'radial-gradient(60% 70% at 80% 40%, rgba(225,179,65,0.16) 0%, rgba(225,179,65,0.05) 55%, rgba(225,179,65,0) 100%)',
        'studios-hero-noise': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' preserveAspectRatio=\'none\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.6\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.9\'/%3E%3C/svg%3E")',
        'noise': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' preserveAspectRatio=\'none\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.6\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.9\'/%3E%3C/svg%3E")',
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
