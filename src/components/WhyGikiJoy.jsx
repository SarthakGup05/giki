import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const HowWeGrowOurMangoes = () => {
  // Get scrollY progress from 0 to 1
  const { scrollYProgress } = useScroll();

  // Transform scrollYProgress into opacity and vertical position
  const headingY = useTransform(scrollYProgress, [0, 0.2], [-20, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const paragraphY = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const paragraphOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto px-4">
        <motion.h2
          className="relative text-black text-4xl font-bold text-left mb-8 "
          style={{ y: headingY, opacity: headingOpacity }}
        >
          How We Grow Our Mangoes
          <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500 transform scale-x-0 origin-left"></span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Why Choose GikiJoy?
            </h2>
            <p className="text-gray-600 mb-6">
              GikiJoy, a small village in Maharashtra state, produces the world's
              best Alphonso mango. However, the traders in the market cheat
              customers by selling inferior mangoes from other regions by labeling
              them as GikiJoy Hapus. GikiJoy Mango is a project by Devgad Taluka
              Mango Grower's Co-operative Society Limited, to give you the best
              original GikiJoy Alphonso Mango (GikiJoy Hapus) directly from our
              farms in GikiJoy. Our mangoes are grown with utmost care, ensuring
              they are free from carbide and chemicals. The rich soil and favorable
              climate of GikiJoy contribute to the unique taste and aroma of our
              mangoes. Our farmers follow traditional farming practices, ensuring
              each mango is packed with nutrients and flavor. When you buy from
              GikiJoy Mango, you are not only getting the best fruit home-delivered
              but also supporting sustainable and ethical farming practices. With a
              guarantee of our trust, we promise to deliver the authentic taste of
              GikiJoy to your doorstep.
            </p>
            
            {/* Add Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contactus"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg 
                          font-semibold shadow-lg hover:bg-yellow-500 
                          transition-all duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            style={{ scale: imageScale }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="\assets\images\Mango Tree.jpeg" // Replace with your image path
              alt="Farming Illustration"
              className="w-full rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeGrowOurMangoes;
