import React, { useState, useEffect } from "react";
import { Logo } from "./Constant";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [press, setPress] = useState(false);

  

  const handleToggle = () => {
    // setPress(!press);
    // setDarkMode(!darkMode);
    // if (!darkMode) {
    //   document.body.style.setProperty('--font-color', '#ffffff');
    //   document.body.style.setProperty('--body-bg-color', '#03030F');
    // } else {
    //   document.body.style.setProperty('--font-color', '#101212');
    //   document.body.style.setProperty('--body-bg-color', '#ffffff');
    // }
  };

  return (
    <div
      className="sticky top-0 z-10 backdrop-blur-md"
      style={{
        backgroundColor: "var(--body-bg-color)",
        color: "var(--font-color)"
      }}
    >
      <div className="flex items-center p-3 justify-between px-8">
        <div className="logo" data-cursor-stick>
          <Logo />
        </div>
        <div className="flex">
          <ul className="flex gap-12 font-medium cursor-pointer items-center text-sm">
            <li>Service</li>
            <li>Design Project</li>
            <li>Cases</li>
            <li>About</li>
            <li>How We Work</li>
            <li>Blog</li>
          </ul>
          <div className="flex gap-10 pl-4 items-center">
            <div
              className="relative w-8 h-4 bg-black rounded-full cursor-pointer"
              onClick={handleToggle}
            >
              <div
                className={`absolute top-0.3 left-0.6 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  press ? "translate-x-4 " : ""
                }`}
              ></div>
            </div>
            <button className="py-5 px-6 bg-black text-white rounded-full text-sm font-medium">
              Estimate Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
