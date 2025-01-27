// src/layout/GatewayNavbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import BookNow from "../components/Utils/BookNow";
import Whtsappbtn from "../components/Utils/Whtsappbtn";

const GatewayNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get the current route

  const isGetawayRoute = location.pathname.startsWith("/gikijoy-getaway"); // Check if the route starts with "/gikijoy-getaway"

  return (
    <>
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-center px-4 py-2">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
              <img
                src="/assets/images/logo/GikiJoy  Logo Black.png"
                className="h-20 w-30"
                alt="Brand Logo"
              />
            </Link>
          </div>
        </div>
      </nav>
      {isGetawayRoute && <BookNow />} {/* Conditionally render BookNow */}
      <Whtsappbtn />
    </>
  );
};

export default GatewayNavbar;
