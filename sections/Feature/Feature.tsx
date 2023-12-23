import React, { useState } from 'react'
import Image from 'next/image';
import FeatureCard from '../../components/FeatureCard'


const FEATURE_DATA = [
    {
        title: "Paperless Document",
        icon: "TextIcon",
        text: "Never miss anything that you put into your daily schedule life.Become more productive yourself, being reminded is the best thing in our life"
    },
    {
        title: "Schedule Calendar",
        icon: "CalendarIcon",
        text: "Never miss anything that you put into your daily schedule life. Become more productive yourself, being reminded is the best thing in our life"
    },
    {
        title: "Performance Metrics",
        icon: "ChartIcon",
        text: "Never miss anything that you put into your daily schedule life. Become more productive yourself, being reminded is the best thing in our life"
    },
    {
        title: "Meeting and Chatting",
        icon: "ChatIcon",
        text: "Never miss anything that you put into your daily schedule life. Become more productive yourself, being reminded is the best thing in our life"
    },
]


const FeatureStyles={
    container:"flex flex-col  h-screen w-full py-6 px-4 md:p-12 md:px-28 md:pt-6 bg-white",
    upper:"space-y-4",
    upper__p:"font-inter text-md font-bold text-indigo-800",
    upper__h3:"font-inter text-3xl md:text-5xl font-semibold text-gray-900 leading-snug",
    lower:"flex py-16 justify-center md:px-0 md:justify-between md:items-center ",
    lower__div:"space-y-6",
    lower__img:"hidden md:flex items-center py-12",

}

const Feature = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    function handleClick1() {
       setShow1(true);
       setShow2(false);
       setShow3(false);
       setShow4(false);

    };
    
    function handleClick2() {
       setShow1(false);
       setShow2(true);
       setShow3(false);
       setShow4(false);
    }
    function handleClick3() {
        setShow1(false);
       setShow2(false);
       setShow3(true);
       setShow4(false);
    }
    function handleClick4() {
        setShow1(false);
       setShow2(false);
       setShow3(false);
       setShow4(true);
    }
    return (
        <section className={FeatureStyles.container}>
            {/* Upper Part */}
            <div className={FeatureStyles.upper}>
                <p className={FeatureStyles.upper__p}>
                    OUR FEATURES
                </p>
                <h3 className={FeatureStyles.upper__h3}>
                    Some of our features
                </h3>
            </div>

            {/* Lower Part */}

            <div className={FeatureStyles.lower}>
                <div className={FeatureStyles.lower__div}>

                    <FeatureCard

                        title={FEATURE_DATA[0].title}
                        icon={FEATURE_DATA[0].icon}
                        text={FEATURE_DATA[0].text}
                        show={show1}
                        onClick={handleClick1}
                    />
                    <FeatureCard

                        title={FEATURE_DATA[1].title}
                        icon={FEATURE_DATA[1].icon}
                        text={FEATURE_DATA[1].text}
                        show={show2}
                        onClick={handleClick2}
                    />
                    <FeatureCard

                        title={FEATURE_DATA[2].title}
                        icon={FEATURE_DATA[2].icon}
                        text={FEATURE_DATA[2].text}
                        show={show3}
                        onClick={handleClick3}
                    />
                    <FeatureCard

                        title={FEATURE_DATA[3].title}
                        icon={FEATURE_DATA[3].icon}
                        text={FEATURE_DATA[3].text}
                        show={show4}
                        onClick={handleClick4}
                    />

                </div>

                <div className={FeatureStyles.lower__img}>
                     <Image 
                     src={show1 ? "/calender-schedule.png" : show2 ? "/calender-paperless.png" : show3 ? "/calender-performance.png" : show4 ? "/calender-meeting.png" : ""} 
                     width={690} 
                     height={460} 
                     className="transition duration-300 ease-in "
                     />
                   
                </div>
            </div>

        </section>
    )
}

export default Feature