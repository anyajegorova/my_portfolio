import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ handleScroll }) => {
    return (
        <nav className='navigation'>
            <h3 className='logo'>ANNA JEGOROVA</h3>
            <h3 onClick={handleScroll}>About</h3>
            <h3 onClick={handleScroll}>Projects</h3>
            <h3 onClick={handleScroll}>Services</h3>
            <h3 onClick={handleScroll}>Contact</h3>
        </nav>
    )
}

export default Navbar;