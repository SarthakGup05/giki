import React from 'react';

const Banner = ({ image, overlayColor = 'bg-black bg-opacity-50' }) => {
  return (
    <div className="relative w-full h-80">
      {/* Background image */}
      <div
        className="absolute top-0 bottom-20 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Overlay */}
      <div className={`${overlayColor} absolute top-0 left-0 w-full h-full z-10`}></div>
    </div>
  );
};

export default Banner;
