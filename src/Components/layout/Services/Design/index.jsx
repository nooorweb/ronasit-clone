import Aos from "aos";
import React, { useEffect } from "react";

import Button from "../../Button/Button";
const Design = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:px-20 px-4">
      <div
        className="flex justify-between py-15  flex-col md:flex-row lg:mt-20"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-10">
          <p>01</p>
          <h2 className=" text-services-size md:text-5xl font-medium">
            Design
          </h2>
        </div>

        <div className=" mt-10   md:mt-16 max-w-2xl bg-gre flex flex-col gap-20">
          <div className="   md:px-8 flex flex-col gap-10">
            <p className=" text-xl  md:text-2xl">
              work hard to create eye-catching and intuitive interface designs
              that provide users with an enjoyable experience.
            </p>
            <Button />
          </div>

          <div
            className="grid grid-cols-1 grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2 md:gap-0"
            data-aos="fade-up"
          >
            <div className="group flex flex-col gap-6 md:pb-28 p-5  relative ">
              <img
                className=" absolute object-cover  inset-0 w-full h-full opacity-1 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer"
                src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fwebsites-light.webp&w=1920&q=75"
                alt="Decorative Image"
              />
              <h2 className="text-3xl font-medium ">Website and Platforms</h2>
              <p className="text-sm">
                Ware ready to work on projects of any complexity and size. With
                our software development company’s profound design experience,
                we can create both one-page sites and complex admin panels with
                several dashboards.
              </p>
            </div>

            <div className="group flex flex-col gap-14 pb-28 p-5  relative">
              <img
                className="absolute inset-0 opacity-1 w-full h-full md:opacity-0   group-hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer"
                src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fmobile-apps-light.webp&w=1920&q=75"
                alt="Decorative Image"
              />
              <h2 className="text-3xl font-medium">Mobile Apps</h2>
              <p className="text-sm">
                We create interfaces that are not only good-looking, but also
                simple and easy to use. We also follow platform guidelines to
                make sure the design runs on every screen.
              </p>
            </div>

            <div className="group  flex flex-col gap-6 pb-28  p-5  relative">
              <img
                className="absolute inset-0 w-full h-full opacity-1 md:opacity-0  group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
                src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fbranding.webp&w=1920&q=75"
                alt="Decorative Image"
              />
              <h2 className="text-3xl font-medium">Strategy and Branding</h2>
              <p className="text-sm">
                We develop logos, corporate identities, user manuals, mockups,
                and souvenirs consistent with your brand’s style and mission.
              </p>
            </div>

            <div className="group flex flex-col gap-6 pb-28 p-5  relative">
              <img
                className="absolute inset-0  w-full h-full opacity-1 md:opacity-0  group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
                src="https://ronasit.com/_next/image/?url=%2Fimg%2Fhome%2Fconcept.webp&w=1920&q=75"
                alt="Decorative Image"
              />
              <h2 className="text-3xl font-medium pr-24">Design Concept</h2>
              <p className="text-sm">
                We will create a design concept that will become a solid
                foundation for the future digital product. Well-built design
                concepts help to turn awesome business ideas into attractive and
                eye-catching apps and sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
