import React, { useEffect } from "react";
import Aos from 'aos'

const Maintain = () => {
  useEffect(()=>{
Aos.init({


  duration:1000
})



  },[])
  return (
    <div className="flex  gap-32 justify-between py-15 ">
      
      <div className="flex flex-col gap-10" >
        <p >03</p>

        <h2 className="text-5xl font-medium" data-aos='fade-up'>Maintainence</h2>
      </div>

      <div className="mt-32 max-w-2xl flex flex-col gap-20 " data-aos='fade-up'>
        <div className="px-8 flex flex-col gap-10  " >
          <p className="text-2xl ">
          Constant updating, modifying, and re-assessing of software is one way to make them user-oriented and up-to-date. Through such a service, we give businesses the technological support they need.
          </p>

          <button className="py-5 px-10   text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>


        <div className=" flex mb-28">
          <div  className=" group flex flex-col gap-6 pb-40 p-5 max-w-80 relative ">

            <img className="absolute left-0 bottom-0 object-center w-full h-full opacity-0   group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer" src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fpostrelease.webp&w=1920&q=75" alt="" />
            <h2 className="text-3xl font-medium ">Post-release support</h2>
            <p className="text-sm">
            As a software development company, we help to keep projects up-to -date – from technology updates to new functionality implementation.
            </p>
          </div>
          <div  className=" group flex flex-col gap-6 pb-40 p-5 max-w-80  relative">
            <img className="absolute left-0 bottom-0 object-center w-full h-full opacity-0   group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer" src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fadministration.webp&w=1920&q=75" alt="" />
            <h2 className="text-3xl font-medium"> System Administration</h2>
            <p className="text-sm">
            Keeping your project up and running 24/7/365 is important. We make this process easy and stress-free for you.
            </p>
          </div>
        
       
        </div>
      </div>
    </div>
  );
};

export default Maintain;
