import { FormData } from "@/model/types";
import UButton from "@/shared/ui/UButton";
import Image from "next/image";
import React from "react";
import smile from '@/assets/icons/smile.png'
import DinDonIcon from "@/components/Icons/DinDonIcon";
import { SectionOfBuy } from "@/components/SectionOfBuy/SectionOfBuy";
import TableInfo from "@/components/TableInfo/TableInfo";
interface Props {
  params: {
    id: string;
  };
}

async function getProducts(productIdFetch: string): Promise<FormData[]> {
  let url = new URL(
    `https://66a7001f23b29e17a1a3ed93.mockapi.io/api/products/products`
  );

  url.searchParams.append("id", productIdFetch);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const ProductInfo = async ({ params }: Props) => {
  const data = await getProducts(params.id);
  const product = data[0];
  const icoPath = `/images/products/${product.img}`;
  return (
    <div>
      <div className="m-[0_auto] max-w-[1208px] ">
        <div className="mt-10">
          <div className="text-[24px] font-bold my-10">{product.name}</div>
          <div className="flex gap-10 justify-between">
            <div className="w-[500px] h-[500px] relative">
              <Image
                width={500}
                height={500}
                src={icoPath}
                alt="image product"
              />
              {product.category === "promotion" && (
                <div className="absolute right-[10px] top-[10px] bg-[#FF6633] py-1 px-2 rounded text-white">
                  -50%
                </div>
              )}
            </div>
            <div>
              <div className="justify-between my-4 text-[#414141] gap-[113px] flex items-end w-full mr-20">
                {product.category === "promotion" && (
                  <div className=" flex  items-start flex-col">
                    <span className="text-[24px]  text-right">
                      {product.priceWithoutCard} ₽
                    </span>
                    <span className="text-[12px] text-[#BFBFBF]">Обычная</span>
                  </div>
                )}
                <div className="flex  items-end flex-col">
                  <span className="text-[36px] font-bold ">
                    {product.priceCard} ₽
                  </span>
                  {product.category === "promotion" && (
                    <span className="text-[12px] text-[#BFBFBF] ">
                      С картой Северяночки
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <UButton img>В корзину</UButton>
                <div className="flex items-center gap-2 p-1">
                  <Image src={smile} alt="smile"/>
                  <span className="text-[#70C05B] text-[12px] w-[164px] text-center">Вы получаете <span className="font-bold">10 бонусов</span> </span>
                </div>
                <div className="flex items-center gap-2 p-1">
                  <DinDonIcon/>
                  <span className=" text-[#606060] text-[12px] w-[200px] text-center">Уведомить о снижении цены</span>  
                  </div>
              </div>
               <TableInfo brend={product.brend} country={product.country} weight={product.weight}/>
            </div>
          </div>
        </div>
        <SectionOfBuy limited title="promotion"/>
      </div>
    </div>
  );
};

export default ProductInfo;
