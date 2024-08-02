import { SectionBuyProps } from "@/model/types";
import React from "react";

const HeaderSection: React.FC<SectionBuyProps> = ({ title }) => {
  const actualTitle =
    title === "promotion"
      ? "Акции"
      : title === "before"
      ? "Покупали раньше"
      : title === "new"
      ? "Новинки"
      : title === "articles"
      ? "Статьи"
      : "";
  const actualText =
    title === "promotion"
      ? "все акции"
      : title === "before"
      ? "все покупки"
      : title === "new"
      ? "все новинки"
      : title === "articles"
      ? "Все статьи"
      : "";
  return (
    <div className="w-full flex justify-between">
      <span className="text-[36px] font-bold">{actualTitle}</span>
      <span className="leading-[128px] text-[15px] text-[#606060] hover:cursor-pointer">
        {actualText}
        <span className="ml-4">{">"}</span>
      </span>
    </div>
  );
};

export default HeaderSection;
