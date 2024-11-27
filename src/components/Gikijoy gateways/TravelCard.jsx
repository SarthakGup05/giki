import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TravelCard = ({ title, rating, reviews, location, beds, dates, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="travel-card w-full p-4 rounded-lg shadow-lg">
      <div className="relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={title} className="w-full h-48 rounded-lg object-cover" />
            </div>
          ))}
        </Slider>
        <span className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold rounded">
          Guest favourite
        </span>
        <button className="absolute top-2 right-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-1">⭐ {rating}</span>
          <span>({reviews})</span>
        </div>
        <p className="text-sm text-gray-600">{beds}</p>
        <p className="text-sm text-gray-600">{dates}</p>
      </div>
    </div>
  );
};

export default TravelCard;
