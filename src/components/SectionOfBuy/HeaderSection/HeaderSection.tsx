import { SectionBuyProps } from "@/model/types";
import Link from "next/link";
import React from "react";

const HeaderSection: React.FC<SectionBuyProps> = ({ title, limited }) => {
  const actualTitle =
    title === "promotion"
      ? "Акции"
      : title === "before"
      ? "Покупали раньше"
      : title === "new"
      ? "Новинки"
      : title === "articles"
      ? "Статьи"
      : title === "catalog"
      ? "Каталог"
      : title === "milk_food"
      ? "Молоко, сыр, яйцо"
      : title === "bread_food"
      ? "Хлеб"
      : title === "veg_food"
      ? "Фрукты и овощи"
      : title === "freeze_food"
      ? "Замороженные продукты"
      : title === "drink_food"
      ? "Напитки"
      : title === "sweets_food"
      ? "Кондитерские изделия"
      : title === "cofee_food"
      ? "Чай, кофе"
      : title === "grocery_food"
      ? "Бакалея"
      : title === "healstyle_food"
      ? "Здоровое питание"
      : title === "zood_food"
      ? "Зоотовары"
      : title === "kido_food"
      ? "Детское питание"
      : title === "meat_food"
      ? "Мясо, птица колбаса"
      : title === "clean_nofood"
      ? "Непродовльственные товары"
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
    <div className="w-full flex justify-between  max-[1208px]:max-w-[736px]">
      <span
        className={
          "" + limited
            ? "text-[36px] leading-[128px] font-bold"
            : " text-[36px] my-[0 auto] font-bold"
        }
      >
        {actualTitle}
      </span>
      {limited && (
        <Link href={`/${title}`}>
          <>
            <span className="leading-[128px] text-[15px] text-[#606060] hover:cursor-pointer">
              {actualText}
              <span className="ml-4">{">"}</span>
            </span>
          </>
        </Link>
      )}
    </div>
  );
};

export default HeaderSection;
