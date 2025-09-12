// src/components/RouteCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const routes = [

  {
    id: 1,
    title: "GikiJoy farms",
    description: "Exclusive handpicked mangoes directly from farms.",
    image: "/assets/images/SliderImages/mangoFarm.jpg",
    route: "/",
  },
];

const RouteCardsGateway = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Routes</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Discover Giki Farms and Giki getaways for authentic experiences and exclusive getaways.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transform transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={route.image}
                alt={route.title}
                className="w-full h-56 object-cover transition-transform duration-500 ease-in-out"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                <h3 className="text-2xl font-semibold mb-2">{route.title}</h3>
                <p className="text-sm mb-4">{route.description}</p>
                <Link to={route.route}>
                  <motion.button
                    className="inline-block mt-4 rounded-full bg-yellow-500 text-black py-2 px-4 shadow-md hover:bg-orange-600 transition duration-300 font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    View 
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteCardsGateway;
