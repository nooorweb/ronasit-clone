import React from "react";

const Header = () => {

  return (

  <div className="sticky top-0 z-10  backdrop-blur-md">
    
    <div className="flex items-center p-3 justify-between px-8">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00000">
          <path fill="#000" d="M27.146 9.804c-4.31-1.507-8.62-1.635-12.025-.62a11.7 11.7 0 0 0-3 .989c-3.645 1.773-5.967 5.19-6.513 8.935l-.002-.012C4.087 11.11 7.312 3.779 12.81 2.722c2.3-.442 4.634.285 6.681 1.865-2.6-3.307-6.018-5.1-9.356-4.458C4.395 1.232 1.07 9.114 2.71 17.733c.938 4.931 3.297 9.034 6.219 11.437 3.15 3.166 7.918 4.33 12.251 2.774-6.079 5.101-13.822 5.87-17.425 1.676-1.532-1.782-2.072-4.178-1.735-6.75-1.549 3.916-1.383 7.79.838 10.375 3.82 4.446 12.271 3.4 18.876-2.337 3.337-2.899 5.564-6.44 6.458-9.808a11.84 11.84 0 0 0-.371-9.438 11.8 11.8 0 0 0-3.05-3.93c7.493 2.724 12.074 9.114 10.255 14.372-.77 2.224-2.563 3.892-4.947 4.885 4.148-.61 7.402-2.69 8.518-5.918 1.92-5.549-3.207-12.384-11.451-15.267"/>
        </svg>
      </div>
      <div className="flex">
        <ul className="flex gap-12 font-medium cursor-pointer items-center text-sm">
          <li>Service</li>
          <li>Designproject</li>
          <li>Cases</li>
          <li>About</li>
          <li>How we Work</li>
          <li>Blog</li>

   

        </ul>
        <div className="flex gap-10 pl-4 items-center">
          <p>toggle</p>
          <button className="py-5 px-6 bg-black text-white rounded-full text-sm font-medium">Estimate Project</button>
        </div>
      </div>
    </div>
  </div>


  
  );
};

export default Header;
