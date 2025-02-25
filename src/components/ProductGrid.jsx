import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProductGrid = ({ products, category }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category={category} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to check if description needs "See More" button
  const needsExpansion = product.description && product.description.length > 100;

  return (
    <div
      className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10 bg-yellow-600 text-black px-2 py-1 rounded-full text-xs font-semibold">
          New
        </div>
      )}

      {/* Image Section - Square 1:1 Aspect Ratio */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.imgSrc}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Details Section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
            <span className="text-lg font-bold text-orange-600">{product.price}</span>
          </div>
        </div>

        {product.description && (
          <div className="space-y-3">
            <div className="relative">
              <p
                className={`text-gray-600 text-sm transition-all duration-500 ease-in-out ${
                  isExpanded ? 'line-clamp-none' : 'line-clamp-2'
                }`}
              >
                {product.description}
              </p>
              {needsExpansion && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center mt-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-all duration-300 group/button"
                >
                  <span className="relative">
                    {isExpanded ? 'See Less' : 'See More'}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover/button:scale-x-100" />
                  </span>
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex border-t border-gray-100">
        <Link
          to={`/gikijoy-farm/product/${category}/${product.id}`}
          className="w-1/2 text-center py-4 bg-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:bg-yellow-700 flex items-center justify-center gap-2"
        >
          View Details
        </Link>
        <a
          href={`https://wa.me/${product.whatsappNumber || "7817821976"}?text=I'm interested in ${product.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 text-center py-4 bg-green-500 text-white text-sm font-semibold transition-all duration-300 hover:bg-green-600 flex items-center justify-center gap-2"
        >
          Buy on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductGrid;