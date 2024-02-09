import { HeroInfo, HeroSvg, Wrapper } from "@/components";
import Atropos from "atropos/react";
import React from "react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen bg-neutral-800">
      <Wrapper>
        <div className="w-full pt-28 lg:pt-40 items-center gap-8 grid grid-cols-1 lg:grid-cols-2">
          <HeroInfo />
          <div className=" hidden lg:block">
            <Atropos className="my-atropos">
              <HeroSvg />
            </Atropos>
          </div>
          <div className="block lg:hidden">
            <HeroSvg />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
