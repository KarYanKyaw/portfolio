import React, { useEffect } from "react";
import Aos from "aos";
import { useAppContext } from "@/contexts/AppContext";

const SkillCard = ({ skill, rating, img }) => {
  const { starsLooping } = useAppContext();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" bg-secondary grid items-center min-w-full grid-cols-5  text-secondary px-4 py-3 duration-300 gap-4 select-none border-2 rounded  border-transparent hover:border-yellow-500"
    >
      <div className=" col-span-1">
        <img src={img} />
      </div>
      <div className="col-span-4 flex flex-col justify-start items-start gap-2">
        <p className="font-bold text-start text-primary text-lg">{skill}</p>
        <div className=" flex gap-1">{starsLooping(rating)}</div>
      </div>
    </div>
  );
};

export default SkillCard;
