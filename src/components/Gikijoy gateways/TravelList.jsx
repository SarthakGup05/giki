import React from 'react';
import { Link } from 'react-router-dom';
import TravelCard from './TravelCard';
import listingData from '../../app/ListingData';

const TravelList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {listingData.map((item) => (
        <Link to={`/listing/${item.id}`} key={item.id}>
          <TravelCard
            title={item.title}
            rating={item.rating || 5.0}  // Default rating if not provided
            reviews={item.reviews ? item.reviews.length : 0}
            location={item.location}
            beds={item.details || 'N/A'}
            dates={item.dates || 'Available Dates Not Set'}
            images={item.images}
          />
        </Link>
      ))}
    </div>
  );
};

export default TravelList;
