import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const posX = useRef(0);
  const posY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.to(
      {},
      {
        duration: 0.016, // 60fps
        repeat: -1,
        onUpdate: () => {
          posX.current += (mouseX.current - posX.current) * 0.15;
          posY.current += (mouseY.current - posY.current) * 0.15;

          if (cursorRef.current) {
            gsap.set(cursorRef.current, {
              css: {
                left: posX.current - 13,
                top: posY.current - 13,
              },
            });
          }
        },
      }
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="bg-customBlue w-3 h-3 fixed rounded-full z-20 pointer-events-none"
    />
  );
};

export default MouseFollower;
