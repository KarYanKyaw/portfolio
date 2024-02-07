import Aos from "aos";
import Atropos from "atropos/react";
import React, { useEffect } from "react";

const ProjectCard = ({ title, desc, github, project, img }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-neutral-900 rounded"
    >
      <Atropos className="my-atropos">
        <div className=" space-y-4 p-5 rounded bg-neutral-900">
          <p className="text-xl text-neutral-200  font-bold font-serif">
            {title}
          </p>
          <div className=" rounded p-3">
            <img
              className=" rounded h-32 w-full object-contain"
              src={img}
              alt=""
            />
          </div>
          <p className=" font-medium h-[12rem] text-neutral-200/80">{desc}</p>
        </div>
      </Atropos>
      {project && (
        <div className=" border-t p-5 border-neutral-800 flex justify-end gap-3">
          <a className="Outline" href={github} target="_blank">
            Check Code
          </a>

          <a className="Button" target="_blank" href={project}>
            Check Project
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
