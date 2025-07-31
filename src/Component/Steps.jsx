import React from "react";
import { delay, easeInOut, easeOut, motion } from "framer-motion";
import { div } from "motion/react-client";

import { ourSteps } from "../Constants/Info";

const Steps = () => {
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
    <div className="bg-[#0D121F] w-full" id="Steps">
      <motion.div
        className="container mx-auto px-6 lg:px-24 py-30"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-300px", once: true }}>
        <motion.h2
          className="text-white text-3xl tracking-tighter font-normal lg:text-center mb-8"
          variants={{
            hidden: { x: 40, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}>
          Few Easy Steps & Done
        </motion.h2>
        <motion.p
          className="w-full lg:max-w-md mx-auto lg:text-center text-[15px] text-[#90A3BF] tracking-tight"
          variants={{
            hidden: { x: -40, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
            },
          }}>
          In just few easy step, you are all set to manage your business
          finances. Manage all expenses with Spend.In all in one place.
        </motion.p>
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-28 px-14 lg:px-28 mt-14"
          variants={container}>
          {ourSteps.map((step, idx) => (
            <motion.div
              className="relative"
              key={idx}
              variants={{
                hidden: { y: 70, opacity: 0, rotate: 14 },
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
              <div className="bg-[#3563E9] text-white w-10 aspect-square rounded-full flex items-center justify-center absolute -top-4 -left-4 border-4 border-[#0D121F]">
                {idx + 1}
              </div>
              <div className="bg-[#fff] aspect-square rounded-4xl flex items-center justify-center">
                <img
                  src={step.image}
                  alt=""
                  className="w-full h-full aspect-square"
                />
              </div>
              <p className="text-white text-center text-[17px] tracking-tighter mt-6">
                {step.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Steps;
