import React from "react";
import { Helmet } from "react-helmet-async";
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const BedVilla = () => {
  const images = [
    "/assets/images/3bedvilla/1.avif",
    "/assets/images/3bedvilla/2.avif",
    "/assets/images/3bedvilla/3.avif",
    "/assets/images/3bedvilla/4.avif",
    "/assets/images/3bedvilla/5.avif",
    "/assets/images/3bedvilla/6.avif",
    "/assets/images/3bedvilla/7.avif",
    "/assets/images/3bedvilla/8.avif",
    "/assets/images/3bedvilla/9.avif",

    "/assets/images/3bedvilla/11.avif",
    "/assets/images/3bedvilla/12.avif",

    "/assets/images/3bedvilla/13.avif",
    "/assets/images/3bedvilla/14.jpg",
    "/assets/images/3bedvilla/15.jpg",
    "/assets/images/3bedvilla/16.jpg",
  ];

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Own a Premium Villa in Goa – Luxury Living Awaits</title>
        <meta
          name="description"
          content="Discover your dream villa in Goa! Premium beachside property with modern amenities, high ROI, and perfect for investment or a holiday home. Book your villa in Goa today"
        />
        <meta
          name="keywords"
          content="Siolim villa, private pool villa Goa, 3 bedroom villa Goa, Love Story Villas, luxury stay Goa, pet friendly villa Goa"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta
          property="og:title"
          content="3 Bedroom Luxury Villa with Private Pool | Love Story Villas Siolim"
        />
        <meta
          property="og:description"
          content="Luxurious 3-bedroom villa with private pool, Portuguese architecture, and modern amenities in Siolim, Goa. Perfect for family getaways and pet-friendly stays."
        />
        <meta property="og:image" content="/assets/images/3bedvilla/6.avif" />
        <meta property="og:type" content="website" />

        {/* Location Meta Tags */}
        <meta name="geo.region" content="IN-GA" />
        <meta name="geo.placename" content="Siolim, Goa" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="GikiJoy" />
        <link rel="canonical" href="https://gikijoy.com/gateways/3-bed-villa" />
      </Helmet>
      {/* Hero Image */}
      <div className="w-full h-[60vh] grid grid-cols-4 grid-rows-2 gap-2 p-2">
        <img
          src="/assets/images/3bedvilla/6.avif"
          alt="Villa Image 1"
          className="object-cover w-full h-full row-span-2 col-span-2 rounded-xl"
        />
        <img
          src="/assets/images/Lovevilla/2.avif"
          alt="Villa Image 2"
          className="object-cover w-full h-full col-span-2 rounded-xl"
        />
        <img
          src="/assets/images/Lovevilla/3.avif"
          alt="Villa Image 3"
          className="object-cover w-full h-full col-span-1 rounded-xl"
        />
        <img
          src="/assets/images/Lovevilla/4.avif"
          alt="Villa Image 4"
          className="object-cover w-full h-full col-span-1 rounded-xl"
        />
      </div>

      {/* About Section */}
      <div className="px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Villa No. 10 with 1 Bedroom and Private Pool
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Love Story Villas is a stunning accommodation in Siolim, Goa, just 8
          minutes away from Thalassa. It features 3 bedrooms, a private pool, a
          sitting deck, functional kitchen and is pet-friendly. With
          housekeeping services and a helpful host, it's the perfect place for a
          relaxing getaways
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ul className="list-disc list-inside space-y-2">
            <li>3 Air-conditioned Bedrooms</li>
            <li>Private Pool & Garden</li>
            <li>Portuguese Architectural Style</li>
            <li>Fully Equipped Kitchen</li>
            <li>Daily Housekeeping</li>
            <li>Power Backup</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Free WiFi & 50” Smart TV</li>
            <li>Chef on Request</li>
            <li>Outdoor Dining</li>
            <li>Peaceful Siolim Location</li>
            <li>Pet Friendly</li>
            <li>Parking Available</li>
          </ul>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-lg font-medium mb-4">
          <FaMapMarkerAlt className="text-red-600" />
          Siolim, Goa
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-4 mb-6">
          <a
            href="tel:+917817821976"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
          >
            <FaPhoneAlt /> Call Now
          </a>
          {/* <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
          >
            <FaWhatsapp /> WhatsApp
          </a> */}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-100 px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Photo Gallery</h2>
        <div className="max-w-6xl mx-auto">
          <LightGallery
            plugins={[lgZoom, lgThumbnail]}
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {images.map((src, index) => (
              <motion.a
                key={index}
                data-lg-size="1400-933"
                data-src={src}
                className="gallery-item overflow-hidden rounded-xl shadow-lg block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={src}
                  alt={`Love Villa Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </motion.a>
            ))}
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default BedVilla;
