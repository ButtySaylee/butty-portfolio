import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Butty Saylee | Software Engineer & Builder",
  description: "Portfolio of Butty Saylee — Software Engineer, Data Engineer, and Problem Solver. Building impactful, scalable solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-brutal-bg text-brutal-fg font-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}