import Image from 'next/image'
import React from 'react'

const AboutHeroSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className='container mx-auto max-w-5xl backdrop-blur-sm'>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Junior Developer - <span className='text-primary'>Lifelong Learner</span></h2>            
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch'>
          <p className="order-2 md:order-1 text-foreground/90 text-justify text-lg">
            Hey there! I&apos;m <span className='font-bold'>Muhammad Fa&apos;iz Alfarisi</span>, a Mathematics student at <span className='font-bold'>Universitas Negeri Malang</span>, currently navigating my final semester and crafting a future where tech meets impact. I love building ideas that matter—through <span className='font-bold'>clean backend architecture</span> and smart systems powered by <span className='font-bold'>Artificial Intelligence</span>. My learning journey revolves around designing scalable APIs, managing databases, and exploring machine learning models to solve real-world problems. With a mindset rooted in curiosity and problem-solving, I&apos;m excited to keep growing in these fields. <br/><br/><span className='italic'>What&apos;s next? Hopefully, being part of Indonesia&apos;s tech journey—helping it grow through code, care, and collaboration.</span>
          </p>
          <div className="order-1 md:order-2 flex gap-4 h-full min-h-[300px] md:min-h-full">
            {["/malaysia.jpg", "/bromo.jpg", "/lukisan.jpg"].map((src, i) => (
              <div key={i} className="relative w-full hover:w-4xl transition-all">
                <Image src={src} alt={`Fa'iz image ${i}`} fill className="object-cover rounded-md " />
              </div>
            ))}
          </div>
        </div>
      </div>
            
    </section>
  )
}

export default AboutHeroSection