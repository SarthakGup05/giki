import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Banner from "../../components/Utils/Banner";
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";
import AshdaleImg from "/assets/images/bhole baba/bgbnr.jpg";

const BabaAyurveda = () => {
  const images = [
    { src: "/assets/images/bhole baba/1.jpg", alt: "Baba Ayurveda" },
    { src: "/assets/images/bhole baba/2.jpg", alt: "Baba Ayurveda" },
    { src: "/assets/images/bhole baba/3.jpg", alt: "Baba Ayurveda" },
    { src: "/assets/images/bhole baba/4.jpg", alt: "Baba Ayurveda" },
    { src: "/assets/images/bhole baba/5.jpg", alt: "Baba Ayurveda" },
    { src: "/assets/images/bhole baba/6.jpg", alt: "Baba Ayurveda" },
  ];

  const title = "Bhole Baba Ayurvedic Hospital and Research Centre";
  const description =
    "BBAH is a pioneering project in Northern India, offering prevention and cure of chronic diseases through detoxification and holistic lifestyle modification.";
  const location =
    "Chilianaula, Ranikhet, Distt. Almora, Uttarakhand - 263647";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Banner image={AshdaleImg} />
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-white via-gray-100 to-white p-6 md:p-8 rounded-lg shadow-lg">
          {/* Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
              {title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              The Bhole Baba Ayurvedic Hospital and Research Centre is closely
              tied to the Baba Haidakhan Temple and Ashram. Known for its focus
              on holistic healing, the centre offers treatments guided by
              traditional wisdom and modern science.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            <button
              onClick={toggleModal}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 mt-6 md:mt-0">
            <img
              src="/assets/images/grids/uk/baba ayurveda.png"
              alt={title}
              className="w-full h-64 md:h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="rounded-lg shadow-xl overflow-hidden">
          <LightGallery
            plugins={[lgZoom]}
            elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {images.map((image, index) => (
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

        {/* Description Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Description
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            BBAH focuses on detoxifying the body, harmonizing the mind, and
            nurturing the soul. By integrating ancient practices and modern
            techniques, it offers a rejuvenating experience for physical,
            mental, and spiritual well-being.
          </p>
        </div>

        {/* Location Section */}
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-3xl text-red-500" />
          <p className="text-base md:text-lg text-gray-700">{location}</p>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export default BabaAyurveda;
