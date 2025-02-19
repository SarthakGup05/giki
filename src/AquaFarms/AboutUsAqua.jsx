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
      className="bg-gradient-to-r from-blue-900 to-slate-900 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={containerVariant}
        >
          <motion.div className="w-full md:w-1/2" variants={itemVariant}>
            <div className="overflow-hidden rounded-lg shadow-lg border border-blue-500">
              <img
                src="/assets/images/Aqua farms/fishes.jpg"
                alt="Aqua Farms Facility"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariant}>
            <h2 className="text-4xl font-semibold text-blue-400 mb-4">
              About Aqua Farms
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              Welcome to Aqua Farms, where innovation meets sustainability in aquaculture.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
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
                  <p>
                    Our expert marine biologists meticulously monitor fish health, maintaining 
                    optimal water quality and reducing waste. By utilizing advanced recirculating 
                    aquaculture systems, we conserve 90% more water than traditional methods, 
                    significantly reducing our environmental footprint.
                  </p>
                  <p>
                    Our commitment to sustainable seafood extends to community outreach, 
                    educating future generations about responsible fish farming. Through transparent 
                    farming practices and collaborations with environmental agencies, we are shaping 
                    a greener future for aquaculture.
                  </p>
                </motion.div>
              )}
              <motion.button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-400 hover:underline focus:outline-none font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {expanded ? 'See Less' : 'See More'}
              </motion.button>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="tel:+91 7817821976">
                <motion.button 
                  className="px-6 py-3 text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsAqua;
