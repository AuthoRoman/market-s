import Image from "next/image";
import React from "react";
import stop from "@/assets/articles/stop_mask.jpg";
import morning from "@/assets/articles/morning.jpg";
import food from "@/assets/articles/food.jpg";

interface ArticleCardProps {
  type: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ type }) => {
  const icoPath = {
    stop_mask: stop,
    morning: morning,
    food: food,
  }[type];
  const currTitle = {
    stop_mask: "Режим использования масок и перчаток на территории магазинов",
    morning: "Весеннее настроение для каждой",
    food: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
  }[type];
  const currText = {
    stop_mask:
      'Подробная информация о режимах использования масок и перчаток на территории магазинов "Северяночка". Информация обновляется каждый будний день.',
    morning:
      "8 Марта - это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
    food: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
  }[type];
  return (
    <div className="w-[376px] hover:shadow-[4px_8px_16px_0_rgba(255,102,51,0.2)]">
      <Image src={icoPath!} alt={"icoPath"} width={376} height={162} />
      <div className="flex flex-col gap-[10px] justify-between bg-white p-[10px]   h-[255px]  ">
        <span className="font-bold text-[18px]">{currTitle}</span>
        <span className="text-[16px]">{currText}</span>
        <button className="duration-100 ease-in justify-start w-[150px] h-10 rounded text-[#70C05B] bg-[#E5FFDE] hover:bg-[#70C05B] hover:text-white">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
