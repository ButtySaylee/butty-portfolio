"use client";

import { motion } from "framer-motion";
import { Wrench, Users, TrendingUp, Code } from "lucide-react";
import { aboutStory } from "@/data/personal";

const iconMap: Record<string, React.ElementType> = {
  wrench: Wrench,
  users: Users,
  chart: TrendingUp,
  code: Code,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 bg-brutal-bg overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 brutal-grid" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="brutal-badge bg-brutal-blue text-white mb-4 inline-block">
            About
          </span>
          <h2 className="kinetic-hero text-5xl sm:text-6xl lg:text-7xl mt-4">
            The Journey
          </h2>
          <p className="font-display font-bold text-lg sm:text-xl text-brutal-muted-fg uppercase tracking-tight mt-4 max-w-2xl mx-auto">
            {aboutStory.headline}
          </p>
        </div>

        {/* Milestones - Sticker Style Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {aboutStory.milestones.map((milestone, index) => {
            const Icon = iconMap[milestone.icon] || Wrench;
            const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
            const colors = ["bg-brutal-accent", "bg-brutal-red", "bg-brutal-blue", "bg-brutal-green"];

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`brutal-sticker p-6 bg-white ${rotations[index]} hover:rotate-0 transition-all duration-200`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${colors[index]} border-2 border-brutal-border flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-brutal-accent-fg" />
                </div>

                {/* Year */}
                <div className="font-display font-bold text-3xl tracking-tight mb-1">
                  {milestone.year}
                </div>

                {/* Title */}
                <div className="font-display font-bold text-sm uppercase tracking-wide mb-1">
                  {milestone.title}
                </div>

                {/* Description */}
                <div className="font-mono text-xs text-brutal-muted-fg">
                  {milestone.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Story Block - Full Width Sticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="brutal-sticker p-8 sm:p-12 bg-brutal-accent max-w-4xl mx-auto"
        >
          <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-brutal-accent-fg leading-tight uppercase tracking-tight">
            {aboutStory.story.split('**').map((part, index) => {
              if (index % 2 === 1) {
                return (
                  <span key={index} className="underline decoration-4 underline-offset-4 decoration-brutal-fg">
                    {part}
                  </span>
                );
              }
              return <span key={index}>{part}</span>;
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}