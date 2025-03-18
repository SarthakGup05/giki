import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProductGrid = ({ products, category }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Modified grid with consistent 2 columns on small screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category={category} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge - positioned like in the reference */}
      {product.isNew && (
        <div className="absolute top-2 right-2 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          New
        </div>
      )}
      
      {/* Sale badge */}
      {product.onSale && (
        <div className="absolute top-2 right-2 z-10 bg-blue-400 text-white px-3 py-1 rounded-full text-xs font-medium">
          Save {product.discountPercent}%
        </div>
      )}
      
      {/* Sold out badge */}
      {product.soldOut && (
        <div className="absolute top-2 right-2 z-10 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
          Sold out
        </div>
      )}

      {/* Image container - clean white background, centered image */}
      <div className="relative pt-[100%] bg-gray-100 group-hover:bg-gray-200 overflow-hidden">
        <img
          src={product.imgSrc}
          alt={product.title}
          className={`absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>

      {/* Product details - centered, clean layout */}
      <div className="p-4 text-center flex-grow flex flex-col bg-gray-100">
        {/* Star rating */}
        <div className="flex justify-center mb-2 text-yellow-400">
          <span className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </span>
        </div>

        {/* Product title */}
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          {product.title}
        </h3>
        
        {/* Removed price section as requested */}
      </div>

      {/* Action button - single view details button */}
      <div className="px-4 pb-4 mt-auto bg-gray-100">
        <Link
          to={`/gikijoy-farm/product/${category}/${product.id}`}
          className="block w-full text-center py-2 bg-green-600 text-white rounded-md text-sm font-medium transition-colors duration-300 hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;