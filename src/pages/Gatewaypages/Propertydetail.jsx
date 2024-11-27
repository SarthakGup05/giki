// src/components/PropertyDetail.jsx
import React from 'react';
import { LightGalleryProvider, LightGalleryItem } from 'react-lightgallery';
import 'lightgallery/css/lightgallery.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const PropertyDetail = ({ property }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Property Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-600 mt-2">{property.location}</p>
        </div>

        {/* Image Gallery */}
        <LightGalleryProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {property.images.map((image, index) => (
              <LightGalleryItem key={index} src={image}>
                <motion.div
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt={`Property image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
                  />
                </motion.div>
              </LightGalleryItem>
            ))}
          </div>
        </LightGalleryProvider>

        {/* Property Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About This Property</h2>
          <p className="text-gray-700 leading-relaxed">{property.description}</p>
        </div>

        {/* Location */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex items-start">
          <FaMapMarkerAlt className="text-red-500 text-3xl mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-gray-600 mt-2">{property.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;
