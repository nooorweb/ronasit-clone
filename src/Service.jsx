import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

import { Book,Mobile,Bulb } from "./Constant";


const Service = () => {

useEffect(()=>{

AOS.init({
duration:1000

})

},[])
  
  return (
    <>
      <div className="flex   justify-between pt-20 pb-20 "  >
        <p className="pr-36 text-2xl "  data-aos='fade-up' >
          You may need our services if you want to:
        </p>

        <div className="flex    flex-col gap-8 justify-between  w-9/12 ">
          <div className="flex gap-16     justify-between items-start "  data-aos='fade-up'>
         <Bulb/>
            <p className="text-3xl font-semibold  py-5 pl-4">
              Create an MVP to attract investors and test your business idea
            </p>
          </div>
          <div className="flex gap-16    text-left   justify-between items-start"  data-aos='fade-up'>
        <Book/>
            <p className="text-3xl font-semibold text-left justify-between  py-6  pl-0 ">
              Automate the internal processes of your business
            </p>
          </div>

          <div className="flex    gap-16   text-left   justify-between items-start pt-4"  data-aos='fade-up'>
        <Mobile/>
            <p className="text-3xl font-semibold   py-5 text-left pl-4">
              Create a web or mobile app to attract new customers and make your
              service more convenient for them
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Service;
