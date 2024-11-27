import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="w-full md:w-1/2"
            style={{ y: paragraphY, opacity: paragraphOpacity }}
          >
            <p className="text-left text-slate-600 font-semibold mb-8 md:mb-12 max-w-2xl px-4 md:px-8 p-2 md:p-4">
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
