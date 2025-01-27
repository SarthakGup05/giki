import React from "react";
import { Link } from "react-router-dom";

export const ProductGrid = ({ products, category }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Image Container with Overlay */}
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <Link
                  to={`/gikijoy-farm/product/${category}/${product.id}`}
                  className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 font-semibold tracking-wide transition-colors shadow-lg"
                >
                  Explore Details
                </Link>
              </div>
            </div>

            {/* Borderless Product Details */}
            <div className="p-4 space-y-2 bg-white">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-orange-600 font-bold text-lg">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500">
                  {product.quantity} in stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};