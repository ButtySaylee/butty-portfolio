"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "react-tsparticles";
import { Phone } from "lucide-react";
import TypewriterText from "../animations/TypewriterText";
import GradientMesh from "../ui/GradientMesh";
import StatsCard from "../ui/StatsCard";
import AnimatedButton from "../ui/AnimatedButton";
import MagneticButton from "../ui/MagneticButton";
import FloatingElement from "../animations/FloatingElement";
import { personalData } from "@/data/personal";
import { particlesConfig } from "@/data/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-16 bg-slate-950">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1 - Blue */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />

        {/* Orb 2 - Cyan */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />

        {/* Orb 3 - Purple */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Orb 4 - Teal */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-teal-500/25 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <GradientMesh />
      </div>

      {/* Refined Particles */}
      <div className="absolute inset-0 opacity-40">
        {/* @ts-ignore */}
        <Particles options={particlesConfig} />
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Profile Image - Floating with Gradient Ring */}
            <div className="flex justify-center lg:justify-start mb-8">
              <FloatingElement duration={8} distance={15}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  {/* Outer glow ring */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-pulse-glow" />

                  {/* Animated spinning gradient ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 animate-spin-slow opacity-90" />

                  <div className="relative rounded-full p-1 bg-slate-950">
                    <Image
                      src={personalData.profileImage}
                      alt={`Profile picture of ${personalData.name}`}
                      width={160}
                      height={160}
                      className="rounded-full object-cover border-2 border-slate-800"
                      priority
                    />
                  </div>
                </motion.div>
              </FloatingElement>
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold"
            >
              <span className="text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                {personalData.name}
              </span>
            </motion.h1>

            {/* Typewriter Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <TypewriterText
                actions={personalData.heroStatement.actions}
                qualities={personalData.heroStatement.qualities}
                constant={personalData.heroStatement.constant}
                className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalData.tagline}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-base font-medium text-slate-200"
            >
              <div className="p-2 rounded-lg bg-cyan-500/10 backdrop-blur-sm">
                <Phone size={18} className="text-cyan-400" />
              </div>
              <a
                href={`tel:${personalData.contact.phone}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {personalData.contact.phoneDisplay}
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-glow-blue hover:shadow-xl-glow transition-all duration-300"
                strength={0.2}
              >
                Hire Me →
              </MagneticButton>

              <AnimatedButton
                href="#projects"
                variant="ghost"
              >
                View My Work
              </AnimatedButton>

              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-xl bg-cyan-600/80 text-white font-bold shadow-glass hover:bg-cyan-700 transition-all duration-300 text-center"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Floating Stats Card (Hidden on mobile) */}
          <div className="hidden lg:block">
            <StatsCard stats={personalData.stats} />
          </div>
        </div>
      </div>
    </section>
  );
}
