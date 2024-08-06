import React, { ReactElement, ReactPortal } from "react";
import cart from '@/assets/icons/cart.svg'
import Image from "next/image";
import CartIcon from "@/components/Icons/CartIcon";

export interface Props  { 
  children: React.ReactNode,
  className?: string,
  img?:boolean
}
const UButton = ({children, img}:Props ) => {
  return (
    <button style={{height: img ?'60px': '40px'}} className="p-1 w-full duration-100 text-[#70C05B] border-[2px] bg-white rounded border-[#70C05B] h-10 ease-in
     hover:border-[#FF6633] hover:bg-[#FF6633] hover:text-[white]  flex items-center group  ">
      <div  >
        {img && <CartIcon/>}
      </div>
      
      <span className="m-[0_auto] hover:fill-white" >{children}</span>
    </button>
  );
};

export default UButton;
