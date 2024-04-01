import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
 <section className=''>
  <div className='Getapp_bg'>
  <div className=''></div>
  <div className=' container mx-auto flex	'>
  <div className='get-app w-3/6'>
    <h2 className='text-6xl	font-bold text-white pt-20 pb-10 w-5/12		'>Get for free now!</h2>
    <p className='text-base	font-normal	text-white pb-10'>Available on iOS and Android</p>

  
  <div className='flex gap-5'>
    <Button variant='white' type='button' title='App Store' icon='/apple.svg'/>
    <Button variant='dark' type='button' title='Play Store' icon='/android.svg'/>

  </div>
  </div>
  <div className='w-3/6'>
    <Image src="/phones.png" alt='phone' width={550} height={598}/>

  </div>
  </div>
  </div>

 </section>
  )
}

export default GetApp