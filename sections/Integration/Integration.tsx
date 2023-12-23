import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/solid";
import IntegrationCard from '../../components/IntegrationCard';

const INTEGRATION_DATA = [
  {
    title: "Slack",
    buttonText: "Kerjho for Slack",
    image: "/slack-logo.svg",
    text: "Take Slack to the next level with Kerjho's project management and collaboration tools. All your project's activity from Kerjho, directly in Slack."
  },
  {
    title: "Figma",
    buttonText: "Kerjho for Figma",
    image: "/figma-logo.svg",
    text: "Kerjho for Figma provides stress-free design collaboration and project workflow for teams - directly inside Photoshop."
  },
  {
    title: "Dropbox",
    buttonText: "Kerjho for DB",
    image: "/dropbox-logo.svg",
    text: "Dropbox integration gives you secure access to design files from in your Dropbox account. Fast authentication, file selection and uploading."
  },
  {
    title: "Adobe XD",
    buttonText: "Kerjho for XD",
    image: "/adobe-xd-logo.svg",
    text: "Kerjho for Adobe XD lets you seamlessly manage projects and provide contextual feedback - without the context switching."
  },

];


const IntegrationStyles = {
  container: "mt-40 md:p-24 md:mt-40 flex flex-col md:flex-row items-center md:justify-between bg-white",
  left: " flex flex-col md:hidden  space-y-4 px-6 pt-4 md:px-12 md:pt-12 ",
  left__p: "font-inter text-md font-bold text-indigo-800 ",
  left__h3: "font-inter  text-3xl md:text-5xl font-semibold text-gray-900 leading-snug",
  card: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 px-8 pt-12 md:w-1/2",
  right: "flex flex-col md:w-1/2 py-12 px-16 p space-y-10 ",
  right__box1: " hidden md:flex flex-col space-y-4 ",
  right__box1__p: "font-inter text-md font-bold text-indigo-800 ",
  right__box1__h3: "font-inter text-5xl font-semibold text-gray-900 leading-snug",
  right__p1: "text-lg md:text-xl font-inter font-semibold text-[#8696ae]",
  right__p2: "font-inter text-lg font-bold text-indigo-800",
  right__box2: "flex flex-col space-y-4",
  right__box2__p: "font-inter text-lg font-semibold text-indigo-800",
  right__box3: "flex items-center space-x-4",
  right__box3__icon: "w-6 text-green-300 rounded-md",
  right__box3__p: "text-lg md:text-xl font-inter font-semibold text-[#8696ae]",

};

const Integration = () => {
  return (
    <section className={IntegrationStyles.container}>
      {/* Left Section */}
      <div className={IntegrationStyles.left}>
        <p className={IntegrationStyles.left__p}>
          OUR INTEGRATIONS
        </p>
        <h3 className={IntegrationStyles.left__h3}>
          Connect Kerjho to the tools you already use
        </h3>
      </div>
      <div className={IntegrationStyles.card}>
        {INTEGRATION_DATA.map((item) => (
          <IntegrationCard
            key={item.title}
            title={item.title}
            image={item.image}
            text={item.text}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      {/* Right Section  */}
      <div className={IntegrationStyles.right}>
        <div className={IntegrationStyles.right__box1}>
          <p className={IntegrationStyles.right__box1__p}>
            OUR INTEGRATIONS
          </p>
          <h3 className={IntegrationStyles.right__box1__h3}>
            Connect Kerjho to the tools you already use
          </h3>
        </div>
        <p className={IntegrationStyles.right__p1}>
          Your team is most productive when your entire workflow is in one place from start to finish.
          Our integrations make using your favorite products with Kerjho easier than ever.
        </p>

        <p className={IntegrationStyles.right__p2}>
          Find out more supported tools
        </p>

        <div className={IntegrationStyles.right__box2}>
          <p className={IntegrationStyles.right__box2__p}>
            ENJOY THESE BENEFITS
          </p>
          {/* First Part */}
          <div className={IntegrationStyles.right__box3}>
            <CheckCircleIcon className={IntegrationStyles.right__box3__icon} />
            <p className={IntegrationStyles.right__box3__p}>
              Connected natively into your tools
            </p>
          </div>

          {/* Second Part */}
          <div className={IntegrationStyles.right__box3}>
            <CheckCircleIcon className={IntegrationStyles.right__box3__icon} />
            <p className={IntegrationStyles.right__box3__p}>
              Use your currently use account
            </p>
          </div>

          {/* Third Part */}
          <div className={IntegrationStyles.right__box3}>
            <CheckCircleIcon className={IntegrationStyles.right__box3__icon} />
            <p className={IntegrationStyles.right__box3__p}>
              No more additional fees
            </p>
          </div>

          {/* Fourth Part */}
          <div className={IntegrationStyles.right__box3}>
            <CheckCircleIcon className={IntegrationStyles.right__box3__icon} />
            <p className={IntegrationStyles.right__box3__p}>
              A private,self-hosted architecture
            </p>
          </div>


        </div>
      </div>

    </section>
  )
}

export default Integration