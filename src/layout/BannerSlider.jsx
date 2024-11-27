import React from 'react';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "./BannerSlider.css"; // Custom CSS file

const BannerSlider = ({ scrollToProductSection }) => {
  return (
    <div className="hero-section bg-cover bg-right h-[600px] relative flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 flex justify-center items-center h-full">
        {/* Single Section: Unified Content */}
        <motion.div
          className="text-right bg-black bg-opacity-50 p-6 md:p-10 rounded-lg "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-yellow-500 font-sans"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            100% Authentic <br />
            Carbide & <br /> Chemical Free
          </motion.h2>
          <motion.button
            onClick={scrollToProductSection}
            className="mt-6 inline-block rounded-full bg-yellow-500 text-black py-2 px-4 shadow-md hover:bg-orange-600 transition duration-300 font-medium"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerSlider;
