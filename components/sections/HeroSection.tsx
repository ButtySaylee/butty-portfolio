"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, ArrowRight } from "lucide-react";
import { personalData } from "@/data/personal";

// All skills for the marquee
const marqueeSkills = [
  "Python", "React", "Next.js", "TypeScript", "Data Engineering", 
  "Cybersecurity", "QA Testing", "MongoDB", "Node.js", "Streamlit",
  "Pandas", "Machine Learning", "REST APIs", "SQL", "Cloud Computing"
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brutal-bg">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 brutal-grid" />

      {/* Massive Background Number (Kinetic element) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
        <span className="kinetic-number text-[30rem] leading-none">08</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="brutal-badge bg-brutal-accent text-brutal-accent-fg hover:rotate-0 transition-transform duration-200">
                Software Engineer
              </span>
            </motion.div>

            {/* Massive Name - Kinetic Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="kinetic-hero text-7xl sm:text-8xl lg:text-9xl xl:text-[8rem] leading-[0.85] mb-4"
            >
              {personalData.name.split(" ")[0]}
              <br />
              <span className="text-brutal-accent relative">
                {personalData.name.split(" ")[1]}
                {/* Underline sticker */}
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-brutal-accent -z-10" />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="font-display font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight mt-6 mb-4 max-w-xl"
            >
              {personalData.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="text-brutal-muted-fg text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Turning complex problems into impactful, scalable solutions. 
              Experience spanning software engineering, 
              data engineering, cybersecurity, and technical leadership.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brutal-fg text-brutal-bg font-display font-bold text-lg uppercase tracking-wide border-4 border-brutal-border shadow-brutal-lg mechanical-press"
              >
                View My Work
                <ArrowRight size={20} />
              </a>

              <a
                href="/resume"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brutal-accent text-brutal-accent-fg font-display font-bold text-lg uppercase tracking-wide border-4 border-brutal-border shadow-brutal-lg mechanical-press"
              >
                <Download size={20} />
                Resume
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brutal-fg font-display font-bold text-lg uppercase tracking-wide border-4 border-brutal-border shadow-brutal-lg mechanical-press"
              >
                <Mail size={20} />
                Email
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="flex gap-8 mt-10 pt-8 border-t-4 border-brutal-border"
            >
              {personalData.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-brutal-muted-fg mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile with Sticker Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center"
          >
            {/* Profile Image - Sticker Style */}
            <div className="relative brutal-sticker p-2 bg-white rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-72 h-72 overflow-hidden">
                <Image
                  src={personalData.profileImage}
                  alt={personalData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner sticker */}
              <div className="absolute -top-3 -right-3 brutal-badge bg-brutal-red text-white rotate-12">
                HELLO!
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Kinetic Marquee - Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative z-10 mt-auto"
      >
        <div className="marquee-container border-b-0">
          <div className="marquee-content">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="text-brutal-fg" />
        </motion.div>
      </motion.div>
    </section>
  );
}