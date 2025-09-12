import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const routes = [
  {
    id: 1,
    title: "TokenZ",
    description:
      " Gifts and handicrafts",
    image: "./assets/images/SliderImages/khadi_banner_x1024.webp",
    route: "https://Tokenz.com/",
  },
  {
    id: 2,
    title: "Online rakhi store",
    description: " Send anywhere in world Free Shipping",
    image: "/assets/images/SliderImages/NRI.jpg",
    route: "http://Nrirakhi.com",
  },
  // {
  //   id: 3,
  //   title: "GikiJoy Agro Tourism",
  //   description: "Experience the beauty of aqua farming with fresh food.",
  //   image: "/assets/images/page banner/aqua banner.jpg",
  //   route: "/param-aqua-farm",
  // },
  // {
  //   id: 3,
  //   title: "Farm Produces",
  //   description: "Experience the freshness with our products.",
  //   image: "/assets/images/page banner/fruit banner.jpg",
  //   route: "/gikijoy-products",
  // },
  // {
  //   id: 4,
  //   title: "Joy of gifting",
  //   description: "Gift your loved ones with our exclusive gift hampers.",
  //   image: "/assets/images/page banner/gift.jpg",
  //   route: "/gikijoy-gifts",
  // },

];

const GiftsRouteCards = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to GikiJoy
        </h2> */}
        {/* <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Discover GikiJoy Farms and GikiJoy Getaways for authentic experiences
          and exclusive getaways.
        </p> */}

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
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white line-break">
                <h3 className="text-xl font-semibold mt-20 capitalize">{route.title}</h3>
                {route.description && (
                  <p
                    className="text-sm mt-4"
                    dangerouslySetInnerHTML={{ __html: route.description }}
                  />
                )}
                <Link to={route.route}>
                  <motion.button
                    className="inline-block mt-4 rounded-full bg-yellow-500 text-black py-2 px-4 shadow-md hover:bg-orange-600 transition duration-300 font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    Explore
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

export default GiftsRouteCards;
