import React from "react";
import Slider from "react-slick";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoomFreshnerCategoryCards = () => {
  const products = [
    {
      title: "White Wood",
      price: "₹200",
      tag: "Premium Selection",
      imageUrl: "/assets/images/room freshners/1.jpg",
    },
    {
      title: "Golden Dust",
      price: "₹150",
      tag: "Best Seller",
      imageUrl: "/assets/images/room freshners/2.jpg",
    },
    {
      title: "Oudh Fancy",
      price: "₹100",
      tag: "New Arrival",
      imageUrl: "/assets/images/room freshners/3.jpg",
    },
    {
      title: "Romania Garden",
      price: "₹250",
      tag: "Limited Edition",
      imageUrl: "/assets/images/room freshners/4.jpg",
    },
    {
      title: "Eminence",
      price: "₹200",
      tag: "Premium Selection",
      imageUrl: "/assets/images/room freshners/5.jpg",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
          Product Categories
        </h2>
        <p className="text-gray-600 text-lg">
          Explore a variety of categories crafted with care.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings} className="slick-slider">
        {products.map((product, index) => (
          <div key={index} className="px-2">
            {/* Card */}
            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 rounded-full shadow-md">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Overlay Info */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <Link to="/gikijoy-products/room-freshner">
                  <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
                    <Eye className="w-5 h-5 inline mr-2" />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RoomFreshnerCategoryCards;
