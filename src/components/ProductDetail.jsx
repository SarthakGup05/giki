import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import productData from "../app/ProductData";
import { FaWhatsapp, FaStar, FaRegStar, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "White Lewis",
      rating: 5,
      text: "Vestibulum ante ipsum primis aucibus orci luctus tristique posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euis mod vehicula. Phasellus quam nisi, congue id nulla.",
      imgSrc: "path-to-reviewer-image",
    },
    {
      id: 2,
      name: "White Lewis",
      rating: 5,
      text: "Vestibulum ante ipsum primis aucibus orci luctus tristique posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euis mod vehicula. Phasellus quam nisi, congue id nulla.",
      imgSrc: "path-to-reviewer-image",
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
        <div className="container mx-auto p-6 bg-white">
          <div className="bg-red-50 p-6 rounded-lg shadow-sm text-center">
            <p className="text-red-500 text-lg">Product not found.</p>
            <Link to="/" className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Assume product has multiple images or use the same one
  const productImages = product.images || [product.imgSrc, product.imgSrc, product.imgSrc];

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
      imgSrc: "path-to-reviewer-image",
    };
    setReviews([...reviews, newReview]);
    e.target.reset();
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Layout>
      <div className="container mx-auto p-2 md:p-6 max-w-8xl bg-gray-100">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-500">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link to={`/category/${category}`} className="hover:text-orange-500 transition-colors">
                {categoryKey.replace(/([A-Z])/g, ' $1').trim()}
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-medium">{product.title}</li>
          </ol>
        </nav>

        <div className="bg-gray-100 rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Product Images */}
            <div className="md:w-2/5 p-6">
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={productImages[activeImage]}
                  alt={product.title}
                  className="w-full h-80 object-contain transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 justify-center">
                {productImages.map((img, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-2 rounded-md overflow-hidden w-16 h-16 
                      ${activeImage === index ? 'border-orange-500' : 'border-gray-200'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="md:w-3/5 p-6 md:pl-8 md:border-l border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-800">{product.title}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(4)}
                    </div>
                    <span className="text-gray-500 text-sm">(24 reviews)</span>
                  </div>
                </div>
                
                <span className="text-2xl font-bold text-orange-600">{product.price}</span>
              </div>

              {/* Availability Badge */}
              {/* {product.outOfStock ? (
                <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Out of stock
                </div>
              ) : (
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  In stock
                </div>
              )} */}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center w-32 h-10 border rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FaMinus className="text-gray-600 text-xs" />
                  </button>
                  <span className="flex-1 h-full flex items-center justify-center font-medium text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FaPlus className="text-gray-600 text-xs" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link to='/contactus' className="flex-1">
                  <button className="w-full bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow">
                    <FaShoppingCart className="mr-2" />
                    <span>Buy It Now</span>
                  </button>
                </Link>
                
                <a
                  href="https://wa.me/+917817821976" 
                  className="flex-1 bg-green-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
              
              {/* Quick Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.brand && (
                    <div className="flex">
                      <span className="font-medium text-gray-500 w-24">Brand:</span>
                      <span className="text-gray-800">{product.brand}</span>
                    </div>
                  )}
                  {product.netQuantity && (
                    <div className="flex">
                      <span className="font-medium text-gray-500 w-24">Net Quantity:</span>
                      <span className="text-gray-800">{product.netQuantity}</span>
                    </div>
                  )}
                  {product.flavor && (
                    <div className="flex">
                      <span className="font-medium text-gray-500 w-24">Flavor:</span>
                      <span className="text-gray-800">{product.flavor}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8">
          <Tabs selectedTabClassName="border-b-2 border-orange-500 text-orange-500">
            <TabList className="flex border-b border-gray-200 mb-6">
              <Tab className="px-6 py-3 font-medium text-gray-700 cursor-pointer focus:outline-none">
                Product Details
              </Tab>
              <Tab className="px-6 py-3 font-medium text-gray-700 cursor-pointer focus:outline-none">
                Reviews ({reviews.length})
              </Tab>
            </TabList>

            <TabPanel>
              <div className="bg-white rounded-xl shadow-sm p-6 fade-in">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {product.brand && (
                    <div className="flex border-b pb-2">
                      <span className="font-medium text-gray-500 w-32">Brand</span>
                      <span className="text-gray-800">{product.brand}</span>
                    </div>
                  )}
                  {product.netQuantity && (
                    <div className="flex border-b pb-2">
                      <span className="font-medium text-gray-500 w-32">Net Quantity</span>
                      <span className="text-gray-800">{product.netQuantity}</span>
                    </div>
                  )}
                  {product.flavor && (
                    <div className="flex border-b pb-2">
                      <span className="font-medium text-gray-500 w-32">Flavor</span>
                      <span className="text-gray-800">{product.flavor}</span>
                    </div>
                  )}
                  {product.containerType && (
                    <div className="flex border-b pb-2">
                      <span className="font-medium text-gray-500 w-32">Container Type</span>
                      <span className="text-gray-800">{product.containerType}</span>
                    </div>
                  )}
                  <div className="flex border-b pb-2">
                    <span className="font-medium text-gray-500 w-32">SKU</span>
                    <span className="text-gray-800">PRD-{product.id}</span>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="bg-white rounded-xl shadow-sm p-6 fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Reviews Summary */}
                  <div className="lg:col-span-2 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Reviews</h3>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-2">
                        {renderStars(4)}
                      </div>
                      <span className="text-gray-600">Based on {reviews.length} reviews</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center">
                          <div className="w-8 text-sm text-gray-600">{star} star</div>
                          <div className="flex-1 mx-3 h-2 rounded-full bg-gray-200 overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400" 
                              style={{ width: star === 5 ? '70%' : star === 4 ? '20%' : '10%' }}
                            ></div>
                          </div>
                          <div className="w-8 text-sm text-gray-600 text-right">
                            {star === 5 ? '70%' : star === 4 ? '20%' : '10%'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reviews List and Form */}
                  <div className="lg:col-span-3">
                    <div className="mb-8">
                      {reviews.length > 0 ? (
                        <div className="space-y-6">
                          {reviews.map((review) => (
                            <div key={review.id} className="border-b pb-6">
                              <div className="flex items-center mb-2">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold mr-3">
                                  {review.name.charAt(0)}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-800">{review.name}</h4>
                                  <div className="flex items-center">
                                    <div className="flex mr-2">
                                      {renderStars(review.rating)}
                                    </div>
                                    <span className="text-xs text-gray-500">2 months ago</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-gray-600 mt-2">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 italic">No reviews yet. Be the first to review this product!</p>
                      )}
                    </div>
                    
                    {/* Review Form */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-4 text-gray-800">Write a Review</h4>
                      <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div className="flex items-center mb-4">
                          <p className="mr-3 text-sm font-medium text-gray-700">Your Rating:</p>
                          <div className="flex text-lg cursor-pointer">
                            {renderStars(5)}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                              placeholder="Your email"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                            placeholder="Share your experience with this product"
                            required
                          ></textarea>
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                        >
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;