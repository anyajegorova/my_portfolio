import React, { useContext, useState } from 'react';
import './styles/Navbar.css';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isVisible, handleAboutScroll, handleProjectScroll, handleContactScroll }) => {
    const { activeSection } = useContext(ActiveSectionContext);
    const { t } = useTranslation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    const navigateToSection = (section: string) => {
        navigate('/', { state: { scrollTo: section } });
        setMobileMenuOpen(false); // ensure menu closes on mobile
    };

    return (
        <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`nav_link ${activeSection === 'about' ? 'active' : ''}`}>
                <button className="logo" onClick={() => navigateToSection('about')}>
                    {t('navbar.logo')}
                </button>
            </div>

            <div className='nav_link_language_switcher_wrapper'>
                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <div className={`nav_link ${activeSection === 'about' ? 'active' : ''}`}>
                        <button className="nav-item" onClick={() => navigateToSection('about')}>
                            {t('navbar.about')}
                        </button>
                    </div>
                    <div className={`nav_link ${activeSection === 'projects' ? 'active' : ''}`}>
                        <button className="nav-item" onClick={() => navigateToSection('projects')}>
                            {t('navbar.projects')}
                        </button>
                    </div>
                    <div className={`nav_link ${activeSection === 'contact' ? 'active' : ''}`}>
                        <button className="nav-item" onClick={() => navigateToSection('contact')}>
                            {t('navbar.contact')}
                        </button>
                    </div>
                </div>

                {/* Language Switcher */}
                <div className='language_switcher_navigation'>
                    <LanguageSwitcher />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-menu">
                    <button className="hamburger" onClick={toggleMobileMenu}>
                        ☰
                    </button>
                </div>

                {/* Mobile Menu Content */}
                {isMobileMenuOpen && (
                    <MobileMenu
                        navigateToSection={navigateToSection}
                        closeMenu={toggleMobileMenu}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
