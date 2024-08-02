import React from "react";
 
import Image from "next/image";
import card from "@/assets/buisness/card.png";
 

export const SectionSpecialOffer = () => {
  return (
    
      <div className="w-[1208px] m-auto flex flex-col gap-10 my-[120px]">
        <span className="font-bold text-[36px]">Специальные предложения</span>
        <div className="flex justify-between items-center">
          <div className="h-[200px] w-[574.85px] flex items-center justify-center rounded bg-[#FCD5BA] gap-[21px] hover:shadow-[0_8px_16px_0_rgba(202,147,96,0.5)] duration-100 ease-in hover:cursor-pointer">
            <div className="max-w-[258px]">
              <div className="text-[24px] font-bold">Оформите карту «Северяночка»</div>
              <div className = "text-4">И получайте бонусы при покупке в магазинах и на сайте</div>
            </div>
            <Image width={206} src={card} alt="card" />
          </div>
          <div className="h-[200px] w-[574.85px] flex items-center justify-start p-10 rounded bg-[url('../assets/buisness/bannerBusket.png')] gap-[21px] hover:shadow-[4px_8px_16px_0_rgba(112,192,91,0.2)] duration-100 ease-in hover:cursor-pointer">
            <div className="max-w-[258px]">
              <div className="text-[24px] font-bold">Покупайте акционные товары</div>
              <div className = "text-4">И получайте вдвое больше бонусов</div>
            </div>
             
          </div>
        </div>
      </div>
    
  );
};
