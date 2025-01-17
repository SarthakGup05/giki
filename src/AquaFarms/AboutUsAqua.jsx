import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUsAqua = () => {
  // Animation Variants
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
      className="bg-slate-900 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the component is in view
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={containerVariant}
        >
          {/* Left Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            variants={itemVariant}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/images/Aqua farms/frm.jpg"
                alt="Aqua Farms Facility"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={itemVariant}
          >
            <h2 className="text-3xl font-medium text-white mb-4">
              About Aqua Farms
            </h2>

            <p className="text-xl text-gray-300 mb-6">
              Welcome to Aqua Farms, where innovation meets sustainability in aquaculture.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                Since our establishment in 2010, Aqua Farms has been pioneering sustainable fish farming practices. Our state-of-the-art facility combines traditional wisdom with modern technology to produce the highest quality seafood while maintaining our commitment to environmental stewardship.
              </p>

              <p>
                Our team of expert marine biologists and aquaculture specialists work tirelessly to ensure that every fish we raise meets the highest standards of quality and sustainability. We take pride in our innovative recirculating aquaculture systems that use 90% less water than conventional methods.
              </p>

              <p>
                At Aqua Farms, we believe in transparent farming practices and maintaining strong relationships with our local communities. Through educational programs and partnerships, we're working to create a more sustainable future for aquaculture.
              </p>
            </div>

            <div className="flex gap-4 pt-6">
              <button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              {/* <button className="px-6 py-3 text-blue-400 border border-blue-400 hover:bg-slate-800 rounded-lg">
                Contact Us
              </button> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsAqua;
