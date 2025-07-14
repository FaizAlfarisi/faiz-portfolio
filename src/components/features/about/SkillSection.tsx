import TechCard from '@/components/ui/TechCard'
import React from 'react'

const AboutSkillSection = () => {
  return (
    <section className='py-24 px-4 relative'>
      <div className='container max-w-5xl mx-auto backdrop-blur-sm'>
        <h2 className='text-primary text-3xl md:text-4xl font-bold text-center mb-12'>Skill&apos;s</h2>
        <TechCard/>
      </div>
    </section>
  )
}

export default AboutSkillSection