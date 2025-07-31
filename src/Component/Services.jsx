import React from "react";
import { delay, easeInOut, easeOut, motion } from "framer-motion";
import { ourServices } from "../Constants/Info";
import { div } from "motion/react-client";

const Services = () => {
  //Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardItem = {
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  };

  return (
    <motion.div
      id="About"
      className="container mx-auto my-32"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}>
      <div className="w-full px-6 lg:max-w-lg mx-auto text-center">
        <motion.h2
          className="text-3xl text-gray-700 font-normal tracking-tighter mb-8"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            },
          }}>
          Why choose us?
        </motion.h2>
        <motion.p
          className="text-[15px] text-gray-400 tracking-tight"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
            },
          }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          tenetur eligendi dolore, cum ab officiis deleniti.
        </motion.p>
      </div>
      <motion.div
        className="mt-22 px-6 lg:px-44 grid grid-cols-1 lg:grid-cols-3 items-center gap-6 justify-center"
        variants={container}>
        {ourServices.map((service, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center text-center bg-white px-8 py-16 shadow-2xl/10"
            variants={{
              hidden: { y: 70, opacity: 0, rotate: 10 },
              visible: {
                y: 0,
                opacity: 1,
                rotate: 0,
                transition: {
                  duration: 0.6,
                  // delay: idx * "0.3s",
                  ease: "easeOut",
                  type: "tween",
                },
              },
            }}>
            <img
              src={service.image}
              alt={service.name}
              className="size-32 aspect-square flex items-center justify-center mb-8"
            />
            <h3 className="text-2xl text-gray-700 font-medium tracking-tighter mb-4 text-center">
              {service.name}
            </h3>
            <p className="text-[14px] tracking-tight text-gray-400">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
