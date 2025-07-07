import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/contents/projects'
import Link from 'next/link'
import React from 'react'

const ProjectsPage = () => {
  return (
    <section id='projects' className='py-16 px-4 relative flex flex-col'>
      <div className='container mx-auto max-w-5xl backdrop-blur-xs text-center'>
        <h2 className='text-3xl md:text-4xl font-bold max-w-5xl mb-12'>
          My <span className='text-primary'>Projects</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {
          projects
          .map((project) => (
            <ProjectCard data={project} key={project.id} imageHeight="h-60" descriptionClamp="line-clamp-none" tagsHeight='h-26 md:h-18'/>
          ))
        }
        </div>
      </div>
      <div className='text-center m-6 p-4'>
        <Link href="/" className='cosmic-button'>Home</Link>
      </div>
    </section>
  )
}

export default ProjectsPage