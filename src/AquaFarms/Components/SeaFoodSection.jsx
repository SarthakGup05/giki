import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const SeafoodSection = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-blue-400"
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              scale: Math.random() * 2 + 1,
            }}
            animate={{
              y: "-100%",
              x: `${
                Math.sin(Math.random() * Math.PI * 2) * 10 +
                parseInt(Math.random() * 100)
              }%`,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-blue-400 text-lg font-medium mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Fresh from the Ocean
            </motion.span>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Exquisite food,
              <br />
              <span className="text-blue-400">Expertly Served</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base md:text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Experience the finest selection of premium food, sourced daily
              from sustainable fisheries and prepared by our master chefs with
              passion and precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <a
                href={`https://wa.me/7817821976`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-8 py-3 bg-blue-500 rounded-full font-medium hover:bg-blue-600 transition-colors text-sm md:text-lg shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="\assets\images\Aqua farms\services\Seafood.jpg"
                alt="Fresh seafood platter"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <span className="block font-bold text-xl md:text-2xl">
                Daily Fresh
              </span>
              <span className="text-sm">Ocean to Table</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-4 rounded-lg shadow-lg z-30"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <span className="block font-bold text-xl md:text-2xl">
                Premium
              </span>
              <span className="text-sm">Quality Assured</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SeafoodSection;
