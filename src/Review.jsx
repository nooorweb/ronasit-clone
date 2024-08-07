import React from "react";
import { Starsmall} from "./Constant";

import { Feather } from "./Constant";
import { Clutch } from "./Constant";
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
               
            <Clutch/>
              <p className="text-xs pt-2">CHAMPION</p>

              <p className="text-sm font-light">Fall 2023</p>
            </div>
          </div>
        </div>
        <div className="    px-16     relative cursor-pointer">
          <Feather/>
          <div className="  ">
          <div className="text-center">
          <Clutch/>
          <p className="text-xs pt-2 font-medium">GLOBAL</p>
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
