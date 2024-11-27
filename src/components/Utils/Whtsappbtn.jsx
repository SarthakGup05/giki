import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whtsappbtn = () => {
  return (
    <div className="fixed bottom-8 right-[1px] flex flex-col space-y-4 z-50">
    <a
      href={`https://wa.me/7817821976`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition transform hover:scale-110 shadow-lg flex items-center"
      title="WhatsApp"
    >
      <FaWhatsapp size={20} />
    </a>
    {/* <a
  href={`tel:${phoneNumber}`}
  className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition transform hover:scale-110 shadow-lg flex items-center"
  title="Call"
>
  <FaPhoneAlt size={20} />
</a> */}
  </div>
  )
}

export default Whtsappbtn