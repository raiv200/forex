import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCardStyles = {
  container:
    "flex flex-col items-center justify-bewteen   px-3 py-8 bg-white rounded-lg shadow-md md:w-1/3 px-6 h-[320px] hover:shadow-2xl hover:scale-105 transition duration-300 ease-in",
  image:
    "flex h-[60px]",
  h3: "text-2xl text-center md:text-left md:text-3xl font-inter font-semibold text-gray-900 leading-snug ",
  p: "text-md text-center font-inter font-normal text-gray-700",
};


const ServiceCard = ({ title, image, text }) => {
  return (
    <div className={ServiceCardStyles.container}>
      <div className="flex flex-col items-center space-y-4 flex-1">
        <img src={image} className={ServiceCardStyles.image} />
        <h3 className={ServiceCardStyles.h3}>{title}</h3>
        <p className={ServiceCardStyles.p}>{text}</p>
      </div>

      <div>
      <a href="#" className="text-sm font-normal text-blue-700 hover:underline underline-offset-4">Learn More</a>
      </div>
    </div>
  );
};

export default ServiceCard;
