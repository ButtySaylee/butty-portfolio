"use client";
import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-24 lg:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
        >
          Hi, I’m Butty 👋
        </motion.h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Future professional software engineer, passionate about building
          modern web apps with Next.js, React, and cutting-edge tech.
        </p>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-16 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h2>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">
            I’m Butty, a Liberian Software Engineering student at Delhi
            Technological University. I specialize in building clean, modern,
            and scalable web applications. I enjoy solving problems, learning
            new technologies, and turning ideas into reality.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg sm:text-xl">Portfolio Website</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base">
                The site you’re looking at right now! Built with Next.js 14,
                Tailwind, and Framer Motion.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg sm:text-xl">
                Data Insights Generator
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base">
                A Streamlit app that transforms raw survey data into interactive
                insights with charts and PDF export.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg sm:text-xl">More Coming Soon</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base">
                Stay tuned for more projects showcasing my growth as a software
                engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-16 bg-slate-100 dark:bg-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg">
            Want to work together? Let’s connect!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border dark:bg-slate-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border dark:bg-slate-800"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md border dark:bg-slate-800"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
