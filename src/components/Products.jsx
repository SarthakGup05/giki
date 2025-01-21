import React from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCategoryCards = () => {
  const products = [
    {
      title: "Dashehari Mangoes",
      price: "₹200",
      tag: "Premium Selection",
      imageUrl: "assets/images/mango shoot/Ambika/0H2A9752.JPG",
    },
    {
      title: "Mango Cans",
      price: "₹150",
      tag: "Best Seller",
      imageUrl:
        "/assets/images/mango shoot/GikiJoy Cans/DASHEHRI  Slices in Pulp/GKJPulp2.jpg",
    },
    {
      title: "Aamla Candy",
      price: "₹100",
      tag: "New Arrival",
      imageUrl: "/assets/images/MangoProduct/cover- ac1.png",
    },
  ];

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

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 rounded-full shadow-md">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-yellow-600">
                {product.title}
              </h3>
              <Link to="/gikijoy-farm/food-products">
                {" "}
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
                  <Eye className="w-5 h-5 inline mr-2" />
                  View Details
                </button>
              </Link>
              {/* <p className="text-lg font-bold text-gray-900">{product.price}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryCards;
