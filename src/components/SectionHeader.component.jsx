import React from "react";

const SectionHeader = ({ children, className }) => {
  return (
    <p
      className={`mb-12 font-semibold text-center capitalize text-4xl md:text-5xl text-neutral-200 font-serif ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionHeader;
