"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <nav className="w-full p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
      <span className="font-bold">Butty.dev</span>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
