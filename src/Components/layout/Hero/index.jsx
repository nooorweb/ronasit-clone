import React, { useRef, useState } from "react";

import gsap from "gsap";

const Hero = () => {
  const videobox = useRef(null);
  const video = useRef(null);
  const cross = useRef(null);
  const [show, ChangeShow] = useState(false);
  const [cros, Changecross] = useState(false);

  const CloseVideo = () => {
    Changecross(!cros);
    if (!cros) {
      videobox.current.style.display = "none";
      video.current.pause();
      video.current.muted = true;
      video.current.currentTime = 0;
    }
  };

  const showmodel = () => {
    ChangeShow(!show);

    if (!show) {
      videobox.current.style.display = "block";
      video.current.play();
      video.current.muted = false;

      // video.current.play();
    }
  };
  return (
    <div className="flex items-center justify-center gap-16 flex-col h-96 pt-56 pb-64 realtive">
      <div
        className="absolute w-4/6 max-h-96 rounded-md  bg-customBlue top-28 z-10 hidden"
        ref={videobox}
      >
        <div className="w-10 h-10 bg-white border-2  border-customBlue rounded-full flex justify-center items-center absolute right-2 top-2 cursor-pointer z-30">
          <i
            class="fa-solid fa-xmark fa-2xl  "
            ref={cross}
            onClick={CloseVideo}
          ></i>
        </div>
        <video
          ref={video}
          className="w-full  max-h-96 object-cover"
          autoPlay
          controls
          src="https://ronasit.com/img/home/showreel.mp4"
        ></video>
      </div>
      <div>
        <h1 className="flex items-center gap-1 text-5xl font-medium">
          <span className="flex flex-col gap-3 py-5 items-center justify-center  relative ">
            Design.
            <svg
              className=" absolute w-full bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              width="114"
              height="11"
              fill="transparent"
            >
              <g clip-path="url(#a)">
                <path
                  stroke="gray"
                  stroke-width="2"
                  d="M-9.5 6.5-.159 2l14.142 7 14.336-7 14.336 7 14.336-7 14.337 7 14.336-7L100 9l14.012-7 14.66 7 14.337-7 14.336 7 14.336-7 14.336 7 14.336-7 9.147 4.5"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h114v11H0z" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className=" flex flex-col items-center justify-center  border-b-2 border-gray-600 border-dashed dashed   pb-3">
            Development.
          </span>
          <span className="flex flex-col items-center justify-center ">
            Maintenance.
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="228"
              height="11"
              fill="none"
            >
              <g clip-path="url(#a)">
                <path
                  stroke="gray"
                  stroke-width="2"
                  d="M133 5.5q-9.5 7-19 0t-19 0-19 0-19 0-19 0-19 0-19 0-19 0-19 0 M246 5.5q-9.5 7-19 0t-19 0-19 0-19 0-19 0-19 0-19 0-19 0-19 0"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h228v11H0z" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </h1>
      </div>

      <div className="relative w-40 h-40 flex items-center justify-center ">
        <svg
          onMouseEnter={(e) => {
            const video = e.currentTarget.previousElementSibling;
            video.style.opacity = "1";
            video.play();
          }}
          className="absolute inset-0 animate-spin-slow"
          viewBox="0 0 120 120"
        >
          <path
            id="text-path"
            d="M 60, 60
         m -45, 0
         a 45,45 0 1,1 90,0
         a 45,45 0 1,1 -90,0"
            fill="transparent"
          />
          <text className="text-xs font-semibold ">
            <textPath
              href="#text-path"
              startOffset="50%"
              textAnchor="middle"
              className="tracking-widest font-normal text-circle-size  "
            >
              Watch our showreel • Watch our showreel •
            </textPath>
          </text>
        </svg>

        <video
          className="object-cover h-28 w-28 rounded-full absolute z-1 top-6 opacity-0 p-1 transition-opacity duration-300 ease-in-out"
          autoPlay
          muted
          src="https://ronasit.com/img/home/showreel.mp4"
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.style.opacity = "0";
          }}
        ></video>

        <i
          className="fa-solid fa-play fa-xl absolute top-20 cursor-pointer"
          onMouseEnter={(e) => {
            const video = e.currentTarget.previousElementSibling;
            video.style.opacity = "1";
            video.play();
          }}
          onClick={showmodel}
        ></i>
      </div>
    </div>
  );
};

export default Hero;
