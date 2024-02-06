import { HeroInfo, HeroSvg, Wrapper } from "@/components";
import React from "react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen bg-neutral-900">
      <Wrapper>
        <div className="w-full pt-28 md:pt-40 items-center gap-8 grid grid-cols-1 md:grid-cols-2">
          <HeroInfo />
          <HeroSvg />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
