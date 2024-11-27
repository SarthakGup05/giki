import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaSun,
  FaUtensils,
  FaTree,
  FaCampground,
} from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Banner from "../../components/Utils/Banner";
import UkBanner from "/assets/images/page banner/home-banner2.jpg";
import BNResort from "./BNResort";
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";

const Ranikhet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const propertyData = {
    title: "Sukoon Nature Retreat",
    description:
      "Located amidst the tranquil hills of Ranikhet, this property offers breathtaking views and a peaceful retreat.",
    additionalDescription:
      "Whether you're looking for a weekend getaway or a longer escape, this property provides the perfect balance of comfort and nature.",
    highlights: [
      {
        title: "Mesmerizing Sunsets",
        description:
          "Experience captivating sunsets over the hills, painting the skies with vivid hues of orange and purple.",
        icon: <FaSun className="text-3xl text-yellow-500" />,
      },
      {
        title: "Jungle Meals",
        description:
          "Relish delicious meals amidst the wilderness, crafted to provide a unique outdoor dining experience.",
        icon: <FaUtensils className="text-3xl text-green-600" />,
      },
      {
        title: "Dense Jungle Tracks",
        description:
          "Explore dense jungle trails that lead you through the serene and untouched beauty of nature.",
        icon: <FaTree className="text-3xl text-green-700" />,
      },
      {
        title: "Other Activities",
        description:
          "Enjoy bonfire nights, bird watching, and more to make your stay truly unforgettable.",
        icon: <FaCampground className="text-3xl text-orange-500" />,
      },
    ],
    locationText: "Hillside Retreat",
    locationDetail: "Sukoon Nature Retreat, Bhatrojkhan (Near Ranikhet)",
    whatsappNumber: "7817821976",
    images: [
      { src: "/assets/images/sukoon nature/1.jpg", alt: "Ranikhet Property 1" },
      { src: "/assets/images/sukoon nature/6.jpg", alt: "Ranikhet Property 2" },
      { src: "/assets/images/sukoon nature/3.jpg", alt: "Ranikhet Property 3" },
      {
        src: "/assets/images/sukoon nature/5.jpeg",
        alt: "Ranikhet Property 4",
      },
      { src: "/assets/images/sukoon nature/7.jpg", alt: "Ranikhet Property 5" },
    ],
  };

  const [property, setProperty] = useState({});

  useEffect(() => {
    setProperty(propertyData);
  }, []);

  if (!property.images) return null;

  return (
    <>
      <Banner image={UkBanner} />
      <div className="container mx-auto p-6 space-y-10">
        {/* About Section */}
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
              src={property.images[0]?.src}
              alt="About Property"
              className="w-full h-80 md:h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="things-to-do mt-10">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Things to Do</h3>
          </div>
          <div className="highlights grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {property.highlights.map((highlight, index) => (
              <div
                key={index}
                className="highlight-item bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
              >
                {/* Icon for Highlight */}
                <div className="mb-4">{highlight.icon}</div>
                {/* Title of Highlight */}
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {highlight.title}
                </h4>
                {/* Description of Highlight */}
                <p className="text-gray-600 text-sm text-center">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="hero p-0 rounded-xl shadow-2xl overflow-hidden">
          <LightGallery
            plugins={[lgZoom, lgThumbnail]}
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
            <h3 className="text-2xl font-semibold">{property.locationText}</h3>
            <p className="text-lg text-gray-700">{property.locationDetail}</p>
          </div>
        </div>

        {/* Floating Contact Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
          {/* <a
            href={`https://wa.me/${property.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition transform hover:scale-110 shadow-lg flex items-center"
          >
            <FaWhatsapp size={20} />
          </a> */}
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-8 border-t-2 border-gray-300 mt-9" />

      {/* BNResort Section */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default Ranikhet;
