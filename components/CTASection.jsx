import React from "react";

const CTAStyles = {
  container: "flex flex-col justify-center items-center  bg-cta bg-no-repeat bg-cover h-[500px]",
  box: "flex flex-col px-6 md:px-0 md:w-full items-center justify-center space-y-12 py-10  ",
  box__div: "flex flex-col items-center justify-center space-y-6",
  box__div__p: "font-inter text-md font-bold text-indigo-800",
  box__div__h3:
    "font-inter text-3xl text-center md:text-4xl font-semibold text-white",
  box__p:
    "text-lg md:text-lg text-center font-inter font-normal md:w-[450px] text-gray-400",
  card: "flex w-[370px] md:w-[1200px]",
};

const CTASection = () => {
  return (
    // <section className="flex flex-col bg-[#f7f9fd]  py-6 space-y-6">
    //   <div className="flex flex-col items-center justify-center">
    //     <h3 className="font-inter text-3xl md:text-5xl font-semibold text-gray-900 ">
    //       Ready To get Started
    //     </h3>
    //     <p className="text-md text-center font-inter font-semibold text-[#8696ae]">
    //       It only takes 3 minutes to get your account set up and ready for
    //       trading
    //     </p>

    //   </div>
    // </section>
    <section className={CTAStyles.container}>
      <div className={CTAStyles.box}>
        <div className={CTAStyles.box__div}>
          <h3 className={CTAStyles.box__div__h3}>Ready to get started ?</h3>
          <p className={CTAStyles.box__p}>
            It only takes 3 minutes to get your account set up and ready for
          </p>
        </div>

        <button className="btn w-[190px] text-sm md:text-lg text-black bg-[#07f2c7] hover:bg-[#07f2c7]/80 font-semibold  px-3 py-2 md:px-8 md:py-3">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
