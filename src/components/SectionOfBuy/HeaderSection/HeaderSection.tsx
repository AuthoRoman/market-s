import { SectionBuyProps } from "@/model/types";
import Link from "next/link";
import React from "react";

type titleProps = Pick<SectionBuyProps, 'title'>

const HeaderSection: React.FC<titleProps> = ({ title }) => {
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
      <Link href={`/${title}`}>
      <>
      <span className="leading-[128px] text-[15px] text-[#606060] hover:cursor-pointer">
        {actualText}
        <span className="ml-4">{">"}</span>
        </span>
      </>
       
        </Link>
      
    </div>
  );
};

export default HeaderSection;
