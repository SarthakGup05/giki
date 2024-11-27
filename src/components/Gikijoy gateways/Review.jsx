import React from 'react';
import PropTypes from 'prop-types';

const ReviewSection = ({ reviews }) => {
  return (
    <div className="review-section mt-6">
      <h2 className="text-lg font-semibold">Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mt-4">
          <p className="text-sm font-bold">{review.user}</p>
          <p className="text-sm">⭐ {review.rating}</p>
          <p className="text-sm text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

ReviewSection.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewSection;
