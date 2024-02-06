import { HeroInfo, HeroSvg, Wrapper } from "@/components";
import Atropos from "atropos/react";
import React from "react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen bg-neutral-800">
      <Wrapper>
        <div className="w-full pt-28 md:pt-40 items-center gap-8 grid grid-cols-1 md:grid-cols-2">
          <HeroInfo />
          <div className=" hidden md:block">
            <Atropos className="my-atropos">
              <HeroSvg />
            </Atropos>
          </div>
          <div className="block md:hidden">
            <HeroSvg />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
