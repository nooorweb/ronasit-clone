import React from "react";
import { Starsmall} from "./Constant";

import { Feather } from "./Constant";
const Review = () => {
  return (
    <>
      <div className="flex gap-12 font-medium mt-56 ">
        <h2 className="text-2xl font-medium">Numbers</h2>

        <div className="  max-w-60  text-left  ml-36">
          <h2 className="text-counter-size  mb-2.5">1870</h2>
          <p className="text-2xl ">
       
            reviews<br></br> across 5 platforms
          </p>
        </div>

        <div className="  max-w-60   text-left">
          <h2 className="text-counter-size  mb-2.5">Top 50</h2>
          <p className="text-2xl  ">app development companies on</p>
          <img src="" alt="" />
        </div>
        <div className="  max-w-80    text-left ">
          <h2 className="text-counter-size  mb-2.5">
            <span></span> 4.9/5
          </h2>

          <p className="text-2xl ">average rate</p>
        </div>
      </div>

      <div className="   grid  grid-cols-cols-layout mt-20  ">
        <div className="  col-start-3 col-end-5 grid grid-cols-2 grid-rows-rows-layout  font-medium gap-10 gap-x-24 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center  ">
            <div className="border border-solid border-gray-300 hover:border-black rounded-full p-5 transition ease-in-out duration-500 hover:scale-105  img">
              <img
                className="object-cover max-w-7 transition-transform ease-in-out duration-500"
                src="../src/assets/img/upwork.png"
                alt=""
              />
            </div>

            <div>
              <p className="pb-4 flex items-center gap-4 font-normal ">
            
                <span>
                <Starsmall/>
                </span>
                4.9
              </p>
              <p>
                <span></span>1813 reviews
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center  ">
            <div className="border border-solid border-gray-300 hover:border-black rounded-full p-5 transition ease-in-out duration-500 hover:scale-105  img   cursor-pointer ">
              <img
                className="object-cover max-w-7 transition-transform ease-in-out duration-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjPq8UfN9qF5Rdnh_zCJwj41vesljz2V6GA&s"
                alt=""
              />
            </div>

            <div>
              <p className="pb-4 flex items-center gap-4 font-normal ">
          
                <span>
                <Starsmall/>
                </span>
                4.9
              </p>
              <p>27 reviews</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center  ">
            <div className="border border-solid border-gray-300 hover:border-black rounded-full p-5 transition ease-in-out duration-500 hover:scale-105  img   cursor-pointer ">
              <img
                className="object-cover max-w-7 transition-transform ease-in-out duration-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjPq8UfN9qF5Rdnh_zCJwj41vesljz2V6GA&s"
                alt=""
              />
            </div>

            <div>
              <p className="pb-4 flex items-center gap-4 font-normal ">
           
                <span>
                <Starsmall/>
                </span>
                4.9
              </p>
              <p>27 reviews</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center  ">
            <div className="border border-solid border-gray-300 hover:border-black rounded-full p-5 transition ease-in-out duration-500 hover:scale-105  img cursor-pointer ">
              <img
                className="object-cover max-w-7 transition-transform ease-in-out duration-500"
                src="../src/assets/img/upwork.png"
                alt=""
              />
            </div>

            <div>
              <p className="pb-4 flex items-center gap-4 font-normal ">
               
                <span>
                <Starsmall/>
                </span>
                4.9
              </p>
              <p> 9 reviews</p>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center  ">
            <div className="border border-solid border-gray-300 hover:border-black rounded-full p-5 transition ease-in-out duration-500 hover:scale-105  img cursor-pointer ">
              <img
                className="object-cover max-w-7 transition-transform ease-in-out duration-500"
                src="../src/assets/img/goggle.png"
                alt=""
              />
            </div>

            <div>
              <p className="pb-4 flex items-center gap-4 font-normal ">
             
                <span>
                <Starsmall/>
                </span>
                5.0
              </p>
              <p>13 reviews</p>
            </div>
            
          </div>

       
        </div>
      </div>

      <div className="flex   font-medium px-16  justify-end gap-12 mt-16 py-16   ">

        <div className="    px-16   relative cursor-pointer " >

          <Feather/>
         
          <div className="  ">

            <div className="text-center  ">
               
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="24"
                fill="none"
              >
                <path
                  fill="#03030F"
                  d="M25.833.192h-4.222v23.119h4.222zM39.866 16.305c0 3.616-3.307 3.887-4.258 3.887-2.356 0-2.945-2.124-2.945-3.39V7.898H29.31v8.904c0 2.215.68 4.068 1.948 5.334 1.133 1.084 2.719 1.672 4.576 1.672 1.45 0 2.628-.452 4.032-1.266v.633h3.85V7.898h-3.85zM51.548 2.678h-4.23v5.406h-2.36v2.973h2.36V23.31h4.23V11.057h2.85V8.084h-2.85zM66.805 18.845a4.65 4.65 0 0 1-3.197 1.122c-2.702 0-4.728-1.93-4.728-4.532 0-2.648 1.936-4.443 4.728-4.443 1.17 0 2.341.404 3.241 1.121l.586.494 2.611-2.513-.675-.583c-1.576-1.347-3.647-2.11-5.808-2.11-4.863 0-8.42 3.366-8.42 8.034 0 4.667 3.647 8.122 8.42 8.122a8.7 8.7 0 0 0 5.853-2.109l.63-.583-2.656-2.514zM84.046 9.476c-1.129-1.082-2.755-1.668-4.606-1.668-1.445 0-2.981.45-4.065 1.262V.192h-3.839v23.119h3.84v-8.022c0-3.605 3.07-3.876 4.018-3.876 2.304 0 2.71 2.118 2.71 3.38v8.518h3.839v-8.518c-.045-2.253-.587-4.1-1.897-5.317"
                />

                <path
                  fill="#03030F"
                  d="M63.463 18.338c1.577 0 2.856-1.224 2.856-2.735s-1.279-2.734-2.856-2.734c-1.578 0-2.857 1.224-2.857 2.735s1.28 2.734 2.857 2.734M16.955 17.943c-1.492 1.444-3.527 2.3-5.652 2.255-4.386 0-7.55-3.292-7.55-7.803 0-4.51 3.164-7.849 7.55-7.849 2.125 0 4.16.812 5.606 2.256l.588.586 2.623-2.526-.588-.587C17.362 2.11 14.378.937 11.258.937 4.838.938 0 5.855 0 12.396c0 6.54 4.838 11.412 11.258 11.412 3.12 0 6.104-1.173 8.274-3.338l.588-.586-2.578-2.571zM106.472 11.376c.439-2.322 2.461-3.93 5.27"
                />
              </svg>
              <p className="text-xs pt-2">CHAMPION</p>

              <p className="text-sm font-light">Fall 2023</p>
            </div>
          </div>
        </div>
        <div className="    px-16     relative cursor-pointer">
          <Feather/>
          <div className="  ">
          <div className="text-center">
      
          <p className="text-xs pt-2">CHAMPION</p>
          <p className="text-sm font-light">Fall 2024</p>
        </div>
          </div>
        </div>
        <div className="    px-12    relative  cursor-pointer">
        <Feather/>
       
          <div className="text-center">
          <img src="../src/assets/img/award.png " width={120}></img>

          <p className="text-xs pt-2">HONORABLE MENTION</p>
          <p className="text-sm font-light">Winter 2024</p>
        </div>
        
        </div>

     
   
      </div>
    </>
  );
};

export default Review;
