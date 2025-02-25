import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Experience Nature's Majesty",
    subtitle: "Breathtaking mountain escapes",
    image: "/assets/images/SliderImages/moutain.jpg",
    alt: "Mountain View",
  },
  {
    id: 2,
    title: "Discover Serenity with Our Getaways",
    subtitle: "Pristine beaches and coastal retreats",
    image: "/assets/images/SliderImages/beach.jpg",
    alt: "Beach View",
  },
  {
    id: 3,
    title: "Discover the Spirit of Amritsar",
    subtitle: "Cultural immersion and heritage experiences",
    image: "/assets/images/SliderImages/punjab.jpg",
    alt: "Resort View",
  },
];

const GatewaySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false, // Custom indicators instead
    arrows: false, // Custom arrows instead
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const nextSlide = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickPrev();
    }
  };

  const sliderRef = React.useRef(null);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40 z-10" />
      
      {/* Main Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-full">
            {/* Image with zoom effect */}
            <motion.div
              className="h-full"
              initial={{ scale: 1.1 }}
              animate={{ 
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 6, ease: "easeOut" }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="object-cover w-full h-[600px]"
              />
            </motion.div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {currentSlide === index && (
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-center z-20 px-8 md:px-16 lg:px-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="max-w-xl">
                    <motion.p
                      className="text-yellow-300 uppercase tracking-wider font-medium mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.h2
                      className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h2>
                    
                    {/* <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <button 
                        className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-yellow-300 transition-colors duration-300 font-medium flex items-center group"
                      >
                        Explore Now
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </motion.div> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation */}
      <div className="absolute bottom-8 left-8 md:left-16 z-30 flex items-center space-x-4">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Custom Indicators */}
      <div className="absolute bottom-8 right-8 md:right-16 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-12' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-yellow-400 z-30"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </div>
  );
};

export default GatewaySlider;