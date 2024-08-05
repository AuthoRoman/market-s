import Image from "next/image";
import React from "react";

import home_ico from "@/assets/icons/home.svg";
import percent from '@/assets/icons/percent.svg'
import SectionLocation from "@/components/SectionLocation/SectionLocation";
const Contacts = () => {
  return (
    <div className="m-[0_auto] max-w-[1208px] ">
      <div className="my-10">
        <div className="text-[64px] font-bold my-10">Контакты</div>
        <div className="flex gap-20">
          <div className="flex gap-2 align-top">
            <div >
              <Image src={home_ico} alt="home icon" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-2xl">Бухгалтерия, склад</div>
              <div className="underline text-2xl font-bold">+7 82140 92619</div>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div >
              <Image src={percent} alt="home icon" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-2xl">Вопросы по системе лояльности</div>
              <div className="underline text-2xl font-bold">+7 908 716 33 97</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <SectionLocation/>
      </div>
    </div>
  );
};

export default Contacts;
