import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import productData from "../app/ProductData";
import { FaWhatsapp } from "react-icons/fa"; // Import from react-icons
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ProductDetail.css"; // Custom CSS for animations

const ProductDetail = () => {
  const { category, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "White Lewis",
      rating: 5,
      text: "Vestibulum ante ipsum primis aucibus orci luctus tristique posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euis mod vehicula. Phasellus quam nisi, congue id nulla.",
      imgSrc: "path-to-reviewer-image", // Replace with actual image path
    },
    {
      id: 2,
      name: "White Lewis",
      rating: 5,
      text: "Vestibulum ante ipsum primis aucibus orci luctus tristique posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euis mod vehicula. Phasellus quam nisi, congue id nulla.",
      imgSrc: "path-to-reviewer-image", // Replace with actual image path
    },
  ]);
  const categoryKey = category.replace(/-([a-z])/g, (match, letter) =>
    letter.toUpperCase()
  );
  const product = productData[categoryKey]?.find(
    (p) => p.id === parseInt(id, 10)
  );

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto p-6">
          <p className="text-red-500">Product not found.</p>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const text = e.target.message.value;
    const newReview = {
      id: reviews.length + 1,
      name,
      rating: 5,
      text,
      imgSrc: "path-to-reviewer-image", // Replace with actual image path
    };
    setReviews([...reviews, newReview]);
    e.target.reset();
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-xl text-green-500 mb-4">{product.price}</p>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Description</h3>
              <p className="text-gray-700 mb-4 whitespace-pre-line font-semibold">
                {product.description}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="text-lg font-semibold mb-2">
                Quantity:
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="bg-white text-gray-700 px-2 py-1 rounded hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="bg-white text-gray-700 px-2 py-1 rounded hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4 space-y-4 md:space-y-0">
              <Link to='/contactus'>
                <button className="bg-black text-white font-semibold w-full md:w-auto px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                  Buy It Now
                </button>
              </Link>
              
              <a
                href="https://wa.me/+917817821976" 
                className="bg-green-500 font-semibold text-white w-full md:w-auto px-4 py-2 rounded hover:bg-green-600 transition-colors text-center flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> {/* Replace FontAwesome with React Icon */}
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {product.outOfStock && (
              <p className="text-red-500 font-bold">Out of stock</p>
            )}
          </div>
        </div>

        <Tabs className="mt-8 bg-slate-100">
          <TabList className="flex border-b">
            <Tab className="px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-500 active-tab font-semibold">
              Product Details
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-500 active-tab font-semibold">
              Reviews
            </Tab>
          </TabList>

          <TabPanel className="bg-slate-50">
            <div className="p-4 fade-in">
              <h3 className="text-2xl font-semibold mb-2">Product Details</h3>
              <ul className="list-disc pl-5">
                {product.brand && (
                  <li>
                    <strong>Brand:</strong> {product.brand}
                  </li>
                )}
                {product.netQuantity && (
                  <li>
                    <strong>Net Quantity:</strong> {product.netQuantity}
                  </li>
                )}
                {product.flavor && (
                  <li>
                    <strong>Flavor:</strong> {product.flavor}
                  </li>
                )}
                {product.containerType && (
                  <li>
                    <strong>Container Type:</strong> {product.containerType}
                  </li>
                )}
              </ul>
            </div>
          </TabPanel>
          <TabPanel className="bg-slate-50">
            <div className="p-4 fade-in">
              <h3 className="text-2xl font-semibold mb-2">Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="reviews">
                  {reviews.length > 0 ? (
                    reviews.map((review) => (
                      <div key={review.id} className="review-item mb-6">
                        <div className="flex items-center mb-4">
                          {/* <img
                            src={review.imgSrc}
                            alt={review.name}
                            className="w-12 h-12 rounded-full mr-4"
                          /> */}
                          <div>
                            <h4 className="font-semibold text-lg">{review.name}</h4>
                            <div className="text-yellow-500">
                              {"★".repeat(review.rating)}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{review.text}</p>
                       
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700">No reviews yet.</p>
                  )}
                </div>
                <div className="add-review">
                  <h4 className="font-semibold text-lg mb-2">Add a Review</h4>
                  <form onSubmit={handleReviewSubmit}>
                    <div className="flex items-center mb-4">
                      <span className="text-yellow-500">
                        {"★".repeat(5)} {/* Placeholder for rating input */}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border rounded p-2 w-full md:w-1/2"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border rounded p-2 w-full md:w-1/2"
                        required
                      />
                    </div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Review message"
                      className="border rounded p-2 w-full mt-4"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-yellow-400 text-white font-semibold w-full mt-4 py-2 rounded hover:bg-yellow-500 transition-colors"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProductDetail;
