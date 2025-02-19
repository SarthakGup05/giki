import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "",
    image: "/assets/images/SliderImages/moutain.jpg",
    alt: "Mountain View",
  },
  {
    id: 2,
    title: "Discover Serenity with Our Getaways",
    image: "/assets/images/SliderImages/beach.jpg",
    alt: "Beach View",
  },
  {
    id: 3,
    title: "Discover the Spirit of Amritsar",
    image: "/assets/images/SliderImages/punjab.jpg",
    alt: "Resort View",
  },
];

const GatewaySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-full flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.alt} 
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute inset-0 flex justify-end items-center p-4 md:px-8 h-full">
              <motion.div
                className="text-right bg-black bg-opacity-0 p-6 md:p-10 rounded-lg relative left-3"
                initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-white font-sans"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>
                {/* Optional Button (uncomment if needed) */}
                {/* <motion.button
                  className="mt-6 inline-block rounded-full bg-yellow-500 text-black py-2 px-4 shadow-md hover:bg-orange-600 transition duration-300 font-medium"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
              >
                  {slide.buttonText || 'Learn More'}
                </motion.button> */}
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GatewaySlider;
