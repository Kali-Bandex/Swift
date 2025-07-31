import React from "react";
import { delay, easeInOut, easeOut, motion } from "framer-motion";

import Buttons from "./Buttons";

const Newsletter = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-6 flex flex-col items-start lg:items-center my-14"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}>
      <motion.span
        className="text-[15px] text-gray-500 text-left lg:text-center uppercase tracking-tighter"
        variants={item}>
        Subscribe Our News
      </motion.span>
      <motion.h2
        className="text-3xl text-gray-700 font-normal tracking-tighter mb-8"
        variants={item}>
        Stay Updated With Our Latest News
      </motion.h2>
      <motion.p
        className="max-w-md w-full mx-auto text-[15px] text-gray-400 tracking-tight text-left lg:text-center"
        variants={item}>
        Get our latest updates, news, blog posts and much more directly to your
        inbox. Subscribe and join our mailing list today.
      </motion.p>
      <motion.div
        className="mt-10 max-w-2xl w-full bg-white h-16 rounded-full flex items-center px-1 shadow-2xl/10"
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: 'easeOut', type: 'spring', delay: 0.5 },
          },
        }}>
        <input
          type="email"
          placeholder="Enter your Email to subcribe now"
          className="flex-1 bg-transparent w-full h-full text-gray-600 outline-0 placeholder:text-gray-400 placeholder:text-[13px] lg:placeholder:text-[15px] placeholder:truncate px-3 lg:pl-6 cursor-text"
        />
        <Buttons title="Order now" />
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
