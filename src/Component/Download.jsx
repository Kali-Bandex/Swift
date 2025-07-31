import React from "react";
import { delay, easeInOut, easeOut, motion } from "framer-motion";
import { div } from "motion/react-client";

import Buttons from "./Buttons";
import mobile from "../assets/Swift.svg";

const Download = () => {
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

  const item = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-6 lg:px-44  my-30 flex flex-col items-center lg:flex-row gap-6 lg:gap-30"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}>
      <div className="flex-1 lg:max-w-[50%]">
        <motion.p
          className="text-[15px] text-gray-500 uppercase tracking-tighter"
          variants={item}>
          Get Our Mobile App
        </motion.p>
        <motion.h2
          className="text-5xl font-normal text-gray-800 tracking-tighter mb-4 leading-14"
          variants={item}>
          Simple way to <br /> order your item
        </motion.h2>
        <motion.p className="text-[15px] text-gray-400 mb-10" variants={item}>
          Get real-time updates about your package and track your shipment
          progress. Your packages will be delivered right on time on your
          receiver's doorstep
        </motion.p>
        <motion.div
          variants={{
            hidden: { x: -40, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
            },
          }}>
          <Buttons title="Learn More" />
        </motion.div>
      </div>
      <motion.div
        className="w-full lg:flex-1 items-center justify-center"
        variants={imageAnimation}>
        <img
          src={mobile}
          alt="mobile"
          className="w-full h-full aspect-square object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Download;
