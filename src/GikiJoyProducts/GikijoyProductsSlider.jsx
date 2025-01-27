import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";


const slides = [
  {
    id: 1,
    title: "Room Fresheners",
    subtitle: "Experience the best of room fresheners.",
    description: "Discover our diverse range of room fresheners, crafted to bring a refreshing and long-lasting aroma to your spaces. Made with natural ingredients, they ensure a sustainable and delightful experience.",
    image: "/assets/images/page banner/gikijoy.jpg",
    alt: "Room Fresheners",
    badge: "New Arrival",
    link: "/gikijoy-products/room-freshner"
  }
  
  // {
  //   id: 2,
  //   title: "Explore our new Aamla candy",
  //   subtitle: "Aamla candy made from the best Aamla fruits.",
  //   description: "Our Aamla candy is made from the best Aamla fruits from our farms.",
  //   image: "/assets/images/SliderImages/amlabnnr.jpg",
  //   alt: "Luxury Stays",
  //   badge: "New Arrival",
  //   link: "/gikijoy-farm/product/candy/1"
  // },
  // {
  //   id: 3,
  //   title: "Sustainable Aqua & Organic Farming",
  //   subtitle: "Where Nature Meets Innovation",
  //   description: "Experience our state-of-the-art aquaculture and organic farming practices, bringing you the finest produce while preserving our environment.",
  //   image: "/assets/images/Aqua farms/services/aq.jpg",
  //   alt: "Aqua Farming",
  //   badge: "Eco-Friendly",
  //   link: "/param-aqua-farm"
  // }
];
;

const GikijoyProductsSlider = () => {

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    )
  };

  return (
    <div className="relative h-[80vh] overflow-hidden bg-slate-900">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-[80vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-right-top bg-cover bg-no-repeat z-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover sm:object-cover md:object-cover sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-8 flex items-center h-full">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Badge */}
                <motion.span
                  className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.badge}
                </motion.span>

                {/* Title & Subtitle */}
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {slide.title}
                </motion.h2>
                
                <motion.p
                  className="text-xl md:text-2xl text-yellow-300 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-lg text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {slide.description}
                </motion.p>
                 {/* Explore Now Button */}
                 <motion.button
                  className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onClick={() => navigate(slide.link)}
                >
                  Explore Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GikijoyProductsSlider;
