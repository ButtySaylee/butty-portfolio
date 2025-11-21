"use client";
import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone } from "lucide-react";
import Particles from "react-tsparticles";

export default function Page() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-24 lg:py-32 text-center bg-gradient-to-br from-slate-900/75 to-blue-900/60 dark:from-slate-950/80 dark:to-blue-900/70">
        {/* Animated particles background */}
        <div className="absolute inset-0 -z-10">
          {/* @ts-ignore */}
          <Particles
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  resize: true
                },
                modes: { repulse: { distance: 100, duration: 0.4 } }
              },
              particles: {
                color: { value: "#38bdf8" },
                links: { enable: true, color: "#38bdf8", distance: 150, opacity: 0.3 },
                move: { enable: true, speed: 2 },
                number: { value: 40 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: 3 }
              },
              detectRetina: true
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          <Image
            src="/profile.jpg"
            alt="Profile picture of Butty Saylee"
            width={128}
            height={128}
            className="rounded-full border-4 border-blue-400 shadow-lg object-cover"
            priority
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 drop-shadow-glass"
        >
          🚀 Butty Saylee
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 dark:text-slate-300"
        >
          Software Engineer | Data Enthusiast | Cyber Forensics Explorer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-lg lg:text-2xl text-slate-300 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Turning complex problems into impactful, scalable solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-4 flex items-center justify-center gap-2 text-base lg:text-lg font-medium text-blue-300 dark:text-blue-400"
        >
          <Phone size={20} className="text-cyan-400" />
          <span>Contact:</span>
          <a href="tel:+919958781964" className="underline hover:text-cyan-400">+919958781964</a>
        </motion.div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <div className="mt-4 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-bold shadow-glass hover:bg-cyan-700 transition inline-block"
          >
            Download Resume
          </a>
        </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.07 }}
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-glass hover:bg-blue-700 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            className="px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-blue-600 font-bold shadow-glass border border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
          >
            Hire Me
          </motion.a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 py-16 bg-slate-100 dark:bg-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Interactive Timeline (to be implemented) */}
          <div className="my-8">
            {/* Timeline will visually show your journey and achievements */}
            <div className="text-center text-cyan-600 font-bold">[Interactive Timeline Coming Soon]</div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-700 dark:text-slate-300 text-base sm:text-lg"
          >
            I’m Butty Saylee, a passionate Software Engineering student at Delhi Technological University (DTU), originally from Liberia, with a mission to build technology that makes a global impact.
            <br /><br />
            My journey spans continents - from solving real-world challenges in Liberia to innovating in India. I specialize in full-stack development, data analysis, and cyber forensics, blending technical precision with creativity and problem-solving.
            <br /><br />
            What sets me apart is versatility: I’ve built tools that empower 100+ users, analyzed data that drives decisions, and led international student initiatives that foster collaboration. Whether it’s writing clean code, designing secure systems, or visualizing data insights, I thrive on turning ideas into solutions that matter.
          </motion.p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-8 text-center"
          >
            Skills & Interests
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming */}
            <SkillCard title="Programming" skills={["Python", "C", "C++", "JavaScript"]} />
            {/* Web Development */}
            <SkillCard title="Web Development" skills={["HTML", "CSS", "Git", "GitHub"]} />
            {/* Technical */}
            <SkillCard title="Technical" skills={[
              "Software Engineering Principles",
              "DSA",
              "Data Analysis",
              "Visualization",
              "DBMS",
              "Cyber Forensics"
            ]} />
            {/* Tools */}
            <SkillCard title="Tools" skills={[
              "MongoDB", "Google Colab", "VS Code", "Jupyter", "Google Workspace"
            ]} />
            {/* Soft Skills */}
            <SkillCard title="Soft Skills" skills={[
              "Analytical Thinking", "Collaboration", "Time Management", "Problem-Solving"
            ]} />
            {/* Interests */}
            <SkillCard title="Interests" skills={[
              "AI Ethics", "Social Impact Projects", "Open-Source Contributions"
            ]} />
          </div>
        </div>
      </section>

      {/* Projects */}
      {/* Project Demos */}
      <section id="project-demos" className="px-6 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-10 text-center"
          >
            Project Demos & Case Studies
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Example demo for Apnapan */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-glass border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Apnapan Demo</h3>
              <video controls width="100%" className="rounded-lg mb-4">
                <source src="/apnapan-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <a href="https://github.com/ButtySaylee/data-insights-generator-v2" target="_blank" rel="noopener" className="underline text-blue-600 dark:text-blue-400">View Project on GitHub</a>
            </div>
            {/* Example demo for Portfolio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-glass border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Portfolio Walkthrough</h3>
              <video controls width="100%" className="rounded-lg mb-4">
                <source src="/portfolio-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <a href="https://github.com/ButtySaylee/butty-portfolio" target="_blank" rel="noopener" className="underline text-blue-600 dark:text-blue-400">View Portfolio on GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="px-6 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-10 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Apnapan - Data Insights Platform"
              description="Secure full-stack platform analyzing 100+ student surveys on belonging & well-being. Dashboards, authentication, automated PDF reports. Improved efficiency by 40%."
              tech={["Python", "Streamlit", "MongoDB", "Plotly"]}
              link="https://github.com/ButtySaylee/data-insights-generator-v2"
            />
            <ProjectCard
              title="This Portfolio"
              description="Personal portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. Showcases skills, projects, and experiences. Responsive, modern, and accessible design."
              tech={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
              link="https://github.com/ButtySaylee/butty-portfolio"
            />
          </div>
        </div>
      </section>

      {/* Experience & Leadership */}
      <section id="experience" className="px-6 py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-8 text-center"
          >
            Experience & Leadership
          </motion.h2>
          <ul className="space-y-5">
            <ExperienceItem
              role="Apnapan Fellow - Data/Software Engineering Intern"
              period="2025 – Present"
              description="Developed and maintained the Apnapan Data Insights Platform, a secure full-stack solution for analyzing student surveys on belonging and well-being. Built dashboards, authentication, and automated PDF reports, improving efficiency by 40%."
            />
            <ExperienceItem
              role="PR Strategist Intern - Swanirbhar"
              period="2025"
              description="Synthesized 50+ surveys & interviews into actionable strategy reports. Contributed to 3 community impact reports."
            />
            <ExperienceItem
              role="Remote Virtual Assistant - Hypely Pty Ltd"
              period="2024–25"
              description="Managed & optimized 200+ business listings, created Canva content viewed by 500+ prospects, boosted client engagement by 15%."
            />
            <ExperienceItem
              role="Technical Coordinator - DTU International Student Society"
              period="2022–24"
              description="Led international student initiatives, fostered collaboration, and supported technical operations for the society."
            />
            <ExperienceItem
              role="Technical Support (Libtelco) & Desktop Publishing (Divine Grace Tech Solutions, Liberia)"
              period="Early Career"
              description="Provided technical support and desktop publishing services, contributing to business operations and client satisfaction."
            />
          </ul>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="px-6 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-6"
          >
            Education & Certifications
          </motion.h2>
          <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
            <li>
              <strong>B.Tech Software Engineering, Minor in Cyber Forensics & Cyber Law</strong> — DTU, India (2022–26)
            </li>
            <li>
              <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL25CS69S105370453804451484" target="_blank" rel="noopener" className="underline hover:text-blue-600">Elite Certification — Joy of Computing with Python, IIT Madras (NPTEL)</a>
            </li>
            <li>
              <a href="https://coursera.org/share/1c0d45c64bdc78d2266e0cf60636e1c2" target="_blank" rel="noopener" className="underline hover:text-blue-600">IBM Introduction to Software Engineering (Coursera)</a>
            </li>
            <li>
              <a href="https://coursera.org/share/cf9e90d5a4b709c8aa07e4747fa5261f" target="_blank" rel="noopener" className="underline hover:text-blue-600">Duke Programming Fundamentals (Coursera)</a>
            </li>
            <li>
              <a href="https://www.virtualbadge.io/certificate-validator?credential=cer-bb6d7034-0fea-483f-8b58-0c104aaf" target="_blank" rel="noopener" className="underline hover:text-blue-600">ALX Africa Virtual Assistant Training</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials & Achievements */}
      {/* Blog & Insights */}
      <section id="blog" className="px-6 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-6"
          >
            Blog & Insights
          </motion.h2>
          <div className="text-slate-700 dark:text-slate-300 text-base sm:text-lg mb-6">
            Coming soon: My thoughts on technology, data, cyber forensics, and career tips for aspiring engineers!
          </div>
        </div>
      </section>
      <section id="testimonials" className="px-6 py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-6"
          >
            Testimonials & Achievements
          </motion.h2>
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="italic text-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-glass"
          >
            “Butty is a driven and versatile engineer, combining strong technical skills with an ability to collaborate across diverse teams. His global experience and problem-solving mindset make him an asset in any environment.”
          </motion.blockquote>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-16 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900 dark:to-slate-950"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-4"
          >
            Let’s Build the Future Together 🚀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg"
          >
            I’m always open to opportunities, collaborations, and meaningful conversations about technology, data, and innovation. Whether you’re a recruiter, a startup founder, or a fellow engineer — let’s connect.
          </motion.p>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ContactLink
              icon={<Github className="w-5 h-5 mr-2" />}
              href="https://github.com/ButtySaylee"
              label="GitHub"
              text="github.com/ButtySaylee"
            />
            <ContactLink
              icon={<Linkedin className="w-5 h-5 mr-2" />}
              href="https://linkedin.com/in/buttysaylee"
              label="LinkedIn"
              text="linkedin.com/in/buttysaylee"
            />
            <ContactLink
              icon={<span className="inline-block w-5 h-5 mr-2">📧</span>}
              href="mailto:buttysaylee4@gmail.com"
              label="Email"
              text="buttysaylee4@gmail.com"
            />
          </div>
          <motion.a
            href="mailto:buttysaylee4@gmail.com"
            whileHover={{ scale: 1.07 }}
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-glass hover:bg-blue-700 transition inline-block"
          >
            Let’s Talk →
          </motion.a>
        </div>
      </section>
    </>
  );
}

