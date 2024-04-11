import './Navbar.css';

const Navbar = ({ handleScroll }) => {
    return (
        <nav className='navigation'>
            <h3 onClick={handleScroll}>Contact</h3>
        </nav>
    )
}

export default Navbar;