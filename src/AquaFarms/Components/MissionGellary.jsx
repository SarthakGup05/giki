import React, { useState } from 'react';

const MasonryGallery = () => {
  // Sample gallery items with Unsplash images and varying heights
  const galleryItems = [
    { id: 1, height: 'h-64', image: "/assets/images/Aqua farms/gallery/1.jpg" },
    { id: 2, height: 'h-96', image: "/assets/images/Aqua farms/gallery/2.jpg" },
    { id: 3, height: 'h-72', image: "/assets/images/Aqua farms/gallery/3.jpg" },
    { id: 4, height: 'h-80', image: "/assets/images/Aqua farms/gallery/4.jpg" },
    { id: 5, height: 'h-64', image: "/assets/images/Aqua farms/gallery/5.jpg" },
    { id: 6, height: 'h-96', image: "/assets/images/Aqua farms/gallery/1.jpg" },
    { id: 7, height: 'h-72', image: "/assets/images/Aqua farms/gallery/1.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative p-4 bg-gray-50">
      {/* Heading and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800"><span className='text-green-600'>Organic</span> &  <span className='text-cyan-600'>Aqua Farming</span> Gallery</h1>
        <p className="text-gray-600 mt-2">
          Explore the beauty of sustainable organic farming and serene aqua farming through our curated gallery.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid relative group cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className={`relative ${item.height} overflow-hidden rounded-lg`}>
              <img
                src={item.image}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt="Selected gallery item"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                setSelectedImage(galleryItems[prevIndex]);
              }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % galleryItems.length;
                setSelectedImage(galleryItems[nextIndex]);
              }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
