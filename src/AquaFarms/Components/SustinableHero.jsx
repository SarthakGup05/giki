import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SustainableHero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isExpanded, setIsExpanded] = useState(false); // State to control expansion of text
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-white px-4 py-12 sm:py-16 overflow-hidden"
    >
      {/* Floating Tags Container - Row on small screens */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="absolute left-0 right-0 top-8 sm:top-12 flex flex-row justify-center gap-3 sm:gap-4 sm:justify-between px-4 sm:px-16"
      >
        {["Nature-based solutions", "Restores ecosystems", "Benefits climate"].map(
          (text, index) => (
            <motion.span
              key={index}
              variants={fadeInUp}
              className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-blue-50 text-green-800 rounded-full text-xs sm:text-sm whitespace-nowrap"
            >
              {text}
            </motion.span>
          )
        )}
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto text-center mt-16 sm:mt-24"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold text-green-800 leading-tight mb-4 sm:mb-6 px-4">
          We grow premium, sustainable fruits and regenerate nature at scale for
          future generations.
        </h1>

        <p className="text-base sm:text-lg text-green-800 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
          Our environmentally conscious approach to agriculture and focus on
          nature-based solutions benefits climate, restores ecosystems, and
          empowers local communities in the Iberian Peninsula.
        </p>

        {/* Additional Paragraph Content with Toggle */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className="overflow-hidden"
        >
          <p className="text-base sm:text-lg text-green-800 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Expanding further, we are working with local farmers to create a
            sustainable supply chain. This initiative promotes biodiversity, reduces
            waste, and encourages responsible water use, which collectively ensures
            the long-term resilience of ecosystems.
          </p>
        </motion.div>

        {/* See More / See Less Button */}
        <button
          onClick={toggleText}
          className="text-blue-600 mt-4 font-semibold hover:underline"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </motion.div>

      {/* Decorative Lines - Hidden on small screens */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="absolute inset-0 pointer-events-none hidden sm:block"
      >
        <motion.div
          variants={fadeInUp}
          className="absolute top-16 right-24 w-32 h-px bg-blue-100 transform rotate-45"
        ></motion.div>
        <motion.div
          variants={fadeInUp}
          className="absolute top-1/3 left-24 w-32 h-px bg-blue-100 transform -rotate-45"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SustainableHero;
