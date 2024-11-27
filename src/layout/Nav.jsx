import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { title: "Home", link: "/gikijoy-farm" },
    // { title: "About Us", link: "/about" },
    
    {
      title: "Products",
      subMenu: [
        { title: "Mangoes", link: "/gikijoy-farm/mangoes" },
        { title: "Cans", link: "/gikijoy-farm/tin-cans" },
        { title: "Corporate Gifts", link: "/gikijoy-farm/corporate-gifts" },
        { title: "Fragrances", link: "/gikijoy-farm" },
      ],
    },
  
    { title: "Contact Us", link: "/contactus" },
    
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="text-2xl font-bold">
          <Link to="/gikijoy-farm">
            <img
              src="./assets/images/logo/GikiJoy  Logo Black.png"
              className="h-20 w-30"
              alt="Brand Logo"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`hidden lg:flex flex-grow items-center justify-center space-x-6`}>
          {menuItems.map((item, index) =>
            item.subMenu ? (
              <div key={index} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="font-semibold hover:text-mango-yellow transition duration-300 focus:outline-none flex items-center space-x-1"
                >
                  <span>{item.title}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        className="underline-transition block px-4 py-2 hover:bg-mango-yellow transition duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.link}
                className="underline-transition font-semibold hover:text-mango-yellow transition duration-300"
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg transition-transform transform origin-top animate-slide-down">
          {menuItems.map((item, index) =>
            item.subMenu ? (
              <div key={index} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="underline-transition block w-full text-left px-4 py-2 font-semibold hover:bg-mango-yellow hover:text-white transition duration-300"
                >
                  {item.title}
                  <svg
                    className="inline w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="pl-8 bg-white">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        className="hover:bg-mango-yellow hover:text-white underline-transition block px-4 py-2 transition duration-300"
                        onClick={() => {
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.link}
                className="underline-transition block px-4 py-2 font-semibold hover:bg-mango-yellow hover:text-white transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
