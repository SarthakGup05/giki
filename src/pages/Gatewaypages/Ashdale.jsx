import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Banner from "../../components/Utils/Banner";
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";
import AshdaleImg from "/assets/images/grids/uk/ashdale.jpg";

const Ashdale = () => {
  const images = [
    { src: "/assets/images/grids/uk/2.jpg", alt: "Ashdale 1" },
    { src: "/assets/images/grids/uk/3.jpg", alt: "Ashdale 2" },
    { src: "/assets/images/grids/uk/4.jpg", alt: "Ashdale 3" },
    { src: "/assets/images/grids/uk/5.jpg", alt: "Ashdale 4" },
    { src: "/assets/images/grids/uk/6.jpg", alt: "Ashdale 5" },
    { src: "/assets/images/grids/uk/ashdale.jpg", alt: "Ashdale 6" },
  ];

  const title = "WelcomHeritage Ashdale";
  const description =
    "Offering an excellent view of the surroundings. All the guest rooms have been meticulously designed overlooking the greenery. The galleries adorn pictures full of history, the furniture stands to tell a story of a gracious lifestyle, not yet gone by.";
  const location = "Court Road Mallital, Nainital 263002 India";
  const whatsappNumber = "7817821976";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Banner image={AshdaleImg} />
      <div className="container mx-auto p-6 space-y-10">
        {/* Additional About Section */}
        <div className="additional-about flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-8 rounded-xl shadow-lg mb-8">
          {/* Left side: Written content */}
          <div className="flex-1 flex flex-col justify-center md:pr-8 space-y-4 font-semibold">
            <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nestled amidst green oaks, deodars, and a beautiful kidney-shaped
              lake reflecting the green from the densely forested hills that
              surround it, is an eighteenth-century bungalow with outhouses and
              a tennis court.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
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
              src="/assets/images/grids/uk/ashdale.jpg"
              alt="Ashdale"
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
            {images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                className="gallery-item transform hover:scale-105"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover shadow-md"
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Description Section */}
        <div className="description bg-white p-8 rounded-lg shadow-md mt-8 font-semibold">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Description
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            WelcomHeritage Ashdale is perfect for those seeking a serene escape
            surrounded by lush greenery and timeless architecture.
          </p>
        </div>

        {/* Location Section */}
        <div className="location mt-8 flex items-center space-x-4 font-medium">
          <FaMapMarkerAlt className="text-3xl text-red-500" />
          <p className="text-lg text-gray-700">{location}</p>
        </div>

        {/* Floating Contact Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
          {/* <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition transform hover:scale-110 shadow-lg flex items-center"
            title="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a> */}
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default Ashdale;
