import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Banner from "../../components/Utils/Banner";
import AquaImg from "/assets/images/grids/goa/4.jpg";
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";

const AquaBeach = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const images = [
    { src: "/assets/images/grids/goa/1.jpg", alt: "Aqua Beach Stays Ashwem" },
    { src: "/assets/images/grids/goa/2.jpg", alt: "Aqua Beach Stays Ashwem" },
    { src: "/assets/images/grids/goa/3.jpg", alt: "Aqua Beach Stays Ashwem" },
    { src: "/assets/images/grids/goa/4.jpg", alt: "Aqua Beach Stays Ashwem" },
    { src: "/assets/images/grids/goa/5.jpg", alt: "Aqua Beach Stays Ashwem" },
    { src: "/assets/images/grids/goa/6.jpg", alt: "Aqua Beach Stays Ashwem" },
  ];

  const title = "Aqua Beach Stays Ashwem";
  const description =
    "Tiracol Fort is 19 km from the hotel, while Thivim railway station is 23 km from the property. Manohar Parrikar International Airport is 26 km away.";
  const location =
    "Survey No.216/0, Ashwem Beach, Opposite Ashwem Beach Resort, Ashwem, Goa, 403527 Mandrem, India";

  return (
    <>
      <Banner image={AquaImg} />
      <div className="container mx-auto p-4 sm:p-6 md:p-8 space-y-8">
        {/* About Section */}
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-6 md:p-8 rounded-xl shadow-lg space-y-6 md:space-y-0 md:space-x-8">
          {/* Left: Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              {title}
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Set in Mandrem, within a few steps of Ashwem Beach and 600 metres
              of Mandrem Beach, Aqua Beach Stays Ashwem offers accommodation
              with a shared lounge and free WiFi throughout the property as well
              as free private parking for guests who drive. Boasting room
              service, this property also provides guests with a sun terrace.
              The property is non-smoking and is located 16 km from Chapora
              Fort.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src="/assets/images/grids/goa/4.jpg"
              alt="Aqua Beach Stays Ashwem"
              className="w-full h-64 md:h-80 lg:h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="rounded-xl shadow-2xl overflow-hidden">
          <LightGallery
            plugins={[lgZoom]}
            elementClassNames="grid grid-cols-2 gap-4 md:grid-cols-3"
          >
            {images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                className="transform hover:scale-105"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 md:h-56 object-cover rounded-lg shadow"
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Description Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Description
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Located near Village Lokarka, Amritsar, Chahal Farms offers a
            peaceful retreat in the lush landscapes of Punjab. Whether you're
            seeking relaxation or adventure, this property provides an ideal
            getaway amidst nature.
          </p>
        </div>

        {/* Location Section */}
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-2xl md:text-3xl text-red-500" />
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            {location}
          </p>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default AquaBeach;
