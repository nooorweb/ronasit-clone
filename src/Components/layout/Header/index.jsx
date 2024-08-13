import { useState, useEffect } from "react";
import { Logo } from "../Svgs/index.jsx";
const Header = () => {
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
    <div className="sticky top-0 z-10 backdrop-blur-md">
      <div className="flex items-center p-3 justify-between px-8">
        <div className="logo" data-cursor-stick>
          <Logo />
        </div>
        <div className="flex">
          <ul className="flex gap-12 font-medium cursor-pointer items-center text-sm">
            <li>
              <a href="#">Services</a>
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
              className="relative w-8 h-4 bg-secondary rounded-full cursor-pointer"
              onClick={handleToggle}
            >
              <div
                className={`absolute top-0.3 left-0.6 w-4 h-4 bg-primary rounded-full shadow-md transform transition-transform ${
                  darkMode ? "translate-x-4 " : ""
                }`}
              ></div>
            </div>
            <button
              className={`py-5 px-6 bg-secondary text-primary rounded-full text-sm font-medium $darkmode `}
            >
              Estimate Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
