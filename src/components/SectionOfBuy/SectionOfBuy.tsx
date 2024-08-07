import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import ProductListSection from "./ProductListSection/ProductListSection";
import { SectionBuyProps } from "@/model/types";

 

export const SectionOfBuy: React.FC<SectionBuyProps> = ({title, limited}) => {
  return (
    <div className={    limited ? "my-20 flex flex-col max-w-[1208px] m-auto" : "my-10 flex flex-col max-w-[1208px] m-auto  max-[1208px]:max-w-[736px]"}>
        <HeaderSection title={title} limited = {limited} /> 
      <ProductListSection limited = {limited} title={title}/>
    </div>
  );
};

 
