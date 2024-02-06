import { Navbar } from "@/components";
import { HeroSection, ToolSection } from "@/sections";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <HeroSection />
        <ToolSection />
        <div className=" min-h-screen"></div>
      </div>
    </>
  );
};

export default Home;
