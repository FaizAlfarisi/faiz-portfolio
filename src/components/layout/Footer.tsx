import Link from 'next/link'
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="container max-w-screen mx-auto px-4 py-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className='text-xl font-bold text-primary'>Alfarisi&trade;</Link>
          <p className='text-sm text-foreground mt-2'>© {new Date().getFullYear()} Alfarisi. All rights reserved.</p>
        </div>
        <div className='w-xl'></div>
        <div className='flex space-x-6'>
          <Link href="/" className='text-xl hover:text-primary transition-colors duration-300'>
            <SiGithub/>
          </Link>
          <Link href="/" className='text-xl hover:text-primary transition-colors duration-300'>
            <SiLinkedin/>
          </Link>
          <Link href="/" className='text-xl hover:text-primary transition-colors duration-300'>
            <SiInstagram/>
          </Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer