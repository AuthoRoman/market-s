import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { SectionBuyProps } from "@/model/types";

interface FormData {
  id: number;
  name: string;
  priceCard: number;
  priceWithoutCard: number;
  category: string;
}

async function getProducts(queryProp: string): Promise<FormData[]> {
  let url = new URL(
    "https://66a7001f23b29e17a1a3ed93.mockapi.io/api/products/products"
  );
  url.searchParams.set("category", queryProp);
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductListSection: React.FC<SectionBuyProps> = async ({ title }) => {
  const data = await getProducts(title);

  return (
    <div className="flex gap-10 items-center flex-wrap max-w-full ">
      {data.map((x, index) => {
        if (index < 4) {
          return (
            <ProductItem
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
