import React from 'react';
import { Shield, Zap, Heart, Apple, Feather, Leaf, Sun, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AmlaMangoFeatureComponent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white py-16 rounded-2xl shadow-xl overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full -mr-20 -mt-20 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full -ml-40 -mb-40 opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Product Highlights */}
        <motion.div 
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            variants={fadeInUp}
          >
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Premium Product</div>
            <h2 className="text-4xl font-bold text-green-800 mb-3">GikiJoy Amla Candy</h2>
            <h3 className="text-xl text-green-600 mb-6 font-medium">Naturally Harvested from Uttar Pradesh</h3>
            <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-green-500">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">100% Natural Ingredients</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">No Artificial Colors or Flavors</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Free from Preservatives</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Net Weight: 200 gm</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-[350px] flex justify-center"
            variants={fadeInUp}
          >
            <div className="relative">
              <div className=" rounded-2xl p-6 relative transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="absolute -right-4 -top-4 bg-yellow-400 text-green-900 font-bold text-xs rounded-full h-16 w-16 flex items-center justify-center shadow-lg transform rotate-12">
                    <div className="text-center">
                      <div>NEW</div>
                      <div>ARRIVAL</div>
                    </div>
                  </div>
                  <img src="\assets\images\MangoProduct\ac3.jpg" alt="Amla Candy" className="rounded-lg relative object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mango Tin Can Section */}
        <motion.div 
          className="mb-16 bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 flex justify-center mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-20 transform scale-110 blur-md"></div>
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src="assets/images/mango shoot/GikiJoy Cans/DASHEHRI  Slices in Pulp/GKJPulp2.jpg" alt="Mango Tin Can" className="rounded-xl shadow-md" />
                  <div className="absolute -right-6 -bottom-6 bg-white rounded-full p-2 shadow-lg">
                    <Award className="h-10 w-10 text-yellow-500" />
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="md:w-3/5 md:pl-10">
              <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Best Seller</div>
              <h3 className="text-3xl font-bold text-yellow-800 mb-4">Premium Mango Tin Can</h3>
              <p className="text-gray-700 mb-6 text-lg">Enjoy the sweet taste of perfectly preserved mangoes in our convenient tin can packaging. Made from handpicked ripe mangoes to ensure the best flavor and quality.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-3">
                    <Leaf className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-medium">Preservative-Free</span>
                </div>
                <div className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-3">
                    <Sun className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-medium">No Added Sugar</span>
                </div>
                <div className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-3">
                    <Apple className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-medium">High in Vitamin A</span>
                </div>
                <div className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-3">
                    <Shield className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-medium">Long Shelf Life</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Health Benefits</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">Discover the amazing health advantages of our natural products</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: Heart, title: "Heart Health", desc: "Maintains cholesterol levels" },
              { icon: Zap, title: "Detoxifies", desc: "Flushes out toxins" },
              { icon: Apple, title: "Digestion", desc: "Promotes healthy gut" },
              { icon: Feather, title: "Skin Health", desc: "Glowing, youthful skin" },
              { icon: Shield, title: "Immunity", desc: "Rich in Vitamin C" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-500"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-full inline-flex justify-center mb-4 shadow-inner">
                  <item.icon className="h-7 w-7 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Nutritional Facts */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-white p-2 rounded-full shadow-md mr-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Nutritional Facts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "High in Vitamin C", desc: "One of the richest natural sources" },
              { title: "Low in Calories", desc: "Only 50-60 calories per serving" },
              { title: "Rich in Fiber", desc: "Supports healthy digestion" },
              { title: "Natural Antioxidants", desc: "Fights oxidative stress" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="bg-gradient-to-r from-green-400 to-green-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <p className="text-gray-700 italic">Our products are tested and certified for nutritional content by independent laboratories.</p>
          </div>
        </motion.div>

        {/* Products Call-to-Action */}
        

        {/* WhatsApp Contact Buttons */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.a 
              href="https://wa.me/917817821976?text=Hi, I'm interested in GikiJoy Amla Candy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Order Amla Candy</span>
            </motion.a>
            
            <motion.a 
              href="https://wa.me/917817821976?text=Hi, I'm interested in GikiJoy Mango Tin Can"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Order Mango Tin Can</span>
            </motion.a>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-700">Contact us on WhatsApp for instant ordering!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AmlaMangoFeatureComponent;