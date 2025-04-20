import React from 'react'
import './styles/ProjectCard.css'
import CustomButton from './CustomButton'
import Reveal from '../reveal_components/Reveal'

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  technologies: string;
  gitHubLink?: string;
  liveLink?: string; // New optional prop for live link
  onImageClick: (image: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, description, technologies, gitHubLink, liveLink, onImageClick }) => {
  const handleImageClick = () => {
    onImageClick(image);
  };

  return (
    <div className='project_card'>
      <div className='project_image' onClick={handleImageClick}>
        <img src={image} alt={name} />
      </div>
      <div className='project_content'>
        <Reveal><h3 className='project_title'>{name}</h3></Reveal>
        <Reveal><p className='project_technologies'>{technologies}</p></Reveal>
        <Reveal><p className='project_description'>{description}</p></Reveal>
        {liveLink && (
          <Reveal>
            <a href={liveLink} className='project_link' target='_blank' rel='noopener noreferrer'>
              <CustomButton text="View Live" />
            </a>
          </Reveal>
        )}
        {gitHubLink && (
          <Reveal>
            <a href={gitHubLink} className='project_link' target='_blank' rel='noopener noreferrer'>
              <CustomButton text="View on GitHub" />
            </a>
          </Reveal>
        )}
      </div>
    </div>
  )
}

export default ProjectCard;
