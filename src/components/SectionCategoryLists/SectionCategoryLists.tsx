import React from "react";
 
import { FormData, SectionBuyProps } from "@/model/types";
import ProductItem from "@/components/SectionOfBuy/ProductListSection/ProductItem/ProductItem";
import ProductListSection from "@/components/SectionOfBuy/ProductListSection/ProductListSection";

export const dynamic = 'force-dynamic'


async function getProducts(title:string ): Promise<FormData[]> {
  let url = new URL(
    "https://66a7001f23b29e17a1a3ed93.mockapi.io/api/products/products"
  );
  url.searchParams.set("category", title);
  const res = await fetch(url, {cache: 'no-store'});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type CategoruListProps = Pick<SectionBuyProps, 'title'>

const SectionCategoryLists: React.FC<CategoruListProps> = async ({ title = 'promotion'  }) => {
    const data = await getProducts(title);
    const currTitle = {
        'promotion':'Акции',
        'before':'Покупали ранее',
        'new':'Новинки',
        'articles':'Статьи',
    }[title]
    console.log(data)
    return (
      <div className="w-[1208px] m-auto flex flex-col gap-10 my-10">
        <span className="font-bold text-[36px]">{currTitle}</span>
       <ProductListSection title={title} limited={false}/>
      </div>
    );
}
export default SectionCategoryLists
