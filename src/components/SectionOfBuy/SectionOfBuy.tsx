import React, { Suspense } from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import ProductListSection from "./ProductListSection/ProductListSection";
import { SectionBuyProps } from "@/model/types";
import SceletonProductItem from "../SceletonProductItem/SceletonProductItem";

export const SectionOfBuy: React.FC<SectionBuyProps> = ({ title, limited }) => {
  return (
    <div
      className={
        limited
          ? "my-20 flex flex-col max-w-[1208px] m-auto  max-[1208px]:max-w-[768px]"
          : "my-10 flex flex-col max-w-[1208px] m-auto  max-[1208px]:max-w-[768px]"
      }
    >
      <HeaderSection title={title} limited={limited} />
      <Suspense fallback = {<SceletonProductItem/>}>

      <ProductListSection limited={limited} title={title} />
      </Suspense>
    </div>
  );
};
