import React from 'react';
import './styles/Projects2.css';
import { useRef } from 'react';

const Projects = ({ anchorRef, handleScroll }) => {
    const imageRef = useRef(null);

    return (
        <section className='projects_section' ref={anchorRef}>
            <div>
                <h1>Projects</h1>
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