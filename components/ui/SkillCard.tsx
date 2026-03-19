"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCardProps {
  title: string;
  icon: string;
  skills: Skill[];
  usedIn?: string[];
}

export default function SkillCard({ title, icon, skills, usedIn }: SkillCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      className="relative min-h-[400px]"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative w-full preserve-3d"
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 bg-white dark:bg-slate-800 rounded-xl shadow-glass border border-slate-200 dark:border-slate-700 p-6 backface-hidden ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">{icon}</span>
            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">
              {title}
            </h3>
          </div>

          <ul className="space-y-4">
            {skills.map((skill, i) => (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                    {skill.name}
                  </span>
                  <span className="text-xs text-blue-400 font-semibold">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Circular progress indicator */}
                <div className="relative h-2 bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Back Side */}
        {usedIn && usedIn.length > 0 && (
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-xl shadow-glass p-6 backface-hidden ${
              isFlipped ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: "rotateY(180deg)"
            }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Used In:</h4>
            <ul className="space-y-2 text-white/90">
              {usedIn.map((project) => (
                <li key={project} className="flex items-center gap-2">
                  <span className="text-cyan-200">•</span>
                  <span className="text-sm">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
