import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GikiJoyProductsAbout = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Explore Our Premium Room Fresheners
          </h2>
          <p className="text-lg text-gray-600">
            Transform your living spaces with GikiJoy’s exclusive collection of
            room fresheners. Infused with natural ingredients, our fresheners
            bring a refreshing and long-lasting fragrance, creating a serene and
            invigorating atmosphere for your home or office. Safe and
            eco-friendly, these premium products redefine the art of aroma.
          </p>
          <p className="text-lg text-gray-600">
            At GikiJoy, we are constantly innovating. Stay tuned as we expand
            our product line with more sustainable and high-quality offerings to
            meet your lifestyle needs.
          </p>
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contactus"
                className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold 
                hover:bg-orange-500 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="assets/images/room freshners/6.jpg" // Replace with your image path
            alt="Premium Room Fresheners"
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default GikiJoyProductsAbout;
