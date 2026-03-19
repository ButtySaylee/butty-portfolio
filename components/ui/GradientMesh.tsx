"use client";

import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      {/* Subtle gradient spots for ambient lighting */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-600/40 via-blue-500/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/30 via-teal-500/15 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}
