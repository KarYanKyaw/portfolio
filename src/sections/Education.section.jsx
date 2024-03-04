import { EducationTree, SectionHeader, Wrapper } from "@/components";
import React from "react";
import road from "../assets/road.jpg";
const EducationSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${road})` }}
      id="education"
      className={` min-h-screen py-24 md:py-32 bg-contain md:bg-cover  education`}
    >
      <Wrapper>
        <div className="flex flex-col gap-7">
          <EducationTree />
        </div>
      </Wrapper>
    </section>
  );
};

export default EducationSection;
