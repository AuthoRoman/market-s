import React from "react";
import { InfoSectionsProductsName } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const Promotion: React.FC<InfoSectionsProductsName> = async ({
  title = "promotion",
}) => {
  return <SectionCategoryLists title={title} />;
};

export default Promotion;
