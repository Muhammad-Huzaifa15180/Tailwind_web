import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FOOTERCONTACT, FOOTERLINKS, SOCIALS } from '../constants'
import FooterColumn from './FooterColumn'
import { link } from 'fs'


const Footer = () => {
  return (
    <footer className=' container mx-auto mb-24 mt-24'>
      <div className='flex gap-40'>
        <Link href="/" className='mb-10'>
          <Image src="/hilink-logo.svg" width={74} height={29} alt='logo'/>
        </Link>
        <div className='flex gap-32 text-lg	font-bold'>
          {
            FOOTERLINKS.map((columns,index)=>(
              <FooterColumn
              key={index}
              title={columns.title}>
                <ul className='flex flex-col gap-4 font-normal text-sm text-zinc-600 mt-5'>
                  {
                    columns.links.map((links)=>(
                      <Link href="/" key={links}>{links}</Link>
                    ))
                  }
                </ul>
              </FooterColumn> 
            ))
          }
        

        </div>
        <div className=' text-lg	font-bold'>
          {
            FOOTERCONTACT.map((link)=>(
              <FooterColumn title={link.title}>
                <ul className='flex flex-col gap-4 font-normal text-sm text-zinc-600 mt-5'>
                  {
                    link.links.map((links)=>(
                      <Link href="/" key={links}>{links}</Link>

                    ))
                  }
                </ul>

              </FooterColumn>

            ))
          }
        </div>
        <div className='text-lg	font-bold'>
          {
            SOCIALS.map((link)=>(
              <FooterColumn title={link.title}> 
                <ul className='flex gap-2 mt-5'>
                  {
                    link.links.map((links)=>(
                      <Link href="/" key={links}>
                        <Image src="/links" width={24} alt='logo' height={24}/>
                      </Link>

                    ))
                  }
                </ul>

              </FooterColumn>

            ))
          }
        </div>

      </div>
      <div className=' border-t-2	 mt-9 '>
        <p className='text-sm	font-normaltext-zinc-600 text-center pt-10'>2023 Hilink | All rights reserved</p>

      </div>

    </footer>
  )
}

export default Footer