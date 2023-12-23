import React from "react";


const PricingStyles = {
  container: "flex flex-col justify-center items-center md:h-[500px]  bg-black/95",
  box: "flex flex-col px-6 md:px-0 md:w-full items-center space-y-12 py-16 ",
  box__div: "flex flex-col items-center justify-center space-y-6",
  box__div__p: "font-inter text-md font-bold text-indigo-800",
  box__div__h3:
    "font-inter text-3xl text-center md:text-5xl font-semibold text-white",
  box__p:
    "text-lg md:text-xl text-center font-inter font-medium md:w-[600px] text-gray-400",
  card: "flex w-[370px] md:w-[1200px]",
  brands:
    "flex flex-col items-center space-y-2  md:space-y-6 animate-sliding-up transition duration-300 ease-in ",
  brands__p:
    "text-md md:text-lg text-center  font-semibold hover:underline underline-offset-2 text-[#07f2c7] px-4 md:px-0 font-inter",
  brands__box:
    "flex flex-col justify-center md:justify-start items-center md:flex-row space-y-4 px-4 py-6 md:space-y-0 md:space-x-8 ",
};

const Pricing = () => {
  return (
    <section className={PricingStyles.container}>
      {/* Pricing Text */}

      <div className={PricingStyles.box}>
        <div className={PricingStyles.box__div}>
          <h3 className={PricingStyles.box__div__h3}>
            Instant withdrawals, 24/7
          </h3>
          <p className={PricingStyles.box__p}>
            Our withdrawals are carried out in seconds with no manual
            processing, including on weekends.
          </p>
        </div>
        <div className={PricingStyles.brands}>
        <a href="#" className={PricingStyles.brands__p}>
          Join thousands of bussinesses who trust in us
        </a>
        <div className={PricingStyles.brands__box}>
          {/* Brand 1 */}
          <div>
            <img src="/visa.svg" className="w-[140px] h-[60px] " />
          </div>
          {/* Brand 2 */}
          <div>
            <img src="/mastercard.svg" className="w-[140px] h-[60px] " />
          </div>

          {/* Brand 3 */}
          <div>
            <img src="/skrill.svg" className="w-[140px] h-[60px] " />
          </div>
          {/* Brand 4 */}
          <div>
            <img src="/nettler.svg" className="w-[140px] h-[60px] " />
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Pricing;
