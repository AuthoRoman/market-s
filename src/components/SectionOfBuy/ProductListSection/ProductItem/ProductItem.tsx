import React from "react";
import Image from "next/image";
import pancakes from "@/assets/products/pancakes.png";
import heart from "@/assets/header_img/heart.png";
import UButton from "@/shared/ui/UButton";
import star__full from "@/assets/star__full.png";
import { InfoSectionsProducts  } from "@/model/types";

const ProductItem: React.FC<InfoSectionsProducts> = ({title, category, name,priceCard, priceWithoutCard, img}) => {
  const icoPath =  `/images/products/${img}`
  return (
    <div className="h-fit w-[272px] duration-100 ease-in bg-white rounded shadow-[1px_2px_4px_0_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_16px_0_rgba(255,102,51,0.2)]">
      <div className="relative">
        <Image className="" width={500} height={500} src={icoPath} alt="pancakes" />
        <div className="absolute right-2 top-2 hover:cursor-pointer bg-[#f3f2f18f] pt-[6.5px] px-[5.05px] pb-[6.27px] rounded">
          <Image src={heart} alt="like" />
        </div>
        {title==='promotion' &&(<div className="absolute left-[10px] bottom-[10px] bg-[#FF6633] py-1 px-2 rounded text-white">
          -50%
        </div>)}
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="  text-[#414141] flex justify-between w-full">
          <div className="flex  justify-start flex-col">
            <span className="text-[18px] font-bold ">{priceCard} Р</span>
            {title==='promotion' &&<span className="text-[12px] text-[#BFBFBF]">С картой</span>}
          </div>
          {title==='promotion' &&<div className=" flex  items-end flex-col">
            <span className="text-[18px] font-bold text-right">{priceWithoutCard} Р</span>
             <span className="text-[12px] text-[#BFBFBF]">Обычная</span>
          </div>}
        </div>
        <span className="text-[16px]">{name}</span>
        <div className="flex">
          <span>
            <Image src={star__full} alt="star full" />
          </span>
          <span>
            <Image src={star__full} alt="star full" />
          </span>
          <span>
            <Image src={star__full} alt="star full" />
          </span>
          <span>
            <Image src={star__full} alt="star full" />
          </span>
          <span>
            <Image src={star__full} alt="star full" />
          </span>
        </div>

        <UButton />
      </div>
    </div>
  );
};

export default ProductItem;
