import HeaderSection from "@/components/SectionOfBuy/HeaderSection/HeaderSection";
import Image from "next/image";
import React from "react";

import check from "@/assets/about_img/check.png";
import sms_sever from '@/assets/about_img/footer_sms.png';
import sms_sever_adaptive from '@/assets/about_img/footer_sms_336.png'
const About = () => {
  return (
    <>
      <div className='bg-[url("/images/back.png")] bg-no-repeat m-[0_auto] w-[1340px] my-[10px] max-[900px]:bg-[length:506px_220px] max-[900px]:max-w-[336px] max-[900px]:bg-right'>
        <div className="   h-[400.43px]   px-[124px] pt-[40px] bg-contain max-[900px]:px-[0] max-[900px]:pt-[0]">
          <div className="flex flex-col  gap-4 h-full max-w-[568px]">
            <span className="font-bold text-[64px] max-[900px]:text-[36px]">О компании</span>
            <span className="font-bold text-[#FF6633] text-[24px] max-[900px]:text-[14px]">
              Мы непрерывно развиваемся и {<br />} работаем над
              совершенствованием сервиса, заботимся о наших клиентах,{<br />}{" "}
              стремимся к лучшему будущему.
            </span>
          </div>
        </div>
      </div>
      <div className="m-[0_auto] w-[1208px] my-[120px] max-[900px]:max-w-[336px] max-[900px]:my-[0]">
        <div className="flex flex-wrap gap-[75.5px]">
         
            <div className="max-w-[257px] flex gap-[10px]">
              <div className="w-[64px]">
                <Image src={check} alt="checked" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[20px]">Мы занимаемся розничной торговлей</div>
                <div className="font-bold text-[24px]">Более 20 лет.</div>
              </div>
            
          </div>
          <div className="max-w-[365px]">
            <div className="flex gap-[10px]">
              <div className="w-[64px]">
                <Image src={check} alt="checked" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[20px]">Основная миссия компании</div>
                <div className="font-bold text-[24px]">Максимальное качество товаров и услуг по доступной цене.</div>
              </div>
            </div>
          </div>
          <div className="max-w-[475px] ">
            <div className="flex gap-[10px] ">
              <div className="w-[64px]">
                <Image  width={30} height={30} src={check} alt="checked" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[20px]">Отличительная черта нашей сети</div>
                <div className="font-bold text-[24px]">Здоровая и полезная продукция местного производства в наших магазинах.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[0_auto] w-[1208px] my-[80px] max-[900px]:max-w-[336px]">
        <div className="max-[900px]:hidden"><Image className="w-[1012px] m-[0_auto]" src={sms_sever} alt="hello from severyanochka"/></div>
        <div className="hidden max-[900px]:block"><Image width={116} height={195} className="w-[1012px] m-[0_auto]" src={sms_sever_adaptive} alt="hello from severyanochka"/></div>
         
      </div>
    </>
  );
};

export default About;
