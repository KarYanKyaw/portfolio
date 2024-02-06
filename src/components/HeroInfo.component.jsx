import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "./ui/button";
const HeroInfo = () => {
  const offers = useRef(null);
  const name = useRef(null);

  useEffect(() => {
    // for name
    const typedName = new Typed(name.current, {
      strings: ["Kar Yan Kyaw"],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
      loopCount: 1,
      startDelay: 500,

      cursorChar: "|",
    });

    // for offers
    const typedOffers = new Typed(offers.current, {
      strings: [
        "Passionate Frontend Web Developer.",
        "Build responsive web applications.",
        "Expertise in React and Tailwind CSS.",
      ],
      typeSpeed: 50,
      loop: true,
      startDelay: 1560,
      showCursor: true,
      cursorChar: "|",
      backSpeed: 50,
      smartBackspace: true,
    });
    return () => {
      typedName.destroy();
      typedOffers.destroy();
    };
  }, []);

  return (
    <div className="md:mt-5 animate__animated animate__fadeIn flex flex-col gap-8">
      <p className=" text-yellow-400 text-base md:text-lg lg:text-xl font-bold  font-serif">
        Hello World!
      </p>
      <p className="text-neutral-100 font-medium text-2xl lg:text-6xl">
        {" "}
        <span>I'm</span> <span ref={name} className=" text-yellow-400"></span>
      </p>
      <p className="text-neutral-100 text-base lg:text-2xl">
        <span>-</span> <span className=" capitalize" ref={offers}></span>
      </p>
      <div>
        <Button variant="secondary">Download CV</Button>
      </div>
    </div>
  );
};

export default HeroInfo;
