import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address */}
          <div>
            <h5 className="text-xl font-bold mb-4">Address</h5>
            <p className="text-white font-medium">
              1/523 GiaMau, HAZRATGUNJ LUCKNOW <br /> 226001 Uttar Pradesh
            </p>
            <div className="mt-4 text-white font-medium space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <span>kirti@gikijoy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-white" />
                <span>+91 7817821976</span>
              </div>
            </div>
          </div>
          
          {/* Our Product */}
          <div>
            <h5 className="text-xl font-bold mb-4">GikiJoy Farms</h5>
            <ul>
              <li className="mb-2">
                <Link className="underline-transition text-white font-medium" to="/gikijoy-farm/mangoes">
                  Mangoes
                </Link>
              </li>
              <li>
                <Link className="underline-transition text-white font-medium" to="/gikijoy-farm/tin-cans">
                  Tin cans
                </Link>
              </li>
              <li className="mb-2">
                <Link className="underline-transition text-white font-medium" to="/gikijoy-farm/corporate-gifts">
                  Corporate gifts
                </Link>
              </li>
              <li className="mb-2">
                <Link className="underline-transition text-white font-medium" to="/gikijoy-farm/corporate-gifts">
                  Fragrances
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h5 className="text-xl font-bold mb-4">GikiJoy Getaways</h5>
            <ul>
              <li className="mb-2">
                <Link className="underline-transition text-white font-medium" to="/gikijoy-getaway/uttarakhand">
                  Uttarakhand
                </Link>
              </li>
              <li>
                <Link className="underline-transition text-white font-medium" to="/gikijoy-getaway/goa">
                  Goa
                </Link>
              </li>
              <li className="mb-2">
                <Link className="underline-transition text-white font-medium" to="/gikijoy-getaway/punjab">
                  Punjab
                </Link>
              </li>
              <li className="mb-2">
                <Link className="underline-transition text-white font-medium" to="/gikijoy-getaway">
                  Uttar Pradesh
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Horizontal Links (new line) */}
        <div className="flex justify-center space-x-6 mt-8 opacity-40">
          <Link className="underline-transition text-white font-medium" to="/about">
            About Us
          </Link>
          <Link className="underline-transition text-white font-medium" to="/our-team">
            Our Team
          </Link>
          <Link className="underline-transition text-white font-medium" to="/contactus">
            Contact
          </Link>
        </div>
      </div>
      
      {/* Bottom */}
      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Gikijoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
