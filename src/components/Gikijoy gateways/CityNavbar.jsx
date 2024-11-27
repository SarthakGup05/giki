import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter, FaHome } from "react-icons/fa";
import { BiToggleRight, BiToggleLeft } from "react-icons/bi";
import { GiPalmTree, GiMountainCave, GiWaterfall, GiTempleDoor, GiRiver } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const CityNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const cities = [
    { name: "Goa", icon: <GiPalmTree /> },
    { name: "Manali", icon: <GiMountainCave /> },
    { name: "Kerala", icon: <GiWaterfall /> },
    { name: "Varanasi", icon: <GiTempleDoor /> },
    { name: "Rishikesh", icon: <GiRiver /> },
    // Add more cities and icons as needed
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col h-full p-4 space-y-4">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-2xl text-gray-700  mt-20 flex j"
          >
            {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          {/* "Our locations" title, visible only when open */}
          {/* <span className={`text-lg font-semibold text-gray-700 mb-4 ${sidebarOpen ? "block" : "hidden"}`}>
            Our locations
          </span> */}

          {/* City Links */}
          <div className="flex flex-col space-y-6">
            {cities.map((city, index) => (
              <Link
                key={index}
                to={`/${city.name.toLowerCase()}`}
                className="flex items-center text-gray-700 hover:text-red-600 transition duration-300"
              >
                <div className="text-2xl mr-3">{city.icon}</div>
                {sidebarOpen && <span className="text-sm font-semibold">{city.name}</span>}
              </Link>
            ))}
          </div>

          {/* Filters and toggle button at the bottom */}
          <div className="mt-auto">
            <button
              className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200 mb-4 ${
                sidebarOpen ? "block" : "hidden"
              }`}
            >
              <FaFilter className="text-2xl" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <BiToggleRight className="text-3xl text-blue-600" />
              ) : (
                <BiToggleLeft className="text-3xl text-gray-700" />
              )}
              {sidebarOpen && <span className="ml-2 text-sm font-medium text-gray-700">Display total before taxes</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityNavbar;
