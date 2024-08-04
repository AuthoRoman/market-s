import CardVacancies from '@/components/CardVacancies/CardVacancies'
import React from 'react'

const Vacancies = () => {
  return (
    <div className="m-[0_auto] max-w-[1208px] ">
    <div className="my-10">
      <div className="text-[64px] font-bold my-10">Вакансии</div>
       <div className='flex flex-wrap'>
        <CardVacancies/>

       </div>
    </div>
     
  </div>
  )
}

export default Vacancies