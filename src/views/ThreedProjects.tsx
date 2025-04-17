import React from 'react'
import ThreeDView from '../components/ThreedView'
import './styles/ThreedProjects.css'

interface ThreeDProjectsProps {
    anchorRef: React.RefObject<HTMLElement>;
}



const ThreeDProjects: React.FC<ThreeDProjectsProps> = ({ anchorRef }) => {
    return (
        <section ref={anchorRef} id='threed' className='threed_section'>
            <div>
                <h1 className='projects_title'>3D Models</h1>
            </div>
            <ThreeDView />
        </section>
    )
}

export default ThreeDProjects
