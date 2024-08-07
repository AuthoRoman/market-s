import HeaderSection from "@/components/SectionOfBuy/HeaderSection/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Catalog = () => {
  return (
    <div className="max-w-[1208px] m-auto mb-20">
      <HeaderSection title="catalog" limited={false} />
      <div className="flex flex-wrap gap-10 h-100%">
        <Link
          href={`/catalog/milk_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_50%,#70c05b_85.81%),url("/images/catalog_food/milk_food.jpg")] max-w-[584px] w-full h-[200px]  h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/milk_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            Молоко, сыр, яйцо
          </span>
        </Link>
        <Link
          href={`/catalog/bread_food`}
          className=' bg-[linear-gradient(180deg,rgba(112,192,91,0)_42%,#70c05b_86.81%),url("/images/catalog_food/bread_food.jpg")] max-w-[272px] w-full h-[200px] text-white font-bold text-[18px]   relative cursor-pointer 
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/bread_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">Хлеб</span>
        </Link>
        <Link
          href={`/catalog/veg_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/veg_food.jpg")] max-w-[272px] w-full h-[200px]  h-100% text-white font-bold text-[18px]  relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/veg_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            Фрукты и овощи
          </span>
        </Link>
        <Link
          href={`/catalog/freeze_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/freeze_food.jpg")] max-w-[272px] w-full h-[200px]  h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/freeze_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            Замороженные продукты
          </span>
        </Link>
        <Link
          href={`/catalog/drink_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/drink_food.jpg")] max-w-[272px] w-full h-[200px]  h-100%   text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/drink_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">Напитки</span>
        </Link>
        <Link
          href={`/catalog/sweets_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/sweets_food.jpg")] max-w-[272px] w-full h-[200px]  h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/sweets_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            Кондитерские изделия
          </span>
        </Link>
        <Link
          href={`/catalog/cofee_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/cofee_food.jpg")] max-w-[272px] w-full h-[200px]  h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/cofee_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            {" "}
            Чай, кофе
          </span>
        </Link>
        <Link
          href={`/catalog/grocery_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/grocery_food.jpg")] max-w-[272px] h-[200px]  w-full h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/grocery_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">Бакалея</span>
        </Link>
        <Link
          href={`/catalog/healstyle_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/healstyle_food.jpg")] max-w-[272px] w-full h-[200px] h-100%  text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/healstyle_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            Здоровое питание
          </span>
        </Link>
        <Link
          href={`/catalog/zood_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/zood_food.jpg")] max-w-[584px] w-full h-[200px] h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/zood_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">Зоотовары</span>
        </Link>
        <Link
          href={`/catalog/kido_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/kido_food.jpg")] max-w-[272px] w-full h-100% h-[200px] text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/kido_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            {" "}
            Детское питание
          </span>
        </Link>
        <Link
          href={`/catalog/meat_food`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/meat_food.jpg")] max-w-[584px] w-full h-100% h-[200px] text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/meat_food.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            {" "}
            Мясо, птица, колбаса
          </span>
        </Link>
        <Link
          href={`/catalog/clean_nofood`}
          className='bg-[linear-gradient(180deg,rgba(112,192,91,0)_40%,#70c05b_86.81%),url("/images/catalog_food/clean_nofood.jpg")] max-w-[272px] w-full h-[200px] h-100% text-white font-bold text-[18px] relative cursor-pointer
        hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,_#f63_100%),url("/images/catalog_food/clean_nofood.jpg")]'
        >
          <span className=" bottom-[10px] left-[10px] absolute">
            Непродовольственные товары
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
