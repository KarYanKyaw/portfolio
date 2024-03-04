import Aos from "aos";
import Atropos from "atropos/react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";

const ProjectCard = ({ title, desc, github, project, img }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-primary rounded"
    >
      <div className="space-y-4 p-5 bg-background">
        <p className="text-xl font-bold font-serif">{title}</p>
        <div className=" rounded p-3">
          <img
            className=" rounded h-32 w-full object-contain"
            src={img}
            alt=""
          />
        </div>
        <p className=" font-medium h-[12rem] text-primary/80">{desc}</p>
      </div>
      {project && (
        <div className=" border-t p-5 bg-background border-neutral-800 flex justify-end gap-3">
          <Button variant="link">
            <a href={github} target="_blank">
              Check Code
            </a>
          </Button>
          <Button variant="secondary">
            <a href={project} target="_blank">
              Check Project
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
