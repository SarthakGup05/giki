import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
    { src: "/assets/images/bhole baba/1.jpg", alt: " BabajiAyurveda" },
    { src: "/assets/images/bhole baba/2.jpg", alt: "BabajiAyurveda" },
    { src: "/assets/images/bhole baba/3.jpg", alt: "BabajiAyurveda" },
    { src: "/assets/images/bhole baba/4.jpg", alt: "BabajiAyurveda" },
    { src: "/assets/images/bhole baba/5.jpg", alt: "BabajiAyurveda" },
    { src: "/assets/images/bhole baba/6.jpg", alt: "BabajiAyurveda" },
  ];

  const title = "Bhole Baba Ayurvedic Hospital and Research centre";
  const description =
    "BBAH, named around the concept of building a Health Village in Ranikhet, is one of its kind pioneer project coming up in Northern India. It is a Ayurvedic center which has been established for prevention and cure of chronic diseases through detoxification of the body and modification of lifestyle, with a holistic approach.";
  const location =
    " Chilianaula, Ranikhet, Distt. Almora Uttarakhand - 263647 ";
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
              The Bhole Baba Ayurvedic Hospital and Research centre is literally
              “joined at the hip” with the Baba Haidakhan Temple and Ashram to
              which the small town of Chillianaula owes its fame. Baba
              Haidakhan, presides over this entire complex. Considered immortal
              and a manifestation of Lord Shiva by devotees, His Grace and
              benevolence are immanent even though He is no longer in the
              physical body.
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
              src="/assets/images/grids/uk/baba ayurveda.png"
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
            It offers physical, psychological and spiritual health overhaul,
            with the help of the power of the nature. Our body is capable of
            healing itself by maintaining the effective balance of the mind, the
            body and the soul. If this balance deviates from the normal, it
            creates health complications and general disorder in the body
            systems. At BBAH, you can benefit from the distinctive synergism
            between modern science, traditional practices and ancient wisdom;
            with professional guidance.
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

export default BabaAyurveda;
