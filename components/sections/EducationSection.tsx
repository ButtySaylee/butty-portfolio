"use client";

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { education, certifications } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="relative px-6 py-24 bg-brutal-bg overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 brutal-grid opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="brutal-badge bg-brutal-green text-brutal-accent-fg mb-4 inline-block">
            Education
          </span>
          <h2 className="kinetic-hero text-5xl sm:text-6xl lg:text-7xl mt-4">
            Learning Path
          </h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brutal-sticker bg-white p-8 sm:p-10 mb-12 -rotate-1 hover:rotate-0 transition-all duration-200"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex-shrink-0 bg-brutal-blue border-2 border-brutal-border flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight">
                {education.degree}
              </h3>
              {education.minor && (
                <p className="font-display font-bold text-sm text-brutal-muted-fg uppercase tracking-wide mt-1">
                  Minor: {education.minor}
                </p>
              )}
              <div className="mt-3 space-y-1">
                <p className="font-display font-bold text-base uppercase">
                  {education.institution}
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-brutal-muted-fg">
                  {education.location} • {education.period}
                </p>
                {education.expectedGraduation && (
                  <p className="font-mono text-xs uppercase tracking-wider text-brutal-green font-bold mt-2">
                    Graduated: {education.expectedGraduation}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="font-display font-bold text-2xl uppercase tracking-tight flex items-center justify-center gap-2">
            🏅 Certifications
          </h3>
        </div>

        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className={`brutal-sticker bg-white p-5 flex items-center justify-between group ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-all duration-200`}
            >
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg uppercase tracking-tight group-hover:text-brutal-blue transition-colors">
                  {cert.title}
                </h4>
                <p className="font-mono text-xs uppercase tracking-wider text-brutal-muted-fg mt-1">
                  {cert.provider} • {cert.platform} • {cert.year}
                </p>
              </div>
              <ExternalLink size={20} className="text-brutal-fg flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}