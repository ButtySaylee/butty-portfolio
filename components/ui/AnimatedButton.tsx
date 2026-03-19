"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  className?: string;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon = false,
  className = ""
}: AnimatedButtonProps) {
  const baseClasses = "px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2 group";

  const variantClasses = {
    primary: "bg-blue-600 text-white shadow-glow-blue hover:bg-blue-700 hover:shadow-xl-glow",
    secondary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan hover:shadow-xl-glow",
    ghost: "border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-600"
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.span>
      )}
    </Component>
  );
}
