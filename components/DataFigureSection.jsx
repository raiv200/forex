import React from "react";
import ServiceCard from "./ServiceCard";

const DataFigureStyles = {
  container:
    "flex flex-col bg-gray-200  py-6  space-y-6 h-full lg:py-16 lg:h-[650px]",
  top: "flex items-center justify-center",
  top__left__div: "flex flex-col space-y-6",
  top__left__div__p: "font-inter flex-1 text-md font-bold text-indigo-800",
  top__left__div__h3:
    "font-inter text-3xl text-center md:text-5xl font-semibold text-gray-900 leading-snug",
  top__right__div:
    "w-[311px] md:w-[400px] flex items-center font-inter text-lg font-semibold text-[#8696ae]",
  bottom:
    "flex flex-col lg:flex-row   lg:justify-between md:p-6 lg:px-12 lg:h-full",
};

const DataFigureSection = () => {
  return (
    <section className={DataFigureStyles.container}>
      

      {/* Bottom Part Card Sections */}

      <div className={DataFigureStyles.bottom}>
        <div className="flex  flex-col space-y-8  py-10 px-4  items-center md:px-10 lg:items-start lg:py-4 lg:w-1/2 lg:justify-center lg:px-8 h-full">
          <h3 className="text-2xl text-center  md:text-3xl lg:text-left  font-semibold text-black">
            The numbers that make up Forex Investment
          </h3>
          <p className="text-sm md:text-lg font-normal text-center lg:text-left text-black">
            From trading volume to number of active clients, we are happy to
            share with you the figures that make us one of the world’s leading
            brokers
          </p>

          <a
            href="#"
            className="text-sm font-normal text-blue-700 hover:underline underline-offset-4"
          >
            Learn More
          </a>
        </div>

        <div className="flex flex-col space-y-4  justify-center  items-center  py-10 lg:space-y-8 lg:py-4 lg:w-1/2  ">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-4xl font-semibold text-black">$3.9 trillion</p>
            <span className="text-lg font-normal text-gray-700">
              Trading volume in November 2023
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-4xl font-semibold text-black">688,245</p>
            <span className="text-lg font-normal text-gray-700">
              Active clients in November 2023
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-4xl font-semibold text-black">$1.71 billion</p>
            <span className="text-lg font-normal text-gray-700">
            Client withdrawals in Q3 2023
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-4xl font-semibold text-black">$140.8 million</p>
            <span className="text-lg font-normal text-gray-700">
            Partner rewards in Q3 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFigureSection;
