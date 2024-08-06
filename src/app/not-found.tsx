'use client' // Error components must be Client Components
 
import no_products from '@/assets/icons/no_products.png'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
 
 
 
  return (
    <div className='max-w-[1208px] m-auto my-10'>
        <div className='text-[24px] text-center'>
            В этом разделе нет продуктов, подходящие продукты Вы можете найти в нашем <Link href={'/catalog'}> <span className='text-[#70C05B]'>
             Каталоге </span> </Link>
        </div>
        <div className='flex justify-center w-full'>
            <Image width={400}  src={no_products} alt="Don't have products in this category"/>
        </div>
       
    </div>
  )
}