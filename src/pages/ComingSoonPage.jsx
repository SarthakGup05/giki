import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const dairyProducts = [
    {
      name: "Creamy Yogurt",
      description: "Rich in probiotics with a smooth texture",
      color: "bg-yellow-100",
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6H2a1 1 0 110-2h1V5a2 2 0 012-2h1V2a1 1 0 011-1zm0 5a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Fresh Milk",
      description: "Straight from our grass-fed cows",
      color: "bg-blue-100",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 1a1 1 0 01.906.575l.728 1.455A3.995 3.995 0 0112 4a3.995 3.995 0 012.366 1.03l.728-1.455A1 1 0 0116 3v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h3z" />
        </svg>
      )
    },
    {
      name: "Artisanal Cheese",
      description: "Aged to perfection with unique flavors",
      color: "bg-amber-100",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Butter & Cream",
      description: "Smooth and rich dairy essentials",
      color: "bg-yellow-50",
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 011-1h3a1 1 0 010 2h-3a1 1 0 01-1-1zm0 10a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm-7 4a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % dairyProducts.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [dairyProducts.length]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % dairyProducts.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + dairyProducts.length) % dairyProducts.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center items-center p-4">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 1a1 1 0 01.906.575l.728 1.455A3.995 3.995 0 0112 4a3.995 3.995 0 012.366 1.03l.728-1.455A1 1 0 0116 3v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h3z" />
              </svg>
            </div>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">Gikijoy Dairy Farms</h3>
          <p className="text-xl text-blue-600 mb-4">Crafting nature's perfect dairy creations.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Our new dairy experience is coming soon!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're putting the finishing touches on our range of premium farm-fresh dairy products. 
            Made with love from grass-fed cows, our products will bring the wholesome goodness 
            of nature to your table.
          </p>
        </motion.div>
        
        {/* Interactive Product Preview Carousel */}
        {/* <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-16 w-full"
        >
          <h3 className="text-xl font-medium text-blue-800 mb-6">Preview Our Products</h3>
          <div className="relative max-w-md mx-auto h-64">
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
              onClick={prevProduct}
            >
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="relative h-full overflow-hidden rounded-xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`h-full w-full flex flex-col items-center justify-center ${dairyProducts[currentProduct].color} p-8`}
                >
                  <motion.div 
                    initial={{ scale: 0.8, rotateY: 90 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-6"
                  >
                    {dairyProducts[currentProduct].icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{dairyProducts[currentProduct].name}</h4>
                  <p className="text-gray-600 text-center">{dairyProducts[currentProduct].description}</p>
                  
                  <motion.div 
                    className="mt-6 flex space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {dairyProducts.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-2 h-2 rounded-full ${currentProduct === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
              onClick={nextProduct}
            >
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-blue-800 font-medium mt-4"
          >
            Join our waitlist to be notified when we launch
          </motion.p>
        </motion.div> */}
        
        {/* Notification Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-md mx-auto w-full"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Be the first to know when we launch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Notify Me
              </motion.button>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center mt-2"
                >
                  Thank you! We'll keep you updated.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Features Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 mb-10 w-full max-w-4xl"
      >
        <h3 className="text-xl font-semibold text-center text-blue-800 mb-10">What to expect</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Farm Fresh",
              description: "Direct from our farms within 24 hours",
              icon: (
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )
            },
            {
              title: "Organic Certified",
              description: "100% organic with no additives",
              icon: (
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Premium Taste",
              description: "Award-winning creamy texture",
              icon: (
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 + (index * 0.2), duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="w-full mt-auto py-6 text-center text-gray-500 text-sm"
      >
        {/* Footer content preserved as empty */}
      </motion.footer>
    </div>
  );
};

export default ComingSoonPage;