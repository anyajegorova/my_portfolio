import React from 'react';
import './styles/Projects.css';
import { useState, useRef } from 'react';
import { projects } from '../data/projects';


const Projects = ({ anchorRef, handleScroll }) => {

    const [currentProject, setCurrentProject] = useState(projects[0]);
    const imageRef = useRef(null);

    const handleClick = (project) => {
        setCurrentProject(project)
    }
    return (
        <section className='projects_section' ref={anchorRef}>
            <div className='navigation_wrapper'>
                {projects.map((project, index) => (
                    <div key={index} className='tab_container'>
                        <h2
                            className={currentProject?.name === project.name ? 'active' : ''}
                            onClick={() => handleClick(project)}>
                            {project.name}
                        </h2>
                    </div>
                ))}
            </div>
            <div className='mockup_wrapper' >
                {currentProject ?
                    (
                        <img src={currentProject.image}
                            alt={currentProject.name}
                            style={{
                                visibility: currentProject ? 'visible' : 'hidden',
                                cursor: currentProject.gitHubLink && 'pointer',
                            }}
                            ref={imageRef}
                            onClick={currentProject.gitHubLink ? (() => window.open(currentProject.gitHubLink)) : null}
                        ></img>
                    )
                    :
                    (<img src={SayIt}></img>)
                }
            </div>
            <div className='project_description_wrapper'>
                {currentProject ?
                    currentProject.description
                    : projects[0].description
                }

            </div>
            <button onClick={handleScroll}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="#33333"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                    </g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                        strokeLinejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M6 9L12 15L18 9"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                        </path>
                    </g>
                </svg>
            </button>
        </section>
    )
}

export default Projects;