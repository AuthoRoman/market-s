import React from "react";
import HeaderSection from "../SectionOfBuy/HeaderSection/HeaderSection";
import ArticleCard from "./ArticleCard";

const SectionArticles = () => {
  return (
    <div className="w-[1208px] m-auto flex  flex-col  my-[120px]">
      <HeaderSection  title="articles" />
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

export default SectionArticles;
