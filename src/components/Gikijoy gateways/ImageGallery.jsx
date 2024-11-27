import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ images = [] }) => {
  return (
    <div className="image-gallery grid grid-cols-2 gap-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

export default ImageGallery;
