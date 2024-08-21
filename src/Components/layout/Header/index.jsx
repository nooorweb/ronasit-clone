import { useState, useEffect, useRef } from "react";
import { Logo } from "../Svgs/index.jsx";
import "../Header/head.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGSAP } from "@gsap/react";

const Header = () => {









  const [visible, setVisible] = useState(false);

  const menu = useRef(null);



  const showMenu = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible) {
      menu.current.style.display = "block";
    } else {
      menu.current.style.display = "none";
    }
  }, [visible]); // Update the dependency array to listen for `visible`


  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-10  backdrop-blur-md">
      <div className="flex items-center p-3 justify-between px-8">
        <div className="logo" data-cursor-stick>
          <Logo />
        </div>

        <div className="flex abovediv">
          <ul className=" hidden lg:flex gap-8 font-medium cursor-pointer items-center text-sm ">
            <li className=" group py-5">
              <a href="#" className="block">
                Services
              </a>

              <div className="absolute left-0 top-full z-0 transform translate-y-[-5rem] transition-all duration-700 ease-in-out w-fit opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto bg-primary px-20">
                <div className="flex gap-8 flex-col p-4 w-full pl-20">
                  <button className="bg-primary w-fit text-secondary border-2 p-4 rounded-full text-sm px-11">
                    All Services
                  </button>

                  <div className="grid grid-cols-4 gap-2 ">
                    <div className="flex flex-col gap-6">
                      <p className="font-medium text-xl">
                        Services for startups
                      </p>
                      <a href="/#">MVP Development</a>
                      <a href="#">Design Services</a>
                      <a href="#">App development services</a>
                      <a href="#">CTO services</a>
                      <a href="#">Software development services</a>
                      <a href="#" className="font-bold mt-5">
                        Analytics
                      </a>
                      <a href="#">Analytic services</a>
                      <div className="mt-32">
                        <p className="font-semibold pb-3">Call</p>
                        <a href="/#">03434546731</a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <p className="font-medium text-xl">Development</p>
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
                      <div className="mt-6">
                        <p className="font-semibold">Write</p>
                        <a href="/#">hello@ronasit.com</a>
                        <a href="/#">TeleGram</a>
                        <a href="/#">WhatsApp</a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <p className="font-medium text-xl">Design</p>
                      <a href="#graphic-design">Graphic design</a>
                      <a href="#logos">Logos</a>
                      <a href="#strategy-branding">Strategy and branding</a>
                      <a href="#illustration">Illustration</a>
                      <a href="#web">Web</a>
                      <a href="#creative-landing-pages">
                        Creative landing pages
                      </a>
                      <a href="#concept-design">Concept design services</a>
                      <a href="#desktop">Desktop</a>
                      <a href="#mobile-app">Mobile app</a>
                      <a href="#tablet">Tablet</a>
                      <a href="#ui-ux-design">UI/UX design services</a>
                      <div className="mt-32">
                        <p className="font-semibold pb-3">Legal Address</p>
                        <a href="/#">10151</a>
                        <a href="/#">Ahtri 12</a>
                        <a href="/#">Tallinn, Estonia</a>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-medium text-xl">DevOps</p>
                      <a href="#" className="pt-4">
                        DevOps services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Design Projects</a>
            </li>
            <li>
              <a href="#">Cases</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How We Work</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <div className="flex gap-10 pl-4 items-center">
            <div
              className="relative w-6 h-darkheight bg-secondary  rounded-full cursor-pointer hidden lg:block"
              onClick={handleToggle}
            >
              <div
                className={`absolute top-0.5 left-3 w-3 h-3 bg-primary rounded-full shadow-md transform transition-transform ${
                  darkMode ? "-translate-x-3" : "translate-x-0"
                }`}
              ></div>
            </div>
            <button
              className={`py-5 px-6 bg-secondary text-primary rounded-full text-sm font-medium hover:bg-customBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer`}
            >
              Estimate Project
            </button>



            <p className="text-2xl cursor-pointer lg:hidden" onClick={showMenu}>
        {visible ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>} 
      </p>
          </div>
        </div>
      </div>

      {/* ====HUMBERGAR Menu Section-===== */}
      <div
        className="hidden lg:hidden fixed  inset-0 -z-10     "   ref={menu}   datatype="fade-up">
      
        <div className="flex over-flow-scroll flex-col justify-center md:flex-row md:gap-40  md:py-20 bg-primary pt-20 "  >
          <div>
            <ul className="flex flex-col gap-5 font-medium text-2xl px-4 md:px-10 ">
              <p className="text-gray-500 text-sm font-normal">Menu</p>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Design Projects</a>
              </li>
              <li>
                <a>Cases</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>How we Work</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 mt-12 px-4">
            <p className="text-gray-500 text-sm">Get in touch </p>
            <h1 className="text-xl">hello@ronasit.com</h1>

            <p className="text-gray-500">UI Theme</p>

            <div>Dark</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
