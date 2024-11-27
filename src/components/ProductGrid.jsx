import React from "react";
import { Link } from "react-router-dom";

export const ProductGrid = ({ products, category }) => {
  return (
    <div className="container mx-auto p-6 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center items-center">
        {products.map((product) => (
          <div
            key={product.id} // Ensure product.id is unique
            className="relative bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <Link
                  to={`/gikijoy-farm/product/${category}/${product.id}`}
                  className="bg-orange-600 text-white py-2 px-4 text-sm rounded-lg shadow-md hover:bg-yellow-500 font-medium mb-4 transition-transform transform hover:scale-105"
                >
                  View Product
                </Link>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-600 font-medium text-md mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
