import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ closeModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    city: Yup.string()
      .oneOf(
        [
          "BN Resort",
          "Sukoon Nature Retreat",
          "Chahal Farms",
          "Greek Jungle Villa",
          "WELCOMHERITAGE ASHDALE",
          "Fern Cottage",
          "Bhole Baba Ayurvedic Hospital and Research centre",
          "Aqua Beach Stays Ashwem",
        ],
        "Please select a valid Getaway"
      )
      .required("Getaway is required"),
    checkin: Yup.date().required("Check-in date is required"),
    checkout: Yup.date()
      .min(Yup.ref("checkin"), "Check-out date must be after check-in date")
      .required("Check-out date is required"),
    adults: Yup.string().required("Please select the number of adults"),
    children: Yup.string().required("Please select the number of children"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      city: "",
      checkin: "",
      checkout: "",
      adults: "",
      children: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true); // Disable the submit button
      try {
        await emailjs.send(
          "service_27728q8",
          "template_nnn41mq",
          {
            name: values.name,
            email: values.email,
            mobile: values.mobile,
            city: values.city,
            checkin: values.checkin,
            checkout: values.checkout,
            adults: values.adults,
            children: values.children,
          },
          "2jlzINXnUbRTo7Osp"
        );
        toast.success("Booking request sent successfully!");
        formik.resetForm(); // Reset form on success
        closeModal(); // Automatically close the modal

        setTimeout(() => {
          navigate("/gikijoy-getaway/thankyou"); // Redirect to thank-you page
        }, 100);
      } catch (error) {
        console.error("Failed to send email:", error);
        toast.error("Failed to send booking request. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
      {/* Toaster Component */}
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Book Your Next Getaway
        </h1>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
                formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
                formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Mobile</label>
            <input
            type="number"
              name="mobile"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
                formik.touched.mobile && formik.errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your mobile number"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.mobile}</p>
            )}
          </div>

          {/* Getaway */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Getaway</label>
            <select
              name="city"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
                formik.touched.city && formik.errors.city ? "border-red-500" : "border-gray-300"
              }`}
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select a Getaway</option>
            <option value="Sukoon Nature Retreat">Sukoon Nature Retreat</option>
            <option value="Chahal Farms">Chahal Farms</option>
            <option value="BN Resort">BN Resort</option>
            <option value="Greek Jungle Villa">Greek Jungle Villa</option>
            <option value="WELCOMHERITAGE ASHDALE">WELCOMHERITAGE ASHDALE</option>
            <option value="Fern Cottage">Fern Cottage</option>
            <option value="Bhole Baba Ayurvedic Hospital and Research centre">
              Bhole Baba Ayurvedic Hospital and Research centre
                </option>
            <option value="Aqua Beach Stays Ashwem">Aqua Beach Stays Ashwem</option>
            </select>
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
            )}
          </div>

        {/* Check-in */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Check-in</label>
            <input
              type="date"
              name="checkin"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
                formik.touched.checkin && formik.errors.checkin ? "border-red-500" : "border-gray-300"
              }`}
              value={formik.values.checkin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.checkin && formik.errors.checkin && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.checkin}</p>
            )}
          </div>

        {/* Check-out */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Check-out</label>
            <input
              type="date"
              name="checkout"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.checkout && formik.errors.checkout
                ? "border-red-500"
                : "border-gray-300"
              }`}
              value={formik.values.checkout}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min={formik.values.checkin}
            />
            {formik.touched.checkout && formik.errors.checkout && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.checkout}</p>
            )}
          </div>

        {/* Adults */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Adults</label>
            <select
              name="adults"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.adults && formik.errors.adults
                ? "border-red-500"
                : "border-gray-300"
              }`}
              value={formik.values.adults}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Adults</option>
              {[...Array(10)].map((_, i) => (
              <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
            {formik.touched.adults && formik.errors.adults && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.adults}</p>
            )}
          </div>

        {/* Children */}
          <div>
          <label className="block mb-2 font-semibold text-gray-700">Children</label>
            <select
              name="children"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.children && formik.errors.children
                ? "border-red-500"
                : "border-gray-300"
              }`}
              value={formik.values.children}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Children</option>
              {[...Array(10)].map((_, i) => (
              <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </select>
            {formik.touched.children && formik.errors.children && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.children}</p>
            )}
          </div>

          {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
            className={`w-full md:w-auto px-6 py-3 font-bold rounded-md transition duration-300 ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700 text-white"
              }`}
              disabled={isSubmitting}
            >
            {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
    </div>
  );
};

export default BookingForm;
