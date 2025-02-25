import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Fruit Farms",
    subtitle: "Experience the best of farm fruits",
    description: "Our aqua farms are designed to provide the best fruits and fruit products in the most sustainable way possible.",
    image: "/assets/images/page banner/fruit banner.jpg",
    mobileImage: "/assets/images/page banner/organic fruits.jpg", // Mobile-optimized version
    alt: "Aqua Farming",
    badge: "Eco-Friendly",
    link: "/gikijoy-farm/food-products"
  },
  {
    id: 2,
    title: "",
    subtitle: "Premium quality from our farms",
    description: "Our Aamla candy is made from the finest Aamla fruits harvested directly from our farms.",
    image: "/assets/images/page banner/amla candy.jpg",
    mobileImage: "/assets/images/page banner/aamla candy.jpg", // Mobile-optimized version
    alt: "Aamla Candy",
    badge: "New Arrival",
    link: "/gikijoy-farm/product/candy/1"
  },
  {
    id: 3,
    title: "Sustainable Farming",
    subtitle: "Where Nature Meets Innovation",
    description: "Experience our state-of-the-art aquaculture and organic farming practices, bringing you the finest produce.",
    image: "/assets/images/Aqua farms/services/aq.jpg",
    mobileImage: "assets/images/page banner/farms1.jpg", // Mobile-optimized version
    alt: "Aqua Farming",
    badge: "Eco-Friendly",
    link: "/param-aqua-farm"
  }
];

const GikijoyFarm = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  
  // Track window width for conditional rendering
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 640; // sm breakpoint
  const isTablet = windowWidth >= 640 && windowWidth < 1024; // between sm and lg
  const isDesktop = windowWidth >= 1024; // lg and above
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: "cubic-bezier(0.45, 0, 0.15, 1)",
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ul className="flex gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20 hover:bg-white/60 transition-all duration-300">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    )
  };

  // Conditionally set slider height based on screen size
  const sliderHeight = isMobile ? "h-[50vh]" : isTablet ? "h-[65vh]" : "h-[75vh]";

  return (
    <div className={`relative ${sliderHeight} overflow-hidden bg-gray-950`}>
      {/* Progress bar animation for autoplay timing */}
      <div className="absolute top-0 left-0 w-full h-1 z-20">
        <div className="h-full bg-blue-500 opacity-70 animate-slider-progress" 
             style={{animationDuration: '6s', animationIterationCount: 'infinite'}}></div>
      </div>
      
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`relative ${sliderHeight} flex items-center`}>
            {/* Conditional Background Image Rendering */}
            <div className="absolute inset-0 bg-cover bg-center z-0">
              {isMobile ? (
                // Mobile image with different aspect ratio and crop
                <img
                  src={slide.mobileImage || slide.image} // Fallback to regular image if mobile version not available
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                />
              ) : isTablet ? (
                // Tablet-specific layout
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-right-top"
                />
              ) : (
                // Desktop layout
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Enhanced gradient overlays based on screen size */}
              {isMobile ? (
                // Mobile overlay (bottom to top gradient)
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              ) : isTablet ? (
                // Tablet overlay (horizontal gradient with more transparency in middle)
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
              ) : (
                // Desktop overlay (diagonal gradient with subtle vignette)
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
                </div>
              )}
            </div>

            {/* Conditional Content Layout */}
            <div className={`relative w-full px-4 sm:px-6 lg:px-8 mx-auto flex ${isMobile ? 'items-end pb-16' : 'items-center'} h-full`}>
              <motion.div
                className={`w-full ${isMobile ? 'max-w-full text-center' : isTablet ? 'max-w-md ml-0 sm:ml-6 text-left' : 'max-w-xl ml-0 md:ml-12 lg:ml-16 text-left'}`}
                initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge - only show on tablet and desktop */}
                {!isMobile && slide.badge && (
                  <motion.div
                    className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 lg:mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {slide.badge}
                  </motion.div>
                )}

                {/* Title - conditional sizing and display */}
                {slide.title && (
                  <motion.h2
                    className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'} font-bold text-white mb-2 sm:mb-3 leading-tight`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h2>
                )}
                
                {/* Subtitle - conditional display based on screen size and text length */}
                {slide.subtitle && (!isMobile || (isMobile && slide.subtitle.length < 40)) && (
                  <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-300 mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                )}

                {/* Description - only show on tablet and desktop */}
                {!isMobile && slide.description && (
                  <motion.p
                    className="hidden sm:block text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                )}
                
                {/* Button - adapted for all screen sizes */}
                <motion.button
                  className={`group flex items-center ${isMobile ? 'mx-auto' : ''} gap-2 px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onClick={() => navigate(slide.link)}
                >
                  <span>Explore Now</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </div>
            
            {/* Slide counter - only show on tablet and desktop */}
            {!isMobile && (
              <div className="absolute bottom-6 right-6 text-white text-sm sm:text-base font-medium z-10">
                <span className="text-white/80">{slide.id}</span>
                <span className="text-white/40 mx-1">/</span>
                <span className="text-white/40">{slides.length}</span>
              </div>
            )}
          </div>
        ))}
      </Slider>
      
      {/* Custom navigation arrows only for tablet and desktop */}
      {!isMobile && (
        <div className="hidden md:block">
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white" 
            onClick={() => document.querySelector('.slick-prev').click()}
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            onClick={() => document.querySelector('.slick-next').click()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes slider-progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-slider-progress {
          animation-name: slider-progress;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default GikijoyFarm;