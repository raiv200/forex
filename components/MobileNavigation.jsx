import Image from "next/image";
import React from "react";

const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 ${
        isOpen ? "block " : "hidden"
      } transition ease-in duration-300`}
    >
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 opacity-40  ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-full bg-black z-50 transform transition ease-in duration-500   ${
          isOpen ? "translate-x-0 animate-slideInNav" : "-translate-x-full "
        }`}
      >
        <aside
          className={`transform top-0 left-0 w-full bg-black/95 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 p-4 ${
            isOpen
              ? "translate-x-0 animate-slideInNav"
              : "-translate-x-full animate-slideOutNav"
          }`}
        >
          <div onClick={onClose} className={`absolute z-100 top-6 right-2 text-white`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          
          <div className="flex items-end md:items-center space-x-2 ">
          <img src="/ForexLogo.svg" className="h-[40px] w-[40px] md:w-[50px] md:h-[50px]" />
          <p className=" text-sm md:text-xl w-[100px] md:w-[120px] font-semibold text-white leading-tight ">
            Forex Investment
          </p>
        </div>
        <div className="flex flex-col items-start space-y-3 mt-10">
          <p className="text-lg font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in">About</p>
          <p className="text-lg font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in">Trading</p>
          <p className="text-lg font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in">Platform</p>
          <p className="text-lg font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in">Tools</p>
          <p className="text-lg font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in">Partner</p>
          <p className="text-lg font-inter font-normal text-white py-1 px-3 hover:underline hover:underline-offset-4 decoration-[#07f2c7] cursor-pointer transition duration-300 ease-in">Help</p>
        </div>
        </aside>
      </div>
    </div>
  );
};

export default MobileNavigation;

