// MagneticButton.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import useButtonEffect from '../Constants/BtnEffect';

const Button = () => {
    const buttonRef = useRef(null);

    useButtonEffect(buttonRef)

 
    return (
      <button
        ref={buttonRef}
        className="py-5 px-10  font-medium  text-secondary rounded-full border-b   border-slate-400 w-fit  duration-800 ease-in-out hover:bg-customBlue hover:text-white   "
      >
        View More
      </button>
    );
  };
  
export default Button;
