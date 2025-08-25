"use client";
import React from "react";

export default function Nav() {
  return (
    <nav className="w-full p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
      <span className="font-bold">Butty.dev</span>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
