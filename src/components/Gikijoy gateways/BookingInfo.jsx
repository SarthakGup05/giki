import React from 'react';

const BookingInfo = ({
  price = 0,             // Default price
  currency = "₹",        // Default currency symbol
  buttonText = "Reserve", // Default button text
  onReserve,             // Callback function for button click
}) => {
  return (
    <div className="booking-info p-4 border rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold">{currency}{price}/night</span>
      </div>
      <div className="mt-4">
        <label className="text-sm">Check-in</label>
        <input type="date" className="w-full p-2 border rounded mt-1" />
      </div>
      <div className="mt-4">
        <label className="text-sm">Check-out</label>
        <input type="date" className="w-full p-2 border rounded mt-1" />
      </div>
      <button
        className="w-full mt-4 py-2 bg-red-500 text-white rounded"
        onClick={onReserve} // Calls the onReserve function if provided
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BookingInfo;
