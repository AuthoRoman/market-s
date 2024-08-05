import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { FormData, SectionBuyProps } from "@/model/types";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getProducts(queryProp: string): Promise<FormData[]> {
  let url = new URL(
    "https://66a7001f23b29e17a1a3ed93.mockapi.io/api/products/products"
  );
  if (
    queryProp === "milk_food" ||
    queryProp === "bread_food" ||
    queryProp === "veg_food" ||
    queryProp === "freeze_food" ||
    queryProp === "drink_food" ||
    queryProp === "sweets_food" ||
    queryProp === "cofee_food" ||
    queryProp === "grocery_food" ||
    queryProp === "healstyle_food" ||
    queryProp === "zood_food" ||
    queryProp === "kido_food" ||
    queryProp === "meat_food" ||
    queryProp === "clean_nofood"
  ) {
    url.searchParams.set("catalogtype", queryProp);
  }else{
    url.searchParams.set("category", queryProp);
  }
  

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductListSection: React.FC<SectionBuyProps> = async ({
  title,
  limited,
}) => {
  const data = await getProducts(title);
  console.log(data);
  return (
    <div className="flex gap-10 items-center flex-wrap max-w-full ">
      {data.length>0 ? data.map((x, index) => {
        if (index < 4 && limited) {
          return (
            <Link  key={x.id} href={`/products/${x.id}`} > <ProductItem
              img={x.img!}
              id={x.id}
             
              name={x.name}
              priceCard={x.priceCard}
              priceWithoutCard={x.priceWithoutCard}
              category={x.category}
              title={title}
            /></Link>
          );
        }
        if (!limited) {
          return (
            <Link  key={x.id} href={`/products/${x.id}`} ><ProductItem
              img={x.img!}
              id={x.id}
              
              name={x.name}
              priceCard={x.priceCard}
              priceWithoutCard={x.priceWithoutCard}
              category={x.category}
              title={title}
            /></Link>
          );
        }
      }): ''}
    </div>
  );
};

export default ProductListSection;
