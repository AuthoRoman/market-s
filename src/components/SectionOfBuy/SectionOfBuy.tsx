import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import ProductListSection from "./ProductListSection/ProductListSection";
import { SectionBuyProps } from "@/model/types";

 

export const SectionOfBuy: React.FC<SectionBuyProps> = ({title, limited}) => {
  return (
    <div className="flex flex-col max-w-[1208px] m-auto my-20 ">
      <HeaderSection title={title} />
      <ProductListSection limited = {limited} title={title}/>
    </div>
  );
};

 
