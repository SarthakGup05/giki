import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutUsAqua = () => {
  const [expanded, setExpanded] = useState(false);

  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-teal-900 to-blue-900 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={containerVariant}
        >
          {/* Content section - now first */}
          <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariant}>
            <h2 className="text-4xl font-semibold text-teal-300 mb-4">
              About Aqua Farms
            </h2>

            <p className="text-xl font-medium text-white mb-6">
              Welcome to Aqua Farms, where innovation meets sustainability in aquaculture.
            </p>

            <div className="space-y-4 text-gray-100">
              <p className="text-lg">
                Since 2020, we have pioneered sustainable fish farming with cutting-edge technology
                and eco-friendly practices, ensuring a thriving aquatic ecosystem.
              </p>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <p className="text-lg pt-4">
                    Our expert marine biologists meticulously monitor fish health, maintaining 
                    optimal water quality and reducing waste. By utilizing advanced recirculating 
                    aquaculture systems, we conserve 90% more water than traditional methods, 
                    significantly reducing our environmental footprint.
                  </p>
                  <p className="text-lg pt-4">
                    Our commitment to sustainable seafood extends to community outreach, 
                    educating future generations about responsible fish farming. Through transparent 
                    farming practices and collaborations with environmental agencies, we are shaping 
                    a greener future for aquaculture.
                  </p>
                </motion.div>
              )}
              <motion.button
                onClick={() => setExpanded(!expanded)}
                className="text-teal-300 hover:text-teal-200 focus:outline-none font-medium transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {expanded ? 'See Less' : 'See More'}
                <svg 
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </div>

            <div className="flex gap-4 pt-8">
              <a href="tel:+91 7817821976">
                <motion.button 
                  className="px-6 py-3 bg-teal-600 text-white hover:bg-teal-500 rounded-lg transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </a>
              {/* <a href="#learn-more">
                <motion.button 
                  className="px-6 py-3 border-2 border-teal-400 text-teal-300 hover:bg-teal-800 hover:text-white rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </a> */}
            </div>
          </motion.div>

          {/* Image section - now second */}
          <motion.div className="w-full md:w-1/2" variants={itemVariant}>
            <div className="overflow-hidden rounded-lg shadow-xl border-2 border-teal-400">
              <img
                src="/assets/images/Aqua farms/fishes.jpg"
                alt="Aqua Farms Facility"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsAqua;