import React, {useState} from "react";
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
    "Tiracol Fort is 19 km from the hotel, while Thivim railway station is 23 km from the property. Manohar Parrikar International Airport is 26 km away."
  const location =
    " Survey No.216/0, Ashwem Beach, Opposite Ashwem Beach Resort, Ashwem, Goa, 403527 Mandrem, India";
  const whatsappNumber = "7817821976";
  const phoneNumber = "yourphonenumber";

  return (
    <>
      <Banner image={AquaImg} />
      <div className="container mx-auto p-6 space-y-10">
        {/* Additional About Section */}
        <div className="additional-about flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-8 rounded-xl shadow-lg mb-8">
          {/* Left side: Written content */}
          <div className="flex-1 flex flex-col justify-center md:pr-8 space-y-4 font-semibold">
            <h3 className="text-4xl font-bold text-gray-800">
            Aqua Beach Stays Ashwem
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Set in Mandrem, within a few steps of Ashwem Beach and 600 metres
              of Mandrem Beach, Aqua Beach Stays Ashwem offers accommodation
              with a shared lounge and free WiFi throughout the property as well
              as free private parking for guests who drive. Boasting room
              service, this property also provides guests with a sun terrace.
              The property is non-smoking and is located 16 km from Chapora
              Fort.
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
              src="/assets/images/grids/goa/4.jpg"// Replace with the desired image
              alt="About Chahal Farms"
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
                href={image.src} // Full-size image source
                className="gallery-item transform hover:scale-105"
              >
                <img
                  src={image.src} // Display thumbnail
                  alt={image.alt}
                  className="w-full h-72 object-cover shadow-md"
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Existing About this Property Section */}
        <div className="description bg-white p-8 rounded-lg shadow-md mt-8 font-semibold">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Description
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Located near Village Lokarka, Amritsar, Chahal Farms offers a
            peaceful retreat in the lush landscapes of Punjab. Whether you're
            seeking relaxation or adventure, this property provides an ideal
            getaway amidst nature.
          </p>
        </div>

        {/* Location Section */}
        <div className="location mt-8 flex items-center space-x-4  font-medium">
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
          {/* <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition transform hover:scale-110 shadow-lg flex items-center"
        title="Call"
      >
        <FaPhoneAlt size={20} />
      </a> */}
        </div>
      </div>

       <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default AquaBeach;
