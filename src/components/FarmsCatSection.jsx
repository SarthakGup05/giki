import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FarmsCat = [
  {
    id: 1,
    title: "Fruit farms",
    description: "taste our products made from fresh fruits",
    image: "/assets/images/SliderImages/2.1.jpg",
    route: "/gikijoy-farm/food-products",
  },
  {
    id: 2,
    title: "Aqua farms",
    description: "EXPERIENCE THE FARM FRESHNESS",
    image: "/assets/images/page banner/aqua banner.jpg",
    route: "/param-aqua-farm",
  },
  {
    id: 3,
    title: "Hemp farms",
    description: "More products Coming soon !",
    image: "/assets/images/page banner/hemp farms.jpg",
    route: "/gikijoy-farm/corporate-gifts",
  },
  {
    id: 4,
    title: "Dairy farms",
    description: "products Coming soon !",
    image: "/assets/images/page banner/dairy farms.jpg",
    route: "/gikijoy-farm",
    comingSoon: true, // Add a flag to identify the "Coming Soon" card
  },
];

const CategorySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Using a media query to detect screen size
  const isDesktop = window.innerWidth >= 1024;

  // Reorder FarmsCat for small screens
  const reorderedFarmsCat = isDesktop ? FarmsCat : [FarmsCat[1], FarmsCat[0], FarmsCat[2], FarmsCat[3]];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore our variety farms</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Explore our variety of farms and find the perfect gift for your loved ones.
        </p>

        {isDesktop ? (
          // Desktop: Slider
          <Slider {...settings}>
            {FarmsCat.map((farm, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg bg-white mx-4 hover:shadow-2xl transform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={farm.image}
                  alt={farm.title}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out"
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>

                {/* "Coming Soon" Badge */}
                {farm.comingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-justify text-sm text-white">
                  <h3 className="text-xl font-mono mt-12">{farm.title}</h3>
                  <p className="text-sm mb-1 font-sans"></p>
                  <Link to={farm.route}>
                    <motion.button
                      className="inline-block mt-4 rounded-full bg-yellow-500 text-black py-2 px-4 shadow-md hover:bg-orange-600 transition duration-300 font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </Slider>
        ) : (
          // Small Screens: Grid Layout
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reorderedFarmsCat.map((farm, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={farm.image}
                  alt={farm.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>

                {/* "Coming Soon" Badge */}
                {farm.comingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <h3 className="pr-6 text-sm font-mono mt-14">{farm.title}</h3>
                  {/* <p className="text-sm mb-4">{farm.description}</p> */}
                  <Link to={farm.route}>
                    <motion.button
                      className="inline-block mt-4 rounded-full bg-yellow-500 text-black text-xs py-2 px-4 shadow-md hover:bg-orange-600 transition duration-300 font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;