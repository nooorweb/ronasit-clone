import React, { useState } from "react";
import Sidebar from "../Sidebar";
const Footer = () => {
  const [activei, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activei === index ? null : index);
  };

  let setacc = () => {
    SetHide(!hide);
  };

  const data = [
    {
      title: "Servcies for Startups",

      content: [
        "MVP development",
        "Design services",
        "App development servies",
        "CTO services",
        "Software development services",
      ],
    },

    {
      title: "Analytics",

      content: [
        "Analytics services ",
        "AI integration",
        "AI marketing soultions",
        "AI buisness integration",
      ],
    },
    {
      title: "Development",
      content: [
        "Web development",
        "Reactive Native app development",
        "Web apps ",
        "Mobile app development ",
        "IOS",
        "Android",
        "E-commerce development services",
        "Front-End development services",
        "Custom enterprise software",
        "Dedicated development team",
      ],
    },
    {
      title: "Design",
      content: [
        "Graphic design",
        "Logos",
        "Strategy and branding",
        "illustration",
        "Web",
        "Creative landing pages",
        "Concept design services",
        "Desktop",
        "Mobile app",
        "Tablet",
        "UI/UX design servies",
      ],
    },
    {
      title: "  DevOps",
      content: ["Devops Services"],
    },
    {
      title: "Featured posts",
      content: [
        "Cost of website redesign",
        "How to build a social  media website",
        "Building a chat app with React Native ",
        "Outsourcing software development for startups",
        "Music app development",
      ],
    },
    {
      title: "",
      content: [
        "How to create a mobile banking app ",
        "How long does app develoment take",
        "Building  a chat app with React Native ",
        "Job search app development",
        "How to speed up the mobile app development",
      ],
    },
  ];

  return (
    <>
      <div className="mt-32 bg-primary text-secondary">
        <p className="pb-12">Contacts</p>
        <h1 className="font-semibold text-5xl md:text-7xl ">Get In Touch </h1>

        <div className="  hidden md:grid grid-cols-4 mt-24 gap-10 pl-5 ">
          <div className="flex flex-col gap-6 footer ">
            <p className="font-semibold">Services for startups</p>
            <a href="/#"> MVP Development</a>
            <a href=""> Design Services </a>
            <a href=""> App development services </a>
            <a href="">CTO services </a>

            <a href=""> Software development services</a>
            <a href="" className="font-bold mt-5">
              Analytics
            </a>
            <a href="">Analytic servics</a>
            <a href=""> AI integration</a>
            <a href="">AI marketing soultions</a>
            <a href="">AI buisness integrations</a>
            <div className=" mt-32">
              <p className="font-semibold pb-3">Call</p>
              <a href="/#">03434546731</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 footer">
            <a href="/#" className=" font-semibold">
              Development
            </a>
            <a href="/#">Web development</a>
            <a href="/#">React Native app development</a>
            <a href="/#">Web apps</a>
            <a href="/#">Mobile app development</a>
            <a href="/#">iOS</a>
            <a href="/#">Android</a>
            <a href="/#">E-commerce development</a>
            <a href="/#">Frontend development services</a>
            <a href="/#">Backend development services</a>
            <a href="/#">Custom enterprise software</a>
            <a href="/#">Dedicated development teams</a>
            <div className=" mt-6 flex flex-col gap-2">
              <p className="font-semibold ">Write</p>
              <a href="/#">hello@ronasit.com</a>
              <a href="/#">TeleGram</a>
              <a href="/#">Whatsapp</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 footer">
            <a href="#design" className="font-semibold ">
              Design
            </a>
            <a href="#graphic-design">Graphic design</a>
            <a href="#logos">Logos</a>
            <a href="#strategy-branding">Strategy and branding</a>
            <a href="#illustration">Illustration</a>
            <a href="#web">Web</a>
            <a href="#creative-landing-pages">Creative landing pages</a>
            <a href="#concept-design">Concept design services</a>
            <a href="#desktop">Desktop</a>
            <a href="#mobile-app">Mobile app</a>
            <a href="#tablet">Tablet</a>
            <a href="#ui-ux-design">UI/UX design services</a>
            <div className=" mt-32 flex flex-col gap-2 ">
              <p className="font-semibold pb-3">Legal Address</p>
              <a href="/#">10151</a>
              <a href="/#">Ahtri 12</a>
              <a href="/#">Tallinn, Estonia</a>
            </div>
          </div>

          <div className="flex flex-col ">
            <a className="font-bold  ">DevOps</a>
            <a className="pt-4">DevOps services</a>
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-10 md:hidden h-fit">
          {data.map((d, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className=" text-2xl font-medium flex justify-between gap-30  cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{d.title}</h3>
                <i
                  className={`fas fa-chevron-${
                    activei === index ? "up" : "down"
                  }`}
                />
              </div>

              {activei === index && (
                <div>
                  <ul className="flex flex-col gap-3">
                    {d.content.map((li, liIndex) => (
                      <li className="text-footer-size pt-3" key={liIndex}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div>
            <div className="flex justify-between ">
              <div>
                <p className="text-gray-400">Call</p>
                <p className="pt-4">+372 5399 9974</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Write</p>
                <p>hello@ronasit.com</p>
                <p>Telegram</p>
                <p>Whatsapp</p>
              </div>
            </div>
            <div className="mt-16 leading-8 text-gray-400 ">
<p className="font-medium text-black" >Legal Address</p>

<p>10151</p>
<p>Ahtri 12</p>
<p>Tallinn ,Estonia</p>


            </div>
            <div className="">


            <  Sidebar/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
