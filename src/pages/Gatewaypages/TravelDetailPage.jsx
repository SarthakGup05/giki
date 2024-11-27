import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../../components/Gikijoy gateways/ImageGallery';
import listingData from '../../app/ListingData';

const TravelDetailsPage = () => {
  const { id } = useParams();

  // Parse id to integer if your listing IDs are numbers
  const travelItem = listingData.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!travelItem) {
    return <p>Travel details not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Image Gallery */}
      <ImageGallery images={travelItem.images} />

      {/* Travel Details */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Details */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-semibold">{travelItem.title}</h1>
          <p className="text-gray-500">{travelItem.location}</p>
          <p className="text-sm text-gray-700">{travelItem.description}</p>
          
          {/* Description */}
          <div className="mt-4">
            <h2 className="text-xl font-medium">About this place</h2>
            <p className="text-gray-700 mt-2">{travelItem.details}</p>
          </div>

          {/* Host Information */}
          <div className="border-t pt-4 mt-4">
            <h2 className="text-xl font-medium">Meet your host</h2>
            <p><strong>Host:</strong> {travelItem.host.name}</p>
            <p><strong>Hosting Duration:</strong> {travelItem.host.hostingDuration}</p>
            <p><strong>Experience:</strong> {travelItem.host.experience}</p>
            {travelItem.host.selfCheckIn && <p>✅ Self Check-in Available</p>}
          </div>

          {/* Reviews */}
          <div className="border-t pt-4 mt-4">
            <h2 className="text-xl font-medium">Reviews</h2>
            {travelItem.reviews.map((review, index) => (
              <div key={index} className="mt-2">
                <p className="text-gray-700">"{review.comment}"</p>
                <p className="text-gray-500 text-sm">– {review.user} ⭐ {review.rating}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Booking Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-2xl font-bold">{travelItem.pricePerNight} / night</p>
          <button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg">Reserve</button>
          <div className="border-t mt-4 pt-4">
            <p><strong>Check-in:</strong> 25 Nov</p>
            <p><strong>Check-out:</strong> 30 Nov</p>
            <p><strong>Guests allowed:</strong> 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsPage;
