import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';
import { motion } from 'framer-motion';

const MasonryGallery = () => {
  // Sample gallery items with images
  const galleryItems = [
    { id: 1, image: "/assets/images/Aqua farms/gallery/1.jpg" },
    { id: 2, image: "/assets/images/Aqua farms/gallery/2.jpg" },
    { id: 3, image: "/assets/images/Aqua farms/gallery/3.jpg" },
    { id: 4, image: "/assets/images/Aqua farms/gallery/4.jpg" },
    { id: 5, image: "/assets/images/Aqua farms/gallery/5.jpg" },
    
  
  ];

  return (
    <div className="relative p-4 bg-gray-50">
      {/* Heading and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className='text-green-600'>Organic</span> & <span className='text-cyan-600'>Aqua Farming</span> Gallery
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the beauty of sustainable organic farming and serene aqua farming through our curated gallery.
        </p>
      </div>

      {/* LightGallery Masonry Grid */}
      <LightGallery plugins={[lgZoom]} elementClassNames="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.a
            key={index}
            data-lg-size="1400-933"
            data-src={item.image} // Required for LightGallery
            className="gallery-item overflow-hidden rounded-xl shadow-lg block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={item.image}
              alt={`Gallery item ${item.id}`}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </motion.a>
        ))}
      </LightGallery>
    </div>
  );
};

export default MasonryGallery;
