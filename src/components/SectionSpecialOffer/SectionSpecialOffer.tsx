import React from "react";

import Image from "next/image";
import card from "@/assets/buisness/card.png";
import Link from "next/link";

export const SectionSpecialOffer = () => {
  return (
    <div className="w-[1208px] m-auto flex flex-col gap-10 my-[120px] max-[1208px]:max-w-[736px] max-[900px]:max-w-[336px]">
      <span className="font-bold text-[36px]">Специальные предложения</span>
      <div className="flex justify-between gap-[16px_0px] flex-wrap items-center">
        <div className="h-[200px] w-[574.85px] flex items-center justify-center rounded bg-[#FCD5BA] gap-[21px] hover:shadow-[0_8px_16px_0_rgba(202,147,96,0.5)] duration-100 ease-in hover:cursor-pointer max-[1208px]:max-w-[353px] max-[1208px]:max-h-[170px] max-[1208px]:p-5 max-[900px]:w-[336px]">
          <div className="max-w-[258px]">
            <div className="text-[24px] font-bold max-[1208px]:text-[18px]">
              Оформите карту «Северяночка»
            </div>
            <div className="text-4 max-[1208px]:text-[12px]">
              И получайте бонусы при покупке в магазинах и на сайте
            </div>
          </div>
          <Image width={206} src={card} alt="card" />
        </div>
        <Link href={"/promotion"}>
          <div className="bg-no-repeat h-[200px] w-[574.85px] flex items-center justify-start p-10 rounded bg-[url('../assets/buisness/bannerBusket.png')] gap-[21px] hover:shadow-[4px_8px_16px_0_rgba(112,192,91,0.2)] duration-100 ease-in hover:cursor-pointer max-[1208px]:max-w-[353px] max-[1208px]:max-h-[170px] max-[1208px]:p-5 max-[1208px]:bg-[length:353px_170px] max-[900px]:bg-[length:336px_170px]">
            <div className="max-w-[258px] max-[1208px]:max-w-[125px]">
              <div className="text-[24px] font-bold max-[1208px]:text-[18px] ">
                Покупайте акционные товары
              </div>
              <div className="text-4 max-[1208px]:text-[12px]">И получайте вдвое больше бонусов</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
