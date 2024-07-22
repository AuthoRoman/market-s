"use client";

import React from "react";
import icoFood from "@/assets/foodSlide.png";
import vegatables from '@/assets/vegatables.png'
import Image from "next/image";
import {   Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css'

const Slider = () => {
  return (
    <div className="  w-full bg-slider-bg bg-white h-[200px] bg-cover flex items-center overflow-hidden   ">
      <Swiper
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay ]}
     speed={1000}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="m-auto m-w-[1208px] flex justify-between  items-center  ">
            <div className="flex  justify-center  items-center w-full">
              <Image src={icoFood} alt="food" />
              <span className="text-[48px] font-bold">
                Доставка бесплатно от 1000 ₽
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="m-auto m-w-[1208px] flex justify-between  items-center  ">
            <div className="flex  justify-center gap-[20px] items-center w-full">
            <Image src={vegatables} className="w-[190px] h-[202px]" alt="food" />
              <span className="text-[48px] font-bold">
                Все самое свежее!
              </span>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
