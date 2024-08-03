import React from "react";
import { SectionBuyProps } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const Articles: React.FC<SectionBuyProps> = async ({
  title = "articles",
}) => {
  return <SectionCategoryLists title={title} />;
};

export default Articles;
