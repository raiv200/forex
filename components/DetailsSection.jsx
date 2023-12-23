import React from "react";

const CTAStyles = {
  container: "flex flex-col justify-center items-center ",
  box: "flex flex-col px-6 md:px-0 md:w-full items-center justify-center space-y-12 py-10 h-[400px] bg-[#f7f9fd] ",
  box__div: "flex flex-col items-center justify-center space-y-6",
  box__div__p: "font-inter text-md font-bold text-indigo-800",
  box__div__h3:
    "font-inter text-3xl text-center md:text-4xl font-semibold text-indigo-900",
  box__p:
    "text-lg md:text-xl text-center font-inter font-semibold md:w-[450px] text-[#8696ae]",
  card: "flex w-[370px] md:w-[1200px]",
};

const DetailsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row  items-center  lg:h-[300px] bg-black/80  ">
      <div className="flex flex-col px-6  space-y-12 py-10  bg-black/20  h-full w-full md:pl-10 lg:w-1/2 lg:pl-20 ">
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="font-inter text-3xl font-semibold text-white">
            Fast & reliable execution
          </h3>
          <p className="text-lg md:text-xl  font-inter font-normal md:w-[450px] text-gray-300">
            With free VPS hosting
          </p>
        </div>
        <a
          href="#"
          className="text-sm md:text-lg font-normal text-[#07f2c7] hover:underline underline-offset-4"
        >
          See VPS Details
        </a>
      </div>
      <div className="flex flex-col px-6   space-y-12 py-10  bg-black/50  h-full w-full md:pl-10  lg:w-1/2 lg:pl-20 ">
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="font-inter text-3xl font-semibold text-white">
          Transparent price history
          </h3>
          <p className="text-lg md:text-xl  font-inter font-normal md:w-[450px] text-gray-300">
          Tick-level data across all instruments
          </p>
        </div>
        <a
          href="#"
          className="text-sm md:text-lg font-normal text-[#07f2c7] hover:underline underline-offset-4"
        >
          See Price history
        </a>
      </div>
      
    </section>
  );
};

export default DetailsSection;
