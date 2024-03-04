import React from "react";

const SectionHeader = ({ children, className }) => {
  return (
    <p
      className={`mb-24 font-semibold text-center capitalize text-4xl md:text-5xl text-primary font-serif ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionHeader;
