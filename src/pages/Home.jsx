import { Footer, Navbar } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import {
  HeroSection,
  ToolSection,
  ProjectSection,
  EducationSection,
  ContactSection,
} from "@/sections";
import React from "react";

const Home = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="overflow-y-hidden min-h-screen">
        <HeroSection />
        <ToolSection />
        <ProjectSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
