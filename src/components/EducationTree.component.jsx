import { useAppContext } from "@/contexts/AppContext";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const EducationTree = () => {
  const { educationData } = useAppContext();
  return (
    <>
      <VerticalTimeline>
        {educationData.map(({ id, title, desc, date, position }) => (
          <VerticalTimelineElement
            position={position}
            key={id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#262626",
              boxShadow: "",
              color: "#e5e5e5",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #262626",
            }}
            iconStyle={{ background: "#262626", color: "#e5e5e5" }}
          >
            <h3 className="vertical-timeline-element-title !text-2xl font-serif">
              {title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">{date}</h4>
            <p>{desc}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </>
  );
};

export default EducationTree;
