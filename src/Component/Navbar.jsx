import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/Swiftdrop 4 1.svg";
import Buttons from "../Component/Buttons";
import close_icon from "../assets/close-line.svg";
import menu_icon from "../assets/menu-4-line.svg";
import { NavItems } from "../Constants/Info";
import { label } from "motion/react-client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  useEffect(() => {
    const handleMenu = () => {
      setIsScroll(window.innerWidth < 400);
    };

    window.addEventListener("resize", handleMenu);

    return () => window.removeEventListener("resize", handleMenu);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { y: -130, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", type: "spring" },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const navItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const handleActive = (e)=> {
    // e.preventDefault();
    setIsActive(e.target.textContent);
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={navVariants}>
      <nav className="container mx-auto px-6 sm:px-16 lg:px-24 flex items-center justify-between py-4">
        <img src={logo} alt="logo" className="w-40" />
        <ul className="hidden lg:flex space-x-10">
          {NavItems.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <a
                href={link.path}
                className={`${
                  isActive === link.label
                    ? "text-gray-800 underline underline-offset-2"
                    : " text-gray-400"
                } text-base`} onClick={handleActive}>
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <Buttons title="Get Started" mobile={true} />
        <motion.div
          className="flex lg:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <img
            src={menu_icon}
            alt=""
            className="size-8 aspect-square cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </motion.div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="bg-white fixed top-0 left-0 right-0 w-full h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}>
            <div className="fixed top-8 left-8">
              <img src={logo} alt="" className="w-32 cursor-pointer" />
            </div>
            <motion.div
              className="fixed top-8 right-8"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <img
                src={close_icon}
                alt="close-icon"
                className="size-8 aspect-square cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </motion.div>
            <ul className="flex flex-col gap-6 mt-40 ml-8">
              {NavItems.map((link, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}>
                  <a
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-gray-700 tracking-tighter">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="ml-8 mt-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: NavItems.length * 0.2 + 0.1,
                  duration: 0.6,
                },
              }}
              whileHover={{ scale: 1.05, originX: 0 }}
              whileTap={{ scale: 0.95 }}>
              <Buttons title="Get Started" mobile={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
