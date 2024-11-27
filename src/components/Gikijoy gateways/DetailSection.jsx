import React from 'react';

const DetailsSection = ({
  title = "Title not available",          // Default title
  location = "Location not specified",     // Default location
  guests = 0,                              // Default guest capacity
  bedrooms = 0,                            // Default number of bedrooms
  beds = 0,                                // Default number of beds
  bathrooms = 0                            // Default number of bathrooms
}) => {
  return (
    <div className="details-section mt-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="mt-2 text-sm">
        {guests} guests · {bedrooms} bedrooms · {beds} beds · {bathrooms} bathrooms
      </p>
    </div>
  );
};

export default DetailsSection;
