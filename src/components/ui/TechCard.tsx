import Image from 'next/image'
import React from 'react'

const TechCard = () => {
  return (
    <div>
      <Image src="/technologies/html.svg" alt='html' width={100} height={100} className='w-xl h-xl'/>
    </div>
  )
}

export default TechCard