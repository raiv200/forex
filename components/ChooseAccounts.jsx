import React from "react";

const ChooseAccountStyles = {
  container: "flex flex-col bg-gray-200  py-6  space-y-6 h-full lg:py-16 lg:h-[650px] bg-white",
  top: "flex items-center justify-center",
  top__left__div: "flex flex-col space-y-6",
  top__left__div__p: "font-inter flex-1 text-md font-bold text-indigo-800",
  top__left__div__h3:
    "font-inter text-3xl text-center md:text-5xl font-semibold text-gray-900 leading-snug",
  top__right__div:
    "w-[311px] md:w-[400px] flex items-center font-inter text-lg font-semibold text-[#8696ae]",
  bottom:
    "flex flex-col space-y-8 lg:space-y-0 lg:flex-row  lg:justify-between p-6 lg:px-28 lg:h-full",
};

const ChooseAccounts = () => {
  return (
    <section className={ChooseAccountStyles.container}>
      {/* Top Part */}
      <div className={ChooseAccountStyles.top}>
        <h3 className={ChooseAccountStyles.top__left__div__h3}>
          Accounts to suit your trading strategy
        </h3>
      </div>

      {/* Bottom Part Card Sections */}

      <div className={ChooseAccountStyles.bottom}>
        <div className="flex  flex-col space-y-8 rounded-lg w-full bg-black/90 px-6 py-4 md:py-10 lg:rounded-none lg:rounded-l-lg lg:px-10 lg:py-8 lg:space-y-12 lg:w-1/2 lg:h-full">
          <h3 className="text-base md:text-3xl font-semibold text-white">
            Standard accounts
          </h3>

          <div className="flex flex-col space-y-8 flex-1">
            <div className="flex space-x-8">
              <p className="text-base md:text-xl font-semibold text-white underline decoration-dashed decoration-1 underline-offset-4 decoration-white ">
                Standard
              </p>
              <p className="text-base md:text-xl font-semibold text-white underline decoration-dashed decoration-1 underline-offset-4 decoration-white ">
                Standard Cents
              </p>
            </div>

            <p className="text-sm md:text-lg font-normal text-white/95">
              Feature-rich, commission-free accounts that suit the needs of
              today’s traders. Sign up and experience the advantages of our most
              popular account.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="btn w-full md:w-[190px] text-sm lg:text-base text-white bg-transparent border-[1px] border-[#07f2c7] font-semibold hover:bg-[#07f2c7]/20 px-3 py-2 lg:px-8 lg:py-2">
              See details
            </button>
          </div>
        </div>

        <div className="flex  flex-col space-y-8 rounded-lg w-full bg-gray-100 px-6 py-4 md:py-10 lg:rounded-none lg:rounded-r-lg lg:px-10 lg:py-8 lg:space-y-12 lg:w-1/2 lg:h-full">
          <h3 className="text-base md:text-3xl font-semibold text-black">
            Professional accounts
          </h3>
          <div className="flex flex-col space-y-8 flex-1">
            <div className="flex space-x-8">
              <p className="text-base md:text-xl font-semibold text-black underline decoration-dashed decoration-1 underline-offset-4 decoration-black ">
                Raw Speeds
              </p>
              <p className="text-base md:text-xl font-semibold text-black underline decoration-dashed decoration-1 underline-offset-4 decoration-black ">
                Zero
              </p>
              <p className="text-base md:text-xl font-semibold text-black underline decoration-dashed decoration-1 underline-offset-4 decoration-black ">
                Pro
              </p>
            </div>

            <p className="text-sm md:text-lg font-normal text-black/95">
              Flexible choice between raw spread model, zero spread and zero
              commission. For experienced traders, scalpers and algotraders.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="btn w-full md:w-[190px] text-sm lg:text-base text-black bg-transparent border-[1px] border-gray-600 font-semibold hover:bg-gray-200 px-3 py-2 lg:px-8 lg:py-2">
              See details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAccounts;
