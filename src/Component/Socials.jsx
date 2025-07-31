import React from "react";
import { motion } from "framer-motion";
import { clients } from "../Constants/Info";

const Socials = () => {
  // Animation variants for the container and text
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // Duplicate the clients array to create seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <motion.div
      className="container mx-auto mt-16 px-6 sm:px-16 lg:px-24 flex flex-col items-center justify-center mb-16"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      <motion.h2
        className="text-3xl text-gray-700 font-normal tracking-tighter mb-8"
        variants={item}>
        Trusted by 120+ leading Companies
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 w-[80px] h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 w-[80px] h-full bg-gradient-to-l from-white to-transparent z-10" />

        {/* Animated logos container */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"], // Moves from right to left
          }}
          transition={{
            duration: 19, // Adjust duration for speed
            ease: "linear",
            repeat: Infinity, // Infinite loop
          }}>
          {duplicatedClients.map((link, idx) => (
            <div key={idx} className="mx-5 lg:mx-7 flex-shrink-0">
              <img src={link} alt="" className="h-8 lg:h-10 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Socials;
