import HeaderSection from "@/components/SectionOfBuy/HeaderSection/HeaderSection";
import { FormData } from "@/model/types";
import UButton from "@/shared/ui/UButton";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    id: string;
    
  };
}

async function getProducts(  productIdFetch: string): Promise<FormData[]> {
  let url = new URL(
    `https://66a7001f23b29e17a1a3ed93.mockapi.io/api/products/products`
  );
 
 
  url.searchParams.append('id',productIdFetch);

  const res = await fetch(url, { cache: "no-store" });
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json()    ;
}
const ProductInfo = async ({ params }: Props) => {
  const data = await getProducts(params.id);
  const product  = data[0]
 const icoPath =  `/images/products/${product.img}`
  return (
    <div>
      <div className="m-[0_auto] max-w-[1208px] ">
      <div className="my-10">
        <div className="text-[24px] font-bold my-10">{product.name}</div>
        <div className="flex gap-10 justify-between">
          <div className="w-[500px] h-[500px] relative">
            <Image width={500} height={500} src={icoPath} alt="image product"/>
            {product.category==='promotion' &&(<div className="absolute right-[10px] top-[10px] bg-[#FF6633] py-1 px-2 rounded text-white">
          -50%
        </div>)}
          </div>
          <div>
          <div className="justify-between my-4 text-[#414141] gap-[113px] flex items-end w-full mr-20">
          
          {product.category==='promotion' &&<div className=" flex  items-start flex-col">
            <span className="text-[24px]  text-right">{product.priceWithoutCard} ₽</span>
             <span className="text-[12px] text-[#BFBFBF]">Обычная</span>
          </div>}
          <div className="flex  items-end flex-col">
            <span className="text-[36px] font-bold ">{product.priceCard} ₽</span>
            {product.category==='promotion' &&<span className="text-[12px] text-[#BFBFBF] ">С картой Северяночки</span>}
          </div>
        </div>
            <UButton img>В корзину</UButton>
            <div></div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
