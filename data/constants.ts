import { Variants } from "framer-motion";

// Animation Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const cardHover = {
  scale: 1.02,
  y: -8,
  transition: { duration: 0.3, ease: "easeOut" }
};

// Particle Configuration
export const particlesConfig = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#38bdf8" },
    links: {
      enable: true,
      color: "#38bdf8",
      distance: 150,
      opacity: 0.3
    },
    move: { enable: true, speed: 2 },
    number: { value: 25 }, // Reduced from 40 for subtlety
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: 3 }
  },
  detectRetina: true
};

// Theme Colors
export const colors = {
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
    900: '#1e3a8a'
  },
  accent: {
    cyan: '#06b6d4',
    cyanLight: '#38bdf8',
    purple: '#8b5cf6',
    purpleLight: '#a78bfa'
  }
};

// Timing Constants
export const timing = {
  fast: 150,
  normal: 300,
  slow: 600,
  verySlow: 1000
};

// Responsive Breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};
