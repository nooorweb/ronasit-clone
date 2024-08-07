
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BigStar } from "./Constant";

gsap.registerPlugin(ScrollTrigger);

const Client = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".left img", { opacity: 0.5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".client",
        start: "top top",
        end: "bottom bottom",
        pin: ".left",
        scrub: true,
        markers: true,
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

    return () => {
  
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <p className="text-4xl font-medium">
        What clients think about our software development company:
      </p>

      <div className="flex  pr-8  gap-16 px-8 client">
        <div className="relative pt-20">
          <div className="flex flex-col gap-8   h-fit left">
            <div className=" text-left w-44">
              <img
                className="rounded-full w-12 h-12 "
                src="./images/avt.webp"
                alt="Bob Glazebrook"
              />
              <p className="font-bold text-sm mt-4">Bob Glazebrook</p>
              <p className="text-xs">Principal, Visual Engineering inc.</p>
            </div>
            <div className=" text-left w-44">
              <img
                className="rounded-full w-12 h-12"
                src="./images/avatar-1.JPG"
                alt="Craig Barber"
              />
              <p className="font-bold text-sm mt-4">Craig Barber</p>
              <p className="text-xs">Founder, Logobly</p>
            </div>
            <div className=" text-left w-44">
              <img
                className="rounded-full w-12 h-12"
                src="./images/avatar-2.JPG"
                alt="Rivget Raut"
              />
              <p className="font-bold text-sm mt-4">Rivget Raut</p>
              <p className="text-xs">Founder, Machine E-Commerce Platform</p>
            </div>
            <div className=" text-left w-44">
              <img
                className="rounded-full w-12 h-12"
                src="./images/avatar-4.JPG"
                alt="Adrian Lunga"
              />
              <p className="font-bold text-sm mt-4">Adrian Lunga</p>
              <p className="text-xs">Founder, 365daybookings</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-40 mt-24 ml-20">
          <div>
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
              <BigStar/>
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-4xl font-medium leading-tight">
              Ronas IT demonstrates an excellent understanding of user needs and
              all of their designs are creative and elegant in their simplicity.
              They’re very well thought out and have an excellent response to
              feedback. All of these qualities are why they’re our go-to user
              experience experts.
            </p>
          </div>
          <div>
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
              <BigStar/>
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-4xl font-medium leading-tight">
            Fantastic service. The guys went above and beyond. They also suggested improvements to my app which I really appreciated - as apposed to doing exactly what I asked, it resulted in a better product. I also had a view of project progress and things that were done and getting done. Very effective.
            </p>
          </div>
          <div>
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
           <BigStar/>
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-4xl font-medium leading-tight">
            A technically skilled team, Ronas IT goes the extra mile to deliver high-quality solutions. With a broad understanding of both the product and current technologies, they provide impactful, timely, and flexible support.
            </p>
          </div>
          <div>
            <p className="flex items-center pb-8">
              <span className="flex gap-5">
              <BigStar/>
                <p className="border-l-2 text-2xl pl-5">5.0</p>
              </span>
            </p>
            <p className="text-4xl font-medium leading-tight">
            The quality of their work stands out the most. They’re knowledgeable and provide useful feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
