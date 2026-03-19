"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCaseStudyProps {
  project: Project;
  index: number;
}

export default function ProjectCaseStudy({ project, index }: ProjectCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-glass border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl-glow"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden bg-slate-950 group">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Fallback gradient design for projects without images
          <>
            {/* Animated gradient orbs */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 -left-10 w-40 h-40 bg-blue-500/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="text-6xl font-black text-white/20 mb-2 tracking-tighter">
                  {project.title.split(' ')[0].toUpperCase()}
                </div>
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10">
                  <span className="text-xs text-white/80 font-semibold tracking-wide">
                    {project.featured ? "FEATURED PROJECT" : "PROJECT"}
                  </span>
                </div>
              </motion.div>
            </div>
          </>
        )}

        {/* Featured badge overlay */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white shadow-lg">
              ⭐ FEATURED
            </div>
          </div>
        )}

        {/* Hover gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20"
        />

        {/* Quick action links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Case Study Format - Condensed */}
        <div className="space-y-2 mb-3 flex-1">
          <CaseStudyLine
            icon="🎯"
            label="Problem"
            content={project.problem}
            isCondensed
          />
          <CaseStudyLine
            icon="📊"
            label="Impact"
            content={project.impact}
            highlight
            isCondensed
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2 border-t border-slate-200 dark:border-slate-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <Github className="w-3 h-3" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Live Site</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyLine({
  icon,
  label,
  content,
  highlight = false,
  isCondensed = false
}: {
  icon: string;
  label: string;
  content: string;
  highlight?: boolean;
  isCondensed?: boolean;
}) {
  const truncatedContent = isCondensed
    ? content.length > 120 ? content.substring(0, 120) + "..." : content
    : content;

  return (
    <div className="flex gap-2">
      <span className={`${isCondensed ? 'text-sm' : 'text-lg'} flex-shrink-0`}>{icon}</span>
      <div className="flex-1">
        <span className={`font-semibold text-slate-700 dark:text-slate-300 ${isCondensed ? 'text-xs' : 'text-sm'}`}>
          {label}:
        </span>
        <span
          className={`ml-1 ${isCondensed ? 'text-xs' : 'text-sm'} ${
            highlight
              ? "text-blue-600 dark:text-cyan-400 font-semibold"
              : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {truncatedContent}
        </span>
      </div>
    </div>
  );
}
