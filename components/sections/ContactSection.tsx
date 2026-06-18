"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, MessageCircle, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { personalData } from "@/data/personal";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalData.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-brutal-bg overflow-hidden">
      {/* Full-width Yellow CTA Block */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-brutal-accent border-t-4 border-b-4 border-brutal-border"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="kinetic-hero text-5xl sm:text-7xl lg:text-8xl text-brutal-accent-fg leading-[0.85]"
          >
            Let's Build
            <br />
            <span className="bg-brutal-fg text-brutal-accent px-4 inline-block mt-2">
              Something
            </span>
            <br />
            Remarkable
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-display font-bold text-lg sm:text-xl text-brutal-accent-fg/80 mt-6 max-w-lg mx-auto"
          >
            Whether you're hiring, collaborating, or just want to talk tech — I'm here to create impactful solutions together.
          </motion.p>

          {/* Email Copy */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-10"
          >
            <button
              onClick={copyEmail}
              className="brutal-sticker bg-brutal-fg text-brutal-bg px-8 py-5 font-display font-bold text-lg uppercase tracking-wide inline-flex items-center gap-4 group"
            >
              <Mail size={22} />
              <span>{personalData.contact.email}</span>
              {emailCopied ? (
                <Check size={20} className="text-brutal-green" />
              ) : (
                <Copy size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-8"
          >
            <a
              href={`mailto:${personalData.contact.email}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-brutal-fg text-brutal-accent font-display font-bold text-xl uppercase tracking-wide border-4 border-brutal-border shadow-brutal-xl mechanical-press"
            >
              <Sparkles size={24} />
              Start a Conversation
              <ArrowUpRight size={24} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Lower Section - Social Links */}
      <div className="border-b-4 border-brutal-border">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={personalData.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-sticker bg-white px-6 py-4 font-display font-bold text-sm uppercase tracking-wide inline-flex items-center gap-3 hover:bg-brutal-bg transition-colors duration-75"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href={personalData.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-sticker bg-white px-6 py-4 font-display font-bold text-sm uppercase tracking-wide inline-flex items-center gap-3 hover:bg-brutal-bg transition-colors duration-75"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=${personalData.contact.phone}&text=${encodeURIComponent("Hi! I found your portfolio and I'd like to connect with you.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-sticker bg-white px-6 py-4 font-display font-bold text-sm uppercase tracking-wide inline-flex items-center gap-3 hover:bg-brutal-bg transition-colors duration-75"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
              href={`tel:${personalData.contact.phone}`}
              className="brutal-sticker bg-white px-6 py-4 font-display font-bold text-sm uppercase tracking-wide inline-flex items-center gap-3 hover:bg-brutal-bg transition-colors duration-75"
            >
              <Phone size={20} />
              {personalData.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-4 border-brutal-border bg-brutal-fg text-brutal-bg">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-display font-bold text-sm uppercase tracking-wide">
            Butty.dev © {new Date().getFullYear()}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-brutal-bg/60">
            Built with brute force & acid yellow
          </span>
        </div>
      </div>
    </section>
  );
}