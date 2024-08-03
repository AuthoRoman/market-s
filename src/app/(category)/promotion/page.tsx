import React from "react";
import { SectionBuyProps } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const Promotion: React.FC<SectionBuyProps> = async ({
  title = "promotion",
}) => {
  return <SectionCategoryLists title={title} />;
};

export default Promotion;
