import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center text-center space-y-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <motion.img
          src="\assets\images\grids\uk\thank you.png"
          alt="Thank You Illustration"
          className="w-full h-[300px] object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        {/* Heading */}
        <motion.h1
          className="text-2xl font-bold text-gray-800"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Thank You for Booking!
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Soon a <span className="font-semibold text-yellow-500">GikiJoy</span>{" "}
          associate will connect and plan your{" "}
          <span className="italic text-green-500">getaways</span>!
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={() => navigate("/gikijoy-getaways")}
          className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome />
          <span>Go to Home</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYou;
