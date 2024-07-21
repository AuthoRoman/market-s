import React from 'react'
import logo from '@/assets/footer_img/logo_footer.svg'
import inst from '@/assets/footer_img/social/Inst.png'
import vk from '@/assets/footer_img/social/vk.png'
import facebook from '@/assets/footer_img/social/face.png'
import ok from '@/assets/footer_img/social/okss.png'
import icoPhone from '@/assets/footer_img/phone.png'
import Image from 'next/image'

const MyFooter = () => {
  return (
    <div className='bg-footer-bg w-full h-[126px] flex items-center py-6' > 
    <div className='m-auto w-[1208px] flex text-xs justify-between  items-center  '>
      
   
      <div className='flex gap-10 items-center   text-main-color  '>
        <Image
        width={64}
          src={logo}
          alt ='logo_footer'
        />
         <span>О компании</span>
         <span>Контакты</span>
         <span>Вакансии</span>
         <span>Статьи</span>
         <span>Политика обработки персональных данных</span>
      </div>
      <div className='flex gap-10'>
        <div className='flex gap-4 items-center'>
          <Image 
            src={inst}
            alt='instagram'
          /> 
        <Image
        src={vk}
        alt='vk'
        /> 
        <Image
        src={facebook}
        alt='facebook'
        /> 
        <Image
        src={ok}
        alt='oks'
        /> 

        </div>
        <div className='flex items-center gap-4'>
          <Image
          src={icoPhone}
          alt='phone number'
          />
          <span>8 800 777 33 33</span>
        </div>
      </div> 
      </div>
    </div>
  )
}

export default MyFooter