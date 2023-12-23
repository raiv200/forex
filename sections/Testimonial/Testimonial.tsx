import React from 'react';
import TestimonialCard from "../../components/TestimonialCard";

const TESTIMONIAL_DATA = [

    {
        customerName: "Colton Smith",
        imageURL: "/image-colton.jpg",
        testimonialText: "I use Kerjho a lot. It has made managing so much easier and a hige time save for our clients.",

    },

    {
        customerName: "Irene Roberts",
        imageURL: "/image-irene.jpg",
        testimonialText: "The Platform itself is very user friendly and intuitive, and the Kerjho Dashboard team is exceptional!.",
    },

];

const TestimonialStyles = {
    container: "flex flex-col mt-[20px] md:mt-[30px] md:flex-row items-center md:justify-center bg-[#f7f9fd]  md:space-x-48 py-6 px-4 md:p-12",
    left: "w-[360px] md:w-[500px] md:h-[600px] flex flex-col space-y-4",
    left__p: "font-inter md:text-left text-center md:text-left text-xl md:text-2xl font-semibold text-indigo-800",
    left__card: "flex flex-col px-3 space-y-10 md:items-start py-6 md:px-0 rounded-2xl",
    right: "flex w-[350px] md:w-[500px] flex-col space-y-12 mt-6 md:-mt-6 ",
    right__h3: "font-inter text-3xl md:text-5xl font-semibold text-gray-900 leading-snug",
    right__p: "text-lg md:text-xl font-inter font-semibold text-[#8696ae]",
    right__form: "flex rounded-2xl py-2 md:py-3  md:space-x-4 bg-gray-100 hover:ring-indigo-600 hover:ring-4",
    right__form__input: "ml-2 bg-gray-100 mt-1 py-2 px-2 md:px-4 md:py-4 w-[220px] md:w-[300px] font-inter font-semibold text-lg rounded-md focus:outline-none leading-6 text-gray-500",
    right__form__btn: "btn text-md py-0 px-4 md:py-4 md:px-8 bg-indigo-800 text-gray-100 rounded-lg hover:bg-indigo-500",
}


const Testimonial = () => {
    return (
        <section className={TestimonialStyles.container}>
            {/* Left part Testimonials Part */}

            <div className={TestimonialStyles.left}>
                <p className={TestimonialStyles.left__p}>
                    Why do PMs choose to use Kerjho
                </p>
                <div className={TestimonialStyles.left__card}>
                    {
                        TESTIMONIAL_DATA.map((item) => {
                            return <TestimonialCard
                                key={item.customerName}
                                customerName={item.customerName}
                                imageURL={item.imageURL}
                                testimonialText={item.testimonialText}
                            />
                        })

                    }

                </div>
            </div>
            {/* Right Part - Eamil NewsLetter Form */}

            <div className={TestimonialStyles.right}>
                <h3 className={TestimonialStyles.right__h3}>
                    Simple & powerful management software.
                </h3>
                <p className={TestimonialStyles.right__p}>
                    Get free Kerjho Dashboard demo for your team by
                    submitting your email below
                </p>
                <div className={TestimonialStyles.right__form}>
                    <input
                        id="email"
                        type="text"
                        name="Email"
                        placeholder="Enter your email"
                        className={TestimonialStyles.right__form__input}
                    />
                    <button className={TestimonialStyles.right__form__btn}>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial