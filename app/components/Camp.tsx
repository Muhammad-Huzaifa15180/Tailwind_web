import Image from 'next/image';
import React from 'react'

interface CampProps{
  title:string;
  subtitle:string;
  

}

const Campsite =({title,subtitle}:CampProps) => {
  return(
    <div className={'relative z-10'}>
      <h4 className='text-white font-bold'>{title}</h4>
      <h3 className='text-white '>{subtitle}</h3>
     
    </div>
  )
  
}

const Camp = () => {
  return (
    <section className=''>
      <Image src="/img-1.png" alt='close' width={1440} height={500} className="bg-cover bg-center w-full rounded-tr-3xl h-fit"/>
      <div className=' flex  w-full justify-start gap-8 absolute top-[730px] left-[40px]'>
        <div className='rounded-full	 bg-green-500 p-4  z-10 '>
          <Image src="/folded-map.svg" alt='map' width={30} height={5}/>
          

        </div>
        <Campsite
        title='Putuk Truno Camp'
        subtitle='Prigen, Pasuruan'
        />
       </div>
       <div className='bg-green-500 max-w-[500px] rounded-3xl absolute right-[10%] top-[1330px] p-8 '>
        <h2 className='text-3xl text-white'>Feeling Lost And Not Knowing The Way?</h2>
        <p className='text-base text-white pt-5'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>

       </div>
     
      
    
     

    </section>
  )
}

export default Camp