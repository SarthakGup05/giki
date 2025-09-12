import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTree,
  FaBinoculars,
  FaCampground,
} from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Banner from "../../components/Utils/Banner";
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";
import Bn from "/assets/images/page banner/bn.jpeg";

const BNResort = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const property = {
    title: "BN Resort",
    description:
      "Discover an opulent getaways at BN Resort, featuring stunning architecture and surrounded by picturesque landscapes. Perfect for a peaceful, high-end retreat.",
    additionalDescription:
      "BN Resort offers a serene environment perfect for those looking to escape the hustle and bustle. Enjoy luxury amenities and breathtaking views.",
    location:
      "B.N Resort, Patal Bhuvaneshwar Rd, Patal Bhuvaneshwar, Jhultar Barkhet, Uttarakhand 262522",
    whatsappNumber: "7817821976",
    images: [
      { src: "/assets/images/BnResort/_DSC2338.jpg", alt: "BN Resort 1" },
      { src: "/assets/images/BnResort/2.JPG", alt: "BN Resort 2" },
      { src: "/assets/images/BnResort/3.jpg", alt: "BN Resort 3" },
    ],
    thingsToDo: [
      {
        title: "Jungle Safari",
        description: "Explore the dense forest trails and encounter wildlife.",
        icon: <FaTree className="text-green-600 text-4xl" />,
      },
      {
        title: "Bonfire Nights",
        description: "Relax under the stars with a cozy bonfire.",
        icon: <FaCampground className="text-3xl text-orange-500" />,
      },
      {
        title: "Nature Walks",
        description: "Enjoy serene walks through lush greenery.",
        icon: <MdNaturePeople className="text-blue-600 text-4xl" />,
      },
      {
        title: "Leopard Spotting",
        description:
          "If you are lucky, you may spot the Leopard early morning or late nights.",
        icon: <FaBinoculars className="text-yellow-500 text-4xl" />,
      },
    ],
  };

  return (
    <>
      <Banner image={Bn} />
      <div className="container mx-auto p-6 space-y-10">
        {/* Additional About Section */}
        <div className="additional-about flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-8 rounded-xl shadow-lg mb-8">
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
          <div className="flex-1 flex items-center justify-center mt-6 md:mt-0 md:pl-8">
            <img
              src="\assets\images\BnResort\main.jpg"
              alt="About Property"
              className="w-[580px] h-80 md:h-full sm:w-96 object-contain rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Things to Do Section */}
        <div className="things-to-do bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Things to Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {property.thingsToDo.map((activity, index) => (
              <div
                key={index}
                className="activity-card bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4 hover:shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="icon-wrapper bg-gradient-to-r from-gray-100 to-gray-300 p-4 rounded-full shadow-inner">
                  {activity.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {activity.title}
                </h4>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
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

        {/* Location Section */}
        <div className="location mt-8 flex items-center space-x-4">
          <FaMapMarkerAlt className="text-3xl text-blue-500" />
          <div>
            <h3 className="text-2xl font-semibold">Location</h3>
            <p className="text-lg text-gray-700">{property.location}</p>
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

export default BNResort;
