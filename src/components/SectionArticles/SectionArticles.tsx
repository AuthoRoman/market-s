import React from "react";
import HeaderSection from "../SectionOfBuy/HeaderSection/HeaderSection";
import ArticleCard from "./ArticleCard";

const SectionArticles = () => {
  return (
    <div className="max-w-[1208px] m-auto flex  flex-col  my-[120px] max-[1208px]:max-w-[736px] max-[900px]:max-w-[336px] ">
      <HeaderSection limited={true}  title="articles" />
      <div className="flex flex-wrap max-w-[1208px] items-center gap-10  max-[1208px]:max-w-[736px]   max-[900px]:items-center">
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
