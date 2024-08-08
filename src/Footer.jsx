import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-32">
        <p className="pb-12">Contacts</p>
        <h1 className="font-semibold text-7xl">Get In Touch </h1>

        <div className="  grid grid-cols-4 mt-24 gap-10 pl-5">
      
          <div className="flex flex-col gap-6 footer">
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
              <a href="/#" >10151</a>
              <a href="/#">Ahtri 12</a>
              <a href="/#">Tallinn, Estonia</a>
            </div>
          </div>

          <div className="flex flex-col ">
            <a className="font-bold  ">DevOps</a>
            <a className="pt-4">DevOps services</a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
