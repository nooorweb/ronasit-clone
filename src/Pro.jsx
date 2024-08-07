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
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
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
    <div className="flex gap-20 bg-green-500 gallery">
      <div className="flex bg-red-300 flex-col gap-72">
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-xl">Bank of America</p>
          <h3 className="text-p-size pr-52 font-medium">
            A redesign concept of the Bank of America's mobile app
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-xl">Facta</p>
          <h3 className="text-p-size pr-52 font-medium">
            An employee engagement and training web app
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-xl">Self-Care</p>
          <h3 className="text-p-size pr-52 font-medium">
            A self-care app that offers a personalized selection of guides and
            mentors
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="section flex flex-col gap-7 max-w-2xl pr-50">
          <p className="text-xl">Food Delivery</p>
          <h3 className="text-p-size pr-52 font-medium">
            An on-demand food Delivery App
          </h3>
          <p className="opacity-40">mobile design</p>
          <button className="py-5 px-10 text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
      </div>


      <div className="right max-w-md max-h-72 relative">

  

     
      <div className="photo max-w-md max-h-72 absoulte top-0  left-0 ">
          <img
            className="  w-full h-full object-cover"
         src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fquality-light.webp&w=1920&q=75"
          />
        </div>
       
        <div className="photo max-w-md max-h-72 absoulte top-0  left-0 ">
          <img
            className="  w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1722343655851-c996945db672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
            alt="Bank of America"
          />
        </div>
        <div className="photo max-w-md max-h-72  absoulte top-0  left-0">
          <img
            className=" w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1722365872243-39372c5b7cfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
            alt="Bank of America"
          />
        </div>
        <div className="photo max-w-md max-h-72  absoulte top-0  left-0">
          <img
            className="  w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1722343655851-c996945db672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
            alt="Bank of America"
          />
        </div>
      </div>
            
      </div>
 
  );
};

export default Protfolio;
