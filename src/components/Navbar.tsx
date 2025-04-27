import React, { useContext, useState } from 'react';
import './styles/Navbar.css';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = ({ isVisible, handleAboutScroll, handleProjectScroll, handleContactScroll }) => {
    const { activeSection } = useContext(ActiveSectionContext);
    const { t } = useTranslation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`nav_link ${activeSection === 'about' ? 'active' : ''}`}>
                <Link to="/" className="logo" onClick={handleAboutScroll}>
                    {t('navbar.logo')}
                </Link>
            </div>
            <div className='nav_link_language_switcher_wrapper'>
                <div className="desktop-menu">
                    <div className={`nav_link ${activeSection === 'about' ? 'active' : ''}`}>
                        <Link to="/" className="nav-item" onClick={handleAboutScroll}>
                            {t('navbar.about')}
                        </Link>
                    </div>
                    <div className={`nav_link ${activeSection === 'projects' ? 'active' : ''}`}>
                        <Link to="/" className="nav-item" onClick={handleProjectScroll}>
                            {t('navbar.projects')}
                        </Link>
                    </div>
                    <div className={`nav_link ${activeSection === 'contact' ? 'active' : ''}`}>
                        <Link to="/" className="nav-item" onClick={handleContactScroll}>
                            {t('navbar.contact')}
                        </Link>
                    </div>
                </div>
                <div className='language_switcher_navigation'><LanguageSwitcher /></div>
                <div className="mobile-menu">
                    <button className="hamburger" onClick={toggleMobileMenu}>
                        ☰
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <MobileMenu
                        handleAboutScroll={handleAboutScroll}
                        handleProjectScroll={handleProjectScroll}
                        handleContactScroll={handleContactScroll}
                        closeMenu={toggleMobileMenu}                  />
                )}
            </div>

        </nav>
    );
};

export default Navbar;