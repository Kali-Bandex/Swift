import React, { useState } from "react";

const Buttons = ({ title, mobile }) => {
  return (
    <button
      className={`${
        mobile ? "hidden lg:block" : "block"
      } bg-[#3563E9] px-4 lg:px-5 py-[16px] rounded-full tracking-tight text-white cursor-pointer hover:tracking-wider hover:bg-[#3563E9]/95 transition-all ease-out duration-500`}>
      {title}
    </button>
  );
};

export default Buttons;
