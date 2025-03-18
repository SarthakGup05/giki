import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const slides = [
  // {
  //   id: 1,
  //   title: " Aamla candy",
  //   subtitle: "Premium quality from our farms",
  //   description: "Our Aamla candy is made from the best Aamla fruits from our farms.",
  //   image: "/assets/images/page banner/our products.jpg",
  //   alt: "Aamla Candy",
  //   badge: "New Arrival",
  //   link: "/gikijoy-farm/product/candy/1"
  // },
  {
    id: 2,
    title: "Room Fresheners",
    subtitle: "Natural & Long-lasting",
    description: "Discover our diverse range of room fresheners, crafted with natural ingredients for a refreshing and sustainable experience.",
    image: "/assets/images/page banner/Room freshner.jpg",
    alt: "Room Fresheners",
    badge: "New Arrival",
    link: "/gikijoy-products/room-freshner",
  }
];

const GikijoyGiftSlider = () => {
  const navigate = useNavigate();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.45, 0, 0.15, 1)",
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
  };

  return (
    <div className="relative h-[60vh] overflow-hidden bg-gray-950">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[60vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-right-top bg-cover bg-no-repeat z-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Different overlays based on screen size */}
              <div className="absolute inset-0 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/60 sm:to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-black/20 lg:bg-gradient-to-tr lg:from-black/75 lg:via-black/40 lg:to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-6 flex items-center h-full">
              <motion.div
                className="max-w-xl hidden sm:block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.span
                  className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slide.badge}
                </motion.span>

                {/* Title & Subtitle */}
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  className="text-sm md:text-base lg:text-lg text-yellow-300 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-sm md:text-base text-gray-300 mb-6 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {slide.description}
                </motion.p>

                {/* Explore Now Button */}
                <motion.button
                  className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-blue-600/30 flex items-center gap-2 md:px-6 md:py-2.5 lg:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  onClick={() => navigate(slide.link)}
                >
                  Explore Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
              
              {/* Mobile Alternative - Bottom Card */}
              <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-black/70 p-4 backdrop-blur-sm">
                <div className="text-center">
                  <span className="inline-block px-2 py-0.5 bg-orange-500 text-white text-xs font-medium rounded-full mb-2">
                    {slide.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-yellow-300 mb-2">
                    {slide.subtitle}
                  </p>
                  <button
                    className="px-4 py-1.5 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700"
                    onClick={() => navigate(slide.link)}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GikijoyGiftSlider;