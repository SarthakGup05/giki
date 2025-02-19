import React from 'react';

const AquaNavbar = () => {
  return (
    <nav className="bg-white shadow-sm mt-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              {/* Replace with your actual logo */}
              <img
                src="/assets/images/Aqua farms/logoaqua.png"
                alt="Company Logo"
                className="h-20 w-24 p-2"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AquaNavbar;
