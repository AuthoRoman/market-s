import Image from "next/image";
import React from "react";

import ico_phone from "@/assets/icons/phone.svg";

const CardVacancies = () => {
  return (
    <div className="flex flex-col justify-start gap-4 bg-white p-8 max-w-[376px] rounded 
    shadow-[1px_2px_2px_0_rgba(0,0,0,0.1)]">
      <div className="text-2xl font-bold">Должность</div>
      <div className="flex flex-col gap-2">
        <div className="text-[18px]">Требования</div>
        <div className="text-[16px]">
          Текст про требования текст про требования текст про требования текст
          про требования текст про требования
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[18px]">Обязанности</div>
        <div className="text-[16px]">
          Текст про обязаности текст про обязаности текст про обязаности текст
          про обязаности текст про обязаности
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[18px]">Условия</div>
        <div className="text-[16px]">
          Текст про условия текст про условия текст про условия текст про
          условия текст про условия текст про условия
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[18px]">Звоните</div>
        <div className="flex gap-[10px]">
          <div>
            <Image src={ico_phone} alt="phone" />
          </div>
          <div className="text-[16px] underline">+7 904 271 35 90</div>
        </div>
      </div>
    </div>
  );
};

export default CardVacancies;
