"use client";

import { motion } from "framer-motion";
import { Code, Users, Wrench, Briefcase } from "lucide-react";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  type: "engineering" | "leadership" | "support" | "internship";
  index: number;
  isLast?: boolean;
  isGridLayout?: boolean;
}

const iconMap = {
  engineering: Code,
  leadership: Users,
  support: Wrench,
  internship: Briefcase
};

export default function TimelineItem({
  role,
  company,
  period,
  description,
  achievements,
  type,
  index,
  isLast = false,
  isGridLayout = false
}: TimelineItemProps) {
  const Icon = iconMap[type];
  const isEven = index % 2 === 0;

  // Grid layout (card-based)
  if (isGridLayout) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative h-full flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-glass border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl-glow"
      >
        {/* Header with icon and type */}
        <div className="relative h-24 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 dark:from-blue-600/20 dark:to-cyan-600/20 flex items-center justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          {/* Type badge */}
          <div className="absolute top-4 right-4">
            <div className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
              <span className="text-xs text-blue-700 dark:text-blue-300 font-semibold capitalize">
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-1">
              {role}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              {company}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 italic">
              {period}
            </p>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 flex-1">
            {description}
          </p>

          {achievements && achievements.length > 0 && (
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <ul className="space-y-1">
                {achievements.slice(0, 3).map((achievement) => (
                  <li
                    key={achievement}
                    className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-0.5">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Timeline layout (original)
  return (
    <div className="relative flex items-center gap-8">
      {/* Timeline line and dot */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative z-10 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-glow-blue animate-pulse-glow"
        >
          <div className="absolute inset-0 rounded-full bg-white dark:bg-slate-900" style={{ margin: '3px' }} />
        </motion.div>

        {/* Line below */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
            className="w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 absolute top-4 h-full"
          />
        )}
      </div>

      {/* Content card - alternate sides */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? -50 : 50
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className={`w-[calc(50%-2rem)] ${
          isEven ? "ml-auto" : "mr-auto"
        } bg-white dark:bg-slate-800 rounded-xl shadow-glass border border-slate-200 dark:border-slate-700 p-5 hover:shadow-xl-glow transition-all duration-300`}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400">
              {role}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              {company}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 italic mt-1">
              {period}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <ul className="space-y-1">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="text-cyan-500 mt-0.5">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
