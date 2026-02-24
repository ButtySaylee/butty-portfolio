"use client";
import React, { useEffect } from "react";

export default function Transcript() {
  useEffect(() => {
    document.body.classList.add("transcript-print");
    return () => {
      document.body.classList.remove("transcript-print");
    };
  }, []);

  return (
    <div className="min-h-screen p-6">
      <button className="print-btn" onClick={() => typeof window !== "undefined" && window.print()}>Print Results</button>
      <iframe src="/trans.html" style={{ width: "100%", height: "100vh", border: "none" }} title="Transcript" />
    </div>
  );
}
