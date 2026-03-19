"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import SkillCard from "../ui/SkillCard";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll variant="fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            Skills & Expertise
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.2}>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            A diverse toolkit built through hands-on experience across multiple domains.
          </p>
        </RevealOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              usedIn={category.usedIn}
            />
          ))}
        </div>

        {/* Mobile Stats Card (shown only on mobile) */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="glass-effect dark:glass-effect-dark rounded-2xl p-6 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 max-w-sm w-full">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-animated">100+</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-animated">6+</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-animated">3</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Domains Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
