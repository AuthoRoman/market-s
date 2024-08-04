import React from 'react'
import logo from '@/assets/footer_img/logo_footer.svg'
import inst from '@/assets/footer_img/social/Inst.png'
import vk from '@/assets/footer_img/social/vk.png'
import facebook from '@/assets/footer_img/social/face.png'
import ok from '@/assets/footer_img/social/okss.png'
import icoPhone from '@/assets/footer_img/phone.png'
import Image from 'next/image'
import Link from 'next/link'

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
         <Link href={'/about'}><span className='cursor-pointer hover:text-[#FF6633]'>О компании</span></Link>
         <Link href={'/contacts'}><span className='cursor-pointer hover:text-[#FF6633]'>Контакты</span></Link>
         <Link href={'/vacancies'}><span className='cursor-pointer hover:text-[#FF6633]'>Вакансии</span></Link>
         <Link href={'/articles'}><span className='cursor-pointer hover:text-[#FF6633]'>Статьи</span></Link>
         <span className='cursor-pointer hover:text-[#FF6633]'>Политика обработки персональных данных</span>
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