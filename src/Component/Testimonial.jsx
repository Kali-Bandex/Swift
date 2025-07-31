import React, { useRef } from "react";
import MySwiper from "./MySwiper";
import { delay, easeInOut, easeOut, motion } from "framer-motion";

import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";

const Testimonial = () => {
  const swiperRef = useRef(null);

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

  return (
    <div className="bg-[#0D121F] w-full">
      <motion.div
        className="container mx-auto px-6 lg:px-24 py-30"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}>
        <motion.p
          className="max-w-md mx-auto text-[15px] text-[#3563E9] text-left lg:text-center uppercase tracking-tighter"
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}>
          What they say
        </motion.p>
        <motion.h2
          className="text-white text-3xl tracking-tighter font-normal lg:text-center mb-8"
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}>
          Our User Kind Words
        </motion.h2>
        <motion.p
          className="w-full lg:max-w-md mx-auto lg:text-center text-[15px] text-[#90A3BF] tracking-tight"
          variants={{
            hidden: { x: 50, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
            },
          }}>
          Here are some testimonials from our user after using Spend.In to
          manage their business expenses.
        </motion.p>
        <motion.div
          className="mt-24"
          variants={{
            hidden: { y: 60, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
                type: "tween",
              },
            },
          }}>
          <MySwiper onSwiper={(swiper) => (swiperRef.current = swiper)} />
        </motion.div>
        <motion.div className="w-full flex items-center justify-center mt-16 gap-6">
          <motion.div
            className="size-12 aspect-square rounded-full flex items-center justify-center bg-[#1A202C] hover:bg-[#3563E9] active:bg-[#3563E9]/60 transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
              },
            }}>
            <img src={arrowLeft} alt="arrow-left" />
          </motion.div>
          <motion.div
            className="size-12 aspect-square rounded-full flex items-center justify-center bg-[#1A202C] hover:bg-[#3563E9] active:bg-[#3563E9]/60 transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
            variants={{
              hidden: { x: 30, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
              },
            }}>
            <img src={arrowRight} alt="arrow-right" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
