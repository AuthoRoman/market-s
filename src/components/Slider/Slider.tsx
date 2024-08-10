"use client";

import React from "react";
import icoFood from "@/assets/foodSlide.png";
import vegatables from "@/assets/vegatables.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = () => {
  return (
    <div className=" cursor-grab  w-full bg-slider-bg bg-white h-[200px] bg-cover flex  overflow-hidden  max-[1208px]:h-[160px] ">
      <Swiper
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={1000}
        spaceBetween={50}
        slidesPerView={1}
         
      >
        <SwiperSlide>
          <div className="m-auto m-w-[1208px] flex flex-col h-full bottom-0 justify-end ">
            <div className="flex  justify-center  items-center w-full">
              <div  className=" max-[1208px]:w-[198px]">
                <Image src={icoFood} alt="food"  />
              </div>
              
              <span className="text-[48px] font-bold max-[1208px]:text-[24px]" >
                Доставка бесплатно от 1000 ₽
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-auto m-w-[1208px] flex justify-end flex-col  h-full  ">
            <div className="flex  justify-center gap-[20px] items-center w-full">
              <div className="w-[190px] max-[1208px]:w-[120px]">
              <Image
                src={vegatables}
                  
                alt="food"  
              />  
              </div>
              
              <span className="text-[48px] font-bold max-[1208px]:text-[24px]">Все самое свежее!</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
