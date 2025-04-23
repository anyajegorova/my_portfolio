import React, { useContext, useState } from 'react';
import './styles/Navbar.css';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { useTranslation } from 'react-i18next';

const Navbar = ({ isVisible, handleAboutScroll, handleProjectScroll, handleContactScroll }) => {
    const { activeSection } = useContext(ActiveSectionContext);
    const { t } = useTranslation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
            <span className={`logo ${activeSection === 'about' ? 'active' : ''}`} onClick={handleAboutScroll}>
                {t('navbar.logo')}
            </span>
            <div className="desktop-menu">
                <h3 className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={handleAboutScroll}>
                    {t('navbar.about')}
                </h3>
                <h3 className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleProjectScroll}>
                    {t('navbar.projects')}
                </h3>
                <h3 className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleContactScroll}>
                    {t('navbar.contact')}
                </h3>
            </div>
            <h3><LanguageSwitcher /></h3>
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
                    closeMenu={toggleMobileMenu}
                />
            )}
        </nav>
    );
};

export default Navbar;