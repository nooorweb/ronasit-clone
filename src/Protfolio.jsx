import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Protfolio = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 2,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top ",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    

  
    <div className="flex   gallery my-36 pt-32 ">
      <div className="flex  flex-col gap-72 pt-80  pb-80">
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-sm font-normal">Bank of America</p>
          <h3 className="text-4xl pr-36 font-medium">
            A redesign concept of the Bank of America's mobile app
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>



        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-sm font-normal">Facta</p>
          <h3 className="text-4xl pr-28 font-medium">
            An employee engagement and training web app
          </h3>
          <p className="opacity-40">web design develoment</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-sm font-normal">Self-Care</p>
          <h3 className="text-4xl pr-24 font-medium">
            A self-care app that offers a personalized selection of guides and
            mentors
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="ttext-sm font-normal">Food Delivery</p>
          <h3 className="text-4xl pr-36 font-medium">
            An on-demand food delivery App
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
      </div>

      <div className="relative max-w-md max-h-72 right  ">
        <div className="relative w-full h-full ">
          <img
            className="photo  top-0 left-0 w-full h-full object-cover z-1"
            src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-bankofamerica-light.c090f46b.webp&w=1920&q=75"
            alt="helo"
          /> 
       
          <img
            className="photo absolute top-0 left-0 w-full h-full object-cover z-3"
            src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-facta-light.f90db4b9.webp&w=1920&q=75"
            alt=""
          />
          <img
            className="photo absolute top-0 left-0 w-full h-full object-cover z-4"
            src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-selfcare-light.53e239a5.webp&w=1920&q=75"
            alt="" 
          /> 
             <img
            className="photo absolute top-0 left-0 w-full h-full object-cover z-4"
            src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-delivery-light.5946b5d8.webp&w=1920&q=75"
            alt="" 
          /> 
        </div>
      </div>
    </div>
   
  );
};

export default Protfolio;
