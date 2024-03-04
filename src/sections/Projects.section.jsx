import { ProjectCard, SectionHeader, Wrapper } from "@/components";
import { useAppContext } from "@/contexts/AppContext";
import React from "react";

const ProjectSection = () => {
  const { projectsData } = useAppContext();
  return (
    <section id="projects" className="Center py-12 bg-primary-foreground">
      <Wrapper>
        <SectionHeader>My Projects</SectionHeader>
        <div className=" gap-8 grid grid-cols-1 lg:grid-cols-3">
          {projectsData.map((data) => (
            <ProjectCard key={data.id} {...data} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ProjectSection;
