import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className=" bg-neutral-800 Center">
      <ClimbingBoxLoader color="#e7e5e4" speedMultiplier={2} />
    </div>
  );
};

export default Loading;
