import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Banner from "../../components/Utils/Banner";
import goa from "/assets/images/page banner/goa.jpg";
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";

const JungleVilla = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const property = {
    title: "Greek Jungle Villa",
    description:
      "As the day unfolds, step out onto your private terrace and savor delicious meals al fresco while admiring the stunning landscape. When you're ready to explore, venture out to the pristine beaches of North Goa, immerse yourself in the local culture at nearby markets, or indulge in thrilling water sports.",
    additionalDescription:
      "Indulge in the ultimate luxury and tranquility at the Greek Jungle Villa. Nestled amidst the lush greenery of North Goa, this stunning villa offers a perfect blend of modern comfort and rustic charm.",
    location:
      "Greek Jungle Villa, Sy. No. 306/27 Quarem vaddi, Siolim, Goa 403517",
    whatsappNumber: "7817821976",
    images: [
      { src: "/assets/images/jungle villa/1.jpg", alt: "Jungle Villa 1" },
      { src: "/assets/images/jungle villa/2.jpg", alt: "Jungle Villa 2" },
      { src: "/assets/images/jungle villa/8.jpg", alt: "Jungle Villa 3" },
      { src: "/assets/images/jungle villa/9.jpg", alt: "Jungle Villa 4" },
      { src: "/assets/images/jungle villa/11.jpg", alt: "Jungle Villa 5" },
      { src: "/assets/images/jungle villa/12.jpg", alt: "Jungle Villa 6" },
      { src: "/assets/images/jungle villa/13.jpg", alt: "Jungle Villa 7" },
      { src: "/assets/images/jungle villa/14.jpg", alt: "Jungle Villa 8" },
    ],
  };

  return (
    <>
      <Banner image={goa} />
      <div className="container mx-auto p-6 space-y-10">
        {/* Additional About Section */}
        <div className="additional-about flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-6 md:p-8 rounded-xl shadow-lg mb-8">
          <div className="flex-1 flex flex-col justify-center md:pr-6 lg:pr-8 space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              {property.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {property.description}
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {property.additionalDescription}
            </p>
            <button
              onClick={toggleModal}
              className="px-4 md:px-6 py-2 md:py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
            <img
              src={property.images[5]?.src}
              alt="About Property"
              className="w-full h-60 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Hero Section with Image Gallery */}
        <div className="hero p-0 rounded-xl shadow-2xl overflow-hidden">
          <LightGallery
            plugins={[lgZoom]}
            elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {property.images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                className="gallery-item transform hover:scale-105 transition"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 md:h-72 object-cover shadow-md rounded-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Description Section */}
        <div className="description mt-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            About this property
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Location Section */}
        <div className="location mt-8 flex items-center space-x-4 font-medium">
          <FaMapMarkerAlt className="text-2xl md:text-3xl text-blue-500" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Location</h3>
            <p className="text-base md:text-lg text-gray-700">
              {property.location}
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Booking Form */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default JungleVilla;
