import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Modal from "./Modal";
import BookingForm from "./BookingForm";

const BookNow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Do not render the component if the current route is "/"
  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      {/* Book Now Button styled as per the reference */}
      <button
        onClick={toggleModal}
        className="fixed top-[60%] right-[-30px] px-4 py-2 bg-yellow-500 text-white rounded-l-lg shadow-md hover:bg-yellow-600 transition z-50 rotate-90 font-semibold"
        style={{
          textOrientation: "mixed", // Text orientation for better vertical layout
        }}
      >
        Book Now
      </button>

      {/* Modal for Booking Form */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default BookNow;
