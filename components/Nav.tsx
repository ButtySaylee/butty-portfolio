"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-bg border-b-4 border-brutal-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo - Sticker style */}
          <a href="#" className="font-display font-bold text-xl uppercase tracking-tight brutal-sticker px-3 py-1 bg-brutal-accent text-brutal-accent-fg">
            Butty.dev
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-display font-bold text-sm uppercase tracking-wide border-2 border-transparent hover:border-brutal-border mechanical-press"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 border-2 border-brutal-border flex items-center justify-center mechanical-press bg-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-brutal-bg pt-16 md:hidden">
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block w-full py-4 px-6 border-4 border-brutal-border font-display font-bold text-2xl uppercase tracking-tight brutal-sticker bg-white hover:bg-brutal-accent transition-colors duration-75"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}