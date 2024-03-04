import { HeroInfo, HeroSvg, Wrapper } from "@/components";
import Atropos from "atropos/react";
import React from "react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex justify-center items-center bg-primary-foreground">
      <Wrapper>
        <div className="w-full items-center gap-8 grid grid-cols-1 lg:grid-cols-2">
          <HeroInfo />
          <HeroSvg />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
