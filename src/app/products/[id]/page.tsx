import HeaderSection from "@/components/SectionOfBuy/HeaderSection/HeaderSection";
import { FormData } from "@/model/types";
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
        <div className="flex items-center">
          <div>
            <Image width={500} height={500} src={icoPath} alt="image product"/>
          </div>
          <div></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
