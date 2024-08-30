import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

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
        className="flex flex-col  lg:flex-row   mt-32  justify-between  gap-1"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-7 items-start  lg:px-5">
          <p>What We Do</p>
          <h1 className="text-4xl  font-semibold leading-1 lg:leading-normal ">
            Ronas IT is a software development company that provides
            professional IT services for entrepreneurs and companies around the
            world.
          </h1>
          <div className="hidden lg:block">
            <Button />
          </div>

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
          <div className="lg:hidden">
            <Button />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
