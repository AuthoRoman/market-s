import React from "react";
import { SectionBuyProps } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const New: React.FC<SectionBuyProps> = async ({
  title = "new",
}) => {
  return <SectionCategoryLists title={title} />;
};

export default New;
