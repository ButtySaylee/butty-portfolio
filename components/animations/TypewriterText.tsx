"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  actions: string[];
  qualities: string[];
  constant: string;
  className?: string;
}

export default function TypewriterText({
  actions,
  qualities,
  constant,
  className = ""
}: TypewriterTextProps) {
  const [currentActionIndex, setCurrentActionIndex] = useState(0);
  const [currentQualityIndex, setCurrentQualityIndex] = useState(0);
  const [displayedAction, setDisplayedAction] = useState("");
  const [displayedQuality, setDisplayedQuality] = useState("");
  const [isTypingAction, setIsTypingAction] = useState(true);
  const [isTypingQuality, setIsTypingQuality] = useState(false);

  // Typewriter effect for action word
  useEffect(() => {
    if (!isTypingAction) return;

    const currentWord = actions[currentActionIndex];
    if (displayedAction.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedAction(currentWord.slice(0, displayedAction.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingAction(false);
      setIsTypingQuality(true);
    }
  }, [displayedAction, isTypingAction, currentActionIndex, actions]);

  // Typewriter effect for quality word
  useEffect(() => {
    if (!isTypingQuality) return;

    const currentWord = qualities[currentQualityIndex];
    if (displayedQuality.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedQuality(currentWord.slice(0, displayedQuality.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingQuality(false);
      // Wait before cycling to next word
      const timeout = setTimeout(() => {
        setDisplayedAction("");
        setDisplayedQuality("");
        setCurrentActionIndex((prev) => (prev + 1) % actions.length);
        setCurrentQualityIndex((prev) => (prev + 1) % qualities.length);
        setIsTypingAction(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [displayedQuality, isTypingQuality, currentQualityIndex, qualities, actions.length, qualities.length]);

  return (
    <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${className}`}>
      <motion.span
        key={`action-${currentActionIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="gradient-text-animated"
      >
        {displayedAction}
        {isTypingAction && <span className="animate-pulse">|</span>}
      </motion.span>
      <span> </span>
      <motion.span
        key={`quality-${currentQualityIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="gradient-text-animated"
      >
        {displayedQuality}
        {isTypingQuality && <span className="animate-pulse">|</span>}
      </motion.span>
      <span> {constant}</span>
    </div>
  );
}
