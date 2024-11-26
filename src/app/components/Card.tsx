import React from 'react'
import { StaticImageData } from 'next/image'
import Image from "next/image"
import arrow from "../Arrow 3.png"
interface Cardprops{
    imageSource:StaticImageData,

    product: string,
}

const Card = ({
    imageSource,
    product
}:Cardprops) => {
  return (
    <div id='card-container' className='sm:place-items center'>
        <Image src= {imageSource} alt='{description}'/>
        <div id="descript" className='mt-3 flex flex-row justify-between'>
           <div>
           <h2 className='font-medium text-lg'>{product}</h2>
           <p className='text-slate-500 font-medium'>Explore Now!</p>
           </div>
            <div className='text-slate-500 text-3xl'>
             <p>&rarr;</p>
            </div>
        </div>
    </div>
  )
}

export default Card