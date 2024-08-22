import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Protfolio = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", {
        opacity: 2,
        scale: 1,
        clipPath: "ellipse(40% 0% at 50% 100%)",
      });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        duration: 2,
        stagger: 2,
        clipPath: "ellipse(100% 100% at 50% 50%)",
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="md:px-20 px-4">
      <div className="flex gallery md:my-36 md:pt-32">
        <div className="flex flex-col gap-16 md:gap-60 md:pt-80 md:pb-40">
          <div className="section flex flex-col gap-6 md:gap-7 max-w-2xl ">
            <div className=" md:hidden">
              <img
                className=" h-full w-full object-cover"
                src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-bankofamerica-light.c090f46b.webp&w=1920&q=75"
                alt="Bank of America"
              />
            </div>

            <p className="text-sm font-normal">Bank of America</p>
            <h3 className="text-4xl md:pr-32 font-medium">
              A redesign concept of the Bank of America's mobile app
            </h3>
            <p className="opacity-40">mobile design</p>
            <button className="py-5 px-10 text-secondary rounded-full border-2 border-slate-400 w-fit hover:bg-customBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              View More
            </button>
          </div>

          <div className="section flex flex-col  gap-6 md:gap-7 max-w-2xl ">
            <div className=" md:hidden">
              <img
                className=" h-full w-full object-cover"
                src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-facta-light.f90db4b9.webp&w=1920&q=75"
                alt="Employe system"
              />
            </div>
            <p className="text-sm font-normal">Facta</p>
            <h3 className="text-4xl md:pr-32  lg:pr-28 font-medium">
              An employee engagement and training web app
            </h3>
            <p className="opacity-40">web design development</p>
            <button className="py-5 px-10 text-secondary rounded-full border-2 border-slate-400 w-fit hover:bg-customBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              View More
            </button>
          </div>

          <div className="section flex flex-col gap-6 md:gap-7 max-w-2xl ">
            <div className=" md:hidden">
              <img
                className=" h-full w-full object-cover"
                src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-selfcare-light.53e239a5.webp&w=1920&q=75"
                alt="Bank of America"
              />
            </div>
            <p className="text-sm font-normal">Self-Care</p>
            <h3 className="text-4xl  md:pr-24 font-medium">
              A self-care app that offers a personalized selection of guides and
              mentors
            </h3>
            <p className="opacity-40">mobile design</p>
            <button className="py-5 px-10 text-secondary rounded-full border-2 border-slate-400 w-fit hover:bg-customBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              View More
            </button>
          </div>

          <div className="section flex flex-col gap-6 md:gap-7 max-w-2xl ">
            <div className=" md:hidden">
              <img
                className=" h-full w-full object-cover"
                src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-delivery-light.5946b5d8.webp&w=1920&q=75"
                alt="Bank of America"
              />
            </div>
            <p className="ttext-sm font-normal">Food Delivery</p>
            <h3 className="text-4xl lg:pr-36 font-medium">
              An on-demand food delivery App
            </h3>
            <p className="opacity-40">mobile design</p>
            <button className="py-5 px-10 text-secondary rounded-full border-2 border-slate-400 w-fit hover:bg-customBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              View More
            </button>
          </div>
        </div>

        <div className="relative hidden md:block max-w-md max-h-72 right ">
          <div className="relative md:w-60 lg:w-full md:min-h-40  lg:h-full">
            <img
              className="photo top-0 left-0 w-full md:h-40   lg:h-full object-cover z-1"
              src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-bankofamerica-light.c090f46b.webp&w=1920&q=75"
              alt="Bank of America"
            />
            <img
              className="photo absolute top-0 left-0 md:h-40  w-full lg:h-full  object-cover z-3"
              src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-facta-light.f90db4b9.webp&w=1920&q=75"
              alt="Facta"
            />
            <img
              className="photo absolute top-0 left-0 md:h-40  w-full lg:h-full  object-cover z-4"
              src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-selfcare-light.53e239a5.webp&w=1920&q=75"
              alt="Self-Care"
            />
            <img
              className="photo absolute top-0 left-0 md:h-40  w-full lg:h-full object-cover z-4"
              src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-delivery-light.5946b5d8.webp&w=1920&q=75"
              alt="Food Delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
