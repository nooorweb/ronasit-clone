import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BigStar } from "../Svgs/index.jsx";

gsap.registerPlugin(ScrollTrigger);

const Client = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const setupAnimations = () => {
      if (mediaQuery.matches) {
        gsap.set(".left img", { opacity: 0.5 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".client",
            start: "top top",
            end: "bottom bottom",
            pin: ".left",
            scrub: true,
          },
        });

        gsap.utils.toArray(".left img").forEach((img, i) => {
          tl.to(
            img,
            {
              opacity: 1,
              duration: 1,
              onStart: () => {
                gsap.to(img, { opacity: 1, border: "3px solid #26A0F8" });
              },
              onComplete: () => {
                gsap.to(img, { opacity: 0.5, border: "none" });
              },
            },
            i * 2
          );
        });
      } else {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };

    setupAnimations();

    mediaQuery.addEventListener("change", setupAnimations);

    return () => {
      mediaQuery.removeEventListener("change", setupAnimations);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="md:px-20 px-4">
      <p className="text-4xl font-medium py-10 md:py-0">
        What clients think about our software development company:
      </p>

      <div className="flex  flex-col  md:mt-40  md:flex-row  md:gap-6  md-0 lg:gap-8 lg:px-3 md:px-1 client">
        <div className="relative   md:pt-40 lg:pt-10    ">
          <div className="flex flex-row md:flex-col   gap-10   md:gap-20 lg:gap-12  h-fit left  overflow-scroll md:overflow-hidden">
            <div className=" text-center   md:text-left w-60 md:w-44">
              <img
                className="rounded-full w-12 h-12 mx-4 "
                src="./assets/images/avt.webp"
                alt="Bob Glazebrook"
              />
              <p className="font-bold text-sm mt-4">Bob Glazebrook</p>
              <p className="text-xs">Principal, Visual Engineering inc.</p>
            </div>
            <div className=" text-center  md:text-left min-w-28 md:w-44">
              <img
                className="rounded-full w-12 h-12 mx-4"
                src="./assets/images/pic1.jpg"
                alt="Craig Barber"
              />
              <p className="font-bold text-sm mt-4">Craig Barber</p>
              <p className="text-xs">Founder, Logobly</p>
            </div>
            <div className=" text-center   md:text-left min-w-28 md:w-44">
              <img
                className="rounded-full w-12 h-12 mx-4"
                src="./assets/images/pic2.jpg"
                alt="Rivget Raut"
              />
              <p className="font-bold text-sm mt-4">Rivget Raut</p>
              <p className="text-xs">Founder, Machine E-Commerce Platform</p>
            </div>
            <div className="text-center   md:text-left min-w-28 md:w-44">
              <img
                className="rounded-full w-12 h-12 mx-4"
                src="./assets/images/pic4.jpg"
                alt="Adrian Lunga"
              />
              <p className="font-bold text-sm mt-4">Adrian Lunga</p>
              <p className="text-xs">Founder, 365daybookings</p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex h-0 md:h-full -m-30   md:flex-col  lg:gap-40 md:gap-16 md:mt-10 lg:mt-24 md:mr-5 lg:ml-20  ">
          <div className="pt-10 md:pt-0">
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
                <BigStar />
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className=" text-3xl md:text-4xl font-medium leading-tight">
              Ronas IT demonstrates an excellent understanding of user needs and
              all of their designs are creative and elegant in their simplicity.
              They’re very well thought out and have an excellent response to
              feedback. All of these qualities are why they’re our go-to user
              experience experts.
            </p>
          </div>
          <div className="hidden md:block">
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
                <BigStar />
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-3xl md:text-4xl  font-medium leading-tight">
              Fantastic service. The guys went above and beyond. They also
              suggested improvements to my app which I really appreciated - as
              apposed to doing exactly what I asked, it resulted in a better
              product. I also had a view of project progress and things that
              were done and getting done. Very effective.
            </p>
          </div>
          <div className="hidden md:block">
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
                <BigStar />
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-3xl md:text-4xl  font-medium leading-tight">
              A technically skilled team, Ronas IT goes the extra mile to
              deliver high-quality solutions. With a broad understanding of both
              the product and current technologies, they provide impactful,
              timely, and flexible support.
            </p>
          </div>
          <div className="hidden md:block">
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
                <BigStar />
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-3xl md:text-4xl font-medium leading-tight">
              The quality of their work stands out the most. They’re
              knowledgeable and provide useful feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
