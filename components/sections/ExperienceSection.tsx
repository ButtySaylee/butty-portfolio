"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import TimelineItem from "../ui/TimelineItem";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  // Get first 4 experiences for 2x2 grid
  const displayExperiences = experiences.slice(0, 4);

  return (
    <section id="experience" className="px-6 py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll variant="fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            Experience & Leadership
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.2}>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            A journey through tech support, data engineering, and leadership roles.
          </p>
        </RevealOnScroll>

        {/* Experience Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayExperiences.map((experience, index) => (
            <RevealOnScroll
              key={experience.id}
              variant="scaleIn"
              delay={index * 0.1}
            >
              <TimelineItem
                role={experience.role}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                achievements={experience.achievements}
                type={experience.type}
                index={index}
                isLast={false}
                isGridLayout={true}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
