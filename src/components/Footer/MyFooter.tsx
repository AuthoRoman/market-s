import React from "react";
import logo from "@/assets/footer_img/logo_footer.svg";
import inst from "@/assets/footer_img/social/Inst.png";
import vk from "@/assets/footer_img/social/vk.png";
import facebook from "@/assets/footer_img/social/face.png";
import ok from "@/assets/footer_img/social/okss.png";
import icoPhone from "@/assets/footer_img/phone.png";
import Image from "next/image";
import Link from "next/link";

const MyFooter = () => {
  return (
    <div className="bg-footer-bg w-full h-[126px] flex  py-6 max-[900px]:h-[232px] max-[900px]:py-[40px]">
      <div className="m-[0_auto] w-[1208px] flex text-xs justify-between  max-[1208px]:max-w-[736px]  max-[900px]:max-w-[304px] max-[900px]:relative ">
        <div className="flex   gap-10 max-w-[739px]      text-main-color   max-[1208px]:max-w-[415px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6  ">
          <Image width={64} src={logo} alt="logo_footer" />
          <div className="grid grid-cols-7 gap-[8px_0px] justify-center items-center w-[645px] text-[12px] max-[1208px]:grid-cols-3 max-[900px]:grid-cols-4 max-[900px]:max-w-[304px]">
            <Link
              className="m-[0px]  grid-cols-subgrid gap-4 col-span-1 text-start"
              href={"/about"}
            >
              <span className="cursor-pointer hover:text-[#FF6633] col-start-1 ">
                О компании
              </span>
            </Link>
            <Link href={"/contacts"}>
              <span className="cursor-pointer hover:text-[#FF6633]">
                Контакты
              </span>
            </Link>
            <Link href={"/vacancies"}>
              <span className="cursor-pointer hover:text-[#FF6633]">
                Вакансии
              </span>
            </Link>
            <Link
              href={"/articles"}
              className="m-[0px] grid  grid-cols-subgrid gap-4 col-span-1 text-start"
            >
              <span className="cursor-pointer hover:text-[#FF6633] col-start-1">
                Статьи
              </span>
            </Link>
            <div className=" m-[0px]  grid-cols-subgrid gap-4 col-span-3 text-start max-[1208px]:grid max-[1208px]:col-span-2 max-[900px]:col-span-4">
              <span className="cursor-pointer hover:text-[#FF6633]  col-start-5  w-full text-start  max-[1208px]:col-start-1  max-[1208px]:col-span-2 max-[900px]:col-start-1 max-[900px]:col-span-4">
                Политика обработки персональных данных
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-10 max-[1208px]:gap-6 max-[900px]:flex-col max-[900px]:absolute max-[900px]:top-0 max-[900px]:right-0 max-[900px]:gap-4">
          <div className="grid grid-cols-4 gap-4 items-center max-[1208px]:grid-cols-2 max-[900px]:grid-cols-4">
            <Image src={inst} alt="instagram" />
            <Image src={vk} alt="vk" />
            <Image src={facebook} alt="facebook" />
            <div className=" w-5 flex justify-center">
              <Image src={ok} alt="oks" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src={icoPhone} alt="phone number" />
            <span className="text-4">8 800 777 33 33</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
