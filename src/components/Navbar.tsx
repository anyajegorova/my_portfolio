import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ handleScroll }) => {
    return (
        <nav className='navigation'>
            <h3 className='logo'>ANNA JEGOROVA</h3>
            <h3 className='nav-item' onClick={handleScroll}>About</h3>
            <h3 className='nav-item' onClick={handleScroll}>Projects</h3>
            <h3 className='nav-item' onClick={handleScroll}>Services</h3>
            <h3 className='nav-item' onClick={handleScroll}>Contact</h3>
        </nav>
    )
}

export default Navbar;