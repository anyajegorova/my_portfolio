import React from 'react';
import './styles/Projects2.css';
import { useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
    anchorRef?: React.RefObject<HTMLElement>;
    onImageClick: (image: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onImageClick }) => {
    const { t } = useTranslation();
    const imageRef = useRef(null);

    return (
        <section className='projects_section' >
            <div>
                <h1 className='projects_title'>{t('projects.title')}</h1>
            </div>
            <div className='project_card_container'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        technologies={project.technologies}
                        liveLink={project.liveLink} 
                        onImageClick={onImageClick}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;