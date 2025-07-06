import { projects } from '@/contents/projects'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SiGithub } from 'react-icons/si'

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
            <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='overflow-hidden h-42'>
                <Image src={project.image} alt={project.title} height={500} width={500} className='w-full h-full object-cover transition-transform duration-500 group--hover:scale 110:'/>
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4 justify-center'>
                  {project.tags.map((tag, key) => (
                    <span key={key} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-foreground/90'>{tag}</span>
                  ))}
                </div>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='line-clamp-5 text-foreground/90 text-md mb-4'>{project.description}</p>
                <div className='flex flex-col items-center'>
                  <div>
                    {project.githubLink && (
                      <Link href={project.githubLink} target='_blank'>
                        <SiGithub className='h-6 w-6 hover:text-primary transition-colors duration-300'/>
                      </Link>
                    )}
                  </div>
                  <div>
                    {project.demoLink && (
                      <Link href={project.demoLink} target='_blank'>
                        <ExternalLinkIcon className='h-6 w-6 hover:text-primary transition-colors duration-300'/>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        </div>
        <div className="m-6 flex justify-center">
          <Link href="#projects" className="cosmic-button">Explore Projects</Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection