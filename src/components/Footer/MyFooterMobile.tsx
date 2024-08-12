import Image from "next/image";
import React from "react";
import ico_catal from "@/assets/header_img/menu.png";
import CatalogIcon from "../Icons/CatalogIcon";
import Link from "next/link";
import heart from "@/assets/header_img/heart.png";
import box from "@/assets/header_img/box.png";
import shop from "@/assets/header_img/buy.png";
import avatar from "@/assets/header_img/avatar.svg";
const MyFooterMobile = () => {
  return (
    <div className="bg-white  fixed bottom-0 left-0 w-full">
      <div className="m-[0_auto] max-w-[336px] p-2 flex justify-between items-center text-[#414141]">
        <Link href={"/catalog"}>
          <div className="flex flex-col items-center gap-1">
            <div>
              <CatalogIcon fill="#414141" />
            </div>
            <div className="text-[8px]">Каталог</div>
          </div>
        </Link>
        <Link href={"/catalog"}>
          <div className="flex flex-col items-center gap-1">
            <div>
              <Image src={heart} alt="save products" />
            </div>
            <div className="text-[8px]">Избранное</div>
          </div>
        </Link>
        <Link href={"/catalog"}>
          <div className="flex flex-col items-center gap-1">
            <div>
              <Image src={box} alt="orders" />
            </div>
            <div className="text-[8px]">Заказы</div>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col items-center gap-1">
            <div>
              <Image src={shop} alt="cart" />
            </div>
            <div className="text-[8px]">Корзина</div>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col items-center">
            <div>
              <Image src={avatar} alt="avatar"/>
            </div>
             
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyFooterMobile;
