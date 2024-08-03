import React from "react";
import { SectionBuyProps } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const Before: React.FC<SectionBuyProps> = async ({
  title = "before", 
}) => {
  return <SectionCategoryLists title={title} />;
};

export default Before;
