import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900,
    });
  }, []);

  return (
    <div className="md:px-20 px-4">
      <div
        className="flex flex-col  lg:flex-row   mt-16  justify-between  gap-1"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-7 items-start  lg:px-10">
          <p>What We Do</p>
          <h1 className="text-4xl  font-semibold leading-1 lg:leading-normal ">
            Ronas IT is a software development company that provides
            professional IT services for entrepreneurs and companies around the
            world.
          </h1>

          <button className="py-5 px-10   text-black rounded-full border-2 border-slate-400 bg-white hover:text-white  hidden lg:block">
            View More
          </button>
        </div>
        <div className="flex flex-col gap-4 pt-8 lg:pt-14">
          <p className="lg:pl-32">
            We have been designing, developing, and maintaining apps since 2007.
          </p>
          <p className="lg:pl-32 ">
            Our goal is to create software solutions that match our clients’
            needs and expectations. Ronas IT workflow is based on analytics and
            agile methodology that help us to provide high-quality IT services
            to small businesses and startups.
          </p>
          <button className="py-5 px-10  mt-4 text-black rounded-full border-2 border-slate-400 bg-white hover:text-white  w-fit   lg:hidden">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
