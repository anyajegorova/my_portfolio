import './Projects.css';
import { useState, useRef } from 'react';
import SayIt from '../assets/MacBookPro16_mockup_sayit.png';
import GPT from '../assets/MacBookPro16_mockup_gpt.png';
import SpaceX from '../assets/MacBookPro16_mockup_spaceX.png';
import TastyBites from '../assets/MacBookPro16_mockup_tastybites.png';
import CatStore from '../assets/MacBookPro16_mockup_catstore.png';
import GymExercisePlanner from '../assets/MacBookPro16_mockup_gymexerciseplanner.png';


const Projects = ({ anchorRef, handleScroll }) => {

    const projects = [
        {
            name: 'SayIt!',
            image: SayIt,
            description: 'Responsive full-stack MERN chat-like web application. Register, create a topic, say something and like what other users say.',
            gitHubLink: 'https://github.com/anyajegorova/Sayit.git'
        },
        {
            name: 'Another ChatGPT',
            image: GPT,
            description: 'A web application design of ChatGPT using OpenAI API, ReactJS, NodeJS and Express. Chat with AI and get responses in real-time.',
            gitHubLink: 'https://github.com/anyajegorova/another_chatgpt.git'
        },
        {
            name: 'SpaceX Capsules',
            image: SpaceX,
            description: 'A web application using SpaceX API for mapping SpaceX capsules information into Ag-Grid-React table.',
            gitHubLink: 'https://github.com/anyajegorova/spaceX.git'
        },
        {
            name: 'Gym Exercise Planner',
            image: GymExercisePlanner,
            description: 'A full-stack application for planning gym exercises with Google authentication using Java Spring Boot and PostgreSQL database. Users can view exercises and add them to their workout plan. Admin can also delete exercises.',
            gitHubLink: 'https://github.com/anyajegorova/Gym_exercise_planner.git'
        },
        {
            name: 'TastyBites',
            image: TastyBites,
            description: 'A UI design for a recipe website using Figma'
        },
        {
            name: 'CatStore',
            image: CatStore,
            description: 'A UI design for a cat online store using Figma.'
        }
    ]
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