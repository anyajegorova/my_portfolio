import React from 'react';
import './styles/Projects2.css';
import { useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ anchorRef, handleScroll }) => {
    const imageRef = useRef(null);

    return (
        <section className='projects_section' ref={anchorRef}>
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
                        gitHubLink={project.gitHubLink}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;