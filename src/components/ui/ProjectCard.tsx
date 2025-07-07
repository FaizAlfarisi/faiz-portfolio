import { cn } from '@/lib/utils'
import { ProjectCardProps } from '@/types'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SiGithub } from 'react-icons/si'

const ProjectCard = ({ data, imageHeight = "h-40", descriptionClamp = "line-clamp-5", tagsHeight} : ProjectCardProps) => {
  return (
    <div key={data.id} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
      <div className={cn('overflow-hidden', imageHeight)}>
        <Image src={data.image} alt={data.title} height={500} width={500} className='w-full h-full object-cover transition-transform duration-500 group--hover:scale 110:'/>
      </div>
      <div className='p-6'>
        <div className={tagsHeight}>
          <div className='flex flex-wrap gap-2 mb-4 justify-center'>
            {data.tags.map((tag, key) => (
              <span key={key} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-foreground/90'>{tag}</span>
            ))}
          </div>
        </div>
        <h3 className='text-xl font-bold mb-2'>{data.title}</h3>
        <p className={cn('line-clamp-3 text-foreground/90 text-md mb-4', 'md:', descriptionClamp)}>{data.description}</p>
        <div className='flex flex-col items-center'>
          <div>
            {data.githubLink && (
              <Link href={data.githubLink} target='_blank'>
                <SiGithub className='h-6 w-6 hover:text-primary transition-colors duration-300'/>
              </Link>
            )}
          </div>
          <div>
            {data.demoLink && (
              <Link href={data.demoLink} target='_blank'>
                <ExternalLinkIcon className='h-6 w-6 hover:text-primary transition-colors duration-300'/>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard