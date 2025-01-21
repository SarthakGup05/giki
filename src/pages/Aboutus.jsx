import React, { useEffect } from "react";

import Banner from "../components/Utils/Banner";
import Icar from "/assets/images/page banner/icar.png";

const AboutUs = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1500 });
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <p>
        <strong>Technical guidance and production quality approved by-</strong>
      </p>
      <img src="/assets/images/page banner/icar.png" alt="" />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Us
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gikijoy blends innovation, sustainability, and hospitality into a
            unique experience, offering agricultural tourism, vacation rentals,
            and food production services focused on eco-conscious practices.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Agricultural Tourism */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-3xl transform translate-x-3 translate-y-3"></div>
              <img
                src="\assets\images\Aqua farms\gallery\2.jpg"
                alt="Agricultural Tourism"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Agricultural Tourism
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our experiential tourism educates visitors on sustainable
                farming methods while highlighting the importance of preserving
                natural resources.
              </p>
              <a
                href="https://www.gikijoy.com/param-aqua-farm"
                className="inline-block px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-green-600 transition-all"
              >
                Visit
              </a>
            </div>
          </div>
        </section>

        {/* Vacation Rentals */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-800">
                Vacation Rentals
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer a range of properties, from cozy cottages to luxury
                villas, blending modern amenities with rural charm. Perfect for
                city dwellers seeking peace and comfort amidst nature.
              </p>
              <a
                href="https://www.gikijoy.com/gikijoy-getaway"
                className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition-all"
              >
                Visit
              </a>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl transform translate-x-3 translate-y-3"></div>
              <img
                src="\assets\images\BnResort\_DSC2338.jpg"
                alt="Vacation Rentals"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Food Production */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transform translate-x-3 translate-y-3"></div>
              <img
                src="/assets\images\MangoProduct\cover- ac1.png"
                alt="Food Processing"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Food Production
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Partnering with ICAR and CISH, we process subtropical fruits
                into jams, juices, and dried products, adding value to local
                produce while supporting sustainable agriculture.
              </p>
              <a
                href="https://www.gikijoy.com/gikijoy-farm/food-products"
                className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-all"
              >
                Visit
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Recognized by ICAR
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Gikijoy was selected for the ICAR Agri-Business Incubation
              Program, gaining access to technical support, market linkages, and
              research expertise to drive innovation in subtropical fruit
              processing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Commitment to Sustainability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sustainability is at the core of our operations, from promoting
              eco-tourism to implementing advanced agricultural practices. We
              strive to create a positive impact on the environment and local
              community.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Join Us</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Experience the perfect blend of innovation, sustainability, and
              hospitality with Gikijoy.
            </p>
            <a href="tel:+91 7817821976">
              <button className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
