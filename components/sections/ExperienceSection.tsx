"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

const typeConfig: Record<string, { label: string; color: string }> = {
  engineering: { label: "Engineering", color: "bg-brutal-blue text-white" },
  leadership: { label: "Leadership", color: "bg-brutal-accent text-brutal-accent-fg" },
  support: { label: "Support", color: "bg-brutal-green text-brutal-accent-fg" },
  internship: { label: "Internship", color: "bg-brutal-orange text-white" },
};

export default function ExperienceSection() {
  const displayExperiences = experiences.slice(0, 5);

  return (
    <section id="experience" className="relative px-6 py-24 bg-brutal-bg">
      <div className="absolute inset-0 brutal-grid opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="brutal-badge bg-brutal-red text-white mb-4 inline-block">
            Experience
          </span>
          <h2 className="kinetic-hero text-5xl sm:text-6xl lg:text-7xl mt-4">
            Work & Leadership
          </h2>
          <p className="font-mono text-sm text-brutal-muted-fg mt-4 max-w-xl mx-auto">
            From computer lab assistant to software engineer — spanning QA, data engineering, and technical support.
          </p>
        </div>

        {/* Experience Cards - Stacked Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {displayExperiences.map((experience, index) => {
            const typeInfo = typeConfig[experience.type] || typeConfig.support;
            const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "rotate-0"];

            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`brutal-sticker bg-white p-6 sm:p-8 ${rotations[index]} hover:rotate-0 transition-all duration-200`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Left: Meta */}
                  <div className="sm:w-48 flex-shrink-0">
                    <span className={`brutal-tag ${typeInfo.color} mb-2 inline-block`}>
                      {typeInfo.label}
                    </span>
                    <div className="font-mono text-xs uppercase tracking-wider text-brutal-muted-fg mt-2">
                      {experience.period}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight">
                      {experience.role}
                    </h3>
                    <p className="font-display font-bold text-sm sm:text-base text-brutal-muted-fg uppercase tracking-wide mt-1">
                      {experience.company}
                    </p>
                    <p className="text-brutal-muted-fg text-sm sm:text-base mt-3 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.achievements.map((achievement, i) => (
                          <span key={i} className="brutal-tag bg-brutal-bg text-brutal-fg text-xs">
                            ✓ {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}