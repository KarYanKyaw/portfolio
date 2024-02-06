import { EducationTree, SectionHeader, Wrapper } from "@/components";
import React from "react";
import road from "../assets/road.jpg";
const EducationSection = () => {
  return (
    <section
      id="education"
      className={` min-h-screen bg-[${road}] py-24 md:py-32 bg-contain md:bg-cover  education`}
    >
      <Wrapper>
        <div className="flex flex-col gap-7">
          <SectionHeader className="!text-neutral-800">Education</SectionHeader>
          <EducationTree />
        </div>
      </Wrapper>
    </section>
  );
};

export default EducationSection;
