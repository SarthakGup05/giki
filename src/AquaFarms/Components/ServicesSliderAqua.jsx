import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSliderAqua = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const whatsappNumber = "7817821976";

  // Function to create WhatsApp link with custom message for each service
  const getWhatsAppLink = (serviceName) => {
    const message = encodeURIComponent(
      `Hello, I'm interested in booking your "${serviceName}" service. Could you provide more information?`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const services = [
    {
      title: "Fishing Adventures",
      icon: "🎣",
      image: "/assets/images/Aqua farms/services/fishing.jpg",
      description:
        "Experience the thrill of catching your own fish in our well-stocked ponds. Our expert guides will help you master various fishing techniques while enjoying the serene environment.",
      features: [
        "Professional fishing guides",
        "Premium equipment rental",
        "Various fish species",
        "Catch and cook option",
      ],
      color: "from-blue-600 to-teal-400",
      accentColor: "text-teal-300",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
    },
    {
      title: "Luxury Stay",
      icon: "🏠",
      image: "/assets/images/Aqua farms/services/stay.jpg",
      description:
        "Unwind in our comfortable waterfront cottages featuring modern amenities and stunning views. Each cottage is designed to provide the perfect blend of luxury and nature.",
      features: [
        "Waterfront view",
        "Premium bedding",
        "Private deck",
        "Complimentary breakfast",
      ],
      color: "from-indigo-600 to-purple-400",
      accentColor: "text-purple-300",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Organic Dining",
      icon: "🍽️",
      image: "/assets/images/Aqua farms/services/dining.jpg",
      description:
        "Savor farm-to-table dining experiences with fresh fish. Our expert chefs create memorable meals using ingredients from our own organic farm.",
      features: [
        "Farm-to-table cuisine",
        "Waterside seating",
        "Private dining options",
        "Seasonal menu",
      ],
      color: "from-green-600 to-emerald-400",
      accentColor: "text-emerald-300",
      buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    },
  ];

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Discover our premium aqua experiences designed for unforgettable
            moments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden h-full bg-slate-800 shadow-xl transform transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                
                <h3 className="text-xl font-bold text-white tracking-wider mb-3 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Section */}
                <div>
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className={`flex items-center gap-2 ${service.accentColor} font-medium mb-4`}
                  >
                    View features
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {/* Animated Features List */}
                  <AnimatePresence>
                    {activeIndex === index && service.features && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mb-6 overflow-hidden"
                      >
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <span
                              className={`inline-block w-2 h-2 rounded-full ${
                                service.color.split(" ")[1]
                              }`}
                            ></span>
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Call to Action Button */}
                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block w-full py-3 rounded-lg ${service.buttonColor} text-white font-medium transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-offset-slate-800 text-center group`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Now
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSliderAqua;
