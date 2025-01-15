import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <div className="contact-info-area">
              <h2 className="font-semibold text-dark text-4xl mb-14 capitalize">
                Contact Us
              </h2>
              <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p className="flex-1">
                  1/523 JiaMau, HAZRATGUNJ LUCKNOW <br /> 226001 Uttar Pradesh
                </p>
              </div>
              <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <a className="flex-1" href="  kirti@Gikijoy.com">
                  kirti@Gikijoy.com
                </a>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="text-dark text-4xl mr-5">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <a
                  className="flex-1"
                  href="tel:+91 7817821976"
                >
                  +91 7817821976
                </a>
              </div>
            </div>
            <div className="p-10 lg:p-14 shadow mt-14 lg:mt-0">
              <form action="#" id="contact-form" method="get">
                <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                />
                {/* <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                /> */}
                {/* <select
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 text-dark h-12 focus:outline-none text-base"
                  name="product"
                >
                  <option value="" disabled selected>Select Our Product</option>
                  <option value="mangoes">Mangoes</option>
                  <option value="mango-pulp">Mango Pulp</option>
                  <option value="tin-cans">Tin Cans</option>
                </select> */}
                <textarea
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 text-dark h-32 focus:outline-none text-base resize-none"
                  name="message"
                  placeholder="Message"
                />
                <button
                  aria-label="button"
                  className="w-full leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              <p className="form-messege" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
