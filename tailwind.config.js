/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          950: '#030712',
          900: '#070d1d',
          850: '#0b1329',
          800: '#0f172a',
          700: '#1e293b',
        },
        brand: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          pink: '#ec4899',
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.18) 0%, rgba(139, 92, 246, 0.12) 35%, transparent 70%)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15), transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}


