
import React from 'react';

const FooterStyles={
    container:" flex flex-col pb-10 md:pt-4 md:pb-6 space-y-6 md:space-y-20 bg-black",
    leftFooter:"flex flex-col md:flex-row md:justify-between p-12 space-y-16 md:space-y-0",
    logo:"flex flex-col space-y-10 py-6  md:py-0 ",
    rightFooter:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 justify-between my-8 md:px-6",
    links:"flex flex-col items-start space-y-4 sm:text-sm mb-6 ml-6 font-inter font-semibold text-2xl text-gray-50",
    links__h4:"text-md font-semibold text-lg",
    links__p:"text-sm md:text-base font-inter font-normal text-gray-200 cursor-pointer hover:text-[#07f2c7]",
    bottomFooter:"flex items-center justify-center lg:justify-start px-12",
    bottomFooter__p:"text-md md:text-sm font-inter text-center lg:text-left  font-normal text-gray-500",
};

const Footer = () => {
    return (
        <footer className={FooterStyles.container}>
            <div className={FooterStyles.leftFooter}>
                {/* Left Side with Logo */}
                <div className={FooterStyles.logo}>
                   <div className='flex flex-col space-y-3 md:space-y-0 items-center md:flex-row md:items-end  md:justify-start '>
                   <img src="/ForexLogo.svg" className='w-[80px] h-[60px]' />
                   <p className="text-2xl md:w-[180px] font-semibold text-center md:text-left text-white leading-6">Forex Investment</p>
                   </div>
                    <div className="flex flex-col space-y-1 text-center md:text-left px-6">
                        <p className={FooterStyles.links__p}>hello@forexinvestment.com</p>
                        <p className={FooterStyles.links__p}>+91 9191919919</p>
                    </div>
                </div>
                {/* Right Side with Links */}
                <div className={FooterStyles.rightFooter}>
                    <div className={FooterStyles.links}>
                        <h4 className={FooterStyles.links__h4}>Products</h4>
                        <p className={FooterStyles.links__p}>Features</p>
                        <p className={FooterStyles.links__p}>Why Forex Investment</p>
                        <p className={FooterStyles.links__p}>Technology</p>
                        <p className={FooterStyles.links__p}>Security</p>
                    </div>
                    <div className={FooterStyles.links}>
                        <h4 className={FooterStyles.links__h4}>Solution</h4>
                        <p className={FooterStyles.links__p}>Procurement</p>
                        <p className={FooterStyles.links__p}>Update</p>
                        <p className={FooterStyles.links__p}>Workflow</p>
                        <p className={FooterStyles.links__p}>Data Entry</p>
                    </div>
                    <div className={FooterStyles.links}>
                        <h4 className={FooterStyles.links__h4}>Company</h4>
                        <p className={FooterStyles.links__p}>Career</p>
                        <p className={FooterStyles.links__p}>Case Study</p>
                    </div>
                    <div className={FooterStyles.links}>
                        <h4 className={FooterStyles.links__h4}>Socials</h4>
                        <p className={FooterStyles.links__p}>Facebook</p>
                        <p className={FooterStyles.links__p}>LinkedIn </p>
                        <p className={FooterStyles.links__p}>Twitter</p>
                    </div>
                </div>
            </div>
              {/* Copyright Text */}
            <div className={FooterStyles.bottomFooter}>
                <p className={FooterStyles.bottomFooter__p}>
                    © Copyright 2023 Forex Investment, All rights reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer