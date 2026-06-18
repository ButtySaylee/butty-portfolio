"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const allProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="relative px-6 py-24 bg-brutal-bg overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 brutal-grid opacity-70" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="brutal-badge bg-brutal-accent text-brutal-accent-fg mb-4 inline-block">
            Projects
          </span>
          <h2 className="kinetic-hero text-5xl sm:text-6xl lg:text-7xl mt-4">
            Featured Work
          </h2>
          <p className="font-mono text-sm text-brutal-muted-fg mt-4">
            Real projects with real impact. Each one tells a story.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`brutal-sticker bg-white p-6 sm:p-8 ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-all duration-200 group`}
            >
              {/* Project Header */}
              <div className="mb-4">
                {project.subtitle && (
                  <span className="brutal-tag bg-brutal-accent text-brutal-accent-fg text-xs mb-2 inline-block">
                    {project.subtitle}
                  </span>
                )}
                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight group-hover:text-brutal-blue transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brutal-red font-bold">Problem</span>
                  <p className="text-brutal-muted-fg text-sm mt-1 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brutal-blue font-bold">Solution</span>
                  <p className="text-brutal-muted-fg text-sm mt-1 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 6).map((tech) => (
                  <span key={tech} className="brutal-tag text-xs bg-brutal-bg">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div className="border-t-2 border-brutal-border pt-4 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-brutal-green font-bold">Impact</span>
                <p className="text-brutal-fg text-sm mt-1 font-bold">
                  {project.impact}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brutal-border font-mono text-xs uppercase tracking-wider mechanical-press bg-white"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brutal-fg text-brutal-bg border-2 border-brutal-border font-mono text-xs uppercase tracking-wider mechanical-press"
                  >
                    <ArrowUpRight size={14} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="brutal-sticker bg-brutal-accent p-8 -rotate-1 hover:rotate-0 transition-all duration-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-display font-bold text-4xl text-brutal-accent-fg">4+</div>
                <div className="font-mono text-xs uppercase tracking-wider text-brutal-accent-fg/70 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-brutal-accent-fg">100+</div>
                <div className="font-mono text-xs uppercase tracking-wider text-brutal-accent-fg/70 mt-1">
                  Users Impacted
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-brutal-accent-fg">40%</div>
                <div className="font-mono text-xs uppercase tracking-wider text-brutal-accent-fg/70 mt-1">
                  Efficiency Gain
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-brutal-accent-fg">10+</div>
                <div className="font-mono text-xs uppercase tracking-wider text-brutal-accent-fg/70 mt-1">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}