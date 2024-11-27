// src/components/AboutUsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMountain, FaHeart, FaHandshake, FaLeaf } from "react-icons/fa";
import { GiLotus, GiCompass } from "react-icons/gi";
import { MdOutlineAirportShuttle } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";

const AboutUsSection = () => {
  const features = [
    {
      title: "Local Expertise",
      description:
        "Our team possesses in-depth knowledge of Uttarakhand and Goa's hospitality landscapes, offering an authentic experience.",
      icon: <MdOutlineAirportShuttle />, // Main icon for local expertise
      additionalIcon: <GiCompass />, // Relevant new icon for "Local Expertise"
      bgColor: "bg-blue-600",
    },
    {
      title: "Personal Touch",
      description:
        "We ensure every guest feels special, offering tailored celebrations, curated meals, and memorable guest experiences.",
      icon: < FaPersonBreastfeeding/>, // Main icon for personal touch
      additionalIcon: <FaLeaf />, // Relevant new icon for "Personal Touch"
      bgColor: "bg-red-600",
    },
    {
      title: "Customized Experiences",
      description:
        "From family get-togethers to spiritual destinations, we offer fully customized experiences that prioritize your preferences.",
      icon: <GiLotus />, // Main icon for customized experiences
      additionalIcon: <FaMountain />, // Relevant new icon for "Customized Experiences"
      bgColor: "bg-green-600",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is available 24/7 to assist with any queries, ensuring a seamless and enjoyable experience for all our clients.",
      icon: <FaHandshake />, // Main icon for dedicated support
      additionalIcon: <FaHeart />, // Relevant new icon for "Dedicated Support"
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Discover the unique benefits of GikiJoy Getaways, where we blend local
          expertise with a personalized touch, and guest
          experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-center text-white rounded-lg overflow-hidden h-52 ${feature.bgColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Main Icon */}
              <motion.div
                className="absolute flex items-center justify-center"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-7xl opacity-100 md:text-7xl sm:text-5xl relative bottom-6">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Additional Icon */}
              <motion.div
                className="absolute flex items-center justify-center"
                style={{ top: "60%", left: "80%" }} // Position for additional icon
              >
                <div className="text-3xl opacity-80">{feature.additionalIcon}</div>
              </motion.div>

              {/* Text Overlay */}
              <div className="relative p-0 text-center">
                <h3 className="relative text-xl font-semibold top-16">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
