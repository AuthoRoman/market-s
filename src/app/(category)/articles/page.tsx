import React from "react";
import { InfoSectionsProductsName } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const Articles: React.FC<InfoSectionsProductsName> = async ({
  title = "articles",
}) => {
  return <SectionCategoryLists title={title} />;
};

export default Articles;
