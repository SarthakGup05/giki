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
import "lightgallery/css/lightgallery-bundle.css"
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Banner from "../../components/Utils/Banner";
import UkBanner from "/assets/images/page banner/home-banner2.jpg";
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
      "Whether you're looking for a weekend getaways or a longer escape, this property provides the perfect balance of comfort and nature.",
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
      <div className="container mx-auto p-4 md:p-6 space-y-8">
        {/* About Section */}
        <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              {property.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600">
              {property.description}
            </p>
            <p className="text-base md:text-lg text-gray-600">
              {property.additionalDescription}
            </p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <img
              src={property.images[0]?.src}
              alt="About Property"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Things to Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {property.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h4 className="text-lg md:text-xl font-bold text-gray-700 text-center">
                  {highlight.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 mt-2 text-center">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div>
            <LightGallery
            plugins={[lgZoom]}
            elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {property.images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                className="transform hover:scale-105 transition"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-72 object-cover rounded-md shadow"
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Location Section */}
        <div className="mt-8 flex items-center space-x-4">
          <FaMapMarkerAlt className="text-3xl text-blue-500" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              {property.locationText}
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              {property.locationDetail}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default Ranikhet;
