import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SustainableHero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
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

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-white px-4 py-16 overflow-hidden"
    >
      {/* Floating Tags Container - Row on small screens */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="absolute left-0 right-0 top-4 sm:top-16 flex flex-row justify-center gap-2 sm:gap-0 sm:justify-between px-4 sm:px-16"
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
        className="max-w-4xl mx-auto text-center mt-24 sm:mt-32"
      >
        <h1 className="text-3xl sm:text-5xl font-medium text-green-800 leading-tight mb-6 sm:mb-8 px-4">
          We grow premium, sustainable fruits and regenerate nature at scale for
          future generations.
        </h1>

        <p className="text-base sm:text-lg text-green-800 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Our environmentally conscious approach to agriculture and focus on
          nature-based solutions benefits climate, restores ecosystems, and
          empowers local communities in the Iberian Peninsula.
        </p>
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
          className="absolute top-20 right-24 w-32 h-px bg-blue-100 transform rotate-45"
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
