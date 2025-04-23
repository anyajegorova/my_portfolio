import React from 'react'
import './styles/ProjectCard.css'
import CustomButtonPlain from './CustomButtonPlain'
import Reveal from '../reveal_components/Reveal'

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  technologies: string;
  gitHubLink?: string;
  liveLink?: string;
  onImageClick: (image: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, description, technologies, gitHubLink, liveLink, onImageClick }) => {
  const handleImageClick = () => {
    onImageClick(image);
  };

  return (
    <div className='project_card'>
      <div className='project_image' onClick={handleImageClick}>
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className='project_content'>
        <Reveal delayOrder={1}><h3 className='project_title'>{name}</h3></Reveal>
        <Reveal delayOrder={2}><p className='project_technologies'>{technologies}</p></Reveal>
        <Reveal delayOrder={3}><p className='project_description'>{description}</p></Reveal>
        {liveLink && (
          <Reveal delayOrder={4}>
            <a href={liveLink} className='project_link' target='_blank' rel='noopener noreferrer'>
              <CustomButtonPlain text="View Live" />
            </a>
          </Reveal>
        )}
        {gitHubLink && (
          <Reveal delayOrder={4}>
            <a href={gitHubLink} className='project_link' target='_blank' rel='noopener noreferrer'>
              <CustomButtonPlain text="View on GitHub" />
            </a>
          </Reveal>
        )}
      </div>
    </div>
  )
}

export default ProjectCard;
