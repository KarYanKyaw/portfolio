import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className=" Center">
      <ClimbingBoxLoader color="#171717" speedMultiplier={2} />
    </div>
  );
};

export default Loading;
