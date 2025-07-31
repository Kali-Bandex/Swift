import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Testimonials } from "../Constants/Info";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const MySwiper = ({ onSwiper }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      loop="true"
      slidesPerView={1}
      effect="slide"
      onSwiper={onSwiper}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}>
      {Testimonials.map((testimonial, idx) => (
        <SwiperSlide
          key={idx}
          className="bg-[#1A202C] text-[#E0E9F4] p-8 rounded-xs"
          variants={{
            hidden: { y: 70, opacity: 0, rotate: 3 },
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
          <span className="text-base font-normal tracking-tight">
            {testimonial.comment}
          </span>
          <p className="text-[15px] text-left tracking-tighter pt-4 pb-8 border-b border-[#596780]/50">
            {testimonial.desc}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="size-16 aspect-square rounded-2xl object-cover"
            />
            <div>
              <h4 className="text-[14px] font-semibold tracking-tighter pb-0.5">
                {testimonial.name}
              </h4>
              <p className="text-xs text-[#C3D4E9] tracking-tight">
                {testimonial.jobTitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
