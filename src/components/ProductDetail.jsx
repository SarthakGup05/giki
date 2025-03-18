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

            </TabList>

            <TabPanel>
              <div className="bg-white rounded-xl shadow-sm p-6 fade-in">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Details</h3>

                {/* General Description */}
                {product.description && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                )}

                {/* Ingredients (Only show if available) */}
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">Ingredients</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {product.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Nutrition Facts (Only show if available) */}
                {product.nutrition && Object.keys(product.nutrition).length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">Nutritional Information</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {Object.entries(product.nutrition).map(([key, value], index) => (
                        <li key={index} className="capitalize">{`${key.replace(/([A-Z])/g, " $1")}: ${value}`}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Storage Instructions (Only show if available) */}
                {product.storage && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">Storage Instructions</h4>
                    <p className="text-gray-600">{product.storage}</p>
                  </div>
                )}

                {/* Manufacturer Details (Only show if available) */}
                {product.manufacturedBy && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 text-gray-700">Manufactured By</h4>
                    <p className="text-gray-600">{product.manufacturedBy}</p>
                  </div>
                )}

                {/* Expiry & Packaging Details (Only show if available) */}
                {product.packagedOn && product.useBefore && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-gray-700">Packaged On</h4>
                      <p className="text-gray-600">{product.packagedOn}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-gray-700">Best Before</h4>
                      <p className="text-gray-600">{product.useBefore}</p>
                    </div>
                  </div>
                )}

                {/* GST & Contact Details (Only show if available) */}
                {product.gst && product.email && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-gray-700">GST Number</h4>
                      <p className="text-gray-600">{product.gst}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-gray-700">Contact Email</h4>
                      <p className="text-gray-600">{product.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;