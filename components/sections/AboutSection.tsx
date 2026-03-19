"use client";

import { motion } from "framer-motion";
import { Wrench, Users, TrendingUp, Code } from "lucide-react";
import RevealOnScroll from "../animations/RevealOnScroll";
import { aboutStory } from "@/data/personal";

const iconMap = {
  wrench: Wrench,
  users: Users,
  chart: TrendingUp,
  code: Code
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll variant="fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            The Journey
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.2}>
          <p className="text-xl sm:text-2xl text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
            {aboutStory.headline}
          </p>
        </RevealOnScroll>

        {/* Visual Timeline */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full" />

            {aboutStory.milestones.map((milestone, index) => {
              const Icon = iconMap[milestone.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-glow-blue group-hover:shadow-xl-glow transition-all duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Year Badge */}
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {milestone.year}
                  </div>

                  {/* Title */}
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {milestone.title}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-slate-600 dark:text-slate-400 max-w-[200px]">
                    {milestone.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Story Content */}
        <RevealOnScroll variant="fadeIn" delay={0.6}>
          <div className="glass-effect dark:glass-effect-dark rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center">
              {aboutStory.story.split('**').map((part, index) => {
                if (index % 2 === 1) {
                  return (
                    <strong key={index} className="text-blue-600 dark:text-cyan-400 font-bold">
                      {part}
                    </strong>
                  );
                }
                return <span key={index}>{part}</span>;
              })}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
