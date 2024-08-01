import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { FormData, SectionBuyProps } from "@/model/types";

export const dynamic = 'force-dynamic'
 

async function getProducts(queryProp: string): Promise<FormData[]> {
  let url = new URL(
    "https://66a7001f23b29e17a1a3ed93.mockapi.io/api/products/products"
  );
  url.searchParams.set("category", queryProp);
  const res = await fetch(url, {cache: 'no-store'});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductListSection: React.FC<SectionBuyProps> = async ({ title }) => {
  const data = await getProducts(title);
  console.log(data)
  return (
    <div className="flex gap-10 items-center flex-wrap max-w-full ">
      {data.map((x, index) => {
        if (index < 4) {
          return (
            <ProductItem
            img={x.img!}
            id={x.id}
              key={x.id}
              name={x.name}
              priceCard={x.priceCard}
              priceWithoutCard={x.priceWithoutCard}
              category={x.category}
              title={title}
            />
          );
        }
      })}
      
    </div>
  );
};

export default ProductListSection;
