import React from "react";
import { InfoSectionsProductsName } from "@/model/types";
import SectionCategoryLists from "@/components/SectionCategoryLists/SectionCategoryLists";
import SectionArticles from "@/components/SectionArticles/SectionArticles";
import ArticleCard from "@/components/SectionArticles/ArticleCard";

const Articles: React.FC<InfoSectionsProductsName> = async () => {
  return (
    <div className="w-[1208px] m-auto flex flex-col gap-10 my-10">
      <span className="font-bold text-[36px]">Статьи</span>
      <div className="flex   items-center gap-10">
        <div>
          <ArticleCard type="stop_mask" />
        </div>
        <div>
          <ArticleCard type="morning" />
        </div>
        <div>
          <ArticleCard type="food" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
