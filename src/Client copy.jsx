
import Svgs from "./Svgs";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Client = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
          gsap.set("left)", { opacity: 1, scale: 0.5 });
    
          const animation = gsap.to("left)", {
            opacity: 1,
            scale: 1,
            duration: 2,
            stagger: 2,
          });
    
          ScrollTrigger.create({
            trigger: "clinent",
            start: "top top ",
            end: "bottom bottom",
            pin: "left",
            animation: animation,
            scrub: true,
            markers: true,
          });
        });
        return () => ctx.revert();
      }, []);

    return (
        <div>
            <p className="text-4xl font-medium ">
                What clients think about our software development company:
            </p>

            <div className="flex gap-32 pr-8 bg-green-400 py-12 client ">
                <div className="flex flex-col gap-32 bg-gray-500 left ">
                    <div className="bg-blue-500 text-left w-44">
                        <img
                            className="rounded-full w-12 h-12"
                            src="./img/avt.WEBP"
                        ></img>

                        <p className="font-bold text-sm mt-4">Bob Glazebrook</p>
                        <p className="text-xs "> Principal,Visual Engineering inc</p>

                    </div>
                    <div className="bg-blue-500 text-left w-44">
                        <img
                            className="rounded-full w-12 h-12"
                            src="./img/avatar-1.JPG"
                        ></img>

                        <p className="font-bold text-sm mt-4">Craig Barber</p>
                        <p className="text-xs ">Founder, Logobly</p>

                    </div>  <div className="bg-blue-500 text-left w-44">
                        <img
                            className="rounded-full w-12 h-12"
                            src="./img/avatar-2.JPG"
                        ></img>

                        <p className="font-bold text-sm mt-4">Rivget Raut</p>
                        <p className="text-xs "> Founder, Machine E-Commerce Platform</p>

                    </div>  <div className="bg-blue-500 text-left w-44">
                        <img
                            className="rounded-full w-12 h-12"
                            src="./img/avatar-4.JPG"
                        ></img>

                        <p className="font-bold text-sm mt-4">Adrian Lunga</p>
                        <p className="text-xs "> Founder, 365daybookings</p>

                    </div>
                
                </div>
                <div className="flex flex-col gap-40">
                <div>
                    <p className="flex items-center  pb-8">
                   
                        <span className=" flex gap-5 "> <Svgs/><p className="border-l-2 text-2xl pl-5"> 5.0</p></span>
                    </p>

                    <p className="text-4xl font-medium leading-tight ">
                        Ronas IT demonstrates an excellent understanding of user needs and
                        all of their designs are creative and elegant in their simplicity.
                        They’re very well thought out and have an excellent response to
                        feedback. All of these qualities are why they’re our go-to user
                        experience experts.
                    </p>
                </div>
                <div>
                    <p className="flex items-center  pb-8">
                   
                        <span className=" flex gap-5 "> <Svgs/><p className="border-l-2 text-2xl pl-5"> 5.0</p></span>
                    </p>

                    <p className="text-4xl font-medium leading-tight ">
                        Ronas IT demonstrates an excellent understanding of user needs and
                        all of their designs are creative and elegant in their simplicity.
                        They’re very well thought out and have an excellent response to
                        feedback. All of these qualities are why they’re our go-to user
                        experience experts.
                    </p>
                </div>
                <div>
                    <p className="flex items-center  pb-8">
                   
                        <span className=" flex gap-5 "> <Svgs/><p className="border-l-2 text-2xl pl-5"> 5.0</p></span>
                    </p>

                    <p className="text-4xl font-medium leading-tight ">
                        Ronas IT demonstrates an excellent understanding of user needs and
                        all of their designs are creative and elegant in their simplicity.
                        They’re very well thought out and have an excellent response to
                        feedback. All of these qualities are why they’re our go-to user
                        experience experts.
                    </p>
                </div>
                <div>
                    <p className="flex items-center  pb-8">
                   
                        <span className=" flex gap-5 "> <Svgs/><p className="border-l-2 text-2xl pl-5"> 5.0</p></span>
                    </p>

                    <p className="text-4xl font-medium leading-tight ">
                        Ronas IT demonstrates an excellent understanding of user needs and
                        all of their designs are creative and elegant in their simplicity.
                        They’re very well thought out and have an excellent response to
                        feedback. All of these qualities are why they’re our go-to user
                        experience experts.
                    </p>
                </div>
                
                </div>
                
             
            </div>
        </div>
    );
};

export default Client;
