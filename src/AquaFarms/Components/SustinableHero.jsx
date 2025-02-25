import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SustainableHero = () => {
  const [activePoint, setActivePoint] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger initial animation after mount
    setIsVisible(true);
  }, []);

  const infoPoints = [
    {
      id: "nature",
      icon: "🌱",
      title: "Nature-based Solutions",
      description: "We implement regenerative agriculture practices that work with natural ecosystems rather than against them."
    },
    {
      id: "ecosystems",
      icon: "🌍",
      title: "Ecosystem Restoration",
      description: "Our methods actively restore degraded landscapes, increasing biodiversity and soil health across the Iberian Peninsula."
    },
    {
      id: "climate",
      icon: "☁️",
      title: "Climate Benefits",
      description: "Through carbon sequestration and reduced emissions, our approach helps mitigate climate change effects."
    },
    {
      id: "community",
      icon: "👥",
      title: "Community Empowerment",
      description: "We partner with local farmers to create sustainable livelihoods and strengthen regional food systems."
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-green-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.4 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-green-200 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.3 : 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-blue-200 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-3xl font-bold text-green-800 leading-tight mb-6">
            Sustainable Farming for
            <span className="block text-blue-500">Future Generations</span>
          </h1>
{/*           
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We grow premium, sustainable fruits while regenerating nature at scale throughout the Iberian Peninsula.
          </p> */}
        </motion.div>

        {/* Interactive Info Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {infoPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 20 
              }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`
                relative overflow-hidden rounded-xl p-6 cursor-pointer
                ${activePoint === point.id ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/80'} 
                transition-all duration-300 ease-in-out
              `}
              onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-2xl">
                  {point.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2">
                    {point.title}
                    <motion.span
                      animate={{ rotate: activePoint === point.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-500 text-sm"
                    >
                      ↓
                    </motion.span>
                  </h3>
                  
                  <AnimatePresence>
                    {activePoint === point.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600">{point.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          {/* <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Discover Our Approach
          </button> */}
          
          {/* <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-sm text-gray-500"
          >
            Join the movement for sustainable agriculture in the Iberian Peninsula
          </motion.p> */}
        </motion.div>
      </div>
    </div>
  );
};

export default SustainableHero;