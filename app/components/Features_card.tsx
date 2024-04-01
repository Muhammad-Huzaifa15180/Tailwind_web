import Image from 'next/image';
import React from 'react'


interface Features_card_Props{
    title: string;
    icon:string;
    description:string;
}


const FeaturesCard = ({title,icon,description}:Features_card_Props) => {
  return (
    <li>
        <Image className='bg-green-500 rounded-full p-4 w-[25%]	' src={icon} width={28} height={28} alt='icon'/>
        <h2 className='text-3xl font-bold w-[85%]	 pt-5 pb-5' >{title}</h2>
        <p className='text-base	 text-neutral-400	w-11/12 '>{description}</p>

    </li>
  )
}

export default FeaturesCard