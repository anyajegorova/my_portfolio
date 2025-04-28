import React, { useContext, useEffect } from 'react';
import './styles/MobileMenu.css';
import { useTranslation } from 'react-i18next';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import { Link } from 'react-router-dom';

const MobileMenu = ({ handleAboutScroll, handleProjectScroll, handleContactScroll, closeMenu }) => {
    const { t } = useTranslation();
    const { activeSection } = useContext(ActiveSectionContext);

    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const handleClick = (scrollFunction) => {
        scrollFunction();
        closeMenu();
    };

    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
                <h3
                    className={activeSection === 'about' ? 'active' : ''}

                >
                    <Link to="/" className="nav-item" onClick={() => handleClick(handleAboutScroll)}>
                        {t('navbar.about')}
                    </Link>
                </h3>
                <h3
                    className={activeSection === 'projects' ? 'active' : ''}

                >
                    <Link to="/" className="nav-item" onClick={() => handleClick(handleProjectScroll)}>
                        {t('navbar.projects')}
                    </Link>
                </h3>
                <h3
                    className={activeSection === 'contact' ? 'active' : ''}
                >
                    <Link to="/" className="nav-item" onClick={() => handleClick(handleContactScroll)}>
                        {t('navbar.contact')}
                    </Link>
                </h3>
                <button className="close-button" onClick={closeMenu}>✕</button>
            </div>
        </div>
    );
};

export default MobileMenu;
