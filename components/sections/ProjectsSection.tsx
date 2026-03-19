"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import ProjectCaseStudy from "../ui/ProjectCaseStudy";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  // Get all projects and limit to 4 for 2x2 grid
  const allProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="px-6 py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll variant="fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            Featured Work
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.2}>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Real projects with real impact. Each one tells a story of problem-solving, innovation, and results.
          </p>
        </RevealOnScroll>

        {/* All Projects in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {allProjects.map((project, index) => (
            <RevealOnScroll
              key={project.id}
              variant="scaleIn"
              delay={index * 0.1}
            >
              <ProjectCaseStudy
                project={project}
                index={index}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Stats Section */}
        <RevealOnScroll variant="fadeIn" delay={0.8}>
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  4+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Users Impacted
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  40%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Efficiency Improvement
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  10+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Technologies Used
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
