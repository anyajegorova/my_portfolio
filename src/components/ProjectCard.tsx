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
  onImageClick: (image: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, description, technologies, gitHubLink, onImageClick }) => {
  const handleImageClick = () => {
    onImageClick(image);
  };

  return (
    <div className='project_card'>
      <div className='project_image' onClick={handleImageClick}>
        <img src={image} alt={name} />
      </div>
      <div className='project_content'>
        <Reveal> <h3 className='project_title'>{name}</h3></Reveal>
        <Reveal> <p className='project_description'>{description}</p></Reveal>
        <Reveal> <p className='project_technologies'>({technologies})</p></Reveal>
        {gitHubLink && (
          <a href={gitHubLink} className='project_link' target='_blank' rel='noopener noreferrer'>
            <CustomButton text="View on GitHub" />
          </a>
        )}
      </div>
    </div>

  )
}

export default ProjectCard;
