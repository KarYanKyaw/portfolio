import { ToolCard, Wrapper, SectionHeader } from "@/components";
import { useAppContext } from "@/contexts/AppContext";
import React from "react";

const Tools = () => {
  const { skillsData } = useAppContext();

  return (
    <section id="skills" className="bg-neutral-900 py-12 md:py-0 Center">
      <Wrapper>
        <SectionHeader>My Skill Sets</SectionHeader>
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
