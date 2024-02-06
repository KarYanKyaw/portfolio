import { ToolCard, Wrapper } from "@/components";
import { useAppContext } from "@/contexts/AppContext";
import React from "react";

const Tools = () => {
  const { skillsData } = useAppContext();

  return (
    <section
      id="skills"
      className=" min-h-screen bg-neutral-800 py-12 md:py-0 flex justify-center items-center"
    >
      <Wrapper>
        <p className="mb-12 font-semibold text-center capitalize text-4xl md:text-5xl text-neutral-200 font-serif">
          My skill set
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillsData.map(({ id, skill, rating, img }) => (
            <ToolCard key={id} img={img} skill={skill} rating={rating} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Tools;