// --- Components used above ---

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-glass border border-slate-200 dark:border-slate-700 p-6"
    >
      <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">{title}</h3>
      <ul className="space-y-4">
        {skills.map((skill, i) => {
          // Example fixed skill percentages
          const skillPercents = [95, 90, 85, 80, 92, 88, 87, 93, 89, 86, 91, 84, 83, 82, 81, 94, 96, 97, 98, 99];
          const percent = skillPercents[i % skillPercents.length];
          return (
            <li key={skill}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                <span className="text-xs text-blue-400">{percent}%</span>
              </div>
              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2">
                <div
                  className="bg-blue-400 dark:bg-cyan-400 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  link
}: {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 border rounded-xl bg-white dark:bg-slate-800 shadow-glass hover:shadow-xl transition flex flex-col"
    >
      <h3 className="font-bold text-xl text-blue-700 dark:text-blue-400 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-3 flex-1">{description}</p>
      <div className="mb-2 flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold border">{t}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener" className="inline-block mt-2 text-blue-600 dark:text-blue-400 underline hover:no-underline">
          View on GitHub
        </a>
      )}
    </motion.div>
  );
}

function ExperienceItem({ role, period, description }: { role: string; period: string; description?: string }) {
  return (
    <li className="bg-white dark:bg-slate-800 rounded-lg shadow-glass border border-slate-200 dark:border-slate-700 p-4">
      <div className="font-semibold text-blue-700 dark:text-blue-400">{role}</div>
      <div className="text-xs text-slate-500 dark:text-slate-400 italic">{period}</div>
      {description && (
        <div className="mt-2 text-slate-700 dark:text-slate-300 text-sm">{description}</div>
      )}
    </li>
  );
}

function ContactLink({
  icon,
  href,
  label,
  text,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="flex items-center px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-glass hover:bg-blue-50 dark:hover:bg-slate-800 transition text-blue-700 dark:text-blue-400 font-medium"
      aria-label={label}
    >
      {icon}
      {text}
    </a>
  );
}