import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          cyan: '#06b6d4',
          'cyan-light': '#38bdf8',
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'xl-glow': '0 20px 70px -12px rgba(6, 182, 212, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-slow': 'gradient 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
            opacity: '1'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
            opacity: '0.9'
          },
        },
        'draw-line': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #3b82f6 0, transparent 50%), radial-gradient(at 80% 0%, #06b6d4 0, transparent 50%), radial-gradient(at 0% 50%, #8b5cf6 0, transparent 50%)',
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
