import React from "react";
import HeaderSection from "../SectionOfBuy/HeaderSection/HeaderSection";

const SectionArticles = () => {
  return (
    <div className="w-[1208px] m-auto flex  flex-col  my-[120px]">
      <HeaderSection title="articles" />
      <div className="flex justify-between">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default SectionArticles;
