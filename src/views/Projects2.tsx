import React from 'react';
import './styles/Projects2.css';
import { useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
    anchorRef: React.RefObject<HTMLElement>;
    onImageClick: (image: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ anchorRef, onImageClick }) => {
    const imageRef = useRef(null);

    return (
        <section id="projects" className='projects_section' ref={anchorRef}>
            <div>
                <h1 className='projects_title'>Projects</h1>
            </div>
            <div className='project_card_container'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        technologies={project.technologies}
                        gitHubLink={project.gitHubLink}
                        onImageClick={onImageClick}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;