import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const routes = [
  {
    id: 1,
    title: "GikiJoy Getaways",
    description: "Exclusive getaways with unique experiences, relaxation, and adventure.",
    image: "./assets/images/SliderImages/travel.jpg",
    route: "/gikijoy-getaway",
  },
  {
    id: 2,
    title: "GikiJoy Farms",
    description: "Authentic farm experiences with fresh handpicked fruits.",
    image: "/assets/images/SliderImages/mangoFarm.jpg",
    route: "/gikijoy-farm",
  },
  {
    id: 3,
    title: "GikiJoy Agro Tourism",
    description: "Experience the beauty of aqua farming with fresh seafood.",
    image: "/assets/images/Aqua farms/aq farm.jpg",
    route: "/param-aqua-farm",
  },
];

const RouteCards = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Pathways</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Discover GikiJoy Farms and GikiJoy Getaways for authentic experiences and exclusive getaways.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* WhatsApp Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/7817821976" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition duration-300"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div> */}
    </section>
  );
};

export default RouteCards;
