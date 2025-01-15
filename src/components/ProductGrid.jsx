import React from "react";
import { Link } from "react-router-dom";

export const ProductGrid = ({ products, category }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id} // Ensure product.id is unique
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative w-full h-60 sm:h-64 overflow-hidden">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                <Link
                  to={`/gikijoy-farm/product/${category}/${product.id}`}
                  className="bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 font-semibold mb-6 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-orange-600 font-bold text-xl">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500">
                  {product.quantity} available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
