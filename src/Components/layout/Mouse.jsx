import React, { useState, useEffect } from "react";

const Mouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed w-3 h-3 rounded-full bg-customBlue pointer-events-none z-[200] transform ease-custom-out duration-200"
        style={{
          top: position.y - 2,
          left: position.x - 2,
        }}
      />
    </div>
  );
};

export default Mouse;
