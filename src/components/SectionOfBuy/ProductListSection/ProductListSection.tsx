import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { SectionBuyProps } from "@/model/types";

const ProductListSection: React.FC<SectionBuyProps> = ({title}) => {
  return (
    <div className="flex gap-10 items-center flex-wrap max-w-full ">
      <ProductItem title ={title}/>
      <ProductItem title ={title}/>
      <ProductItem title ={title}/>
      <ProductItem title ={title}/>
    </div>
  );
};

export default ProductListSection;
