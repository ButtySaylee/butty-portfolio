import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo Brutalism Palette
        brutal: {
          bg: "#F5F0E8",        // Warm cream canvas
          fg: "#121212",         // Near-black text
          muted: "#E8E3D8",      // Muted cream for surfaces
          "muted-fg": "#6B6258", // Muted text
          accent: "#DFE104",     // Acid yellow
          "accent-fg": "#121212",// Black on yellow
          red: "#E04E4E",        // Hot red sticker
          blue: "#4E7BE0",       // Electric blue
          green: "#4EE0A0",      // Mint green
          orange: "#E08E4E",     // Warm orange
          border: "#121212",     // Thick black borders
          "border-light": "#8A7E70", // Lighter border
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px 0px #121212',
        'brutal': '5px 5px 0px 0px #121212',
        'brutal-lg': '8px 8px 0px 0px #121212',
        'brutal-xl': '12px 12px 0px 0px #121212',
        'brutal-accent': '5px 5px 0px 0px #DFE104',
        'brutal-red': '5px 5px 0px 0px #E04E4E',
        'brutal-blue': '5px 5px 0px 0px #4E7BE0',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      rotate: {
        '-12': '-12deg',
        '-6': '-6deg',
        '3': '3deg',
        '6': '6deg',
        '12': '12deg',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;