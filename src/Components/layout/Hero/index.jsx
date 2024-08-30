import React, { useContext, useRef, useState } from "react";
import { AuthContext, AuthProvider } from "../Context";
import AnimatedCircle from "../Svgs/AnimatedCircle";


const Hero = () => {
  const { name, count, setCount } = useContext(AuthContext);
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
    }
  };
  return (
    <div className="flex items-center justify-center gap-16 flex-col h-96 pt-52 pb-60 realtive">
      <div
        className="absolute w-4/6 max-h-96 rounded-md   bg-customBlue top-28 z-10 hidden"
        ref={videobox}
      >
        <div className="w-10 h-10 bg-primary border-2  border-customBlue rounded-full flex justify-center items-center absolute right-2 top-2 cursor-pointer z-30">
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



      <div className="">

        <h1 className="flex items-center justify-start md:justify-center gap-7 md:gap-1 text-4xl lg:text-heading-size font-medium flex-wrap cursor-pointer px-4 ">
          <span className="relative flex flex-col items-center justify-center">
            Design.
            <span
              className="absolute inset-x-0 -bottom-3 md:-bottom-7 h-[11px] bg-current opacity-20 transition duration-300 hover:opacity-100"
              style={{

                mask: 'url("/")',
                WebkitMask: 'url("https://ronasit.com/_next/static/media/underline-1.bd2f1d52.svg")',
              }}
            ></span>
          </span>
          <span className="relative flex flex-col items-center justify-center ">
            Development.
            <span
              className="absolute inset-x-0 -bottom-3 md:-bottom-7 h-[11px] bg-current opacity-20 transition duration-300 hover:opacity-100"
              style={{
                mask: 'url("/")',
                WebkitMask: 'url("https://ronasit.com/_next/static/media/underline-2.0eafa3f9.svg")',
              }}
            ></span>
          </span>
          <span className="relative flex flex-col items-center justify-center">
            Maintenance.
            <span
              className="absolute inset-x-0 -bottom-3 md:-bottom-7 h-[11px] bg-current opacity-20 transition duration-300 hover:opacity-100"
              style={{
                mask: 'url("/")',
                WebkitMask: 'url("https://ronasit.com/_next/static/media/underline-3.cf6fc523.svg")',
              }}
            ></span>
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

            className="text-primary"
            id="text-path"
            d="M 60, 60
         m -45, 0
         a 45,45 0 1,1 90,0
         a 45,45 0 1,1 -90,0"
            fill="transparent"
          />

          <text className="text-xs font-semibold   fill-current  " >
            <textPath
              href="#text-path"
              startOffset="50%"
              fill="fill-primary"
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
      <div className=" w-30 h-30 absolute right-5 bottom-7 lg:right-12">   <AnimatedCircle /> </div>

    </div>
  );
};

export default Hero;
