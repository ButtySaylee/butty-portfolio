"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

// Flatten all skills for the marquee
const allMarqueeSkills = skillCategories
  .flatMap(cat => cat.skills.map(s => s.name))
  .filter((v, i, a) => a.indexOf(v) === i); // deduplicate

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24 bg-brutal-bg overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 brutal-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="brutal-badge bg-brutal-orange text-white mb-4 inline-block">
            Skills
          </span>
          <h2 className="kinetic-hero text-5xl sm:text-6xl lg:text-7xl mt-4">
            Toolkit & Expertise
          </h2>
          <p className="font-mono text-sm text-brutal-muted-fg mt-4">
            A diverse toolkit built through hands-on experience across multiple domains.
          </p>
        </div>

        {/* Kinetic Marquee for Skills */}
        <div className="marquee-container mb-12">
          <div className="marquee-content">
            {[...allMarqueeSkills, ...allMarqueeSkills].map((skill, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={`brutal-sticker bg-white p-6 ${index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0"} hover:rotate-0 transition-all duration-200`}
            >
              {/* Title Row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border-2 border-brutal-border flex items-center justify-center text-lg bg-brutal-bg">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-base uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.slice(0, 6).map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-brutal-muted-fg">
                      {skill.name}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 border border-brutal-border ${
                            dot <= Math.round(skill.proficiency / 20)
                              ? "bg-brutal-accent"
                              : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Used In */}
              {category.usedIn && category.usedIn.length > 0 && (
                <div className="mt-4 pt-4 border-t-2 border-brutal-border">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-brutal-muted-fg mb-2">
                    Used In
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.usedIn.map((item) => (
                      <span key={item} className="brutal-tag text-[10px] bg-brutal-bg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}