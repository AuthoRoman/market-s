import React from "react";

interface TableInfoProps {
  weight: string;
  country: string;
  brend: string;
}

const TableInfo: React.FC<TableInfoProps> = ({ weight, country, brend }) => {
  return (
    <div className="flex flex-col my-6 gap-1  ">
      <div className="flex bg-[#F3F2F1]   text-[12px] justify-between leading-[150%]">
        <div>Бренд</div>
        <span className="text-start font-bold  w-[40%]">{brend}</span>
      </div>
      <div className="flex   justify-between text-[12px] leading-[150%]">
        <div>Страна производителя</div>
        <span className="text-start font-bold    w-[40%]">{country}</span>
      </div>
      <div className="flex bg-[#F3F2F1] text-[12px]  justify-between leading-[150%]">
        <div>Вес</div>
        <span className="text-start font-bold    w-[40%]">{weight}</span>
      </div>
    </div>
  );
};

export default TableInfo;
