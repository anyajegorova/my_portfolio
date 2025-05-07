import React, { useContext, useEffect } from 'react';
import './styles/MobileMenu.css';
import { useTranslation } from 'react-i18next';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import { Link } from 'react-router-dom';

const MobileMenu = ({ navigateToSection, closeMenu }) => {
    const { t } = useTranslation();
    const { activeSection } = useContext(ActiveSectionContext);

    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
                <h3>
                    <button
                        onClick={() => navigateToSection('about')}
                        className={`nav-item-mobile ${activeSection === 'about' ? 'active' : ''}`}
                    >
                        {t('navbar.about')}
                    </button>
                </h3>
                <h3>
                    <button
                        onClick={() => navigateToSection('projects')}
                        className={`nav-item-mobile ${activeSection === 'projects' ? 'active' : ''}`}
                    >
                        {t('navbar.projects')}
                    </button>
                </h3>
                <h3>
                    <button
                        onClick={() => navigateToSection('contact')}
                        className={`nav-item-mobile ${activeSection === 'contact' ? 'active' : ''}`}
                    >
                        {t('navbar.contact')}
                    </button>
                </h3>
                <h3>
                    <Link
                        to="/privacy-policy"
                        onClick={closeMenu}
                        className={`nav-item-mobile ${activeSection === 'privacy-policy' ? 'active' : ''}`}
                    >
                        {t('navbar.privacyPolicy')}
                    </Link>
                </h3>
                <button className="close-button" onClick={closeMenu}>✕</button>
            </div>
        </div>
    );
};

export default MobileMenu;
