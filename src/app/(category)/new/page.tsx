import React from "react";
import { InfoSectionsProductsName } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";

const New: React.FC<InfoSectionsProductsName> = async ({
  title = "new",
}) => {
  return <SectionCategoryLists title={title} />;
};

export default New;
