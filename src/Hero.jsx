import React from "react";
import { useRef } from "react";

const Hero = () => {
 
  return (
    <div className="flex items-center justify-center gap-32 flex-col  h-96 pt-56  pb-64">
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
          </span>{" "}
          <span className=" flex flex-col items-center justify-center  border-b-2 border-gray-600 border-dashed dashed   pb-3">
            Development.
          </span>
          <span className="flex flex-col items-center justify-center">
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
      <div className=" w-32 h-32 rounded-full bg-lime-300 relative ">
     
    {/* <p>asdf</p> */}
{/* <p>asd</p> */}
<div className="absolute  top-12 left-leftplay z-20 ">
<i class="fa-solid fa-play fa-2xl"  ></i>
</div>



      <video
      
        className="object-cover h-32 w-32 rounded-full absolute z-10 "
        
        controls
        src="https://ronasit.com/img/home/showreel.mp4"
      ></video>
    </div>
    </div>
  );
};

export default Hero;
