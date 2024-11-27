import React, {useState} from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Banner from "../../components/Utils/Banner";
import fern from "/assets/images/page banner/bn.jpeg";

import BookingForm from "../../components/Utils/BookingForm";
import Modal from "../../components/Utils/Modal";

const FernCottage = () => {
  // Define the property data directly within the component
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const property = {
    title: "Fern Cottage - Nainital",
    description:
      "Experience the charm of Fern Cottage in Nainital, nestled amidst breathtaking scenic beauty with panoramic mountain views. Perfect for a peaceful retreat, this property offers spacious accommodations and all modern amenities for a cozy stay.",
    additionalDescription:
      "With ample parking space and surrounded by nature’s tranquility, Fern Cottage is a serene getaway for families, couples, and travelers seeking comfort and relaxation. Enjoy the picturesque landscapes and a refreshing ambiance away from the city hustle.",
    location: "Nainital, Uttarakhand",
    whatsappNumber: "7817821976",
    images: [
      { src: "/assets/images/fern cottage/1.jpg", alt: "Fern Cottage 1" },
      { src: "/assets/images/fern cottage/2.jpg", alt: "Fern Cottage 2" },
      { src: "/assets/images/fern cottage/3.jpg", alt: "Fern Cottage 3" },
      { src: "/assets/images/fern cottage/4.jpg", alt: "Fern Cottage 4" },
      { src: "/assets/images/fern cottage/5.jpg", alt: "Fern Cottage 5" },
      // { src: "/assets/images/jungle villa/12.jpg", alt: "Fern Cottage 6" },
    ],
  };

  return (
    <>
      <Banner image={fern} />
      <div className="container mx-auto p-6 space-y-10">
        {/* Additional About Section */}
        <div className="additional-about flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-8 rounded-xl shadow-lg mb-8">
          {/* Left side: Written content */}
          <div className="flex-1 flex flex-col justify-center md:pr-8 space-y-4 font-semibold">
            <h3 className="text-4xl font-bold text-gray-800">
              {property.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {property.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {property.additionalDescription}
            </p>
            <button
              onClick={toggleModal}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* Right side: Image */}
          <div className="flex-1 flex items-center justify-center mt-6 md:mt-0 md:pl-8">
            <img
              src={property.images[0]?.src} // Display the first image
              alt="About Property"
              className="w-full h-80 md:h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Hero Section with Image Gallery */}
        <div className="hero p-0 rounded-xl shadow-2xl overflow-hidden">
          <LightGallery
            plugins={[lgZoom]}
            elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {property.images.map((image, index) => (
              <a
                key={index}
                href={image.src} // Full-size image source
                className="gallery-item transform hover:scale-105"
              >
                <img
                  src={image.src} // Display thumbnail
                  alt={image.alt}
                  className="w-full h-72 object-cover shadow-md"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }} // Hide broken images
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Description Section */}
        <div className="description mt-8">
          <h3 className="text-3xl font-semibold mb-4">About this property</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Location Section */}
        <div className="location mt-8 flex items-center space-x-4 font-medium">
          <FaMapMarkerAlt className="text-3xl text-blue-500" />
          <div>
            <h3 className="text-2xl font-semibold">Location</h3>
            <p className="text-lg text-gray-700">{property.location}</p>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        {/* <a
          href={`https://wa.me/${property.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
        </a> */}
      </div>
       {/* Modal for Booking Form */}
       <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default FernCottage;
