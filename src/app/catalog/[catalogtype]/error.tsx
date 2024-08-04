'use client' // Error components must be Client Components
 
import no_products from '@/assets/icons/no_products.png'
import Image from 'next/image'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
 
  return (
    <div className='max-w-[1208px] m-auto my-10'>
        <div className='text-[24px] text-center'>
            В этом разделе каталога нет продуктов, приносим свои извинения
        </div>
        <div className='flex justify-center w-full'>
            <Image width={400}  src={no_products} alt="Don't have products in this category"/>
        </div>
       
    </div>
  )
}