import Image from "next/image";
import React, { useState } from "react";
import MobileNavigation from "./MobileNavigation";

const NavStyles = {
  navContainer:
    "sticky top-0 z-40 flex md:items-center md:justify-between  lg:space-x-16 md:space-x-1 px-2 py-4 md:px-6 md:py-4 lg:px-20  bg-black w-full",
  logoContainer: "flex tems-center justify-between md:justify-start space-x-16   px-2 ",
  linkContainer:
    "hidden lg:flex lg:items-center lg:justify-between lg:space-x-6 ",
  link: "text-md font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in",
  btn1: "btn text-sm md:text-lg text-black bg-[#07f2c7] hover:bg-[#07f2c7]/80 font-semibold  px-3 py-2 md:px-8 md:py-2",
  btn2: "btn text-white bg-transparent border-2 border-[#07f2c7] font-semibold hover:bg-[#07f2c7]/20 px-4 py-1 md:px-8 md:py-2",
};

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <nav className={NavStyles.navContainer}>
      <div className="hidden lg:flex tems-center justify-between md:justify-start space-x-16   px-2">
        {/* Logo */}

        <div className="flex items-end md:items-center  space-x-2 ">
          <img
            src="/ForexLogo.svg"
            className="h-[40px] w-[40px] md:w-[50px] md:h-[50px]"
          />
          <p className=" text-sm md:text-xl w-[100px] md:w-[120px] font-semibold text-white leading-tight ">
            Forex Investment
          </p>
        </div>

        

        {/* Links */}
        <div className={NavStyles.linkContainer}>
          <p className={NavStyles.link}>About</p>
          <p className={NavStyles.link}>Trading</p>
          <p className={NavStyles.link}>Platform</p>
          <p className={NavStyles.link}>Tools</p>
          <p className={NavStyles.link}>Partner</p>
          <p className={NavStyles.link}>Help</p>
        </div>
      </div>

      {/* Call To Action Button */}

      <div className="hidden md:flex space-x-4">
        <button className={`${NavStyles.btn1} hidden lg:flex`}>Register</button>
        <button className={`${NavStyles.btn2} hidden lg:flex`}>Sign in</button>
      </div>

      <div className="flex items-center justify-between w-full  px-2 lg:hidden ">
        {/* Logo */}

        <div className="flex items-end md:items-center  space-x-2 ">
          <img
            src="/ForexLogo.svg"
            className="h-[40px] w-[40px] md:w-[50px] md:h-[50px]"
          />
          <p className=" text-sm md:text-xl w-[100px] md:w-[120px] font-semibold text-white leading-tight ">
            Forex Investment
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-end w-full  lg:hidden">
          <button className={`${NavStyles.btn1} hidden md:flex`}>Register</button>
          <button className={`${NavStyles.btn2} hidden md:flex`}>Sign in</button>
          <div
            onClick={toggleMobileNav}
            className=" flex items-center text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </div>
        </div>

        {isMobileNavOpen && (
          <MobileNavigation
            isOpen={isMobileNavOpen}
            onClose={toggleMobileNav}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
