import React from 'react'
import Image from "next/image"
import { StaticImageData } from 'next/image'
interface Cardprops{
    imageSource: StaticImageData,
    description:string
}
const Flash = ({
    imageSource,
    description
}:Cardprops) => {
  return (
    <div id="container" className='p-5 flex flex-col justify-center place-items-center'>
     <div className='place-items-center'>
     <Image src={imageSource} width={300} alt ="Category" className='md:w-[30rem]' />
     </div>
     <div className='flex flex-row justify-between mx-5 place-items-center w-2/4'>
     <div>
     <h2 className='font-semibold text-sm md:text-xl mt-4 w-[15rem]'>{description}</h2>
     <p className='text-slate-500'>Buy Now!</p>
     </div>
      <div className='text-slate-500'>
        <p className='text-3xl mt-4'>&rarr;</p>
      </div>
     </div>
    </div>
  )
}

export default Flash