import { testimonialsData } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <Swiper
      autoplay={true}
      loop={true}
      className="max-w-[700px] pb-10"
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[Pagination, Autoplay]}
    >
      {testimonialsData.map((slide, idx) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={idx}
            className="bg-white px-10 py-16 rounded-2xl flex items-start gap-10 cursor-pointer"
          >
            <img className="hidden md:block" src={image} alt="" />
            <div>
              <h3 className="h3">{name}</h3>
              <a className="mt-3 mb-6" href="">
                {web}
              </a>
              <p>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
