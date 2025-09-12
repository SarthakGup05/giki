import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaStar, FaSwimmingPool, FaTree, FaWater, FaUtensils } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
;
import Modal from "../../components/Utils/Modal";
import BookingForm from "../../components/Utils/BookingForm";
import { motion } from "framer-motion";
import JumpingChameleon from "../../components/Utils/JumpingChameleon";

const JungleVilla = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const property = {
    title: "Discover Your Private Oasis at the Greek Jungle Villa",
    subtitle: "Your Dream getaways in the Heart of Nature",
    description:
      "Escape to tranquility at the Greek Jungle Villa, nestled in the serene and secluded area of Siolim, Goa. Located just a stone's throw from the popular Thalasa beach, popular restraunts and Chapora Lane, this villa offers the perfect balance of privacy and convenience. The hustle and bustle of the tourist hotspots is just a short walk away, yet this lush, jungle-surrounded retreat ensures peace, solitude, and complete relaxation. Bachelor's party, family/friends get together, private gatherings or just a quite place to unwind this place is a vacationers paradise.",
    oasisDescription:
      "Imagine waking up to the sounds of tropical birds and the rustling of leaves in the jungle. Your day starts with a gentle breeze and a view of verdant greenery, all from the comfort of your private villa. The Greek Jungle Villa is a secluded haven, tucked away at the end of a quiet street, surrounded by the natural beauty of Goa's rich flora and fauna.",
    villaDescription:
      "This charming 3-bedroom villa offers a spacious, open-plan living experience that blends modern amenities with natural surroundings. The centerpiece of the villa is the large, serene pool—nestled between lush greenery, it's the perfect spot to unwind, take a dip, or sip a refreshing drink while enjoying the panoramic jungle view.",
    interiorDescription:
      "As you step inside, you're greeted by an inviting open sitting area that seamlessly connects with the outdoor jungle vibe. The villa boasts a cozy yet contemporary design with rustic Greek-inspired touches—highlighted by the villa's stunning blue door that stands out against the vibrant greenery. The main floor features two elegant rooms, while the top floor reveals a massive, airy room perfect for a luxurious retreat. Whether you're enjoying family time or sharing a quiet moment, every corner of this villa is designed with comfort in mind.",
    waterfallDescription:
      "What truly sets the Greek Jungle Villa apart is its in-house waterfall, which comes alive during the monsoon season. Imagine the soothing sound of water cascading gently down a rocky slope, surrounded by jungle life—creating a perfect, peaceful soundtrack for your stay. This natural wonder brings the charm of Goa's tropical monsoon to your doorstep.",
    kitchenDescription:
      "The villa's open kitchen setup encourages easy and casual dining experiences, whether you're cooking your favorite meals or hiring a local chef to prepare traditional Goan delicacies for you. The villa also features ample space for dining and lounging, perfect for family gatherings, romantic dinners, or a group getaways with friends.",
    location:
      "Greek Jungle Villa, Sy. No. 306/27 Quarem vaddi, Siolim, Goa 403517",
    whatsappNumber: "7817821976",
    highlights: [
      "Secluded privacy yet close to the action: Minutes from Thalasa Beach and Chapora Lane",
      "Unique in-house waterfall to enjoy during the monsoon season",
      "Spacious 3-room villa with open kitchen and sitting areas",
      "Lush jungle views, relaxing pool, and serene environment",
      "Stylish Greek-inspired design that blends perfectly with nature"
    ],
    images: [
      { src: "/assets/images/jungle villa/1.jpg", alt: "Jungle Villa 1" },
      { src: "/assets/images/jungle villa/2.jpg", alt: "Jungle Villa 2" },
      { src: "/assets/images/jungle villa/8.jpg", alt: "Jungle Villa 3" },
      { src: "/assets/images/jungle villa/9.jpg", alt: "Jungle Villa 4" },
      { src: "/assets/images/jungle villa/11.jpg", alt: "Jungle Villa 5" },
      { src: "/assets/images/jungle villa/12.jpg", alt: "Jungle Villa 6" },
      { src: "/assets/images/jungle villa/13.jpg", alt: "Jungle Villa 7" },
      { src: "/assets/images/jungle villa/14.jpg", alt: "Jungle Villa 8" },
      { src: "/assets/images/jungle villa/15.avif", alt: "Jungle Villa 9" },
      { src: "/assets/images/jungle villa/16.avif", alt: "Jungle Villa 10" },
      { src: "/assets/images/jungle villa/17.avif", alt: "Jungle Villa 11" },
      { src: "/assets/images/jungle villa/18.avif", alt: "Jungle Villa 12" },
      { src: "/assets/images/jungle villa/19.avif", alt: "Jungle Villa 13" },
      { src: "/assets/images/jungle villa/20.avif", alt: "Jungle Villa 14" },
    ],
  };

  return (
    <>

<JumpingChameleon/>
      {/* Hero Section with Main Title */}
      <div className="relative bg-gradient-to-b from-green-600 to-white text-white py-20 px-6 overflow-y-hidden">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            {property.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl italic mb-8"
            variants={fadeInUp}
          >
            {property.subtitle}
          </motion.p>
          <motion.button
            onClick={toggleModal}
            className="px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition transform hover:scale-105"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Dream getaways
          </motion.button>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 md:h-24">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="md:w-1/2"
            variants={fadeInLeft}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-semibold text-green-600 mb-6">Your Private Oasis</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {property.description}
              </p>
              <motion.div
                className="flex items-center text-yellow-500 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
                <span className="ml-2 text-gray-700">Don't just take our word for it — Check our reviews!</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href={`https://wa.me/${property.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Contact us on WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={fadeInRight}
          >
            <motion.img
              src={property.images[0]?.src}
              alt="Villa Overview"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          className="my-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl font-semibold text-green-600 mb-8 text-center"
            variants={fadeInUp}
          >
            Explore Our Villa
          </motion.h2>
          <LightGallery plugins={[lgZoom]} elementClassNames="grid grid-cols-1 md:grid-cols-3 gap-6">
          {property.images.map((image, index) => (
            <motion.a
              key={index}
              data-lg-size="1400-933"
              data-src={image.src} // Required for LightGallery
              className="gallery-item overflow-hidden rounded-xl shadow-lg block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </motion.a>
          ))}
        </LightGallery>
        </motion.div>

        {/* Villa Features */}
        <motion.div
          className="bg-gray-100 rounded-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl font-semibold text-green-600 mb-8 text-center"
            variants={fadeInUp}
          >
            The Villa Experience
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaTree className="text-green-600" /> An Oasis of Calm and Beauty
              </h3>
              <p className="text-gray-700">{property.oasisDescription}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaSwimmingPool className="text-blue-500" /> The Villa
              </h3>
              <p className="text-gray-700">{property.villaDescription}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaWater className="text-blue-400" /> In-House Waterfall
              </h3>
              <p className="text-gray-700">{property.waterfallDescription}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaUtensils className="text-yellow-600" /> Open Kitchen & Dining
              </h3>
              <p className="text-gray-700">{property.kitchenDescription}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interior Description */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="md:w-1/2"
            variants={fadeInLeft}
          >
            <motion.img
              src={property.images[5]?.src}
              alt="Villa Interior"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={fadeInRight}
          >
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Bask in the Beauty of Nature</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {property.interiorDescription}
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-green-700 text-white rounded-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl font-semibold mb-8 text-center"
            variants={fadeInUp}
          >
            Why Choose the Greek Jungle Villa?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {property.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-green-600 p-6 rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2d7a4d"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <FaStar className="text-white" />
                  </div>
                  <p className="text-white">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Location Section */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="flex items-center gap-4 mb-6"
            variants={fadeInLeft}
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-2xl text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800">Location</h3>
              <p className="text-lg text-gray-700">{property.location}</p>
            </div>
          </motion.div>
        
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl font-bold text-green-800 mb-6"
            variants={fadeInUp}
          >
            Ready to Experience Paradise?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Escape to the Greek Jungle Villa in Siolim, Goa, and make memories that will last a lifetime.
          </motion.p>
          <motion.button
            onClick={toggleModal}
            className="px-10 py-4 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay Now!
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for Booking Form */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <BookingForm />
      </Modal>
     
    </>
  );
};

export default JungleVilla;