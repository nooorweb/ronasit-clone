import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:px-20 px-4">
      <div className="flex  flex-col lg:flex-row  justify-between pt-20 pb-20  lg:px-7">
        <p className="lg:pr-36 text-service-size" data-aos="fade-up">
          You may need our services if you want to:
        </p>

        <div className="flex max-w-full   flex-col gap-12 lg:gap-5  justify-between  lg:w-9/12 ">
          <div
            className="flex  gap-4 lg:gap-12      items-center "
            data-aos="fade-up"
          >
            <i class="fa-solid fa-lightbulb text-6xl text-blue-500 pb-10"></i>
            <p className="text-3xl font-medium lg:font-semibold py-5 pl-4">
              Create an MVP to attract investors and test your business idea
            </p>
          </div>
          <div
            className="flex gap-7 lg:gap-12   text-left    items-center"
            data-aos="fade-up"
          >
            <i class="fa-regular fa-building text-6xl text-blue-500 pb-1"></i>
            <p className="text-3xl font-medium lg:font-semibold text-left   py-6  pl-0 ">
              Automate the internal processes of your business
            </p>
          </div>

          <div
            className="flex  gap-4 lg:gap-12    text-left   justify-between items-center pb-4"
            data-aos="fade-up"
          >
            <i className="fa-solid fa-mobile  text-6xl text-blue-500 pb-16"></i>
            <p className="text-3xl font-medium lg:font-semibold  py-5 text-left pl-4">
              Create a web or mobile app to attract new customers and make your
              service more convenient for them
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Service;
