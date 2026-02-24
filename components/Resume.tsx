"use client";
import React, { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.body.classList.add("resume-print");
    return () => {
      document.body.classList.remove("resume-print");
    };
  }, []);

  return (
    <div className="min-h-screen p-6">
      <button className="print-btn" onClick={() => typeof window !== "undefined" && window.print()}>Print Resume</button>
      <iframe src="/resume.pdf" style={{ width: "100%", height: "100vh", border: "none" }} title="Resume" />
    </div>
  );
}
