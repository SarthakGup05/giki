import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getaways = [
  {
    id: 1,
    title: "Uttarakhand",
    description: "Nestled in the serene Himalayas, ideal for nature lovers and adventure seekers.",
    image: "/assets/images/SliderImages/ranikhet.jpg",
    route: "/gikijoy-getaway/uttarakhand",
  },
  {
    id: 2,
    title: "Goa",
    description: "Perfect coastal retreats for relaxation and vibrant nightlife.",
    image: "/assets/images/SliderImages/beach card.jpg",
    route: "/gikijoy-getaway/goa",
  },
  {
    id: 3,
    title: "Punjab",
    description: "Authentic 'pind' experience at Amritsar for a taste of Punjabi culture.",
    image: "/assets/images/SliderImages/gloden temple.jpg",
    route: "/gikijoy-getaway/punjab",
  },
  {
    id: 4,
    title: "Uttar Pradesh",
    description: "Coming soon !",
    image: "/assets/images/SliderImages/up.jpg",
    route: "/gikijoy-getaway/getaway",
  },
];

const GetawaySection = () => {
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

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Next Getaways</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Explore our exclusive getaways in Uttarakhand, Goa, Punjab, and Uttar Pradesh. Discover serene landscapes, vibrant nightlife, and authentic experiences.
        </p>

        {isDesktop ? (
          // Desktop: Slider
          <Slider {...settings}>
            {getaways.map((getaway, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg bg-white mx-4 hover:shadow-2xl transform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={getaway.image}
                  alt={getaway.title}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out"
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">{getaway.title}</h3>
                  <p className="text-sm mb-4">{getaway.description}</p>
                  <Link to={getaway.route}>
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
            {getaways.map((getaway, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={getaway.image}
                  alt={getaway.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">{getaway.title}</h3>
                  <p className="text-sm mb-4">{getaway.description}</p>
                  <Link to={getaway.route}>
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
          </div>
        )}
      </div>
    </section>
  );
};

export default GetawaySection;
