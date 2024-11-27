import React from "react";
import GatewaySlider from "../../components/Gikijoy gateways/GatewaySlider";
import AboutUsSection from "../../components/Gikijoy gateways/AboutUs";
import GatewaySection from "../../components/Gikijoy gateways/GatewaySection";

const Gateway = () => {
  return (
    <div className="relative">
      <GatewaySlider />
      <GatewaySection />
      <AboutUsSection />

      {/* Sticky WhatsApp Button */}
      {/* <a
        href="https://wa.me/7817821976"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48a11.84 11.84 0 0 0-16.75 0c-4.5 4.51-4.65 11.68-.15 16.3l-1.6 4.65 4.8-1.6a11.93 11.93 0 0 0 5.1 1.2h.01c6.6 0 12-5.4 12-12a11.85 11.85 0 0 0-3.4-8.36ZM12.18 21.4a10.11 10.11 0 0 1-4.58-1.1l-.33-.18-2.83.94.94-2.79-.2-.29A9.91 9.91 0 0 1 2.58 12 9.87 9.87 0 0 1 5.4 5.35 10.12 10.12 0 0 1 12.2 2.58a10.14 10.14 0 0 1 10.08 10.08c0 5.6-4.53 10.08-10.1 10.08Zm5.7-6.6c-.32-.16-1.87-.92-2.15-1.02s-.5-.16-.7.16-.8 1.02-.98 1.23-.36.24-.66.08a8.28 8.28 0 0 1-2.44-1.5 9.17 9.17 0 0 1-1.7-2.1c-.18-.32 0-.48.14-.63l.24-.3c.16-.16.16-.24.24-.4.08-.16.04-.32-.02-.48s-.7-1.68-1-2.33c-.24-.56-.48-.48-.7-.48h-.56c-.16 0-.42.06-.64.32s-.84.82-.84 2A4.62 4.62 0 0 0 8.58 14a12.04 12.04 0 0 0 5.1 3.76c.7.28 1.26.44 1.68.57.7.22 1.34.2 1.84.12.56-.08 1.87-.76 2.14-1.5.26-.76.26-1.4.18-1.5-.1-.08-.3-.16-.62-.3Z" />
        </svg>
      </a> */}
    </div>
  );
};

export default Gateway;
