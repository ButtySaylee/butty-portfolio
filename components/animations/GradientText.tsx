"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  animate?: boolean;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
}

export default function GradientText({
  children,
  animate = false,
  from = "from-blue-400",
  via = "via-cyan-400",
  to = "to-blue-600",
  className = ""
}: GradientTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${via} ${to} ${
        animate ? "bg-200% animate-gradient" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
