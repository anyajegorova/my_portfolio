import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ handleAboutScroll, handleProjectScroll, handleContactScroll }) => {
    return (
        <nav className='navigation'>
            <h3 className='logo' onClick={handleAboutScroll}>ANNA JEGOROVA</h3>
            <h3 className='nav-item' onClick={handleAboutScroll}>About</h3>
            <h3 className='nav-item' onClick={handleProjectScroll}>Projects</h3>
            <h3 className='nav-item' onClick={handleContactScroll}>Contact</h3>
        </nav>
    )
}

export default Navbar;