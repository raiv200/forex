import Image from "next/image";
import React from "react";

const HeroStyles = {
  container: "flex items-center  w-full h-[400px] md:h-[700px]   bg-forex-mobile   bg-no-repeat bg-cover lg:items-start lg:min-h-screen  lg:bg-forex-web lg:bg-no-repeat lg:bg-cover",
  left: "flex space-y-16  lg:space-y-32 flex-col  p-4 md:p-20 lg:p-28 w-full ",
  header:
    "flex  w-full  space-y-10 flex-col justify-center md:items-center lg:items-start lg:justify-start lg:w-[540px]",
  header__h1:
    " text-3xl  md:text-5xl text-center lg:text-left lg:text-6xl font-inter   lg:px-0 font-semibold text-white lg:leading-tight animate-sliding-up transition duration-300 ease-in ",
  header__p:
    "text-sm text-center lg:text-left lg:text-lg justify-center  lg:justify-start  lg:w-[450px]  lg:px-0 font-inter font-medium text-white lg:text-gray-400 animate-sliding-up transition duration-300 ease-in",
  header__cta:
    "flex flex-col space-y-4 md:space-y-0  md:flex-row items-center justify-center  md:justify-start md:space-x-6 animate-sliding-up   lg:px-0 transition duration-300 ease-in",
  header__btn1:
    "btn w-full md:w-[190px] text-sm lg:text-lg text-black bg-[#07f2c7] hover:bg-[#07f2c7]/80 font-semibold  px-3 py-3 lg:px-8 lg:py-3",
  header__btn2:
    "btn w-full md:w-[190px] text-sm lg:text-lg text-white bg-transparent border-2 border-[#07f2c7] font-semibold hover:bg-[#07f2c7]/20 px-3 py-3 lg:px-8 lg:py-3",
  brands:
    "flex flex-col space-y-2  lg:space-y-6 animate-sliding-up transition duration-300 ease-in ",
  brands__p:
    "text-md lg:text-lg text-center lg:text-left font-semibold text-[#8696ae] px-4 lg:px-0 font-inter",
  brands__box:
    "flex flex-col justify-center lg:justify-start items-center lg:flex-row space-y-4 px-4 py-6 lg:space-y-0 lg:space-x-16 ",
  right:
    "hidden lg:flex absolute top-44 right-24 h-full animate-sliding-right transition duration-300 ease-in",
};

const HeroSection = () => {
  return (
    <section className={HeroStyles.container}>
      {/* Left Part */}
      <div className={HeroStyles.left}>
        {/* Hero Heading and CTA  */}
        <div className={HeroStyles.header}>
          <h1 className={HeroStyles.header__h1}>
            Online trading with better-than-market conditions
          </h1>
          <p className={HeroStyles.header__p}>
          Trade across multiple markets with the most stable and reliable pricing in the industry.
          </p>
          <div className={HeroStyles.header__cta}>
            <button className={HeroStyles.header__btn1}>Register</button>
            <button className={HeroStyles.header__btn2}>Try Free Demo</button>
          </div>
        </div>

        
      </div>

     
    </section>
  );
};

export default HeroSection;
