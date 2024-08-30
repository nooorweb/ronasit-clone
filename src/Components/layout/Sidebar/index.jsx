import React, { useRef } from "react";
import { Facebook, Insta } from "../Svgs";
import useButtonEffect from "../Constants/BtnEffect";

const Slinks = [
  { iconClass: "fa-brands fa-dribbble fa-lg" },
  { iconClass: "fa-brands fa-behance fa-lg" },
  { iconClass: "fa-brands fa-linkedin-in fa-lg" },
];

const Sidebar = () => {
  const Button = useRef(null)
  useButtonEffect(Button)


  return (
    <div>
      <div className="md:fixed left-7 md:z-40 flex md:flex-col gap-4 justify-center md:gap-2  bottom-10 md:opacity-1 mt-10">
        <button ref={Button} className=" bg-secondary w-9 h-9 rounded-full flex justify-center items-center hover:bg-customBlue">
          <a href="/#">
            <Insta />
          </a>
        </button>
        <button ref={Button} className=" bg-secondary w-9 h-9 rounded-full flex justify-center items-center hover:bg-customBlue">
          <a href="/#">
            <Facebook />
          </a>
        </button>

        {Slinks.map((link, index) => (
          <button ref={Button}
            key={index}
            className="bg-secondary text-primary w-9 h-9 rounded-full flex justify-center items-center hover:bg-customBlue hover:text-white "
          >
            <a href="/#">
              <i className={link.iconClass}></i>
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
