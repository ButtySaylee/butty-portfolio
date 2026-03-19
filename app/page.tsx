"use client";

import Nav from "../components/Nav";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FloatingWhatsApp />
    </>
  );
}