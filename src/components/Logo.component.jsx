import React from "react";

const Logo = () => {
  return (
    <p className=" text-2xl md:text-3xl select-none font-semibold fontse hover:opacity-90  text-neutral-300 cursor-pointer">
      <span className=" text-yellow-400">&lt;</span>{" "}
      <span className=" text-primary">KYK</span>{" "}
      <span className="  text-yellow-400">/&gt;</span>
    </p>
  );
};

export default Logo;
