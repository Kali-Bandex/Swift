import React from "react";
import { NavItems } from "../Constants/Info";
import logo from "../assets/Swiftdrop 4 1.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 lg:px-44 lg:mt-40 py-9 flex flex-col items-center justify-between">
      <div>
        <img src={logo} alt="" className="w-40" />
      </div>
      <ul className="flex items-center gap-4 lg:gap-10">
        {NavItems.map((item, idx) => (
          <li>
            <a href={item.path} className="text-[15px] text-gray-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <hr className="w-full h-[1px] bg-gray-100 border-0 outline-0 my-10" />
      <p className="text-base text-[#3563E9]">Copyright © 2025 KaliBandex</p>
    </footer>
  );
};

export default Footer;
