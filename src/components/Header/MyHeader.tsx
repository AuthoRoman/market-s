import React from "react";
import logo from "@/assets/header_img/logo.svg";
import menu from "@/assets/header_img/menu.png";
import search from "@/assets/header_img/search.png";
import heart from "@/assets/header_img/heart.png";
import box from "@/assets/header_img/box.png";
import shop from "@/assets/header_img/buy.png";
import avatar from "@/assets/header_img/avatar.svg";
import arrowDown from "@/assets/header_img/arrowDown.png";
import Image from "next/image";
import Link from "next/link";
const MyHeader = () => {
  return (
    <div className="bg-white flex items-center justify-between ">
      <div className="m-auto  w-[1208px] max-[1208px]:max-w-[878px]">
        <div className="flex  h-[72px] gap-10 items-center max-[1208px]:gap-5">
          <Link href={"/"}>
            <div className="flex items-center font-bold gap-[11.41px] text-main-color  ">
              <Image src={logo} alt="logo" width={40} />

              <span className="max-[1208px]:hidden">СЕВЕРЯНОЧКА</span>
            </div>
          </Link>
          <div className="flex gap-6">
            <Link href={"/catalog"}>
              {" "}
              <div className="w-[140px] text-base bg-[#70C05B] h-10 rounded  text-white  flex justify-center items-center gap-2 hover: cursor-pointer max-[1208px]:w-[40px]">
                <Image src={menu} width={24} alt="menu" />
                <span className="max-[1208px]:hidden"> Каталог</span>
              </div>
            </Link>
            <div className=" relative   ">
              <input
                type="text"
                className="pr-10 pl-2 py-2 border-2 h-10 w-[376px] border-[#70C05B]  rounded hover: outline-none max-[1208px]:max-w-[324px]"
                placeholder="Найти товар"
              />
              <Image
                className=" absolute right-2 top-2 cursor-pointer"
                src={search}
                alt="search"
              />
            </div>
          </div>
          <div className="flex gap-6 text-main-color items-center">
            <div className="flex flex-col items-center hover: cursor-pointer">
              <Image src={heart} alt="like" />
              <span>Избранное</span>
            </div>
            <div className="flex flex-col items-center hover: cursor-pointer">
              <Image src={box} alt="box" />
              <span>Заказы</span>
            </div>
            <div className="flex flex-col items-center hover: cursor-pointer">
              <Image src={shop} alt="box" />
              <span>Корзина</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image src={avatar} alt="avatar" />
              <div>Алексей</div>
              <div>
                <Image src={arrowDown} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
