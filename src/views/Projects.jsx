import './Projects.css';
import { useState, useRef } from 'react';
import SayIt from '../assets/MacBookPro16_mockup_sayit.png';
import GPT from '../assets/MacBookPro16_mockup_gpt.png';
import SpaceX from '../assets/MacBookPro16_mockup_spaceX.png';
import TastyBites from '../assets/MacBookPro16_mockup_tastybites.png';
import CatStore from '../assets/MacBookPro16_mockup_catstore.png';

const Projects = () => {

    const projects = [
        {
            name: 'SayIt!',
            image: SayIt,
            description: 'Responsive full-stack MERN web application. Register, create a topic, say something and like what other users say.'
        },
        {
            name: 'Another ChatGPT',
            image: GPT,
            description: 'A web application design of ChatGPT using OpenAI API, ReactJS, NodeJS and Express. Chat with AI and get responses in real-time.'
        },
        {
            name: 'SpaceX Capsules',
            image: SpaceX,
            description: 'A web application using SpaceX API for mapping SpaceX capsules information into Ag-Grid-React table.'
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
        <section className='projects_section'>
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
            <div className='mockup_wrapper'>
                {currentProject ?
                    (
                        <img src={currentProject.image}
                            alt={currentProject.name}
                            style={{ visibility: currentProject ? 'visible' : 'hidden' }}
                            ref={imageRef}
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
        </section>
    )
}

export default Projects;