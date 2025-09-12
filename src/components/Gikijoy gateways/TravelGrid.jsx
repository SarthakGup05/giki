import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Utils/Modal";
import BookingForm from "../Utils/BookingForm";

const TravelGrid = ({ products, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCardClick = (product, e) => {
    // Prevent card click if clicking on buttons
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    // Navigate to product details
    window.location.href = product.route;
  };

  return (
    <>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
          Getaways
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={(e) => handleCardClick(product, e)}
              className="relative bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative group">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 capitalize">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base md:text-base text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-between gap-4 relative z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                    className="bg-green-600 text-white font-semibold py-3 px-4 rounded-md transition-transform transform hover:scale-105 text-sm sm:text-base"
                  >
                    Book Now
                  </button>
                  <Link
                    to={product.route}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition-transform transform hover:scale-105 text-sm sm:text-base text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} closeModal={toggleModal}>
          <BookingForm />
        </Modal>
      </div>
    </>
  );
};

export default TravelGrid;
