import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

// Updated slide data with more concise content
const slides = [
  {
    id: 1,
    title: "Sustainable Aqua Farming",
    subtitle: "Nature Meets Innovation",
    description: "State-of-the-art aquaculture bringing you the finest produce.",
    image: "/assets/images/Aqua farms/services/aq.jpg",
    alt: "Sustainable aquaculture system",
    badge: "Eco-Friendly"
  },
  {
    id: 2,
    title: "Waterfront Stays",
    subtitle: "Your Perfect Retreat",
    description: "Breathtaking views with unmatched comfort by the water.",
    image: "/assets/images/Aqua farms/services/stay.jpg",
    alt: "Waterfront cabin with panoramic views",
    badge: "Premium"
  },
  {
    id: 3,
    title: "Ocean-Fresh Fish",
    subtitle: "Water to Table",
    description: "Daily harvested fish prepared with organic ingredients.",
    image: "/assets/images/Aqua farms/services/food.jpg",
    alt: "Fresh fish dishes",
    badge: "Daily Fresh"
  }
];

const AquaFarmSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <motion.button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </motion.button>
  );

  const PrevArrow = ({ onClick }) => (
    <motion.button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </motion.button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-3" role="tablist"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button 
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === i ? "bg-blue-500 scale-125" : "bg-white/30 hover:bg-white/50"
        }`}
        aria-label={`Go to slide ${i + 1}`}
        role="tab"
        aria-selected={currentSlide === i}
      >
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    )
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      sliderRef.current.slickPrev();
    } else if (e.key === 'ArrowRight') {
      sliderRef.current.slickNext();
    }
  };

  // WhatsApp click handler with your specific number
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7817821976?text=I am interested in learning more about your aqua farm services', '_blank');
  };

  return (
    <div 
      className="relative h-[80vh] overflow-hidden bg-slate-900"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="region"
      aria-label="Aqua Farm Services Carousel"
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-[80vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={slide.image}
                alt={slide.alt}
                className="object-cover w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-6 md:px-8 flex items-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  className="max-w-xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Badge */}
                  <motion.span
                    className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slide.badge}
                  </motion.span>

                  {/* Title & Subtitle */}
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-sm md:text-base text-blue-300 mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-gray-300 mb-6 max-w-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>

                  {/* WhatsApp Button with your number */}
                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-full font-medium text-sm hover:bg-green-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp Us
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute right-8 bottom-8 w-24 h-24 border-2 border-white/20 rounded-full opacity-0 md:opacity-100"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.div
              className="absolute right-20 bottom-20 w-12 h-12 border border-blue-500/40 rounded-full opacity-0 md:opacity-100"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        ))}
      </Slider>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          className="h-full bg-blue-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: 6,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      </div>
    </div>
  );
};

export default AquaFarmSlider;