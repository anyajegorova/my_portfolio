import React, { useContext } from 'react';
import './styles/Navbar.css';
import { ActiveSectionContext } from '../context/ActiveSectionContext';

const Navbar = ({ handleAboutScroll, handleProjectScroll, handleThreeDProjectsScroll, handleContactScroll }) => {
    const { activeSection } = useContext(ActiveSectionContext);

    return (
        <nav className='navigation'>
            <h3 className={`logo ${activeSection === 'about' ? 'active' : ''}`} onClick={handleAboutScroll}>ANNA JEGOROVA</h3>
            <h3 className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={handleAboutScroll}>About</h3>
            <h3 className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleProjectScroll}>Projects</h3>
            <h3 className={`nav-item ${activeSection === 'threed' ? 'active' : ''}`} onClick={handleThreeDProjectsScroll}>3D Models</h3>
            <h3 className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleContactScroll}>Contact</h3>
        </nav>
    )
}

export default Navbar;