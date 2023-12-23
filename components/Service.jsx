import React from "react";
import ServiceCard from "./ServiceCard";

const SERVICE_DATA = [
  {
    title: "Currencies",
    image: "/currency-1.png",
    text: "Trade the world’s largest market with spreads starting from 0 pips",
  },
  {
    title: "Stocks",
    image: "/currency-2.png",
    text: "Trade stocks of the biggest names in the international stock market with low transaction costs",
  },
  {
    title: "Commodities",
    image: "/currency-3.png",
    text: "Diversify your portfolio and trade oil, natural gas and metals",
  },
];

const ServiceStyles = {
  container: "flex flex-col bg-gray-200  py-6  space-y-6 md:py-16",
  top: "flex items-center justify-center",
  top__left__div: "flex flex-col space-y-6",
  top__left__div__p: "font-inter flex-1 text-md font-bold text-indigo-800",
  top__left__div__h3:
    "font-inter text-3xl text-center md:text-5xl font-semibold text-gray-900 leading-snug",
  top__right__div:
    "w-[311px] md:w-[400px] flex items-center font-inter text-lg font-semibold text-[#8696ae]",
  bottom: "flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 md:justify-between p-6 lg:px-28",
};

const Service = () => {
  return (
    <section className={ServiceStyles.container}>
      {/* Top Part */}
      <div className={ServiceStyles.top}>
        <h3 className={ServiceStyles.top__left__div__h3}>
        Access and trade global markets
        </h3>
      </div>

      {/* Bottom Part Card Sections */}

      <div className={ServiceStyles.bottom}>
        {SERVICE_DATA.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
