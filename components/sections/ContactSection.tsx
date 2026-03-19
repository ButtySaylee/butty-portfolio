"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import RevealOnScroll from "../animations/RevealOnScroll";
import MagneticButton from "../ui/MagneticButton";
import { personalData } from "@/data/personal";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalData.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-16 bg-slate-950 overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <RevealOnScroll variant="fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Let's Build Something Remarkable
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.2}>
          <p className="text-lg sm:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're hiring, collaborating, or just want to talk tech — I'm here to create impactful solutions together.
          </p>
        </RevealOnScroll>

        {/* Why Work With Me */}
        <RevealOnScroll variant="scaleIn" delay={0.3}>
          <div className="glass-effect-dark rounded-2xl p-8 mb-12 backdrop-blur-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Why Work With Me</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="text-cyan-400 text-3xl mb-2">⚡</div>
                <p className="text-white font-semibold">Full-stack + Data Skills</p>
                <p className="text-sm text-slate-300">End-to-end development with data-driven insights</p>
              </div>
              <div className="space-y-2">
                <div className="text-cyan-400 text-3xl mb-2">🎯</div>
                <p className="text-white font-semibold">Proven Impact</p>
                <p className="text-sm text-slate-300">100+ users, 40% efficiency gains</p>
              </div>
              <div className="space-y-2">
                <div className="text-cyan-400 text-3xl mb-2">🚀</div>
                <p className="text-white font-semibold">Fast Learner</p>
                <p className="text-sm text-slate-300">Adaptable across domains & teams</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Email Copy Box */}
        <RevealOnScroll variant="fadeInUp" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={copyEmail}
            className="glass-effect-dark rounded-xl p-5 mb-8 cursor-pointer hover:shadow-glow-cyan transition-all duration-300 max-w-md mx-auto backdrop-blur-xl border border-cyan-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">
                  {personalData.contact.email}
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                {emailCopied ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Copy className="w-4 h-4 text-white" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Social Links */}
        <RevealOnScroll variant="fadeIn" delay={0.5}>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <MagneticButton
              href={personalData.social.github.url}
              className="px-6 py-3 rounded-xl glass-effect-dark border border-white/10 text-white font-semibold flex items-center gap-2 hover:border-cyan-500/50 hover:shadow-glow-blue transition-all duration-300 backdrop-blur-xl"
              strength={0.15}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </MagneticButton>

            <MagneticButton
              href={personalData.social.linkedin.url}
              className="px-6 py-3 rounded-xl glass-effect-dark border border-white/10 text-white font-semibold flex items-center gap-2 hover:border-cyan-500/50 hover:shadow-glow-blue transition-all duration-300 backdrop-blur-xl"
              strength={0.15}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </MagneticButton>

            <MagneticButton
              href={`https://api.whatsapp.com/send?phone=${personalData.contact.phone}&text=${encodeURIComponent("Hi! I found your portfolio and I'd like to connect with you.")}`}
              className="px-6 py-3 rounded-xl glass-effect-dark border border-white/10 text-white font-semibold flex items-center gap-2 hover:border-green-500/50 hover:shadow-glow-blue transition-all duration-300 backdrop-blur-xl"
              strength={0.15}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </MagneticButton>

            <MagneticButton
              href={`tel:${personalData.contact.phone}`}
              className="px-6 py-3 rounded-xl glass-effect-dark border border-white/10 text-white font-semibold flex items-center gap-2 hover:border-cyan-500/50 hover:shadow-glow-blue transition-all duration-300 backdrop-blur-xl"
              strength={0.15}
            >
              <span>📞</span>
              <span>Call Me</span>
            </MagneticButton>
          </div>
        </RevealOnScroll>

        {/* Primary CTA */}
        <RevealOnScroll variant="scaleIn" delay={0.6}>
          <MagneticButton
            href={`mailto:${personalData.contact.email}`}
            className="inline-block px-12 py-5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-lg font-bold shadow-xl-glow hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 animate-gradient-slow bg-200%"
            strength={0.25}
          >
            Let's Talk →
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
