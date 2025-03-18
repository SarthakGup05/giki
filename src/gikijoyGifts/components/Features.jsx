import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  const features = [
    {
      title: "Personalized Gifts",
      description: "Create unique gifts tailored to your recipient's preferences and interests.",
      icon: "gift",
      color: "indigo"
    },
    {
      title: "Fast Delivery",
      description: "Get your gifts delivered quickly and securely to any location worldwide.",
      icon: "truck",
      color: "emerald"
    },
    {
      title: "Quality Guarantee",
      description: "Our products are made with premium materials to ensure lasting satisfaction.",
      icon: "shield-check",
      color: "amber"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getGradient = (color) => {
    const gradients = {
      indigo: "from-indigo-500 to-purple-600",
      emerald: "from-emerald-500 to-teal-600",
      amber: "from-amber-500 to-orange-600"
    };
    return gradients[color] || "from-blue-500 to-indigo-600";
  };

  const getIconBg = (color) => {
    const backgrounds = {
      indigo: "bg-indigo-100",
      emerald: "bg-emerald-100",
      amber: "bg-amber-100"
    };
    return backgrounds[color] || "bg-blue-100";
  };

  const getIconColor = (color) => {
    const colors = {
      indigo: "text-indigo-600",
      emerald: "text-emerald-600",
      amber: "text-amber-600"
    };
    return colors[color] || "text-blue-600";
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the joy of giving with our premium service</p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${getGradient(feature.color)}`}></div>
              <div className="p-8">
                <div className={`w-20 h-20 ${getIconBg(feature.color)} rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-12`}>
                  <svg
                    className={`w-10 h-10 ${getIconColor(feature.color)}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {feature.icon === "gift" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    )}
                    {feature.icon === "truck" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    )}
                    {feature.icon === "shield-check" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
                {/* <motion.div
                  className="mt-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="#" className={`inline-flex items-center text-sm font-medium text-${feature.color}-600 hover:text-${feature.color}-800`}>
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;