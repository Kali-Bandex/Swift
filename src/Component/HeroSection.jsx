import React from "react";
import { motion } from "framer-motion";

import hero_img from "../assets/Hero.svg";
import Buttons from "./Buttons";

const HeroSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 },
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
    <div className="min-h-full lg:min-h-[65vh] w-full bg-gradient-to-tr from-[#E1E7FF]/40 to-white" id="Home">
      <motion.div
        className="container mx-auto px-6 sm:px-16 lg:px-24 flex flex-col-reverse lg:flex-row  items-center justify-between py-5"
        variants={container}
        initial="hidden"
        animate="visible"
        once>
        <div className="flex-1/2 flex-col">
          {/* <span className='text-base capitalize text-gray-500'>Fastest, Reliable & Secure</span> */}
          <motion.h1
            className="bg-gradient-to-r from-gray-800 text-transparent bg-clip-text to-gray-500 text-4xl lg:text-7xl tracking-tighter font-semibold mb-6 leading-10 lg:leading-[70px]"
            variants={item}>
            Delivering packages at the speed of trust.
          </motion.h1>
          <motion.p
            className="w-full lg:max-w-md text-[15px] text-gray-400 tracking-tight"
            variants={item}>
            The food at your doorstep. Why starve when you have us. You hunger
            partner. Straight out of the oven to your doorstep.{" "}
          </motion.p>
          <motion.div
            className="mt-10 max-w-md bg-white h-16 rounded-full flex items-center overflow-hidden px-1"
            variants={item}>
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="flex-1 bg-transparent w-full h-full text-gray-600 outline-0 placeholder:text-gray-400 placeholder:text-[13px] lg:placeholder:text-[15px] pl-4 cursor-text"
            />
            {/* <button className="">Order Now</button> */}
            <Buttons title="Order now" />
          </motion.div>
        </div>
        <motion.div
          className="w-full lg:flex-1/2 items-center justify-center"
          variants={imageAnimation}>
          <img
            src={hero_img}
            alt=""
            className="w-full h-full aspect-square object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
