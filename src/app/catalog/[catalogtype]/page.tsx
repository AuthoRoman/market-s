import { SectionOfBuy } from "@/components/SectionOfBuy/SectionOfBuy";
import React from "react";

interface Props {
    params:{
       catalogtype:
    | "milk_food"
    | "bread_food"
    | "veg_food"
    | "freeze_food"
    | "drink_food"
    | "sweets_food"
    | "cofee_food"
    | "grocery_food"
    | "healstyle_food"
    | "zood_food"
    | "kido_food"
    | "meat_food" 
    | "clean_nofood"; 
    }
  
}

const Catalogtype = ({params} : Props) => {
  return <div><SectionOfBuy limited={false} title={params.catalogtype}/></div>;
};

export default Catalogtype;
