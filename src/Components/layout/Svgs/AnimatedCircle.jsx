import React from "react";

const AnimatedCircle = () => {
  return (
    <div className="relative h-14 w-px bg-secondary ">
      <div className="absolute top-0 -left-circle transform -translate-x-1/2 w-5 h-5 bg-primary border-4 border-secondary rounded-full animate-bounce-up-down"></div>
    </div>
  );
};

export default AnimatedCircle;