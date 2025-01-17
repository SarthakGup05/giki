import React from "react";
import { motion } from "framer-motion";

const ServicesSliderAqua = () => {
  const services = [
    {
      title: "Fishing Adventures",
      image: "/assets/images/Aqua farms/services/fishing.jpg",
      description:
        "Experience the thrill of catching your own fish in our well-stocked ponds. Our expert guides will help you master various fishing techniques while enjoying the serene environment.",
      features: [
        "Professional fishing guides",
        "Premium equipment rental",
        "Various fish species",
        "Catch and cook option",
      ],
    },
    {
      title: "Luxury Stay",
      image: "/assets/images/Aqua farms/services/stay.jpg",
      description:
        "Unwind in our comfortable waterfront cottages featuring modern amenities and stunning views. Each cottage is designed to provide the perfect blend of luxury and nature.",
    },
    {
      title: "Organic Dining",
      image: "/assets/images/Aqua farms/services/dining.jpg",
      description:
        "Savor farm-to-table dining experiences with fresh organic produce and seafood. Our expert chefs create memorable meals using ingredients from our own organic farm.",
    },
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">
            Discover our premium services designed for your comfort and enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.5)",
              }}
              className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300"
            >
              <div className="relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSliderAqua;
