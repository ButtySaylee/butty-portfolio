"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
}

const variants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    }
  }
};

export default function RevealOnScroll({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
  staggerChildren
}: RevealOnScrollProps) {
  const selectedVariant = variants[variant];

  const containerVariant = staggerChildren ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  } : undefined;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariant || selectedVariant}
      transition={{ duration, delay: containerVariant ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
