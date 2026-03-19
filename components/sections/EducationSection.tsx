"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import RevealOnScroll from "../animations/RevealOnScroll";
import { education, certifications } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="px-6 py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll variant="fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            Education & Certifications
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.2}>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Continuous learning through formal education and specialized certifications.
          </p>
        </RevealOnScroll>

        {/* Education */}
        <RevealOnScroll variant="scaleIn" delay={0.3}>
          <div className="glass-effect dark:glass-effect-dark rounded-2xl p-8 mb-12 backdrop-blur-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                  {education.degree}
                </h3>
                {education.minor && (
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                    Minor: {education.minor}
                  </p>
                )}
                <p className="text-slate-700 dark:text-slate-300 font-semibold">
                  {education.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                  {education.location} • {education.period}
                </p>
                {education.expectedGraduation && (
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-2 font-medium">
                    Expected Graduation: {education.expectedGraduation}
                  </p>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Certifications */}
        <div className="space-y-4">
          <RevealOnScroll variant="fadeInUp" delay={0.4}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="w-6 h-6 text-cyan-500" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                Professional Certifications
              </h3>
            </div>
          </RevealOnScroll>

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
                transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-glass border border-slate-200 dark:border-slate-700 hover:shadow-xl-glow hover:border-blue-400 dark:hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {cert.provider} • {cert.platform} • {cert.year}
                    </p>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
