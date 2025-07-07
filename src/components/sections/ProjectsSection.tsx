import { projects } from '@/contents/projects'
import Link from 'next/link'
import React from 'react'
import ProjectCard from '../ui/ProjectCard'

const ProjectsSection = () => { 

  return (
    <section id='projects' className='py-16 px-4 relative'>
      <div className='container mx-auto max-w-5xl backdrop-blur-xs text-center'>
        <h2 className='text-3xl md:text-4xl font-bold max-w-5xl mb-12'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          projects
          .filter(project => [0, 1, 5].includes(project.id))
          .map((project) => (
            <ProjectCard key={project.id} data={project} tagsHeight='h-24'/>
          ))
        }
        </div>
        <div className="m-6 flex justify-center">
          <Link href="/projects" className="cosmic-button">Explore Projects</Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection