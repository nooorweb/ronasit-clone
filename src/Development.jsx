import React from "react";
import Aos from "aos";
import  { useEffect } from "react";



const Developement = () => {

  useEffect(()=>{

Aos.init({

  duration:1000
})

  },[])
  return (
    <div className="flex gap-32 justify-between py-15 ">
      <div className="flex flex-col gap-10" data-aos='fade-up'>
        <p>02</p>

        <h2 className="text-5xl font-medium">Development</h2>
      </div>

      <div className="mt-32 max-w-2xl flex flex-col gap-20 ">
        <div className="px-8 flex flex-col gap-10  "  data-aos='fade-up'>
          <p className="text-2xl ">
            When working on a project, we not only establish scalable
            architecture design using the best industry practices but also
            provide a high level of data security.
          </p>

          <button className="py-5 px-10   text-black rounded-full border-2 w-fit">
            View More
          </button>
        </div>

        <div className=" grid grid-cols-2 grid-rows-2" data-aos='fade-up'>
          
          <div className=" group flex flex-col gap-6 pb-28 p-5 col-start-1 col-end-2 row-start-1 row-end-2 relative ">
            <img
              className="absolute left-0 bottom-0 object-center w-full h-full opacity-0   group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
              src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fweb-services-light.webp&w=1920&q=75"
              alt="Decorative Image"
            />
            <h2 className="text-3xl font-medium pr-32">Web Services</h2>
            <p className="text-sm">
              With the technical solutions of our software development company,
              you can get digital products created specifically for your
              business aim. We develop landing pages, apps for automating
              business processes, and high-load platforms with protected
              confidential data.
            </p>
          </div>
          <div className=" group flex flex-col gap-6 pb-28 p-5  col-start-2 col-end-3 row-start-1 row-end-2 relative">
          <img
              className="absolute left-0 bottom-0 object-center w-full h-full opacity-0   group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
              src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fnative-light.webp&w=1920&q=75"
              alt="Decorative Image"
            />
            <h2 className="text-3xl font-medium">Native Mobile Developement</h2>
            <p className="text-sm">
              We create custom mobile apps for iOS and Android using Swift and
              Kotlin. The developed apps can be quickly released to stores
              because we follow Apple and Google guidelines.
            </p>
          </div>
          <div className="group flex flex-col gap-6  pb-28 p-5 col-start-1 col-end-2 row-start- row-end-3 relative">
          <img
              className="absolute left-0 bottom-0 object-center w-full h-full opacity-0   group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
              src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fhybrid-light.webp&w=1920&q=75"
              alt="Decorative Image"
            />
            <h2 className="text-3xl font-medium"> React Native development</h2>
            <p className="text-sm">
              We use React Native to create cross-platform apps that work on
              both iOS and Android platforms without compromising quality.
            </p>
          </div>
          <div className=" group flex flex-col  gap-6 pb-28  p-5 col-start-2 col-end-2 row-start-2 row-end-3 relative">
          <img
              className="absolute left-0 bottom-0 object-center w-full h-full opacity-0   group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
              src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fquality-light.webp&w=1920&q=75"
              alt="Decorative Image"
            />
            <h2 className="text-3xl font-medium pr-24">
              Quality Assurance(QA)
            </h2>
            <p className="text-sm">
              We run manual and automated tests to ensure your product's quality
              on all stages of development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developement;
