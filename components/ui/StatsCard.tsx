"use client";

import { motion } from "framer-motion";
import FloatingElement from "../animations/FloatingElement";

interface Stat {
  label: string;
  value: string;
  icon?: string;
}

interface StatsCardProps {
  stats: Stat[];
  className?: string;
}

export default function StatsCard({ stats, className = "" }: StatsCardProps) {
  return (
    <FloatingElement delay={1} duration={10} distance={20}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className={`glass-effect-dark rounded-2xl p-8 backdrop-blur-xl border border-cyan-500/20 shadow-xl-glow ${className}`}
      >
        <div className="space-y-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Glowing line */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="text-center pl-2">
                <div className="text-4xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-2 left-2 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl" />
      </motion.div>
    </FloatingElement>
  );
}
