import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

const FarmsCat = [
  {
    id: 1,
    title: "Fruit Farms",
    description: "Taste our products made from fresh fruits",
    image: "/assets/images/SliderImages/2.1.jpg",
    route: "/gikijoy-farm/food-products",
    color: "from-orange-600 to-yellow-400",
    icon: "🍎",
  },
  {
    id: 2,
    title: "Aqua Farms",
    description: "Experience the farm freshness",
    image: "/assets/images/page banner/aqua banner.jpg",
    route: "/param-aqua-farm",
    color: "from-blue-600 to-cyan-400",
    icon: "🐟",
  },
  {
    id: 3,
    title: "Hemp Farms",
    description: "More products coming soon!",
    image: "/assets/images/page banner/hemp farms.jpg",
    route: "/gikijoy-farm/corporate-gifts",
    color: "from-green-600 to-emerald-400",
    icon: "🌿",
  },
  {
    id: 4,
    title: "Dairy Farms",
    description: "Products coming soon!",
    image: "/assets/images/page banner/dairy farms.jpg",
    route: "/gikijoy-dairy-farm",
    comingSoon: true,
    color: "from-sky-600 to-indigo-400",
    icon: "🥛",
  },
];

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 transition-all z-10"
  >
    <ChevronLeft size={20} />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 transition-all z-10"
  >
    <ChevronRight size={20} />
  </button>
);

const CategorySection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = screenWidth >= 1024;

  const slidesToShow = useMemo(
    () => (screenWidth >= 1280 ? 3 : screenWidth >= 768 ? 2 : 1),
    [screenWidth]
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div initial="hidden" animate="visible" className="mb-12">
          <motion.h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
            Explore Our Variety Farms
          </motion.h2>
          <motion.div className="h-1 bg-yellow-500 mx-auto mb-6 w-24" />
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of sustainable farms offering premium quality products.
          </motion.p>
        </motion.div>

        {isDesktop ? (
          <div className="relative">
            <Slider {...settings} className="px-4">
              {FarmsCat.map((farm) => (
                <div key={farm.id} className="px-3">
                  <FarmCard farm={farm} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FarmsCat.map((farm) => (
              <FarmCard key={farm.id} farm={farm} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const FarmCard = ({ farm }) => (
  <motion.div
    className="relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 group h-72 md:h-80"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-xl shadow-md">
      {farm.icon}
    </div>

    {farm.comingSoon && (
      <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
        Coming Soon
      </div>
    )}

    <img
      src={farm.image}
      alt={farm.title}
      className="h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 bg-gradient-to-t from-black/60 to-transparent">
      <h3
        className="text-xl md:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        {farm.title}
      </h3>
      <Link
        to={farm.route}
        className="bg-yellow-500 text-white px-2 py-2 rounded-full text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 transition-all duration-500"
      >
        View Details →
      </Link>
    </div>
  </motion.div>
);

export default CategorySection;
