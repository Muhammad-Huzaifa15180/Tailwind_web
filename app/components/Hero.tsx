import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
        <div className="flex justify-between  ">
            <div className='w-6/12 relative '>
                <Image src="/pattern-bg.png" alt='hero' height={5000} width={1000} className='absolute left-2/3'/>
        <div className=''>
           <Image src="/camp.svg" alt='camp' width={50} height={50}/>
           <h1 className='font-bold text-7xl w-9/12'>Putuk Truno Camp Area</h1>
           <p className='regular-16 mt-6 text-gray-30 w-9/12'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

        </div>
            <div className='flex  items-center gap-2 pt-10 pb-10'>
                {Array(5).fill(1).map((_, index) => (
                <Image src="\star.svg" alt='star' height={24} width={24} key={index}/>))}
                <p className='font-bold text-blue-70 text-xl'>198k <span className='font-normal text-xl	'>Excellent Reviews</span></p>
        </div>
        <div className='flex gap-5'>
           <Button variant='success' type='button' title='Download App'/>
           <Button variant='white' type='button' title='How we work?' icon='/play.svg'/>

        </div>
        </div>
        <div className='w-6/12	z-10	'>
        
        <div className="bg-stone-900 w-72 rounded-3xl px-7 py-8">
        <div className=' flex justify-between	'>
            <p className='text-neutral-400'>Location</p>
            <Image src="/close.svg" alt='close' width={24} height={24}/>
            </div>
            <p className='text-white font-bold'>Aguas Calientes</p>
            <div className='flex justify-between mt-5 '>
            <div className='text-neutral-400'>
                <p>Distance</p>
                <p className='text-white font-bold'>173.28 mi</p>
            </div>
            <div className='text-neutral-400'>
                <p>Elevation</p>
                <p className='text-white font-bold	'>173.28 mi</p>
            </div>
        </div>
        </div>
        </div>
        </div>

        

    </section>
  )
}

export default Hero